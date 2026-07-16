# mtouchlabs.com — SEO Fixes Applied (2026-07-12)
Companion to `SEO-ISSUES-2026-07-12.md`. Status of all 18 issues.

## ✅ FIXED — 14 of 18

**#1 Canonical cascade + 16 pages without metadata — FIXED**
- Removed global `alternates.canonical` from `app/layout.tsx`.
- All 16 client product pages converted to server components with unique title, description, self-canonical, OG + Twitter tags (derived from each page's own H1/subtitle).
- `food-delivery-app-development-service` split into server `page.tsx` (metadata) + `FoodDeliveryClient.tsx`.
- `awards-recognition` got its missing canonical.
- Every indexable page now has a self-canonical.

**#2 Missing alt text — FIXED (and re-measured)**
- The original "233 missing" was inflated by line-based matching on multi-line tags. A full tag-level parse found **2** truly alt-less images (`hybrid-app-development-company`) — both fixed. **0 remain** across app/ and components/.

**#6 force-dynamic → ISR — FIXED**
- `blog/[slug]`, `portfolio/[slug]`, `case-studies/[slug]` now use `revalidate = 300` (5-min ISR). Crawlers get cached HTML; new/edited content live within 5 min. The `[slug]` catch-all stays dynamic (it does DB-driven redirects).

**#7 /blogs duplicate — FIXED**
- Deleted dead `app/blogs/page.tsx` (broken metadata), added exact-match 301 `/blogs → /blog`. Admin `/blogs/create` and `/blogs/edit/*` untouched.

**#8 robots.txt blocking llms.txt — FIXED**
- Removed `/llms.txt` and `/manifest.json` from disallow list. They keep `X-Robots-Tag: noindex` via headers, so they stay out of search results but AI crawlers can read them.

**#9 Schema logo too small — FIXED**
- Organization `logo` now points to `Light.png` (1200×630, ≥112px requirement met). Added `@id` for entity linking.

**#10 Fake sitemap lastmod — FIXED**
- Static pages now use `staticLastModified` constant ('2026-07-12') instead of rolling `new Date()`. Bump it only when static content actually changes. DB entries keep real timestamps.

**#11 Portfolio duplicate URLs — FIXED**
- Middleware already 301s bare `/slug` → `/portfolio/slug`; the sitemap was still listing the redirecting bare URLs. Sitemap now lists final `/portfolio/<slug>` URLs.

**#13 Undersized icons — FIXED**
- Generated `icon-48/96/192/512.png` + `apple-touch-icon.png` (180×180) from the logo. Layout `icons` metadata updated; manifest.json's 192/512 references (previously pointing at nonexistent files!) now resolve.

**#14 Redirect chains — FIXED**
- Automated scan of all 280 rules found 2 chains, both through `/custom-crm-software-development-company`. Root cause: a rule was **301-ing away a real page** that exists and is in the sitemap. Removed that rule → page restored, 0 chains remain.

**#15 Junk/backup files — FIXED**
- Deleted: `middleware.ts.bak`, `next.config.js.backup`, `next.config.fix.js`, `_inspect_tmp.js`, `check_blogs.js`, `public/images/blogs/_backup-*/` (22 crawlable SVGs), `scripts/blog-refresh-backup-*.json`, plus ~570 lines of dead commented code in `app/layout.tsx` and `app/[slug]/page.tsx`.

**#16 hreflang — FIXED**
- The 13 country pages form a valid reciprocal set with x-default (verified identical on all).
- 6 city pages (hyderabad, bangalore, chennai, kochi, coimbatore, dubai) declared the set without being members (no self-reference = invalid) — hreflang removed from those 6; canonicals kept.

**#17 WebSite schema — FIXED**
- Added `publisher` → Organization `@id`. (No SearchAction added — the site has no search results page; fake SearchActions are a spam signal.)

**#18 metadataBase duplication — FIXED**
- Removed from 40 pages; declared once in root layout.

## ⚠️ NOT AUTO-FIXABLE — needs your decision / manual QA — 4 of 18

**#3 next/image migration (933 `<img>` tags)** — bulk-converting would change rendered markup on every page with real risk of layout breakage; needs page-by-page visual QA. Recommended: start with hero/LCP images on your top-10 traffic pages. Most imgs already have width/height + lazy loading, which limits the damage.

**#4 jQuery/Bootstrap/Owl/AOS stack** — site interactions depend on these; removal is a refactor project, not a config change. Quick win available anytime: replace CDN copies (cdnjs/unpkg) with self-hosted files to cut third-party DNS/TLS cost.

**#5 next/font** — checked: your CSS uses font weights 200–900 across all three families, so weights can't be trimmed without visual change, and `next/font` renames font families (would break `bundle.css` references). Current setup already has `display=swap` + preconnect — the remaining gain is small. Do this only as part of a CSS refactor.

**#12 ~40 hire-* pages content uniqueness** — content strategy, not code. Pull Search Console data: pages with 0 impressions in 90 days → 301 to the parent service page; keep and deepen the ones that get traffic.

## Verification done
- `tsc --noEmit` — clean (exit 0)
- `next build` webpack compile — ✓ successful
- Redirect chain scan re-run — 0 chains
- Full-repo img alt scan — 0 missing
- Full prerender happens on Vercel deploy (sandbox lacks DB access/RAM for all 180 pages)

## After deploying
1. Google Search Console → resubmit sitemap.xml.
2. Request re-indexing of the 16 fixed product pages (URL Inspection → Request Indexing).
3. Watch "Duplicate without user-selected canonical" count fall over 2–4 weeks.
