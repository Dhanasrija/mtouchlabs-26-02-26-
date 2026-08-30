import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import ServiceHero from "@/components/sections/ServiceHero";

/* ════════════════════════════════════════════════════════════
   SHARED CONSTANTS — single source of truth for the numbers.
   Anything quoted more than once on the page comes from here so
   it can never drift between sections.
   ════════════════════════════════════════════════════════════ */
const FACTS = {
  years: "14+",
  clients: "500+",
  phoneDisplay: "+1 (551) 222-0070",
  phoneHref: "tel:+15512220070",
  email: "contact@mtouchlabs.com",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM EST",
  street: "1111B South Governors Avenue, Suite 48193",
  city: "Dover",
  region: "DE",
  zip: "19904",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mtouchlabs.com"),
  // `absolute` prevents the root layout's "%s | mTouch Labs" template from
  // appending the brand a second time (the live page rendered it twice).
  title: {
    absolute: "Software Development Company in USA | mTouch Labs",
  },
  description:
    "Software development company in the USA building custom software, AI applications, SaaS platforms, enterprise systems and mobile apps. Dover, DE office. 14+ years, 500+ clients.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-usa",
  },
  openGraph: {
    title: "Software Development Company in USA | mTouch Labs",
    description:
      "Custom software, AI, SaaS and enterprise development for US businesses. Fixed-scope, dedicated team or staff augmentation.",
    url: "https://www.mtouchlabs.com/software-development-company-usa",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og/software-development-company-usa.webp",
        width: 1200,
        height: 630,
        alt: "mTouch Labs — Software Development Company in USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in USA | mTouch Labs",
    description:
      "Custom software, AI, SaaS and enterprise development for US businesses.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  authors: [{ name: "mTouch Labs", url: "https://www.mtouchlabs.com" }],
  creator: "mTouch Labs",
  publisher: "mTouch Labs",
};

/* ── STRUCTURED DATA ───────────────────────────────────────── */
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "mTouch Labs — US Operations",
  url: "https://www.mtouchlabs.com/software-development-company-usa",
  description:
    "Custom software, enterprise applications, SaaS platforms, AI solutions and cloud engineering for businesses across the United States.",
  image: "https://www.mtouchlabs.com/images/og/software-development-company-usa.webp",
  priceRange: "$$",
  parentOrganization: {
    "@type": "Organization",
    name: "mTouch Labs Pvt. Ltd.",
    url: "https://www.mtouchlabs.com",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: FACTS.street,
    addressLocality: FACTS.city,
    addressRegion: FACTS.region,
    postalCode: FACTS.zip,
    addressCountry: "US",
  },
  telephone: "+1-551-222-0070",
  email: FACTS.email,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  areaServed: { "@type": "Country", name: "United States" },
  sameAs: [
    "https://www.linkedin.com/company/mtouchlabs/",
    "https://twitter.com/mtouchlabs",
  ],
};

const locationBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com/" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.mtouchlabs.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Software Development Company in USA",
      item: "https://www.mtouchlabs.com/software-development-company-usa",
    },
  ],
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
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.6 8.4-2 5.2-5.2 2 2-5.2Z" /></>,
  cpu: <><rect x="6.5" y="6.5" width="11" height="11" rx="2.5" /><rect x="10" y="10" width="4" height="4" rx="1" /><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" /></>,
  creditCard: <><rect x="2" y="4.5" width="20" height="15" rx="2.5" /><path d="M2 9.5h20" /><path d="M6 15h3" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" /><path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" /></>,
  dollar: <><path d="M12 2.5v19" /><path d="M16.8 6.2H9.6a3.4 3.4 0 0 0 0 6.8h4.8a3.4 3.4 0 0 1 0 6.8H6.6" /></>,
  edit: <><path d="M12.5 20.5h9" /><path d="M16.8 3.3a2.15 2.15 0 0 1 3 3L7.5 18.6l-4 1 1-4Z" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3.2" /></>,
  factory: <><path d="M2.5 20.5V9.6l6 3.9V9.6l6 3.9V4.5h6.9v16Z" /><path d="M2 20.5h20" /><path d="M17.5 8.5v3M17.5 15v2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14.5 14.5 0 0 1 3.8 9A14.5 14.5 0 0 1 12 21a14.5 14.5 0 0 1-3.8-9A14.5 14.5 0 0 1 12 3Z" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></>,
  headphones: <><path d="M3.5 17.5V12a8.5 8.5 0 0 1 17 0v5.5" /><path d="M20.5 18.5a2 2 0 0 1-2 2h-.5a1.8 1.8 0 0 1-1.8-1.8v-3a1.8 1.8 0 0 1 1.8-1.8h2.5Z" /><path d="M3.5 18.5a2 2 0 0 0 2 2H6a1.8 1.8 0 0 0 1.8-1.8v-3A1.8 1.8 0 0 0 6 13.9H3.5Z" /></>,
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
  truck: <><path d="M2.5 5.5h11v11h-11z" /><path d="M13.5 9h3.4l3.1 3v4.5h-6.5Z" /><circle cx="7" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></>,
  users: <><path d="M16.5 20.5v-1.8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.8" /><circle cx="9.2" cy="7.5" r="3.8" /><path d="M22 20.5v-1.8a4 4 0 0 0-3-3.85" /><path d="M15.5 3.9a4 4 0 0 1 0 7.4" /></>,
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

const Why = ({ i, t, d }: { i: IconName; t: string; d?: ReactNode }) => (
  <div className="loc-whyCard">
    <span className="loc-tile loc-tile--sm"><Icon name={i} size={20} /></span>
    <div><h3 className="loc-whyTitle">{t}</h3>{d ? <p className="loc-whyText">{d}</p> : null}</div>
  </div>
);

const Industry = ({ i, t, d }: { i: IconName; t: string; d?: string }) => (
  <div className="loc-industryCard">
    <span className="loc-tile loc-tile--round"><Icon name={i} size={23} /></span>
    <h3 className="loc-industryName">{t}</h3>
    {d ? <p className="loc-serviceDesc">{d}</p> : null}
  </div>
);

/* Jump chips — in-page anchors only. These deliberately carry NO
   outbound internal links: every service link lives once, in its
   detail block below, so no anchor text is ever duplicated. */
const Jump = ({ i, t, to }: { i: IconName; t: string; to: string }) => (
  <a className="loc-chipCard" href={`#${to}`}>
    <span className="loc-chipIcon"><Icon name={i} size={20} /></span>
    <span className="loc-chipText">{t}</span>
  </a>
);

const Tech = ({ i, t, items }: { i: IconName; t: string; items: ReactNode[] }) => (
  <div className="loc-whyCard">
    <span className="loc-tile loc-tile--sm"><Icon name={i} size={20} /></span>
    <div>
      <h3 className="loc-whyTitle">{t}</h3>
      <div className="loc-introTags">{items.map((x, k) => <span className="loc-introTag" key={k}>{x}</span>)}</div>
    </div>
  </div>
);

type DetailProps = { id: string; n: string; t: string; href?: string; d: ReactNode; label: string; tags: ReactNode[] };
const Detail = ({ id, n, t, href, d, label, tags }: DetailProps) => (
  <div className="loc-detailCard" id={id}>
    <div className="loc-detailHead">
      <div className="loc-detailNum">{n}</div>
      <h3 className="loc-detailTitle">{href ? <Link href={href}>{t}</Link> : t}</h3>
    </div>
    <p className="loc-detailDesc">{d}</p>
    <div className="loc-detailBlock">
      <p className="loc-detailLabel">{label}</p>
      <div className="loc-detailTagRow">{tags.map((x, k) => <span className="loc-detailTag" key={k}>{x}</span>)}</div>
    </div>
  </div>
);

const Step = ({ n, t, d, tags }: { n: string; t: string; d: ReactNode; tags: ReactNode[] }) => (
  <div className="loc-timelineItem">
    <div className="loc-timelineDot">{n}</div>
    <div className="loc-timelineBody">
      <h3 className="loc-timelineTitle">{t}</h3>
      <p className="loc-timelineDesc">{d}</p>
      <div className="loc-detailTagRow">{tags.map((x, k) => <span className="loc-detailTag" key={k}>{x}</span>)}</div>
    </div>
  </div>
);

const Engage = ({ i, t, d, best }: { i: IconName; t: ReactNode; d: string; best: string }) => (
  <div className="loc-engageCard">
    <span className="loc-engageIcon"><Icon name={i} size={22} /></span>
    <h3 className="loc-engageTitle">{t}</h3>
    <p className="loc-engageDesc">{d}</p>
    <span className="loc-engageBest">Best when: {best}</span>
  </div>
);

const Story = ({ i, t, challenge, solution, outcome }: { i: IconName; t: string; challenge: string; solution: string; outcome: string }) => (
  <div className="loc-engageCard">
    <span className="loc-engageIcon"><Icon name={i} size={22} /></span>
    <h3 className="loc-engageTitle">{t}</h3>
    <p className="loc-engageDesc"><strong>Challenge:</strong> {challenge}</p>
    <p className="loc-engageDesc"><strong>Solution:</strong> {solution}</p>
    <span className="loc-engageBest">Outcome: {outcome}</span>
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
   ────────────────────────────────────────────────────────────
   THEME OWNERSHIP — each theme has exactly one owner. If you are
   about to add a line here, check it is not already owned:

     Positioning / who we serve ....... INTRO
     Company numbers (years, clients) . INTRO stats + CREDENTIALS
     Pain points ...................... CHALLENGES
     How we work / differentiators .... WHY_CHOOSE
     What we build .................... CAPABILITIES (detail blocks)
     Commercial models, support ....... ENGAGEMENT
     Legacy / cloud / DevOps .......... MODERNIZATION
     Agile, CI/CD, QA, security ....... PROCESS
     Industries ....................... INDUSTRIES
     Contracts, IP, cost, timezone .... FAQS
   ════════════════════════════════════════════════════════════ */

/* ── INTRO: the only place the headline numbers are set out ── */
const INTRO_STATS: { i: IconName; n?: string; l: string }[] = [
  { i: "award", n: FACTS.years, l: "Years in Business" },
  { i: "users", n: FACTS.clients, l: "Clients Served" },
  { i: "grid", n: "9", l: "Industries Served" },
  { i: "rocket", l: "Startups to Enterprise" },
];

/* ── CHALLENGES: pain points only. No differentiators here. ── */
const CHALLENGES: { i: IconName; t: string; d: ReactNode }[] = [
  {
    i: "server",
    t: "Your software is holding back growth",
    d: <>Legacy applications raise maintenance costs and make every new feature expensive. We rebuild on scalable architectures with modern UX and secure integrations — see our approach to <Link href="/it-services-digital-transformation-company">digital transformation</Link>.</>,
  },
  {
    i: "rocket",
    t: "You need to ship faster than you currently can",
    d: "We put something usable in front of real users in weeks, not at the end. You find out what's wrong while it's still cheap to change, instead of after the budget is spent.",
  },
  {
    i: "cpu",
    t: "You want AI in the product, not in a slide deck",
    d: "We start from a business problem — response times, document backlog, manual triage — and implement the narrowest AI solution that fixes it.",
  },
  {
    i: "link",
    t: "Your systems don't talk to each other",
    d: "Disconnected tools mean duplicate data entry and no single source of truth. We build integration layers and automated workflows that connect what you already run.",
  },
  {
    i: "trendingUp",
    t: "Traffic is growing faster than the platform",
    d: "Cloud-native, microservices-based rearchitecture, sized against your projected load rather than today's.",
  },
  {
    i: "users",
    t: "You can't hire engineers fast enough",
    d: <>Architects, developers, QA and DevOps available in weeks rather than quarters. We can also advise before you commit through <Link href="/it-solutions-company">technology consulting</Link>.</>,
  },
];

/* ── WHY: how we work. No pain points, no service names, no stats. ── */
const WHY_CHOOSE: { i: IconName; t: string; d: string }[] = [
  { i: "target", t: "We start with the business case, not the tech stack", d: "Every feature has to trace back to a number you care about: cost, revenue, retention, hours saved. Features that can't are the first ones we cut from scope." },
  { i: "code", t: "Senior engineers on your project, not just on the pitch call", d: "The architects who scope your system are the ones who build it. No handover to a junior bench after the contract is signed." },
  { i: "clipboard", t: "Estimates that hold up", d: "Discovery produces a written architecture and a milestone plan before development starts. When scope changes, we re-estimate in writing rather than absorbing it silently and slipping." },
  { i: "eye", t: "You can see the work in progress", d: "You never have to ask where things stand — the answer is already written down and the current build is already deployed somewhere you can open it." },
  { i: "globe", t: "Cross-timezone by design, not by accident", d: "An Eastern-time front office with a Hyderabad delivery centre behind it. You get a reply during your working day and a build that moved overnight." },
  { i: "infinity", t: "We stay past launch", d: "Most of our client relationships are measured in years, because the team that shipped v1 is still the cheapest team to build v2. Nobody has to re-learn your codebase." },
];

/* ── SERVICES INDEX: in-page jump links only, zero prose. ── */
const SERVICE_INDEX: { i: IconName; t: string; to: string }[] = [
  { i: "code", t: "Custom Software", to: "svc-01" },
  { i: "building", t: "Enterprise Software", to: "svc-02" },
  { i: "rocket", t: "SaaS Products", to: "svc-03" },
  { i: "cpu", t: "AI Solutions", to: "svc-04" },
  { i: "globe", t: "Web Platforms", to: "svc-05" },
  { i: "phone", t: "Mobile Apps", to: "svc-06" },
];

/* ── CAPABILITIES: the single owner of "what we build". ── */
const CAPABILITIES: DetailProps[] = [
  {
    id: "svc-01", n: "01", t: "Custom Software Development", href: "/custom-software-development-company",
    d: "Off-the-shelf tools make you reshape your workflow around their assumptions. Custom software goes the other way — it encodes how your business actually runs, then automates the parts that don't need a person.",
    label: "Solutions Include",
    tags: [
      "Business management systems",
      <Link href="/custom-crm-software-development-company" key="crm">CRM &amp; ERP solutions</Link>,
      "HR and workforce platforms",
      "Inventory and supply chain systems",
      "Workflow automation",
      "Customer and vendor portals",
      "Internal business applications",
      "Reporting and analytics dashboards",
    ],
  },
  {
    id: "svc-02", n: "02", t: "Enterprise Software Development", href: "/enterprise-application-development-company",
    d: "Systems that multiple departments and locations depend on daily, built for uptime, auditability and integration with the estate you already have.",
    label: "Systems We Build",
    tags: [
      "Enterprise portals",
      "Operational dashboards",
      "Large-scale business applications",
      "Multi-department workflow systems",
      "Role-based access and audit trails",
      "Integration with existing ERP and identity providers",
    ],
  },
  {
    id: "svc-03", n: "03", t: "SaaS Product Development", href: "/saas-development-services",
    d: "Whether you're launching subscription software or converting an on-premise product into a cloud platform, the hard parts are tenancy, billing and cost-per-customer. That's where we spend the design time.",
    label: "Key Features",
    tags: [
      "Multi-tenant architecture",
      "Subscription and billing management",
      "Secure authentication",
      "User and role management",
      "API and webhook integrations",
      "Analytics dashboards",
      "Autoscaling infrastructure",
      "Performance monitoring",
    ],
  },
  {
    id: "svc-04", n: "04", t: "AI-Powered Business Solutions", href: "/generative-ai-development-company",
    d: "AI earns its place when it removes work or shortens a decision. We scope against a measurable baseline, then build the smallest system that beats it.",
    label: "Our AI Capabilities",
    tags: [
      <Link href="/ai-chatbot-development-company" key="bot">Chatbots and virtual assistants</Link>,
      <Link href="/ai-customer-support-system" key="sup">AI customer support</Link>,
      <Link href="/ai-recommendation-engine-development" key="rec">Recommendation engines</Link>,
      <Link href="/machine-learning-development-company" key="ml">Predictive analytics</Link>,
      "Intelligent document processing",
      "Knowledge management and AI search",
      "Retrieval-Augmented Generation (RAG)",
      "LLM integrations",
    ],
  },
  {
    id: "svc-05", n: "05", t: "Web & Customer Experience Platforms", href: "/web-development-company",
    d: "For most businesses the web application is the product experience. Ours are built for speed, accessibility and search visibility from the first sprint.",
    label: "Platforms We Build",
    tags: [
      "Customer self-service portals",
      "B2B and B2C platforms",
      "Business dashboards",
      <Link href="/multi-vendor-marketplace-app-builder" key="mkt">Marketplace platforms</Link>,
      "Booking and reservation systems",
      <Link href="/e-learning-app-development-company" key="lms">Learning management systems</Link>,
      "Membership platforms",
      <Link href="/progressive-web-app-development-company-in-india" key="pwa">Progressive Web Apps</Link>,
    ],
  },
  {
    id: "svc-06", n: "06", t: "Mobile App Development", href: "/mobile-app-development-company",
    d: "Concept and UI/UX through development, store submission and post-release monitoring — native where performance demands it, cross-platform where it doesn't.",
    label: "App Types We Ship",
    tags: [
      "Enterprise mobility",
      "Consumer apps",
      <Link href="/on-demand-service-mobile-app-development" key="odm">On-demand service apps</Link>,
      <Link href="/ecommerce-app-development-company" key="ecom">eCommerce apps</Link>,
      "Business productivity apps",
      "Store submission and release management",
      "Post-release crash and performance monitoring",
    ],
  },
];

/* ── INDUSTRIES: one line each. Detail belongs on industry pages. ── */
const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "activity", t: "Healthcare", d: "Telemedicine, patient management, scheduling, EHR integrations, AI-assisted clinical tools." },
  { i: "landmark", t: "Financial Services", d: "Digital banking, payments, lending, investment platforms, onboarding, fraud detection." },
  { i: "cart", t: "Retail & eCommerce", d: "Omnichannel commerce, marketplaces, inventory, loyalty programs." },
  { i: "factory", t: "Manufacturing", d: "Production management, warehouse automation, supplier portals, quality management." },
  { i: "truck", t: "Logistics & Transportation", d: "Fleet management, shipment tracking, route optimization, delivery platforms." },
  { i: "home", t: "Real Estate", d: "Property management, CRM, listing portals, tenant and document management." },
  { i: "book", t: "Education", d: "LMS, virtual classrooms, assessments, student information systems." },
  { i: "send", t: "Travel & Hospitality", d: "Booking engines, reservations, itinerary management, loyalty." },
  { i: "shield", t: "Insurance", d: "Policy management, claims processing, underwriting, fraud detection." },
];

/* ── ENGAGEMENT: sole owner of commercial models and of support. ── */
const ENGAGEMENT: { i: IconName; t: ReactNode; d: string; best: string }[] = [
  {
    i: "package",
    t: "Fixed-scope project",
    d: "Defined deliverables, a fixed timeline and an agreed price, set after discovery rather than before it.",
    best: "requirements are stable and the outcome is well understood — an MVP, a migration, a defined module.",
  },
  {
    i: "users",
    t: <Link href="/hire-dedicated-developers-in-india">Dedicated development team</Link>,
    d: "A ring-fenced team — engineers, QA, DevOps and a project manager — working only on your roadmap, billed monthly.",
    best: "the product is evolving and scope is a moving target.",
  },
  {
    i: "briefcase",
    t: <Link href="/hire-developers-in-india">IT staff augmentation</Link>,
    d: "Individual specialists embedded in your existing team, reporting into your leads and working in your process and tooling.",
    best: "you have the management capacity but not the headcount.",
  },
  {
    i: "tool",
    t: <Link href="/app-maintenance-support-services">Ongoing support &amp; optimization</Link>,
    d: "An SLA-backed retainer after launch: bug fixes, security patching, cloud cost review, performance tuning and scheduled enhancements.",
    best: "the product is live — available on top of any of the three models above.",
  },
];

/* ── MODERNIZATION: sole owner of legacy, cloud and DevOps.
      Deliberately carries NO internal links — this section is a
      capability list, not a navigation block. ── */
const MODERNIZATION: { i: IconName; t: string }[] = [
  { i: "refresh", t: "Legacy system modernization" },
  { i: "cloud", t: "Cloud application development" },
  { i: "repeat", t: "Cloud migration & cost optimization" },
  { i: "link", t: "API-first architecture" },
  { i: "grid", t: "Microservices decomposition" },
  { i: "infinity", t: "DevOps automation" },
  { i: "barChart", t: "Data analytics & BI" },
  { i: "server", t: "Enterprise integration" },
  { i: "monitor", t: "Observability and monitoring" },
  { i: "zap", t: "Performance optimization" },
];

/* ── PROCESS: sole owner of Agile, CI/CD, QA and security. Full
      lists — do not truncate these to three tags to fit a card. ── */
const PROCESS: { n: string; t: string; d: ReactNode; tags: ReactNode[] }[] = [
  {
    n: "01", t: "Discovery & Product Strategy",
    d: "We define the problem before proposing the build. The output is a written document you own, whether or not you continue with us.",
    tags: [
      "Business and stakeholder workshops",
      "Product vision alignment",
      <Link href="/ux-research-services" key="ux">User journey mapping</Link>,
      "Technical feasibility assessment",
      "Feature prioritization",
      "Solution architecture",
      "Delivery roadmap and estimate",
    ],
  },
  {
    n: "02", t: "Agile Engineering & Continuous Delivery",
    d: "Each sprint ends in something you can click. Priorities can change between sprints without restarting the plan.",
    tags: [
      "Sprint planning and estimation",
      "Weekly progress reviews",
      "Sprint demos",
      "CI/CD pipelines",
      "Transparent reporting",
      "Named point of contact",
    ],
  },
  {
    n: "03", t: "Quality Built Into Every Release",
    d: <>QA engineers join at sprint one, not before launch. Defects found in the sprint they were introduced cost a fraction of defects found in UAT — the full scope of our <Link href="/quality-assurance-and-testing-services">QA and testing services</Link> applies to every build.</>,
    tags: [
      "Functional testing",
      "Automated testing",
      "Regression testing",
      "API testing",
      "Cross-browser testing",
      "Mobile device testing",
      "Performance and load testing",
      "Security validation",
      "User acceptance testing",
    ],
  },
  {
    n: "04", t: "Security by Design",
    d: <>Security decisions are made at architecture time, because retrofitting them is where budgets go to die. Higher-assurance programmes bring in our <Link href="/cyber-security-services-company">cyber security team</Link> from discovery onward.</>,
    tags: [
      "Secure coding standards",
      "Role-based access control",
      "Multi-factor authentication",
      "Data encryption at rest and in transit",
      "Secure API development",
      "Vulnerability assessments",
      <Link href="/cloud-security-services" key="cs">Cloud security baselines</Link>,
      "Compliance-ready architecture",
    ],
  },
];

/* ── TECH ── */
const TECH: { i: IconName; t: string; items: ReactNode[] }[] = [
  { i: "layout", t: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "HTML5", "CSS3"] },
  { i: "server", t: "Backend", items: ["Node.js", "Java", "Python", ".NET", <Link href="/php-development-company" key="php">PHP</Link>, "Laravel", "Spring Boot"] },
  { i: "phone", t: "Mobile", items: [<Link href="/flutter-app-development-company" key="f">Flutter</Link>, <Link href="/react-native-app-development-company" key="r">React Native</Link>, <Link href="/android-app-development-company" key="a">Native Android</Link>, <Link href="/ios-app-development-company" key="i">Native iOS</Link>] },
  { i: "cloud", t: "Cloud & DevOps", items: [<Link href="/aws-cloud-services" key="aws">AWS</Link>, "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"] },
  { i: "cpu", t: "Artificial Intelligence", items: ["OpenAI", "LangChain", "RAG", "AI agents", "Machine learning", "NLP", "Intelligent automation"] },
  { i: "database", t: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis"] },
];

/* ── CREDENTIALS: verifiable facts only. Not a claims list. ── */
const CREDENTIALS: { i: IconName; t: string; d: ReactNode }[] = [
  { i: "checkSquare", t: "ISO-certified processes", d: <>Documented, audited delivery and information-security processes.</> },
  { i: "award", t: "NASSCOM member", d: <>Listed with India's national technology industry body — <Link href="/nasscom-membership">see the membership</Link>.</> },
  { i: "target", t: "Independently reviewed", d: <>Client reviews published on <Link href="/clutch">Clutch</Link>, and our <Link href="/awards-recognition">awards and recognition</Link>.</> },
  { i: "mapPin", t: "Three offices", d: <>Dover (Delaware), Hyderabad and Bangalore — all staffed engineering or operations sites.</> },
];

/* ── OUTCOMES ── */
const STORIES: { i: IconName; t: string; challenge: string; solution: string; outcome: string }[] = [
  { i: "building", t: "Enterprise Business Management Platform", challenge: "A growing enterprise ran on several disconnected systems, producing duplicate records, manual reconciliation and no consolidated view of operations.", solution: "A centralized platform unifying core business functions with workflow automation and real-time reporting.", outcome: "Reduced manual effort, consolidated reporting, architecture sized for further expansion" },
  { i: "cpu", t: "AI-Powered Customer Support Assistant", challenge: "A service organization needed faster customer response times without growing the support team.", solution: "A virtual assistant grounded in the company's knowledge base, resolving routine queries and escalating cleanly to human agents.", outcome: "Faster first response, higher deflection rate, lower cost per ticket" },
  { i: "cloud", t: "Cloud-Based SaaS Platform", challenge: "A startup needed a secure multi-tenant platform that could absorb rapid customer growth.", solution: "Cloud-native SaaS build with subscription management, authentication, API integrations and analytics.", outcome: "Launched on schedule, scaled without rearchitecture" },
  { i: "factory", t: "Legacy Modernization for a Manufacturer", challenge: "A mid-market manufacturer ran production on an outdated on-premise system with no real-time visibility.", solution: "Cloud-native rebuild with live production dashboards and API integration into the existing ERP.", outcome: "Less unplanned downtime, faster reporting, cross-team visibility" },
];

const CITIES = ["New York", "San Francisco Bay Area", "Austin", "Chicago", "Boston", "Seattle", "Dallas", "Philadelphia", "Washington D.C.", "Delaware"];

/* ── FAQ: every question answers something NOT stated on the page. ── */
const FAQS: { q: string; a: string }[] = [
  {
    q: "What does a software development project cost?",
    a: "Most of our US engagements fall into bands: under $10K for a small scoped build or integration, $10K–$25K for an MVP or single module, $25K–$50K for a full product build, $50K–$100K for enterprise platforms, and $100K+ for multi-year programs. Discovery produces a fixed estimate before development starts.",
  },
  {
    q: "What engagement models do you offer, and which suits us?",
    a: "Fixed-scope when requirements are stable, a dedicated team when the roadmap is still moving, and staff augmentation when you have management capacity but not headcount. If you're unsure, we'll recommend one after discovery — including telling you when a smaller engagement is the right call.",
  },
  {
    q: "How do you handle the time zone difference?",
    a: "Every meeting you are expected to attend is booked in your working hours, not ours. A question raised before lunch is normally answered the same day. Escalations route to a named contact on US hours rather than a shared inbox, so nothing waits overnight for a reply.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do, on payment. Contracts assign all IP, source code and documentation to your organization. Repositories can sit in your GitHub or Azure DevOps org from day one so you always hold the code.",
  },
  {
    q: "Will you sign an NDA before we share details?",
    a: "Yes, before the first technical discussion. We can work under your NDA, MSA and security requirements.",
  },
  {
    q: "Can you work within our compliance requirements?",
    a: "We build to compliance-ready architecture — encryption, access control, audit logging and data residency controls — and work inside your existing compliance program. Tell us which framework applies (HIPAA, PCI DSS, SOC 2, GDPR) during discovery so it shapes the architecture rather than being retrofitted.",
  },
  {
    q: "How quickly can a team start?",
    a: "Typically two to four weeks from signed agreement for a standard stack, and longer for niche specializations. Discovery can often begin sooner while the team is assembled.",
  },
  {
    q: "What happens when requirements change mid-project?",
    a: "Change is expected, so it's priced. Anything inside the agreed scope gets reprioritized within the sprint plan at no extra cost; anything that expands scope gets a written re-estimate before work starts.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on scope, integrations and how quickly decisions get made on your side. Discovery ends with a milestone roadmap and dated deliverables, so you're working from dates rather than a range.",
  },
  {
    q: "How do we get started?",
    a: "Book a consultation and we'll spend the first call on your business goals rather than our capabilities. You'll leave it with a recommended approach and a written proposal.",
  },
];

/* ════════════════════════════════════════════════════════════
   STYLES
   ════════════════════════════════════════════════════════════ */
const LOC_CSS = `
.loc-page{--ink:#0F172A;--ink-soft:#4A5568;--ink-faint:#94A3B8;--bg:#FFFFFF;--bg-alt:#F7F9FD;--line:#E7EBF3;--a1:#4338CA;--a2:#0EA5E9;--grad:linear-gradient(120deg,#4338CA 0%,#6D28D9 45%,#0EA5E9 100%);--tile:linear-gradient(135deg,#EEF2FF,#E0F2FE);--sh:0 1px 2px rgba(15,23,42,.04),0 8px 24px rgba(15,23,42,.05);--sh-h:0 6px 14px rgba(15,23,42,.06),0 22px 44px rgba(67,56,202,.13);--ease:cubic-bezier(.22,.61,.36,1);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--ink);background:var(--bg);line-height:1.65;-webkit-font-smoothing:antialiased}
.loc-page *{box-sizing:border-box}
.loc-page a{color:var(--a1);text-decoration:none;font-weight:600;transition:color .15s ease}
.loc-page a:hover{color:var(--a2)}
.loc-page :focus-visible{outline:2px solid var(--a1);outline-offset:3px;border-radius:8px}
.loc-icon{display:block;flex-shrink:0}
.loc-page [id^="svc-"]{scroll-margin-top:96px}

/* ── section shell ── */
.loc-section{padding:4.75rem 1.5rem}
.loc-introSection,.loc-whySection{background:var(--bg-alt)}
.loc-servicesSection,.loc-industriesSection,.loc-processSection,.loc-faqSection{background:var(--bg)}
.loc-sectionInner{max-width:1160px;margin:0 auto}
.loc-sectionHeader{text-align:center;max-width:820px;margin:0 auto 3rem}
.loc-sectionTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.6rem,2.6vw,2.4rem);font-weight:700;line-height:1.22;color:var(--ink);margin:0 0 .9rem;letter-spacing:-.022em}
.loc-highlight{background:var(--grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:locShift 9s ease-in-out infinite}
.loc-sectionDesc{font-size:1.04rem;color:var(--ink-soft);line-height:1.78;margin:0 auto;max-width:820px;text-align:center}

/* ── intro grid ── */
.loc-introGrid{display:grid;grid-template-columns:1.6fr 1fr;gap:3rem;align-items:start}
.loc-introTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.38rem,2.2vw,1.95rem);font-weight:700;color:var(--ink);margin:0 0 1.1rem;letter-spacing:-.02em}
.loc-introText{font-size:1.02rem;color:var(--ink-soft);margin:0 0 1.05rem;line-height:1.82}
.loc-introText:last-child{margin-bottom:0}
.loc-introText strong{color:var(--ink);font-weight:600}
.loc-introTags{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 1.4rem}
.loc-introTag{display:inline-flex;align-items:center;padding:.42rem .9rem;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.83rem;font-weight:600;color:var(--a1);white-space:nowrap;transition:transform .2s var(--ease),border-color .2s,box-shadow .2s}
.loc-introTag:hover{transform:translateY(-2px);border-color:#C7D2FE;box-shadow:0 6px 14px rgba(67,56,202,.1)}
.loc-introTag a{color:inherit}
.loc-introTag a:hover{color:var(--a2)}

/* ── icon tiles ── */
.loc-tile{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:var(--tile);border:1px solid #E3E9F7;color:var(--a1);margin-bottom:1.05rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease),box-shadow .3s}
.loc-tile--sm{width:44px;height:44px;border-radius:13px;margin-bottom:0;flex-shrink:0}
.loc-tile--round{width:54px;height:54px;border-radius:50%;margin:0 auto .85rem}
.loc-whyCard:hover .loc-tile,.loc-industryCard:hover .loc-tile{background:var(--grad);border-color:transparent;color:#fff;transform:translateY(-2px) rotate(-5deg) scale(1.06);box-shadow:0 10px 20px rgba(67,56,202,.26)}

/* ── stat cards ── */
.loc-introStats{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;align-content:start}
.loc-statCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem .9rem;text-align:center;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-statCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-statIcon{width:36px;height:36px;margin:0 auto .55rem;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-statCard:hover .loc-statIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-statNum{font-family:'Sora','Inter',sans-serif;font-size:1.5rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.15}
.loc-statLabel{margin-top:.25rem;font-size:.8rem;font-weight:600;color:var(--ink-soft);line-height:1.4}

/* ── card grids ── */
.loc-whyGrid,.loc-industriesGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;align-items:stretch}
.loc-whyCard,.loc-industryCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.7rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s;display:flex;flex-direction:column;height:100%;overflow:hidden}
.loc-whyCard::after,.loc-industryCard::after{content:'';position:absolute;inset:0 0 auto 0;height:3px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease)}
.loc-whyCard:hover::after,.loc-industryCard:hover::after{transform:scaleX(1)}
.loc-whyCard:hover,.loc-industryCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-serviceDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.68;margin:0;flex-grow:1}
.loc-whyCard{flex-direction:row;align-items:flex-start;gap:1rem}
.loc-whyTitle{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .28rem;line-height:1.4}
.loc-whyText{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.62}
.loc-whyCard .loc-introTags{margin:.6rem 0 0}
.loc-whyCard .loc-introTag{font-size:.74rem;padding:.28rem .65rem}
.loc-industryCard{align-items:center;text-align:center}
.loc-industryName{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.loc-industryCard .loc-serviceDesc{text-align:center;flex-grow:0}

/* ── jump chips (in-page anchors) ── */
.loc-chipGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:.85rem;margin-bottom:2.6rem}
.loc-chipCard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.05rem .7rem;text-align:center;font-size:.84rem;font-weight:600;color:var(--ink);box-shadow:var(--sh);display:flex;flex-direction:column;align-items:center;gap:.5rem;line-height:1.4;transition:transform .25s var(--ease),box-shadow .25s,color .25s,border-color .25s}
.loc-chipText{color:var(--ink)}
.loc-chipIcon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-chipCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-chipCard:hover .loc-chipText{color:var(--a1)}
.loc-chipCard:hover .loc-chipIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-chipGrid--5{grid-template-columns:repeat(5,1fr);margin-bottom:0}

/* ── detail cards ── */
.loc-detailGrid{display:grid;grid-template-columns:1fr;gap:1.4rem}
.loc-detailCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem 2.1rem;box-shadow:var(--sh);overflow:hidden;transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-detailCard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--grad);opacity:.85;transform:scaleY(.4);transform-origin:top;transition:transform .45s var(--ease)}
.loc-detailCard:hover::before{transform:scaleY(1)}
.loc-detailCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:#C7D2FE}
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
.loc-detailTag:hover{background:#fff;color:var(--a1);border-color:#C7D2FE;transform:translateY(-2px)}
.loc-detailTag a{color:inherit}
.loc-detailTag a:hover{color:var(--a2)}

/* ── timeline ── */
.loc-timeline{position:relative;max-width:860px;margin:0 auto}
.loc-timeline::before{content:'';position:absolute;left:27px;top:10px;bottom:10px;width:2px;background:linear-gradient(180deg,#4338CA,#0EA5E9,#E6EAF2)}
.loc-timelineItem{position:relative;display:flex;gap:1.4rem;padding-bottom:2rem}
.loc-timelineItem:last-child{padding-bottom:0}
.loc-timelineDot{position:relative;z-index:1;flex-shrink:0;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--grad);color:#fff;font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:1.05rem;box-shadow:0 6px 16px rgba(67,56,202,.28)}
.loc-timelineDot::after{content:'';position:absolute;inset:-6px;border-radius:50%;border:1.5px solid #C7D2FE;opacity:0;transform:scale(.85);transition:opacity .35s,transform .35s var(--ease)}
.loc-timelineItem:hover .loc-timelineDot::after{opacity:1;transform:scale(1)}
.loc-timelineBody{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem 1.55rem;flex:1;min-width:0;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-timelineItem:hover .loc-timelineBody{transform:translateX(5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-timelineTitle{font-size:1.04rem;font-weight:700;color:var(--ink);margin:0 0 .35rem}
.loc-timelineDesc{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.68}
.loc-timelineBody .loc-detailTagRow{margin-top:.75rem}

/* ── engagement / story cards ── */
.loc-engageGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem}
.loc-engageCard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-engageCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-engageIcon{width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;background:var(--grad);color:#fff;border-radius:15px;margin-bottom:1.05rem;box-shadow:0 8px 18px rgba(67,56,202,.24);transition:transform .35s var(--ease)}
.loc-engageCard:hover .loc-engageIcon{transform:rotate(-6deg) scale(1.06)}
.loc-engageTitle{font-family:'Sora','Inter',sans-serif;font-size:1.1rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.loc-engageTitle a{color:var(--ink)}
.loc-engageTitle a:hover{color:var(--a1)}
.loc-engageDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.72;margin:0 0 .8rem}
.loc-engageDesc strong{color:var(--ink)}
.loc-engageBest{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:700;color:var(--a1);background:var(--bg-alt);padding:.5rem .9rem;border-radius:10px;margin-top:.2rem}

/* ── credentials strip ── */
.loc-trustGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem}
.loc-trustCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.25rem;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-trustCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-trustIcon{width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);margin-bottom:.8rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-trustCard:hover .loc-trustIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-trustTitle{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .3rem}
.loc-trustText{font-size:.86rem;color:var(--ink-soft);margin:0;line-height:1.6}

/* ── contact rows / office ── */
.loc-contactRow{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--ink-soft);margin:0 0 .75rem;line-height:1.7}
.loc-contactRow span.loc-ci{color:var(--a1);margin-top:.22rem}
.loc-contactRow strong{color:var(--ink)}
.loc-officeRightCol{display:flex;flex-direction:column;height:100%;gap:1.1rem}
.loc-mapWrap{position:relative;flex:1;min-height:240px;border-radius:16px;overflow:hidden;box-shadow:var(--sh);border:1px solid var(--line)}
.loc-mapFrame{width:100%;height:100%;border:0;display:block;filter:saturate(.9)}
.loc-mapOverlay{position:absolute;inset:0;background:transparent;transition:background .25s}
.loc-mapOverlay:hover{background:rgba(67,56,202,.06)}
.loc-mapBadge{position:absolute;bottom:12px;left:12px;display:inline-flex;align-items:center;gap:.4rem;background:#fff;padding:.5rem .9rem;border-radius:999px;font-size:.78rem;font-weight:700;color:var(--a1);box-shadow:var(--sh);pointer-events:none}
.loc-officeNote{font-size:.9rem;color:var(--ink-soft);line-height:1.7;margin:1.4rem 0 0;padding-top:1.1rem;border-top:1px dashed var(--line)}

/* ── breadcrumb ── */
.loc-breadcrumb{max-width:1160px;margin:0 auto;padding:1.1rem 1.5rem 0;display:flex;align-items:center;flex-wrap:wrap;gap:.4rem;font-size:.85rem}
.loc-breadcrumb a{color:var(--ink-soft);font-weight:500}
.loc-breadcrumb a:hover{color:var(--a1)}
.loc-breadcrumbSep{color:var(--ink-faint)}
.loc-breadcrumbCurrent{color:var(--ink);font-weight:600}

/* ── FAQ ── */
.loc-faqList{display:flex;flex-direction:column;gap:.7rem;max-width:880px;margin:0 auto}
.loc-faqItem{background:var(--bg-alt);border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:border-color .25s,box-shadow .25s,background .25s}
.loc-faqItem:hover{border-color:#C7D2FE}
.loc-faqItem[open]{background:#fff;box-shadow:var(--sh);border-color:#C7D2FE}
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
.loc-ctaBtnPrimary::after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(67,56,202,.14) 50%,transparent 65%);transform:translateX(-130%);transition:transform .7s var(--ease)}
.loc-ctaBtnPrimary:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,.2)}
.loc-ctaBtnPrimary:hover::after{transform:translateX(130%)}
.loc-ctaBtnSecondary{background:transparent;color:#fff!important;border:1.5px solid rgba(255,255,255,.6);transition:background .2s,transform .2s var(--ease),border-color .2s}
.loc-ctaBtnSecondary:hover{background:rgba(255,255,255,.14);border-color:#fff;transform:translateY(-2px)}

/* ── motion ── */
@keyframes locFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes locShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes locFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(46px,34px)}}
.loc-sectionHeader,.loc-statCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-trustCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation:locFadeUp .65s var(--ease) both}
@supports (animation-timeline:view()){
  .loc-sectionHeader,.loc-statCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-trustCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation-timeline:view();animation-range:entry 0% cover 16%}
}
@supports (interpolate-size:allow-keywords){
  .loc-page{interpolate-size:allow-keywords}
  .loc-faqItem::details-content{block-size:0;overflow:hidden;transition:block-size .32s var(--ease),content-visibility .32s allow-discrete}
  .loc-faqItem[open]::details-content{block-size:auto}
}
@media (prefers-reduced-motion:reduce){
  .loc-page *,.loc-page *::before,.loc-page *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}

/* ── responsive ── */
@media (max-width:980px){
  .loc-whyGrid,.loc-industriesGrid{grid-template-columns:repeat(2,1fr)}
  .loc-introGrid{grid-template-columns:1fr;gap:2rem}
  .loc-introStats{grid-template-columns:repeat(4,1fr)}
  .loc-engageGrid{grid-template-columns:1fr}
  .loc-chipGrid,.loc-chipGrid--5{grid-template-columns:repeat(3,1fr)}
  .loc-trustGrid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:640px){
  .loc-section{padding:3rem 1.15rem}
  .loc-detailCard{padding:1.5rem 1.35rem}
  .loc-chipGrid,.loc-chipGrid--5{grid-template-columns:repeat(2,1fr)}
  .loc-timeline::before{left:22px}
  .loc-timelineDot{width:44px;height:44px;font-size:.95rem}
  .loc-timelineItem{gap:.95rem}
  .loc-whyGrid,.loc-industriesGrid,.loc-trustGrid{grid-template-columns:1fr}
  .loc-introStats{grid-template-columns:repeat(2,1fr)}
  .loc-ctaActions{flex-direction:column;align-items:stretch}
}
`;

/* ════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════ */
export default function SoftwareDevelopmentCompanyUSA() {
  return (
    <div className="loc-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
      <style>{LOC_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ BREADCRUMB ═══ */}
      <nav className="loc-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="loc-breadcrumbSep">/</span>
        <Link href="/services">Locations</Link>
        <span className="loc-breadcrumbSep">/</span>
        <span className="loc-breadcrumbCurrent">Software Development Company in USA</span>
      </nav>

      {/* ═══ HERO ═══
          The hero subtitle is NEVER reused as the first H2 below —
          that was the single worst duplication on the previous page. */}
      <ServiceHero
        badge="mTouch Labs · United States"
        titleLead="Software Development Company in the"
        titleAccent="USA"
        description={<>Custom software, AI applications, SaaS platforms and enterprise systems for startups, ISVs and enterprises across the United States.</>}
        primaryLabel="Let's Discuss Your Project"
        primaryHref="/contact-us"
        secondaryLabel="See Our Work"
        secondaryHref="/portfolio"
      />

      {/* ═══ INTRO — owns positioning and the headline numbers ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Technology has stopped being a support function. It now decides how fast you ship, how customers experience your brand, and how much of your operation runs without manual effort.</p>
              <p className="loc-introText">mTouch Labs is a <strong>software development company in the USA</strong> working with startups, growing businesses, ISVs and enterprises to turn ideas into production software. We handle the full arc — product discovery, architecture, engineering, cloud deployment, and the ongoing work that keeps a product competitive after launch.</p>
              <p className="loc-introText">What that looks like in practice depends on where you are. Some clients come to us with a validated idea and no engineering team. Others have a working product that has outgrown its architecture. A few need experienced engineers embedded alongside their own for a year or more. Our <Link href="/services">software product development</Link> engagements are built around which of those you actually are.</p>
            </div>
            <div className="loc-introStats">{INTRO_STATS.map((s) => <Stat key={s.l} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES — owns pain points ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Business Challenges We <span className="loc-highlight">Help Solve</span></h2>
            <p className="loc-sectionDesc">Six situations that bring US businesses to us, and what we actually do about each one.</p>
          </div>
          <div className="loc-whyGrid">{CHALLENGES.map((c) => <Why key={c.t} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ WHY US — owns how we work. No pain points, no stats. ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why US Businesses Choose <span className="loc-highlight">mTouch Labs</span></h2>
            <p className="loc-sectionDesc">Not a capability list — the working practices you would notice in the first month of an engagement.</p>
          </div>
          <div className="loc-whyGrid">{WHY_CHOOSE.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ SERVICES — owns "what we build".
           The chips are in-page jump links, not repeat internal links:
           every service URL appears exactly once, in its detail block. ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Development Services for <span className="loc-highlight">US Businesses</span></h2>
            <p className="loc-sectionDesc">Jump to a capability, or read straight through.</p>
          </div>
          <nav className="loc-chipGrid" aria-label="Services on this page">
            {SERVICE_INDEX.map((s) => <Jump key={s.to} {...s} />)}
          </nav>
          <div className="loc-detailGrid">{CAPABILITIES.map((c) => <Detail key={c.id} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ MODERNIZATION — owns legacy, cloud and DevOps ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Legacy Modernization &amp; <span className="loc-highlight">Cloud Engineering</span></h2>
            <p className="loc-sectionDesc">The work that sits underneath everything above: moving off aging infrastructure without stopping the business.</p>
          </div>
          <div className="loc-chipGrid loc-chipGrid--5">
            {MODERNIZATION.map((c, k) => (
              <div className="loc-chipCard" key={k}>
                <span className="loc-chipIcon"><Icon name={c.i} size={20} /></span>
                <span className="loc-chipText">{c.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We <span className="loc-highlight">Build For</span></h2>
            <p className="loc-sectionDesc">Domain knowledge shortens discovery. These are the sectors where we already know the workflows and the regulatory shape of the problem.</p>
          </div>
          <div className="loc-industriesGrid">{INDUSTRIES.map((x) => <Industry key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT — sole owner of commercials and of support ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">How You Can <span className="loc-highlight">Work With Us</span></h2>
            <p className="loc-sectionDesc">Three ways to buy engineering from us, plus the retainer that keeps a live product healthy.</p>
          </div>
          <div className="loc-engageGrid">{ENGAGEMENT.map((e, k) => <Engage key={k} {...e} />)}</div>
        </div>
      </section>

      {/* ═══ DELIVERY — sole owner of Agile, CI/CD, QA and security.
           Full lists are rendered; do not truncate to three tags. ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">How We <span className="loc-highlight">Deliver</span></h2>
            <p className="loc-sectionDesc">Four stages, each with a defined output you can inspect before the next one starts.</p>
          </div>
          <div className="loc-timeline">{PROCESS.map((p) => <Step key={p.n} {...p} />)}</div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Technology We <span className="loc-highlight">Build With</span></h2>
            <p className="loc-sectionDesc">We choose stacks for maintainability and hiring depth, not novelty.</p>
          </div>
          <div className="loc-whyGrid">{TECH.map((t) => <Tech key={t.t} {...t} />)}</div>
        </div>
      </section>

      {/* ═══ CREDENTIALS — verifiable facts only, not a claims list ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Credentials You Can <span className="loc-highlight">Check</span></h2>
            <p className="loc-sectionDesc">Four facts about the company, rather than four adjectives about the work.</p>
          </div>
          <div className="loc-trustGrid">
            {CREDENTIALS.map((c) => (
              <div className="loc-trustCard" key={c.t}>
                <span className="loc-trustIcon"><Icon name={c.i} size={20} /></span>
                <h3 className="loc-trustTitle">{c.t}</h3>
                <p className="loc-trustText">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLIENT OUTCOMES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Client <span className="loc-highlight">Outcomes</span></h2>
            <p className="loc-sectionDesc">Four representative engagements — the situation, what we built, and what changed afterwards.</p>
          </div>
          <div className="loc-engageGrid">{STORIES.map((s) => <Story key={s.t} {...s} />)}</div>
          <p className="loc-sectionDesc" style={{ marginTop: "2rem" }}>
            <Link href="/case-studies">Read the full case studies →</Link>
          </p>
        </div>
      </section>

      {/* ═══ OFFICE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid" style={{ alignItems: "stretch" }}>
            <div>
              <h2 className="loc-introTitle">Our USA Office</h2>
              <p className="loc-introText">Meet our team to talk through requirements, modernization plans or a product idea.</p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mapPin" size={18} /></span><span><strong>mTouch Labs — US Operations</strong> — {FACTS.street}, {FACTS.city}, {FACTS.region} {FACTS.zip}, United States</span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="phoneCall" size={18} /></span><span><a href={FACTS.phoneHref}>{FACTS.phoneDisplay}</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mail" size={18} /></span><span><a href={`mailto:${FACTS.email}`}>{FACTS.email}</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="clock" size={18} /></span><span>{FACTS.hours}</span></p>
              <p className="loc-introText"><strong>Serving clients nationwide, including:</strong></p>
              <div className="loc-introTags">{CITIES.map((c) => <span className="loc-introTag" key={c}>{c}</span>)}</div>
              <p className="loc-officeNote">
                Engineering delivery is supported from our <Link href="/software-development-company-hyderabad">Hyderabad development centre</Link>. We also work with clients in <Link href="/software-development-company-canada">Canada</Link> and the <Link href="/software-development-company-united-kingdom">United Kingdom</Link>.
              </p>
            </div>
            <div className="loc-officeRightCol">
              <div className="loc-introStats">
                <Stat i="building" l="Dover, Delaware — US Operations" />
                <Stat i="globe" l="Nationwide Delivery" />
              </div>
              <div className="loc-mapWrap">
                <iframe
                  className="loc-mapFrame"
                  src="https://www.google.com/maps?q=1111B+South+Governors+Avenue+Suite+48193+Dover+DE+19904&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="mTouch Labs USA office location on Google Maps"
                />
                <a href="https://maps.app.goo.gl/RUQSXXJ8hCP2RMRd7" target="_blank" rel="noopener noreferrer" className="loc-mapOverlay" aria-label="Get directions to our Dover, Delaware office" />
                <span className="loc-mapBadge"><Icon name="mapPin" size={14} />Get Directions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ — owns commercials, IP, contracts and time zones.
           Rendered from the same FAQS array that feeds the schema,
           so the visible copy and the JSON-LD can never drift. ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Frequently Asked <span className="loc-highlight">Questions</span></h2>
            <p className="loc-sectionDesc">Ten questions this page does not answer elsewhere.</p>
          </div>
          <div className="loc-faqList">{FAQS.map((f) => <Faq key={f.q} {...f} />)}</div>
        </div>
      </section>

      {/* ═══ CTA — an actual call to action, not a restated intro ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Let&apos;s Talk</h2>
          <p className="loc-ctaDesc">Tell us what you&apos;re trying to build and we&apos;ll tell you what it takes.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary"><Icon name="phoneCall" size={17} />Book a Free Consultation</Link>
            <Link href="/request-free-quote" className="loc-ctaBtnSecondary">Request a Proposal</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={FAQS} />
    </div>
  );
}
