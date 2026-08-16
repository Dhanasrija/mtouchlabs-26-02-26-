/**
 * Live smoke check for the public RSS feed. No dependencies.
 *
 *   npm run test:rss:live                       # checks production
 *   npm run test:rss:live -- http://localhost:3000/blog/rss.xml
 *
 * Verifies the content type, that the body is well-formed RSS, that every item
 * has the required elements, that links are absolute HTTPS mtouchlabs.com URLs,
 * that GUIDs are unique, and that items are newest-first.
 */

const url = process.argv[2] || 'https://www.mtouchlabs.com/blog/rss.xml';

const failures = [];
const warnings = [];
const check = (ok, message) => {
  console.log((ok ? '  PASS  ' : '  FAIL  ') + message);
  if (!ok) failures.push(message);
};
const warn = (message) => {
  console.log('  NOTE  ' + message);
  warnings.push(message);
};

console.log('Checking ' + url + '\n');

const response = await fetch(url, { headers: { 'User-Agent': 'mtouchlabs-rss-check' }, redirect: 'follow' });
const body = await response.text();
const contentType = response.headers.get('content-type') || '';

check(response.status === 200, 'HTTP 200 (got ' + response.status + ')');
check(response.url === url || response.url.startsWith('https://www.mtouchlabs.com') || url.includes('localhost'),
  'no unexpected redirect (final URL ' + response.url + ')');
check(/application\/rss\+xml/i.test(contentType), 'Content-Type is application/rss+xml (got "' + contentType + '")');
check(/charset=utf-8/i.test(contentType), 'charset=utf-8 declared');
check(body.startsWith('<?xml'), 'starts with an XML declaration');
check(body.includes('<rss version="2.0"'), 'is RSS 2.0');
check(body.includes('rel="self"'), 'declares an atom:self link');
check(body.includes('<lastBuildDate>'), 'has lastBuildDate');
check(!/localhost|127\.0\.0\.1|vercel\.app/i.test(body), 'contains no localhost / preview URLs');
check(!/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;)/.test(body), 'contains no unescaped ampersands');

const items = body.split('<item>').slice(1).map((chunk) => chunk.split('</item>')[0]);

// An empty feed is a valid feed. It is the expected state right after setting
// RSS_MIN_PUBLISH_DATE but before the first post lands after that cutoff, so
// this is a note rather than a failure.
if (items.length === 0) {
  warn('feed is valid but contains 0 items — expected if RSS_MIN_PUBLISH_DATE is set and nothing has published since');
} else {
  console.log('  INFO  ' + items.length + ' item(s) in the feed');
}

/** Turn escaped XML back into readable text, for display only. */
const unescapeXml = (s) =>
  String(s)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&');

const pick = (block, tag) => {
  const m = new RegExp('<' + tag + '[^>]*>([\\s\\S]*?)</' + tag + '>').exec(block);
  return m ? m[1].trim() : '';
};

const guids = [];
const times = [];
items.forEach((block, i) => {
  const label = 'item ' + (i + 1);
  const link = pick(block, 'link');
  const guid = pick(block, 'guid');
  const pubDate = pick(block, 'pubDate');
  check(!!pick(block, 'title'), label + ': has a title');
  check(/^https:\/\/www\.mtouchlabs\.com\/blog\//.test(link), label + ': canonical link (' + link + ')');
  check(!!guid, label + ': has a guid');
  check(!!pick(block, 'description'), label + ': has a description');
  check(!Number.isNaN(new Date(pubDate).getTime()) && pubDate !== '', label + ': valid pubDate (' + pubDate + ')');
  guids.push(guid);
  times.push(new Date(pubDate).getTime());
});

if (items.length) {
  check(new Set(guids).size === guids.length, 'all GUIDs are unique');
  check(times.every((t, i) => i === 0 || times[i - 1] >= t), 'items are newest-first');
  check(times.every((t) => t <= Date.now() + 60_000), 'no item is dated in the future');

  // Print the feed contents so you can eyeball exactly what an automation
  // service would post if you connected it right now.
  console.log('\nFeed contents (this is what would get posted to LinkedIn):');
  items.forEach((block, i) => {
    console.log(
      '  ' + String(i + 1).padStart(2) + '. ' + unescapeXml(pick(block, 'title')) +
      '\n      ' + pick(block, 'link') +
      '\n      published ' + pick(block, 'pubDate') + '   guid ' + pick(block, 'guid')
    );
  });
}

console.log('');
if (warnings.length) console.log(warnings.length + ' note(s).');
console.log(failures.length ? failures.length + ' check(s) FAILED.' : 'All checks passed.');
process.exit(failures.length ? 1 : 0);
