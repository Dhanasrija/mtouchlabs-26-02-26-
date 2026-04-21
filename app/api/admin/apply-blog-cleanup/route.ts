import { sql } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/* ────────────────────────────────────────────────────────────────────────────
 * One-click admin job:
 *   1) UPDATE the ecommerce blog with the latest content + FAQs + internal links
 *   2) Normalize every blog's `category` into the canonical 5
 *   3) Normalize every blog's `tags` (remove bare "AI" / "Web",
 *      map to "AI & Automation" / "Web Development", dedupe)
 *   4) Revalidate /blog and /blog/<slug> so ISR re-renders immediately
 *
 * USAGE (dev):
 *   open in browser:
 *     http://localhost:3001/api/admin/apply-blog-cleanup?key=mtouch-auto-blog
 *   or curl:
 *     curl -X POST "http://localhost:3001/api/admin/apply-blog-cleanup?key=mtouch-auto-blog"
 *
 * Secret defaults to "mtouch-auto-blog" if CRON_SECRET is not set.
 * ──────────────────────────────────────────────────────────────────────────── */

export const dynamic = 'force-dynamic';

const SITE_URL = 'https://www.mtouchlabs.com';
const ECOMMERCE_SLUG = 'a-complete-guide-on-ecommerce-mobile-app-development';

const CANONICAL = [
  'AI & Automation',
  'Web Development',
  'Mobile App',
  'Cloud & DevOps',
  'Digital Transformation',
] as const;

function normalizeCategory(raw: string | null | undefined): string {
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

const TAG_MAP = new Map<string, string>([
  ['ai', 'AI & Automation'],
  ['a.i.', 'AI & Automation'],
  ['artificial intelligence', 'AI & Automation'],
  ['automation', 'AI & Automation'],
  ['ai & automation', 'AI & Automation'],

  ['web', 'Web Development'],
  ['web dev', 'Web Development'],
  ['web development', 'Web Development'],

  ['mobile app', 'Mobile'],
  ['mobile', 'Mobile'],

  ['cloud & devops', 'Cloud'],
  ['cloud', 'Cloud'],
  ['devops', 'DevOps'],

  ['saas', 'SaaS'],
  ['ecommerce', 'Ecommerce'],
  ['e-commerce', 'Ecommerce'],
  ['security', 'Security'],
  ['startup', 'Startup'],
  ['enterprise', 'Enterprise'],
  ['ux', 'UX'],
  ['ui', 'UX'],
]);

function normalizeTags(input: unknown): string[] {
  const arr: string[] = Array.isArray(input)
    ? (input as unknown[]).map((t) => String(t))
    : [];
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of arr) {
    if (raw == null) continue;
    const key = String(raw).trim().toLowerCase();
    if (!key) continue;
    const mapped = TAG_MAP.get(key) ?? String(raw).trim();
    const dedupeKey = mapped.toLowerCase();
    if (seen.has(dedupeKey)) continue;
    seen.add(dedupeKey);
    out.push(mapped);
  }
  return out;
}

function arraysEqual(a: unknown[], b: unknown[]): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

/* ── ECOMMERCE BLOG CONTENT ───────────────────────────────────────────────── */
const EC_TITLE = 'eCommerce Mobile App Development Guide (2026)';
const EC_META_TITLE = 'Ecommerce App Development Guide (2026) | mTouch Labs';
const EC_DESCRIPTION =
  'Complete guide to ecommerce mobile app development in 2026. Learn features, cost, process and how to build scalable ecommerce apps.';
const EC_FOCUS_KEYWORD = 'ecommerce mobile app development';
const EC_CATEGORY = 'Mobile App';
const EC_TAGS = ['Mobile', 'Ecommerce', 'SaaS', 'Enterprise'];
const EC_CANONICAL_URL = `${SITE_URL}/blog/${ECOMMERCE_SLUG}`;
/*
 * The real image lives in /public/images/blogs/ (note the "s") and is named
 * to match the slug. Previous run mistakenly wrote "/images/blog/ecommerce-blog.png"
 * which 404s. This path actually exists on disk.
 */
const EC_IMAGE_FALLBACK = '/images/blogs/a-complete-guide-on-ecommerce-app-development-blog.png';

/*
 * NOTE on TOC:
 * The /blog/[slug] page extracts the TOC with a two-pass regex.
 * First pass picks up h2-h4 that HAVE an id="..." attribute.
 * If first pass finds < 3 headings, fallback picks up every h2-h6
 * (which would drag FAQ <h3> questions into the TOC).
 * By giving every section <h2> an explicit id, the first pass
 * always succeeds → fallback never fires → FAQ questions stay out of TOC.
 */
const EC_CONTENT_HTML = `
<h2 id="introduction">🚀 Introduction</h2>
<p>The way people shop has changed dramatically. Customers today expect fast, personalized, and seamless mobile experiences, and businesses that fail to deliver risk losing them.</p>
<p>This is why <strong>eCommerce mobile app development</strong> has become a priority for modern businesses. A well-built app is not just a sales channel — it is a powerful growth engine that improves engagement, retention, and revenue.</p>

<h2 id="why-ecommerce-apps">📈 Why Businesses Are Moving to eCommerce Apps</h2>
<p>Businesses are increasingly shifting from web-only platforms to mobile apps because:</p>
<ul>
  <li>Apps offer faster performance</li>
  <li>Push notifications improve customer engagement</li>
  <li>Personalized experiences increase conversion rates</li>
</ul>
<p>Many brands integrate their apps with <a href="/mobile-app-development-company">mobile app development services</a> to ensure scalability and performance.</p>

<h2 id="core-features">🧩 Core Features of a Successful eCommerce App</h2>
<p>A competitive ecommerce app should include:</p>
<ul>
  <li>User registration &amp; profiles</li>
  <li>Smart search and filters</li>
  <li>Secure payment gateway</li>
  <li>Order tracking system</li>
  <li>Push notifications</li>
  <li>Reviews and ratings</li>
</ul>
<p>Advanced platforms also leverage <a href="/ai-development-company">AI development services</a> for personalized recommendations.</p>

<h2 id="types-of-apps">🛒 Types of eCommerce Applications</h2>
<p>Different business models require different app types:</p>
<ul>
  <li>B2C (Business to Customer)</li>
  <li>B2B (Business to Business)</li>
  <li>Multi-vendor marketplaces</li>
  <li>Subscription-based platforms</li>
</ul>
<p>Each type requires a tailored development approach.</p>

<h2 id="development-process">⚙️ Step-by-Step Development Process</h2>
<h3>1. Business Analysis</h3>
<p>Understanding target audience and product strategy.</p>
<h3>2. UI/UX Design</h3>
<p>Designing smooth and intuitive shopping journeys.</p>
<h3>3. Development</h3>
<p>Building scalable frontend and backend systems.</p>
<h3>4. Testing</h3>
<p>Ensuring performance, security, and usability.</p>
<h3>5. Launch &amp; Optimization</h3>
<p>Continuous improvements based on user behavior.</p>
<p>Businesses looking for complete solutions often rely on <a href="/custom-software-development-company">custom software development services</a>.</p>

<h2 id="cost-factors">💰 Key Cost Factors (Without Fixed Pricing)</h2>
<p>Instead of fixed numbers, ecommerce app cost depends on:</p>
<ul>
  <li>Feature complexity</li>
  <li>Number of integrations</li>
  <li>Platform (Android / iOS / Web)</li>
  <li>Scalability requirements</li>
</ul>
<p>For detailed cost insights, explore <a href="/blog/mobile-app-development-cost-india">mobile app development cost in India</a>.</p>

<h2 id="challenges">⚠️ Common Challenges &amp; Solutions</h2>
<p><strong>Challenge:</strong> High competition<br /><strong>Solution:</strong> Focus on UX + personalization.</p>
<p><strong>Challenge:</strong> User retention<br /><strong>Solution:</strong> Use push notifications &amp; loyalty features.</p>
<p><strong>Challenge:</strong> Scalability<br /><strong>Solution:</strong> Use robust backend architecture.</p>

<h2 id="future-trends">🔮 Future Trends in eCommerce Apps</h2>
<ul>
  <li>AI-powered personalization</li>
  <li>Voice search</li>
  <li>AR/VR shopping experiences</li>
  <li>Faster checkout systems</li>
</ul>
<p>Businesses investing early gain a strong competitive edge.</p>

<h2 id="why-mtouch-labs">🏢 Why Choose mTouch Labs</h2>
<p>At mTouch Labs, we help businesses:</p>
<ul>
  <li>Build scalable ecommerce applications</li>
  <li>Integrate AI-powered features</li>
  <li>Deliver high-performance user experiences</li>
</ul>
<p>Our focus is on long-term growth and performance.</p>

<h2 id="faqs">❓ FAQs</h2>
<h3>What is ecommerce mobile app development?</h3>
<p>It is the process of building mobile applications that allow users to browse, purchase, and manage products online.</p>
<h3>What features should an ecommerce app include?</h3>
<p>Essential features include product listings, payments, order tracking, and user profiles.</p>
<h3>How long does it take to develop an ecommerce app?</h3>
<p>Typically 3 to 6 months depending on features and complexity.</p>
<h3>Why are mobile apps better than ecommerce websites?</h3>
<p>Mobile apps offer faster performance, better engagement, and higher conversion rates.</p>
<h3>Why choose mTouch Labs for ecommerce app development?</h3>
<p>mTouch Labs provides scalable ecommerce solutions with advanced features and seamless integrations.</p>
<h3>Can ecommerce apps use AI features?</h3>
<p>Yes, AI is used for recommendations, personalization, and automation.</p>
`.trim();

const EC_FAQ_SCHEMA = [
  { question: 'What is ecommerce mobile app development?',            answer: 'Ecommerce mobile app development is the process of creating mobile applications that allow users to browse, purchase, and manage products online.' },
  { question: 'What features should an ecommerce app include?',       answer: 'An ecommerce app should include product listings, secure payment integration, user profiles, order tracking, push notifications, and search functionality.' },
  { question: 'How long does it take to develop an ecommerce mobile app?', answer: 'Ecommerce mobile app development typically takes between 3 to 6 months depending on the features, complexity, and integrations required.' },
  { question: 'Why are mobile apps important for ecommerce businesses?',   answer: 'Mobile apps improve user engagement, offer faster performance, enable personalization, and increase conversion rates compared to traditional ecommerce websites.' },
  { question: 'Can ecommerce apps integrate AI features?',            answer: 'Yes, ecommerce apps can integrate AI features such as product recommendations, chatbots, personalized experiences, and predictive analytics.' },
  { question: 'Why choose mTouch Labs for ecommerce app development?', answer: 'mTouch Labs provides scalable ecommerce app development solutions with advanced features, seamless integrations, and a focus on performance and long-term growth.' },
  { question: 'Does mTouch Labs provide end-to-end ecommerce app development?', answer: 'Yes, mTouch Labs offers complete ecommerce app development services including planning, design, development, testing, deployment, and ongoing support.' },
];

/* ── Auth helper ──────────────────────────────────────────────────────────── */
function isAuthorized(req: NextRequest): boolean {
  const expected = process.env.CRON_SECRET || 'mtouch-auto-blog';
  const urlKey = req.nextUrl.searchParams.get('key');
  const headerKey = req.headers.get('authorization')?.replace(/^Bearer\s+/i, '');
  return urlKey === expected || headerKey === expected;
}

/* ── Main handler ─────────────────────────────────────────────────────────── */
async function handle(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: 'Unauthorized — append ?key=YOUR_CRON_SECRET' }, { status: 401 });
  }

  const report: Record<string, unknown> = {};

  /* ── 0) REPAIR updated_at ───────────────────────────────────────────────────
   *
   *    An earlier version of this route was bumping `updated_at = NOW()` on
   *    every normalization UPDATE. That poisoned a handful of rows so they
   *    all showed today's date on the /blog listing and crowded the top.
   *
   *    For every blog EXCEPT the ecommerce one we're actually editing now,
   *    reset `updated_at` back to the publish date. That way:
   *      • sort order (GREATEST of updated_at/publish_date/created_at) falls
   *        back to the real publish_date, so the listing is chronological again,
   *      • the "Last Updated: …" label (shown only when updated_at > publish_date)
   *        will appear on the ecommerce blog only.
   * ──────────────────────────────────────────────────────────────────────── */
  const repaired = await sql`
    UPDATE blogs
       SET updated_at = COALESCE(publish_date, created_at)
     WHERE slug <> ${ECOMMERCE_SLUG}
       AND (
         updated_at IS NULL
         OR updated_at > COALESCE(publish_date, created_at) + INTERVAL '1 hour'
       )
    RETURNING id, slug, updated_at
  ` as { id: number; slug: string; updated_at: string }[];
  report.updated_at_repaired = { count: repaired.length, rows: repaired };

  /* ── 1) Normalize categories FIRST (do NOT bump updated_at — these are metadata-only fixes) ── */
  const catRows = await sql`
    SELECT id, slug, category FROM blogs
  ` as { id: number; slug: string; category: string | null }[];
  const catChanges: { id: number; slug: string; from: string | null; to: string }[] = [];
  for (const r of catRows) {
    const target = normalizeCategory(r.category);
    if (target !== r.category) {
      await sql`UPDATE blogs SET category = ${target} WHERE id = ${r.id}`;
      catChanges.push({ id: r.id, slug: r.slug, from: r.category, to: target });
    }
  }
  report.categories_normalized = { count: catChanges.length, changes: catChanges };

  /* ── 2) Normalize tags (also metadata-only — do NOT touch updated_at) ── */
  const tagRows = await sql`
    SELECT id, slug, tags FROM blogs
  ` as { id: number; slug: string; tags: unknown }[];
  const tagChanges: { id: number; slug: string; from: string[]; to: string[] }[] = [];
  for (const r of tagRows) {
    const current = Array.isArray(r.tags) ? (r.tags as string[]) : [];
    const next = normalizeTags(current);
    if (!arraysEqual(current, next)) {
      await sql`UPDATE blogs SET tags = ${next} WHERE id = ${r.id}`;
      tagChanges.push({ id: r.id, slug: r.slug, from: current, to: next });
    }
  }
  report.tags_normalized = { count: tagChanges.length, changes: tagChanges };

  /* ── 3) UPDATE the ecommerce blog LAST so its updated_at is the newest → pins it to the top ── */
  const existing = await sql`
    SELECT id, slug, title, image FROM blogs WHERE slug = ${ECOMMERCE_SLUG}
  ` as { id: number; slug: string; title: string; image: string }[];

  if (existing.length === 0) {
    report.ecommerce_update = { ok: false, reason: `No row with slug "${ECOMMERCE_SLUG}"` };
  } else {
    /*
     * Image resolution:
     *   - If the existing image points to the broken "/images/blog/..." path
     *     (a previous run bug), replace it with the real file that lives in
     *     /images/blogs/ (with an "s").
     *   - Otherwise keep whatever image was there.
     */
    const currentImage = existing[0].image || '';
    const isBroken =
      !currentImage ||
      currentImage.startsWith('/images/blog/') ||           // singular "blog" folder doesn't exist
      currentImage === '/images/blog/ecommerce-blog.png';
    const nextImage = isBroken ? EC_IMAGE_FALLBACK : currentImage;

    const result = await sql`
      UPDATE blogs SET
        title = ${EC_TITLE},
        description = ${EC_DESCRIPTION},
        content = ${EC_CONTENT_HTML},
        category = ${EC_CATEGORY},
        tags = ${EC_TAGS},
        meta_title = ${EC_META_TITLE},
        meta_description = ${EC_DESCRIPTION},
        og_title = ${EC_TITLE},
        og_description = ${EC_DESCRIPTION},
        focus_keyword = ${EC_FOCUS_KEYWORD},
        canonical_url = ${EC_CANONICAL_URL},
        schema_type = 'BlogPosting',
        faq_schema = ${JSON.stringify(EC_FAQ_SCHEMA)},
        image = ${nextImage},
        updated_at = NOW()
      WHERE slug = ${ECOMMERCE_SLUG}
      RETURNING id, slug, title, category, image, updated_at
    ` as { id: number; slug: string; title: string; category: string; image: string; updated_at: string }[];
    report.ecommerce_update = {
      ok: true,
      row: result[0],
      image_before: currentImage,
      image_after: nextImage,
      image_fix_applied: isBroken,
    };
  }

  /* ── 4) Revalidate pages so ISR cache flushes NOW ─────── */
  try {
    revalidatePath('/blog');
    revalidatePath(`/blog/${ECOMMERCE_SLUG}`);
    report.revalidated = ['/blog', `/blog/${ECOMMERCE_SLUG}`];
  } catch (e) {
    report.revalidate_error = (e as Error).message;
  }

  return NextResponse.json({ success: true, ...report });
}

export async function GET(req: NextRequest)  { return handle(req); }
export async function POST(req: NextRequest) { return handle(req); }
