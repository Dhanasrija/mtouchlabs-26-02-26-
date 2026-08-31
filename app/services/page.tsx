import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Software Development Services | mTouch Labs",
  description:
    "Explore end-to-end software development services including AI, custom software, web, mobile, SaaS, enterprise, AWS, Salesforce, and cloud solutions.",
  keywords: [
    "Software Development Services",
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "AI Development Services",
    "SaaS Development",
    "Enterprise Application Development",
    "Salesforce Consulting",
    "AWS Cloud Services",
    "DevOps Services",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "End-to-End Software Development Services | mTouch Labs",
    description:
      "Build, modernize, and scale digital products with mTouch Labs. Explore AI, custom software, web, mobile, SaaS, enterprise, AWS, Salesforce, and cloud services.",
    url: "https://www.mtouchlabs.com/services",
    siteName: "mTouch Labs",
    type: "website",
    images: [
      {
        url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp",
        width: 1200,
        height: 630,
        alt: "Software Development Services - mTouch Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtouchlabs",
    title: "Software Development Services | mTouch Labs",
    description:
      "End-to-end software development, AI, SaaS, web, mobile, enterprise, AWS, Salesforce, and cloud solutions.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp"],
  },
};

/* ─────────────────────────────────────────────────────────────
   Service categories — the core of the page. Every `link` below
   points at an existing route in this app.
   ───────────────────────────────────────────────────────────── */
type Service = {
  id: string;
  icon: string;
  /* Per-service icon colour + tint. Hues reuse the same set already used by
     the industry cards below, so the page has one colour system rather
     than two. No purples — Signature Blue and Bright Horizon anchor it. */
  c: string;
  bg: string;
  title: string;
  short: string;
  desc: string;
  caps: string[];
  link: string;
  linkLabel: string;
};

const services: Service[] = [
  {
    id: "custom-software",
    c: "#3E8CFB",
    bg: "rgba(62,140,251,.12)",
    icon: "fa-solid fa-cubes",
    title: "Custom Software Development",
    short: "Custom software",
    desc: "Software built around your business processes, workflows, and operational requirements — scalable from day one and designed to keep growing with you.",
    caps: [
      "Custom business applications",
      "Enterprise software",
      "Workflow management",
      "Process automation",
      "Legacy modernization",
      "API-driven applications",
      "Third-party integrations",
    ],
    link: "/custom-software-development-company",
    linkLabel: "Explore Custom Software Development",
  },
  {
    id: "web-development",
    c: "#0891B2",
    bg: "#E2F4F8",
    icon: "fa-solid fa-display",
    title: "Web Application Development",
    short: "Web apps",
    desc: "Secure, high-performance web applications for customers, employees, and partners — from business portals to complex enterprise platforms and SaaS products.",
    caps: [
      "React",
      "Next.js",
      "Node.js",
      "Progressive web apps",
      "Enterprise web applications",
      "E-commerce platforms",
      "Customer portals",
      "API development",
    ],
    link: "/web-development-company",
    linkLabel: "Explore Web Development Services",
  },
  {
    id: "mobile-apps",
    c: "#059669",
    bg: "#E1F5EE",
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    short: "Mobile apps",
    desc: "Native and cross-platform mobile experiences with scalable architecture, intuitive interfaces, secure integrations, and consistently high performance.",
    caps: [
      "iOS development",
      "Android development",
      "Flutter",
      "React Native",
      "Enterprise mobility",
      "App modernization",
      "Maintenance & support",
    ],
    link: "/mobile-app-development-company",
    linkLabel: "Explore Mobile App Development",
  },
  {
    id: "ai",
    c: "#2563EB",
    bg: "#E8EFFE",
    icon: "fa-solid fa-brain",
    title: "AI & Generative AI Development",
    short: "AI & GenAI",
    desc: "Practical AI, embedded where it earns its keep — inside your applications, products, workflows, customer experiences, and enterprise systems.",
    caps: [
      "Generative AI",
      "AI agents",
      "AI chatbots",
      "Retrieval-Augmented Generation (RAG)",
      "Machine learning",
      "Predictive analytics",
      "Intelligent automation",
      "AI integration",
    ],
    link: "/generative-ai-development-company",
    linkLabel: "Explore AI Development Services",
  },
  {
    id: "saas",
    c: "#0EA5E9",
    bg: "#E2F3FD",
    icon: "fa-solid fa-layer-group",
    title: "SaaS Product Development",
    short: "SaaS products",
    desc: "The full SaaS lifecycle — product strategy and architecture through development, deployment, integrations, billing, and ongoing optimization.",
    caps: [
      "Multi-tenant architecture",
      "Subscription management",
      "Recurring billing",
      "Role-based access control",
      "Admin dashboards",
      "Cloud-native architecture",
      "AI-powered SaaS features",
    ],
    link: "/saas-development-services",
    linkLabel: "Explore SaaS Development Services",
  },
  {
    id: "enterprise",
    c: "#475569",
    bg: "#EDEFF2",
    icon: "fa-solid fa-building-columns",
    title: "Enterprise Application Development",
    short: "Enterprise apps",
    desc: "Secure, integrated enterprise applications built around complex workflows, departments, data, and the systems your business already runs on.",
    caps: [
      "Business management platforms",
      "Internal workflow systems",
      "Employee & partner portals",
      "Enterprise dashboards",
      "CRM & ERP integrations",
      "Business automation",
      "System integration",
    ],
    link: "/enterprise-application-development-company",
    linkLabel: "Explore Enterprise Application Development",
  },
  {
    id: "design",
    c: "#DB2777",
    bg: "#FCE8F2",
    icon: "fa-solid fa-pen-ruler",
    title: "UI/UX & Product Design",
    short: "UI/UX design",
    desc: "Digital products that are intuitive, accessible, and aligned with real user needs — designed alongside your product and engineering teams, not in isolation.",
    caps: [
      "Product design",
      "Website & app design",
      "UX research",
      "User journey mapping",
      "Wireframing",
      "Prototyping",
      "Design systems",
    ],
    link: "/ui-ux-design-company",
    linkLabel: "Explore UI/UX Design Services",
  },
  {
    id: "salesforce",
    c: "#EA580C",
    bg: "#FDEDE3",
    icon: "fa-solid fa-cloud-bolt",
    title: "Salesforce Consulting & Development",
    short: "Salesforce",
    desc: "Sales, service, and business processes optimized on Salesforce — configured, customized, and integrated around how your organization actually works.",
    caps: [
      "Salesforce consulting",
      "Implementation",
      "Customization",
      "Sales Cloud",
      "Service Cloud",
      "Lightning migration",
      "Workflow automation",
      "CRM modernization",
    ],
    link: "/salesforce-consulting-services-company",
    linkLabel: "Explore Salesforce Services",
  },
  {
    id: "cloud",
    c: "#B07D0A",
    bg: "rgba(250,199,89,.20)",
    icon: "fa-brands fa-aws",
    title: "AWS Cloud Services & DevOps",
    short: "AWS & DevOps",
    desc: "Build, migrate, modernize, and manage secure cloud environments — with the delivery pipelines and automation that keep releases fast and predictable.",
    caps: [
      "AWS architecture",
      "Cloud migration",
      "Application modernization",
      "Cloud-native development",
      "Cloud security",
      "Managed services",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
    link: "/aws-cloud-services",
    linkLabel: "Explore AWS & Cloud Services",
  },
  {
    id: "security",
    c: "#E11D48",
    bg: "#FDE8ED",
    icon: "fa-solid fa-shield-halved",
    title: "Cybersecurity Services",
    short: "Cybersecurity",
    desc: "Security built into the technology lifecycle rather than bolted on at the end — protecting applications, infrastructure, data, and business systems.",
    caps: [
      "Application security",
      "Cloud security",
      "Security assessment",
      "Vulnerability assessment",
      "Secure development",
      "Infrastructure security",
      "Security monitoring",
      "Risk management",
    ],
    link: "/cyber-security-services-company",
    linkLabel: "Explore Cybersecurity Services",
  },
  {
    id: "qa-testing",
    c: "#0D9488",
    bg: "#E0F2F1",
    icon: "fa-solid fa-vial-circle-check",
    title: "QA & Software Testing",
    short: "QA & testing",
    desc: "Independent quality engineering that catches problems before your users do — across functionality, performance, security, and every integration in between.",
    caps: [
      "Manual testing",
      "Test automation",
      "API testing",
      "Performance testing",
      "Security testing",
      "Regression testing",
      "Device & browser coverage",
    ],
    link: "/quality-assurance-and-testing-services",
    linkLabel: "Explore QA & Testing Services",
  },
  {
    id: "marketing",
    c: "#D97706",
    bg: "#FEF3E2",
    icon: "fa-solid fa-chart-line",
    title: "Digital Marketing Services",
    short: "Digital marketing",
    desc: "Great technology is only half of digital growth. We help you increase visibility, reach the right audiences, and generate qualified opportunities online.",
    caps: [
      "SEO",
      "PPC",
      "SEM",
      "App Store Optimization",
      "Social media marketing",
      "Content marketing",
      "Performance marketing",
    ],
    link: "/digital-marketing-services",
    linkLabel: "Explore Digital Marketing Services",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Requirements",
    desc: "We start by understanding your objectives, users, challenges, integrations, and the outcomes you expect.",
    keys: ["Requirements analysis", "Business discovery", "Technical assessment"],
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Requirements become a practical product roadmap and a technical plan your team can act on.",
    keys: ["Product strategy", "Technology selection", "Architecture", "Roadmap"],
  },
  {
    num: "03",
    title: "UI/UX Design",
    desc: "User journeys and interfaces that are intuitive, accessible, and aligned with your product goals.",
    keys: ["UX research", "User flows", "Wireframes", "Prototypes", "Design systems"],
  },
  {
    num: "04",
    title: "Development",
    desc: "Engineering with scalable architecture, secure coding practices, modern technologies, and agile delivery.",
    keys: ["Frontend", "Backend", "Mobile", "APIs", "Databases", "AI integration"],
  },
  {
    num: "05",
    title: "Quality Assurance",
    desc: "Validation across functionality, usability, performance, security, integrations, and compatibility.",
    keys: ["Functional", "API", "Integration", "Performance", "Security", "UAT"],
  },
  {
    num: "06",
    title: "Deployment & Launch",
    desc: "Production readiness, infrastructure configuration, deployment, monitoring, and hands-on launch support.",
    keys: ["Cloud deployment", "CI/CD", "Monitoring", "Launch support"],
  },
  {
    num: "07",
    title: "Support, Maintenance & Scale",
    desc: "Our engagement continues after launch with support, optimization, enhancements, and scalability work.",
    keys: ["Maintenance", "Optimization", "Security updates", "Enhancements", "Scaling"],
  },
  {
    num: "08",
    title: "Measure & Iterate",
    desc: "Analytics, user feedback, and performance data turn into the next prioritized release rather than a backlog nobody reads.",
    keys: ["Analytics", "User feedback", "A/B testing", "Roadmap review", "Continuous delivery"],
  },
];

/** Continuous-improvement cycle rendered as a horizontal flow chart. */
const FLOW = [
  { label: "Discover", icon: "fa-solid fa-magnifying-glass" },
  { label: "Plan", icon: "fa-solid fa-list-check" },
  { label: "Design", icon: "fa-solid fa-pen-ruler" },
  { label: "Develop", icon: "fa-solid fa-code" },
  { label: "Test", icon: "fa-solid fa-vial" },
  { label: "Launch", icon: "fa-solid fa-rocket" },
  { label: "Support", icon: "fa-solid fa-headset" },
  { label: "Improve", icon: "fa-solid fa-arrow-trend-up" },
];

const techGroups = [
  {
    icon: "fa-solid fa-code",
    title: "Web & Application",
    items: ["React", "Next.js", "Node.js", "TypeScript", "Modern web stacks"],
  },
  {
    icon: "fa-solid fa-mobile-screen",
    title: "Mobile",
    items: ["iOS", "Android", "Flutter", "React Native"],
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI & Data",
    items: ["Generative AI", "Machine learning", "Data science", "RAG", "AI agents", "Automation"],
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: "fa-solid fa-diagram-project",
    title: "Enterprise",
    items: ["Salesforce", "APIs", "Integrations", "Enterprise platforms", "Business systems"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Data & Storage",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "Data pipelines"],
  },
];

const industries = [
  { icon: "fa-solid fa-building-columns", name: "Financial Services & FinTech", desc: "Secure financial applications, automation, and data-driven platforms.", c: "#2563EB", bg: "#E8EFFE" },
  { icon: "fa-solid fa-heart-pulse", name: "Healthcare", desc: "Patient platforms, workflow systems, and digital health solutions.", c: "#E11D48", bg: "#FDE8ED" },
  { icon: "fa-solid fa-cart-shopping", name: "Retail & E-Commerce", desc: "Marketplaces, customer apps, inventory, and business automation.", c: "#B07D0A", bg: "rgba(250,199,89,.20)" },
  { icon: "fa-solid fa-truck-fast", name: "Logistics & Transportation", desc: "Fleet management, tracking, delivery apps, and operational dashboards.", c: "#EA580C", bg: "#FDEDE3" },
  { icon: "fa-solid fa-industry", name: "Manufacturing", desc: "Enterprise applications, workflow automation, and connected systems.", c: "#0891B2", bg: "#E2F4F8" },
  { icon: "fa-solid fa-graduation-cap", name: "Education", desc: "Learning platforms, management systems, and digital learning experiences.", c: "#059669", bg: "#E1F5EE" },
  { icon: "fa-solid fa-house-chimney", name: "Real Estate", desc: "Property platforms, portals, CRM integrations, and workflow solutions.", c: "#3E8CFB", bg: "rgba(62,140,251,.12)" },
  { icon: "fa-solid fa-cloud-arrow-up", name: "SaaS & Technology", desc: "SaaS products, cloud platforms, AI-powered applications, and APIs.", c: "#0EA5E9", bg: "#E2F3FD" },
  { icon: "fa-solid fa-plane-departure", name: "Travel & Hospitality", desc: "Booking platforms, customer apps, and operational systems.", c: "#DB2777", bg: "#FCE8F2" },
  { icon: "fa-solid fa-landmark", name: "Government & Enterprise", desc: "Secure digital platforms, modernization, and transformation programs.", c: "#475569", bg: "#EDEFF2" },
];

const whyChoose = [
  { icon: "fa-solid fa-infinity", c: "#3E8CFB", bg: "rgba(62,140,251,.12)", title: "End-to-End Technology Expertise", desc: "Strategy, UI/UX, development, AI, cloud, testing, deployment, marketing, and support — across the full product lifecycle." },
  { icon: "fa-solid fa-bullseye", c: "#E11D48", bg: "#FDE8ED", title: "Business-Focused Engineering", desc: "We build around business objectives, user requirements, operational challenges, and measurable outcomes." },
  { icon: "fa-solid fa-microchip", c: "#2563EB", bg: "#E8EFFE", title: "AI-Ready Development", desc: "Generative AI, AI agents, RAG, automation, intelligent search, and machine learning inside modern applications." },
  { icon: "fa-solid fa-arrow-up-right-dots", c: "#059669", bg: "#E1F5EE", title: "Scalable Architecture", desc: "Designed for scalability, performance, security, integrations, and long-term maintainability." },
  { icon: "fa-solid fa-shield", c: "#0891B2", bg: "#E2F4F8", title: "Enterprise-Grade Solutions", desc: "An approach suited to complex systems, security requirements, integrations, and evolving business needs." },
  { icon: "fa-solid fa-people-group", c: "#DB2777", bg: "#FCE8F2", title: "Agile & Collaborative Delivery", desc: "We work with your stakeholders through discovery, design, development, testing, and continuous improvement." },
  { icon: "fa-solid fa-globe", c: "#0D9488", bg: "#E0F2F1", title: "Global Technology Partner", desc: "Startups, growing businesses, and enterprises across international markets." },
  { icon: "fa-solid fa-medal", c: "#B07D0A", bg: "rgba(250,199,89,.20)", title: "Proven Development Experience", desc: "Mobile apps, websites, custom software, SaaS platforms, enterprise applications, and AI solutions." },
];

const faqs = [
  {
    q: "What software development services does mTouch Labs provide?",
    a: "mTouch Labs provides end-to-end software development services including custom software development, web application development, mobile app development, AI and Generative AI development, SaaS product development, enterprise application development, UI/UX design, Salesforce services, AWS and cloud services, DevOps, cybersecurity, and digital marketing.",
  },
  {
    q: "Does mTouch Labs provide end-to-end software development?",
    a: "Yes. Our capabilities cover the complete product lifecycle, including discovery, strategy, UI/UX design, development, quality assurance, deployment, support, maintenance, and continuous improvement.",
  },
  {
    q: "Does mTouch Labs develop custom software?",
    a: "Yes. We develop customized software around specific business processes, workflows, integrations, users, and scalability requirements.",
  },
  {
    q: "Does mTouch Labs provide AI development services?",
    a: "Yes. Our AI capabilities include Generative AI applications, AI agents, RAG-based solutions, AI chatbots, intelligent automation, machine learning, predictive analytics, and AI integration.",
  },
  {
    q: "Can you develop a SaaS product from scratch?",
    a: "Yes. We support SaaS development from product discovery and architecture through UI/UX, development, cloud deployment, integrations, subscription management, billing, and ongoing optimization.",
  },
  {
    q: "Does mTouch Labs provide AWS cloud services?",
    a: "Yes. Our AWS and cloud services include cloud architecture, AWS migration, application modernization, infrastructure management, cloud-native development, security, DevOps, CI/CD, and managed cloud services.",
  },
  {
    q: "Do you provide UI/UX design along with development?",
    a: "Yes. Our UI/UX and product design teams can work alongside engineering teams to design complete digital experiences for web, mobile, SaaS, and enterprise applications.",
  },
  {
    q: "Do you provide Salesforce consulting?",
    a: "Yes. We provide Salesforce consulting, implementation, customization, integrations, Sales Cloud, Service Cloud, Lightning migration, workflow automation, and CRM modernization services.",
  },
  {
    q: "Can you modernize a legacy application?",
    a: "Yes. We assess existing applications and help modernize architecture, interfaces, infrastructure, integrations, and functionality while considering business continuity and migration requirements.",
  },
  {
    q: "Do you provide cybersecurity services?",
    a: "Yes. We provide cybersecurity capabilities including application security, cloud security, security assessments, vulnerability assessments, secure development practices, and infrastructure security.",
  },
  {
    q: "Do you provide digital marketing services?",
    a: "Yes. Our digital marketing services include SEO, PPC, SEM, ASO, social media marketing, content marketing, digital advertising, and performance marketing.",
  },
  {
    q: "What is your software development process?",
    a: "Our process follows a continuous lifecycle: Discovery, Strategy and Planning, UI/UX Design, Development, Quality Assurance, Deployment, Support and Scale, and Continuous Improvement.",
  },
  {
    q: "Do you work with startups and enterprises?",
    a: "Yes. We work with startups, growing businesses, and enterprises that need custom digital products, SaaS platforms, AI solutions, enterprise applications, cloud modernization, and technology transformation.",
  },
  {
    q: "How much does software development cost?",
    a: "The cost depends on project scope, features, integrations, technology requirements, design complexity, team composition, security requirements, and timeline. A project assessment is required to provide an accurate estimate.",
  },
  {
    q: "Do you provide software maintenance and support?",
    a: "Yes. We provide ongoing application maintenance, technical support, performance optimization, security updates, feature enhancements, bug fixes, and scaling support.",
  },
];

/** Stagger delay for the scroll-reveal animation (see services-page.css). */
const d = (i: number): CSSProperties => ({ "--d": i } as CSSProperties);

export default function ServicesPage() {
  return (
    <main className="svcx">
      {/* ═══════════ HERO ═══════════ */}
      <section className="svcx-hero">
        <div className="svcx-hero-grid" aria-hidden="true" />
        <div className="svcx-blob svcx-blob-a" aria-hidden="true" />
        <div className="svcx-blob svcx-blob-b" aria-hidden="true" />
        <div className="svcx-blob svcx-blob-c" aria-hidden="true" />

        <div className="svcx-container">
          <div className="svcx-hero-inner">
            <div className="svcx-hero-copy">
              <p className="svcx-eyebrow svcx-in" style={d(0)}>Software Development Services</p>

              <h1 className="svcx-h1 svcx-in" style={d(1)}>
                End-to-End Software Development,{" "}
                <span>AI &amp; Digital Solutions</span>
              </h1>

              <p>
                mTouch Labs helps startups, growing businesses, and enterprises build,
                modernize, and scale digital products — from{" "}
                <Link className="svcx-link" href="/custom-software-development-company">
                  custom software development
                </Link>{" "}
                and web and mobile applications to{" "}
                <Link className="svcx-link" href="/generative-ai-development-company">
                  AI development services
                </Link>
                , SaaS platforms, and cloud-native systems.
              </p>
              <p>
                Starting something new, modernizing a legacy application, automating a
                process, or adding AI to a platform you already run? We take it from idea
                to strategy, design, development, launch, and continuous improvement.
              </p>

              <div className="svcx-hero-ctas svcx-in" style={d(4)}>
                <Link href="/contact-us" className="svcx-btn svcx-btn-primary">
                  <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                  Let&apos;s Discuss Your Project
                </Link>
                <Link href="/portfolio" className="svcx-btn svcx-btn-ghost">
                  View Our Work
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <aside className="svcx-hero-panel svcx-in" style={d(3)}>
              <h2>What we deliver</h2>
              <ul className="svcx-panel-list">
                <li><i className="fa-solid fa-cubes" aria-hidden="true" />Custom software &amp; enterprise platforms</li>
                <li><i className="fa-solid fa-mobile-screen-button" aria-hidden="true" />Web, mobile &amp; SaaS products</li>
                <li><i className="fa-solid fa-brain" aria-hidden="true" />AI, Generative AI &amp; automation</li>
                <li><i className="fa-solid fa-cloud" aria-hidden="true" />AWS cloud, DevOps &amp; security</li>
                <li><i className="fa-solid fa-pen-ruler" aria-hidden="true" />UI/UX design &amp; product strategy</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="svcx-section" id="services">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Our End-to-End Services</p>
            <h2 className="svcx-h2">
              One partner across <em>design, engineering, AI and cloud</em>
            </h2>
            <p className="svcx-lead">
              Software engineering, AI, product design, cloud, enterprise technology,
              cybersecurity, and digital marketing under one roof — combined into solutions
              that map to your business goals.
            </p>
          </div>

          <div className="svcx-services-grid">
            {services.map((s, i) => (
              <article className="svcx-service-card svcx-reveal" key={s.id} id={s.id} style={d(i % 3)}>
                <span
                  className="svcx-service-icon"
                  aria-hidden="true"
                  style={{ ["--c" as string]: s.c, ["--bg" as string]: s.bg }}
                >
                  <i className={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="svcx-caps">
                  {s.caps.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
                <Link href={s.link} className="svcx-service-link">
                  {s.linkLabel}
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESS ═══════════ */}
      <section className="svcx-section svcx-section--soft" id="process">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">How We Work</p>
            <h2 className="svcx-h2">
              From idea to launch — <em>a complete development lifecycle</em>
            </h2>
            <p className="svcx-lead">
              Business strategy, product design, engineering, quality assurance, deployment,
              and ongoing support in one continuous cycle.
            </p>
          </div>

          <ol className="svcx-process-grid" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {processSteps.map((p, i) => (
              <li className="svcx-process-card svcx-reveal" key={p.num} style={d(i % 4)}>
                <span className="svcx-process-num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <ul className="svcx-process-keys">
                  {p.keys.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="svcx-flow svcx-reveal">
            <div className="svcx-flow-head">
              <h3>Continuous improvement</h3>
              <p>
                Software development does not end at launch. User feedback, analytics,
                performance data, and new business requirements feed straight back into the
                next iteration of your{" "}
                <Link className="svcx-link" href="/it-services-digital-transformation-company">
                  digital platform
                </Link>
                .
              </p>
            </div>

            <ol className="svcx-flow-track" aria-label="Continuous improvement cycle">
              {FLOW.map((f, i) => (
                <li className="svcx-flow-node" key={f.label} style={d(i)}>
                  <span className="svcx-flow-dot" aria-hidden="true">
                    <i className={f.icon} />
                  </span>
                  <span className="svcx-flow-label">{f.label}</span>
                </li>
              ))}
              <li className="svcx-flow-node svcx-flow-node--loop" style={d(FLOW.length)}>
                <span className="svcx-flow-dot svcx-flow-dot--loop" aria-hidden="true">
                  <i className="fa-solid fa-rotate-left" />
                </span>
                <span className="svcx-flow-label">Repeat</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ═══════════ TECHNOLOGY ═══════════ */}
      <section className="svcx-section" id="technology">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Technology Expertise</p>
            <h2 className="svcx-h2">
              The right stack for <em>your</em> requirements
            </h2>
            <p className="svcx-lead">
              We choose technology based on business requirements, product complexity,
              scalability goals, security needs, and the ecosystem you already run — not on
              what happens to be fashionable.
            </p>
          </div>

          <div className="svcx-tech-grid">
            {techGroups.map((t, i) => (
              <div className="svcx-tech-card svcx-reveal" key={t.title} style={d(i % 3)}>
                <h3>
                  <i className={t.icon} aria-hidden="true" />
                  {t.title}
                </h3>
                <ul>
                  {t.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES ═══════════ */}
      <section className="svcx-section svcx-section--tint" id="industries">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Industries We Serve</p>
            <h2 className="svcx-h2">
              Digital solutions built for <em>your sector</em>
            </h2>
            <p className="svcx-lead">
              We deliver{" "}
              <Link className="svcx-link" href="/app-and-web-development-for-ecommerce-services">
                e-commerce development
              </Link>
              ,{" "}
              <Link className="svcx-link" href="/diagnostic-app-development-company">
                healthcare software development
              </Link>
              , and{" "}
              <Link className="svcx-link" href="/saas-development-services">
                SaaS development
              </Link>{" "}
              alongside enterprise solutions for organizations across industries and
              business models.
            </p>
          </div>

          <div className="svcx-ind-grid">
            {industries.map((ind, i) => (
              <div className="svcx-ind-card svcx-reveal" key={ind.name} style={d(i % 5)}>
                <span
                  className="svcx-ind-icon"
                  aria-hidden="true"
                  style={{ color: ind.c, background: ind.bg, borderColor: ind.bg } as CSSProperties}
                >
                  <i className={ind.icon} />
                </span>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE ═══════════ */}
      <section className="svcx-section" id="why-mtouch-labs">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Why mTouch Labs</p>
            <h2 className="svcx-h2">
              Engineering that answers to <em>business outcomes</em>
            </h2>
            <p className="svcx-lead">
              Eight reasons teams keep us on their roadmap after the first release.
            </p>
          </div>

          <div className="svcx-why-grid">
            {whyChoose.map((w, i) => (
              <div className="svcx-why-card svcx-reveal" key={w.title} style={d(i % 4)}>
                <span
                  className="svcx-why-icon"
                  aria-hidden="true"
                  style={{ ["--c" as string]: w.c, ["--bg" as string]: w.bg }}
                >
                  <i className={w.icon} />
                </span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROVEN EXPERIENCE — counter ledger ═══════════ */}
      <section className="svcx-section svcx-ledger" id="experience">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Proven Development Experience</p>
            <h2 className="svcx-h2">
              Track record across <em>mobile, web and enterprise</em>
            </h2>
            <p className="svcx-lead">
              Our experience spans mobile applications, websites, custom software, SaaS
              platforms, enterprise applications, AI solutions, and digital products.
              Most of that work is delivered from our{" "}
              <Link href="/software-development-company-hyderabad">engineering base in Hyderabad</Link>.
            </p>
          </div>

          <div className="svcx-ledger-row svcx-reveal">
            {[
              { n: 1500, suffix: "+", label: "Mobile Apps Developed", icon: "fa-solid fa-mobile-screen-button", c: "#3E8CFB", bg: "rgba(62,140,251,.12)" },
              { n: 820, suffix: "+", label: "Websites Developed", icon: "fa-solid fa-display", c: "#059669", bg: "#E1F5EE" },
              { n: 700, suffix: "+", label: "Unique Features Implemented", icon: "fa-solid fa-wand-magic-sparkles", c: "#B07D0A", bg: "rgba(250,199,89,.20)" },
            ].map((st, i) => (
              <div className="svcx-ledger-cell" key={st.label} style={d(i)}>
                <span className="svcx-ledger-icon" aria-hidden="true" style={{ ["--c" as string]: st.c, ["--bg" as string]: st.bg }}>
                  <i className={st.icon} />
                </span>
                <span className="svcx-ledger-num">
                  <span className="svcx-count" data-to={st.n}>
                    {st.n.toLocaleString("en-US")}
                  </span>
                  {st.suffix}
                </span>
                <span className="svcx-ledger-rule" aria-hidden="true" />
                <span className="svcx-ledger-label">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA — full-bleed dark band (Deep Indigo) ═══════════ */}
      <section className="svcx-cta">
        <div className="svcx-container">
          <div className="svcx-cta-frame svcx-reveal">
            <div className="svcx-cta-inner">
              <p className="svcx-eyebrow">Let&apos;s Build</p>
              <h2 className="svcx-cta-h2">
                Build, modernize &amp; scale your <em>digital product</em>
              </h2>
              <p className="svcx-cta-p">
                Launching a new software product, developing an enterprise application,
                modernizing legacy technology, migrating to AWS, building a SaaS platform, or
                integrating AI into an existing system — mTouch Labs can help.
              </p>
              <p className="svcx-cta-p svcx-cta-p--tight">
                Have a project in mind? Let&apos;s discuss your requirements, technology
                challenges, and business goals.
              </p>
              <div className="svcx-cta-actions">
                <Link href="/contact-us" className="svcx-btn svcx-btn-primary">
                  Let&apos;s Discuss Your Project
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link href="/portfolio" className="svcx-btn svcx-btn-ghost">
                  View Our Work
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="svcx-section svcx-section--soft" id="faq">
        <div className="svcx-container">
          <div className="svcx-head svcx-head--center svcx-reveal">
            <p className="svcx-eyebrow">Frequently Asked Questions</p>
            <h2 className="svcx-h2">
              Answers before you <em>get in touch</em>
            </h2>
          </div>

          <div className="svcx-faq-list">
            {faqs.map((f, i) => (
              /* `name` makes these an exclusive accordion natively — opening one
                 closes the others, no JavaScript. Chrome 120+, Safari 17.2+,
                 Firefox 130+; older browsers just allow several open at once. */
              <details className="svcx-faq-item svcx-reveal" name="svcx-faq" key={f.q} {...(i === 0 ? { open: true } : {})}>
                <summary className="svcx-faq-q">
                  <span>{f.q}</span>
                  <span className="svcx-faq-icon" aria-hidden="true" />
                </summary>
                <p className="svcx-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      {/* Scroll-reveal. The hiding rules only apply once this script has added
          `svcx-anim`, so with JS disabled every element renders visible. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){
  var root = document.querySelector('.svcx');
  if (!root) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  root.classList.add('svcx-anim');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0 });
  root.querySelectorAll('.svcx-reveal').forEach(function(el){ io.observe(el); });

  /* Count-up for the experience figures — runs once, when they scroll in. */
  var counters = root.querySelectorAll('.svcx-count');
  if (counters.length) {
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target;
        var to = parseInt(el.getAttribute('data-to'), 10) || 0;
        var dur = 1400, t0 = null;
        function frame(ts){
          if (t0 === null) t0 = ts;
          var k = Math.min((ts - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          el.textContent = Math.round(to * eased).toLocaleString('en-US');
          if (k < 1) requestAnimationFrame(frame);
        }
        el.textContent = '0';
        requestAnimationFrame(frame);
      });
    }, { threshold: 0.4 });
    counters.forEach(function(el){ cio.observe(el); });
  }
  /* Safety net: anything the observer somehow never fires for (e.g. an
     element pinned at the very bottom of the document) is revealed anyway. */
  window.addEventListener('load', function(){
    setTimeout(function(){
      root.querySelectorAll('.svcx-reveal:not(.is-in)').forEach(function(el){
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('is-in');
      });
    }, 400);
  });
})();`,
        }}
      />
    </main>
  );
}
