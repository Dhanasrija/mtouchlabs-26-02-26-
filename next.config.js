/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  async redirects() {
    return [
      // ===========================
      // NON-WWW → WWW REDIRECT
      // ===========================
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'mtouchlabs.com' }],
        destination: 'https://www.mtouchlabs.com/:path*',
        permanent: true,
      },
      // ===========================
      // BLOG REDIRECTS — /blog/slug → /slug
      // ===========================
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true,
      },
      // ===========================
      // DELETED DUPLICATE "COPY" PAGES
      // ===========================
      { source: "/digital-marketing-company%20copy", destination: "/digital-marketing-solutions", permanent: true },
      { source: "/digital-marketing-company-copy", destination: "/digital-marketing-solutions", permanent: true },
      { source: "/hire-custom-cms-developers-in-india%20copy", destination: "/hire-custom-cms-developers-in-india", permanent: true },
      { source: "/hire-custom-cms-developers-in-india-copy", destination: "/hire-custom-cms-developers-in-india", permanent: true },
      { source: "/hire-magento-developers-in-india%20copy", destination: "/hire-magento-developers-in-india", permanent: true },
      { source: "/hire-magento-developers-in-india-copy", destination: "/hire-magento-developers-in-india", permanent: true },
      { source: "/hire-shopify-developers-in-india%20copy", destination: "/hire-shopify-developers-in-india", permanent: true },
      { source: "/hire-shopify-developers-in-india-copy", destination: "/hire-shopify-developers-in-india", permanent: true },
      { source: "/digital-marketing-services-company-in-india%20copy", destination: "/digital-marketing-services-company-in-india", permanent: true },
      { source: "/digital-marketing-services-company-in-india-copy", destination: "/digital-marketing-services-company-in-india", permanent: true },
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
      // DIGITAL MARKETING REDIRECTS
      // ===========================
      { source: "/digital-marketing-company", destination: "/digital-marketing-solutions", permanent: true },
      { source: "/seo-services-company", destination: "/seo-services", permanent: true },
      { source: "/ppc-management-services-company", destination: "/ppc-advertising-services", permanent: true },
      { source: "/social-media-marketing-company-in-india", destination: "/social-media-marketing-services", permanent: true },
      { source: "/app-store-optimization-services-company", destination: "/app-store-optimization-services", permanent: true },
      // ===========================
      // DATA SCIENCE REDIRECT
      // ===========================
      { source: "/empowering-businesses-with-data-science", destination: "/data-science-solutions", permanent: true },
    ];
  },
};
module.exports = nextConfig;