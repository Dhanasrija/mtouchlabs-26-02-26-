import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Sora, Inter } from "next/font/google";
import FAQSchema from "@/components/seo/FAQSchema";
import HeroLeadForm from "./HeroLeadForm";
import { Icon, type IconName, LOC_CSS } from "@/components/locations/LocationKit";

/* ════════════════════════════════════════════════════════════
   SPEED NOTES — why this page is built the way it is
   ────────────────────────────────────────────────────────────
   1. Fonts come from next/font (self-hosted, preloaded, zero
      layout shift). The old page loaded Google Fonts with a
      render-blocking <link> in the body, which delayed LCP by
      a full round-trip to fonts.googleapis.com.
   2. Exactly one client component on the page — the hero form.
      Everything else is a server component and ships no JS.
   3. No framer-motion, no form library, no phone-input package.
      Scroll reveals are CSS `animation-timeline: view()`.
   4. The hero is above-the-fold HTML with no images, so LCP is
      a text paint rather than a network fetch.
   ════════════════════════════════════════════════════════════ */

const sora = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], display: "swap", variable: "--f-display" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", variable: "--f-body" });

const ORIGIN = "https://www.mtouchlabs.com";
const URL_PATH = `${ORIGIN}/software-development-company-usa`;

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  // `absolute` stops the root layout's "%s | mTouch Labs" template
  // appending the brand a second time.
  title: { absolute: "Software Development Company in USA | mTouch Labs" },
  description:
    "Looking for a software development company in the USA? mTouch Labs provides custom software, AI, SaaS, web, mobile, cloud, and modernization solutions for US businesses.",
  alternates: { canonical: URL_PATH },
  openGraph: {
    title: "Software Development Company in USA | mTouch Labs",
    description:
      "mTouch Labs provides custom software, AI, SaaS, web, mobile, cloud, and modernization solutions for businesses across the USA.",
    url: URL_PATH,
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og/software-development-company-usa.webp", width: 1200, height: 630, alt: "Software Development Company in USA - mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in USA | mTouch Labs",
    description: "Custom software, AI, SaaS, web, mobile, cloud, and modernization solutions for US businesses.",
    images: ["/images/og/software-development-company-usa.webp"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

/* ── shared numbers: one source, so they can never drift ── */
/* Small UI icons used in buttons, kept consistent across the page. */
const UI = {
  send:   <><path d="M21.5 2.5 11 13" /><path d="M21.5 2.5 14.8 21.5 11 13 2.5 9.2Z" /></>,
  doc:    <><path d="M15.5 2.5H7a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6Z" /><path d="M14.5 2.5V7H19" /><path d="M8.5 13h7M8.5 16.5h4.5" /></>,
  arrow:  <><path d="M4 12h15" /><path d="m13 6 6 6-6 6" /></>,
  badge:  <><path d="M3 21V5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5V21" /><path d="M13 10h6.5A1.5 1.5 0 0 1 21 11.5V21" /><path d="M2 21h20" /><path d="M6.5 8h3M6.5 12h3M6.5 16h3" /></>,
  clock:  <><circle cx="12" cy="12" r="9" /><path d="M12 6.8V12l3.4 2" /></>,
  chart:  <><path d="M6 20v-6M12 20V5M18 20v-9" /><path d="M3 20.5h18" /></>,
  shield: <><path d="M12 21.5s7.5-3.6 7.5-9.4V5.6L12 2.6 4.5 5.6v6.5c0 5.8 7.5 9.4 7.5 9.4Z" /></>,
  chat:   <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /></>,
};
const UIcon = ({ d, s = 18 }: { d: ReactNode; s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{d}</svg>
);

/**
 * ExtLink — an internal link that opens in a new browser tab.
 *
 * Requested behaviour: every internal link on this page should open the
 * destination as a new page rather than navigating away from the USA hub.
 * `rel="noopener"` is set because `target="_blank"` otherwise gives the
 * opened page a handle back to this one via window.opener.
 */
const ExtLink = ({ href, className, children }: { href: string; className?: string; children: ReactNode }) => (
  <Link href={href} className={className} target="_blank" rel="noopener">{children}</Link>
);

const UI_CLOCK  = <><circle cx="12" cy="12" r="9" /><path d="M12 6.8V12l3.4 2" /></>;
const UI_CHART  = <><path d="M6 20v-6M12 20V5M18 20v-9" /><path d="M3 20.5h18" /></>;
const UI_SHIELD = <><path d="M12 21.5s7.5-3.6 7.5-9.4V5.6L12 2.6 4.5 5.6v6.5c0 5.8 7.5 9.4 7.5 9.4Z" /><path d="m9 12 2 2 4-4" /></>;
const UI_CHAT   = <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /></>;

const FACTS = { years: "14+", clients: "500+", products: "1,500+", countries: "12+" } as const;

/* ────────────────────────────────────────────────────────────
   ⚠️  CASE STUDIES — READ BEFORE DEPLOY
   The supplied copy for this section was a template with
   [Client / Product Name] style placeholders. Publishing those
   verbatim would put visible placeholder text on a live page,
   so the section renders ONLY when real entries exist below.
   Fill this array with real, verified case studies and the
   section appears automatically. Leave it empty and the page
   shows a link to /case-studies instead — which is correct
   behaviour, not a broken state.
   ──────────────────────────────────────────────────────────── */
type CaseStudy = {
  tag: string;
  name: string;
  result: string;
  img: string;
  alt: string;
  href: string;
};

/* Three real engagements, pulled from the published case studies.
   Every figure below is quoted from its own case-study page — none
   are invented. If a project has no published metric, its `result`
   states the qualitative outcome rather than a made-up number. */
const CASE_STUDIES: CaseStudy[] = [
  {
    tag: "FinTech",
    name: "Secure Payment Platform with Real-Time Analytics",
    result: "Transaction failures cut from 8.2% to 0.4%; settlement down from 3 days to 4 hours",
    img: "/images/case-studies/fintech-banner.svg",
    alt: "Fintech payment platform dashboard built by mTouch Labs",
    href: "/case-studies/fintech-payment-platform",
  },
  {
    tag: "Healthcare",
    name: "Healthcare Mobile App Development",
    result: "Faster appointment booking, reduced administrative workload, better patient–doctor communication",
    img: "/images/healthcarebanner.svg",
    alt: "Healthcare mobile application built by mTouch Labs",
    href: "/case-studies/healthcare-mobile-app-development",
  },
  {
    tag: "SaaS",
    name: "Multi-Tenant SaaS Platform with AI Workflow Automation",
    result: "200 paying teams onboarded within 3 months; time-to-value under 8 minutes",
    img: "/images/case-studies/saas-banner.svg",
    alt: "Multi-tenant SaaS collaboration platform built by mTouch Labs",
    href: "/case-studies/saas-team-collaboration-platform",
  },
];

const HERO_STATS: { i: IconName; n: string; l1: string; l2: string }[] = [
  { i: "users",   n: FACTS.years,     l1: "Years",     l2: "Experience" },
  { i: "briefcase", n: FACTS.clients, l1: "Happy",     l2: "Clients" },
  { i: "rocket",  n: FACTS.products,  l1: "Projects",  l2: "Delivered" },
  { i: "globe",   n: FACTS.countries, l1: "Countries", l2: "Served" },
];

/* Four reassurance points shown beneath the hero stat strip. */
const HERO_TRUST: { d: ReactNode; t: string; x: string }[] = [
  { d: UI_CLOCK,  t: "On-Time Delivery",   x: "We respect deadlines and deliver on time." },
  { d: UI_CHART,  t: "Scalable Solutions", x: "Built to scale with your business growth." },
  { d: UI_SHIELD, t: "Secure & Reliable",  x: "We follow best practices for security & quality." },
  { d: UI_CHAT,   t: "Transparent Process", x: "Clear communication at every step." },
];


const PARTNER_POINTS: { i: IconName; t: string; d: string }[] = [
  { i: "target", t: "Business-First Engineering", d: "We align technology decisions with your business goals, workflows, users, and long-term growth plans." },
  { i: "cpu", t: "Modern Technology Expertise", d: "Build with modern technologies across AI, cloud, SaaS, web, mobile, APIs, and enterprise applications." },
  { i: "shield", t: "Scalable & Secure Solutions", d: "We engineer software with scalability, performance, security, maintainability, and future integration requirements in mind." },
  { i: "refresh", t: "Flexible Development Models", d: "Choose the engagement model that fits your needs—from project-based development to dedicated teams and offshore engineering support." },
];

/* Service URLs mapped to routes that actually exist in this app.
   The supplied linking plan used slugs (/custom-software-development,
   /ai-software-development, /saas-development, /web-development,
   /cloud-computing, /software-modernization, /offshore-software-development,
   /software-development-services) that return 404 here. Each is
   remapped to the real page below; see the note in the response. */
const SERVICES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "code", t: "Custom Software Development", d: "Build software designed specifically around your business processes, users, workflows, integrations, and growth objectives. We develop purpose-built applications that address requirements off-the-shelf software cannot.", cta: "Explore Custom Software Development", href: "/custom-software-development-company" },
  { i: "building", t: "Enterprise Software Development", d: "Develop secure and scalable enterprise applications that connect business processes, teams, data, and systems. We help organizations build new platforms and enhance complex existing environments.", cta: "Explore Enterprise Software Development", href: "/enterprise-application-development-company" },
  { i: "cpu", t: "AI Software Development", d: "Integrate practical AI capabilities into products and business processes with generative AI, large language models, AI assistants, intelligent automation, RAG applications, and AI-powered workflows.", cta: "Explore AI Development", href: "/generative-ai-development-company" },
  { i: "rocket", t: "SaaS Product Development", d: "Turn a software concept into a scalable SaaS product with product architecture, intuitive user experiences, integrations, cloud infrastructure, and ongoing engineering support.", cta: "Explore SaaS Development", href: "/saas-development-services" },
  { i: "globe", t: "Web Application Development", d: "Create secure, responsive, and scalable web applications for customers, employees, partners, and business operations—from portals and dashboards to marketplaces and workflow platforms.", cta: "Explore Web Application Development", href: "/web-development-company" },
  { i: "phone", t: "Mobile App Development", d: "Build mobile applications for iOS and Android that connect seamlessly with your digital products, backend systems, APIs, and business workflows.", cta: "Explore Mobile App Development", href: "/mobile-app-development-company" },
  { i: "cloud", t: "Cloud Software Development", d: "Develop and modernize cloud-based applications using scalable architectures, APIs, cloud infrastructure, DevOps practices, and modern deployment approaches.", cta: "Explore Cloud Development", href: "/cloud-services" },
  { i: "refresh", t: "Software Modernization", d: "Transform legacy applications and outdated technology stacks through application re-engineering, architecture modernization, cloud migration, API integration, performance optimization, and security improvements.", cta: "Explore Software Modernization", href: "/it-services-digital-transformation-company" },
  { i: "layout", t: "UI/UX & Product Design", d: "Design digital products people can actually use—research, user flows, wireframes, interface design, and clickable prototypes that validate the experience before engineering begins.", cta: "Explore UI/UX Design", href: "/ui-ux-design-company" },
];

const CHALLENGES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "rocket", t: "Launch a New Digital Product", d: "Have an idea for a new application, platform, or digital product? We help transform your concept into a market-ready solution through product planning, UX/UI design, engineering, testing, and launch support.", cta: "Start a New Product", href: "/product-design-services" },
  { i: "server", t: "Modernize Legacy Technology", d: "Outdated software can slow down operations, increase maintenance costs, and limit business growth. We help modernize legacy applications while reducing disruption to critical business processes.", cta: "Explore Software Modernization", href: "/it-solutions-company" },
  { i: "sparkles", t: "Add AI to Existing Products", d: "AI can improve how your customers interact with your product and how your teams manage everyday workflows. We help identify practical AI opportunities and integrate intelligent capabilities into existing applications.", cta: "Explore AI Solutions", href: "/machine-learning-development-company" },
  { i: "trendingUp", t: "Scale a Growing Platform", d: "As users, transactions, data, and integrations increase, your software needs to keep up. We help improve architecture, performance, infrastructure, and engineering capacity to support continued growth.", cta: "Scale Your Platform", href: "/cloud-migration-services" },
  { i: "link", t: "Connect Your Business Systems", d: "Disconnected applications can create manual work and fragmented data. We help connect your software, APIs, databases, third-party platforms, and business workflows to create more efficient digital operations.", cta: "Discuss Your Integration Needs", href: "/devops-services" },
  { i: "users", t: "Strengthen Your Engineering Capacity", d: "When your internal team needs additional expertise or development capacity, we can provide flexible engineering support through dedicated teams and offshore development models.", cta: "Explore Development Teams", href: "/hire-dedicated-developers-in-india" },
];

const OFFSHORE: { i: IconName; t: string; d: string }[] = [
  { i: "users", t: "Dedicated Development Teams", d: "Build a dedicated team around your product, technology stack, business requirements, and development roadmap." },
  { i: "settings", t: "Flexible Engagement Models", d: "Choose project-based development, dedicated engineering teams, or extended development support based on your needs." },
  { i: "message", t: "Seamless US Collaboration", d: "Maintain clear communication, project visibility, regular updates, and structured collaboration with your US-based stakeholders." },
  { i: "infinity", t: "End-to-End Engineering Support", d: "Access expertise across product development, UI/UX, software engineering, AI, cloud, QA, DevOps, maintenance, and modernization." },
  { i: "award", t: "Built for Long-Term Partnerships", d: "Work with a development team that can evolve with your product—from initial development and launch to continuous improvement and scaling." },
  { i: "checkSquare", t: "Quality Assurance Included", d: "Dedicated QA engineers test functionality, performance, security, and device compatibility throughout development—not as a separate line item at the end." },
];

/* Industries are presentational only — icon + text, no links, per brief. */
/* Industry tiles: icon + name only, no copy and no links, per brief.
   `k` alternates the two brand accents (Signature Blue / Bright
   Horizon) so the row reads as colourful without leaving the palette. */
const INDUSTRIES: { i: IconName; t: string }[] = [
  { i: "activity", t: "Healthcare" },
  { i: "landmark", t: "Financial Services & FinTech" },
  { i: "cart", t: "Retail & eCommerce" },
  { i: "factory", t: "Manufacturing" },
  { i: "truck", t: "Logistics & Transportation" },
  { i: "home", t: "Real Estate" },
  { i: "book", t: "Education" },
  { i: "send", t: "Travel & Hospitality" },
];

const IMPACT: { i: IconName; t: string; d: string }[] = [
  { i: "rocket", t: "Launch Products Faster", d: "Move from concept to market with a structured approach to product planning, design, development, testing, and deployment." },
  { i: "repeat", t: "Improve Operational Efficiency", d: "Replace manual and disconnected processes with digital workflows, automation, integrations, and purpose-built business applications." },
  { i: "sparkles", t: "Create Better Customer Experiences", d: "Build intuitive digital products that make it easier for customers to discover, purchase, communicate, manage, and access your services." },
  { i: "grid", t: "Reduce Technology Complexity", d: "Modernize outdated systems, connect disconnected applications, and create technology environments that are easier to manage and evolve." },
  { i: "trendingUp", t: "Scale With Confidence", d: "Build software and infrastructure capable of supporting growing users, data, transactions, integrations, and business requirements." },
  { i: "users", t: "Expand Engineering Capacity", d: "Access additional software engineering expertise when your internal team needs greater development capacity or specialized technology skills." },
];

const PROCESS: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Discovery & Requirements", d: "We start by understanding your business objectives, target users, workflows, technical requirements, integrations, and project constraints. This helps define the scope and priorities before development begins." },
  { n: "02", t: "Product Strategy & Architecture", d: "We translate requirements into a practical product roadmap and technical architecture. Our team evaluates the right technologies, application structure, integrations, scalability requirements, and development approach." },
  { n: "03", t: "UI/UX Design", d: "We create intuitive user experiences and interfaces around your users and business workflows. Designs and prototypes help validate product flows before engineering begins." },
  { n: "04", t: "Software Development", d: "Our engineering team builds the product using an iterative development approach, with regular reviews and feedback throughout the development cycle." },
  { n: "05", t: "Testing & Quality Assurance", d: "We test functionality, usability, performance, compatibility, security, and integrations to identify issues and ensure the product meets defined requirements." },
  { n: "06", t: "Deployment & Launch", d: "Once the product is ready, we prepare the production environment, deployment process, monitoring, and release activities needed to launch reliably." },
  { n: "07", t: "Support & Continuous Improvement", d: "After launch, we can continue with maintenance, enhancements, performance optimization, security updates, modernization, and new feature development as your business evolves." },
];

const TECH: { i: IconName; t: string; d: string; items: ReactNode[] }[] = [
  { i: "layout", t: "Frontend Development", d: "Build responsive and engaging digital experiences using modern frontend frameworks and technologies.", items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript"] },
  { i: "server", t: "Backend Development", d: "Develop secure, scalable application backends, APIs, integrations, and business logic.", items: ["Node.js", "Python", "Java", ".NET", <ExtLink href="/php-development-company" key="php">PHP</ExtLink>] },
  { i: "phone", t: "Mobile Development", d: "Create native and cross-platform mobile applications for modern iOS and Android experiences.", items: [<ExtLink href="/flutter-app-development-company" key="f">Flutter</ExtLink>, <ExtLink href="/react-native-app-development-company" key="r">React Native</ExtLink>, <ExtLink href="/ios-app-development-company" key="i">iOS</ExtLink>, <ExtLink href="/android-app-development-company" key="a">Android</ExtLink>] },
  { i: "cloud", t: "Cloud & DevOps", d: "Build, deploy, monitor, and scale applications using modern cloud infrastructure and DevOps practices.", items: [<ExtLink href="/aws-cloud-services" key="aws">AWS</ExtLink>, "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"] },
  { i: "cpu", t: "AI & Machine Learning", d: "Integrate intelligent capabilities into products and workflows using modern AI technologies.", items: ["Generative AI", "LLMs", "RAG", "AI Agents", "Machine Learning"] },
  { i: "database", t: "Databases & Data", d: "Design data architectures that support application performance, reliability, scalability, and analytics.", items: [<ExtLink href="/data-science-solutions" key="d">PostgreSQL</ExtLink>, "MySQL", "MongoDB", "Redis", "SQL"] },
];

const LOCATIONS: { t: string; d: string; cta: string; href: string }[] = [
  { t: "New York", d: "Software development solutions for startups, businesses, and enterprises across New York.", cta: "Software Development Company in New York", href: "/software-development-company-new-york" },
  { t: "California", d: "Custom software and digital product development solutions for businesses across California.", cta: "Software Development Company in California", href: "/software-development-company-california" },
  { t: "Texas", d: "Scalable software development and engineering solutions for businesses across Texas.", cta: "Software Development Company in Texas", href: "/software-development-company-texas" },
  { t: "Florida", d: "Custom software development and digital solutions for businesses across Florida.", cta: "Software Development Company in Florida", href: "/software-development-company-florida" },
  { t: "Illinois", d: "Software development and technology solutions for businesses across Illinois.", cta: "Software Development Company in Illinois", href: "/software-development-company-illinois" },
];

const ENGAGEMENT: { i: IconName; t: string; d: string }[] = [
  { i: "rocket", t: "Product Development", d: "Build a new digital product from concept through launch and beyond." },
  { i: "users", t: "Dedicated Engineering Support", d: "Extend your internal capabilities with dedicated development resources aligned with your roadmap." },
  { i: "tool", t: "Application Enhancement", d: "Improve, expand, integrate, or modernize an existing application without replacing everything at once." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "What does a software development company do?", a: "A software development company helps businesses plan, design, build, test, deploy, and maintain software applications and digital products. This can include custom business software, web and mobile applications, SaaS platforms, AI solutions, cloud applications, integrations, and software modernization." },
  { q: "Does mTouch Labs provide software development services for US businesses?", a: "Yes. mTouch Labs works with startups, growing businesses, and enterprises across the United States, providing software development and engineering solutions based on their business goals and technology requirements." },
  { q: "What types of software can mTouch Labs develop?", a: "mTouch Labs develops custom business applications, enterprise software, SaaS products, web applications, mobile applications, AI-powered software, cloud applications, and modernized legacy systems." },
  { q: "Does mTouch Labs offer offshore software development?", a: "Yes. mTouch Labs provides offshore software development and dedicated engineering support for businesses that need additional development capacity, specialized expertise, or a flexible technology team." },
  { q: "Can mTouch Labs work with our existing development team?", a: "Yes. mTouch Labs can complement an existing engineering organization with additional development capacity and specialized technical expertise. The engagement can be structured around your team's roadmap, project requirements, and technology needs." },
  { q: "Does mTouch Labs provide software development services across the USA?", a: "Yes. mTouch Labs works with businesses across the United States, including companies in markets such as New York, California, Texas, Florida, and Illinois. Our teams can collaborate remotely with businesses across different locations and support projects based on their requirements." },
  { q: "How long does software development take?", a: "The timeline depends on the product scope, functionality, integrations, technical complexity, design requirements, and team structure. A smaller application may require less development time than a complex enterprise platform. A more accurate timeline can be established after evaluating your requirements." },
  { q: "How much does custom software development cost?", a: "Custom software development costs vary based on factors such as product complexity, features, integrations, technology requirements, design, development timeline, testing, and ongoing support. A project assessment can provide a more relevant estimate based on your specific requirements." },
  { q: "How do I start a software development project with mTouch Labs?", a: "Start by sharing your business objectives, product idea or existing application, key requirements, and expected outcomes. Our team can review your requirements and discuss the appropriate development approach, scope, engagement model, and next steps." },
];

/* ── page-specific CSS: hero split + form. Everything else
      reuses LOC_CSS so there is one design system, not two. ── */
const USA_CSS = `
/* ── palette: brand blue (#3E8CFB) for accents, a deeper blue for
      filled buttons so white text clears the contrast bar ── */
/* Every colour below is a brand.css token or that token at reduced
   opacity. --b (Heritage Navy) fills buttons because white on Signature
   Blue is 3.30:1 and fails AA; --b-soft (Signature Blue) carries accents. */
.usa-page{--b:var(--color-signature-blue,#3E8CFB);--b-dark:var(--color-carbon-black,#0D1117);--b-soft:var(--color-signature-blue,#3E8CFB);--b-tint:rgba(62,140,251,.10);--b-line:rgba(62,140,251,.26);--navy:var(--color-signature-blue,#3E8CFB);--ink:var(--color-carbon-black,#0D1117);--ink-2:var(--color-text,#222222);--ink-3:var(--color-slate-grey,#777777);font-family:var(--f-body),'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.usa-page .loc-sectionTitle,.usa-page .loc-introTitle,.usa-page .loc-ctaTitle,.usa-page .usa-h1,.usa-page .uf-title,.usa-page .loc-detailTitle,.usa-page .loc-engageTitle,.usa-page .loc-statNum,.usa-page .loc-timelineDot,.usa-page .loc-detailNum,.usa-page .usa-numValue,.usa-page .usa-csName,.usa-page .usa-indName,.usa-page .usa-locName,.usa-page .usa-midCtaTitle{font-family:var(--f-display),'Sora',sans-serif}
.usa-page .loc-highlight{background:none;-webkit-background-clip:border-box;background-clip:border-box;color:var(--b-soft)}
.usa-page .loc-timelineDot{color:#fff}
.usa-page a{color:var(--b)}
.usa-page a:hover{color:var(--b-dark)}
.usa-page .loc-tile{background:var(--b-tint);border-color:var(--b-line);color:var(--b)}
.usa-page .loc-whyCard:hover .loc-tile,.usa-page .loc-industryCard:hover .loc-tile{background:#3E8CFB;box-shadow:0 10px 20px rgba(62,140,251,.24)}
.usa-page .loc-whyCard::after,.usa-page .loc-industryCard::after{background:#3E8CFB}
.usa-page .loc-whyCard:hover,.usa-page .loc-industryCard:hover,.usa-page .loc-statCard:hover,.usa-page .loc-faqItem:hover,.usa-page .loc-faqItem[open]{border-color:var(--b-line)}
.usa-page .loc-detailLabel,.usa-page .loc-faqChevron,.usa-page .loc-introTag{color:var(--b)}
.usa-page .loc-timelineDot{background:#3E8CFB;box-shadow:0 6px 16px rgba(62,140,251,.26)}
.usa-page .loc-timeline::before{background:linear-gradient(180deg,var(--b),var(--b-soft),rgba(62,140,251,.18))}
.usa-page .loc-ctaSection{background:var(--color-deep-indigo,#0C1C32)}
.usa-page .loc-ctaBtnPrimary{background:var(--b-soft);color:#fff!important;border:1.6px solid var(--b-soft)}
.usa-page .loc-ctaBtnPrimary:hover{filter:brightness(.93);color:#fff!important}
.usa-page .loc-ctaBtnSecondary{background:transparent;color:#fff!important;border:1.6px solid rgba(255,255,255,.55)!important}
.usa-page .loc-ctaBtnSecondary:hover{background:rgba(255,255,255,.12);color:#fff!important;border-color:#fff!important}

/* ── hero ── */
.usa-hero{position:relative;padding:130px 1.5rem 5rem;overflow:hidden;background:
  radial-gradient(1100px 560px at 10% 6%,rgba(62,140,251,.13) 0%,transparent 55%),
  radial-gradient(900px 560px at 94% 16%,rgba(62,140,251,.10) 0%,transparent 55%),
  linear-gradient(180deg,rgba(62,140,251,.02) 0%,rgba(62,140,251,.045) 100%)}
.usa-hero::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--b-line)}
.usa-heroInner{position:relative;max-width:1220px;margin:0 auto;display:grid;grid-template-columns:1.1fr .9fr;gap:3.25rem;align-items:start}
.usa-eyebrow{display:inline-flex;align-items:center;gap:.5rem;color:var(--b-soft);font-size:.86rem;font-weight:600;margin-bottom:1.1rem;letter-spacing:.01em}
.usa-eyebrow svg{flex-shrink:0}
.usa-h1{font-size:clamp(2.05rem,4vw,3.2rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;color:var(--ink);margin:0 0 .85rem}
.usa-h1 em{font-style:normal;color:var(--b-soft)}
.usa-tagline{font-size:clamp(1.05rem,1.7vw,1.32rem);font-weight:600;color:var(--ink-2);margin:0 0 1.1rem;letter-spacing:-.01em}
.usa-rule{width:74px;height:4px;border-radius:999px;background:var(--b);margin:0 0 1.5rem}
.usa-heroText{font-size:1.01rem;line-height:1.8;color:var(--ink-2);margin:0 0 1rem;max-width:56ch}
.usa-heroActions{display:flex;flex-wrap:wrap;gap:.85rem;margin:1.7rem 0 2rem}
.usa-btnA,.usa-btnB{display:inline-flex;align-items:center;justify-content:center;gap:.55rem;padding:.9rem 1.75rem;border-radius:999px;font-weight:700;font-size:.95rem;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s,border-color .2s}
.usa-btnA{background:var(--b);color:#fff!important;box-shadow:0 8px 20px rgba(62,140,251,.26)}
.usa-btnA:hover{filter:brightness(.93);color:#fff!important;transform:translateY(-2px);box-shadow:0 14px 30px rgba(62,140,251,.34)}
.usa-btnB{background:var(--color-white,#fff);color:var(--ink)!important;border:1.6px solid var(--b-soft)}
.usa-btnB:hover{background:var(--b-tint);color:var(--ink)!important;border-color:var(--b-soft);transform:translateY(-2px)}

/* ── trust row under the stats ── */
.usa-trustRow{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem;margin-top:1.5rem}
.usa-trustItem{display:flex;gap:.65rem;align-items:flex-start}
.usa-trustIcon{width:32px;height:32px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:9px;background:var(--b-tint);color:var(--b)}
.usa-trustT{font-size:.85rem;font-weight:700;color:var(--ink);margin:0 0 .15rem;line-height:1.3}
.usa-trustD{font-size:.78rem;color:var(--ink-3);margin:0;line-height:1.5}

/* ════ FORM ════ */
.uf{background:#fff;border:1px solid var(--b-line);border-radius:20px;padding:1.75rem 1.7rem;box-shadow:0 4px 14px rgba(13,17,23,.05),0 22px 50px rgba(62,140,251,.12)}
.uf-head{display:flex;gap:.9rem;align-items:flex-start;margin-bottom:1.35rem}
.uf-badge{width:52px;height:52px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:14px;background:var(--b);color:#fff;box-shadow:0 8px 18px rgba(62,140,251,.28)}
.uf-title{font-size:1.28rem;font-weight:700;color:var(--ink);margin:0 0 .25rem;letter-spacing:-.02em;line-height:1.25}
.uf-sub{font-size:.86rem;color:var(--ink-3);margin:0;line-height:1.55}
.uf-field{margin-bottom:.9rem;min-width:0}
.uf-field label{display:block;font-size:.8rem;font-weight:700;color:var(--ink-2);margin-bottom:.35rem}
.uf-opt{font-weight:500;color:var(--ink-3)}
.uf-input{display:flex;align-items:center;gap:.5rem;border:1px solid rgba(62,140,251,.26);border-radius:11px;background:#fff;padding:0 .8rem;height:46px;transition:border-color .16s,box-shadow .16s}
.uf-input:focus-within{border-color:var(--b);box-shadow:0 0 0 3px rgba(62,140,251,.13)}
.uf-ic{display:flex;color:#777777;flex-shrink:0}
.uf-input:focus-within .uf-ic{color:var(--b)}
/* The inner control must never draw its own box — global input styles in
   bundle.css add a border/shadow on hover and focus, which appeared as a
   second rounded rectangle inside the field. Neutralised in every state. */
.uf-input input,.uf-input select,.uf-input textarea,.uf-input input:hover,.uf-input select:hover,.uf-input textarea:hover,.uf-input input:focus,.uf-input select:focus,.uf-input textarea:focus,.uf-input input:active,.uf-input select:active,.uf-input textarea:active{flex:1;min-width:0;width:100%;border:0!important;outline:0!important;box-shadow:none!important;background-color:transparent!important;font-family:inherit;font-size:.92rem;line-height:1.5;color:var(--ink);-webkit-appearance:none;appearance:none;border-radius:0;margin:0}
.uf-input:hover{border-color:var(--b-soft)}
.uf-input select{cursor:pointer;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%233E8CFB' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right center;padding-right:1.3rem;text-overflow:ellipsis}
.uf-input input::placeholder,.uf-input textarea::placeholder{color:#777777}
.uf-input--area{height:auto;padding:.7rem .8rem;align-items:flex-start}
.uf-input--area textarea{resize:vertical;min-height:74px}
.uf-input--code{padding-right:.55rem;flex:0 0 auto}
.uf-phone{display:grid;grid-template-columns:92px 1fr;gap:.5rem}
.uf-btn{width:100%;margin-top:.4rem;display:flex;align-items:center;justify-content:center;gap:.55rem;padding:.95rem 1.2rem;border:0;border-radius:12px;background:var(--b);color:#fff;font-family:inherit;font-size:.97rem;font-weight:700;cursor:pointer;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s}
.uf-btn:hover:not(:disabled){filter:brightness(.93);transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,140,251,.32)}
.uf-btn:disabled{opacity:.65;cursor:progress}
.uf-err{margin:.55rem 0 0;font-size:.83rem;color:#B91C1C;font-weight:600}
.uf-consent{display:flex;gap:.6rem;align-items:flex-start;margin:.25rem 0 .2rem}
.uf-consent input[type="checkbox"]{flex-shrink:0;width:17px;height:17px;margin-top:.15rem;accent-color:var(--b);cursor:pointer}
.uf-consent label{font-size:.78rem;font-weight:400;color:var(--ink-3);line-height:1.6;margin:0;cursor:pointer}
.uf-consent a{color:var(--b);font-weight:600}
.uf-done{text-align:center;padding:2.4rem .5rem}
.uf-doneIcon{display:inline-flex;color:#059669;margin-bottom:.7rem}

/* ── "By the Numbers" — the stats, now their own section ── */
.usa-numGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.4rem}
.usa-numCard{text-align:center;background:var(--color-white,#fff);border:1px solid var(--b-line);border-radius:18px;padding:2rem 1.25rem;box-shadow:0 2px 10px rgba(13,17,23,.05);transition:transform .25s cubic-bezier(.22,.61,.36,1),box-shadow .25s,border-color .25s}
.usa-numCard:hover{transform:translateY(-5px);box-shadow:0 16px 38px rgba(62,140,251,.18);border-color:var(--b-soft)}
.usa-numIcon{width:56px;height:56px;margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;border-radius:16px;background:var(--b-tint);color:var(--b);transition:background .3s,color .3s,transform .35s cubic-bezier(.22,.61,.36,1)}
.usa-numCard:hover .usa-numIcon{background:var(--b);color:#fff;transform:rotate(-6deg) scale(1.06)}
.usa-numValue{font-family:var(--f-display),'Sora',sans-serif;font-size:2.3rem;font-weight:800;color:var(--ink);line-height:1.05;letter-spacing:-.03em}
.usa-numLabel{margin-top:.45rem;font-size:.88rem;font-weight:600;color:var(--ink-3);line-height:1.4}
.usa-numGrid + .usa-trustRow{margin-top:2.2rem}
@media (max-width:980px){.usa-numGrid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:560px){.usa-numGrid{grid-template-columns:1fr}}

/* ── industry cards: icon + text only, no links ── */
.usa-indGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.3rem}
.usa-indCard{display:flex;flex-direction:column;align-items:center;text-align:center;background:var(--color-white,#fff);border:1px solid var(--b-line);border-radius:18px;padding:1.9rem 1.1rem;box-shadow:0 2px 10px rgba(13,17,23,.05);transition:transform .25s cubic-bezier(.22,.61,.36,1),box-shadow .25s,border-color .25s}
.usa-indCard:hover{transform:translateY(-5px);box-shadow:0 16px 38px rgba(62,140,251,.18);border-color:var(--b-soft)}
.usa-indIcon{width:62px;height:62px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--b-tint);color:var(--b-soft);margin-bottom:1rem;transition:background .3s,color .3s,transform .35s cubic-bezier(.22,.61,.36,1)}
.usa-indCard--alt .usa-indIcon{background:rgba(250,199,89,.20);color:#B07D0A}
.usa-indCard:hover .usa-indIcon{background:var(--b-soft);color:#fff;transform:rotate(-6deg) scale(1.08)}
.usa-indCard--alt:hover .usa-indIcon{background:var(--color-bright-horizon,#FAC759);color:var(--ink)}
.usa-indName{font-family:var(--f-display),'Sora',sans-serif;font-size:1rem;font-weight:700;color:var(--ink);margin:0;line-height:1.35}
@media (max-width:1080px){.usa-indGrid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:600px){.usa-indGrid{grid-template-columns:1fr}}

/* ── case-study cards: image, tag, name, result, link ── */
.usa-csGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;align-items:stretch}
.usa-csCard{display:flex;flex-direction:column;background:var(--color-white,#fff);border:1px solid var(--b-line);border-radius:20px;overflow:hidden;box-shadow:0 2px 10px rgba(13,17,23,.05);transition:transform .3s cubic-bezier(.22,.61,.36,1),box-shadow .3s,border-color .3s}
.usa-csCard:hover{transform:translateY(-6px);box-shadow:0 18px 44px rgba(62,140,251,.20);border-color:var(--b-soft)}
.usa-csImgWrap{position:relative;aspect-ratio:16/10;overflow:hidden;background:var(--b-tint);border-bottom:1px solid var(--b-line)}
.usa-csImg{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s cubic-bezier(.22,.61,.36,1)}
.usa-csCard:hover .usa-csImg{transform:scale(1.04)}
.usa-csTag{position:absolute;top:.85rem;left:.85rem;display:inline-flex;align-items:center;padding:.32rem .8rem;border-radius:999px;background:var(--b);color:#fff;font-size:.72rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;box-shadow:0 4px 12px rgba(62,140,251,.3)}
.usa-csBody{display:flex;flex-direction:column;flex-grow:1;padding:1.4rem 1.5rem 1.5rem}
.usa-csName{font-family:var(--f-display),'Sora',sans-serif;font-size:1.08rem;font-weight:700;color:var(--ink);margin:0 0 .8rem;line-height:1.35;letter-spacing:-.015em}
.usa-csResult{display:flex;gap:.55rem;align-items:flex-start;font-size:.88rem;color:var(--ink-2);line-height:1.6;margin:0 0 1.1rem;padding:.75rem .9rem;background:var(--b-tint);border-left:3px solid var(--b);border-radius:0 10px 10px 0;flex-grow:1}
.usa-csResult svg{color:var(--b);flex-shrink:0;margin-top:.15rem}
.usa-csLink{display:inline-flex;align-items:center;gap:.4rem;font-size:.88rem;font-weight:700;color:var(--b);margin-top:auto}
.usa-csLink svg{transition:transform .2s cubic-bezier(.22,.61,.36,1)}
.usa-csCard:hover .usa-csLink svg{transform:translateX(4px)}
.usa-csAll{display:flex;justify-content:center;margin-top:2.6rem}
@media (max-width:1080px){.usa-csGrid{grid-template-columns:repeat(2,1fr)}}
@media (max-width:720px){.usa-csGrid{grid-template-columns:1fr}}

/* ── shared card CTA + location grid ── */
.usa-cardLink{display:inline-flex;align-items:center;gap:.4rem;margin-top:.9rem;font-size:.86rem;font-weight:700;color:var(--b)}
.usa-cardLink svg{transition:transform .2s cubic-bezier(.22,.61,.36,1)}
.usa-cardLink:hover svg{transform:translateX(3px)}
.usa-locGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:1.1rem}
.usa-locCard{background:#fff;border:1px solid var(--b-line);border-radius:16px;padding:1.4rem 1.25rem;box-shadow:0 2px 8px rgba(13,17,23,.04);transition:transform .25s cubic-bezier(.22,.61,.36,1),box-shadow .25s,border-color .25s;display:flex;flex-direction:column}
.usa-locCard:hover{transform:translateY(-4px);box-shadow:0 14px 32px rgba(62,140,251,.16);border-color:var(--b)}
.usa-locName{font-family:var(--f-display),'Sora',sans-serif;font-size:1.05rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.usa-locText{font-size:.85rem;color:var(--ink-3);line-height:1.6;margin:0;flex-grow:1}
.usa-midCta{max-width:820px;margin:2.6rem auto 0;text-align:center;background:var(--b-tint);border:1px solid var(--b-line);border-radius:18px;padding:1.9rem 1.75rem}
.usa-midCtaTitle{font-family:var(--f-display),'Sora',sans-serif;font-size:1.22rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.usa-midCtaText{font-size:.94rem;color:var(--ink-2);line-height:1.7;margin:0 0 1.15rem}
.usa-inlineBtn{display:inline-flex;align-items:center;gap:.5rem;padding:.78rem 1.55rem;border-radius:999px;background:var(--b);color:#fff!important;font-weight:700;font-size:.9rem;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s}
.usa-inlineBtn:hover{filter:brightness(.93);color:#fff!important;transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,140,251,.30)}
.usa-inlineBtn--ghost{background:var(--color-white,#fff);color:var(--ink)!important;border:1.6px solid var(--b-soft)}
.usa-inlineBtn--ghost:hover{background:var(--b-tint);color:var(--b-dark)!important;border-color:var(--b-dark)}

@media (max-width:1080px){
  .usa-heroInner{grid-template-columns:1fr;gap:2.4rem}
  .usa-locGrid{grid-template-columns:repeat(3,1fr)}
  .usa-trustRow{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:768px){
  .usa-hero{padding:100px 1.15rem 3.25rem}
  .usa-locGrid{grid-template-columns:1fr}
  .usa-heroActions{flex-direction:column;align-items:stretch}
}
`;

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <ExtLink className="usa-cardLink" href={href}>{cta}<UIcon d={UI.arrow} s={15} /></ExtLink> : null}
  </div>
);

const MidCta = ({ t, d, cta, href }: { t: string; d: string; cta: string; href: string }) => (
  <div className="usa-midCta">
    <h2 className="usa-midCtaTitle">{t}</h2>
    <p className="usa-midCtaText">{d}</p>
    <ExtLink className="usa-inlineBtn" href={href}>{cta}<UIcon d={UI.arrow} s={16} /></ExtLink>
  </div>
);

export default function SoftwareDevelopmentCompanyUSA() {
  return (
    <div className={`loc-page usa-page ${sora.variable} ${inter.variable}`}>
      <style>{LOC_CSS + USA_CSS}</style>
      <FAQSchema faqs={FAQS} />

      {/* ═══ HERO — copy left, lead form right ═══ */}
      <section className="usa-hero">
        <div className="usa-heroInner">
          <div>
            <span className="usa-eyebrow"><UIcon d={UI.badge} s={16} />Trusted Software Development Partner for Businesses Across the USA</span>
            <h1 className="usa-h1">Software Development Company in the <em>USA</em></h1>
            <p className="usa-tagline">Custom Software. AI Solutions. Scalable Growth.</p>
            <div className="usa-rule" />
            <p className="usa-heroText">mTouch Labs builds, modernizes, and scales digital products for startups, SMBs, and enterprises across the United States.</p>
            <p className="usa-heroText">From product strategy and UI/UX design to development, testing, deployment, and ongoing support—we turn complex ideas into secure, scalable, and high-performing software.</p>

            <div className="usa-heroActions">
              <ExtLink href="/contact-us" className="usa-btnA"><UIcon d={UI.send} s={17} />Talk to Expert</ExtLink>
              <ExtLink href="/case-studies" className="usa-btnB"><UIcon d={UI.doc} s={17} />View Case Studies</ExtLink>
            </div>

          </div>

          <HeroLeadForm />
        </div>
      </section>

      {/* ═══ PARTNER ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Your Software Development Partner for the <span className="loc-highlight">US Market</span></h2>
            <p className="loc-sectionDesc">Building software for the US market requires more than development resources. You need a technology partner that understands business objectives, user expectations, scalability, security, and the demands of a rapidly changing digital landscape.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>mTouch Labs helps startups, growing businesses, and enterprises turn ideas, business challenges, and technology requirements into scalable digital products. From product discovery and architecture to development, testing, deployment, and ongoing support, we provide end-to-end software engineering capabilities under one roof.</p>
          </div>
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {PARTNER_POINTS.map((p) => <Card key={p.t} {...p} />)}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Development Services <span className="loc-highlight">in the USA</span></h2>
            <p className="loc-sectionDesc">From new product development to legacy modernization, mTouch Labs provides end-to-end software development services for startups, growing businesses, and enterprises across the USA.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>Our team helps businesses plan, design, develop, test, deploy, and continuously improve software products using modern engineering practices and technologies. Whether you need a custom business application, an AI-powered product, a scalable SaaS platform, or a modern cloud solution, we tailor the development approach to your business objectives and technical requirements.</p>
          </div>
          <div className="loc-whyGrid">{SERVICES.map((s) => <Card key={s.t} {...s} />)}</div>
        </div>
      </section>

      {/* ═══ CHALLENGES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">What Can We Help Your Business <span className="loc-highlight">Solve?</span></h2>
            <p className="loc-sectionDesc">Technology projects often begin with a business challenge—a new product to launch, an outdated application to replace, disconnected systems to integrate, or a growing platform that needs to scale.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>mTouch Labs helps businesses across the USA turn these challenges into practical, scalable technology solutions.</p>
          </div>
          <div className="loc-whyGrid">{CHALLENGES.map((c) => <Card key={c.t} {...c} />)}</div>
        </div>
      </section>

      {/* ═══ CASE STUDIES — three large cards, per the approved layout ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software <span className="loc-highlight">We&apos;ve Built</span></h2>
            <p className="loc-sectionDesc">From new digital products to complex business applications, mTouch Labs works with organizations to turn technology requirements into practical, scalable software solutions.</p>
          </div>

          <div className="usa-csGrid">
            {CASE_STUDIES.map((c) => (
              <article className="usa-csCard" key={c.href}>
                <div className="usa-csImgWrap">
                  {/* Plain <img>: these are SVGs, which next/image does not
                      optimise anyway. loading/decoding are set explicitly and
                      the wrapper holds the aspect ratio, so no layout shift. */}
                  <img className="usa-csImg" src={c.img} alt={c.alt} loading="lazy" decoding="async" width={640} height={400} />
                  <span className="usa-csTag">{c.tag}</span>
                </div>
                <div className="usa-csBody">
                  <h3 className="usa-csName">{c.name}</h3>
                  <p className="usa-csResult"><UIcon d={UI.chart} s={16} /><span>{c.result}</span></p>
                  <ExtLink className="usa-csLink" href={c.href}>View Case<UIcon d={UI.arrow} s={15} /></ExtLink>
                </div>
              </article>
            ))}
          </div>

          <div className="usa-csAll">
            <ExtLink className="usa-inlineBtn" href="/case-studies">View All Case Studies<UIcon d={UI.arrow} s={16} /></ExtLink>
          </div>
        </div>
      </section>

      {/* ═══ OFFSHORE ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Offshore Software Development for <span className="loc-highlight">US Businesses</span></h2>
            <p className="loc-sectionDesc">Extend your engineering capacity with a dedicated offshore software development team that works as an extension of your business. mTouch Labs helps US startups, growing companies, and enterprises access experienced technology talent for product development, application engineering, AI, cloud, QA, and ongoing software enhancement.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>Our flexible engagement models allow you to add the expertise and development capacity you need without the complexity of building and managing an entire engineering team internally.</p>
          </div>
          <div className="loc-whyGrid">{OFFSHORE.map((o) => <Card key={o.t} {...o} />)}</div>
          <div style={{ textAlign: "center", marginTop: "2.4rem", display: "flex", gap: ".8rem", justifyContent: "center", flexWrap: "wrap" }}>
            <ExtLink className="usa-inlineBtn" href="/hire-developers-in-india">Explore Offshore Software Development<UIcon d={UI.arrow} s={16} /></ExtLink>
            <ExtLink className="usa-inlineBtn usa-inlineBtn--ghost" href="/contact-us">Talk to Our Team<UIcon d={UI.arrow} s={16} /></ExtLink>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Development Solutions for <span className="loc-highlight">US Industries</span></h2>
            <p className="loc-sectionDesc">Every industry has different customers, workflows, regulations, operational challenges, and technology requirements. mTouch Labs develops software solutions tailored to the way businesses operate, helping organizations create better digital experiences, streamline processes, and build scalable technology platforms.</p>
          </div>
          <div className="usa-indGrid">
            {INDUSTRIES.map((x, k) => (
              <div className={`usa-indCard ${k % 2 ? "usa-indCard--alt" : ""}`} key={x.t}>
                <span className="usa-indIcon"><Icon name={x.i} size={27} /></span>
                <h3 className="usa-indName">{x.t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software That Delivers <span className="loc-highlight">Business Impact</span></h2>
            <p className="loc-sectionDesc">Software development should do more than deliver features. The right technology can help your business launch faster, simplify operations, improve customer experiences, and create a stronger foundation for growth.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>mTouch Labs focuses on building software around measurable business needs—helping organizations turn technology investments into practical business outcomes.</p>
          </div>
          <div className="loc-whyGrid">{IMPACT.map((x) => <Card key={x.t} {...x} />)}</div>
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <ExtLink className="usa-inlineBtn" href="/contact-us">Discuss Your Business Goals<UIcon d={UI.arrow} s={16} /></ExtLink>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">How We <span className="loc-highlight">Develop Software</span></h2>
            <p className="loc-sectionDesc">A successful software product starts with a clear understanding of the business problem and ends with a solution that can evolve as your business grows. Our development process brings together product strategy, user experience, engineering, quality assurance, and continuous improvement.</p>
          </div>
          <div className="loc-timeline">
            {PROCESS.map((p) => (
              <div className="loc-timelineItem" key={p.n}>
                <div className="loc-timelineDot">{p.n}</div>
                <div className="loc-timelineBody">
                  <h3 className="loc-timelineTitle">{p.t}</h3>
                  <p className="loc-timelineDesc">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Technology <span className="loc-highlight">Expertise</span></h2>
            <p className="loc-sectionDesc">The right technology stack depends on your product, users, integrations, performance requirements, security needs, and long-term growth plans. Our engineering teams work across modern technologies to build and evolve software for different business requirements.</p>
          </div>
          <div className="loc-whyGrid">
            {TECH.map((t) => (
              <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }} key={t.t}>
                <span className="loc-tile"><Icon name={t.i} /></span>
                <h3 className="loc-whyTitle">{t.t}</h3>
                <p className="loc-whyText" style={{ flexGrow: 1 }}>{t.d}</p>
                <div className="loc-introTags" style={{ margin: ".8rem 0 0" }}>
                  {t.items.map((x, k) => <span className="loc-introTag" key={k}>{x}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOCATIONS ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software Development Services <span className="loc-highlight">Across the USA</span></h2>
            <p className="loc-sectionDesc">mTouch Labs works with startups, growing businesses, and enterprises across the United States, providing software development solutions tailored to different business and technology requirements. Explore our software development services by location:</p>
          </div>
          <div className="usa-locGrid">
            {LOCATIONS.map((l) => (
              <div className="usa-locCard" key={l.t}>
                <h3 className="usa-locName">{l.t}</h3>
                <p className="usa-locText">{l.d}</p>
                <ExtLink className="usa-cardLink" href={l.href}>{l.cta}<UIcon d={UI.arrow} s={15} /></ExtLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERSHIP / ENGAGEMENT ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">A Software Development Partner for <span className="loc-highlight">US Businesses</span></h2>
            <p className="loc-sectionDesc">Working with a technology partner should feel straightforward, regardless of where your business is located. mTouch Labs collaborates with US businesses through structured communication, transparent project coordination, and flexible engagement models designed around your requirements.</p>
            <p className="loc-sectionDesc" style={{ marginTop: "1rem" }}>From initial discovery through development and ongoing product enhancement, our teams work closely with stakeholders to keep priorities, timelines, and technical decisions aligned.</p>
          </div>
          <h3 className="loc-introTitle" style={{ textAlign: "center", marginBottom: "1.5rem" }}>Flexible Engagement for Different Business Needs</h3>
          <p className="loc-sectionDesc" style={{ marginBottom: "2rem" }}>Whether you need a complete product development team, additional engineering capacity, or support for an existing application, we can structure the engagement around your project requirements.</p>
          <div className="loc-whyGrid">
            {ENGAGEMENT.map((e) => (
              <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }} key={e.t}>
                <span className="loc-tile"><Icon name={e.i} /></span>
                <h3 className="loc-whyTitle">{e.t}</h3>
                <p className="loc-whyText">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BY THE NUMBERS — moved out of the hero, own H2 ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">mTouch Labs <span className="loc-highlight">By the Numbers</span></h2>
            <p className="loc-sectionDesc">Fourteen years of building software, and what that adds up to.</p>
          </div>
          <div className="usa-numGrid">
            {HERO_STATS.map((s2) => (
              <div className="usa-numCard" key={s2.l1}>
                <span className="usa-numIcon"><Icon name={s2.i} size={26} /></span>
                <div className="usa-numValue">{s2.n}</div>
                <div className="usa-numLabel">{s2.l1} {s2.l2}</div>
              </div>
            ))}
          </div>
          <div className="usa-trustRow">
            {HERO_TRUST.map((t) => (
              <div className="usa-trustItem" key={t.t}>
                <span className="usa-trustIcon"><UIcon d={t.d} s={17} /></span>
                <div>
                  <p className="usa-trustT">{t.t}</p>
                  <p className="usa-trustD">{t.x}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Frequently Asked Questions About <span className="loc-highlight">Software Development in the USA</span></h2>
          </div>
          <div className="loc-faqList">
            {FAQS.map((f) => (
              <details className="loc-faqItem" key={f.q}>
                <summary className="loc-faqQuestion">
                  <span className="loc-faqQuestionText">{f.q}</span>
                  <span className="loc-faqChevron"><Icon name="chevron" size={16} /></span>
                </summary>
                <div className="loc-faqAnswer">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Build Your Next Software Product?</h2>
          <p className="loc-ctaDesc">Turn your business idea, technology challenge, or product roadmap into software built for real-world growth. Whether you need to develop a new product, modernize an existing application, add AI capabilities, or expand your engineering capacity, mTouch Labs can help you define the right approach and move your project forward.</p>
          <div className="loc-ctaActions">
            <ExtLink href="/contact-us" className="loc-ctaBtnPrimary"><UIcon d={UI.send} s={17} />Start Your Software Project</ExtLink>
            <ExtLink href="/portfolio" className="loc-ctaBtnSecondary"><UIcon d={UI.doc} s={17} />View Our work</ExtLink>
          </div>
        </div>
      </section>
    </div>
  );
}
