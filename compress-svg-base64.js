#!/usr/bin/env node
/**
 * Second-pass SVG compression: find base64-embedded raster images inside SVGs,
 * re-encode them with sharp at lower quality, and write back.
 * - Only targets SVGs > 500KB
 * - Keeps image dimensions (no resize)
 * - PNG/JPEG embedded → JPEG q80 (unless the PNG has alpha, then PNG q85)
 * - WebP q75 as fallback
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = "/sessions/brave-keen-bohr/mnt/mtouchlabs-nextjs_6max/public/images";
const MIN_SIZE = 500 * 1024;

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const fp = path.join(dir, name);
    const st = fs.statSync(fp);
    if (st.isDirectory()) out.push(...walk(fp));
    else if (fp.endsWith(".svg") && st.size >= MIN_SIZE) out.push({ path: fp, size: st.size });
  }
  return out;
}

async function recompressDataUrl(dataUrl) {
  // dataUrl: data:image/png;base64,AAAA... (or jpeg/jpg/webp/gif)
  const m = /^data:image\/(png|jpe?g|webp|gif);base64,(.+)$/i.exec(dataUrl);
  if (!m) return null;
  const mime = m[1].toLowerCase();
  const b64 = m[2];
  const buf = Buffer.from(b64, "base64");
  if (buf.length < 4096) return null; // skip tiny icons

  // Detect if has alpha channel to decide PNG vs JPEG
  let hasAlpha = false;
  try {
    const meta = await sharp(buf, { failOn: "none" }).metadata();
    hasAlpha = !!meta.hasAlpha;
  } catch {
    return null;
  }

  let outBuf;
  let outMime;
  try {
    if (hasAlpha) {
      // Keep PNG, palette to reduce size
      outBuf = await sharp(buf, { failOn: "none" })
        .png({ quality: 85, compressionLevel: 9, palette: true })
        .toBuffer();
      outMime = "png";
    } else {
      // Safe to JPEG
      outBuf = await sharp(buf, { failOn: "none" })
        .jpeg({ quality: 80, mozjpeg: true, progressive: true })
        .toBuffer();
      outMime = "jpeg";
    }
  } catch {
    return null;
  }

  if (outBuf.length >= buf.length) return null;
  return `data:image/${outMime};base64,${outBuf.toString("base64")}`;
}

async function processSvg(fp) {
  const src = fs.readFileSync(fp, "utf8");
  const original = Buffer.byteLength(src, "utf8");

  const re = /data:image\/(?:png|jpe?g|webp|gif);base64,[A-Za-z0-9+/=]+/g;
  const matches = src.match(re) || [];
  if (matches.length === 0) return { path: fp, original, note: "no-base64" };

  let out = src;
  let replaced = 0;
  for (const du of matches) {
    const newDu = await recompressDataUrl(du);
    if (newDu && newDu !== du) {
      out = out.split(du).join(newDu);
      replaced++;
    }
  }
  const newSize = Buffer.byteLength(out, "utf8");
  if (newSize >= original) return { path: fp, original, note: "no-improvement" };
  fs.writeFileSync(fp, out);
  return { path: fp, original, compressed: newSize, saved: original - newSize, replaced };
}

function fmt(n) {
  if (n > 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + "M";
  if (n > 1024) return (n / 1024).toFixed(0) + "K";
  return n + "B";
}

(async () => {
  const targets = walk(ROOT);
  console.log(`Scanning ${targets.length} SVGs >= ${fmt(MIN_SIZE)}\n`);

  const results = [];
  let totalBefore = 0;
  let totalAfter = 0;
  for (const t of targets) {
    totalBefore += t.size;
    try {
      const r = await processSvg(t.path);
      if (r.compressed) {
        totalAfter += r.compressed;
        results.push(r);
      } else {
        totalAfter += t.size;
      }
    } catch (e) {
      totalAfter += t.size;
      console.log(`  ERR ${t.path}: ${e.message}`);
    }
  }
  results.sort((a, b) => b.saved - a.saved);
  console.log("TOP 20 SVG BASE64 SAVINGS:");
  for (const r of results.slice(0, 20)) {
    const rel = r.path.replace(ROOT + "/", "");
    const pct = ((1 - r.compressed / r.original) * 100).toFixed(1);
    console.log(
      `  ${fmt(r.original).padStart(6)} -> ${fmt(r.compressed).padStart(6)}  (-${pct}%)  [${r.replaced} imgs]  ${rel}`
    );
  }
  console.log("\nSUMMARY:");
  console.log(`  SVGs scanned:  ${targets.length}`);
  console.log(`  Improved:      ${results.length}`);
  console.log(`  Total before:  ${fmt(totalBefore)}`);
  console.log(`  Total after:   ${fmt(totalAfter)}`);
  console.log(
    `  Saved:         ${fmt(totalBefore - totalAfter)}  (${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`
  );
})();
