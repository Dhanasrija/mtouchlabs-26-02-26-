import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Development Company in Hyderabad | AI Web Solutions",
  description:
    "mTouch Labs is a leading web development company offering custom websites and AI-powered web application development for startups & enterprises. Get a free consultation.",
  keywords: [
    "web development company",
    "web development company in Hyderabad",
    "web application development company",
    "custom web development services",
    "AI web development company",
    "SaaS development company",
    "website development company India",
  ],
  metadataBase: new URL("https://www.mtouchlabs.com"),
  alternates: {
    canonical: "/web-development-company",
  },
  openGraph: {
    title: "Web Development Company | mTouch Labs",
    description:
      "Build scalable websites and AI-powered web applications with mTouch Labs. Expert solutions for startups and enterprises.",
    url: "https://www.mtouchlabs.com/web-development-company",
    siteName: "mTouch Labs",
    images: [
      {
        url: "/images/web-development.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Hyderabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | mTouch Labs",
    description:
      "Custom websites and AI-powered web applications built for performance and scalability.",
    images: ["/images/web-development.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WebDevelopment() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Development Company",
            description:
              "mTouch Labs is a leading web development company offering custom websites and AI-powered web application development for startups & enterprises.",
            url: "https://www.mtouchlabs.com/web-development-company",
            provider: {
              "@type": "Organization",
              name: "mTouch Labs",
              url: "https://www.mtouchlabs.com",
              logo: "https://www.mtouchlabs.com/images/mtouchlabs-logo.svg",
            },
            areaServed: { "@type": "Country", name: "Worldwide" },
            serviceType: "Web Development Company",
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
                name: "Web Development Company",
                item: "https://www.mtouchlabs.com/web-development-company",
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
                name: "What does a web development company do?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A web development company designs and builds websites and web applications tailored to business needs, ensuring performance, scalability, and user experience.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between a website and a web application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A website is typically informational, while a web application is interactive and allows users to perform tasks such as managing data or using software online.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide web application development services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, mTouch Labs develops scalable web applications including SaaS platforms, dashboards, and enterprise solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Do you use AI in web development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we integrate AI features such as chatbots, automation, and predictive analytics to enhance functionality and user experience.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to develop a website or web application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline depends on the complexity of the project and can range from a few weeks to several months.",
                },
              },
            ],
          }),
        }}
      />

      {/* ===== HERO ===== */}
      <section className="wd-hero">
        <div className="wd-hero__inner">
          <Breadcrumb pagePath="/web-development-company" />
          <h1 className="wd-hero__title">
            Web <span className="wd-hero__title-accent">Development</span> Company in Hyderabad
          </h1>
          <p className="wd-hero__subtitle">
            High-Performance Websites &amp; Intelligent Web Applications
          </p>
          <p className="wd-hero__desc">
            Building a website today is no longer just about having an online presence&mdash;it&apos;s about creating a digital experience that performs, scales, and drives measurable business outcomes. At mTouch Labs, we design and build high-performance websites and intelligent web applications that help businesses grow, automate operations, and stay ahead in a competitive digital landscape. Whether you are a startup launching your first product or an enterprise looking to modernize your systems with <a href="/custom-software-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>custom software development</a>, our solutions are built to deliver long-term value.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="wd-about">
        <div className="wd-container">
          <div className="wd-about__grid">
            <div className="wd-about__content wd-animate--left">
              <h2 className="wd-about__heading">
                Custom Web Development Services That Go{" "}
                <span className="wd-text-accent">Beyond Code</span>
              </h2>
              <p className="wd-about__text">
                Every business is different. That&apos;s why we don&apos;t believe in one-size-fits-all solutions. Our custom web development services are designed to align with your specific goals, workflows, and customer expectations, and extend naturally into <a href="/mobile-app-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>mobile app development</a> when you need a unified presence.
              </p>
              <p className="wd-about__text">
                From simple corporate websites to complex digital platforms, we focus on building solutions that are fast, secure, and scalable&mdash;backed by our <a href="/ui-ux-design-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>UI/UX design expertise</a> that drives engagement.
              </p>
              <ul className="wd-checklist">
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Loads quickly and performs seamlessly</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Fully responsive across all devices</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Optimized for search engines from day one</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Provides a smooth and engaging user experience</span></li>
              </ul>
            </div>
            <div className="wd-stats wd-animate--right">
              <div className="wd-stat"><span className="wd-stat__icon">🌐</span><span className="wd-stat__label">SEO-Ready Architecture</span></div>
              <div className="wd-stat"><span className="wd-stat__icon">⚡</span><span className="wd-stat__label">Core Web Vitals Optimized</span></div>
              <div className="wd-stat"><span className="wd-stat__icon">📱</span><span className="wd-stat__label">Mobile-First Responsive</span></div>
              <div className="wd-stat"><span className="wd-stat__icon">🔒</span><span className="wd-stat__label">Secure Infrastructure</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE / WEB APPLICATION ===== */}
      <section className="wd-whoweare">
        <div className="wd-container">
          <div className="wd-whoweare__grid">
            <div className="wd-whoweare__stats wd-animate--left">
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">500+</span><span className="wd-stat__label">Projects Delivered</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">14+</span><span className="wd-stat__label">Years Experience</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">SaaS</span><span className="wd-stat__label">Platforms Built</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">AI</span><span className="wd-stat__label">Powered Solutions</span></div>
            </div>
            <div className="wd-whoweare__content wd-animate--right">
              <h2 className="wd-whoweare__heading">
                Web Application <span className="wd-text-accent">Development Company</span>
              </h2>
              <p className="wd-whoweare__text">
                As businesses evolve, static websites are no longer enough. You need dynamic systems that can handle real-time data, automation, and user interaction. That&apos;s where we step in as a web application development company, designing <a href="/saas-development-services" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>SaaS platforms</a> and business tools that scale with you.
              </p>
              <ul className="wd-checklist">
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>SaaS platforms &amp; subscription products</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Admin dashboards &amp; analytics portals</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Customer portals &amp; self-service tools</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Enterprise business tools</span></li>
                <li className="wd-checklist__item"><span className="wd-checklist__icon">✓</span><span>Workflow automation systems</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES / AI IN WEB DEV ===== */}
      <section className="wd-services">
        <div className="wd-container">
          <div className="wd-services__header wd-animate">
            <h2 className="wd-services__title">
              AI in Web Development: <span className="wd-text-accent">Smarter Digital Experiences</span>
            </h2>
            <p className="wd-services__subtitle">
              Combining AI with web development to build platforms that are not just functional&mdash;but intelligent
            </p>
          </div>
          <div className="wd-services__grid wd-stagger">
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">01</span>
              <h4 className="wd-service-card__title">Personalized User Experiences</h4>
              <p className="wd-service-card__text">
                Adaptive platforms that tailor content, products, and journeys based on user behavior and preferences in real time&mdash;ideal for <a href="/ecommerce-app-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>ecommerce development</a> and SaaS portals.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">02</span>
              <h4 className="wd-service-card__title">AI-Powered Chatbots</h4>
              <p className="wd-service-card__text">
                Intelligent assistants that handle support, guide users, and answer queries 24/7 without increasing operational load.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">03</span>
              <h4 className="wd-service-card__title">Predictive Analytics</h4>
              <p className="wd-service-card__text">
                Data-driven insights that help you make better decisions, identify trends, and optimize conversion paths.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">04</span>
              <h4 className="wd-service-card__title">Automated Workflows</h4>
              <p className="wd-service-card__text">
                AI-driven automation that reduces manual effort across forms, notifications, approvals, and internal processes.
              </p>
            </div>
            <div className="wd-service-card wd-service-card--wide wd-animate--scale">
              <span className="wd-service-card__badge">05</span>
              <h4 className="wd-service-card__title">Smart Recommendation Systems</h4>
              <p className="wd-service-card__text">
                Dynamic product and content recommendations that increase engagement and conversions, powered by our <a href="/generative-ai-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>generative AI capabilities</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY / PROCESS ===== */}
      <section className="wd-delivery">
        <div className="wd-container">
          <h2 className="wd-delivery__heading wd-animate">
            Our Web Development <span className="wd-text-accent">Process</span>
          </h2>
          <p className="wd-delivery__text">
            A structured yet flexible approach that ensures efficient delivery and meets your expectations. Read our <a href="/blog" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>AI in web development</a> insights for a deeper look.
          </p>
          <div className="wd-delivery__steps">
            <div className="wd-step"><span className="wd-step__circle">Discovery &amp; Strategy</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">UI/UX Design</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Development</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Testing &amp; Optimization</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Launch &amp; Support</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE / RELIABLE ===== */}
      <section className="wd-reliable">
        <div className="wd-container">
          <div className="wd-reliable__inner wd-animate">
            <h2 className="wd-reliable__heading">
              Why <span className="wd-text-accent">Choose mTouch Labs</span>?
            </h2>
            <p className="wd-reliable__text">
              Choosing the right development partner can define your digital success. We don&apos;t just deliver projects&mdash;we build long-term partnerships that help your business grow and adapt over time. See delivered examples in our <a href="/portfolio" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>portfolio</a>.
            </p>
            <div className="wd-reliable__pillars">
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">Business-focused development approach</span></div>
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">Strong web &amp; web application expertise</span></div>
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">AI-driven innovation</span></div>
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">Scalable and future-ready solutions</span></div>
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">Transparent communication</span></div>
              <div className="wd-pillar"><span className="wd-pillar__dot"></span><span className="wd-pillar__label">Agile execution &amp; long-term support</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="wd-industries">
        <div className="wd-container">
          <h2 className="wd-industries__title wd-animate">
            Industries <span className="wd-text-accent">We Serve</span>
          </h2>
          <div className="wd-industries__grid wd-stagger">
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">🛒</span><h4 className="wd-industry__title">eCommerce</h4></div>
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">🏥</span><h4 className="wd-industry__title">Healthcare</h4></div>
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">💳</span><h4 className="wd-industry__title">Fintech</h4></div>
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">🎓</span><h4 className="wd-industry__title">Education</h4></div>
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">🚚</span><h4 className="wd-industry__title">Logistics</h4></div>
            <div className="wd-industry wd-animate--scale"><span className="wd-industry__icon">🏠</span><h4 className="wd-industry__title">Real Estate</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECH ===== */}
      <section className="wd-tech">
        <div className="wd-container">
          <div className="wd-tech__grid">
            <div className="wd-animate--left">
              <h2 className="wd-tech__heading">
                Technologies <span className="wd-text-accent">We Use</span>
              </h2>
              <p className="wd-tech__text">
                We leverage modern technologies to build reliable and scalable solutions across the full stack.
              </p>
              <div className="wd-tech__tags">
                {[
                  "React.js",
                  "Next.js",
                  "Vue.js",
                  "Node.js",
                  "Python",
                  "PHP",
                  "MongoDB",
                  "MySQL",
                  "PostgreSQL",
                  "AWS",
                  "Google Cloud",
                  "OpenAI APIs",
                  "Machine Learning",
                  "REST APIs",
                  "GraphQL",
                  "Docker",
                ].map((t) => (
                  <span key={t} className="wd-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="wd-tech__stats wd-animate--right">
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">16+</span><span className="wd-stat__label">Tech Stacks</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">AI</span><span className="wd-stat__label">Integrations</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">2</span><span className="wd-stat__label">Cloud Platforms</span></div>
              <div className="wd-stat wd-stat--dark"><span className="wd-stat__number">Full</span><span className="wd-stat__label">Stack Coverage</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="wd-faq">
        <div className="wd-container">
          <div className="wd-faq__wrapper">
            <h3 className="wd-faq__heading wd-animate">
              Frequently Asked <span className="wd-text-accent">Questions</span>
            </h3>
            <p className="wd-faq__subtext">Everything about web development &amp; web applications</p>
            <div className="wd-faq__list">
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>What does a web development company do?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>A web development company designs and builds websites and web applications tailored to business needs, ensuring performance, scalability, and user experience.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>What is the difference between a website and a web application?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>A website is typically informational, while a web application is interactive and allows users to perform tasks such as managing data or using software online.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>Do you provide web application development services?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>Yes, mTouch Labs develops scalable <a href="/enterprise-application-development-company" style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}>web applications</a> including SaaS platforms, dashboards, and enterprise solutions.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>Do you use AI in web development?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>Yes, we integrate AI features such as chatbots, automation, and predictive analytics to enhance functionality and user experience.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>How long does it take to develop a website or web application?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>The timeline depends on the complexity of the project and can range from a few weeks to several months.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="wd-cta">
        <div className="wd-container">
          <div className="wd-cta__inner wd-animate--scale">
            <h2 className="wd-cta__heading">
              Ready to Build Your <span className="wd-text-accent">Digital Solution</span>?
            </h2>
            <p className="wd-cta__text">
              Whether you need a high-performing website or a powerful web application, mTouch Labs is here to help. <a href="/contact-us" style={{ color: "#ffffff", textDecoration: "underline", fontWeight: 600 }}>Get in touch</a> and let&apos;s build something that not only works&mdash;but grows with your business.
            </p>
            <button type="button" className="wd-cta__button js-open-modal">
              Start Your Web Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
