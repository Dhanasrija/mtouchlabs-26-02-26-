import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
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
  // `absolute` is required: the root layout sets a title template of
  // "%s | mTouch Labs", so a plain string would render the suffix twice.
  title: { absolute: "Software Development Company | mTouch Labs" },
  description:
    "mTouch Labs is a global software development company delivering enterprise software, custom AI, mobile apps, web applications, SaaS products, and scalable digital solutions.",
  keywords: [
    "software development company",
    "custom software development company",
    "enterprise software development",
    "AI software development",
    "mobile app development company",
    "web application development",
    "SaaS development company",
    "software product development",
    "offshore software development",
    "dedicated software development team",
  ],
  authors: [{ name: "mTouch Labs" }],
  creator: "mTouch Labs",
  publisher: "mTouch Labs",
  category: "technology",
  // NOTE: no `alternates.canonical`. Next 14 hardcodes
  // `pathname === "/" ? origin : href` when resolving metadata URLs, so the
  // root canonical always loses its trailing slash and stops matching the URL
  // the page is served at. The tag is emitted manually below — do not re-add
  // it here or the page ships two canonicals.
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
    title: "Software Development Company | mTouch Labs",
    description:
      "Build, modernize, and scale digital products with mTouch Labs. Enterprise software, custom AI, mobile apps, web applications, SaaS, and software solutions.",
    url: "https://www.mtouchlabs.com",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        // /og-image.jpg does not exist in public/ — this is the real asset the
        // rest of the site shares. Swap both URLs together if you add one.
        url: "https://www.mtouchlabs.com/images/Light.png",
        width: 1200,
        height: 630,
        alt: "mTouch Labs - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // A page-level `twitter` object replaces the parent's entirely, so the
    // handles from app/layout.tsx have to be restated or they vanish.
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Software Development Company | mTouch Labs",
    description:
      "Enterprise software, custom AI, mobile apps, web applications, SaaS, and digital product development by mTouch Labs.",
    images: ["https://www.mtouchlabs.com/images/Light.png"],
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


/* Figures shown under the partner section. */
const stats = [
  { n: "14+", k: "Years of Experience", v: "Software engineering and digital product development" },
  { n: "1,500+", k: "Projects Delivered", v: "Custom software and digital solutions" },
  { n: "500+", k: "Clients Served", v: "Supporting businesses across industries" },
  { n: "ISO", k: "Certified", v: "Structured quality and development practices" },
  { n: "Award", k: "Recognized", v: "Recognition for technology and innovation" },
];

/* The About section's proof block — rendered as the rule grid, not chips. */
const highlights = [
  { k: "14+ Years", v: "Software engineering and digital product development, across every stage of the lifecycle." },
  { k: "1,500+ Projects", v: "Custom software, platforms and digital products delivered to date." },
  { k: "500+ Clients", v: "Startups, growing businesses and enterprises across industries." },
  { k: "Global Delivery", v: "Distributed teams supporting businesses worldwide, in your hours." },
  { k: "ISO Certified", v: "Structured quality, security and development practices end to end." },
  { k: "Full Lifecycle", v: "Discovery, UI/UX, architecture, engineering, QA, deployment and long-term support." },
];

const services = [
  {
    id: "custom-software",
    icon: "fa-solid fa-cubes",
    title: "Custom Software Development",
    desc: "Built Around Your Business",
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
    desc: "Powering Complex Operations",
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
    desc: "Smarter Business Automation",
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
    desc: "Apps That Drive Engagement",
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
    desc: "Secure, Scalable Experiences",
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
    desc: "From Idea to Market",
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
    desc: "Future-Ready Digital Infrastructure",
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
    desc: "Designed for Better Experiences",
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
    tag: "Government · Enterprise E-Commerce Platform",
    headline: "A state-wide digital commerce platform, built to scale",
    img: "/images/portfolio/golkonda.webp",
    imgAlt: "Telangana State Government e-commerce platform built by mTouch Labs",
    challenge:
      "A growing organization needed a scalable digital platform to streamline operations, improve accessibility, and connect multiple business workflows.",
    solution:
      "mTouch Labs designed and developed a customized software platform with intuitive user experiences, integrated workflows, secure data handling, and an architecture built for future expansion.",
    result:
      "A centralized digital solution that simplified business processes and provided a stronger foundation for continued growth.",
    link: "/portfolio/telangana-ecommerce-mobile-app-development",
  },
  {
    n: "02",
    title: "AI-Powered Digital Product",
    tag: "Public Sector · Intelligent Mobile Product",
    headline: "Intelligent capability added without complicating the experience",
    img: "/images/portfolio/ADJD-APP.webp",
    imgAlt: "Abu Dhabi Judicial Department mobile application built by mTouch Labs",
    challenge:
      "The business wanted to introduce intelligent capabilities into its digital product while maintaining a simple experience for its users.",
    solution:
      "mTouch Labs integrated AI capabilities into the product workflow, combining automation, intelligent interactions, and application-level functionality within a scalable architecture.",
    result:
      "A smarter digital experience designed to reduce manual effort and create more efficient user and business workflows.",
    link: "/portfolio/abu-dhabi-judicial-department-mobile-app-development",
  },
  {
    n: "03",
    title: "Mobile & Web Platform",
    tag: "Retail · Multi-Vendor Marketplace",
    headline: "One synchronized platform across mobile and web",
    img: "/images/portfolio/khidkee.webp",
    imgAlt: "Khidkee multi-vendor e-commerce mobile and web platform built by mTouch Labs",
    challenge:
      "A business needed connected mobile and web experiences that could support users across different touchpoints while keeping information and workflows synchronized.",
    solution:
      "Our team developed a coordinated mobile and web platform with responsive interfaces, backend services, APIs, and integrations designed around the client's operational requirements.",
    result:
      "A unified digital experience that improved accessibility and provided a scalable foundation for ongoing product development.",
    link: "/portfolio/multi-vendor-ecommerce-mobile-app-development",
  },
];

const whyChoose = [
  { icon: "fa-solid fa-calendar-check", title: "14+ Years of Engineering Experience", desc: "Experience across software and digital product development lets us approach complex technical requirements with a practical, business-focused mindset." },
  { icon: "fa-solid fa-infinity", title: "End-to-End Product Development", desc: "From discovery and UI/UX design to development, testing, deployment and ongoing support, our teams cover the complete software development lifecycle." },
  { icon: "fa-solid fa-sliders", title: "Custom-Built for Your Requirements", desc: "Not every business problem should be solved with the same technology. Solutions are designed around your workflows, users, integrations and objectives." },
  { icon: "fa-solid fa-arrow-up-right-dots", title: "Scalable & Maintainable Architecture", desc: "We build with future growth in mind, considering performance, scalability, maintainability, integrations and evolving product requirements from the beginning." },
  { icon: "fa-solid fa-microchip", title: "AI & Modern Technology Expertise", desc: "We identify practical opportunities for AI, automation, cloud and modern architectures — without adding technology that serves no real business purpose." },
  { icon: "fa-solid fa-shield-halved", title: "Security & Quality-Focused Development", desc: "Security, testing, code quality, performance and reliability are considered throughout the lifecycle, so the software is safe to operate and evolve." },
  { icon: "fa-solid fa-people-group", title: "Flexible Engagement Models", desc: "A complete product team, support for a specific project, or extra engineering capacity — the engagement is shaped around what you actually need." },
  { icon: "fa-solid fa-handshake", title: "Long-Term Technology Partnership", desc: "Software doesn't stop evolving after launch. We keep supporting improvements, maintenance, optimization, integrations and new features as you grow." },
  { icon: "fa-solid fa-comments", title: "Transparent Communication", desc: "Clear reporting, shared boards and regular demos, so you always know what is built, what is next and where a project actually stands." },
];

/* Only verifiable entries, already used elsewhere on the site. Each one
   supplies the small list logo and the artwork shown in the phone.
   `iso.png` is the only ISO asset in the project and it is a 48x48 mark,
   so on that slide it renders centred at its own scale rather than being
   upscaled into a blurry fill. */
const awards = [
  {
    logo: "/images/home/honors/NascomInspire.webp",
    shot: "/images/home/honors/NascomInspire.webp",
    alt: "NASSCOM SME Inspire Awards 2026 winner — mTouch Labs",
    title: "NASSCOM SME Inspire Award",
    desc: "Recognized for excellence and innovation in the technology sector.",
  },
  {
    logo: "/images/home/honors/OfficialNASSCOMMember.webp",
    shot: "/images/home/honors/OfficialNASSCOMMember.webp",
    alt: "Official NASSCOM Member — mTouch Labs",
    title: "Official NASSCOM Member",
    desc: "Member of India's apex technology industry body.",
  },
  {
    logo: "/images/iso.png",
    shot: "/images/iso.png",
    alt: "ISO certified quality and process standards — mTouch Labs",
    title: "ISO Certified",
    desc: "Established quality and process standards across our development practices.",
  },
];

/* The verified quotes already published on the site, with real logos. */
const testimonials = [
  {
    quote:
      "We have partnered with mTouch Labs for the development of the Sacchi application, and I'm pleased to share that the project went exceptionally well from start to finish.",
    name: "Pavan HK",
    role: "General Manager, Sacchi",
    flag: "/images/testimonial/testimonial_ind.webp",
    flagAlt: "India",
    logo: "/images/testimonial/testimonial_saachi.webp",
    logoAlt: "Sacchi",
  },
  {
    quote:
      "mTouch Labs transformed our parking operations with the Rahayel System. It's efficient, reliable, and perfectly suited to our needs. The team was professional and proactive.",
    name: "Kezad Groups",
    role: "CEO, Rahayel",
    flag: "/images/testimonial/testimonial_abudabhi.webp",
    flagAlt: "United Arab Emirates",
    logo: "/images/testimonial/testimonial_rahayel.webp",
    logoAlt: "Rahayel",
  },
  {
    quote:
      "mTouch Labs made the Dr. Pick app development seamless. They understood our healthcare vision and delivered an intuitive, patient-friendly platform with great commitment and timely execution.",
    name: "Dr. Vishnu",
    role: "Managing Director, Dr. Pick",
    flag: "/images/testimonial/testimonial_ind.webp",
    flagAlt: "India",
    logo: "/images/testimonial/drpick.webp",
    logoAlt: "Dr. Pick",
  },
];

const engagements = [
  { n: "01", icon: "fa-solid fa-magnifying-glass", title: "Project-Based Development", desc: "A dedicated team designs, develops, tests and launches a defined software product or solution." },
  { n: "02", icon: "fa-solid fa-pen-ruler", title: "Offshore Development", desc: "Extend your engineering capability with an offshore team that works as an integrated part of your product workflow." },
  { n: "03", icon: "fa-solid fa-code", title: "Dedicated Teams", desc: "A team built around your technical requirements, product roadmap and development goals." },
  { n: "04", icon: "fa-solid fa-circle-check", title: "Long-Term Engineering", desc: "Ongoing support to improve, scale, maintain and modernize the software you already run." },
];

/* `bengaluru.svg` is original line art drawn to match usa.svg and
   hyderabad.svg — the project had only a night photograph of Vidhana
   Soudha, which would not have sat in the same monoline style. */
const locations = [
  {
    flag: "\uD83C\uDDFA\uD83C\uDDF8",
    name: "United States",
    desc: "Software development support for businesses operating in the USA.",
    art: "/images/new-home(02-09)/usa.svg",
    artAlt: "",
    link: "/software-development-company-usa",
    label: "Explore USA",
  },
  {
    flag: "\uD83C\uDDEE\uD83C\uDDF3",
    name: "Bengaluru",
    desc: "Software engineering and product development capabilities from Bengaluru.",
    art: "/images/new-home(02-09)/bengaluru.svg",
    artAlt: "",
    link: "/software-development-company-bangalore",
    label: "Explore Bengaluru",
  },
  {
    flag: "\uD83C\uDDEE\uD83C\uDDF3",
    name: "Hyderabad",
    desc: "Our engineering base, covering software development capabilities in Hyderabad.",
    art: "/images/new-home(02-09)/hyderabad.svg",
    artAlt: "",
    link: "/software-development-company-hyderabad",
    label: "Explore Hyderabad",
  },
];

/* Client logos under the closing CTA — all already in the project. */
const ctaLogos = [
  { src: "/images/home/tech/kezad-logo.png", alt: "KEZAD Group" },
  { src: "/images/home/tech/kohere.png", alt: "Kohere" },
  { src: "/images/home/tech/aduri.png", alt: "Aduri Group" },
  { src: "/images/home/tech/adjd.png", alt: "Abu Dhabi Judicial Department" },
  { src: "/images/home/tech/govt.png", alt: "Government of Telangana" },
];

/* One array feeds both the accordion and the FAQPage schema, so the two
   can never drift apart. */
const faqs = [
  {
    q: "What does a software development company do?",
    a: "A software development company helps businesses plan, design, build, test, deploy, and maintain software products and applications. This can include custom business software, enterprise platforms, mobile apps, web applications, SaaS products, AI solutions, cloud applications, and software integrations.",
  },
  {
    q: "How do I choose the right software development company?",
    a: "Look for a software development partner with relevant technical expertise, proven project experience, a transparent development process, strong communication, scalable engineering capabilities, and an understanding of your business objectives. Reviewing case studies, client feedback, technology expertise, and engagement models can also help you evaluate the right partner.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Custom software development costs depend on factors such as product complexity, features, integrations, technology requirements, design, security, team size, and development timeline. A more accurate estimate can be provided after understanding the project requirements and business objectives.",
  },
  {
    q: "How long does it take to develop custom software?",
    a: "The development timeline varies based on the scope, complexity, features, integrations, and technical requirements of the project. A smaller MVP may take less time than a complex enterprise platform. After reviewing the requirements, a suitable roadmap and delivery timeline can be established.",
  },
  {
    q: "What types of software does mTouch Labs develop?",
    a: "mTouch Labs develops custom software solutions including enterprise applications, AI-powered software, mobile applications, web applications, SaaS platforms, digital products, cloud solutions, and software integrations. Solutions are designed around the specific requirements and objectives of each business.",
  },
  {
    q: "Does mTouch Labs provide custom software development?",
    a: "Yes. mTouch Labs develops custom software based on business processes, users, workflows, technical requirements, integrations, and growth plans. The development approach can cover discovery, UI/UX design, architecture, development, testing, deployment, and ongoing product support.",
  },
  {
    q: "Can mTouch Labs build AI-powered software and applications?",
    a: "Yes. mTouch Labs develops AI-powered applications and integrates AI capabilities into digital products and existing software. Depending on the use case, solutions can include AI assistants, intelligent automation, generative AI features, data-driven applications, and AI-enabled business workflows.",
  },
  {
    q: "Does mTouch Labs offer offshore software development?",
    a: "Yes. mTouch Labs offers offshore software development for businesses looking to extend their engineering capabilities. Engagements can be structured around project-based development, dedicated development teams, or ongoing product engineering requirements.",
  },
  {
    q: "Can mTouch Labs provide a dedicated software development team?",
    a: "Yes. A dedicated development team can be structured around your product roadmap, technical requirements, and development objectives. Depending on the project, the team can include developers, UI/UX designers, QA engineers, project managers, architects, and other specialists.",
  },
  {
    q: "Can mTouch Labs modernize or migrate an existing software application?",
    a: "Yes. mTouch Labs can help modernize existing applications, improve application architecture, migrate systems to modern environments, integrate new technologies, optimize performance, and introduce new features while considering the existing software and business requirements.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mtouchlabs.com/#organization",
  name: "mTouch Labs",
  url: "https://www.mtouchlabs.com",
  logo: "https://www.mtouchlabs.com/images/Light.png",
  description:
    "mTouch Labs is a software development company helping businesses build, modernize, and scale digital products — custom software, enterprise applications, AI-powered solutions, mobile apps, web platforms, and SaaS products.",
  foundingDate: "2014",
  sameAs: [
    "https://www.linkedin.com/company/mtouchlabs",
    "https://www.instagram.com/mtouchlabs",
    "https://twitter.com/mtouchlabs",
    "https://www.facebook.com/mtouchlabs",
    "https://www.youtube.com/@mtouchlabs",
  ],
  areaServed: { "@type": "Place", name: "Worldwide" },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-9390683154", contactType: "sales", areaServed: "IN", availableLanguage: ["English", "Hindi", "Telugu"] },
    { "@type": "ContactPoint", telephone: "+1-551-222-0070", contactType: "sales", areaServed: "US", availableLanguage: "English" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500072",
    addressCountry: "IN",
  },
  knowsAbout: services.map((s) => s.title),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "mTouch Labs",
  url: "https://www.mtouchlabs.com",
  description:
    "Software development company delivering enterprise software, custom AI, mobile apps, web applications, SaaS products, and scalable digital solutions.",
  publisher: { "@id": "https://www.mtouchlabs.com/#organization" },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "mTouch Labs",
  url: "https://www.mtouchlabs.com",
  image: "https://www.mtouchlabs.com/images/Light.png",
  description:
    "Software development company providing custom software, enterprise applications, AI-powered solutions, mobile apps, web platforms, SaaS products, cloud modernization, and UI/UX design.",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
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

export default function HomePage() {
  return (
    <main className="hmx">
      {/* Canonical — emitted here rather than via `alternates.canonical` so
          the trailing slash survives; see the note in the metadata export. */}
      <link rel="canonical" href="https://www.mtouchlabs.com/" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ═══════════ HERO ═══════════
          Rebuilt to the approved comp (Figma: mTouch Hero_2026): light
          lavender→blush gradient stage, copy left, artwork right. The
          previous Deep Indigo hero is preserved, commented, at the
          bottom of this file. */}
      <section className="hmx-hero">
        <div className="hmx-wrap">
          <div className="hmx-hero-inner">
            <div>
              <p className="hmx-eyebrow hmx-in" style={d(0)}>
                Software Development Company
              </p>

              {/* Broken by hand rather than left to the measure, so the four
                  lines land exactly as the comp sets them. */}
              <h1 className="hmx-h1 hmx-in" style={d(1)}>
                Enterprise Custom
                <br />
                AI, Mobile &amp;
                <br />
                Software
                <br />
                App Development
              </h1>

              <p className="hmx-hero-sub hmx-in" style={d(2)}>
                Software Development Company for Businesses Worldwide
              </p>

              <div className="hmx-hero-ctas hmx-in" style={d(3)}>
                <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
                  Start Your Project
                  <ArrowUpRight />
                </Link>
                <Link href="/portfolio" className="hmx-btn-text">
                  View Our Work
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* The artwork is the LCP element, so it is eager with
                fetchPriority high — never lazy. width/height reserve the
                box from first paint so nothing shifts while it decodes.
                Plain <img>: next/image cannot optimise an SVG. */}
            <div className="hmx-hero-art hmx-in" style={d(2)}>
              <img
                src="/images/new-home(02-09)/hero.svg"
                alt="mTouch Labs — AI, software development, Salesforce and data intelligence capabilities, trusted by 1.5k clients"
                width={720}
                height={640}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>

      </section>

      {/* ═══════════ CLIENT LOGOS ═══════════ */}
      <section className="hmx-sec" id="clients">
        <div className="hmx-wrap">
          <div className="hmx-logos-head hmx-rv">
            <h2 className="hmx-logos-h2">
              Trusted By <em>Clients</em>
              <br />
              Driven by Excellence
            </h2>
          </div>

          {/* One SVG for the whole wall — a single request, crisp at any DPR. */}
          <div className="hmx-logos-art hmx-rv" style={d(1)}>
            <img
              src="/images/new-home(02-09)/logos-work.svg"
              alt="Clients we work with: Sony, NEC, Apollo Tyres, Mastercard, Casenet, SRV Canada VRS, Royal Enfield, BBC Media Action, Johnson & Johnson, CBN, AGP and PwC"
              width={1140}
              height={380}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ PARTNER — award proof + figures ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="partner">
        <div className="hmx-wrap">
          <div className="hmx-partner">
            <div className="hmx-rv">
              <h2 className="hmx-partner-h2">
                Your Trusted <em>Enterprise</em> Digital Solutions Partner
              </h2>
              <p className="hmx-partner-p">
                From business applications and AI-powered products to mobile experiences
                and enterprise platforms, mTouch Labs combines product thinking,
                engineering expertise, and modern technology to turn ideas into scalable
                software solutions.
              </p>
              <div className="hmx-partner-cta">
                <Link href="/contact-us" className="hmx-btn hmx-btn-primary">
                  Get Started
                  <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="hmx-partner-art hmx-rv" style={d(1)}>
              <img
                src="/images/new-home(02-09)/award-nasscom-2026.webp"
                alt="mTouch Labs receiving the NASSCOM SME Inspire Awards 2026 Digital Transformation Catalyst award"
                width={780}
                height={538}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="hmx-stats">
            {stats.map((s, i) => (
              <div className="hmx-rv" key={s.k} style={d(i)}>
                <span className="hmx-stat-n">{s.n}</span>
                <span className="hmx-stat-k">{s.k}</span>
                <span className="hmx-stat-v">{s.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ AUTHORITY ═══════════ */}
      <section className="hmx-sec" id="about">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">About mTouch Labs</p>
            <h2 className="hmx-h2">
              Building digital solutions with <em>14+ years</em> of engineering experience
            </h2>
            <div className="hmx-auth-intro">
              <p>
                For more than 14 years, mTouch Labs has helped businesses turn technology
                ideas into practical digital products. Our engineering teams work across
                custom software, enterprise applications, AI-powered solutions, mobile apps,
                web platforms, and SaaS products — combining technical expertise with a
                business-focused approach to product development.
              </p>
              <p>
                We work with organizations at every stage of their digital journey: building
                a new product from the ground up, modernizing an existing application,
                integrating new technologies, or scaling a platform that is already growing.
              </p>
            </div>

          </div>

          {/* Proof block — thick rule over the first row, hairlines after.
              Replaces the chip rail: same facts, far more presence. */}
          <div className="hmx-rulegrid">
            {highlights.map((h, i) => (
              <div className="hmx-rv" key={h.k} style={d(i % 3)}>
                <span className="hmx-rule-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{h.k}</h3>
                <p>{h.v}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", margin: "46px 0 0" }}>
            <Link href="/about" className="hmx-btn hmx-btn-primary">
              About Us
              <ArrowUpRight />
            </Link>
          </p>

        </div>
      </section>

      {/* ═══════════ APPROACH — artwork + copy, mirrored ═══════════ */}
      {/* White ground: the two SVGs carry a near-white plate of their own,
          so a tinted band would show as a visible box around each one. */}
      <section className="hmx-sec" id="approach">
        <div className="hmx-wrap">
          <div className="hmx-approach">
            <div className="hmx-appr hmx-rv">
              <div className="hmx-appr-art">
                <img
                  src="/images/new-home(02-09)/engineering.svg"
                  alt="Engineering lifecycle — discovery, architecture, development, quality assurance and deployment"
                  width={620}
                  height={470}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="hmx-appr-b">
                <span className="hmx-appr-n" aria-hidden="true">01</span>
                <h3>Engineering Expertise Built Around Your Business</h3>
                <p>
                  Every software project has different objectives, users, technical
                  requirements, and growth expectations. Our approach starts by
                  understanding the business problem before defining the technology
                  solution.
                </p>
                <p>
                  From product discovery and architecture through development, quality
                  assurance, deployment, and ongoing improvement, our teams support the
                  complete software development lifecycle.
                </p>
              </div>
            </div>

            {/* Mirrored: copy leads, artwork follows. */}
            <div className="hmx-appr hmx-appr--flip hmx-rv">
              <div className="hmx-appr-art">
                <img
                  src="/images/new-home(02-09)/buildt-for-quality.svg"
                  alt="Quality foundations — scalability, security, performance, maintainability, integration and reliability"
                  width={620}
                  height={470}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="hmx-appr-b">
                <span className="hmx-appr-n" aria-hidden="true">02</span>
                <h3>Built for Quality, Scalability &amp; Long-Term Growth</h3>
                <p>
                  Our development approach focuses on software that is reliable today and
                  adaptable tomorrow. Scalability, performance, security, maintainability,
                  and integration requirements are considered throughout the process.
                </p>
                <p>
                  A new digital product, enterprise software, an AI-powered application, or
                  the modernization of an existing system — mTouch Labs provides the
                  engineering expertise to move it from concept to production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES — hairline matrix ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="services">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Core Services</p>
            <h2 className="hmx-h2">
              End-to-end <em>software development services</em>
            </h2>
            <p className="hmx-lead">
              From a new product idea to enterprise modernization, mTouch Labs combines
              product strategy, engineering, design, AI, cloud, and quality assurance into
              solutions designed around your objectives, technical requirements, and
              growth plans.
            </p>
          </div>

          <div className="hmx-matrix hmx-rv">
            {services.map((s, i) => (
              <article className="hmx-cell" key={s.id} id={s.id}>
                <span className="hmx-cell-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="hmx-cell-ico" aria-hidden="true">
                  <i className={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href={s.link} className="hmx-arrow">
                  {s.label}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CASE STUDIES — dark band ═══════════ */}
      {/* Flat Deep Indigo — no rule-grid overlay. */}
      <section className="hmx-sec hmx-sec--dark" id="case-studies">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Featured Projects</p>
            <h2 className="hmx-h2">
              Proven software solutions for <em>real-world challenges</em>
            </h2>
            <p className="hmx-lead">
              Successful software development is about more than delivering code. It is
              about solving meaningful business problems and building technology that can
              evolve as your organization grows.
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

          <div className="hmx-cs-outro hmx-rv">
            <h3>From complex requirements to measurable outcomes</h3>
            <p>
              Every project has a different starting point. Whether the goal is to launch a
              new product, improve an existing application, automate processes, or introduce
              new technology, our approach connects technical decisions with measurable
              business objectives.{" "}
              <Link className="hmx-link" href="/case-studies">
                View all case studies
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      <section className="hmx-sec" id="why-mtouch-labs">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Why Choose Us</p>
            <h2 className="hmx-h2">
              Why businesses choose <em>mTouch Labs</em>
            </h2>
            <p className="hmx-lead">
              The right development partner shapes how effectively a product moves from an
              idea to a reliable, scalable solution. Eight reasons teams keep us on their
              roadmap after the first release.
            </p>
          </div>

          <div className="hmx-why-grid">
            {whyChoose.map((w, i) => (
              <div className="hmx-why hmx-rv" key={w.title} style={d(i % 3)}>
                <span className="hmx-why-ico" aria-hidden="true">
                  <i className={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RECOGNITION ═══════════ */}
      <section className="hmx-sec hmx-sec--stone" id="recognition">
        <div className="hmx-wrap">
          {/* Rounded Deep Indigo panel carrying the award star. */}
          <div className="hmx-recog hmx-rv">
            <p className="hmx-eyebrow">Recognition &amp; Client Feedback</p>
            <img
              className="hmx-recog-star"
              src="/images/new-home(02-09)/star.svg"
              alt=""
              width={128}
              height={128}
              loading="lazy"
              decoding="async"
            />
            <h2 className="hmx-recog-h2">
              Trusted by businesses. Recognized for <em>Technology Excellence</em>.
            </h2>
            <p className="hmx-recog-p">
              Businesses need more than a development team — they need a partner they can
              trust with important products, data, and digital initiatives. Our
              certifications, industry recognition, and client relationships reflect that.
            </p>
          </div>

          {/* CSS-only: three hidden radios drive the active row, the phone
              slide and the pager dots. No JavaScript on this page. */}
          <div className="hmx-aw hmx-rv">
            {awards.map((a, i) => (
              <input
                key={`awr-${i}`}
                className="hmx-aw-r"
                type="radio"
                name="hmx-aw"
                id={`hmx-aw-${i + 1}`}
                defaultChecked={i === 0}
              />
            ))}

            {/* Left column — the selectable list. */}
            <div className="hmx-aw-col">
              <p className="hmx-aw-eyebrow">Awards &amp; Certifications</p>
              <h2 className="hmx-aw-h2">
                <em>Awards</em> &amp; Certifications
              </h2>

              <ul className="hmx-aw-list">
                {awards.map((a, i) => (
                  <li className="hmx-aw-item" key={a.title}>
                    <label className="hmx-aw-row" htmlFor={`hmx-aw-${i + 1}`}>
                      <span className="hmx-aw-logo">
                        <img src={a.logo} alt="" width={52} height={52} loading="lazy" decoding="async" />
                      </span>
                      <span className="hmx-aw-b">
                        <strong>{a.title}</strong>
                        <span>{a.desc}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              <Link href="/awards-recognition" className="hmx-arrow">
                See all awards &amp; recognition
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            {/* Right column — phone mock. Bezel, notch and screen are
                pure CSS; only the award artwork is an image. */}
            <div className="hmx-phone-wrap">
              <div className="hmx-phone">
                <div className="hmx-phone-screen">
                  {awards.map((a) => (
                    <div className="hmx-slide" key={`sl-${a.title}`}>
                      <img
                        src={a.shot}
                        alt={a.alt}
                        width={218}
                        height={218}
                        loading="lazy"
                        decoding="async"
                      />
                      <p className="hmx-slide-t">{a.title}</p>
                    </div>
                  ))}
                  <div className="hmx-dots" aria-hidden="true">
                    <span className="hmx-dot" />
                    <span className="hmx-dot" />
                    <span className="hmx-dot" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="hmx-subhead hmx-subhead--sp">What Our Clients Say</p>
          <div className="hmx-quotes">
            {testimonials.map((t, i) => (
              <figure className="hmx-quote hmx-rv" key={t.name} style={d(i)}>
                <span className="hmx-quote-mark" aria-hidden="true">&ldquo;</span>
                <blockquote>{t.quote}</blockquote>
                <figcaption className="hmx-quote-foot">
                  <span className="hmx-quote-who">
                    <img
                      className="hmx-quote-flag"
                      src={t.flag}
                      alt={t.flagAlt}
                      width={25}
                      height={18}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>
                      <span className="hmx-quote-name">{t.name}</span>
                      <span className="hmx-quote-role">{t.role}</span>
                    </span>
                  </span>
                  <img
                    className="hmx-quote-logo"
                    src={t.logo}
                    alt={t.logoAlt}
                    height={27}
                    loading="lazy"
                    decoding="async"
                  />
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GLOBAL DELIVERY ═══════════ */}
      <section className="hmx-sec" id="global-delivery">
        <div className="hmx-wrap">
          <div className="hmx-head hmx-rv">
            <p className="hmx-eyebrow">Global Development &amp; Delivery</p>
            <h2 className="hmx-h2">
              Software development for <em>businesses worldwide</em>
            </h2>
            <p className="hmx-lead">
              Businesses need technology partners who can work across markets, time zones,
              and changing requirements. Four ways to work with our engineering teams.
            </p>
          </div>

          <div className="hmx-rail hmx-rv">
            {engagements.map((e) => (
              <div className="hmx-step" key={e.n}>
                <span className="hmx-step-tile" aria-hidden="true">
                  <i className={e.icon} />
                  <span className="hmx-step-n">{Number(e.n)}</span>
                </span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>

          <div className="hmx-collab">
            {/* Dotted world map. NOT Vector.svg — that file is a PNG with
                an .svg extension, so it is served as image/svg+xml, fails
                to parse, and renders nothing. world-map.webp is the same
                artwork, correctly typed and recoloured. */}
            <img
              className="hmx-collab-map"
              src="/images/new-home(02-09)/world-map.webp"
              alt=""
              width={1300}
              height={675}
              loading="lazy"
              decoding="async"
            />

            <h3 className="hmx-collab-h hmx-rv">
              Built for <em>Global Collaboration</em>
            </h3>

            <div className="hmx-collab-card hmx-rv">
              <p>
                We use collaborative development practices, transparent communication,
                project management tools, and structured delivery processes to keep
                distributed teams aligned throughout the software development lifecycle.
              </p>
              <p>
                Whether you&apos;re launching a new product or expanding an existing
                engineering capability, our teams adapt to your technical and business
                requirements.
              </p>
            </div>

            <p className="hmx-subhead hmx-subhead--sp">Where We Deliver From</p>

            <div className="hmx-loc-grid">
              {locations.map((l, i) => (
                <div className="hmx-loc hmx-rv" key={l.name} style={d(i)}>
                  <img
                    className="hmx-loc-art"
                    src={l.art}
                    alt={l.artAlt}
                    width={174}
                    height={174}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="hmx-loc-flag" role="img" aria-label={`${l.name} flag`}>
                    {l.flag}
                  </span>
                  <h3>{l.name}</h3>
                  <p>{l.desc}</p>
                  <Link href={l.link} className="hmx-arrow">
                    {l.label}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
      <section className="hmx-cta" id="start-your-project">
        <div className="hmx-wrap">
          <div className="hmx-cta-inner">
            <div className="hmx-rv">
              <p className="hmx-eyebrow">Start Your Project</p>
              <h2 className="hmx-cta-h2">Have a software idea or project to build?</h2>
              <p className="hmx-cta-p">
                Whether you&apos;re launching a new digital product, developing custom
                business software, adding AI capabilities, or modernizing an existing
                application, mTouch Labs can help you turn your requirements into a
                scalable software solution.
              </p>

              <div className="hmx-cta-actions">
                <Link href="/contact-us" className="hmx-btn hmx-btn-primary hmx-btn-badge">
                  Start Your Project
                  <span aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </Link>
                <Link href="/portfolio" className="hmx-btn-text">
                  View Our Work
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>

              {/* Client logos, greyscaled so the row reads as one band. */}
              <div className="hmx-cta-logos">
                {ctaLogos.map((l) => (
                  <img
                    key={l.src}
                    src={l.src}
                    alt={l.alt}
                    height={30}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>

            <div className="hmx-cta-art hmx-rv" style={d(1)}>
              <img
                src="/images/new-home(02-09)/start-your-proj-home.svg"
                alt="An mTouch Labs team reviewing a product on a tablet"
                width={620}
                height={560}
                loading="lazy"
                decoding="async"
              />
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
