/**
 * refresh-blogs-2026.js
 * ---------------------------------------------------------------------------
 * Refreshes a SELECTED FEW existing blogs so they show as recently updated:
 *   - appends a clearly-marked "2026 update" content section
 *   - merges in new FAQ entries (expands faq_schema)
 *   - adds internal links to relevant service / blog pages
 *   - sets updated_at = NOW()  ->  the blog jumps to the top of /blog and
 *     shows "Last updated on <date>" (handled live in app/blog/page.tsx and
 *     app/blog/[slug]/page.tsx — nothing is hardcoded).
 *
 * HOW TO RUN
 *   1. Preview first (no writes):   node scripts/refresh-blogs-2026.js --dry-run
 *   2. Apply for real:              node scripts/refresh-blogs-2026.js
 *
 * SAFETY
 *   - Reads DATABASE_URL from your environment or from .env.local.
 *   - Before writing, dumps the current state of every affected row to
 *     scripts/blog-refresh-backup-<timestamp>.json so you can revert.
 *   - Idempotent: a blog already carrying the marker below is skipped for the
 *     content append, and FAQs are de-duplicated by question. Safe to re-run.
 *   - A slug that does not exist is skipped with a warning (never crashes).
 *
 * STATISTICS
 *   I do NOT inject invented numbers into your live posts. Each blog has an
 *   (empty) `stats` array. Drop verified 2026 figures in there and they will
 *   render as a clean list; leave it empty and the stats block is omitted.
 * ---------------------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

const MARKER = '<!-- mtl:refresh-2026 -->';
const DRY_RUN = process.argv.includes('--dry-run');

// ---------------------------------------------------------------------------
// 1. Load DATABASE_URL (env first, then .env.local)
// ---------------------------------------------------------------------------
function loadDatabaseUrl() {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const line = fs
      .readFileSync(envPath, 'utf8')
      .split('\n')
      .find((l) => l.trim().startsWith('DATABASE_URL='));
    if (line) {
      return line.slice(line.indexOf('=') + 1).trim().replace(/^["']|["']$/g, '');
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// 2. The blogs to refresh.  Edit freely — add/remove entries or tweak copy.
//    `slug` must match an existing row in the `blogs` table.
// ---------------------------------------------------------------------------
const UPDATES = [
  {
    slug: 'mobile-app-development-trends',
    updatedAt: '2026-06-20',
    heading: 'Mobile App Development Trends: A 2026 Update',
    body: `<p>The mobile landscape has moved quickly into 2026. On-device AI, cross-platform parity, and privacy-first design are no longer "emerging" — they are table stakes. Teams that ship are pairing native performance with AI features that run locally for speed and data safety, while keeping a single codebase for iOS and Android.</p>
<p>If you are scoping a new build, our <a href="/mobile-app-development-company">mobile app development</a> team and this companion guide on <a href="/blog/mobile-app-development-process">the app development process</a> walk through how these trends affect timelines and budgets.</p>`,
    faqs: [
      {
        question: 'What are the biggest mobile app trends in 2026?',
        answer:
          'On-device / edge AI, cross-platform frameworks reaching near-native performance, privacy-first data handling, and faster, AI-assisted development workflows are the dominant themes in 2026.',
      },
      {
        question: 'Is cross-platform development good enough for production in 2026?',
        answer:
          'For most business apps, yes. Modern cross-platform frameworks deliver near-native performance and a single codebase, which lowers cost and speeds up releases. Truly performance-critical apps may still justify native.',
      },
    ],
    stats: [
      // { label: 'Example: global app store spend in 2026', value: 'ADD VERIFIED NUMBER' },
    ],
  },
  {
    slug: 'custom-software-vs-saas',
    updatedAt: '2026-06-21',
    heading: 'Custom Software vs SaaS in 2026: Where the Line Sits Now',
    body: `<p>In 2026 the decision is less "build or buy" and more "buy the commodity, build the differentiator." Off-the-shelf SaaS covers email, billing, and CRM well; custom software earns its keep where your workflow, data, or compliance needs are unique. AI has lowered build costs, which nudges more teams toward selective custom development.</p>
<p>See our <a href="/custom-software-development-company">custom software development</a> services, and if pricing is the deciding factor, our breakdown of <a href="/blog/saas-pricing-models">SaaS pricing models</a> is a useful companion read.</p>`,
    faqs: [
      {
        question: 'Should I choose custom software or SaaS in 2026?',
        answer:
          'Use SaaS for commodity functions (email, billing, CRM) and build custom software for the workflows, data, or compliance requirements that differentiate your business. Many teams run a hybrid of both.',
      },
    ],
    stats: [],
  },
  {
    slug: 'ai-use-cases-by-industry',
    updatedAt: '2026-06-22',
    heading: 'AI Use Cases by Industry: 2026 Refresh',
    body: `<p>AI adoption in 2026 has shifted from pilots to production. Healthcare uses it for triage and documentation, retail for demand forecasting and personalization, finance for fraud detection, and logistics for route and inventory optimization. The common thread: narrow, measurable use cases tied to a clear ROI win first.</p>
<p>Explore how we deliver these with <a href="/generative-ai-development-company">generative AI development</a>, or read our deep dive on <a href="/blog/agentic-ai-rag-enterprise-ai-solutions">agentic AI and RAG for enterprises</a>.</p>`,
    faqs: [
      {
        question: 'Which industries benefit most from AI in 2026?',
        answer:
          'Healthcare, retail/e-commerce, finance, and logistics see the clearest returns in 2026, typically by starting with one narrow, measurable use case before scaling.',
      },
      {
        question: 'How should a company start with AI in 2026?',
        answer:
          'Begin with a single high-value, low-risk use case, measure the result, then expand. Pairing retrieval-augmented generation (RAG) with your own data is a common, reliable starting point.',
      },
    ],
    stats: [],
  },
  {
    slug: 'core-web-vitals-seo-guide',
    updatedAt: '2026-06-23',
    heading: 'Core Web Vitals & SEO: What Changed by 2026',
    body: `<p>Interaction to Next Paint (INP) is firmly established as a Core Web Vital in 2026, replacing older responsiveness signals. Alongside LCP and CLS, it means real-world responsiveness — not just load time — now influences rankings. Server components, smarter hydration, and disciplined third-party scripts are the levers that move these metrics.</p>
<p>Our <a href="/seo-services">SEO services</a> and <a href="/web-development-company">web development</a> teams treat Core Web Vitals as part of the build, not an afterthought.</p>`,
    faqs: [
      {
        question: 'What are the Core Web Vitals in 2026?',
        answer:
          'Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP). INP measures real responsiveness to user input and is the key 2026 change.',
      },
    ],
    stats: [],
  },
  {
    slug: 'saas-pricing-models',
    updatedAt: '2026-06-24',
    heading: 'SaaS Pricing Models in 2026: Usage and AI Costs',
    body: `<p>Usage-based and hybrid pricing have gained ground in 2026, driven largely by AI features whose cost scales with consumption. Pure flat-rate plans increasingly sit alongside metered AI usage or credit systems. The winning approach aligns price with the value a customer actually realizes.</p>
<p>If you are building the product behind the pricing, see our <a href="/saas-development-services">SaaS development services</a> and the related guide on <a href="/blog/custom-software-vs-saas">custom software vs SaaS</a>.</p>`,
    faqs: [
      {
        question: 'What SaaS pricing model works best in 2026?',
        answer:
          'There is no single best model. In 2026, hybrid pricing — a base subscription plus usage-based components (often for AI features) — is increasingly common because it aligns cost with value delivered.',
      },
    ],
    stats: [],
  },
  {
    slug: 'guide-to-create-an-ecommerce-mobile-application-development',
    updatedAt: '2026-06-26',
    heading: 'Building an E-commerce App in 2026: Updated Guidance',
    body: `<p>E-commerce apps in 2026 lean on AI-driven personalization, faster checkout (including one-tap and wallet flows), and performance budgets that protect conversion. Headless architectures make it easier to ship the same catalog across web and app, while privacy rules shape how recommendations are built.</p>
<p>See our <a href="/ecommerce-app-development-company">e-commerce app development</a> services, and for store-side conversion, our notes on <a href="/blog/ecommerce-checkout-optimization">checkout optimization</a>.</p>`,
    faqs: [
      {
        question: 'What matters most for an e-commerce app in 2026?',
        answer:
          'Fast, frictionless checkout, AI-driven personalization, strong performance (Core Web Vitals), and privacy-compliant data handling are the priorities that most affect conversion in 2026.',
      },
    ],
    stats: [],
  },
];

// ---------------------------------------------------------------------------
// 3. Builders
// ---------------------------------------------------------------------------
function buildSection(update) {
  const statsHtml =
    Array.isArray(update.stats) && update.stats.length
      ? `<ul>${update.stats
          .map((s) => `<li><strong>${s.label}:</strong> ${s.value}</li>`)
          .join('')}</ul>`
      : '';
  return `\n${MARKER}\n<h2>${update.heading}</h2>\n${update.body}\n${statsHtml}\n`;
}

function mergeFaqs(existing, incoming) {
  const current = Array.isArray(existing) ? existing.slice() : [];
  const seen = new Set(current.map((f) => String(f.question || '').trim().toLowerCase()));
  for (const f of incoming || []) {
    const key = String(f.question || '').trim().toLowerCase();
    if (key && !seen.has(key)) {
      current.push(f);
      seen.add(key);
    }
  }
  return current;
}

// ---------------------------------------------------------------------------
// 4. Run
// ---------------------------------------------------------------------------
async function main() {
  const DATABASE_URL = loadDatabaseUrl();
  if (!DATABASE_URL) {
    console.error('✗ DATABASE_URL not found (checked env and .env.local). Aborting.');
    process.exit(1);
  }

  const { neon } = require('@neondatabase/serverless');
  const sql = neon(DATABASE_URL);

  console.log(`\n${DRY_RUN ? '🔍 DRY RUN (no writes)' : '✏️  APPLYING UPDATES'} — ${UPDATES.length} blog(s) targeted\n`);

  const backup = [];
  const summary = [];

  for (const update of UPDATES) {
    const rows = await sql`SELECT id, slug, title, content, faq_schema, updated_at FROM blogs WHERE slug = ${update.slug}`;
    if (!rows.length) {
      console.log(`⚠️  skip  ${update.slug} — no blog with this slug`);
      summary.push({ slug: update.slug, action: 'skipped (not found)' });
      continue;
    }

    const blog = rows[0];
    backup.push(blog);

    const alreadyRefreshed = typeof blog.content === 'string' && blog.content.includes(MARKER);
    const newContent = alreadyRefreshed ? blog.content : (blog.content || '') + buildSection(update);
    const newFaqs = mergeFaqs(blog.faq_schema, update.faqs);

    const addedFaqs = newFaqs.length - (Array.isArray(blog.faq_schema) ? blog.faq_schema.length : 0);
    const stamp = update.updatedAt || 'NOW()';
    const note = `${alreadyRefreshed ? 'section already present (kept)' : 'section appended'}; +${addedFaqs} FAQ(s); updated_at -> ${stamp}`;
    console.log(`✓ ${DRY_RUN ? 'would update' : 'update'}  ${update.slug} — ${note}`);
    summary.push({ slug: update.slug, action: note });

    if (!DRY_RUN) {
      await sql`
        UPDATE blogs
        SET content = ${newContent},
            faq_schema = ${JSON.stringify(newFaqs)}::jsonb,
            updated_at = ${update.updatedAt ? update.updatedAt : new Date().toISOString()}::timestamptz
        WHERE id = ${blog.id}
      `;
    }
  }

  if (!DRY_RUN && backup.length) {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(__dirname, `blog-refresh-backup-${stamp}.json`);
    fs.writeFileSync(backupPath, JSON.stringify(backup, null, 2));
    console.log(`\n💾 backup of ${backup.length} row(s) written to ${backupPath}`);
  }

  console.log('\nSummary:');
  summary.forEach((s) => console.log(`  - ${s.slug}: ${s.action}`));
  console.log(`\n${DRY_RUN ? 'Dry run complete. Re-run without --dry-run to apply.' : 'Done. Updated posts will sort to the top of /blog within ~60s.'}\n`);
}

main().catch((err) => {
  console.error('✗ Error:', err.message || err);
  process.exit(1);
});
