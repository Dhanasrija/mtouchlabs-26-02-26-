import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cloud Services | mTouch Labs",
  description: "mTouch Labs provides cloud services including consulting, migration, infrastructure engineering, and secure enterprise cloud solutions.",
  keywords: ["cloud services","cloud consulting","cloud infrastructure engineering","cloud migration services","enterprise cloud solutions","multi-cloud architecture"],
  alternates: { canonical: "https://www.mtouchlabs.com/cloud-services" },
  openGraph: { title: "Cloud Services | mTouch Labs", description: "Enterprise-ready cloud solutions designed for scalability, security, and digital transformation.", url: "https://www.mtouchlabs.com/cloud-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "Cloud Services | mTouch Labs", description: "Scalable and secure cloud engineering for global businesses." },
};

export default function CloudServices() {
  return (
    <>
      <section className="cs-hero"><div className="cs-hero__inner">
        <Breadcrumb pagePath="/cloud-services" />
        <h1 className="cs-hero__title">Cloud <span className="cs-hero__title-accent">Services</span></h1>
        <p className="cs-hero__subtitle">Scalable, Secure &amp; Enterprise-Ready Cloud Solutions for Modern Businesses</p>
        <p className="cs-hero__desc">mTouch Labs provides comprehensive cloud services designed to help organizations modernize infrastructure, improve operational agility, and scale digital operations securely. Cloud transformation requires architecture, not just migration.</p>
      </div></section>

      <section className="cs-about"><div className="cs-container"><div className="cs-about__grid">
        <div className="cs-about__content cs-animate--left">
          <h2 className="cs-about__heading">What Are <span className="cs-text-accent">Cloud Services</span>?</h2>
          <p className="cs-about__text">Cloud services involve designing, deploying, managing, and optimizing computing infrastructure through scalable cloud platforms. Professional cloud solutions include cloud consulting &amp; strategy, infrastructure design, application migration, performance optimization, security implementation, and managed cloud operations.</p>
          <p className="cs-about__text">The objective is to create flexible, high-availability environments that support business growth. Our <a href="/enterprise-application-development-company" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>enterprise application development</a> capabilities integrate seamlessly with cloud infrastructure for maximum scalability.</p>
          <p className="cs-about__text">Combined with our <a href="/devops-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>DevOps services</a>, we deliver end-to-end cloud engineering that accelerates deployment and ensures operational excellence.</p>
        </div>
        <div className="cs-stats cs-animate--right">
          <div className="cs-stat"><span className="cs-stat__icon">☁️</span><span className="cs-stat__label">Multi-Cloud Architecture</span></div>
          <div className="cs-stat"><span className="cs-stat__icon">🔒</span><span className="cs-stat__label">Security Governance</span></div>
          <div className="cs-stat"><span className="cs-stat__icon">⚡</span><span className="cs-stat__label">Performance Optimization</span></div>
          <div className="cs-stat"><span className="cs-stat__icon">🌐</span><span className="cs-stat__label">Global Scalability</span></div>
        </div>
      </div></div></section>

      <section className="cs-whoweare"><div className="cs-container"><div className="cs-whoweare__grid">
        <div className="cs-whoweare__stats cs-animate--left">
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">1500+</span><span className="cs-stat__label">Cloud Projects</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">3</span><span className="cs-stat__label">Cloud Platforms</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">99.9%</span><span className="cs-stat__label">Uptime SLA</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">24/7</span><span className="cs-stat__label">Monitoring</span></div>
        </div>
        <div className="cs-whoweare__content cs-animate--right">
          <h2 className="cs-whoweare__heading">Cloud Platforms <span className="cs-text-accent">We Support</span></h2>
          <p className="cs-whoweare__text">Our cloud expertise spans all major platforms:</p>
          <ul className="cs-checklist">
            <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span><a href="/amazon-web-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Amazon Web Services (AWS)</a> — compute, storage &amp; AI services</span></li>
            <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Microsoft Azure — enterprise integration &amp; hybrid cloud</span></li>
            <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Google Cloud Platform (GCP) — data analytics &amp; ML workloads</span></li>
            <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span>Hybrid &amp; private cloud environments for regulated industries</span></li>
            <li className="cs-checklist__item"><span className="cs-checklist__icon">✓</span><span><a href="/cloud-security-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>Cloud security</a> &amp; governance across all platforms</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="cs-services"><div className="cs-container">
        <div className="cs-services__header cs-animate"><h2 className="cs-services__title">Our Cloud <span className="cs-text-accent">Services Capabilities</span></h2><p className="cs-services__subtitle">End-to-end cloud engineering for modern enterprises</p></div>
        <div className="cs-services__grid cs-stagger">
          <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">01</span><h4 className="cs-service-card__title">Cloud Consulting &amp; Strategy</h4><p className="cs-service-card__text">Cloud readiness assessment, architecture blueprinting, cost optimization strategy, multi-cloud planning, and infrastructure modernization roadmaps for strategic clarity.</p></div>
          <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">02</span><h4 className="cs-service-card__title">Cloud Infrastructure Engineering</h4><p className="cs-service-card__text">VPC architecture, load balancing &amp; auto-scaling, high-availability systems, secure network configuration, and resource provisioning for reliable performance.</p></div>
          <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">03</span><h4 className="cs-service-card__title">Cloud Migration &amp; Modernization</h4><p className="cs-service-card__text">On-premise to cloud migration, legacy system modernization, database migration, application re-platforming, and zero-downtime migration planning.</p></div>
          <div className="cs-service-card cs-animate--scale"><span className="cs-service-card__badge">04</span><h4 className="cs-service-card__title">Multi-Cloud &amp; Hybrid Solutions</h4><p className="cs-service-card__text">Hybrid cloud architectures, multi-cloud deployment models, cross-platform integration, and disaster recovery systems reducing dependency risks.</p></div>
          <div className="cs-service-card cs-service-card--wide cs-animate--scale"><span className="cs-service-card__badge">05</span><h4 className="cs-service-card__title">Cloud Managed Services</h4><p className="cs-service-card__text">Infrastructure monitoring, performance optimization, backup &amp; disaster recovery, incident management, and continuous improvement cycles for long-term operational stability.</p></div>
        </div>
      </div></section>

      <section className="cs-delivery"><div className="cs-container">
        <h2 className="cs-delivery__heading cs-animate">Our Cloud <span className="cs-text-accent">Implementation Framework</span></h2>
        <p className="cs-delivery__text">Structured lifecycle ensuring reliability and long-term value.</p>
        <div className="cs-delivery__steps">
          <div className="cs-step"><span className="cs-step__circle">Assessment</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Architecture</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Deployment</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Migration</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Security</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Monitoring</span></div><span className="cs-step__arrow">→</span>
          <div className="cs-step"><span className="cs-step__circle">Optimization</span></div>
        </div>
      </div></section>

      <section className="cs-reliable"><div className="cs-container"><div className="cs-reliable__inner cs-animate">
        <h2 className="cs-reliable__heading">Why Choose mTouch Labs for <span className="cs-text-accent">Cloud Services</span>?</h2>
        <p className="cs-reliable__text">We build resilient cloud environments that support sustainable growth.</p>
        <div className="cs-reliable__pillars">
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Enterprise-focused cloud engineering</span></div>
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Multi-cloud architecture expertise</span></div>
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">AI &amp; data platform integration</span></div>
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Security-first infrastructure planning</span></div>
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Scalable DevOps alignment</span></div>
          <div className="cs-pillar"><span className="cs-pillar__dot"></span><span className="cs-pillar__label">Continuous performance monitoring</span></div>
        </div>
      </div></div></section>

      <section className="cs-industries"><div className="cs-container">
        <h2 className="cs-industries__title cs-animate">Industries We <span className="cs-text-accent">Serve</span></h2>
        <div className="cs-industries__grid cs-stagger">
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">💻</span><h4 className="cs-industry__title">Technology &amp; SaaS</h4></div>
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">💳</span><h4 className="cs-industry__title">Financial Services</h4></div>
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🏥</span><h4 className="cs-industry__title">Healthcare Organizations</h4></div>
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🛒</span><h4 className="cs-industry__title">eCommerce Enterprises</h4></div>
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🤖</span><h4 className="cs-industry__title">Data &amp; AI Platforms</h4></div>
          <div className="cs-industry cs-animate--scale"><span className="cs-industry__icon">🏢</span><h4 className="cs-industry__title">Global B2B Enterprises</h4></div>
        </div>
      </div></section>

      <section className="cs-tech"><div className="cs-container"><div className="cs-tech__grid">
        <div className="cs-animate--left">
          <h2 className="cs-tech__heading">Cloud <span className="cs-text-accent">Services Technologies</span></h2>
          <p className="cs-tech__text">Enterprise-grade cloud platforms and DevOps tools for scalable infrastructure.</p>
          <div className="cs-tech__tags">
            {["AWS","Azure","Google Cloud","Terraform","Docker","Kubernetes","Ansible","Jenkins","CloudFormation","Lambda","EC2","S3","RDS","VPC","IAM","CloudWatch","Datadog","Prometheus","Grafana","CI/CD"].map((t)=>(<span key={t} className="cs-tag">{t}</span>))}
          </div>
        </div>
        <div className="cs-tech__stats cs-animate--right">
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">3</span><span className="cs-stat__label">Cloud Platforms</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">20+</span><span className="cs-stat__label">Cloud Tools</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">99.9%</span><span className="cs-stat__label">Uptime SLA</span></div>
          <div className="cs-stat cs-stat--dark"><span className="cs-stat__number">IaC</span><span className="cs-stat__label">Infrastructure as Code</span></div>
        </div>
      </div></div></section>

      <section className="cs-faq"><div className="cs-container"><div className="cs-faq__wrapper">
        <h3 className="cs-faq__heading cs-animate">Frequently Asked <span className="cs-text-accent">Questions</span></h3>
        <p className="cs-faq__subtext">Everything about our cloud services</p>
        <div className="cs-faq__list">
          <details className="cs-faq__item"><summary className="cs-faq__question"><span>What are cloud services?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Cloud services involve deploying and managing scalable computing infrastructure through cloud platforms to improve performance, flexibility, and cost efficiency.</p></div></details>
          <details className="cs-faq__item"><summary className="cs-faq__question"><span>How do cloud services support business growth?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Cloud infrastructure enables scalability, cost optimization, improved security, and faster deployment of digital solutions — supporting innovation at every stage.</p></div></details>
          <details className="cs-faq__item"><summary className="cs-faq__question"><span>Do you provide multi-cloud solutions?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Yes. We design hybrid and multi-cloud architectures based on business needs, leveraging AWS, Azure, and GCP to optimize workload distribution.</p></div></details>
          <details className="cs-faq__item"><summary className="cs-faq__question"><span>Can cloud services support AI and data platforms?</span><span className="cs-faq__chevron"></span></summary><div className="cs-faq__answer"><p>Yes. Cloud environments are optimized to support AI workloads, data pipelines, analytics systems, and <a href="/app-maintenance-support-services" style={{color: "#2563eb", textDecoration: "none", fontWeight: 600}}>ongoing maintenance</a> for peak performance.</p></div></details>
        </div>
      </div></div></section>

      <section className="cs-cta"><div className="cs-container"><div className="cs-cta__inner cs-animate--scale">
        <h2 className="cs-cta__heading">Ready to Transform Your <span className="cs-text-accent">Cloud Infrastructure</span>?</h2>
        <p className="cs-cta__text">Let&apos;s discuss how our cloud services can modernize your infrastructure and accelerate business growth.</p>
        <button type="button" className="cs-cta__button js-open-modal">Start Your Cloud Project</button>
      </div></div></section>
    </>
  );
}