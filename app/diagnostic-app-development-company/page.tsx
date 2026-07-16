import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnostic App Development Company",
  description: "Launch a feature-rich diagnostic lab app with online test booking, home sample collection, digital reports, and secure payments.",
  alternates: { canonical: "https://www.mtouchlabs.com/diagnostic-app-development-company" },
  openGraph: {
    title: "Diagnostic App Development Company | mTouch Labs",
    description: "Launch a feature-rich diagnostic lab app with online test booking, home sample collection, digital reports, and secure payments.",
    url: "https://www.mtouchlabs.com/diagnostic-app-development-company",
    type: "website",
    siteName: "mTouch Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diagnostic App Development Company | mTouch Labs",
    description: "Launch a feature-rich diagnostic lab app with online test booking, home sample collection, digital reports, and secure payments.",
  },
};


const d = {
  ...buildDefaults("Diagnostic"),
  dividerTitle: undefined,
  dividerImg: undefined,
};


const data: ProductPageData = {
  crumbLabel: "Diagnostic App Development Company",
  hero: {
    h1Top: "Diagnostic App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a feature-rich diagnostic lab app with online test booking, home sample collection, digital reports, and secure payments.",
    demoHref: "https://youtu.be/NtkXvVPIFyU?si=fO6p0X8gi4YW49zx",
    leftPhoneImg: "/images/products/diagnostic/phone1.webp",
    rightPhoneImg: "/images/products/diagnostic/phone2.webp",
  },
  intro: {
    img: "/images/products/diagnostic/phone1.webp",
    label: "Diagnostic App Experts",
    h3: "Diagnostic App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">diagnostic app development company</a> in Hyderabad, helping diagnostic chains, hospitals, and labs build modern healthtech platforms.</>,
      <>We build lab test booking apps, home sample collection, digital report apps, and multi-lab aggregator platforms tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Diagnostic App Development",
  endToEnd: {
    img: "/images/products/diagnostic/phone2.webp",
    label: "End-to-End Solutions",
    h3: "Complete Diagnostic App Development",
    body: [
      "End-to-end diagnostic apps covering patient apps, phlebotomist apps, lab panels, and admin dashboards.",
      "Our solutions include lab test booking, home sample collection, report delivery, and multi-lab marketplaces.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Diagnostic Apps We Build",
    intro: "Scalable diagnostic applications for different healthcare models.",
    cards: [
      { icon: "🧪", title: "Test Booking Apps", desc: "Book diagnostic tests and packages online." },
      { icon: "🏠", title: "Home Sample Collection", desc: "Schedule phlebotomist visits with live tracking." },
      { icon: "📄", title: "Digital Reports", desc: "Instant digital report delivery and history." },
      { icon: "🏥", title: "Multi-Lab Aggregator", desc: "Marketplace connecting patients with labs." },
      { icon: "💳", title: "Secure Payments", desc: "Wallets, UPI, insurance, and cashless checkout." },
      { icon: "📅", title: "Subscription Packages", desc: "Annual health checkup and family plans." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable diagnostic apps ready for launch." },
      { icon: "🔌", title: "API Integration", desc: "LIMS, HIS, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Diagnostic app screen",
    images: [
      "/images/products/diagnostic/appscreen1.webp",
      "/images/products/diagnostic/appscreen2.webp",
      "/images/products/diagnostic/appscreen3.webp",
      "/images/products/diagnostic/appscreen4.webp",
      "/images/products/diagnostic/appscreen5.webp",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Diagnostic App",
    intro: "Our diagnostic app development covers every part of the ecosystem.",
    panels: [
      { id: "patient", title: "Patient App", items: ["Easy Sign-Up", "Test Discovery", "Home Collection Booking", "Multiple Payment Options", "Report Download", "Health History", "Family Profiles", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User & Lab Management", "Booking Tracking", "Reports & Analytics", "Payment Settlements", "Phlebotomist Management"] },
      { id: "lab", title: "Lab Panel", items: ["Test Management", "Report Upload", "Sample Tracking", "Inventory Visibility", "Sales Tracking"] },
      { id: "agent", title: "Phlebotomist", items: ["Job Alerts", "Live Navigation", "Sample Collection", "Earnings Dashboard", "Availability Toggle"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🏥", name: "Hospitals" },
      { icon: "🧪", name: "Labs" },
      { icon: "🏠", name: "Home Collection" },
      { icon: "📄", name: "Digital Reports" },
      { icon: "💊", name: "Healthtech" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is diagnostic app development?", a: "Diagnostic app development is the process of building platforms that let patients book tests, schedule home sample collection, and access digital reports." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while multi-lab aggregators require higher investment." },
    { q: "How long does it take?", a: "A diagnostic app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Practo or 1mg Labs?", a: "Yes, we build scalable diagnostic platforms similar to Practo and 1mg with custom features." },
    { q: "Do you support home sample collection?", a: "Yes, we build phlebotomist apps with live tracking." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/diagnostic/service1.webp",
    h2: "Build a Diagnostic App Patients Trust",
    body: "Launch a modern diagnostic platform that is reliable, patient-friendly, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Diagnostic App Development Company", "description": "Diagnostic App Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/diagnostic-app-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Diagnostic App Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Diagnostic App Development Company", "item": "https://www.mtouchlabs.com/diagnostic-app-development-company"}]}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: data.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      {/* Page-level phone mockup size override (square-aspect images) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .fd-hero-phone img { width: 320px !important; }
        .fd-phone-img { width: 380px !important; max-width: 100%; height: auto; }
        @media (max-width: 1024px) { .fd-hero-phone img { width: 240px !important; } .fd-phone-img { width: 300px !important; } }
        @media (max-width: 768px)  { .fd-phone-img { width: 260px !important; } }
      `}} />
      <ProductPageTemplate data={data} />
    </>
  );
}
