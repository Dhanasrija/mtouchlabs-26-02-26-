import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { sql } from "@/lib/db";
import "./home-landing.css";

/* ═══════════════════════════════════════════════════════════════
   mTouch Labs — HOMEPAGE

   The previous homepage (~20 client section components) is preserved
   verbatim at the bottom of this file, commented out with `//`.

   DESIGN — an editorial page, deliberately NOT the /services look.
   /services is all-light boxed icon cards with centred headings;
   this alternates full-bleed Deep Indigo bands with paper, sets its
   headings flush-left under a Bright Horizon rule, and numbers its
   content instead of boxing it. Colours come only from brand.css:
   Deep Indigo surfaces, Bright Horizon accents, Signature Blue kept
   in reserve for links and the primary button so it is always the
   most saturated thing on screen.

   ONE call to action, at the very bottom. No mid-page CTA bands, no
   inline lead form — every path converges on the closing section.

   SPEED — one server component, zero client JS beyond a ~15-line
   inline reveal script. No image above the fold, so LCP is a text
   node. Icons come from the Font Awesome sheet the root layout
   already loads, so this page adds no network request.

   Navbar, footer, chat widget and WhatsApp button are untouched —
   they live in app/layout.tsx and are shared by every route.
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  /* `absolute` is required. The root layout sets a title template of
     "%s | mTouch Labs", so a plain string ending in the brand would ship
     it twice -- which is the double-pipe problem the SEO audit flagged. */
  title: { absolute: "Custom Software Development & AI Company | mTouch Labs" },
  description:
    "mTouch Labs is a Hyderabad software company building custom software, enterprise applications, mobile apps, and AI solutions for businesses worldwide.",
  /* NOTE: no `alternates.canonical` here, deliberately. Next 14 resolves
     metadata URLs with a hardcoded `pathname === "/" ? origin : href`, so
     a root canonical always loses its trailing slash and stops matching
     the URL the page is served at. It is emitted as a literal <link> in
     the component below instead -- do not re-add it here or the page
     ships two canonicals. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Custom Software Development & AI Company | mTouch Labs",
    description:
      "mTouch Labs is a Hyderabad software company building custom software, enterprise applications, mobile apps, and AI solutions for businesses worldwide.",
    url: "https://www.mtouchlabs.com/",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        /* The social card.

           NOTE the filename. The file added to public/images is called
           "og-image .jpeg" -- with a space before the extension. A space
           in a URL has to be percent-encoded as %20, and several
           scrapers (LinkedIn especially) simply fail to fetch it. This
           points at the space-free name; rename the file to match and
           the preview works everywhere.

           Deliberately NOT the same asset as the Organization `logo`,
           which stays /images/Light.png: Google's knowledge panel wants
           a clean square-ish mark, social platforms want a 1200x630
           landscape card, and one file cannot serve both well. */
        url: "https://www.mtouchlabs.com/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "mTouch Labs - Custom Software Development & AI Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    /* A page-level `twitter` object replaces the parent's entirely, so
       the handles from app/layout.tsx have to be restated or they vanish. */
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Custom Software Development & AI Company | mTouch Labs",
    description:
      "mTouch Labs is a Hyderabad software company building custom software, enterprise applications, mobile apps, and AI solutions for businesses worldwide.",
    images: ["https://www.mtouchlabs.com/images/og-image.jpeg"],
  },
};

/* ─────────────────────────────────────────────────────────────
   DATA — module scope, so it is evaluated once and mapped over.
   ───────────────────────────────────────────────────────────── */

/** Stagger index for the scroll-reveal animation (see home-landing.css). */
const d = (i: number): CSSProperties => ({ "--d": i } as CSSProperties);

/**
 * Tilted arrow for the blue primary buttons.
 * Drawn inline instead of using `fa-arrow-up-right`: that glyph is missing
 * from some builds of the Font Awesome free set, and an absent glyph renders
 * as nothing — which is exactly what happened. An SVG always paints.
 */
const ArrowUpRight = () => (
  <svg className="hmx-ar" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
    <path
      d="M3.4 10.6 10.6 3.4M4.9 3.4h5.7v5.7"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


/*
 * THE LOCKED FACT SHEET.
 *
 * These are the only values allowed anywhere on the site. The audit found
 * the same items stated differently in different sections (1.5k vs 500+
 * clients, 2014 vs 2012, 30+ vs 12+ countries), which is what stops a
 * search engine or a language model quoting any of them with confidence.
 *
 *   Brand              mTouch Labs
 *   Legal name         mTouch Labs Private Limited
 *   Incorporated       30 August 2012
 *   Experience         14+ years
 *   Projects           1,500+          (one word for it: "projects")
 *   Clients            500+
 *   Countries          12+
 *   HQ                 Hyderabad, Telangana
 *   Other offices      Bengaluru, India; Dover, Delaware, USA
 *   Certifications     ISO 9001 + ISO 27001
 *   Membership         NASSCOM
 *   Public sector      Government of Telangana; Government of Abu Dhabi
 *
 * Anything on any page that restates one of these must quote it from
 * lib/facts.ts, not retype it.
 */
import { FACTS } from "@/lib/facts";

/*
 * WHO WE ARE -- one self-contained paragraph, built from FACTS.
 *
 * Written to be lifted whole: a language model answering "who is mTouch
 * Labs" can quote this without needing any surrounding context, and every
 * claim in it is checkable on the site. The About section renders it
 * verbatim and public/.well-known/llms.txt carries the same sentences.
 */
const WHO_WE_ARE =
  `${FACTS.legalName} (trading as ${FACTS.brand}) is a software development company ` +
  `incorporated on ${FACTS.incorporated} and headquartered in ${FACTS.hq}, India, with ` +
  `additional offices in ${FACTS.otherOffices}. It builds custom software, enterprise ` +
  `applications, AI-powered products, mobile apps, web platforms and SaaS products, and has ` +
  `delivered ${FACTS.projects} projects for ${FACTS.clients} clients across ${FACTS.countries} ` +
  `countries in ${FACTS.experience} of operation. mTouch Labs is ${FACTS.certifications} ` +
  `certified and a ${FACTS.membership} member, has delivered platforms for the ` +
  `${FACTS.publicSector}, and won the Digital Transformation Catalyst award at the NASSCOM ` +
  `SME Inspire Awards 2026.`;

/*
 * The four boxes beside the "Custom software development built around
 * real business needs" heading. Four, not six: the six differentiators
 * live in their own section further down, and repeating them here made
 * the two sections argue.
 *
 * Locations quoted from FACTS so they stay in step with the schema.
 */
const reasons = [
  { k: "Hyderabad-based", v: `Engineering team headquartered in ${FACTS.hq}, with offices in Bengaluru and Delaware.` },
  { k: "Enterprise & Government", v: "Experience delivering software for private organizations and public-sector teams." },
  { k: "Full Product Lifecycle", v: "From discovery and UX to engineering, deployment, and ongoing support." },
  { k: "Engineering-led", v: "Custom solutions built around your business processes rather than one-size-fits-all software." },
];


/*
 * HOW WE BUILD -- the five delivery steps.
 *
 * Named `buildSteps`, not `process`: a module-scope `const process`
 * shadows Node's global `process` for the whole file, which silently
 * broke `process.env.NODE_ENV` below.
 *
 * Sits directly after Core Services: the services grid says what we
 * build, this says how it gets built. Rendered as a horizontal track, so
 * the sequence is legible at a glance rather than read as a list.
 */
const buildSteps = [
  /* Supplied artwork from public/images/hero-new-work, replacing the
     numeral chips. `alt=""` throughout: the step's own heading names it,
     so described icons would double up for a screen reader. */
  { img: "/images/hero-new-work/how_we_work_icon1.svg", n: "01", k: "Discover", v: "Understand your business goals, users, requirements, and technical needs." },
  { img: "/images/hero-new-work/how_we_work_icon2.svg", n: "02", k: "Design", v: "Define the product experience, user flows, technical architecture, and development roadmap." },
  { img: "/images/hero-new-work/how_we_work_icon3.svg", n: "03", k: "Build", v: "Develop the software, integrate required systems, and continuously test the product." },
  { img: "/images/hero-new-work/how_we_work_icon4.svg", n: "04", k: "Launch", v: "Deploy the solution, complete final validation, and prepare it for real-world use." },
  { img: "/images/hero-new-work/how_we_work_icon5.svg", n: "05", k: "Improve", v: "Monitor, maintain, optimize, and evolve the product as your business and users grow." },
];



/*
 * The hero proof band.
 *
 * The four marks are WebP, converted from the supplied SVGs. Those files
 * were not vector: each was a <rect> filled with a <pattern> wrapping an
 * embedded base64 bitmap, which is why they weighed what they did --
 * stat3.svg alone was 985 KB for a 50px icon. Converted at 2x the
 * display size:
 *
 *     stat1   79 KB  ->  5.0 KB
 *     stat2   17 KB  ->  2.5 KB
 *     stat3  985 KB  ->  7.1 KB
 *     stat4  707 KB  ->  4.3 KB
 *     -----------------------------
 *     total 1.79 MB  ->  18.9 KB   (99% smaller)
 *
 * That 1.77 MB was loading eagerly above the fold, on a page whose hero
 * was deliberately stripped of its 2.5 MB illustration to make the LCP a
 * text node. The .svg originals are still in the folder untouched.
 *
 * Figures are quoted from FACTS, so the band cannot disagree with the
 * schema or /llms.txt.
 */
const stats = [
  { img: "/images/hero-new-work/stat1.webp", imgAlt: "", n: FACTS.experience, k: "Years" },
  { img: "/images/hero-new-work/stat2.webp", imgAlt: "", n: FACTS.projects, k: "Projects" },
  /* Just "ISO Certified". The standard numbers were doing nothing for a
     visitor scanning a four-item proof band -- they made this tile twice
     the width of its neighbours and read as a part number. The specific
     certifications are still stated in full in FACTS and in the
     Quality & Security Standards card further down the page. */
  { img: "/images/hero-new-work/stat3.webp", imgAlt: "ISO certified", n: "ISO", k: "Certified" },
  { img: "/images/hero-new-work/stat4.webp", imgAlt: "NASSCOM SME Inspire Awards 2026", n: "NASSCOM SME", k: "Inspire 2026 Award" },
];








const services = [
  {
    id: "custom-software",
    icon: "fa-solid fa-cubes",
    title: "Custom Software Development",
    desc: "Built around your business: bespoke apps, portals and workflow automation.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Custom software development services — bespoke business applications, portals, dashboards and workflow automation built around your processes.",
    link: "/custom-software-development-company",
    label: "Explore Custom Software",
  },
  {
    id: "enterprise-software",
    icon: "fa-solid fa-building-columns",
    title: "Enterprise Software Development",
    desc: "Powering complex operations with scalable, deeply integrated platforms.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Enterprise software development services — scalable platforms, system integration, and ERP and CRM connectivity for complex operations.",
    link: "/enterprise-application-development-company",
    label: "Explore Enterprise Software",
  },
  {
    id: "ai-software",
    icon: "fa-solid fa-brain",
    title: "Custom AI Software Development",
    desc: "Smarter business automation — AI agents, RAG and generative AI in production.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Custom AI software development services — AI agents, generative AI, RAG pipelines and intelligent process automation inside real workflows.",
    link: "/generative-ai-development-company",
    label: "Explore AI Development",
  },
  {
    id: "mobile-apps",
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    desc: "Apps that drive engagement across native iOS, Android and Flutter.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Mobile app development services — native iOS, native Android, Flutter and React Native applications with scalable backends.",
    link: "/mobile-app-development-company",
    label: "Explore Mobile Apps",
  },
  {
    id: "web-apps",
    icon: "fa-solid fa-display",
    title: "Web Application Development",
    desc: "Secure, scalable experiences built on React, Next.js and solid APIs.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Web application development services — React and Next.js portals, dashboards, progressive web apps and secure business platforms.",
    link: "/web-development-company",
    label: "Explore Web Applications",
  },
  {
    id: "saas",
    icon: "fa-solid fa-layer-group",
    title: "SaaS & Product Development",
    desc: "From idea to market: MVP, multi-tenant architecture and billing.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "SaaS product development services — MVP build, multi-tenant architecture, subscription billing and cloud-native continuous release.",
    link: "/saas-development-services",
    label: "Explore SaaS Development",
  },
  {
    id: "cloud",
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Cloud & Software Modernization",
    desc: "Future-ready infrastructure through AWS and Azure modernization.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "Cloud migration and application modernization services — AWS and Azure re-platforming of legacy systems toward cloud-native architecture.",
    link: "/cloud-migration-services",
    label: "Explore Modernization",
  },
  {
    id: "ui-ux",
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    desc: "Designed for better experiences: research, design systems, prototypes.",
    /* Long-form copy for the JSON-LD Service entry only — the card shows
       the tagline above. */
    seo: "UI/UX design services — user research, information architecture, wireframes, design systems and interactive prototypes.",
    link: "/ui-ux-design-company",
    label: "Explore UI/UX Design",
  },
];

/* Copy is the approved wording. Each card links to a real, published
   project page, so the section carries genuine internal links. */
const caseStudies = [
  {
    n: "01",
    title: "Enterprise Digital Solution",
    tag: "Government · E-Commerce · Telangana",
    headline: "A digital commerce platform for Telangana\u2019s Department of Handlooms",
    img: "/images/portfolio/golkonda.webp",
    imgAlt: "Telangana State Government e-commerce platform built by mTouch Labs",
    challenge:
      "The Department of Handlooms needed a digital platform to bring handloom products to a wider audience and support online commerce through a centralized experience.",
    solution:
      "We designed and developed a digital commerce platform that brings handloom products together in one online experience, supporting product discovery and digital commerce workflows.",
    result:
      "A centralized digital solution that simplified business processes and provided a stronger foundation for continued growth.",
    link: "/portfolio/telangana-ecommerce-mobile-app-development",  // Telangana Govt portfolio
  },
  {
    n: "02",
    title: "AI-Powered E-Commerce Platform",
    tag: "E-Commerce & Retail · Headless Commerce",
    headline: "A legacy storefront rebuilt for speed, search and personalization",
    img: "/images/portfolio/ecommerce-platform.webp",
    imgAlt: "AI-powered e-commerce platform built by mTouch Labs",
    challenge:
      "An established retailer with a 50,000+ SKU catalogue was losing customers to 6.2-second mobile page loads, a 78% cart abandonment rate, and inventory updates that took up to 24 hours to reach the storefront.",
    solution:
      "mTouch Labs rebuilt the storefront on a headless architecture — a Next.js front end over a Node.js commerce API — and added AI product recommendations, advanced search, real-time inventory synchronization and a one-page checkout.",
    result:
      "Conversion rose from 1.2% to 3.7%, mobile load fell from 6.2s to 0.9s, cart abandonment dropped to 51%, and AI recommendations drove 24% of GMV within 30 days.",
    link: "/case-studies/ecommerce-retail-platform",
  },
  {
    n: "03",
    title: "Healthcare Mobile Application",
    tag: "Healthcare · iOS & Android",
    headline: "Appointments, records and doctor contact in one app",
    img: "/images/portfolio/healthcare-app.webp",
    imgAlt: "Healthcare mobile application built by mTouch Labs",
    challenge:
      "Patients had to move between separate processes to book an appointment, find their health information, and reach a doctor — every routine task meant starting somewhere new.",
    solution:
      "mTouch Labs built a cross-platform application in Flutter, with Node.js and Firebase behind it, bringing appointment booking, patient information, doctor communication and reminders into one place on iOS and Android.",
    result:
      "Routine healthcare interactions moved into a single mobile journey, cutting manual coordination for the care team and giving the organization a foundation to extend.",
    link: "/case-studies/healthcare-mobile-app-development",
  },
];

/*
 * WHY BUSINESSES CHOOSE mTOUCH LABS -- six differentiators.
 *
 * Was nine icon cards. Now six, matching the themes the SEO audit
 * recommended for this section, and rendered in the same hairline matrix
 * as Core Services so the two read as one system.
 *
 * No `icon` field any more: the cards carry type only.
 */
const whyChoose = [
  {
    n: "01",
    title: `${FACTS.experience} Years of Experience`,
    desc: "Long-standing experience delivering software, mobile applications, web platforms, and AI solutions for organizations across different markets.",
  },
  {
    n: "02",
    title: "Enterprise & Government Experience",
    desc: "Experience delivering digital solutions for private organizations and public-sector teams, including the Government of Telangana and the Government of Abu Dhabi.",
  },
  {
    n: "03",
    title: "Quality & Security Standards",
    desc: "Our delivery practices are supported by ISO 9001 and ISO 27001 certifications.",
  },
  {
    n: "04",
    title: "One Team From Idea to Scale",
    desc: "Work with one engineering partner across discovery, design, development, testing, deployment, and ongoing improvement.",
  },
  {
    n: "05",
    title: "Flexible Engagement Models",
    desc: "Choose an engagement approach that fits your project, from end-to-end product development to dedicated engineering support.",
  },
  {
    n: "06",
    title: "Global Delivery",
    desc: "Teams across Hyderabad, Bengaluru, and Delaware support clients across India, the US, the Gulf, and other international markets.",
  },
];

/*
 * The three offices, with their real details.
 *
 * Every value here is taken from /contact-us -- the street addresses,
 * the per-office phone numbers, the shared inbox and the Google Maps
 * short links. Nothing is invented and nothing is scraped: these are the
 * same constants that page renders, so the two can be diffed.
 *
 * Note the numbers differ per office (Hyderabad and Bengaluru have their
 * own India numbers; Dover has the US line) -- a single number on all
 * three would have been wrong.
 *
 * `map` opens Google Maps for that exact office, which is what the
 * "Explore <city>" links used to do wrongly: they pointed at the city
 * landing pages, which are marketing pages, not directions.
 */
const offices = [
  {
    city: "Hyderabad, India",
    role: "Headquarters & engineering hub",
    address: `${FACTS.streetAddress}, ${FACTS.hq} ${FACTS.postalCode}`,
    phone: "+91 9390683154",
    phoneHref: "tel:+919390683154",
    email: "contact@mtouchlabs.com",
    map: "https://maps.app.goo.gl/vHVVC1vzkR2hS7Ek7",
  },
  {
    city: "Bengaluru, India",
    role: "Engineering & technology delivery",
    address:
      "101, 4th Main Road, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076",
    phone: "+91 9014793487",
    phoneHref: "tel:+919014793487",
    email: "contact@mtouchlabs.com",
    map: "https://maps.app.goo.gl/WgJMfx2PzuScWZbQA",
  },
  {
    city: "Dover, Delaware, USA",
    role: "US presence & client engagement",
    address: "1111B South Governors Avenue, Suite 48193, Dover, DE 19904, United States",
    phone: "+1 (551) 222-0070",
    phoneHref: "tel:+15512220070",
    email: "contact@mtouchlabs.com",
    map: "https://maps.app.goo.gl/RUQSXXJ8hCP2RMRd7",
  },
];


/*
 * SECTION 9 -- Industries, who we work with, and the stack.
 *
 * The old "Industries" and "Who We Work With" sections are merged into
 * one here, which is what keeps the homepage from listing overlapping
 * audiences twice.
 *
 * Only industries mTouch Labs actually serves are listed. Nothing was
 * added to widen keyword coverage -- an industry the company cannot show
 * work for is a liability in a page a model is asked to summarise.
 */
/*
 * CLIENT LOGOS -- the project's own files, two pages of eighteen.
 *
 * Laid out 6 across x 3 down per page, in the exact order of the
 * approved mock. Every path below was checked against a live listing of
 * public/images/home/tech -- none is guessed.
 *
 * Filename notes, because several do not match the brand name:
 *   badham.webp     -> Bandham
 *   saachi.webp     -> Sacchi
 *   v.webp          -> Vivent
 *   classy.webp     -> Classyy
 *   medbuz.webp     -> Medbuzz
 *   l2r.webp        -> Learn2Read
 *   corelynx.svg    -> CoreLynxAI
 *   adjd.webp       -> Abu Dhabi Judicial Department
 *
 * TWO FILES ARE NOT IN THE FOLDER YET -- zoviyo.svg and 4wd.svg. Their
 * slots are wired in page 2 row 2 at the exact paths above, so dropping
 * those two files in is all that is needed; no code change follows.
 * Until then those two cells render as broken images.
 *
 * `.webp` is preferred over the `.png` twin wherever both exist -- same
 * artwork, roughly a quarter of the bytes.
 */
/* `big: true` marks the marks that read SMALL at the shared size --
   seals, wordmarks with a lot of internal padding, and square icons.
   They get a taller ceiling so all 36 look optically equal on the wall;
   the cell footprint never changes, only the artwork inside it. */
const logoPages = [
  [
    { src: "/images/home/tech/govt.webp", alt: "Government of Telangana", big: true },
    { src: "/images/home/tech/adjd.webp", alt: "Abu Dhabi Judicial Department", big: true },
    { src: "/images/home/tech/kezad-logo.webp", alt: "KEZAD Group", big: true },
    { src: "/images/home/tech/resqbox.svg", alt: "ResQBox Food", big: true },
    { src: "/images/home/tech/kohere.webp", alt: "Kohere" },
    { src: "/images/home/tech/uptick.webp", alt: "UpTik", big: true },

    { src: "/images/home/tech/reelzify.svg", alt: "Reelzify" },
    { src: "/images/home/tech/corelynx.svg", alt: "CoreLynxAI" },
    { src: "/images/home/tech/anybody.svg", alt: "AnyBody" },
    { src: "/images/home/tech/salarient.svg", alt: "Salarient" },
    { src: "/images/home/tech/voosh.webp", alt: "vVoosh" },
    { src: "/images/home/tech/communitykitchen.svg", alt: "Community Kitchen", big: true },

    { src: "/images/home/tech/zefsci.webp", alt: "ZefSci, a Shimadzu company", big: true },
    { src: "/images/home/tech/badham.webp", alt: "Bandham", big: true },
    /* RailCab's artwork is 204x157 -- nearly square, with a lot of
       internal padding. At the shared 78px ceiling it read about half
       the size of the wordmarks beside it, so it is flagged `big`. */
    { src: "/images/home/tech/railcab.svg", alt: "RailCab", big: true },
    { src: "/images/home/tech/l2r.webp", alt: "Learn2Read", big: true },
    { src: "/images/home/tech/medbuz.webp", alt: "Medbuzz", big: true },
    { src: "/images/home/tech/measurements.svg", alt: "Measurements", big: true },
  ],
  [
    { src: "/images/home/tech/ebic.svg", alt: "ebic" },
    { src: "/images/home/tech/mytree.svg", alt: "My Tree", big: true },
    { src: "/images/home/tech/edhelpz.svg", alt: "EdHelpz" },
    { src: "/images/home/tech/cenzo.svg", alt: "Cenzo", big: true },
    { src: "/images/home/tech/desh.svg", alt: "Desh" },
    { src: "/images/home/tech/classy.webp", alt: "Classyy", big: true },

    /* ZuppiBuy replaces Bandham here -- Bandham is already on page 1 and
       the same logo twice across two pages read as a mistake. */
    { src: "/images/home/tech/zuppibuy.webp", alt: "ZuppiBuy", big: true },
    /* Was myintry.svg. That file is a byte-for-byte copy of desh.svg
       (identical md5), so the wall rendered Desh twice on this page --
       the duplicate everyone kept noticing. Woqal takes the cell until
       MyINTRY's real artwork exists. */
    { src: "/images/home/tech/woqal.svg", alt: "Woqal", big: true },
    /* AWAITING FILE: /images/home/tech/zoviyo.svg */
    { src: "/images/home/tech/zoviyo.svg", alt: "Zoviyo" },
    { src: "/images/home/tech/heyman.webp", alt: "Hey Man" },
    /* AWAITING FILE: /images/home/tech/4wd.svg */
    { src: "/images/home/tech/4wd.svg", alt: "4WD", big: true },
    { src: "/images/home/tech/marketchowrasta.svg", alt: "Market Chowrasta", big: true },

    { src: "/images/home/tech/olt.webp", alt: "Olt Offers" },
    { src: "/images/home/tech/saachi.webp", alt: "Sacchi", big: true },
    { src: "/images/home/tech/v.webp", alt: "Vivent", big: true },
    { src: "/images/home/tech/hitech.svg", alt: "Hitech Shuttle", big: true },
    { src: "/images/home/tech/onus.webp", alt: "ONUS Robotic Hospitals", big: true },
    /* Measurements moved to page 1 (it took Woqal's cell), so this slot
       needed a mark. RoboRide is one of the project's own client logos --
       it is in /images/portfolio as a delivered project -- and was not on
       either page. Swap it for MyINTRY the moment real MyINTRY artwork
       lands in /images/home/tech. */
    { src: "/images/home/tech/roboride.webp", alt: "RoboRide", big: true },
  ],
];


const industries = [
  /* Supplied artwork from public/images/hero-new-work, replacing the
     Font Awesome glyphs. `alt=""` on all eight: the industry name sits
     right beside each one. */
  { img: "/images/hero-new-work/industries_healthcare.svg", k: "Healthcare" },
  { img: "/images/hero-new-work/industries_financial.svg", k: "Financial Services" },
  { img: "/images/hero-new-work/industries_retail.svg", k: "Retail & E-commerce" },
  { img: "/images/hero-new-work/industries_education.svg", k: "Education" },
  { img: "/images/hero-new-work/industries_government.svg", k: "Government & Public Sector" },
  { img: "/images/hero-new-work/industries_logistics.svg", k: "Logistics & Transportation" },
  { img: "/images/hero-new-work/industries_realestate.svg", k: "Real Estate" },
  { img: "/images/hero-new-work/industries_media.svg", k: "Media & Entertainment" },
];



const audiences = [
  /* Icons from the Font Awesome sheet the layout already loads -- no
     extra request. Long-standing FA6 free solid names only. */
  { icon: "fa-solid fa-rocket", k: "Startups", v: "Turn early ideas into scalable digital products, from MVP to launch." },
  { icon: "fa-solid fa-store", k: "Small & Mid-Sized Businesses", v: "Improve operations with software built around your workflows." },
  { icon: "fa-solid fa-sitemap", k: "Enterprises", v: "Modernize systems and build connected business applications." },
  { icon: "fa-solid fa-landmark-dome", k: "Government Organizations", v: "Deliver secure digital solutions for public-sector needs." },
  { icon: "fa-solid fa-boxes-stacked", k: "Product Companies", v: "Extend engineering capacity or build new digital products." },
];


/* Technology names as text, not logos: eighteen logo files would be
   eighteen requests on a page that has to stay fast, and the names are
   what a crawler and a language model can actually read. */
const techStack = [
  { k: "Web", v: ["React", "Next.js", "Node.js", ".NET"] },
  { k: "Mobile", v: ["Flutter", "React Native", "iOS", "Android"] },
  { k: "AI", v: ["Python", "ML", "Generative AI"] },
  { k: "Cloud", v: ["AWS", "Azure", "Google Cloud"] },
];








/* One array feeds both the accordion and the FAQPage schema, so the two
   can never drift apart.

   These are the approved answers, kept short on purpose. Note the
   trade-off: the previous set was written long, leading each answer with
   a concrete, quotable claim, which is what the SEO audit asked for in
   its "make FAQ answers specific enough to cite" item. These are tighter
   and easier to read but give a model less to lift verbatim. If ranking
   in AI answers matters more than brevity here, the longer versions are
   in this file's git history. */
const faqs = [
  {
    q: "What does a software development company do?",
    a: "A software development company designs, builds, tests, deploys, and maintains software applications based on a business's requirements.",
  },
  {
    q: "How do I choose the right software development company?",
    a: "Look for relevant technical expertise, experience with similar projects, clear communication, development processes, security practices, and proven results.",
  },
  {
    q: "How much does custom software development cost?",
    a: "The cost depends on factors such as project scope, features, integrations, technology requirements, complexity, and ongoing support needs. A project assessment is needed to provide an accurate estimate.",
  },
  {
    q: "How long does it take to develop custom software?",
    a: "The timeline depends on the product's scope, complexity, integrations, design requirements, and development approach. A defined roadmap can provide a more accurate project timeline.",
  },
  {
    q: "What types of software can mTouch Labs develop?",
    a: "mTouch Labs develops custom business software, enterprise applications, AI solutions, mobile apps, web applications, SaaS products, and modernized cloud-based systems.",
  },
  {
    q: "What is custom software development?",
    a: "Custom software development involves creating software specifically around an organization's business processes, requirements, users, and operational goals rather than relying entirely on off-the-shelf software.",
  },
  {
    q: "Can mTouch Labs develop AI-powered software?",
    a: "Yes. mTouch Labs develops AI-powered applications, generative AI solutions, AI agents, automation solutions, and AI integrations for business use cases.",
  },
  {
    q: "Can you work with companies outside India?",
    a: "Yes. mTouch Labs works with organizations globally and can collaborate remotely across different time zones and markets.",
  },
  {
    q: "Do you provide ongoing software support and maintenance?",
    a: "Yes. Software projects can be supported after launch through maintenance, monitoring, optimization, enhancements, and continued development.",
  },
];



/* ─────────────────────────────────────────────────────────────
   STRUCTURED DATA — emitted as plain <script> tags in the
   server-rendered HTML, so the JSON-LD is in the first response a
   crawler receives; no hydration required.
   ───────────────────────────────────────────────────────────── */

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/*
 * DEDUPLICATED. `organizationSchema` and `websiteSchema` used to be
 * declared here as well as in app/layout.tsx, so every crawl of "/"
 * received two Organization nodes and two WebSite nodes -- the exact
 * duplication the SEO audit flagged.
 *
 * The single source of truth for both is now app/layout.tsx, where they
 * belong: they describe the company and the site, not this page. That one
 * Organization node carries @id "https://www.mtouchlabs.com/#organization",
 * and everything below references that id instead of restating it.
 */

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.mtouchlabs.com/#professionalservice",
  /* Same company, described as a service provider. `parentOrganization`
     ties it back to the single Organization node in app/layout.tsx rather
     than duplicating its fields here. */
  parentOrganization: { "@id": "https://www.mtouchlabs.com/#organization" },
  name: "mTouch Labs",
  url: "https://www.mtouchlabs.com",
  image: "https://www.mtouchlabs.com/images/og-image.jpeg",
  /* The same paragraph as the Organization description in app/layout.tsx
     and as /llms.txt. It is no longer rendered as visible copy -- this is
     where it is read from now. */
  description: WHO_WE_ARE,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#514, Manjeera Trinity Corporate, JNTU\u2013Hitech City Road, Kukatpally",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  foundingDate: FACTS.foundingDateISO,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.seo,
        url: `https://www.mtouchlabs.com${s.link}`,
      },
    })),
  },
};

/*
 * FALLBACK POSTS -- used only when the database is unreachable.
 *
 * WHY THIS EXISTS
 * The live query is still the primary source. But `lib/db.ts` uses the
 * Neon HTTP driver, and when it cannot reach the database it throws
 * "fetch failed" -- which is what happens in local dev without a working
 * DATABASE_URL. Previously that made the whole Insights section vanish.
 * Now it falls back to these three so the section always renders.
 *
 * ⚠ VERIFY THESE THREE SLUGS before you ship.
 * They are the best available guess: the first is certain (it is the post
 * imported by import-blogs-3.mjs), and the other two are inferred from
 * the filenames in public/images/blogs, which the import scripts name
 * after the slug. If a slug is wrong its "Read Article" link 404s.
 * Open /blog, copy the three real slugs, and paste them in here.
 *
 * These are deliberately from three different categories, which is the
 * same rule the live query applies.
 */
const FALLBACK_POSTS: Post[] = [
  {
    slug: "software-development-process",
    title: "Software Development Process Explained: From Idea to Deployment",
    description:
      "Learn the software development process from idea and planning to design, coding, testing, deployment, AI development, and ongoing maintenance.",
    category: "Software Development",
    image: "/images/blogs/softwaredevelopmentpractices.webp",
  },
  {
    slug: "saas-architecture-explained",
    title: "SaaS Architecture Explained: Building Multi-Tenant Products",
    description:
      "How multi-tenant SaaS architecture works, the trade-offs between shared and isolated data, and what to decide before you write the first line of code.",
    category: "SaaS",
    image: "/images/blogs/saas-architecture-explained.webp",
  },
  {
    slug: "ai-app-development-guide",
    title: "AI App Development: A Practical Guide for Businesses",
    description:
      "Where AI genuinely improves a product, which capabilities are worth building, and how to add intelligent features to software you already run.",
    category: "Artificial Intelligence",
    image: "/images/blogs/ai-app-development-guide.svg",
  },
];

/**
 * Three published posts, from three different categories where possible.
 */
/* The three posts the homepage leads with, in order.
   ─────────────────────────────────────────────────────────────────────
   Edit this list to change the Insights row; no other change is needed.
   A slug that does not exist, or is unpublished, is skipped silently and
   its slot is filled from the newest posts, so a typo here degrades to
   "latest three" rather than breaking the section.

   NOTE: verify `mvp-development-guide` against the real row -- it was
   inferred from the article title, not read from the database. */
const PINNED_POST_SLUGS = [
  "legacy-application-modernization",
  "mvp-development-guide",
  "agentic-ai-rag-enterprise-ai-solutions",
];

type Post = {
  slug: string;
  title: string;
  description: string;
  category: string | null;
  /* The card's cover image, straight from the blogs table -- the same
     file each post shows on /blog, so the two never disagree. */
  image: string | null;
  /* Selected only for the ORDER BY; not rendered. */
  publish_date?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

async function getLatestPosts(): Promise<{ posts: Post[]; error: string | null }> {
  /*
   * WHY THIS QUERY AND NOT A CLEVERER ONE.
   *
   * The first version did the category-diversity work in SQL, with a
   * ROW_NUMBER() OVER (PARTITION BY category) window function. It
   * returned nothing, and the section silently disappeared -- which is
   * how the FAQ ended up directly after Global Delivery.
   *
   * This is now BYTE-FOR-BYTE the same WHERE clause and ordering that
   * app/blog/page.tsx uses, and that page works. `lib/db.ts` is the Neon
   * HTTP driver (@neondatabase/serverless), not `pg`; it is not a
   * general-purpose connection and it is not worth guessing which
   * constructs it will and will not run. Reusing the proven query
   * removes SQL from the list of things that can break here.
   *
   * The "three different categories" requirement is then satisfied in
   * JavaScript below, where it is trivial and cannot fail.
   */
  try {
    /* Pinned first, in this order. These three are chosen for their cover
       art (no logo burned into the image) as well as their subject. A
       slug that is missing or unpublished is simply skipped and the slot
       is filled from the newest posts below -- a wrong slug can never
       empty the section. */
    const pinned = (await sql`
      SELECT slug, title, description, category, image, publish_date, created_at, updated_at
        FROM blogs
       WHERE slug = ANY(${PINNED_POST_SLUGS})
         AND (published = true OR status = 'published')
         AND (publish_date IS NULL OR publish_date <= NOW())`) as Post[];

    const rows = (await sql`
      SELECT slug, title, description, category, image, publish_date, created_at, updated_at
        FROM blogs
       WHERE (published = true OR status = 'published')
         AND (publish_date IS NULL OR publish_date <= NOW())
       ORDER BY GREATEST(updated_at, publish_date, created_at) DESC NULLS LAST
       LIMIT 40`) as Post[];

    if (!Array.isArray(rows) || rows.length === 0) {
      return { posts: [], error: "the query ran but returned 0 rows" };
    }

    /* Pinned posts lead, in the order they are listed. */
    const picked: Post[] = PINNED_POST_SLUGS
      .map((slug) => pinned.find((p) => p.slug === slug))
      .filter(Boolean) as Post[];

    /* Then one per unused category until there are three. Newest first is
       already guaranteed by the ORDER BY, so the first time a category is
       seen is its newest post. */
    const usedCategories = new Set<string>(
      picked.map((p) => (p.category ?? "").trim().toLowerCase())
    );
    const pinnedSlugs = new Set(picked.map((p) => p.slug));
    for (const r of rows) {
      if (pinnedSlugs.has(r.slug)) continue;
      if (picked.length >= 3) break;
      const key = (r.category ?? "").trim().toLowerCase();
      if (key && usedCategories.has(key)) continue;
      usedCategories.add(key);
      picked.push(r);
    }

    /* Fewer than three distinct categories exist -- fill the remaining
       slots with the next newest posts so the row is never short. */
    if (picked.length < 3) {
      const seen = new Set(picked.map((p) => p.slug));
      for (const r of rows) {
        if (picked.length >= 3) break;
        if (!seen.has(r.slug)) { picked.push(r); seen.add(r.slug); }
      }
    }
    return { posts: picked, error: null };
  } catch (err) {
    /* Logged, not swallowed. A silent catch is what made this invisible
       the first time -- the section vanished with nothing in the console
       to say why. In production this prints once per revalidation. */
    console.error("[homepage] Insights query failed:", err);
    return { posts: [], error: err instanceof Error ? err.message : String(err) };
  }
}

/* Rebuild at most once an hour: the only dynamic thing on this page is
   the three blog cards, and they do not change more often than that. */
export const revalidate = 3600;

export default async function HomePage() {
  /* Awaited directly on the page, exactly like app/blog/page.tsx does.
     The Suspense boundary this replaces was the reason the section never
     appeared: an async child inside <Suspense> in a statically rendered
     route was resolving to nothing, and because the fallback rendered
     null too, the whole block vanished with no trace.

     The footer-flash this originally worked around is handled properly
     now, by app/(home)/loading.tsx rendering a hero-shaped skeleton
     instead of null. */
  const { posts: livePosts, error: postsError } = await getLatestPosts();
  /* Live posts when the database answers; the static three when it does
     not. The section therefore always renders -- which is the point:
     an empty gap where Insights should be is worse than three slightly
     stale cards. */
  const posts = livePosts.length > 0 ? livePosts : FALLBACK_POSTS;
  const usingFallback = livePosts.length === 0;
  /* In development, a failed Insights query is shown ON THE PAGE rather
     than only in the terminal. This section has now gone missing twice
     with nothing visible to explain it -- once because a Suspense
     boundary swallowed it, once because the query returned nothing --
     and both times the silence cost a round-trip. Never rendered in
     production. */
  const showInsightsDiag = process.env.NODE_ENV !== "production" && usingFallback;

  return (
    <main className="hmx">
      {/* Canonical — emitted here rather than via `alternates.canonical` so
          the trailing slash survives; see the note in the metadata export. */}
      <link rel="canonical" href="https://www.mtouchlabs.com/" />

      {/* Organization and WebSite are emitted once, site-wide, from
          app/layout.tsx -- they are deliberately NOT repeated here. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ═══════════ HERO — typographic, no artwork ═══════════
          REDESIGN. The hero was a two-column split with hero.svg filling
          the right half. Two reasons that is gone:

          1. It was 2.5 MB of SVG AND the LCP element -- the single
             slowest thing on the page, and it had to be loaded eager with
             fetchPriority high precisely because it was. The hero is now
             a text node, so LCP is something the browser paints from HTML
             it already has. Nothing above the fold makes a request.
          2. Giving it half the width capped the headline at ~63px. With
             the column gone the H1 runs to 96px, and the fold finally
             leads with the thing that should lead.

          The composition is one measured column, not a full-bleed
          stretch: the headline sets its own width, the lead is held to a
          readable measure beneath it, and a proof rail closes the block
          so the fold still carries evidence and not only claims.

          Colour is black and Signature Blue only -- the blue lands on one
          line of the headline and on the accents. No gradient text. */}
      <section className="hmx-hero">
        {/* Atmosphere, drawn rather than loaded: two soft blue blooms over
            the light stage, behind the copy at z-index 0, so the type is
            never sitting on a hard edge. */}
        <span className="hmx-hero-bloom hmx-hero-bloom--a" aria-hidden="true" />
        <span className="hmx-hero-bloom hmx-hero-bloom--b" aria-hidden="true" />

        <div className="hmx-wrap">
          <div className="hmx-hero-inner">
            {/* Three facts, not a slogan: what the company is, where it
                is, and how long it has been there. The separators are
                ::before dots on the spans so there is no stray character
                to select or translate. */}
            {/* Plain text, no capsule: three facts -- what the company is,
                where it is, how long it has been there. The separators are
                ::before dots on the spans, so there is no literal
                character to select, copy or mistranslate. */}
            <p className="hmx-kicker hmx-in" style={d(0)}>
              <span>Software Company</span>
              <span>Hyderabad</span>
              <span>Est. {FACTS.foundedYear}</span>
            </p>

            {/* Two lines, broken by hand so the centred block sits as a
                balanced pair rather than however the measure happens to
                wrap it.

                `.hmx-hl` marks the keywords in flat Signature Blue --
                never a gradient clipped to text: brand.css forbids that,
                and a flat fill stays selectable and searchable, and still
                renders if the webfont fails.

                Highlighted: "Custom software", "mobile apps", "AI" -- the
                three things being sold. "built for your business" stays
                black, so the blue marks meaning instead of decorating the
                whole headline. Colour everything and nothing is
                emphasised. */}
            {/* Two lines, broken by hand. The whole first line is blue
                and the whole second is black -- not individual keywords.
                Splitting the emphasis by line rather than by word is what
                makes it read as one deliberate typographic move instead
                of a headline with words coloured in.

                Flat fill, never a gradient clipped to text: brand.css
                forbids gradient headings, and flat also stays selectable,
                searchable, and legible if the webfont fails. */}
            <h1 className="hmx-h1 hmx-in" style={d(1)}>
              <span className="hmx-hl">Custom Software, Mobile Apps &amp; AI</span>
              <br />
              Built for Your Business
            </h1>

            <p className="hmx-hero-lead hmx-in" style={d(2)}>
              mTouch Labs ships {FACTS.projects} products for startups, enterprises and
              governments&mdash;including Telangana and Abu Dhabi&mdash;turning ideas into
              secure, scalable software that drives real impact.
            </p>

            <div className="hmx-hero-ctas hmx-in" style={d(3)}>
              {/* Opens the shared Request Quote modal in place rather than
                  navigating. `QuoteModal` is mounted in the root layout and
                  listens on the document for a click on anything carrying
                  `js-open-modal` or `data-open-quote="1"` -- the same hook the
                  navbar's Request Quote button uses -- and calls
                  preventDefault, so the href below never fires when JS is
                  running. The href stays as the no-JS fallback. */}
              <Link
                href="/contact-us"
                className="hmx-btn hmx-btn-primary js-open-modal"
                data-open-quote="1"
              >
                Get Quote
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              {/* Secondary: white fill, Signature Blue border, ink label --
                  the same shape /services uses. */}
              <Link href="/portfolio" className="hmx-btn hmx-btn-ghost">
                View Our Work
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            {/* Proof rail: four facts in one bordered box, centred under
                the actions, each split into figure and label so the number
                is what the eye catches. Values quoted from FACTS, so this
                row cannot drift from the schema or from llms.txt.

                This is what the 2.5 MB artwork used to occupy the fold
                with -- except it is true, readable, and free to render. */}
            <ul className="hmx-hero-proof hmx-in" style={d(4)}>
              {stats.map((f) => (
                <li key={f.k}>
                  {/* `alt=""` on the two decorative marks: the figure
                      beside them already says "14+ Years", so a described
                      icon would make a screen reader read it twice. The
                      ISO and NASSCOM marks DO carry alt text, because
                      they are evidence, not decoration. */}
                  <span className="hmx-hp-ico">
                    <img
                      src={f.img}
                      alt={f.imgAlt}
                      width={50}
                      height={50}
                      loading="eager"
                      decoding="async"
                    />
                  </span>
                  <span className="hmx-hp-b">
                    <span className="hmx-hp-n">{f.n}</span>
                    <span className="hmx-hp-k">{f.k}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════ CLIENT LOGOS ═══════════ */}
      <section className="hmx-sec" id="clients">
        <div className="hmx-wrap">
          <div className="hmx-logos-head hmx-rv">
            <h2 className="hmx-logos-h2">
              Trusted by <em>enterprises</em> and government organizations
            </h2>
            <p className="hmx-logos-p">
              mTouch Labs has delivered digital products and software solutions for
              businesses and public-sector organizations across multiple markets,
              including the Government of Telangana and the Government of Abu Dhabi.
            </p>
          </div>

          {/* Paginated, with zero JavaScript.

              Three hidden radios drive both which page shows and which
              dot is active, through `:checked ~ sibling` selectors. The
              radios have to come BEFORE both the pages and the dots in
              source order, because the sibling combinator only looks
              forward -- that ordering constraint is the whole reason the
              inputs sit up here rather than beside their labels.

              Page 1's images are eager; pages 2 and 3 are lazy, so the
              two hidden pages cost nothing until someone clicks. */}
          <div className="hmx-lw hmx-rv" style={d(1)}>
            {logoPages.map((_, i) => (
              <input
                type="radio"
                className="hmx-lw-r"
                name="hmx-lw"
                id={`hmx-lw-${i + 1}`}
                key={`r-${i}`}
                defaultChecked={i === 0}
                aria-label={`Show client logos, page ${i + 1} of ${logoPages.length}`}
              />
            ))}

            <div className="hmx-lw-pages">
              {logoPages.map((page, i) => (
                <div className="hmx-lw-page" key={`p-${i}`}>
                  {page.map((l) => (
                    <span
                      className={`hmx-lw-cell${(l as any).big ? " hmx-lw-cell--big" : ""}`}
                      key={l.src}
                    >
                      <img
                        src={l.src}
                        alt={l.alt}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </span>
                  ))}
                </div>
              ))}
            </div>

            {/* Dots, not numerals. Each label has no visible text -- the
                page number lives in `aria-label` and `title` instead, so
                the control still announces itself to a screen reader and
                on hover. */}
            <div className="hmx-lw-dots">
              {logoPages.map((_, i) => (
                <label
                  className="hmx-lw-dot"
                  htmlFor={`hmx-lw-${i + 1}`}
                  key={`d-${i}`}
                  title={`Page ${i + 1}`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNER — award proof + figures ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="partner">
        <div className="hmx-wrap">
          {/* Copy left, award photo right, then the four boxes on their
              own full-width row beneath -- as drawn.

              The boxes moved out of the right column because at half
              width they were cramped two-across; full width gives four
              equal cards with real breathing room, and the photograph
              gets the whole column it was designed for. */}
          <div className="hmx-partner">
            <div className="hmx-rv">
              <p className="hmx-eyebrow hmx-eyebrow--dot">WHY mTouch Labs</p>
              <h2 className="hmx-partner-h2">
                {/* Only "Custom software" is blue -- the rest of the
                    heading stays black, so the accent marks the subject
                    rather than colouring in half a sentence. */}
                <em>Custom software</em> development built around real business needs
              </h2>
              <p className="hmx-partner-p">
                mTouch Labs is a Hyderabad-headquartered custom software company,
                incorporated in {FACTS.foundedYear}, that builds enterprise applications,
                mobile apps, and AI systems for private companies and government
                organizations.
              </p>
              <p className="hmx-partner-p">
                We work across the full product lifecycle&mdash;from understanding business
                requirements and designing the solution to development, deployment, and
                ongoing improvement.
              </p>

              <div className="hmx-partner-cta">
                <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
                  Talk to Our Team
                  <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="hmx-partner-art hmx-rv" style={d(1)}>
              <img
                src="/images/new-home(02-09)/award-nasscom-2026.webp"
                alt="mTouch Labs receiving the Digital Transformation Catalyst award at the NASSCOM SME Inspire Awards 2026"
                width={780}
                height={538}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Four separate cards with gaps between them, centred text --
              not the hairline grid used elsewhere on the page. */}
          <ul className="hmx-reasons hmx-rv">
            {reasons.map((r) => (
              <li key={r.k}>
                <h3>{r.k}</h3>
                <p>{r.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The ABOUT section and the two-pillar APPROACH section that used
          to sit here are both removed.

          They were saying the same things three times over. About restated
          the hero's figures as a six-cell grid (14+ years, 1,500+ projects,
          500+ clients, 12+ countries, ISO, full lifecycle) immediately after
          the hero's proof band had already stated four of them and the WHY
          section had covered the rest in words. The APPROACH pillars then
          spent two long blocks explaining a development process that the
          services grid below and the FAQ further down both describe more
          directly.

          The page now runs hero -> clients -> why -> services -> case
          studies, which is a straight line from claim to proof with nothing
          repeated. `highlights` and `pillars` went with them.

          Both blocks survive verbatim in the commented archive at the foot
          of this file if any of that copy is wanted elsewhere. */}

      {/* ═══════════ SERVICES — hairline matrix ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="services">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Core Services</p>
            <h2 className="hmx-h2">
              End-to-end <em>software development services</em> for businesses
            </h2>
            <p className="hmx-lead">
              From custom business applications to AI-powered products, we design and
              develop digital solutions around your goals, workflows, and customers.
            </p>
          </div>

          <div className="hmx-matrix hmx-rv">
            {services.map((s) => (
              <article className="hmx-cell" key={s.id} id={s.id}>
                {/* No number and no icon. Both are gone: the icons were
                    eight identical blue discs, and the numbers implied an
                    order these eight services do not have. The cell is
                    title, two lines, and a link. */}
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {/* Arrow only. The "Explore ..." label was repeated eight
                    times down the grid and said nothing the card title had
                    not already said. `aria-label` carries the destination
                    for screen readers, so nothing is lost to assistive
                    tech by dropping the visible words. */}
                {/* Tilted arrow in a circle, black. The SVG rather than a
                    Font Awesome glyph because fa-arrow-up-right is absent
                    from this build's free set and renders as nothing. */}
                <Link href={s.link} className="hmx-cellgo" aria-label={s.label}>
                  <ArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS — horizontal delivery track ═══════════
          Placed directly after Core Services on purpose: that grid says
          what gets built, this says how it gets built, and the two read
          as one answer.

          Drawn as a horizontal track rather than another stack of rows.
          A single hairline runs behind the five number chips, so the eye
          reads left-to-right as a sequence instead of top-to-bottom as a
          list -- which is the whole point of showing a process. The line
          is one ::before on the track, not a border per step, so it stays
          continuous and cannot leave a gap between chips.

          No icons and no images: five numbers, five words and five
          sentences. Zero requests. */}
      <section className="hmx-sec" id="how-we-build">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">How We Work</p>
            <h2 className="hmx-h2">
              How we build and <em>deliver your software</em>
            </h2>
            <p className="hmx-lead">
              We take software products from discovery to launch through a structured
              development process that combines strategy, design, engineering, testing,
              and ongoing improvement.
            </p>
          </div>

          <ol className="hmx-track hmx-rv">
            {buildSteps.map((st) => (
              <li className="hmx-step" key={st.n}>
                {/* A white rounded tile holding the icon, with the step
                    number as a blue badge clipped to its top-right
                    corner. The badge is a child of the tile, not a
                    sibling, so it travels with it at every breakpoint
                    instead of needing its position recalculated. */}
                <span className="hmx-step-tile">
                  <img src={st.img} alt="" width={34} height={34} loading="lazy" decoding="async" />
                  <span className="hmx-step-badge" aria-hidden="true">{Number(st.n)}</span>
                </span>
                <h3>{st.k}</h3>
                <p>{st.v}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════ CASE STUDIES — dark band ═══════════ */}
      {/* Flat Deep Indigo — no rule-grid overlay. */}
      <section className="hmx-sec hmx-sec--dark" id="case-studies">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Featured Projects</p>
            <h2 className="hmx-h2">
              {/* Both halves white. `.hmx-h2 em` is Signature Blue by
                  default across the page; `hmx-h2-plain` opts this one
                  out so the whole line reads as one statement. */}
              Real projects. <em className="hmx-em-plain">Measurable results.</em>
            </h2>
            <p className="hmx-lead">
              See how we&rsquo;ve helped organizations solve complex business challenges
              through practical digital products and technology solutions.
            </p>
          </div>

          {/* CSS-only tabs: three hidden radios drive the pill state and
              which panel is visible. No JavaScript; arrow-key navigation
              comes free with the radio group. */}
          <div className="hmx-cstabs hmx-rv">
            {caseStudies.map((cs, i) => (
              <input
                key={`r-${cs.n}`}
                className="hmx-cs-r"
                type="radio"
                name="hmx-cs"
                id={`hmx-cs-${i + 1}`}
                defaultChecked={i === 0}
              />
            ))}

            <div className="hmx-tablist" role="tablist" aria-label="Featured case studies">
              {caseStudies.map((cs, i) => (
                <label className="hmx-tab" htmlFor={`hmx-cs-${i + 1}`} key={`t-${cs.n}`}>
                  <span className="hmx-tab-n" aria-hidden="true">{cs.n}</span>
                  {cs.title}
                </label>
              ))}
            </div>

            <div className="hmx-panels">
              {caseStudies.map((cs) => (
                <article className="hmx-panel" key={`p-${cs.n}`}>
                  <div className="hmx-panel-b">
                    <span className="hmx-panel-tag">{cs.tag}</span>
                    <h3>{cs.headline}</h3>
                    <dl>
                      <dt>Challenge</dt>
                      <dd>{cs.challenge}</dd>
                      <dt>Solution</dt>
                      <dd>{cs.solution}</dd>
                      <dt>Result</dt>
                      <dd className="hmx-panel-result">{cs.result}</dd>
                    </dl>
                    <Link href={cs.link} className="hmx-arrow">
                      View Case Study
                      <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </Link>
                  </div>

                  <div className="hmx-panel-art">
                    <img
                      src={cs.img}
                      alt={cs.imgAlt}
                      width={620}
                      height={420}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* The closing paragraph is gone -- it restated the section's
              own lead in different words. Just the link now. */}
          <div className="hmx-cs-outro hmx-rv">
            <Link href="/case-studies" className="hmx-btn hmx-btn-ghost-light">
              View All Case Studies
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      {/* ═══════════ SECTION 9 — INDUSTRIES & WHO WE WORK WITH ═══
          The old "Industries" and "Who We Work With" sections merged into
          one. Separately they listed overlapping audiences twice, which is
          exactly the repetition the audit flagged.

          Three tiers of decreasing weight, so the block reads as one
          section rather than three stacked ones:
            - industries as a tag rail (names only, nothing to explain)
            - audiences as a compact five-across row (name + one line)
            - the stack as four labelled rows of technology names

          Technology names are set as text, not logos. Eighteen logo files
          would be eighteen requests on a page that has to stay fast, and
          the names are what a crawler and a language model can read. */}
      <section className="hmx-sec hmx-sec--stone" id="industries">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Industries &amp; Clients</p>
            <h2 className="hmx-h2">
              Software solutions for businesses <em>across industries</em>
            </h2>
            <p className="hmx-lead">
              We build digital products and software solutions for organizations with
              different operational needs, business models, and stages of growth.
            </p>
          </div>

          {/* Names only: an industry tag that needs a sentence to justify
              it is an industry we should not be claiming. */}
          <ul className="hmx-inds hmx-rv">
            {industries.map((n) => (
              <li key={n.k}>
                <span className="hmx-ind-ico">
                  <img src={n.img} alt="" width={26} height={26} loading="lazy" decoding="async" />
                </span>
                {n.k}
              </li>
            ))}
          </ul>

          <div className="hmx-aud-head hmx-rv">
            <h3>Who we work with</h3>
          </div>
          <ul className="hmx-aud hmx-rv">
            {audiences.map((a) => (
              <li key={a.k}>
                <span className="hmx-aud-ico" aria-hidden="true">
                  <i className={a.icon} />
                </span>
                <span className="hmx-aud-k">{a.k}</span>
                <span className="hmx-aud-v">{a.v}</span>
              </li>
            ))}
          </ul>

          <div className="hmx-stack hmx-rv">
            <div className="hmx-stack-b">
              <h3>Built with proven technologies</h3>
              <p>
                We use modern frameworks, platforms, and cloud technologies to build
                scalable digital products across web, mobile, AI, and enterprise
                environments.
              </p>
              <Link href="/services" className="hmx-arrow">
                View Our Technologies
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <dl className="hmx-stack-list">
              {techStack.map((t) => (
                <div className="hmx-stack-row" key={t.k}>
                  <dt>{t.k}</dt>
                  <dd>
                    {t.v.map((n, i) => (
                      <span key={n}>
                        {i > 0 && <i aria-hidden="true">&middot;</i>}
                        {n}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY BUSINESSES CHOOSE ═══════════
          Rebuilt in the same hairline matrix as Core Services, at the
          user's request: one 1px grid gap over a rule-coloured background
          so the dividers are exact at any zoom, and the same restrained
          light-grey hover. Two sections sharing one component language
          read as a system; two sections with different card treatments
          read as two templates stitched together.

          Was nine icon cards; now the six differentiators, type only. */}
      <section className="hmx-sec" id="why-mtouch-labs">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Why Choose Us</p>
            <h2 className="hmx-h2">
              Why businesses choose <em>mTouch Labs</em>
            </h2>
            <p className="hmx-lead">
              We combine product thinking, engineering expertise, and long-term support
              to build software that fits the way your business operates.
            </p>
          </div>

          <div className="hmx-matrix hmx-matrix--3 hmx-rv">
            {whyChoose.map((w) => (
              <article className="hmx-cell" key={w.n}>
                <h3>{w.title}</h3>
                <p className="hmx-cell-p--free">{w.desc}</p>
              </article>
            ))}
          </div>

          <div className="hmx-why-cta hmx-rv">
            <Link href="/contact-us" className="hmx-btn hmx-btn-ghost">
              Talk to Our Team
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 13 — GLOBAL DELIVERY ═══════════
          Replaces two sections that used to sit here: "Trusted by
          businesses / Awards & Certifications" and the old "Global
          Development & Delivery" block with its four engagement cards,
          collaboration copy and three-country card row.

          Between them they ran to five headings, four engagement models,
          two paragraphs about communication practices and three location
          cards — most of it either stated elsewhere on the page (the
          awards are named in the hero proof band; the engagement models
          are differentiator 05; the collaboration practices are the
          process track) or too long to be read at that depth this far
          down a homepage.

          This is one heading, one paragraph, one statement, three
          offices. Each office carries its real street address, so the
          section is corroborating evidence a crawler can match against
          the Organization schema rather than three vague place names. */}
      <section className="hmx-sec hmx-sec--stone" id="global-delivery">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Global Delivery</p>
            <h2 className="hmx-h2">
              Serving businesses <em>worldwide from India</em>
            </h2>
            <p className="hmx-lead">
              From our teams in Hyderabad, Bengaluru, and Delaware, we collaborate with
              clients across different time zones and markets to design, develop, launch,
              and support digital products.
            </p>
          </div>

          {/* The statement, then the markets as tags. Set apart on rules
              rather than in a box: it is a claim, not a data point. */}
          <div className="hmx-gd-claim hmx-rv">
            <p className="hmx-gd-statement">Wherever you are, we can work with you.</p>
            <ul className="hmx-gd-markets">
              {["India", "United States", "Worldwide"].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          {/* Real addresses, not place names. `itemProp`-free but
              deliberately structured as an <address> per office, which is
              the correct element and what a parser looks for. */}
          <div className="hmx-gd-offices hmx-rv">
            {offices.map((o) => (
              <article className="hmx-office" key={o.city}>
                {/* The one-line role under each office name is removed --
                    "Headquarters & engineering hub" and the rest were
                    labelling the obvious. The `role` field stays on the
                    data so it can be brought back without re-typing it. */}
                <h3>{o.city}</h3>
                <address>{o.address}</address>

                {/* Real, working links: tel: dials, mailto: composes with
                    the office name already in the subject, and the map
                    link opens that exact office in Google Maps. `rel` is
                    set on the external one because it opens in a new tab. */}
                <ul className="hmx-office-c">
                  <li>
                    <i className="fa-solid fa-phone" aria-hidden="true" />
                    <a href={o.phoneHref}>{o.phone}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" aria-hidden="true" />
                    <a href={`mailto:${o.email}?subject=${encodeURIComponent(`Enquiry - ${o.city} office`)}`}>
                      {o.email}
                    </a>
                  </li>
                </ul>

                <a
                  className="hmx-arrow hmx-office-map"
                  href={o.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="hmx-gd-cta hmx-rv">
            <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
              Start a Project
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ INSIGHTS — three latest articles ═══════════
          Streamed, not awaited by the page. See InsightsSection above for
          why: awaiting this at the page level made the entire route
          suspend on a database round-trip, which is what put the footer
          under the navbar for a couple of seconds on every navigation to
          "/". Everything outside this boundary is static and paints at
          once. */}
      {posts.length > 0 && (
        <section className="hmx-sec" id="insights">
          <div className="hmx-wrap">
            <div className="hmx-head hmx-rv">
              <p className="hmx-eyebrow">Insights</p>
              <h2 className="hmx-h2">
                Insights on software, <em>AI, and digital products</em>
              </h2>
              <p className="hmx-lead">
                Explore practical insights, guides, and perspectives from mTouch Labs on
                software development, artificial intelligence, mobile apps, web
                technologies, and digital product engineering.
              </p>
            </div>

            <div className="hmx-posts hmx-rv">
              {posts.map((b) => (
                <article className="hmx-post" key={b.slug}>
                  {/* Cover image. `alt=""` because the <h3> right beneath
                      already names the article -- a described thumbnail
                      would make a screen reader read the title twice. */}
                  {b.image && (
                    <span className="hmx-post-img">
                      <img src={b.image} alt="" loading="lazy" decoding="async" />
                    </span>
                  )}
                  {b.category && <p className="hmx-post-cat">{b.category}</p>}
                  <h3>{b.title}</h3>
                  <p className="hmx-post-x">{b.description}</p>
                  <Link href={`/blog/${b.slug}`} className="hmx-arrow">
                    Read Article
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="hmx-posts-cta hmx-rv">
              <Link href="/blog" className="hmx-btn hmx-btn-ghost">
                View All Blogs
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            {/* Development-only: says these are the static three, not live
                posts, so a stale card is never mistaken for a real one.
                Never rendered in production. */}
            {showInsightsDiag && (
              <p className="hmx-diag-line" role="status">
                Showing the static fallback posts &mdash; the live query failed:{" "}
                <code>{postsError ?? "unknown"}</code>
              </p>
            )}
          </div>
        </section>
      )}

      {/* ═══════════ FAQ ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="faq">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Frequently Asked Questions</p>
            <h2 className="hmx-h2">
              Questions about <em>software development</em>
            </h2>
            <p className="hmx-lead">
              What businesses ask us most often before starting a software project.
            </p>
          </div>

          <div className="hmx-faq">
            {faqs.map((f, i) => (
              /* `name` makes these an exclusive accordion natively — opening one
                 closes the others, with no JavaScript. Chrome 120+, Safari 17.2+,
                 Firefox 130+; older browsers simply allow several open at once. */
              <details
                className="hmx-faq-item hmx-rv"
                name="hmx-faq"
                key={f.q}
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="hmx-faq-q">
                  <span>{f.q}</span>
                  <span className="hmx-faq-ico" aria-hidden="true" />
                </summary>
                <p className="hmx-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE ONE CTA ═══════════ */}
      {/* ═══════════ CLOSING CTA ═══════════
          Rebuilt to the approved copy, and stripped back to it.

          Gone from this block: the second "View Our Work" button, the
          greyscaled client-logo row, and start-your-proj-home.svg. The
          logos already run as their own band directly under the hero, so
          a second pass here was the same proof twice; the illustration
          was 1.85 MB for decoration at the very bottom of the page, where
          it can only slow the page down and cannot persuade anyone who
          has read this far.

          One heading, one paragraph, one action. A closing CTA with two
          competing buttons splits the decision it exists to force. */}
      <section className="hmx-cta" id="start-your-project">
        <div className="hmx-wrap">
          <div className="hmx-cta-solo hmx-rv">
            <p className="hmx-eyebrow">Start Your Project</p>
            <h2 className="hmx-cta-h2">Ready to build your next digital product?</h2>
            <p className="hmx-cta-p">
              Tell us what you&rsquo;re looking to build, improve, or automate. Our team
              can help you define the right approach and turn your requirements into a
              scalable software solution.
            </p>

            {/* Primary, then the secondary in the page's established
                shape: white fill, Signature Blue border, ink label -- the
                same .hmx-btn-ghost used in the hero and on /services, so
                the button system stays consistent. */}
            <div className="hmx-cta-actions">
              <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
                Start a Project
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
              <Link href="/portfolio" className="hmx-btn hmx-btn-ghost">
                View Our Work
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-reveal. The hiding rules only apply once this script has added
          `hmx-anim`, so with JS disabled every element renders visible. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
  var root = document.querySelector('.hmx');
  if (!root) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('hmx-anim');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
  root.querySelectorAll('.hmx-rv').forEach(function(el){ io.observe(el); });
  window.addEventListener('load', function(){
    setTimeout(function(){
      root.querySelectorAll('.hmx-rv:not(.is-in)').forEach(function(el){
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 400);
  });

  /* Case-study tabs. Switching tabs is pure CSS; this only brings the
     selected panel fully onto screen. All three panels share a min-height,
     so the block never reflows and the measurement stays valid. It scrolls
     only when part of the block is actually out of view, so clicking a tab
     that is already comfortably visible does not yank the page. */
  var tabs = root.querySelector('.hmx-cstabs');
  if (tabs) {
    var HEADER = 148;
    var scrollToTabs = function(){
      var r = tabs.getBoundingClientRect();
      var fitsBelow = r.bottom <= window.innerHeight;
      var startsBelowHeader = r.top >= HEADER;
      if (fitsBelow && startsBelowHeader) return;
      var target = window.pageYOffset + r.top - HEADER;
      /* If the block is taller than the space left under the header, still
         pin its top there — better a cut bottom than a cut heading. */
      window.scrollTo({ top: Math.max(target, 0), behavior: reduce ? 'auto' : 'smooth' });
    };
    tabs.querySelectorAll('.hmx-cs-r').forEach(function(r){
      r.addEventListener('change', function(){
        if (r.checked) requestAnimationFrame(scrollToTabs);
      });
    });
  }

})();

/* Logo wall auto-advance -- its OWN IIFE.
   It used to live at the foot of the reveal block above, which returns
   early when the visitor has reduced motion set or the browser has no
   IntersectionObserver. That guard is about the reveal animation, but it
   was taking the carousel down with it. */
(function(){
  /* ── Logo wall: auto-advance ──────────────────────────────────
     The wall is a CSS-only carousel -- two hidden radios drive which
     page is displayed and which dot is lit. Rather than rebuild it as
     a marquee (which would cost the dots, the keyboard support and the
     ability to stop on a logo), this just ticks the radio on a timer,
     so the existing transition, dots and focus behaviour all still
     apply.

     It pauses while the pointer is over the wall or while a dot has
     keyboard focus, and it does nothing at all for a visitor who has
     asked for reduced motion. */
  var lw = document.querySelector('.hmx-lw');
  if (lw) {
    var lwRadios = Array.prototype.slice.call(lw.querySelectorAll('.hmx-lw-r'));
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (lwRadios.length > 1 && !reduce) {
      var paused = false, timer = null;
      var DELAY = 4000;
      function advance() {
        if (paused) return;
        var i = 0;
        for (var k = 0; k < lwRadios.length; k++) if (lwRadios[k].checked) { i = k; break; }
        lwRadios[(i + 1) % lwRadios.length].checked = true;
      }
      function start() { stop(); timer = setInterval(advance, DELAY); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      lw.addEventListener('mouseenter', function () { paused = true; });
      lw.addEventListener('mouseleave', function () { paused = false; });
      lw.addEventListener('focusin', function () { paused = true; });
      lw.addEventListener('focusout', function () { paused = false; });
      /* A tab in the background should not keep cycling. */
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) stop(); else start();
      });
      start();
    }
  }
})();`,
        }}
      />
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PREVIOUS HERO — the Deep Indigo version this replaced. Kept for
   reference. Its CSS is preserved the same way at the foot of
   ./home-landing.css.
   ═══════════════════════════════════════════════════════════════ */

//       {/* ═══════════ HERO — full-bleed Deep Indigo ═══════════ */}
//       <section className="hmx-hero">
//         <div className="hmx-hero-grid" aria-hidden="true" />
//         <div className="hmx-glow hmx-glow-a" aria-hidden="true" />
//         <div className="hmx-glow hmx-glow-b" aria-hidden="true" />
//
//         <div className="hmx-wrap">
//           <div className="hmx-hero-inner">
//             <div>
//               <p className="hmx-eyebrow hmx-in" style={d(0)}>
//                 Software Development Company
//               </p>
//
//               <h1 className="hmx-h1 hmx-in" style={d(1)}>
//                 Enterprise <em>Custom AI</em>, Mobile &amp; Software App Development
//               </h1>
//
//               <p className="hmx-hero-sub hmx-in" style={d(2)}>
//                 Software Development Company for Businesses Worldwide
//               </p>
//
//               <p className="hmx-hero-body hmx-in" style={d(3)}>
//                 mTouch Labs helps businesses build, modernize, and scale digital products.
//                 We develop{" "}
//                 <Link className="hmx-link" href="/custom-software-development-company">
//                   custom software
//                 </Link>
//                 , enterprise applications,{" "}
//                 <Link className="hmx-link" href="/generative-ai-development-company">
//                   AI-powered solutions
//                 </Link>
//                 ,{" "}
//                 <Link className="hmx-link" href="/mobile-app-development-company">
//                   mobile apps
//                 </Link>
//                 , web platforms, and SaaS products designed around your business goals,
//                 users, and growth plans.
//               </p>
//
//               <div className="hmx-hero-ctas hmx-in" style={d(4)}>
//                 <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
//                   Start Your Project
//                   <i className="fa-solid fa-arrow-right" aria-hidden="true" />
//                 </Link>
//                 {/* White border — this is a Deep Indigo surface. */}
//                 <Link href="/portfolio" className="hmx-btn hmx-btn-ghost-light">
//                   View Our Work
//                   <i className="fa-solid fa-arrow-right" aria-hidden="true" />
//                 </Link>
//               </div>
//             </div>
//
//             <aside className="hmx-hero-panel hmx-in" style={d(3)}>
//               <h2>What we build</h2>
//               <ul className="hmx-panel-list">
//                 <li><i className="fa-solid fa-cubes" aria-hidden="true" />Custom software &amp; enterprise platforms</li>
//                 <li><i className="fa-solid fa-brain" aria-hidden="true" />Custom AI &amp; intelligent automation</li>
//                 <li><i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />Mobile apps for iOS &amp; Android</li>
//                 <li><i className="fa-solid fa-layer-group" aria-hidden="true" />Web platforms &amp; SaaS products</li>
//                 <li><i className="fa-solid fa-cloud-arrow-up" aria-hidden="true" />Cloud modernization &amp; integrations</li>
//               </ul>
//             </aside>
//           </div>
//         </div>
//
//         <div className="hmx-trust">
//           <div className="hmx-wrap">
//             <div className="hmx-trust-row">
//               {trustPoints.map((p) => (
//                 <div className="hmx-trust-cell" key={p.name}>
//                   <span className="hmx-trust-num">{p.num}</span>
//                   <span className="hmx-trust-name">{p.name}</span>
//                   <span className="hmx-trust-desc">{p.desc}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//
//         <div className="hmx-wrap">
//           <p className="hmx-hero-note">
//             From business applications and AI-powered products to mobile experiences and
//             enterprise platforms, mTouch Labs combines product thinking, engineering
//             expertise, and modern technology to turn ideas into scalable software solutions.
//           </p>
//         </div>
//       </section>

/* ═══════════════════════════════════════════════════════════════
   ▼▼▼  PREVIOUS HOMEPAGE — COMMENTED OUT, KEPT FOR REFERENCE  ▼▼▼

   The implementation below is the homepage exactly as it was before
   this rebuild: ~20 section components from
   components/sections/home/* plus its own metadata and JSON-LD.

   TO RESTORE IT
     1. Delete (or rename) everything above this banner.
     2. Strip the leading "// " from every line below.
     3. Delete ./home-landing.css if it is no longer used.

   Line comments are used rather than one big block comment because
   the old file contains JSX comments whose closing delimiter would
   end a block comment early and break the file.
   ═══════════════════════════════════════════════════════════════ */

//
// import type { Metadata } from "next";
// import Script from "next/script";
// import HeroSection from "@/components/sections/home/HeroSection";
// import TrustedPartnersSection from "@/components/sections/home/TrustedPartnersSection";
// import DigitalSolutionsSection from "@/components/sections/home/DigitalSolutionsSection";
// import WhyChooseSection from "@/components/sections/home/WhyChooseSection";
// import WhatMakesDifferentSection from "@/components/sections/home/WhatMakesDifferentSection";
// import WhyBusinessTrustSection from "@/components/sections/home/WhyBusinessTrustSection";
// import IndustriesSection from "@/components/sections/home/IndustriesSection";
// import TargetAudiencesSection from "@/components/sections/home/TargetAudiencesSection";
// import TestimonialSection from "@/components/sections/home/TestimonialSection";
// import PortfolioSection from "@/components/sections/home/PortfolioSection";
// import TechnologiesSection from "@/components/sections/home/TechnologiesSection";
// import AwardsSection from "@/components/sections/home/AwardsSection";
// import BlogSection from "@/components/sections/home/BlogSection";
// import LocationSection from "@/components/sections/home/LocationSection";
// import HomeFAQSection from "@/components/sections/home/HomeFAQSection";
// import TopServicesSection from "@/components/sections/home/TopServicesSection";
// import DigitalProductSection from "@/components/sections/home/digitalProduct";
// import BuildMethod from "@/components/sections/home/buildMethod";
// import AISolutionsSection from "@/components/sections/home/AISolutions";
// import { HonorsCode } from "@/components/sections/home/HonorsCode";
//
//
//
//
// export const metadata = {
//   title: {
//     absolute: "Software Development Company & IT Solutions | mTouch Labs"
//   },
//   description:
//     "Leading software development company offering custom software, mobile apps, web development, Salesforce solutions, UI/UX design & enterprise IT services.",
//   keywords: [
//     "software development company",
//     "IT solutions company",
//     "custom software development",
//     "mobile app development company",
//     "web development company",
//     "salesforce development company",
//     "hire dedicated developers",
//     "enterprise software development",
//     "UI/UX design company",
//     "mTouch Labs"
//   ],
//   authors: [{ name: "mTouch Labs" }],
//   creator: "mTouch Labs",
//   publisher: "mTouch Labs",
//   // NOTE: no `alternates.canonical` here. Next 14 hardcodes
//   // `pathname === "/" ? origin : href` when resolving metadata URLs, so the
//   // root canonical ALWAYS loses its trailing slash and no longer matches the
//   // URL the page is served at. The tag is emitted manually in the component
//   // below instead. Do not re-add it here or the page will have two canonicals.
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1
//     }
//   },
//   category: "technology",
//   // NOTE: no `icons` here on purpose. Next.js REPLACES the parent's icons
//   // object wholesale when a page redefines it, so an override here would drop
//   // the 32x32 PNG and the SVG favicon declared in app/layout.tsx.
//   openGraph: {
//     title: "Software Development Company & IT Solutions | mTouch Labs",
//     description:
//       "Custom software development, mobile apps, web solutions, Salesforce services and enterprise IT solutions for startups and businesses.",
//     url: "https://www.mtouchlabs.com",
//     siteName: "mTouch Labs",
//     type: "website",
//     locale: "en_US",
//     images: [
//       {
//         url: "https://www.mtouchlabs.com/images/Light.png",
//         width: 1200,
//         height: 630,
//         alt: "mTouch Labs - Software Development Company & IT Solutions"
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     // Repeated from app/layout.tsx: a page-level `twitter` object replaces the
//     // parent's entirely, so these handles have to be restated or they vanish.
//     site: "@mtouchlabs",
//     creator: "@mtouchlabs",
//     title: "Software Development Company & IT Solutions | mTouch Labs",
//     description:
//       "Custom software development, mobile apps, Salesforce solutions, UI/UX design & enterprise IT services by mTouch Labs.",
//     images: ["https://www.mtouchlabs.com/images/Light.png"]
//   }
// };
// // ─────────────────────────────────────────────────────────────
// // JSON-LD Structured Data — Updated for new service positioning
// // ─────────────────────────────────────────────────────────────
//
// const organizationSchema = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "mTouch Labs",
//   url: "https://www.mtouchlabs.com",
//   logo: "https://www.mtouchlabs.com/images/favicon.png",
//   description:
//     "mTouch Labs is a global software development company specializing in custom software development, SaaS product engineering, Salesforce consulting, cloud & DevOps solutions, and enterprise digital transformation.",
//   foundingDate: "2014",
//   sameAs: [
//     "https://www.linkedin.com/company/mtouchlabs",
//     "https://www.instagram.com/mtouchlabs",
//     "https://twitter.com/mtouchlabs",
//     "https://www.facebook.com/mtouchlabs",
//     "https://www.youtube.com/@mtouchlabs",
//   ],
//
//
//   areaServed: {
//     "@type": "Place",
//     name: "Worldwide"
//   },
//
//   contactPoint: [
//     {
//       "@type": "ContactPoint",
//       telephone: "+91-9390683154",
//       contactType: "sales",
//       availableLanguage: ["English", "Hindi", "Telugu"],
//       areaServed: "Worldwide",
//     },
//     {
//       "@type": "ContactPoint",
//       telephone: "+1-551-222-0070",
//       contactType: "sales",
//       availableLanguage: "English",
//       areaServed: "Worldwide",
//     },
//   ],
//   address: [
//     {
//       "@type": "PostalAddress",
//       addressLocality: "Hyderabad",
//       addressRegion: "Telangana",
//       postalCode: "500072",
//       addressCountry: "IN",
//     },
//     {
//       "@type": "PostalAddress",
//       addressLocality: "Bengaluru",
//       addressRegion: "Karnataka",
//       postalCode: "560076",
//       addressCountry: "IN",
//     },
//     {
//       "@type": "PostalAddress",
//       addressLocality: "Dover",
//       addressRegion: "DE",
//       postalCode: "19904",
//       addressCountry: "US",
//     },
//   ],
//
//   knowsAbout: [
//     "Custom Software Development",
//     "SaaS Product Engineering",
//     "Salesforce Consulting",
//     "Salesforce CRM Implementation",
//     "Cloud Engineering",
//     "DevOps Solutions",
//     "Enterprise Digital Transformation",
//     "Business Process Automation",
//     "Mobile App Development",
//     "Web Application Development",
//     "AI & Machine Learning",
//     "Multi-tenant SaaS Architecture",
//   ],
// };
//
// const websiteSchema = {
//   "@context": "https://schema.org",
//   "@type": "WebSite",
//   name: "mTouch Labs",
//   url: "https://www.mtouchlabs.com",
//   description:
//     "Global software development company delivering custom software, SaaS platforms, Salesforce consulting, and cloud & DevOps solutions.",
//   publisher: {
//     "@type": "Organization",
//     name: "mTouch Labs",
//     url: "https://www.mtouchlabs.com",
//   },
//   potentialAction: {
//     "@type": "SearchAction",
//     target: "https://www.mtouchlabs.com/search?q={search_term_string}",
//     "query-input": "required name=search_term_string",
//   },
// };
//
// // AEO FAQ — updated to match new service pages
// const faqSchema = {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   mainEntity: [
//     {
//       "@type": "Question",
//       name: "What does a software development company do?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "A software development company designs, develops, and maintains digital applications and systems tailored to business needs. mTouch Labs provides end-to-end custom software, SaaS, cloud, Salesforce CRM, and enterprise digital transformation solutions for startups and enterprises globally.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Do you work with international clients?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "Yes. mTouch Labs serves startups and enterprises across North America, Europe, the Middle East, and APAC from offices in Hyderabad, Bangalore, and the United States.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Do you offer SaaS and enterprise solutions?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "Yes. mTouch Labs develops scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure, as well as enterprise-grade applications designed for security, performance, and growth.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "What custom software development services does mTouch Labs provide?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "mTouch Labs builds tailored software systems including enterprise application development, business process automation, scalable backend architecture, and full-stack web and mobile applications to solve complex business challenges.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Does mTouch Labs offer Salesforce consulting?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "Yes. mTouch Labs provides Salesforce implementation, customization, automation workflows, and CRM integrations to help organizations optimize customer relationship management.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "What cloud and DevOps services does mTouch Labs offer?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "mTouch Labs implements cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions on AWS, Google Cloud, and Azure to accelerate innovation and reduce time-to-market.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Which industries does mTouch Labs serve?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "mTouch Labs delivers digital solutions across financial services, healthcare, retail and e-commerce, logistics and transportation, manufacturing, and SaaS and technology sectors.",
//       },
//     },
//     {
//       "@type": "Question",
//       name: "Why choose mTouch Labs as a technology partner?",
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: "mTouch Labs offers end-to-end software development expertise, enterprise-grade architecture, agile and DevOps-driven delivery, a global client engagement model, and long-term technology partnerships that go beyond project delivery.",
//       },
//     },
//   ],
// };
//
// // Professional Service schema — updated service catalog
// const professionalServiceSchema = {
//   "@context": "https://schema.org",
//   "@type": "ProfessionalService",
//   name: "mTouch Labs",
//   url: "https://www.mtouchlabs.com",
//   image: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp",
//   description:
//     "Global software development company delivering custom software, SaaS platforms, Salesforce consulting, and cloud & DevOps solutions.",
//   priceRange: "$$",
//   address: {
//     "@type": "PostalAddress",
//     addressLocality: "Hyderabad",
//     addressRegion: "Telangana",
//     addressCountry: "IN",
//   },
//   aggregateRating: {
//     "@type": "AggregateRating",
//     ratingValue: "4.9",
//     bestRating: "5",
//     reviewCount: "50",
//   },
//   hasOfferCatalog: {
//     "@type": "OfferCatalog",
//     name: "Software Development Services",
//     itemListElement: [
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Custom Software Development",
//           description:
//             "Tailored software systems for enterprise application development, business process automation, and scalable backend architecture.",
//           url: "https://www.mtouchlabs.com/custom-software-development-company",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "SaaS Product Development",
//           description:
//             "Scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure.",
//           url: "https://www.mtouchlabs.com/saas-development",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Salesforce Consulting & CRM Solutions",
//           description:
//             "Salesforce implementation, customization, automation workflows, and CRM integrations for optimized customer relationship management.",
//           url: "https://www.mtouchlabs.com/salesforce-consulting-services-company",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Cloud & DevOps Engineering",
//           description:
//             "Cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions on AWS, GCP, and Azure.",
//           url: "https://www.mtouchlabs.com/devops-services",
//         },
//       },
//       {
//         "@type": "Offer",
//         itemOffered: {
//           "@type": "Service",
//           name: "Enterprise Digital Transformation",
//           description:
//             "End-to-end digital transformation services from product strategy to deployment and long-term optimization.",
//         },
//       },
//     ],
//   },
// };
//
// // SiteNavigationElement schema — internal linking for AI engines
// const siteNavSchema = {
//   "@context": "https://schema.org",
//   "@type": "SiteNavigationElement",
//   name: "Main Services",
//   hasPart: [
//     {
//       "@type": "WebPage",
//       name: "Custom Software Development Services",
//       url: "https://www.mtouchlabs.com/custom-software-development-company",
//     },
//     {
//       "@type": "WebPage",
//       name: "SaaS Development Services",
//       url: "https://www.mtouchlabs.com/saas-development",
//     },
//     {
//       "@type": "WebPage",
//       name: "Salesforce Consulting Services",
//       url: "https://www.mtouchlabs.com/salesforce-consulting-services-company",
//     },
//     {
//       "@type": "WebPage",
//       name: "Cloud & DevOps Services",
//       url: "https://www.mtouchlabs.com/devops-services",
//     },
//     {
//       "@type": "WebPage",
//       name: "Contact mTouch Labs",
//       url: "https://www.mtouchlabs.com/contact-us",
//     },
//   ],
// };
//
//
// export default function HomePage() {
//   return (
//     <>
//       {/* Canonical — emitted here rather than via `alternates.canonical` so the
//           trailing slash survives; see the note in the metadata export above. */}
//       <link rel="canonical" href="https://www.mtouchlabs.com/" />
//
//       {/* JSON-LD Structured Data for SEO + AEO */}
//       <Script
//         id="organization-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(organizationSchema),
//         }}
//       />
//       <Script
//         id="website-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//       />
//       <Script
//         id="faq-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//       <Script
//         id="service-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(professionalServiceSchema),
//         }}
//       />
//       <Script
//         id="site-nav-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
//       />
//
//       {/* Page Sections */}
//       <HeroSection />
//       <TrustedPartnersSection />
//       <DigitalSolutionsSection />
//       <WhyChooseSection />
//       <WhatMakesDifferentSection />
//       <WhyBusinessTrustSection />
//       <BuildMethod />
//       <AISolutionsSection />
//       <IndustriesSection />
//       <TargetAudiencesSection />
//       <TestimonialSection />
//       <PortfolioSection />
//       <TechnologiesSection />
//       {/* <AwardsSection /> */}
//       <HonorsCode/>
//       <BlogSection />
//       <LocationSection />
//
//       <HomeFAQSection />
//       <DigitalProductSection />
//       {/* <TopServicesSection /> */}
//       {/* Logo modal — shows all partner logos when "View All" is clicked */}
//       <div className="modal-overlay hide" id="openlogoModal">
//         <div className="logomodal">
//           <div
//             className="modal-content"
//             style={{
//               background: "#fff",
//               borderRadius: "20px",
//               position: "relative",
//             }}
//           >
//             <span
//               className="js-close-logo-modal"
//               role="button"
//               tabIndex={0}
//               aria-label="Close partners modal"
//               style={{
//                 position: "absolute",
//                 top: "15px",
//                 right: "20px",
//                 fontSize: "28px",
//                 cursor: "pointer",
//                 color: "#333",
//                 fontWeight: "bold",
//               }}
//             >
//               &times;
//             </span>
//             <h3
//               style={{
//                 marginBottom: "20px",
//                 fontSize: "22px",
//                 textAlign: "center",
//               }}
//             >
//               Our Trusted Partners
//             </h3>
//             <div
//               className="logo-modal-grid-inline"
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(5, 1fr)",
//                 gap: "20px",
//                 overflowY: "auto",
//                 maxHeight: "450px",
//                 padding: "10px",
//               }}
//             >
//               {[
//                 "adjd.png", "l2r.png", "aduri.png", "govt.png", "kezad-logo.png",
//                 "paygenpro.png", "payville.png", "kohere.png", "onlyshops.png", "olt.png",
//                 "fleuncyo.png", "zuppibuy.png", "paygen.png", "voosh.png", "omvideos.png",
//                 "book.png", "uptick.png", "saachi.png", "macServices.png", "drpicklogo.png",
//                 "classy.png", "onus.png", "hitech.svg", "zefsci.png", "medbuz.png",
//                 "veteach.png", "tanyya.png", "heyman.png", "badham.png", "v.png",
//                 "tej.png", "adify.png", "clikget.png", "countryclub.png", "kalp.png",
//                 "roboride.png", "ricehub.png",
//               ].map((logo, i) => (
//                 <div key={i} className="logo-modal-cell">
//                   <img
//                     src={`/images/home/tech/${logo}`}
//                     alt={`${logo.replace(/\.\w+$/, "")} — mTouch Labs partner`}
//                     loading="lazy"
//                     decoding="async"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//
//     </>
//   );
// }
