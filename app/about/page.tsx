import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us | mTouch Labs – Leading Software Development Company in India",
  description:
    "mTouch Labs is a top-rated software development company in India with 14+ years of experience delivering mobile apps, web platforms, and enterprise solutions across 12+ countries.",
  keywords:
    "about mTouch Labs, software development company India, mobile app development company, web development company Hyderabad, IT company India",
  alternates: { canonical: "https://www.mtouchlabs.com/about" },
  openGraph: {
    title: "About Us | mTouch Labs",
    description:
      "14+ years of delivering world-class mobile apps, web platforms, and enterprise solutions across 12+ countries.",
    url: "https://www.mtouchlabs.com/about",
    siteName: "mTouch Labs",
    type: "website",
  },
};

const stats = [
  { num: "1500+", label: "Projects Delivered" },
  { num: "100+", label: "Expert Team Members" },
  { num: "14+", label: "Years of Excellence" },
  { num: "12+", label: "Countries Served" },
];

const awards = [
  { icon: "🏆", title: "Award-Winning Designers", text: "Our design team has been recognized for creating exceptional user experiences for over 14 years, helping businesses worldwide achieve their digital goals." },
  { icon: "⭐", title: "4.9 Google Rating", text: "Consistently rated among the top mobile app development companies in Hyderabad with a 4.9-star rating across 500+ verified Google reviews." },
  { icon: "👨‍💻", title: "70+ Dedicated Developers", text: "Our professional team has shipped 1500+ products for 80+ startups and enterprises, delivering technical excellence at every stage." },
  { icon: "⚡", title: "On-Time Delivery", text: "Known for timely project delivery and building lasting client relationships through transparent communication and agile execution." },
];

const values = [
  { icon: "🎯", title: "Client-Centric Approach", text: "Every decision starts with understanding your business goals and delivering solutions that drive measurable results." },
  { icon: "⏱️", title: "On-Time Delivery", text: "Our professional developers follow structured timelines and agile sprints to deliver every milestone on schedule." },
  { icon: "🤝", title: "Effective Collaboration", text: "Clear communication and thoughtful coordination ensure even the most complex projects are executed seamlessly." },
  { icon: "👥", title: "Strong Teamwork", text: "Our developers break complex challenges into manageable tasks and work together to deliver faster, better outcomes." },
  { icon: "🛡️", title: "Quality Assurance", text: "Every product undergoes rigorous testing and code review to ensure enterprise-grade quality and reliability." },
  { icon: "💡", title: "Innovation-Driven", text: "We stay ahead of technology trends to build future-ready solutions using the latest frameworks and architectures." },
];

const expertise = [
  "Web Application Development",
  "Android App Development",
  "iOS App Development",
  "Cross-Platform Development",
  "Flutter App Development",
  "React Native Development",
  "Enterprise Software Solutions",
  "UI/UX Design & Research",
  "Cloud & DevOps Services",
  "AI & Machine Learning",
  "Digital Marketing & SEO",
  "Salesforce Consulting",
];

const pillars = [
  { title: "Our Mission", text: "To connect with clients, understand their vision, and deliver tailor-made applications that drive real business results. We combine technical expertise with creative problem-solving to turn ideas into impactful digital products." },
  { title: "Our Vision", text: "To be the most trusted technology partner for businesses worldwide, delivering innovative and scalable solutions that empower organizations to thrive in the digital era." },
  { title: "Our Commitment", text: "We follow precise, systematic processes to ensure flawless project completion. We put our clients' needs at the center of everything we do, promoting innovation, out-of-the-box thinking, and constant learning." },
  { title: "Core Values", text: "We promote long-term relationships built on trust, deliver reliable solutions that delight clients, and continuously improve our processes and technology competencies to offer the best outcomes." },
];

const faqs = [
  { q: "What does mTouch Labs specialize in?", a: "mTouch Labs specializes in mobile app development, web application development, UI/UX design, cloud services, AI solutions, Salesforce consulting, and digital marketing for businesses across 12+ countries." },
  { q: "How long has mTouch Labs been in business?", a: "mTouch Labs was founded in 2011 and has over 14 years of experience delivering 1500+ projects for startups, enterprises, and government organizations worldwide." },
  { q: "Where are mTouch Labs offices located?", a: "Our headquarters is in Hyderabad, India, with additional offices in Bangalore, India and Dover, Delaware, USA. We serve clients globally across 12+ countries." },
  { q: "What industries does mTouch Labs serve?", a: "We serve healthcare, fintech, eCommerce, real estate, education, logistics, SaaS, and enterprise sectors with custom digital solutions tailored to each industry." },
  { q: "How can I start a project with mTouch Labs?", a: "You can reach out through our contact page, request a quote, or call us directly. Our team will discuss your requirements, provide a consultation, and create a project plan tailored to your goals." },
];

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="abt-hero">
        <div className="abt-hero__inner">
          <Breadcrumb pagePath="/about" />
          <h1 className="abt-hero__title">
            About <span className="abt-hero__accent">mTouch Labs</span>
          </h1>
          <p className="abt-hero__subtitle">
            14+ Years of Building World-Class Digital Products Across 12+ Countries
          </p>
          <div className="abt-hero__stats">
            {stats.map((s, i) => (
              <div className="abt-hero__stat" key={i}>
                <span className="abt-hero__stat-num">{s.num}</span>
                <span className="abt-hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="abt-who">
        <div className="abt-container">
          <div className="abt-who__grid">
            <div className="abt-who__content">
              <h2 className="abt-who__heading">
                Who We <span className="abt-accent">Are</span>
              </h2>
              <p className="abt-who__text">
                <strong>mTouch Labs</strong> is a top-tier software development company founded in 2011, providing a comprehensive range of <a href="/web-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>web development</a>, <a href="/mobile-app-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>mobile app development</a>, and digital transformation services from our offices in Hyderabad, Bangalore, and the USA.
              </p>
              <p className="abt-who__text">
                We specialize in building <a href="/custom-software-development-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>custom software solutions</a>, scalable web platforms, and enterprise-grade solutions that help businesses grow. Our team of 100+ engineers, designers, and strategists brings deep expertise across iOS, Android, Flutter, React Native, cloud infrastructure, AI, and Salesforce ecosystems.
              </p>
              <p className="abt-who__text">
                From startups to government organizations — including Telangana and Abu Dhabi Governments — we&apos;ve delivered 1500+ products that combine technical excellence with exceptional user experience.
              </p>
            </div>
            <div className="abt-who__image-wrap">
              <img
                src="/images/others/Mobile App Development Process.jpg"
                alt="mTouch Labs office"
                className="abt-who__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="abt-awards">
        <div className="abt-container">
          <h2 className="abt-section-title">
            Why Businesses <span className="abt-accent">Choose Us</span>
          </h2>
          <p className="abt-section-subtitle">
            Trusted by 500+ clients worldwide for quality, reliability, and innovation
          </p>
          <div className="abt-awards__grid">
            {awards.map((a, i) => (
              <div className="abt-award" key={i}>
                <span className="abt-award__icon">{a.icon}</span>
                <h3 className="abt-award__title">{a.title}</h3>
                <p className="abt-award__text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MISSION / VISION ===== */}
      <section className="abt-pillars">
        <div className="abt-container">
          <h2 className="abt-section-title">
            What Drives <span className="abt-accent">Us Forward</span>
          </h2>
          <div className="abt-pillars__grid">
            {pillars.map((p, i) => (
              <div className="abt-pillar" key={i}>
                <span className="abt-pillar__num">0{i + 1}</span>
                <h3 className="abt-pillar__title">{p.title}</h3>
                <p className="abt-pillar__text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="abt-values">
        <div className="abt-container">
          <h2 className="abt-section-title">
            Transparency &amp; <span className="abt-accent">Ethics</span>
          </h2>
          <p className="abt-section-subtitle">
            We are a team of passionate people who solve complex problems through technology
          </p>
          <div className="abt-values__grid">
            {values.map((v, i) => (
              <div className="abt-value" key={i}>
                <span className="abt-value__icon">{v.icon}</span>
                <h4 className="abt-value__title">{v.title}</h4>
                <p className="abt-value__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERTISE ===== */}
      <section className="abt-expertise">
        <div className="abt-container">
          <div className="abt-expertise__grid">
            <div className="abt-expertise__content">
              <h2 className="abt-expertise__heading">
                Areas of <span className="abt-accent">Expertise</span>
              </h2>
              <p className="abt-expertise__text">
                From mobile-first products to enterprise platforms, our <a href="/digital-marketing-company" style={{ color: '#3E8CFB', textDecoration: 'none' }}>digital marketing</a> and development capabilities span the full technology spectrum.
              </p>
            </div>
            <div className="abt-expertise__tags">
              {expertise.map((e, i) => (
                <span className="abt-tag" key={i}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="abt-faq">
        <div className="abt-container abt-container--narrow">
          <h2 className="abt-section-title">
            Frequently Asked <span className="abt-accent">Questions</span>
          </h2>
          <div className="abt-faq__list">
            {faqs.map((f, i) => (
              <details className="abt-faq__item" key={i}>
                <summary className="abt-faq__question">
                  <span>{f.q}</span>
                  <span className="abt-faq__chevron"></span>
                </summary>
                <div className="abt-faq__answer">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="abt-cta">
        <div className="abt-container">
          <div className="abt-cta__inner">
            <h2 className="abt-cta__heading">
              Ready to Build <span className="abt-accent">Something Great</span>?
            </h2>
            <p className="abt-cta__text">
              Let&apos;s discuss how mTouch Labs can bring your vision to life with world-class engineering.
            </p>
            <div className="abt-cta__buttons">
              <a className="abt-cta__btn abt-cta__btn--primary js-open-modal">Start Your Project</a>
              <a href="/careers" className="abt-cta__btn abt-cta__btn--outline">Join Our Team</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}