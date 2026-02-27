import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | mTouch Labs",
  description:
    "mTouch Labs delivers end-to-end software development services including web application development, mobile app development, custom software engineering, SaaS platforms, Salesforce consulting, and cloud & DevOps solutions.",
  keywords: [
    "Software Development Services",
    "Web Application Development Services",
    "Mobile App Development Services",
    "Custom Software Development Services",
    "SaaS Development Services",
    "Salesforce Consulting Services",
    "Cloud & DevOps Services",
  ],
  alternates: {
    canonical: "https://www.mtouchlabs.com/services",
  },
  openGraph: {
    title: "Software Development Services | mTouch Labs",
    description:
      "Comprehensive software development services including web, mobile, SaaS, enterprise, Salesforce, and cloud solutions.",
    url: "https://www.mtouchlabs.com/services",
    siteName: "mTouch Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | mTouch Labs",
    description:
      "End-to-end software development services for startups and enterprises worldwide.",
  },
};

const designServices = [
  { icon: "icon1.png", title: "Website Design", text: "Modern, user-friendly websites with seamless functionality and responsive layouts." },
  { icon: "icon2.png", title: "Mobile App Design", text: "Designing intuitive, high-performance mobile app interfaces for iOS and Android." },
  { icon: "icon3.png", title: "UX/UI Design", text: "User-centered UX/UI designs focused on clarity, usability, and conversion optimization." },
  { icon: "icon4.png", title: "Branding", text: "Creating strong, memorable brand identities that resonate with your target audience." },
];

const marketingCards = [
  { icon: "DigitalMarketing.png", title: "Digital Marketing", text: "Data-driven digital marketing strategies that attract, engage, and convert — driving measurable growth across all channels." },
  { icon: "searchEngineoptimization.png", title: "Search Engine Optimization (SEO)", text: "Boost your search rankings with expert SEO that increases visibility, organic traffic, and long-term sustainable growth." },
  { icon: "searchengineMarketing.png", title: "Search Engine Marketing (SEM)", text: "Drive instant traffic and high-quality leads with targeted SEM campaigns and cost-effective ad strategies that maximize ROI." },
  { icon: "socialMediaMarketing.png", title: "Social Media Marketing (SMM)", text: "Strategic content and smart advertising that builds your brand presence and turns followers into loyal customers." },
];

const processSteps = [
  "Requirement\nGathering", "Strategy", "Design", "Development", "Quality\nAssurance", "Deployment", "Support &\nMaintenance",
];

const industries = [
  { icon: "finance.png", label: "Financial Services" },
  { icon: "healthcare.png", label: "Healthcare" },
  { icon: "ecommerce.png", label: "Retail & E-Commerce" },
  { icon: "tours.png", label: "Logistics & Transportation" },
  { icon: "education.png", label: "Education" },
  { icon: "events.png", label: "Events" },
  { icon: "home.png", label: "Real Estate" },
  { icon: "game.png", label: "Game" },
  { icon: "restaurant.png", label: "Restaurant" },
  { icon: "grocery.png", label: "Grocery" },
  { icon: "toursandtrvel.png", label: "Manufacturing" },
  { icon: "tourstravel.png", label: "SaaS & Technology" },
];

const faqs = [
  { q: "What software development services does mTouch Labs offer?", a: "We provide web application development, mobile app development, custom software engineering, SaaS development, Salesforce consulting, and cloud & DevOps services for startups and enterprises worldwide." },
  { q: "Do you provide both web and mobile application development?", a: "Yes. We develop scalable web applications and high-performance mobile apps using modern frameworks and cloud-native infrastructure for both iOS and Android." },
  { q: "Does mTouch Labs provide custom software solutions?", a: "Absolutely. We deliver tailored custom software designed around your specific business needs, internal workflows, enterprise requirements, and long-term growth plans." },
  { q: "What is the development process at mTouch Labs?", a: "Our development process includes requirement analysis, strategy planning, UI/UX design, agile development, quality assurance, deployment, and ongoing support & maintenance." },
  { q: "Do you work with international clients?", a: "Yes. We serve startups and enterprises across North America, Europe, the Middle East, and APAC with dedicated development teams and 24/7 support." },
];

export default function ServicesPage() {
  return (
    <>
      <link href="/css/services.css" rel="stylesheet" />
      <link href="/css/dev-cards.css" rel="stylesheet" />

      {/* Hero */}
      <section className="services_new_hero">
        <div className="container">
          <div className="services_hero_content">
            <h1 className="services_hero_title">End-to-End <span className="highlight-pink">Software Development</span><br />Services</h1>
            <p className="services_hero_description">Comprehensive software development services designed to help startups, growing businesses, and enterprise organizations build scalable, secure, and high-performance digital systems.</p>
            <a href="/contact-us" className="btn btn-primary btn_need_expert">Let&apos;s Discuss</a>
          </div>
        </div>
      </section>

      {/* Leading Company */}
      <section className="services_leading_company">
        <div className="container">
          <div className="services_leading_wrapper">
            <div className="services_leading_content">
              <h2 className="services_leading_title">Leading <span className="highlight">Software Development</span><br />Company — Global Delivery</h2>
              <p className="services_leading_description">At mTouch Labs, our engineering expertise spans web applications, mobile apps, custom enterprise software, SaaS platforms, Salesforce solutions, and cloud-native infrastructure — delivering measurable business outcomes for global clients.</p>
              <h3 className="services_track_record_title">Proven Track Record</h3>
              <div className="services_stats_grid">
                <div className="services_stat_card"><div className="stat_number">1500+</div><div className="stat_label">Mobile Apps<br />Developed</div></div>
                <div className="services_stat_card"><div className="stat_number">820+</div><div className="stat_label">Websites<br />Developed</div></div>
                <div className="services_stat_card"><div className="stat_number">700+</div><div className="stat_label">Unique Features<br />Implemented</div></div>
              </div>
            </div>
            <div className="services_leading_image">
              <img src="/images/serviceImg/leadingweb.png" alt="Leading Software Development Company" className="leading_web_img" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services — centered title, no "Need an Expert" button */}
      <section className="services_design_new">
        <div className="container">
          <div className="services_design_header" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="services_design_title_group" style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h2 className="services_design_title" style={{ textAlign: "center" }}><span className="highlight-blue">Design</span> Services</h2>
              <p className="services_design_subtitle" style={{ textAlign: "center" }}>We create <b>customer-centric</b> designs for web and mobile applications focused on clarity, usability, and conversion optimization.</p>
            </div>
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

      {/* Development Services — centered title, no "Need an Expert" button */}
      <section className="services_dev_new">
        <div className="container">
          <div className="services_dev_header" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h2 className="services_dev_title" style={{ textAlign: "center" }}><span className="highlight-blue">Development</span> Services</h2>
            <p className="services_dev_subtitle" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>We deliver result-driven, customized web application development, mobile app development, custom software engineering, and SaaS platform services with utmost professionalism.</p>
          </div>
          <div className="dev_cards_grid">
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg></div>
              <span className="dev_card_num">01</span>
              <h3>Web Application Development</h3>
              <p>Scalable, secure, and performance-driven web applications — custom web apps, enterprise platforms, API integrations, and progressive web apps.</p>
              <ul className="dev_card_tags"><li>React</li><li>Next.js</li><li>Node.js</li><li>PWA</li></ul>
            </div>
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg></div>
              <span className="dev_card_num">02</span>
              <h3>Mobile App Development</h3>
              <p>Robust mobile applications across iOS, Android, and cross-platform frameworks for enterprise mobility and consumer-focused experiences.</p>
              <ul className="dev_card_tags"><li>iOS</li><li>Android</li><li>React Native</li><li>Flutter</li></ul>
            </div>
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg></div>
              <span className="dev_card_num">03</span>
              <h3>Custom Software Development</h3>
              <p>Tailored enterprise applications, business process automation, workflow management systems, and legacy system modernization.</p>
              <ul className="dev_card_tags"><li>Enterprise</li><li>Automation</li><li>Workflows</li><li>APIs</li></ul>
            </div>
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg></div>
              <span className="dev_card_num">04</span>
              <h3>SaaS Platform Development</h3>
              <p>Scalable SaaS platforms built on multi-tenant architecture with subscription billing, cloud-native infrastructure, and API-driven ecosystems.</p>
              <ul className="dev_card_tags"><li>Multi-Tenant</li><li>AWS</li><li>Azure</li><li>Billing</li></ul>
            </div>
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-4.97 0-9 2.69-9 6v6c0 3.31 4.03 6 9 6s9-2.69 9-6V9c0-3.31-4.03-6-9-6z" /><ellipse cx="12" cy="9" rx="9" ry="6" /></svg></div>
              <span className="dev_card_num">05</span>
              <h3>Salesforce Consulting</h3>
              <p>Expert Salesforce implementation, CRM customization, workflow automation, and Sales &amp; Service Cloud integration for operational efficiency.</p>
              <ul className="dev_card_tags"><li>Salesforce</li><li>CRM</li><li>Automation</li><li>Cloud</li></ul>
            </div>
            <div className="dev_card">
              <div className="dev_card_icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg></div>
              <span className="dev_card_num">06</span>
              <h3>Cloud &amp; DevOps</h3>
              <p>Secure cloud architecture, migration &amp; modernization, CI/CD pipelines, infrastructure automation, and DevOps consulting services.</p>
              <ul className="dev_card_tags"><li>CI/CD</li><li>Docker</li><li>Kubernetes</li><li>Terraform</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services — centered title, no "Need an Expert" button */}
      <section className="services_marketing_new">
        <div className="container">
          <div className="services_mkt_main_grid">
            <div className="services_mkt_text_col" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2 className="services_mkt_title" style={{ textAlign: "center" }}><span className="highlight-blue">Marketing Services</span> That<br />Drive Growth</h2>
              <p className="services_mkt_subtitle" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>Boost your online presence with comprehensive digital marketing solutions designed to attract, engage, and convert your audience into loyal customers.</p>
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
            <h2 className="section-title">Software Development<br /><span className="highlight">Process We Follow</span></h2>
            <div className="process_subtitle_wrapper">
              <p className="section-sub"><b>Our software development team</b> follows an agile methodology to ensure a successful, on-time launch of your application to market.</p>
            </div>
          </div>
          <div className="process-wrapper">
            <button className="process-scroll-btn process-scroll-left" id="scrollLeft"><i className="fas fa-chevron-left"></i></button>
            <div className="process-steps-new">
              {processSteps.map((step, i) => (
                <div className={`process-step-new${i === 0 ? " ps-active" : ""}`} key={i}>
                  <div className="ps-card"><span className="ps-number">{i + 1}</span><h4 dangerouslySetInnerHTML={{ __html: step.replace("\n", "<br/>") }} /></div>
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
              <p>We provide software development services across diverse industries — building scalable solutions tailored to each sector&apos;s unique requirements.</p>
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
              <p>Have a project in mind? Let&apos;s connect, discuss your ideas, and turn them into scalable, high-performance digital solutions.</p>
              <div className="cta-new-btns">
                <a href="/contact-us" className="btn btn-primary cta-btn-blue"><i className="fas fa-phone-alt"></i> Contact Us</a>
                <a href="https://wa.me/919390683154" target="_blank" className="btn btn-outline cta-btn-whatsapp"><i className="fab fa-whatsapp"></i> Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — matching product page style with chevron icons */}
      <div style={{ padding: "6rem 0", backgroundColor: "rgba(243, 246, 253, 1)" }}>
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about mTouch Labs software development services</p>
          </div>
          <div className="_faq_list">
            {faqs.map((f, i) => (
              <div className={`_faq_item${i === 0 ? " active glow" : ""}`} key={i}>
                <button className="_faq_question">
                  <span>{f.q}</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

    <script dangerouslySetInnerHTML={{ __html: `
      (function() {
        function initProcessLoop() {
          var steps = document.querySelectorAll('.process-step-new');
          if (!steps.length) return setTimeout(initProcessLoop, 300);
          var idx = 0;
          function loop() {
            steps.forEach(function(s) { s.classList.remove('ps-active'); });
            steps[idx].classList.add('ps-active');
            idx = (idx + 1) % steps.length;
          }
          loop();
          setInterval(loop, 2000);
        }
        initProcessLoop();

        function initDesignHover() {
          var items = document.querySelectorAll('.design_service_item');
          if (!items.length) return setTimeout(initDesignHover, 300);
          items[0].classList.add('ds-active');
          items.forEach(function(item) {
            item.addEventListener('mouseenter', function() {
              items.forEach(function(i) { i.classList.remove('ds-active'); });
              item.classList.add('ds-active');
            });
          });
        }
        initDesignHover();

        function initFaqToggle() {
          var items = document.querySelectorAll('._faq_item');
          if (!items.length) return setTimeout(initFaqToggle, 300);
          items.forEach(function(item) {
            var btn = item.querySelector('._faq_question');
            if (!btn) return;
            btn.addEventListener('click', function() {
              var isOpen = item.classList.contains('active');
              items.forEach(function(i) { i.classList.remove('active', 'glow'); });
              if (!isOpen) { item.classList.add('active', 'glow'); }
            });
          });
        }
        initFaqToggle();
      })();
    `}} />
    </>
  );
}