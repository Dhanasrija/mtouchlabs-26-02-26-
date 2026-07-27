import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import ServiceHero from "@/components/sections/ServiceHero";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mtouchlabs.com"),
  title: "Software Development Company USA | mTouch Labs",
  description:
    "mTouch Labs is a trusted Software Development Company in the USA delivering custom software, enterprise applications, AI solutions, SaaS platforms, web development, and mobile app development for startups and enterprises.",
  keywords: [
    "Software Development Company USA",
    "Software Development Company in USA",
    "Custom Software Development USA",
    "Enterprise Software Development",
    "Software Development Services USA",
    "AI Development Company",
    "Generative AI Development",
    "SaaS Development Company",
    "Enterprise Application Development",
    "Web Application Development",
    "Mobile App Development Company",
    "Cloud Application Development",
    "Software Engineering Services",
    "Digital Transformation Company",
    "Dedicated Development Team",
    "Technology Consulting",
    "mTouch Labs",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-usa",
  },
  openGraph: {
    title: "Software Development Company USA | mTouch Labs",
    description:
      "Partner with mTouch Labs to build custom software, AI-powered applications, SaaS platforms, enterprise solutions, and scalable web & mobile apps.",
    url: "https://www.mtouchlabs.com/software-development-company-usa",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og/software-development-company-usa.webp",
        width: 1200,
        height: 630,
        alt: "Software Development Company USA | mTouch Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company USA | mTouch Labs",
    description:
      "Custom Software, AI Development, Enterprise Solutions, SaaS, Web & Mobile App Development.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "mTouch Labs — Software Development in the USA",
  url: "https://www.mtouchlabs.com/software-development-company-usa",
  description:
    "mTouch Labs — custom software, enterprise apps, SaaS, AI, and cloud technologies for businesses across the United States.",
  image: "https://www.mtouchlabs.com/images/og/software-development-company-usa.webp",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1111B South Governors Avenue, Suite 48193",
    addressLocality: "Dover",
    addressRegion: "DE",
    postalCode: "19904",
    addressCountry: "US",
  },
  telephone: "+1-551-222-0070",
  email: "contact@mtouchlabs.com",
  provider: { "@type": "Organization", name: "mTouch Labs", url: "https://www.mtouchlabs.com" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "500", bestRating: "5" },
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
  cpu: <><rect x="6.5" y="6.5" width="11" height="11" rx="2.5" /><rect x="10" y="10" width="4" height="4" rx="1" /><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" /></>,
  creditCard: <><rect x="2" y="4.5" width="20" height="15" rx="2.5" /><path d="M2 9.5h20" /><path d="M6 15h3" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" /><path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" /></>,
  dollar: <><path d="M12 2.5v19" /><path d="M16.8 6.2H9.6a3.4 3.4 0 0 0 0 6.8h4.8a3.4 3.4 0 0 1 0 6.8H6.6" /></>,
  edit: <><path d="M12.5 20.5h9" /><path d="M16.8 3.3a2.15 2.15 0 0 1 3 3L7.5 18.6l-4 1 1-4Z" /></>,
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

type DetailProps = { n: string; t: string; href?: string; d: string; label: string; tags: ReactNode[] };
const Detail = ({ n, t, href, d, label, tags }: DetailProps) => (
  <div className="loc-detailCard">
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

const Step = ({ n, t, d, tags }: { n: string; t: string; d: string; tags: string[] }) => (
  <div className="loc-timelineItem">
    <div className="loc-timelineDot">{n}</div>
    <div className="loc-timelineBody">
      <h4 className="loc-timelineTitle">{t}</h4>
      <p className="loc-timelineDesc">{d}</p>
      <div className="loc-detailTagRow">{tags.map((x) => <span className="loc-detailTag" key={x}>{x}</span>)}</div>
    </div>
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
   ════════════════════════════════════════════════════════════ */
const INTRO_STATS: { i: IconName; n?: string; l: string }[] = [
  { i: "award", n: "14+", l: "Years of Experience" },
  { i: "users", n: "500+", l: "Global Clients" },
  { i: "cpu", l: "AI & Cloud Expertise" },
  { i: "refresh", l: "Agile Delivery Model" },
  { i: "tool", l: "Post-Launch Support" },
  { i: "lock", l: "Enterprise-Grade Security" },
  { i: "trendingUp", l: "Scalable Architecture" },
  { i: "globe", l: "Nationwide Delivery" },
];

const WHY_PARTNER: { i: IconName; t: string; d: string }[] = [
  { i: "target", t: "Business-First Engineering", d: "Every feature is aligned with measurable business outcomes — not technology for its own sake." },
  { i: "cpu", t: "AI-Driven Innovation", d: "Intelligent automation, Generative AI applications, AI assistants, and predictive analytics that improve productivity." },
  { i: "trendingUp", t: "Scalable Architecture", d: "Cloud-native, modular, API-first systems that accommodate growth without major redevelopment." },
  { i: "message", t: "Transparent Collaboration", d: "Sprint planning, product roadmaps, milestone reviews, and regular progress updates keep you informed." },
  { i: "users", t: "Long-Term Technology Partnership", d: "Continuous enhancement, cloud optimization, security improvements, and technical consulting beyond launch." },
  { i: "award", t: "14+ Years, 500+ Clients", d: "A proven track record helping US businesses build software that drives innovation and growth." },
];

const CHALLENGES: { i: IconName; t: string; d: ReactNode }[] = [
  { i: "server", t: "Your current software is limiting growth", d: "We modernize legacy applications with scalable architectures, intuitive UX, cloud technologies, and secure integrations." },
  { i: "rocket", t: "Your product needs to reach the market faster", d: "Agile development, rapid prototyping, and continuous delivery accelerate launches without compromising quality." },
  { i: "cpu", t: "You want to integrate Artificial Intelligence", d: "We implement practical AI solutions that automate tasks, improve engagement, and enhance decision-making." },
  { i: "link", t: "Your teams use disconnected systems", d: "We develop integrated software ecosystems that connect operations and automate workflows." },
  { i: "trendingUp", t: "Your software can't scale with demand", d: "We build cloud-native, microservices-based software capable of supporting growing traffic and requirements." },
  { i: "users", t: "You need experienced engineering talent", d: <><Link href="/dedicated-development-team">Dedicated development teams</Link> give you immediate access to architects, developers, QA, DevOps, and AI experts.</> },
];

const DIFFERENT: { i: IconName; t: string }[] = [
  { i: "layout", t: "Business-Focused Solution Architecture" },
  { i: "cloud", t: "Modern Cloud-Native Development" },
  { i: "cpu", t: "AI-First Software Engineering" },
  { i: "lock", t: "Enterprise-Grade Security" },
  { i: "refresh", t: "Agile Product Delivery" },
  { i: "message", t: "Transparent Communication" },
  { i: "users", t: "Scalable Engineering Teams" },
  { i: "bulb", t: "Continuous Innovation" },
  { i: "tool", t: "Long-Term Support & Optimization" },
];

const SERVICES: { i: IconName; t: string; d: string; href: string }[] = [
  { i: "code", t: "Custom Software Development", d: "Business management systems, CRM & ERP, HR platforms, workflow automation, and reporting dashboards.", href: "/custom-software-development-company" },
  { i: "building", t: "Enterprise Software Development", d: "Reliable, secure software built for complex operations across departments and locations.", href: "/enterprise-software-development-company" },
  { i: "rocket", t: "SaaS Product Development", d: "Multi-tenant architecture, subscription billing, secure authentication, and cloud scalability.", href: "/saas-development-company" },
  { i: "cpu", t: "AI-Powered Business Solutions", d: "Generative AI, chatbots, RAG, document processing, and LLM integrations that solve real business problems.", href: "/ai-development-company" },
  { i: "globe", t: "Web & Customer Experience Platforms", d: "Responsive, secure, high-performing portals, marketplaces, and enterprise web applications.", href: "/web-development-company" },
  { i: "phone", t: "Mobile App Development", d: "Native iOS/Android, Flutter, and React Native apps across the full mobile app lifecycle.", href: "/mobile-app-development-company" },
];

const CAPABILITIES: DetailProps[] = [
  {
    n: "01", t: "Custom Software Development", href: "/custom-software-development-company",
    d: "Off-the-shelf software often forces businesses to adapt their workflows to predefined features. Custom software adapts to your business — automating operations, improving productivity, and integrating seamlessly with your existing systems.",
    label: "Solutions Include",
    tags: ["Business Management Systems", "CRM & ERP Solutions", "HR & Workforce Management", "Inventory & Supply Chain Systems", "Workflow Automation", "Customer & Vendor Portals", "Reporting & Analytics Dashboards"],
  },
  {
    n: "02", t: "Enterprise Software Development", href: "/enterprise-software-development-company",
    d: "Large organizations require software that is reliable, secure, and capable of supporting complex operations across multiple departments and locations — built with scalability, performance, and integration in mind.",
    label: "We Build",
    tags: ["Enterprise Portals", "Operational Dashboards", "Workflow Automation", "Large-Scale Business Applications"],
  },
  {
    n: "03", t: "SaaS Product Development", href: "/saas-development-company",
    d: "Software-as-a-Service has become the preferred delivery model for modern businesses. Whether you're building a subscription-based product or transforming an existing application, our SaaS expertise helps you launch faster and scale confidently.",
    label: "Key Features",
    tags: ["Multi-Tenant Architecture", "Subscription & Billing Management", "Secure Authentication", "User & Role Management", "API Integrations", "Analytics Dashboards", "Cloud Scalability"],
  },
  {
    n: "04", t: "AI-Powered Business Solutions", href: "/ai-development-company",
    d: "Artificial Intelligence is reshaping how organizations operate, analyze data, and interact with customers. Instead of implementing AI for the sake of innovation, we focus on solving real business problems and delivering measurable value.",
    label: "Our AI Capabilities",
    tags: [<Link href="/generative-ai-development-company" key="gen">Generative AI Applications</Link>, "AI Chatbots & Virtual Assistants", "Intelligent Document Processing", "Knowledge Management Systems", "Recommendation Engines", "Predictive Analytics", "Large Language Model Integrations", "Retrieval-Augmented Generation (RAG)"],
  },
  {
    n: "05", t: "Web & Customer Experience Platforms", href: "/web-development-company",
    d: "A business's website is often the first interaction customers have with the brand. We develop responsive, secure, and high-performing web applications that enhance customer engagement and support business growth.",
    label: "We Build",
    tags: ["Customer Self-Service Portals", "B2B & B2C Platforms", "Marketplace Platforms", "Booking & Reservation Systems", "Learning Management Systems", "Progressive Web Applications"],
  },
  {
    n: "06", t: "Mobile App Development", href: "/mobile-app-development-company",
    d: "Today's users expect seamless digital experiences across every device. From concept and UI/UX design to development, testing, deployment, and post-launch support, we manage the complete mobile application lifecycle.",
    label: "We Build",
    tags: ["Native iOS Applications", "Native Android Applications", <Link href="/flutter-app-development-company" key="flu">Flutter Applications</Link>, <Link href="/react-native-app-development-company" key="rn">React Native Applications</Link>, "Enterprise Mobility Solutions", "On-Demand Service Apps"],
  },
];

const INDUSTRIES: { i: IconName; t: string; d: string }[] = [
  { i: "activity", t: "Healthcare", d: "Telemedicine, patient management, appointment scheduling, and AI-assisted healthcare tools." },
  { i: "landmark", t: "Financial Services", d: "Digital banking, payment solutions, lending, investment platforms, and fraud detection." },
  { i: "cart", t: "Retail & eCommerce", d: "Omnichannel commerce, marketplaces, inventory management, and loyalty programs." },
  { i: "factory", t: "Manufacturing", d: "Production management, warehouse automation, supplier portals, and quality management." },
  { i: "truck", t: "Logistics & Transportation", d: "Fleet management, shipment tracking, route optimization, and delivery platforms." },
  { i: "home", t: "Real Estate", d: "Property management, CRM, listing portals, and tenant management applications." },
  { i: "book", t: "Education", d: "Learning Management Systems, virtual classrooms, and student information systems." },
  { i: "send", t: "Travel & Hospitality", d: "Booking engines, travel management, hotel reservations, and loyalty platforms." },
  { i: "shield", t: "Insurance", d: "Policy management, claims processing, underwriting platforms, and fraud detection." },
];

const TRANSFORM_CHIPS: { i: IconName; t: string }[] = [
  { i: "refresh", t: "Legacy System Modernization" },
  { i: "cloud", t: "Cloud Migration & Optimization" },
  { i: "cpu", t: "AI Integration" },
  { i: "repeat", t: "Business Process Automation" },
  { i: "link", t: "API-First Architecture" },
  { i: "grid", t: "Microservices Development" },
  { i: "barChart", t: "Data Analytics & BI" },
  { i: "server", t: "Enterprise Integration" },
  { i: "infinity", t: "DevOps Automation" },
  { i: "zap", t: "Performance Optimization" },
];

const PROCESS: { n: string; t: string; d: string; tags: string[] }[] = [
  { n: "01", t: "Discovery & Product Strategy", d: "Business & stakeholder workshops, product vision alignment, user journey mapping, technical feasibility assessment, and roadmap creation.", tags: ["Stakeholder Workshops", "Feature Prioritization", "Architecture Planning"] },
  { n: "02", t: "Agile Engineering & Continuous Delivery", d: "Sprint planning, weekly progress reviews, product demonstrations, CI/CD, automated testing, and transparent reporting.", tags: ["Sprint Planning", "CI/CD", "Automated Testing"] },
  { n: "03", t: "Quality Built into Every Release", d: "Our QA engineers work alongside developers from day one, ensuring every feature meets functional, performance, usability, and security standards.", tags: ["Functional Testing", "Performance Testing", "UAT"] },
  { n: "04", t: "Security by Design", d: "Secure coding standards, role-based access control, multi-factor authentication, data encryption, and compliance-ready architecture from day one.", tags: ["Secure APIs", "MFA", "Vulnerability Assessments"] },
];

const TECH: { i: IconName; t: string; items: ReactNode[] }[] = [
  { i: "layout", t: "Frontend", items: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript"] },
  { i: "server", t: "Backend", items: ["Node.js", "Java", "Python", ".NET", "Laravel", "Spring Boot"] },
  { i: "phone", t: "Mobile", items: [<Link href="/flutter-app-development-company" key="f">Flutter</Link>, <Link href="/react-native-app-development-company" key="r">React Native</Link>, "Native Android", "Native iOS"] },
  { i: "cloud", t: "Cloud & DevOps", items: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform"] },
  { i: "cpu", t: "Artificial Intelligence", items: ["OpenAI", "LangChain", "RAG", "AI Agents", "Machine Learning", "NLP"] },
  { i: "database", t: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis"] },
];

const TRUST: { i: IconName; t: string }[] = [
  { i: "award", t: "14+ Years of Experience" },
  { i: "globe", t: "500+ Global Clients Served" },
  { i: "rocket", t: "Enterprise, SaaS & AI Expertise" },
  { i: "code", t: "Experienced Architects & Engineers" },
  { i: "refresh", t: "Agile Development Methodology" },
  { i: "clipboard", t: "Dedicated Project Managers" },
  { i: "message", t: "Transparent Communication" },
  { i: "trendingUp", t: "Scalable Delivery Models" },
  { i: "tool", t: "Post-Launch Support & Continuous Improvement" },
  { i: "target", t: "Focus on Long-Term Business Success" },
];

const STORIES: { i: IconName; t: string; challenge: string; solution: string; outcome: string }[] = [
  { i: "building", t: "Enterprise Business Management Platform", challenge: "A growing enterprise relied on multiple disconnected systems, leading to duplicate data, manual processes, and limited operational visibility.", solution: "We developed a centralized business management platform integrating core business functions, workflow automation, and real-time reporting.", outcome: "Improved efficiency, better decision-making, reduced manual effort, scalable architecture" },
  { i: "cpu", t: "AI-Powered Customer Support Solution", challenge: "A service-based organization wanted to improve customer response times while reducing the workload on support teams.", solution: "We developed an AI-powered virtual assistant integrated with the company's knowledge base for intelligent conversations and automated query resolution.", outcome: "Faster responses, improved efficiency, higher satisfaction, lower operational costs" },
  { i: "cloud", t: "Cloud-Based SaaS Product", challenge: "A startup required a secure, scalable SaaS platform capable of supporting rapid customer growth.", solution: "We built a cloud-native SaaS application with subscription management, authentication, API integrations, and analytics dashboards.", outcome: "Faster launch, improved UX, scalable infrastructure, foundation for growth" },
  { i: "factory", t: "Legacy System Modernization for a Manufacturing Enterprise", challenge: "A mid-market manufacturer was running production operations on an outdated on-premise system that limited visibility and slowed decision-making.", solution: "We modernized the platform with a cloud-native architecture, real-time production dashboards, and API integrations with the client's existing ERP system.", outcome: "Reduced downtime, faster reporting, better cross-team visibility, future-ready infrastructure" },
];

const CITIES = ["New York", "San Francisco Bay Area", "Austin", "Chicago", "Boston", "Seattle", "Dallas", "Philadelphia", "Washington D.C.", "Delaware"];

const FAQS: { q: string; a: string }[] = [
  { q: "Why choose mTouch Labs as your software development company in the USA?", a: "mTouch Labs combines over 14 years of software development experience with expertise in AI, enterprise software, cloud technologies, SaaS platforms, and digital transformation. We work as a long-term technology partner, helping businesses build scalable software solutions aligned with their growth objectives." },
  { q: "What software development services do you provide?", a: "We offer custom software development, enterprise application development, SaaS product development, AI-powered software solutions, web application development, mobile app development, cloud engineering, API integrations, software modernization, DevOps, and ongoing maintenance & support." },
  { q: "Do you work with startups as well as enterprises?", a: "Yes. We work with startups, SMBs, ISVs, and large enterprises. Whether you're validating an MVP, launching a SaaS platform, or modernizing enterprise systems, we tailor our engagement model to your business stage and technical requirements." },
  { q: "Can you modernize our legacy software?", a: "Absolutely. We help businesses modernize legacy applications by upgrading technologies, migrating to the cloud, improving performance, enhancing security, redesigning user experiences, and integrating modern APIs while minimizing business disruption." },
  { q: "What industries do you serve?", a: "Our team has experience developing software solutions for healthcare, fintech, retail, eCommerce, manufacturing, logistics, transportation, education, travel, hospitality, real estate, and on-demand service businesses." },
  { q: "Do you provide AI software development services?", a: "Yes. Our AI expertise includes Generative AI applications, AI chatbots, intelligent document processing, Retrieval-Augmented Generation (RAG), workflow automation, recommendation engines, predictive analytics, and Large Language Model integrations that help businesses automate processes and improve decision-making." },
  { q: "How do you ensure software quality and security?", a: "Quality and security are integrated throughout our development lifecycle. We follow secure coding standards, automated testing, code reviews, CI/CD pipelines, vulnerability assessments, performance testing, and continuous monitoring to deliver reliable and secure software solutions." },
  { q: "Do you provide post-launch support and maintenance?", a: "Yes. We offer long-term maintenance, feature enhancements, security updates, cloud monitoring, performance optimization, bug fixes, and technical support to ensure your software continues to evolve with your business." },
  { q: "How long does a software development project take?", a: "Project timelines vary depending on the scope, complexity, technology stack, and business requirements. After the discovery phase, we provide a detailed project roadmap with estimated milestones, deliverables, and timelines." },
  { q: "How do I get started with mTouch Labs?", a: "Simply contact our team to schedule a free consultation. We'll understand your business goals, evaluate your project requirements, recommend the most suitable technology approach, and provide a customized proposal to help you move forward with confidence." },
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
.loc-introTag:hover{transform:translateY(-2px);border-color:#C7D2FE;box-shadow:0 6px 14px rgba(67,56,202,.1)}
.loc-introTag a{color:inherit}
.loc-introTag a:hover{color:var(--a2)}

/* ── icon tiles ── */
.loc-tile{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:var(--tile);border:1px solid #E3E9F7;color:var(--a1);margin-bottom:1.05rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease),box-shadow .3s}
.loc-tile--sm{width:44px;height:44px;border-radius:13px;margin-bottom:0;flex-shrink:0}
.loc-tile--round{width:54px;height:54px;border-radius:50%;margin:0 auto .85rem}
.loc-serviceCard:hover .loc-tile,.loc-whyCard:hover .loc-tile,.loc-industryCard:hover .loc-tile{background:var(--grad);border-color:transparent;color:#fff;transform:translateY(-2px) rotate(-5deg) scale(1.06);box-shadow:0 10px 20px rgba(67,56,202,.26)}

/* ── stat cards ── */
.loc-introStats{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;align-content:start}
.loc-statCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem .9rem;text-align:center;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-statCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-statIcon{width:36px;height:36px;margin:0 auto .55rem;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-statCard:hover .loc-statIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-statNum{font-family:'Sora','Inter',sans-serif;font-size:1.5rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.15}
.loc-statLabel{margin-top:.25rem;font-size:.8rem;font-weight:600;color:var(--ink-soft);line-height:1.4}

/* ── card grids ── */
.loc-servicesGrid,.loc-whyGrid,.loc-industriesGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;align-items:stretch}
.loc-serviceCard,.loc-whyCard,.loc-industryCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.7rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s;display:flex;flex-direction:column;height:100%;overflow:hidden}
.loc-serviceCard::after,.loc-whyCard::after,.loc-industryCard::after{content:'';position:absolute;inset:0 0 auto 0;height:3px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease)}
.loc-serviceCard:hover::after,.loc-whyCard:hover::after,.loc-industryCard:hover::after{transform:scaleX(1)}
.loc-serviceCard:hover,.loc-whyCard:hover,.loc-industryCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
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
.loc-chipCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-chipCard:hover .loc-chipIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}

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

/* ── timeline ── */
.loc-timeline{position:relative;max-width:800px;margin:0 auto}
.loc-timeline::before{content:'';position:absolute;left:27px;top:10px;bottom:10px;width:2px;background:linear-gradient(180deg,#4338CA,#0EA5E9,#E6EAF2)}
.loc-timelineItem{position:relative;display:flex;gap:1.4rem;padding-bottom:2rem}
.loc-timelineItem:last-child{padding-bottom:0}
.loc-timelineDot{position:relative;z-index:1;flex-shrink:0;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--grad);color:#fff;font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:1.05rem;box-shadow:0 6px 16px rgba(67,56,202,.28)}
.loc-timelineDot::after{content:'';position:absolute;inset:-6px;border-radius:50%;border:1.5px solid #C7D2FE;opacity:0;transform:scale(.85);transition:opacity .35s,transform .35s var(--ease)}
.loc-timelineItem:hover .loc-timelineDot::after{opacity:1;transform:scale(1)}
.loc-timelineBody{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem 1.55rem;flex:1;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-timelineItem:hover .loc-timelineBody{transform:translateX(5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-timelineTitle{font-size:1.04rem;font-weight:700;color:var(--ink);margin:0 0 .35rem}
.loc-timelineDesc{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.68}
.loc-timelineBody .loc-detailTagRow{margin-top:.75rem}

/* ── story cards ── */
.loc-engageGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem}
.loc-engageCard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-engageCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.loc-engageIcon{width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;background:var(--grad);color:#fff;border-radius:15px;margin-bottom:1.05rem;box-shadow:0 8px 18px rgba(67,56,202,.24);transition:transform .35s var(--ease)}
.loc-engageCard:hover .loc-engageIcon{transform:rotate(-6deg) scale(1.06)}
.loc-engageTitle{font-family:'Sora','Inter',sans-serif;font-size:1.1rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.loc-engageDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.72;margin:0 0 .8rem}
.loc-engageDesc strong{color:var(--ink)}
.loc-engageBest{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:700;color:var(--a1);background:var(--bg-alt);padding:.5rem .9rem;border-radius:10px;margin-top:.2rem}

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
export default function SoftwareDevelopmentCompanyUSA() {
  return (
    <div className="loc-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
      <style>{LOC_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationBreadcrumb) }} />

      {/* ═══ BREADCRUMB ═══ */}
      <nav className="loc-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="loc-breadcrumbSep">/</span>
        <Link href="/services">Locations</Link>
        <span className="loc-breadcrumbSep">/</span>
        <span className="loc-breadcrumbCurrent">Software Development Company in USA</span>
      </nav>

      {/* ═══ HERO ═══ */}
      <ServiceHero
        badge="mTouch Labs · United States"
        titleLead="Software Development Company in the"
        titleAccent="USA"
        description={<>Build Intelligent Software That Accelerates Business Growth — for startups, growing businesses, ISVs, and enterprises across the United States.</>}
      />

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Build Intelligent Software That Accelerates Business Growth</h2>
              <p className="loc-introText">Technology is no longer just a support function — it has become the driving force behind business innovation, customer experience, and competitive advantage. Whether you&apos;re launching a SaaS platform, modernizing legacy systems, building AI-powered applications, or developing enterprise software, success depends on choosing the right technology partner.</p>
              <p className="loc-introText">mTouch Labs helps startups, growing businesses, ISVs, and enterprises across the United States transform ideas into scalable digital products. As a trusted <strong>Software Development Company in the USA</strong>, we combine strategic consulting, modern software engineering, <Link href="/ai-development-company">AI expertise</Link>, and cloud technologies to build secure, high-performance solutions that deliver measurable business outcomes.</p>
              <p className="loc-introText">From product discovery to architecture design, <Link href="/software-product-development-company">software development</Link>, cloud deployment, and continuous optimization, our experienced engineering teams work alongside your business to deliver software that creates lasting value.</p>
              <div className="loc-introTags">
                {["SaaS Products", "Enterprise Software", "AI-Powered Solutions", "Web Portals", "Mobile Applications"].map((x) => <span className="loc-introTag" key={x}>{x}</span>)}
              </div>
            </div>
            <div className="loc-introStats">{INTRO_STATS.map((s) => <Stat key={s.l} {...s} />)}</div>
          </div>
        </div>
      </section>

      {/* ═══ WHY BUSINESSES PARTNER WITH US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Businesses Across the USA Partner with <span className="loc-highlight">mTouch Labs</span></h2>
            <p className="loc-sectionDesc">Building successful software requires more than technical expertise. It demands a partner who understands your business objectives, industry challenges, users, and long-term vision. We work as an extension of your team — not just another software vendor — helping organizations innovate faster, reduce development risks, and deliver products that create measurable business value.</p>
          </div>
          <div className="loc-whyGrid">{WHY_PARTNER.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ CHALLENGES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Business Challenges We <span className="loc-highlight">Help Solve</span></h2>
            <p className="loc-sectionDesc">Every organization faces unique technology challenges. Some businesses are launching their first digital product, while others need to modernize outdated systems, improve customer experiences, or scale rapidly growing platforms.</p>
          </div>
          <div className="loc-whyGrid">{CHALLENGES.map((c) => <Why key={c.t} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What Makes <span className="loc-highlight">mTouch Labs Different?</span></h2>
            <p className="loc-sectionDesc">Many software companies can build applications. We focus on building business success through technology — combining strategic thinking, modern engineering practices, and long-term partnership across AI, enterprise software, cloud platforms, and SaaS products.</p>
          </div>
          <div className="loc-whyGrid">{DIFFERENT.map((w) => <Why key={w.t} {...w} />)}</div>
          <p className="loc-sectionDesc loc-descStandalone">We believe successful software is measured not by the number of features delivered, but by the business impact it creates — improved productivity, increased revenue, enhanced customer experiences, or operational efficiency.</p>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Engineering Capabilities That Drive <span className="loc-highlight">Business Growth</span></h2>
            <p className="loc-sectionDesc">We don&apos;t believe in one-size-fits-all software solutions. Every application is built around your workflows, ensuring flexibility, efficiency, and a competitive advantage.</p>
          </div>
          <div className="loc-servicesGrid">{SERVICES.map((s) => <Svc key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ CAPABILITIES IN DETAIL ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Capabilities — <span className="loc-highlight">In Detail</span></h2>
            <p className="loc-sectionDesc">A closer look at each capability, and the solutions built around it.</p>
          </div>
          <div className="loc-detailGrid">{CAPABILITIES.map((c) => <Detail key={c.n} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Help <span className="loc-highlight">Transform</span></h2>
            <p className="loc-sectionDesc">Every industry has unique operational challenges, customer expectations, and regulatory requirements. Our experience across multiple business domains allows us to build software that aligns with industry-specific needs while remaining flexible enough to support future growth.</p>
          </div>
          <div className="loc-industriesGrid">{INDUSTRIES.map((x) => <Industry key={x.t} {...x} />)}</div>
        </div>
      </section>

      {/* ═══ DIGITAL TRANSFORMATION ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Accelerating Digital Transformation with <span className="loc-highlight">AI & Cloud</span></h2>
            <p className="loc-sectionDesc">Digital transformation is more than adopting new technology — it&apos;s about creating smarter business processes, better customer experiences, and scalable digital operations by combining cloud computing, AI, automation, and modern software engineering.</p>
          </div>
          <div className="loc-chipGrid">{TRANSFORM_CHIPS.map((c) => <Chip key={c.t} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">How We Deliver Successful <span className="loc-highlight">Software Projects</span></h2>
            <p className="loc-sectionDesc">Building successful software isn&apos;t just about writing code — it&apos;s about understanding business objectives, reducing risk, and delivering technology that creates measurable value. We&apos;ve refined our approach over 14+ years to ensure every project is delivered with transparency, agility, and quality.</p>
          </div>
          <div className="loc-timeline">{PROCESS.map((p) => <Step key={p.n} {...p} />)}</div>
        </div>
      </section>

      {/* ═══ TECHNOLOGIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Modern Technology <span className="loc-highlight">Ecosystem</span></h2>
            <p className="loc-sectionDesc">Technology decisions directly influence software performance, scalability, and long-term maintainability. We select technologies based on business objectives, scalability requirements, and long-term maintainability rather than following technology trends alone.</p>
          </div>
          <div className="loc-whyGrid">{TECH.map((t) => <Tech key={t.t} {...t} />)}</div>
        </div>
      </section>

      {/* ═══ WHY LEADING BUSINESSES TRUST US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Leading Businesses Trust <span className="loc-highlight">mTouch Labs</span></h2>
            <p className="loc-sectionDesc">Choosing a software development partner is a long-term investment. For over 14 years, mTouch Labs has partnered with startups, SMBs, enterprises, and global organizations to build software that drives innovation and business growth. Our success is measured by the value we create for our clients — not just the software we deliver.</p>
          </div>
          <div className="loc-whyGrid">{TRUST.map((w) => <Why key={w.t} {...w} />)}</div>
        </div>
      </section>

      {/* ═══ SUCCESS STORIES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Success Stories That Create <span className="loc-highlight">Business Impact</span></h2>
            <p className="loc-sectionDesc">Over the years, we&apos;ve helped organizations transform ideas into successful digital products across multiple industries. Here are a few examples of the types of business outcomes we deliver.</p>
          </div>
          <div className="loc-engageGrid">{STORIES.map((s) => <Story key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ OFFICE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid" style={{ alignItems: "stretch" }}>
            <div>
              <h2 className="loc-introTitle">Visit Our USA Office</h2>
              <p className="loc-introText">Looking for a reliable software development company in the USA? Meet our experts to discuss your project requirements, digital transformation initiatives, or product ideas. Whether you&apos;re planning a custom software application, AI-powered solution, enterprise platform, SaaS product, or mobile application, our consultants are ready to help you identify the right technology strategy for your business.</p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mapPin" size={18} /></span><span><strong>mTouch Labs — US Operations</strong> — 1111B South Governors Avenue, Suite 48193, Dover, DE 19904, United States</span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="phoneCall" size={18} /></span><span><a href="tel:+15512220070">+1 (551) 222-0070</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="mail" size={18} /></span><span><a href="mailto:contact@mtouchlabs.com">contact@mtouchlabs.com</a></span></p>
              <p className="loc-contactRow"><span className="loc-ci"><Icon name="clock" size={18} /></span><span>Monday – Friday | 9:00 AM – 6:00 PM EST</span></p>
              <p className="loc-introText"><strong>Serving businesses nationwide, including:</strong></p>
              <div className="loc-introTags">{CITIES.map((c) => <span className="loc-introTag" key={c}>{c}</span>)}</div>
            </div>
            <div className="loc-officeRightCol">
              <div className="loc-introStats">
                <Stat i="building" l="Dover, Delaware HQ" />
                <Stat i="clock" n="Mon–Fri" l="9:00 AM – 6:00 PM EST" />
                <Stat i="globe" l="Nationwide Delivery" />
                <Stat i="message" l="Free Consultation" />
              </div>
              <div className="loc-mapWrap">
                <iframe
                  className="loc-mapFrame"
                  src="https://www.google.com/maps?q=1111B+South+Governors+Avenue+Suite+48193+Dover+DE+19904&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="mTouch Labs USA Office Location"
                />
                <a href="https://maps.app.goo.gl/RUQSXXJ8hCP2RMRd7" target="_blank" rel="noopener noreferrer" className="loc-mapOverlay" aria-label="Open mTouch Labs USA office in Google Maps" />
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
          <h2 className="loc-ctaTitle">Let&apos;s Build Software That Moves Your Business Forward</h2>
          <p className="loc-ctaDesc">At mTouch Labs, we combine strategic consulting, modern software engineering, AI expertise, and cloud technologies to help businesses across the USA build scalable, secure, and future-ready digital solutions. From product strategy and UX design to development, deployment, and continuous optimization, we deliver end-to-end software solutions that align technology with business outcomes.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary"><Icon name="phoneCall" size={17} />Book a Free Consultation</Link>
            <Link href="/contact-us" className="loc-ctaBtnSecondary">Request Proposal</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
    </div>
  );
}