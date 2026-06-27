/**
 * compress-blog-svgs.js
 * ---------------------------------------------------------------------------
 * Shrinks the oversized blog banner SVGs in public/images/blogs/.
 *
 * THE PROBLEM
 *   Each "SVG" in that folder is really a thin SVG wrapper around ONE giant
 *   base64-embedded PNG. The PNGs were exported at ~2752x1536 and 7-11 MB
 *   each, even though they only ever display at 1200x630. Total folder size
 *   is ~163 MB, which is why blog images crawl in on slow connections.
 *
 * THE FIX
 *   For every *.svg here, decode the embedded raster, resize it to a sane
 *   retina size (max 2400px wide), re-encode it as a high-quality JPEG, and
 *   rewrite the base64 back into the SAME .svg file. Filenames never change,
 *   so every blog.image reference in the database stays valid - nothing to
 *   touch DB-side, nothing to redeploy beyond pushing the lighter files.
 *
 *   Typical result: ~10 MB  ->  ~0.3 MB  (about 97% smaller) with no visible
 *   quality loss at the size these banners actually render.
 *
 * HOW TO RUN
 *   1. Preview first (no files changed):   node scripts/compress-blog-svgs.js --dry-run
 *   2. Apply for real:                     node scripts/compress-blog-svgs.js
 *
 * SAFETY
 *   - Every original file is copied to public/images/blogs/_backup-<timestamp>/
 *     before it is overwritten, so you can revert by copying them back.
 *   - A file is only rewritten if the new version is actually smaller.
 *   - Idempotent-ish: re-running just re-compresses an already-small image,
 *     which barely changes it. Safe to run again.
 *
 * REQUIREMENTS
 *   - Node 18+ and the `sharp` package (already in this project's
 *     devDependencies / node_modules). If missing:  npm install sharp
 * ---------------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

// ---- Tunables -------------------------------------------------------------
const MAX_WIDTH = 2400;     // 2x the 1200px display width => crisp on retina
const MAX_HEIGHT = 1260;    // 2x of 630
const JPEG_QUALITY = 82;    // 80-85 is the sweet spot for photographic banners
const MIN_BYTES = 400 * 1024; // skip files already under ~400KB (nothing to gain)
// ---------------------------------------------------------------------------

const DRY_RUN = process.argv.includes('--dry-run');

// Resolve the blogs image folder relative to THIS script, so it works no
// matter where the repo lives (fixes the hardcoded path in the old script).
const IMG_DIR = path.resolve(__dirname, '..', 'public', 'images', 'blogs');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('\n[!] Could not load "sharp". Install it first:\n    npm install sharp\n');
  process.exit(1);
}

const fmtMB = (b) => (b / 1024 / 1024).toFixed(2) + ' MB';
const RASTER_RE = /data:image\/(png|jpe?g|webp);base64,([A-Za-z0-9+/=]+)/;

async function main() {
  if (!fs.existsSync(IMG_DIR)) {
    console.error('[!] Image folder not found: ' + IMG_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(IMG_DIR).filter((f) => f.toLowerCase().endsWith('.svg'));
  if (!files.length) {
    console.log('No .svg files found in ' + IMG_DIR);
    return;
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(IMG_DIR, '_backup-' + stamp);

  console.log('\n  Folder : ' + IMG_DIR);
  console.log('  Mode   : ' + (DRY_RUN ? 'DRY RUN (no files will change)' : 'APPLYING CHANGES'));
  if (!DRY_RUN) console.log('  Backup : ' + backupDir);
  console.log('  Files  : ' + files.length + '\n');

  let totalBefore = 0, totalAfter = 0, changed = 0, skipped = 0;

  for (const file of files) {
    const full = path.join(IMG_DIR, file);
    const before = fs.statSync(full).size;
    totalBefore += before;

    if (before < MIN_BYTES) {
      console.log('  -  skip (already small) ' + file + '  ' + fmtMB(before));
      totalAfter += before;
      skipped++;
      continue;
    }

    const svg = fs.readFileSync(full, 'utf8');
    const m = svg.match(RASTER_RE);
    if (!m) {
      console.log('  -  skip (no embedded raster) ' + file);
      totalAfter += before;
      skipped++;
      continue;
    }

    const raster = Buffer.from(m[2], 'base64');
    let jpeg;
    try {
      jpeg = await sharp(raster)
        .resize(MAX_WIDTH, MAX_HEIGHT, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer();
    } catch (e) {
      console.log('  !  failed to process ' + file + ': ' + e.message);
      totalAfter += before;
      skipped++;
      continue;
    }

    const newDataUri = 'data:image/jpeg;base64,' + jpeg.toString('base64');
    const newSvg = svg.replace(RASTER_RE, newDataUri);
    const after = Buffer.byteLength(newSvg, 'utf8');

    if (after >= before) {
      console.log('  -  skip (no gain) ' + file + '  ' + fmtMB(before));
      totalAfter += before;
      skipped++;
      continue;
    }

    const pct = (100 * (1 - after / before)).toFixed(1);
    console.log('  *  ' + file + '  ' + fmtMB(before) + '  ->  ' + fmtMB(after) + '  (-' + pct + '%)');
    totalAfter += after;
    changed++;

    if (!DRY_RUN) {
      if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });
      fs.copyFileSync(full, path.join(backupDir, file));
      fs.writeFileSync(full, newSvg, 'utf8');
    }
  }

  console.log('\n  ----------------------------------------------------------');
  console.log('  Files rewritten : ' + changed + '   skipped : ' + skipped);
  console.log('  Total before    : ' + fmtMB(totalBefore));
  console.log('  Total after     : ' + fmtMB(totalAfter) +
    '   (saved ' + fmtMB(totalBefore - totalAfter) +
    ', -' + (totalBefore ? (100 * (1 - totalAfter / totalBefore)).toFixed(1) : 0) + '%)');
  if (DRY_RUN) {
    console.log('\n  This was a DRY RUN. Re-run without --dry-run to apply.');
  } else {
    console.log('\n  Done. Originals saved in ' + path.basename(backupDir) +
      '. Commit & deploy the lighter files.');
    console.log('  (You can delete the _backup-* folder once you have verified the images look fine.)');
  }
  console.log('');
}

main().catch((e) => { console.error(e); process.exit(1); });
