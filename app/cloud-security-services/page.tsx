import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cloud Security Services | mTouch Labs",
  description: "mTouch Labs provides cloud security services including risk assessment, compliance management, encryption, and enterprise cloud protection solutions.",
  keywords: ["cloud security services","cloud security consulting","enterprise cloud protection","IAM implementation","cloud compliance services","cloud threat monitoring"],
  alternates: { canonical: "https://www.mtouchlabs.com/cloud-security-services" },
  openGraph: { title: "Cloud Security Services | mTouch Labs", description: "Advanced cloud security solutions for enterprise infrastructure protection.", url: "https://www.mtouchlabs.com/cloud-security-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Cloud Security Services | mTouch Labs", description: "Secure and compliant cloud environments with structured governance." },
};

export default function CloudSecurityServices() {
  return (
    <>
      <section className="se-hero"><div className="se-hero__inner">
        <Breadcrumb pagePath="/cloud-security-services" />
        <h1 className="se-hero__title">Cloud <span className="se-hero__title-accent">Security</span> Services</h1>
        <p className="se-hero__subtitle">Protecting Cloud Environments with Advanced Security &amp; Compliance Frameworks</p>
        <p className="se-hero__desc">mTouch Labs provides enterprise-grade Cloud Security Services designed to safeguard cloud infrastructure, applications, and data against evolving cyber threats. Cloud performance means nothing without cloud protection.</p>
      </div></section>

      <section className="se-about"><div className="se-container"><div className="se-about__grid">
        <div className="se-about__content se-animate--left">
          <h2 className="se-about__heading">What Are <span className="se-text-accent">Cloud Security</span> Services?</h2>
          <p className="se-about__text">Cloud security services involve implementing protective controls, monitoring systems, and governance frameworks to secure cloud-based infrastructure and applications — including identity management, data encryption, security audits, threat detection, and compliance monitoring.</p>
          <p className="se-about__text">As organizations scale across <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud platforms</a>, security risks expand in complexity. Misconfigurations, unauthorized access, and compliance gaps can expose sensitive systems.</p>
          <p className="se-about__text">Our security approach integrates with <a href="/devops-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>DevOps pipelines</a> through DevSecOps, ensuring protection is embedded at every stage of development and deployment.</p>
        </div>
        <div className="se-stats se-animate--right">
          <div className="se-stat"><span className="se-stat__icon">🛡️</span><span className="se-stat__label">Threat Monitoring</span></div>
          <div className="se-stat"><span className="se-stat__icon">🔐</span><span className="se-stat__label">IAM &amp; Access Control</span></div>
          <div className="se-stat"><span className="se-stat__icon">📋</span><span className="se-stat__label">Compliance Governance</span></div>
          <div className="se-stat"><span className="se-stat__icon">🔑</span><span className="se-stat__label">Data Encryption</span></div>
        </div>
      </div></div></section>

      <section className="se-whoweare"><div className="se-container"><div className="se-whoweare__grid">
        <div className="se-whoweare__stats se-animate--left">
          <div className="se-stat se-stat--dark"><span className="se-stat__number">1500+</span><span className="se-stat__label">Security Projects</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">GDPR</span><span className="se-stat__label">Compliance Ready</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">24/7</span><span className="se-stat__label">Threat Monitoring</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">0</span><span className="se-stat__label">Security Breaches</span></div>
        </div>
        <div className="se-whoweare__content se-animate--right">
          <h2 className="se-whoweare__heading">Our Security <span className="se-text-accent">Capabilities</span></h2>
          <p className="se-whoweare__text">Comprehensive cloud protection across all layers:</p>
          <ul className="se-checklist">
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Cloud risk assessment &amp; security audits</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Identity &amp; access management (IAM) — RBAC, MFA, PAM</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Data protection &amp; encryption at rest and in transit</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>Threat monitoring &amp; incident detection systems</span></li>
            <li className="se-checklist__item"><span className="se-checklist__icon">✓</span><span>DevSecOps integration — automated scanning &amp; compliance</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="se-services"><div className="se-container">
        <div className="se-services__header se-animate"><h2 className="se-services__title">Our Cloud Security <span className="se-text-accent">Services</span></h2><p className="se-services__subtitle">From risk assessment to continuous governance</p></div>
        <div className="se-services__grid se-stagger">
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">01</span><h4 className="se-service-card__title">Risk Assessment &amp; Audits</h4><p className="se-service-card__text">Configuration vulnerability scanning, access control analysis, exposure risk identification, compliance gap assessment, and network security evaluation with actionable improvement plans.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">02</span><h4 className="se-service-card__title">Identity &amp; Access Management</h4><p className="se-service-card__text">Role-based access control (RBAC), multi-factor authentication (MFA), privileged access governance, and policy-based authorization models strengthening operational security.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">03</span><h4 className="se-service-card__title">Data Protection &amp; Encryption</h4><p className="se-service-card__text">Encryption at rest and in transit, secure key management, data masking strategies, and backup encryption validation protecting data integrity across workloads.</p></div>
          <div className="se-service-card se-animate--scale"><span className="se-service-card__badge">04</span><h4 className="se-service-card__title">Threat Monitoring &amp; Detection</h4><p className="se-service-card__text">Security monitoring systems, intrusion detection mechanisms, log analysis frameworks, and real-time alerting models for early threat detection and minimized impact.</p></div>
          <div className="se-service-card se-service-card--wide se-animate--scale"><span className="se-service-card__badge">05</span><h4 className="se-service-card__title">Compliance &amp; Governance</h4><p className="se-service-card__text">Policy documentation, compliance alignment, regulatory reporting, security governance frameworks, and continuous compliance validation ensuring audit readiness at all times.</p></div>
        </div>
      </div></section>

      <section className="se-delivery"><div className="se-container">
        <h2 className="se-delivery__heading se-animate">Our Cloud Security <span className="se-text-accent">Framework</span></h2>
        <p className="se-delivery__text">Structured execution ensures long-term resilience.</p>
        <div className="se-delivery__steps">
          <div className="se-step"><span className="se-step__circle">Assessment</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Risk Mitigation</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Controls</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Monitoring</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Compliance</span></div><span className="se-step__arrow">→</span>
          <div className="se-step"><span className="se-step__circle">Review</span></div>
        </div>
      </div></section>

      <section className="se-reliable"><div className="se-container"><div className="se-reliable__inner se-animate">
        <h2 className="se-reliable__heading">Why Choose mTouch Labs for <span className="se-text-accent">Cloud Security</span>?</h2>
        <p className="se-reliable__text">We secure cloud environments with precision and discipline.</p>
        <div className="se-reliable__pillars">
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Security-first architecture methodology</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Enterprise compliance expertise</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Multi-cloud protection capability</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Continuous monitoring systems</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">Risk-based governance models</span></div>
          <div className="se-pillar"><span className="se-pillar__dot"></span><span className="se-pillar__label">DevOps &amp; cloud integration</span></div>
        </div>
      </div></div></section>

      <section className="se-industries"><div className="se-container">
        <h2 className="se-industries__title se-animate">Industries We <span className="se-text-accent">Serve</span></h2>
        <div className="se-industries__grid se-stagger">
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">💳</span><h4 className="se-industry__title">Financial Services</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🏥</span><h4 className="se-industry__title">Healthcare Organizations</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">💻</span><h4 className="se-industry__title">SaaS Platforms</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🛒</span><h4 className="se-industry__title">eCommerce Enterprises</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🏢</span><h4 className="se-industry__title">Enterprise B2B</h4></div>
          <div className="se-industry se-animate--scale"><span className="se-industry__icon">🤖</span><h4 className="se-industry__title">Data-Driven Organizations</h4></div>
        </div>
      </div></section>

      <section className="se-tech"><div className="se-container"><div className="se-tech__grid">
        <div className="se-animate--left">
          <h2 className="se-tech__heading">Cloud <span className="se-text-accent">Security Technologies</span></h2>
          <p className="se-tech__text">Enterprise security tools and cloud-native protection platforms.</p>
          <div className="se-tech__tags">
            {["AWS IAM","Azure AD","GCP IAM","AWS GuardDuty","Azure Sentinel","CloudTrail","AWS KMS","Vault","SonarQube","Trivy","Snyk","OWASP","Terraform","Ansible","Prometheus","Grafana","Splunk","ELK Stack"].map((t)=>(<span key={t} className="se-tag">{t}</span>))}
          </div>
        </div>
        <div className="se-tech__stats se-animate--right">
          <div className="se-stat se-stat--dark"><span className="se-stat__number">18+</span><span className="se-stat__label">Security Tools</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">GDPR</span><span className="se-stat__label">Compliance</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">24/7</span><span className="se-stat__label">Threat Monitoring</span></div>
          <div className="se-stat se-stat--dark"><span className="se-stat__number">IAM</span><span className="se-stat__label">Access Control</span></div>
        </div>
      </div></div></section>

      <section className="se-faq"><div className="se-container"><div className="se-faq__wrapper">
        <h3 className="se-faq__heading se-animate">Frequently Asked <span className="se-text-accent">Questions</span></h3>
        <p className="se-faq__subtext">Everything about cloud security</p>
        <div className="se-faq__list">
          <details className="se-faq__item"><summary className="se-faq__question"><span>What are cloud security services?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>Cloud security services protect cloud infrastructure, applications, and data through risk management, monitoring, encryption, and compliance frameworks.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>How do cloud security services reduce risk?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>By implementing access controls, encryption, monitoring systems, and compliance validation to prevent unauthorized access, breaches, and data exposure.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>Are services necessary for multi-cloud environments?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>Yes. Multi-cloud deployments require unified security policies and centralized monitoring to prevent fragmentation and ensure consistent protection.</p></div></details>
          <details className="se-faq__item"><summary className="se-faq__question"><span>Can cloud security support compliance requirements?</span><span className="se-faq__chevron"></span></summary><div className="se-faq__answer"><p>Yes. Structured governance frameworks align cloud environments with regulatory standards including GDPR, HIPAA, and SOC 2 compliance.</p></div></details>
        </div>
      </div></div></section>

      <section className="se-cta"><div className="se-container"><div className="se-cta__inner se-animate--scale">
        <h2 className="se-cta__heading">Secure Your <span className="se-text-accent">Cloud Environment</span></h2>
        <p className="se-cta__text">Let&apos;s discuss how our security services can protect your cloud infrastructure and ensure compliance.</p>
        <button type="button" className="se-cta__button js-open-modal">Get a Security Assessment</button>
      </div></div></section>
    </>
  );
}