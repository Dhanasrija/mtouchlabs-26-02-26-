import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Custom CMS Development Company in India | mTouch Labs",
  description:
    "mTouch Labs is a custom CMS development company in India delivering secure, scalable, and business-driven content management solutions.",
  keywords: [
    "custom CMS development company",
    "CMS development services India",
    "headless CMS development",
    "enterprise CMS solutions",
    "custom content management system",
    "CMS migration services India",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/custom-cms-development-company-in-india",
  },
  openGraph: {
    title: "Custom CMS Development Company in India | mTouch Labs",
    description: "Enterprise-grade custom CMS solutions designed for scalability and performance.",
    url: "https://www.mtouchlabs.com/custom-cms-development-company-in-india",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom CMS Development Company in India | mTouch Labs",
    description: "Professional custom CMS development services built for secure and scalable content management.",
  },
};

export default function CustomCMSDevelopment() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="cm-hero">
        <div className="cm-hero__inner">
          <Breadcrumb pagePath="/custom-cms-development-company-in-india" />
          <h1 className="cm-hero__title">
            Custom <span className="cm-hero__title-accent">CMS</span> Development Company
          </h1>
          <p className="cm-hero__subtitle">
            Scalable, Secure &amp; Business-Driven Content Management Solutions
          </p>
          <p className="cm-hero__desc">
            mTouch Labs is a leading custom CMS development company in India delivering scalable and flexible content management systems tailored to business workflows. We design and build custom CMS platforms that empower organizations to manage digital content efficiently, streamline publishing processes, and maintain full control over their digital ecosystem. Content management should enable growth — not restrict it.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="cm-about">
        <div className="cm-container">
          <div className="cm-about__grid">
            <div className="cm-about__content cm-animate--left">
              <h2 className="cm-about__heading">
                What Is <span className="cm-text-accent">Custom CMS</span> Development?
              </h2>
              <p className="cm-about__text">
                Custom CMS development involves creating a tailored content management system designed specifically around a business&apos;s content structure, operational workflow, and publishing requirements.
              </p>
              <p className="cm-about__text">
                Unlike off-the-shelf CMS platforms, a custom CMS provides personalized admin dashboards, role-based access control, workflow automation, API-ready architecture, high-performance content delivery, and scalability without plugin dependency. Our{" "}
                <a href="/web-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>web development expertise</a>{" "}
                ensures every CMS is built on a high-performance, SEO-optimized foundation.
              </p>
              <p className="cm-about__text">
                A structured CMS improves operational efficiency and content governance, making it a strategic asset for businesses managing complex digital ecosystems. With our{" "}
                <a href="/ui-ux-design-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>UI/UX design capabilities</a>, every admin interface is intuitive and efficient.
              </p>
            </div>
            <div className="cm-stats cm-animate--right">
              <div className="cm-stat"><span className="cm-stat__icon">📝</span><span className="cm-stat__label">Custom Admin Dashboards</span></div>
              <div className="cm-stat"><span className="cm-stat__icon">🔐</span><span className="cm-stat__label">Role-Based Access Control</span></div>
              <div className="cm-stat"><span className="cm-stat__icon">⚡</span><span className="cm-stat__label">API-Ready Architecture</span></div>
              <div className="cm-stat"><span className="cm-stat__icon">📈</span><span className="cm-stat__label">Scalable Without Plugins</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="cm-whoweare">
        <div className="cm-container">
          <div className="cm-whoweare__grid">
            <div className="cm-whoweare__stats cm-animate--left">
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">1500+</span><span className="cm-stat__label">CMS Projects Delivered</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">14+</span><span className="cm-stat__label">Years Experience</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">99.9%</span><span className="cm-stat__label">Uptime Guarantee</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">150+</span><span className="cm-stat__label">Expert Engineers</span></div>
            </div>
            <div className="cm-whoweare__content cm-animate--right">
              <h2 className="cm-whoweare__heading">
                Why Choose Custom CMS Over <span className="cm-text-accent">Generic Platforms</span>?
              </h2>
              <p className="cm-whoweare__text">Custom CMS solutions offer flexibility without structural limitations:</p>
              <ul className="cm-checklist">
                <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>No unnecessary plugins — clean, lean codebase</span></li>
                <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Faster load performance &amp; better security control</span></li>
                <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Custom workflow alignment to your business processes</span></li>
                <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>Reduced maintenance complexity &amp; long-term scalability</span></li>
                <li className="cm-checklist__item"><span className="cm-checklist__icon">✓</span><span>
                  <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Enterprise-grade</a> architecture for complex content ecosystems
                </span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="cm-services">
        <div className="cm-container">
          <div className="cm-services__header cm-animate">
            <h2 className="cm-services__title">Our Custom CMS <span className="cm-text-accent">Development Services</span></h2>
            <p className="cm-services__subtitle">From enterprise CMS to headless architecture</p>
          </div>
          <div className="cm-services__grid cm-stagger">
            <div className="cm-service-card cm-animate--scale">
              <span className="cm-service-card__badge">01</span>
              <h4 className="cm-service-card__title">Enterprise CMS Development</h4>
              <p className="cm-service-card__text">Enterprise-grade content management systems supporting multi-user collaboration, multi-site management, role-based publishing workflows, media asset organization, and secure content control for complex ecosystems.</p>
            </div>
            <div className="cm-service-card cm-animate--scale">
              <span className="cm-service-card__badge">02</span>
              <h4 className="cm-service-card__title">Headless CMS Solutions</h4>
              <p className="cm-service-card__text">Headless CMS platforms that separate frontend and backend, support API-driven content delivery, enable omnichannel publishing, and improve performance scalability for modern digital platforms.</p>
            </div>
            <div className="cm-service-card cm-animate--scale">
              <span className="cm-service-card__badge">03</span>
              <h4 className="cm-service-card__title">CMS Migration &amp; Modernization</h4>
              <p className="cm-service-card__text">Migrate from legacy CMS systems, replace plugin-heavy platforms, improve backend usability, optimize content performance, and enhance system security with minimal disruption.</p>
            </div>
            <div className="cm-service-card cm-animate--scale">
              <span className="cm-service-card__badge">04</span>
              <h4 className="cm-service-card__title">Custom Admin Panel Development</h4>
              <p className="cm-service-card__text">Intuitive admin interfaces for simplified content updates, structured categorization, user access management, workflow tracking, and performance monitoring.</p>
            </div>
            <div className="cm-service-card cm-service-card--wide cm-animate--scale">
              <span className="cm-service-card__badge">05</span>
              <h4 className="cm-service-card__title">Scalable CMS Architecture</h4>
              <p className="cm-service-card__text">CMS platforms built with secure backend frameworks, optimized database structures, cloud-enabled infrastructure, and performance-first coding standards ensuring long-term reliability and scalability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="cm-delivery">
        <div className="cm-container">
          <h2 className="cm-delivery__heading cm-animate">Our CMS Development <span className="cm-text-accent">Process</span></h2>
          <p className="cm-delivery__text">We ensure structured delivery and long-term maintainability.</p>
          <div className="cm-delivery__steps">
            <div className="cm-step"><span className="cm-step__circle">Requirement Analysis</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Content Structure</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Architecture Design</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Development</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Testing</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Deployment</span></div><span className="cm-step__arrow">→</span>
            <div className="cm-step"><span className="cm-step__circle">Training &amp; Support</span></div>
          </div>
        </div>
      </section>

      {/* ===== RELIABLE ===== */}
      <section className="cm-reliable">
        <div className="cm-container">
          <div className="cm-reliable__inner cm-animate">
            <h2 className="cm-reliable__heading">Why Choose mTouch Labs as Your <span className="cm-text-accent">CMS Development Company</span>?</h2>
            <p className="cm-reliable__text">We deliver CMS platforms that support business growth and digital transformation.</p>
            <div className="cm-reliable__pillars">
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">India-based development expertise</span></div>
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Business-focused CMS architecture</span></div>
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Secure backend engineering</span></div>
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">API-ready development models</span></div>
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Scalable cloud deployment</span></div>
              <div className="cm-pillar"><span className="cm-pillar__dot"></span><span className="cm-pillar__label">Ongoing support &amp; optimization</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="cm-industries">
        <div className="cm-container">
          <h2 className="cm-industries__title cm-animate">Industries We <span className="cm-text-accent">Serve</span></h2>
          <div className="cm-industries__grid cm-stagger">
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">📰</span><h4 className="cm-industry__title">Media &amp; Publishing</h4></div>
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🛒</span><h4 className="cm-industry__title">eCommerce &amp; Retail</h4></div>
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🏢</span><h4 className="cm-industry__title">Corporate Enterprises</h4></div>
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🎓</span><h4 className="cm-industry__title">Education &amp; E-Learning</h4></div>
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">🏥</span><h4 className="cm-industry__title">Healthcare &amp; Digital Platforms</h4></div>
            <div className="cm-industry cm-animate--scale"><span className="cm-industry__icon">💻</span><h4 className="cm-industry__title">SaaS &amp; Technology Companies</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="cm-tech">
        <div className="cm-container">
          <div className="cm-tech__grid">
            <div className="cm-animate--left">
              <h2 className="cm-tech__heading">Custom CMS  <span className="cm-text-accent"> Development Technologies</span></h2>
              <p className="cm-tech__text">We leverage modern CMS frameworks and cloud platforms to deliver secure, scalable content management solutions.</p>
              <div className="cm-tech__tags">
                {[
                  "React", "Next.js", "Node.js", "TypeScript",
                  "Strapi", "Sanity", "Contentful", "WordPress",
                  "GraphQL", "REST APIs", "PostgreSQL", "MongoDB",
                  "AWS", "Vercel", "Docker", "Redis",
                  "Cloudflare", "CI/CD", "Elasticsearch", "Git"
                ].map((tech) => (
                  <span key={tech} className="cm-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="cm-tech__stats cm-animate--right">
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">20+</span><span className="cm-stat__label">Frameworks &amp; Tools</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">API</span><span className="cm-stat__label">Headless Architecture</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">&lt;1s</span><span className="cm-stat__label">Content Delivery</span></div>
              <div className="cm-stat cm-stat--dark"><span className="cm-stat__number">99.9%</span><span className="cm-stat__label">Uptime SLA</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="cm-faq">
        <div className="cm-container">
          <div className="cm-faq__wrapper">
            <h3 className="cm-faq__heading cm-animate">Frequently Asked <span className="cm-text-accent">Questions</span></h3>
            <p className="cm-faq__subtext">Everything you need to know about custom CMS development</p>
            <div className="cm-faq__list">
              <details className="cm-faq__item"><summary className="cm-faq__question"><span>What is custom CMS development?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Custom CMS development involves building a tailored content management system designed specifically around business workflows, content structures, and publishing needs — rather than relying on generic off-the-shelf platforms.</p></div></details>
              <details className="cm-faq__item"><summary className="cm-faq__question"><span>Why choose a custom CMS over WordPress?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>A custom CMS provides better security, improved performance, flexibility without plugin dependency, and a codebase tailored to your exact requirements rather than bloated with unnecessary features.</p></div></details>
              <details className="cm-faq__item"><summary className="cm-faq__question"><span>Can you migrate existing CMS platforms?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Yes. We migrate and modernize legacy CMS systems while preserving data integrity, improving backend usability, and enhancing overall system performance and security.</p></div></details>
              <details className="cm-faq__item"><summary className="cm-faq__question"><span>Do you provide ongoing CMS support?</span><span className="cm-faq__chevron"></span></summary><div className="cm-faq__answer"><p>Yes. We offer ongoing maintenance, updates, performance optimization, and scalability enhancements through our <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>app maintenance services</a>.</p></div></details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cm-cta">
        <div className="cm-container">
          <div className="cm-cta__inner cm-animate--scale">
            <h2 className="cm-cta__heading">Ready to Build Your <span className="cm-text-accent">Custom CMS</span>?</h2>
            <p className="cm-cta__text">Let&apos;s discuss how a tailored content management system can streamline your publishing workflows and drive digital growth.</p>
            <button type="button" className="cm-cta__button js-open-modal">Start Your CMS Project</button>
          </div>
        </div>
      </section>
    </>
  );
}