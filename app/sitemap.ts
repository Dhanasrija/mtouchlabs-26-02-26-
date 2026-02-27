import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mtouchlabs.com'

  // ===========================
  // CORE PAGES (priority: 1.0, changeFrequency: weekly)
  // ===========================
  const corePages = [
    '/',
    '/about',
    '/services',
    '/portfolio',
    '/contact-us',
    '/careers',
    '/blog',
  ]

  // ===========================
  // COMPANY PAGES (priority: 0.7, changeFrequency: monthly)
  // ===========================
  const companyPages = [
    '/company-overview',
    '/leadership-team',
    '/our-journey',
    '/our-vision',
    '/vision-mission',
    '/life-at-mtouch',
    '/awards-recognition',
    '/nasscom-membership',
    '/case-studies',
  ]

  // ===========================
  // SERVICE PAGES (priority: 0.9, changeFrequency: weekly)
  // ===========================
  const servicePages = [
    // Development
    '/custom-software-development-company',
    '/mobile-app-development-company',
    '/android-app-development-company',
    '/ios-app-development-company',
    '/flutter-app-development-company',
    '/react-native-app-development-company',
    '/cross-platform-app-development-company',
    '/hybrid-app-development-company',
    '/native-app-development-company',
    '/ipad-app-development-company',
    '/progressive-web-app-development-company-in-india',
    '/web-development-company',
    '/web-design-company',
    '/php-development-company',
    '/wordpress-development-company',
    '/woocommerce-development-company-in-india',
    '/shopify-development-company-in-india',
    '/magento-development-company-in-india',
    '/custom-cms-development-company-in-india',
    '/ecommerce-app-development-company',
    '/enterprise-application-development-company',
    '/saas-development-services',
    '/gaming-apps-development-company',
    '/ott-app-development-company',
    '/e-learning-app-development-company',
    '/real-estate-app-development-company',
    '/food-delivery-app-development-service',
    '/grocery-delivery-app-development-company',
    '/hotel-booking-app-development-company',
    '/taxi-booking-app-development-company',
    '/cabs-booking-app-development-company',
    '/car-wash-app-development-company',
    '/milk-delivery-app-development-company',
    '/sports-and-fitness-app-development-company',
    '/diagnostic-app-development-company',
    '/online-shopping-app-development-company',
    '/tickets-booking-app-development-company',
    '/on-demand-products-development-company-hyderabad',
    '/on-demand-service-mobile-app-development',
    '/app-maintenance-support-services',
    // Design
    '/ui-ux-design-company',
    '/ux-research-services',
    '/mobile-app-design-company',
    '/product-design-services',
    '/design-system-development',
    // AI / ML / Data
    '/generative-ai-development-company',
    '/machine-learning-development-company',
    '/data-science-solutions',
    '/best-iot-development-company-in-india',
    // Cloud & DevOps
    '/cloud-services',
    '/aws-cloud-services',
    '/amazon-web-services-company',
    '/cloud-migration-services',
    '/cloud-managed-services',
    '/cloud-security-services',
    '/devops-services',
    '/devops-consulting-services',
    '/cyber-security-services-company',
    '/cybersecurity-development-company',
    // Salesforce
    '/salesforce-consulting-services-company',
    '/salesforce-implementation-services',
    '/salesforce-integration-services',
    '/salesforce-lightning-migration-development',
    '/salesforce-sales-cloud-services',
    // Digital Marketing
    '/digital-marketing-solutions',
    '/digital-marketing-services',
    '/digital-marketing-services-company-in-india',
    '/seo-services',
    '/ppc-advertising-services',
    '/social-media-marketing-services',
    '/app-store-optimization-services',
    '/content-marketing-services',
    '/email-marketing-services',
    '/performance-marketing-services',
    '/conversion-rate-optimization-services',
  ]

  // ===========================
  // HIRE DEVELOPER PAGES (priority: 0.8, changeFrequency: monthly)
  // ===========================
  const hireDeveloperPages = [
    '/hire-developers-in-india',
    '/hire-dedicated-developers-in-india',
    '/hire-android-app-developers-in-india',
    '/hire-ios-app-developers-in-india',
    '/hire-flutter-app-developers-in-india',
    '/hire-react-native-app-developers-in-india',
    '/hire-mobile-app-developers-in-india',
    '/hire-native-app-developers-in-india',
    '/hire-hybrid-app-developers-in-india',
    '/hire-web-developers-in-india',
    '/hire-react-developers-in-india',
    '/hire-node-js-developers-in-india',
    '/hire-angular-developers-in-india',
    '/hire-vue-js-developers-in-india',
    '/hire-javascript-developers-in-india',
    '/hire-php-developers-in-india',
    '/hire-laravel-developers-in-india',
    '/hire-fullstack-developers-in-india',
    '/hire-mean-stack-developers-in-india',
    '/hire-mern-stack-developers-in-india',
    '/hire-pwa-developers-in-india',
    '/hire-swift-developers-in-india',
    '/hire-ipad-developers-in-india',
    '/hire-wordpress-developers-in-india',
    '/hire-shopify-developers-in-india',
    '/hire-woocommerce-developers-in-india',
    '/hire-magento-developers-in-india',
    '/hire-custom-cms-developers-in-india',
    '/hire-custom-software-developers-in-india',
    '/hire-salesforce-developers-in-india',
    '/hire-aws-developers-in-india',
    '/hire-ui-ux-designers-in-india',
    '/hire-mobile-app-designers-in-india',
    '/hire-quality-analyst-developers-in-india',
  ]

  // ===========================
  // LOCATION PAGES (priority: 0.8, changeFrequency: monthly)
  // ===========================
  const locationPages = [
    '/best-mobile-app-development-company-in-usa',
    '/best-mobile-app-development-company-in-canada',
    '/top-mobile-app-development-company-in-hyderabad',
    '/top-mobile-app-development-company-in-bangalore',
    '/top-mobile-app-development-company-in-chennai',
    '/top-mobile-app-development-company-in-coimbatore',
    '/top-mobile-app-development-company-in-kochi',
    '/top-mobile-app-development-company-in-dubai',
    '/top-mobile-app-development-company-in-uk',
    '/top-mobile-app-development-company-in-australia',
    '/top-mobile-app-development-company-in-qatar',
    '/top-mobile-app-development-company-in-kuwait',
  ]

  // ===========================
  // CASE STUDY / PORTFOLIO PAGES (priority: 0.7, changeFrequency: monthly)
  // ===========================
  const caseStudyPages = [
    '/abu-dhabi-judicial-department-mobile-app-development',
    '/adfini8-mobile-advertising-platform-development',
    '/b2b-grocery-shopping-mobile-app-development-and-web-development',
    '/b2b-lead-intelligence-platform',
    '/best-on-demand-grocery-delivery-android-app-development',
    '/bikers-community-social-networking-app-development',
    '/call-management-mobile-app-development',
    '/car-booking-app-rent-ride',
    '/custom-matrimonial-mobile-app-development',
    '/devotional-mobile-app-development',
    '/drpick-healthcare-app',
    '/event-management-and-gifting-app',
    '/fractional-property-ownership-web-development',
    '/grocery-delivery-android-app-development',
    '/healthcare-super-app',
    '/hitech-shuttle-bus-management-platform',
    '/hyderabad-startups-app-development-mtouch-labs',
    '/key-plantation-ngo-mobile-app-development',
    '/lip-sync-video-dubbing-mobile-app-development',
    '/loyalty-program-management-mobile-app-development',
    '/make-your-taxi-business-smart-with-our-uber-clone-app-development',
    '/multi-vendor-ecommerce-mobile-app-development',
    '/multi-vendor-marketplace-app-builder',
    '/on-demand-chef-app-development-company',
    '/on-demand-chef-management-web-development',
    '/on-demand-home-services-mobile-app-development',
    '/on-demand-service-providers-web-and-mobile-app-development',
    '/online-astrology-consultation-mobile-app-development',
    '/online-delivery-grocery-shopping-mobile-app-development',
    '/online-food-ordering-mobile-app-development',
    '/online-generic-medicine-delivery-mobile-app-development',
    '/online-generic-medicine-mobile-app-development-and-web-development',
    '/online-grocery-delivery-android-app-development',
    '/online-grocery-shopping-mobile-app-development',
    '/online-learning-android-app-development',
    '/online-learning-platform-mobile-app-development',
    '/online-shopping-and-international-shipping-service-mobile-app',
    '/onlyshop-mobile-shopping-app-development',
    '/otloffers-mobile-app-development',
    '/pg-hostel-management-mobile-app-development',
    '/photo-editor-mobile-app-development',
    '/rahayel-parking-lot-management-system',
    '/real-estate-lead-app',
    '/retailer-management-system-mobile-web-app',
    '/secure-ecommerce-shopping-platform',
    '/short-video-sharing-mobile-app-development',
    '/social-community-mobile-app-development',
    '/spa-and-salon-booking-flutter-app-development',
    '/staff-and-student-management-enterprise-mobile-app-development',
    '/telangana-ecommerce-mobile-app-development',
    '/360-degree-photography-services-in-india',
    '/app-solutions-for-medical-device-companies',
    '/web-and-app-development-for-education-services',
    '/web-and-app-development-for-real-estate-services',
    '/web-and-app-development-for-temple-services',
    '/app-and-web-development-for-ecommerce-services',
  ]

  // ===========================
  // BLOG PAGES (priority: 0.6, changeFrequency: daily)
  // ===========================
  const blogPages = [
    '/ai-role-in-business-automation',
    '/artificial-intelligence-transforming-mobile-technology',
    '/mobile-app-development-bangalore-tech-startups',
    '/top-10-free-ai-tools-for-software-developers',
    '/top-ecommerce-niches-us',
    '/top-generative-ai-tools-for-developers',
  ]

  // ===========================
  // LEGAL PAGES (priority: 0.3, changeFrequency: yearly)
  // ===========================
  const legalPages = [
    '/privacy-policy',
    '/terms-and-conditions',
    '/refundpolicy',
  ]

  // ===========================
  // LEGACY PAGES (kept for SEO, priority: 0.5)
  // These still exist as pages but have redirects pointing TO them
  // ===========================
  const legacyPages = [
    '/digital-marketing-company',
    '/ppc-management-services-company',
    '/social-media-marketing-company-in-india',
    '/hotel-booking-ios-app-development',
    '/custom-crm-software-development-company',
    '/hyper-local-delivery-mobile-app-development',
    '/it-services-digital-transformation-company',
  ]

  const today = new Date().toISOString().split('T')[0]

  // Build sitemap entries
  const entries: MetadataRoute.Sitemap = []

  // Core pages
  corePages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    })
  })

  // Company pages
  companyPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Service pages
  servicePages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  // Hire developer pages
  hireDeveloperPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Location pages
  locationPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  // Case study pages
  caseStudyPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Blog pages
  blogPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.6,
    })
  })

  // Legal pages
  legalPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  })

  // Legacy pages (still exist but lower priority)
  legacyPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  })

  return entries
}