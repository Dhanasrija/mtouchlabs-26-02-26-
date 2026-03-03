import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Quality Assurance Quality Engineering & Testing Testing Services | QA Solutions | mTouch Labs",
  description:
    "mTouch Labs provides end-to-end quality engineering and testing services including functional testing, automation testing, performance testing, security testing, and CI/CD quality integration.",
  keywords: [
    "quality engineering services",
    "software testing company",
    "QA testing services",
    "automation testing services",
    "performance testing company",
    "quality assurance company India",
  ],
  openGraph: {
    title: "Quality Assurance Quality Engineering & Testing Testing Services | mTouch Labs",
    description:
      "End-to-end quality engineering and software testing services — from test automation to performance and security testing.",
    url: "https://www.mtouchlabs.com/quality-assurance-and-testing-services",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Assurance Quality Engineering & Testing Testing Services | mTouch Labs",
    description:
      "Comprehensive QA and testing services to deliver bug-free, high-performance software products.",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/quality-assurance-and-testing-services",
  },
};

const faqs = [
  { q: "What are quality engineering services?", a: "Quality engineering services encompass the full spectrum of QA activities including test strategy, automation frameworks, performance testing, security testing, and continuous quality integration within CI/CD pipelines to ensure software reliability." },
  { q: "How is quality engineering different from traditional QA testing?", a: "Traditional QA focuses on finding bugs after development. Quality engineering integrates quality throughout the entire software development lifecycle — from requirements to deployment — using automation, shift-left testing, and continuous monitoring." },
  { q: "What types of testing does mTouch Labs provide?", a: "We provide functional testing, regression testing, test automation, API testing, performance and load testing, security testing, mobile app testing, accessibility testing, and end-to-end integration testing." },
  { q: "Do you offer test automation services?", a: "Yes. We build scalable test automation frameworks using Selenium, Cypress, Playwright, Appium, and custom tools integrated with CI/CD pipelines for continuous testing." },
  { q: "Can you help with performance testing for high-traffic applications?", a: "Yes. We conduct comprehensive load testing, stress testing, and scalability testing using tools like JMeter, Gatling, and K6 to ensure your application handles peak traffic reliably." },
  { q: "Do you provide security testing services?", a: "Yes. Our security testing covers vulnerability assessments, penetration testing, OWASP compliance checks, and security audits to protect your application from threats." },
];

export default function QualityEngineeringTestingPage() {
  return (
    <div className="loc-page">
      {/* ═══ HERO ═══ */}
      <section className="loc-hero">
        <div className="loc-heroInner">
          <div className="loc-heroContent">
            <div className="loc-heroBadge">
              <span className="loc-heroBadgeDot" />
              mTouch Labs · Quality Assurance
            </div>
            <h1 className="loc-heroTitle">
              Quality Assurance &amp;{" "}
              <span className="loc-highlight">Testing Services</span>
            </h1>
            <p className="loc-heroDesc">
              Delivering enterprise-grade quality assurance, test automation, and performance engineering to ensure your software is reliable, secure, and scalable from day one.
            </p>
            <Link href="/contact-us" className="loc-heroCta">
              Request a QA Consultation →
            </Link>
          </div>
          <div className="loc-heroStats">
            <div className="loc-heroStat">
              <div className="loc-heroStatNum">1500+</div>
              <div className="loc-heroStatLabel">Projects Tested</div>
            </div>
            <div className="loc-heroStat">
              <div className="loc-heroStatNum">99.9%</div>
              <div className="loc-heroStatLabel">Defect Detection</div>
            </div>
            <div className="loc-heroStat">
              <div className="loc-heroStatNum">60%</div>
              <div className="loc-heroStatLabel">Faster Releases</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Why Quality Engineering Matters</h2>
              <p className="loc-introText">
                In today&apos;s fast-paced software delivery landscape, quality cannot be an afterthought. Poor software quality costs businesses billions annually through downtime, security breaches, and lost customer trust. Quality engineering embeds testing and quality practices throughout the development lifecycle — catching defects earlier, reducing costs, and accelerating time-to-market.
              </p>
              <div className="loc-introTags">
                <span className="loc-introTag">Shift-Left Testing</span>
                <span className="loc-introTag">Test Automation</span>
                <span className="loc-introTag">CI/CD Integration</span>
                <span className="loc-introTag">Performance Engineering</span>
                <span className="loc-introTag">Security Testing</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">500+</div>
                <div className="loc-statLabel">Projects</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">85%</div>
                <div className="loc-statLabel">Automation Coverage</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">40%</div>
                <div className="loc-statLabel">Cost Reduction</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">99%</div>
                <div className="loc-statLabel">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Our <span className="loc-highlight">Testing Services</span>
            </h2>
            <p className="loc-sectionDesc">
              Comprehensive quality engineering solutions tailored to your software delivery needs.
            </p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔍</div>
              <h3 className="loc-serviceTitle">Functional Testing</h3>
              <p className="loc-serviceDesc">End-to-end functional validation ensuring every feature works as expected across all user scenarios and business workflows.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">Test Automation</h3>
              <p className="loc-serviceDesc">Scalable automation frameworks using Selenium, Cypress, Playwright, and Appium integrated with CI/CD pipelines for continuous testing.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚡</div>
              <h3 className="loc-serviceTitle">Performance Testing</h3>
              <p className="loc-serviceDesc">Load, stress, and scalability testing using JMeter, Gatling, and K6 to ensure your application handles peak traffic reliably.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔒</div>
              <h3 className="loc-serviceTitle">Security Testing</h3>
              <p className="loc-serviceDesc">Vulnerability assessments, penetration testing, and OWASP compliance checks to protect your application from threats.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">📱</div>
              <h3 className="loc-serviceTitle">Mobile App Testing</h3>
              <p className="loc-serviceDesc">Cross-device and cross-platform testing for iOS and Android applications ensuring consistent user experience across all devices.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔗</div>
              <h3 className="loc-serviceTitle">API &amp; Integration Testing</h3>
              <p className="loc-serviceDesc">Comprehensive API validation, contract testing, and end-to-end integration testing across microservices and third-party systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Why Choose <span className="loc-highlight">mTouch Labs</span> for QA
            </h2>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🎯</div>
              <div>
                <h4 className="loc-whyTitle">Shift-Left Testing Approach</h4>
                <p className="loc-whyText">We embed quality from requirements phase, catching defects 10x cheaper than in production.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🤖</div>
              <div>
                <h4 className="loc-whyTitle">Automation-First Strategy</h4>
                <p className="loc-whyText">85%+ automation coverage with custom frameworks for faster, repeatable testing.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🔄</div>
              <div>
                <h4 className="loc-whyTitle">CI/CD Quality Gates</h4>
                <p className="loc-whyText">Automated quality checks integrated directly into your deployment pipelines.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">📊</div>
              <div>
                <h4 className="loc-whyTitle">Real-Time Test Analytics</h4>
                <p className="loc-whyText">Dashboards with test coverage, defect trends, and quality metrics for full visibility.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🏆</div>
              <div>
                <h4 className="loc-whyTitle">Domain Expertise</h4>
                <p className="loc-whyText">Specialized QA teams with experience across FinTech, Healthcare, E-commerce, and SaaS.</p>
              </div>
            </div>
            <div className="loc-whyCard">
              <div className="loc-whyIcon">🛡️</div>
              <div>
                <h4 className="loc-whyTitle">Security-First Mindset</h4>
                <p className="loc-whyText">Built-in security testing at every stage to prevent vulnerabilities before deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">
              Industries We <span className="loc-highlight">Test For</span>
            </h2>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">💳</span>
              <h4 className="loc-industryName">FinTech &amp; Banking</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🏥</span>
              <h4 className="loc-industryName">Healthcare &amp; HealthTech</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🛒</span>
              <h4 className="loc-industryName">E-commerce &amp; Retail</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">☁️</span>
              <h4 className="loc-industryName">SaaS Platforms</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">📚</span>
              <h4 className="loc-industryName">EdTech &amp; E-Learning</h4>
            </div>
            <div className="loc-industryCard">
              <span className="loc-industryEmoji">🚚</span>
              <h4 className="loc-industryName">Logistics &amp; Supply Chain</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Quality Engineering Process</h2>
            <p className="loc-sectionDesc">
              A structured, data-driven approach to delivering zero-defect software at speed.
            </p>
          </div>
          <div className="loc-processSteps">
            <div className="loc-processStep">
              <div className="loc-processNum">01</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Test Strategy &amp; Planning</h4>
                <p className="loc-processStepDesc">Define test scope, risk areas, automation candidates, and quality KPIs aligned with business goals.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">02</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Test Environment Setup</h4>
                <p className="loc-processStepDesc">Configure test environments, data management, and tool infrastructure for consistent execution.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">03</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Test Design &amp; Automation</h4>
                <p className="loc-processStepDesc">Create test cases, build automation scripts, and design reusable test frameworks.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">04</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Continuous Test Execution</h4>
                <p className="loc-processStepDesc">Run automated and manual tests within CI/CD pipelines with every build and deployment.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">05</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Defect Analysis &amp; Reporting</h4>
                <p className="loc-processStepDesc">Track defects, analyze root causes, and provide actionable quality insights through dashboards.</p>
              </div>
            </div>
            <div className="loc-processStep">
              <div className="loc-processNum">06</div>
              <div className="loc-processStepContent">
                <h4 className="loc-processStepTitle">Quality Optimization</h4>
                <p className="loc-processStepDesc">Continuously improve test coverage, reduce execution time, and optimize quality processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Frequently Asked Questions</h2>
          </div>
          <div className="loc-faqList">
            {faqs.map((faq, i) => (
              <details className="loc-faqItem" key={i}>
                <summary className="loc-faqQuestion">
                  <span className="loc-faqQuestionText">{faq.q}</span>
                  <span className="loc-faqChevron">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </span>
                </summary>
                <div className="loc-faqAnswer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Ship Bug-Free Software?</h2>
          <p className="loc-ctaDesc">
            Partner with mTouch Labs to embed quality into every stage of your software delivery pipeline — from code commit to production.
          </p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary">
              Get a Free QA Consultation →
            </Link>
            <Link href="/portfolio" className="loc-ctaBtnSecondary">
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={faqs} />

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initAOS() {
            if (typeof AOS !== "undefined") { AOS.init({ duration: 800, once: true, offset: 80, easing: "ease-out-cubic" }); }
            else { setTimeout(initAOS, 200); }
          }
          initAOS();
        })();
      `}} />
    </div>
  );
}