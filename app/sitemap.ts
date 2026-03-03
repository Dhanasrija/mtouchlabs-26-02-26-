import { MetadataRoute } from 'next'
import { sql } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.mtouchlabs.com'
  const today = new Date().toISOString().split('T')[0]

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
    '/blogs',
  ]

  // ===========================
  // COMPANY PAGES (priority: 0.7, changeFrequency: monthly)
  // ===========================
  const companyPages = [
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
    // Software Development
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
    // Web Development
    '/web-development-company',
    '/web-design-company',
    '/php-development-company',
    '/wordpress-development-company',
    '/woocommerce-development-company-in-india',
    '/shopify-development-company-in-india',
    '/magento-development-company-in-india',
    '/custom-cms-development-company-in-india',
    // App Categories
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
    '/car-wash-app-development-company',
    '/milk-delivery-app-development-service',
    '/sports-and-fitness-app-development-company',
    '/diagnostic-app-development-company',
    '/online-shopping-app-development-company',
    '/tickets-booking-app-development-company',
    '/social-media-app-development-company',
    '/on-demand-products-development-company-hyderabad',
    '/on-demand-service-mobile-app-development',
    '/on-demand-chef-app-development-company',
    '/chef-management-app-solutions',
    '/multi-vendor-marketplace-app-builder',
    '/app-maintenance-support-services',
    // Design
    '/ui-ux-design-company',
    '/ux-research-services',
    '/mobile-app-design-company',
    '/product-design-services',
    '/design-system-development',
    // AI / ML / Data / IoT
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
    '/digital-marketing-company',
    '/seo-services',
    '/ppc-advertising-services',
    '/ppc-management-services-company',
    '/social-media-marketing-services',
    '/social-media-marketing-company-in-india',
    '/app-store-optimization-services',
    '/content-marketing-services',
    '/email-marketing-services',
    '/performance-marketing-services',
    '/conversion-rate-optimization-services',
    // Industry Solutions
    '/app-and-web-development-for-ecommerce-services',
    '/web-and-app-development-for-education-services',
    '/web-and-app-development-for-real-estate-services',
    '/web-and-app-development-for-temple-services',
    '/360-degree-photography-services-in-india',
    '/it-services-digital-transformation-company',
    '/quality-assurance-and-testing-services',
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
    '/software-development-company-australia',
    '/software-development-company-bangalore',
    '/software-development-company-canada',
    '/software-development-company-chennai',
    '/software-development-company-coimbatore',
    '/software-development-company-dubai',
    '/software-development-company-germany',
    '/software-development-company-hyderabad',
    '/software-development-company-india',
    '/software-development-company-ireland',
    '/software-development-company-kochi',
    '/software-development-company-kuwait',
    '/software-development-company-new-zealand',
    '/software-development-company-qatar',
    '/software-development-company-saudi-arabia',
    '/software-development-company-singapore',
    '/software-development-company-united-arab-emirates',
    '/software-development-company-united-kingdom',
    '/software-development-company-usa',
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
  // BUILD SITEMAP ENTRIES
  // ===========================
  const entries: MetadataRoute.Sitemap = []

  corePages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    })
  })

  companyPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  servicePages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    })
  })

  hireDeveloperPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  locationPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  })

  legalPages.forEach((path) => {
    entries.push({
      url: `${baseUrl}${path}`,
      lastModified: today,
      changeFrequency: 'yearly',
      priority: 0.3,
    })
  })

  // ===========================
  // DYNAMIC: BLOGS FROM DATABASE
  // Auto-updates when you publish new blogs
  // ===========================
  try {
    const blogs = await sql`SELECT slug, updated_at FROM blogs WHERE published = true`
    blogs.forEach((blog: any) => {
      entries.push({
        url: `${baseUrl}/${blog.slug}`,
        lastModified: blog.updated_at
          ? new Date(blog.updated_at).toISOString().split('T')[0]
          : today,
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    })
  } catch (e) {
    console.error('Sitemap: Failed to fetch blogs', e)
  }

  // ===========================
  // DYNAMIC: PORTFOLIOS FROM DATABASE
  // Auto-updates when you publish new portfolios
  // ===========================
  try {
    const portfolios = await sql`SELECT slug, updated_at FROM portfolios WHERE published = true`
    portfolios.forEach((portfolio: any) => {
      entries.push({
        url: `${baseUrl}/${portfolio.slug}`,
        lastModified: portfolio.updated_at
          ? new Date(portfolio.updated_at).toISOString().split('T')[0]
          : today,
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  } catch (e) {
    console.error('Sitemap: Failed to fetch portfolios', e)
  }

  return entries
}