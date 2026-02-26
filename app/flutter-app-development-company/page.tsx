import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Flutter App Development Company | mTouch Labs",
  description:
    "mTouch Labs is a Flutter app development company delivering scalable cross-platform mobile apps for iOS and Android using a unified codebase.",
  keywords: [
    "Flutter app development",
    "Flutter development company",
    "cross-platform app development",
    "Flutter mobile apps",
    "Flutter iOS Android",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/flutter-app-development-company",
  },
  openGraph: {
    title: "Flutter App Development Company | mTouch Labs",
    description: "Professional Flutter app development services for cross-platform mobile solutions.",
    url: "https://www.mtouchlabs.com/flutter-app-development-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development Company | mTouch Labs",
    description: "Custom cross-platform mobile app development powered by Flutter.",
  },
};

export default function FlutterAppDevelopment() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="fl-hero">
        <div className="fl-hero__inner">
          <Breadcrumb pagePath="/flutter-app-development-company" />
          <h1 className="fl-hero__title">
            Scalable <span className="fl-hero__title-accent">Flutter App</span> Development Company
          </h1>
          <p className="fl-hero__subtitle">
            High-Quality Cross-Platform Apps Built with a Single Codebase
          </p>
          <p className="fl-hero__desc">
            mTouch Labs is a performance-driven Flutter app development company delivering high-quality cross-platform mobile applications for startups, enterprises, and digital product companies.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="fl-about">
        <div className="fl-container">
          <div className="fl-about__grid">
            <div className="fl-about__content fl-animate--left">
              <h2 className="fl-about__heading">
                What Is <span className="fl-text-accent">Flutter App</span> Development?
              </h2>
              <p className="fl-about__text">
                Flutter app development involves building mobile applications using Google&apos;s Flutter framework, allowing developers to create cross-platform apps from a unified codebase with native-like performance.
              </p>
              <p className="fl-about__text">
                A professional Flutter development company ensures consistent UI across devices, faster time-to-market, optimized app performance, and scalable architecture — ideal for businesses seeking rapid deployment without compromising quality.
              </p>
              <p className="fl-about__text">
                As a trusted <a href="/mobile-app-development-company" style={{color: "#e8a025", textDecoration: "none"}}>mobile app development company</a>, we leverage Flutter to deliver visually consistent, high-performance apps across both iOS and Android platforms.
              </p>
            </div>
            <div className="fl-stats fl-animate--right">
              <div className="fl-stat">
                <span className="fl-stat__icon">📱</span>
                <span className="fl-stat__label">Single Codebase</span>
              </div>
              <div className="fl-stat">
                <span className="fl-stat__icon">⚡</span>
                <span className="fl-stat__label">Native Performance</span>
              </div>
              <div className="fl-stat">
                <span className="fl-stat__icon">🎨</span>
                <span className="fl-stat__label">Expressive UI</span>
              </div>
              <div className="fl-stat">
                <span className="fl-stat__icon">🚀</span>
                <span className="fl-stat__label">Faster Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="fl-whoweare">
        <div className="fl-container">
          <div className="fl-whoweare__grid">
            <div className="fl-whoweare__stats fl-animate--left">
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">14+</span>
                <span className="fl-stat__label">Years of Experience</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">80+</span>
                <span className="fl-stat__label">Flutter Apps Built</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">200+</span>
                <span className="fl-stat__label">Global Clients</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">50%</span>
                <span className="fl-stat__label">Faster Time-to-Market</span>
              </div>
            </div>
            <div className="fl-whoweare__content fl-animate--right">
              <h2 className="fl-whoweare__heading">
                Our <span className="fl-text-accent">Flutter Expertise</span>
              </h2>
              <p className="fl-whoweare__text">
                We build cross-platform apps with structured engineering and scalable architecture:
              </p>
              <ul className="fl-checklist">
                <li className="fl-checklist__item">
                  <span className="fl-checklist__icon">✓</span>
                  <span>Custom Flutter Apps — consumer, enterprise &amp; on-demand platforms</span>
                </li>
                <li className="fl-checklist__item">
                  <span className="fl-checklist__icon">✓</span>
                  <span>Cross-Platform Deployment — single codebase for iOS &amp; Android</span>
                </li>
                <li className="fl-checklist__item">
                  <span className="fl-checklist__icon">✓</span>
                  <span>UI-Driven Design — custom widgets, smooth animations &amp; responsive layouts</span>
                </li>
                <li className="fl-checklist__item">
                  <span className="fl-checklist__icon">✓</span>
                  <span>API &amp; Backend Integration — REST, GraphQL, cloud &amp; payment gateways</span>
                </li>
                <li className="fl-checklist__item">
                  <span className="fl-checklist__icon">✓</span>
                  <span>Testing &amp; Optimization — cross-device testing, performance benchmarking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="fl-services">
        <div className="fl-container">
          <div className="fl-services__header fl-animate">
            <h2 className="fl-services__title">
              End-to-End <span className="fl-text-accent">Flutter Development Services</span>
            </h2>
            <p className="fl-services__subtitle">
              From MVP to enterprise scale, we cover every stage of Flutter app delivery
            </p>
          </div>

          <div className="fl-services__grid fl-stagger">
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">01</span>
              <h4 className="fl-service-card__title">Custom Flutter App Development</h4>
              <p className="fl-service-card__text">
                Consumer mobile apps, enterprise mobility solutions, on-demand service platforms, eCommerce applications, and SaaS mobile products — each built for long-term maintainability.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">02</span>
              <h4 className="fl-service-card__title">Cross-Platform Mobile Development</h4>
              <p className="fl-service-card__text">
                Single codebase efficiency, consistent feature implementation, unified design system, and faster updates — reducing complexity while maintaining high performance.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">03</span>
              <h4 className="fl-service-card__title">UI-Driven Flutter App Design</h4>
              <p className="fl-service-card__text">
                Custom widget-based interfaces, smooth animations, responsive layouts, and platform-adaptive designs. Our <a href="/ui-ux-design-company" style={{color: "#e8a025", textDecoration: "none"}}>UI/UX design team</a> ensures intuitive mobile experiences.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">04</span>
              <h4 className="fl-service-card__title">API &amp; Backend Integration</h4>
              <p className="fl-service-card__text">
                REST &amp; GraphQL APIs, cloud databases, third-party services, payment gateways, and authentication systems — structured for scalability and security.
              </p>
            </div>
            <div className="fl-service-card fl-service-card--wide fl-animate--scale">
              <span className="fl-service-card__badge">05</span>
              <h4 className="fl-service-card__title">App Testing &amp; Optimization</h4>
              <p className="fl-service-card__text">
                Cross-device testing, performance benchmarking, code optimization, security validation, and app store deployment support ensuring reliability across all environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY STEPS ===== */}
      <section className="fl-delivery">
        <div className="fl-container">
          <h2 className="fl-delivery__heading fl-animate">
            Our Flutter <span className="fl-text-accent">Development Process</span>
          </h2>
          <p className="fl-delivery__text">
            We focus on predictable delivery and scalable design.
          </p>
          <div className="fl-delivery__steps">
            <div className="fl-step"><span className="fl-step__circle">Requirements</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">UI/UX Planning</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Architecture</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Development</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Testing &amp; QA</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Deployment</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Enhancement</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="fl-reliable">
        <div className="fl-container">
          <div className="fl-reliable__inner fl-animate">
            <h2 className="fl-reliable__heading">
              Why Choose <span className="fl-text-accent">mTouch Labs</span> for Flutter?
            </h2>
            <p className="fl-reliable__text">
              We combine speed with structured engineering to deliver reliable cross-platform apps.
            </p>
            <div className="fl-reliable__pillars">
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Experienced Flutter developers</span>
              </div>
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Performance-focused architecture</span>
              </div>
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Cross-platform deployment expertise</span>
              </div>
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Secure API integration</span>
              </div>
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Scalable mobile infrastructure</span>
              </div>
              <div className="fl-pillar">
                <span className="fl-pillar__dot"></span>
                <span className="fl-pillar__label">Long-term support &amp; maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="fl-industries">
        <div className="fl-container">
          <h2 className="fl-industries__title fl-animate">
            Industries We <span className="fl-text-accent">Serve</span>
          </h2>
          <div className="fl-industries__grid fl-stagger">
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">💻</span>
              <h4 className="fl-industry__title">SaaS &amp; Technology Startups</h4>
            </div>
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">🛒</span>
              <h4 className="fl-industry__title">eCommerce &amp; Retail</h4>
            </div>
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">💳</span>
              <h4 className="fl-industry__title">FinTech Applications</h4>
            </div>
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">💊</span>
              <h4 className="fl-industry__title">Health &amp; Wellness</h4>
            </div>
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">🚗</span>
              <h4 className="fl-industry__title">On-Demand Platforms</h4>
            </div>
            <div className="fl-industry fl-animate--scale">
              <span className="fl-industry__icon">🏢</span>
              <h4 className="fl-industry__title">Enterprise Internal Apps</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="fl-tech">
        <div className="fl-container">
          <div className="fl-tech__grid">
            <div className="fl-tech__content fl-animate--left">
              <h2 className="fl-tech__heading">
                Technologies <span className="fl-text-accent">We Work With</span>
              </h2>
              <p className="fl-tech__text">
                Our Flutter solutions integrate with modern backend and cloud infrastructure. We also offer <a href="/cross-platform-app-development-company" style={{color: "#e8a025", textDecoration: "none"}}>cross-platform development</a> using other frameworks.
              </p>
              <div className="fl-tech__tags">
                <span className="fl-tag">Flutter</span>
                <span className="fl-tag">Dart</span>
                <span className="fl-tag">Firebase</span>
                <span className="fl-tag">REST APIs</span>
                <span className="fl-tag">GraphQL</span>
                <span className="fl-tag">AWS</span>
                <span className="fl-tag">Node.js</span>
                <span className="fl-tag">PostgreSQL</span>
                <span className="fl-tag">Docker</span>
                <span className="fl-tag">CI/CD</span>
              </div>
            </div>
            <div className="fl-tech__stats fl-animate--right">
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">2</span>
                <span className="fl-stat__label">Platforms (iOS &amp; Android)</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">10+</span>
                <span className="fl-stat__label">Frameworks &amp; Tools</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">50+</span>
                <span className="fl-stat__label">Flutter Engineers</span>
              </div>
              <div className="fl-stat fl-stat--dark">
                <span className="fl-stat__number">24/7</span>
                <span className="fl-stat__label">App Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="fl-faq">
        <div className="fl-container">
          <div className="fl-faq__wrapper">
            <h3 className="fl-faq__heading fl-animate">
              Frequently Asked <span className="fl-text-accent">Questions</span>
            </h3>
            <p className="fl-faq__subtext">Everything you need to know about Flutter app development</p>

            <div className="fl-faq__list">
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>What is Flutter app development?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Flutter app development involves building cross-platform mobile applications using a single codebase for both iOS and Android devices, powered by Google&apos;s Flutter framework.</p>
                </div>
              </details>

              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Is Flutter suitable for enterprise apps?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Yes. Flutter supports scalable architecture and integrates seamlessly with backend systems, making it ideal for <a href="/enterprise-application-development-company" style={{color: "#e8a025", textDecoration: "none"}}>enterprise application development</a>.</p>
                </div>
              </details>

              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>How long does Flutter app development take?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Development timelines depend on features and complexity but are typically 30–50% faster than separate native builds thanks to the shared codebase.</p>
                </div>
              </details>

              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Do you provide post-launch support?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Yes. We offer ongoing <a href="/app-maintenance-support-services" style={{color: "#e8a025", textDecoration: "none"}}>app maintenance and support</a> including performance updates and feature enhancements.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="fl-cta">
        <div className="fl-container">
          <div className="fl-cta__inner fl-animate--scale">
            <h2 className="fl-cta__heading">
              Ready to Build <span className="fl-text-accent">Cross-Platform Apps</span>?
            </h2>
            <p className="fl-cta__text">
              Let&apos;s discuss how Flutter can accelerate your mobile app delivery and reduce development costs.
            </p>
            <a className="fl-cta__button js-open-modal" style={{cursor: "pointer"}}>
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}