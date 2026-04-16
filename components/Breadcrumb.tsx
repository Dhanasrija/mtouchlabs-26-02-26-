// components/Breadcrumb.tsx
// Fully dynamic breadcrumb — centered, clickable, visible on dark hero backgrounds
// Usage: <Breadcrumb pagePath="/salesforce-implementation-services" />

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  pagePath: string;
  currentLabel?: string;
}

// Map slugs to readable labels — ADD NEW PAGES HERE
const SLUG_LABELS: Record<string, string> = {
  "": "Home",
  "about-us": "About Us",
  "contact-us": "Contact Us",
  "vision-mission": "Vision & Mission",
  "company-overview": "Company Overview",
  "careers": "Careers",
  // Mobile App Development
  "mobile-app-development-company": "Mobile App Development",
  "android-app-development-company": "Android App Development",
  "ios-app-development-company": "iOS App Development",
  "ipad-app-development-company": "iPad App Development",
  "hybrid-app-development-company": "Hybrid App Development",
  "native-app-development-company": "Native App Development",
  "flutter-app-development-company": "Flutter App Development",
  "react-native-app-development-company": "React Native App Development",
  "cross-platform-app-development-company": "Cross-Platform Development",
  "progressive-web-app-development-company-in-india": "Progressive Web Apps",
  // Web & Software Development
  "web-development-company": "Web Development",
  "web-design-company": "Web Design",
  "custom-software-development-company": "Custom Software Development",
  "custom-cms-development-company-in-india": "Custom CMS Development",
  "enterprise-application-development-company": "Enterprise Application Development",
  "php-development-company": "PHP Development",
  "wordpress-development-company": "WordPress Development",
  "shopify-development-company-in-india": "Shopify Development",
  "woocommerce-development-company-in-india": "WooCommerce Development",
  "magento-development-company-in-india": "Magento Development",
  "ecommerce-app-development-company": "eCommerce Development",
  // UI/UX Design
  "ui-ux-design-company": "UI/UX Design",
  "mobile-app-design-company": "Mobile App Design",
  "product-design-services": "Product Design",
  "ux-research-services": "UX Research",
  "design-system-development": "Design System Development",
  // AI / ML / Data Science
  "machine-learning-development-company": "AI & Machine Learning",
  "generative-ai-development-company": "Generative AI Development",
  "data-science-solutions": "Data Science Solutions",
  // Cloud & DevOps
  "cloud-services": "Cloud Services",
  "cloud-migration-services": "Cloud Migration",
  "cloud-managed-services": "Cloud Managed Services",
  "cloud-security-services": "Cloud Security",
  "aws-cloud-services": "AWS Cloud Services",
  "devops-services": "DevOps Services",
  "devops-consulting-services": "DevOps Consulting",
  // Cybersecurity & IoT
  "cyber-security-services-company": "Cyber Security",
  "best-iot-development-company-in-india": "IoT Development",
  // Salesforce
  "salesforce-consulting-services-company": "Salesforce Consulting",
  "salesforce-implementation-services": "Salesforce Implementation",
  "salesforce-lightning-migration-development": "Salesforce Lightning",
  "salesforce-integration-services": "Salesforce Integration",
  "salesforce-sales-cloud-services": "Sales Cloud Services",
  // Digital Marketing
  "digital-marketing-solutions": "Digital Marketing Solutions",
  "seo-services": "SEO Services",
  "ppc-advertising-services": "PPC Advertising",
  "app-store-optimization-services": "App Store Optimization",
  "conversion-rate-optimization-services": "Conversion Rate Optimization",
  "content-marketing-services": "Content Marketing",
  "email-marketing-services": "Email Marketing",
  "social-media-marketing-services": "Social Media Marketing",
  "performance-marketing-services": "Performance Marketing",
  // Other Services
  "app-maintenance-support-services": "App Maintenance & Support",
  "360-degree-photography-services-in-india": "360° Photography",
  "it-services-digital-transformation-company": "IT Services & Digital Transformation",
  "quality-assurance-and-testing-services": "Quality Assurance & Testing",
};

// Non-service pages (no "Services" middle breadcrumb)
const NON_SERVICE_SLUGS = new Set([
  "about-us", "contact-us", "vision-mission", "company-overview", "careers",
]);

export default function Breadcrumb({ pagePath, currentLabel }: BreadcrumbProps) {
  const slug = pagePath.replace(/^\/|\/$/g, "");

  const items: BreadcrumbItem[] = [{ label: "Home", href: "/" }];

  // Add "Services" middle breadcrumb for service pages (clickable)
  if (slug && !NON_SERVICE_SLUGS.has(slug)) {
    items.push({ label: "Services", href: "/#services" });
  }

  // Current page (no link — it's the active page)
  const label =
    currentLabel ||
    SLUG_LABELS[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  items.push({ label });

  // Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `https://www.mtouchlabs.com${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb">
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            listStyle: "none",
            margin: "0 0 20px 0",
            padding: 0,
            fontSize: "0.9rem",
            gap: "0",
          }}
        >
          {items.map((item, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              {index > 0 && (
                <span
                  style={{
                    margin: "0 10px",
                    color: "#e8a025",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                  }}
                >
                  /
                </span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  style={{
                    color: "#ffffff",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  style={{
                    fontWeight: 700,
                    color: "#e8a025",
                  }}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}