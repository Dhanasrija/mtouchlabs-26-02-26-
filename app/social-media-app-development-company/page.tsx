"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("Social Media"),
  dividerTitle: undefined,
  dividerImg: undefined,
};


const data: ProductPageData = {
  crumbLabel: "Social Media App Development Company",
  hero: {
    h1Top: "Social Media App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable social media app with feeds, stories, reels, chat, live streaming, and creator monetization.",
    demoHref: "/contact-us",
    leftPhoneImg: "/images/products/social/phone1.png",
    rightPhoneImg: "/images/products/social/phone2.png",
  },
  intro: {
    img: "/images/products/social/phone1.png",
    label: "Social Media Experts",
    h3: "Social Media App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">social media app development company</a> in Hyderabad, helping startups and creators launch modern social platforms.</>,
      <>We build photo/video sharing apps, short video reels, community forums, niche social apps, and creator monetization platforms tailored to your audience.</>,
    ],
  },
  dividerTitle: "Custom Social Media App Development",
  endToEnd: {
    img: "/images/products/social/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete Social App Development",
    body: [
      "End-to-end social apps covering user apps, moderation panels, creator dashboards, and admin analytics.",
      "Our solutions include photo/video sharing, reels, chat, live streaming, community forums, and creator monetization.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Social Apps We Build",
    intro: "Scalable social applications for different community models.",
    cards: [
      { icon: "📸", title: "Photo & Video Sharing", desc: "Feeds, stories, and media-rich social experiences." },
      { icon: "🎬", title: "Short Video Reels", desc: "TikTok-style short video with filters and effects." },
      { icon: "💬", title: "Real-Time Chat", desc: "1:1 and group chat with media and voice notes." },
      { icon: "📡", title: "Live Streaming", desc: "Live video with gifting, tipping, and reactions." },
      { icon: "🗣️", title: "Community Forums", desc: "Discussion boards, threads, and topic-based groups." },
      { icon: "💰", title: "Creator Monetization", desc: "Subscriptions, tipping, ads, and brand partnerships." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable social apps ready for quick launch." },
      { icon: "🔌", title: "API Integration", desc: "Payments, push notifications, and media CDN." },
    ],
  },
  screens: {
    alt: "Social media app screen",
    images: [
      "/images/products/social/appscreen1.png",
      "/images/products/social/appscreen2.png",
      "/images/products/social/appscreen3.png",
      "/images/products/social/appscreen4.png",
      "/images/products/social/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Social App",
    intro: "Our social media app development covers every part of the ecosystem.",
    panels: [
      { id: "user", title: "User App", items: ["Easy Sign-Up", "Feed & Stories", "Reels & Short Video", "Chat & Calls", "Live Streaming", "Follow & Explore", "Ratings & Reviews", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["User Management", "Content Moderation", "Reports & Analytics", "Payment Settlements", "Policy Controls"] },
      { id: "creator", title: "Creator Panel", items: ["Content Studio", "Audience Analytics", "Monetization Setup", "Collaborations", "Live Events"] },
      { id: "ops", title: "Moderation Ops", items: ["AI Moderation", "Abuse Reports", "Appeals", "Shadow Bans", "Policy Enforcement"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "📸", name: "Photo & Video" },
      { icon: "🎬", name: "Short Video" },
      { icon: "💬", name: "Messaging" },
      { icon: "📡", name: "Live Streaming" },
      { icon: "🗣️", name: "Forums" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is social media app development?", a: "Social media app development is the process of building platforms where users can connect, share content, chat, and follow creators with monetization features." },
    { q: "How much does it cost?", a: "Costs depend on features, content types, and scale. Basic apps are affordable while full-feature platforms with live and reels require higher investment." },
    { q: "How long does it take?", a: "A social media app typically takes 10 to 20 weeks depending on features." },
    { q: "Can you build apps like Instagram or TikTok?", a: "Yes, we build scalable social platforms similar to Instagram and TikTok with custom features." },
    { q: "Do you support live streaming?", a: "Yes, we build live video with gifting, tipping, and reactions." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and enhancements." },
  ],
  cta: {
    img: "/images/products/social/banner1.png",
    h2: "Build a Social App Users Love",
    body: "Launch a modern social media platform that is engaging, scalable, and ready for growth.",
  },
};

export default function Page() { return <ProductPageTemplate data={data} />; }
