import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cloud Migration Services | mTouch Labs",
  description: "mTouch Labs provides secure cloud migration services for enterprise infrastructure, applications, and data modernization.",
  keywords: ["cloud migration services","enterprise cloud migration","application migration","database migration","zero-downtime migration","cloud modernization"],
  alternates: { canonical: "https://www.mtouchlabs.com/cloud-migration-services" },
  openGraph: { title: "Cloud Migration Services | mTouch Labs", description: "Enterprise cloud migration solutions designed for scalability and zero disruption.", url: "https://www.mtouchlabs.com/cloud-migration-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Cloud Migration Services | mTouch Labs", description: "Structured cloud migration for secure and scalable digital transformation." },
};

export default function CloudMigrationServices() {
  return (
    <>
      <section className="mi-hero"><div className="mi-hero__inner">
        <Breadcrumb pagePath="/cloud-migration-services" />
        <h1 className="mi-hero__title">Cloud <span className="mi-hero__title-accent">Migration</span> Services</h1>
        <p className="mi-hero__subtitle">Secure, Structured &amp; Zero-Disruption Cloud Transformation</p>
        <p className="mi-hero__desc">mTouch Labs delivers enterprise-grade cloud migration services that enable organizations to transition from legacy infrastructure to scalable cloud environments with minimal risk and operational disruption. Migration should improve efficiency, not introduce instability.</p>
      </div></section>

      <section className="mi-about"><div className="mi-container"><div className="mi-about__grid">
        <div className="mi-about__content mi-animate--left">
          <h2 className="mi-about__heading">What Are <span className="mi-text-accent">Cloud Migration</span> Services?</h2>
          <p className="mi-about__text">Cloud migration services involve transferring applications, databases, workloads, and infrastructure from on-premise or legacy systems to modern cloud environments — including infrastructure assessment, dependency mapping, risk mitigation, security validation, and post-migration optimization.</p>
          <p className="mi-about__text">The objective is to modernize systems while maintaining operational integrity. Our <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>comprehensive cloud services</a> provide the foundation for successful migration across all major platforms.</p>
          <p className="mi-about__text">Post-migration, our <a href="/cloud-managed-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud managed services</a> ensure continuous performance optimization and <a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>security governance</a>.</p>
        </div>
        <div className="mi-stats mi-animate--right">
          <div className="mi-stat"><span className="mi-stat__icon">🔄</span><span className="mi-stat__label">Zero-Downtime Migration</span></div>
          <div className="mi-stat"><span className="mi-stat__icon">🏗️</span><span className="mi-stat__label">Infrastructure Modernization</span></div>
          <div className="mi-stat"><span className="mi-stat__icon">🗄️</span><span className="mi-stat__label">Database Migration</span></div>
          <div className="mi-stat"><span className="mi-stat__icon">🔒</span><span className="mi-stat__label">Security Compliance</span></div>
        </div>
      </div></div></section>

      <section className="mi-whoweare"><div className="mi-container"><div className="mi-whoweare__grid">
        <div className="mi-whoweare__stats mi-animate--left">
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">2000+</span><span className="mi-stat__label">Migrations Completed</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">0</span><span className="mi-stat__label">Data Loss Incidents</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">3</span><span className="mi-stat__label">Cloud Platforms</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">99.9%</span><span className="mi-stat__label">Migration Uptime</span></div>
        </div>
        <div className="mi-whoweare__content mi-animate--right">
          <h2 className="mi-whoweare__heading">Our Migration <span className="mi-text-accent">Capabilities</span></h2>
          <p className="mi-whoweare__text">Structured migration across all workload types:</p>
          <ul className="mi-checklist">
            <li className="mi-checklist__item"><span className="mi-checklist__icon">✓</span><span>Infrastructure migration — servers, VMs &amp; network to cloud</span></li>
            <li className="mi-checklist__item"><span className="mi-checklist__icon">✓</span><span>Application migration — rehost, replatform &amp; refactor</span></li>
            <li className="mi-checklist__item"><span className="mi-checklist__icon">✓</span><span>Database migration — zero-downtime data transfer &amp; validation</span></li>
            <li className="mi-checklist__item"><span className="mi-checklist__icon">✓</span><span>Hybrid &amp; multi-cloud migration strategies</span></li>
            <li className="mi-checklist__item"><span className="mi-checklist__icon">✓</span><span>Security &amp; compliance assurance throughout transition</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="mi-services"><div className="mi-container">
        <div className="mi-services__header mi-animate"><h2 className="mi-services__title">Our Migration <span className="mi-text-accent">Services</span></h2><p className="mi-services__subtitle">From assessment to post-migration optimization</p></div>
        <div className="mi-services__grid mi-stagger">
          <div className="mi-service-card mi-animate--scale"><span className="mi-service-card__badge">01</span><h4 className="mi-service-card__title">Infrastructure Migration</h4><p className="mi-service-card__text">Physical servers to cloud environments, virtual machines to scalable instances, and network configurations to secure cloud architecture for improved flexibility.</p></div>
          <div className="mi-service-card mi-animate--scale"><span className="mi-service-card__badge">02</span><h4 className="mi-service-card__title">Application Migration</h4><p className="mi-service-card__text">Rehosting (lift and shift), replatforming for optimization, refactoring legacy applications, and cloud-native transformation based on workload complexity.</p></div>
          <div className="mi-service-card mi-animate--scale"><span className="mi-service-card__badge">03</span><h4 className="mi-service-card__title">Database Migration</h4><p className="mi-service-card__text">Structured and unstructured data transfer, zero-downtime database transitions, backup validation, and performance benchmarking preserving data integrity.</p></div>
          <div className="mi-service-card mi-animate--scale"><span className="mi-service-card__badge">04</span><h4 className="mi-service-card__title">Hybrid &amp; Multi-Cloud Migration</h4><p className="mi-service-card__text">Hybrid migration strategies, multi-cloud transition planning, phased migration execution, and disaster recovery alignment reducing downtime risks.</p></div>
          <div className="mi-service-card mi-service-card--wide mi-animate--scale"><span className="mi-service-card__badge">05</span><h4 className="mi-service-card__title">Security &amp; Compliance Assurance</h4><p className="mi-service-card__text">Identity and access configuration, encryption validation, regulatory alignment, and security monitoring setup ensuring governance remains intact throughout migration.</p></div>
        </div>
      </div></section>

      <section className="mi-delivery"><div className="mi-container">
        <h2 className="mi-delivery__heading mi-animate">Our Migration <span className="mi-text-accent">Methodology</span></h2>
        <p className="mi-delivery__text">Each phase is documented and monitored to ensure accuracy.</p>
        <div className="mi-delivery__steps">
          <div className="mi-step"><span className="mi-step__circle">Assessment</span></div><span className="mi-step__arrow">→</span>
          <div className="mi-step"><span className="mi-step__circle">Strategy Design</span></div><span className="mi-step__arrow">→</span>
          <div className="mi-step"><span className="mi-step__circle">Environment Prep</span></div><span className="mi-step__arrow">→</span>
          <div className="mi-step"><span className="mi-step__circle">Data Transfer</span></div><span className="mi-step__arrow">→</span>
          <div className="mi-step"><span className="mi-step__circle">Validation</span></div><span className="mi-step__arrow">→</span>
          <div className="mi-step"><span className="mi-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="mi-reliable"><div className="mi-container"><div className="mi-reliable__inner mi-animate">
        <h2 className="mi-reliable__heading">Why Choose mTouch Labs for <span className="mi-text-accent">Cloud Migration</span>?</h2>
        <p className="mi-reliable__text">We ensure migration enhances performance and stability.</p>
        <div className="mi-reliable__pillars">
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Structured migration planning</span></div>
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Enterprise-scale workload management</span></div>
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Multi-cloud environment expertise</span></div>
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Security-first transition frameworks</span></div>
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Zero-disruption migration strategy</span></div>
          <div className="mi-pillar"><span className="mi-pillar__dot"></span><span className="mi-pillar__label">Post-migration performance optimization</span></div>
        </div>
      </div></div></section>

      <section className="mi-industries"><div className="mi-container">
        <h2 className="mi-industries__title mi-animate">Industries We <span className="mi-text-accent">Serve</span></h2>
        <div className="mi-industries__grid mi-stagger">
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">💻</span><h4 className="mi-industry__title">Technology &amp; SaaS</h4></div>
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">💳</span><h4 className="mi-industry__title">Financial Services</h4></div>
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">🏥</span><h4 className="mi-industry__title">Healthcare Organizations</h4></div>
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">🛒</span><h4 className="mi-industry__title">eCommerce Enterprises</h4></div>
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">🏢</span><h4 className="mi-industry__title">Enterprise B2B</h4></div>
          <div className="mi-industry mi-animate--scale"><span className="mi-industry__icon">🤖</span><h4 className="mi-industry__title">Data-Driven Organizations</h4></div>
        </div>
      </div></section>

      <section className="mi-tech"><div className="mi-container"><div className="mi-tech__grid">
        <div className="mi-animate--left">
          <h2 className="mi-tech__heading">Technologies We <span className="mi-text-accent">Work With</span></h2>
          <p className="mi-tech__text">Enterprise migration tools and cloud platforms for secure transitions.</p>
          <div className="mi-tech__tags">
            {["AWS Migration Hub","Azure Migrate","Google Cloud Migrate","Terraform","Docker","Kubernetes","AWS DMS","CloudEndure","Velero","Ansible","CloudFormation","RDS","S3","VPC","IAM","CloudWatch","Datadog","CI/CD"].map((t)=>(<span key={t} className="mi-tag">{t}</span>))}
          </div>
        </div>
        <div className="mi-tech__stats mi-animate--right">
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">3</span><span className="mi-stat__label">Cloud Platforms</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">18+</span><span className="mi-stat__label">Migration Tools</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">0</span><span className="mi-stat__label">Data Loss</span></div>
          <div className="mi-stat mi-stat--dark"><span className="mi-stat__number">IaC</span><span className="mi-stat__label">Automated Provisioning</span></div>
        </div>
      </div></div></section>

      <section className="mi-faq"><div className="mi-container"><div className="mi-faq__wrapper">
        <h3 className="mi-faq__heading mi-animate">Frequently Asked <span className="mi-text-accent">Questions</span></h3>
        <p className="mi-faq__subtext">Everything about cloud migration</p>
        <div className="mi-faq__list">
          <details className="mi-faq__item"><summary className="mi-faq__question"><span>What are cloud migration services?</span><span className="mi-faq__chevron"></span></summary><div className="mi-faq__answer"><p>Cloud migration services involve securely transferring applications, databases, and infrastructure from legacy systems to modern cloud environments with minimal disruption.</p></div></details>
          <details className="mi-faq__item"><summary className="mi-faq__question"><span>How long does cloud migration take?</span><span className="mi-faq__chevron"></span></summary><div className="mi-faq__answer"><p>Duration depends on infrastructure complexity, workload size, and migration strategy — typically ranging from weeks to several months for enterprise systems.</p></div></details>
          <details className="mi-faq__item"><summary className="mi-faq__question"><span>Can migration occur without downtime?</span><span className="mi-faq__chevron"></span></summary><div className="mi-faq__answer"><p>Yes. Structured migration planning and phased execution minimize service disruption, enabling zero-downtime transitions for critical systems.</p></div></details>
          <details className="mi-faq__item"><summary className="mi-faq__question"><span>Is cloud migration secure?</span><span className="mi-faq__chevron"></span></summary><div className="mi-faq__answer"><p>When implemented with encryption, access controls, and compliance validation, migration is secure and controlled. Our <a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud security services</a> ensure end-to-end protection.</p></div></details>
        </div>
      </div></div></section>

      <section className="mi-cta"><div className="mi-container"><div className="mi-cta__inner mi-animate--scale">
        <h2 className="mi-cta__heading">Ready to Migrate to the <span className="mi-text-accent">Cloud</span>?</h2>
        <p className="mi-cta__text">Let&apos;s discuss how structured cloud migration can modernize your infrastructure with zero disruption.</p>
        <button type="button" className="mi-cta__button js-open-modal">Start Your Migration</button>
      </div></div></section>
    </>
  );
}