import type { Metadata } from "next";
import Link from "next/link";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
  title: "Software Development Company in Kochi | mTouch Labs",
  description: "mTouch Labs is a leading software development company in Kochi delivering custom enterprise software, SaaS platforms, AI-powered systems, and cloud-native solutions.",
  keywords: ["software development company in Kochi","custom software development Kochi","IT company in Kochi","SaaS development Kochi","AI development company Kochi"],
  openGraph: {
    title: "Software Development Company in Kochi | mTouch Labs",
    description: "Enterprise software, SaaS platforms, AI-driven systems, and scalable cloud solutions for businesses in Kochi.",
    url: "https://www.mtouchlabs.com/software-development-company-kochi",
    type: "website",
  },
  alternates: {
    canonical: "https://www.mtouchlabs.com/software-development-company-kochi",
  },
};

export default function SoftwareDevelopmentCompanyKochi() {
  return (
    <div className="loc-page">
      {/* ═══ HERO ═══ */}
      <section className="loc-hero">
        <div className="loc-heroInner">
          <div className="loc-heroContent">
            <div className="loc-heroBadge">
              <span className="loc-heroBadgeDot" />
              mTouch Labs · Kochi
            </div>
            <h1 className="loc-heroTitle">
              Software Development Company in{" "}
              <span className="loc-highlight">Kochi</span>
            </h1>
            <p className="loc-heroDesc">
              Scalable software &amp; AI solutions for businesses in Kochi — empowering enterprises, startups, and growing businesses with secure, intelligent digital platforms.
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
              <h2 className="loc-introTitle">Supporting Kochi&apos;s Expanding Digital Ecosystem</h2>
              <p className="loc-introText">Kochi has rapidly emerged as one of Kerala&apos;s leading IT and business hubs, driven by Infopark, SmartCity Kochi, logistics &amp; port-based industries, tourism, healthcare, and e-commerce businesses. mTouch Labs bridges the gap through tailored technology solutions.</p>
              <div className="loc-introTags">
                <span className="loc-introTag">Infopark</span>
                <span className="loc-introTag">SmartCity Kochi</span>
                <span className="loc-introTag">Marine Drive</span>
                <span className="loc-introTag">Kakkanad</span>
                <span className="loc-introTag">Edappally</span>
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
            <h2 className="loc-sectionTitle">Our Technology Expertise in <span className="loc-highlight">Kochi</span></h2>
            <p className="loc-sectionDesc">Long-term digital capabilities — not one-time software delivery.</p>
          </div>
          <div className="loc-servicesGrid">
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">⚙️</div>
              <h3 className="loc-serviceTitle">Custom Software Development</h3>
              <p className="loc-serviceDesc">Business-specific applications designed to improve productivity and streamline operations.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🏢</div>
              <h3 className="loc-serviceTitle">Enterprise Application Development</h3>
              <p className="loc-serviceDesc">ERP, CRM, and internal management systems for structured business control.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">☁️</div>
              <h3 className="loc-serviceTitle">SaaS &amp; Product Engineering</h3>
              <p className="loc-serviceDesc">Cloud-based multi-tenant platforms built for subscription growth and scalability.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🤖</div>
              <h3 className="loc-serviceTitle">AI &amp; Intelligent Automation</h3>
              <p className="loc-serviceDesc">Predictive analytics, automated reporting, and smart dashboards.</p>
            </div>
            <div className="loc-serviceCard">
              <div className="loc-serviceIcon">🔄</div>
              <h3 className="loc-serviceTitle">Cloud Migration &amp; Infrastructure</h3>
              <p className="loc-serviceDesc">Secure migration from legacy systems to scalable cloud environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Why Choose <span className="loc-highlight">mTouch Labs</span> in Kochi?</h2>
          </div>
          <div className="loc-whyGrid">
            <div className="loc-whyCard"><div className="loc-whyIcon">🏆</div><div><h4 className="loc-whyTitle">Founded in 2012</h4><p className="loc-whyText">Global project experience across industries.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🤖</div><div><h4 className="loc-whyTitle">AI &amp; SaaS Expertise</h4><p className="loc-whyText">Strong expertise in AI, SaaS, and enterprise platforms.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🔄</div><div><h4 className="loc-whyTitle">Agile &amp; DevOps</h4><p className="loc-whyText">Agile and DevOps-driven development model.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">📊</div><div><h4 className="loc-whyTitle">Transparent Governance</h4><p className="loc-whyText">Transparent communication and project governance.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">👥</div><div><h4 className="loc-whyTitle">Dedicated Teams</h4><p className="loc-whyText">Dedicated offshore development teams.</p></div></div>
            <div className="loc-whyCard"><div className="loc-whyIcon">🛠️</div><div><h4 className="loc-whyTitle">Long-Term Support</h4><p className="loc-whyText">Ongoing maintenance &amp; optimization support.</p></div></div>
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═══ */}
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <div className="loc-sectionHeader">
            <h2 className="loc-sectionTitle">Industries We Serve in <span className="loc-highlight">Kochi</span></h2>
          </div>
          <div className="loc-industriesGrid">
            <div className="loc-industryCard"><span className="loc-industryEmoji">🚢</span><h4 className="loc-industryName">Logistics &amp; Maritime</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">🏨</span><h4 className="loc-industryName">Tourism &amp; Hospitality</h4></div>
            <div className="loc-industryCard"><span className="loc-industryEmoji">🏥</span><h4 className="loc-industryName">Healthcare &amp; Clinics</h4></div>
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
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">What services does mTouch Labs offer in Kochi?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">We provide custom software development, enterprise systems, SaaS platforms, AI-powered automation, and cloud modernization services.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Can you build software for logistics and port-based businesses?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we develop tracking systems, dashboards, and automation tools tailored to logistics and maritime industries.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Do you support startups in Kochi?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we help startups build MVPs, scalable SaaS platforms, and mobile applications.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Do you provide AI-driven analytics solutions?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we implement predictive analytics and intelligent reporting systems.</div>
            </details>
            <details className="loc-faqItem">
              <summary className="loc-faqQuestion"><span className="loc-faqQuestionText">Can businesses hire dedicated developers from mTouch Labs?</span><span className="loc-faqChevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></summary>
              <div className="loc-faqAnswer">Yes, we offer flexible offshore development team models for startups and enterprises.</div>
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
        { q: "What services does mTouch Labs offer in Kochi?", a: "We provide custom software development, enterprise systems, SaaS platforms, AI-powered automation, and cloud modernization services." },
        { q: "Can you build software for logistics and port-based businesses?", a: "Yes, we develop tracking systems, dashboards, and automation tools tailored to logistics and maritime industries." },
        { q: "Do you support startups in Kochi?", a: "Yes, we help startups build MVPs, scalable SaaS platforms, and mobile applications." },
        { q: "Do you provide AI-driven analytics solutions?", a: "Yes, we implement predictive analytics and intelligent reporting systems." },
        { q: "Can businesses hire dedicated developers from mTouch Labs?", a: "Yes, we offer flexible offshore development team models for startups and enterprises." }
      ]} />
    </div>
  );
}