import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company Canada | mTouch Labs",
  description: "mTouch Labs provides custom software development services in Canada including SaaS platforms, enterprise systems, cloud solutions, and AI-powered applications.",
  keywords: ["software development company Canada","custom software development Canada","SaaS development company Canada","enterprise software Canada","AI development company Canada"],
  openGraph: {
    title: "Software Development Company Canada | mTouch Labs",
    description: "Scalable SaaS, enterprise software, cloud, and AI solutions for Canadian businesses.",
    url: "https://www.mtouchlabs.com/software-development-company-canada",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-canada" },
};

const CITY = "Canada";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YourCanadaLink";

const STATS = [
  { number: "2000+", label: "Projects Delivered" },
  { number: "1500+", label: "Enterprise Clients" },
  { number: "14+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\u2601\ufe0f", title: "SaaS & Product Development", desc: "Multi-tenant cloud applications designed for global scalability and recurring revenue models."}, {icon: "\ud83c\udfe2", title: "Enterprise Software Engineering", desc: "Custom-built enterprise systems, workflow automation, and data platforms."}, {icon: "\ud83d\udd04", title: "Cloud Architecture & Migration", desc: "Secure cloud transformation strategies for AWS and Azure environments."}, {icon: "\ud83e\udd16", title: "AI & Data Intelligence", desc: "Predictive analytics, automation engines, and business intelligence dashboards."}, {icon: "\ud83d\udcf1", title: "Mobile & Web Applications", desc: "User-centric applications optimized for performance and growth."}];
const WHY_US = [{icon: "\ud83d\udd50", title: "Time-Zone Overlap", text: "Work schedules aligned for real-time collaboration with Canadian teams."}, {icon: "\ud83d\udd04", title: "Agile Sprint Execution", text: "Iterative development with transparent reporting and regular demos."}, {icon: "\ud83d\udcca", title: "Transparent Reporting", text: "Clear governance, documentation, and progress tracking at every stage."}, {icon: "\ud83d\udd12", title: "PIPEDA Compliance Awareness", text: "Privacy-first architecture aligned with Canadian data protection regulations."}, {icon: "\ud83d\udc65", title: "Dedicated Engineering Teams", text: "Full-time teams working exclusively on your projects."}, {icon: "\ud83d\udee0\ufe0f", title: "Long-Term Support", text: "Continuous monitoring, maintenance, and optimization services."}];
const INDUSTRIES = [{emoji: "\u2601\ufe0f", name: "SaaS Startups"}, {emoji: "\ud83d\udcb3", name: "Fintech & Payments"}, {emoji: "\ud83c\udfe5", name: "Healthcare Technology"}, {emoji: "\ud83d\uded2", name: "E-commerce & Retail"}, {emoji: "\ud83e\udd16", name: "AI & Machine Learning"}, {emoji: "\ud83d\udcbc", name: "Enterprise Solutions"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "Do you provide software development services for Canadian companies?", a: "Yes, we collaborate with startups and enterprises across Canada through structured offshore development models."}, {q: "How do you ensure data security for Canadian businesses?", a: "We follow privacy-first development practices aligned with PIPEDA and global security standards."}, {q: "Can Canadian startups hire dedicated development teams?", a: "Yes, we provide dedicated engineering teams tailored to SaaS, fintech, healthcare, and enterprise needs."}, {q: "Do you offer cloud and AI development services in Canada?", a: "Yes, we build cloud-native applications and AI-powered systems designed for scalability and compliance."}, {q: "How do you manage time-zone collaboration with Canada?", a: "We align work schedules to ensure overlapping communication hours and smooth project coordination."}];

export default function SoftwareDevelopmentCompanyCanada() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Canada</span>
          </h1>
          <p className="loc-heroDesc">Scalable digital solutions for Canadian startups and enterprises. We help organizations build modern applications, cloud-native systems, and AI-driven platforms.</p>
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
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">Canada's Innovation Economy</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Canada has become a global hub for SaaS startups, fintech innovation, healthcare technology, and AI research. To stay competitive, companies require secure, scalable, and performance-optimized digital systems.</p>
              <p className="loc-introText">We deliver technology solutions aligned with Canadian regulatory standards including PIPEDA and industry best practices.</p>
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
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Technology Services for Canadian Businesses</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Why Canadian Businesses Choose Us</span></h2>
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
            {/* <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="loc-btnYellow">📍 Visit Our {CITY} Office</a> */}
          </div>
        </div>
      </section>
    </div>
  );
}