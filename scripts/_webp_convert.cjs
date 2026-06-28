// One-off: convert all PNG/JPG/JPEG under public/ to .webp siblings.
// Keeps originals (fallback). Only records a webp as "use" when it is
// actually smaller than the source. Strips metadata (sharp default).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");
const CONCURRENCY = 8;
const QUALITY = 80;

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(png|jpe?g)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = walk(PUBLIC);
console.log("Source raster files:", files.length);

const manifest = []; // { pub: "/images/..", smaller: bool }
let done = 0, converted = 0, skippedBigger = 0, errors = 0;

async function one(src) {
  const out = src.replace(/\.(png|jpe?g)$/i, ".webp");
  const pub = "/" + path.relative(PUBLIC, src).split(path.sep).join("/");
  const webpPub = pub.replace(/\.(png|jpe?g)$/i, ".webp");
  try {
    await sharp(src).webp({ quality: QUALITY, effort: 4 }).toFile(out);
    const srcSize = fs.statSync(src).size;
    const outSize = fs.statSync(out).size;
    const smaller = outSize < srcSize;
    if (smaller) converted++; else { skippedBigger++; }
    manifest.push({ src: pub, webp: webpPub, smaller, srcSize, outSize });
  } catch (e) {
    errors++;
    console.error("ERR", pub, e.message);
  } finally {
    done++;
    if (done % 200 === 0) console.log(`  ${done}/${files.length}`);
  }
}

async function run() {
  let i = 0;
  async function worker() {
    while (i < files.length) {
      const idx = i++;
      await one(files[idx]);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  fs.writeFileSync(
    path.join(ROOT, "scripts/_webp_manifest.json"),
    JSON.stringify(manifest, null, 0)
  );

  const origBytes = manifest.reduce((a, m) => a + m.srcSize, 0);
  const usedBytes = manifest.reduce((a, m) => a + (m.smaller ? m.outSize : m.srcSize), 0);
  console.log("------");
  console.log("converted (smaller):", converted, "| kept-original (webp bigger):", skippedBigger, "| errors:", errors);
  console.log("orig total:", (origBytes/1048576).toFixed(1), "MB");
  console.log("served total after rewrite:", (usedBytes/1048576).toFixed(1), "MB");
  console.log("savings:", ((origBytes-usedBytes)/1048576).toFixed(1), "MB");
}
run();
