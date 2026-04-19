# mTouch Labs — SEO & AEO Audit Report

**Project:** `mtouchlabs-nextjs_6max` (Next.js 13+ App Router)
**Date:** 2026-04-19
**Scope:** Complete SEO + AEO (Answer Engine Optimization) audit across ~185 routes
**Overall verdict:** The project has a solid foundation (sitemap, robots, breadcrumb JSON-LD, GTM, clean URLs) but dozens of high-impact issues are actively stopping it from ranking. The single biggest blocker is a mix of commented-out metadata exports, near-duplicate service/city pages, disabled image optimization, and almost no page-level structured data. Addressing the CRITICAL tier below should be considered blocking before any further marketing spend.

---

## 0. Executive Scorecard

| Pillar | Score | Notes |
|---|---|---|
| Crawlability & indexation | 5/10 | Sitemap + robots present, but 50+ pages ship with no `metadata` export |
| Metadata hygiene | 4/10 | `lib/seo.tsx` helper exists but is rarely used; OG/Twitter inconsistent |
| Structured data (schema) | 3/10 | Only Breadcrumb + Organization + home FAQ live; all service/blog/city/hire schemas missing |
| Technical / Core Web Vitals | 3/10 | `unoptimized: true` on `next/image`, 722 raw `<img>`, 16 MB JPGs in /public |
| Content quality | 4/10 | Thin location pages, 4x digital-marketing duplicates, weak E-E-A-T |
| AEO readiness (AI Overviews, ChatGPT, Perplexity) | 4/10 | llms.txt present and good, but no TL;DRs, no speakable schema, weak citations |
| Security / headers | 2/10 | No HSTS, CSP, X-Frame-Options, X-Content-Type-Options |

---

## 1. CRITICAL — fix before anything else

These are the issues silently deleting rankings and CTR today.

### 1.1 Image optimization is disabled project-wide
- `next.config.js` sets `images: { unoptimized: true }`. Next/Image does nothing — no WebP/AVIF, no responsive srcset, no automatic sizing.
- `/public/images` contains: `usa.jpg` (16 MB), `case-study-banner.jpg` (11 MB), `healthcare-chat.svg` (8.6 MB), `healthcarebanner.svg` (7.7 MB), `artificial-intelligence.gif` (2 MB).
- **722 raw `<img>` tags** across 85 files vs. **1** usage of `next/image`.
- LCP on landing pages is almost certainly > 4s on 4G. This alone is blocking Core Web Vitals.
- **Fix:** remove `unoptimized`, add `formats: ['image/avif', 'image/webp']`, compress every >500 KB asset, migrate `<img>` → `<Image />`, add `priority` to hero/LCP images, drop the GIF for an MP4/WebM.

### 1.2 ~52 pages ship with no `metadata` export (commented out)
All of the `hire-*-developers-in-india` pages, `portfolio/page.tsx`, `contact-us/page.tsx`, `case-studies/[slug]/page.tsx` and others have their `metadata`/`generateMetadata` blocks commented. They render with **no title, no description, no canonical, no OG/Twitter**. Google falls back to `<h1>` or first visible text — terrible for CTR and social sharing.
- **Fix:** uncomment, migrate to `lib/seo.tsx → generateSEO()` for consistency. Contact page + Hire pages + Portfolio are highest-revenue: do those first.

### 1.3 Massive near-duplicate / thin content
- **19 city/country pages** (`software-development-company-{usa, uk, dubai, india, germany, kuwait, qatar, canada, australia, bangalore, hyderabad, chennai, coimbatore, kochi, singapore, ireland, new-zealand, saudi-arabia, united-arab-emirates}`) use identical templates — only the city name is swapped. ~310 words of unique body text each. No local address, no local phone, no local case studies, no local team photos.
- **4 digital-marketing pages** cannibalising each other: `/digital-marketing-services`, `/digital-marketing-solutions`, `/digital-marketing-company`, `/digital-marketing-services-company-in-india`.
- **2 cybersecurity pages**: `/cybersecurity-development-company` (448 words, thin) vs. `/cyber-security-services-company` (1,448 words, substantive).
- **2 PPC pages**: `/ppc-advertising-services` and `/ppc-management-services-company`.
- Post-HCU (Helpful Content Update), this pattern is the #1 reason mid-size service sites get demoted.
- **Fix:** pick one canonical page per topic and 301 the rest. For cities, either (a) add genuine local content (office address, local case studies, local phone, local team, local testimonials) or (b) collapse to a single hub page with hreflang/geo sections.

### 1.4 No structured data on the content that matters
`lib/seo.tsx` defines `serviceSchema()`, `localBusinessSchema()`, `articleSchema()` — **none are used on the actual pages they were written for.** Only Breadcrumb JSON-LD (`components/Breadcrumb.tsx`), Organization (root layout), WebSite+FAQPage (home) are live.

Missing schemas that rich results rely on:
- **BlogPosting** on `app/blog/[slug]/page.tsx` and `app/blogs/[slug]/page.tsx` — commented out.
- **Article / CreativeWork** on `app/case-studies/[slug]/page.tsx` — commented out.
- **Service + Offer + AggregateRating** on ~60 service pages.
- **LocalBusiness** with address, geo, openingHours on 18 city pages.
- **JobPosting** on ~40 `hire-*` pages (Google Jobs carousel unavailable).
- **Person** on `app/leadership-team/page.tsx`.
- **ItemList / CreativeWork** on portfolio.
- **Review / AggregateRating** anywhere testimonials appear.
- **Fix:** wire `lib/seo.tsx` helpers into every route; start with BlogPosting + Service + LocalBusiness.

### 1.5 Conflicting/incorrect Organization schema
- `app/layout.tsx:81` says `foundingDate: "2018"`.
- `lib/seo.tsx:108` says `foundingDate: "2014"`.
- Home page has yet a third value.
- Search engines dedupe by sameAs/name — conflicting facts damage entity confidence.
- WebSite schema references a `SearchAction` target `/search?q=...` but `app/search/` does not exist.
- **Fix:** pick the correct founding year, single source of truth in `lib/seo.tsx`, delete the inline copies; implement `/search` or remove the SearchAction.

### 1.6 No security headers
`next.config.js` has no `headers()` entry. `vercel.json` has no security block. Missing HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. These are a Lighthouse SEO audit item and a ranking signal on HTTPS quality.

### 1.7 Favicon / icons referenced but not present
`app/layout.tsx` references `/favicon.ico` and `/apple-touch-icon.png` but neither exists in `public/`. No `manifest.json`. Missing theme-color.

---

## 2. MAJOR — next in priority

### 2.1 Metadata inconsistencies (per-page)
- OG title ≠ page title on several pages (`web-development-company`, `cloud-services`, `seo-services`). Social previews say "Cloud Services" while the page says "Cloud Services and Solutions" — fragmented brand.
- 90%+ of pages reuse the same generic OG image (`/images/Light.png`) — zero visual CTR advantage on LinkedIn/Facebook.
- OG image `alt` is hardcoded to `"mTouch Labs"` everywhere instead of page-specific.
- Twitter metadata missing `twitter:site`, `twitter:creator`. Several pages lack `twitter.images`.
- Some descriptions > 160 chars (will be truncated in SERPs); a few under 100 (wasted real estate).
- No `robots` meta declared anywhere — relying on defaults is fine for content pages, but `admin/*` and `request-free-quote/thank-you` are currently indexable.

### 2.2 No hreflang despite 19 international location pages
Zero `alternates.languages` entries. This is the signal Google needs to understand `/software-development-company-usa` vs `/software-development-company-india` are localized variants of the same service. Without it, at most one will rank per query.

### 2.3 Canonical URLs inconsistent
- `app/blog/[slug]/page.tsx:56` uses `blog.canonical_url || pageUrl` — if the DB field is null, a wrong canonical can emit.
- Trailing slash — `next.config.js` sets `trailingSlash: false` but middleware lowercases paths without normalizing slashes; some hardcoded canonicals include trailing slashes.
- Commented-out pages have commented-out canonicals — they currently emit nothing.

### 2.4 Pagination SEO missing
`app/blog/page.tsx`, `app/blogs/`, `app/portfolio/` have no `rel="prev" / rel="next"` logic, no paginated sitemap entries, no `?page=` canonical strategy.

### 2.5 Navigation uses raw `<a>` instead of `next/link`
`components/layout/Navbar.tsx` (lines 18, 36, 54, 72, 157+) — ~100 internal nav links use `<a href>`. No prefetch, full-page reloads on click, larger JS for no reason. Also hurts INP.

### 2.6 External links lack `rel="noopener noreferrer"` / `nofollow`
Sitewide. Security risk on `target="_blank"` and wastes link equity.

### 2.7 Sitemap and robots gaps
- `app/sitemap.ts` uses `portfolio.created_at` as `lastModified` instead of `updated_at` (edits don't signal freshness).
- Doesn't include paginated blog/portfolio URLs.
- `app/robots.ts` disallows `/blogs/create` and `/blogs/edit/` but **not** `/admin/*` or `/admin/blogs/*` — if an admin page leaks publicly, it's indexable.
- `next.config.js` and `vercel.json` both define the non-www → www 301 — duplicate config. Pick one.

### 2.8 No visible E-E-A-T on the Leadership page
`app/leadership-team/page.tsx` lists roles (Founder & CEO, CTO, Director of Operations) with **no names, no photos, no LinkedIn, no credentials, no bios**. Combined with no Person schema, Google's entity graph has nothing to anchor author trust to. AI Overviews will not cite this site as authoritative.

### 2.9 Blog UX/E-E-A-T gaps
- No visible `datePublished` / `dateModified` on blog posts.
- No author byline, no author bio card, no author page.
- No "Last updated" timestamp.
- No reading time, no related posts, no tags page cluster.
- No topic/pillar structure; posts appear one-off.

### 2.10 AEO weak content signals
- No "What is X?" 40–60 word answer blocks at the top of service pages.
- No TL;DR / summary boxes.
- No Table of Contents on long pages (AI engines chunk on TOCs).
- Almost no outbound links to authoritative sources (Gartner/Forrester/OWASP/ISO/NIST). AI engines prefer cited content.
- FAQs are generic/definitional, not customer-driven ("How long does an MVP take?", "What's your design-to-dev handoff?").
- No Review / AggregateRating schema tied to Clutch/G2 (even though Clutch page + folder exists).
- No `speakable` JSON-LD anywhere — voice/AI assistants can't easily surface content.
- Only 1 of ~185 pages uses semantic `<article>/<section>/<main>/<aside>` — everything is `<div>` soup, which degrades AI content understanding.

---

## 3. MINOR — polish, but cumulatively important

- `generateSEO()` helper in `lib/seo.tsx` is unused on 145+ of 185 pages; pages inline metadata.
- Description length variance across pages (some 96 chars, some 161+).
- No skip-to-content link for a11y in `Header.tsx`.
- Fonts not loaded via `next/font` — potential CLS / render-blocking.
- `ChatWidget.tsx` is fully commented out (no current impact, but cleanup needed).
- `next.config.js` line ~56 has a broad healthcare → mobile-app redirect that may hurt UX.
- `llms.txt` exists and is decent, but could include: founding year, employee count, revenue band, certifications (ISO, NASSCOM, Clutch rating), key differentiators, industry verticals served. AI engines lift this verbatim.
- Thank-you page `/thank-you` should be `noindex`.
- Portfolio sitemap entries don't include images (Image sitemap extension missed).
- No `video` sitemap extension despite pages with video embeds.
- H1s are generic ("Mobile App Development Company"); should be unique value-prop-led ("Custom Mobile App Development Services for Scaling Startups & Enterprises").
- `next.config.js.backup`, `middleware.ts.bak`, `request-free-quote.zip`, `delete-old-static-pages.sh` committed in repo — clean up.

---

## 4. AEO (Answer Engine Optimization) — dedicated section

AI search (Google AI Overviews, ChatGPT search, Perplexity, Gemini, Claude search) rewards different signals than classical SEO. The project is under-invested here.

What's working:
- `public/llms.txt` exists, well-structured.
- Breadcrumb JSON-LD is live.
- Home FAQPage schema is well-formed (7 Q&A).

What's missing (all high ROI):
1. **Direct answer blocks** — every service/blog page needs a 40–60 word plain-English answer to the primary query in the first visible viewport.
2. **Question-phrased H2s** with concise answers ("How much does a mobile app cost in 2026?" etc.).
3. **`FAQPage` schema on every service/hire/city page** — only `FAQSchema.tsx` exists; it's used on a handful of pages.
4. **`speakable` schema** for voice assistants on FAQ answers + key facts.
5. **Original data / stats / quotes** — AI engines pull verbatim from content they can attribute. Add proprietary data points ("Across 400+ apps shipped, we've found…").
6. **Citations to authoritative sources** — link out to Gartner, Forrester, OWASP, NIST, Google dev docs. Paradoxically boosts your own AEO citability.
7. **Author E-E-A-T** — real author names, photos, credentials, LinkedIn, schema.org/Person per post.
8. **Semantic HTML** — `<article>`, `<section>`, `<aside>`, `<main>`, `<nav>`. AI chunking relies on it.
9. **Structured data for everything** — especially `Service`, `LocalBusiness`, `JobPosting`, `Review`, `AggregateRating`, `HowTo`, `VideoObject`, `ItemList`.
10. **Expand `llms.txt`** — add founding year, HQ, certifications, top 10 case studies with outcomes, named leadership with LinkedIn.

---

## 5. 30/60/90 day action plan

### Sprint 1 (0–30 days, blocking)
1. Remove `unoptimized: true`; compress all /public images > 500 KB; migrate `<img>` → `<Image>` on top 20 traffic pages; add `priority` to hero images.
2. Uncomment and standardize `metadata` / `generateMetadata` on all 50+ disabled pages (contact, portfolio, case-studies/[slug], all `hire-*`).
3. Consolidate duplicates: pick canonical winners for digital-marketing (4→1), cybersecurity (2→1), PPC (2→1). Set 301 redirects.
4. Decide on city-page strategy: either inject genuine local content + add `hreflang` per locale, or collapse to one hub + geo sections.
5. Fix conflicting Organization schema: single source in `lib/seo.tsx`, correct founding year, correct sameAs links.
6. Create missing favicon.ico, apple-touch-icon, manifest.json, theme-color.
7. Add security headers (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, baseline CSP) via `next.config.js` `headers()`.
8. Block `/admin/*` and `/thank-you` in `robots.ts` (defense in depth).

### Sprint 2 (30–60 days, ranking lifts)
9. Wire `serviceSchema()`, `localBusinessSchema()`, `articleSchema()` from `lib/seo.tsx` into all service / city / blog pages. Activate BlogPosting on `blog/[slug]`.
10. Add `Person` schema + real names/photos/LinkedIn/bios on Leadership page.
11. Add `JobPosting` schema on all `hire-*` pages OR reframe them as Service pages (not hiring).
12. Add `Review` / `AggregateRating` schema pulling from Clutch/G2.
13. Migrate all nav `<a>` → `next/link`; add `rel="noopener noreferrer"` + `nofollow` audit on externals.
14. Unify OG images — generate per-page OG images (OG image route in Next.js) with page title on branded template.
15. Standardize metadata via `generateSEO()` helper across the remaining 145 pages.

### Sprint 3 (60–90 days, AEO and content moat)
16. Add TL;DR / "What is X?" 40–60 word answer block to every service/blog page.
17. Add customer FAQs (not definitional ones) + FAQPage schema on every service page.
18. Add Table of Contents + `speakable` schema on long pages.
19. Add author bylines, author pages, Person schema per blog post. Visible `datePublished` / `dateModified`, reading time, related posts.
20. Add outbound citations to 3+ authoritative sources per flagship page.
21. Expand `llms.txt` with founding year, leadership, certifications, top 10 case studies with outcomes.
22. Build topic clusters in the blog (3–5 pillars × 10 supporting posts each).
23. Migrate fonts to `next/font` with `display: 'swap'`.
24. Switch portfolio sitemap to `updated_at`, add image sitemap extension, add video sitemap where applicable.

---

## 6. Files most relied on

- `app/layout.tsx` — root metadata, schema, scripts
- `app/sitemap.ts` — dynamic sitemap
- `app/robots.ts` — robots rules
- `lib/seo.tsx` — metadata + schema helpers (currently underused)
- `components/seo/FAQSchema.tsx` — FAQ JSON-LD helper
- `components/Breadcrumb.tsx` — breadcrumb JSON-LD (already good)
- `components/templates/ProductPageTemplate.tsx` — shared template for many service pages
- `next.config.js` — image config, redirects, headers (all needs work)
- `vercel.json` — deployment-level redirects (deduplicate with next.config)
- `public/llms.txt` — AEO asset (expand)

---

**Bottom line:** the project is one focused two-sprint effort away from being competitive again. The biggest wins are 1) turning image optimization back on and compressing assets, 2) consolidating duplicate content, 3) uncommenting metadata, and 4) wiring the existing `lib/seo.tsx` schema helpers into the pages they were written for. Do those four and you'll move from "invisible" to "indexed, rich-result eligible, and AEO-citable".
