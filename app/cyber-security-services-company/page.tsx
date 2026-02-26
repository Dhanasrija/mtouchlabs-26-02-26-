import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cyber Security Services Company | mTouch Labs",
  description: "mTouch Labs provides enterprise cyber security services including secure application development, cloud security, penetration testing, and compliance solutions.",
  keywords: ["cyber security services","cyber security company","application security services","cloud security solutions","DevSecOps services","enterprise cyber security","cyber security company India"],
  alternates: { canonical: "https://www.mtouchlabs.com/cyber-security-services-company" },
  openGraph: { title: "Cyber Security Services Company | mTouch Labs", description: "Enterprise cyber security solutions including DevSecOps, cloud security, penetration testing, and compliance.", url: "https://www.mtouchlabs.com/cyber-security-services-company", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Cyber Security Services Company | mTouch Labs", description: "Enterprise cyber security solutions including DevSecOps, cloud security, penetration testing, and compliance." },
};

export default function CyberSecurityServices() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="cs-hero">
        <div className="cs-hero__inner">
          <Breadcrumb pagePath="/cyber-security-services-company" />
          <h1 className="cs-hero__title">
            Enterprise <span className="cs-hero__title-accent">Cyber Security</span> Services
          </h1>
          <p className="cs-hero__subtitle">Secure Application Development &amp; Infrastructure Protection</p>
          <p className="cs-hero__desc">mTouch Labs delivers advanced Cyber Security Services designed to protect digital assets, secure enterprise infrastructure, and ensure compliance in today&apos;s evolving threat landscape.</p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="cs-about">
        <div className="cs-container">
          <div className="cs-about__grid">
            <div className="cs-about__content cs-animate--left">
              <h2 className="cs-about__heading">Why <span className="cs-text-accent">Cyber Security</span> Is Critical</h2>
              <p className="cs-about__text">With increasing digital adoption, organizations face risks such as data breaches, ransomware attacks, phishing, cloud vulnerabilities, API security risks, and insider threats.</p>
              <p className="cs-about__text">A proactive cyber security strategy ensures data protection, business continuity, regulatory compliance, customer trust, and risk mitigation. Our <a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud security services</a> provide comprehensive protection across all major cloud platforms.</p>
              <p className="cs-about__text">We integrate security into every stage of development — from secure architecture design to <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud infrastructure</a> protection and continuous threat monitoring with our <a href="/devops-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>DevOps integration</a>.</p>
            </div>
            <div className="cs-stats cs-animate--right">
              <div className="cs-stat"><span className="cs-stat__icon">🛡️</span><span className="cs-stat__label">Data Protection</span></div>
              <div className="cs-stat"><span className="cs-stat__icon">🔐</span><span className="cs-stat__label">Compliance &amp; Governance</span></div>
              <div className="cs-stat"><span className="cs-stat__icon">☁️</span><span className="cs-stat__label">Cloud Security</span></div>
              <div className="cs-stat"><span className="cs-stat__icon">🔍</span><span className="cs-stat__label">Threat Detection</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="cs-whoweare">
        <div className="cs-container">
          <div className="cs-whoweare__grid">
            <div className="cs-whoweare__stats cs-animate--left">
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">14+</span><span className="cs-stat__label">Years of Experience</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">200+</span><span className="cs-stat__label">Security Audits</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">100%</span><span className="cs-stat__label">Compliance Rate</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">24/7</span><span className="cs-stat__label">Threat Monitoring</span></div>
            </div>
            <div className="cs-whoweare__content cs-animate--right">
              <h2 className="cs-whoweare__heading">Our Security <span className="cs-text-accent">Expertise</span></h2>
              <p className="cs-whoweare__text">We provide comprehensive cyber security services across the full stack:</p>
              <ul className="cs-checklist">
                <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Secure Application Development (DevSecOps)</span></li>
                <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Cloud Security — AWS, Azure &amp; GCP configuration &amp; IAM</span></li>
                <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Penetration Testing &amp; Vulnerability Assessment</span></li>
                <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Network &amp; Infrastructure Security — Firewall, IDS/IPS, VPN</span></li>
                <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Data Protection &amp; Compliance — GDPR, encryption, <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>disaster recovery</a></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="cs-services">
        <div className="cs-container">
          <div className="cs-services__header cs-animate">
            <h2 className="cs-services__title">Our Cyber <span className="cs-text-accent">Security Services</span></h2>
            <p className="cs-services__subtitle">End-to-end security solutions from code to cloud</p>
          </div>
          <div className="cs-services__grid cs-stagger">
            <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">01</span><h4 className="cs-service-card__title">DevSecOps &amp; Secure Development</h4><p className="cs-service-card__text">Secure coding practices, code vulnerability analysis, dependency checks, API security, and continuous security integration.</p></div>
            <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">02</span><h4 className="cs-service-card__title">Cloud Security Solutions</h4><p className="cs-service-card__text">AWS, Azure &amp; GCP security configuration, identity &amp; access management, encryption strategies, and compliance audits.</p></div>
            <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">03</span><h4 className="cs-service-card__title">Penetration Testing</h4><p className="cs-service-card__text">Web &amp; mobile app penetration testing, network vulnerability scanning, risk assessment, and remediation guidance.</p></div>
            <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">04</span><h4 className="cs-service-card__title">Network &amp; Infrastructure Security</h4><p className="cs-service-card__text">Firewall configuration, endpoint protection, intrusion detection systems (IDS/IPS), and secure VPN setup.</p></div>
            <div className="cs-service-card cs-service-card--wide cs-animate--scale"><span className="cs-service-card__badge">05</span><h4 className="cs-service-card__title">Data Protection &amp; Compliance</h4><p className="cs-service-card__text">GDPR-aligned data handling, role-based access control, encryption at rest &amp; in transit, and backup &amp; disaster recovery planning.</p></div>
          </div>
        </div>
      </section>

      {/* ===== DELIVERY ===== */}
      <section className="cs-delivery">
        <div className="cs-container">
          <h2 className="cs-delivery__heading cs-animate">Our Security <span className="cs-text-accent">Development Approach</span></h2>
          <p className="cs-delivery__text">This structured methodology ensures enterprise-grade security with measurable risk reduction.</p>
          <div className="cs-delivery__steps">
            <div className="cs-step"><span className="cs-step__circle">Risk Assessment</span></div><span className="cs-step__arrow">→</span>
            <div className="cs-step"><span className="cs-step__circle">Threat Modeling</span></div><span className="cs-step__arrow">→</span>
            <div className="cs-step"><span className="cs-step__circle">Secure Design</span></div><span className="cs-step__arrow">→</span>
            <div className="cs-step"><span className="cs-step__circle">Implementation</span></div><span className="cs-step__arrow">→</span>
            <div className="cs-step"><span className="cs-step__circle">Compliance Validation</span></div><span className="cs-step__arrow">→</span>
            <div className="cs-step"><span className="cs-step__circle">Monitoring &amp; Response</span></div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="cs-reliable">
        <div className="cs-container">
          <div className="cs-reliable__inner cs-animate">
            <h2 className="cs-reliable__heading">Why Choose <span className="cs-text-accent">mTouch Labs</span>?</h2>
            <p className="cs-reliable__text">We combine technical expertise with strategic consulting to deliver long-term cyber resilience.</p>
            <div className="cs-reliable__pillars">
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Security-first development approach</span></div>
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Integrated DevSecOps methodology</span></div>
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Cloud-native security expertise</span></div>
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Continuous monitoring &amp; reporting</span></div>
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Enterprise-grade compliance frameworks</span></div>
              <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Risk-based security strategy</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="cs-industries">
        <div className="cs-container">
          <h2 className="cs-industries__title cs-animate">Industries We <span className="cs-text-accent">Serve</span></h2>
          <div className="cs-industries__grid cs-stagger">
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">💰</span><h4 className="cs-industry__title">FinTech &amp; Banking</h4></div>
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🏥</span><h4 className="cs-industry__title">Healthcare &amp; HealthTech</h4></div>
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🛒</span><h4 className="cs-industry__title">eCommerce Platforms</h4></div>
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🚀</span><h4 className="cs-industry__title">SaaS &amp; Enterprise Software</h4></div>
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🏠</span><h4 className="cs-industry__title">Real Estate &amp; Digital Platforms</h4></div>
            <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🏭</span><h4 className="cs-industry__title">Manufacturing &amp; Supply Chain</h4></div>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGIES ===== */}
      <section className="cs-tech">
        <div className="cs-container">
          <div className="cs-tech__grid">
            <div className="cs-tech__content cs-animate--left">
              <h2 className="cs-tech__heading">Security Tools <span className="cs-text-accent">We Work With</span></h2>
              <p className="cs-tech__text">Enterprise-grade security tools and frameworks for comprehensive protection.</p>
              <div className="cs-tech__tags">
                {["OWASP Standards","SIEM Tools","AWS Security Hub","Azure Security Center","GCP Security","SSL/TLS","AES Encryption","DevSecOps CI/CD","IAM","Vault","SonarQube","Trivy","Snyk","Burp Suite","Nessus","Splunk","CloudTrail","Terraform"].map((t)=>(<span key={t} className="cs-tag">{t}</span>))}
              </div>
            </div>
            <div className="cs-tech__stats cs-animate--right">
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">3</span><span className="cs-stat__label">Cloud Platforms</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">OWASP</span><span className="cs-stat__label">Security Standards</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">E2E</span><span className="cs-stat__label">Encryption</span></div>
              <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">24/7</span><span className="cs-stat__label">Threat Monitoring</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="cs-faq">
        <div className="cs-container">
          <div className="cs-faq__wrapper">
            <h3 className="cs-faq__heading cs-animate">Frequently Asked <span className="cs-text-accent">Questions</span></h3>
            <p className="cs-faq__subtext">Everything you need to know about our security services</p>
            <div className="cs-faq__list">
              <details className="cs-faq__item"><summary className="cs-faq__question"><span>What are cyber security services?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Cyber security services include protecting applications, networks, cloud environments, and data from cyber threats through preventive and proactive security measures.</p></div></details>
              <details className="cs-faq__item"><summary className="cs-faq__question"><span>Does mTouch Labs provide secure application development?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Yes. We integrate security practices into the development lifecycle using DevSecOps and secure coding standards.</p></div></details>
              <details className="cs-faq__item"><summary className="cs-faq__question"><span>How often should security audits be conducted?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Security audits should be conducted periodically and after major updates to ensure ongoing protection against vulnerabilities.</p></div></details>
              <details className="cs-faq__item"><summary className="cs-faq__question"><span>Do you provide cloud security services?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Yes. We offer <a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>AWS, Azure, and Google Cloud security</a> configuration and monitoring services.</p></div></details>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cs-cta">
        <div className="cs-container">
          <div className="cs-cta__inner cs-animate--scale">
            <h2 className="cs-cta__heading">Secure Your <span className="cs-text-accent">Digital Assets</span> Today</h2>
            <p className="cs-cta__text">Let&apos;s discuss how our cyber security services can protect your business from threats and ensure compliance.</p>
            <button type="button" className="cs-cta__button js-open-modal">Get a Free Security Assessment</button>
          </div>
        </div>
      </section>
    </>
  );
}