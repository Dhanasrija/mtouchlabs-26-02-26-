import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Scalable Solutions",
  description:
    "Build scalable custom software with mTouch Labs. Expert software development company delivering SaaS, enterprise, and AI-powered solutions.",
  keywords: [
    "custom software development company",
    "custom software development services",
    "enterprise software development",
    "SaaS development company",
    "software development company",
    "custom software solutions",
    "AI software development",
  ],
  metadataBase: new URL("https://www.mtouchlabs.com"),
  alternates: {
    canonical: "/custom-software-development-company",
  },
  openGraph: {
    title: "Custom Software Development Company | Scalable Solutions",
    description:
      "Custom-built software solutions for startups and enterprises. Scalable, secure, and AI-powered development services.",
    url: "https://www.mtouchlabs.com/custom-software-development-company",
    siteName: "mTouch Labs",
    images: [
      {
        url: "/images/custom-software-development.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Scalable Solutions",
    description:
      "Build custom software for your business with scalable architecture and AI-powered capabilities.",
    images: ["/images/custom-software-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Software Development Company",
  description:
    "mTouch Labs builds scalable custom software, SaaS platforms, enterprise systems, and AI-powered solutions tailored to business needs.",
  url: "https://www.mtouchlabs.com/custom-software-development-company",
  provider: {
    "@type": "Organization",
    name: "mTouch Labs",
    url: "https://www.mtouchlabs.com",
    logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
  },
  areaServed: { "@type": "Country", name: "Worldwide" },
  serviceType: "Custom Software Development Company",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Custom Software Development Company",
      item: "https://www.mtouchlabs.com/custom-software-development-company",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software development involves building software tailored to specific business needs instead of using generic pre-built solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How much does custom software development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on complexity, features, and integrations. At mTouch Labs, we provide tailored estimates based on your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "When should I choose custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom software is ideal when your business has unique workflows, requires scalability, or needs deep integration with other systems.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build custom software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines vary from a few weeks to several months depending on the complexity of the project.",
      },
    },
    {
      "@type": "Question",
      name: "Do you build SaaS platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, mTouch Labs develops scalable SaaS platforms with cloud-based architecture and subscription models.",
      },
    },
    {
      "@type": "Question",
      name: "Why choose mTouch Labs for custom software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "mTouch Labs focuses on building scalable, business-oriented software solutions tailored to your needs. We combine technical expertise, modern technologies like AI, and a transparent development process to deliver long-term value.",
      },
    },
  ],
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="sd-hero"><div className="sd-hero__inner">
        <Breadcrumb pagePath="/custom-software-development-company" />
        <h1 className="sd-hero__title">Custom <span className="sd-hero__title-accent">Software</span> Development Company</h1>
        <p className="sd-hero__subtitle">Tailored Software Solutions Engineered for Business Growth</p>
        <p className="sd-hero__desc">Off-the-shelf software can take you only so far. Every growing business eventually faces rigid workflows, unnecessary features, or tools that don&apos;t adapt to how the business actually operates. That&apos;s where custom software becomes essential. At mTouch Labs, we design and develop custom software solutions built specifically for your business processes, goals, and scalability needs, extending seamlessly into our <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web development services</a> where needed.</p>
      </div></section>

      <section className="sd-about"><div className="sd-container"><div className="sd-about__grid">
        <div className="sd-about__content sd-animate--left">
          <h2 className="sd-about__heading">Why Businesses Choose <span className="sd-text-accent">Custom Software</span></h2>
          <p className="sd-about__text">Many companies start with ready-made tools because they&apos;re quick to adopt. But as operations grow, these tools often become bottlenecks rather than solutions. Custom software solves this by aligning technology with your exact needs.</p>
          <p className="sd-about__text">Custom software makes sense when your workflows are unique and not supported by standard tools, when you need integrations across multiple systems, when scalability is a priority, when data control and security are critical, or when you want to build a product, not just use one — including native and hybrid <a href="/mobile-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>mobile app development</a>.</p>
          <p className="sd-about__text">Instead of adapting your business to software, custom solutions adapt to you. Combined with our{" "}
            <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design capabilities</a>, we deliver software that is both powerful and intuitive.
          </p>
        </div>
        <div className="sd-stats sd-animate--right">
          <div className="sd-stat"><span className="sd-stat__icon">⚙️</span><span className="sd-stat__label">Process Automation</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">☁️</span><span className="sd-stat__label">Cloud-Native Apps</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">🔗</span><span className="sd-stat__label">System Integration</span></div>
          <div className="sd-stat"><span className="sd-stat__icon">🔒</span><span className="sd-stat__label">Security-First</span></div>
        </div>
      </div></div></section>

      <section className="sd-whoweare"><div className="sd-container"><div className="sd-whoweare__grid">
        <div className="sd-whoweare__stats sd-animate--left">
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">1500+</span><span className="sd-stat__label">Projects Delivered</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">14+</span><span className="sd-stat__label">Years Experience</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">3</span><span className="sd-stat__label">Cloud Platforms</span></div>
          <div className="sd-stat sd-stat--dark"><span className="sd-stat__number">GDPR</span><span className="sd-stat__label">Compliance Ready</span></div>
        </div>
        <div className="sd-whoweare__content sd-animate--right">
          <h2 className="sd-whoweare__heading">Custom Software vs <span className="sd-text-accent">Off-the-Shelf</span></h2>
          <p className="sd-whoweare__text">One of the most common questions businesses ask is whether custom software is worth the investment. Our guide on <a href="/blog" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>custom software vs off-the-shelf</a> breaks down the trade-offs in detail.</p>
          <ul className="sd-checklist">
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Off-the-shelf: faster to start, lower initial cost, limited flexibility, often includes unnecessary features</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Custom: built specifically for your needs, fully scalable, higher upfront investment, better long-term efficiency</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Role-based access control &amp; secure authentication</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Data encryption at rest &amp; in transit</span></li>
            <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span>Microservices &amp; auto-scaling cloud architecture on AWS, Azure &amp; GCP</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="sd-services"><div className="sd-container">
        <div className="sd-services__header sd-animate"><h2 className="sd-services__title">Our Custom <span className="sd-text-accent">Software Development Services</span></h2><p className="sd-services__subtitle">End-to-end services tailored to your business goals</p></div>
        <div className="sd-services__grid sd-stagger">
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">01</span><h4 className="sd-service-card__title">Custom Software Development</h4><p className="sd-service-card__text">We design and build software solutions from scratch, tailored to your workflows, users, and objectives, including cross-platform builds via our <a href="/flutter-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Flutter app development</a> team.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">02</span><h4 className="sd-service-card__title">Enterprise Software Development</h4><p className="sd-service-card__text">We develop scalable <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise systems</a> that support large-scale operations, complex processes, and high data volumes.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">03</span><h4 className="sd-service-card__title">SaaS Product Development</h4><p className="sd-service-card__text">We build cloud-based <a href="/saas-development-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>SaaS platforms</a> with subscription models, multi-user access, and scalable architecture.</p></div>
          <div className="sd-service-card sd-animate--scale"><span className="sd-service-card__badge">04</span><h4 className="sd-service-card__title">API Development &amp; Integration</h4><p className="sd-service-card__text">We connect your systems, enabling seamless data flow and automation across platforms.</p></div>
          <div className="sd-service-card sd-service-card--wide sd-animate--scale"><span className="sd-service-card__badge">05</span><h4 className="sd-service-card__title">Software Modernization</h4><p className="sd-service-card__text">We upgrade legacy systems to modern, scalable, and secure architectures. <a href="/generative-ai-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Generative AI capabilities</a> are integrated where they add value — automated workflows, predictive analytics, intelligent data processing, and smart recommendations.</p></div>
        </div>
      </div></section>

      <section className="sd-commitment"><div className="sd-container"><div className="sd-commitment__inner sd-animate">
        <h2 className="sd-commitment__heading">AI in <span className="sd-text-accent">Custom Software Development</span></h2>
        <p className="sd-commitment__text">Software is evolving from static systems into intelligent platforms. At mTouch Labs, we integrate AI-driven capabilities into custom software to make it smarter, faster, and more adaptive. Our approach overlaps closely with our <a href="/generative-ai-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>generative AI development</a> work where value is clearly defined.</p>
        <ul className="sd-checklist">
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Automated workflows</strong> &mdash; eliminating repetitive tasks and accelerating operations</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Predictive analytics</strong> &mdash; surfacing insights from historical and real-time data</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Intelligent data processing</strong> &mdash; extracting structure from unstructured sources</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Personalized experiences</strong> &mdash; content and interfaces that adapt to each user</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Smart recommendations</strong> &mdash; context-aware suggestions that drive engagement</span></li>
        </ul>
      </div></div></section>

      <section className="sd-industries"><div className="sd-container">
        <div className="sd-services__header sd-animate"><h2 className="sd-services__title">Industries <span className="sd-text-accent">We Serve</span></h2><p className="sd-services__subtitle">Custom software built for sector-specific challenges</p></div>
        <div className="sd-services__grid sd-stagger">
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">eCommerce</h4><p className="sd-service-card__text">Storefronts, catalog systems, and checkout flows engineered for scale, conversion, and operational efficiency.</p></div>
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">Healthcare</h4><p className="sd-service-card__text">HIPAA-aligned patient portals, EHR integrations, telehealth tooling, and clinical workflow systems.</p></div>
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">Finance</h4><p className="sd-service-card__text">Secure fintech platforms, payment gateways, reconciliation tools, and compliance-first data pipelines.</p></div>
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">Education</h4><p className="sd-service-card__text">Learning management systems, assessment platforms, and student engagement tools for institutions of every size.</p></div>
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">Logistics</h4><p className="sd-service-card__text">Fleet tracking, warehouse management, route optimization, and supply-chain visibility platforms.</p></div>
          <div className="sd-industry sd-animate--scale"><h4 className="sd-service-card__title">Startups &amp; SMBs</h4><p className="sd-service-card__text">MVPs, product pivots, and rapid iterations that help early-stage teams ship and validate quickly.</p></div>
        </div>
      </div></section>

      <section className="sd-why"><div className="sd-container"><div className="sd-why__inner sd-animate">
        <h2 className="sd-why__heading">Cost of <span className="sd-text-accent">Custom Software Development</span></h2>
        <p className="sd-why__text">One of the most common questions businesses have is how much custom software costs. The honest answer: it depends on what you&apos;re building. Unlike off-the-shelf pricing, custom software is shaped by your specific workflows, integrations, and scale targets.</p>
        <ul className="sd-checklist">
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Complexity</strong> &mdash; number of features, business rules, and user roles</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Integrations</strong> &mdash; third-party systems, internal APIs, and legacy connectors</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Scalability</strong> &mdash; expected user load, data volume, and future growth</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Design</strong> &mdash; UI polish, interaction depth, and brand expression</span></li>
          <li className="sd-checklist__item"><span className="sd-checklist__icon">✓</span><span><strong>Timeline</strong> &mdash; delivery speed, team size, and release cadence</span></li>
        </ul>
        <p className="sd-why__text">A simple internal tool can launch in a few weeks, while a complex enterprise SaaS platform may take several months. We provide a clear estimate based on scope so you can plan with confidence.</p>
      </div></div></section>

      <section className="sd-commitment"><div className="sd-container"><div className="sd-commitment__inner sd-animate">
        <h2 className="sd-commitment__heading">Benefits of <span className="sd-text-accent">Custom Software</span></h2>
        <p className="sd-commitment__text">Custom software isn&apos;t just about building something &ldquo;different&rdquo; &mdash; it&apos;s about building something that gives your business a real advantage.</p>
        <div className="sd-reliable__pillars">
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label"><strong>Tailored functionality</strong> designed around your exact workflows</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label"><strong>Improved efficiency</strong> by removing manual, repetitive work</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label"><strong>Better scalability</strong> as users, data, and features grow</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label"><strong>Enhanced security</strong> with controls tuned to your risk profile</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label"><strong>Competitive advantage</strong> from capabilities competitors can&apos;t copy</span></div>
        </div>
      </div></div></section>

      <section className="sd-tech"><div className="sd-container">
        <div className="sd-services__header sd-animate"><h2 className="sd-services__title">Technologies <span className="sd-text-accent">We Use</span></h2><p className="sd-services__subtitle">A proven stack chosen to match the problem, not the trend</p></div>
        <div className="sd-tech__tags sd-animate">
          <span className="sd-tag">React</span>
          <span className="sd-tag">Next.js</span>
          <span className="sd-tag">Node.js</span>
          <span className="sd-tag">TypeScript</span>
          <span className="sd-tag">Python</span>
          <span className="sd-tag">Django</span>
          <span className="sd-tag">.NET</span>
          <span className="sd-tag">Java</span>
          <span className="sd-tag">PostgreSQL</span>
          <span className="sd-tag">MongoDB</span>
          <span className="sd-tag">Redis</span>
          <span className="sd-tag">AWS</span>
          <span className="sd-tag">Azure</span>
          <span className="sd-tag">GCP</span>
          <span className="sd-tag">Docker</span>
          <span className="sd-tag">Kubernetes</span>
          <span className="sd-tag">GraphQL</span>
          <span className="sd-tag">REST APIs</span>
        </div>
      </div></section>

      <section className="sd-delivery"><div className="sd-container">
        <h2 className="sd-delivery__heading sd-animate">Our Development <span className="sd-text-accent">Approach</span></h2>
        <p className="sd-delivery__text">We don&apos;t just build software — we build systems that are designed to last. Wondering about <a href="/blog" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>software development cost</a>? Get a tailored estimate.</p>
        <div className="sd-delivery__steps">
          <div className="sd-step"><span className="sd-step__circle">Understanding Business</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Defining Solution</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Designing UX</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Development</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Testing</span></div><span className="sd-step__arrow">→</span>
          <div className="sd-step"><span className="sd-step__circle">Deployment &amp; Support</span></div>
        </div>
      </div></section>

      <section className="sd-reliable"><div className="sd-container"><div className="sd-reliable__inner sd-animate">
        <h2 className="sd-reliable__heading">Why Choose <span className="sd-text-accent">mTouch Labs</span>?</h2>
        <p className="sd-reliable__text">Choosing the right development partner is just as important as choosing the technology. Our custom software solutions are built for eCommerce, healthcare, finance, education, and logistics — each tailored to industry-specific challenges. Explore our <a href="/portfolio" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>portfolio</a> for delivered examples.</p>
        <div className="sd-reliable__pillars">
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Solutions aligned with business goals</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Scalable and maintainable systems</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Modern technologies like AI integrated</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Transparent process throughout</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Long-term support partnership</span></div>
          <div className="sd-pillar"><span className="sd-pillar__dot"></span><span className="sd-pillar__label">Tailored functionality, improved efficiency, better scalability</span></div>
        </div>
      </div></div></section>

      <section className="sd-services"><div className="sd-container">
        <div className="sd-services__header sd-animate"><h2 className="sd-services__title">Explore Related <span className="sd-text-accent">Services</span></h2><p className="sd-services__subtitle">Keep exploring complementary capabilities from our team</p></div>
        <div className="sd-services__grid sd-stagger">
          <div className="sd-service-card sd-animate--scale"><h4 className="sd-service-card__title"><a href="/web-development-company" style={{color: "inherit", textDecoration: "none"}}>Web Development Services</a></h4><p className="sd-service-card__text">High-performance websites and web apps engineered for speed, SEO, and scale.</p></div>
          <div className="sd-service-card sd-animate--scale"><h4 className="sd-service-card__title"><a href="/mobile-app-development-company" style={{color: "inherit", textDecoration: "none"}}>Mobile App Development</a></h4><p className="sd-service-card__text">Native and hybrid apps for iOS and Android, built for performance and retention.</p></div>
          <div className="sd-service-card sd-animate--scale"><h4 className="sd-service-card__title"><a href="/generative-ai-development-company" style={{color: "inherit", textDecoration: "none"}}>Generative AI Development</a></h4><p className="sd-service-card__text">LLM-powered assistants, copilots, and AI features integrated into your products.</p></div>
          <div className="sd-service-card sd-animate--scale"><h4 className="sd-service-card__title"><a href="/ui-ux-design-company" style={{color: "inherit", textDecoration: "none"}}>UI/UX Design</a></h4><p className="sd-service-card__text">Research-driven product design that turns complex workflows into intuitive experiences.</p></div>
        </div>
      </div></section>

      <section className="sd-faq"><div className="sd-container"><div className="sd-faq__wrapper">
        <h3 className="sd-faq__heading sd-animate">Frequently Asked <span className="sd-text-accent">Questions</span></h3>
        <p className="sd-faq__subtext">Everything about custom software development</p>
        <div className="sd-faq__list">
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>What is custom software development?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Custom software development involves building software tailored to specific business needs rather than using generic, pre-built solutions.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>How much does custom software development cost?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>The cost depends on complexity, features, and integrations. At mTouch Labs, we provide tailored estimates based on your requirements.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>When should I choose custom software over off-the-shelf?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>You should choose custom software when your business has unique workflows, scalability needs, or requires deep integrations.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>How long does it take to develop custom software?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Development timelines vary from a few weeks for simple solutions to several months for complex systems.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>Do you build SaaS platforms?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>Yes, mTouch Labs develops scalable SaaS platforms with cloud-based architecture and subscription models.</p></div></details>
          <details className="sd-faq__item"><summary className="sd-faq__question"><span>Why choose mTouch Labs for custom software development?</span><span className="sd-faq__chevron"></span></summary><div className="sd-faq__answer"><p>mTouch Labs focuses on building scalable, business-oriented software solutions tailored to your needs. We combine technical expertise, modern technologies like AI, and a transparent development process to deliver long-term value through our{" "}
            <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>ongoing maintenance and support services</a>.
          </p></div></details>
        </div>
      </div></div></section>

      <section className="sd-cta"><div className="sd-container"><div className="sd-cta__inner sd-animate--scale">
        <h2 className="sd-cta__heading">Let&apos;s Build <span className="sd-text-accent">Software That Works</span> for You</h2>
        <p className="sd-cta__text">If your current tools are limiting your growth, it&apos;s time to move toward a solution built specifically for your business. <a href="/contact-us" style={{color: "#ffffff", textDecoration: "underline", fontWeight: 600}}>Contact us</a> and let&apos;s turn your idea into scalable, reliable software.</p>
        <button type="button" className="sd-cta__button js-open-modal">Start Your Project</button>
      </div></div></section>
    </>
  );
}
