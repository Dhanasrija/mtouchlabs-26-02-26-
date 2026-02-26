import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Web Development Company | Custom Website & Web Application Experts | mTouch Labs",
  description:
    "mTouch Labs is a professional web development company delivering custom websites, web applications, and scalable enterprise web solutions optimized for performance and growth.",
  keywords: [
    "web development company",
    "custom web development company",
    "website development services",
    "enterprise web development company",
    "web application development company",
    "professional web development services India",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/web-development-company",
  },
  openGraph: {
    title: "Web Development Company | mTouch Labs",
    description:
      "Custom website and enterprise web application development services designed for scalability and performance.",
    url: "https://www.mtouchlabs.com/web-development-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company | mTouch Labs",
    description:
      "Professional web development services including custom websites and enterprise web applications.",
  },
};

export default function WebDevelopment() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="wd-hero">
        <div className="wd-hero__inner">
          <Breadcrumb pagePath="/web-development-company" />
          <h1 className="wd-hero__title">
            Web <span className="wd-hero__title-accent">Development</span> Company
          </h1>
          <p className="wd-hero__subtitle">
            Engineering High-Performance Websites That Drive Business Growth
          </p>
          <p className="wd-hero__desc">
            mTouch Labs is a results-driven Web Development Company delivering fast, secure, and scalable websites built to convert visitors into customers. We design and develop performance-optimized digital platforms that combine modern architecture, search-friendly structure, and user-focused design. Your website should work as a growth engine — not just an online brochure.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="wd-about">
        <div className="wd-container">
          <div className="wd-about__grid">
            <div className="wd-about__content wd-animate--left">
              <h2 className="wd-about__heading">
                What Defines a Professional{" "}
                <span className="wd-text-accent">Web Development Company</span>?
              </h2>
              <p className="wd-about__text">
                A modern business website must deliver speed optimized for Core Web Vitals, SEO-ready architecture, mobile-first responsiveness, secure backend infrastructure, seamless integrations, and scalable performance.
              </p>
              <p className="wd-about__text">
                At mTouch Labs, we approach web development as a strategic investment — aligning design, engineering, and performance metrics from day one. Our{" "}
                <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design expertise</a>{" "}
                ensures every website delivers intuitive, engaging user experiences that drive conversions.
              </p>
              <p className="wd-about__text">
                Combined with our{" "}
                <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise application capabilities</a>, we build web platforms that scale seamlessly as your business grows.
              </p>
            </div>
            <div className="wd-stats wd-animate--right">
              <div className="wd-stat">
                <span className="wd-stat__icon">🌐</span>
                <span className="wd-stat__label">SEO-Ready Architecture</span>
              </div>
              <div className="wd-stat">
                <span className="wd-stat__icon">⚡</span>
                <span className="wd-stat__label">Core Web Vitals Optimized</span>
              </div>
              <div className="wd-stat">
                <span className="wd-stat__icon">📱</span>
                <span className="wd-stat__label">Mobile-First Responsive</span>
              </div>
              <div className="wd-stat">
                <span className="wd-stat__icon">🔒</span>
                <span className="wd-stat__label">Secure Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="wd-whoweare">
        <div className="wd-container">
          <div className="wd-whoweare__grid">
            <div className="wd-whoweare__stats wd-animate--left">
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">2000+</span>
                <span className="wd-stat__label">Websites Delivered</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">14+</span>
                <span className="wd-stat__label">Years Experience</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">98%</span>
                <span className="wd-stat__label">Client Satisfaction</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">150+</span>
                <span className="wd-stat__label">Expert Engineers</span>
              </div>
            </div>
            <div className="wd-whoweare__content wd-animate--right">
              <h2 className="wd-whoweare__heading">
                Our Web <span className="wd-text-accent">Development Expertise</span>
              </h2>
              <p className="wd-whoweare__text">
                We deliver end-to-end web solutions from corporate sites to complex web applications:
              </p>
              <ul className="wd-checklist">
                <li className="wd-checklist__item">
                  <span className="wd-checklist__icon">✓</span>
                  <span>Custom Website Development — corporate, service &amp; marketing sites</span>
                </li>
                <li className="wd-checklist__item">
                  <span className="wd-checklist__icon">✓</span>
                  <span>Web Application Development — SaaS, dashboards &amp; portals</span>
                </li>
                <li className="wd-checklist__item">
                  <span className="wd-checklist__icon">✓</span>
                  <span>
                    <a href="/ecommerce-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>E-Commerce Development</a>{" "}
                    — secure stores with payment &amp; inventory systems
                  </span>
                </li>
                <li className="wd-checklist__item">
                  <span className="wd-checklist__icon">✓</span>
                  <span>
                    <a href="/custom-cms-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>CMS-Powered Platforms</a>{" "}
                    — flexible content management solutions
                  </span>
                </li>
                <li className="wd-checklist__item">
                  <span className="wd-checklist__icon">✓</span>
                  <span>
                    <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Performance &amp; SEO Optimization</a>{" "}
                    — structured data, crawlability &amp; speed
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="wd-services">
        <div className="wd-container">
          <div className="wd-services__header wd-animate">
            <h2 className="wd-services__title">
              Our Web <span className="wd-text-accent">Development Services</span>
            </h2>
            <p className="wd-services__subtitle">
              From corporate websites to complex web applications
            </p>
          </div>

          <div className="wd-services__grid wd-stagger">
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">01</span>
              <h4 className="wd-service-card__title">Custom Website Development</h4>
              <p className="wd-service-card__text">
                Tailored websites built around your brand positioning and conversion goals — corporate websites, service-driven business sites, CMS-powered platforms, marketing landing pages, and multi-location business websites with SEO-structured code.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">02</span>
              <h4 className="wd-service-card__title">Web Application Development</h4>
              <p className="wd-service-card__text">
                Performance-focused SaaS platforms, admin dashboards, customer portals, marketplace systems, and subscription-based platforms using modern frameworks like React, Next.js, and Node.js for scalability and speed.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">03</span>
              <h4 className="wd-service-card__title">E-Commerce Web Development</h4>
              <p className="wd-service-card__text">
                Secure and scalable online stores with payment gateway integration, inventory management, order automation, secure checkout flows, and performance-optimized product architecture built for conversion and growth.
              </p>
            </div>
            <div className="wd-service-card wd-animate--scale">
              <span className="wd-service-card__badge">04</span>
              <h4 className="wd-service-card__title">Performance &amp; SEO Development</h4>
              <p className="wd-service-card__text">
                Clean semantic HTML, search engine crawlability optimization, fast server response times, structured data integration, and secure hosting standards ensuring long-term visibility and scalability.
              </p>
            </div>
            <div className="wd-service-card wd-service-card--wide wd-animate--scale">
              <span className="wd-service-card__badge">05</span>
              <h4 className="wd-service-card__title">API &amp; Third-Party Integration</h4>
              <p className="wd-service-card__text">
                Seamless integration with CRM, ERP, payment gateways, analytics tools, marketing automation platforms, and cloud services — ensuring your website connects with your entire business ecosystem for unified data flow and automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="wd-delivery">
        <div className="wd-container">
          <h2 className="wd-delivery__heading wd-animate">
            Our Development <span className="wd-text-accent">Methodology</span>
          </h2>
          <p className="wd-delivery__text">
            A structured process that reduces risk and ensures predictable outcomes.
          </p>
          <div className="wd-delivery__steps">
            <div className="wd-step"><span className="wd-step__circle">Strategy</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Information Architecture</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">UI/UX Design</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Development</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Performance Tuning</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Deployment</span></div>
            <span className="wd-step__arrow">→</span>
            <div className="wd-step"><span className="wd-step__circle">Ongoing Enhancement</span></div>
          </div>
        </div>
      </section>

      {/* ===== RELIABLE ===== */}
      <section className="wd-reliable">
        <div className="wd-container">
          <div className="wd-reliable__inner wd-animate">
            <h2 className="wd-reliable__heading">
              Why Choose mTouch Labs as Your{" "}
              <span className="wd-text-accent">Web Development Company</span>?
            </h2>
            <p className="wd-reliable__text">
              We build websites that support digital marketing, automation, analytics, and long-term growth.
            </p>
            <div className="wd-reliable__pillars">
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">Business-aligned development strategy</span>
              </div>
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">SEO-ready code structure</span>
              </div>
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">Cloud-scalable infrastructure</span>
              </div>
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">API &amp; third-party integration expertise</span>
              </div>
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">Long-term maintenance support</span>
              </div>
              <div className="wd-pillar">
                <span className="wd-pillar__dot"></span>
                <span className="wd-pillar__label">Transparent project execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="wd-industries">
        <div className="wd-container">
          <h2 className="wd-industries__title wd-animate">
            Industries We <span className="wd-text-accent">Serve</span>
          </h2>
          <div className="wd-industries__grid wd-stagger">
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">🛒</span>
              <h4 className="wd-industry__title">eCommerce &amp; Retail</h4>
            </div>
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">🏥</span>
              <h4 className="wd-industry__title">Healthcare &amp; HealthTech</h4>
            </div>
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">💳</span>
              <h4 className="wd-industry__title">FinTech &amp; Financial Services</h4>
            </div>
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">🏠</span>
              <h4 className="wd-industry__title">Real Estate &amp; Construction</h4>
            </div>
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">💻</span>
              <h4 className="wd-industry__title">SaaS &amp; Technology Startups</h4>
            </div>
            <div className="wd-industry wd-animate--scale">
              <span className="wd-industry__icon">🎓</span>
              <h4 className="wd-industry__title">Education &amp; EdTech</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="wd-tech">
        <div className="wd-container">
          <div className="wd-tech__grid">
            <div className="wd-animate--left">
              <h2 className="wd-tech__heading">
                Web Development  <span className="wd-text-accent">Tools & Frameworks</span>
              </h2>
              <p className="wd-tech__text">
                We leverage modern web technologies and frameworks to deliver high-performance, scalable websites and web applications.
              </p>
              <div className="wd-tech__tags">
                {[
                  "React", "Next.js", "Node.js", "TypeScript",
                  "HTML5", "CSS3", "Tailwind CSS", "WordPress",
                  "Shopify", "PostgreSQL", "MongoDB", "AWS",
                  "Vercel", "GraphQL", "REST APIs", "Docker",
                  "Cloudflare", "Google Analytics", "CI/CD", "Git"
                ].map((tech) => (
                  <span key={tech} className="wd-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="wd-tech__stats wd-animate--right">
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">20+</span>
                <span className="wd-stat__label">Frameworks &amp; Tools</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">99.9%</span>
                <span className="wd-stat__label">Uptime Guarantee</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">&lt;1s</span>
                <span className="wd-stat__label">Avg Load Time</span>
              </div>
              <div className="wd-stat wd-stat--dark">
                <span className="wd-stat__number">90+</span>
                <span className="wd-stat__label">Lighthouse Score</span>
              </div>
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
            <p className="wd-faq__subtext">Everything you need to know about our web development services</p>
            <div className="wd-faq__list">
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>What does a web development company do?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>A web development company designs, builds, and maintains websites and web applications optimized for performance, security, and search visibility. We handle everything from strategy and design to development, deployment, and ongoing support.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>How long does website development take?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>Business websites typically take 4–8 weeks, while complex web applications may take longer depending on requirements, integrations, and custom functionality needed.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>Do you build SEO-friendly websites?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>Yes. All websites are built with SEO-ready structure, clean semantic HTML, performance optimization, structured data integration, and search engine crawlability to ensure long-term visibility.</p>
                </div>
              </details>
              <details className="wd-faq__item">
                <summary className="wd-faq__question">
                  <span>Do you provide ongoing website support?</span>
                  <span className="wd-faq__chevron"></span>
                </summary>
                <div className="wd-faq__answer">
                  <p>Absolutely. We offer structured maintenance, security updates, performance monitoring, content updates, and feature enhancements to keep your website running at peak performance.</p>
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
              Ready to Build Your <span className="wd-text-accent">Website</span>?
            </h2>
            <p className="wd-cta__text">
              Let&apos;s discuss how we can engineer a web platform that drives real business growth and converts visitors into customers.
            </p>
            <button type="button" className="wd-cta__button js-open-modal">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  );
}