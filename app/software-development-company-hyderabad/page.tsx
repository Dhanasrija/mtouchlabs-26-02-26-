import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  // Brand intentionally omitted: app/layout.tsx defines
  // `title.template = "%s | mTouch Labs"`, which appends it automatically.
  // Including it here rendered "… | mTouch Labs | mTouch Labs".
  title: "Software Development Company in Hyderabad",
  description: "mTouch Labs builds custom software, enterprise, SaaS, web and mobile applications from our Hyderabad development centre. Talk to our team.",
  openGraph: {
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "Software Development Company in Hyderabad - mTouch Labs" }],
    title: "Software Development Company in Hyderabad | mTouch Labs",
    description: "mTouch Labs is a leading Software Development Company in Hyderabad offering custom software, enterprise applications, mobile apps, cloud services, and AI solutions.",
    url: "https://www.mtouchlabs.com/software-development-company-hyderabad",
    type: "website",
    siteName: "mTouch Labs",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-hyderabad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Hyderabad | mTouch Labs",
    description: "mTouch Labs — software development company serving Hyderabad with custom software, cloud, AI and enterprise applications.",
    images: [{ url: "/images/Light.png", alt: "mTouch Labs Software Development Company in Hyderabad" }]
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 }
  },
  category: "Technology",
  applicationName: "mTouch Labs",
  creator: "mTouch Labs",
  publisher: "mTouch Labs",
  authors: [{ name: "mTouch Labs", url: "https://www.mtouchlabs.com" }],
  referrer: "origin-when-cross-origin",
  formatDetection: { email: false, address: false, telephone: false },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mtouchlabs.com/software-development-company-hyderabad#localbusiness",
  "name": "mTouch Labs — Software Development in Hyderabad",
  "url": "https://www.mtouchlabs.com/software-development-company-hyderabad",
  "description": "mTouch Labs — custom software, enterprise apps, cloud and AI for clients in Hyderabad.",
  "image": "https://www.mtouchlabs.com/images/Light.png",
  "priceRange": "$$",
  "areaServed": {
    "@type": "City",
    "name": "Hyderabad",
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Telangana", "addressCountry": "IN" }
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Manjeera Trinity Corporate, 514, JNTU - Hitech City Rd, Kukatpally Housing Board Colony, K P H B Phase 3, Kukatpally",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500072",
    "addressCountry": "IN"
  },
  "telephone": "+91-9390683154",
  "email": "contact@mtouchlabs.com",
  "provider": { "@id": "https://www.mtouchlabs.com/#organization" },
  "parentOrganization": { "@id": "https://www.mtouchlabs.com/#organization" },
  // Commercial services already described in the page body, made machine-readable
  // and explicitly scoped to Hyderabad. No capability is claimed here that the
  // page does not already list.
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software Development Services in Hyderabad",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development", "serviceType": "Custom Software Development", "areaServed": { "@type": "City", "name": "Hyderabad" }, "provider": { "@id": "https://www.mtouchlabs.com/#organization" } } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Product Development", "serviceType": "Software Product Development", "areaServed": { "@type": "City", "name": "Hyderabad" }, "provider": { "@id": "https://www.mtouchlabs.com/#organization" } } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Software Application Development", "serviceType": "Software Application Development", "areaServed": { "@type": "City", "name": "Hyderabad" }, "provider": { "@id": "https://www.mtouchlabs.com/#organization" } } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise Software Development", "serviceType": "Enterprise Software Development", "areaServed": { "@type": "City", "name": "Hyderabad" }, "provider": { "@id": "https://www.mtouchlabs.com/#organization" } } }
    ]
  }
  // NOTE: aggregateRating removed. Google requires rating markup to reflect
  // review content that is visible on the page; none is rendered here.
  // Re-add only alongside real, displayed reviews.
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.mtouchlabs.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Software Development Company in Hyderabad", "item": "https://www.mtouchlabs.com/software-development-company-hyderabad" }
  ]
};

/* ════════════════════════════════════════════════════════════
   ICON SET — single stroke weight, 24×24 grid, currentColor
   ════════════════════════════════════════════════════════════ */
const ICONS = {
  activity: <><path d="M22 12h-4l-3 9-6-18-3 9H2" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.6 14.2 7.4 22 12 19.4 16.6 22l-1.2-7.8" /></>,
  barChart: <><path d="M6 20v-6M12 20V5M18 20v-9" /><path d="M3 20.5h18" /></>,
  book: <><path d="M2.5 4h5.5a3.5 3.5 0 0 1 3.5 3.5V20a3 3 0 0 0-3-2.4H2.5Z" /><path d="M21.5 4H16a3.5 3.5 0 0 0-3.5 3.5V20a3 3 0 0 1 3-2.4h6Z" /></>,
  briefcase: <><rect x="2.5" y="7" width="19" height="13.5" rx="2.2" /><path d="M15.5 20.5V5.6a1.6 1.6 0 0 0-1.6-1.6h-3.8A1.6 1.6 0 0 0 8.5 5.6v14.9" /><path d="M2.5 12.2h19" /></>,
  building: <><path d="M3 21V5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5V21" /><path d="M13 10h6.5A1.5 1.5 0 0 1 21 11.5V21" /><path d="M2 21h20" /><path d="M6.5 8h3M6.5 12h3M6.5 16h3M16.5 14h1.5M16.5 17.5h1.5" /></>,
  cart: <><circle cx="9.5" cy="20" r="1.4" /><circle cx="18.5" cy="20" r="1.4" /><path d="M2 3h2.6l2.5 12.1a1.7 1.7 0 0 0 1.7 1.4h8.9a1.7 1.7 0 0 0 1.7-1.4L21.5 7H6" /></>,
  check: <><path d="M20 6.5 9.5 17 4 11.5" /></>,
  checkSquare: <><path d="m9 12 2.5 2.5L17 9" /><path d="M20.5 12.5V19a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  clipboard: <><path d="M15.5 4.5H18a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h2.5" /><rect x="8.5" y="2.5" width="7" height="4" rx="1.4" /><path d="M8.5 12h7M8.5 16h4.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6.8V12l3.4 2" /></>,
  cloud: <><path d="M17.4 19H7a4.5 4.5 0 0 1-.9-8.9 6 6 0 0 1 11.5-.5 4.75 4.75 0 0 1-.2 9.4Z" /></>,
  code: <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /><path d="M14 3.8 10 20.2" /></>,
  cpu: <><rect x="6.5" y="6.5" width="11" height="11" rx="2.5" /><rect x="10" y="10" width="4" height="4" rx="1" /><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" /></>,
  creditCard: <><rect x="2" y="4.5" width="20" height="15" rx="2.5" /><path d="M2 9.5h20" /><path d="M6 15h3" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" /><path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" /></>,
  dollar: <><path d="M12 2.5v19" /><path d="M16.8 6.2H9.6a3.4 3.4 0 0 0 0 6.8h4.8a3.4 3.4 0 0 1 0 6.8H6.6" /></>,
  edit: <><path d="M12.5 20.5h9" /><path d="M16.8 3.3a2.15 2.15 0 0 1 3 3L7.5 18.6l-4 1 1-4Z" /></>,
  factory: <><path d="M2.5 20.5V9.6l6 3.9V9.6l6 3.9V4.5h6.9v16Z" /><path d="M2 20.5h20" /><path d="M17.5 8.5v3M17.5 15v2.5" /></>,
  film: <><rect x="2.5" y="3.5" width="19" height="17" rx="2.5" /><path d="M7.5 3.5v17M16.5 3.5v17M2.5 12h19M2.5 7.8h5M2.5 16.2h5M16.5 7.8h5M16.5 16.2h5" /></>,
  flask: <><path d="M9 3h6" /><path d="M10 3v6.6L4.9 18a2 2 0 0 0 1.7 3h10.8a2 2 0 0 0 1.7-3L14 9.6V3" /><path d="M7.6 14.5h8.8" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14.5 14.5 0 0 1 3.8 9A14.5 14.5 0 0 1 12 21a14.5 14.5 0 0 1-3.8-9A14.5 14.5 0 0 1 12 3Z" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></>,
  headphones: <><path d="M3.5 17.5V12a8.5 8.5 0 0 1 17 0v5.5" /><path d="M20.5 18.5a2 2 0 0 1-2 2h-.5a1.8 1.8 0 0 1-1.8-1.8v-3a1.8 1.8 0 0 1 1.8-1.8h2.5Z" /><path d="M3.5 18.5a2 2 0 0 0 2 2H6a1.8 1.8 0 0 0 1.8-1.8v-3A1.8 1.8 0 0 0 6 13.9H3.5Z" /></>,
  heart: <><path d="M12 20.6 4.6 13.2a4.9 4.9 0 0 1 7-6.9l.4.4.4-.4a4.9 4.9 0 0 1 7 6.9Z" /></>,
  home: <><path d="M3.5 9.8 12 3l8.5 6.8V20a1.6 1.6 0 0 1-1.6 1.6H5.1A1.6 1.6 0 0 1 3.5 20Z" /><path d="M9.5 21.6v-7h5v7" /></>,
  infinity: <><path d="M7.5 8.6a3.4 3.4 0 1 0 0 6.8c2.3 0 3.1-1.9 4.5-3.4s2.2-3.4 4.5-3.4a3.4 3.4 0 1 1 0 6.8c-2.3 0-3.1-1.9-4.5-3.4S9.8 8.6 7.5 8.6Z" /></>,
  landmark: <><path d="M3.2 9.8 12 4.5l8.8 5.3" /><path d="M5.8 11v7M9.9 11v7M14.1 11v7M18.2 11v7" /><path d="M3 21h18" /></>,
  layout: <><rect x="3" y="3.5" width="18" height="17" rx="2.4" /><path d="M3 9.2h18" /><path d="M9.2 9.2v11.3" /></>,
  link: <><path d="M10 13.4a4.4 4.4 0 0 0 6.6.5l2.6-2.6a4.4 4.4 0 0 0-6.2-6.2l-1.5 1.5" /><path d="M14 10.6a4.4 4.4 0 0 0-6.6-.5l-2.6 2.6a4.4 4.4 0 0 0 6.2 6.2l1.5-1.5" /></>,
  lock: <><rect x="4" y="10.5" width="16" height="10.5" rx="2.4" /><path d="M7.8 10.5V7.6a4.2 4.2 0 0 1 8.4 0v2.9" /></>,
  bulb: <><path d="M9.2 18h5.6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 1 3.6 10.8c-.5.4-.8 1-.8 1.6v.6H9.2v-.6c0-.6-.3-1.2-.8-1.6A6 6 0 0 1 12 3Z" /></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.4" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  mapPin: <><path d="M20 10.4c0 6-8 11.6-8 11.6s-8-5.6-8-11.6a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10.2" r="2.8" /></>,
  message: <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /></>,
  monitor: <><rect x="2.5" y="3.5" width="19" height="13" rx="2.4" /><path d="M8.5 20.5h7M12 16.5v4" /></>,
  package: <><path d="M20.5 15.8V8.2a2 2 0 0 0-1-1.73l-6.5-3.7a2 2 0 0 0-2 0l-6.5 3.7a2 2 0 0 0-1 1.73v7.6a2 2 0 0 0 1 1.73l6.5 3.7a2 2 0 0 0 2 0l6.5-3.7a2 2 0 0 0 1-1.73Z" /><path d="m3.8 7.2 8.2 4.7 8.2-4.7" /><path d="M12 21.4v-9.5" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2.6" /><path d="M10.5 18.4h3" /></>,
  phoneCall: <><path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.4 19.4 0 0 1-8.5-3A19.1 19.1 0 0 1 4.4 13a19.4 19.4 0 0 1-3-8.5A2 2 0 0 1 3.4 2.3H6a2 2 0 0 1 2 1.7 12.5 12.5 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L7.1 10a15.7 15.7 0 0 0 5.9 5.9l1.1-1.1a2 2 0 0 1 2.1-.5 12.5 12.5 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></>,
  refresh: <><path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" /><path d="M20.5 3.5V9.5H14.5" /></>,
  repeat: <><path d="m16.8 2.5 3.7 3.6-3.7 3.6" /><path d="M3.5 12v-1.9a4 4 0 0 1 4-4h13" /><path d="m7.2 21.5-3.7-3.6 3.7-3.6" /><path d="M20.5 12v1.9a4 4 0 0 1-4 4h-13" /></>,
  rocket: <><path d="M12 2.5c2.8 2.2 4.2 5.4 4.2 8.8L14 15.4h-4L7.8 11.3c0-3.4 1.4-6.6 4.2-8.8Z" /><circle cx="12" cy="9.8" r="1.7" /><path d="M9.6 15.7 7.5 21l4.5-2.2L16.5 21l-2.1-5.3" /></>,
  send: <><path d="M21.5 2.5 11 13" /><path d="M21.5 2.5 14.8 21.5 11 13 2.5 9.2Z" /></>,
  server: <><rect x="2.5" y="3" width="19" height="7.5" rx="2.2" /><rect x="2.5" y="13.5" width="19" height="7.5" rx="2.2" /><path d="M6.5 6.7h.01M6.5 17.2h.01" /><path d="M11 6.7h6M11 17.2h6" /></>,
  settings: <><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" /></>,
  shield: <><path d="M12 21.5s7.5-3.6 7.5-9.4V5.6L12 2.6 4.5 5.6v6.5c0 5.8 7.5 9.4 7.5 9.4Z" /></>,
  sparkles: <><path d="m12 3 1.7 4.6L18.3 9l-4.6 1.7L12 15.3l-1.7-4.6L5.7 9l4.6-1.4Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.8" /><circle cx="12" cy="12" r="1.4" /></>,
  tool: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z" /></>,
  trendingUp: <><path d="M22 7 13.5 15.5 9 11l-7 7" /><path d="M16.5 7H22v5.5" /></>,
  trophy: <><path d="M8 3.5h8v5.2a4 4 0 0 1-8 0Z" /><path d="M8 5H5.8a2.4 2.4 0 0 0 0 4.8H8" /><path d="M16 5h2.2a2.4 2.4 0 0 1 0 4.8H16" /><path d="M12 12.9V17" /><path d="M9.4 17h5.2v3.5H9.4Z" /><path d="M8.5 20.5h7" /></>,
  truck: <><path d="M2.5 5.5h11v11h-11z" /><path d="M13.5 9h3.4l3.1 3v4.5h-6.5Z" /><circle cx="7" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></>,
  users: <><path d="M16.5 20.5v-1.8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.8" /><circle cx="9.2" cy="7.5" r="3.8" /><path d="M22 20.5v-1.8a4 4 0 0 0-3-3.85" /><path d="M15.5 3.9a4 4 0 0 1 0 7.4" /></>,
  userPlus: <><path d="M15 20.5v-1.8a4 4 0 0 0-4-4H5.5a4 4 0 0 0-4 4v1.8" /><circle cx="8.2" cy="7.5" r="3.8" /><path d="M19.5 8v6M22.5 11h-6" /></>,
  utensils: <><path d="M6.5 3v6.4a2 2 0 0 0 2 2v9.6" /><path d="M4.5 3v5M8.5 3v5" /><path d="M17 3c-1.4 1.6-2.2 3.7-2.2 6.3 0 1.9.9 3.1 2.2 3.1V21" /></>,
  zap: <><path d="M13 2.5 4.5 13.4H11l-1 8.1 8.5-10.9H12Z" /></>,
};
type IconName = keyof typeof ICONS;

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg className="loc-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   BUILDING BLOCKS
   ════════════════════════════════════════════════════════════ */
const Stat = ({ i, n, l }: { i: IconName; n?: string; l: string }) => (
  <div className="loc-statCard">
    <span className="loc-statIcon"><Icon name={i} size={19} /></span>
    {n ? <div className="loc-statNum">{n}</div> : null}
    <div className="loc-statLabel">{l}</div>
  </div>
);

const Why = ({ i, t, d }: { i: IconName; t: string; d?: string }) => (
  <div className="loc-whyCard">
    <span className="loc-tile loc-tile--sm"><Icon name={i} size={20} /></span>
    <div><h4 className="loc-whyTitle">{t}</h4>{d ? <p className="loc-whyText">{d}</p> : null}</div>
  </div>
);

const Svc = ({ i, t, d, href }: { i: IconName; t: string; d: ReactNode; href?: string }) => (
  <div className="loc-serviceCard">
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-serviceTitle">{href ? <Link href={href}>{t}</Link> : t}</h3>
    <p className="loc-serviceDesc">{d}</p>
  </div>
);

const Industry = ({ i, t, d }: { i: IconName; t: string; d?: string }) => (
  <div className="loc-industryCard">
    <span className="loc-tile loc-tile--round"><Icon name={i} size={23} /></span>
    <h4 className="loc-industryName">{t}</h4>
    {d ? <p className="loc-serviceDesc">{d}</p> : null}
  </div>
);

const Chip = ({ i, t }: { i: IconName; t: string }) => (
  <div className="loc-chipCard"><span className="loc-chipIcon"><Icon name={i} size={20} /></span>{t}</div>
);

const Tech = ({ i, t, items }: { i: IconName; t: string; items: ReactNode[] }) => (
  <div className="loc-whyCard">
    <span className="loc-tile loc-tile--sm"><Icon name={i} size={20} /></span>
    <div>
      <h4 className="loc-whyTitle">{t}</h4>
      <div className="loc-introTags">{items.map((x, k) => <span className="loc-introTag" key={k}>{x}</span>)}</div>
    </div>
  </div>
);

type DetailProps = { n?: string; i?: IconName; t: string; href?: string; d: string; label: string; tags: ReactNode[]; benefits?: string[] };
const Detail = ({ n, i, t, href, d, label, tags, benefits }: DetailProps) => (
  <div className="loc-detailCard">
    <div className="loc-detailHead">
      <div className={i ? "loc-detailNum loc-detailNum--icon" : "loc-detailNum"}>{i ? <Icon name={i} size={20} /> : n}</div>
      <h3 className="loc-detailTitle">{href ? <Link href={href}>{t}</Link> : t}</h3>
    </div>
    <p className="loc-detailDesc">{d}</p>
    <div className="loc-detailBlock">
      <p className="loc-detailLabel">{label}</p>
      <div className="loc-detailTagRow">{tags.map((x, k) => <span className="loc-detailTag" key={k}>{x}</span>)}</div>
    </div>
    {benefits ? (
      <div className="loc-detailBlock">
        <p className="loc-detailLabel">Business Benefits</p>
        <div className="loc-detailBenefits">
          {benefits.map((b) => (
            <span className="loc-detailBenefit" key={b}><span className="loc-checkMark"><Icon name="check" size={11} /></span>{b}</span>
          ))}
        </div>
      </div>
    ) : null}
  </div>
);

const Step = ({ n, t, d }: { n: string; t: string; d: string }) => (
  <div className="loc-timelineItem">
    <div className="loc-timelineDot">{n}</div>
    <div className="loc-timelineBody">
      <h4 className="loc-timelineTitle">{t}</h4>
      <p className="loc-timelineDesc">{d}</p>
    </div>
  </div>
);

const Engage = ({ i, t, d, best }: { i: IconName; t: string; d: string; best: string }) => (
  <div className="loc-engageCard">
    <span className="loc-engageIcon"><Icon name={i} size={22} /></span>
    <h3 className="loc-engageTitle">{t}</h3>
    <p className="loc-engageDesc">{d}</p>
    <span className="loc-engageBest">{best}</span>
  </div>
);

const Faq = ({ q, a }: { q: string; a: string }) => (
  <details className="loc-faqItem">
    <summary className="loc-faqQuestion">
      <span className="loc-faqQuestionText">{q}</span>
      <span className="loc-faqChevron"><Icon name="chevron" size={16} /></span>
    </summary>
    <div className="loc-faqAnswer">{a}</div>
  </details>
);

/* ════════════════════════════════════════════════════════════
   CONTENT
   ════════════════════════════════════════════════════════════ */
const INTRO_STATS: { i: IconName; n?: string; l: string }[] = [
  { i: "package", n: "2000+", l: "Projects" },
  { i: "users", n: "1050+", l: "Clients" },
  { i: "award", n: "14+", l: "Years" },
  { i: "heart", n: "99%", l: "Retention" },
  { i: "cpu", n: "10+", l: "Technologies" },
  { i: "headphones", n: "24/7", l: "Support" },
  { i: "building", n: "15+", l: "Industries Served" },
  { i: "grid", n: "8+", l: "Core Services" },
  { i: "globe", l: "Global Delivery" },
  { i: "trophy", l: "Proven Track Record" },
];

const WHY_CHOOSE: { i: IconName; t: string; d: string }[] = [
  { i: "award", t: "14+ Years of Experience", d: "Proven expertise across multiple industries and technologies." },
  { i: "globe", t: "500+ Global Clients", d: "Trusted by startups, enterprises, and government organizations worldwide." },
  { i: "repeat", t: "End-to-End Development", d: "Consulting, UI/UX, development, testing, deployment, and ongoing support." },
  { i: "cpu", t: "AI & Emerging Technologies", d: "Build intelligent applications powered by AI, automation, analytics, and cloud." },
  { i: "refresh", t: "Agile Delivery", d: "Transparent communication, faster releases, and continuous improvements." },
  { i: "trendingUp", t: "Scalable Architecture", d: "Future-ready applications designed for growth and performance." },
];

const HYD_STATS: { i: IconName; n?: string; l: string }[] = [
  { i: "building", l: "Premier Tech Hub" },
  { i: "globe", n: "GCC", l: "Global Capability Centers" },
  { i: "cpu", n: "AI", l: "& Cloud Innovation Hub" },
  { i: "bulb", l: "World-Class Talent Pool" },
  { i: "lock", l: "Cybersecurity Expertise" },
  { i: "creditCard", l: "FinTech Innovation" },
  { i: "activity", l: "Healthcare Tech Hub" },
  { i: "dollar", l: "Cost-Effective Delivery" },
];

const CUSTOM_VALUE: { i: IconName; t: string }[] = [
  { i: "target", t: "Tailored to Your Business Processes" },
  { i: "zap", t: "Improved Operational Efficiency & Automation" },
  { i: "link", t: "Seamless ERP, CRM, HRMS Integration" },
  { i: "shield", t: "Enterprise-Grade Security & Compliance" },
  { i: "cloud", t: "Cloud-Ready & AI-Enabled Architecture" },
  { i: "trendingUp", t: "Better Scalability for Future Growth" },
  { i: "dollar", t: "Lower Long-Term Operational Costs" },
  { i: "sparkles", t: "Enhanced Customer & Employee Experiences" },
  { i: "rocket", t: "Faster Time-to-Market" },
];

const PARTNER_STATS: { i: IconName; l: string }[] = [
  { i: "briefcase", l: "Business Consulting" },
  { i: "settings", l: "Modern Engineering" },
  { i: "refresh", l: "Agile Methodologies" },
  { i: "users", l: "Long-Term Partnership" },
  { i: "message", l: "Transparent Communication" },
  { i: "target", l: "Business-Objective Focused" },
  { i: "tool", l: "Continuous Support" },
  { i: "trendingUp", l: "Sustainable Growth" },
];

const SERVICES_STATS: { i: IconName; n?: string; l: string }[] = [
  { i: "grid", n: "10+", l: "Core Services" },
  { i: "repeat", n: "E2E", l: "End-to-End Delivery" },
  { i: "cpu", l: "AI-Powered Software" },
  { i: "cloud", l: "Cloud-Native Products" },
  { i: "infinity", l: "Workflow Automation" },
  { i: "rocket", l: "Digital Transformation" },
];

const SERVICES: { i: IconName; t: string; d: string; href?: string }[] = [
  { i: "code", t: "Custom Software Development", d: "Tailored enterprise-grade software solutions designed for scalability, performance, and security.", href: "/custom-software-development-company" },
  { i: "building", t: "Enterprise Applications", d: "Robust ERP, CRM, and workflow automation platforms for operational efficiency.", href: "/enterprise-application-development-company" },
  { i: "phone", t: "Mobile App Development", d: "iOS, Android, and cross-platform applications for startups and enterprises.", href: "/mobile-app-development-company" },
  { i: "cloud", t: "Cloud Services & Migration", d: "Cloud-native architecture, infrastructure management, and secure migration strategies.", href: "/cloud-services" },
  { i: "cpu", t: "AI & Intelligent Automation", d: "AI-powered analytics, automation tools, and predictive systems for smarter decisions.", href: "/generative-ai-development-company" },
  { i: "rocket", t: "SaaS Product Development", d: "Multi-tenant, subscription-ready SaaS platforms from MVP to enterprise scale.", href: "/saas-development-services" },
  { i: "globe", t: "Web Application Development", d: "Responsive, high-performance web portals, marketplaces, and business applications.", href: "/web-development-company" },
  { i: "link", t: "API Development & Integration", d: "Secure APIs and enterprise integrations that connect your software ecosystem." },
  { i: "refresh", t: "Legacy Application Modernization", d: "Transform outdated systems into modern, secure, cloud-ready applications." },
  { i: "tool", t: "Software Maintenance & Support", d: "Continuous monitoring, updates, and technical support that keep software reliable." },
  { i: "infinity", t: "DevOps & CI/CD Automation", d: "Automated pipelines, infrastructure as code, and faster, safer releases.", href: "/devops-services" },
  { i: "edit", t: "UI/UX Design Services", d: "Research-driven interface design that improves usability and conversion.", href: "/ui-ux-design-company" },
];

const SERVICE_DETAILS: DetailProps[] = [
  {
    n: "01", t: "Custom Software Development", href: "/custom-software-development-company",
    d: "Build software tailored specifically to your business processes, operational workflows, and long-term objectives. Our custom software solutions improve efficiency, eliminate manual tasks, and provide the flexibility to scale as your business grows.",
    label: "Solutions Include",
    tags: ["Business Management Software", "CRM Development", "ERP Development", "HRMS Solutions", "Workflow Automation", "Inventory Management", "Customer & Vendor Portals", "Business Dashboards"],
    benefits: ["Tailored to your business needs", "Easy integration with existing systems", "Scalable architecture for future growth"],
  },
  {
    n: "02", t: "Enterprise Software Development", href: "/enterprise-application-development-company",
    d: "Modern enterprises require intelligent software that connects teams, automates operations, and delivers real-time insights. We develop enterprise applications that improve collaboration, simplify business processes, and support organizational growth.",
    label: "Enterprise Solutions",
    tags: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)", "Procurement Systems", "Supply Chain Management", "Business Intelligence Dashboards", "Document Management Systems"],
    benefits: ["Increased productivity", "Better business visibility", "Enterprise-grade security"],
  },
  {
    n: "03", t: "AI & Generative AI Development", href: "/generative-ai-development-company",
    d: "Harness the power of Artificial Intelligence to automate operations, improve decision-making, and deliver personalized customer experiences. We develop AI-powered solutions that help businesses innovate faster and operate smarter.",
    label: "AI Solutions",
    tags: ["AI Chatbots", "Generative AI Applications", "AI Assistants", "Machine Learning Models", "Predictive Analytics", "Intelligent Document Processing", "AI Workflow Automation", "Recommendation Engines"],
    benefits: ["Reduce manual effort", "Improve customer engagement", "Unlock actionable business insights"],
  },
  {
    n: "04", t: "SaaS Product Development", href: "/saas-development-services",
    d: "Launch scalable Software-as-a-Service (SaaS) platforms designed for subscription-based business models. From MVP development to enterprise SaaS applications, we help businesses build secure, cloud-native products that scale with demand.",
    label: "We Build",
    tags: ["B2B SaaS Platforms", "B2C SaaS Applications", "Multi-Tenant Solutions", "Subscription Management", "Admin Dashboards", "API-Driven SaaS Products"],
    benefits: ["Faster product launch", "Scalable cloud infrastructure", "Recurring revenue-ready architecture"],
  },
  {
    n: "05", t: "Web Application Development", href: "/web-development-company",
    d: "Develop responsive, secure, and high-performance web applications using modern frameworks and cloud technologies. Our solutions are designed to deliver exceptional user experiences across desktop and mobile devices.",
    label: "Applications We Develop",
    tags: ["Enterprise Portals", "Customer Portals", "Vendor Portals", "Business Applications", <Link href="/ecommerce-app-development-company" key="ecom">eCommerce Platforms</Link>, "Marketplace Solutions", "Progressive Web Apps (PWAs)"],
    benefits: ["Responsive design", "High performance", "SEO-friendly architecture"],
  },
  {
    n: "06", t: "Mobile App Development", href: "/mobile-app-development-company",
    d: "Create engaging mobile experiences that strengthen customer relationships and improve business productivity. We develop native and cross-platform mobile applications for startups and enterprises.",
    label: "Our Expertise",
    tags: ["Android App Development", "iOS App Development", <Link href="/flutter-app-development-company" key="flu">Flutter App Development</Link>, <Link href="/react-native-app-development-company" key="rn">React Native Development</Link>, "Enterprise Mobility Solutions", "Tablet & Wearable Applications"],
    benefits: ["Better user engagement", "Cross-platform compatibility", "Faster development cycles"],
  },
  {
    n: "07", t: "Cloud Application Development", href: "/cloud-services",
    d: "Adopt cloud-first technologies that improve scalability, performance, and operational efficiency. Our cloud experts help businesses migrate, modernize, and optimize applications for AWS, Azure, and Google Cloud.",
    label: "Cloud Services",
    tags: ["Cloud Migration", "Cloud-Native Development", "AWS Solutions", "Microsoft Azure", "Google Cloud Platform", "Serverless Applications", "Cloud Infrastructure Management"],
    benefits: ["High availability", "Lower infrastructure costs", "Secure and scalable deployments"],
  },
  {
    n: "08", t: "API Development & System Integration",
    d: "Enable seamless communication between business applications through secure APIs and enterprise integrations. We connect your software ecosystem to improve efficiency and eliminate data silos.",
    label: "Integration Services",
    tags: ["ERP Integration", "CRM Integration", "Payment Gateway Integration", "Third-Party APIs", "HRMS Integration", "Enterprise System Integration"],
    benefits: ["Connected business systems", "Automated workflows", "Improved operational efficiency"],
  },
  {
    n: "09", t: "Legacy Application Modernization",
    d: "Transform outdated software into modern, secure, and cloud-ready applications without disrupting your business operations.",
    label: "Modernization Services",
    tags: ["Legacy Software Migration", "UI/UX Modernization", "Cloud Migration", "Database Modernization", "Performance Optimization", "Security Enhancement"],
    benefits: ["Improved application performance", "Enhanced security", "Reduced maintenance costs"],
  },
  {
    n: "10", t: "Software Maintenance & Support",
    d: "Keep your software secure, reliable, and optimized with continuous monitoring, updates, and technical support. We ensure your applications evolve alongside your business.",
    label: "Support Services",
    tags: ["Performance Monitoring", "Bug Fixes", "Security Updates", "Feature Enhancements", "Application Monitoring", "Technical Support"],
    benefits: ["Increased software reliability", "Continuous improvements", "Long-term business continuity"],
  },
];

const WHY_SERVICES: { i: IconName; t: string }[] = [
  { i: "target", t: "End-to-End Product Development" },
  { i: "code", t: "Experienced Software Architects & Developers" },
  { i: "refresh", t: "Agile Development Methodology" },
  { i: "cpu", t: "AI-Ready & Cloud-Native Solutions" },
  { i: "lock", t: "Enterprise-Grade Security" },
  { i: "grid", t: "Flexible Engagement Models" },
  { i: "barChart", t: "Transparent Project Management" },
  { i: "tool", t: "Long-Term Maintenance & Support" },
  { i: "bulb", t: "Innovation-Driven Approach" },
];

const SOLUTIONS: { i: IconName; t: string; d: ReactNode }[] = [
  { i: "building", t: "Enterprise Business Solutions", d: "ERP, CRM, HRMS, procurement, inventory management, and business intelligence dashboards." },
  { i: "cpu", t: "AI & Intelligent Business Solutions", d: "AI chatbots, generative AI apps, intelligent document processing, and predictive analytics." },
  { i: "monitor", t: "Web & Customer Experience Platforms", d: "Customer portals, vendor portals, PWAs, marketplaces, and booking platforms." },
  { i: "phone", t: "Mobile Applications", d: "Android, iOS, Flutter, and React Native apps for customers and internal teams." },
  { i: "cart", t: "eCommerce & Marketplace Solutions", d: "Multi-vendor marketplaces, B2B/B2C commerce, order management, and loyalty platforms." },
  { i: "factory", t: "Industry-Specific Software", d: "Purpose-built applications for healthcare, FinTech, logistics, education, and more." },
  { i: "rocket", t: "SaaS & Cloud-Native Platforms", d: "Multi-tenant, subscription-ready SaaS products built for scale." },
  { i: "bulb", t: "Startup & MVP Solutions", d: "Fast, cost-effective MVPs that help startups validate and launch quickly." },
  {
    i: "truck", t: "On-Demand & Delivery App Solutions",
    d: <><Link href="/food-delivery-app-development-service">Food delivery</Link>, <Link href="/grocery-delivery-app-development-company">grocery delivery</Link>, and <Link href="/taxi-booking-app-development-company">taxi booking</Link> apps built for scale.</>,
  },
];

const SOLUTION_DETAILS: DetailProps[] = [
  {
    i: "building", t: "Enterprise Business Solutions",
    d: "Digitize and automate business operations with enterprise software designed to improve productivity and decision-making.",
    label: "Solutions We Build",
    tags: ["Enterprise Resource Planning (ERP)", "Customer Relationship Management (CRM)", "Human Resource Management System (HRMS)", "Procurement Management", "Inventory Management", "Business Process Automation", "Document Management System", "Business Intelligence Dashboards"],
  },
  {
    i: "cpu", t: "AI & Intelligent Business Solutions",
    d: "Transform your business with Artificial Intelligence, automation, and intelligent data-driven applications.",
    label: "Solutions We Build",
    tags: ["AI Chatbots & Virtual Assistants", "Generative AI Applications", "AI Search & Knowledge Assistants", "Machine Learning Solutions", "Intelligent Document Processing", "Predictive Analytics", "Recommendation Engines", "AI Workflow Automation"],
  },
  {
    i: "monitor", t: "Web & Customer Experience Platforms",
    d: "Create secure, scalable, and user-friendly digital experiences for customers, partners, and employees.",
    label: "Solutions We Build",
    tags: ["Business Portals", "Customer Portals", "Vendor Portals", "Employee Self-Service Portals", "Progressive Web Apps (PWAs)", "Marketplace Platforms", "Booking Platforms", "Business Dashboards"],
  },
  {
    i: "phone", t: "Mobile Applications",
    d: "Deliver seamless mobile experiences across Android, iOS, and cross-platform environments.",
    label: "Solutions We Build",
    tags: ["Android Applications", "iOS Applications", "Flutter Applications", "React Native Applications", "Enterprise Mobility Solutions", "Customer Engagement Apps", "Internal Business Apps"],
  },
  {
    i: "cart", t: "eCommerce & Marketplace Solutions",
    d: "Build high-performance commerce platforms that help businesses increase online sales and improve customer experiences.",
    label: "Solutions We Build",
    tags: ["eCommerce Websites", "Multi-Vendor Marketplaces", "B2B Commerce Platforms", "B2C Online Stores", "Subscription Commerce", "Order Management Systems", "POS Integration", "Loyalty & Rewards Platforms"],
  },
];

const WHY_US: { i: IconName; t: string; d: string }[] = [
  { i: "users", t: "Experienced Local Team", d: "Hyderabad-based development team with deep domain expertise." },
  { i: "refresh", t: "Agile & DevOps-Driven", d: "Sprint-based methodology for rapid, iterative delivery." },
  { i: "cloud", t: "Cloud-First Architecture", d: "Scalable infrastructure built for performance." },
  { i: "lock", t: "Enterprise Security", d: "Industry-standard security protocols and compliance." },
  { i: "barChart", t: "Transparent Management", d: "Real-time project tracking and reporting." },
  { i: "tool", t: "Long-Term Support", d: "Ongoing maintenance, monitoring, and optimization." },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "activity", t: "Healthcare", d: "Hospital Management, Telemedicine, EMR/EHR, Pharmacy Management." },
  { i: "creditCard", t: "Banking & FinTech", d: "Digital Banking, Wallets, Lending, Insurance Platforms." },
  { i: "cart", t: "Retail & eCommerce", d: "POS, Inventory, Marketplace, Retail Management." },
  { i: "truck", t: "Logistics", d: "Fleet Management, Warehouse, Shipment Tracking, Supply Chain." },
  { i: "utensils", t: "Food & Grocery", d: "Food Delivery, Grocery Delivery, Restaurant Management." },
  { i: "book", t: "Education", d: "LMS, School ERP, Student Portals, Online Learning." },
  { i: "home", t: "Real Estate", d: "Property Management, Real Estate CRM, Builder Solutions." },
  { i: "send", t: "Travel & Hospitality", d: "Hotel Booking, Travel Portal, Reservation Systems." },
  { i: "factory", t: "Manufacturing", d: "Production Management, Asset Monitoring, Industrial Automation." },
  { i: "landmark", t: "Government", d: "Workflow Automation, Citizen Services, eGovernance Solutions." },
  { i: "shield", t: "Insurance", d: "Policy Management, Claims Processing, Underwriting Platforms." },
  { i: "rocket", t: "Startups & SaaS", d: "MVP Development, Multi-Tenant Platforms, Subscription Billing." },
];

const TECH: { i: IconName; t: string; items: ReactNode[] }[] = [
  { i: "layout", t: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js"] },
  { i: "server", t: "Backend", items: ["Node.js", "Java", ".NET", "Python", "PHP"] },
  { i: "phone", t: "Mobile", items: [<Link href="/flutter-app-development-company" key="f">Flutter</Link>, <Link href="/react-native-app-development-company" key="r">React Native</Link>, "Android", "iOS"] },
  { i: "cloud", t: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "CI/CD Pipelines"] },
  { i: "database", t: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis"] },
  { i: "cpu", t: "AI & Emerging Technologies", items: ["OpenAI", "LLMs", "RAG", "Machine Learning", "NLP", "Computer Vision"] },
];

const INDUSTRY_CHIPS: { i: IconName; t: string }[] = [
  { i: "flask", t: "Healthcare & Life Sciences" },
  { i: "dollar", t: "Banking & Financial Services" },
  { i: "creditCard", t: "FinTech" },
  { i: "cart", t: "Retail & eCommerce" },
  { i: "factory", t: "Manufacturing" },
  { i: "truck", t: "Logistics & Transportation" },
  { i: "book", t: "Education & EdTech" },
  { i: "send", t: "Travel & Hospitality" },
  { i: "home", t: "Real Estate & Construction" },
  { i: "utensils", t: "Food & Grocery" },
  { i: "shield", t: "Insurance" },
  { i: "landmark", t: "Government & Public Sector" },
  { i: "film", t: "Media & Entertainment" },
  { i: "zap", t: "Energy & Utilities" },
  { i: "rocket", t: "Startups & SaaS Companies" },
];

const CROSS_INDUSTRY: { i: IconName; t: string }[] = [
  { i: "zap", t: "Improve Operational Efficiency" },
  { i: "repeat", t: "Automate Manual Workflows" },
  { i: "message", t: "Enhance Customer Experiences" },
  { i: "barChart", t: "Enable Data-Driven Decision-Making" },
  { i: "trendingUp", t: "Support Business Scalability" },
  { i: "rocket", t: "Accelerate Digital Transformation" },
  { i: "dollar", t: "Reduce Operational Costs" },
  { i: "target", t: "Increase Business Agility" },
];

const PROCESS: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Discovery & Consultation", d: "We understand your business goals, challenges, target audience, and project requirements to define the right technology strategy." },
  { n: "02", t: "Solution Planning", d: "Our experts prepare the project roadmap, define architecture, select the technology stack, and create a scalable development plan." },
  { n: "03", t: "UI/UX Design", d: "We design intuitive user experiences and modern interfaces that improve engagement and usability." },
  { n: "04", t: "Agile Development", d: "Our development teams build secure, scalable, and high-performance software using agile methodologies with regular sprint reviews." },
  { n: "05", t: "Quality Assurance & Testing", d: "Every application undergoes functional, performance, security, usability, and compatibility testing before launch." },
  { n: "06", t: "Deployment & Launch", d: "We deploy applications with minimal downtime while ensuring scalability, security, and reliability." },
  { n: "07", t: "Maintenance & Continuous Improvement", d: "We provide ongoing support, feature enhancements, monitoring, and optimization to keep your software future-ready." },
];

const PROCESS_WHY: { i: IconName; t: string; d: string }[] = [
  { i: "message", t: "Transparent Communication", d: "Throughout the project lifecycle." },
  { i: "zap", t: "Faster Delivery", d: "Through agile development." },
  { i: "checkSquare", t: "Enterprise-Grade QA", d: "Rigorous quality assurance at every stage." },
  { i: "repeat", t: "Continuous Feedback", d: "And improvements throughout delivery." },
  { i: "lock", t: "Secure & Scalable Architecture", d: "Built into every solution." },
  { i: "tool", t: "Long-Term Technical Support", d: "Beyond project delivery." },
];

const ENGAGEMENTS: { i: IconName; t: string; d: string; best: string }[] = [
  { i: "users", t: "Dedicated Development Team", d: "Build your own remote software development team with experienced developers, designers, QA engineers, and project managers working exclusively on your project.", best: "Best For: Long-term projects, product development, enterprise applications, and startups" },
  { i: "userPlus", t: "Team Augmentation", d: "Expand your existing development team with skilled professionals who seamlessly integrate into your workflows and accelerate project delivery.", best: "Best For: Businesses needing additional expertise or faster project execution" },
  { i: "clipboard", t: "Fixed Cost Projects", d: "Ideal for projects with clearly defined requirements, timelines, and deliverables. We provide predictable pricing while maintaining quality and transparency.", best: "Best For: MVPs, websites, mobile apps, and custom software with fixed scope" },
  { i: "clock", t: "Time & Material", d: "A flexible engagement model where development resources are allocated based on evolving project requirements.", best: "Best For: Continuous product development, innovation projects, and evolving business needs" },
];

const WHY_PARTNER: { i: IconName; t: string }[] = [
  { i: "award", t: "14+ Years of Software Development Excellence" },
  { i: "users", t: "500+ Successful Client Engagements" },
  { i: "code", t: "Experienced Architects & Certified Developers" },
  { i: "cpu", t: "AI, Cloud & Enterprise Technology Expertise" },
  { i: "refresh", t: "Agile Development with Transparent Communication" },
  { i: "shield", t: "Secure & Scalable Software Architecture" },
  { i: "grid", t: "Flexible Engagement Models" },
  { i: "tool", t: "Long-Term Maintenance & Technical Support" },
  { i: "target", t: "Customer-Centric Development Approach" },
  { i: "bulb", t: "Focus on Innovation & Business Outcomes" },
  { i: "globe", t: "Global Delivery Standards" },
  { i: "headphones", t: "Responsive Client Support" },
];

const AREAS = ["HITEC City", "Madhapur", "Gachibowli", "Kondapur", "Financial District", "Jubilee Hills", "Banjara Hills", "Kukatpally", "Miyapur", "Secunderabad", "Manikonda", "Kokapet"];

const FAQS: { q: string; a: string }[] = [
  { q: "Why choose mTouch Labs as a Software Development Company in Hyderabad?", a: "mTouch Labs combines over 14 years of software development experience with expertise in AI, enterprise software, SaaS platforms, web applications, and mobile app development. We work closely with startups, SMEs, enterprises, and government organizations to deliver secure, scalable, and business-focused software solutions tailored to their goals." },
  { q: "What software development services do you offer?", a: "We provide end-to-end software development services, including Custom Software Development, Enterprise Software Development, AI & Generative AI Development, SaaS Product Development, Web Application Development, Mobile App Development, Cloud Solutions, API Integration, Legacy Software Modernization, UI/UX Design, DevOps, and ongoing Software Maintenance & Support." },
  { q: "Which industries do you specialize in?", a: "Our team has experience delivering software solutions for Healthcare, FinTech, Banking, Retail & eCommerce, Logistics, Manufacturing, Education, Real Estate, Food & Grocery, Travel & Hospitality, Government, Insurance, Media, and SaaS businesses." },
  { q: "Do you develop custom software for startups and enterprises?", a: "Yes. Whether you're validating an MVP, launching a SaaS product, or modernizing enterprise applications, we build software tailored to your business model, operational workflows, and future growth plans." },
  { q: "What technologies do you use for software development?", a: "We use modern technologies such as React, Next.js, Angular, Node.js, Java, .NET, Python, Flutter, React Native, AWS, Microsoft Azure, Google Cloud Platform, PostgreSQL, MongoDB, OpenAI, and other AI and cloud technologies to build secure and scalable applications." },
  { q: "Can you modernize our existing software application?", a: "Yes. We help businesses modernize legacy applications by improving architecture, redesigning user interfaces, migrating to the cloud, enhancing security, optimizing performance, and integrating modern technologies without disrupting business operations." },
  { q: "Do you provide AI and Generative AI development services?", a: "Yes. We develop AI-powered applications, Generative AI solutions, AI chatbots, intelligent automation, predictive analytics, recommendation engines, AI assistants, and enterprise AI integrations that help businesses improve efficiency and customer engagement." },
  { q: "How do you ensure software quality and security?", a: "Our development process includes code reviews, automated and manual testing, security best practices, performance optimization, and continuous quality assurance throughout the project lifecycle. We also follow secure development practices and recommend appropriate security measures based on your business requirements." },
  { q: "Do you offer dedicated software development teams?", a: "Yes. We provide flexible engagement models, including dedicated development teams, staff augmentation, fixed-price projects, and time & material models, allowing businesses to choose the approach that best fits their project scope and budget." },
  { q: "How long does it take to develop custom software?", a: "The timeline depends on the complexity, features, integrations, and scope of the project. A simple MVP may take a few months, while enterprise-grade platforms typically require a longer phased development approach. After understanding your requirements, we provide a detailed project roadmap and estimated timeline." },
  { q: "Can you integrate third-party APIs and enterprise systems?", a: "Yes. We integrate ERP, CRM, HRMS, payment gateways, cloud platforms, accounting software, communication tools, and other third-party services to create a connected and efficient digital ecosystem." },
  { q: "Do you provide post-launch maintenance and support?", a: "Absolutely. We offer ongoing maintenance, performance monitoring, feature enhancements, security updates, bug fixes, cloud infrastructure support, and technical assistance to ensure your software continues to perform reliably." },
  { q: "Do you work with clients outside Hyderabad and India?", a: "Yes. While our development center is located in Hyderabad, we work with businesses across India and international markets, including the USA, UK, UAE, Canada, Singapore, Australia, and Europe through remote collaboration and agile delivery." },
  { q: "How much does custom software development cost?", a: "The cost depends on factors such as project scope, complexity, technology stack, integrations, development timeline, and engagement model. We provide customized estimates after understanding your business requirements and project objectives." },
  { q: "How can I get started with mTouch Labs?", a: "Getting started is simple. Contact our team to schedule a free consultation. We'll discuss your business goals, understand your project requirements, recommend the right technology approach, and provide a transparent roadmap for development." },
];

/* ════════════════════════════════════════════════════════════
   STYLES
   ════════════════════════════════════════════════════════════ */
const LOC_CSS = `
.loc-page{--ink:var(--color-carbon-black,#0D1117);--ink-soft:var(--color-text,#222222);--ink-faint:var(--color-slate-grey,#777777);--bg:#FFFFFF;--bg-alt:rgba(62,140,251,.05);--line:rgba(62,140,251,.22);--a1:var(--color-signature-blue,#3E8CFB);--a2:var(--color-signature-blue,#3E8CFB);--grad:#3E8CFB;--tile:rgba(62,140,251,.10);--sh:0 1px 2px rgba(15,23,42,.04),0 8px 24px rgba(15,23,42,.05);--sh-h:0 6px 14px rgba(15,23,42,.06),0 22px 44px rgba(62,140,251,.13);--ease:cubic-bezier(.22,.61,.36,1);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--ink);background:var(--bg);line-height:1.65;-webkit-font-smoothing:antialiased}
.loc-page *{box-sizing:border-box}
.loc-page a{color:var(--a1);text-decoration:none;font-weight:600;transition:color .15s ease}
.loc-page a:hover{color:var(--a2)}
.loc-page :focus-visible{outline:2px solid var(--a1);outline-offset:3px;border-radius:8px}
.loc-icon{display:block;flex-shrink:0}

/* ── section shell ── */
.loc-section{padding:4.75rem 1.5rem}
.loc-introSection,.loc-whySection{background:var(--bg-alt)}
.loc-servicesSection,.loc-industriesSection,.loc-processSection,.loc-faqSection{background:var(--bg)}
.loc-sectionInner{max-width:1160px;margin:0 auto}
.loc-sectionHeader{text-align:center;max-width:820px;margin:0 auto 3rem}
.loc-sectionTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.6rem,2.6vw,2.4rem);font-weight:700;line-height:1.22;color:var(--ink);margin:0 0 .9rem;letter-spacing:-.022em}
.loc-highlight{background:var(--grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:locShift 9s ease-in-out infinite}
.loc-sectionDesc{font-size:1.04rem;color:var(--ink-soft);line-height:1.78;margin:0 auto;max-width:820px;text-align:center}
.loc-sectionDesc.loc-descStandalone{margin-top:2.25rem;padding-top:1.75rem;border-top:1px dashed var(--line)}

/* ── intro grid ── */
.loc-introGrid{display:grid;grid-template-columns:1.6fr 1fr;gap:3rem;align-items:start}
.loc-introTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.38rem,2.2vw,1.95rem);font-weight:700;color:var(--ink);margin:0 0 1.1rem;letter-spacing:-.02em}
.loc-introText{font-size:1.02rem;color:var(--ink-soft);margin:0 0 1.05rem;line-height:1.82}
.loc-introText:last-child{margin-bottom:0}
.loc-introText strong{color:var(--ink);font-weight:600}
.loc-introTags{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 1.4rem}
.loc-introTag{display:inline-flex;align-items:center;padding:.42rem .9rem;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.83rem;font-weight:600;color:var(--a1);white-space:nowrap;transition:transform .2s var(--ease),border-color .2s,box-shadow .2s}
.loc-introTag:hover{transform:translateY(-2px);border-color:rgba(62,140,251,.45);box-shadow:0 6px 14px rgba(62,140,251,.1)}
.loc-introTag a{color:inherit}
.loc-introTag a:hover{color:var(--a2)}

/* ── icon tiles ── */
.loc-tile{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:var(--tile);border:1px solid rgba(62,140,251,.22);color:var(--a1);margin-bottom:1.05rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease),box-shadow .3s}
.loc-tile--sm{width:44px;height:44px;border-radius:13px;margin-bottom:0;flex-shrink:0}
.loc-tile--round{width:54px;height:54px;border-radius:50%;margin:0 auto .85rem}
.loc-serviceCard:hover .loc-tile,.loc-whyCard:hover .loc-tile,.loc-industryCard:hover .loc-tile{background:var(--grad);border-color:transparent;color:#fff;transform:translateY(-2px) rotate(-5deg) scale(1.06);box-shadow:0 10px 20px rgba(62,140,251,.26)}

/* ── stat cards ── */
.loc-introStats{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;align-content:start}
.loc-statCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem .9rem;text-align:center;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-statCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-statIcon{width:36px;height:36px;margin:0 auto .55rem;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-statCard:hover .loc-statIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-statNum{font-family:'Sora','Inter',sans-serif;font-size:1.5rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.15}
.loc-statLabel{margin-top:.25rem;font-size:.8rem;font-weight:600;color:var(--ink-soft);line-height:1.4}

/* ── card grids ── */
.loc-servicesGrid,.loc-whyGrid,.loc-industriesGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;align-items:stretch}
.loc-serviceCard,.loc-whyCard,.loc-industryCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.7rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s;display:flex;flex-direction:column;height:100%;overflow:hidden}
.loc-serviceCard::after,.loc-whyCard::after,.loc-industryCard::after{content:'';position:absolute;inset:0 0 auto 0;height:3px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease)}
.loc-serviceCard:hover::after,.loc-whyCard:hover::after,.loc-industryCard:hover::after{transform:scaleX(1)}
.loc-serviceCard:hover,.loc-whyCard:hover,.loc-industryCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-serviceTitle{font-size:1.06rem;font-weight:700;color:var(--ink);margin:0 0 .5rem;line-height:1.4}
.loc-serviceTitle a{color:var(--ink)}
.loc-serviceTitle a:hover{color:var(--a1)}
.loc-serviceDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.68;margin:0;flex-grow:1}
.loc-whyCard{flex-direction:row;align-items:flex-start;gap:1rem}
.loc-whyTitle{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .28rem;line-height:1.4}
.loc-whyText{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.62}
.loc-whyCard .loc-introTags{margin:.6rem 0 0}
.loc-whyCard .loc-introTag{font-size:.74rem;padding:.28rem .65rem}
.loc-industryCard{align-items:center;text-align:center}
.loc-industryName{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.loc-industryCard .loc-serviceDesc{text-align:center;flex-grow:0}

/* ── chips ── */
.loc-chipGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:.85rem}
.loc-chipCard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.05rem .7rem;text-align:center;font-size:.84rem;font-weight:600;color:var(--ink);box-shadow:var(--sh);display:flex;flex-direction:column;align-items:center;gap:.5rem;line-height:1.4;transition:transform .25s var(--ease),box-shadow .25s,color .25s,border-color .25s}
.loc-chipIcon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-chipCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-chipCard:hover .loc-chipIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}

/* ── detail cards ── */
.loc-detailGrid{display:grid;grid-template-columns:1fr;gap:1.4rem}
.loc-detailCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem 2.1rem;box-shadow:var(--sh);overflow:hidden;transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-detailCard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--grad);opacity:.85;transform:scaleY(.4);transform-origin:top;transition:transform .45s var(--ease)}
.loc-detailCard:hover::before{transform:scaleY(1)}
.loc-detailCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-detailHead{display:flex;align-items:center;gap:.9rem;margin-bottom:.85rem}
.loc-detailNum{flex-shrink:0;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:.9rem;transition:background .3s var(--ease),color .3s}
.loc-detailCard:hover .loc-detailNum{background:var(--grad);color:#fff}
.loc-detailTitle{font-family:'Sora','Inter',sans-serif;font-size:1.18rem;font-weight:700;color:var(--ink);margin:0;letter-spacing:-.01em}
.loc-detailTitle a{color:var(--ink)}
.loc-detailTitle a:hover{color:var(--a1)}
.loc-detailDesc{font-size:.95rem;color:var(--ink-soft);line-height:1.78;margin:0 0 1.1rem}
.loc-detailBlock{margin-bottom:.9rem}
.loc-detailBlock:last-child{margin-bottom:0}
.loc-detailLabel{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--a1);margin:0 0 .55rem}
.loc-detailTagRow{display:flex;flex-wrap:wrap;gap:.45rem}
.loc-detailTag{display:inline-flex;align-items:center;padding:.38rem .8rem;background:var(--bg-alt);border:1px solid var(--line);border-radius:999px;font-size:.79rem;font-weight:600;color:var(--ink-soft);transition:background .2s,color .2s,border-color .2s,transform .2s var(--ease)}
.loc-detailTag:hover{background:#fff;color:var(--a1);border-color:rgba(62,140,251,.45);transform:translateY(-2px)}
.loc-detailBenefits{display:flex;flex-wrap:wrap;gap:.5rem 1.2rem}
.loc-detailBenefit{display:inline-flex;align-items:center;gap:.45rem;font-size:.85rem;font-weight:600;color:var(--ink)}
.loc-checkMark{display:inline-flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#DCFCE7;color:#16A34A;flex-shrink:0}

/* ── timeline ── */
.loc-timeline{position:relative;max-width:800px;margin:0 auto}
.loc-timeline::before{content:'';position:absolute;left:27px;top:10px;bottom:10px;width:2px;background:linear-gradient(180deg,#3E8CFB,#3E8CFB,rgba(62,140,251,.18))}
.loc-timelineItem{position:relative;display:flex;gap:1.4rem;padding-bottom:2rem}
.loc-timelineItem:last-child{padding-bottom:0}
.loc-timelineDot{position:relative;z-index:1;flex-shrink:0;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--grad);color:#fff;font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:1.05rem;box-shadow:0 6px 16px rgba(62,140,251,.28)}
.loc-timelineDot::after{content:'';position:absolute;inset:-6px;border-radius:50%;border:1.5px solid rgba(62,140,251,.45);opacity:0;transform:scale(.85);transition:opacity .35s,transform .35s var(--ease)}
.loc-timelineItem:hover .loc-timelineDot::after{opacity:1;transform:scale(1)}
.loc-timelineBody{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem 1.55rem;flex:1;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-timelineItem:hover .loc-timelineBody{transform:translateX(5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-timelineTitle{font-size:1.04rem;font-weight:700;color:var(--ink);margin:0 0 .35rem}
.loc-timelineDesc{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.68}

/* ── engagement cards ── */
.loc-engageGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem}
.loc-engageCard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-engageCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-engageIcon{width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;background:var(--grad);color:#fff;border-radius:15px;margin-bottom:1.05rem;box-shadow:0 8px 18px rgba(62,140,251,.24);transition:transform .35s var(--ease)}
.loc-engageCard:hover .loc-engageIcon{transform:rotate(-6deg) scale(1.06)}
.loc-engageTitle{font-family:'Sora','Inter',sans-serif;font-size:1.1rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.loc-engageDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.72;margin:0 0 1rem}
.loc-engageBest{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:700;color:var(--a1);background:var(--bg-alt);padding:.5rem .9rem;border-radius:10px}

/* ── contact rows / office ── */
.loc-contactRow{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--ink-soft);margin:0 0 .75rem;line-height:1.7}
.loc-contactRow span.loc-ci{color:var(--a1);margin-top:.22rem}
.loc-contactRow strong{color:var(--ink)}
.loc-officeRightCol{display:flex;flex-direction:column;height:100%;gap:1.1rem}
.loc-mapWrap{position:relative;flex:1;min-height:240px;border-radius:16px;overflow:hidden;box-shadow:var(--sh);border:1px solid var(--line)}
.loc-mapFrame{width:100%;height:100%;border:0;display:block;filter:saturate(.9)}
.loc-mapOverlay{position:absolute;inset:0;background:transparent;transition:background .25s}
.loc-mapOverlay:hover{background:rgba(62,140,251,.06)}
.loc-mapBadge{position:absolute;bottom:12px;left:12px;display:inline-flex;align-items:center;gap:.4rem;background:#fff;padding:.5rem .9rem;border-radius:999px;font-size:.78rem;font-weight:700;color:var(--a1);box-shadow:var(--sh);pointer-events:none}

/* ── breadcrumb ── */
.loc-breadcrumb{max-width:1160px;margin:0 auto;padding:1.1rem 1.5rem 0;display:flex;align-items:center;flex-wrap:wrap;gap:.4rem;font-size:.85rem}
.loc-breadcrumb a{color:var(--ink-soft);font-weight:500}
.loc-breadcrumb a:hover{color:var(--a1)}
.loc-breadcrumbSep{color:var(--ink-faint)}
.loc-breadcrumbCurrent{color:var(--ink);font-weight:600}

/* ── FAQ ── */
.loc-faqList{display:flex;flex-direction:column;gap:.7rem;max-width:880px;margin:0 auto}
.loc-faqItem{background:var(--bg-alt);border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:border-color .25s,box-shadow .25s,background .25s}
.loc-faqItem:hover{border-color:rgba(62,140,251,.45)}
.loc-faqItem[open]{background:#fff;box-shadow:var(--sh);border-color:rgba(62,140,251,.45)}
.loc-faqQuestion{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 1.35rem;cursor:pointer;list-style:none;font-weight:600;color:var(--ink);font-size:.97rem}
.loc-faqQuestion::-webkit-details-marker{display:none}
.loc-faqChevron{flex-shrink:0;display:flex;color:var(--a1);transition:transform .3s var(--ease)}
.loc-faqItem[open] .loc-faqChevron{transform:rotate(180deg)}
.loc-faqAnswer{padding:0 1.35rem 1.25rem;font-size:.92rem;color:var(--ink-soft);line-height:1.75}

/* ── CTA ── */
.loc-ctaSection{position:relative;background:var(--grad);padding:4.25rem 1.5rem;overflow:hidden}
.loc-ctaSection::before,.loc-ctaSection::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 70%);pointer-events:none}
.loc-ctaSection::before{top:-220px;left:-140px;animation:locFloat 16s ease-in-out infinite}
.loc-ctaSection::after{bottom:-260px;right:-120px;animation:locFloat 20s ease-in-out infinite reverse}
.loc-ctaInner{position:relative;max-width:800px;margin:0 auto;text-align:center}
.loc-ctaTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.5rem,2.4vw,2.05rem);font-weight:700;color:#fff;margin:0 0 1rem;letter-spacing:-.02em}
.loc-ctaDesc{font-size:1rem;color:rgba(255,255,255,.92);line-height:1.78;margin:0 0 2rem}
.loc-ctaActions{display:flex;flex-wrap:wrap;gap:.85rem;justify-content:center}
.loc-ctaBtnPrimary,.loc-ctaBtnSecondary{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.9rem 1.8rem;border-radius:999px;font-weight:700;font-size:.95rem;overflow:hidden}
.loc-ctaBtnPrimary{background:#fff;color:var(--a1)!important;transition:transform .2s var(--ease),box-shadow .2s}
.loc-ctaBtnPrimary::after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(62,140,251,.14) 50%,transparent 65%);transform:translateX(-130%);transition:transform .7s var(--ease)}
.loc-ctaBtnPrimary:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,.2)}
.loc-ctaBtnPrimary:hover::after{transform:translateX(130%)}
.loc-ctaBtnSecondary{background:transparent;color:#fff!important;border:1.5px solid rgba(255,255,255,.6);transition:background .2s,transform .2s var(--ease),border-color .2s}
.loc-ctaBtnSecondary:hover{background:rgba(255,255,255,.14);border-color:#fff;transform:translateY(-2px)}

/* ── motion ── */
@keyframes locFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes locShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes locFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(46px,34px)}}
.loc-sectionHeader,.loc-statCard,.loc-serviceCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation:locFadeUp .65s var(--ease) both}
@supports (animation-timeline:view()){
  .loc-sectionHeader,.loc-statCard,.loc-serviceCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation-timeline:view();animation-range:entry 0% cover 16%}
}
@supports (interpolate-size:allow-keywords){
  .loc-page{interpolate-size:allow-keywords}
  .loc-faqItem::details-content{block-size:0;overflow:hidden;transition:block-size .32s var(--ease),content-visibility .32s allow-discrete}
  .loc-faqItem[open]::details-content{block-size:auto}
}
@media (prefers-reduced-motion:reduce){
  .loc-page *,.loc-page *::before,.loc-page *::after{animation:none!important;transition:none!important}
}

/* ── responsive ── */
@media (max-width:980px){
  .loc-servicesGrid,.loc-whyGrid,.loc-industriesGrid{grid-template-columns:repeat(2,1fr)}
  .loc-introGrid{grid-template-columns:1fr;gap:2rem}
  .loc-introStats{grid-template-columns:repeat(4,1fr)}
  .loc-engageGrid{grid-template-columns:1fr}
  .loc-chipGrid{grid-template-columns:repeat(3,1fr)}
}
@media (max-width:640px){
  .loc-section{padding:3rem 1.15rem}
  .loc-detailCard{padding:1.5rem 1.35rem}
  .loc-chipGrid{grid-template-columns:repeat(2,1fr)}
  .loc-timeline::before{left:22px}
  .loc-timelineDot{width:44px;height:44px;font-size:.95rem}
  .loc-timelineItem{gap:.95rem}
  .loc-servicesGrid,.loc-whyGrid,.loc-industriesGrid{grid-template-columns:1fr}
  .loc-introStats{grid-template-columns:repeat(2,1fr)}
  .loc-ctaActions{flex-direction:column;align-items:stretch}
}
`;

/* ════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════ */
export default function SoftwareDevelopmentCompanyHyderabad() {
  return (
    <div className="loc-page">
      {/* Fonts (Inter + Sora) are requested once in app/layout.tsx.
          A body-level <link> here added a third render-blocking
          stylesheet on an origin the layout already preconnects to. */}
      <style>{LOC_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ BREADCRUMB ═══ */}
      <nav className="loc-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="loc-breadcrumbSep">/</span>
        <Link href="/services">Services</Link>
        <span className="loc-breadcrumbSep">/</span>
        <span className="loc-breadcrumbCurrent">Software Development Company in Hyderabad</span>
      </nav>

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · Hyderabad"
        titleLead="Software Development Company in"
        titleAccent="Hyderabad"
        description={<>Build Intelligent Software Solutions That Drive Business Growth — for startups, SMEs, enterprises, and government organizations across India&apos;s fastest-growing technology hub.</>}
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Build Intelligent Software Solutions That Drive Business Growth</h2>
              <p className="loc-introText">Technology is reshaping the way businesses operate, compete, and grow. From startups building their first digital product to enterprises modernizing legacy systems, organizations need software that is secure, scalable, and designed for long-term success. Choosing the right software development partner is not just about writing code — it&apos;s about building technology that solves business challenges, improves efficiency, and creates measurable value.</p>
              <p className="loc-introText">mTouch Labs is a leading <strong>Software Development Company in Hyderabad</strong>, helping startups, SMEs, enterprises, and government organizations transform ideas into innovative digital solutions. With over 14 years of experience, 500+ global clients, and expertise across <Link href="/custom-software-development-company">Custom Software Development</Link>, <Link href="/generative-ai-development-company">AI</Link>, Enterprise Applications, SaaS, <Link href="/web-development-company">Web Development</Link>, <Link href="/mobile-app-development-company">Mobile Apps</Link>, Cloud Solutions, and Digital Transformation, we deliver technology that empowers businesses to innovate with confidence.</p>
              <p className="loc-introText">From strategy and architecture to development, deployment, and long-term support, our experienced team works closely with clients to build software that aligns with their business goals, accelerates growth, and adapts to future demands. You can browse our <Link href="/portfolio">product portfolio</Link> and read detailed <Link href="/case-studies">client case studies</Link> to see how we approach delivery.</p>
              <div className="loc-introTags">
                {["HITEC City", "Gachibowli", "Madhapur", "Kondapur", "Financial District"].map((a) => <span className="loc-introTag" key={a}>{a}</span>)}
              </div>
            </div>
            <div className="loc-introStats">
              {INTRO_STATS.map((s) => <Stat key={s.l} {...s} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY BUSINESSES CHOOSE MTOUCH LABS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Businesses Choose <span className="loc-highlight">mTouch Labs</span></h2>
            <p className="loc-sectionDesc">Businesses choose mTouch Labs because we combine technical excellence with a deep understanding of business challenges. Every solution is designed to deliver measurable outcomes while maintaining the highest standards of quality, security, and scalability.</p>
          </div>
          <div className="loc-whyGrid">{WHY_CHOOSE.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ WHY HYDERABAD ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Why Hyderabad Is a Leading Software Development Destination</h2>
              <p className="loc-introText">Hyderabad has earned its reputation as one of India&apos;s premier technology hubs, bringing together global enterprises, innovative startups, research institutions, and a highly skilled engineering workforce. The city&apos;s strong IT infrastructure, vibrant startup ecosystem, and access to world-class talent make it an ideal destination for businesses seeking reliable software development services.</p>
              <p className="loc-introText">As home to HITEC City, the Financial District, and numerous Global Capability Centers (GCCs), Hyderabad continues to drive innovation across Artificial Intelligence, Cloud Computing, FinTech, Healthcare, Cybersecurity, and Enterprise Software. This thriving ecosystem enables companies to accelerate digital transformation while benefiting from experienced engineering talent and modern development practices.</p>
              <p className="loc-introText">By partnering with mTouch Labs, businesses gain the advantage of Hyderabad&apos;s technology ecosystem combined with global delivery standards, enabling faster innovation, cost-effective development, and high-quality software solutions.</p>
            </div>
            <div className="loc-introStats">{HYD_STATS.map((s) => <Stat key={s.l} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ WHY INVEST IN CUSTOM SOFTWARE ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Invest in <span className="loc-highlight">Custom Software Development?</span></h2>
            <p className="loc-sectionDesc">Off-the-shelf software can solve common business needs, but growing organizations often require solutions that align with their unique workflows, operational goals, and customer expectations. Custom software provides the flexibility to build exactly what your business needs — without the limitations of generic platforms. At mTouch Labs, we develop custom software that helps businesses automate processes, improve collaboration, integrate existing systems, and create exceptional digital experiences.</p>
          </div>
          <div className="loc-whyGrid">{CUSTOM_VALUE.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ TRUSTED PARTNER ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Your Trusted Software Development Partner</h2>
              <p className="loc-introText">Successful software projects require more than technical expertise — they require a partner who understands your business objectives and is committed to delivering measurable results. At mTouch Labs, we combine business consulting, modern engineering practices, and agile development methodologies to build software that supports innovation and sustainable growth.</p>
              <p className="loc-introText">Whether you&apos;re developing a new SaaS platform, modernizing enterprise applications, launching a mobile app, or integrating AI into your business, our team works as an extension of your organization to deliver secure, scalable, and future-ready solutions.</p>
              <p className="loc-introText">We focus on building long-term partnerships by delivering high-quality software, transparent communication, and continuous support throughout your digital transformation journey.</p>
            </div>
            <div className="loc-introStats">{PARTNER_STATS.map((s) => <Stat key={s.l} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ COMPREHENSIVE SERVICES INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Comprehensive Software Development Services in Hyderabad</h2>
              <p className="loc-introText">Every business has unique goals, operational challenges, and technology requirements. At mTouch Labs, we provide end-to-end software development services that help startups, SMEs, enterprises, and government organizations build secure, scalable, and future-ready digital solutions.</p>
              <p className="loc-introText">From custom business applications and enterprise platforms to AI-powered software and cloud-native products, our experienced team delivers solutions that improve efficiency, automate workflows, and accelerate digital transformation.</p>
              <p className="loc-introText">Whether you&apos;re launching a new product, modernizing legacy systems, or expanding your digital ecosystem, we combine business expertise with modern technologies to build software that delivers measurable business outcomes.</p>
            </div>
            <div className="loc-introStats">{SERVICES_STATS.map((s) => <Stat key={s.l} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Services in <span className="loc-highlight">Hyderabad</span></h2>
            <p className="loc-sectionDesc">End-to-end software development services tailored for Hyderabad businesses.</p>
          </div>
          <div className="loc-servicesGrid">{SERVICES.map((s) => <Svc key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ SERVICES IN DETAIL ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Software Development Services — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">Every service below is built around the solutions our clients ask for most, with the specific business benefits it delivers.</p>
          </div>
          <div className="loc-detailGrid">{SERVICE_DETAILS.map((d) => <Detail key={d.t} {...d} />)}</div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE OUR SERVICES ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Choose Our <span className="loc-highlight">Software Development Services?</span></h2>
            <p className="loc-sectionDesc">Choosing the right technology partner is essential for building software that delivers measurable business value. At mTouch Labs, we focus on understanding your business objectives before recommending the right technologies, architecture, and development approach. What you can expect:</p>
          </div>
          <div className="loc-whyGrid">{WHY_SERVICES.map((w) => <Why key={w.t} {...w} />)}</div>
          <p className="loc-sectionDesc loc-descStandalone">Whether you&apos;re building a startup MVP, enterprise software, AI-powered platform, SaaS product, or customer-facing application, our team delivers technology solutions that are secure, scalable, and built for long-term success.</p>
        </div>
      </section>

      {/* ═══ SOLUTIONS WE BUILD ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Solutions We <span className="loc-highlight">Build</span></h2>
            <p className="loc-sectionDesc">At mTouch Labs, we develop custom software solutions that solve real business challenges, streamline operations, and create exceptional digital experiences. Every solution is designed around your business goals, industry requirements, and future growth strategy.</p>
          </div>
          <div className="loc-servicesGrid">{SOLUTIONS.map((s) => <Svc key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ SOLUTIONS IN DETAIL ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Solutions We Build — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">A closer look at what goes into each solution category we build for Hyderabad businesses.</p>
          </div>
          <div className="loc-detailGrid">{SOLUTION_DETAILS.map((d) => <Detail key={d.t} {...d} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Businesses Choose <span className="loc-highlight">mTouch Labs</span></h2>
          </div>
          <div className="loc-whyGrid">{WHY_US.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRY-SPECIFIC SOLUTIONS ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industry-Specific Software <span className="loc-highlight">Solutions</span></h2>
            <p className="loc-sectionDesc">We build tailored applications for businesses across multiple industries.</p>
          </div>
          <div className="loc-industriesGrid">{INDUSTRIES.map((x) => <Industry key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Technologies That Power Our <span className="loc-highlight">Solutions</span></h2>
            <p className="loc-sectionDesc">Choosing the right technology is critical for building secure, scalable, and future-ready applications. Our development teams leverage modern frameworks, cloud platforms, and AI technologies to create high-performance digital solutions.</p>
          </div>
          <div className="loc-whyGrid">{TECH.map((t) => <Tech key={t.t} {...t} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES WE SERVE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We <span className="loc-highlight">Serve</span></h2>
            <p className="loc-sectionDesc">Every industry has unique business processes, compliance requirements, and customer expectations. Our team combines domain expertise with modern technology to build software that addresses real-world business challenges and delivers measurable outcomes. We proudly work with:</p>
          </div>
          <div className="loc-chipGrid">{INDUSTRY_CHIPS.map((c) => <Chip key={c.t} {...c} />)}</div>
          <p className="loc-sectionDesc loc-descStandalone">Regardless of your industry, we develop software that improves operational efficiency, enhances customer engagement, and supports sustainable business growth.</p>
        </div>
      </section>

      {/* ═══ WHY ACROSS INDUSTRIES ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Businesses Across Industries Choose <span className="loc-highlight">mTouch Labs</span></h2>
            <p className="loc-sectionDesc">Businesses choose mTouch Labs because we combine industry knowledge with technical expertise to build software that solves practical business challenges — not just technical requirements. Our solutions are designed to:</p>
          </div>
          <div className="loc-whyGrid">{CROSS_INDUSTRY.map((w) => <Why key={w.t} {...w} />)}</div>
          <p className="loc-sectionDesc loc-descStandalone">Whether you&apos;re launching a new digital product, modernizing legacy systems, or building enterprise software, our team delivers solutions that are secure, scalable, and built for long-term success.</p>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Software Development <span className="loc-highlight">Process</span></h2>
            <p className="loc-sectionDesc">Building successful software requires more than technical expertise — it requires a structured approach that minimizes risks, ensures transparency, and delivers measurable business outcomes. We follow an agile process that keeps clients involved throughout every stage of the project.</p>
          </div>
          <div className="loc-timeline">{PROCESS.map((p) => <Step key={p.n} {...p} />)}</div>
        </div>
      </section>

      {/* ═══ WHY OUR PROCESS WORKS ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader"><h2 className="loc-sectionTitle">Why Our Process Works</h2></div>
          <div className="loc-whyGrid">{PROCESS_WHY.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Flexible <span className="loc-highlight">Engagement Models</span></h2>
            <p className="loc-sectionDesc">Every business has different project requirements, budgets, and timelines. To support organizations of all sizes, mTouch Labs offers flexible engagement models that align with your business objectives and development strategy.</p>
          </div>
          <div className="loc-engageGrid">{ENGAGEMENTS.map((e) => <Engage key={e.t} {...e} />)}</div>
        </div>
      </section>

      {/* ═══ WHY PARTNER ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Partner with <span className="loc-highlight">mTouch Labs?</span></h2>
            <p className="loc-sectionDesc">Choosing the right software development partner goes beyond technical capabilities. It requires a team that understands your business, embraces innovation, and remains committed to your long-term success. See our <Link href="/clutch">Clutch profile</Link> and <Link href="/nasscom-membership">NASSCOM membership</Link> for independent context on who we are.</p>
          </div>
          <div className="loc-whyGrid">{WHY_PARTNER.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ OFFICE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid" style={{ alignItems: "stretch" }}>
            <div>
              <h2 className="loc-introTitle">Visit Our Hyderabad Office</h2>
              <p className="loc-introText">Looking for a reliable software development company in Hyderabad? Meet our experts to discuss your project requirements, digital transformation initiatives, or product ideas. Whether you&apos;re planning a custom software application, AI-powered solution, enterprise platform, SaaS product, or mobile application, our consultants are ready to help you identify the right technology strategy for your business.</p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mapPin" size={18} /></span><span><strong>mTouch Labs Pvt. Ltd.</strong> — Manjeera Trinity Corporate, 514, JNTU - Hitech City Rd, Kukatpally Housing Board Colony, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072</span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="phoneCall" size={18} /></span><span><a href="tel:+919390683154">+91 9390683154</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mail" size={18} /></span><span><a href="mailto:contact@mtouchlabs.com">contact@mtouchlabs.com</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="clock" size={18} /></span><span>Monday – Friday | 9:30 AM – 6:30 PM</span></p>
              <p className="loc-introText">We also support teams elsewhere in the country — see our <Link href="/software-development-company-india">nationwide delivery overview</Link>, or the <Link href="/software-development-company-bangalore">Bangalore</Link> and <Link href="/software-development-company-chennai">Chennai</Link> pages.</p>
              <p className="loc-introText"><strong>Serving businesses across:</strong></p>
              <div className="loc-introTags">{AREAS.map((a) => <span className="loc-introTag" key={a}>{a}</span>)}</div>
            </div>
            <div className="loc-officeRightCol">
              <div className="loc-introStats">
                <Stat i="mapPin" n="12+" l="Areas Served" />
                <Stat i="clock" n="Mon–Fri" l="9:30 AM – 6:30 PM" />
                <Stat i="building" l="HITEC City HQ" />
                <Stat i="message" l="Free Consultation" />
              </div>
              <div className="loc-mapWrap">
                <iframe
                  className="loc-mapFrame"
                  src="https://www.google.com/maps?q=Manjeera+Trinity+Corporate+JNTU+Hitech+City+Rd+Kukatpally+Hyderabad+Telangana+500072&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="mTouch Labs Hyderabad Office Location"
                />
                <a href="https://maps.app.goo.gl/vHVVC1vzkR2hS7Ek7" target="_blank" rel="noopener noreferrer" className="loc-mapOverlay" aria-label="Open mTouch Labs Hyderabad office in Google Maps" />
                <span className="loc-mapBadge"><Icon name="mapPin" size={14} />Get Directions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader"><h2 className="loc-sectionTitle">Frequently Asked Questions</h2></div>
          <div className="loc-faqList">{FAQS.map((f) => <Faq key={f.q} {...f} />)}</div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Transform Your Business with Custom Software?</h2>
          <p className="loc-ctaDesc">Partner with mTouch Labs, a trusted Software Development Company in Hyderabad, to build innovative software solutions tailored to your business goals. From idea validation to deployment and ongoing support, we help organizations develop technology that delivers real business value.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary"><Icon name="phoneCall" size={17} />Schedule a Free Consultation</Link>
            <Link href="/contact-us" className="loc-ctaBtnSecondary">Request a Free Quote</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
    </div>
  );
}