#!/usr/bin/env node
/**
 * Audit which images are shared across multiple blog rows.
 *
 * Run: node scripts/list-blog-images.mjs
 *
 * Prints two sections:
 *   1. DUPLICATES — images used by 2+ blogs (sorted by usage count desc)
 *   2. ALL ROWS   — every blog with its current image, so you can pick replacements
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not set'); process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

(async () => {
  const rows = await sql`
    SELECT id, slug, title, category, image,
           COALESCE(publish_date, created_at) AS published
    FROM blogs
    WHERE published = true OR status = 'published'
    ORDER BY image, COALESCE(publish_date, created_at) DESC
  `;

  const byImage = new Map();
  for (const r of rows) {
    const img = r.image || '(none)';
    if (!byImage.has(img)) byImage.set(img, []);
    byImage.get(img).push(r);
  }

  const duplicates = [...byImage.entries()]
    .filter(([, list]) => list.length > 1)
    .sort((a, b) => b[1].length - a[1].length);

  console.log('\n══════ DUPLICATE IMAGES (used by 2+ blogs) ══════\n');
  if (!duplicates.length) {
    console.log('✅ No duplicates. Every blog has a unique image.\n');
  } else {
    for (const [img, list] of duplicates) {
      console.log(`🖼  ${img}   (used by ${list.length} blogs)`);
      for (const r of list) {
        const date = r.published ? new Date(r.published).toISOString().slice(0, 10) : '----------';
        console.log(`    ${date}  #${String(r.id).padEnd(4)}  [${(r.category ?? '').padEnd(22)}]  ${r.title}`);
        console.log(`                      ${r.slug}`);
      }
      console.log('');
    }
  }

  console.log('\n══════ ALL BLOGS (grouped by image) ══════\n');
  for (const [img, list] of byImage) {
    console.log(`🖼  ${img}`);
    for (const r of list) {
      const date = r.published ? new Date(r.published).toISOString().slice(0, 10) : '----------';
      console.log(`    ${date}  #${String(r.id).padEnd(4)}  [${(r.category ?? '').padEnd(22)}]  ${r.title}`);
    }
    console.log('');
  }

  console.log(`\n📊 Total published blogs: ${rows.length}`);
  console.log(`📊 Distinct images:       ${byImage.size}`);
  console.log(`📊 Images used by 2+:     ${duplicates.length}\n`);
})().catch((e) => { console.error('❌', e.message); process.exit(1); });
