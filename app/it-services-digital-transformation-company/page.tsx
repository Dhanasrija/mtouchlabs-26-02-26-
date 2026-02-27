import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Services & Digital Transformation Company | mTouch Labs",
  description:
    "mTouch Labs delivers scalable IT services, cloud solutions, AI integration, and enterprise digital transformation for sustainable business growth.",
  alternates: {
    canonical:
      "https://www.mtouchlabs.com/it-services-digital-transformation-company",
  },
  openGraph: {
    title: "IT Services & Digital Transformation Company | mTouch Labs",
    description:
      "mTouch Labs delivers scalable IT services, cloud solutions, AI integration, and enterprise digital transformation for sustainable business growth.",
    type: "website",
    url: "https://www.mtouchlabs.com/it-services-digital-transformation-company",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services & Digital Transformation Company | mTouch Labs",
    description:
      "Scalable IT services and enterprise digital transformation solutions by mTouch Labs.",
  },
};

export default function Page() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="co-hero">
        <div className="co-hero__inner">
          <p className="co-hero__breadcrumb">
            Home / About us /{" "}
            <span className="co-hero__breadcrumb-active">Company Overview</span>
          </p>
          <h1 className="co-hero__title">
            Trusted <span className="co-hero__title-accent">IT Services</span>{" "}
            &amp; Digital Transformation Company
          </h1>
          <p className="co-hero__subtitle">Delivering Measurable Results</p>
          <p className="co-hero__desc">
            Enterprise-Grade IT Services Backed by Real-World Experience
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="co-about">
        <div className="co-container">
          <div className="co-about__grid">
            <div className="co-about__content">
              <h2 className="co-about__heading">
                <span className="co-text-accent">Performance-Driven</span>
                <br />
                IT Solutions
              </h2>
              <p className="co-about__text">
                mTouch Labs is a performance-driven IT Services and Digital
                Transformation Company helping startups, SMEs, and enterprises
                build scalable digital ecosystems.
              </p>
              <p className="co-about__text">
                With proven experience in delivering secure, high-performance
                technology solutions, we specialize in transforming complex
                business challenges into efficient, automated, and
                growth-oriented systems.
              </p>
              <p className="co-about__text">
                Our work spans across web, mobile, cloud, AI, CRM, and digital
                growth engineering — enabling businesses to modernize operations
                and increase measurable ROI.
              </p>
            </div>
            <div className="co-stats">
              <div className="co-stat">
                <span className="co-stat__number">14+</span>
                <span className="co-stat__label">Years of Experience</span>
              </div>
              <div className="co-stat">
                <span className="co-stat__number">1500+</span>
                <span className="co-stat__label">Projects Delivered</span>
              </div>
              <div className="co-stat">
                <span className="co-stat__number">1200+</span>
                <span className="co-stat__label">Global Clients</span>
              </div>
              <div className="co-stat">
                <span className="co-stat__number">150+</span>
                <span className="co-stat__label">Tech Experts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE SECTION ===== */}
      <section className="co-whoweare">
        <div className="co-container">
          <div className="co-whoweare__grid">
            <div className="co-whoweare__stats">
              <div className="co-stat co-stat--dark">
                <span className="co-stat__number">6+</span>
                <span className="co-stat__label">Industries Served</span>
              </div>
              <div className="co-stat co-stat--dark">
                <span className="co-stat__number">98%</span>
                <span className="co-stat__label">Client Retention Rate</span>
              </div>
              <div className="co-stat co-stat--dark">
                <span className="co-stat__number">3x</span>
                <span className="co-stat__label">Faster Time to Market</span>
              </div>
              <div className="co-stat co-stat--dark">
                <span className="co-stat__number">24/7</span>
                <span className="co-stat__label">Technical Support</span>
              </div>
            </div>
            <div className="co-whoweare__content">
              <h2 className="co-whoweare__heading">
                Who <span className="co-text-accent">We Are</span>
              </h2>
              <p className="co-whoweare__text">
                mTouch Labs is a technology consulting and engineering company
                built on execution excellence, innovation, and long-term client
                partnerships.
              </p>
              <p className="co-whoweare__text">
                Over the years, our team has delivered solutions across
                industries including eCommerce, FinTech, Healthcare, Real
                Estate, SaaS, and Manufacturing — focusing on scalability,
                automation, and digital optimization.
              </p>
              <p className="co-whoweare__text">
                As a modern Digital Transformation Company, we do not simply
                deploy tools — we redesign digital processes for performance,
                efficiency, and sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE IT SERVICES SECTION ===== */}
      <section className="co-services">
        <div className="co-container">
          <div className="co-services__header">
            <h2 className="co-services__title">
              Our Core <span className="co-text-accent">IT Services</span>
            </h2>
          </div>

          <div className="co-services__grid">
            <div className="co-service-card">
              <span className="co-service-card__badge">01</span>
              <h3 className="co-service-card__title">
                Custom Software Development
              </h3>
              <p className="co-service-card__text">
                We design and develop scalable enterprise applications using
                modern frameworks and cloud-native architecture.
              </p>
              <div className="co-service-card__tags">
                <span className="co-tag">React</span>
                <span className="co-tag">Next.js</span>
                <span className="co-tag">Angular</span>
                <span className="co-tag">Node.js</span>
                <span className="co-tag">Python</span>
                <span className="co-tag">AWS</span>
                <span className="co-tag">Docker</span>
                <span className="co-tag">Kubernetes</span>
              </div>
              <ul className="co-service-card__list">
                <li>Secure architecture</li>
                <li>Performance optimization</li>
                <li>API-driven integrations</li>
                <li>Long-term maintainability</li>
              </ul>
            </div>

            <div className="co-service-card">
              <span className="co-service-card__badge">02</span>
              <h3 className="co-service-card__title">
                Mobile App Development
              </h3>
              <p className="co-service-card__text">
                High-performance iOS and Android applications designed for
                usability, speed, and scalability.
              </p>
              <ul className="co-service-card__list">
                <li>Cross-platform architecture</li>
                <li>User-first UI/UX design</li>
                <li>Backend integration</li>
                <li>App performance monitoring</li>
              </ul>
            </div>

            <div className="co-service-card">
              <span className="co-service-card__badge">03</span>
              <h3 className="co-service-card__title">
                Cloud &amp; DevOps Services
              </h3>
              <p className="co-service-card__text">
                We help businesses migrate, optimize, and manage secure cloud
                infrastructure as part of our advanced IT services.
              </p>
              <ul className="co-service-card__list">
                <li>Cloud migration strategy</li>
                <li>Infrastructure automation</li>
                <li>CI/CD implementation</li>
                <li>Performance monitoring</li>
                <li>Cost optimization</li>
              </ul>
            </div>

            <div className="co-service-card">
              <span className="co-service-card__badge">04</span>
              <h3 className="co-service-card__title">
                Enterprise Digital Transformation
              </h3>
              <p className="co-service-card__text">
                We focus on reducing operational friction while improving speed,
                visibility, and scalability.
              </p>
              <ul className="co-service-card__list">
                <li>Digital maturity assessment</li>
                <li>Legacy system modernization</li>
                <li>Workflow automation</li>
                <li>AI-powered analytics integration</li>
                <li>Performance measurement &amp; optimization</li>
              </ul>
            </div>

            <div className="co-service-card">
              <span className="co-service-card__badge">05</span>
              <h3 className="co-service-card__title">
                AI, Automation &amp; Data Solutions
              </h3>
              <p className="co-service-card__text">
                We integrate AI-driven solutions that enhance decision-making
                and reduce manual processes.
              </p>
              <ul className="co-service-card__list">
                <li>Business Intelligence dashboards</li>
                <li>Predictive analytics</li>
                <li>Process automation</li>
                <li>CRM &amp; ERP integrations</li>
              </ul>
            </div>

            <div className="co-service-card">
              <span className="co-service-card__badge">06</span>
              <h3 className="co-service-card__title">
                Salesforce &amp; CRM Solutions
              </h3>
              <p className="co-service-card__text">
                We provide CRM implementation, customization, and automation
                strategies to improve sales pipelines and customer lifecycle
                management.
              </p>
            </div>

            <div className="co-service-card co-service-card--wide">
              <span className="co-service-card__badge">07</span>
              <h3 className="co-service-card__title">
                Digital Marketing &amp; Growth Engineering
              </h3>
              <p className="co-service-card__text">
                Beyond development, we support measurable growth through
                strategic marketing and analytics.
              </p>
              <ul className="co-service-card__list co-service-card__list--horizontal">
                <li>SEO strategy</li>
                <li>Performance marketing</li>
                <li>Conversion rate optimization</li>
                <li>Analytics tracking &amp; reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY APPROACH SECTION ===== */}
      <section className="co-delivery">
        <div className="co-container">
          <h2 className="co-delivery__heading">
            Our Proven{" "}
            <span className="co-text-accent">Delivery Approach</span>
          </h2>
          <p className="co-delivery__text">
            We follow a structured execution model that ensures transparency,
            accountability, and performance-driven outcomes.
          </p>
          <div className="co-delivery__steps">
            <div className="co-step">
              <span className="co-step__circle">Discovery</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Strategy</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Architecture</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Development</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Testing</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Deployment</span>
            </div>
            <span className="co-step__arrow">→</span>
            <div className="co-step">
              <span className="co-step__circle">Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="co-why">
        <div className="co-container">
          <div className="co-why__grid">
            <div className="co-why__content">
              <h2 className="co-why__heading">
                Why Businesses Choose{" "}
                <span className="co-text-accent">mTouch Labs</span>
              </h2>
              <p className="co-why__text">
                Our focus is not just launching products — but building digital
                systems that evolve with business growth.
              </p>
              <ul className="co-checklist">
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>
                    Strategic alignment between technology and business KPIs
                  </span>
                </li>
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>Scalable and secure architecture</span>
                </li>
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>Agile project execution</span>
                </li>
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>Long-term technical support</span>
                </li>
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>Transparent communication</span>
                </li>
                <li className="co-checklist__item">
                  <span className="co-checklist__icon">✓</span>
                  <span>Data-driven performance optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="co-industries">
        <div className="co-container">
          <h2 className="co-industries__heading">
            Industries <span className="co-text-accent">We Serve</span>
          </h2>
          <div className="co-industries__grid">
            <div className="co-industry">
              <span className="co-industry__icon">🛒</span>
              <h3 className="co-industry__title">eCommerce &amp; Retail</h3>
            </div>
            <div className="co-industry">
              <span className="co-industry__icon">💰</span>
              <h3 className="co-industry__title">
                Financial Services &amp; FinTech
              </h3>
            </div>
            <div className="co-industry">
              <span className="co-industry__icon">🏥</span>
              <h3 className="co-industry__title">
                Healthcare &amp; HealthTech
              </h3>
            </div>
            <div className="co-industry">
              <span className="co-industry__icon">🏗️</span>
              <h3 className="co-industry__title">Real Estate &amp; PropTech</h3>
            </div>
            <div className="co-industry">
              <span className="co-industry__icon">🏭</span>
              <h3 className="co-industry__title">
                Manufacturing &amp; Supply Chain
              </h3>
            </div>
            <div className="co-industry">
              <span className="co-industry__icon">🚀</span>
              <h3 className="co-industry__title">
                SaaS &amp; Startup Ecosystems
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT MAKES US RELIABLE ===== */}
      <section className="co-reliable">
        <div className="co-container">
          <div className="co-reliable__inner">
            <h2 className="co-reliable__heading">
              What Makes mTouch Labs a Reliable{" "}
              <span className="co-text-accent">Digital Transformation</span>{" "}
              Company?
            </h2>
            <p className="co-reliable__text">
              A true digital transformation partner must deliver measurable
              outcomes. mTouch Labs integrates strategy, engineering, and
              analytics to ensure transformation initiatives produce real
              operational improvements.
            </p>
            <div className="co-reliable__pillars">
              <div className="co-pillar">
                <span className="co-pillar__dot"></span>
                <span className="co-pillar__label">
                  Measurable business impact
                </span>
              </div>
              <div className="co-pillar">
                <span className="co-pillar__dot"></span>
                <span className="co-pillar__label">Technical depth</span>
              </div>
              <div className="co-pillar">
                <span className="co-pillar__dot"></span>
                <span className="co-pillar__label">Process optimization</span>
              </div>
              <div className="co-pillar">
                <span className="co-pillar__dot"></span>
                <span className="co-pillar__label">Secure infrastructure</span>
              </div>
              <div className="co-pillar">
                <span className="co-pillar__dot"></span>
                <span className="co-pillar__label">Long-term scalability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION (Native details/summary — Pure SSR) ===== */}
      <section className="co-faq">
        <div className="co-container">
          <div className="co-faq__wrapper">
            <h2 className="co-faq__heading">Frequently Asked Questions</h2>

            <div className="co-faq__list">
              <details className="co-faq__item">
                <summary className="co-faq__question">
                  What IT services does mTouch Labs provide?
                </summary>
                <div className="co-faq__answer">
                  <p>
                    mTouch Labs provides software development, cloud
                    infrastructure management, mobile app development, enterprise
                    modernization, AI integration, CRM implementation, and
                    digital growth services.
                  </p>
                </div>
              </details>

              <details className="co-faq__item">
                <summary className="co-faq__question">
                  How does mTouch Labs approach digital transformation?
                </summary>
                <div className="co-faq__answer">
                  <p>
                    We evaluate current digital systems, identify
                    inefficiencies, implement scalable technologies, automate
                    workflows, and continuously monitor performance to ensure
                    measurable business improvements.
                  </p>
                </div>
              </details>

              <details className="co-faq__item">
                <summary className="co-faq__question">
                  Is mTouch Labs suitable for enterprise-level projects?
                </summary>
                <div className="co-faq__answer">
                  <p>
                    Yes. Our IT services are designed to support enterprise-grade
                    security, scalability, and integration requirements.
                  </p>
                </div>
              </details>

              <details className="co-faq__item">
                <summary className="co-faq__question">
                  What industries does mTouch Labs serve?
                </summary>
                <div className="co-faq__answer">
                  <p>
                    We serve eCommerce, FinTech, Healthcare, Real Estate, SaaS,
                    Manufacturing, and Startup ecosystems — delivering tailored
                    digital solutions for each sector.
                  </p>
                </div>
              </details>

              <details className="co-faq__item">
                <summary className="co-faq__question">
                  How do I get started with mTouch Labs?
                </summary>
                <div className="co-faq__answer">
                  <p>
                    Simply reach out through our contact page. Our team will
                    schedule a discovery call to understand your requirements,
                    assess your digital maturity, and propose a tailored
                    strategy.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT SECTION ===== */}
      <section className="co-commitment">
        <div className="co-container">
          <div className="co-commitment__inner">
            <h2 className="co-commitment__heading">
              Our <span className="co-text-accent">Commitment</span>
            </h2>
            <p className="co-commitment__text">
              Our mission is to be a trusted global IT Services and Digital
              Transformation Company delivering innovative, secure, and scalable
              technology solutions that drive sustainable business success.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="co-cta">
        <div className="co-container">
          <div className="co-cta__inner">
            <h2 className="co-cta__heading">
              Start Your Digital{" "}
              <span className="co-text-accent">Transformation</span> Journey
            </h2>
            <p className="co-cta__text">
              If your organization is ready to modernize operations, improve
              efficiency, and scale confidently, mTouch Labs is your strategic
              technology partner.
            </p>
            <Link href="/contact-us" className="co-cta__button">
              Connect With Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "IT Services & Digital Transformation Company | mTouch Labs",
//   description:
//     "mTouch Labs delivers scalable IT services, cloud solutions, AI integration, and enterprise digital transformation for sustainable business growth.",
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/it-services-digital-transformation-company",
//   },
//   openGraph: {
//     title: "IT Services & Digital Transformation Company | mTouch Labs",
//     description:
//       "mTouch Labs delivers scalable IT services, cloud solutions, AI integration, and enterprise digital transformation for sustainable business growth.",
//     type: "website",
//     url: "https://www.mtouchlabs.com/it-services-digital-transformation-company",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "IT Services & Digital Transformation Company | mTouch Labs",
//     description:
//       "Scalable IT services and enterprise digital transformation solutions by mTouch Labs.",
//   },
// };

// export default function Page() {
//   return (
//     <>
//       {/* ===== HERO SECTION ===== */}
//       <section className="co-hero">
//         <div className="co-hero__inner">
//           <p className="co-hero__breadcrumb">
//             Home / About us /{" "}
//             <span className="co-hero__breadcrumb-active">Company Overview</span>
//           </p>
//           <h1 className="co-hero__title">
//             Trusted <span className="co-hero__title-accent">IT Services</span>{" "}
//             &amp; Digital Transformation Company
//           </h1>
//           <p className="co-hero__subtitle">Delivering Measurable Results</p>
//           <p className="co-hero__desc">
//             Enterprise-Grade IT Services Backed by Real-World Experience
//           </p>
//         </div>
//       </section>

//       {/* ===== INTRO SECTION ===== */}
//       <section className="co-about">
//         <div className="co-container">
//           <div className="co-about__grid">
//             <div className="co-about__content co-animate--left">
//               <h2 className="co-about__heading">
//                 <span className="co-text-accent">Performance-Driven</span>
//                 <br />
//                 IT Solutions
//               </h2>
//               <p className="co-about__text">
//                 mTouch Labs is a performance-driven IT Services and Digital
//                 Transformation Company helping startups, SMEs, and enterprises
//                 build scalable digital ecosystems.
//               </p>
//               <p className="co-about__text">
//                 With proven experience in delivering secure, high-performance
//                 technology solutions, we specialize in transforming complex
//                 business challenges into efficient, automated, and
//                 growth-oriented systems.
//               </p>
//               <p className="co-about__text">
//                 Our work spans across web, mobile, cloud, AI, CRM, and digital
//                 growth engineering — enabling businesses to modernize operations
//                 and increase measurable ROI.
//               </p>
//             </div>
//             <div className="co-stats co-animate--right">
//               <div className="co-stat">
//                 <span className="co-stat__number">14+</span>
//                 <span className="co-stat__label">Years of Experience</span>
//               </div>
//               <div className="co-stat">
//                 <span className="co-stat__number">1500+</span>
//                 <span className="co-stat__label">Projects Delivered</span>
//               </div>
//               <div className="co-stat">
//                 <span className="co-stat__number">1200+</span>
//                 <span className="co-stat__label">Global Clients</span>
//               </div>
//               <div className="co-stat">
//                 <span className="co-stat__number">150+</span>
//                 <span className="co-stat__label">Tech Experts</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHO WE ARE SECTION ===== */}
//       <section className="co-whoweare">
//         <div className="co-container">
//           <div className="co-whoweare__grid">
//             <div className="co-whoweare__stats co-animate--left">
//               <div className="co-stat co-stat--dark">
//                 <span className="co-stat__number">6+</span>
//                 <span className="co-stat__label">Industries Served</span>
//               </div>
//               <div className="co-stat co-stat--dark">
//                 <span className="co-stat__number">98%</span>
//                 <span className="co-stat__label">Client Retention Rate</span>
//               </div>
//               <div className="co-stat co-stat--dark">
//                 <span className="co-stat__number">3x</span>
//                 <span className="co-stat__label">Faster Time to Market</span>
//               </div>
//               <div className="co-stat co-stat--dark">
//                 <span className="co-stat__number">24/7</span>
//                 <span className="co-stat__label">Technical Support</span>
//               </div>
//             </div>
//             <div className="co-whoweare__content co-animate--right">
//               <h2 className="co-whoweare__heading">
//                 Who <span className="co-text-accent">We Are</span>
//               </h2>
//               <p className="co-whoweare__text">
//                 mTouch Labs is a technology consulting and engineering company
//                 built on execution excellence, innovation, and long-term client
//                 partnerships.
//               </p>
//               <p className="co-whoweare__text">
//                 Over the years, our team has delivered solutions across
//                 industries including eCommerce, FinTech, Healthcare, Real
//                 Estate, SaaS, and Manufacturing — focusing on scalability,
//                 automation, and digital optimization.
//               </p>
//               <p className="co-whoweare__text">
//                 As a modern Digital Transformation Company, we do not simply
//                 deploy tools — we redesign digital processes for performance,
//                 efficiency, and sustainable growth.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== CORE IT SERVICES SECTION ===== */}
//       <section className="co-services">
//         <div className="co-container">
//           <div className="co-services__header co-animate">
//             <h2 className="co-services__title">
//               Our Core <span className="co-text-accent">IT Services</span>
//             </h2>
//           </div>

//           <div className="co-services__grid co-stagger">
//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">01</span>
//               <h4 className="co-service-card__title">Custom Software Development</h4>
//               <p className="co-service-card__text">
//                 We design and develop scalable enterprise applications using
//                 modern frameworks and cloud-native architecture.
//               </p>
//               <div className="co-service-card__tags">
//                 <span className="co-tag">React</span>
//                 <span className="co-tag">Next.js</span>
//                 <span className="co-tag">Angular</span>
//                 <span className="co-tag">Node.js</span>
//                 <span className="co-tag">Python</span>
//                 <span className="co-tag">AWS</span>
//                 <span className="co-tag">Docker</span>
//                 <span className="co-tag">Kubernetes</span>
//               </div>
//               <ul className="co-service-card__list">
//                 <li>Secure architecture</li>
//                 <li>Performance optimization</li>
//                 <li>API-driven integrations</li>
//                 <li>Long-term maintainability</li>
//               </ul>
//             </div>

//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">02</span>
//               <h4 className="co-service-card__title">Mobile App Development</h4>
//               <p className="co-service-card__text">
//                 High-performance iOS and Android applications designed for
//                 usability, speed, and scalability.
//               </p>
//               <ul className="co-service-card__list">
//                 <li>Cross-platform architecture</li>
//                 <li>User-first UI/UX design</li>
//                 <li>Backend integration</li>
//                 <li>App performance monitoring</li>
//               </ul>
//             </div>

//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">03</span>
//               <h4 className="co-service-card__title">Cloud &amp; DevOps Services</h4>
//               <p className="co-service-card__text">
//                 We help businesses migrate, optimize, and manage secure cloud
//                 infrastructure as part of our advanced IT services.
//               </p>
//               <ul className="co-service-card__list">
//                 <li>Cloud migration strategy</li>
//                 <li>Infrastructure automation</li>
//                 <li>CI/CD implementation</li>
//                 <li>Performance monitoring</li>
//                 <li>Cost optimization</li>
//               </ul>
//             </div>

//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">04</span>
//               <h4 className="co-service-card__title">Enterprise Digital Transformation</h4>
//               <p className="co-service-card__text">
//                 We focus on reducing operational friction while improving speed,
//                 visibility, and scalability.
//               </p>
//               <ul className="co-service-card__list">
//                 <li>Digital maturity assessment</li>
//                 <li>Legacy system modernization</li>
//                 <li>Workflow automation</li>
//                 <li>AI-powered analytics integration</li>
//                 <li>Performance measurement &amp; optimization</li>
//               </ul>
//             </div>

//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">05</span>
//               <h4 className="co-service-card__title">AI, Automation &amp; Data Solutions</h4>
//               <p className="co-service-card__text">
//                 We integrate AI-driven solutions that enhance decision-making
//                 and reduce manual processes.
//               </p>
//               <ul className="co-service-card__list">
//                 <li>Business Intelligence dashboards</li>
//                 <li>Predictive analytics</li>
//                 <li>Process automation</li>
//                 <li>CRM &amp; ERP integrations</li>
//               </ul>
//             </div>

//             <div className="co-service-card co-animate--scale">
//               <span className="co-service-card__badge">06</span>
//               <h4 className="co-service-card__title">Salesforce &amp; CRM Solutions</h4>
//               <p className="co-service-card__text">
//                 We provide CRM implementation, customization, and automation
//                 strategies to improve sales pipelines and customer lifecycle
//                 management.
//               </p>
//             </div>

//             <div className="co-service-card co-service-card--wide co-animate--scale">
//               <span className="co-service-card__badge">07</span>
//               <h4 className="co-service-card__title">Digital Marketing &amp; Growth Engineering</h4>
//               <p className="co-service-card__text">
//                 Beyond development, we support measurable growth through
//                 strategic marketing and analytics.
//               </p>
//               <ul className="co-service-card__list co-service-card__list--horizontal">
//                 <li>SEO strategy</li>
//                 <li>Performance marketing</li>
//                 <li>Conversion rate optimization</li>
//                 <li>Analytics tracking &amp; reporting</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== DELIVERY APPROACH SECTION ===== */}
//       <section className="co-delivery">
//         <div className="co-container">
//           <h2 className="co-delivery__heading co-animate">
//             Our Proven <span className="co-text-accent">Delivery Approach</span>
//           </h2>
//           <p className="co-delivery__text">
//             We follow a structured execution model that ensures transparency,
//             accountability, and performance-driven outcomes.
//           </p>
//           <div className="co-delivery__steps">
//             <div className="co-step">
//               <span className="co-step__circle">Discovery</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Strategy</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Architecture</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Development</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Testing</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Deployment</span>
//             </div>
//             <span className="co-step__arrow">→</span>
//             <div className="co-step">
//               <span className="co-step__circle">Optimization</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHY CHOOSE US SECTION ===== */}
//       <section className="co-why">
//         <div className="co-container">
//           <div className="co-why__grid">
//             <div className="co-why__content co-animate--left">
//               <h2 className="co-why__heading">
//                 Why Businesses Choose{" "}
//                 <span className="co-text-accent">mTouch Labs</span>
//               </h2>
//               <p className="co-why__text">
//                 Our focus is not just launching products — but building digital
//                 systems that evolve with business growth.
//               </p>
//               <ul className="co-checklist">
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Strategic alignment between technology and business KPIs</span>
//                 </li>
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Scalable and secure architecture</span>
//                 </li>
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Agile project execution</span>
//                 </li>
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Long-term technical support</span>
//                 </li>
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Transparent communication</span>
//                 </li>
//                 <li className="co-checklist__item">
//                   <span className="co-checklist__icon">✓</span>
//                   <span>Data-driven performance optimization</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== INDUSTRIES SECTION ===== */}
//       <section className="co-industries">
//         <div className="co-container">
//           <h2 className="co-industries__heading co-animate">
//             Industries <span className="co-text-accent">We Serve</span>
//           </h2>
//           <div className="co-industries__grid co-stagger">
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">🛒</span>
//               <h4 className="co-industry__title">eCommerce &amp; Retail</h4>
//             </div>
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">💰</span>
//               <h4 className="co-industry__title">Financial Services &amp; FinTech</h4>
//             </div>
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">🏥</span>
//               <h4 className="co-industry__title">Healthcare &amp; HealthTech</h4>
//             </div>
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">🏗️</span>
//               <h4 className="co-industry__title">Real Estate &amp; PropTech</h4>
//             </div>
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">🏭</span>
//               <h4 className="co-industry__title">Manufacturing &amp; Supply Chain</h4>
//             </div>
//             <div className="co-industry co-animate--scale">
//               <span className="co-industry__icon">🚀</span>
//               <h4 className="co-industry__title">SaaS &amp; Startup Ecosystems</h4>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== WHAT MAKES US RELIABLE ===== */}
//       <section className="co-reliable">
//         <div className="co-container">
//           <div className="co-reliable__inner co-animate">
//             <h2 className="co-reliable__heading">
//               What Makes mTouch Labs a Reliable{" "}
//               <span className="co-text-accent">Digital Transformation</span> Company?
//             </h2>
//             <p className="co-reliable__text">
//               A true digital transformation partner must deliver measurable
//               outcomes. mTouch Labs integrates strategy, engineering, and
//               analytics to ensure transformation initiatives produce real
//               operational improvements.
//             </p>
//             <div className="co-reliable__pillars">
//               <div className="co-pillar">
//                 <span className="co-pillar__dot"></span>
//                 <span className="co-pillar__label">Measurable business impact</span>
//               </div>
//               <div className="co-pillar">
//                 <span className="co-pillar__dot"></span>
//                 <span className="co-pillar__label">Technical depth</span>
//               </div>
//               <div className="co-pillar">
//                 <span className="co-pillar__dot"></span>
//                 <span className="co-pillar__label">Process optimization</span>
//               </div>
//               <div className="co-pillar">
//                 <span className="co-pillar__dot"></span>
//                 <span className="co-pillar__label">Secure infrastructure</span>
//               </div>
//               <div className="co-pillar">
//                 <span className="co-pillar__dot"></span>
//                 <span className="co-pillar__label">Long-term scalability</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== FAQ SECTION ===== */}
//       <section className="co-faq">
//         <div className="co-container">
//           <div className="co-faq__wrapper">
//             <h3 className="co-faq__heading co-animate">Frequently Asked Questions</h3>
//             <div className="accordion">
//               <div className="accordion-item">
//                 <button id="accordion-button-1" aria-expanded="false">
//                   <span className="accordion-title">What IT services does mTouch Labs provide?</span>
//                   <span className="icon" aria-hidden="true"></span>
//                 </button>
//                 <div className="accordion-content">
//                   <p>
//                     mTouch Labs provides software development, cloud
//                     infrastructure management, mobile app development, enterprise
//                     modernization, AI integration, CRM implementation, and
//                     digital growth services.
//                   </p>
//                 </div>
//               </div>
//               <div className="accordion-item">
//                 <button id="accordion-button-2" aria-expanded="false">
//                   <span className="accordion-title">How does mTouch Labs approach digital transformation?</span>
//                   <span className="icon" aria-hidden="true"></span>
//                 </button>
//                 <div className="accordion-content">
//                   <p>
//                     We evaluate current digital systems, identify inefficiencies,
//                     implement scalable technologies, automate workflows, and
//                     continuously monitor performance to ensure measurable
//                     business improvements.
//                   </p>
//                 </div>
//               </div>
//               <div className="accordion-item">
//                 <button id="accordion-button-3" aria-expanded="false">
//                   <span className="accordion-title">Is mTouch Labs suitable for enterprise-level projects?</span>
//                   <span className="icon" aria-hidden="true"></span>
//                 </button>
//                 <div className="accordion-content">
//                   <p>
//                     Yes. Our IT services are designed to support enterprise-grade
//                     security, scalability, and integration requirements.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ===== COMMITMENT SECTION ===== */}
//       <section className="co-commitment">
//         <div className="co-container">
//           <div className="co-commitment__inner co-animate">
//             <h2 className="co-commitment__heading">
//               Our <span className="co-text-accent">Commitment</span>
//             </h2>
//             <p className="co-commitment__text">
//               Our mission is to be a trusted global IT Services and Digital
//               Transformation Company delivering innovative, secure, and scalable
//               technology solutions that drive sustainable business success.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ===== CTA SECTION ===== */}
//       <section className="co-cta">
//         <div className="co-container">
//           <div className="co-cta__inner co-animate--scale">
//             <h2 className="co-cta__heading">
//               Start Your Digital{" "}
//               <span className="co-text-accent">Transformation</span> Journey
//             </h2>
//             <p className="co-cta__text">
//               If your organization is ready to modernize operations, improve
//               efficiency, and scale confidently, mTouch Labs is your strategic
//               technology partner.
//             </p>
//             <a href="/contact-us" className="co-cta__button">
//               Connect With Our Team
//             </a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }