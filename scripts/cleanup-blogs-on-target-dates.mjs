#!/usr/bin/env node
/**
 * scripts/cleanup-blogs-on-target-dates.mjs
 * ---------------------------------------------------------------------------
 * Removes any blog rows whose publish_date falls on one of the 6 user-confirmed
 * target dates BUT whose slug is NOT in the approved list.
 *
 * Why: the spreadsheet/content plan was rebuilt — only these 6 slugs should
 * occupy the Apr 22 → Apr 30 2026 publishing window. Any older Claude-generated
 * draft, abandoned scheduled row, or mistyped slug on those exact dates needs
 * to be removed so the listing page stays clean.
 *
 * Usage
 * -----
 *   Dry run (default — no DB writes):
 *     node scripts/cleanup-blogs-on-target-dates.mjs
 *
 *   Apply deletions:
 *     node scripts/cleanup-blogs-on-target-dates.mjs --apply
 * ---------------------------------------------------------------------------
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

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
const sql = neon(process.env.DATABASE_URL);

// The 6 dates the user specified.
const TARGET_DATES = [
  '2026-04-22',
  '2026-04-24',
  '2026-04-26',
  '2026-04-27',
  '2026-04-29',
  '2026-04-30',
];

// The ONLY slugs allowed on those dates.
const ALLOWED_SLUGS = new Set([
  'key-advantages-of-cross-platform-mobile-app-development',  // Apr 22 (UPDATE)
  'saas-product-development-guide',                            // Apr 24 (NEW)
  'ecommerce-app-development-cost-india',                      // Apr 26 (NEW)
  'how-artificial-intelligence-is-transforming-mobile-app-development', // Apr 27 (UPDATE)
  'nextjs-latest-features-2026',                               // Apr 29 (NEW)
  'custom-software-vs-saas',                                   // Apr 30 (NEW)
]);

(async () => {
  console.log(`\n🧹 Cleanup blogs on target dates  (mode: ${APPLY ? 'APPLY' : 'DRY-RUN'})\n`);
  console.log(`   Target dates : ${TARGET_DATES.join(', ')}`);
  console.log(`   Allowed slugs:`);
  for (const s of ALLOWED_SLUGS) console.log(`     - ${s}`);
  console.log();

  // Find every row whose publish_date (or created_at as fallback) matches one of the target dates.
  // We compare by date only, ignoring time.
  const rows = await sql`
    SELECT id, slug, title, status, published,
           publish_date,
           created_at,
           image
    FROM blogs
    WHERE TO_CHAR(COALESCE(publish_date, created_at), 'YYYY-MM-DD') = ANY(${TARGET_DATES})
    ORDER BY COALESCE(publish_date, created_at)
  `;

  console.log(`   Found ${rows.length} rows on those dates.\n`);
  if (rows.length === 0) {
    console.log('Nothing to inspect. Bye.\n');
    return;
  }

  const toDelete = [];
  const toKeep = [];
  for (const r of rows) {
    if (ALLOWED_SLUGS.has(r.slug)) toKeep.push(r);
    else toDelete.push(r);
  }

  console.log('── Keeping ───────────────────────────────────────────');
  for (const r of toKeep) {
    const d = new Date(r.publish_date || r.created_at).toISOString().slice(0, 10);
    console.log(`  ✅ ${d} | ${r.slug}`);
  }

  console.log('\n── Removing ──────────────────────────────────────────');
  if (toDelete.length === 0) {
    console.log('  (nothing — DB is already clean)\n');
    return;
  }
  for (const r of toDelete) {
    const d = new Date(r.publish_date || r.created_at).toISOString().slice(0, 10);
    console.log(`  ❌ ${d} | ${r.slug}  —  "${r.title}"`);
  }

  if (!APPLY) {
    console.log(`\nℹ️  This was a DRY RUN. Re-run with --apply to delete the ${toDelete.length} row(s) above.\n`);
    return;
  }

  // Apply deletions
  let deleted = 0;
  for (const r of toDelete) {
    try {
      await sql`DELETE FROM blogs WHERE id = ${r.id}`;
      deleted++;
      console.log(`✅ deleted ${r.slug}`);
    } catch (e) {
      console.error(`❌ failed  ${r.slug}: ${e.message}`);
    }
  }

  console.log(`\n── Done. ${deleted}/${toDelete.length} rows removed. ──\n`);
})().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
