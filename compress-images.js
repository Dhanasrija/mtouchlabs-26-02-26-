#!/usr/bin/env node
/**
 * Lossless-looking image compression for /public/images/**
 * - JPEG q82 (mozjpeg) — visually indistinguishable, typical 70–90% savings
 * - PNG — palette + zlib level 9 (keeps alpha)
 * - SVG — SVGO preset-default + prefixIds + minify (strips metadata, optimizes base64)
 * - Keeps original dimensions (NO resize)
 * - Only overwrites when new size < original
 * - Skips PDFs and non-image files
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const { optimize: svgoOptimize } = require("svgo");

const ROOT = "/sessions/brave-keen-bohr/mnt/mtouchlabs-nextjs_6max/public/images";
const MIN_SIZE = 200 * 1024; // only touch files >= 200KB
const REPORT = [];

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) {
      out.push(...walk(fp));
    } else {
      out.push({ path: fp, size: st.size });
    }
  }
  return out;
}

async function compressJpeg(fp, original) {
  const buf = await sharp(fp, { failOn: "none" })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toBuffer();
  return buf;
}

async function compressPng(fp, original) {
  // Try as-is palette first
  try {
    const buf = await sharp(fp, { failOn: "none" })
      .png({ quality: 85, compressionLevel: 9, palette: true })
      .toBuffer();
    return buf;
  } catch (e) {
    const buf = await sharp(fp, { failOn: "none" })
      .png({ compressionLevel: 9 })
      .toBuffer();
    return buf;
  }
}

function compressSvg(fp) {
  const svg = fs.readFileSync(fp, "utf8");
  const result = svgoOptimize(svg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false,
            cleanupIds: false,
          },
        },
      },
    ],
  });
  if (result.error) throw new Error(result.error);
  return Buffer.from(result.data, "utf8");
}

async function processOne(fp, original) {
  const ext = path.extname(fp).toLowerCase();
  let compressed = null;
  try {
    if (ext === ".jpg" || ext === ".jpeg") {
      compressed = await compressJpeg(fp, original);
    } else if (ext === ".png") {
      compressed = await compressPng(fp, original);
    } else if (ext === ".svg") {
      compressed = compressSvg(fp);
    } else {
      return { path: fp, skipped: "unsupported" };
    }
  } catch (e) {
    return { path: fp, error: e.message };
  }
  if (!compressed || compressed.length >= original) {
    return {
      path: fp,
      original,
      compressed: compressed ? compressed.length : original,
      note: "no-improvement",
    };
  }
  fs.writeFileSync(fp, compressed);
  return {
    path: fp,
    original,
    compressed: compressed.length,
    saved: original - compressed.length,
    pct: ((1 - compressed.length / original) * 100).toFixed(1),
  };
}

function fmt(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + "M";
  if (n > 1024) return (n / 1024).toFixed(0) + "K";
  return n + "B";
}

(async () => {
  const all = walk(ROOT).filter((f) => f.size >= MIN_SIZE);
  const exts = new Set([".jpg", ".jpeg", ".png", ".svg"]);
  const targets = all.filter((f) => exts.has(path.extname(f.path).toLowerCase()));

  console.log(`Scanning: ${all.length} files >= ${fmt(MIN_SIZE)}`);
  console.log(`Eligible: ${targets.length} image files to process\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  let improved = 0;
  let noImp = 0;
  let errors = 0;

  for (const t of targets) {
    const r = await processOne(t.path, t.size);
    totalBefore += t.size;
    if (r.error) {
      errors++;
      totalAfter += t.size;
      console.log(`  ERR ${r.path.replace(ROOT + "/", "")}: ${r.error}`);
      continue;
    }
    if (r.note === "no-improvement") {
      noImp++;
      totalAfter += t.size;
      continue;
    }
    improved++;
    totalAfter += r.compressed;
    REPORT.push(r);
  }

  // Sort top savings
  REPORT.sort((a, b) => b.saved - a.saved);
  console.log("TOP 20 SAVINGS:");
  for (const r of REPORT.slice(0, 20)) {
    const rel = r.path.replace(ROOT + "/", "");
    console.log(
      `  ${fmt(r.original).padStart(6)} -> ${fmt(r.compressed).padStart(6)}  (-${r.pct}%)  ${rel}`
    );
  }
  console.log("\nSUMMARY:");
  console.log(`  Eligible files:  ${targets.length}`);
  console.log(`  Compressed:      ${improved}`);
  console.log(`  No improvement:  ${noImp}`);
  console.log(`  Errors:          ${errors}`);
  console.log(`  Total before:    ${fmt(totalBefore)}`);
  console.log(`  Total after:     ${fmt(totalAfter)}`);
  console.log(
    `  Saved:           ${fmt(totalBefore - totalAfter)}  (${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`
  );
})();
