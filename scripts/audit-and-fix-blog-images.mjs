#!/usr/bin/env node
/**
 * scripts/audit-and-fix-blog-images.mjs
 * ---------------------------------------------------------------------------
 * Why this script exists
 * ----------------------
 *  The DB has rows whose `image` column points at /images/blog/...   (singular)
 *  but the actual files live in        /public/images/blogs/...      (plural).
 *  Result: those blog cards / detail pages render with no image.
 *
 *  This script:
 *    1. Connects to the Neon DB using DATABASE_URL from .env.local
 *    2. For every blog row, checks whether the `image` file actually exists
 *       under /public.
 *    3. Builds a proposed fix:
 *         • /images/blog/X   → /images/blogs/X         (singular → plural)
 *         • If still missing, picks the closest filename in /public/images/blogs/
 *           by token overlap with the blog slug; falls back to a category default.
 *    4. Prints a clear per-row report.
 *    5. With --apply, runs the UPDATE statements. Without it, dry-run only.
 *
 * Usage
 * -----
 *   Dry run (default — no DB writes):
 *     node scripts/audit-and-fix-blog-images.mjs
 *
 *   Apply fixes:
 *     node scripts/audit-and-fix-blog-images.mjs --apply
 *
 *   Also re-set images that already resolve, but seem mismatched (advanced):
 *     node scripts/audit-and-fix-blog-images.mjs --apply --strict
 * ---------------------------------------------------------------------------
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BLOGS_IMG_DIR = path.join(PUBLIC_DIR, 'images', 'blogs');

// ── Load DATABASE_URL from .env.local if not set ──
function loadEnv() {
  if (process.env.DATABASE_URL) return;
  const file = path.join(ROOT, '.env.local');
  if (!fs.existsSync(file)) return;
  for (const raw of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = value;
  }
}
loadEnv();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not set — check .env.local');
  process.exit(1);
}

const APPLY = process.argv.includes('--apply');
const STRICT = process.argv.includes('--strict');

const sql = neon(process.env.DATABASE_URL);

// ── Build inventory of existing image files ──
function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => /\.(svg|png|jpe?g|webp|avif|gif)$/i.test(f));
}
const blogsImgFiles = listImages(BLOGS_IMG_DIR); // e.g. ["nextjs-2026-features-updates.svg", ...]

function fileExistsForUrl(imgUrl) {
  if (!imgUrl) return false;
  // Decode URL-encoded characters (e.g. %20 → space) so we can resolve the actual file
  const decoded = decodeURIComponent(imgUrl);
  // Strip leading slash and resolve under /public
  const rel = decoded.startsWith('/') ? decoded.slice(1) : decoded;
  return fs.existsSync(path.join(PUBLIC_DIR, rel));
}

// ── Token overlap scoring for fuzzy file picking ──
function tokenize(s) {
  return String(s)
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '') // drop extension
    .replace(/[^a-z0-9]+/g, ' ')
    .split(' ')
    .filter((t) => t && t.length > 2);
}

function bestMatchFile(slug, title, category) {
  const queryTokens = new Set([
    ...tokenize(slug),
    ...tokenize(title || ''),
    ...tokenize(category || ''),
  ]);

  let best = null;
  let bestScore = 0;
  for (const f of blogsImgFiles) {
    const fileTokens = tokenize(f);
    let score = 0;
    for (const t of fileTokens) if (queryTokens.has(t)) score++;
    if (score > bestScore) {
      bestScore = score;
      best = f;
    }
  }
  return bestScore >= 2 ? best : null; // require at least 2-token overlap
}

const CATEGORY_FALLBACKS = {
  'AI & Automation': 'ai-app-development-guide.svg',
  'Mobile App': 'mobile-app-development-cost-india.svg',
  'Mobile': 'mobile-app-development-cost-india.svg',
  'Web Development': 'custom-web-application-development.svg',
  'Web': 'custom-web-application-development.svg',
  'SaaS': 'how-to-build-a-saas-product-from-scratch.svg',
  'Ecommerce': 'ecommerce-app-development-cost-india.svg',
  'Cloud & DevOps': 'awsmicroservices.png',
  'Digital Transformation': 'digital_transformation.png',
};

function categoryFallback(category) {
  const f = CATEGORY_FALLBACKS[category];
  if (f && blogsImgFiles.includes(f)) return `/images/blogs/${f}`;
  return null;
}

function proposeFix(row) {
  const original = row.image || '';

  // Step 1: singular → plural path correction (the most common bug)
  if (original.startsWith('/images/blog/')) {
    const candidate = original.replace('/images/blog/', '/images/blogs/');
    if (fileExistsForUrl(candidate)) return { newImage: candidate, reason: 'singular→plural path fix' };
  }

  // Step 2: file already resolves → leave it alone (unless --strict)
  if (fileExistsForUrl(original) && !STRICT) {
    return null;
  }

  // Step 3: fuzzy-match against existing files in /images/blogs/
  const matched = bestMatchFile(row.slug, row.title, row.category);
  if (matched) {
    return { newImage: `/images/blogs/${matched}`, reason: `fuzzy match by slug/title tokens → ${matched}` };
  }

  // Step 4: category fallback
  const fallback = categoryFallback(row.category);
  if (fallback) return { newImage: fallback, reason: `category fallback (${row.category})` };

  // Last-resort: site default
  return { newImage: '/images/Light.png', reason: 'no match — site default' };
}

(async () => {
  console.log(`\n🔎 Auditing blog images  (mode: ${APPLY ? 'APPLY' : 'DRY-RUN'}${STRICT ? ', STRICT' : ''})\n`);
  console.log(`   /public/images/blogs/ has ${blogsImgFiles.length} image files`);

  const rows = await sql`
    SELECT id, slug, title, category, image, og_image
    FROM blogs
    WHERE published = true OR status = 'published'
    ORDER BY COALESCE(publish_date, created_at) DESC
  `;
  console.log(`   ${rows.length} published blogs in DB\n`);

  const fixes = [];
  let okCount = 0;
  for (const row of rows) {
    const fix = proposeFix(row);
    if (!fix) {
      okCount++;
      continue;
    }
    fixes.push({ row, fix });
  }

  console.log(`   ✅ ${okCount} rows already point to existing files`);
  console.log(`   🔧 ${fixes.length} rows need an image fix\n`);

  if (fixes.length === 0) {
    console.log('Nothing to do. Bye.\n');
    return;
  }

  console.log('── Proposed fixes ───────────────────────────────────');
  for (const { row, fix } of fixes) {
    console.log(`  • ${row.slug}`);
    console.log(`      from: ${row.image || '(empty)'}`);
    console.log(`      to  : ${fix.newImage}`);
    console.log(`      why : ${fix.reason}\n`);
  }

  if (!APPLY) {
    console.log('ℹ️  This was a DRY RUN. Re-run with --apply to write the changes.\n');
    return;
  }

  // ── Apply ──
  let applied = 0;
  for (const { row, fix } of fixes) {
    try {
      // Also fix og_image if it shared the broken path
      const newOg =
        row.og_image && row.og_image.startsWith('/images/blog/')
          ? row.og_image.replace('/images/blog/', '/images/blogs/')
          : row.og_image && !fileExistsForUrl(row.og_image)
          ? fix.newImage
          : row.og_image;

      // ⭐ Do NOT touch updated_at here. This script only repairs broken image
      //    file paths — it is not a content edit. If we set updated_at = NOW()
      //    every old blog whose image we fix would suddenly show "Last Updated:
      //    today" on the /blog listing, hiding its real publish date.
      await sql`
        UPDATE blogs
        SET image = ${fix.newImage},
            og_image = ${newOg || fix.newImage}
        WHERE id = ${row.id}
      `;
      applied++;
      console.log(`✅ updated  ${row.slug}`);
    } catch (e) {
      console.error(`❌ failed   ${row.slug}: ${e.message}`);
    }
  }

  console.log(`\n── Done. ${applied}/${fixes.length} rows updated. ──\n`);
})().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
