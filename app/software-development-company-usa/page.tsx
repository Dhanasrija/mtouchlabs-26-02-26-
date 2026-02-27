import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company USA | mTouch Labs",
  description: "mTouch Labs provides secure and scalable software development services for USA businesses including SaaS platforms, enterprise applications, cloud-native systems, and AI solutions.",
  keywords: ["software development company USA","custom software development USA","enterprise software USA","SaaS development company USA","AI development company USA"],
  openGraph: {
    title: "Software Development Company USA | mTouch Labs",
    description: "Enterprise-grade software, SaaS, cloud-native, and AI-powered solutions for U.S. startups and enterprises.",
    url: "https://www.mtouchlabs.com/software-development-company-usa",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-usa" },
};

const CITY = "USA";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YourUSALink";

const STATS = [
  { number: "200+", label: "Projects Delivered" },
  { number: "50+", label: "Enterprise Clients" },
  { number: "8+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\ud83c\udfe2", title: "Enterprise Application Engineering", desc: "Custom-built enterprise systems that streamline operations and support large-scale growth."}, {icon: "\u2601\ufe0f", title: "SaaS & Cloud Platform Development", desc: "Cloud-native, microservices-based applications built for AWS and Azure ecosystems."}, {icon: "\ud83e\udd16", title: "AI & Automation Solutions", desc: "Machine learning integrations, predictive analytics, and intelligent workflow automation."}, {icon: "\ud83c\udfe5", title: "Healthcare & Fintech Systems", desc: "Secure software solutions designed with awareness of HIPAA, SOC 2, and regulatory expectations."}, {icon: "\ud83d\udcf1", title: "Mobile & Web Platforms", desc: "High-performance applications optimized for user engagement and enterprise-grade reliability."}];
const WHY_US = [{icon: "\ud83d\udc65", title: "Dedicated Offshore Teams", text: "Full-time engineering teams working exclusively on your projects."}, {icon: "\ud83d\udd50", title: "Time-Zone Overlap", text: "Overlapping work hours ensure real-time communication and agile sprint delivery."}, {icon: "\ud83d\udcca", title: "Transparent Sprint Delivery", text: "Clear governance, documentation standards, and predictable delivery timelines."}, {icon: "\ud83d\udd12", title: "NDA & IP Protection", text: "Comprehensive intellectual property protection and non-disclosure agreements."}, {icon: "\ud83d\udee1\ufe0f", title: "HIPAA & SOC 2 Awareness", text: "Solutions designed with regulatory frameworks in mind for healthcare and fintech."}, {icon: "\ud83d\udee0\ufe0f", title: "Long-Term Support", text: "Continuous monitoring, maintenance, and optimization services."}];
const INDUSTRIES = [{emoji: "\ud83c\udfe5", name: "Healthcare & HealthTech"}, {emoji: "\ud83d\udcb3", name: "Fintech & Banking"}, {emoji: "\u2601\ufe0f", name: "SaaS Platforms"}, {emoji: "\ud83d\uded2", name: "E-commerce & Retail"}, {emoji: "\ud83c\udfe2", name: "Enterprise Solutions"}, {emoji: "\ud83d\udcda", name: "EdTech & Learning"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "Do you provide software development services for U.S. companies?", a: "Yes, we support startups and enterprises across the United States with scalable software engineering and dedicated offshore development teams."}, {q: "How do you ensure compliance with U.S. regulations?", a: "We design secure systems aligned with HIPAA, SOC 2 readiness practices, and enterprise-level security standards."}, {q: "Can U.S. startups hire dedicated development teams?", a: "Yes, we offer flexible hiring models including dedicated offshore development teams and project-based engagement."}, {q: "Do you support SaaS and cloud-native application development?", a: "Yes, we specialize in SaaS platforms, microservices architecture, and cloud-native systems."}, {q: "How do you handle time-zone collaboration?", a: "We align overlapping working hours to ensure real-time communication and agile sprint delivery."}];

export default function SoftwareDevelopmentCompanyUSA() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Usa</span>
          </h1>
          <p className="loc-heroDesc">Engineering secure and scalable digital solutions for U.S. businesses. We partner with startups, mid-sized companies, and enterprises across the United States.</p>
          <div className="loc-heroCtas">
            <Link href="/contact-us" className="loc-btnPrimary">Start Your Project →</Link>
            <Link href="/portfolio" className="loc-btnSecondary">View Our Work</Link>
          </div>
        </div>
        <div className="loc-heroScroll"><span>Scroll</span><span className="loc-scrollLine" /></div>
      </section>

      <div className="loc-linksBanner">
        <div className="loc-linksBannerInner">
          <span className="loc-linksBannerLabel">Explore →</span>
          <Link href="/services" className="loc-internalLink">Our Services</Link>
          <Link href="/about" className="loc-internalLink">About Us</Link>
          <Link href="/contact-us" className="loc-internalLink">Contact Us</Link>
          <Link href="/portfolio" className="loc-internalLink">Portfolio</Link>
        </div>
      </div>

      <section className="loc-section loc-introSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">U.S. Innovation & Enterprise Ecosystem</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">The U.S. technology landscape demands rapid product iteration, enterprise scalability, data security compliance, and AI-driven decision intelligence.</p>
              <p className="loc-introText">We help U.S.-based companies modernize legacy systems, accelerate product development, and implement intelligent automation strategies.</p>
            </div>
            <div className="loc-introVisual">
              <div className="loc-introVisualOrb" aria-hidden="true" />
              <div className="loc-introVisualOrb" aria-hidden="true" />
              <div className="loc-introStats">
                {STATS.map((stat) => (<div key={stat.label} className="loc-statCard"><div className="loc-statNumber">{stat.number}</div><div className="loc-statLabel">{stat.label}</div></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-servicesSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Core Capabilities for U.S. Clients</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">How We Collaborate with U.S. Companies</span></h2>
          <p className="loc-sectionDesc">Measurable business impact through reliable and innovative software solutions. <Link href="/about" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>Learn more about us →</Link></p>
          <div className="loc-whyGrid">
            {WHY_US.map((item) => (<div key={item.title} className="loc-whyCard"><div className="loc-whyIcon">{item.icon}</div><div><h3 className="loc-whyTitle">{item.title}</h3><p className="loc-whyText">{item.text}</p></div></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-industriesSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Industries We Serve in <span className="loc-highlight">{CITY}</span></h2>
          <p className="loc-sectionDesc">Delivering domain-specific solutions across {CITY}&apos;s key industries.</p>
          <div className="loc-industriesGrid">
            {INDUSTRIES.map((ind) => (<div key={ind.name} className="loc-industryCard"><span className="loc-industryEmoji" aria-hidden="true">{ind.emoji}</span><h3 className="loc-industryName">{ind.name}</h3></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-processSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Our <span className="loc-highlight">Development Approach</span></h2>
          <p className="loc-sectionDesc">A structured process delivering measurable ROI through scalable digital systems.</p>
          <div className="loc-processTimeline">
            {PROCESS.map((step, i) => (<div key={step.title} className="loc-processStep"><div className="loc-processStepNum">{String(i + 1).padStart(2, "0")}</div><div className="loc-processStepContent"><h3 className="loc-processStepTitle">{step.title}</h3><p className="loc-processStepDesc">{step.desc}</p></div></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-faqSection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle">Frequently Asked Questions</h2>
          <p className="loc-sectionDesc">Common questions about <span className="loc-highlight">software development</span> services in {CITY}.</p>
          <div className="loc-faqList">
            {FAQS.map((faq, i) => (<details key={i} className="loc-faqAccordion"><summary className="loc-faqSummary"><span className="loc-faqNum">{String(i + 1).padStart(2, "0")}</span><span className="loc-faqQuestionText">{faq.q}</span><span className="loc-faqChevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg></span></summary><div className="loc-faqAnswerWrap"><p className="loc-faqAnswer">{faq.a}</p></div></details>))}
          </div>
        </div>
      </section>

      <section className="loc-ctaSection">
        <div className="loc-ctaInner">
          <h2 className="loc-ctaTitle">Ready to Build Your Next <span className="loc-highlight">Digital Product</span>?</h2>
          <p className="loc-ctaDesc">Partner with {CITY}&apos;s trusted software development team. Let&apos;s turn your vision into a scalable reality.</p>
          <div className="loc-ctaActions">
            <Link href="/contact-us" className="loc-btnPrimary">Get a Free Consultation →</Link>
            <Link href="/services" className="loc-btnSecondary">Explore Services</Link>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="loc-btnYellow">📍 Visit Our {CITY} Office</a>
          </div>
        </div>
      </section>
    </div>
  );
}