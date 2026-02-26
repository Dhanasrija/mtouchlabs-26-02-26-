import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Android App Development Company | mTouch Labs",
  description:
    "mTouch Labs is an Android app development company delivering secure, scalable native mobile apps built with Kotlin and optimized for performance.",
  keywords: [
    "Android app development",
    "Android development company",
    "Kotlin app development",
    "native Android apps",
    "Android mobile apps",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/android-app-development-company",
  },
  openGraph: {
    title: "Android App Development Company | mTouch Labs",
    description: "Professional native Android app development services for scalable and high-performance mobile solutions.",
    url: "https://www.mtouchlabs.com/android-app-development-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Android App Development Company | mTouch Labs",
    description: "Custom Android app development services engineered for growth and reliability.",
  },
};

export default function AndroidAppDevelopment() {
  return (
    <>
      <section className="ad-hero">
        <div className="ad-hero__inner">
          <Breadcrumb pagePath="/android-app-development-company" />
          <h1 className="ad-hero__title">
            Native <span className="ad-hero__title-accent">Android App</span> Development Company
          </h1>
          <p className="ad-hero__subtitle">Secure, Scalable &amp; Performance-Optimized Android Applications</p>
          <p className="ad-hero__desc">mTouch Labs is a trusted Android app development company delivering secure, scalable, and performance-optimized mobile applications tailored for the Android ecosystem.</p>
        </div>
      </section>

      <section className="ad-about">
        <div className="ad-container">
          <div className="ad-about__grid">
            <div className="ad-about__content ad-animate--left">
              <h2 className="ad-about__heading">What Does an <span className="ad-text-accent">Android App Development</span> Company Do?</h2>
              <p className="ad-about__text">An Android app development company designs, develops, tests, and deploys mobile applications specifically for Android devices using native technologies such as Kotlin and Android SDK.</p>
              <p className="ad-about__text">Professional Android development ensures compatibility across diverse devices, optimized performance and memory usage, secure data handling, Google Play Store compliance, and long-term scalability.</p>
              <p className="ad-about__text">As a full-service <a href="/mobile-app-development-company" style={{color: "#e8a025", textDecoration: "none"}}>mobile app development company</a>, we build native Android apps engineered for high performance and seamless integration within the Google ecosystem.</p>
            </div>
            <div className="ad-stats ad-animate--right">
              <div className="ad-stat"><span className="ad-stat__icon">🤖</span><span className="ad-stat__label">Native Android</span></div>
              <div className="ad-stat"><span className="ad-stat__icon">🔧</span><span className="ad-stat__label">Kotlin-Powered</span></div>
              <div className="ad-stat"><span className="ad-stat__icon">🔒</span><span className="ad-stat__label">Secure Architecture</span></div>
              <div className="ad-stat"><span className="ad-stat__icon">📲</span><span className="ad-stat__label">Play Store Ready</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-whoweare">
        <div className="ad-container">
          <div className="ad-whoweare__grid">
            <div className="ad-whoweare__stats ad-animate--left">
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">14+</span><span className="ad-stat__label">Years of Experience</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">120+</span><span className="ad-stat__label">Android Apps Delivered</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">200+</span><span className="ad-stat__label">Global Clients</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">4.7★</span><span className="ad-stat__label">Avg. Play Store Rating</span></div>
            </div>
            <div className="ad-whoweare__content ad-animate--right">
              <h2 className="ad-whoweare__heading">Our <span className="ad-text-accent">Android Expertise</span></h2>
              <p className="ad-whoweare__text">We deliver end-to-end native Android development with structured engineering:</p>
              <ul className="ad-checklist">
                <li className="ad-checklist__item"><span className="ad-checklist__icon">✓</span><span>Custom Android Apps — consumer, enterprise &amp; on-demand platforms</span></li>
                <li className="ad-checklist__item"><span className="ad-checklist__icon">✓</span><span>Kotlin Development — modern architecture, clean code &amp; enhanced security</span></li>
                <li className="ad-checklist__item"><span className="ad-checklist__icon">✓</span><span>Android UI/UX — Material Design, responsive layouts &amp; accessibility</span></li>
                <li className="ad-checklist__item"><span className="ad-checklist__icon">✓</span><span>Integration Services — REST, GraphQL, Firebase &amp; payment gateways</span></li>
                <li className="ad-checklist__item"><span className="ad-checklist__icon">✓</span><span>Enterprise Solutions — workforce mobility, analytics &amp; device management</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-services">
        <div className="ad-container">
          <div className="ad-services__header ad-animate">
            <h2 className="ad-services__title">End-to-End <span className="ad-text-accent">Android Development Services</span></h2>
            <p className="ad-services__subtitle">From concept to Play Store launch, we cover every stage of Android app delivery</p>
          </div>
          <div className="ad-services__grid ad-stagger">
            <div className="ad-service-card ad-animate--scale">
              <span className="ad-service-card__badge">01</span>
              <h4 className="ad-service-card__title">Custom Android App Development</h4>
              <p className="ad-service-card__text">Consumer-facing mobile apps, enterprise mobility solutions, on-demand service platforms, eCommerce applications, and subscription-based products built with native best practices.</p>
            </div>
            <div className="ad-service-card ad-animate--scale">
              <span className="ad-service-card__badge">02</span>
              <h4 className="ad-service-card__title">Kotlin-Based Development</h4>
              <p className="ad-service-card__text">Modern Android architecture with clean, maintainable code, improved performance, enhanced security features, and reduced development errors using Kotlin.</p>
            </div>
            <div className="ad-service-card ad-animate--scale">
              <span className="ad-service-card__badge">03</span>
              <h4 className="ad-service-card__title">Android UI/UX Optimization</h4>
              <p className="ad-service-card__text">Material Design principles, responsive layouts, adaptive screen support, and gesture-friendly navigation. Our <a href="/ui-ux-design-company" style={{color: "#e8a025", textDecoration: "none"}}>UI/UX design experts</a> ensure seamless experiences across devices.</p>
            </div>
            <div className="ad-service-card ad-animate--scale">
              <span className="ad-service-card__badge">04</span>
              <h4 className="ad-service-card__title">Android App Integration</h4>
              <p className="ad-service-card__text">REST &amp; GraphQL APIs, cloud-based infrastructure, payment gateways, Firebase services, and third-party SDKs — ensuring backend scalability and real-time functionality.</p>
            </div>
            <div className="ad-service-card ad-service-card--wide ad-animate--scale">
              <span className="ad-service-card__badge">05</span>
              <h4 className="ad-service-card__title">Enterprise Android Solutions</h4>
              <p className="ad-service-card__text">Secure workforce mobility apps, internal process management, real-time analytics dashboards, device management integrations, and cloud-connected <a href="/enterprise-application-development-company" style={{color: "#e8a025", textDecoration: "none"}}>enterprise systems</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-delivery">
        <div className="ad-container">
          <h2 className="ad-delivery__heading ad-animate">Our Android <span className="ad-text-accent">Development Lifecycle</span></h2>
          <p className="ad-delivery__text">A structured process ensures predictable results and scalable architecture.</p>
          <div className="ad-delivery__steps">
            <div className="ad-step"><span className="ad-step__circle">Requirements</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">Architecture</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">UI/UX Design</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">Development</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">Device Testing</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">Optimization</span></div>
            <span className="ad-step__arrow">→</span>
            <div className="ad-step"><span className="ad-step__circle">Play Store Launch</span></div>
          </div>
        </div>
      </section>

      <section className="ad-reliable">
        <div className="ad-container">
          <div className="ad-reliable__inner ad-animate">
            <h2 className="ad-reliable__heading">Why Choose <span className="ad-text-accent">mTouch Labs</span> for Android?</h2>
            <p className="ad-reliable__text">We build Android applications that are reliable, scalable, and future-ready.</p>
            <div className="ad-reliable__pillars">
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Native Android engineering expertise</span></div>
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Kotlin-based architecture</span></div>
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Device compatibility optimization</span></div>
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Secure integration capabilities</span></div>
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Performance-focused development</span></div>
              <div className="ad-pillar"><span className="ad-pillar__dot"></span><span className="ad-pillar__label">Ongoing maintenance &amp; upgrades</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-industries">
        <div className="ad-container">
          <h2 className="ad-industries__title ad-animate">Industries We <span className="ad-text-accent">Serve</span></h2>
          <div className="ad-industries__grid ad-stagger">
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">🛒</span><h4 className="ad-industry__title">eCommerce &amp; Retail</h4></div>
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">💳</span><h4 className="ad-industry__title">FinTech &amp; Digital Payments</h4></div>
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">🩺</span><h4 className="ad-industry__title">Healthcare &amp; Telemedicine</h4></div>
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">🚚</span><h4 className="ad-industry__title">Logistics &amp; Transportation</h4></div>
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">🎓</span><h4 className="ad-industry__title">Education &amp; EdTech</h4></div>
            <div className="ad-industry ad-animate--scale"><span className="ad-industry__icon">💻</span><h4 className="ad-industry__title">SaaS &amp; Technology Startups</h4></div>
          </div>
        </div>
      </section>

      <section className="ad-tech">
        <div className="ad-container">
          <div className="ad-tech__grid">
            <div className="ad-tech__content ad-animate--left">
              <h2 className="ad-tech__heading">Technologies <span className="ad-text-accent">We Work With</span></h2>
              <p className="ad-tech__text">Our Android apps are built on modern, scalable technology stacks. For cross-platform needs, explore our <a href="/cross-platform-app-development-company" style={{color: "#e8a025", textDecoration: "none"}}>cross-platform development services</a>.</p>
              <div className="ad-tech__tags">
                <span className="ad-tag">Kotlin</span>
                <span className="ad-tag">Android SDK</span>
                <span className="ad-tag">Jetpack Compose</span>
                <span className="ad-tag">Firebase</span>
                <span className="ad-tag">Room DB</span>
                <span className="ad-tag">Retrofit</span>
                <span className="ad-tag">Dagger/Hilt</span>
                <span className="ad-tag">Coroutines</span>
                <span className="ad-tag">MVVM</span>
                <span className="ad-tag">CI/CD</span>
              </div>
            </div>
            <div className="ad-tech__stats ad-animate--right">
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">10K+</span><span className="ad-stat__label">Android Devices Supported</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">120+</span><span className="ad-stat__label">Apps Delivered</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">50+</span><span className="ad-stat__label">Android Engineers</span></div>
              <div className="ad-stat ad-stat--dark"><span className="ad-stat__number">24/7</span><span className="ad-stat__label">App Monitoring</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-faq">
        <div className="ad-container">
          <div className="ad-faq__wrapper">
            <h3 className="ad-faq__heading ad-animate">Frequently Asked <span className="ad-text-accent">Questions</span></h3>
            <p className="ad-faq__subtext">Everything you need to know about Android app development</p>
            <div className="ad-faq__list">
              <details className="ad-faq__item">
                <summary className="ad-faq__question"><span>What is Android app development?</span><span className="ad-faq__chevron"></span></summary>
                <div className="ad-faq__answer"><p>Android app development involves creating mobile applications specifically for devices running the Android operating system using native technologies like Kotlin and Android SDK.</p></div>
              </details>
              <details className="ad-faq__item">
                <summary className="ad-faq__question"><span>Why choose native Android development?</span><span className="ad-faq__chevron"></span></summary>
                <div className="ad-faq__answer"><p>Native development ensures better performance, device compatibility, and deeper integration with Android-specific features compared to hybrid approaches.</p></div>
              </details>
              <details className="ad-faq__item">
                <summary className="ad-faq__question"><span>How long does Android app development take?</span><span className="ad-faq__chevron"></span></summary>
                <div className="ad-faq__answer"><p>Timelines vary depending on features and complexity, typically ranging from several weeks to a few months for a fully tested and deployed application.</p></div>
              </details>
              <details className="ad-faq__item">
                <summary className="ad-faq__question"><span>Do you provide post-launch support?</span><span className="ad-faq__chevron"></span></summary>
                <div className="ad-faq__answer"><p>Yes. We offer ongoing <a href="/app-maintenance-support-services" style={{color: "#e8a025", textDecoration: "none"}}>app maintenance and support</a> including updates, performance optimization, and scalability enhancements.</p></div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-cta">
        <div className="ad-container">
          <div className="ad-cta__inner ad-animate--scale">
            <h2 className="ad-cta__heading">Ready to Build <span className="ad-text-accent">Powerful Android Apps</span>?</h2>
            <p className="ad-cta__text">Let&apos;s discuss how native Android development can deliver a scalable, high-performance mobile experience for your business.</p>
            <a className="ad-cta__button js-open-modal" style={{cursor: "pointer"}}>Get a Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}