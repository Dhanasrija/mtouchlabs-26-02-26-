import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import Script from "next/script";


export const metadata: Metadata = {
  title: "IT Solutions Company | End-to-End IT Services - mTouch Labs",
  description:
    "mTouch Labs is an IT solutions company offering software, cloud, DevOps, and support services to build and scale modern business systems.",
  keywords: [
    "IT solutions company",
    "IT services company",
    "enterprise IT solutions",
    "custom IT solutions",
    "cloud IT solutions",
  ].join(", "),
  alternates: {
    canonical: "https://www.mtouchlabs.com/it-solutions-company",
  },
  openGraph: {
    title: "IT Solutions Company - mTouch Labs",
    description:
      "End-to-end IT solutions including software, cloud, and DevOps services.",
    url: "https://www.mtouchlabs.com/it-solutions-company",
    siteName: "mTouch Labs",
    type: "website",
  },
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
        text: "An IT solutions company provides end-to-end technology services such as software development, cloud infrastructure, DevOps, and system integration to help businesses build and manage scalable digital systems.",
      },
    },
    {
      "@type": "Question",
      name: "What services are included in IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT solutions typically include custom software development, web and mobile applications, cloud services, API integration, DevOps, and ongoing technical support.",
      },
    },
    {
      "@type": "Question",
      name: "How do IT solutions help businesses grow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT solutions improve efficiency, reduce operational costs, enhance system performance, and enable businesses to scale with reliable and secure technology infrastructure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between IT services and IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IT services focus on specific technical tasks, while IT solutions provide complete, integrated systems that solve business challenges from development to deployment and support.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose mTouch Labs as an IT solutions company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs offers 14 plus years of experience, scalable technology expertise, and end-to-end IT solutions tailored for startups, enterprises, and government organizations.",
      },
    },
    {
      "@type": "Question",
      name: "Does mTouch Labs provide custom IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mTouch Labs delivers custom IT solutions designed to meet specific business requirements, ensuring flexibility, scalability, and long-term performance.",
      },
    },
    {
      "@type": "Question",
      name: "Do IT solutions include cloud and DevOps services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IT solutions include cloud infrastructure setup, migration, and DevOps practices such as continuous integration, deployment, and system monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "Does mTouch Labs offer IT support and maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mTouch Labs provides ongoing support, system maintenance, performance optimization, and technical assistance to ensure smooth business operations.",
      },
    },
    {
      "@type": "Question",
      name: "What industries benefit from IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries such as healthcare, fintech, e-commerce, logistics, education, and real estate benefit from IT solutions to improve operations and digital capabilities.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI used in IT solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI is used in IT solutions for automation, predictive analytics, chatbots, and intelligent workflows, helping businesses improve efficiency and decision-making.",
      },
    },
  ],
};

const services = [
  {
    icon: "⚙️",
    title: "Custom Software Development",
    desc: "Bespoke software engineered precisely to your workflow and scale requirements.",
  },
  {
    icon: "📱",
    title: "Web & Mobile Applications",
    desc: "Cross-platform apps built for performance, usability, and rapid iteration.",
  },
  {
    icon: "☁️",
    title: "Cloud Infrastructure",
    desc: "Resilient cloud environments — setup, migration, and ongoing management.",
  },
  {
    icon: "🔁",
    title: "DevOps & CI/CD",
    desc: "Automated pipelines that accelerate delivery and reduce release risk.",
  },
  {
    icon: "🔗",
    title: "API Development & Integration",
    desc: "Seamless connectivity between systems, platforms, and third-party services.",
  },
  {
    icon: "🛡️",
    title: "Maintenance & Support",
    desc: "Continuous monitoring, optimization, and expert technical assistance.",
  },
];

const stats = [
  { value: "14+", label: "Years of Expertise" },
  { value: "1500+", label: "Projects Delivered" },
  { value: "40+", label: "Global Clients" },
  { value: "99%", label: "Uptime Guarantee" },
];

const industries = [
  { name: "Healthcare", icon: "🏥" },
  { name: "Fintech", icon: "💳" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Logistics", icon: "🚚" },
  { name: "Education", icon: "🎓" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Government", icon: "🏛️" },
];

const processSteps = [
  {
    step: "01",
    title: "Requirement Understanding",
    desc: "Deep discovery sessions to map your technical landscape and business goals.",
  },
  {
    step: "02",
    title: "Solution Planning",
    desc: "Architect the right technology stack with clear timelines and milestones.",
  },
  {
    step: "03",
    title: "Development & Integration",
    desc: "Agile build cycles with transparent progress and iterative feedback loops.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    desc: "Rigorous QA, load testing, and performance tuning before every release.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Smooth, zero-downtime launches across cloud and on-premise environments.",
  },
  {
    step: "06",
    title: "Continuous Support",
    desc: "Proactive monitoring, updates, and expert assistance post-launch.",
  },
];

const faqs = [
  {
    q: "What does an IT solutions company do?",
    a: "An IT solutions company provides end-to-end technology services such as software development, cloud infrastructure, DevOps, and system integration to help businesses build and manage scalable digital systems.",
  },
  {
    q: "What services are included in IT solutions?",
    a: "IT solutions typically include custom software development, web and mobile applications, cloud services, API integration, DevOps, and ongoing technical support.",
  },
  {
    q: "How do IT solutions help businesses grow?",
    a: "IT solutions improve efficiency, reduce operational costs, enhance system performance, and enable businesses to scale with reliable and secure technology infrastructure.",
  },
  {
    q: "What is the difference between IT services and IT solutions?",
    a: "IT services focus on specific technical tasks, while IT solutions provide complete, integrated systems that solve business challenges from development to deployment and support.",
  },
  {
    q: "Why choose mTouch Labs as an IT solutions company?",
    a: "mTouch Labs offers 14+ years of experience, scalable technology expertise, and end-to-end IT solutions tailored for startups, enterprises, and government organizations.",
  },
  {
    q: "Does mTouch Labs provide custom IT solutions?",
    a: "Yes, mTouch Labs delivers custom IT solutions designed to meet specific business requirements, ensuring flexibility, scalability, and long-term performance.",
  },
  {
    q: "Do IT solutions include cloud and DevOps services?",
    a: "Yes, IT solutions include cloud infrastructure setup, migration, and DevOps practices such as continuous integration, deployment, and system monitoring.",
  },
  {
    q: "Does mTouch Labs offer IT support and maintenance?",
    a: "Yes, mTouch Labs provides ongoing support, system maintenance, performance optimization, and technical assistance to ensure smooth business operations.",
  },
  {
    q: "What industries benefit from IT solutions?",
    a: "Industries such as healthcare, fintech, e-commerce, logistics, education, and real estate benefit from IT solutions to improve operations and digital capabilities.",
  },
  {
    q: "How is AI used in IT solutions?",
    a: "AI is used in IT solutions for automation, predictive analytics, chatbots, and intelligent workflows, helping businesses improve efficiency and decision-making.",
  },
];

const whyPoints = [
  "14+ Years of Experience",
  "1500+ Projects Delivered",
  "Global Client Base",
  "Strong Expertise in AI, Cloud & Software",
  "End-to-End IT Ownership",
  "Dedicated Support & Maintenance",
];

export default function ITSolutionsPage() {
  return (
    <>
      {/* __SERVICE_JSONLD_INJECTED__ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "IT Solutions Company | End-to-End IT Services - mTouch Labs", "description": "mTouch Labs is an IT solutions company offering software, cloud, DevOps, and support services to build and scale modern business systems.", "url": "https://www.mtouchlabs.com/it-solutions-company", "provider": {"@type": "Organization", "name": "mTouch Labs", "url": "https://www.mtouchlabs.com", "logo": "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg"}, "areaServed": {"@type": "Country", "name": "Worldwide"}, "serviceType": "IT Solutions Company | End-to-End IT Services - mTouch Labs"}),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.mtouchlabs.com"}, {"@type": "ListItem", "position": 2, "name": "IT Solutions Company | End-to-End IT Services - mTouch Labs", "item": "https://www.mtouchlabs.com/it-solutions-company"}]}),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="its-page">
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="its-hero">
          <div className="its-hero__grid-bg" aria-hidden="true" />
          <div className="its-hero__glow its-hero__glow--a" aria-hidden="true" />
          <div className="its-hero__glow its-hero__glow--b" aria-hidden="true" />

          <div className="its-container">
            {/* <Breadcrumb /> */}

            <div className="its-hero__badge">
              <span className="its-hero__badge-dot" />
              IT Solutions Company
            </div>

            <h1 className="its-hero__h1">
              End-to-End IT Solutions
              <br />
              <span className="its-hero__h1-accent">Built to Scale</span>
            </h1>

            <p className="its-hero__sub">
              mTouch Labs delivers complete technology services — from software
              development to cloud infrastructure — designed to power modern
              businesses with 14+ years of proven expertise.
            </p>

            <div className="its-hero__ctas">
              <a href="/contact-us" className="its-btn its-btn--primary">
                Get in Touch
              </a>
              <a href="/portfolio" className="its-btn its-btn--ghost">
                View Projects
              </a>
            </div>

            {/* Floating stat chips */}
            <div className="its-hero__chips">
              {stats.map((s) => (
                <div key={s.label} className="its-hero__chip">
                  <span className="its-hero__chip-val">{s.value}</span>
                  <span className="its-hero__chip-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="its-hero__scroll-hint" aria-hidden="true">
            <span />
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────── */}
        <section className="its-section its-services" id="services">
          <div className="its-container">
            <div className="its-section__header">
              <p className="its-eyebrow">What We Offer</p>
              <h2 className="its-section__h2">
                Complete IT Solutions Under One Roof
              </h2>
              <p className="its-section__lead">
                A full spectrum of technology services — from development to
                deployment and ongoing support.
              </p>
            </div>

            <div className="its-services__grid">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="its-card its-card--service"
                  style={{ "--card-delay": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div className="its-card__icon-wrap">
                    <span className="its-card__icon">{s.icon}</span>
                  </div>
                  <h3 className="its-card__title">{s.title}</h3>
                  <p className="its-card__desc">{s.desc}</p>
                  <div className="its-card__line" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE ───────────────────────────────────── */}
        <section className="its-section its-why">
          <div className="its-why__bg" aria-hidden="true" />
          <div className="its-container its-why__inner">
            <div className="its-why__text">
              <p className="its-eyebrow">Why mTouch Labs</p>
              <h2 className="its-section__h2">
                Build, Manage & Scale
                <br />
                <em>with Confidence</em>
              </h2>
              <p className="its-section__lead">
                We focus on systems that are scalable, secure, performance-optimized,
                and easy to maintain — so you can focus entirely on your business.
              </p>
              <ul className="its-why__list">
                {whyPoints.map((pt) => (
                  <li key={pt} className="its-why__item">
                    <span className="its-why__check" aria-hidden="true">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>

            <div className="its-why__visual">
              <div className="its-orbit">
                <div className="its-orbit__center">
                  <span>mTouch</span>
                  <span>Labs</span>
                </div>
                {["Cloud", "AI", "DevOps", "Security", "Mobile", "APIs"].map(
                  (label, i) => (
                    <div
                      key={label}
                      className="its-orbit__node"
                      style={
                        {
                          "--orbit-angle": `${i * 60}deg`,
                          "--orbit-delay": `${i * 0.15}s`,
                        } as React.CSSProperties
                      }
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── AI SECTION ───────────────────────────────────── */}
        <section className="its-section its-ai">
          <div className="its-container">
            <div className="its-ai__inner">
              <div className="its-ai__badge-wrap">
                <span className="its-ai__badge">AI-Powered</span>
              </div>
              <h2 className="its-section__h2">
                AI-Enabled IT Solutions
              </h2>
              <p className="its-section__lead">
                We enhance traditional IT solutions with intelligent capabilities —
                automating workflows and delivering data-driven insights.
              </p>
              <div className="its-ai__grid">
                {[
                  { icon: "🤖", label: "Smart Automation Systems" },
                  { icon: "💬", label: "AI-Powered Chatbots" },
                  { icon: "📊", label: "Data-Driven Decision Tools" },
                  { icon: "⚡", label: "Intelligent Workflows" },
                ].map((item) => (
                  <div key={item.label} className="its-ai__pill">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ───────────────────────────────────── */}
        <section className="its-section its-industries">
          <div className="its-container">
            <div className="its-section__header">
              <p className="its-eyebrow">Industries We Serve</p>
              <h2 className="its-section__h2">
                IT Solutions Tailored for Your Sector
              </h2>
            </div>
            <div className="its-industries__track-wrap">
              <div className="its-industries__track" aria-hidden="false">
                {[...industries, ...industries].map((ind, i) => (
                  <div key={`${ind.name}-${i}`} className="its-industry__card">
                    <span className="its-industry__icon">{ind.icon}</span>
                    <span className="its-industry__name">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="its-section its-process">
          <div className="its-container">
            <div className="its-section__header">
              <p className="its-eyebrow">Our Approach</p>
              <h2 className="its-section__h2">IT Delivery Process</h2>
              <p className="its-section__lead">
                A structured methodology that keeps every project on-time, on-budget,
                and built for long-term success.
              </p>
            </div>

            <div className="its-process__grid">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="its-process__step"
                  style={{ "--step-delay": `${i * 0.1}s` } as React.CSSProperties}
                >
                  <div className="its-process__num">{step.step}</div>
                  {i < processSteps.length - 1 && (
                    <div className="its-process__connector" aria-hidden="true" />
                  )}
                  <h3 className="its-process__title">{step.title}</h3>
                  <p className="its-process__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        <section className="its-section its-faq">
          <div className="its-container">
            <div className="its-section__header">
              <p className="its-eyebrow">FAQ</p>
              <h2 className="its-section__h2">Frequently Asked Questions</h2>
            </div>
            <div className="its-faq__list">
              {faqs.map((faq, i) => (
                <details key={i} className="its-faq__item">
                  <summary className="its-faq__q">
                    <span>{faq.q}</span>
                    <span className="its-faq__icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="its-faq__a">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="its-cta">
          <div className="its-cta__bg" aria-hidden="true" />
          <div className="its-container its-cta__inner">
            <p className="its-eyebrow its-eyebrow--light">Get Started Today</p>
            <h2 className="its-cta__h2">
              Looking for a Dependable
              <br />
              IT Solutions Company?
            </h2>
            <p className="its-cta__sub">
              mTouch Labs delivers technology solutions that are built to perform,
              scale, and last.
            </p>
            <a href="/contact-us" className="its-btn its-btn--cta">
              Get in Touch with Our Experts
            </a>
          </div>
        </section>
      </main>
    </>
  );
}