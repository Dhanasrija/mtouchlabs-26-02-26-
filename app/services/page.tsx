import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT & Digital Services | Mobile, Web Solutions – mTouch Labs",
  description: "Explore mTouch Labs' IT and digital services — mobile app development, web development, AI, cloud, technology solutions for scalable business growth.",
  keywords: "IT services, digital services, mobile app development, web development, AI services, cloud solutions",
  alternates: { canonical: "https://mtouchlabs.com/services" },
};

const designServices = [
  { icon: "icon1.png", title: "Website Design", text: "Modern, user-friendly websites with seamless functionality." },
  { icon: "icon2.png", title: "Mobile App Design", text: "Designing intuitive, high-performance mobile apps." },
  { icon: "icon3.png", title: "UX/UI Design", text: "Intuitive UX/UI designs focused on clarity and usability." },
  { icon: "icon4.png", title: "Branding", text: "Creating strong, memorable brand identities." },
];

const marketingCards = [
  { icon: "DigitalMarketing.png", title: "Digital Marketing", text: "Data-driven digital marketing that attracts, engages, and converts, driving measurable growth across all channels." },
  { icon: "searchEngineoptimization.png", title: "Search Engine Optimization (SEO)", text: "Boost your search rankings with expert SEO that increases visibility, organic traffic, and long-term growth." },
  { icon: "searchengineMarketing.png", title: "Search Engine Marketing (SEM)", text: "Drive instant traffic and high-quality leads with targeted SEM and cost-effective ad strategies that maximize ROI." },
  { icon: "socialMediaMarketing.png", title: "Social Media Marketing (SMM)", text: "Engaging content and smart ads that build your brand and turn followers into loyal customers." },
];

const processSteps = [
  "Requirement\nGathering", "Strategy", "Design", "Development", "Quality\nAssurance", "Deployment", "Support &\nMaintenance",
];

const industries = [
  { icon: "home.png", label: "Real Estate" }, { icon: "tours.png", label: "Tour & Travel" },
  { icon: "education.png", label: "Education" }, { icon: "events.png", label: "Events" },
  { icon: "toursandtrvel.png", label: "Tour & Travel" }, { icon: "ecommerce.png", label: "E-commerce" },
  { icon: "game.png", label: "Game" }, { icon: "tourstravel.png", label: "Tour & Travel" },
  { icon: "healthcare.png", label: "Healthcare" }, { icon: "finance.png", label: "Finance" },
  { icon: "restaurant.png", label: "Restaurant" }, { icon: "grocery.png", label: "Grocery" },
];

const faqs = [
  { q: "What services does mTouch Labs offer?", a: "mTouch Labs offers a complete range of digital services including mobile app development, web development, custom software solutions, enterprise applications, UI/UX design, and digital marketing.", active: true },
  { q: "Do you develop apps for both Android and iOS?", a: "Yes, mTouch Labs builds mobile applications for Android and iOS using both native and cross-platform technologies." },
  { q: "Does mTouch Labs provide custom software solutions?", a: "Absolutely, we provide custom software designed around your specific business needs, internal workflows, and long-term growth plans." },
  { q: "What is the development process at mTouch Labs?", a: "Our development process includes requirement analysis, UI/UX design, development, testing, and deployment. We follow an agile workflow." },
  { q: "Do you provide support and maintenance after the product launch?", a: "Yes, ongoing support after your project goes live. This includes performance monitoring, bug fixes, security updates, and new feature enhancements." },
];

export default function ServicesPage() {
  return (
    <>
      <link href="/css/services.css" rel="stylesheet" />

      {/* Hero */}
      <section className="services_new_hero">
        <div className="container">
          <div className="services_hero_content">
            <h1 className="services_hero_title">Best <span className="highlight-pink">Web Development</span> &amp;<br />Mobile Application Services</h1>
            <p className="services_hero_description">End-to-end Web Development and Mobile App Services that turn ideas into high-impact digital experiences.</p>
            <a href="/contact-us" className="btn btn-primary btn_need_expert">Let&apos;s Discuss</a>
          </div>
        </div>
      </section>

      {/* Leading Company */}
      <section className="services_leading_company">
        <div className="container">
          <div className="services_leading_wrapper">
            <div className="services_leading_content">
              <h2 className="services_leading_title">Leading <span className="highlight">Web &amp; Mobile App</span><br />Development Company in India</h2>
              <p className="services_leading_description">We&apos;re a global team of expert web &amp; mobile app developers delivering reliable, scalable, and enterprise-grade digital solutions powered by the latest technologies.</p>
              <h3 className="services_track_record_title">Proven Track Record</h3>
              <div className="services_stats_grid">
                <div className="services_stat_card"><div className="stat_number">1500+</div><div className="stat_label">Mobile Apps<br />Developed</div></div>
                <div className="services_stat_card"><div className="stat_number">820+</div><div className="stat_label">Websites<br />Developed</div></div>
                <div className="services_stat_card"><div className="stat_number">700+</div><div className="stat_label">Unique Features<br />Implemented</div></div>
              </div>
            </div>
            <div className="services_leading_image">
              <img src="/images/serviceImg/leadingweb.png" alt="Leading Web & Mobile App Development" className="leading_web_img" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="services_design_new">
        <div className="container">
          <div className="services_design_header">
            <div className="services_design_title_group">
              <h2 className="services_design_title"><span className="highlight-blue">Design</span> Services</h2>
              <p className="services_design_subtitle">We create <b>customer-centric</b> Web Design and Mobile App Design to meet the goals of our clients.</p>
            </div>
            <a href="/contact-us" className="btn btn-primary btn_need_expert">Need a Expert</a>
          </div>
          <div className="services_design_grid">
            <div className="services_design_image_col">
              <img src="/images/serviceImg/design_services.png" alt="Design Service" className="design_service_main_img" />
            </div>
            <div className="services_design_list_col">
              {designServices.map((s, i) => (
                <div className="design_service_item" key={i}>
                  <div className="design_icon_box"><img src={`/images/serviceImg/${s.icon}`} alt={s.title} /></div>
                  <div className="design_text_box"><h4>{s.title}</h4><p>{s.text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="services_dev_new">
        <div className="container">
          <div className="services_dev_header">
            <h2 className="services_dev_title"><span className="highlight-blue">Development</span> Service</h2>
            <p className="services_dev_subtitle">We deliver result-driven, customized Web Development and Mobile App Development services with utmost professionalism and dedication.</p>
            <a href="/contact-us" className="btn btn-primary btn_need_expert">Need a Expert</a>
          </div>
          <div className="dev_tabs_container">
            <button className="dev_tab_btn active" data-tab="web-app">Web Application</button>
            <button className="dev_tab_btn" data-tab="custom-soft">Custom Software</button>
            <button className="dev_tab_btn" data-tab="mobile-app">On-Demand Mobile App</button>
            <button className="dev_tab_btn" data-tab="enterprise">Enterprise Application</button>
          </div>
          <div className="dev_content_wrapper">
            <div className="dev_text_content">
              <h3 id="dev_content_title">Web Application Development</h3>
              <div id="dev_content_desc">
                <p>We provide highly scalable web application development services in Hyderabad and offer end-to-end support for website design.</p>
              </div>
            </div>
            <div className="dev_image_content">
              <img src="/images/serviceImg/development.png" alt="Development Service" className="dev_main_img" />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="services_marketing_new">
        <div className="container">
          <div className="services_mkt_main_grid">
            <div className="services_mkt_text_col">
              <h2 className="services_mkt_title"><span className="highlight-blue">Marketing Services</span> That<br />Drive Growth</h2>
              <p className="services_mkt_subtitle">Boost your online presence with comprehensive digital marketing solutions designed to attract, engage, and convert your audience.</p>
              <a href="/contact-us" className="btn btn-primary btn_need_expert">Need a Expert</a>
            </div>
            <div className="services_mkt_cards_grid">
              {marketingCards.map((c, i) => (
                <div className="mkt_service_card" key={i}>
                  <div className="mkt_icon_wrapper"><img src={`/images/serviceImg/${c.icon}`} alt={c.title} className="mkt_icon_img" /></div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <div className="sec-header">
            <h2 className="section-title">Website Development &amp; Mobile App Development<br /><span className="highlight">Process We Follow</span></h2>
            <div className="process_subtitle_wrapper">
              <p className="section-sub"><b>Our Web Development and Mobile Application Development team</b> ensures a successful launch of your application in the market.</p>
            </div>
          </div>
          <div className="process-wrapper">
            <button className="process-scroll-btn process-scroll-left" id="scrollLeft"><i className="fas fa-chevron-left"></i></button>
            <div className="process-steps-new">
              {processSteps.map((step, i) => (
                <div className="process-step-new" key={i}>
                  <div className="ps-num-new">{String(i + 1).padStart(2, "0")}</div>
                  <div className="ps-card"><h4 dangerouslySetInnerHTML={{ __html: step.replace("\n", "<br/>") }} /></div>
                </div>
              ))}
            </div>
            <button className="process-scroll-btn process-scroll-right" id="scrollRight"><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries">
        <div className="container industries-container">
          <div className="industries-text-col">
            <h2 className="section-title">Industries <span className="text-black">We Serve</span></h2>
            <div className="industries-description">
              <p>Our Design process follows a proven approach. We begin with a deep understanding of your needs and create a planning template.</p>
            </div>
          </div>
          <div className="industries-grid-col">
            <div className="industry-grid">
              {industries.map((ind, i) => (
                <div className="industry-card" key={i}>
                  <div className="ind-icon"><img src={`/images/serviceImg/${ind.icon}`} alt={ind.label} /></div>
                  <h4>{ind.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="project-cta-new">
        <div className="container">
          <div className="cta-new-wrapper">
            <div className="cta-new-image"><img src="/images/serviceImg/haveproject.png" alt="Contact Us" /></div>
            <div className="cta-new-content">
              <h2>Have a <strong>Project in</strong><br /><strong>mind?</strong> <span className="highlight-blue">Let&apos;s chat.</span></h2>
              <p>Have a project in mind? Let&apos;s connect, discuss your ideas, and turn them into impactful, user-focused solutions.</p>
              <div className="cta-new-btns">
                <a href="/contact-us" className="btn btn-primary cta-btn-blue"><i className="fas fa-phone-alt"></i> Contact Us</a>
                <a href="https://wa.me/919390683154" target="_blank" className="btn btn-outline cta-btn-whatsapp"><i className="fab fa-whatsapp"></i> Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div style={{ padding: "6rem 0", backgroundColor: "rgba(243, 246, 253, 1)" }}>
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
          </div>
          <div className="_faq_list">
            {faqs.map((f, i) => (
              <div className={`_faq_item${f.active ? " active glow" : ""}`} key={i}>
                <button className="_faq_question"><span>{f.q}</span><span className="_faq_icon">+</span></button>
                <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
