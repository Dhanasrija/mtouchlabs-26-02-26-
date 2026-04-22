/**
 * scripts/bulk-import-blogs.mjs
 * ---------------------------------------------------------------------------
 * Bulk import / update blogs by slug.
 *
 * Workflow:
 *   1. Add / edit entries in scripts/blog-import-data.mjs
 *   2. Run: DATABASE_URL="postgres://..." node scripts/bulk-import-blogs.mjs
 *
 * Behaviour per entry:
 *   - If a row with the same slug exists → UPDATE all provided fields
 *     (image, title, description, content, meta_*, tags, og_*, faq_schema, etc.)
 *   - If no row with that slug exists  → INSERT a new row (status = published)
 *
 * The script prints a summary at the end:
 *   Updated: N, Inserted: M, Skipped: K
 *
 * Images referenced by entries must already live in /public/images/blogs/.
 * ---------------------------------------------------------------------------
 */

import { neon } from '@neondatabase/serverless';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import blogs from './blog-import-data.mjs';

// Auto-load DATABASE_URL from .env.local (or .env) if not already set,
// so you can just run `node scripts/bulk-import-blogs.mjs` from the repo root.
function loadEnvFile() {
  if (process.env.DATABASE_URL) return;
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve(__dirname, '..', '.env.local'),
    path.resolve(__dirname, '..', '.env'),
  ];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    for (const raw of lines) {
      const line = raw.trim();
      if (!line || line.startsWith('#')) continue;
      const eq = line.indexOf('=');
      if (eq === -1) continue;
      const key = line.slice(0, eq).trim();
      let value = line.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
    if (process.env.DATABASE_URL) {
      console.log(`🔑 Loaded DATABASE_URL from ${path.basename(file)}`);
      return;
    }
  }
}

loadEnvFile();

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL not found — check .env.local or pass it inline.');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const SITE = 'https://www.mtouchlabs.com';

function calculateReadingTime(html) {
  const text = (html || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const words = text.split(' ').filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function normaliseTags(tags) {
  if (Array.isArray(tags)) return tags.map((t) => String(t).trim()).filter(Boolean);
  if (typeof tags === 'string') {
    return tags.split(',').map((t) => t.trim()).filter(Boolean);
  }
  return [];
}

async function upsertBlog(blog) {
  if (!blog.slug || !blog.title) {
    console.warn(`⚠️  Skipped (missing slug or title):`, blog.slug || '(no slug)');
    return 'skipped';
  }

  const canonical = blog.canonical_url || `${SITE}/blog/${blog.slug}`;
  const tagsArr = normaliseTags(blog.tags);
  const readingTime = blog.reading_time || calculateReadingTime(blog.content);
  const metaTitle = blog.meta_title || blog.title;
  const metaDesc = blog.meta_description || blog.description || '';
  const ogTitle = blog.og_title || metaTitle;
  const ogDesc = blog.og_description || metaDesc;
  const ogImage = blog.og_image || blog.image || '';
  const faqSchema = JSON.stringify(blog.faq_schema || []);
  const publishDate = blog.publish_date ? new Date(blog.publish_date) : new Date();
  const status = blog.status || 'published';
  const published = status === 'published';

  const existing = await sql`SELECT id FROM blogs WHERE slug = ${blog.slug}`;

  if (existing.length > 0) {
    await sql`UPDATE blogs SET
        title = ${blog.title},
        description = ${blog.description || ''},
        content = ${blog.content || ''},
        image = ${blog.image || ''},
        author = ${blog.author || 'mTouch Labs'},
        category = ${blog.category || 'General'},
        tags = ${tagsArr},
        meta_title = ${metaTitle},
        meta_description = ${metaDesc},
        og_title = ${ogTitle},
        og_description = ${ogDesc},
        og_image = ${ogImage},
        twitter_card = ${blog.twitter_card || 'summary_large_image'},
        focus_keyword = ${blog.focus_keyword || ''},
        secondary_keywords = ${blog.secondary_keywords || ''},
        canonical_url = ${canonical},
        robots = ${blog.robots || 'index, follow'},
        breadcrumb_title = ${blog.breadcrumb_title || ''},
        schema_type = ${blog.schema_type || 'BlogPosting'},
        faq_schema = ${faqSchema},
        reading_time = ${readingTime},
        status = ${status},
        published = ${published},
        featured = ${blog.featured === true},
        allow_comments = ${blog.allow_comments !== false},
        publish_date = ${publishDate},
        updated_at = ${new Date()}
      WHERE slug = ${blog.slug}`;
    console.log(`♻️  Updated : ${blog.slug}  —  ${blog.title}`);
    return 'updated';
  }

  await sql`INSERT INTO blogs (
      slug, title, description, content, image, author, category, tags,
      meta_title, meta_description, og_title, og_description, og_image, twitter_card,
      focus_keyword, secondary_keywords, canonical_url, robots, breadcrumb_title,
      schema_type, faq_schema, reading_time,
      status, published, featured, allow_comments,
      created_at, publish_date, updated_at
    ) VALUES (
      ${blog.slug}, ${blog.title}, ${blog.description || ''}, ${blog.content || ''},
      ${blog.image || ''}, ${blog.author || 'mTouch Labs'}, ${blog.category || 'General'}, ${tagsArr},
      ${metaTitle}, ${metaDesc}, ${ogTitle}, ${ogDesc}, ${ogImage}, ${blog.twitter_card || 'summary_large_image'},
      ${blog.focus_keyword || ''}, ${blog.secondary_keywords || ''}, ${canonical}, ${blog.robots || 'index, follow'}, ${blog.breadcrumb_title || ''},
      ${blog.schema_type || 'BlogPosting'}, ${faqSchema}, ${readingTime},
      ${status}, ${published}, ${blog.featured === true}, ${blog.allow_comments !== false},
      ${publishDate}, ${publishDate}, ${publishDate}
    )`;
  console.log(`✨ Inserted: ${blog.slug}  —  ${blog.title}`);
  return 'inserted';
}

async function main() {
  console.log(`\n📚 Bulk-importing ${blogs.length} blog entr${blogs.length === 1 ? 'y' : 'ies'}...\n`);
  const counts = { updated: 0, inserted: 0, skipped: 0, failed: 0 };

  for (const blog of blogs) {
    try {
      const result = await upsertBlog(blog);
      counts[result] = (counts[result] || 0) + 1;
    } catch (err) {
      counts.failed += 1;
      console.error(`❌ Failed  : ${blog.slug || '(no slug)'}  —  ${err.message}`);
    }
  }

  console.log('\n── Summary ──────────────────────────────────────────');
  console.log(`   ♻️  Updated : ${counts.updated}`);
  console.log(`   ✨ Inserted: ${counts.inserted}`);
  console.log(`   ⏭️  Skipped : ${counts.skipped}`);
  if (counts.failed) console.log(`   ❌ Failed  : ${counts.failed}`);
  console.log('─────────────────────────────────────────────────────\n');
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
