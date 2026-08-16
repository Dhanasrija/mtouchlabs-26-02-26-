/**
 * Pure, dependency-free helpers for building the public blog RSS 2.0 feed.
 *
 * This file is intentionally plain CommonJS JavaScript (no framework imports,
 * no database access) so the exact same logic that powers
 * `app/blog/rss.xml/route.ts` can be unit-tested with stock Node:
 *
 *     npm run test:rss
 *
 * Nothing here duplicates the blog system's publication rules — it mirrors the
 * SQL predicate used by `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`,
 * `app/sitemap.ts` and `middleware.ts`:
 *
 *     (published = true OR status = 'published')
 *     AND (publish_date IS NULL OR publish_date <= NOW())
 */

// Reuse the production domain already hard-coded across sitemap.ts / robots.ts /
// blog metadata. Keeping one constant here avoids a fourth copy drifting.
const SITE_URL = 'https://www.mtouchlabs.com';
const FEED_PATH = '/blog/rss.xml';
const BLOG_PATH = '/blog';

const CHANNEL_TITLE = 'mTouch Labs Blog — Insights & Ideas';
const CHANNEL_DESCRIPTION =
  'Articles and trends shaping the future of technology, design, and innovation, from the team at mTouch Labs.';
const CHANNEL_LANGUAGE = 'en-us';
const CHANNEL_IMAGE = SITE_URL + '/images/Light.png';

// ---------------------------------------------------------------------------
// XML
// ---------------------------------------------------------------------------

// Characters that are simply not legal in XML 1.0, regardless of escaping.
// Stray control bytes pasted into the CMS would otherwise make the whole feed
// unparseable for LinkedIn.
const INVALID_XML_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F\uFFFE\uFFFF]/g;

/** Escape a value for use as XML text or an attribute value. */
function escapeXml(value) {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(INVALID_XML_CHARS, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/** Strip HTML tags / entities down to readable plain text. */
function stripHtml(html) {
  if (!html) return '';
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#0?39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** Truncate on a word boundary without cutting mid-word. */
function truncate(text, maxLength) {
  const value = String(text || '').trim();
  if (value.length <= maxLength) return value;
  const clipped = value.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(' ');
  return (lastSpace > maxLength * 0.6 ? clipped.slice(0, lastSpace) : clipped).replace(/[\s.,;:!-]+$/, '') + '…';
}

// ---------------------------------------------------------------------------
// URLs
// ---------------------------------------------------------------------------

const LOCAL_HOSTS = /^(localhost|127\.0\.0\.1|0\.0\.0\.0|\[::1\])$/i;

/**
 * Turn a stored image / link value into an absolute HTTPS URL on a real host.
 * Returns '' for anything unusable (empty, data:, localhost, preview host) so
 * callers can simply omit the element rather than emit a broken URL.
 */
function toAbsoluteUrl(value, baseUrl) {
  const base = (baseUrl || SITE_URL).replace(/\/+$/, '');
  if (!value) return '';
  let raw = String(value).trim();
  if (!raw) return '';

  if (/^(data|mailto|tel|javascript):/i.test(raw)) return '';

  if (raw.startsWith('//')) raw = 'https:' + raw;
  else if (/^http:\/\//i.test(raw)) raw = 'https://' + raw.slice('http://'.length);

  if (/^https:\/\//i.test(raw)) {
    let parsed;
    try {
      parsed = new URL(raw);
    } catch {
      return '';
    }
    if (LOCAL_HOSTS.test(parsed.hostname)) return '';
    if (/\.vercel\.app$/i.test(parsed.hostname)) return '';
    return parsed.toString();
  }

  // Relative path (e.g. '/uploads/foo.jpg' or 'uploads/foo.jpg')
  return base + '/' + raw.replace(/^\/+/, '');
}

/**
 * The canonical public URL for a blog post.
 *
 * Mirrors the validation already used by `generateMetadata` in
 * `app/blog/[slug]/page.tsx`: an explicitly stored `canonical_url` wins when it
 * is an absolute URL on mtouchlabs.com, otherwise we fall back to the derived
 * `/blog/<slug>` permalink. The result is normalised to `https://www.` so the
 * feed can never expose a non-canonical URL variant.
 */
function blogPermalink(blog, baseUrl) {
  const base = (baseUrl || SITE_URL).replace(/\/+$/, '');
  const fallback = base + BLOG_PATH + '/' + String(blog && blog.slug ? blog.slug : '').replace(/^\/+/, '');

  const stored = blog && typeof blog.canonical_url === 'string' ? blog.canonical_url.trim() : '';
  if (!stored || !/^https?:\/\//i.test(stored)) return fallback;

  let parsed;
  try {
    parsed = new URL(stored);
  } catch {
    return fallback;
  }
  if (!/(^|\.)mtouchlabs\.com$/i.test(parsed.hostname)) return fallback;

  parsed.protocol = 'https:';
  parsed.hostname = 'www.mtouchlabs.com';
  parsed.hash = '';
  // Match `trailingSlash: false` from next.config.js.
  if (parsed.pathname.length > 1) parsed.pathname = parsed.pathname.replace(/\/+$/, '');
  return parsed.toString();
}

/**
 * A permanently stable identifier for a post.
 *
 * Uses the database primary key, so editing the title, slug, excerpt, content
 * or images never produces a second RSS item. Emitted with
 * `isPermaLink="false"` because it is an identifier, not a URL.
 */
function blogGuid(blog) {
  return 'urn:mtouchlabs:blog:' + String(blog && blog.id !== undefined && blog.id !== null ? blog.id : '');
}

// ---------------------------------------------------------------------------
// Dates
// ---------------------------------------------------------------------------

/**
 * Parse a timestamp coming out of Postgres/Neon.
 *
 * Neon may hand back a Date (timestamptz) or a string. A bare
 * 'YYYY-MM-DD HH:mm:ss' string carries no zone, and Postgres compares it
 * against NOW() in the session timezone (UTC on Neon/Vercel), so we pin it to
 * UTC here too. That keeps the feed's idea of "now" identical to the
 * `publish_date <= NOW()` gate the rest of the app already uses — an IST
 * business time such as 2026-08-20 10:00 IST is stored/compared by the
 * existing system, and we do not reinterpret it.
 */
function parseDbDate(value) {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;

  let raw = String(value).trim();
  if (!raw) return null;
  const hasZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(raw);
  if (!hasZone) raw = raw.replace(' ', 'T') + 'Z';
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

/** RFC 822 / RFC 1123 date string, the format RSS 2.0 requires. */
function toRfc822(value) {
  const date = parseDbDate(value);
  return date ? date.toUTCString() : '';
}

/**
 * The post's actual publication moment.
 *
 * `publish_date` is the scheduled/actual go-live time used everywhere in this
 * app; `created_at` is only the fallback for legacy rows that predate the
 * scheduling column. `updated_at` is deliberately never used — re-editing a
 * post must not change its pubDate.
 */
function publicationDate(blog) {
  return parseDbDate(blog && blog.publish_date) || parseDbDate(blog && blog.created_at);
}

// ---------------------------------------------------------------------------
// Publication gate
// ---------------------------------------------------------------------------

/**
 * Mirror of the SQL publication predicate, applied as a defensive second pass
 * in the route. The database query remains authoritative; this exists so the
 * exclusion rules are directly unit-testable and so a clock/driver quirk can
 * never leak a draft or a future-scheduled post into a public feed.
 */
function isPubliclyPublished(blog, now) {
  if (!blog) return false;

  const status = typeof blog.status === 'string' ? blog.status.trim().toLowerCase() : '';
  const isPublished = blog.published === true || status === 'published';
  if (!isPublished) return false;

  // Anything explicitly flagged as not-live never appears, even if a stale
  // `published` boolean says otherwise.
  if (['draft', 'scheduled', 'archived', 'private', 'deleted', 'trash', 'pending'].includes(status)) return false;

  const scheduledFor = parseDbDate(blog.publish_date);
  if (scheduledFor && scheduledFor.getTime() > (now ? now.getTime() : Date.now())) return false;

  if (!blog.slug || !String(blog.slug).trim()) return false;
  if (blog.id === undefined || blog.id === null) return false;

  return true;
}

/**
 * Optional "only posts from here onward" cutoff.
 *
 * Set RSS_MIN_PUBLISH_DATE (an ISO date, e.g. '2026-08-16') to keep the entire
 * back catalogue out of the feed. This exists so that when an RSS→LinkedIn
 * automation is first connected it cannot blast the Company Page with dozens of
 * historical posts: the feed simply never contains them.
 *
 * Leave the variable unset to publish every live post.
 */
function isAfterCutoff(blog, minPublishDate) {
  if (!minPublishDate) return true;
  const cutoff = parseDbDate(minPublishDate);
  if (!cutoff) return true;
  const published = publicationDate(blog);
  if (!published) return false;
  return published.getTime() >= cutoff.getTime();
}

/** Newest first, by actual publication time. Ties break on id for stability. */
function sortByPublicationDesc(blogs) {
  return [...blogs].sort((a, b) => {
    const aTime = publicationDate(a) ? publicationDate(a).getTime() : 0;
    const bTime = publicationDate(b) ? publicationDate(b).getTime() : 0;
    if (bTime !== aTime) return bTime - aTime;
    return Number(b.id) - Number(a.id);
  });
}

// ---------------------------------------------------------------------------
// Feed assembly
// ---------------------------------------------------------------------------

const IMAGE_MIME_TYPES = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  gif: 'image/gif',
  webp: 'image/webp',
  avif: 'image/avif',
  svg: 'image/svg+xml',
};

function guessImageMimeType(url) {
  const match = /\.([a-z0-9]+)(?:$|[?#])/i.exec(String(url || ''));
  return match ? IMAGE_MIME_TYPES[match[1].toLowerCase()] || '' : '';
}

/** Best available featured image for a post, as an absolute HTTPS URL. */
function featuredImageUrl(blog, baseUrl) {
  return toAbsoluteUrl((blog && (blog.image || blog.og_image)) || '', baseUrl);
}

/** Human-readable summary for the item, never empty if we can help it. */
function itemDescription(blog) {
  const explicit = stripHtml(blog && (blog.description || blog.meta_description));
  if (explicit) return truncate(explicit, 400);
  const fromContent = stripHtml(blog && blog.content);
  if (fromContent) return truncate(fromContent, 300);
  return String((blog && blog.title) || '').trim();
}

/** Render a single <item>. */
function buildRssItem(blog, options) {
  const baseUrl = (options && options.baseUrl) || SITE_URL;
  const link = blogPermalink(blog, baseUrl);
  const image = featuredImageUrl(blog, baseUrl);
  const pubDate = toRfc822(publicationDate(blog));
  const author = String((blog && blog.author) || '').trim();
  const category = String((blog && blog.category) || '').trim();
  const mimeType = guessImageMimeType(image);

  const lines = [
    '    <item>',
    '      <title>' + escapeXml(blog.title) + '</title>',
    '      <link>' + escapeXml(link) + '</link>',
    '      <guid isPermaLink="false">' + escapeXml(blogGuid(blog)) + '</guid>',
    '      <description>' + escapeXml(itemDescription(blog)) + '</description>',
  ];

  if (pubDate) lines.push('      <pubDate>' + escapeXml(pubDate) + '</pubDate>');
  // <dc:creator> rather than <author>: RSS 2.0's <author> must be an email
  // address, and we only store display names.
  if (author) lines.push('      <dc:creator>' + escapeXml(author) + '</dc:creator>');
  if (category) lines.push('      <category>' + escapeXml(category) + '</category>');

  if (image) {
    lines.push(
      '      <media:content url="' +
        escapeXml(image) +
        '" medium="image"' +
        (mimeType ? ' type="' + escapeXml(mimeType) + '"' : '') +
        ' />'
    );
    lines.push('      <media:thumbnail url="' + escapeXml(image) + '" />');
  }

  lines.push('    </item>');
  return lines.join('\n');
}

/**
 * Build the complete RSS 2.0 document.
 *
 * @param {Array<object>} blogs   Rows from the `blogs` table.
 * @param {object}        options { baseUrl, now, minPublishDate }
 */
function buildRssXml(blogs, options) {
  const opts = options || {};
  const baseUrl = (opts.baseUrl || SITE_URL).replace(/\/+$/, '');
  const now = opts.now instanceof Date ? opts.now : new Date();

  const minPublishDate = opts.minPublishDate || '';

  const items = sortByPublicationDesc(
    (blogs || []).filter((blog) => isPubliclyPublished(blog, now) && isAfterCutoff(blog, minPublishDate))
  );

  // lastBuildDate reflects the newest publication we are actually serving,
  // falling back to now for an empty feed.
  const newest = items.length ? publicationDate(items[0]) : null;

  const head = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:media="http://search.yahoo.com/mrss/">',
    '  <channel>',
    '    <title>' + escapeXml(CHANNEL_TITLE) + '</title>',
    '    <link>' + escapeXml(baseUrl + BLOG_PATH) + '</link>',
    '    <description>' + escapeXml(CHANNEL_DESCRIPTION) + '</description>',
    '    <language>' + escapeXml(CHANNEL_LANGUAGE) + '</language>',
    '    <lastBuildDate>' + escapeXml(toRfc822(newest || now)) + '</lastBuildDate>',
    '    <ttl>60</ttl>',
    '    <generator>Next.js</generator>',
    '    <atom:link href="' + escapeXml(baseUrl + FEED_PATH) + '" rel="self" type="application/rss+xml" />',
    '    <image>',
    '      <url>' + escapeXml(CHANNEL_IMAGE) + '</url>',
    '      <title>' + escapeXml(CHANNEL_TITLE) + '</title>',
    '      <link>' + escapeXml(baseUrl + BLOG_PATH) + '</link>',
    '    </image>',
  ];

  const body = items.map((blog) => buildRssItem(blog, { baseUrl }));

  return head.concat(body, ['  </channel>', '</rss>', '']).join('\n');
}

module.exports = {
  SITE_URL,
  FEED_PATH,
  BLOG_PATH,
  CHANNEL_TITLE,
  escapeXml,
  stripHtml,
  truncate,
  toAbsoluteUrl,
  blogPermalink,
  blogGuid,
  parseDbDate,
  toRfc822,
  publicationDate,
  isPubliclyPublished,
  isAfterCutoff,
  sortByPublicationDesc,
  featuredImageUrl,
  itemDescription,
  buildRssItem,
  buildRssXml,
};
