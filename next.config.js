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
      { source: "/top-mobile-app-development-companies-in-hyderabad", destination: "/top-mobile-app-development-company-in-hyderabad", permanent: true },
      { source: "/portfolio-3", destination: "/portfolio", permanent: true },
      { source: "/devops-services-and-solutions", destination: "/devops-services", permanent: true },
      { source: "/top-healthcare-software-development-company-in-india", destination: "/mobile-app-development-company", permanent: true },
      { source: "/custom-crm-software-development-company", destination: "/custom-software-development-company", permanent: true },
      { source: "/on-demand-mobile-app-development-solutions-for-your-business-needs", destination: "/on-demand-products-development-company-hyderabad", permanent: true },
      { source: "/top-on-demand-mobile-app-development-ideas-for-startups", destination: "/blog", permanent: true },
      { source: "/mtouch-labs-digital-solutions-for-modern-businesses", destination: "/services", permanent: true },
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