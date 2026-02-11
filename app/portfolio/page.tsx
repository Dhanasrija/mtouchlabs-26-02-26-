import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web And Mobile App Development | mTouch Labs",
  description: "Explore our portfolio of innovative web and mobile apps built by our experienced Android and iOS app development team.",
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <div className="r-bg-a pt85 pb120" style={{background: "linear-gradient(135deg, #e3f2fd 0%, #ffffff 50%, #f5f5f5 100%)", position: "relative", overflow: "hidden"}}>
        <div style={{position: "absolute", top: "-50px", right: "-50px", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", borderRadius: "50%"}} />
        <div style={{position: "absolute", bottom: "-100px", left: "-100px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", borderRadius: "50%"}} />
        <div className="container" style={{position: "relative", zIndex: 1}}>
          <div className="row pt80">
            <div className="col-lg-12 text-center">
              <div className="page-headings">
                <h1 className="mb15" style={{fontSize: "48px", fontWeight: "700", color: "#1f2937", marginBottom: "20px"}}>
                  Our Portfolio
                </h1>
                <p style={{fontSize: "18px", color: "#6b7280", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6"}}>
                  See how we transform ideas into powerful digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Items */}
      <div className="blog-block sec-pad pt80">
        <div className="container">
          <div className="blog-filter-section mb50">
            <div className="blog-filter-buttons">
              <button className="blog-filter-btn active" data-filter="all">All</button>
              <button className="blog-filter-btn" data-filter="Ecommerce">Ecommerce</button>
              <button className="blog-filter-btn" data-filter="CRM">CRM</button>
              <button className="blog-filter-btn" data-filter="Online Services">Online Services</button>
              <button className="blog-filter-btn" data-filter="Ed-tech">Ed-tech</button>
              <button className="blog-filter-btn" data-filter="Retail Management">Retail Management</button>
              <button className="blog-filter-btn" data-filter="Real Estate">Real Estate</button>
              <button className="blog-filter-btn" data-filter="Transport Management">Transport Management</button>
              <button className="blog-filter-btn" data-filter="Legal">Legal</button>
              <button className="blog-filter-btn" data-filter="Health Care">Health Care</button>
              <button className="blog-filter-btn" data-filter="social media">Social Media</button>
              <button className="blog-filter-btn" data-filter="utility">Utility</button>
            </div>
          </div>
          <div className="blog-post">
            <div className="row" id="blog-cards-container">
            </div>
          </div>
          <div className="portfolio-items mt60">
            <div id="pagination-container"></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="r-bg-a sec-pad">
        <div className="container">
          <div className="ree">
            <div className="row">
              <div className="col-lg-6 vcenter">
                <div className="cta-heading">
                  <h2 className="mb15">Hire world-class <span className="ree-text rt40">Web and Mobile App development team</span> for your <span className="ree-text rt40">Project</span></h2>
                  <p>Contact our Web and Mobile App Development Company if you have any app ideas. We have a professional Android and iOS App Development Team who develop clients&apos; projects excellently and deliver the project on a timeline.</p>
                  <a href="/contact-us" className="ree-btn ree-btn-grdt1 mw-80 mt40">Start Your Project <i className="fas fa-arrow-right fa-btn"></i></a>
                </div>
              </div>
              <div className="col-lg-6 vcenter">
                <div className="ct-sol-img">
                  <img src="/images/cta/developers.svg" alt="app mockup" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div style={{padding: "6rem 0", backgroundColor: "rgba(243, 246, 253, 1)"}}>
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
          </div>

          <div className="_faq_list">
            <div className="_faq_item active glow">
              <button className="_faq_question">
                <span>What does mTouch Labs portfolio include?</span>
                <span className="_faq_icon">+</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">The portfolio showcases a wide range of digital products created by mTouch Labs, including mobile apps, business websites, e-commerce platforms, SaaS products, and custom software solutions across multiple industries.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Can I request a project similar to something in mTouch Labs portfolio?</span>
                <span className="_faq_icon">+</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Yes, you can. If you see a project that matches your vision or business model, the team can build a customized version tailored to your features, branding, and workflow requirements.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Do you work on both mobile and web development projects?</span>
                <span className="_faq_icon">+</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Absolutely. The portfolio includes end-to-end mobile app development (Android, iOS, Flutter) as well as modern web development projects using scalable, secure, and high-performance technologies.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>How can I get a quote for a project like the ones in your portfolio?</span>
                <span className="_faq_icon">+</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">You can submit your project details through the &ldquo;Get Quote&rdquo; section on the portfolio page. Once received, the team will review your requirements and send you an estimated cost and timeline.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Are all projects in the portfolio custom-built for clients?</span>
                <span className="_faq_icon">+</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Yes. Each project featured in the portfolio was designed, developed, and deployed based on individual client needs, ensuring unique outcomes aligned with their business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}