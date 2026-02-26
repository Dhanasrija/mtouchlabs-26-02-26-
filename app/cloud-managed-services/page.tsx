import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cloud Managed Services | mTouch Labs",
  description: "mTouch Labs provides cloud managed services including 24/7 monitoring, performance optimization, security governance, and infrastructure management.",
  keywords: ["cloud managed services","cloud infrastructure management","24/7 cloud monitoring","cloud performance optimization","managed cloud support","enterprise cloud management"],
  alternates: { canonical: "https://www.mtouchlabs.com/cloud-managed-services" },
  openGraph: { title: "Cloud Managed Services | mTouch Labs", description: "Proactive enterprise cloud infrastructure management and monitoring services.", url: "https://www.mtouchlabs.com/cloud-managed-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Cloud Managed Services | mTouch Labs", description: "Continuous cloud monitoring, governance, and optimization solutions." },
};

export default function CloudManagedServices() {
  return (
    <>
      <section className="ms-hero"><div className="ms-hero__inner">
        <Breadcrumb pagePath="/cloud-managed-services" />
        <h1 className="ms-hero__title">Cloud <span className="ms-hero__title-accent">Managed</span> Services</h1>
        <p className="ms-hero__subtitle">Proactive Cloud Operations &amp; Continuous Infrastructure Management</p>
        <p className="ms-hero__desc">mTouch Labs provides comprehensive Cloud Managed Services designed to ensure continuous performance, operational stability, and long-term scalability of cloud environments. Cloud success depends on sustained management.</p>
      </div></section>

      <section className="ms-about"><div className="ms-container"><div className="ms-about__grid">
        <div className="ms-about__content ms-animate--left">
          <h2 className="ms-about__heading">What Are <span className="ms-text-accent">Cloud Managed</span> Services?</h2>
          <p className="ms-about__text">Cloud managed services involve the continuous monitoring, maintenance, and optimization of cloud infrastructure after deployment — including infrastructure monitoring, resource optimization, security management, backup &amp; recovery, incident response, and cost governance.</p>
          <p className="ms-about__text">Without structured management, performance inefficiencies, cost overruns, and security gaps can arise. Our <a href="/cloud-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud services</a> combined with managed operations ensure end-to-end infrastructure excellence.</p>
          <p className="ms-about__text">Paired with <a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>cloud security governance</a>, we maintain resilient environments that adapt to evolving business demands.</p>
        </div>
        <div className="ms-stats ms-animate--right">
          <div className="ms-stat"><span className="ms-stat__icon">📊</span><span className="ms-stat__label">24/7 Monitoring</span></div>
          <div className="ms-stat"><span className="ms-stat__icon">⚡</span><span className="ms-stat__label">Performance Tuning</span></div>
          <div className="ms-stat"><span className="ms-stat__icon">💰</span><span className="ms-stat__label">Cost Optimization</span></div>
          <div className="ms-stat"><span className="ms-stat__icon">🛡️</span><span className="ms-stat__label">Security Governance</span></div>
        </div>
      </div></div></section>

      <section className="ms-whoweare"><div className="ms-container"><div className="ms-whoweare__grid">
        <div className="ms-whoweare__stats ms-animate--left">
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">99.9%</span><span className="ms-stat__label">Infrastructure Uptime</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">24/7</span><span className="ms-stat__label">Active Monitoring</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">4hr</span><span className="ms-stat__label">Response Time</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">30%</span><span className="ms-stat__label">Avg Cost Savings</span></div>
        </div>
        <div className="ms-whoweare__content ms-animate--right">
          <h2 className="ms-whoweare__heading">Our Managed <span className="ms-text-accent">Capabilities</span></h2>
          <p className="ms-whoweare__text">Proactive cloud operations across all dimensions:</p>
          <ul className="ms-checklist">
            <li className="ms-checklist__item"><span className="ms-checklist__icon">✓</span><span>24/7 infrastructure monitoring — server health, uptime &amp; traffic</span></li>
            <li className="ms-checklist__item"><span className="ms-checklist__icon">✓</span><span>Performance &amp; cost optimization — scaling, forecasting &amp; efficiency</span></li>
            <li className="ms-checklist__item"><span className="ms-checklist__icon">✓</span><span>Backup &amp; disaster recovery — automated scheduling &amp; failover</span></li>
            <li className="ms-checklist__item"><span className="ms-checklist__icon">✓</span><span>Security monitoring &amp; governance — access control &amp; compliance</span></li>
            <li className="ms-checklist__item"><span className="ms-checklist__icon">✓</span><span>Incident management — diagnosis, root cause &amp; resolution tracking</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="ms-services"><div className="ms-container">
        <div className="ms-services__header ms-animate"><h2 className="ms-services__title">Our Managed <span className="ms-text-accent">Services</span></h2><p className="ms-services__subtitle">Continuous operations for cloud excellence</p></div>
        <div className="ms-services__grid ms-stagger">
          <div className="ms-service-card ms-animate--scale"><span className="ms-service-card__badge">01</span><h4 className="ms-service-card__title">24/7 Infrastructure Monitoring</h4><p className="ms-service-card__text">Server health &amp; uptime monitoring, network performance tracking, resource utilization analysis, application responsiveness checks, and traffic load pattern analysis.</p></div>
          <div className="ms-service-card ms-animate--scale"><span className="ms-service-card__badge">02</span><h4 className="ms-service-card__title">Performance &amp; Cost Optimization</h4><p className="ms-service-card__text">Resource scaling adjustments, capacity forecasting, unused resource elimination, cost allocation analysis, and performance benchmarking balancing cost and output.</p></div>
          <div className="ms-service-card ms-animate--scale"><span className="ms-service-card__badge">03</span><h4 className="ms-service-card__title">Backup &amp; Disaster Recovery</h4><p className="ms-service-card__text">Automated backup scheduling, recovery validation testing, business continuity planning, redundancy configuration, and failover management.</p></div>
          <div className="ms-service-card ms-animate--scale"><span className="ms-service-card__badge">04</span><h4 className="ms-service-card__title">Security &amp; Governance</h4><p className="ms-service-card__text">Access control management, policy enforcement, threat detection, compliance validation, and security patch coordination safeguarding integrity.</p></div>
          <div className="ms-service-card ms-service-card--wide ms-animate--scale"><span className="ms-service-card__badge">05</span><h4 className="ms-service-card__title">Incident Management &amp; Support</h4><p className="ms-service-card__text">Incident diagnosis, root cause analysis, escalation protocols, resolution tracking, and preventive recommendations — operational disruptions addressed efficiently.</p></div>
        </div>
      </div></section>

      <section className="ms-delivery"><div className="ms-container">
        <h2 className="ms-delivery__heading ms-animate">Our Managed Services <span className="ms-text-accent">Framework</span></h2>
        <p className="ms-delivery__text">Structured management ensures consistent performance.</p>
        <div className="ms-delivery__steps">
          <div className="ms-step"><span className="ms-step__circle">Onboarding</span></div><span className="ms-step__arrow">→</span>
          <div className="ms-step"><span className="ms-step__circle">Monitoring Setup</span></div><span className="ms-step__arrow">→</span>
          <div className="ms-step"><span className="ms-step__circle">Governance</span></div><span className="ms-step__arrow">→</span>
          <div className="ms-step"><span className="ms-step__circle">Performance Tuning</span></div><span className="ms-step__arrow">→</span>
          <div className="ms-step"><span className="ms-step__circle">Optimization</span></div><span className="ms-step__arrow">→</span>
          <div className="ms-step"><span className="ms-step__circle">Strategic Review</span></div>
        </div>
      </div></section>

      <section className="ms-reliable"><div className="ms-container"><div className="ms-reliable__inner ms-animate">
        <h2 className="ms-reliable__heading">Why Choose mTouch Labs for <span className="ms-text-accent">Managed Services</span>?</h2>
        <p className="ms-reliable__text">We manage cloud environments with operational discipline and performance focus.</p>
        <div className="ms-reliable__pillars">
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Proactive infrastructure management</span></div>
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Enterprise-grade monitoring systems</span></div>
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Security-first governance models</span></div>
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Cost optimization expertise</span></div>
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Continuous improvement methodology</span></div>
          <div className="ms-pillar"><span className="ms-pillar__dot"></span><span className="ms-pillar__label">Scalable global support</span></div>
        </div>
      </div></div></section>

      <section className="ms-industries"><div className="ms-container">
        <h2 className="ms-industries__title ms-animate">Industries We <span className="ms-text-accent">Serve</span></h2>
        <div className="ms-industries__grid ms-stagger">
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">💻</span><h4 className="ms-industry__title">SaaS &amp; Technology</h4></div>
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">💳</span><h4 className="ms-industry__title">Financial Services</h4></div>
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">🏥</span><h4 className="ms-industry__title">Healthcare Organizations</h4></div>
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">🛒</span><h4 className="ms-industry__title">eCommerce Businesses</h4></div>
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">🏢</span><h4 className="ms-industry__title">Enterprise B2B</h4></div>
          <div className="ms-industry ms-animate--scale"><span className="ms-industry__icon">🤖</span><h4 className="ms-industry__title">Data &amp; Analytics</h4></div>
        </div>
      </div></section>

      <section className="ms-tech"><div className="ms-container"><div className="ms-tech__grid">
        <div className="ms-animate--left">
          <h2 className="ms-tech__heading">Technologies We <span className="ms-text-accent">Work With</span></h2>
          <p className="ms-tech__text">Enterprise monitoring, automation, and cloud management tools.</p>
          <div className="ms-tech__tags">
            {["AWS","Azure","Google Cloud","CloudWatch","Datadog","Prometheus","Grafana","PagerDuty","Terraform","Ansible","Docker","Kubernetes","ELK Stack","New Relic","Splunk","Nagios","Jenkins","CI/CD"].map((t)=>(<span key={t} className="ms-tag">{t}</span>))}
          </div>
        </div>
        <div className="ms-tech__stats ms-animate--right">
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">18+</span><span className="ms-stat__label">Management Tools</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">24/7</span><span className="ms-stat__label">Active Monitoring</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">99.9%</span><span className="ms-stat__label">Uptime SLA</span></div>
          <div className="ms-stat ms-stat--dark"><span className="ms-stat__number">SLA</span><span className="ms-stat__label">Response Guarantee</span></div>
        </div>
      </div></div></section>

      <section className="ms-faq"><div className="ms-container"><div className="ms-faq__wrapper">
        <h3 className="ms-faq__heading ms-animate">Frequently Asked <span className="ms-text-accent">Questions</span></h3>
        <p className="ms-faq__subtext">Everything about cloud managed services</p>
        <div className="ms-faq__list">
          <details className="ms-faq__item"><summary className="ms-faq__question"><span>What are cloud managed services?</span><span className="ms-faq__chevron"></span></summary><div className="ms-faq__answer"><p>Cloud managed services provide ongoing monitoring, maintenance, and optimization of cloud infrastructure to ensure performance, security, and cost efficiency.</p></div></details>
          <details className="ms-faq__item"><summary className="ms-faq__question"><span>Do managed services include 24/7 monitoring?</span><span className="ms-faq__chevron"></span></summary><div className="ms-faq__answer"><p>Yes. Continuous infrastructure monitoring ensures rapid detection and resolution of issues before they impact operations.</p></div></details>
          <details className="ms-faq__item"><summary className="ms-faq__question"><span>How do managed services reduce costs?</span><span className="ms-faq__chevron"></span></summary><div className="ms-faq__answer"><p>Through resource optimization, usage monitoring, efficient capacity planning, and elimination of unused resources — typically achieving 20-30% cost savings.</p></div></details>
          <details className="ms-faq__item"><summary className="ms-faq__question"><span>Are managed services suitable for enterprises?</span><span className="ms-faq__chevron"></span></summary><div className="ms-faq__answer"><p>Yes. Enterprise cloud environments benefit from structured governance, proactive monitoring, and our <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>dedicated support models</a>.</p></div></details>
        </div>
      </div></div></section>

      <section className="ms-cta"><div className="ms-container"><div className="ms-cta__inner ms-animate--scale">
        <h2 className="ms-cta__heading">Need Proactive <span className="ms-text-accent">Cloud Management</span>?</h2>
        <p className="ms-cta__text">Let&apos;s discuss how our managed services can ensure your cloud infrastructure runs at peak performance.</p>
        <button type="button" className="ms-cta__button js-open-modal">Get Started</button>
      </div></div></section>
    </>
  );
}