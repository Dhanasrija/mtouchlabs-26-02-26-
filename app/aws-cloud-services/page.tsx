import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "AWS Cloud Services | Amazon Web Services Experts | mTouch Labs",
  description: "mTouch Labs provides AWS cloud services including migration, infrastructure deployment, DevOps automation, and managed cloud solutions.",
  keywords: ["AWS cloud services","Amazon Web Services","AWS migration","AWS infrastructure","cloud consulting","AWS managed services","AWS DevOps"],
  alternates: { canonical: "https://www.mtouchlabs.com/aws-cloud-services" },
  openGraph: { title: "AWS Cloud Services | mTouch Labs", description: "Secure and scalable Amazon Web Services solutions designed for performance and growth.", url: "https://www.mtouchlabs.com/aws-cloud-services", siteName: "mTouch Labs", type: "website" },
  twitter: { card: "summary_large_image", title: "AWS Cloud Services | mTouch Labs", description: "Professional AWS cloud consulting, migration, and managed services." },
};

export default function AWSCloudServices() {
  return (
    <>
      <section className="aw-hero"><div className="aw-hero__inner">
        <Breadcrumb pagePath="/aws-cloud-services" />
        <h1 className="aw-hero__title">AWS <span className="aw-hero__title-accent">Cloud</span> Services</h1>
        <p className="aw-hero__subtitle">Secure, Scalable &amp; High-Performance Amazon Web Services Solutions</p>
        <p className="aw-hero__desc">mTouch Labs provides professional AWS Cloud Services designed to help businesses migrate, modernize, and scale their infrastructure. From cloud migration to infrastructure optimization, we help organizations unlock the full potential of AWS.</p>
      </div></section>

      <section className="aw-about"><div className="aw-container"><div className="aw-about__grid">
        <div className="aw-about__content aw-animate--left">
          <h2 className="aw-about__heading">What Are <span className="aw-text-accent">AWS Cloud</span> Services?</h2>
          <p className="aw-about__text">AWS Cloud Services involve designing, deploying, and managing cloud infrastructure using Amazon Web Services to improve scalability, reliability, and operational efficiency — including migration planning, architecture, DevOps automation, cost optimization, security, and ongoing management.</p>
          <p className="aw-about__text">Our AWS solutions integrate with <a href="/cloud-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>cloud services</a> and <a href="/cloud-migration-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>cloud migration</a> for comprehensive infrastructure modernization.</p>
          <p className="aw-about__text">Combined with <a href="/devops-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>DevOps services</a> and <a href="/cloud-security-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>cloud security</a>, we build environments optimized for performance, resilience, and long-term growth.</p>
        </div>
        <div className="aw-stats aw-animate--right">
          <div className="aw-stat"><span className="aw-stat__icon">☁️</span><span className="aw-stat__label">Cloud Migration</span></div>
          <div className="aw-stat"><span className="aw-stat__icon">🏗️</span><span className="aw-stat__label">Infrastructure</span></div>
          <div className="aw-stat"><span className="aw-stat__icon">⚡</span><span className="aw-stat__label">DevOps Automation</span></div>
          <div className="aw-stat"><span className="aw-stat__icon">🔒</span><span className="aw-stat__label">Security &amp; Compliance</span></div>
        </div>
      </div></div></section>

      <section className="aw-whoweare"><div className="aw-container"><div className="aw-whoweare__grid">
        <div className="aw-whoweare__stats aw-animate--left">
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">200+</span><span className="aw-stat__label">AWS Projects</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">99.9%</span><span className="aw-stat__label">Uptime SLA</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">40%</span><span className="aw-stat__label">Avg Cost Savings</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">14+</span><span className="aw-stat__label">Years Experience</span></div>
        </div>
        <div className="aw-whoweare__content aw-animate--right">
          <h2 className="aw-whoweare__heading">Business Benefits of <span className="aw-text-accent">AWS Cloud</span></h2>
          <p className="aw-whoweare__text">AWS empowers organizations to innovate without infrastructure limitations:</p>
          <ul className="aw-checklist">
            <li className="aw-checklist__item"><span className="aw-checklist__icon">✓</span><span>Reduced infrastructure costs &amp; improved scalability</span></li>
            <li className="aw-checklist__item"><span className="aw-checklist__icon">✓</span><span>High availability &amp; enhanced data security</span></li>
            <li className="aw-checklist__item"><span className="aw-checklist__icon">✓</span><span>Faster deployment cycles &amp; reliable disaster recovery</span></li>
            <li className="aw-checklist__item"><span className="aw-checklist__icon">✓</span><span>DevOps-driven automation &amp; cost optimization</span></li>
            <li className="aw-checklist__item"><span className="aw-checklist__icon">✓</span><span>Transparent governance &amp; long-term partnership</span></li>
          </ul>
        </div>
      </div></div></section>

      <section className="aw-services"><div className="aw-container">
        <div className="aw-services__header aw-animate"><h2 className="aw-services__title">Our AWS <span className="aw-text-accent">Cloud Services</span></h2><p className="aw-services__subtitle">From consulting to managed cloud operations</p></div>
        <div className="aw-services__grid aw-stagger">
          <div className="aw-service-card aw-animate--scale"><span className="aw-service-card__badge">01</span><h4 className="aw-service-card__title">AWS Cloud Consulting</h4><p className="aw-service-card__text">Cloud readiness assessment, architecture planning, cost modeling, security framework design, and scalability roadmap aligned with business goals.</p></div>
          <div className="aw-service-card aw-animate--scale"><span className="aw-service-card__badge">02</span><h4 className="aw-service-card__title">AWS Cloud Migration</h4><p className="aw-service-card__text">On-premise to AWS migration, legacy modernization, database migration, re-platforming, re-architecting, and zero-downtime deployment strategies.</p></div>
          <div className="aw-service-card aw-animate--scale"><span className="aw-service-card__badge">03</span><h4 className="aw-service-card__title">Infrastructure Deployment</h4><p className="aw-service-card__text">EC2 instances, S3 storage, RDS databases, VPC networking, load balancing, and auto-scaling groups optimized for performance and resilience.</p></div>
          <div className="aw-service-card aw-animate--scale"><span className="aw-service-card__badge">04</span><h4 className="aw-service-card__title">DevOps &amp; Automation</h4><p className="aw-service-card__text">CI/CD pipelines, Infrastructure as Code, automated monitoring, container orchestration, and deployment automation for faster release cycles.</p></div>
          <div className="aw-service-card aw-service-card--wide aw-animate--scale"><span className="aw-service-card__badge">05</span><h4 className="aw-service-card__title">Managed Services &amp; Security</h4><p className="aw-service-card__text">Performance monitoring, security audits, backup &amp; disaster recovery, cost optimization, IAM access control, encryption, and compliance-ready architecture.</p></div>
        </div>
      </div></section>

      <section className="aw-delivery"><div className="aw-container">
        <h2 className="aw-delivery__heading aw-animate">Our AWS <span className="aw-text-accent">Implementation Framework</span></h2>
        <p className="aw-delivery__text">Structured approach from assessment to ongoing optimization.</p>
        <div className="aw-delivery__steps">
          <div className="aw-step"><span className="aw-step__circle">Assess</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Architect</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Migrate</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Deploy</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Automate</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Monitor</span></div><span className="aw-step__arrow">→</span>
          <div className="aw-step"><span className="aw-step__circle">Optimize</span></div>
        </div>
      </div></section>

      <section className="aw-reliable"><div className="aw-container"><div className="aw-reliable__inner aw-animate">
        <h2 className="aw-reliable__heading">Why Choose <span className="aw-text-accent">mTouch Labs</span>?</h2>
        <p className="aw-reliable__text">We help businesses transform infrastructure into a competitive advantage.</p>
        <div className="aw-reliable__pillars">
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">Strategic cloud architecture</span></div>
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">Secure &amp; scalable deployment</span></div>
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">DevOps-driven automation</span></div>
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">Cost optimization focus</span></div>
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">Transparent governance</span></div>
          <div className="aw-pillar"><span className="aw-pillar__dot"></span><span className="aw-pillar__label">Long-term cloud partnership</span></div>
        </div>
      </div></div></section>

      <section className="aw-industries"><div className="aw-container">
        <h2 className="aw-industries__title aw-animate">Industries We <span className="aw-text-accent">Support</span></h2>
        <div className="aw-industries__grid aw-stagger">
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">💻</span><h4 className="aw-industry__title">SaaS &amp; Technology</h4></div>
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">💳</span><h4 className="aw-industry__title">FinTech &amp; Finance</h4></div>
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">🏥</span><h4 className="aw-industry__title">Healthcare</h4></div>
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">🛒</span><h4 className="aw-industry__title">eCommerce &amp; Retail</h4></div>
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">🚚</span><h4 className="aw-industry__title">Logistics &amp; Transport</h4></div>
          <div className="aw-industry aw-animate--scale"><span className="aw-industry__icon">🏢</span><h4 className="aw-industry__title">Enterprise Operations</h4></div>
        </div>
      </div></section>

      <section className="aw-tech"><div className="aw-container"><div className="aw-tech__grid">
        <div className="aw-animate--left">
          <h2 className="aw-tech__heading">AWS <span className="aw-text-accent">Technology Stack</span></h2>
          <p className="aw-tech__text">Enterprise AWS services and DevOps tools.</p>
          <div className="aw-tech__tags">
            {["Amazon EC2","Amazon S3","Amazon RDS","Amazon Lambda","Amazon ECS","Amazon EKS","Amazon CloudFront","Amazon VPC","AWS IAM","AWS CloudFormation","AWS CodePipeline","AWS CloudWatch","Amazon DynamoDB","Amazon SQS","Amazon SNS","AWS Elastic Beanstalk","Terraform","Docker"].map((t)=>(<span key={t} className="aw-tag">{t}</span>))}
          </div>
        </div>
        <div className="aw-tech__stats aw-animate--right">
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">200+</span><span className="aw-stat__label">AWS Projects</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">99.9%</span><span className="aw-stat__label">Uptime</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">18+</span><span className="aw-stat__label">AWS Services</span></div>
          <div className="aw-stat aw-stat--dark"><span className="aw-stat__number">14+</span><span className="aw-stat__label">Years</span></div>
        </div>
      </div></div></section>

      <section className="aw-faq"><div className="aw-container"><div className="aw-faq__wrapper">
        <h3 className="aw-faq__heading aw-animate">Frequently Asked <span className="aw-text-accent">Questions</span></h3>
        <p className="aw-faq__subtext">Everything about AWS Cloud Services</p>
        <div className="aw-faq__list">
          <details className="aw-faq__item"><summary className="aw-faq__question"><span>What are AWS Cloud Services?</span><span className="aw-faq__chevron"></span></summary><div className="aw-faq__answer"><p>AWS Cloud Services include migration, deployment, optimization, and management of cloud infrastructure using Amazon Web Services.</p></div></details>
          <details className="aw-faq__item"><summary className="aw-faq__question"><span>Is AWS suitable for enterprise businesses?</span><span className="aw-faq__chevron"></span></summary><div className="aw-faq__answer"><p>Yes. AWS offers scalable infrastructure, security features, and compliance frameworks suitable for enterprise-grade applications with <a href="/cloud-security-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>cloud security</a> integration.</p></div></details>
          <details className="aw-faq__item"><summary className="aw-faq__question"><span>How long does AWS migration take?</span><span className="aw-faq__chevron"></span></summary><div className="aw-faq__answer"><p>Migration timelines depend on system complexity, typically ranging from a few weeks to several months. Our <a href="/cloud-migration-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>cloud migration</a> team ensures zero-downtime transitions.</p></div></details>
          <details className="aw-faq__item"><summary className="aw-faq__question"><span>Do you provide ongoing AWS management?</span><span className="aw-faq__chevron"></span></summary><div className="aw-faq__answer"><p>Yes. We offer continuous monitoring, optimization, and <a href="/cloud-managed-services" style={{color:"#2563eb",textDecoration:"none",fontWeight:600}}>managed cloud services</a> for long-term stability.</p></div></details>
        </div>
      </div></div></section>

      <section className="aw-cta"><div className="aw-container"><div className="aw-cta__inner aw-animate--scale">
        <h2 className="aw-cta__heading">Transform Your <span className="aw-text-accent">Cloud Infrastructure</span></h2>
        <p className="aw-cta__text">Let&apos;s discuss how AWS can scale your business with secure, high-performance cloud solutions.</p>
        <button type="button" className="aw-cta__button js-open-modal">Start AWS Consultation</button>
      </div></div></section>
    </>
  );
}