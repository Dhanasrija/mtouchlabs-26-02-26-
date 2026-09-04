/**
 * Take the Agentic AI / RAG post off the site entirely
 * ═══════════════════════════════════════════════════════════════
 *   node remove-agentic-ai-post.mjs           # report only
 *   node remove-agentic-ai-post.mjs --unpublish   # hide it (recommended)
 *   node remove-agentic-ai-post.mjs --delete      # destroy the row
 *
 * WHY A SCRIPT AND NOT A CODE EDIT
 * The page is a row in the `blogs` table, rendered by
 * app/blog/[slug]/page.tsx. There is no file to delete. The two
 * redirects in next.config.js pointed AT it and have already been
 * removed — but removing those alone changes nothing about whether the
 * post appears, because the listing, the sitemap and the homepage
 * Insights row all read the table directly.
 *
 * UNPUBLISH vs DELETE
 * `--unpublish` sets published = false and status = 'draft'. Every query
 * on the site filters on `(published = true OR status = 'published')`,
 * so this removes the post from:
 *     /blog                        (the listing)
 *     /blog/<slug>                 (the post itself — 404s)
 *     /sitemap.xml                 (built from the same filter)
 *     the homepage Insights row     (same filter)
 *     /blog/rss.xml                (same filter)
 * ...while keeping the content recoverable. That is the safer default
 * and it is what "I should not see this page anywhere" actually needs.
 *
 * `--delete` removes the row for good. Use it only if you are certain
 * the content is not wanted again.
 *
 * ONE THING TO KNOW EITHER WAY
 * If Google has this URL indexed, it will now return 404 and drop out of
 * the index over the next few crawls. That is the correct outcome for a
 * page you want gone. If you would rather it disappear faster, request
 * removal in Search Console once this has run.
 * ═══════════════════════════════════════════════════════════════
 */
import { neon } from '@neondatabase/serverless';

const SLUG = 'agentic-ai-rag-enterprise-ai-solutions';

if (!process.env.DATABASE_URL) {
  console.error('\n  DATABASE_URL is not set. Run this the same way you run the app.\n');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);
const UNPUBLISH = process.argv.includes('--unpublish');
const DELETE = process.argv.includes('--delete');

const rows = await sql`
  SELECT slug, title, category, published, status, publish_date
    FROM blogs WHERE slug = ${SLUG}`;

if (rows.length === 0) {
  console.log(`\n  No row with slug "${SLUG}".`);
  console.log('  Nothing to remove — the post is already gone from the database.\n');
  /* Still worth checking for near-misses, in case the slug differs. */
  const like = await sql`
    SELECT slug FROM blogs WHERE slug ILIKE '%agentic%' OR slug ILIKE '%rag%' OR slug ILIKE '%genai%'`;
  if (like.length) {
    console.log('  Similar slugs that DO exist — is one of these the post you mean?');
    for (const r of like) console.log('    ·', r.slug);
    console.log('');
  }
  process.exit(0);
}

const r = rows[0];
console.log('\n  Found the post:');
console.log('    slug:      ', r.slug);
console.log('    title:     ', r.title);
console.log('    category:  ', r.category);
console.log('    published: ', r.published);
console.log('    status:    ', r.status);

if (!UNPUBLISH && !DELETE) {
  console.log('\n  Report only. Re-run with --unpublish (recommended) or --delete.\n');
  process.exit(0);
}

if (DELETE) {
  await sql`DELETE FROM blogs WHERE slug = ${SLUG}`;
  console.log('\n  ✓ Row DELETED. The content is gone for good.');
} else {
  await sql`UPDATE blogs SET published = false, status = 'draft' WHERE slug = ${SLUG}`;
  console.log('\n  ✓ Unpublished. The row is still there but every query on the');
  console.log('    site filters it out, so it appears nowhere.');
}

console.log('\n  Now gone from: /blog, /blog/' + SLUG + ', /sitemap.xml,');
console.log('  /blog/rss.xml, and the homepage Insights row.');
console.log('  All three old URLs return 404 (the redirects were removed');
console.log('  from next.config.js).\n');
console.log('  Restart the dev server, or wait for revalidation in production.\n');
