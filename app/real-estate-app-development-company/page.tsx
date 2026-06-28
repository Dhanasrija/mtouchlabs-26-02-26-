"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Real Estate"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Real Estate App Development Company",
  hero: {
    h1Top: "Real Estate App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a feature-rich real estate app with property listings, virtual tours, smart search, and secure transactions.",
    demoHref: "https://youtu.be/zJMHLiQtdGw?si=1NMueqEF8o6a8qru",
    leftPhoneImg: "/images/products/realstate/phone1.webp",
    rightPhoneImg: "/images/products/realstate/phone2.webp",
  },
  featuresBannerImg: "/images/products/realstate/banner1.webp",
  featuresBannerAlt: "real estate app development company in Hyderabad",
  intro: {
    img: "/images/products/realstate/phone1.webp",
    label: "Real Estate Experts",
    h3: "Real Estate App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">real estate app development company</a> in Hyderabad, helping realtors and property tech startups launch modern property platforms.</>,
      <>We build property marketplaces, rental apps, agent CRMs, and builder/developer portals tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Real Estate App Development",
  endToEnd: {
    img: "/images/products/realstate/phone2.webp",
    label: "End-to-End Solutions",
    h3: "Complete Real Estate Development",
    body: [
      "End-to-end real estate apps covering buyer apps, agent apps, builder portals, and admin dashboards.",
      "Our solutions include property marketplaces, rental platforms, agent CRMs, and co-living apps.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Real Estate Apps We Build",
    intro: "Scalable property applications for different real estate models.",
    cards: [
      { icon: "🏠", title: "Property Marketplace", desc: "Buy, sell, and rent listings with advanced filters." },
      { icon: "🔑", title: "Rental Apps", desc: "Short and long-term rental booking platforms." },
      { icon: "🏗️", title: "Builder Portals", desc: "Project showcase, unit availability, and booking." },
      { icon: "📋", title: "Agent CRM", desc: "Lead management, follow-ups, and deal tracking." },
      { icon: "🌐", title: "Virtual Tours", desc: "3D walkthroughs and video tours for listings." },
      { icon: "💳", title: "Secure Payments", desc: "Token booking, EMI, and escrow integrations." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable property apps ready for launch." },
      { icon: "🔌", title: "API Integration", desc: "Maps, KYC, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Real estate app screen",
    images: [
      "/images/products/realstate/appscreen1.webp",
      "/images/products/realstate/appscreen2.webp",
      "/images/products/realstate/appscreen3.webp",
      "/images/products/realstate/appscreen4.webp",
      "/images/products/realstate/appscreen5.webp",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Real Estate App",
    intro: "Our real estate app development covers every part of the ecosystem.",
    panels: [
      { id: "buyer", title: "Buyer App", items: ["Easy Sign-Up", "Smart Search", "Advanced Filters", "Shortlist & Favorites", "Virtual Tours", "Site Visit Booking", "EMI Calculator", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User & Agent Management", "Listing Management", "Commission Management", "Reports & Analytics", "Payment Settlements"] },
      { id: "agent", title: "Agent App", items: ["Lead Management", "Listing Creation", "Chat & Calls", "Deal Tracking", "Earnings Dashboard"] },
      { id: "builder", title: "Builder Panel", items: ["Project Management", "Unit Inventory", "Booking Tracking", "Document Management", "Sales Tracking"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🏠", name: "Property Sales" },
      { icon: "🔑", name: "Rentals" },
      { icon: "🏗️", name: "Builders" },
      { icon: "🏢", name: "Commercial" },
      { icon: "🛏️", name: "Co-Living" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is real estate app development?", a: "Real estate app development is the process of building platforms that let users browse, buy, sell, and rent properties with smart search and secure transactions." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while full-scale marketplaces require higher investment." },
    { q: "How long does it take?", a: "A real estate app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Zillow or 99acres?", a: "Yes, we build scalable property marketplaces similar to Zillow, Magicbricks, and 99acres with custom features." },
    { q: "Do you support virtual tours?", a: "Yes, we integrate 3D walkthroughs and video tours for listings." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/realstate/service_main_img.webp",
    h2: "Build a Real Estate App Users Love",
    body: "Launch a modern property platform that is scalable, user-friendly, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Real Estate App Development Company", "description": "Real Estate App Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/real-estate-app-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Real Estate App Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Real Estate App Development Company", "item": "https://www.mtouchlabs.com/real-estate-app-development-company"}]}),
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
      <ProductPageTemplate data={data} />
    </>
  );
}
