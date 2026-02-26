import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cross Platform App Development Company | mTouch Labs",
  description:
    "mTouch Labs is a leading cross platform app development company offering Flutter, React Native, and hybrid mobile app solutions for scalable business growth.",
  keywords: [
    "cross platform app development",
    "cross platform mobile app development company",
    "Flutter app development company",
    "React Native development services",
    "hybrid app development",
    "mobile app development company India",
    "enterprise mobile solutions",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/cross-platform-app-development-company",
  },
  openGraph: {
    title: "Cross Platform App Development Company | mTouch Labs",
    description:
      "Scalable Flutter and React Native app development services for startups and enterprises.",
    url: "https://www.mtouchlabs.com/cross-platform-app-development-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cross Platform App Development Company | mTouch Labs",
    description:
      "Scalable Flutter and React Native app development services for startups and enterprises.",
  },
};

export default function CrossPlatformDevelopment() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="cp-hero">
        <div className="cp-hero__inner">
          <Breadcrumb pagePath="/cross-platform-app-development-company" />
          <h1 className="cp-hero__title">
            <span className="cp-hero__title-accent">Cross-Platform</span> App Development Company
          </h1>
          <p className="cp-hero__subtitle">
            Scalable &amp; Cost-Efficient Mobile Solutions — Build Once, Deploy Everywhere
          </p>
          <p className="cp-hero__desc">
            mTouch Labs is a trusted Cross Platform App Development Company delivering high-performance mobile applications that run seamlessly on iOS, Android, and web platforms using a single codebase.
          </p>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className="cp-intro">
        <div className="cp-container">
          <div className="cp-intro__grid">
            <div className="cp-intro__content cp-animate--left">
              <h2 className="cp-intro__heading">
                What is <span className="cp-text-accent">Cross Platform</span>
                <br />
                App Development?
              </h2>
              <p className="cp-intro__text">
                Cross platform app development is the process of building mobile applications that function across multiple operating systems — primarily iOS and Android — using a shared codebase.
              </p>
              <p className="cp-intro__text">
                Instead of developing separate native apps, businesses can reduce development cost, maintain a single code repository, ensure faster updates, deliver consistent user experience, and scale efficiently across platforms.
              </p>
              <p className="cp-intro__text">
                We help startups, SMEs, and enterprises reduce development time, optimize costs, and accelerate time-to-market through modern cross-platform technologies such as Flutter, React Native, and progressive frameworks.
              </p>
            </div>
            <div className="cp-stats cp-animate--right">
              <div className="cp-stat">
                <span className="cp-stat__number">60%</span>
                <span className="cp-stat__label">Faster Development</span>
              </div>
              <div className="cp-stat">
                <span className="cp-stat__number">40%</span>
                <span className="cp-stat__label">Cost Savings</span>
              </div>
              <div className="cp-stat">
                <span className="cp-stat__number">200+</span>
                <span className="cp-stat__label">Apps Delivered</span>
              </div>
              <div className="cp-stat">
                <span className="cp-stat__number">99%</span>
                <span className="cp-stat__label">Code Reusability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK SECTION ===== */}
      <section className="cp-tech">
        <div className="cp-container">
          <div className="cp-tech__grid">
            <div className="cp-tech__stats cp-animate--left">
              <div className="cp-stat cp-stat--dark">
                <span className="cp-stat__number">2</span>
                <span className="cp-stat__label">Platforms, One Build</span>
              </div>
              <div className="cp-stat cp-stat--dark">
                <span className="cp-stat__number">14+</span>
                <span className="cp-stat__label">Years of Expertise</span>
              </div>
              <div className="cp-stat cp-stat--dark">
                <span className="cp-stat__number">50+</span>
                <span className="cp-stat__label">Expert Developers</span>
              </div>
              <div className="cp-stat cp-stat--dark">
                <span className="cp-stat__number">24/7</span>
                <span className="cp-stat__label">Support &amp; Maintenance</span>
              </div>
            </div>
            <div className="cp-tech__content cp-animate--right">
              <h2 className="cp-tech__heading">
                Our <span className="cp-text-accent">Technology Stack</span>
              </h2>
              <p className="cp-tech__text">
                We work with industry-leading cross-platform frameworks to ensure your app delivers native-quality performance, smooth animations, and seamless device integration.
              </p>
              <p className="cp-tech__text">
                Our engineers are certified in Flutter and React Native with deep experience in platform-specific APIs, state management, and CI/CD pipelines for cross-platform deployment.
              </p>
              <div className="cp-tech__tags">
                <span className="cp-tag">Flutter</span>
                <span className="cp-tag">React Native</span>
                <span className="cp-tag">Dart</span>
                <span className="cp-tag">TypeScript</span>
                <span className="cp-tag">Firebase</span>
                <span className="cp-tag">GraphQL</span>
                <span className="cp-tag">REST APIs</span>
                <span className="cp-tag">Redux</span>
                <span className="cp-tag">Riverpod</span>
                <span className="cp-tag">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="cp-services">
        <div className="cp-container">
          <div className="cp-services__header cp-animate">
            <h2 className="cp-services__title">
              Our Cross Platform <span className="cp-text-accent">Development Expertise</span>
            </h2>
          </div>

          <div className="cp-services__grid cp-stagger">
            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">01</span>
              <h4 className="cp-service-card__title">Flutter App Development</h4>
              <p className="cp-service-card__text">
                Build high-performance, natively compiled applications from a single Dart codebase using Google&apos;s Flutter framework.
              </p>
              <ul className="cp-service-card__list">
                <li>High-performance UI rendering</li>
                <li>Native-like experience</li>
                <li>Faster MVP launches</li>
                <li>Web &amp; desktop support</li>
              </ul>
            </div>

            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">02</span>
              <h4 className="cp-service-card__title">React Native Development</h4>
              <p className="cp-service-card__text">
                JavaScript-powered mobile apps with reusable components and enterprise-grade scalability.
              </p>
              <ul className="cp-service-card__list">
                <li>Reusable components</li>
                <li>Seamless API integration</li>
                <li>Enterprise-grade scalability</li>
                <li>Large community &amp; third-party plugins</li>
              </ul>
            </div>

            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">03</span>
              <h4 className="cp-service-card__title">Hybrid App Development</h4>
              <p className="cp-service-card__text">
                Web + Mobile compatibility optimized for multi-device performance across all platforms.
              </p>
              <ul className="cp-service-card__list">
                <li>Web + Mobile compatibility</li>
                <li>Optimized for multi-device performance</li>
                <li>Progressive web app support</li>
                <li>Single codebase for all platforms</li>
              </ul>
            </div>

            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">04</span>
              <h4 className="cp-service-card__title">UI/UX Design for Cross-Platform</h4>
              <p className="cp-service-card__text">
                Platform-adaptive designs that respect iOS and Android design guidelines while maintaining brand consistency.
              </p>
              <ul className="cp-service-card__list">
                <li>Material Design &amp; Cupertino patterns</li>
                <li>Responsive layouts for all screen sizes</li>
                <li>Accessibility-first approach</li>
                <li>Design system creation</li>
              </ul>
            </div>

            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">05</span>
              <h4 className="cp-service-card__title">API &amp; Backend Integration</h4>
              <p className="cp-service-card__text">
                Seamless connection to your existing systems, third-party APIs, and cloud services.
              </p>
              <ul className="cp-service-card__list">
                <li>REST &amp; GraphQL integration</li>
                <li>Firebase &amp; AWS backend services</li>
                <li>Payment gateway integration</li>
                <li>Real-time data synchronization</li>
              </ul>
            </div>

            <div className="cp-service-card cp-animate--scale">
              <span className="cp-service-card__badge">06</span>
              <h4 className="cp-service-card__title">Migration &amp; Modernization</h4>
              <p className="cp-service-card__text">
                Migrate your existing native apps to a unified cross-platform codebase without losing functionality.
              </p>
              <ul className="cp-service-card__list">
                <li>Native to Flutter/React Native migration</li>
                <li>Performance benchmarking</li>
                <li>Feature parity validation</li>
                <li>Zero-downtime transition</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY APPROACH SECTION ===== */}
      <section className="cp-delivery">
        <div className="cp-container">
          <h2 className="cp-delivery__heading cp-animate">
            Our <span className="cp-text-accent">Development Process</span>
          </h2>
          <p className="cp-delivery__text">
            We follow a structured and agile approach that ensures high performance, security, and long-term scalability.
          </p>
          <div className="cp-delivery__steps">
            <div className="cp-step">
              <span className="cp-step__circle">Requirement Analysis</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">UX/UI Prototyping</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">Architecture Selection</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">Agile Development</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">Cross-Device Testing</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">Deployment &amp; ASO</span>
            </div>
            <span className="cp-step__arrow">→</span>
            <div className="cp-step">
              <span className="cp-step__circle">Monitoring &amp; Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="cp-why">
        <div className="cp-container">
          <div className="cp-why__grid">
            <div className="cp-why__content cp-animate--left">
              <h2 className="cp-why__heading">
                Why Choose <span className="cp-text-accent">mTouch Labs</span>?
              </h2>
              <p className="cp-why__text">
                As a forward-thinking Digital Transformation Company, we combine mobile engineering expertise with strategic consulting. We focus not only on app development but on delivering measurable business impact.
              </p>
              <ul className="cp-checklist">
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>Modern frameworks (Flutter, React Native)</span>
                </li>
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>Cloud-integrated mobile backend systems</span>
                </li>
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>API &amp; third-party integrations</span>
                </li>
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>Secure architecture standards</span>
                </li>
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>Performance optimization</span>
                </li>
                <li className="cp-checklist__item">
                  <span className="cp-checklist__icon">✓</span>
                  <span>Long-term technical support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES SECTION ===== */}
      <section className="cp-industries">
        <div className="cp-container">
          <h2 className="cp-industries__heading cp-animate">
            Industries <span className="cp-text-accent">We Build For</span>
          </h2>
          <div className="cp-industries__grid cp-stagger">
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">🛒</span>
              <h4 className="cp-industry__title">eCommerce &amp; Retail</h4>
            </div>
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">🏥</span>
              <h4 className="cp-industry__title">Healthcare &amp; HealthTech</h4>
            </div>
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">💰</span>
              <h4 className="cp-industry__title">FinTech &amp; Banking</h4>
            </div>
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">🎓</span>
              <h4 className="cp-industry__title">EdTech Platforms</h4>
            </div>
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">🏠</span>
              <h4 className="cp-industry__title">Real Estate &amp; PropTech</h4>
            </div>
            <div className="cp-industry cp-animate--scale">
              <span className="cp-industry__icon">🚀</span>
              <h4 className="cp-industry__title">SaaS &amp; Startups</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="cp-faq">
        <div className="cp-container">
          <div className="cp-faq__wrapper">
            <h3 className="cp-faq__heading cp-animate">Frequently Asked Questions</h3>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                  <span className="accordion-title">What is cross platform app development?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Cross platform app development allows businesses to build mobile applications for both iOS and Android using a single codebase, reducing cost and development time.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-2" aria-expanded="false">
                  <span className="accordion-title">Is cross platform development better than native?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    It depends on project requirements. Cross platform is cost-effective and faster to deploy, while native development may offer deeper hardware optimization for complex applications.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-3" aria-expanded="false">
                  <span className="accordion-title">Which frameworks does mTouch Labs use?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    We use Flutter, React Native, and modern hybrid technologies to deliver scalable mobile applications.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-4" aria-expanded="false">
                  <span className="accordion-title">How long does cross platform development take?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Typical development time ranges from 6–16 weeks depending on features, integrations, and complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cp-cta">
        <div className="cp-container">
          <div className="cp-cta__inner cp-animate--scale">
            <h2 className="cp-cta__heading">
              Ready to Build Your <span className="cp-text-accent">Cross-Platform</span> App?
            </h2>
            <p className="cp-cta__text">
              Let&apos;s discuss your project requirements and find the perfect cross-platform solution for your business.
            </p>
            <a href="/contact-us" className="cp-cta__button">
              Get a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}