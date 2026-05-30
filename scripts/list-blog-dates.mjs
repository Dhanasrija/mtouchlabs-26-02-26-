#!/usr/bin/env node
/**
 * List blog publish dates for May & June (current year) and show
 * which days are still missing a blog.
 *
 * Usage:
 *   node scripts/list-blog-dates.mjs              # current year
 *   YEAR=2026 node scripts/list-blog-dates.mjs    # specific year
 *
 * Loads DATABASE_URL from .env.local automatically.
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { neon } from '@neondatabase/serverless';

// ── Load DATABASE_URL from .env.local if not already set ────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, '..', '.env.local');
if (!process.env.DATABASE_URL && existsSync(envPath)) {
  const text = readFileSync(envPath, 'utf8');
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*DATABASE_URL\s*=\s*(.+?)\s*$/);
    if (m) {
      let v = m[1];
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      process.env.DATABASE_URL = v;
      break;
    }
  }
}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL not set and not found in .env.local');
  process.exit(1);
}

const YEAR = Number(process.env.YEAR || new Date().getFullYear());

const sql = neon(process.env.DATABASE_URL);

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

function daysInMonth(year, monthIndex /* 0-based */) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function buildAllDates(year, monthIndex) {
  const days = daysInMonth(year, monthIndex);
  const out = [];
  for (let d = 1; d <= days; d++) {
    out.push(isoDate(new Date(Date.UTC(year, monthIndex, d))));
  }
  return out;
}

async function main() {
  const start = `${YEAR}-05-01`;
  const end = `${YEAR}-07-01`;

  const rows = await sql`
    SELECT id, slug, title, status, published,
           COALESCE(publish_date, created_at) AS pub_at
      FROM blogs
     WHERE COALESCE(publish_date, created_at) >= ${start}
       AND COALESCE(publish_date, created_at) <  ${end}
     ORDER BY COALESCE(publish_date, created_at) ASC
  `;

  console.log(`\nBlogs in May & June ${YEAR} (total: ${rows.length})\n`);
  console.log('Date        | status     | published | slug');
  console.log('------------+------------+-----------+-------------------------------------');
  const occupied = new Set();
  for (const r of rows) {
    const d = isoDate(new Date(r.pub_at));
    occupied.add(d);
    console.log(
      `${d}  | ${(r.status || '').padEnd(10)} | ${String(r.published).padEnd(9)} | ${r.slug}`
    );
  }

  for (const [label, monthIndex] of [['May', 4], ['June', 5]]) {
    const allDays = buildAllDates(YEAR, monthIndex);
    const missing = allDays.filter((d) => !occupied.has(d));
    const present = allDays.filter((d) => occupied.has(d));
    console.log(
      `\n${label} ${YEAR}: ${present.length}/${allDays.length} days have a blog. ${missing.length} day(s) MISSING:`
    );
    if (missing.length === 0) {
      console.log('  (none — every day in the month is covered)');
    } else {
      // Print 7 per line
      for (let i = 0; i < missing.length; i += 7) {
        console.log('  ' + missing.slice(i, i + 7).join('  '));
      }
    }
  }
  console.log();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
