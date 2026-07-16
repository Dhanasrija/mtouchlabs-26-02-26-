import ProductPageTemplate, { type ProductPageData } from "@/components/templates/ProductPageTemplate";
import { buildDefaults } from "@/lib/product-defaults";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taxi Booking App Development Company",
  description: "Launch a scalable ride-hailing platform with real-time GPS tracking, dynamic pricing, multi-ride options, secure payments, and driver-partner management.",
  alternates: { canonical: "https://www.mtouchlabs.com/taxi-booking-app-development-company" },
  openGraph: {
    title: "Taxi Booking App Development Company | mTouch Labs",
    description: "Launch a scalable ride-hailing platform with real-time GPS tracking, dynamic pricing, multi-ride options, secure payments, and driver-partner management.",
    url: "https://www.mtouchlabs.com/taxi-booking-app-development-company",
    type: "website",
    siteName: "mTouch Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Booking App Development Company | mTouch Labs",
    description: "Launch a scalable ride-hailing platform with real-time GPS tracking, dynamic pricing, multi-ride options, secure payments, and driver-partner management.",
  },
};


const d = {
  ...buildDefaults("Taxi Booking"),
  dividerTitle: undefined,
  dividerImg: undefined,
};

const data: ProductPageData = {
  crumbLabel: "Taxi Booking App Development Company",
  hero: {
    h1Top: "Taxi Booking App",
    h1Accent: "Development Company",
    h1Tail: "in Hyderabad",
    subtitle: "Launch a scalable ride-hailing platform with real-time GPS tracking, dynamic pricing, multi-ride options, secure payments, and driver-partner management.",
    demoHref: "https://youtu.be/Ftq3P5P4Xg8?si=L7DW83hBfG9_p2UP",
    leftPhoneImg: "/images/products/tax/phone1.webp",
    rightPhoneImg: "/images/products/tax/phone2.webp",
  },
  intro: {
    img: "/images/products/tax/phone1.webp",
    label: "Ride-Hailing Experts",
    h3: "Taxi Booking App Development",
    body: [
      <>mTouch Labs is a NASSCOM award-winning <a href="/mobile-app-development-company" target="_blank" rel="noopener noreferrer">taxi booking app development company</a> in Hyderabad, helping mobility startups and fleet operators launch scalable ride-hailing platforms.</>,
      <>We build city ride apps, intercity cab booking platforms, corporate mobility solutions, and auto/bike taxi services tailored to your business model.</>,
    ],
  },
  dividerTitle: "Custom Taxi Booking App Development Services",
  dividerImg: "/images/products/tax/icon.webp",
  endToEnd: {
    img: "/images/products/tax/phone2.webp",
    label: "End-to-End Solutions",
    h3: "Complete Ride-Hailing Platform",
    body: [
      "End-to-end taxi apps covering rider apps, driver apps, fleet panels, and admin dashboards — all connected in one platform.",
      "Our solutions include city rides, intercity cabs, corporate mobility, auto/bike taxis, and airport transfers.",
    ],
  },
  cardsSection: {
    label: "What We Build",
    h2: "Taxi Apps We Build",
    intro: "Scalable ride-hailing applications for different mobility models.",
    cards: [
      { icon: "🚕", title: "City Ride Apps", desc: "On-demand city taxi booking with live driver tracking." },
      { icon: "🛣️", title: "Intercity Cabs", desc: "Long-distance rides with multi-city pricing." },
      { icon: "🏢", title: "Corporate Mobility", desc: "Employee transport with billing and reporting." },
      { icon: "🛺", title: "Auto & Bike Taxi", desc: "Multi-modal mobility with auto, bike, and car rides." },
      { icon: "✈️", title: "Airport Transfers", desc: "Scheduled airport pick-up and drop services." },
      { icon: "💳", title: "Dynamic Pricing", desc: "Surge pricing, fare estimates, and secure payments." },
      { icon: "🏷️", title: "White-Label Solutions", desc: "Customizable taxi apps ready for quick launch." },
      { icon: "🔌", title: "API Integration", desc: "GPS, SMS, payment gateway, and KYC integration." },
    ],
  },
  screens: {
    alt: "Taxi booking app screen",
    images: [
      "/images/products/tax/appscreen1.webp",
      "/images/products/tax/appscreen2.webp",
      "/images/products/tax/appscreen3.webp",
      "/images/products/tax/appscreen4.webp",
      "/images/products/tax/appscreen5.webp",
    ],
  },
  tabs: {
    label: "Features",
    h2: "Core Features of Our Taxi Booking App",
    intro: "Our taxi booking app development covers the entire ride-hailing ecosystem.",
    panels: [
      { id: "rider", title: "Rider App", items: ["Easy Sign-Up", "Book Now or Schedule", "Live GPS Tracking", "Fare Estimate", "Multiple Payment Options", "Ride History", "Ratings & Reviews", "Push Notifications"] },
      { id: "driver", title: "Driver App", items: ["Ride Requests", "Live Navigation", "Earnings Dashboard", "Availability Toggle", "Daily Trip Sheet"] },
      { id: "admin", title: "Admin Panel", items: ["User & Driver Management", "Fleet Management", "Commission Rules", "Reports & Analytics", "Payouts & Settlements"] },
      { id: "fleet", title: "Fleet Panel", items: ["Vehicle Management", "KYC & Documents", "Driver Allocation", "Revenue Reports", "Compliance Console"] },
    ],
  },
  ...d,
  industries: {
    h2: "Industries and Business Models We Support",
    items: [
      { icon: "🚕", name: "Ride-Hailing" },
      { icon: "🚖", name: "Fleet Operators" },
      { icon: "🏢", name: "Corporate Mobility" },
      { icon: "🛺", name: "Auto & Bike Taxi" },
      { icon: "✈️", name: "Airport Transfers" },
      { icon: "🏷️", name: "White-Label" },
    ],
  },
  faqs: [
    { q: "What is taxi booking app development?", a: "Taxi booking app development is the process of building ride-hailing platforms that connect riders with drivers using real-time GPS, dynamic pricing, and secure payments." },
    { q: "How much does it cost to build a taxi app?", a: "Costs depend on features, scale, and integrations. Basic ride apps are affordable; enterprise ride-hailing platforms require higher investment." },
    { q: "How long does it take to build?", a: "A taxi app typically takes 10 to 16 weeks depending on features and complexity." },
    { q: "Can you build apps like Uber or Ola?", a: "Yes, we build scalable ride-hailing platforms similar to Uber and Ola with custom features." },
    { q: "Do you support corporate mobility models?", a: "Yes, we build corporate apps with employee billing, central invoicing, and policy-based bookings." },
    { q: "Do you provide post-launch support?", a: "Yes, we provide ongoing maintenance, performance tuning, and feature enhancements." },
  ],
  cta: {
    img: "/images/products/tax/tax_services_img.webp",
    h2: "Build a Taxi App Riders Love",
    body: "Launch a modern ride-hailing platform that is scalable, reliable, and ready for growth.",
  },
};

export default function Page() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Taxi Booking App Development Company", "description": "Taxi Booking App Development Company by mTouch Labs - enterprise-grade delivery.", "url": "https://www.mtouchlabs.com/taxi-booking-app-development-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "Taxi Booking App Development Company"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "Taxi Booking App Development Company", "item": "https://www.mtouchlabs.com/taxi-booking-app-development-company"}]}),
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
