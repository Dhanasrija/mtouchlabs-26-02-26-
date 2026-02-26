import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Vision & Mission | mTouch Labs",
  description:
    "Discover the vision and mission of mTouch Labs, a trusted IT services and digital transformation company delivering enterprise cloud, AI, and technology solutions globally.",
  keywords: [
    "mTouch Labs vision",
    "mTouch Labs mission",
    "IT services company vision",
    "digital transformation company mission",
    "enterprise IT solutions company",
    "technology consulting company India",
    "Hyderabad IT company",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/vision-mission",
  },
  openGraph: {
    title: "Vision & Mission | mTouch Labs",
    description:
      "Learn how mTouch Labs drives innovation through enterprise IT services, digital transformation, cloud, and AI solutions.",
    url: "https://www.mtouchlabs.com/vision-mission",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision & Mission | mTouch Labs",
    description:
      "mTouch Labs is committed to delivering scalable IT services and digital transformation solutions across India and global markets.",
  },
};

export default function VisionMission() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="vm-hero">
        <div className="vm-hero__inner">
          <p className="vm-hero__breadcrumb">
            Home / About Us /{" "}
            <span className="vm-hero__breadcrumb-active">Vision &amp; Mission</span>
          </p>
          <h1 className="vm-hero__title">
            Our <span className="vm-hero__title-accent">Vision</span> &amp;{" "}
            <span className="vm-hero__title-accent">Mission</span>
          </h1>
          <p className="vm-hero__subtitle">
            mTouch Labs — Global IT Services &amp; Digital Transformation Company
          </p>
          <p className="vm-hero__desc">
            Empowering businesses to innovate, scale, and lead confidently in the digital era
          </p>
        </div>
      </section>

      {/* ===== OUR VISION SECTION ===== */}
      <section className="vm-about">
        <div className="vm-container">
          <div className="vm-about__grid">
            <div className="vm-about__content vm-animate--left">
              <h2 className="vm-about__heading">
                Our <span className="vm-text-accent">Vision</span>
              </h2>
              <p className="vm-about__text">
                At mTouch Labs, our vision is to become a globally recognized IT
                Services and Digital Transformation Company that empowers
                businesses across India and international markets to innovate,
                scale, and lead confidently in the digital era.
              </p>
              <p className="vm-about__text">
                Headquartered in Hyderabad, India, we aim to bridge global
                technology standards with agile engineering excellence —
                delivering enterprise IT solutions that drive measurable growth.
              </p>
              <p className="vm-about__text">
                We envision a business ecosystem where organizations leverage
                cutting-edge technology to achieve operational excellence and
                competitive advantage.
              </p>
            </div>
            <div className="vm-stats vm-animate--right">
              <div className="vm-stat">
                <span className="vm-stat__icon">☁️</span>
                <span className="vm-stat__label">Cloud-Native Infrastructure</span>
              </div>
              <div className="vm-stat">
                <span className="vm-stat__icon">🤖</span>
                <span className="vm-stat__label">AI-Driven Automation</span>
              </div>
              <div className="vm-stat">
                <span className="vm-stat__icon">🔒</span>
                <span className="vm-stat__label">Secure Enterprise Architecture</span>
              </div>
              <div className="vm-stat">
                <span className="vm-stat__icon">📊</span>
                <span className="vm-stat__label">Data-Powered Decision Making</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR MISSION SECTION ===== */}
      <section className="vm-whoweare">
        <div className="vm-container">
          <div className="vm-whoweare__grid">
            <div className="vm-whoweare__stats vm-animate--left">
              <div className="vm-stat vm-stat--dark">
                <span className="vm-stat__number">14+</span>
                <span className="vm-stat__label">Years of Excellence</span>
              </div>
              <div className="vm-stat vm-stat--dark">
                <span className="vm-stat__number">500+</span>
                <span className="vm-stat__label">Projects Delivered</span>
              </div>
              <div className="vm-stat vm-stat--dark">
                <span className="vm-stat__number">200+</span>
                <span className="vm-stat__label">Global Clients</span>
              </div>
              <div className="vm-stat vm-stat--dark">
                <span className="vm-stat__number">98%</span>
                <span className="vm-stat__label">Client Retention</span>
              </div>
            </div>
            <div className="vm-whoweare__content vm-animate--right">
              <h2 className="vm-whoweare__heading">
                Our <span className="vm-text-accent">Mission</span>
              </h2>
              <p className="vm-whoweare__text">
                Our mission is to deliver scalable, secure, and high-performance
                IT services that enable sustainable digital transformation for
                businesses worldwide.
              </p>
              <p className="vm-whoweare__text">
                As a trusted Digital Transformation Company in India serving
                global clients, we focus on:
              </p>
              <ul className="vm-checklist">
                <li className="vm-checklist__item">
                  <span className="vm-checklist__icon">✓</span>
                  <span>Designing enterprise-grade software solutions</span>
                </li>
                <li className="vm-checklist__item">
                  <span className="vm-checklist__icon">✓</span>
                  <span>Modernizing legacy systems with cloud transformation</span>
                </li>
                <li className="vm-checklist__item">
                  <span className="vm-checklist__icon">✓</span>
                  <span>Implementing AI and automation frameworks</span>
                </li>
                <li className="vm-checklist__item">
                  <span className="vm-checklist__icon">✓</span>
                  <span>Strengthening cybersecurity and compliance standards</span>
                </li>
                <li className="vm-checklist__item">
                  <span className="vm-checklist__icon">✓</span>
                  <span>Aligning technology investments with business KPIs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GLOBAL DIGITAL TRENDS SECTION ===== */}
      <section className="vm-services">
        <div className="vm-container">
          <div className="vm-services__header vm-animate">
            <h2 className="vm-services__title">
              How Our Vision Aligns with{" "}
              <span className="vm-text-accent">Global Digital Trends</span>
            </h2>
            <p className="vm-services__subtitle">
              Modern enterprises require advanced digital capabilities to stay competitive
            </p>
          </div>

          <div className="vm-services__grid vm-stagger">
            <div className="vm-service-card vm-animate--scale">
              <span className="vm-service-card__badge">01</span>
              <h4 className="vm-service-card__title">Cloud-First Infrastructure</h4>
              <p className="vm-service-card__text">
                Scalable, resilient cloud architecture that supports business
                agility and global reach.
              </p>
            </div>
            <div className="vm-service-card vm-animate--scale">
              <span className="vm-service-card__badge">02</span>
              <h4 className="vm-service-card__title">Intelligent Workflow Automation</h4>
              <p className="vm-service-card__text">
                AI-powered process automation that reduces manual effort and
                accelerates operational efficiency.
              </p>
            </div>
            <div className="vm-service-card vm-animate--scale">
              <span className="vm-service-card__badge">03</span>
              <h4 className="vm-service-card__title">Integrated CRM &amp; ERP Systems</h4>
              <p className="vm-service-card__text">
                Unified business platforms that centralize data, streamline
                workflows, and improve visibility.
              </p>
            </div>
            <div className="vm-service-card vm-animate--scale">
              <span className="vm-service-card__badge">04</span>
              <h4 className="vm-service-card__title">Real-Time Data Analytics</h4>
              <p className="vm-service-card__text">
                Live dashboards and business intelligence tools that drive
                data-powered decision-making.
              </p>
            </div>
            <div className="vm-service-card vm-service-card--wide vm-animate--scale">
              <span className="vm-service-card__badge">05</span>
              <h4 className="vm-service-card__title">Agile DevOps Environments</h4>
              <p className="vm-service-card__text">
                Continuous integration and delivery pipelines that ensure faster
                releases and higher quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRANSFORMATION PHILOSOPHY — DELIVERY STEPS ===== */}
      <section className="vm-delivery">
        <div className="vm-container">
          <h2 className="vm-delivery__heading vm-animate">
            Our Digital <span className="vm-text-accent">Transformation Philosophy</span>
          </h2>
          <p className="vm-delivery__text">
            Digital transformation is not a one-time upgrade — it is a
            continuous evolution. Our approach ensures long-term ROI and
            operational resilience.
          </p>
          <div className="vm-delivery__steps">
            <div className="vm-step">
              <span className="vm-step__circle">Assessment</span>
            </div>
            <span className="vm-step__arrow">→</span>
            <div className="vm-step">
              <span className="vm-step__circle">Planning</span>
            </div>
            <span className="vm-step__arrow">→</span>
            <div className="vm-step">
              <span className="vm-step__circle">Optimization</span>
            </div>
            <span className="vm-step__arrow">→</span>
            <div className="vm-step">
              <span className="vm-step__circle">Implementation</span>
            </div>
            <span className="vm-step__arrow">→</span>
            <div className="vm-step">
              <span className="vm-step__circle">Monitoring</span>
            </div>
            <span className="vm-step__arrow">→</span>
            <div className="vm-step">
              <span className="vm-step__circle">Improvement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMITMENT TO EXCELLENCE ===== */}
      <section className="vm-reliable">
        <div className="vm-container">
          <div className="vm-reliable__inner vm-animate">
            <h2 className="vm-reliable__heading">
              Commitment to{" "}
              <span className="vm-text-accent">Excellence &amp; Trust</span>
            </h2>
            <p className="vm-reliable__text">
              As an emerging global IT consulting partner from India, mTouch Labs
              is committed to building digital solutions designed to grow with
              our clients — across industries and geographic markets.
            </p>
            <div className="vm-reliable__pillars">
              <div className="vm-pillar">
                <span className="vm-pillar__dot"></span>
                <span className="vm-pillar__label">Ethical business practices</span>
              </div>
              <div className="vm-pillar">
                <span className="vm-pillar__dot"></span>
                <span className="vm-pillar__label">Transparent communication</span>
              </div>
              <div className="vm-pillar">
                <span className="vm-pillar__dot"></span>
                <span className="vm-pillar__label">Scalable &amp; secure architecture</span>
              </div>
              <div className="vm-pillar">
                <span className="vm-pillar__dot"></span>
                <span className="vm-pillar__label">Long-term client partnerships</span>
              </div>
              <div className="vm-pillar">
                <span className="vm-pillar__dot"></span>
                <span className="vm-pillar__label">Innovation-driven engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="vm-faq">
        <div className="vm-container">
          <div className="vm-faq__wrapper">
            <h3 className="vm-faq__heading vm-animate">Frequently Asked Questions</h3>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                  <span className="accordion-title">What is the vision of mTouch Labs?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    The vision of mTouch Labs is to become a globally trusted IT
                    services and digital transformation company delivering
                    innovative, scalable, and enterprise-grade technology
                    solutions.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-2" aria-expanded="false">
                  <span className="accordion-title">What is the mission of mTouch Labs?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    The mission of mTouch Labs is to provide cloud-driven,
                    AI-powered, and secure IT services that support sustainable
                    business transformation for clients in India and worldwide.
                  </p>
                </div>
              </div>
              <div className="accordion-item">
                <button id="accordion-button-3" aria-expanded="false">
                  <span className="accordion-title">Where is mTouch Labs located?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    mTouch Labs is headquartered in Hyderabad, India, serving
                    clients across domestic and international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="vm-cta">
        <div className="vm-container">
          <div className="vm-cta__inner vm-animate--scale">
            <h2 className="vm-cta__heading">
              Partner with a Trusted{" "}
              <span className="vm-text-accent">Digital Transformation</span> Company
            </h2>
            <p className="vm-cta__text">
              Ready to align your technology with your business vision? mTouch
              Labs combines strategic consulting with deep technical expertise to
              deliver measurable business outcomes.
            </p>
            <a href="/contact-us" className="vm-cta__button">
              Connect With Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
}