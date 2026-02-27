import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Company Bangalore | mTouch Labs",
  description: "mTouch Labs is a Software Development Company in Bangalore specializing in SaaS platforms, AI-powered systems, cloud-native applications, and enterprise product engineering.",
  keywords: ["software development company Bangalore","SaaS development company Bangalore","product engineering company Bangalore","AI software development Bangalore","enterprise software company Bangalore"],
  openGraph: {
    title: "Software Development Company Bangalore - mTouch Labs",
    description: "Driving innovation through SaaS, AI solutions, and scalable cloud-native software development in Bangalore.",
    url: "https://www.mtouchlabs.com/software-development-company-bangalore",
    type: "website",
  },
  alternates: { canonical: "https://www.mtouchlabs.com/software-development-company-bangalore" },
};

const CITY = "Bangalore";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?ll=12.890594,77.605481&z=16&t=m&hl=en-GB&gl=US&mapclient=embed&cid=12773700721766872846";

const STATS = [
  { number: "2000+", label: "Projects Delivered" },
  { number: "1050+", label: "Enterprise Clients" },
  { number: "14+", label: "Years Experience" },
  { number: "99%", label: "Client Retention" },
];

const SERVICES = [{icon: "\ud83d\ude80", title: "Digital Product Engineering", desc: "End-to-end product lifecycle development \u2014 from ideation and architecture to deployment and scaling."}, {icon: "\u2601\ufe0f", title: "SaaS Application Development", desc: "Multi-tenant, subscription-based, cloud-native SaaS platforms built for performance and global scalability."}, {icon: "\ud83e\udd16", title: "AI & Intelligent Systems", desc: "Machine learning integrations, business automation tools, predictive analytics, and AI-enabled dashboards."}, {icon: "\ud83d\udcf1", title: "Advanced Web & Mobile Platforms", desc: "High-performance applications built with modern frameworks optimized for user experience and scalability."}, {icon: "\u2699\ufe0f", title: "Cloud-Native & DevOps Solutions", desc: "Infrastructure automation, CI/CD pipelines, containerization, and microservices architecture."}];
const WHY_US = [{icon: "\ud83d\udca1", title: "Product-First Thinking", text: "We approach every project as a product \u2014 focused on users, scalability, and market fit."}, {icon: "\ud83d\udcd0", title: "Strong Architecture Design", text: "Systems designed for performance, reliability, and long-term scalability."}, {icon: "\u26a1", title: "Rapid MVP Development", text: "Go from concept to working product quickly with our accelerated development process."}, {icon: "\ud83d\udcc8", title: "Enterprise Scalability", text: "Solutions that grow with your business from startup to enterprise scale."}, {icon: "\ud83d\udd12", title: "Secure & Compliant Systems", text: "Industry-standard security protocols built into every solution."}, {icon: "\ud83e\udd1d", title: "Transparent Collaboration", text: "Clear communication, regular updates, and full visibility into your project."}];
const INDUSTRIES = [{emoji: "\u2601\ufe0f", name: "SaaS Startups"}, {emoji: "\ud83d\udcb3", name: "Fintech Innovators"}, {emoji: "\ud83c\udfe5", name: "HealthTech Companies"}, {emoji: "\ud83d\uded2", name: "E-commerce Brands"}, {emoji: "\ud83d\udcbc", name: "Enterprise IT Divisions"}, {emoji: "\ud83d\udce6", name: "Product-Based Companies"}];

const PROCESS = [
  { title: "Requirement Analysis & Consultation", desc: "Deep-dive into your business goals, technical requirements, and user expectations." },
  { title: "Architecture Planning", desc: "Designing scalable, secure system architecture tailored to your needs." },
  { title: "UI/UX Design & Prototyping", desc: "Creating intuitive, user-centered interfaces validated through prototyping." },
  { title: "Agile Development Sprints", desc: "Iterative feature development with regular demos and feedback loops." },
  { title: "Quality Testing & Optimization", desc: "Comprehensive QA, performance tuning, and security testing." },
  { title: "Deployment & Ongoing Support", desc: "Smooth go-live with continuous monitoring, maintenance, and support." },
];

const FAQS = [{q: "Why is Bangalore ideal for software development?", a: "Bangalore has a strong startup ecosystem, global tech presence, and access to skilled engineers, making it India's leading innovation hub."}, {q: "Does mTouch Labs work with SaaS startups in Bangalore?", a: "Yes, we specialize in SaaS product development, scalable cloud platforms, and MVP engineering for startups."}, {q: "Can you help Bangalore enterprises modernize legacy systems?", a: "Yes, we provide enterprise modernization, cloud migration, and AI integration services."}, {q: "Do you offer dedicated development teams in Bangalore?", a: "Yes, businesses can hire dedicated teams or build extended offshore development units with us."}, {q: "Do you support global product launches from Bangalore?", a: "Yes, we build globally scalable SaaS and enterprise solutions from Bangalore for international markets."}];

export default function SoftwareDevelopmentCompanyBangalore() {
  return (
    <div className="loc-pageWrapper">
      <section className="loc-hero">
        <div className="loc-heroBg" aria-hidden="true" />
        <div className="loc-heroContent">
          <span className="loc-heroBadge"><span className="loc-heroBadgeDot" />Software Development Company in {CITY}</span>
          <h1 className="loc-heroTitle">
            Software Development Company <span className="loc-highlight">Banglore</span>
          </h1>
          <p className="loc-heroDesc">Building innovative digital products from India's Silicon Valley. We collaborate with fast-growing businesses in Bangalore to design, engineer, and scale powerful digital products.</p>
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
          <h2 className="loc-sectionTitle">Supporting {CITY}&apos;s <span className="loc-highlight">Strategic Technology Partners</span></h2>
          <div className="loc-introGrid">
            <div>
              <p className="loc-introText">Bangalore's competitive ecosystem demands faster product launches, scalable SaaS architecture, AI-enabled automation, and cloud-first infrastructure.</p>
              <p className="loc-introText">We help startups reduce time-to-market and enterprises modernize legacy systems through agile product development frameworks.</p>
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
          <h2 className="loc-sectionTitle"><span className="loc-highlight">Product Engineering & Innovation Services</span></h2>
          <p className="loc-sectionDesc">We build future-ready technology platforms tailored to local and global markets. <Link href="/services" style={{ color: "var(--loc-primary)", fontWeight: 600, textDecoration: "underline" }}>View all services →</Link></p>
          <div className="loc-servicesGrid">
            {SERVICES.map((svc, i) => (<div key={svc.title} className="loc-serviceCard"><span className="loc-serviceNum" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span><div className="loc-serviceIcon">{svc.icon}</div><h3 className="loc-serviceTitle">{svc.title}</h3><p className="loc-serviceDesc">{svc.desc}</p></div>))}
          </div>
        </div>
      </section>

      <div className="loc-sectionDivider" />
      <section className="loc-section loc-whySection">
        <div className="loc-sectionInner">
          <h2 className="loc-sectionTitle"><span className="loc-highlight">What Sets Us Apart</span></h2>
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