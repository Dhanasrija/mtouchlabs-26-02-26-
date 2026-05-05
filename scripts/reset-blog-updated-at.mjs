#!/usr/bin/env node
/**
 * scripts/reset-blog-updated-at.mjs
 * ---------------------------------------------------------------------------
 * One-off fix: reset `updated_at` on every blog row to match its `publish_date`
 * (or `created_at` as a fallback).
 *
 * Why: previous runs of the image-audit script and the bulk-import script were
 * writing `updated_at = NOW()` even when only the image path was being repaired
 * or content was being re-imported with a backdated `publish_date`. The /blog
 * listing reads:
 *
 *     wasUpdated = (updated_at - publish_date) > 1 hour
 *     → if wasUpdated, show "Last Updated: <updated_at>"
 *
 * so every row whose updated_at was bumped to today now reads "Last Updated:
 * 2026-05-04" instead of its real publish date.
 *
 * This script aligns updated_at with publish_date so the listing falls back to
 * showing the publish date.
 *
 * Usage
 * -----
 *   Dry run (default):
 *     node scripts/reset-blog-updated-at.mjs
 *
 *   Apply:
 *     node scripts/reset-blog-updated-at.mjs --apply
 * ---------------------------------------------------------------------------
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

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

(async () => {
  console.log(`\n🔄 Reset blog updated_at  (mode: ${APPLY ? 'APPLY' : 'DRY-RUN'})\n`);

  // Find every row whose updated_at is meaningfully ahead of publish_date.
  // We use a 1-hour window to match the /blog listing's `wasUpdated` logic.
  const rows = await sql`
    SELECT id, slug, title,
           publish_date,
           created_at,
           updated_at,
           EXTRACT(EPOCH FROM (updated_at - COALESCE(publish_date, created_at))) AS drift_seconds
    FROM blogs
    WHERE updated_at > COALESCE(publish_date, created_at) + INTERVAL '1 hour'
    ORDER BY COALESCE(publish_date, created_at) DESC
  `;

  console.log(`   ${rows.length} row(s) have updated_at > publish_date by >1 hour.\n`);
  if (rows.length === 0) {
    console.log('Nothing to do. ✅\n');
    return;
  }

  console.log('── Will reset (showing first 30) ──────────────────────');
  for (const r of rows.slice(0, 30)) {
    const target = r.publish_date || r.created_at;
    const targetStr = new Date(target).toISOString().slice(0, 10);
    const currentStr = r.updated_at ? new Date(r.updated_at).toISOString().slice(0, 10) : '(null)';
    console.log(`  • ${r.slug}`);
    console.log(`      updated_at: ${currentStr}  →  ${targetStr}`);
  }
  if (rows.length > 30) console.log(`  …and ${rows.length - 30} more`);

  if (!APPLY) {
    console.log(`\nℹ️  DRY RUN. Re-run with --apply to set updated_at = publish_date for ${rows.length} rows.\n`);
    return;
  }

  // Single SQL update — fast and atomic.
  const result = await sql`
    UPDATE blogs
    SET updated_at = COALESCE(publish_date, created_at)
    WHERE updated_at > COALESCE(publish_date, created_at) + INTERVAL '1 hour'
  `;

  console.log(`\n✅ Reset updated_at on ${rows.length} rows.\n`);
})().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
