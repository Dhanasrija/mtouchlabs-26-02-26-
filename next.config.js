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
      { source: "/navigating-future-custom-software-development-2025", destination: "/blog/navigating-future-custom-software-development-2025", permanent: true },
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
    ];
  },
};

module.exports = nextConfig;