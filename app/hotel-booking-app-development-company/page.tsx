import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Booking App Development Company",
  description: "Launch a feature-rich hotel reservation app with real-time availability, instant bookings, and secure payments.",
  alternates: { canonical: "https://www.mtouchlabs.com/hotel-booking-app-development-company" },
  openGraph: {
    title: "Hotel Booking App Development Company | mTouch Labs",
    description: "Launch a feature-rich hotel reservation app with real-time availability, instant bookings, and secure payments.",
    url: "https://www.mtouchlabs.com/hotel-booking-app-development-company",
    type: "website",
    siteName: "mTouch Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Booking App Development Company | mTouch Labs",
    description: "Launch a feature-rich hotel reservation app with real-time availability, instant bookings, and secure payments.",
  },
};


const d = {
  ...buildDefaults("Hotel Booking"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Hotel Booking App Development Company",
  hero: {
    h1Top: "Hotel Booking App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a feature-rich hotel reservation app with real-time availability, instant bookings, and secure payments.",
    demoHref: "https://youtu.be/JkyhaT9n4vM?si=cbedgYwyLIuzRny9",
    leftPhoneImg: "/images/products/hotel/phone1.webp",
    rightPhoneImg: "/images/products/hotel/phone2.webp",
  },
  intro: {
    img: "/images/products/hotel/phone1.webp",
    label: "Hotel Booking Experts",
    h3: "Hotel Booking App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">hotel booking app development company</a> in Hyderabad, helping hospitality brands and travel startups launch reservation platforms.</>,
      <>We build single-hotel apps, OTA marketplaces, vacation rentals, and B2B hotel booking platforms tailored to your scale.</>,
    ],
  },
  dividerTitle: "Custom Hotel Booking App Development",
  endToEnd: {
    img: "/images/products/hotel/phone2.webp",
    label: "End-to-End Solutions",
    h3: "Complete Hotel App Development",
    body: [
      "End-to-end hotel booking apps covering guest apps, hotel panels, and admin dashboards.",
      "Our solutions include single-hotel apps, OTA marketplaces, vacation rentals, and B2B hotel distribution.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Hotel Apps We Build",
    intro: "Scalable hotel booking apps for different hospitality models.",
    cards: [
      { icon: "🏨", title: "Single-Hotel App", desc: "Direct reservations and loyalty for independent hotels." },
      { icon: "🌐", title: "OTA Marketplace", desc: "Aggregator platform connecting guests with multiple hotels." },
      { icon: "🏖️", title: "Vacation Rentals", desc: "Homestays, villas, and short-stay rental platforms." },
      { icon: "🏢", title: "B2B Distribution", desc: "Agent and corporate hotel booking portals." },
      { icon: "📅", title: "Real-Time Availability", desc: "Live rates and inventory sync with channel managers." },
      { icon: "💳", title: "Secure Payments", desc: "Multi-currency gateways and cashless checkout." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable hotel apps ready for quick launch." },
      { icon: "🔌", title: "API Integration", desc: "PMS, channel manager, and payment gateway integration." },
    ],
  },
  screens: {
    alt: "Hotel booking app screen",
    images: [
      "/images/products/hotel/appscreen1.webp",
      "/images/products/hotel/appscreen2.webp",
      "/images/products/hotel/appscreen3.webp",
      "/images/products/hotel/appscreen4.webp",
      "/images/products/hotel/appscreen5.webp",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Hotel App",
    intro: "Our hotel booking app development covers every part of the ecosystem.",
    panels: [
      { id: "guest", title: "Guest App", items: ["Easy Sign-Up", "Smart Search", "Room Filters", "Instant Booking", "Multiple Payment Options", "Booking Management", "Ratings & Reviews", "Offers & Loyalty"] },
      { id: "admin", title: "Admin Panel", items: ["User & Hotel Management", "Commission Management", "Booking Tracking", "Reports & Analytics", "Payment Settlements"] },
      { id: "hotel", title: "Hotel Panel", items: ["Room & Rate Management", "Inventory Management", "Offer Management", "Guest Communication", "Sales Tracking"] },
      { id: "agent", title: "Agent Panel", items: ["B2B Rates", "Bulk Booking", "Commission Tracking", "Invoice Management", "Reports"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🏨", name: "Hotels" },
      { icon: "🏖️", name: "Vacation Rentals" },
      { icon: "🌐", name: "OTA Marketplaces" },
      { icon: "🏢", name: "Corporate Travel" },
      { icon: "🧳", name: "Travel Agencies" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is hotel booking app development?", a: "Hotel booking app development is the process of building reservation platforms that connect guests with hotels for real-time booking and secure payments." },
    { q: "How much does it cost?", a: "Costs depend on features, integrations, and scale. Basic apps are affordable while OTA marketplaces require higher investment." },
    { q: "How long does it take?", a: "A hotel booking app typically takes 8 to 16 weeks depending on features." },
    { q: "Can you build apps like Booking.com or MakeMyTrip?", a: "Yes, we build scalable OTA-style hotel platforms with custom features and multi-property support." },
    { q: "Do you integrate channel managers?", a: "Yes, we integrate with PMS and channel managers for live inventory sync." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance and feature enhancements." },
  ],
  cta: {
    img: "/images/products/hotel/Hotel.webp",
    h2: "Build a Hotel Booking App Guests Love",
    body: "Launch a modern hotel booking platform that is scalable, user-friendly, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Hotel Booking App Development Company", "description": "Hotel Booking App Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/hotel-booking-app-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Hotel Booking App Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Hotel Booking App Development Company", "item": "https://www.mtouchlabs.com/hotel-booking-app-development-company"}]}),
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
