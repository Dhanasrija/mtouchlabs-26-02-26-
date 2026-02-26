/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: false,

  async rewrites() {
    return {
      // afterFiles rewrites ONLY apply if no matching page/file exists.
      // This means /aws-cloud-services will find its page.tsx first,
      // and only unknown slugs like /my-blog-post fall through to /blog/:slug.
      afterFiles: [
        {
          source: "/:slug",
          destination: "/blog/:slug",
        },
      ],
    };
  },

  async redirects() {
    return [
      // ===========================
      // BLOG REDIRECTS
      // ===========================
      {
        source: "/blog/:slug",
        destination: "/:slug",
        permanent: true,
      },

      // ===========================
      // EXISTING LEGACY REDIRECTS
      // ===========================
      { source: "/android-app-development-company-in-india", destination: "/android-app-development-company", permanent: true },
      { source: "/top-mobile-app-development-companies-in-hyderabad", destination: "/top-mobile-app-development-company-in-hyderabad", permanent: true },
      { source: "/hotel-booking-ios-app-development", destination: "/hotel-booking-app-development-company", permanent: true },
      { source: "/portfolio-3", destination: "/portfolio", permanent: true },
      { source: "/devops-services-and-solutions", destination: "/devops-services", permanent: true },
      { source: "/top-healthcare-software-development-company-in-india", destination: "/mobile-app-development-company", permanent: true },
      { source: "/custom-crm-software-development-company", destination: "/custom-software-development-company", permanent: true },
      { source: "/on-demand-home-services-mobile-app-development", destination: "/on-demand-products-development-company-hyderabad", permanent: true },
      { source: "/on-demand-mobile-app-development-solutions-for-your-business-needs", destination: "/on-demand-products-development-company-hyderabad", permanent: true },
      { source: "/top-on-demand-mobile-app-development-ideas-for-startups", destination: "/blog", permanent: true },
      { source: "/mtouch-labs-digital-solutions-for-modern-businesses", destination: "/services", permanent: true },
      { source: "/hyper-local-delivery-mobile-app-development", destination: "/on-demand-products-development-company-hyderabad", permanent: true },

      // ===========================
      // DIGITAL MARKETING REDIRECTS (old → new)
      // ===========================
      { source: "/digital-marketing-company", destination: "/digital-marketing-solutions", permanent: true },
      { source: "/seo-services-company", destination: "/seo-services", permanent: true },
      { source: "/ppc-management-services-company", destination: "/ppc-advertising-services", permanent: true },
      { source: "/social-media-marketing-company-in-india", destination: "/social-media-marketing-services", permanent: true },
      { source: "/app-store-optimization-services-company", destination: "/app-store-optimization-services", permanent: true },

      // ===========================
      // CLOUD / AWS REDIRECTS (old → new)
      // ===========================
      { source: "/amazon-web-services-company", destination: "/aws-cloud-services", permanent: true },
      { source: "/amazon-web-services", destination: "/aws-cloud-services", permanent: true },

      // ===========================
      // DATA SCIENCE REDIRECT (old → new)
      // ===========================
      { source: "/empowering-businesses-with-data-science", destination: "/data-science-solutions", permanent: true },
    ];
  },
};

module.exports = nextConfig;