"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Multi-Vendor Marketplace"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Multi-Vendor Marketplace App Builder",
  hero: {
    h1Top: "Multi-Vendor Marketplace",
    h1Accent: "App Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable multi-vendor marketplace with seller onboarding, smart commissions, secure payments, and smooth customer checkout.",
    demoHref: "https://youtu.be/qm9JS1xsvRg?si=8muwTy5Vh8Nxmblk",
    leftPhoneImg: "/images/products/multivendor/multi-vendor-phone-1.svg",
    rightPhoneImg: "/images/products/multivendor/multi-vendor-phone-3.svg",
  },
  intro: {
    img: "/images/products/multivendor/multi-vendor-phone-1.svg",
    label: "Marketplace Experts",
    h3: "Multi-Vendor Marketplace Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">multi-vendor marketplace app builder</a> in Hyderabad, helping startups and enterprises build scalable commerce ecosystems.</>,
      <>We build product marketplaces, service marketplaces, hyperlocal platforms, and B2B marketplaces tailored to your model and scale.</>,
    ],
  },
  dividerTitle: "Custom Marketplace App Development",
  dividerImg: "/images/products/multivendor/icon1.svg",
  endToEnd: {
    img: "/images/products/multivendor/multi-vendor-phone-2.svg",
    label: "End-to-End Solutions",
    h3: "Complete Marketplace Development",
    body: [
      "End-to-end marketplace apps covering buyer apps, seller panels, and admin dashboards.",
      "Our solutions include product, service, hyperlocal, and B2B marketplaces.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Marketplaces We Build",
    intro: "Scalable marketplace platforms for different commerce models.",
    cards: [
      { icon: "🛍️", title: "Product Marketplace", desc: "Multi-seller ecommerce with smart commission rules." },
      { icon: "🧑‍🔧", title: "Service Marketplace", desc: "On-demand service providers with booking and reviews." },
      { icon: "📍", title: "Hyperlocal", desc: "Location-aware marketplaces with fast fulfillment." },
      { icon: "🏢", title: "B2B Marketplace", desc: "Wholesale ordering with tiered pricing and invoicing." },
      { icon: "💳", title: "Seller Payouts", desc: "Automated settlements, splits, and commission handling." },
      { icon: "📦", title: "Logistics Integration", desc: "Shipping, dispatch, and last-mile partner APIs." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable marketplace apps ready for quick launch." },
      { icon: "🔌", title: "API Integration", desc: "Payment gateway, KYC, and third-party integration." },
    ],
  },
  screens: {
    alt: "Multi-vendor marketplace screen",
    images: [
      "/images/products/multivendor/multi-vendor-phone-1.svg",
      "/images/products/multivendor/multi-vendor-phone-2.svg",
      "/images/products/multivendor/multi-vendor-phone-3.svg",
      "/images/products/multivendor/multi-vendor-phone-4.svg",
      "/images/products/multivendor/multi-vendor-phone-5.svg",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Marketplace",
    intro: "Our multi-vendor marketplace development covers every part of the ecosystem.",
    panels: [
      { id: "buyer", title: "Buyer App", items: ["Easy Sign-Up", "Smart Search", "Multi-Seller Listings", "Cart & Checkout", "Multiple Payment Options", "Order Tracking", "Ratings & Reviews", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["Seller Onboarding", "Commission Management", "Order Tracking", "Reports & Analytics", "Payouts & Settlements"] },
      { id: "seller", title: "Seller Panel", items: ["Product Management", "Order Fulfillment", "Offer Management", "Inventory Visibility", "Sales Tracking"] },
      { id: "ops", title: "Ops Panel", items: ["Dispatch & Logistics", "Returns Management", "KYC Verification", "Reports", "Support Console"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🛍️", name: "Product" },
      { icon: "🧑‍🔧", name: "Services" },
      { icon: "📍", name: "Hyperlocal" },
      { icon: "🏢", name: "B2B" },
      { icon: "🍽️", name: "Food & Grocery" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is multi-vendor marketplace development?", a: "Multi-vendor marketplace development is the process of building platforms where multiple sellers can list products or services and buyers can transact with commission handling and secure payments." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic marketplaces are affordable while enterprise-grade platforms require higher investment." },
    { q: "How long does it take?", a: "A marketplace typically takes 10 to 18 weeks depending on features." },
    { q: "Can you build apps like Amazon or Etsy?", a: "Yes, we build scalable marketplaces similar to Amazon and Etsy with custom features." },
    { q: "Do you support seller payouts and KYC?", a: "Yes, we build automated payout, commission, and KYC modules." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/multivendor/Layer_4.svg",
    h2: "Build a Marketplace Sellers and Buyers Love",
    body: "Launch a modern multi-vendor platform that is scalable, reliable, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
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
