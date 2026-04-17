"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Milk Delivery"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Milk Delivery App Development Service",
  hero: {
    h1Top: "Milk Delivery App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a subscription-based milk and daily essentials delivery app with route planning, wallet payments, and automated recurring orders.",
    demoHref: "https://youtu.be/c68vsTArxhE?si=C43BcOC5d3ODNFJF",
    leftPhoneImg: "/images/products/milk/milk-delivery-phone-1.svg",
    rightPhoneImg: "/images/products/milk/milk-delivery-phone-3.svg",
  },
  intro: {
    img: "/images/products/milk/milk-delivery-phone-1.svg",
    label: "Milk Delivery Experts",
    h3: "Milk Delivery App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">milk delivery app development</a> company in Hyderabad, helping dairy brands and startups build reliable subscription-based delivery platforms with wallet billing and route optimization.</>,
      <>We build single-brand milk apps, <a href="/grocery-delivery-app-development-company" target="_blank">dairy and grocery marketplaces</a>, B2B bulk delivery, and daily essentials subscription platforms customized to your workflow and scale.</>,
      <>From <a href="/food-delivery-app-development-service" target="_blank">food-delivery-style order flow</a> to recurring auto-debit billing, our milk apps are ready to scale across cities with predictable retention.</>,
    ],
  },
  dividerTitle: "Custom Milk Delivery App Development Services",
  dividerImg: "/images/products/milk/cow.svg",
  endToEnd: {
    img: "/images/products/milk/business_model_img.webp",
    label: "Business Models & End-to-End Solutions",
    h3: "Complete Milk Delivery Platform — Every Business Model Covered",
    body: [
      <>End-to-end milk delivery app development covering <a href="/mobile-app-development-company" target="_blank">customer apps</a>, delivery agent apps, vendor panels, and admin dashboards — all connected in one platform.</>,
      <>We support every dairy business model: <strong>single-brand subscription</strong>, <strong>multi-vendor dairy marketplaces</strong>, <strong>B2B bulk delivery</strong>, <strong>daily essentials combos</strong>, and <a href="/on-demand-products-development-company-hyderabad" target="_blank">white-label on-demand platforms</a>.</>,
      <>Pair the subscription wallet with route-optimized morning delivery, flexible pause/skip/reschedule, and predictive inventory — the same playbook that powers Country Delight and Milkbasket.</>,
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Milk Delivery Apps We Build",
    intro: "We develop scalable milk and dairy delivery applications tailored to different business models.",
    cards: [
      { icon: "🥛", title: "Subscription Milk App",     desc: "Daily, alternate-day, or weekly recurring milk delivery with prepaid wallets." },
      { icon: "🏬", title: "Multi-Vendor Dairy",        desc: "Aggregator platform for multiple dairy brands and local vendors." },
      { icon: "🚚", title: "Route-Based Delivery",      desc: "Optimized morning delivery routes for agents with turn-by-turn navigation." },
      { icon: "💳", title: "Wallet & Auto-Debit",       desc: "Prepaid wallets, auto-recharge, and automated daily billing." },
      { icon: "📅", title: "Flexible Scheduling",       desc: "Pause, resume, skip, or reschedule orders from the customer app." },
      { icon: "🧺", title: "Daily Essentials Combos",   desc: "Add bread, eggs, curd, and groceries alongside milk subscriptions." },
      { icon: "🏷️", title: "White-Label Solutions",     desc: "Pre-built customizable milk apps ready to launch under your brand." },
      { icon: "🔌", title: "API & Payment Integration", desc: "GPS, SMS, and secure payment gateway integration." },
    ],
  },
  screens: {
    alt: "Milk delivery app screen",
    images: [
      "/images/products/milk/milk-delivery-phone-1.svg",
      "/images/products/milk/milk-delivery-phone-2.svg",
      "/images/products/milk/milk-delivery-phone-3.svg",
      "/images/products/milk/milk-delivery-phone-4.svg",
      "/images/products/milk/milk-delivery-phone-5.svg",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Milk Delivery App",
    intro: "Our milk delivery app development covers the entire ecosystem.",
    panels: [
      { id: "customer", title: "Customer App",     items: ["Easy Sign-Up","Subscription Setup","Pause / Resume / Skip","Wallet & Auto-Recharge","Multiple Payment Options","Delivery Notifications","Ratings & Feedback","Offers & Referrals"] },
      { id: "admin",    title: "Admin Panel",      items: ["User & Vendor Management","Route Management","Subscription Billing","Reports & Analytics","Payment Settlements"] },
      { id: "delivery", title: "Delivery Partner", items: ["Daily Route Sheet","Live Navigation","Delivery Confirmation","Earnings Dashboard","Availability Management"] },
      { id: "vendor",   title: "Vendor Panel",     items: ["Product & Stock Management","Order Acceptance","Offer Management","Inventory Visibility","Sales Tracking"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🥛", name: "Dairy Farms" },
      { icon: "🏬", name: "Dairy Retail Chains" },
      { icon: "📦", name: "Subscription Delivery" },
      { icon: "🏢", name: "B2B Bulk Supply" },
      { icon: "🥚", name: "Daily Essentials" },
      { icon: "🏷️", name: "Multi-Vendor Marketplaces" },
    ],
  },
  faqs: [
    { q: "What is milk delivery app development?", a: "Milk delivery app development is the process of building subscription-based apps that allow customers to order daily milk and essentials with flexible scheduling and prepaid wallets." },
    { q: "How much does it cost to build a milk delivery app?", a: "Costs depend on features, scale, and integrations. Basic subscription apps are affordable; multi-vendor platforms with analytics require higher investment." },
    { q: "How long does it take to build?", a: "A milk delivery app typically takes 6 to 12 weeks depending on features and complexity." },
    { q: "Can you build apps like Country Delight or Milkbasket?", a: "Yes, we build scalable subscription milk and dairy apps similar to Country Delight and Milkbasket with custom features." },
    { q: "Do you support route optimization?", a: "Yes, we build route-based delivery modules optimized for morning delivery windows." },
    { q: "Do you provide post-launch maintenance?", a: "Yes, we provide ongoing support including updates, performance tuning, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/milk/features_img.webp",
    h2: "Build a Milk Delivery App That Customers Love",
    body: "Launch a modern subscription-based milk and essentials delivery platform that is scalable, user-friendly, and ready for growth.",
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
