import { readdirSync, statSync, readFileSync, existsSync } from 'fs';
import { join, relative, basename, extname } from 'path';

const BASE = '/Users/srijaaiethamsetti/Downloads/vercel-test/mtouch1-mtouchwebsite_nextjs-4b0a6d19df4f';
const IMG_DIR = join(BASE, 'public/images');
const IMAGE_EXTS = new Set(['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']);

// Collect all image files
function getFiles(dir) {
  let results = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      const full = join(dir, entry);
      try {
        const stat = statSync(full);
        if (stat.isDirectory()) {
          results = results.concat(getFiles(full));
        } else if (IMAGE_EXTS.has(extname(entry).toLowerCase())) {
          results.push(full);
        }
      } catch {}
    }
  } catch {}
  return results;
}

// Collect all source files to search in
function getSourceFiles(dir, exts) {
  let results = [];
  try {
    const entries = readdirSync(dir);
    for (const entry of entries) {
      if (entry === 'node_modules' || entry === '.next' || entry === '.git') continue;
      const full = join(dir, entry);
      try {
        const stat = statSync(full);
        if (stat.isDirectory()) {
          results = results.concat(getSourceFiles(full, exts));
        } else if (exts.has(extname(entry).toLowerCase())) {
          results.push(full);
        }
      } catch {}
    }
  } catch {}
  return results;
}

const SOURCE_EXTS = new Set(['.tsx', '.ts', '.jsx', '.js', '.css', '.json', '.html']);

// Directories to search
const searchDirs = ['app', 'components', 'lib'].map(d => join(BASE, d));

// Read all source content into one big string (faster than per-file search)
let allSource = '';
for (const dir of searchDirs) {
  if (existsSync(dir)) {
    const files = getSourceFiles(dir, SOURCE_EXTS);
    for (const f of files) {
      try {
        allSource += readFileSync(f, 'utf-8') + '\n';
      } catch {}
    }
  }
}

// Also check middleware.ts
try {
  allSource += readFileSync(join(BASE, 'middleware.ts'), 'utf-8') + '\n';
} catch {}

// Check public/css and public/js if they exist
for (const sub of ['public/css', 'public/js']) {
  const d = join(BASE, sub);
  if (existsSync(d)) {
    const files = getSourceFiles(d, SOURCE_EXTS);
    for (const f of files) {
      try {
        allSource += readFileSync(f, 'utf-8') + '\n';
      } catch {}
    }
  }
}

// Get all images
const allImages = getFiles(IMG_DIR);
console.log(`Total images: ${allImages.length}`);

// Skip patterns
const SKIP_PATTERNS = [
  /\/favicon\.png$/,
  /\/Light\.png$/,
  /\/logo-.*\.svg$/,
];

const unused = [];
const used = [];

for (const imgPath of allImages) {
  const relToPublic = relative(join(BASE, 'public'), imgPath); // e.g., images/about/award1.png
  const relPath = '/' + relToPublic; // /images/about/award1.png
  const fname = basename(imgPath);

  // Check skip patterns
  if (SKIP_PATTERNS.some(p => p.test(imgPath))) continue;

  // Search strategies:
  // 1. Full path: /images/about/award1.png
  // 2. Partial path without leading slash: images/about/award1.png
  // 3. Just filename: award1.png
  const found = allSource.includes(relPath) ||
                allSource.includes(relToPublic) ||
                allSource.includes(fname);

  if (found) {
    used.push(relPath);
  } else {
    unused.push(relPath);
  }
}

console.log(`\nUsed images: ${used.length}`);
console.log(`Unused images: ${unused.length}`);
console.log(`\n=== UNUSED IMAGES ===`);
unused.sort().forEach(p => console.log(p));
