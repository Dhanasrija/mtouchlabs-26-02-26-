import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amazon Web Services Company | mTouch Labs",
  description:
    "mTouch Labs is an Amazon Web Services company delivering scalable, resilient, and performance-driven cloud infrastructure solutions.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/amazon-web-services-company",
  },
  openGraph: {
    title: "Amazon Web Services Company | mTouch Labs",
    description:
      "Enterprise-grade AWS cloud modernization and infrastructure engineering solutions.",
    url: "https://www.mtouchlabs.com/amazon-web-services-company",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Web Services Company | mTouch Labs",
    description:
      "Scalable AWS infrastructure and cloud transformation services.",
  },
};

export default function AmazonWebServicesCompany() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="awc-hero">
        <div className="awc-hero__inner">
          <p className="awc-hero__breadcrumb">
            Home / Services /{" "}
            <span className="awc-hero__breadcrumb-active">Amazon Web Services</span>
          </p>
          <h1 className="awc-hero__title">
            Strategic <span className="awc-hero__title-accent">AWS Infrastructure</span> &amp; Cloud Modernization Partner
          </h1>
          <p className="awc-hero__subtitle">
            Resilient Cloud Foundations for Scalability, Availability &amp; Performance
          </p>
          <p className="awc-hero__desc">
            mTouch Labs is an experienced Amazon Web Services company helping businesses modernize infrastructure, strengthen system reliability, and accelerate digital transformation through AWS-powered ecosystems.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="awc-about">
        <div className="awc-container">
          <div className="awc-about__grid">
            <div className="awc-about__content awc-animate--left">
              <h2 className="awc-about__heading">
                Why Businesses Choose an <span className="awc-text-accent">AWS Company</span>
              </h2>
              <p className="awc-about__text">
                Organizations move to AWS to achieve flexible infrastructure scaling, reduced capital expenditure, faster deployment cycles, improved uptime and resilience, and global accessibility.
              </p>
              <p className="awc-about__text">
                However, without strategic architecture and governance, cloud adoption can increase complexity. That&apos;s where a structured AWS partner becomes essential.
              </p>
              <p className="awc-about__text">
                As a trusted <a href="/enterprise-application-development-company" style={{color: "#e8a025", textDecoration: "none"}}>enterprise technology partner</a>, we engineer resilient cloud foundations that support application scalability and operational efficiency.
              </p>
            </div>
            <div className="awc-stats awc-animate--right">
              <div className="awc-stat">
                <span className="awc-stat__icon">🏗️</span>
                <span className="awc-stat__label">Cloud Modernization</span>
              </div>
              <div className="awc-stat">
                <span className="awc-stat__icon">🔄</span>
                <span className="awc-stat__label">High Availability</span>
              </div>
              <div className="awc-stat">
                <span className="awc-stat__icon">📈</span>
                <span className="awc-stat__label">Scalable Infrastructure</span>
              </div>
              <div className="awc-stat">
                <span className="awc-stat__icon">🛡️</span>
                <span className="awc-stat__label">Disaster Recovery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="awc-whoweare">
        <div className="awc-container">
          <div className="awc-whoweare__grid">
            <div className="awc-whoweare__stats awc-animate--left">
              <div className="awc-stat awc-stat--dark">
                <span className="awc-stat__number">14+</span>
                <span className="awc-stat__label">Years of Experience</span>
              </div>
              <div className="awc-stat awc-stat--dark">
                <span className="awc-stat__number">120+</span>
                <span className="awc-stat__label">AWS Deployments</span>
              </div>
              <div className="awc-stat awc-stat--dark">
                <span className="awc-stat__number">200+</span>
                <span className="awc-stat__label">Global Clients</span>
              </div>
              <div className="awc-stat awc-stat--dark">
                <span className="awc-stat__number">99.9%</span>
                <span className="awc-stat__label">Uptime SLA</span>
              </div>
            </div>
            <div className="awc-whoweare__content awc-animate--right">
              <h2 className="awc-whoweare__heading">
                Our <span className="awc-text-accent">AWS Expertise</span>
              </h2>
              <p className="awc-whoweare__text">
                We provide end-to-end AWS infrastructure engineering, including:
              </p>
              <ul className="awc-checklist">
                <li className="awc-checklist__item">
                  <span className="awc-checklist__icon">✓</span>
                  <span>Cloud Modernization — legacy evaluation, re-architecture &amp; redesign</span>
                </li>
                <li className="awc-checklist__item">
                  <span className="awc-checklist__icon">✓</span>
                  <span>High-Availability Environments — fault-tolerant, distributed workloads</span>
                </li>
                <li className="awc-checklist__item">
                  <span className="awc-checklist__icon">✓</span>
                  <span>Scalable Infrastructure — multi-region, API-driven ecosystems</span>
                </li>
                <li className="awc-checklist__item">
                  <span className="awc-checklist__icon">✓</span>
                  <span>Cloud Governance — resource tracking, monitoring &amp; access control</span>
                </li>
                <li className="awc-checklist__item">
                  <span className="awc-checklist__icon">✓</span>
                  <span>Disaster Recovery — backup automation, failover &amp; data redundancy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="awc-services">
        <div className="awc-container">
          <div className="awc-services__header awc-animate">
            <h2 className="awc-services__title">
              End-to-End <span className="awc-text-accent">AWS Services</span>
            </h2>
            <p className="awc-services__subtitle">
              From infrastructure assessment to continuous optimization
            </p>
          </div>
          <div className="awc-services__grid awc-stagger">
            <div className="awc-service-card awc-animate--scale">
              <span className="awc-service-card__badge">01</span>
              <h4 className="awc-service-card__title">Cloud Modernization Strategy</h4>
              <p className="awc-service-card__text">
                Legacy system evaluation, application re-architecture, performance bottleneck identification, infrastructure redesign, and cloud readiness assessment.
              </p>
            </div>
            <div className="awc-service-card awc-animate--scale">
              <span className="awc-service-card__badge">02</span>
              <h4 className="awc-service-card__title">High-Availability Environments</h4>
              <p className="awc-service-card__text">
                Fault-tolerant systems designed to minimize downtime, distribute workloads efficiently, support traffic spikes, and maintain business continuity.
              </p>
            </div>
            <div className="awc-service-card awc-animate--scale">
              <span className="awc-service-card__badge">03</span>
              <h4 className="awc-service-card__title">Scalable Application Infrastructure</h4>
              <p className="awc-service-card__text">
                Supporting rapid user growth, multi-region expansion, API-driven ecosystems, and real-time application environments designed to evolve with your business.
              </p>
            </div>
            <div className="awc-service-card awc-animate--scale">
              <span className="awc-service-card__badge">04</span>
              <h4 className="awc-service-card__title">Cloud Governance &amp; Control</h4>
              <p className="awc-service-card__text">
                Resource usage tracking, performance benchmarking, infrastructure monitoring, access control frameworks, and operational visibility dashboards.
              </p>
            </div>
            <div className="awc-service-card awc-service-card--wide awc-animate--scale">
              <span className="awc-service-card__badge">05</span>
              <h4 className="awc-service-card__title">Disaster Recovery &amp; Business Continuity</h4>
              <p className="awc-service-card__text">
                Backup automation, failover configuration, recovery time optimization, and data redundancy strategies embedded in architecture. Integrated with our <a href="/cyber-security-services-company" style={{color: "#e8a025", textDecoration: "none"}}>security practices</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="awc-delivery">
        <div className="awc-container">
          <h2 className="awc-delivery__heading awc-animate">
            Our <span className="awc-text-accent">Engagement Framework</span>
          </h2>
          <p className="awc-delivery__text">
            We focus on long-term cloud maturity rather than short-term setup.
          </p>
          <div className="awc-delivery__steps">
            <div className="awc-step"><span className="awc-step__circle">Assessment</span></div>
            <span className="awc-step__arrow">→</span>
            <div className="awc-step"><span className="awc-step__circle">Blueprint Design</span></div>
            <span className="awc-step__arrow">→</span>
            <div className="awc-step"><span className="awc-step__circle">Deployment</span></div>
            <span className="awc-step__arrow">→</span>
            <div className="awc-step"><span className="awc-step__circle">Validation</span></div>
            <span className="awc-step__arrow">→</span>
            <div className="awc-step"><span className="awc-step__circle">Governance</span></div>
            <span className="awc-step__arrow">→</span>
            <div className="awc-step"><span className="awc-step__circle">Optimization</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="awc-reliable">
        <div className="awc-container">
          <div className="awc-reliable__inner awc-animate">
            <h2 className="awc-reliable__heading">
              Why <span className="awc-text-accent">mTouch Labs</span> as Your AWS Partner?
            </h2>
            <p className="awc-reliable__text">
              We build AWS environments that support sustainable digital growth.
            </p>
            <div className="awc-reliable__pillars">
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Infrastructure-first engineering approach</span></div>
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Scalable cloud architecture expertise</span></div>
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Performance monitoring frameworks</span></div>
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Governance-driven cloud management</span></div>
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Enterprise reliability standards</span></div>
              <div className="awc-pillar"><span className="awc-pillar__dot"></span><span className="awc-pillar__label">Long-term cloud partnership model</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="awc-industries">
        <div className="awc-container">
          <h2 className="awc-industries__title awc-animate">
            Industries Leveraging Our <span className="awc-text-accent">AWS Expertise</span>
          </h2>
          <div className="awc-industries__grid awc-stagger">
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">💻</span><h4 className="awc-industry__title">SaaS &amp; Product Companies</h4></div>
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">🛒</span><h4 className="awc-industry__title">Digital Commerce</h4></div>
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">💳</span><h4 className="awc-industry__title">Financial Technology</h4></div>
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">🏢</span><h4 className="awc-industry__title">Enterprise Systems</h4></div>
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">🏥</span><h4 className="awc-industry__title">Healthcare Technology</h4></div>
            <div className="awc-industry awc-animate--scale"><span className="awc-industry__icon">🚀</span><h4 className="awc-industry__title">Startups &amp; Scale-ups</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECH ===== */}
      <section className="awc-tech">
        <div className="awc-container">
          <div className="awc-tech__grid">
            <div className="awc-tech__content awc-animate--left">
              <h2 className="awc-tech__heading">
                AWS <span className="awc-text-accent">Technology Stack</span>
              </h2>
              <p className="awc-tech__text">
                Our engineers work across the complete AWS ecosystem. We also integrate with <a href="/best-iot-development-company-in-india" style={{color: "#e8a025", textDecoration: "none"}}>IoT platforms</a> and <a href="/machine-learning-development-company" style={{color: "#e8a025", textDecoration: "none"}}>ML services</a>.
              </p>
              <div className="awc-tech__tags">
                <span className="awc-tag">EC2</span>
                <span className="awc-tag">S3</span>
                <span className="awc-tag">RDS</span>
                <span className="awc-tag">Lambda</span>
                <span className="awc-tag">CloudFront</span>
                <span className="awc-tag">ECS / EKS</span>
                <span className="awc-tag">VPC</span>
                <span className="awc-tag">IAM</span>
                <span className="awc-tag">Route 53</span>
                <span className="awc-tag">SageMaker</span>
              </div>
            </div>
            <div className="awc-tech__stats awc-animate--right">
              <div className="awc-stat awc-stat--dark"><span className="awc-stat__number">50+</span><span className="awc-stat__label">AWS Services</span></div>
              <div className="awc-stat awc-stat--dark"><span className="awc-stat__number">120+</span><span className="awc-stat__label">Deployments</span></div>
              <div className="awc-stat awc-stat--dark"><span className="awc-stat__number">99.9%</span><span className="awc-stat__label">Uptime</span></div>
              <div className="awc-stat awc-stat--dark"><span className="awc-stat__number">24/7</span><span className="awc-stat__label">Monitoring</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="awc-faq">
        <div className="awc-container">
          <div className="awc-faq__wrapper">
            <h3 className="awc-faq__heading awc-animate">Frequently Asked <span className="awc-text-accent">Questions</span></h3>
            <p className="awc-faq__subtext">Everything you need to know about our AWS services</p>
            <div className="awc-faq__list">
              <details className="awc-faq__item"><summary className="awc-faq__question"><span>What does an Amazon Web Services company provide?</span><span className="awc-faq__chevron"></span></summary><div className="awc-faq__answer"><p>An AWS company designs and manages scalable, secure, and resilient infrastructure using AWS cloud technologies.</p></div></details>
              <details className="awc-faq__item"><summary className="awc-faq__question"><span>How is AWS different from traditional hosting?</span><span className="awc-faq__chevron"></span></summary><div className="awc-faq__answer"><p>AWS offers on-demand scalability, global infrastructure, managed services, and high availability compared to traditional hosting models.</p></div></details>
              <details className="awc-faq__item"><summary className="awc-faq__question"><span>Can AWS support enterprise applications?</span><span className="awc-faq__chevron"></span></summary><div className="awc-faq__answer"><p>Yes. AWS supports enterprise-grade applications with distributed infrastructure, compliance controls, and global deployment capability.</p></div></details>
              <details className="awc-faq__item"><summary className="awc-faq__question"><span>Do you provide cloud governance and optimization?</span><span className="awc-faq__chevron"></span></summary><div className="awc-faq__answer"><p>Yes. We implement monitoring, governance frameworks, and performance optimization strategies for continuous improvement.</p></div></details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="awc-cta">
        <div className="awc-container">
          <div className="awc-cta__inner awc-animate--scale">
            <h2 className="awc-cta__heading">Ready to <span className="awc-text-accent">Modernize Your Infrastructure</span>?</h2>
            <p className="awc-cta__text">Let&apos;s discuss how AWS can transform your infrastructure into a competitive advantage.</p>
            <a className="awc-cta__button js-open-modal" style={{cursor: "pointer"}}>Get a Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}