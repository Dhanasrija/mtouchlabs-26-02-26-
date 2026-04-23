"use client";

/*
 * NavActiveSync
 * -----------------------------------------------------------------------------
 * The top-level Navbar is rendered inside the root <Layout> using server-side
 * `headers()` to pick up the middleware-injected `x-pathname`. That works on
 * the first page render, but Next.js does NOT re-render the root layout on
 * client-side navigation — so the `active-link` class stays on whichever tab
 * was active on the very first page the user hit (usually Home).
 *
 * This tiny client component runs alongside the server Navbar and synchronises
 * the `.active-link` class on the top-level nav links every time the route
 * changes. It mirrors the exact same logic as the server Navbar so the two
 * stay consistent.
 * -----------------------------------------------------------------------------
 */

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Module-level cache for portfolio slugs so we only hit the API once per
// browser session (list rarely changes; staleness is acceptable).
let PORTFOLIO_SLUGS_CACHE: Set<string> | null = null;
let PORTFOLIO_SLUGS_PROMISE: Promise<Set<string>> | null = null;

function loadPortfolioSlugs(): Promise<Set<string>> {
  if (PORTFOLIO_SLUGS_CACHE) return Promise.resolve(PORTFOLIO_SLUGS_CACHE);
  if (PORTFOLIO_SLUGS_PROMISE) return PORTFOLIO_SLUGS_PROMISE;
  PORTFOLIO_SLUGS_PROMISE = fetch('/api/portfolio-slugs', { cache: 'force-cache' })
    .then(r => r.ok ? r.json() : { slugs: [] })
    .then((data: { slugs?: string[] }) => {
      const set = new Set<string>(Array.isArray(data?.slugs) ? data.slugs : []);
      PORTFOLIO_SLUGS_CACHE = set;
      return set;
    })
    .catch(() => {
      const set = new Set<string>();
      PORTFOLIO_SLUGS_CACHE = set;
      return set;
    });
  return PORTFOLIO_SLUGS_PROMISE;
}

// ── Top-level nav targets — keep in lock-step with Navbar.tsx <a href=...> ──
const NAV_TARGETS = {
  home: '/',
  services: '/services',
  products: '/on-demand-products-development-company-hyderabad',
  resources: '/hire-developers-in-india',
  portfolio: '/portfolio',
  careers: '/careers',
  contact: '/contact-us',
} as const;

// ── Path sets (kept in sync with Navbar.tsx) ──
const SERVICE_PATHS = new Set<string>([
  "/services",
  "/mobile-app-development-company", "/ios-app-development-company", "/android-app-development-company",
  "/ipad-app-development-company", "/flutter-app-development-company", "/react-native-app-development-company",
  "/cross-platform-app-development-company", "/web-development-company", "/custom-software-development-company",
  "/custom-cms-development-company-in-india", "/360-degree-photography-services-in-india",
  "/enterprise-application-development-company", "/app-maintenance-support-services",
  "/cloud-services", "/devops-services", "/cloud-migration-services", "/devops-consulting-services",
  "/cloud-security-services", "/cloud-managed-services", "/best-iot-development-company-in-india",
  "/aws-cloud-services", "/amazon-web-services-company",
  "/generative-ai-development-company", "/machine-learning-development-company", "/data-science-solutions",
  "/cyber-security-services-company", "/saas-development-services",
  "/salesforce-consulting-services-company", "/salesforce-implementation-services",
  "/salesforce-lightning-migration-development", "/salesforce-integration-services", "/salesforce-sales-cloud-services",
  "/ui-ux-design-company", "/mobile-app-design-company", "/product-design-services",
  "/ux-research-services", "/design-system-development", "/web-design-company",
  "/progressive-web-app-development-company-in-india", "/quality-assurance-and-testing-services",
  "/digital-marketing-solutions", "/seo-services", "/ppc-advertising-services", "/app-store-optimization-services",
  "/social-media-marketing-services", "/conversion-rate-optimization-services", "/content-marketing-services",
  "/email-marketing-services", "/performance-marketing-services",
  "/digital-marketing-company", "/digital-marketing-services-company-in-india",
  "/it-solutions-company", "/custom-crm-software-development-company",
  "/cybersecurity-development-company", "/native-app-development-company",
  "/hybrid-app-development-company", "/on-demand-service-mobile-app-development",
  "/ppc-management-services-company",
  "/web-and-app-development-for-education-services",
  "/web-and-app-development-for-real-estate-services",
  "/web-and-app-development-for-temple-services",
  "/app-and-web-development-for-ecommerce-services",
  // NOTE: "/ecommerce-app-development-company" is NOT here on purpose —
  // it lives in PRODUCT_PATHS (below) so the Products tab highlights when
  // users land on it. Keeping it in both sets causes a flicker between
  // Products (SSR) → Services (client override) → Products (navbar-init.js).
]);

const PRODUCT_PATHS = new Set<string>([
  "/on-demand-products-development-company-hyderabad",
  "/food-delivery-app-development-service", "/grocery-delivery-app-development-company",
  "/milk-delivery-app-development-service", "/car-wash-app-development-company", "/chef-management-app-solutions",
  "/taxi-booking-app-development-company", "/hotel-booking-app-development-company",
  "/tickets-booking-app-development-company", "/real-estate-app-development-company",
  // IMPORTANT: /ecommerce-app-development-company MUST be in PRODUCT_PATHS here
  // (it's also in PRODUCT_PATHS in Navbar.tsx). The slug ends in "-company" so
  // if it's missing here, the pattern-based Services fallback below will wrongly
  // classify it and the client will override the correct SSR Products highlight
  // — producing a Products→Services flicker ~1s after the page loads.
  "/ecommerce-app-development-company",
  "/online-shopping-app-development-company",
  "/multi-vendor-marketplace-app-builder",
  "/e-learning-app-development-company", "/gaming-apps-development-company", "/ott-app-development-company",
  "/diagnostic-app-development-company", "/sports-and-fitness-app-development-company",
  "/social-media-app-development-company",
]);

const RESOURCE_PATHS = new Set<string>([
  "/hire-developers-in-india", "/hire-dedicated-developers-in-india",
  "/hire-mobile-app-developers-in-india", "/hire-android-app-developers-in-india",
  "/hire-ios-app-developers-in-india", "/hire-ipad-developers-in-india",
  "/hire-custom-software-developers-in-india", "/hire-native-app-developers-in-india",
  "/hire-hybrid-app-developers-in-india", "/hire-flutter-app-developers-in-india",
  "/hire-react-native-app-developers-in-india",
  "/hire-web-developers-in-india", "/hire-wordpress-developers-in-india",
  "/hire-php-developers-in-india", "/hire-custom-cms-developers-in-india",
  "/hire-angular-developers-in-india", "/hire-react-developers-in-india",
  "/hire-swift-developers-in-india", "/hire-laravel-developers-in-india",
  "/hire-magento-developers-in-india", "/hire-woocommerce-developers-in-india",
  "/hire-javascript-developers-in-india", "/hire-fullstack-developers-in-india",
  "/hire-mean-stack-developers-in-india", "/hire-mern-stack-developers-in-india",
  "/hire-vue-js-developers-in-india", "/hire-node-js-developers-in-india",
  "/hire-aws-developers-in-india", "/hire-salesforce-developers-in-india",
  "/hire-ui-ux-designers-in-india", "/hire-mobile-app-designers-in-india",
  "/hire-quality-analyst-developers-in-india", "/hire-pwa-developers-in-india",
  "/hire-shopify-developers-in-india",
]);

const HOME_SUBMENU_PATHS = new Set<string>([
  "/",
  "/about", "/about-us",
  "/our-journey", "/our-vision", "/vision-mission",
  "/leadership-team", "/life-at-mtouch",
  "/awards-recognition", "/nasscom-membership", "/clutch",
  "/blogs", "/blog", "/case-studies",
  "/it-services-digital-transformation-company",
]);

function normalisePath(raw: string): string {
  let p = (raw || '/').split('?')[0].split('#')[0].toLowerCase();
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function computeActiveTab(
  pathname: string,
  portfolioSlugs: Set<string>
): keyof typeof NAV_TARGETS | null {
  const p = normalisePath(pathname);

  // Single-segment root-level portfolio slugs (e.g. /otloffers-mobile-app-development)
  // must be classified as Portfolio — otherwise pattern-matching below would
  // wrongly flag them as Services (they often end with "-development" /
  // "-company"). Do this check BEFORE the Home / Services logic.
  if (portfolioSlugs.size > 0) {
    const segments = p.split('/').filter(Boolean);
    if (segments.length === 1 && portfolioSlugs.has(segments[0])) {
      return 'portfolio';
    }
  }

  const isHome =
    p === '/' ||
    HOME_SUBMENU_PATHS.has(p) ||
    p.startsWith('/blog/') ||
    p.startsWith('/blogs/') ||
    p.startsWith('/case-studies/') ||
    p.startsWith('/about/') ||
    p.startsWith('/about-us/') ||
    p.startsWith('/vision-mission/') ||
    p.startsWith('/leadership-team/') ||
    p.startsWith('/our-journey/') ||
    p.startsWith('/life-at-mtouch/') ||
    p.startsWith('/awards-recognition/') ||
    p.startsWith('/nasscom-membership/') ||
    p.startsWith('/clutch/') ||
    p.startsWith('/it-services-digital-transformation-company/');

  if (p === '/portfolio' || p.startsWith('/portfolio/')) return 'portfolio';
  if (p === '/careers'   || p.startsWith('/careers/'))   return 'careers';
  if (p === '/contact-us' || p.startsWith('/contact-us')) return 'contact';

  if (RESOURCE_PATHS.has(p) || p.startsWith('/hire-')) return 'resources';
  if (PRODUCT_PATHS.has(p)) return 'products';

  // Service check — explicit set, OR pattern-based for dynamic service slugs
  const isServiceByPattern =
    !isHome &&
    !PRODUCT_PATHS.has(p) &&
    !RESOURCE_PATHS.has(p) &&
    !p.startsWith('/hire-') &&
    !p.startsWith('/portfolio') &&
    !p.startsWith('/careers') &&
    !p.startsWith('/contact-us') &&
    !p.startsWith('/about') &&
    !p.startsWith('/blog') &&
    !p.startsWith('/case-studies') &&
    (p.endsWith('-services') ||
      p.endsWith('-solutions') ||
      p.endsWith('-company') ||
      p.endsWith('-development-company') ||
      p.endsWith('-development-services') ||
      p.endsWith('-consulting-services') ||
      p.endsWith('-development') ||
      p.includes('-services-') ||
      p.includes('-software-') ||
      p.includes('-design-company') ||
      p.includes('-marketing-') ||
      p.includes('-development-company-'));

  if (SERVICE_PATHS.has(p) || isServiceByPattern) return 'services';

  if (isHome) return 'home';

  return null;
}

// Paths we are CERTAIN about without needing portfolio DB data. For these we
// can safely overwrite the server-rendered active-link immediately.
function isExplicitRoute(p: string): boolean {
  if (
    p === '/' ||
    p === '/services' ||
    p === '/portfolio' || p.startsWith('/portfolio/') ||
    p === '/careers' || p.startsWith('/careers/') ||
    p === '/contact-us' || p.startsWith('/contact-us/') ||
    p.startsWith('/blog') ||
    p.startsWith('/case-studies') ||
    p.startsWith('/hire-')
  ) return true;
  if (HOME_SUBMENU_PATHS.has(p)) return true;
  if (SERVICE_PATHS.has(p)) return true;
  if (PRODUCT_PATHS.has(p)) return true;
  if (RESOURCE_PATHS.has(p)) return true;
  return false;
}

export default function NavActiveSync() {
  const pathname = usePathname();
  const [portfolioSlugs, setPortfolioSlugs] = useState<Set<string>>(
    PORTFOLIO_SLUGS_CACHE || new Set()
  );
  const [slugsLoaded, setSlugsLoaded] = useState<boolean>(
    PORTFOLIO_SLUGS_CACHE !== null
  );

  // Fetch portfolio slugs once on mount. Needed so we can recognise
  // root-level portfolio URLs (e.g. /otloffers-mobile-app-development)
  // that would otherwise be mis-highlighted as Services.
  useEffect(() => {
    if (slugsLoaded) return;
    let cancelled = false;
    loadPortfolioSlugs().then((set) => {
      if (!cancelled) {
        setPortfolioSlugs(set);
        setSlugsLoaded(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slugsLoaded]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const p = normalisePath(pathname || '/');

    // Anti-flash guard: if the pathname is a single-segment slug that isn't
    // obviously a known static route, it COULD be a portfolio. Leave the
    // server-rendered active-link (set by middleware's x-active-nav header)
    // untouched until the portfolio slug API has returned. Without this
    // guard, pattern-matching would briefly flip the highlight to "Services"
    // and then flip it back, producing a visible flash.
    if (!slugsLoaded) {
      const segments = p.split('/').filter(Boolean);
      if (segments.length === 1 && !isExplicitRoute(p)) {
        return; // wait for portfolio slugs to load
      }
    }

    const active = computeActiveTab(p, portfolioSlugs);

    // Grab every top-level nav link we manage.
    const allLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(
        '.ree-nav .nav-list > li > a.menu-links'
      )
    );
    if (!allLinks.length) return;

    // Reset then apply: remove `active-link` from every top-level link first.
    allLinks.forEach((link) => link.classList.remove('active-link'));

    if (!active) return;

    const targetHref = NAV_TARGETS[active];
    const activeLink = allLinks.find(
      (link) => (link.getAttribute('href') || '') === targetHref
    );
    if (activeLink) activeLink.classList.add('active-link');
  }, [pathname, portfolioSlugs, slugsLoaded]);

  return null;
}
