import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company Chennai | mTouch Labs",
  description: "mTouch Labs is a leading software development company in Chennai delivering enterprise software, cloud solutions, AI-powered applications, and digital transformation services.",
  keywords: ["software development company Chennai","custom software development Chennai","enterprise software company Chennai","cloud solutions Chennai","AI development company Chennai"],
  openGraph: {
    title: "Software Development Company Chennai | mTouch Labs",
    description: "Enterprise software, cloud modernization, and AI-driven digital solutions for Chennai businesses.",
    url: "https://www.mtouchlabs.com/software-development-company-chennai",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-chennai" },
};

const CITY = "Chennai";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/YourChennaiLink";

const STATS = [
  { number: "2000+", label: "Projects Delivered" },
  { number: "1500+", label: "Enterprise Clients" },
  { number: "14+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\u2699\ufe0f", title: "ERP & Business Process Automation", desc: "Digitize finance, HR, procurement, and operations with custom enterprise platforms."}, {icon: "\ud83d\ude9a", title: "Logistics & Supply Chain Systems", desc: "Real-time tracking platforms, inventory management systems, and data dashboards."}, {icon: "\u2601\ufe0f", title: "Cloud Migration & Modernization", desc: "Secure migration of legacy systems to scalable cloud environments."}, {icon: "\ud83e\udd16", title: "AI-Powered Operational Insights", desc: "Predictive analytics, performance forecasting, and intelligent reporting systems."}, {icon: "\ud83c\udf10", title: "Secure Web & Mobile Platforms", desc: "Business-critical applications designed for reliability and performance."}];
const WHY_US = [{icon: "\ud83d\udccb", title: "Digital Modernization Strategy", text: "End-to-end digital transformation consulting for traditional enterprises."}, {icon: "\ud83d\udd04", title: "Process Automation Consulting", text: "Streamline workflows and reduce manual operations across your organization."}, {icon: "\ud83d\udcd0", title: "Scalable Architecture Design", text: "Systems built for growth \u2014 from startup to enterprise scale."}, {icon: "\ud83d\udd12", title: "Data Security & Compliance", text: "Enterprise-grade security protocols aligned with industry standards."}, {icon: "\ud83d\uddfa\ufe0f", title: "Technology Roadmap Planning", text: "Long-term strategic planning for sustainable technology growth."}, {icon: "\ud83d\udee0\ufe0f", title: "Long-Term Support", text: "Dedicated maintenance and monitoring to ensure optimal performance."}];
const INDUSTRIES = [{emoji: "\ud83c\udfed", name: "Manufacturing"}, {emoji: "\ud83d\ude97", name: "Automotive"}, {emoji: "\ud83d\ude9a", name: "Logistics & Supply Chain"}, {emoji: "\ud83c\udfe5", name: "Healthcare"}, {emoji: "\ud83d\udcb3", name: "Fintech & Banking"}, {emoji: "\ud83d\udcbc", name: "Enterprise IT"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "What industries do you support in Chennai?", a: "We support manufacturing, automotive, logistics, healthcare, fintech, and enterprise IT organizations across Chennai."}, {q: "Can you modernize legacy ERP systems in Chennai?", a: "Yes, we help enterprises upgrade legacy systems to cloud-native and scalable architectures for improved efficiency and performance."}, {q: "Do you offer supply chain software development in Chennai?", a: "Yes, we build logistics tracking systems, inventory management platforms, and automation dashboards tailored to Chennai's industrial needs."}, {q: "Can Chennai-based enterprises implement AI solutions?", a: "Yes, we integrate AI-powered analytics and automation tools to improve operational efficiency across manufacturing, logistics, and enterprise operations."}, {q: "Do you provide ongoing support for enterprise systems?", a: "Yes, we provide long-term maintenance, monitoring, and optimization services to ensure your systems perform at their best."}];

export default function SoftwareDevelopmentCompanyChennai() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Chennai</span>
          </h1>
          <p className="loc-heroDesc">Accelerating digital transformation for Chennai's enterprise and industrial ecosystem with enterprise-grade software, cloud transformation, and AI-integrated business applications.</p>
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
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">Smart Technology for Traditional Industries</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Chennai's economy is deeply rooted in manufacturing, automotive production, port logistics, and enterprise operations. These sectors increasingly require workflow automation, ERP modernization, and cloud-based infrastructure.</p>
              <p className="loc-introText">We design technology solutions that enhance visibility, reduce operational friction, and support long-term scalability for businesses across Chennai.</p>
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
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Enterprise-Focused Technology Capabilities</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">How We Support Chennai Enterprises</span></h2>
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