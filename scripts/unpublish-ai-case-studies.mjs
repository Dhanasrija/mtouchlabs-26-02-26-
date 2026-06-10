#!/usr/bin/env node
/**
 * Reversible UNDO for the 16 AI case studies.
 *
 * Sets each of these case studies to draft / unpublished so they disappear
 * from the live /case-studies listing and detail pages — but KEEPS all the
 * content in the DB. Nothing is deleted.
 *
 * To bring them back live later, either:
 *   - re-run:  node scripts/insert-ai-case-studies.mjs   (re-publishes + refreshes), or
 *   - run this file with the REPUBLISH flag:  node scripts/unpublish-ai-case-studies.mjs --republish
 *
 * Run (to unpublish):  node scripts/unpublish-ai-case-studies.mjs
 * Requires: .env.local with DATABASE_URL set.
 */

import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const raw = fs.readFileSync(envPath, 'utf8');
  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not set. Add it to .env.local');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

const REPUBLISH = process.argv.includes('--republish');

const SLUGS = [
  'ai-agent-customer-support-automation',
  'generative-ai-chatbot-development',
  'enterprise-ai-workflow-automation',
  'ai-sales-assistant-platform',
  'multi-agent-ai-system',
  'ai-document-processing-automation',
  'ai-recruitment-platform',
  'ai-voice-agent-development',
  'ai-real-estate-lead-scoring',
  'ai-content-generation-platform',
  'ai-image-recognition-system',
  'predictive-analytics-ai-platform',
  'ai-powered-crm-automation',
  'ai-knowledge-base-assistant',
  'custom-llm-development',
  'ai-mobile-app-development',
];

(async () => {
  const action = REPUBLISH ? 'RE-PUBLISH' : 'UNPUBLISH';
  console.log(`${action} ${SLUGS.length} AI case studies (content is preserved either way)...\n`);

  const rows = REPUBLISH
    ? await sql`
        UPDATE case_studies
        SET status = 'published', published = true
        WHERE slug = ANY(${SLUGS})
        RETURNING slug, status, published
      `
    : await sql`
        UPDATE case_studies
        SET status = 'draft', published = false
        WHERE slug = ANY(${SLUGS})
        RETURNING slug, status, published
      `;

  for (const r of rows) {
    console.log(`✅ ${r.slug}  → status=${r.status} published=${r.published}`);
  }

  const found = new Set(rows.map((r) => r.slug));
  const missing = SLUGS.filter((s) => !found.has(s));
  if (missing.length) {
    console.log(`\nℹ️  Not found in DB (skipped): ${missing.join(', ')}`);
  }

  console.log(`\nDone — ${rows.length} updated.`);
  if (!REPUBLISH) {
    console.log('They are now hidden from the live /case-studies pages but kept in the DB.');
    console.log('Re-publish anytime:  node scripts/unpublish-ai-case-studies.mjs --republish');
  } else {
    console.log('They are live again on /case-studies (list revalidates within ~1 min).');
  }
})().catch((e) => {
  console.error('❌ Error:', e.message);
  process.exit(1);
});
