#!/usr/bin/env node
/**
 * Normalize the `tags` array on every blog row.
 *
 * Rules:
 *   • "AI"  (or "A.I.")           →  "AI & Automation"
 *   • "Web" (or "web development" variants) → "Web Development"
 *   • "Automation"                →  "AI & Automation"
 *   • "Mobile App" / "Mobile"     →  "Mobile"           (kept, canonical short form)
 *   • Deduplicates after rewriting.
 *
 * Run:
 *   node scripts/normalize-blog-tags.mjs            # DRY RUN (shows diffs, writes nothing)
 *   node scripts/normalize-blog-tags.mjs --apply    # Actually UPDATE the rows
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

const APPLY = process.argv.includes('--apply');

/* ---- Mapping: anything matching the key (case-insensitive, trimmed) becomes the value ---- */
const TAG_MAP = new Map([
  ['ai', 'AI & Automation'],
  ['a.i.', 'AI & Automation'],
  ['artificial intelligence', 'AI & Automation'],
  ['automation', 'AI & Automation'],
  ['ai & automation', 'AI & Automation'],

  ['web', 'Web Development'],
  ['web dev', 'Web Development'],
  ['web development', 'Web Development'],

  ['mobile', 'Mobile'],
  ['mobile app', 'Mobile'],

  ['cloud', 'Cloud'],
  ['devops', 'DevOps'],
  ['cloud & devops', 'Cloud'],

  ['saas', 'SaaS'],
  ['ecommerce', 'Ecommerce'],
  ['e-commerce', 'Ecommerce'],
  ['security', 'Security'],
  ['startup', 'Startup'],
  ['enterprise', 'Enterprise'],
  ['ux', 'UX'],
  ['ui', 'UX'],
]);

function remapTag(t) {
  if (t == null) return null;
  const key = String(t).trim().toLowerCase();
  if (!key) return null;
  if (TAG_MAP.has(key)) return TAG_MAP.get(key);
  // Preserve original casing for unknown tags
  return String(t).trim();
}

function normalizeTags(input) {
  // Postgres text[] comes back as a JS array from the neon driver
  const arr = Array.isArray(input) ? input : [];
  const out = [];
  const seen = new Set();
  for (const raw of arr) {
    const mapped = remapTag(raw);
    if (!mapped) continue;
    const key = mapped.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(mapped);
  }
  return out;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

(async () => {
  const rows = await sql`
    SELECT id, slug, title, tags
    FROM blogs
    ORDER BY COALESCE(updated_at, publish_date, created_at) DESC
  `;

  const changes = [];
  for (const r of rows) {
    const current = Array.isArray(r.tags) ? r.tags : [];
    const next = normalizeTags(current);
    if (!arraysEqual(current, next)) {
      changes.push({ ...r, current, next });
    }
  }

  console.log(`\n📊 Scanned ${rows.length} blogs.`);
  console.log(`🏷  ${changes.length} rows need tag normalization.\n`);

  if (!changes.length) { console.log('✅ Nothing to do.'); return; }

  console.log('Changes:');
  console.log('─'.repeat(110));
  for (const c of changes) {
    const before = JSON.stringify(c.current);
    const after  = JSON.stringify(c.next);
    console.log(`#${String(c.id).padEnd(4)}  ${c.slug}`);
    console.log(`       before: ${before}`);
    console.log(`       after:  ${after}`);
  }
  console.log('─'.repeat(110));

  if (!APPLY) {
    console.log('\nℹ️  Dry run. Re-run with --apply to write changes.');
    return;
  }

  console.log('\n⚡ Applying updates...');
  let done = 0;
  for (const c of changes) {
    await sql`UPDATE blogs SET tags = ${c.next}, updated_at = NOW() WHERE id = ${c.id}`;
    done++;
  }
  console.log(`✅ Updated ${done} rows.`);
  console.log('   /blog has revalidate=60; filter chips & list refresh within a minute.');
})().catch((e) => { console.error('❌', e.message); process.exit(1); });
