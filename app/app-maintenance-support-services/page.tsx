import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "App Maintenance & Support Services | mTouch Labs",
  description:
    "mTouch Labs provides reliable app maintenance and support services including bug fixes, performance optimization, security updates, and SLA-based application support.",
  keywords: [
    "app maintenance services",
    "application support services",
    "mobile app maintenance company",
    "software maintenance company",
    "post launch app support",
    "application maintenance company India",
    "SLA based IT support services",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/app-maintenance-support-services",
  },
  openGraph: {
    title: "App Maintenance & Support Services | mTouch Labs",
    description:
      "Secure and scalable application maintenance services for mobile and web apps.",
    url: "https://www.mtouchlabs.com/app-maintenance-support-services",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Maintenance & Support Services | mTouch Labs",
    description:
      "Secure and scalable application maintenance services for mobile and web apps.",
  },
};

export default function AppMaintenanceSupport() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="am-hero">
        <div className="am-hero__inner">
          <Breadcrumb pagePath="/app-maintenance-support-services" />
          <h1 className="am-hero__title">
            App <span className="am-hero__title-accent">Maintenance</span> &amp; Support Services
          </h1>
          <p className="am-hero__subtitle">
            Reliable Application Support &amp; Long-Term Performance Optimization
          </p>
          <p className="am-hero__desc">
            mTouch Labs provides comprehensive App Maintenance and Support Services to ensure your mobile and web applications remain secure, scalable, and high-performing long after launch.
          </p>
        </div>
      </section>

      {/* ===== WHY MAINTENANCE — About Section ===== */}
      <section className="am-about">
        <div className="am-container">
          <div className="am-about__grid">
            <div className="am-about__content am-animate--left">
              <h2 className="am-about__heading">
                Why App <span className="am-text-accent">Maintenance</span> Is Critical
              </h2>
              <p className="am-about__text">
                Launching an app is just the beginning. Continuous maintenance ensures bug fixes, performance optimization, security updates, OS and framework compatibility upgrades, feature enhancements, and server monitoring.
              </p>
              <p className="am-about__text">
                Without proper maintenance, applications risk downtime, security breaches, and performance degradation that directly impact user trust and business revenue. Whether your app was built with{" "}
                <a href="/mobile-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>mobile development</a>,{" "}
                <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web development</a>, or{" "}
                <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise platforms</a> — ongoing maintenance is essential.
              </p>
              <p className="am-about__text">
                As a trusted IT Services and Digital Transformation Company, we help businesses maintain application stability, improve performance, and continuously optimize features to adapt to evolving user expectations.
              </p>
            </div>
            <div className="am-stats am-animate--right">
              <div className="am-stat">
                <span className="am-stat__icon">🔧</span>
                <span className="am-stat__label">Bug Fixes &amp; Optimization</span>
              </div>
              <div className="am-stat">
                <span className="am-stat__icon">🔒</span>
                <span className="am-stat__label">Security Patching</span>
              </div>
              <div className="am-stat">
                <span className="am-stat__icon">📱</span>
                <span className="am-stat__label">OS Compatibility Updates</span>
              </div>
              <div className="am-stat">
                <span className="am-stat__icon">📈</span>
                <span className="am-stat__label">Performance Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR EXPERTISE — Who We Are Section ===== */}
      <section className="am-whoweare">
        <div className="am-container">
          <div className="am-whoweare__grid">
            <div className="am-whoweare__stats am-animate--left">
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">99.9%</span>
                <span className="am-stat__label">Uptime Guarantee</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">4hr</span>
                <span className="am-stat__label">Response Time</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">1500+</span>
                <span className="am-stat__label">Apps Maintained</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">24/7</span>
                <span className="am-stat__label">Monitoring &amp; Support</span>
              </div>
            </div>
            <div className="am-whoweare__content am-animate--right">
              <h2 className="am-whoweare__heading">
                Mobile &amp; Web <span className="am-text-accent">Application Support</span>
              </h2>
              <p className="am-whoweare__text">
                We provide support for all types of applications:
              </p>
              <ul className="am-checklist">
                <li className="am-checklist__item">
                  <span className="am-checklist__icon">✓</span>
                  <span>Native mobile apps (<a href="/ios-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>iOS</a> &amp; <a href="/android-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Android</a>)</span>
                </li>
                <li className="am-checklist__item">
                  <span className="am-checklist__icon">✓</span>
                  <span>Cross-platform apps (<a href="/flutter-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Flutter</a>, <a href="/react-native-app-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>React Native</a>)</span>
                </li>
                <li className="am-checklist__item">
                  <span className="am-checklist__icon">✓</span>
                  <span>Web applications (React, Next.js, Angular)</span>
                </li>
                <li className="am-checklist__item">
                  <span className="am-checklist__icon">✓</span>
                  <span>SaaS platforms &amp; enterprise systems</span>
                </li>
                <li className="am-checklist__item">
                  <span className="am-checklist__icon">✓</span>
                  <span>Third-party developed applications (full audit &amp; takeover)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID — Service Cards ===== */}
      <section className="am-services">
        <div className="am-container">
          <div className="am-services__header am-animate">
            <h2 className="am-services__title">
              Our App <span className="am-text-accent">Maintenance Services</span>
            </h2>
            <p className="am-services__subtitle">
              Comprehensive maintenance across four key areas
            </p>
          </div>

          <div className="am-services__grid am-stagger">
            <div className="am-service-card am-animate--scale">
              <span className="am-service-card__badge">01</span>
              <h4 className="am-service-card__title">Corrective Maintenance</h4>
              <p className="am-service-card__text">
                Bug identification &amp; resolution, error fixes, crash monitoring, and code optimization to keep apps running smoothly.
              </p>
            </div>
            <div className="am-service-card am-animate--scale">
              <span className="am-service-card__badge">02</span>
              <h4 className="am-service-card__title">Adaptive Maintenance</h4>
              <p className="am-service-card__text">
                OS version updates (iOS, Android), framework upgrades, API compatibility updates, and cloud infrastructure adjustments.
              </p>
            </div>
            <div className="am-service-card am-animate--scale">
              <span className="am-service-card__badge">03</span>
              <h4 className="am-service-card__title">Preventive Maintenance</h4>
              <p className="am-service-card__text">
                Security patching, performance monitoring, code refactoring, and database optimization for proactive protection.
              </p>
            </div>
            <div className="am-service-card am-animate--scale">
              <span className="am-service-card__badge">04</span>
              <h4 className="am-service-card__title">Perfective Maintenance</h4>
              <p className="am-service-card__text">
                Feature enhancements, UI/UX improvements, scalability upgrades, and user feedback implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAINTENANCE PROCESS — Delivery Steps ===== */}
      <section className="am-delivery">
        <div className="am-container">
          <h2 className="am-delivery__heading am-animate">
            Our <span className="am-text-accent">Maintenance Process</span>
          </h2>
          <p className="am-delivery__text">
            This structured approach ensures long-term system stability and measurable business value.
          </p>
          <div className="am-delivery__steps">
            <div className="am-step">
              <span className="am-step__circle">Health Audit</span>
            </div>
            <span className="am-step__arrow">→</span>
            <div className="am-step">
              <span className="am-step__circle">Security Assessment</span>
            </div>
            <span className="am-step__arrow">→</span>
            <div className="am-step">
              <span className="am-step__circle">Strategy Planning</span>
            </div>
            <span className="am-step__arrow">→</span>
            <div className="am-step">
              <span className="am-step__circle">SLA-Based Support</span>
            </div>
            <span className="am-step__arrow">→</span>
            <div className="am-step">
              <span className="am-step__circle">Continuous Monitoring</span>
            </div>
            <span className="am-step__arrow">→</span>
            <div className="am-step">
              <span className="am-step__circle">Performance Review</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US — Reliable Section ===== */}
      <section className="am-reliable">
        <div className="am-container">
          <div className="am-reliable__inner am-animate">
            <h2 className="am-reliable__heading">
              Why Choose <span className="am-text-accent">mTouch Labs</span>?
            </h2>
            <p className="am-reliable__text">
              We ensure your application evolves with business growth and technology advancements.
            </p>
            <div className="am-reliable__pillars">
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">Dedicated support teams</span>
              </div>
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">SLA-based response times</span>
              </div>
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">24/7 monitoring options</span>
              </div>
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">Secure cloud infrastructure management</span>
              </div>
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">Transparent reporting</span>
              </div>
              <div className="am-pillar">
                <span className="am-pillar__dot"></span>
                <span className="am-pillar__label">Scalable long-term support models</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="am-industries">
        <div className="am-container">
          <h2 className="am-industries__title am-animate">
            Industries We <span className="am-text-accent">Support</span>
          </h2>
          <div className="am-industries__grid am-stagger">
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">🛒</span>
              <h4 className="am-industry__title">eCommerce &amp; Retail</h4>
            </div>
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">🏥</span>
              <h4 className="am-industry__title">Healthcare &amp; HealthTech</h4>
            </div>
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">💰</span>
              <h4 className="am-industry__title">FinTech &amp; Banking</h4>
            </div>
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">🎓</span>
              <h4 className="am-industry__title">EdTech Platforms</h4>
            </div>
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">🏠</span>
              <h4 className="am-industry__title">Real Estate &amp; SaaS</h4>
            </div>
            <div className="am-industry am-animate--scale">
              <span className="am-industry__icon">🏢</span>
              <h4 className="am-industry__title">Enterprise Applications</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="am-tech">
        <div className="am-container">
          <div className="am-tech__grid">
            <div className="am-tech__content am-animate--left">
              <h2 className="am-tech__heading">
                Technologies <span className="am-text-accent">We Support</span>
              </h2>
              <p className="am-tech__text">
                We maintain applications built on all modern frameworks and cloud platforms.
              </p>
              <div className="am-tech__tags">
                {[
                  "React Native", "Flutter", "iOS Native", "Android Native",
                  "Node.js", "Next.js", "AWS", "Azure",
                  "Google Cloud", "DevOps CI/CD"
                ].map((tech) => (
                  <span key={tech} className="am-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="am-tech__stats am-animate--right">
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">10+</span>
                <span className="am-stat__label">Frameworks Supported</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">3</span>
                <span className="am-stat__label">Cloud Platforms</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">150+</span>
                <span className="am-stat__label">Expert Engineers</span>
              </div>
              <div className="am-stat am-stat--dark">
                <span className="am-stat__number">24/7</span>
                <span className="am-stat__label">Monitoring &amp; Alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="am-faq">
        <div className="am-container">
          <div className="am-faq__wrapper">
            <h3 className="am-faq__heading am-animate">
              Frequently Asked <span className="am-text-accent">Questions</span>
            </h3>
            <p className="am-faq__subtext">Everything you need to know about our maintenance services</p>
            <div className="am-faq__list">
              <details className="am-faq__item">
                <summary className="am-faq__question">
                  <span>What are app maintenance services?</span>
                  <span className="am-faq__chevron"></span>
                </summary>
                <div className="am-faq__answer">
                  <p>App maintenance services include ongoing updates, bug fixes, performance improvements, security patches, and feature enhancements to ensure application stability.</p>
                </div>
              </details>
              <details className="am-faq__item">
                <summary className="am-faq__question">
                  <span>How often should an app be maintained?</span>
                  <span className="am-faq__chevron"></span>
                </summary>
                <div className="am-faq__answer">
                  <p>Applications should be monitored continuously and updated regularly to ensure security, compatibility, and optimal performance.</p>
                </div>
              </details>
              <details className="am-faq__item">
                <summary className="am-faq__question">
                  <span>Does mTouch Labs provide SLA-based support?</span>
                  <span className="am-faq__chevron"></span>
                </summary>
                <div className="am-faq__answer">
                  <p>Yes. We offer structured support plans with defined response times and performance monitoring.</p>
                </div>
              </details>
              <details className="am-faq__item">
                <summary className="am-faq__question">
                  <span>Can you maintain apps developed by other companies?</span>
                  <span className="am-faq__chevron"></span>
                </summary>
                <div className="am-faq__answer">
                  <p>Yes. We conduct technical audits and provide full maintenance support for third-party developed applications.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="am-cta">
        <div className="am-container">
          <div className="am-cta__inner am-animate--scale">
            <h2 className="am-cta__heading">
              Need Reliable <span className="am-text-accent">App Support</span>?
            </h2>
            <p className="am-cta__text">
              Let&apos;s discuss how our maintenance services can keep your applications secure, fast, and future-ready.
            </p>
            <button type="button" className="am-cta__button js-open-modal">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </>
  );
}