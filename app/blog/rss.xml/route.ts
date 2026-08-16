import { sql } from '@/lib/db';
import { buildRssXml } from '@/lib/rss-feed';

/**
 * Public RSS 2.0 feed for the blog.
 *
 *   https://www.mtouchlabs.com/blog/rss.xml
 *
 * Consumed by LinkedIn's native RSS / content-sharing feature (no LinkedIn API,
 * no OAuth). All XML generation lives in `lib/rss-feed.js` so it can be
 * unit-tested without a database — see `npm run test:rss`.
 *
 * PUBLICATION LOGIC IS NOT REDEFINED HERE. The WHERE clause below is the exact
 * predicate already used by app/blog/page.tsx, app/blog/[slug]/page.tsx,
 * app/sitemap.ts and middleware.ts, so a post is in the feed if and only if it
 * is publicly reachable at /blog/<slug>.
 */

// ISR: regenerate at most once every 5 minutes. This matches the blog detail
// page (`revalidate = 300`) and is short enough that a post going live via the
// /api/cron/publish-blogs job (or simply by its publish_date passing) shows up
// for LinkedIn quickly. The cron additionally calls revalidatePath() on this
// route for an immediate refresh.
export const revalidate = 300;

interface BlogRow {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  meta_description: string | null;
  content: string | null;
  image: string | null;
  og_image: string | null;
  canonical_url: string | null;
  author: string | null;
  category: string | null;
  status: string | null;
  published: boolean;
  publish_date: string | null;
  created_at: string | null;
}

// Cap the feed size. LinkedIn only ever needs the most recent posts, and an
// unbounded feed would grow without limit.
const MAX_ITEMS = 50;

/**
 * Optional back-catalogue cutoff.
 *
 * Set RSS_MIN_PUBLISH_DATE in the environment (e.g. '2026-08-16') and the feed
 * will only ever contain posts published on/after that date. Point of this: the
 * first time an RSS→LinkedIn automation is connected, most tools treat every
 * item currently in the feed as new and will post the lot. Excluding the
 * archive at the source makes that impossible, regardless of which tool is used.
 *
 * Unset = every live post is included.
 */
const MIN_PUBLISH_DATE = (process.env.RSS_MIN_PUBLISH_DATE || '').trim();
// Passed to Postgres as NULL when unset, so the cast below is always valid.
const MIN_PUBLISH_DATE_PARAM: string | null = MIN_PUBLISH_DATE || null;

export async function GET(): Promise<Response> {
  let blogs: BlogRow[] = [];

  try {
    blogs = (await sql`
      SELECT id, slug, title, description, meta_description, content,
             image, og_image, canonical_url, author, category,
             status, published, publish_date, created_at
      FROM blogs
      WHERE (published = true OR status = 'published')
        AND (publish_date IS NULL OR publish_date <= NOW())
        AND (
          ${MIN_PUBLISH_DATE_PARAM}::timestamptz IS NULL
          OR COALESCE(publish_date, created_at) >= ${MIN_PUBLISH_DATE_PARAM}::timestamptz
        )
      ORDER BY COALESCE(publish_date, created_at) DESC NULLS LAST
      LIMIT ${MAX_ITEMS}
    `) as BlogRow[];
  } catch (error: unknown) {
    // A DB blip must not hand LinkedIn a 500 it might treat as a dead feed —
    // serve a valid, empty channel and let the next revalidation recover.
    console.error('RSS feed: failed to load blogs', error instanceof Error ? error.message : error);
    blogs = [];
  }

  const xml = buildRssXml(blogs, { now: new Date(), minPublishDate: MIN_PUBLISH_DATE });

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      // Serve fresh within 5 minutes; allow a stale copy while revalidating so
      // the feed is never briefly unavailable.
      'Cache-Control': 'public, max-age=0, s-maxage=300, stale-while-revalidate=600',
      // The feed itself should not be indexed as a page; the posts it points to
      // are indexed normally.
      'X-Robots-Tag': 'noindex, follow',
    },
  });
}
