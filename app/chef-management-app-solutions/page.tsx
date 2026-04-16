"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Chef Management"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Chef Management App Solutions",
  hero: {
    h1Top: "Chef Management App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a chef on-demand and kitchen management platform with booking, scheduling, order tracking, and kitchen operations in one app.",
    demoHref: "/contact-us",
    leftPhoneImg: "/images/products/chef/phone1.png",
    rightPhoneImg: "/images/products/chef/phone2.png",
  },
  featuresBannerImg: "/images/products/chef/chef-bg.png",
  featuresBannerAlt: "chef management app development company in Hyderabad",
  intro: {
    img: "/images/products/chef/phone1.png",
    label: "Chef On-Demand Experts",
    h3: "Chef Management App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">chef management app development</a> company in Hyderabad, helping restaurants, cloud kitchens, and on-demand chef startups streamline operations.</>,
      <>We build private chef booking apps, cloud kitchen management systems, <a href="/food-delivery-app-development-service" target="_blank">restaurant chef workflow platforms</a>, and home-chef marketplaces tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Chef Management App Development Services",
  dividerImg: "/images/products/chef/chefSpecial.png",
  endToEnd: {
    img: "/images/products/chef/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Chef & Kitchen Platform",
    body: [
      "End-to-end chef management apps covering customer apps, chef apps, kitchen dashboards, and admin panels.",
      "Our solutions include on-demand private chefs, cloud kitchens, catering marketplaces, and hotel kitchen operations.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Chef Management Apps We Build",
    intro: "Scalable chef and kitchen management applications for different business models.",
    cards: [
      { icon: "👨‍🍳", title: "Private Chef On-Demand", desc: "Book a chef at home for dinners, parties, and events." },
      { icon: "🍽️", title: "Cloud Kitchen Management", desc: "Multi-brand cloud kitchen operations in one platform." },
      { icon: "📋", title: "Kitchen Order System", desc: "Real-time order management and kitchen display system." },
      { icon: "📅", title: "Chef Scheduling", desc: "Shift planning, leaves, and workload balancing." },
      { icon: "🏨", title: "Restaurant & Hotel Kitchens", desc: "End-to-end kitchen operations and chef workflows." },
      { icon: "🎉", title: "Catering Marketplace", desc: "Book chefs for weddings, corporate, and private events." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable chef apps ready to launch under your brand." },
      { icon: "🔌", title: "API Integration", desc: "POS, payments, and third-party delivery integrations." },
    ],
  },
  screens: {
    alt: "Chef management app screen",
    images: [
      "/images/products/chef/appscreen1.png",
      "/images/products/chef/appscreen2.png",
      "/images/products/chef/appscreen3.png",
      "/images/products/chef/appscreen4.png",
      "/images/products/chef/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Chef Management App",
    intro: "Our chef management app development covers the entire ecosystem.",
    panels: [
      { id: "customer", title: "Customer App", items: ["Easy Sign-Up", "Chef Discovery", "Menu Customization", "Event Booking", "Multiple Payment Options", "Ratings & Reviews", "Chat with Chef", "Push Notifications"] },
      { id: "chef", title: "Chef App", items: ["Booking Requests", "Availability Toggle", "Menu Management", "Earnings Dashboard", "Schedule View"] },
      { id: "admin", title: "Admin Panel", items: ["Chef Onboarding", "Commission Management", "Booking Dashboard", "Reports & Analytics", "Payouts & Settlements"] },
      { id: "kitchen", title: "Kitchen Panel", items: ["Order Queue", "KDS Display", "Inventory Alerts", "Recipe Management", "Staff Allocation"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "👨‍🍳", name: "Private Chefs" },
      { icon: "🍽️", name: "Cloud Kitchens" },
      { icon: "🏨", name: "Hotels & Restaurants" },
      { icon: "🎉", name: "Catering & Events" },
      { icon: "🏫", name: "Culinary Schools" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is chef management app development?", a: "Chef management app development is the process of building platforms that connect customers with chefs or manage kitchen operations, including bookings, menus, orders, and payments." },
    { q: "How much does it cost to build a chef management app?", a: "Costs depend on features, scale, and integrations. Private chef apps are affordable; multi-brand cloud kitchen platforms require higher investment." },
    { q: "How long does it take to build?", a: "A chef management app typically takes 8 to 14 weeks depending on features and complexity." },
    { q: "Can you build cloud kitchen management apps?", a: "Yes, we build multi-brand cloud kitchen platforms with KDS, inventory, and delivery integrations." },
    { q: "Do you support chef booking and catering models together?", a: "Yes, we build hybrid apps that support both on-demand private chefs and large catering orders." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance, performance tuning, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/chef/Chef.png",
    h2: "Build a Chef Management App Kitchens Love",
    body: "Launch a modern chef and kitchen management platform that is scalable, efficient, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
