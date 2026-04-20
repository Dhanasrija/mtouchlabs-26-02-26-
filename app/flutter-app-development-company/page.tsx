import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Flutter App Development Company | Cross-Platform Apps",
  description:
    "Build fast, scalable Flutter apps with mTouch Labs. Expert cross-platform mobile app development for startups and enterprises. Get a free consultation.",
  keywords: [
    "flutter app development company",
    "cross platform app development",
    "flutter developers",
    "mobile app development company",
    "flutter app development services",
    "hybrid app development",
  ],
  metadataBase: new URL("https://www.mtouchlabs.com"),
  alternates: {
    canonical: "/flutter-app-development-company",
  },
  openGraph: {
    title: "Flutter App Development Company | Cross-Platform Apps",
    description:
      "Expert Flutter app development for high-performance cross-platform mobile apps.",
    url: "https://www.mtouchlabs.com/flutter-app-development-company",
    siteName: "mTouch Labs",
    images: [
      {
        url: "/images/flutter-app-development.jpg",
        width: 1200,
        height: 630,
        alt: "Flutter App Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development Company | Cross-Platform Apps",
    description:
      "Build scalable Flutter apps for Android and iOS with expert developers.",
    images: ["/images/flutter-app-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FlutterAppDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Flutter App Development Company",
            description:
              "Build fast, scalable Flutter apps with mTouch Labs. Expert cross-platform mobile app development for startups and enterprises.",
            url: "https://www.mtouchlabs.com/flutter-app-development-company",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "Flutter App Development Company",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mtouchlabs.com" },
              {
                "@type": "ListItem",
                position: 2,
                name: "Flutter App Development Company",
                item: "https://www.mtouchlabs.com/flutter-app-development-company",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is Flutter good for startups?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Flutter is ideal for startups because it enables faster development, lower costs, and quicker product launches using a single codebase.",
                },
              },
              {
                "@type": "Question",
                name: "How much does Flutter app development cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends on app complexity, features, and integrations. At mTouch Labs, we provide tailored estimates based on your specific project requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Can Flutter apps scale for enterprise use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Flutter supports scalable architectures suitable for enterprise applications with high performance and long-term reliability.",
                },
              },
              {
                "@type": "Question",
                name: "Is Flutter better than native development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Flutter offers faster development and cost efficiency, while native development provides deeper platform control. The best choice depends on your project goals and requirements.",
                },
              },
              {
                "@type": "Question",
                name: "Do you integrate AI into Flutter apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, mTouch Labs integrates AI features such as chatbots, predictive analytics, and automation into Flutter applications to enhance user experience and functionality.",
                },
              },
            ],
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="fl-hero">
        <div className="fl-hero__inner">
          <Breadcrumb pagePath="/flutter-app-development-company" />
          <h1 className="fl-hero__title">
            Flutter <span className="fl-hero__title-accent">App</span> Development Company
          </h1>
          <p className="fl-hero__subtitle">
            Speed, Consistency &amp; Scalability in a Single Codebase
          </p>
          <p className="fl-hero__desc">
            Speed, consistency, and scalability&mdash;those are the three things modern mobile apps are judged on. At mTouch Labs, we build Flutter applications that go beyond cross-platform compatibility, creating products that are stable under real-world usage, easy to scale, and aligned with business growth. Whether you&apos;re launching a new app or rebuilding an existing one powered by <a href="/custom-software-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>custom software</a>, we help you move faster without compromising on quality.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="fl-about">
        <div className="fl-container">
          <div className="fl-about__grid">
            <div className="fl-about__content fl-animate--left">
              <h2 className="fl-about__heading">
                Why Businesses Are <span className="fl-text-accent">Choosing Flutter</span>
              </h2>
              <p className="fl-about__text">
                Many teams start with native development and later face challenges&mdash;duplicate codebases, higher costs, and slower updates. Flutter addresses these issues at the foundation with a single codebase powering both Android and iOS&mdash;and integrates cleanly with the backends built by our <a href="/web-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>web development</a> team.
              </p>
              <p className="fl-about__text">
                Flutter is not just a shortcut&mdash;it&apos;s a strategic choice when speed and efficiency matter, especially for teams building <a href="/mobile-app-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>mobile applications</a> that need to scale.
              </p>
              <ul className="fl-checklist">
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Launch products faster with a single codebase</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Reduce development and maintenance costs</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Maintain consistent UI across platforms</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Push updates simultaneously on Android &amp; iOS</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Scale without rebuilding from scratch</span></li>
              </ul>
            </div>
            <div className="fl-stats fl-animate--right">
              <div className="fl-stat"><span className="fl-stat__icon">📱</span><span className="fl-stat__label">Single Codebase</span></div>
              <div className="fl-stat"><span className="fl-stat__icon">⚡</span><span className="fl-stat__label">Fast Development</span></div>
              <div className="fl-stat"><span className="fl-stat__icon">🎨</span><span className="fl-stat__label">Consistent UI</span></div>
              <div className="fl-stat"><span className="fl-stat__icon">📈</span><span className="fl-stat__label">Scalable Architecture</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE / FLUTTER VS OTHERS ===== */}
      <section className="fl-whoweare">
        <div className="fl-container">
          <div className="fl-whoweare__grid">
            <div className="fl-whoweare__stats fl-animate--left">
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">1</span><span className="fl-stat__label">Codebase</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">2</span><span className="fl-stat__label">Platforms</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">50%</span><span className="fl-stat__label">Cost Savings</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">14+</span><span className="fl-stat__label">Years Experience</span></div>
            </div>
            <div className="fl-whoweare__content fl-animate--right">
              <h2 className="fl-whoweare__heading">
                Flutter vs <span className="fl-text-accent">Other Technologies</span>
              </h2>
              <p className="fl-whoweare__text">
                Choosing Flutter often comes down to comparing it with alternatives. Native apps offer deep platform control but require separate teams and higher costs&mdash;Flutter delivers similar performance with a unified approach. React Native relies heavily on third-party libraries that can create inconsistencies, while Flutter provides a more controlled and consistent UI framework. Read our deeper <a href="/blog" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>Flutter vs React Native comparison</a>.
              </p>
              <ul className="fl-checklist">
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Faster development cycles</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Predictable UI behavior</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Lower long-term maintenance costs</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Consistent experience on Android &amp; iOS</span></li>
                <li className="fl-checklist__item"><span className="fl-checklist__icon">✓</span><span>Strong community &amp; Google backing</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="fl-services">
        <div className="fl-container">
          <div className="fl-services__header fl-animate">
            <h2 className="fl-services__title">
              Flutter App <span className="fl-text-accent">Development Services</span>
            </h2>
            <p className="fl-services__subtitle">
              Complete Flutter development services designed to support your product from idea to scale
            </p>
          </div>
          <div className="fl-services__grid fl-stagger">
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">01</span>
              <h4 className="fl-service-card__title">Custom Flutter App Development</h4>
              <p className="fl-service-card__text">
                We build applications tailored to your business workflows, ensuring flexibility, performance, and long-term maintainability.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">02</span>
              <h4 className="fl-service-card__title">Cross-Platform Mobile Apps</h4>
              <p className="fl-service-card__text">
                Our Flutter solutions deliver a consistent experience across Android and iOS without duplicating effort or team capacity.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">03</span>
              <h4 className="fl-service-card__title">Flutter UI/UX Design</h4>
              <p className="fl-service-card__text">
                We design interfaces that are not only visually appealing but also intuitive and conversion-focused, led by our <a href="/ui-ux-design-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>UI/UX design</a> team.
              </p>
            </div>
            <div className="fl-service-card fl-animate--scale">
              <span className="fl-service-card__badge">04</span>
              <h4 className="fl-service-card__title">App Migration to Flutter</h4>
              <p className="fl-service-card__text">
                If your existing app is difficult to maintain or scale, we help you transition to Flutter with minimal disruption.
              </p>
            </div>
            <div className="fl-service-card fl-service-card--wide fl-animate--scale">
              <span className="fl-service-card__badge">05</span>
              <h4 className="fl-service-card__title">AI-Powered Flutter Applications</h4>
              <p className="fl-service-card__text">
                Mobile apps are evolving from static tools into intelligent systems. We integrate AI into Flutter apps for smart chat interfaces, personalized experiences, predictive features, and automated workflows&mdash;building on our <a href="/generative-ai-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>generative AI expertise</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY / APPROACH ===== */}
      <section className="fl-delivery">
        <div className="fl-container">
          <h2 className="fl-delivery__heading fl-animate">
            Our <span className="fl-text-accent">Development Approach</span>
          </h2>
          <p className="fl-delivery__text">
            We focus on building apps that perform well beyond the launch phase. Learn the <a href="/blog" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>cross-platform app development benefits</a> in our insights hub.
          </p>
          <div className="fl-delivery__steps">
            <div className="fl-step"><span className="fl-step__circle">Understanding the Product</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Designing for Real Usage</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Scalable Development</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Testing Under Real Conditions</span></div>
            <span className="fl-step__arrow">→</span>
            <div className="fl-step"><span className="fl-step__circle">Continuous Improvement</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE / RELIABLE ===== */}
      <section className="fl-reliable">
        <div className="fl-container">
          <div className="fl-reliable__inner fl-animate">
            <h2 className="fl-reliable__heading">
              Why <span className="fl-text-accent">Choose mTouch Labs</span>?
            </h2>
            <p className="fl-reliable__text">
              Many companies can build Flutter apps. The difference lies in how they approach the product. We don&apos;t just build apps&mdash;we help you build products that last. Explore our <a href="/portfolio" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>portfolio</a> for Flutter-delivered examples.
            </p>
            <div className="fl-reliable__pillars">
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Focus on business outcomes, not just features</span></div>
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Scalable and maintainable systems</span></div>
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Modern technologies like AI where it adds value</span></div>
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Transparency throughout the process</span></div>
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Long-term support, not just delivery</span></div>
              <div className="fl-pillar"><span className="fl-pillar__dot"></span><span className="fl-pillar__label">Business-first engineering approach</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES / WHERE FLUTTER WORKS BEST ===== */}
      <section className="fl-industries">
        <div className="fl-container">
          <h2 className="fl-industries__title fl-animate">
            Where Flutter <span className="fl-text-accent">Works Best</span>
          </h2>
          <div className="fl-industries__grid fl-stagger">
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">🚀</span><h4 className="fl-industry__title">Startup MVPs</h4></div>
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">💻</span><h4 className="fl-industry__title">SaaS Mobile Apps</h4></div>
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">🛒</span><h4 className="fl-industry__title">eCommerce Apps</h4></div>
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">🏢</span><h4 className="fl-industry__title">Enterprise Tools</h4></div>
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">🎨</span><h4 className="fl-industry__title">UI-Rich Apps</h4></div>
            <div className="fl-industry fl-animate--scale"><span className="fl-industry__icon">🤖</span><h4 className="fl-industry__title">AI-Powered Apps</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECH / COST ===== */}
      <section className="fl-tech">
        <div className="fl-container">
          <div className="fl-tech__grid">
            <div className="fl-tech__content fl-animate--left">
              <h2 className="fl-tech__heading">
                Cost of <span className="fl-text-accent">Flutter Development</span>
              </h2>
              <p className="fl-tech__text">
                One of Flutter&apos;s biggest advantages is cost efficiency&mdash;but actual cost depends on feature complexity, integrations (payments, APIs, AI), design requirements, and timeline. Simple apps are faster and more affordable, while complex apps require higher investment but deliver better long-term ROI.
              </p>
              <div className="fl-tech__tags">
                {[
                  "Flutter",
                  "Dart",
                  "Firebase",
                  "REST APIs",
                  "GraphQL",
                  "BLoC",
                  "Riverpod",
                  "Provider",
                  "SQLite",
                  "Hive",
                  "AWS",
                  "Google Cloud",
                  "Stripe",
                  "Payment Gateways",
                  "Push Notifications",
                  "Analytics",
                ].map((t) => (
                  <span key={t} className="fl-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="fl-tech__stats fl-animate--right">
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">15+</span><span className="fl-stat__label">Flutter Tools</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">AI</span><span className="fl-stat__label">Integrations</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">ROI</span><span className="fl-stat__label">Focused Builds</span></div>
              <div className="fl-stat fl-stat--dark"><span className="fl-stat__number">2</span><span className="fl-stat__label">Cloud Platforms</span></div>
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
            <p className="fl-faq__subtext">Everything about Flutter app development</p>
            <div className="fl-faq__list">
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Is Flutter good for startups?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Yes, Flutter is ideal for startups because it enables faster development, lower costs, and quicker product launches using a single codebase.</p>
                </div>
              </details>
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>How much does Flutter app development cost?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>The cost depends on app complexity, features, and integrations. At mTouch Labs, we provide tailored estimates based on your specific project requirements.</p>
                </div>
              </details>
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Can Flutter apps scale for enterprise use?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Yes, Flutter supports scalable architectures suitable for <a href="/enterprise-application-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>enterprise applications</a> with high performance and long-term reliability.</p>
                </div>
              </details>
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Is Flutter better than native development?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Flutter offers faster development and cost efficiency, while native development provides deeper platform control. The best choice depends on your project goals and requirements.</p>
                </div>
              </details>
              <details className="fl-faq__item">
                <summary className="fl-faq__question">
                  <span>Do you integrate AI into Flutter apps?</span>
                  <span className="fl-faq__chevron"></span>
                </summary>
                <div className="fl-faq__answer">
                  <p>Yes, mTouch Labs integrates AI features such as chatbots, predictive analytics, and automation into Flutter applications to enhance user experience and functionality.</p>
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
              Let&apos;s Build Your <span className="fl-text-accent">Flutter App</span>
            </h2>
            <p className="fl-cta__text">
              If you&apos;re planning to build a mobile application that is fast, scalable, and future-ready, Flutter is a strong choice&mdash;and mTouch Labs is here to make it happen. <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Contact us</a> and let&apos;s turn your idea into a product that delivers real value.
            </p>
            <button type="button" className="fl-cta__button js-open-modal">
              Start Your Flutter Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
