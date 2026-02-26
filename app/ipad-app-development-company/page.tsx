import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "iPad App Development Company | mTouch Labs",
  description:
    "mTouch Labs is an iPad app development company delivering enterprise-ready, large-screen optimized applications built for productivity and performance.",
  keywords: [
    "iPad app development company",
    "custom iPad app development",
    "iPadOS app development",
    "enterprise iPad applications",
    "iPad app development services",
    "iPad app developers India",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/ipad-app-development-company",
  },
  openGraph: {
    title: "iPad App Development Company | mTouch Labs",
    description:
      "Custom iPad application development services focused on enterprise productivity and large-screen optimization.",
    url: "https://www.mtouchlabs.com/ipad-app-development-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPad App Development Company | mTouch Labs",
    description:
      "Enterprise-focused iPad app development built for performance and usability.",
  },
};

export default function IPadAppDevelopment() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="ip-hero">
        <div className="ip-hero__inner">
          <Breadcrumb pagePath="/ipad-app-development-company" />
          <h1 className="ip-hero__title">
            iPad <span className="ip-hero__title-accent">App Development</span> Company
          </h1>
          <p className="ip-hero__subtitle">
            Enterprise-Ready iPad Applications Built for Productivity
          </p>
          <p className="ip-hero__desc">
            mTouch Labs is a specialized iPad app development company delivering high-performance, large-screen optimized applications designed for productivity, enterprise operations, and immersive digital experiences. Unlike standard mobile apps, iPad applications require structured layout engineering, advanced interaction models, and optimized performance for multitasking environments.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="ip-about">
        <div className="ip-container">
          <div className="ip-about__grid">
            <div className="ip-about__content ip-animate--left">
              <h2 className="ip-about__heading">
                Why iPad App Development Requires{" "}
                <span className="ip-text-accent">Specialized Expertise</span>
              </h2>
              <p className="ip-about__text">
                The iPad is not just a bigger screen — it&apos;s a productivity platform. iPad app development differs significantly from standard smartphone development and requires a dedicated approach to design, architecture, and interaction.
              </p>
              <p className="ip-about__text">
                At mTouch Labs, we develop iPad solutions that leverage the full potential of iPadOS to deliver seamless, large-format user experiences. Our{" "}
                <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design team</a>{" "}
                ensures every interface feels native and intuitive on iPad devices.
              </p>
              <p className="ip-about__text">
                Whether you need enterprise workflow systems, field service tools, or data dashboards, our{" "}
                <a href="/mobile-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>mobile app development expertise</a>{" "}
                ensures your iPad application is built for real-world productivity.
              </p>
            </div>
            <div className="ip-stats ip-animate--right">
              <div className="ip-stat">
                <span className="ip-stat__icon">🖥️</span>
                <span className="ip-stat__label">Large-Screen Architecture</span>
              </div>
              <div className="ip-stat">
                <span className="ip-stat__icon">✏️</span>
                <span className="ip-stat__label">Apple Pencil Integration</span>
              </div>
              <div className="ip-stat">
                <span className="ip-stat__icon">🪟</span>
                <span className="ip-stat__label">Multi-Window Support</span>
              </div>
              <div className="ip-stat">
                <span className="ip-stat__icon">🔒</span>
                <span className="ip-stat__label">Enterprise-Grade Security</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="ip-whoweare">
        <div className="ip-container">
          <div className="ip-whoweare__grid">
            <div className="ip-whoweare__stats ip-animate--left">
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">500+</span>
                <span className="ip-stat__label">iPad Apps Delivered</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">14+</span>
                <span className="ip-stat__label">Years Experience</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">99%</span>
                <span className="ip-stat__label">App Store Approval</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">60+</span>
                <span className="ip-stat__label">Enterprise Clients</span>
              </div>
            </div>
            <div className="ip-whoweare__content ip-animate--right">
              <h2 className="ip-whoweare__heading">
                Our iPad App <span className="ip-text-accent">Development Expertise</span>
              </h2>
              <p className="ip-whoweare__text">
                We deliver end-to-end iPad solutions optimized for productivity and enterprise operations:
              </p>
              <ul className="ip-checklist">
                <li className="ip-checklist__item">
                  <span className="ip-checklist__icon">✓</span>
                  <span>Custom iPad Application Development — tailored to your workflows</span>
                </li>
                <li className="ip-checklist__item">
                  <span className="ip-checklist__icon">✓</span>
                  <span>iPadOS Interface Engineering — multi-column layouts &amp; adaptive UI</span>
                </li>
                <li className="ip-checklist__item">
                  <span className="ip-checklist__icon">✓</span>
                  <span>
                    <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Enterprise iPad Solutions</a>{" "}
                    — workforce mobility &amp; secure communication
                  </span>
                </li>
                <li className="ip-checklist__item">
                  <span className="ip-checklist__icon">✓</span>
                  <span>iPad App Integration — CRM, ERP, cloud &amp; real-time analytics</span>
                </li>
                <li className="ip-checklist__item">
                  <span className="ip-checklist__icon">✓</span>
                  <span>
                    <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Performance Optimization &amp; Testing</a>{" "}
                    — multitasking, memory &amp; security validation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="ip-services">
        <div className="ip-container">
          <div className="ip-services__header ip-animate">
            <h2 className="ip-services__title">
              Our iPad App <span className="ip-text-accent">Development Services</span>
            </h2>
            <p className="ip-services__subtitle">
              Large-screen solutions engineered for productivity
            </p>
          </div>

          <div className="ip-services__grid ip-stagger">
            <div className="ip-service-card ip-animate--scale">
              <span className="ip-service-card__badge">01</span>
              <h4 className="ip-service-card__title">Custom iPad Applications</h4>
              <p className="ip-service-card__text">
                Tailored iPad apps including enterprise workflow systems, field service management apps, healthcare reporting platforms, real-time data dashboards, and education &amp; training applications — each engineered for large-screen usability.
              </p>
            </div>
            <div className="ip-service-card ip-animate--scale">
              <span className="ip-service-card__badge">02</span>
              <h4 className="ip-service-card__title">iPadOS Interface Engineering</h4>
              <p className="ip-service-card__text">
                Multi-column layout architecture, adaptive UI frameworks, drag-and-drop interaction models, Apple Pencil support integration, and optimized landscape &amp; portrait performance for native iPad experiences.
              </p>
            </div>
            <div className="ip-service-card ip-animate--scale">
              <span className="ip-service-card__badge">03</span>
              <h4 className="ip-service-card__title">Enterprise iPad Solutions</h4>
              <p className="ip-service-card__text">
                Workforce mobility apps, sales enablement platforms, inventory &amp; logistics control systems, executive reporting dashboards, and secure internal communication tools with role-based access control.
              </p>
            </div>
            <div className="ip-service-card ip-animate--scale">
              <span className="ip-service-card__badge">04</span>
              <h4 className="ip-service-card__title">iPad App Integration</h4>
              <p className="ip-service-card__text">
                Seamless integration with enterprise backend systems, CRM &amp; ERP platforms, cloud storage services, real-time analytics tools, and API-based data systems for unified data synchronization.
              </p>
            </div>
            <div className="ip-service-card ip-service-card--wide ip-animate--scale">
              <span className="ip-service-card__badge">05</span>
              <h4 className="ip-service-card__title">Performance Optimization &amp; Testing</h4>
              <p className="ip-service-card__text">
                Comprehensive multi-device compatibility testing, memory optimization, performance benchmarking, security validation, and iPadOS compliance testing to ensure stability across multiple usage scenarios and multitasking environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="ip-delivery">
        <div className="ip-container">
          <h2 className="ip-delivery__heading ip-animate">
            Our iPad Development <span className="ip-text-accent">Process</span>
          </h2>
          <p className="ip-delivery__text">
            A structured lifecycle built specifically for iPad productivity environments.
          </p>
          <div className="ip-delivery__steps">
            <div className="ip-step"><span className="ip-step__circle">Business Analysis</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">Interface Architecture</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">iPadOS Design</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">Native Development</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">Device Testing</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">Deployment</span></div>
            <span className="ip-step__arrow">→</span>
            <div className="ip-step"><span className="ip-step__circle">Continuous Optimization</span></div>
          </div>
        </div>
      </section>

      {/* ===== RELIABLE ===== */}
      <section className="ip-reliable">
        <div className="ip-container">
          <div className="ip-reliable__inner ip-animate">
            <h2 className="ip-reliable__heading">
              Why Choose mTouch Labs as Your{" "}
              <span className="ip-text-accent">iPad App Development Company</span>?
            </h2>
            <p className="ip-reliable__text">
              We build iPad applications that enhance business efficiency and deliver measurable productivity gains.
            </p>
            <div className="ip-reliable__pillars">
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">Large-screen UI expertise</span>
              </div>
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">iPadOS optimization knowledge</span>
              </div>
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">Enterprise-grade security</span>
              </div>
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">Cloud-connected architecture</span>
              </div>
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">Productivity-focused engineering</span>
              </div>
              <div className="ip-pillar">
                <span className="ip-pillar__dot"></span>
                <span className="ip-pillar__label">Ongoing performance enhancements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="ip-industries">
        <div className="ip-container">
          <h2 className="ip-industries__title ip-animate">
            Industries We <span className="ip-text-accent">Serve</span>
          </h2>
          <div className="ip-industries__grid ip-stagger">
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🩺</span>
              <h4 className="ip-industry__title">Healthcare &amp; Clinical Systems</h4>
            </div>
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🔧</span>
              <h4 className="ip-industry__title">Field Service Operations</h4>
            </div>
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🎓</span>
              <h4 className="ip-industry__title">Education &amp; E-Learning</h4>
            </div>
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🛒</span>
              <h4 className="ip-industry__title">Retail &amp; Inventory Management</h4>
            </div>
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🚚</span>
              <h4 className="ip-industry__title">Logistics &amp; Transportation</h4>
            </div>
            <div className="ip-industry ip-animate--scale">
              <span className="ip-industry__icon">🏢</span>
              <h4 className="ip-industry__title">Enterprise Corporate Teams</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="ip-tech">
        <div className="ip-container">
          <div className="ip-tech__grid">
            <div className="ip-animate--left">
              <h2 className="ip-tech__heading">
                Technologies We <span className="ip-text-accent">Work With</span>
              </h2>
              <p className="ip-tech__text">
                We leverage Apple&apos;s latest frameworks and enterprise-grade tools to build high-performance iPad applications optimized for productivity and scalability.
              </p>
              <div className="ip-tech__tags">
                {[
                  "Swift", "SwiftUI", "UIKit", "iPadOS SDK", "Xcode",
                  "Core Data", "CloudKit", "ARKit", "PencilKit",
                  "Combine", "REST APIs", "GraphQL", "Firebase",
                  "AWS", "TestFlight", "CI/CD"
                ].map((tech) => (
                  <span key={tech} className="ip-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="ip-tech__stats ip-animate--right">
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">16+</span>
                <span className="ip-stat__label">Frameworks &amp; Tools</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">100%</span>
                <span className="ip-stat__label">iPadOS Native</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">40+</span>
                <span className="ip-stat__label">Enterprise Integrations</span>
              </div>
              <div className="ip-stat ip-stat--dark">
                <span className="ip-stat__number">4.8★</span>
                <span className="ip-stat__label">Avg App Store Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="ip-faq">
        <div className="ip-container">
          <div className="ip-faq__wrapper">
            <h3 className="ip-faq__heading ip-animate">
              Frequently Asked <span className="ip-text-accent">Questions</span>
            </h3>
            <p className="ip-faq__subtext">Everything you need to know about our iPad app development services</p>
            <div className="ip-faq__list">
              <details className="ip-faq__item">
                <summary className="ip-faq__question">
                  <span>What is iPad app development?</span>
                  <span className="ip-faq__chevron"></span>
                </summary>
                <div className="ip-faq__answer">
                  <p>iPad app development involves designing and building applications optimized specifically for iPadOS, focusing on large-screen usability, multitasking features, Apple Pencil support, and productivity-focused interaction models.</p>
                </div>
              </details>
              <details className="ip-faq__item">
                <summary className="ip-faq__question">
                  <span>How is iPad development different from iPhone development?</span>
                  <span className="ip-faq__chevron"></span>
                </summary>
                <div className="ip-faq__answer">
                  <p>iPad development requires larger interface layouts, multi-window and split-view support, Apple Pencil compatibility, keyboard &amp; external device integration, and productivity-focused interaction models that differ significantly from iPhone design patterns.</p>
                </div>
              </details>
              <details className="ip-faq__item">
                <summary className="ip-faq__question">
                  <span>Are iPad apps suitable for enterprise use?</span>
                  <span className="ip-faq__chevron"></span>
                </summary>
                <div className="ip-faq__answer">
                  <p>Yes. iPad apps are widely used in healthcare, logistics, field service, education, and enterprise productivity environments. They offer large-screen data visualization, secure role-based access, and seamless multitasking capabilities ideal for professional workflows.</p>
                </div>
              </details>
              <details className="ip-faq__item">
                <summary className="ip-faq__question">
                  <span>Do you provide post-deployment support?</span>
                  <span className="ip-faq__chevron"></span>
                </summary>
                <div className="ip-faq__answer">
                  <p>Absolutely. We offer structured maintenance, iPadOS compatibility updates, performance optimization, security patching, and feature enhancements to ensure your iPad application evolves with your business needs.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ip-cta">
        <div className="ip-container">
          <div className="ip-cta__inner ip-animate--scale">
            <h2 className="ip-cta__heading">
              Ready to Build Your <span className="ip-text-accent">iPad Application</span>?
            </h2>
            <p className="ip-cta__text">
              Let&apos;s discuss how we can engineer an iPad solution that enhances your team&apos;s productivity and operational efficiency.
            </p>
            <button type="button" className="ip-cta__button js-open-modal">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}