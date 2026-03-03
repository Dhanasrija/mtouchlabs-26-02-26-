import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Software Development Company in Coimbatore | mTouch Labs",
  description: "mTouch Labs is a leading software development company in Coimbatore delivering custom enterprise software, SaaS platforms, AI-powered systems, ERP solutions, and cloud modernization services.",
  keywords: ["software development company in Coimbatore","custom software development Coimbatore","ERP development Coimbatore","AI development company Coimbatore","SaaS development Coimbatore"],
  openGraph: {
    title: "Software Development Company in Coimbatore | mTouch Labs",
    description: "Enterprise software, AI-driven systems, ERP solutions, and scalable SaaS platforms for businesses in Coimbatore.",
    url: "https://www.mtouchlabs.com/software-development-company-coimbatore",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-coimbatore",
  },
};

export default function SoftwareDevelopmentCompanyCoimbatore() {
  return (
    <div className="loc-page">
      {/* ═══ HERO ═══ */}
      <section className="loc-hero">
        <div className="loc-heroInner">
          <div className="loc-heroContent">
            <div className="loc-heroBadge">
              <span className="loc-heroBadgeDot" />
              mTouch Labs · Coimbatore
            </div>
            <h1 className="loc-heroTitle">
              Software Development Company in{" "}
              <span className="loc-highlight">Coimbatore</span>
            </h1>
            <p className="loc-heroDesc">
              Enterprise &amp; AI-driven software solutions for Coimbatore — empowering industries, startups, and enterprises with scalable digital platforms since 2012.
            </p>
            <Link href="/contact-us" className="loc-heroCta">
              Get a Free Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ INTRO ═══ */}
      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <div className="loc-introGrid">
            <div>
              <h2 className="loc-introTitle">Bridging Coimbatore&apos;s Industrial Strength with Modern Technology</h2>
              <p className="loc-introText">Coimbatore is widely known for its manufacturing excellence, textile industry, engineering units, and MSME-driven economy. mTouch Labs supports Coimbatore-based organizations by digitizing workflows, implementing ERP systems, building analytics dashboards, and integrating AI-powered automation.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">TIDEL Park</span>
                <span className="loc-introTag">Saravanampatti</span>
                <span className="loc-introTag">Peelamedu</span>
                <span className="loc-introTag">Singanallur</span>
                <span className="loc-introTag">Avinashi Road</span>
              </div>
            </div>
            <div className="loc-introStats">
              <div className="loc-statCard">
                <div className="loc-statNum">2000+</div>
                <div className="loc-statLabel">Projects</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">1050+</div>
                <div className="loc-statLabel">Clients</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">14+</div>
                <div className="loc-statLabel">Years</div>
              </div>
              <div className="loc-statCard">
                <div className="loc-statNum">99%</div>
                <div className="loc-statLabel">Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Core Technology Capabilities in <span className="loc-highlight">Coimbatore</span></h2>
            <p className="loc-sectionDesc">Long-term digital partnerships — not traditional IT vendors.</p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚙️</div>
              <h3 className="loc-serviceTitle">Custom Software Engineering</h3>
              <p className="loc-serviceDesc">Business-specific applications built to solve operational bottlenecks and improve efficiency.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Application Development</h3>
              <p className="loc-serviceDesc">Robust ERP, CRM, and internal automation systems tailored for growing enterprises.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle">SaaS &amp; Product Development</h3>
              <p className="loc-serviceDesc">Scalable multi-tenant SaaS platforms designed for subscription-based growth models.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI &amp; Intelligent Automation</h3>
              <p className="loc-serviceDesc">Predictive analytics, automated reporting, and smart decision-support systems.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔄</div>
              <h3 className="loc-serviceTitle">Cloud &amp; Infrastructure Modernization</h3>
              <p className="loc-serviceDesc">Secure migration of legacy systems to scalable cloud environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Choose <span className="loc-highlight">mTouch Labs</span> in Coimbatore?</h2>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🏆</div><div><h4 className="loc-whyTitle">Founded in 2012</h4><p className="loc-whyText">Global delivery experience across industries.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤖</div><div><h4 className="loc-whyTitle">AI, SaaS &amp; Enterprise</h4><p className="loc-whyText">Expertise in AI, SaaS, and enterprise systems.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile Methodology</h4><p className="loc-whyText">Structured agile development methodology.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📊</div><div><h4 className="loc-whyTitle">Transparent Governance</h4><p className="loc-whyText">Transparent project governance and communication.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">👥</div><div><h4 className="loc-whyTitle">Dedicated Teams</h4><p className="loc-whyText">Dedicated offshore development teams.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Support</h4><p className="loc-whyText">Maintenance and optimization support.</p></div></div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve in <span className="loc-highlight">Coimbatore</span></h2>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard"><span className="loc-industryEmoji">🏭</span><h4 className="loc-industryName">Textile &amp; Manufacturing</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">🔧</span><h4 className="loc-industryName">Engineering &amp; Machinery</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">🏥</span><h4 className="loc-industryName">Healthcare &amp; Diagnostics</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">🛒</span><h4 className="loc-industryName">Retail &amp; Distribution</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">📚</span><h4 className="loc-industryName">Education &amp; Institutions</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">💼</span><h4 className="loc-industryName">Enterprise &amp; Corporate</h4></div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Our Development Approach</h2>
            <p className="loc-sectionDesc">A structured process tailored to deliver measurable ROI through scalable digital systems.</p>
          </div>
          <div className="loc-processSteps">
            <div className="loc-processStep"><div className="loc-processNum">01</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">Requirement Analysis</h4><p className="loc-processStepDesc">Deep-dive consultation to understand your business needs.</p></div></div>
            <div className="loc-processStep"><div className="loc-processNum">02</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">Architecture Planning</h4><p className="loc-processStepDesc">Designing scalable system architecture.</p></div></div>
            <div className="loc-processStep"><div className="loc-processNum">03</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">UI/UX Design</h4><p className="loc-processStepDesc">User-centered prototyping and interface design.</p></div></div>
            <div className="loc-processStep"><div className="loc-processNum">04</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">Agile Development</h4><p className="loc-processStepDesc">Sprint-based development with CI/CD.</p></div></div>
            <div className="loc-processStep"><div className="loc-processNum">05</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">Quality Testing</h4><p className="loc-processStepDesc">Comprehensive testing and optimization.</p></div></div>
            <div className="loc-processStep"><div className="loc-processNum">06</div><div className="loc-processStepContent"><h4 className="loc-processStepTitle">Deployment &amp; Support</h4><p className="loc-processStepDesc">Launch and ongoing support.</p></div></div>
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
            <details className="loc-faqItem" open>
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">What services does mTouch Labs offer in Coimbatore?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">We provide custom software development, enterprise applications, SaaS platforms, AI-driven automation, and cloud modernization services.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Can you build ERP systems for manufacturing businesses?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we design and implement ERP and automation systems tailored for manufacturing and industrial operations.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Do you support startups in Coimbatore?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we help startups build MVPs, scalable SaaS products, and mobile applications.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Do you provide long-term support?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we offer continuous maintenance, upgrades, monitoring, and performance optimization.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Can businesses hire dedicated developers from mTouch Labs?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we provide flexible offshore development team models tailored to project requirements.</div>
            </details>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Build Something Great?</h2>
          <p className="loc-ctaDesc">Partner with mTouch Labs to transform your business with scalable, secure, and innovative software solutions.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-ctaBtnPrimary">Get a Free Consultation →</Link>
            <Link href="/portfolio" className="loc-ctaBtnSecondary">Explore Our Work</Link>
          </div>
        </div>
      </section>

      <FAQSchema faqs={[
        { q: "What services does mTouch Labs offer in Coimbatore?", a: "We provide custom software development, enterprise applications, SaaS platforms, AI-driven automation, and cloud modernization services." },
        { q: "Can you build ERP systems for manufacturing businesses?", a: "Yes, we design and implement ERP and automation systems tailored for manufacturing and industrial operations." },
        { q: "Do you support startups in Coimbatore?", a: "Yes, we help startups build MVPs, scalable SaaS products, and mobile applications." },
        { q: "Do you provide long-term support?", a: "Yes, we offer continuous maintenance, upgrades, monitoring, and performance optimization." },
        { q: "Can businesses hire dedicated developers from mTouch Labs?", a: "Yes, we provide flexible offshore development team models tailored to project requirements." }
      ]} />
    </div>
  );
}