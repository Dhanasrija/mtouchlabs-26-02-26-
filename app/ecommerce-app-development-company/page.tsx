"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Ecommerce"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Ecommerce App Development Company",
  hero: {
    h1Top: "Ecommerce App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable ecommerce platform with seamless checkout, multi-vendor support, secure payments, and smart recommendations.",
    demoHref: "https://youtu.be/daZOzLek6Tk?si=uOT1rpNXbQ5nGBaN",
    leftPhoneImg: "/images/products/ecommerce/phone1.png",
    rightPhoneImg: "/images/products/ecommerce/phone2.png",
  },
  intro: {
    img: "/images/products/ecommerce/phone1.png",
    label: "E-Commerce Experts",
    h3: "Ecommerce App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">ecommerce app development company</a> in Hyderabad, helping D2C brands and retailers launch powerful online stores.</>,
      <>We build single-store apps, multi-vendor marketplaces, B2B ecommerce, and headless commerce platforms tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Ecommerce App Development",
  endToEnd: {
    img: "/images/products/ecommerce/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Ecommerce Development",
    body: [
      "End-to-end ecommerce apps covering shopper apps, seller panels, and admin dashboards.",
      "Our solutions include D2C stores, multi-vendor marketplaces, B2B commerce, and headless ecommerce.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Ecommerce Apps We Build",
    intro: "Scalable commerce applications for different retail models.",
    cards: [
      { icon: "🛍️", title: "D2C Stores", desc: "Single-brand ecommerce apps with loyalty and CRM." },
      { icon: "🏬", title: "Multi-Vendor", desc: "Marketplace platforms with multi-seller support." },
      { icon: "🏢", title: "B2B Commerce", desc: "Wholesale ordering, tiered pricing, and invoicing." },
      { icon: "⚙️", title: "Headless Commerce", desc: "API-first commerce with custom storefronts." },
      { icon: "🧺", title: "Smart Cart & Checkout", desc: "Seamless cart, coupons, wallets, and express checkout." },
      { icon: "📦", title: "Inventory & Catalog", desc: "Dynamic pricing, SKU-level inventory, and PIM." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable ecommerce apps ready for launch." },
      { icon: "🔌", title: "API Integration", desc: "Logistics, ERP, CRM, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Ecommerce app screen",
    images: [
      "/images/products/ecommerce/appscreen1.png",
      "/images/products/ecommerce/appscreen2.png",
      "/images/products/ecommerce/appscreen3.png",
      "/images/products/ecommerce/appscreen4.png",
      "/images/products/ecommerce/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Ecommerce App",
    intro: "Our ecommerce app development covers every part of the ecosystem.",
    panels: [
      { id: "shopper", title: "Shopper App", items: ["Easy Sign-Up", "Smart Search", "Category Browsing", "Add to Cart & Checkout", "Multiple Payment Options", "Order Tracking", "Ratings & Reviews", "Push Notifications & Offers"] },
      { id: "admin", title: "Admin Panel", items: ["User & Seller Management", "Commission Management", "Order Tracking", "Reports & Analytics", "Payment Settlements"] },
      { id: "seller", title: "Seller Panel", items: ["Product Management", "Order Fulfillment", "Offer Management", "Inventory Visibility", "Sales Tracking"] },
      { id: "ops", title: "Ops Panel", items: ["Warehouse Management", "Dispatch & Logistics", "Returns Management", "Reports", "Support Console"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🛍️", name: "D2C Brands" },
      { icon: "🏬", name: "Marketplaces" },
      { icon: "🏢", name: "B2B" },
      { icon: "👕", name: "Fashion" },
      { icon: "📱", name: "Electronics" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is ecommerce app development?", a: "Ecommerce app development is the process of building online shopping apps that let users browse, buy, and track products with secure payments." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while marketplaces require higher investment." },
    { q: "How long does it take?", a: "An ecommerce app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Amazon or Flipkart?", a: "Yes, we build scalable marketplace platforms similar to Amazon and Flipkart with custom features." },
    { q: "Do you integrate ERPs and CRMs?", a: "Yes, we integrate with ERPs, CRMs, and logistics partners." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/ecommerce/shopping1.png",
    h2: "Build an Ecommerce App Shoppers Love",
    body: "Launch a modern ecommerce platform that is scalable, user-friendly, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
