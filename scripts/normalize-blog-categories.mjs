#!/usr/bin/env node
/**
 * Normalize existing blog.category values into the canonical 5:
 *   AI & Automation | Web Development | Mobile App | Cloud & DevOps | Digital Transformation
 *
 * Run:
 *   node scripts/normalize-blog-categories.mjs           # DRY RUN (shows changes, writes nothing)
 *   node scripts/normalize-blog-categories.mjs --apply   # Actually UPDATE the rows
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

const CANONICAL = [
  'AI & Automation',
  'Web Development',
  'Mobile App',
  'Cloud & DevOps',
  'Digital Transformation',
];

function normalize(raw) {
  if (!raw) return 'Digital Transformation';
  const s = String(raw).toLowerCase().trim();

  const direct = CANONICAL.find((c) => c.toLowerCase() === s);
  if (direct) return direct;

  if (/\b(ai|ml|machine learning|llm|chatbot|automation|automate|gpt|genai|generative)\b/.test(s)) return 'AI & Automation';
  if (/\b(mobile|ios|android|flutter|react native|swift|kotlin|app dev)\b/.test(s)) return 'Mobile App';
  if (/\b(cloud|devops|aws|azure|gcp|kubernetes|docker|ci\/cd|infra|infrastructure)\b/.test(s)) return 'Cloud & DevOps';
  if (/\b(web|frontend|backend|fullstack|full-stack|node|react|next|angular|vue|php|wordpress|shopify|magento|cms|saas)\b/.test(s)) return 'Web Development';
  if (/\b(digital transformation|enterprise|business|strategy|consulting|modernization|design|ux|ui|technology)\b/.test(s)) return 'Digital Transformation';
  return 'Digital Transformation';
}

(async () => {
  const rows = await sql`
    SELECT id, slug, title, category
    FROM blogs
    ORDER BY COALESCE(publish_date, created_at) DESC
  `;

  const changes = [];
  for (const r of rows) {
    const target = normalize(r.category);
    if (target !== r.category) changes.push({ ...r, new_category: target });
  }

  console.log(`\n📊 Scanned ${rows.length} blogs.`);
  console.log(`📝 ${changes.length} need category normalization.\n`);

  if (!changes.length) { console.log('✅ Nothing to do.'); return; }

  console.log('Changes:');
  console.log('─'.repeat(100));
  for (const c of changes) {
    console.log(`#${c.id}  ${(c.category ?? '(null)').padEnd(25)}  →  ${c.new_category.padEnd(25)}  ${c.slug}`);
  }
  console.log('─'.repeat(100));

  if (!APPLY) {
    console.log('\nℹ️  Dry run. Re-run with --apply to write changes.');
    return;
  }

  console.log('\n⚡ Applying updates...');
  let done = 0;
  for (const c of changes) {
    await sql`UPDATE blogs SET category = ${c.new_category}, updated_at = NOW() WHERE id = ${c.id}`;
    done++;
  }
  console.log(`✅ Updated ${done} rows.`);
  console.log('   /blog page has revalidate=60, so filter chips refresh within a minute.');
})().catch((e) => { console.error('❌', e.message); process.exit(1); });
