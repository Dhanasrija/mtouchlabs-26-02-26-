/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: false,
  poweredByHeader: false,
  compress: true,

  // ✅ Prevents Node.js packages from being bundled into Edge middleware
  experimental: {
    serverComponentsExternalPackages: [
      'framer-motion',
      '@anthropic-ai/sdk',
      'resend',
      '@neondatabase/serverless',
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()' },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2|ttf|otf|css|js)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // ===========================
      // NON-WWW → WWW REDIRECT
      // ===========================
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mtouchlabs.com' }],
        destination: 'https://www.mtouchlabs.com/:path*',
        statusCode: 301,
      },
      // ===========================
      // BLOG REDIRECTS — old /slug → /blog/slug (canonical)
      // Note: actual redirect happens in app/[slug]/page.tsx via Next.js redirect()
      // This config entry is intentionally removed to avoid redirect loops
      // ===========================
      // ===========================
      // DELETED DUPLICATE "COPY" PAGES
      // ===========================
      { source: "/digital-marketing-company%20copy", destination: "/digital-marketing-services", permanent: true },
      { source: "/digital-marketing-company-copy", destination: "/digital-marketing-services", permanent: true },
      { source: "/hire-custom-cms-developers-in-india%20copy", destination: "/hire-custom-cms-developers-in-india", permanent: true },
      { source: "/hire-custom-cms-developers-in-india-copy", destination: "/hire-custom-cms-developers-in-india", permanent: true },
      { source: "/hire-magento-developers-in-india%20copy", destination: "/hire-magento-developers-in-india", permanent: true },
      { source: "/hire-magento-developers-in-india-copy", destination: "/hire-magento-developers-in-india", permanent: true },
      { source: "/hire-shopify-developers-in-india%20copy", destination: "/hire-shopify-developers-in-india", permanent: true },
      { source: "/hire-shopify-developers-in-india-copy", destination: "/hire-shopify-developers-in-india", permanent: true },
      { source: "/digital-marketing-services-company-in-india%20copy", destination: "/digital-marketing-services", permanent: true },
      { source: "/digital-marketing-services-company-in-india-copy", destination: "/digital-marketing-services", permanent: true },
      { source: "/on-demand-chef-app-development-company%20copy", destination: "/on-demand-chef-app-development-company", permanent: true },
      { source: "/on-demand-chef-app-development-company-copy", destination: "/on-demand-chef-app-development-company", permanent: true },
      // ===========================
      // EXISTING LEGACY REDIRECTS
      // ===========================
      { source: "/android-app-development-company-in-india", destination: "/android-app-development-company", permanent: true },
      { source: "/portfolio-3", destination: "/portfolio", permanent: true },
      { source: "/devops-services-and-solutions", destination: "/devops-services", permanent: true },
      { source: "/top-healthcare-software-development-company-in-india", destination: "/mobile-app-development-company", permanent: true },
      { source: "/custom-crm-software-development-company", destination: "/custom-software-development-company", permanent: true },
      { source: "/on-demand-mobile-app-development-solutions-for-your-business-needs", destination: "/on-demand-products-development-company-hyderabad", permanent: true },
      { source: "/top-on-demand-mobile-app-development-ideas-for-startups", destination: "/blog", permanent: true },
      { source: "/mtouch-labs-digital-solutions-for-modern-businesses", destination: "/services", permanent: true },

      // ===========================
      // LOCATION REDIRECTS — old "top-mobile-app-development-company-in-*" (and plurals)
      //                     → new canonical "software-development-company-*"
      // ===========================
      // India cities
      { source: "/top-mobile-app-development-company-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },
      { source: "/top-mobile-app-development-companies-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },
      { source: "/top-mobile-app-development-company-in-bangalore", destination: "/software-development-company-bangalore", permanent: true },
      { source: "/top-mobile-app-development-companies-in-bangalore", destination: "/software-development-company-bangalore", permanent: true },
      { source: "/top-mobile-app-development-company-in-chennai", destination: "/software-development-company-chennai", permanent: true },
      { source: "/top-mobile-app-development-companies-in-chennai", destination: "/software-development-company-chennai", permanent: true },
      { source: "/top-mobile-app-development-company-in-coimbatore", destination: "/software-development-company-coimbatore", permanent: true },
      { source: "/top-mobile-app-development-companies-in-coimbatore", destination: "/software-development-company-coimbatore", permanent: true },
      { source: "/top-mobile-app-development-company-in-kochi", destination: "/software-development-company-kochi", permanent: true },
      { source: "/top-mobile-app-development-companies-in-kochi", destination: "/software-development-company-kochi", permanent: true },
      { source: "/top-mobile-app-development-company-in-india", destination: "/software-development-company-india", permanent: true },
      { source: "/top-mobile-app-development-companies-in-india", destination: "/software-development-company-india", permanent: true },

      // Middle East
      { source: "/top-mobile-app-development-company-in-dubai", destination: "/software-development-company-dubai", permanent: true },
      { source: "/top-mobile-app-development-companies-in-dubai", destination: "/software-development-company-dubai", permanent: true },
      { source: "/top-mobile-app-development-company-in-uae", destination: "/software-development-company-united-arab-emirates", permanent: true },
      { source: "/top-mobile-app-development-companies-in-uae", destination: "/software-development-company-united-arab-emirates", permanent: true },
      { source: "/top-mobile-app-development-company-in-united-arab-emirates", destination: "/software-development-company-united-arab-emirates", permanent: true },
      { source: "/top-mobile-app-development-company-in-saudi-arabia", destination: "/software-development-company-saudi-arabia", permanent: true },
      { source: "/top-mobile-app-development-companies-in-saudi-arabia", destination: "/software-development-company-saudi-arabia", permanent: true },
      { source: "/top-mobile-app-development-company-in-qatar", destination: "/software-development-company-qatar", permanent: true },
      { source: "/top-mobile-app-development-companies-in-qatar", destination: "/software-development-company-qatar", permanent: true },
      { source: "/top-mobile-app-development-company-in-kuwait", destination: "/software-development-company-kuwait", permanent: true },
      { source: "/top-mobile-app-development-companies-in-kuwait", destination: "/software-development-company-kuwait", permanent: true },

      // Americas
      { source: "/top-mobile-app-development-company-in-usa", destination: "/software-development-company-usa", permanent: true },
      { source: "/top-mobile-app-development-companies-in-usa", destination: "/software-development-company-usa", permanent: true },
      { source: "/top-mobile-app-development-company-in-us", destination: "/software-development-company-usa", permanent: true },
      { source: "/top-mobile-app-development-company-in-united-states", destination: "/software-development-company-usa", permanent: true },
      { source: "/top-mobile-app-development-company-in-canada", destination: "/software-development-company-canada", permanent: true },
      { source: "/top-mobile-app-development-companies-in-canada", destination: "/software-development-company-canada", permanent: true },

      // Europe
      { source: "/top-mobile-app-development-company-in-uk", destination: "/software-development-company-united-kingdom", permanent: true },
      { source: "/top-mobile-app-development-companies-in-uk", destination: "/software-development-company-united-kingdom", permanent: true },
      { source: "/top-mobile-app-development-company-in-united-kingdom", destination: "/software-development-company-united-kingdom", permanent: true },
      { source: "/top-mobile-app-development-company-in-germany", destination: "/software-development-company-germany", permanent: true },
      { source: "/top-mobile-app-development-companies-in-germany", destination: "/software-development-company-germany", permanent: true },
      { source: "/top-mobile-app-development-company-in-ireland", destination: "/software-development-company-ireland", permanent: true },
      { source: "/top-mobile-app-development-companies-in-ireland", destination: "/software-development-company-ireland", permanent: true },

      // APAC
      { source: "/top-mobile-app-development-company-in-australia", destination: "/software-development-company-australia", permanent: true },
      { source: "/top-mobile-app-development-companies-in-australia", destination: "/software-development-company-australia", permanent: true },
      { source: "/top-mobile-app-development-company-in-new-zealand", destination: "/software-development-company-new-zealand", permanent: true },
      { source: "/top-mobile-app-development-companies-in-new-zealand", destination: "/software-development-company-new-zealand", permanent: true },
      { source: "/top-mobile-app-development-company-in-singapore", destination: "/software-development-company-singapore", permanent: true },
      { source: "/top-mobile-app-development-companies-in-singapore", destination: "/software-development-company-singapore", permanent: true },

      // "best-*-in-hyderabad" legacy variants → canonical Hyderabad page
      { source: "/best-web-development-company-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },
      { source: "/best-mobile-app-development-company-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },
      { source: "/best-software-development-company-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },

      // ===========================
      // OLD ROOT-LEVEL BLOG SLUGS → /blog/<slug>
      // (middleware also redirects DB-known blog slugs dynamically, but we
      //  list these explicit mappings for legacy links still on the web.)
      // ===========================
      { source: "/ai-role-in-business-automation", destination: "/blog/ai-role-in-business-automation", permanent: true },
      { source: "/artificial-intelligence-transforming-mobile-technology", destination: "/blog/artificial-intelligence-transforming-mobile-technology", permanent: true },
      { source: "/top-generative-ai-tools-for-developers", destination: "/blog/top-generative-ai-tools-for-developers", permanent: true },
      { source: "/top-10-free-ai-tools-for-software-developers", destination: "/blog/top-10-free-ai-tools-for-software-developers", permanent: true },
      { source: "/mobile-app-development-bangalore-tech-startups", destination: "/blog/mobile-app-development-bangalore-tech-startups", permanent: true },
      { source: "/top-ecommerce-niches-us", destination: "/blog/top-ecommerce-niches-us", permanent: true },
      { source: "/hyderabad-startups-app-development-mtouch-labs", destination: "/blog/hyderabad-startups-app-development-mtouch-labs", permanent: true },
      { source: "/ios-mobile-app-development-vs-android-mobile-app-development", destination: "/blog/ios-mobile-app-development-vs-android-mobile-app-development", permanent: true },
      { source: "/ios-app-development-vs-android-app-development", destination: "/blog/ios-mobile-app-development-vs-android-mobile-app-development", permanent: true },
      { source: "/role-of-ai-in-ecommerce-development", destination: "/blog/role-of-ai-in-ecommerce-development", permanent: true },
      { source: "/benefits-of-ecommerce-mobile-apps", destination: "/blog/benefits-of-ecommerce-mobile-apps", permanent: true },
      { source: "/openai-for-a-mobile-app-development-company", destination: "/blog/openai-for-a-mobile-app-development-company", permanent: true },
      { source: "/tips-and-trends-to-improve-your-web-design-in-2023", destination: "/blog/tips-and-trends-to-improve-your-web-design-in-2023", permanent: true },
      { source: "/impacts-of-apples-ios-14-app-clips-on-features-and-tools", destination: "/blog/impacts-of-apples-ios-14-app-clips-on-features-and-tools", permanent: true },
      { source: "/key-advantages-of-cross-platform-mobile-app-development", destination: "/blog/key-advantages-of-cross-platform-mobile-app-development", permanent: true },
      // ── 2026-04-30: legacy custom-software slugs now point to the new comparison article ──
      { source: "/navigating-future-custom-software-development-2025", destination: "/blog/custom-software-vs-saas", permanent: true },
      { source: "/blog/navigating-future-custom-software-development-2025", destination: "/blog/custom-software-vs-saas", permanent: true },
      { source: "/future-of-custom-software-development", destination: "/blog/custom-software-vs-saas", permanent: true },
      { source: "/blog/future-of-custom-software-development", destination: "/blog/custom-software-vs-saas", permanent: true },
      // legacy AI-mobile slug — keep the dynamic /slug → /blog/slug behaviour for the refreshed 2026 article
      { source: "/how-artificial-intelligence-is-transforming-mobile-app-development", destination: "/blog/how-artificial-intelligence-is-transforming-mobile-app-development", permanent: true },

      // ── 2026-05: NEW BLOG REDIRECTS ─────────────────────────────────
      // Legacy 2021 trends slug → refreshed 2026 article (one-hop to /blog/<slug>)
      { source: "/top-mobile-app-development-trends-in-2021", destination: "/blog/mobile-app-development-trends", permanent: true },
      { source: "/blog/top-mobile-app-development-trends-in-2021", destination: "/blog/mobile-app-development-trends", permanent: true },
      // Both legacy ecommerce-guide variants → canonical guide (one-hop to /blog/<slug>)
      { source: "/a-complete-guide-on-ecommerce-mobile-app-development", destination: "/blog/guide-to-create-an-ecommerce-mobile-application-development", permanent: true },
      { source: "/blog/a-complete-guide-on-ecommerce-mobile-app-development", destination: "/blog/guide-to-create-an-ecommerce-mobile-application-development", permanent: true },
      { source: "/the-ultimate-guide-to-create-an-ecommerce-mobile-app-development", destination: "/blog/guide-to-create-an-ecommerce-mobile-application-development", permanent: true },
      { source: "/blog/the-ultimate-guide-to-create-an-ecommerce-mobile-app-development", destination: "/blog/guide-to-create-an-ecommerce-mobile-application-development", permanent: true },
      // ── 2026-06: GenAI blog re-slugged → Agentic AI / RAG / Enterprise AI ──
      { source: "/genai-rag-ai-agents-ai-powered-solutions-mtouch-labs", destination: "/blog/agentic-ai-rag-enterprise-ai-solutions", permanent: true },
      { source: "/blog/genai-rag-ai-agents-ai-powered-solutions-mtouch-labs", destination: "/blog/agentic-ai-rag-enterprise-ai-solutions", permanent: true },
      // Root-level canonical aliases the user keeps in metadata → /blog/<slug>
      { source: "/mobile-app-development-trends", destination: "/blog/mobile-app-development-trends", permanent: true },
      { source: "/guide-to-create-an-ecommerce-mobile-application-development", destination: "/blog/guide-to-create-an-ecommerce-mobile-application-development", permanent: true },
      // New root-level blog slugs → /blog/<slug> (matches existing convention; middleware
      //  also handles this dynamically, but explicit entries help legacy / external links.)
      { source: "/mobile-app-development-process", destination: "/blog/mobile-app-development-process", permanent: true },
      { source: "/ai-use-cases-by-industry", destination: "/blog/ai-use-cases-by-industry", permanent: true },
      { source: "/saas-pricing-models", destination: "/blog/saas-pricing-models", permanent: true },
      { source: "/website-vs-web-application", destination: "/blog/website-vs-web-application", permanent: true },
      { source: "/ecommerce-checkout-optimization", destination: "/blog/ecommerce-checkout-optimization", permanent: true },
      { source: "/core-web-vitals-seo-guide", destination: "/blog/core-web-vitals-seo-guide", permanent: true },
      { source: "/saas-onboarding-best-practices", destination: "/blog/saas-onboarding-best-practices", permanent: true },
      { source: "/impact-of-ai-on-mobile-app-development-by-2025", destination: "/blog/impact-of-ai-on-mobile-app-development-by-2025", permanent: true },
      { source: "/does-my-business-need-a-mobile-app", destination: "/blog/does-my-business-need-a-mobile-app", permanent: true },
      { source: "/go-crazy-with-smart-phone-mobile-application-development", destination: "/blog/go-crazy-with-smart-phone-mobile-application-development", permanent: true },
      { source: "/guide-to-create-an-on-demand-mobile-app-development", destination: "/blog/guide-to-create-an-on-demand-mobile-app-development", permanent: true },
      { source: "/5-ways-to-convert-your-website-into-a-mobile-app", destination: "/blog/5-ways-to-convert-your-website-into-a-mobile-app", permanent: true },
      { source: "/navigating-the-world-of-mobile-application-apps", destination: "/blog/navigating-the-world-of-mobile-application-apps", permanent: true },
      { source: "/php-web-development-is-transforming-businesses-2025", destination: "/blog/php-web-development-is-transforming-businesses-2025", permanent: true },

      // ===========================
      // DELETED PORTFOLIO / LEGACY PROJECT SLUGS → relevant service page
      // ===========================
      // { source: "/online-food-ordering-mobile-app-development", destination: "/food-delivery-app-development-service", permanent: true },
      // { source: "/on-demand-service-providers-web-and-mobile-app-development", destination: "/on-demand-service-mobile-app-development", permanent: true },
      // { source: "/online-generic-medicine-mobile-app-development-and-web-development", destination: "/diagnostic-app-development-company", permanent: true },
      // { source: "/online-generic-medicine-delivery-mobile-app-development", destination: "/diagnostic-app-development-company", permanent: true },
      // { source: "/fractional-property-ownership-web-development", destination: "/real-estate-app-development-company", permanent: true },
      // { source: "/telangana-ecommerce-mobile-app-development", destination: "/ecommerce-app-development-company", permanent: true },
      // { source: "/multi-vendor-ecommerce-mobile-app-development", destination: "/ecommerce-app-development-company", permanent: true },
      // { source: "/abu-dhabi-judicial-department-mobile-app-development", destination: "/mobile-app-development-company", permanent: true },
      // { source: "/on-demand-chef-management-web-development", destination: "/on-demand-chef-app-development-company", permanent: true },
      // { source: "/bikers-community-social-networking-app-development", destination: "/social-media-app-development-company", permanent: true },
      // { source: "/staff-and-student-management-enterprise-mobile-app-development", destination: "/enterprise-application-development-company", permanent: true },
      // { source: "/online-astrology-consultation-mobile-app-development", destination: "/mobile-app-development-company", permanent: true },
      // { source: "/cabs-booking-app-development-company", destination: "/taxi-booking-app-development-company", permanent: true },
      // { source: "/online-grocery-delivery-android-app-development", destination: "/grocery-delivery-app-development-company", permanent: true },
      // { source: "/online-grocery-shopping-mobile-app-development", destination: "/grocery-delivery-app-development-company", permanent: true },
      // { source: "/best-on-demand-grocery-delivery-android-app-development", destination: "/grocery-delivery-app-development-company", permanent: true },
      // { source: "/hotel-booking-ios-app-development", destination: "/hotel-booking-app-development-company", permanent: true },
      // { source: "/online-learning-android-app-development", destination: "/e-learning-app-development-company", permanent: true },
      // { source: "/online-learning-platform-mobile-app-development", destination: "/e-learning-app-development-company", permanent: true },
      // { source: "/on-demand-home-services-mobile-app-development", destination: "/on-demand-service-mobile-app-development", permanent: true },
      // { source: "/hyper-local-delivery-mobile-app-development", destination: "/on-demand-service-mobile-app-development", permanent: true },
      // { source: "/hitech-shuttle-bus-management-platform", destination: "/mobile-app-development-company", permanent: true },
      // { source: "/short-video-sharing-mobile-app-development", destination: "/social-media-app-development-company", permanent: true },
      // { source: "/social-community-mobile-app-development", destination: "/social-media-app-development-company", permanent: true },
      // { source: "/lip-sync-video-dubbing-mobile-app-development", destination: "/social-media-app-development-company", permanent: true },
      // { source: "/loyalty-program-management-mobile-app-development", destination: "/mobile-app-development-company", permanent: true },
      // { source: "/key-plantation-ngo-mobile-app-development", destination: "/mobile-app-development-company", permanent: true },
      // { source: "/devotional-mobile-app-development", destination: "/mobile-app-development-company", permanent: true },
      // ===========================
      // DIGITAL MARKETING REDIRECTS (duplicate consolidation per canonical decision)
      // Canonicals kept: /digital-marketing-solutions, /digital-marketing-services,
      // /ppc-advertising-services, /cyber-security-services-company
      // ===========================
      { source: "/digital-marketing-company", destination: "/digital-marketing-services", permanent: true },
      { source: "/digital-marketing-services-company-in-india", destination: "/digital-marketing-services", permanent: true },
      { source: "/seo-services-company", destination: "/seo-services", permanent: true },
      { source: "/ppc-management-services-company", destination: "/ppc-advertising-services", permanent: true },
      { source: "/social-media-marketing-company-in-india", destination: "/social-media-marketing-services", permanent: true },
      { source: "/app-store-optimization-services-company", destination: "/app-store-optimization-services", permanent: true },
      // ===========================
      // CYBERSECURITY REDIRECT — consolidate duplicate
      // ===========================
      { source: "/cybersecurity-development-company", destination: "/cyber-security-services-company", permanent: true },
      // ===========================
      // DATA SCIENCE REDIRECT
      // ===========================
      { source: "/empowering-businesses-with-data-science", destination: "/data-science-solutions", permanent: true },
      { source: "/company-overview", destination: "/it-services-digital-transformation-company", permanent: true },

      // =========================================================================
      // CRAWL-ERROR RESCUE (Search Console) — 404s mapped to canonical sitemap URLs
      // =========================================================================

      // --- Legacy .html files → clean URLs ---------------------------------
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/portfolio.html", destination: "/portfolio", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/coming-soon.html", destination: "/", permanent: true },
      { source: "/mobile-app-development-company.html", destination: "/mobile-app-development-company", permanent: true },
      { source: "/web-development-company.html", destination: "/web-development-company", permanent: true },
      { source: "/ecommerce-app-development-company.html", destination: "/ecommerce-app-development-company", permanent: true },
      { source: "/mobile-app-design-company.html", destination: "/mobile-app-design-company", permanent: true },
      { source: "/social-media-app-development-company.html", destination: "/social-media-app-development-company", permanent: true },
      { source: "/social-community-mobile-app-development.html", destination: "/social-media-app-development-company", permanent: true },
      { source: "/lip-sync-video-dubbing-mobile-app-development.html", destination: "/social-media-app-development-company", permanent: true },
      { source: "/diagnostic-app-development-company.html", destination: "/diagnostic-app-development-company", permanent: true },
      { source: "/custom-cms-development-company-in-india.html", destination: "/custom-cms-development-company-in-india", permanent: true },
      { source: "/custom-crm-software-development-company.html", destination: "/custom-crm-software-development-company", permanent: true },
      { source: "/360-degree-photography-services-in-india.html", destination: "/360-degree-photography-services-in-india", permanent: true },
      { source: "/aws-cloud-services.html", destination: "/aws-cloud-services", permanent: true },
      { source: "/best-iot-development-company-in-india.html", destination: "/best-iot-development-company-in-india", permanent: true },
      { source: "/devops-services-and-solutions.html", destination: "/devops-services", permanent: true },
      { source: "/ai-machine-learning-services.html", destination: "/machine-learning-development-company", permanent: true },
      { source: "/ai-machine-learning-services", destination: "/machine-learning-development-company", permanent: true },
      { source: "/generative-ai-development-company.html", destination: "/generative-ai-development-company", permanent: true },
      { source: "/telangana-ecommerce-mobile-app-development.html", destination: "/ecommerce-app-development-company", permanent: true },
      { source: "/education-app-development-company-in-india.html", destination: "/e-learning-app-development-company", permanent: true },
      { source: "/top-mobile-app-development-company-in-hyderabad.html", destination: "/software-development-company-hyderabad", permanent: true },
      { source: "/social-media-marketing-company-in-india.html", destination: "/social-media-marketing-services", permanent: true },
      { source: "/hire-developers-in-india.html", destination: "/hire-developers-in-india", permanent: true },
      { source: "/hire-fullstack-developers-in-india.html", destination: "/hire-fullstack-developers-in-india", permanent: true },
      { source: "/hire-angular-developers-in-india.html", destination: "/hire-angular-developers-in-india", permanent: true },
      { source: "/hire-react-developers-in-india.html", destination: "/hire-react-developers-in-india", permanent: true },
      { source: "/hire-node-js-developers-in-india.html", destination: "/hire-node-js-developers-in-india", permanent: true },
      { source: "/hire-ui-ux-designers-in-india.html", destination: "/hire-ui-ux-designers-in-india", permanent: true },
      { source: "/hire-salesforce-developers-in-india.html", destination: "/hire-salesforce-developers-in-india", permanent: true },
      { source: "/hire-web-developers-in-india.html", destination: "/hire-web-developers-in-india", permanent: true },

      // --- Legacy .html blog URLs → /blog/<slug> --------------------------
      { source: "/building-future-of-digital-india.html", destination: "/blog/building-future-of-digital-india", permanent: true },
      { source: "/top-10-free-ai-tools-for-software-developers.html", destination: "/blog/top-10-free-ai-tools-for-software-developers", permanent: true },
      { source: "/top-ecommerce-niches-us.html", destination: "/blog/top-ecommerce-niches-us", permanent: true },
      { source: "/blog/top-mobile-app-development-companies-in-hyderabad", destination: "/software-development-company-hyderabad", permanent: true },

      // --- AI / ML / Data variants → AI canonicals -----------------------
      { source: "/ai-and-ml-development-company", destination: "/generative-ai-development-company", permanent: true },
      { source: "/ai-consulting-strategy", destination: "/generative-ai-development-company", permanent: true },
      { source: "/ai-enabled-web-application", destination: "/generative-ai-development-company", permanent: true },
      { source: "/ai-powered-mobile-application", destination: "/generative-ai-development-company", permanent: true },
      { source: "/ai-model-deployment", destination: "/generative-ai-development-company", permanent: true },
      { source: "/ai-data-intelligence-services", destination: "/data-science-solutions", permanent: true },

      // --- SaaS variants -------------------------------------------------
      { source: "/saas-future-of-ecommerce", destination: "/saas-development-services", permanent: true },
      { source: "/saas-product-development", destination: "/saas-development-services", permanent: true },
      { source: "/saas-development", destination: "/saas-development-services", permanent: true },
      { source: "/saas-web-platforms", destination: "/saas-development-services", permanent: true },

      // --- Cloud / DevOps variants --------------------------------------
      { source: "/amazon-web-services", destination: "/amazon-web-services-company", permanent: true },
      { source: "/aws", destination: "/aws-cloud-services", permanent: true },
      { source: "/aws-services", destination: "/aws-cloud-services", permanent: true },
      { source: "/cloud-native-application-development", destination: "/cloud-services", permanent: true },
      { source: "/cloud-devops-services", destination: "/cloud-services", permanent: true },
      { source: "/marketing-cloud", destination: "/salesforce-sales-cloud-services", permanent: true },
      { source: "/salesforce-service-cloud-services", destination: "/salesforce-sales-cloud-services", permanent: true },
      { source: "/salesforce-consulting-services", destination: "/salesforce-consulting-services-company", permanent: true },
      { source: "/services/sales-force/salesforce-consulting-services", destination: "/salesforce-consulting-services-company", permanent: true },

      // --- Design / UI-UX variants --------------------------------------
      { source: "/ui-ux-design-services", destination: "/ui-ux-design-company", permanent: true },
      { source: "/branding-visual-identity", destination: "/ui-ux-design-company", permanent: true },

      // --- eCommerce variants -------------------------------------------
      { source: "/top-ecommerce-development-company-in-india", destination: "/ecommerce-app-development-company", permanent: true },
      { source: "/ecommerce-development-company", destination: "/ecommerce-app-development-company", permanent: true },
      { source: "/e-commerce-app-development-company", destination: "/ecommerce-app-development-company", permanent: true },

      // --- Content / digital marketing ----------------------------------
      { source: "/content-marketing", destination: "/content-marketing-services", permanent: true },
      { source: "/best-digital-", destination: "/digital-marketing-solutions", permanent: true },

      // --- Android / iOS / case variants --------------------------------
      { source: "/Android", destination: "/android-app-development-company", permanent: true },
      // /iPad-app-development-company case-fix — already handled by middleware lowercasing,
      // and re-introducing it here causes ERR_TOO_MANY_REDIRECTS because path-to-regexp
      // matches case-insensitively, so the lowercase target also matches the source.
      // /hire-iOS-app-developers-in-india case-fix removed — same redirect-loop reason as iPad above.
      { source: "/ios-app-development-", destination: "/ios-app-development-company", permanent: true },
      { source: "/android-app-development-companymtouchlabs.com/ios-app-development-company", destination: "/android-app-development-company", permanent: true },
      { source: "/services/mobile-app-development-company", destination: "/mobile-app-development-company", permanent: true },
      { source: "/mobile-app-development-companyTop", destination: "/mobile-app-development-company", permanent: true },
      { source: "/mobile-app-", destination: "/mobile-app-development-company", permanent: true },
      { source: "/mobile-app-development-business", destination: "/mobile-app-development-company", permanent: true },
            { source: "/mobile-app-development-company😍", destination: "/mobile-app-development-company", permanent: true },

      // --- Portfolio / project detail pages & legacy portfolio routes ---
      { source: "/portfolio-2", destination: "/portfolio", permanent: true },
      // OLT Offers — canonical slug is olt-offers-mobile-app-development.
      // Redirect every historical variant to the new canonical URL.
      { source: "/portfolio/otloffers-mobile-app-development", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/portfolio/oltoffers-mobile-app-development", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/portfolio/olt-offers", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/otloffers-mobile-app-development", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/oltoffers-mobile-app-development", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/olt-offers", destination: "/portfolio/olt-offers-mobile-app-development", permanent: true },
      { source: "/mcartify", destination: "/portfolio", permanent: true },
      { source: "/effortless-wedding-planning-app-website", destination: "/portfolio", permanent: true },
      { source: "/featured-products", destination: "/on-demand-products-development-company-hyderabad", permanent: true },
      { source: "/details/ntik-app-made-in-india-short-video-sharing-app", destination: "/portfolio", permanent: true },
      { source: "/details/khidkee-an-e-commerce-retail-store-mobile-app", destination: "/portfolio", permanent: true },
      { source: "/case-study-apexthink", destination: "/case-studies", permanent: true },

      // --- Healthcare / Industry variants --------------------------------
      { source: "/health-care-app-development-services", destination: "/diagnostic-app-development-company", permanent: true },
      { source: "/custom-beauty-wellness-apps", destination: "/mobile-app-development-company", permanent: true },
      { source: "/custom-app-development-for-temple-services", destination: "custom-software-development-company", permanent: true },
      { source: "/Slug-web-and-app-development-for-education-services", destination: "/e-learning-app-development-company", permanent: true },
      { source: "/education-app-development-company-in-india", destination: "/e-learning-app-development-company", permanent: true },
      { source: "/audio-streaming-and-video-streaming-app-development-company-in-india", destination: "/ott-app-development-company", permanent: true },
      { source: "/media-and-entertainment-app-development-company-in-india", destination: "/ott-app-development-company", permanent: true },
      { source: "/top-social-networking-app-development-company-in-india", destination: "/social-media-app-development-company", permanent: true },
      { source: "/chef-management-app-development-hyderabad", destination: "/chef-management-app-solutions", permanent: true },

      // --- Dev stack / hire variants ------------------------------------
      { source: "/node-js-development-company-in-india", destination: "/hire-node-js-developers-in-india", permanent: true },
      { source: "/express-js-development-company-in-india", destination: "/hire-node-js-developers-in-india", permanent: true },
      { source: "/react-js-development-company-in-india", destination: "/hire-react-developers-in-india", permanent: true },
      { source: "/vue-js-development-company-in-india", destination: "/hire-vue-js-developers-in-india", permanent: true },
      { source: "/vue-js-development-services", destination: "/hire-vue-js-developers-in-india", permanent: true },
      { source: "/angular-development-company-in-india", destination: "/hire-angular-developers-in-india", permanent: true },
      { source: "/custom-software-development", destination: "/custom-software-development-company", permanent: true },
      { source: "/custom-crm-tool-development", destination: "/custom-crm-software-development-company", permanent: true },
      { source: "/custom-cms-development-company", destination: "/custom-cms-development-company-in-india", permanent: true },
      { source: "/cross-platform-development", destination: "/cross-platform-app-development-company", permanent: true },
      { source: "/progressive-web-apps", destination: "/web-development-company", permanent: true },

      // --- Maintenance / testing / modernization ------------------------
      { source: "/software-maintenance-support", destination: "/app-maintenance-support-services", permanent: true },
      { source: "/app-maintenance-support", destination: "/app-maintenance-support-services", permanent: true },
      { source: "/web-maintenance-support-services", destination: "/app-maintenance-support-services", permanent: true },
      { source: "/software-testing-qa-automation", destination: "/quality-assurance-and-testing-services", permanent: true },
      { source: "/legacy-software-modernization", destination: "/custom-software-development-company", permanent: true },

      // --- Location / case typos ----------------------------------------
      { source: "/top-mobile-app-development-company-in", destination: "/", permanent: true },
      { source: "/favicon.ico", destination: "/", permanent: true },
    // { source: "/search?q=%7Bsearch_term_string%7D", destination: "/", permanent: true },

      { source: "/best-mobile-app-development-company-in-canada", destination: "/software-development-company-canada", permanent: true },
      { source: "/best-mobile-app-development-company-in-usa", destination: "/software-development-company-usa", permanent: true },

      // --- Misc / careers / business ------------------------------------
      { source: "/career-opportunities-web-mobile-development", destination: "/careers", permanent: true },
      { source: "/business-solutions", destination: "/it-solutions-company", permanent: true },
      { source: "/e-learning-app-", destination: "/e-learning-app-development-company", permanent: true },
      { source: "/real-estate-app-", destination: "/real-estate-app-development-company", permanent: true },
      { source: "/gaming-apps-delopment-company", destination: "/gaming-apps-development-company", permanent: true },
      { source: "/custom-cms-development-company-in-ind", destination: "/custom-cms-development-company-in-india", permanent: true },
      { source: "/1000", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;