# mTouch Labs — Next.js App Router Migration

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy your images folder
#    Copy the entire /images/ folder from your current site into /public/images/
#    This includes all logos, icons, portfolio images, service images, etc.

# 3. Run development server
npm run dev

# 4. Open http://localhost:3000
```

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout (Header + Footer + shared CSS/JS)
│   ├── (home)/
│   │   ├── layout.tsx          # Loads homepage.js
│   │   └── page.tsx            # Homepage (15 section components)
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   ├── layout.tsx          # Loads services.js
│   │   └── page.tsx            # Services page
│   ├── contact-us/
│   │   ├── layout.tsx          # Loads contact.js
│   │   └── page.tsx            # Contact Us page
│   └── portfolio/
│       ├── layout.tsx          # Loads portfolio.js
│       └── page.tsx            # Portfolio page
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # TopBar + Navbar wrapper
│   │   ├── TopBar.tsx          # Contact info strip
│   │   ├── Navbar.tsx          # Desktop mega menus + mobile nav
│   │   ├── MegaMenuCTA.tsx     # Reusable "Request Quote" block
│   │   ├── MegaMenuExtraInfo.tsx # Reusable contact strip
│   │   └── Footer.tsx          # Full footer
│   └── sections/home/
│       ├── HeroSection.tsx     # Video hero banner
│       ├── TrustedPartnersSection.tsx
│       ├── DigitalSolutionsSection.tsx
│       ├── WhyChooseSection.tsx
│       ├── WhatMakesDifferentSection.tsx
│       ├── WhyBusinessTrustSection.tsx
│       ├── IndustriesSection.tsx
│       ├── TargetAudiencesSection.tsx
│       ├── TestimonialSection.tsx
│       ├── PortfolioSection.tsx
│       ├── TechnologiesSection.tsx
│       ├── AwardsSection.tsx
│       ├── BlogSection.tsx
│       ├── LocationSection.tsx
│       └── FAQSection.tsx
├── public/
│   ├── css/                    # All CSS files (Roboto→Inter updated)
│   ├── js/                     # All vanilla JS files
│   └── images/                 # ← YOU MUST ADD THIS from your site
└── package.json
```

## IMPORTANT: Images

The `/public/images/` folder is NOT included in this repo because it's too large.
You must copy it from your production site:

```bash
# From your current site's root
cp -r images/ /path/to/this/project/public/images/
```

The images folder should contain:
- `/images/favicon.png`
- `/images/brand-logo/` (client logos, award badges)
- `/images/portfolio/` (portfolio screenshots)
- `/images/serviceImg/` (service page images)
- `/images/contact/` (contact page icons)
- `/images/icons/` (about page icons)
- `/images/others/` (misc images)
- `/images/cta/` (CTA illustrations)
- `/images/sliders/` (hero banners)
- `/images/home/` (homepage section images)
- All other image subdirectories from your site

## Architecture

- **Zero CSR** — No "use client" directives anywhere
- **All Server Components** — Every .tsx file renders on the server
- **Vanilla JS only** — All interactivity (tabs, carousels, accordions) uses plain JavaScript
- **Original CSS preserved** — All class names and styles unchanged
- **Font migration** — Roboto → Inter across all CSS files
- **SEO preserved** — Metadata, canonical URLs, OG tags on every page

## Scripts

| File | Scope | Purpose |
|------|-------|---------|
| `site-interactions.js` | Global | Modal open/close, current year |
| `mega-menu.js` | Global | Mega menu hover/switch |
| `navbar-init.js` | Global | Mobile nav toggle |
| `main.js` | Global | Counter animations, utilities |
| `faq.js` | Global | FAQ accordion (shared) |
| `tabs.js` | Global | Bootstrap pill tabs (about page) |
| `homepage.js` | Homepage | AOS init, tech tabs, location carousel, industries scroll, stat counters |
| `services.js` | Services | Dev tabs, process scroll |
| `contact.js` | Contact | Form submission, char counter |
| `portfolio.js` | Portfolio | Card rendering, filters, pagination, animation |

## Pages Converted

| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | ✅ 15 sections |
| About | `/about` | ✅ |
| Services | `/services` | ✅ |
| Contact Us | `/contact-us` | ✅ |
| Portfolio | `/portfolio` | ✅ |
