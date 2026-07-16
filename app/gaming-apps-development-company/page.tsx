import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming App Development Company",
  description: "Build immersive mobile games, multiplayer platforms, AR/VR games, and cross-platform gaming apps with high-performance engines and scalable architecture.",
  alternates: { canonical: "https://www.mtouchlabs.com/gaming-apps-development-company" },
  openGraph: {
    title: "Gaming App Development Company | mTouch Labs",
    description: "Build immersive mobile games, multiplayer platforms, AR/VR games, and cross-platform gaming apps with high-performance engines and scalable architecture.",
    url: "https://www.mtouchlabs.com/gaming-apps-development-company",
    type: "website",
    siteName: "mTouch Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming App Development Company | mTouch Labs",
    description: "Build immersive mobile games, multiplayer platforms, AR/VR games, and cross-platform gaming apps with high-performance engines and scalable architecture.",
  },
};


const d = {
  ...buildDefaults("Gaming"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Gaming App Development Company",
  hero: {
    h1Top: "Gaming App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Build immersive mobile games, multiplayer platforms, AR/VR games, and cross-platform gaming apps with high-performance engines and scalable architecture.",
    demoHref: "https://youtu.be/25rSreAPAFk?si=l3QYXZwYqEEFfqIY",
    leftPhoneImg: "/images/products/gaming/phone1.webp",
    rightPhoneImg: "/images/products/gaming/phone2.webp",
  },
  featuresBannerImg: "/images/products/gaming/banner1.webp",
  featuresBannerAlt: "gaming app development company in Hyderabad",
  intro: {
    img: "/images/products/gaming/phone1.webp",
    label: "Gaming App Experts",
    h3: "Gaming App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">gaming app development company</a> in Hyderabad, helping studios, publishers, and startups launch immersive game titles.</>,
<>We build casual mobile games, multiplayer online games, AR/VR experiences, fantasy sports platforms, and cross-platform gaming apps tailored to your audience.</>    ],
  },
  dividerTitle: "Custom Gaming App Development Services",
  dividerImg: "/images/products/gaming/service1.webp",
  endToEnd: {
    img: "/images/products/gaming/phone2.webp",
    label: "End-to-End Solutions",
    h3: "Complete Gaming Platform",
    body: [
      "End-to-end game apps covering player clients, admin dashboards, matchmaking servers, and monetization systems — all connected in one platform.",
      "Our solutions include casual games, multiplayer online games, AR/VR experiences, fantasy sports, and hyper-casual arcade titles.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Gaming Apps We Build",
    intro: "Scalable gaming applications for different game genres and business models.",
    cards: [
      { icon: "🎮", title: "Mobile Games", desc: "Native iOS and Android games with engaging gameplay." },
      { icon: "🌐", title: "Multiplayer Games", desc: "Real-time PvP, co-op, and matchmaking platforms." },
      { icon: "🕹️", title: "Hyper-Casual", desc: "Snackable arcade titles optimized for scale and retention." },
      { icon: "🥽", title: "AR/VR Games", desc: "Immersive augmented and virtual reality experiences." },
      { icon: "🏆", title: "Fantasy Sports", desc: "Daily and season-long fantasy leagues with payouts." },
      { icon: "💰", title: "Monetization", desc: "Ads, IAPs, battle passes, and in-game economy design." },
      { icon: "🏷️", title: "White-Label Games", desc: "Customizable game templates ready to launch." },
      { icon: "🔌", title: "API Integration", desc: "Payment, analytics, leaderboards, and social login." },
    ],
  },
  screens: {
    alt: "Gaming app screen",
    images: [
      "/images/products/gaming/appscreen1.webp",
      "/images/products/gaming/appscreen2.webp",
      "/images/products/gaming/appscreen3.webp",
      "/images/products/gaming/appscreen4.webp"
      // "/images/products/gaming/appscreen5.webp",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Gaming Apps",
    intro: "Our gaming app development covers the entire player and operator ecosystem.",
    panels: [
      { id: "player", title: "Player App", items: ["Easy Sign-Up", "Social Login", "Multiplayer Matchmaking", "In-Game Chat", "Leaderboards", "Rewards & Achievements", "In-App Purchases", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["Player Management", "Game Analytics", "Reward Configuration", "Fraud Detection", "Revenue Reports"] },
      { id: "dev", title: "Developer Tools", items: ["Matchmaking API", "Leaderboard API", "Inventory System", "Balance Configuration", "A/B Testing"] },
      { id: "ops", title: "Ops Panel", items: ["Server Monitoring", "Cheat Detection", "Live Events", "Player Support", "Content Rollouts"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🎮", name: "Mobile Games" },
      { icon: "🏆", name: "Fantasy Sports" },
      { icon: "🥽", name: "AR/VR" },
      { icon: "🕹️", name: "Hyper-Casual" },
      { icon: "🌐", name: "Multiplayer" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is gaming app development?", a: "Gaming app development is the process of building mobile, web, or cross-platform games with engaging gameplay, monetization, and scalable backend infrastructure." },
    { q: "How much does it cost to build a gaming app?", a: "Costs depend on game complexity, graphics, and multiplayer infrastructure. Casual games are affordable; multiplayer or AR/VR titles require higher investment." },
    { q: "How long does it take to build?", a: "A gaming app typically takes 10 to 20 weeks depending on game mechanics and complexity." },
    { q: "Can you build multiplayer and AR/VR games?", a: "Yes, we build real-time multiplayer games, AR-based games, and VR experiences using modern engines." },
    { q: "What engines do you use?", a: "We primarily use Unity and Unreal Engine along with native iOS and Android stacks." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing live ops, content updates, and performance optimization." },
  ],
  cta: {
    img: "/images/products/gaming/servicemain.webp",
    h2: "Build a Gaming App Players Love",
    body: "Launch an immersive gaming platform that is scalable, engaging, and ready to grow globally.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Gaming Apps Development Company", "description": "Gaming Apps Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/gaming-apps-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Gaming Apps Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Gaming Apps Development Company", "item": "https://www.mtouchlabs.com/gaming-apps-development-company"}]}),
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
