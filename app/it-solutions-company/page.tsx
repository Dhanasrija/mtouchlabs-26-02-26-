import type { Metadata } from "next";
import "./style.css";

/* ─────────────────────────────────────────────────────────────
   METADATA (SEO-Optimized)
   ───────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "IT Solutions Company | Custom IT Services | mTouch Labs",
  description:
    "mTouch Labs is a trusted IT solutions company offering custom software, cloud, AI, mobile apps, and enterprise IT services worldwide.",
  keywords: [
    "IT Solutions Company",
    "Custom IT Solutions",
    "IT Services Company",
    "Enterprise IT Solutions",
    "Business IT Solutions",
    "Software Development Company",
    "Cloud Solutions Company",
    "AI Solutions Company",
    "Technology Solutions Company",
    "IT Consulting Services",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/it-solutions-company",
  },
  openGraph: {
    title: "IT Solutions Company | Custom IT Services | mTouch Labs",
    description:
      "Trusted IT solutions company offering custom software, AI, cloud, mobile apps, and enterprise IT services.",
    url: "https://www.mtouchlabs.com/it-solutions-company",
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.mtouchlabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mTouch Labs IT Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Solutions Company | mTouch Labs",
    description:
      "Custom software, AI, cloud, mobile apps, and enterprise IT solutions for growing businesses.",
    images: ["https://www.mtouchlabs.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   JSON-LD SCHEMAS
   ───────────────────────────────────────────────────────────── */
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Solutions Company | Custom IT Services | mTouch Labs",
  description:
    "mTouch Labs is a trusted IT solutions company offering custom software, cloud, AI, mobile apps, and enterprise IT services worldwide.",
  url: "https://www.mtouchlabs.com/it-solutions-company",
  provider: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://www.mtouchlabs.com",
    logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
  },
  areaServed: { "@type": "Country", name: "Worldwide" },
  serviceType: "IT Solutions Company | Custom IT Services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "IT Solutions Company",
      item: "https://www.mtouchlabs.com/it-solutions-company",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does an IT solutions company do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IT solutions company helps businesses improve operations through software, cloud systems, mobile apps, automation, and consulting services.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose mTouch Labs for IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs provides custom IT solutions, experienced teams, transparent delivery, and scalable systems for startups and enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer enterprise IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We build enterprise platforms for finance, HR, logistics, operations, and customer management.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We serve clients across India, USA, UAE, UK, Australia, and other global markets.",
      },
    },
    {
      "@type": "Question",
      name: "How much do IT solutions services cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing depends on project scope, features, integrations, and timelines. We provide tailored quotes based on business needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide support after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer maintenance, upgrades, monitoring, optimization, and long-term technical support.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   STATIC DATA — each service carries its own internal link
   (matches the "Best Internal Links to Add" map from the PDF)
   ───────────────────────────────────────────────────────────── */
const services = [
  {
    icon: "fa-solid fa-code",
    title: "Custom Software Development Services",
    desc: "Tailored CRMs, ERPs, SaaS products, dashboards, and internal systems engineered precisely for your workflow.",
    cta: "Need tailored business systems? Explore our Custom Software Development Services.",
    linkText: "custom software development company",
    href: "/custom-software-development-company",
  },
  {
    icon: "fa-solid fa-briefcase",
    title: "Enterprise IT Solutions",
    desc: "Robust systems for HR, finance, operations, customer support, and logistics at any scale.",
    cta: "Need workflow automation? View our CRM / ERP Solutions.",
    linkText: "CRM software development",
    href: "/custom-crm-tool-development",
  },
  {
    icon: "fa-solid fa-globe",
    title: "Web Development Solutions",
    desc: "High-performance websites and web apps optimized for SEO, speed, and conversions.",
    cta: "Need high-converting websites? Explore our Web Development Services.",
    linkText: "web development company",
    href: "/web-development-company",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Mobile App Development",
    desc: "Android and iOS apps built for engagement, performance, and long-term scalability.",
    cta: "Need mobile-first growth solutions? Check our Mobile App Development Services.",
    linkText: "mobile app development company",
    href: "/mobile-app-development-company",
  },
  {
    icon: "fa-solid fa-cloud",
    title: "Cloud Solutions Services",
    desc: "Migration, DevOps, hosting, infrastructure management, and continuous optimization.",
    cta: "Need scalable deployment pipelines? View our DevOps Services & Solutions.",
    linkText: "DevOps services",
    href: "/devops-services-and-solutions",
  },
  {
    icon: "fa-solid fa-robot",
    title: "AI Solutions Services",
    desc: "AI chatbots, workflow automation, predictive analytics, and smart decision systems.",
    cta: "Looking to automate operations? Explore our AI Development Services.",
    linkText: "AI development services",
    href: "/ai-development-company",
  },
  {
    icon: "fa-solid fa-layer-group",
    title: "SaaS / Product Development",
    desc: "End-to-end SaaS product engineering — from architecture to scalable multi-tenant rollout.",
    cta: "Launching a subscription product? See our SaaS Development Services.",
    linkText: "SaaS development company",
    href: "/saas-development-company",
  },
  {
    icon: "fa-solid fa-lightbulb",
    title: "IT Consulting Services",
    desc: "Roadmaps, modernization planning, architecture reviews, and audits from senior experts.",
    cta: "Need modernization or cloud migration? Explore our IT Services & Digital Transformation Solutions.",
    linkText: "digital transformation services",
    href: "/it-services-digital-transformation-company",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Cybersecurity & Compliance",
    desc: "Proactive security posture, audits, monitoring, and compliance frameworks for peace of mind.",
    cta: "Want to harden your systems? Talk to our security team.",
    linkText: "Contact our team",
    href: "/contact-us",
  },
];

const stats = [
  { value: "14+", label: "Years of Expertise" },
  { value: "1500+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "99%", label: "Uptime Guarantee" },
];

const industries = [
  { name: "Healthcare", icon: "fa-solid fa-heart-pulse" },
  { name: "Retail", icon: "fa-solid fa-store" },
  { name: "Ecommerce", icon: "fa-solid fa-cart-shopping" },
  { name: "Finance", icon: "fa-solid fa-credit-card" },
  { name: "Logistics", icon: "fa-solid fa-truck-fast" },
  { name: "Real Estate", icon: "fa-solid fa-building" },
  { name: "Education", icon: "fa-solid fa-graduation-cap" },
  { name: "Manufacturing", icon: "fa-solid fa-industry" },
  { name: "SaaS", icon: "fa-solid fa-cloud-arrow-up" },
  { name: "Startups", icon: "fa-solid fa-rocket" },
];

const orbitNodes = [
  { label: "Cloud", icon: "fa-solid fa-cloud" },
  { label: "AI", icon: "fa-solid fa-brain" },
  { label: "DevOps", icon: "fa-solid fa-gears" },
  { label: "Security", icon: "fa-solid fa-lock" },
  { label: "Mobile", icon: "fa-solid fa-mobile" },
  { label: "APIs", icon: "fa-solid fa-plug" },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Deep sessions to map business goals, current systems, and challenges.", icon: "fa-solid fa-magnifying-glass" },
  { step: "02", title: "Strategy", desc: "A clear roadmap, timeline, tech stack, and milestone-based solution plan.", icon: "fa-solid fa-map" },
  { step: "03", title: "Design", desc: "User-first interfaces and experiences designed for clarity and conversion.", icon: "fa-solid fa-pen-ruler" },
  { step: "04", title: "Development", desc: "Agile build cycles with transparent progress and iterative feedback loops.", icon: "fa-solid fa-code-branch" },
  { step: "05", title: "Launch", desc: "Smooth, zero-downtime deployments with rigorous testing and performance checks.", icon: "fa-solid fa-rocket" },
  { step: "06", title: "Support", desc: "Proactive monitoring, maintenance, upgrades, and long-term scaling support.", icon: "fa-solid fa-headset" },
];

const countries = ["India", "United States", "United Arab Emirates", "United Kingdom", "Australia"];

const whyPoints = [
  "Custom business solutions built around your workflow",
  "Experienced developers, consultants, and architects",
  "Scalable, secure, performance-optimized technology",
  "Transparent, milestone-based agile execution",
  "End-to-end IT ownership under one roof",
  "Dedicated post-launch support and growth partnership",
];

const aiFeatures = [
  { icon: "fa-solid fa-robot", label: "Smart Automation Systems" },
  { icon: "fa-solid fa-comments", label: "AI-Powered Chatbots" },
  { icon: "fa-solid fa-chart-line", label: "Predictive Analytics" },
  { icon: "fa-solid fa-bolt", label: "Intelligent Workflows" },
];

/* "How Our IT Solutions Help You Grow" — from the PDF */
const growthPoints = [
  { icon: "fa-solid fa-gears", text: "Automate repetitive processes" },
  { icon: "fa-solid fa-chart-line", text: "Improve operational efficiency" },
  { icon: "fa-solid fa-rocket", text: "Launch products faster" },
  { icon: "fa-solid fa-bolt", text: "Reduce software bottlenecks" },
  { icon: "fa-solid fa-heart", text: "Enhance customer experience" },
  { icon: "fa-solid fa-magnifying-glass-chart", text: "Access better analytics" },
  { icon: "fa-solid fa-earth-americas", text: "Scale globally with confidence" },
];

/* "EEAT Trust Signals" — from the PDF */
const eeatSignals = [
  {
    icon: "fa-solid fa-medal",
    title: "Experience",
    desc: "Delivered software and IT solutions across multiple industries.",
  },
  {
    icon: "fa-solid fa-user-graduate",
    title: "Expertise",
    desc: "Specialists in software engineering, AI, cloud, mobile, and UX.",
  },
  {
    icon: "fa-solid fa-building-columns",
    title: "Authority",
    desc: "Trusted technology partner for startups and enterprises.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Trustworthiness",
    desc: "Transparent communication, secure systems, and dependable support.",
  },
];

const faqs = [
  { q: "What does an IT solutions company do?", a: "An IT solutions company helps businesses improve operations with software, cloud services, mobile apps, automation, and consulting designed for measurable outcomes." },
  { q: "Why is mTouch Labs a trusted IT solutions company?", a: "mTouch Labs provides custom IT solutions, experienced teams, transparent delivery, and scalable systems for startups, SMEs, and enterprises." },
  { q: "Do you offer enterprise IT solutions?", a: "Yes. We build enterprise platforms for operations, HR, finance, logistics, and customer management — each designed for security, compliance, and scale." },
  { q: "Do you provide custom IT solutions in India and globally?", a: "Yes. We serve clients in India, USA, UAE, UK, Australia, and worldwide with flexible engagement models." },
  { q: "How much do IT solutions services cost?", a: "Costs depend on project size, features, integrations, and timelines. We provide custom quotes and transparent breakdowns after a free discovery call." },
  { q: "Do you support businesses after launch?", a: "Yes. We offer maintenance, upgrades, monitoring, and continuous improvement to keep systems running smoothly." },
];

/* ─────────────────────────────────────────────────────────────
   PAGE (Server Component — Pure SSR, no CSR)
   ───────────────────────────────────────────────────────────── */
export default function ITSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="itsc-page">
        {/* ══════════ HERO ══════════ */}
        <section className="itsc-hero">
          <div className="itsc-hero-grid" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-a" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-b" aria-hidden="true" />
          <div className="itsc-blob itsc-blob-c" aria-hidden="true" />

          <div className="itsc-container">
            <div className="itsc-hero-content">
              <div className="itsc-badge">
                <span className="itsc-badge-dot" />
                Leading IT Solutions Company
              </div>

              <h1 className="itsc-h1">
                Leading IT Solutions Company
                <br />
                for <span className="itsc-h1-gradient">Modern Businesses</span>
              </h1>

              <p className="itsc-hero-sub">
                Businesses today need more than technology vendors — they need a dependable IT
                solutions company that understands growth, efficiency, and{" "}
                <a
                  className="itsc-inline-link"
                  href="/it-services-digital-transformation-company"
                >
                  digital transformation
                </a>
                . At mTouch Labs, we deliver custom IT solutions services for startups, SMEs, and
                enterprises looking to scale faster and modernize operations.
              </p>

              <div className="itsc-ctas">
                <a href="/contact-us" className="itsc-btn itsc-btn-primary">
                  <i className="fa-solid fa-paper-plane" />
                  Request a Free Consultation
                </a>
                <a href="#services" className="itsc-btn itsc-btn-ghost">
                  Explore Services
                  <i className="fa-solid fa-arrow-right" />
                </a>
              </div>

              <div className="itsc-stats-grid">
                {stats.map((s) => (
                  <div key={s.label} className="itsc-stat-card">
                    <span className="itsc-stat-val">{s.value}</span>
                    <span className="itsc-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ SERVICES (with internal links per PDF map) ══════════ */}
        <section className="itsc-section" id="services">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">Our IT Solutions Services</p>
              <h2 className="itsc-h2">
                Complete IT Solutions <em>Under One Roof</em>
              </h2>
              <p className="itsc-lead">
                A full spectrum of technology services — from custom development and cloud
                infrastructure to AI, cybersecurity, and consulting — designed to scale your
                business.
              </p>
            </div>

            <div className="itsc-services-grid">
              {services.map((s) => (
                <div key={s.title} className="itsc-service-card">
                  <div className="itsc-icon-wrap">
                    <i className={s.icon} />
                  </div>
                  <h3 className="itsc-card-title">{s.title}</h3>
                  <p className="itsc-card-desc">{s.desc}</p>
                  <a href={s.href} className="itsc-service-link" aria-label={s.linkText}>
                    Explore {s.linkText}
                    <i className="fa-solid fa-arrow-right-long" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ WHY CHOOSE ══════════ */}
        <section className="itsc-section itsc-why">
          <div className="itsc-why-bg" aria-hidden="true" />
          <div className="itsc-container itsc-why-inner">
            <div>
              <p className="itsc-eyebrow">Why mTouch Labs</p>
              <h2 className="itsc-h2">
                Why Choose mTouch Labs <br />
                as Your <em>IT Solutions Company</em>
              </h2>
              <p className="itsc-lead" style={{ margin: 0 }}>
                We build systems that are scalable, secure, performance-optimized, and easy to
                maintain — so you can focus entirely on growing your business.
              </p>
              <ul className="itsc-why-list">
                {whyPoints.map((pt) => (
                  <li key={pt} className="itsc-why-item">
                    <span className="itsc-why-check">
                      <i className="fa-solid fa-check" />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="itsc-orbit-wrap">
              <div className="itsc-orbit">
                <div className="itsc-orbit-ring" aria-hidden="true" />
                <div className="itsc-orbit-ring itsc-orbit-ring-2" aria-hidden="true" />
                <div className="itsc-orbit-ring itsc-orbit-ring-3" aria-hidden="true" />

                <div className="itsc-orbit-center">
                  <i className="fa-solid fa-cube" />
                  <span>mTouch Labs</span>
                </div>

                {orbitNodes.map((node, i) => (
                  <div
                    key={node.label}
                    className="itsc-orbit-node"
                    style={{ ["--angle" as never]: `${i * 60}deg` } as React.CSSProperties}
                    title={node.label}
                  >
                    <i className={node.icon} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ AI SECTION ══════════ */}
        <section className="itsc-ai">
          <div className="itsc-container">
            <div className="itsc-ai-card">
              <span className="itsc-particle itsc-p1" />
              <span className="itsc-particle itsc-p2" />
              <span className="itsc-particle itsc-p3" />
              <span className="itsc-particle itsc-p4" />
              <span className="itsc-particle itsc-p5" />
              <span className="itsc-particle itsc-p6" />

              <div className="itsc-ai-inner">
                <span className="itsc-ai-badge">
                  <i className="fa-solid fa-wand-magic-sparkles" /> AI-Powered
                </span>
                <h2 className="itsc-h2">
                  AI-Enabled IT Solutions <em>for the Future</em>
                </h2>
                <p className="itsc-lead">
                  We enhance traditional IT with intelligent capabilities — automating workflows,
                  delivering data-driven insights, and unlocking smarter decision-making.
                </p>

                <div className="itsc-ai-pill-grid">
                  {aiFeatures.map((item) => (
                    <div key={item.label} className="itsc-ai-pill">
                      <i className={item.icon} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <p className="itsc-ai-foot">
                  Looking to automate operations?{" "}
                  <a className="itsc-inline-link itsc-inline-link-light" href="/ai-development-company">
                    Explore our AI Development Services
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ INDUSTRIES ══════════ */}
        <section className="itsc-industries">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">Industries We Serve</p>
              <h2 className="itsc-h2">
                IT Solutions Tailored <em>for Your Sector</em>
              </h2>
            </div>
          </div>

          <div className="itsc-marquee-wrap">
            <div className="itsc-marquee">
              {[...industries, ...industries].map((ind, i) => (
                <div key={`${ind.name}-${i}`} className="itsc-industry-card">
                  <span className="itsc-industry-icon">
                    <i className={ind.icon} />
                  </span>
                  <span>{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW OUR IT SOLUTIONS HELP YOU GROW ══════════ */}
        <section className="itsc-section itsc-grow">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">Business Impact</p>
              <h2 className="itsc-h2">
                How Our IT Solutions <em>Help You Grow</em>
              </h2>
              <p className="itsc-lead">
                Our clients choose mTouch Labs to unlock measurable business outcomes — faster
                launches, leaner operations, and smarter decisions.
              </p>
            </div>

            <div className="itsc-grow-grid">
              {growthPoints.map((g) => (
                <div key={g.text} className="itsc-grow-card">
                  <span className="itsc-grow-icon">
                    <i className={g.icon} />
                  </span>
                  <span className="itsc-grow-text">{g.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PROCESS ══════════ */}
        <section className="itsc-section">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">Our Process</p>
              <h2 className="itsc-h2">
                A Structured <em>IT Delivery Process</em>
              </h2>
              <p className="itsc-lead">
                Every project on-time, on-budget, and built to last — backed by transparent
                communication at every milestone.
              </p>
            </div>

            <div className="itsc-process-grid">
              {processSteps.map((step) => (
                <div key={step.step} className="itsc-process-card">
                  <div className="itsc-process-num">{step.step}</div>
                  <h3 className="itsc-process-title">
                    <i className={step.icon} style={{ marginRight: 10, color: "var(--brand)" }} />
                    {step.title}
                  </h3>
                  <p className="itsc-process-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="itsc-global-strip">
              <div className="itsc-global-strip-header">
                <em>Global IT Solutions Partner</em>
                Serving businesses across 5 continents
              </div>
              <div className="itsc-global-strip-list">
                {countries.map((c) => (
                  <span key={c} className="itsc-country-chip">
                    <i className="fa-solid fa-location-dot" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ EEAT TRUST SIGNALS ══════════ */}
        <section className="itsc-section itsc-eeat">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">EEAT Trust Signals</p>
              <h2 className="itsc-h2">
                Built on Experience, Expertise, <em>Authority &amp; Trust</em>
              </h2>
            </div>

            <div className="itsc-eeat-grid">
              {eeatSignals.map((e) => (
                <div key={e.title} className="itsc-eeat-card">
                  <span className="itsc-eeat-icon">
                    <i className={e.icon} />
                  </span>
                  <h3 className="itsc-eeat-title">{e.title}</h3>
                  <p className="itsc-eeat-desc">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="itsc-section">
          <div className="itsc-container">
            <div className="itsc-header-center">
              <p className="itsc-eyebrow">FAQ</p>
              <h2 className="itsc-h2">
                Frequently Asked <em>Questions</em>
              </h2>
            </div>

            <div className="itsc-faq-list">
              {faqs.map((faq, i) => (
                <details key={i} className="itsc-faq-item">
                  <summary className="itsc-faq-q">
                    <span>{faq.q}</span>
                    <span className="itsc-faq-icon" aria-hidden="true">
                      <i className="fa-solid fa-plus" />
                    </span>
                  </summary>
                  <p className="itsc-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="itsc-cta">
          <div className="itsc-container">
            <div className="itsc-cta-bg">
              <div className="itsc-cta-inner">
                <p className="itsc-eyebrow itsc-eyebrow-light">Get Started Today</p>
                <h2 className="itsc-cta-h2">
                  Looking for a Reliable
                  <br />
                  IT Solutions Company?
                </h2>
                <p className="itsc-cta-sub">
                  Partner with mTouch Labs for scalable custom technology solutions built for
                  business growth — designed to perform, scale, and last.
                </p>
                <div className="itsc-cta-actions">
                  <a href="/contact-us" className="itsc-btn itsc-btn-cta">
                    <i className="fa-solid fa-paper-plane" />
                    Request a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
