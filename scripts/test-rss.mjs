/**
 * Tests for the blog RSS feed logic.
 *
 * Zero dependencies — uses Node's built-in test runner:
 *
 *     npm run test:rss
 *
 * These cover the pure feed-building logic in lib/rss-feed.js (the same module
 * app/blog/rss.xml/route.ts uses). An optional live-feed smoke check can be run
 * against a real URL:
 *
 *     npm run test:rss:live -- http://localhost:3000/blog/rss.xml
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const rss = require('../lib/rss-feed.js');

const {
  escapeXml,
  toAbsoluteUrl,
  blogPermalink,
  blogGuid,
  toRfc822,
  publicationDate,
  isPubliclyPublished,
  buildRssXml,
} = rss;

const NOW = new Date('2026-08-16T12:00:00Z');

/** A published post, newest. */
const publishedA = {
  id: 101,
  slug: 'ai-in-mobile-apps',
  title: 'AI in Mobile Apps',
  description: 'How on-device AI is reshaping mobile products.',
  content: '<p>Long form content.</p>',
  image: '/uploads/ai-in-mobile-apps.jpg',
  og_image: '',
  canonical_url: 'https://www.mtouchlabs.com/blog/ai-in-mobile-apps',
  author: 'mTouch Labs',
  category: 'Mobile App',
  status: 'published',
  published: true,
  publish_date: '2026-08-10 09:00:00',
  created_at: '2026-08-01 09:00:00',
};

/** An older published post with no image and no canonical stored. */
const publishedB = {
  id: 102,
  slug: 'scaling-nextjs',
  title: 'Scaling Next.js & "Edge" <Runtimes>',
  description: 'Notes on scale — caching, ISR & the edge.',
  content: '',
  image: '',
  og_image: '',
  canonical_url: '',
  author: 'Priya S',
  category: 'Web Development',
  status: 'published',
  published: true,
  publish_date: '2026-07-01 06:30:00',
  created_at: '2026-06-20 06:30:00',
};

/** Legacy row: published, no publish_date at all. */
const publishedLegacy = {
  id: 103,
  slug: 'legacy-post',
  title: 'Legacy Post',
  description: 'Predates the scheduling column.',
  image: '',
  canonical_url: '',
  author: '',
  category: '',
  status: 'published',
  published: true,
  publish_date: null,
  created_at: '2026-05-05 05:00:00',
};

const scheduledFuture = {
  ...publishedA,
  id: 201,
  slug: 'future-post',
  title: 'Future Post',
  status: 'scheduled',
  published: false,
  publish_date: '2026-08-20 10:00:00',
};

/** The nastiest case: flagged published but the go-live time has not arrived. */
const publishedButFutureDated = {
  ...publishedA,
  id: 202,
  slug: 'published-but-future',
  title: 'Published But Future Dated',
  status: 'published',
  published: true,
  publish_date: '2026-08-20 04:30:00',
};

const draft = { ...publishedA, id: 203, slug: 'draft-post', title: 'Draft Post', status: 'draft', published: false };
const privatePost = { ...publishedA, id: 204, slug: 'private-post', title: 'Private', status: 'private', published: true };
const archived = { ...publishedA, id: 205, slug: 'archived-post', title: 'Archived', status: 'archived', published: true };

const ALL = [publishedA, publishedB, publishedLegacy, scheduledFuture, publishedButFutureDated, draft, privatePost, archived];

function feed(blogs = ALL) {
  return buildRssXml(blogs, { now: NOW });
}

function itemBlocks(xml) {
  return xml.split('<item>').slice(1).map((chunk) => chunk.split('</item>')[0]);
}

// ---------------------------------------------------------------------------

test('published blog appears in the feed', () => {
  const xml = feed();
  assert.ok(xml.includes('<title>AI in Mobile Apps</title>'));
  assert.ok(xml.includes('https://www.mtouchlabs.com/blog/ai-in-mobile-apps'));
});

test('scheduled future blog does not appear', () => {
  const xml = feed();
  assert.ok(!xml.includes('Future Post'));
  assert.ok(!xml.includes('/blog/future-post'));
  assert.equal(isPubliclyPublished(scheduledFuture, NOW), false);
});

test('a blog flagged published but dated in the future still does not appear', () => {
  const xml = feed();
  assert.ok(!xml.includes('Published But Future Dated'));
  assert.equal(isPubliclyPublished(publishedButFutureDated, NOW), false);
});

test('draft blog does not appear', () => {
  const xml = feed();
  assert.ok(!xml.includes('Draft Post'));
  assert.equal(isPubliclyPublished(draft, NOW), false);
});

test('private and archived blogs do not appear', () => {
  const xml = feed();
  assert.ok(!xml.includes('>Private<'));
  assert.ok(!xml.includes('>Archived<'));
  assert.equal(isPubliclyPublished(privatePost, NOW), false);
  assert.equal(isPubliclyPublished(archived, NOW), false);
});

test('a deleted blog simply is not in the input set and so is not in the feed', () => {
  const remaining = ALL.filter((b) => b.id !== publishedA.id);
  const xml = buildRssXml(remaining, { now: NOW });
  assert.ok(!xml.includes('AI in Mobile Apps'));
  assert.ok(xml.includes('Scaling Next.js'));
});

test('the scheduled post becomes visible once its publish time passes', () => {
  const after = new Date('2026-08-20T10:00:01Z');
  const promoted = { ...scheduledFuture, status: 'published', published: true };
  assert.equal(isPubliclyPublished(promoted, after), true);
  const xml = buildRssXml([...ALL, promoted].filter((b) => b !== scheduledFuture), { now: after });
  assert.ok(xml.includes('Future Post'));
  // ...and it is the newest item.
  assert.match(itemBlocks(xml)[0], /Future Post/);
});

test('canonical URL is correct and absolute', () => {
  const xml = feed();
  for (const block of itemBlocks(xml)) {
    const link = /<link>([^<]+)<\/link>/.exec(block)[1];
    assert.ok(link.startsWith('https://www.mtouchlabs.com/blog/'), 'expected canonical blog URL, got ' + link);
  }
  // Derived when nothing is stored.
  assert.equal(blogPermalink(publishedB), 'https://www.mtouchlabs.com/blog/scaling-nextjs');
});

test('non-canonical URL variants are normalised, off-domain canonicals ignored', () => {
  assert.equal(
    blogPermalink({ slug: 'x', canonical_url: 'http://mtouchlabs.com/blog/x/' }),
    'https://www.mtouchlabs.com/blog/x'
  );
  assert.equal(
    blogPermalink({ slug: 'x', canonical_url: 'https://evil.example.com/blog/x' }),
    'https://www.mtouchlabs.com/blog/x'
  );
  assert.equal(
    blogPermalink({ slug: 'x', canonical_url: 'http://localhost:3000/blog/x' }),
    'https://www.mtouchlabs.com/blog/x'
  );
});

test('never emits localhost, preview or http URLs', () => {
  const xml = feed();
  assert.ok(!/localhost/i.test(xml));
  assert.ok(!/vercel\.app/i.test(xml));
  assert.ok(!/http:\/\//i.test(xml.replace(/xmlns[^"]*="http:\/\/[^"]*"/g, '')));
  assert.equal(toAbsoluteUrl('http://localhost:3000/uploads/a.jpg'), '');
  assert.equal(toAbsoluteUrl('https://preview-abc.vercel.app/a.jpg'), '');
  assert.equal(toAbsoluteUrl('/uploads/a.jpg'), 'https://www.mtouchlabs.com/uploads/a.jpg');
});

test('GUID is stable across every editable field and is not the title', () => {
  const before = blogGuid(publishedA);
  const edited = {
    ...publishedA,
    title: 'A Completely Different Title',
    slug: 'a-completely-different-slug',
    description: 'rewritten',
    content: '<p>rewritten</p>',
    image: '/uploads/new.jpg',
    canonical_url: 'https://www.mtouchlabs.com/blog/a-completely-different-slug',
  };
  assert.equal(blogGuid(edited), before);
  assert.equal(before, 'urn:mtouchlabs:blog:101');
  assert.ok(!before.toLowerCase().includes('ai-in-mobile'));
});

test('editing a published post yields one item, not two', () => {
  const edited = { ...publishedA, title: 'Edited Title', description: 'Edited excerpt' };
  const xml = buildRssXml([edited], { now: NOW });
  assert.equal(itemBlocks(xml).length, 1);
  assert.ok(xml.includes('urn:mtouchlabs:blog:101'));
  assert.ok(xml.includes('isPermaLink="false"'));
});

test('publication date uses publish_date, never updated_at or now', () => {
  assert.equal(toRfc822(publicationDate(publishedA)), 'Mon, 10 Aug 2026 09:00:00 GMT');
  const touched = { ...publishedA, updated_at: '2026-08-15 09:00:00' };
  assert.equal(toRfc822(publicationDate(touched)), 'Mon, 10 Aug 2026 09:00:00 GMT');
  // Legacy rows fall back to created_at.
  assert.equal(toRfc822(publicationDate(publishedLegacy)), 'Tue, 05 May 2026 05:00:00 GMT');
});

test('pubDate is a valid RFC 822 date', () => {
  const xml = feed();
  const dates = [...xml.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((m) => m[1]);
  assert.ok(dates.length >= 3);
  for (const d of dates) {
    assert.match(d, /^[A-Z][a-z]{2}, \d{2} [A-Z][a-z]{2} \d{4} \d{2}:\d{2}:\d{2} GMT$/);
    assert.ok(!Number.isNaN(new Date(d).getTime()));
  }
});

test('items are newest-first by publication time', () => {
  const xml = feed();
  const dates = [...xml.matchAll(/<pubDate>([^<]+)<\/pubDate>/g)].map((m) => new Date(m[1]).getTime());
  const sorted = [...dates].sort((a, b) => b - a);
  assert.deepEqual(dates, sorted);
  assert.match(itemBlocks(xml)[0], /AI in Mobile Apps/);
});

test('special characters are escaped correctly', () => {
  const xml = feed();
  assert.ok(xml.includes('Scaling Next.js &amp; &quot;Edge&quot; &lt;Runtimes&gt;'));
  assert.ok(!/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/.test(xml), 'found a raw ampersand');
  assert.equal(escapeXml('<a href="x">R&D\'s</a>'), '&lt;a href=&quot;x&quot;&gt;R&amp;D&apos;s&lt;/a&gt;');
});

test('feed is well-formed XML', async () => {
  const xml = feed();
  assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
  assert.ok(xml.trimEnd().endsWith('</rss>'));
  // Balanced tags for every element we emit.
  for (const tag of ['channel', 'title', 'link', 'description', 'item', 'guid', 'pubDate']) {
    const open = (xml.match(new RegExp('<' + tag + '(?=[\\s>])', 'g')) || []).length;
    const close = (xml.match(new RegExp('</' + tag + '>', 'g')) || []).length;
    assert.equal(open, close, 'unbalanced <' + tag + '>');
  }
  // Parse it for real if a parser is available in the environment.
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(xml, 'application/xml');
    assert.equal(doc.getElementsByTagName('parsererror').length, 0);
  }
});

test('channel metadata is complete and self-referential', () => {
  const xml = feed();
  const channel = xml.split('<item>')[0];
  assert.ok(channel.includes('<title>'));
  assert.ok(channel.includes('<link>https://www.mtouchlabs.com/blog</link>'));
  assert.ok(channel.includes('<description>'));
  assert.ok(channel.includes('<language>en-us</language>'));
  assert.ok(channel.includes('<lastBuildDate>'));
  assert.ok(
    channel.includes('<atom:link href="https://www.mtouchlabs.com/blog/rss.xml" rel="self" type="application/rss+xml" />')
  );
});

test('every item has the required elements', () => {
  for (const block of itemBlocks(feed())) {
    for (const tag of ['title', 'link', 'guid', 'description', 'pubDate']) {
      assert.match(block, new RegExp('<' + tag + '[\\s>]'), 'missing <' + tag + '>');
    }
    assert.ok(/<description>\s*\S/.test(block), 'empty description');
  }
});

test('featured image is included as an absolute URL when present', () => {
  const xml = feed();
  assert.ok(
    xml.includes('<media:content url="https://www.mtouchlabs.com/uploads/ai-in-mobile-apps.jpg" medium="image" type="image/jpeg" />')
  );
  assert.ok(xml.includes('<media:thumbnail url="https://www.mtouchlabs.com/uploads/ai-in-mobile-apps.jpg" />'));
});

test('missing featured image does not break the feed', () => {
  const xml = buildRssXml([publishedB], { now: NOW });
  assert.equal(itemBlocks(xml).length, 1);
  assert.ok(!xml.includes('media:content'));
  assert.ok(xml.includes('<title>Scaling Next.js'));
});

test('og_image is used when image is empty', () => {
  const xml = buildRssXml([{ ...publishedB, og_image: 'https://cdn.example.com/cover.png' }], { now: NOW });
  assert.ok(xml.includes('url="https://cdn.example.com/cover.png"'));
});

test('description falls back to content when no excerpt is stored', () => {
  const xml = buildRssXml(
    [{ ...publishedB, description: '', meta_description: '', content: '<h2>Hi</h2><p>Body text here.</p>' }],
    { now: NOW }
  );
  assert.ok(xml.includes('<description>Hi Body text here.</description>'));
});

test('an empty result set still produces a valid feed', () => {
  const xml = buildRssXml([], { now: NOW });
  assert.ok(xml.includes('<channel>'));
  assert.equal(itemBlocks(xml).length, 0);
  assert.ok(xml.trimEnd().endsWith('</rss>'));
});

test('RSS_MIN_PUBLISH_DATE cutoff hides the back catalogue', () => {
  // Cutoff set to 2026-08-01: only publishedA (10 Aug) survives.
  const xml = buildRssXml(ALL, { now: NOW, minPublishDate: '2026-08-01' });
  assert.equal(itemBlocks(xml).length, 1);
  assert.ok(xml.includes('AI in Mobile Apps'));
  assert.ok(!xml.includes('Scaling Next.js'));
  assert.ok(!xml.includes('Legacy Post'));
});

test('no cutoff means every live post is included', () => {
  assert.equal(itemBlocks(buildRssXml(ALL, { now: NOW })).length, 3);
  assert.equal(itemBlocks(buildRssXml(ALL, { now: NOW, minPublishDate: '' })).length, 3);
});

test('a post published after the cutoff still appears later', () => {
  const later = new Date('2026-09-01T00:00:00Z');
  const brandNew = { ...publishedB, id: 300, slug: 'brand-new', title: 'Brand New', publish_date: '2026-08-30 08:00:00' };
  const xml = buildRssXml([...ALL, brandNew], { now: later, minPublishDate: '2026-08-16' });
  const blocks = itemBlocks(xml);
  // 'Brand New' (30 Aug) plus 'Published But Future Dated' (20 Aug) — both are
  // now genuinely live and both fall after the cutoff. The pre-cutoff archive
  // (10 Aug, 1 Jul, 5 May) stays out, and the still-scheduled row stays out.
  assert.equal(blocks.length, 2);
  assert.match(blocks[0], /Brand New/);
  assert.ok(!xml.includes('AI in Mobile Apps'));
  assert.ok(!xml.includes('Future Post'));
});

test('the cutoff never lets a draft or future post through', () => {
  const xml = buildRssXml(ALL, { now: NOW, minPublishDate: '2020-01-01' });
  assert.ok(!xml.includes('Draft Post'));
  assert.ok(!xml.includes('Future Post'));
  assert.ok(!xml.includes('Published But Future Dated'));
});

test('rows with no id or slug are skipped rather than emitting a broken item', () => {
  assert.equal(isPubliclyPublished({ ...publishedA, id: null }, NOW), false);
  assert.equal(isPubliclyPublished({ ...publishedA, slug: '' }, NOW), false);
});
