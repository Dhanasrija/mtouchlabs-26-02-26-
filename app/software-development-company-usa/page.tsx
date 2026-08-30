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
type CaseStudy = { name: string; industry: string; challenge: string; solution: string; tech: string[]; result: string; href: string };
const CASE_STUDIES: CaseStudy[] = [];

const HERO_STATS: { n: string; l: string }[] = [
  { n: FACTS.years, l: "Years Experience" },
  { n: FACTS.clients, l: "Clients" },
  { n: FACTS.products, l: "Products" },
  { n: FACTS.countries, l: "Countries" },
];

const TRUST_STATS: { i: IconName; n: string; l: string }[] = [
  { i: "award", n: FACTS.years, l: "Experience in software product development" },
  { i: "users", n: FACTS.clients, l: "Clients served across industries" },
  { i: "package", n: FACTS.products, l: "Digital products delivered" },
  { i: "globe", n: FACTS.countries, l: "Countries reached" },
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

const INDUSTRIES: { i: IconName; t: string; d: string; cta: string; href: string }[] = [
  { i: "activity", t: "Healthcare", d: "Develop digital healthcare solutions that improve workflows, patient experiences, data management, and connected healthcare operations.", cta: "Explore Healthcare Solutions", href: "/diagnostic-app-development-company" },
  { i: "landmark", t: "Financial Services & FinTech", d: "Build secure financial applications, digital platforms, workflow solutions, dashboards, and technology systems designed for modern financial businesses.", cta: "Explore FinTech Solutions", href: "/custom-crm-software-development-company" },
  { i: "cart", t: "Retail & eCommerce", d: "Create digital commerce experiences, customer applications, inventory solutions, marketplaces, and connected retail platforms.", cta: "Explore Retail & eCommerce Solutions", href: "/app-and-web-development-for-ecommerce-services" },
  { i: "factory", t: "Manufacturing", d: "Modernize manufacturing operations with connected applications, workflow automation, dashboards, integrations, and digital platforms.", cta: "Explore Manufacturing Solutions", href: "/best-iot-development-company-in-india" },
  { i: "truck", t: "Logistics & Transportation", d: "Develop solutions for tracking, fleet operations, logistics workflows, business visibility, automation, and connected transportation systems.", cta: "Explore Logistics Solutions", href: "/taxi-booking-app-development-company" },
  { i: "home", t: "Real Estate", d: "Build property platforms, customer portals, management applications, workflow solutions, and digital experiences for real estate businesses.", cta: "Explore Real Estate Solutions", href: "/web-and-app-development-for-real-estate-services" },
  { i: "book", t: "Education", d: "Develop learning platforms, education portals, management systems, collaboration tools, and digital experiences for education providers.", cta: "Explore Education Solutions", href: "/web-and-app-development-for-education-services" },
  { i: "send", t: "Travel & Hospitality", d: "Create booking platforms, customer applications, operational systems, digital experiences, and integrations for travel and hospitality businesses.", cta: "Explore Travel & Hospitality Solutions", href: "/hotel-booking-app-development-company" },
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
  { i: "server", t: "Backend Development", d: "Develop secure, scalable application backends, APIs, integrations, and business logic.", items: ["Node.js", "Python", "Java", ".NET", <Link href="/php-development-company" key="php">PHP</Link>] },
  { i: "phone", t: "Mobile Development", d: "Create native and cross-platform mobile applications for modern iOS and Android experiences.", items: [<Link href="/flutter-app-development-company" key="f">Flutter</Link>, <Link href="/react-native-app-development-company" key="r">React Native</Link>, <Link href="/ios-app-development-company" key="i">iOS</Link>, <Link href="/android-app-development-company" key="a">Android</Link>] },
  { i: "cloud", t: "Cloud & DevOps", d: "Build, deploy, monitor, and scale applications using modern cloud infrastructure and DevOps practices.", items: [<Link href="/aws-cloud-services" key="aws">AWS</Link>, "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes"] },
  { i: "cpu", t: "AI & Machine Learning", d: "Integrate intelligent capabilities into products and workflows using modern AI technologies.", items: ["Generative AI", "LLMs", "RAG", "AI Agents", "Machine Learning"] },
  { i: "database", t: "Databases & Data", d: "Design data architectures that support application performance, reliability, scalability, and analytics.", items: [<Link href="/data-science-solutions" key="d">PostgreSQL</Link>, "MySQL", "MongoDB", "Redis", "SQL"] },
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
.usa-page{font-family:var(--f-body),'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif}
.usa-page .loc-sectionTitle,.usa-page .loc-introTitle,.usa-page .loc-ctaTitle,.usa-page .usa-h1,.usa-page .usa-formTitle,.usa-page .loc-detailTitle,.usa-page .loc-engageTitle,.usa-page .loc-statNum,.usa-page .loc-timelineDot,.usa-page .loc-detailNum{font-family:var(--f-display),'Sora',sans-serif}

/* ── hero: copy left, form right ── */
/* Light hero, matching the ServiceHero treatment used elsewhere on the
   site. 130px of top padding clears the fixed header — the previous
   value let the sticky nav slice the top of the hero and the form. */
.usa-hero{position:relative;padding:130px 1.5rem 5.5rem;overflow:hidden;background:
  radial-gradient(1200px 600px at 12% 8%,rgba(67,56,202,.10) 0%,transparent 55%),
  radial-gradient(900px 600px at 92% 18%,rgba(14,165,233,.10) 0%,transparent 55%),
  linear-gradient(180deg,#FBFDFF 0%,#F7F9FD 100%)}
.usa-hero::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--line)}
.usa-heroInner{position:relative;max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1.15fr .85fr;gap:3rem;align-items:start}
.usa-eyebrow{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .9rem;border-radius:999px;background:#fff;border:1px solid var(--line);color:var(--a1);font-size:.8rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:1.15rem;box-shadow:var(--sh)}
.usa-h1{font-size:clamp(2rem,4vw,3.05rem);font-weight:800;line-height:1.12;letter-spacing:-.028em;color:var(--ink);margin:0 0 1.15rem}
.usa-h1 em{font-style:normal;background:var(--grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:locShift 9s ease-in-out infinite}
.usa-heroText{font-size:1.03rem;line-height:1.78;color:var(--ink-soft);margin:0 0 1rem;max-width:56ch}
.usa-heroActions{display:flex;flex-wrap:wrap;gap:.8rem;margin:1.6rem 0 2rem}
.usa-btnA,.usa-btnB{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.85rem 1.6rem;border-radius:999px;font-weight:700;font-size:.94rem;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,background .2s}
.usa-btnA{background:var(--grad);color:#fff!important;box-shadow:0 8px 20px rgba(67,56,202,.24)}
.usa-btnA:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(67,56,202,.34)}
.usa-btnB{background:#fff;color:var(--a1)!important;border:1.5px solid var(--line);box-shadow:var(--sh)}
.usa-btnB:hover{border-color:#C7D2FE;transform:translateY(-2px);box-shadow:var(--sh-h)}
.usa-heroStats{display:grid;grid-template-columns:repeat(4,auto);gap:2.2rem;justify-content:start}
.usa-hsNum{font-family:var(--f-display),'Sora',sans-serif;font-size:1.7rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.15}
.usa-hsLabel{font-size:.78rem;color:var(--ink-soft);font-weight:600;margin-top:.2rem;max-width:11ch;line-height:1.35}

/* ── hero form ── */
.usa-form{background:#fff;border-radius:20px;padding:1.75rem 1.6rem;box-shadow:0 4px 12px rgba(15,23,42,.05),0 20px 48px rgba(67,56,202,.12);border:1px solid var(--line)}
.usa-formTitle{font-size:1.3rem;font-weight:700;color:#0F172A;margin:0 0 .3rem;letter-spacing:-.02em}
.usa-formSub{font-size:.87rem;color:#5B6479;margin:0 0 1.15rem;line-height:1.6}
.usa-field{margin-bottom:.85rem}
.usa-field label{display:block;font-size:.78rem;font-weight:700;color:#3F4A60;margin-bottom:.32rem;letter-spacing:.01em}
.usa-field input,.usa-field select,.usa-field textarea{display:block;width:100%;padding:.62rem .8rem;border:1px solid #DDE3F0;border-radius:10px;font-family:inherit;font-size:.9rem;line-height:1.5;color:#0F172A;background:#FBFCFE;transition:border-color .16s,box-shadow .16s;-webkit-appearance:none;appearance:none}
.usa-field input,.usa-field select{height:42px}
.usa-field select{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%234338CA' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right .65rem center;padding-right:1.9rem;text-overflow:ellipsis}
.usa-field textarea{resize:vertical;min-height:76px;height:auto}
.usa-field input:focus,.usa-field select:focus,.usa-field textarea:focus{outline:none;border-color:#4338CA;box-shadow:0 0 0 3px rgba(67,56,202,.14);background:#fff}
.usa-field input::placeholder,.usa-field textarea::placeholder{color:#A2ABBF}
.usa-fieldPhone{display:grid;grid-template-columns:96px 1fr;gap:.6rem;align-items:end}
.usa-fieldPhone select{padding-left:.65rem;padding-right:1.7rem}
.usa-formBtn{width:100%;margin-top:.35rem;padding:.9rem 1.2rem;border:0;border-radius:999px;background:linear-gradient(120deg,#4338CA,#6D28D9 55%,#0EA5E9);color:#fff;font:inherit;font-size:.95rem;font-weight:700;cursor:pointer;transition:transform .2s cubic-bezier(.22,.61,.36,1),box-shadow .2s,filter .2s}
.usa-formBtn:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 12px 26px rgba(67,56,202,.36)}
.usa-formBtn:disabled{opacity:.65;cursor:progress}
.usa-formErr{margin:.5rem 0 0;font-size:.83rem;color:#B91C1C;font-weight:600}
.usa-formFine{margin:.85rem 0 0;font-size:.75rem;color:#78839A;line-height:1.6;text-align:center}
.usa-formFine a{color:#4338CA;font-weight:600}
.usa-form--done{text-align:center;padding:2.6rem 1.6rem;color:#047857}
.usa-form--done svg{margin:0 auto .8rem;color:#059669}
.usa-form--done .usa-formTitle{color:#0F172A}
.usa-formNote{font-size:.9rem;color:#5B6479;margin:.4rem 0 0;line-height:1.65}

/* ── link CTAs used across the content sections ── */
.usa-cardLink{display:inline-flex;align-items:center;gap:.35rem;margin-top:.9rem;font-size:.86rem;font-weight:700;color:var(--a1)}
.usa-cardLink::after{content:'→';transition:transform .2s cubic-bezier(.22,.61,.36,1)}
.usa-cardLink:hover::after{transform:translateX(3px)}
.usa-locGrid{display:grid;grid-template-columns:repeat(5,1fr);gap:1.1rem}
.usa-locCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.25rem;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s;display:flex;flex-direction:column}
.usa-locCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:#C7D2FE}
.usa-locName{font-family:var(--f-display),'Sora',sans-serif;font-size:1.05rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.usa-locText{font-size:.85rem;color:var(--ink-soft);line-height:1.6;margin:0;flex-grow:1}
.usa-midCta{max-width:820px;margin:2.6rem auto 0;text-align:center;background:var(--bg-alt);border:1px solid var(--line);border-radius:18px;padding:1.9rem 1.75rem}
.usa-midCtaTitle{font-family:var(--f-display),'Sora',sans-serif;font-size:1.22rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.usa-midCtaText{font-size:.94rem;color:var(--ink-soft);line-height:1.7;margin:0 0 1.15rem}
.usa-inlineBtn{display:inline-flex;align-items:center;gap:.45rem;padding:.75rem 1.5rem;border-radius:999px;background:var(--grad);color:#fff!important;font-weight:700;font-size:.9rem;transition:transform .2s var(--ease),box-shadow .2s}
.usa-inlineBtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(67,56,202,.3)}

@media (max-width:1080px){
  .usa-heroInner{grid-template-columns:1fr;gap:2.25rem}
  .usa-locGrid{grid-template-columns:repeat(3,1fr)}
}
@media (max-width:768px){
  .usa-hero{padding:100px 1.15rem 3.25rem}
  .usa-heroStats{grid-template-columns:repeat(2,1fr);gap:1.4rem}
  .usa-hsLabel{max-width:none}
  .usa-locGrid{grid-template-columns:1fr}
  .usa-heroActions{flex-direction:column;align-items:stretch}
}
`;

const Card = ({ i, t, d, cta, href }: { i: IconName; t: string; d: string; cta?: string; href?: string }) => (
  <div className="loc-whyCard" style={{ flexDirection: "column", alignItems: "flex-start" }}>
    <span className="loc-tile"><Icon name={i} /></span>
    <h3 className="loc-whyTitle">{t}</h3>
    <p className="loc-whyText" style={{ flexGrow: 1 }}>{d}</p>
    {cta && href ? <Link className="usa-cardLink" href={href}>{cta}</Link> : null}
  </div>
);

const MidCta = ({ t, d, cta, href }: { t: string; d: string; cta: string; href: string }) => (
  <div className="usa-midCta">
    <h2 className="usa-midCtaTitle">{t}</h2>
    <p className="usa-midCtaText">{d}</p>
    <Link className="usa-inlineBtn" href={href}>{cta}</Link>
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
            <span className="usa-eyebrow">mTouch Labs · United States</span>
            <h1 className="usa-h1">Software Development Company in the <em>USA</em></h1>
            <p className="usa-heroText">Build, modernize, and scale digital products with a trusted software development partner. mTouch Labs delivers custom software, AI-powered applications, SaaS platforms, enterprise solutions, web applications, mobile apps, and cloud solutions tailored to your business needs.</p>
            <p className="usa-heroText">From product strategy and UI/UX design to development, testing, deployment, and ongoing support, our experienced engineering team helps businesses turn complex technology requirements into secure, scalable, and high-performing software.</p>
            <div className="usa-heroActions">
              <Link href="/contact-us" className="usa-btnA">Talk to a Software Expert</Link>
              <Link href="/case-studies" className="usa-btnB">View Case Studies</Link>
            </div>
            <div className="usa-heroStats">
              {HERO_STATS.map((s) => (
                <div key={s.l}><div className="usa-hsNum">{s.n}</div><div className="usa-hsLabel">{s.l}</div></div>
              ))}
            </div>
          </div>
          <HeroLeadForm />
        </div>
      </section>

      {/* ═══ TRUST STATS ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Trusted by Businesses Building and Scaling with <span className="loc-highlight">Technology</span></h2>
          </div>
          <div className="loc-introStats" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {TRUST_STATS.map((s) => (
              <div className="loc-statCard" key={s.l}>
                <span className="loc-statIcon"><Icon name={s.i} size={19} /></span>
                <div className="loc-statNum">{s.n}</div>
                <div className="loc-statLabel">{s.l}</div>
              </div>
            ))}
          </div>
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
          <div style={{ textAlign: "center", marginTop: "2.4rem" }}>
            <Link className="usa-inlineBtn" href="/contact-us">Talk to Our Software Experts</Link>
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
          <MidCta t="Let's Build Software That Moves Your Business Forward" d="Have a product idea, an existing application that needs improvement, or a complex technology challenge? Our team can help you define the right solution, development approach, and technology strategy." cta="Discuss Your Project" href="/contact-us" />
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
            <Link className="usa-inlineBtn" href="/hire-developers-in-india">Explore Offshore Software Development</Link>
            <Link className="usa-inlineBtn" href="/contact-us" style={{ background: "transparent", color: "var(--a1)", border: "1.5px solid #C7D2FE" }}>Talk to Our Team</Link>
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
          <div className="loc-whyGrid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {INDUSTRIES.map((x) => <Card key={x.t} {...x} />)}
          </div>
          <MidCta t="Looking for a Solution for Your Industry?" d="Tell us about your business, technology requirements, and challenges. Our team can help identify the right software approach for your industry and business objectives." cta="Discuss Your Industry Needs" href="/contact-us" />
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
            <Link className="usa-inlineBtn" href="/contact-us">Discuss Your Business Goals</Link>
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDIES — renders only when real entries exist ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Software <span className="loc-highlight">We&apos;ve Built</span></h2>
            <p className="loc-sectionDesc">From new digital products to complex business applications, mTouch Labs works with organizations to turn technology requirements into practical, scalable software solutions.</p>
          </div>
          {CASE_STUDIES.length > 0 ? (
            <div className="loc-engageGrid">
              {CASE_STUDIES.map((c) => (
                <div className="loc-engageCard" key={c.name}>
                  <span className="loc-engageIcon"><Icon name="briefcase" size={22} /></span>
                  <h3 className="loc-engageTitle">{c.name}</h3>
                  <p className="loc-engageDesc"><strong>Industry:</strong> {c.industry}</p>
                  <p className="loc-engageDesc"><strong>The Challenge:</strong> {c.challenge}</p>
                  <p className="loc-engageDesc"><strong>The Solution:</strong> {c.solution}</p>
                  <div className="loc-detailTagRow" style={{ marginBottom: ".8rem" }}>
                    {c.tech.map((t) => <span className="loc-detailTag" key={t}>{t}</span>)}
                  </div>
                  <span className="loc-engageBest">Results: {c.result}</span>
                  <div><Link className="usa-cardLink" href={c.href}>View Case Study</Link></div>
                </div>
              ))}
            </div>
          ) : null}
          <MidCta t="See More of Our Work" d="Explore more software products, applications, and digital solutions developed by mTouch Labs." cta="View All Case Studies" href="/case-studies" />
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
          <MidCta t="From Idea to Scalable Software" d="Whether you're starting a new product or improving an existing application, our process is designed to keep business goals, user needs, and technology decisions aligned throughout the software lifecycle." cta="Start Your Software Project" href="/contact-us" />
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
                <Link className="usa-cardLink" href={l.href}>{l.cta}</Link>
              </div>
            ))}
          </div>
          <MidCta t="Need Software Development for Your US Business?" d="Whether you are launching a new product, modernizing an existing application, or expanding your engineering capacity, our team can discuss your requirements and recommend the right development approach." cta="Talk to Our Software Experts" href="/contact-us" />
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
          <MidCta t="Clear Communication From Start to Finish" d="We establish clear communication channels, project milestones, development priorities, and regular progress updates so your team can stay informed throughout the engagement. Tell us about your business goals, existing technology, project requirements, and development challenges." cta="Talk to Our Software Experts" href="/contact-us" />
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
            <Link href="/contact-us" className="loc-ctaBtnPrimary"><Icon name="phoneCall" size={17} />Start Your Software Project</Link>
            <Link href="/request-free-quote" className="loc-ctaBtnSecondary">Talk to a Software Expert</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
