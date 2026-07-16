# mtouchlabs.com — SEO Issue Audit (Code-Level)
**Date:** 2026-07-12 · **Scope:** full Next.js source review
Fix in the order listed — Critical items are actively hurting indexing today.

---

## 🔴 CRITICAL — fix first

### 1. 16 product pages declare the HOMEPAGE as their canonical (de-indexing risk)
`app/layout.tsx` (line ~536) sets a global canonical:
```ts
alternates: { canonical: 'https://www.mtouchlabs.com' }
```
In Next.js, this cascades to every page that doesn't override it. These 16 pages are `"use client"` and export **no metadata at all**, so each one tells Google *"I am a duplicate of the homepage — index that instead"*:

- /ecommerce-app-development-company
- /taxi-booking-app-development-company
- /hotel-booking-app-development-company
- /gaming-apps-development-company
- /ott-app-development-company
- /real-estate-app-development-company
- /social-media-app-development-company
- /e-learning-app-development-company
- /milk-delivery-app-development-service
- /car-wash-app-development-company
- /diagnostic-app-development-company
- /sports-and-fitness-app-development-company
- /tickets-booking-app-development-company
- /online-shopping-app-development-company
- /multi-vendor-marketplace-app-builder
- /chef-management-app-solutions
- /food-delivery-app-development-service, /awards-recognition (have metadata but no canonical → also inherit homepage canonical)

**Fix:**
1. Remove `alternates.canonical` from `app/layout.tsx` (keep `metadataBase`).
2. For each of the 16 client pages: move the page content into a client component and make `page.tsx` a server component that exports proper `metadata` (unique title, description, self-canonical, OG tags). All 16 currently also share the identical default homepage title/description — duplicate titles across 16 URLs.

### 2. 233 `<img>` tags have no `alt` attribute
Image search traffic lost + accessibility signal. Audit found 233 alt-less images across `app/` and `components/`.
**Fix:** add descriptive, keyword-relevant alt text everywhere (empty `alt=""` only for decorative images).

### 3. 933 raw `<img>` tags vs only 12 files using `next/image`
No automatic AVIF/WebP, no responsive `srcset`, no built-in lazy-loading priority handling → larger LCP images → weaker Core Web Vitals → weaker rankings.
**Fix:** migrate at minimum all above-the-fold/hero images to `next/image` with `priority`, and content images with proper `sizes`.

---

## 🟠 HIGH

### 4. Heavy legacy JS stack drags Core Web Vitals (INP/LCP)
`app/layout.tsx` loads on **every page**: jQuery 3.6, Bootstrap bundle, Owl Carousel (cdnjs), AOS (unpkg), full Font Awesome CSS (cdnjs), plus ~8 site scripts. Third-party CSS from cdnjs/unpkg is render-blocking.
**Fix:** self-host the few icons/styles actually used, replace Owl/AOS with CSS or lightweight IntersectionObserver, drop jQuery where possible, load page-specific scripts only on pages that need them.

### 5. Google Fonts via `<link>` instead of `next/font`
Three families (Outfit, Inter ×9 weights, Lora) via render-blocking stylesheet links.
**Fix:** use `next/font/google`, subset weights to the 3–4 actually used. Removes render-blocking request + layout shift (CLS).

### 6. `force-dynamic` on all content routes → slow TTFB, no caching
`app/blog/[slug]`, `app/portfolio/[slug]`, `app/case-studies/[slug]`, `app/[slug]` are SSR'd on every request (DB hit per crawl).
**Fix:** replace with `export const revalidate = 300` (ISR) + `generateStaticParams()`. Crawlers get fast cached HTML; Googlebot crawl budget goes further.

### 7. Duplicate blog route: `/blogs` vs `/blog`
`app/blogs/page.tsx` is live and crawlable (robots.txt only blocks `/blogs/create` and `/blogs/edit/`). Worse — its `generateMetadata` expects a `slug` param that never exists on that route, so it always resolves "Blog Not Found".
**Fix:** 301 `/blogs` → `/blog` and delete the dead page (keep admin create/edit if used).

### 8. robots.txt Disallows `/llms.txt` — defeats your own AEO strategy
You explicitly allow GPTBot, ClaudeBot, PerplexityBot etc., then block the one file written for them. `X-Robots-Tag: noindex` (already set in next.config.js) is sufficient to keep it out of search results while staying fetchable.
**Fix:** remove `/llms.txt` (and `/manifest.json`) from the disallow list in `app/robots.ts`.

### 9. Organization schema logo is a 100×100 favicon
Google requires **≥112×112** for logo rich results / knowledge panel. `app/layout.tsx` Organization schema uses `/images/favicon.png` (100×100).
**Fix:** point `logo` to a proper ≥112×112 (ideally 512×512) logo file.

### 10. Sitemap `lastModified` is fake for ~170 static URLs
`app/sitemap.ts` stamps `today` on every static page, so every deploy claims the whole site changed. Google ignores lastmod it catches lying.
**Fix:** hardcode real last-edit dates per section, or derive from git/file mtime; only DB-driven entries (blogs/portfolios) are honest today.

### 11. Possible duplicate portfolio URLs: `/{slug}` and `/portfolio/{slug}`
The catch-all `app/[slug]/page.tsx` renders portfolio pages at root, and the sitemap lists them at root — but `app/portfolio/[slug]/page.tsx` also serves the same content. Verify one 301s or canonicalizes to the other; if both return 200 with different canonicals, it's classic duplicate content.

---

## 🟡 MEDIUM

### 12. ~40 thin "hire-X-developers-in-india" pages — doorway-page / cannibalization risk
Near-identical template pages targeting keyword permutations (hire-android / hire-ios / hire-flutter / … ×40). Google's doorway policy and keyword cannibalization can drag the whole domain.
**Fix:** ensure each has substantially unique copy, pricing/FAQ/testimonials; consolidate ones with no impressions (check GSC) into parent pages with 301s.

### 13. Icons/favicons undersized
Single 100×100 PNG for favicon, shortcut, apple-touch-icon, and manifest icons. Google Search favicon wants multiples of 48×48; apple-touch-icon should be 180×180; PWA manifest wants 192×192 + 512×512.

### 14. 279 redirects in next.config.js — audit for chains
With this many rules plus middleware redirects, chains (A→B→C) are likely. Each hop dilutes signals and crawl budget. Also ensure internal links (Header/Footer/menus) point at **final** URLs, never redirecting ones.

### 15. Junk/backup files shipped in repo & public folder
Crawlable/public: `public/images/blogs/_backup-2026-06-27.../*.svg` (22 files). In repo: `middleware.ts.bak`, `next.config.js.backup`, `next.config.fix.js`, `_inspect_tmp.js`, `check_blogs.js`, `tsconfig.tsbuildinfo`, ~500 lines of commented-out dead code at the top of `app/layout.tsx` and `app/[slug]/page.tsx`. Clean up; keep `public/` content-only.

### 16. hreflang only on a handful of country pages
`software-development-company-{usa,singapore,kuwait,kochi,uae}` declare `languages` alternates. Verify each set is bidirectional and self-referencing (hreflang that isn't reciprocal is ignored). Consider `x-default`.

### 17. WebSite schema is bare
Only `name` + `url`. Add `publisher` → Organization, and `potentialAction` (SearchAction) if the site has search.

### 18. `metadataBase` re-declared in 41 files
Harmless but drift-prone — one page setting it wrong breaks its OG/canonical URLs. Declare once in the root layout only.

---

## ✅ Already good (don't break these)
- robots.ts + dynamic sitemap.ts with DB-driven blog/portfolio/case-study URLs
- Per-page metadata with canonicals on ~147 of 168 pages
- BreadcrumbList schema in 140 files, FAQPage in 43
- Canonical URL validation on `/blog/[slug]` (guards against bad DB values)
- Preview deployments get `X-Robots-Tag: noindex` — prevents *.vercel.app duplication
- HSTS, compress, immutable asset caching, static assets noindexed via headers
- Blog listing uses ISR (`revalidate = 60`)
- OG default image is a correct 1200×630

---

## Suggested fix order
1. Issue 1 (canonical cascade + 16 pages' metadata) — biggest indexing win
2. Issue 7 (/blogs duplicate) + Issue 11 (portfolio dupes)
3. Issue 2 (alt text) — script-assist, then manual pass
4. Issues 4–6 (Core Web Vitals: JS stack, fonts, ISR)
5. Issues 8–10 (robots/llms.txt, schema logo, sitemap dates)
6. Everything in Medium
