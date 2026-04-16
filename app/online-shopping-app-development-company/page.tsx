"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Online Shopping"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Online Shopping App Development Company",
  hero: {
    h1Top: "Online Shopping App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a modern online shopping app with smart search, personalized recommendations, secure checkout, and fast delivery.",
    demoHref: "https://youtu.be/CMvX_4uhcnE?si=QLNSxTcBN2tbRASu",
    leftPhoneImg: "/images/products/shopping/phone1.png",
    rightPhoneImg: "/images/products/shopping/phone2.png",
  },
  intro: {
    img: "/images/products/shopping/phone1.png",
    label: "Online Shopping Experts",
    h3: "Online Shopping App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">online shopping app development company</a> in Hyderabad, helping retailers and D2C brands build modern shopping experiences.</>,
      <>We build single-brand stores, multi-category marketplaces, fashion and lifestyle apps, and social commerce platforms tailored to your audience and scale.</>,
    ],
  },
  dividerTitle: "Custom Online Shopping App Development",
  endToEnd: {
    img: "/images/products/shopping/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Shopping App Development",
    body: [
      "End-to-end online shopping apps covering shopper apps, seller panels, and admin dashboards.",
      "Our solutions include D2C shopping, fashion & lifestyle, social commerce, and multi-category marketplaces.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Shopping Apps We Build",
    intro: "Scalable online shopping apps for different retail models.",
    cards: [
      { icon: "🛍️", title: "Single-Brand Store", desc: "D2C shopping apps with loyalty and CRM." },
      { icon: "🏬", title: "Multi-Category", desc: "Marketplaces across fashion, electronics, and home." },
      { icon: "👗", title: "Fashion & Lifestyle", desc: "Curated catalog, lookbooks, and styling recommendations." },
      { icon: "📸", title: "Social Commerce", desc: "Shoppable feeds, influencer storefronts, and live commerce." },
      { icon: "🔍", title: "Smart Search", desc: "AI-powered search with filters and voice input." },
      { icon: "💳", title: "Secure Checkout", desc: "One-tap checkout, wallets, EMI, and BNPL." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable shopping apps ready for quick launch." },
      { icon: "🔌", title: "API Integration", desc: "Logistics, ERP, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Online shopping app screen",
    images: [
      "/images/products/shopping/appscreen1.png",
      "/images/products/shopping/appscreen2.png",
      "/images/products/shopping/appscreen3.png",
      "/images/products/shopping/appscreen4.png",
      "/images/products/shopping/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Shopping App",
    intro: "Our online shopping app development covers every part of the ecosystem.",
    panels: [
      { id: "shopper", title: "Shopper App", items: ["Easy Sign-Up", "Smart Search", "Category Browsing", "Wishlist & Cart", "Multiple Payment Options", "Order Tracking", "Ratings & Reviews", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User & Seller Management", "Commission Management", "Order Tracking", "Reports & Analytics", "Payment Settlements"] },
      { id: "seller", title: "Seller Panel", items: ["Product Management", "Order Fulfillment", "Offer Management", "Inventory Visibility", "Sales Tracking"] },
      { id: "ops", title: "Ops Panel", items: ["Warehouse Management", "Dispatch & Logistics", "Returns Management", "Reports", "Support Console"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "👗", name: "Fashion" },
      { icon: "📱", name: "Electronics" },
      { icon: "🏠", name: "Home & Decor" },
      { icon: "💄", name: "Beauty" },
      { icon: "📸", name: "Social Commerce" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is online shopping app development?", a: "Online shopping app development is the process of building ecommerce apps that let users browse, buy, and track products with personalized recommendations and secure payments." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while multi-category marketplaces require higher investment." },
    { q: "How long does it take?", a: "A shopping app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Myntra or Meesho?", a: "Yes, we build scalable shopping platforms similar to Myntra and Meesho with custom features." },
    { q: "Do you support social commerce?", a: "Yes, we build shoppable feeds, influencer storefronts, and live commerce modules." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/shopping/rating.png",
    h2: "Build a Shopping App Customers Love",
    body: "Launch a modern online shopping platform that is scalable, user-friendly, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
