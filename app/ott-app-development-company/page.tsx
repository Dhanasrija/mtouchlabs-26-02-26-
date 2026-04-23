"use client";
import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

const d = {
  ...buildDefaults("OTT"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "OTT App Development Company",
  hero: {
    h1Top: "OTT App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Build scalable, feature-rich OTT streaming platforms for video, audio, and live content delivery across mobile, web, smart TVs, and connected devices.",
    demoHref: "https://youtu.be/RldcEasvr_4?si=q8EAeG4u3o7k208F",
    leftPhoneImg: "/images/products/ott/phone1.png",
    rightPhoneImg: "/images/products/ott/phone2.png",
  },
  intro: {
    img: "/images/products/ott/phone1.png",
    label: "OTT Streaming Experts",
    h3: "OTT App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank">OTT app development company</a> in Hyderabad, helping broadcasters, content owners, and startups launch scalable streaming platforms.</>,
      <>We build video-on-demand platforms, live-TV streaming apps, audio streaming services, smart-TV apps, and <a href="/generative-ai-development-company" target="_blank">AI-powered recommendation engines</a> tailored to your audience.</>,
    ],
  },
  dividerTitle: "Custom OTT App Development Services",
  dividerImg: "/images/products/ott/icon1.png",
  endToEnd: {
    img: "/images/products/ott/phone2.png",
    label: "End-to-End Solutions",
    h3: "Complete OTT Streaming Platform",
    body: [
      "End-to-end OTT apps covering viewer apps, smart-TV apps, content dashboards, and admin panels — all connected in one platform.",
      "Our solutions include VOD, live-TV streaming, audio streaming, ad-supported models, subscription plans, and pay-per-view.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "OTT Apps We Build",
    intro: "Scalable streaming applications for different content and monetization models.",
    cards: [
      { icon: "🎬", title: "Video-on-Demand", desc: "Binge-worthy movie and series streaming apps." },
      { icon: "📺", title: "Live-TV Streaming", desc: "Real-time channel streaming with DVR and EPG." },
      { icon: "🎧", title: "Audio Streaming", desc: "Music, podcast, and audiobook platforms." },
      { icon: "📲", title: "Smart-TV Apps", desc: "Android TV, Roku, Fire TV, Apple TV apps." },
      { icon: "💳", title: "SVOD & TVOD", desc: "Subscription, rental, and pay-per-view monetization." },
      { icon: "📢", title: "AVOD Platforms", desc: "Ad-supported free streaming with targeted ads." },
      { icon: "🏷️", title: "White-Label OTT", desc: "Customizable streaming apps ready to launch." },
      { icon: "🔌", title: "API Integration", desc: "CMS, CDN, DRM, payment, and analytics integrations." },
    ],
  },
  screens: {
    alt: "OTT app screen",
    images: [
      "/images/products/ott/appscreen1.png",
      "/images/products/ott/appscreen2.png",
      "/images/products/ott/appscreen3.png",
      "/images/products/ott/appscreen4.png",
      "/images/products/ott/appscreen5.png",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our OTT Apps",
    intro: "Our OTT app development covers every part of the streaming ecosystem.",
    panels: [
      { id: "viewer", title: "Viewer App", items: ["Easy Sign-Up", "Smart Search", "Personalized Recommendations", "Offline Viewing", "Multiple Profiles", "Watchlist & Favorites", "Multi-Device Support", "Push Notifications"] },
      { id: "admin", title: "Admin Panel", items: ["Content Management", "User Management", "Reports & Analytics", "Subscription Management", "Ad Campaign Tools"] },
      { id: "content", title: "Content Ops", items: ["Content Upload", "Transcoding Pipeline", "DRM Protection", "Metadata Management", "Scheduling"] },
      { id: "tv", title: "Smart TV", items: ["Remote-First UX", "Search & Browse", "Live Channel Lineup", "Chromecast & AirPlay", "4K Streaming"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🎬", name: "Entertainment" },
      { icon: "📺", name: "Broadcasters" },
      { icon: "🎧", name: "Audio Streaming" },
      { icon: "🏫", name: "Education OTT" },
      { icon: "🏋️", name: "Fitness OTT" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is OTT app development?", a: "OTT app development is the process of building streaming platforms that deliver video, audio, and live content directly to viewers across mobile, web, and smart-TV devices." },
    { q: "How much does it cost to build an OTT app?", a: "Costs depend on features, content scale, CDN, and DRM requirements. Basic VOD apps are affordable; enterprise OTT platforms require higher investment." },
    { q: "How long does it take to build?", a: "An OTT app typically takes 10 to 18 weeks depending on features and platform coverage." },
    { q: "Can you build apps like Netflix or Hotstar?", a: "Yes, we build scalable OTT platforms similar to Netflix and Hotstar with custom features." },
    { q: "Do you support smart-TV apps?", a: "Yes, we build Android TV, Roku, Fire TV, Apple TV, and Samsung Tizen apps." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance, content operations, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/ott/keybanner.png",
    h2: "Build an OTT App Viewers Love",
    body: "Launch a modern streaming platform that is scalable, engaging, and ready to grow globally.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Ott App Development Company", "description": "Ott App Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/ott-app-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Ott App Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Ott App Development Company", "item": "https://www.mtouchlabs.com/ott-app-development-company"}]}),
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
