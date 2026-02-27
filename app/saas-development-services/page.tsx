import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "SaaS Development Services | Scalable SaaS Solutions | mTouch Labs",
  description:
    "mTouch Labs provides end-to-end SaaS development services including multi-tenant architecture, subscription platforms, cloud-native applications, and scalable SaaS product engineering.",
  keywords: [
    "SaaS development services",
    "SaaS application development",
    "multi-tenant SaaS development",
    "cloud SaaS solutions",
    "SaaS product development company",
    "SaaS MVP development",
    "subscription platform development",
    "SaaS architecture design",
    "cloud-native SaaS",
    "scalable SaaS platforms",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/saas-development-services",
  },
  openGraph: {
    title: "SaaS Development Services | mTouch Labs",
    description:
      "Scalable SaaS development services including architecture design, subscription systems, and cloud-native deployment.",
    url: "https://www.mtouchlabs.com/saas-development-services",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Services | mTouch Labs",
    description:
      "Build scalable SaaS platforms with multi-tenant architecture and cloud-native engineering.",
  },
};

export default function SaaSDevelopmentServices() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="ss-hero">
        <div className="ss-hero__inner">
          <Breadcrumb pagePath="/saas-development-services" />
          <h1 className="ss-hero__title">
            End-to-End{" "}
            <span className="ss-hero__title-accent">SaaS Development</span>{" "}
            Services
          </h1>
          <p className="ss-hero__subtitle">
            Scalable, Secure &amp; Subscription-Ready Platforms
          </p>
          <p className="ss-hero__desc">
            mTouch Labs delivers scalable and secure SaaS development services
            for startups, product companies, and enterprises looking to build
            high-performance cloud-based platforms. From MVP development to
            enterprise-scale SaaS ecosystems, we design and engineer
            subscription-driven software platforms built for growth.
          </p>
        </div>
      </section>

      {/* ════════ WHAT IS SAAS ════════ */}
      <section className="ss-about">
        <div className="ss-container">
          <div className="ss-about__grid">
            <div className="ss-about__content ss-animate--left">
              <h2 className="ss-about__heading">
                What Is{" "}
                <span className="ss-text-accent">SaaS Development</span>?
              </h2>
              <p className="ss-about__text">
                SaaS (Software as a Service) development involves building
                cloud-based applications that operate on subscription models and
                are accessible via the web. As a leading{" "}
                <a
                  href="/custom-software-development-company"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  custom software development company
                </a>
                , mTouch Labs extends its engineering expertise to SaaS product
                development.
              </p>
              <p className="ss-about__text">
                Our SaaS development services include multi-tenant architecture
                design, subscription &amp; billing integration, secure cloud
                deployment, API-driven ecosystem development, and SaaS product
                scaling &amp; optimization.
              </p>
              <p className="ss-about__text">
                We leverage{" "}
                <a
                  href="/devops-services"
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  cloud &amp; DevOps engineering
                </a>{" "}
                capabilities to deploy and scale SaaS platforms on AWS, Azure,
                and Google Cloud.
              </p>
            </div>
            <div className="ss-stats ss-animate--right">
              <div className="ss-stat">
                <span className="ss-stat__icon">🏗️</span>
                <span className="ss-stat__label">Multi-Tenant Architecture</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat__icon">💳</span>
                <span className="ss-stat__label">Subscription Billing</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat__icon">☁️</span>
                <span className="ss-stat__label">Cloud-Native Deploy</span>
              </div>
              <div className="ss-stat">
                <span className="ss-stat__icon">🔗</span>
                <span className="ss-stat__label">API Ecosystems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY MTOUCH LABS ════════ */}
      <section className="ss-whoweare">
        <div className="ss-container">
          <div className="ss-whoweare__grid">
            <div className="ss-whoweare__stats ss-animate--left">
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">14+</span>
                <span className="ss-stat__label">Years Experience</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">50+</span>
                <span className="ss-stat__label">SaaS Projects</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">3</span>
                <span className="ss-stat__label">Cloud Platforms</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">24/7</span>
                <span className="ss-stat__label">Support</span>
              </div>
            </div>
            <div className="ss-whoweare__content ss-animate--right">
              <h2 className="ss-whoweare__heading">
                Why mTouch Labs for{" "}
                <span className="ss-text-accent">SaaS Development</span>
              </h2>
              <p className="ss-whoweare__text">
                We combine product engineering with cloud-native expertise:
              </p>
              <ul className="ss-checklist">
                <li className="ss-checklist__item">
                  <span className="ss-checklist__icon">✓</span>
                  <span>
                    Enterprise-grade SaaS architecture &amp; product-first
                    mindset
                  </span>
                </li>
                <li className="ss-checklist__item">
                  <span className="ss-checklist__icon">✓</span>
                  <span>
                    Cloud-native deployment on AWS, Azure &amp; Google Cloud
                  </span>
                </li>
                <li className="ss-checklist__item">
                  <span className="ss-checklist__icon">✓</span>
                  <span>
                    Subscription model &amp; payment gateway integration
                  </span>
                </li>
                <li className="ss-checklist__item">
                  <span className="ss-checklist__icon">✓</span>
                  <span>
                    Dedicated SaaS development teams with global delivery
                  </span>
                </li>
                <li className="ss-checklist__item">
                  <span className="ss-checklist__icon">✓</span>
                  <span>
                    Long-term{" "}
                    <a
                      href="/app-maintenance-support-services"
                      style={{
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      maintenance support
                    </a>{" "}
                    &amp; SaaS optimization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES ════════ */}
      <section className="ss-services">
        <div className="ss-container">
          <div className="ss-services__header ss-animate">
            <h2 className="ss-services__title">
              Our SaaS{" "}
              <span className="ss-text-accent">Development Services</span>
            </h2>
            <p className="ss-services__subtitle">
              End-to-end SaaS solutions from MVP to enterprise scale
            </p>
          </div>
          <div className="ss-services__grid ss-stagger">
            <div className="ss-service-card ss-animate--scale">
              <span className="ss-service-card__badge">01</span>
              <h4 className="ss-service-card__title">
                SaaS Architecture &amp; Strategy
              </h4>
              <p className="ss-service-card__text">
                We design scalable SaaS architectures using microservices,
                containerization, and cloud-native infrastructure to ensure
                flexibility and performance.
              </p>
            </div>
            <div className="ss-service-card ss-animate--scale">
              <span className="ss-service-card__badge">02</span>
              <h4 className="ss-service-card__title">SaaS MVP Development</h4>
              <p className="ss-service-card__text">
                We help startups validate ideas quickly with robust, scalable
                MVPs built for rapid iteration and market launch.
              </p>
            </div>
            <div className="ss-service-card ss-animate--scale">
              <span className="ss-service-card__badge">03</span>
              <h4 className="ss-service-card__title">
                Multi-Tenant SaaS Platforms
              </h4>
              <p className="ss-service-card__text">
                We develop secure multi-tenant systems with data isolation,
                performance optimization, and enterprise-grade security.
              </p>
            </div>
            <div className="ss-service-card ss-animate--scale">
              <span className="ss-service-card__badge">04</span>
              <h4 className="ss-service-card__title">
                Subscription &amp; Payment Systems
              </h4>
              <p className="ss-service-card__text">
                Integration of subscription billing platforms, payment gateways,
                and automated revenue workflows using Stripe, Razorpay, and
                custom solutions.
              </p>
            </div>
            <div className="ss-service-card ss-service-card--wide ss-animate--scale">
              <span className="ss-service-card__badge">05</span>
              <h4 className="ss-service-card__title">
                SaaS Cloud Engineering &amp; Scaling
              </h4>
              <p className="ss-service-card__text">
                We deploy SaaS platforms on AWS, Azure, or Google Cloud with
                CI/CD pipelines, DevOps automation, performance optimization,
                and legacy architecture modernization for growing SaaS
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ DELIVERY PROCESS ════════ */}
      <section className="ss-delivery">
        <div className="ss-container">
          <h2 className="ss-delivery__heading ss-animate">
            Our SaaS{" "}
            <span className="ss-text-accent">Development Process</span>
          </h2>
          <p className="ss-delivery__text">
            Structured lifecycle ensuring product stability and scalability.
          </p>
          <div className="ss-delivery__steps">
            <div className="ss-step">
              <span className="ss-step__circle">Discovery</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">Architecture</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">MVP Build</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">Cloud Deploy</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">Security</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">Testing</span>
            </div>
            <span className="ss-step__arrow">→</span>
            <div className="ss-step">
              <span className="ss-step__circle">Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SECURITY & COMPLIANCE ════════ */}
      <section className="ss-reliable">
        <div className="ss-container">
          <div className="ss-reliable__inner ss-animate">
            <h2 className="ss-reliable__heading">
              Security &amp;{" "}
              <span className="ss-text-accent">Compliance</span>
            </h2>
            <p className="ss-reliable__text">
              Our SaaS solutions are built with enterprise-grade security
              standards, integrated with{" "}
              <a
                href="/salesforce-consulting-services-company"
                style={{
                  color: "#2563eb",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Salesforce consulting &amp; CRM
              </a>{" "}
              capabilities for compliant platforms.
            </p>
            <div className="ss-reliable__pillars">
              <div className="ss-pillar">
                <span className="ss-pillar__dot"></span>
                <span className="ss-pillar__label">Data encryption</span>
              </div>
              <div className="ss-pillar">
                <span className="ss-pillar__dot"></span>
                <span className="ss-pillar__label">
                  Secure authentication
                </span>
              </div>
              <div className="ss-pillar">
                <span className="ss-pillar__dot"></span>
                <span className="ss-pillar__label">
                  Role-based access control
                </span>
              </div>
              <div className="ss-pillar">
                <span className="ss-pillar__dot"></span>
                <span className="ss-pillar__label">
                  Scalable infrastructure
                </span>
              </div>
              <div className="ss-pillar">
                <span className="ss-pillar__dot"></span>
                <span className="ss-pillar__label">
                  Compliance-ready architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ INDUSTRIES ════════ */}
      <section className="ss-industries">
        <div className="ss-container">
          <h2 className="ss-industries__title ss-animate">
            Industries We{" "}
            <span className="ss-text-accent">Serve with SaaS</span>
          </h2>
          <div className="ss-industries__grid ss-stagger">
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">💰</span>
              <h4 className="ss-industry__title">FinTech SaaS Platforms</h4>
            </div>
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">🏥</span>
              <h4 className="ss-industry__title">Healthcare SaaS Systems</h4>
            </div>
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">🏢</span>
              <h4 className="ss-industry__title">B2B SaaS Applications</h4>
            </div>
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">🚚</span>
              <h4 className="ss-industry__title">
                Logistics &amp; Supply Chain SaaS
              </h4>
            </div>
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">👥</span>
              <h4 className="ss-industry__title">HR &amp; CRM SaaS Platforms</h4>
            </div>
            <div className="ss-industry ss-animate--scale">
              <span className="ss-industry__icon">🛒</span>
              <h4 className="ss-industry__title">E-Commerce SaaS Solutions</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TECH STACK ════════ */}
      <section className="ss-tech">
        <div className="ss-container">
          <div className="ss-tech__grid">
            <div className="ss-animate--left">
              <h2 className="ss-tech__heading">
                SaaS Development{" "}
                <span className="ss-text-accent">Technology Stack</span>
              </h2>
              <p className="ss-tech__text">
                Modern frameworks, cloud platforms, and automation tools.
              </p>
              <div className="ss-tech__tags">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  ".NET",
                  "TypeScript",
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "AWS",
                  "Azure",
                  "Google Cloud",
                  "Kubernetes",
                  "Docker",
                  "Terraform",
                  "CI/CD",
                  "Stripe",
                  "Razorpay",
                  "REST APIs",
                  "GraphQL",
                ].map((t) => (
                  <span key={t} className="ss-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="ss-tech__stats ss-animate--right">
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">3</span>
                <span className="ss-stat__label">Cloud Platforms</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">20+</span>
                <span className="ss-stat__label">Technologies</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">CI/CD</span>
                <span className="ss-stat__label">Automation</span>
              </div>
              <div className="ss-stat ss-stat--dark">
                <span className="ss-stat__number">24/7</span>
                <span className="ss-stat__label">Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section className="ss-faq">
        <div className="ss-container">
          <div className="ss-faq__wrapper">
            <h3 className="ss-faq__heading ss-animate">
              Frequently Asked{" "}
              <span className="ss-text-accent">Questions</span>
            </h3>
            <p className="ss-faq__subtext">
              Everything about SaaS development services
            </p>
            <div className="ss-faq__list">
              <details className="ss-faq__item">
                <summary className="ss-faq__question">
                  <span>What are SaaS development services?</span>
                  <span className="ss-faq__chevron"></span>
                </summary>
                <div className="ss-faq__answer">
                  <p>
                    SaaS development services involve designing, building,
                    deploying, and scaling cloud-based software applications that
                    operate on subscription models.
                  </p>
                </div>
              </details>
              <details className="ss-faq__item">
                <summary className="ss-faq__question">
                  <span>How long does SaaS development take?</span>
                  <span className="ss-faq__chevron"></span>
                </summary>
                <div className="ss-faq__answer">
                  <p>
                    SaaS MVPs typically take 8–16 weeks, while enterprise SaaS
                    platforms may require 4–8 months depending on complexity.
                  </p>
                </div>
              </details>
              <details className="ss-faq__item">
                <summary className="ss-faq__question">
                  <span>
                    What technologies do you use for SaaS development?
                  </span>
                  <span className="ss-faq__chevron"></span>
                </summary>
                <div className="ss-faq__answer">
                  <p>
                    We use modern stacks including React, Node.js, Python, .NET,
                    AWS, Azure, Kubernetes, and CI/CD automation tools.
                  </p>
                </div>
              </details>
              <details className="ss-faq__item">
                <summary className="ss-faq__question">
                  <span>
                    Do you build scalable multi-tenant SaaS platforms?
                  </span>
                  <span className="ss-faq__chevron"></span>
                </summary>
                <div className="ss-faq__answer">
                  <p>
                    Yes. We specialize in multi-tenant architecture designed for
                    scalability, security, and high performance with{" "}
                    <a
                      href="/mobile-app-development-company"
                      style={{
                        color: "#2563eb",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      mobile app
                    </a>{" "}
                    and web platform support.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="ss-cta">
        <div className="ss-container">
          <div className="ss-cta__inner ss-animate--scale">
            <h2 className="ss-cta__heading">
              Ready to Build Your{" "}
              <span className="ss-text-accent">SaaS Platform</span>?
            </h2>
            <p className="ss-cta__text">
              Let&apos;s discuss how we can design, develop, and scale your SaaS
              product with enterprise-grade architecture.
            </p>
            <button
              type="button"
              className="ss-cta__button js-open-modal"
            >
              Speak with Our SaaS Development Experts
            </button>
          </div>
        </div>
      </section>
    </>
  );
}