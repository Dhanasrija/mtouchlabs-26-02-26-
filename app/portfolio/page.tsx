// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Portfolio | Web And Mobile App Development | mTouch Labs",
//   description: "Explore our portfolio of innovative web and mobile apps built by our experienced Android and iOS app development team.",
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/portfolio",
//   },
// // 
//   openGraph: {
//     title: "Portfolio | Web And Mobile App Development | mTouch Labs",
//     description: "Explore our portfolio of innovative web and mobile apps built by our experienced Android and iOS app development team.",
//     url: "https://www.mtouchlabs.com/portfolio",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Portfolio | Web And Mobile App Development | mTouch Labs" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Portfolio | Web And Mobile App Development | mTouch Labs",
//     description: "Explore our portfolio of innovative web and mobile apps built by our experienced Android and iOS app development team.",
//     images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
//   },
// };


// export default function Page() {
//   return (
//     <>
//       {/* Hero Section */}
//       <link href="/css/portfolio-listing.css" rel="stylesheet" />
//       <section className="portfolio-hero" style={{ backgroundImage: "url(/images/portfolio-bg.webp)", backgroundPosition: "center bottom" }} style={{ backgroundImage: "url(/images/portfolio-bg.webp)" }} style={{ backgroundImage: "url('/images/portfolio-bg.webp')" }}>
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-lg-7">
//               <div className="portfolio-hero-content">
//                 <h1 data-aos="fade-up" data-aos-delay="200">
//                   Our <span className="highlight-orange">Portfolio</span>
//                 </h1>
//                 <p data-aos="fade-up" data-aos-delay="400">
//                   See how we transform ideas into powerful digital experiences.
//                 </p>
//               </div>
//             </div>
//             <div className="col-lg-5"></div>
//           </div>
//         </div>
//       </section>

//       {/* Portfolio Items */}
//       <div className="blog-block sec-pad pt80">
//         <div className="container">
//           <div className="blog-filter-section mb50">
//             <div className="blog-filter-buttons">
//               <button className="blog-filter-btn active" data-filter="all">All</button>
//               <button className="blog-filter-btn" data-filter="Ecommerce">Ecommerce</button>
//               <button className="blog-filter-btn" data-filter="CRM">CRM</button>
//               <button className="blog-filter-btn" data-filter="Online Services">Online Services</button>
//               <button className="blog-filter-btn" data-filter="Ed-tech">Ed-tech</button>
//               <button className="blog-filter-btn" data-filter="Retail Management">Retail Management</button>
//               <button className="blog-filter-btn" data-filter="Real Estate">Real Estate</button>
//               <button className="blog-filter-btn" data-filter="Transport Management">Transport Management</button>
//               <button className="blog-filter-btn" data-filter="Legal">Legal</button>
//               <button className="blog-filter-btn" data-filter="Health Care">Health Care</button>
//               <button className="blog-filter-btn" data-filter="social media">Social Media</button>
//               <button className="blog-filter-btn" data-filter="utility">Utility</button>
//             </div>
//           </div>
//           <div className="blog-post">
//             <div className="row" id="blog-cards-container">
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <section className="r-bg-a sec-pad">
//         <div className="container">
//           <div className="ree">
//             <div className="row">
//               <div className="col-lg-6 vcenter">
//                 <div className="cta-heading">
//                   <h2 className="mb15">Hire world-class <span className="ree-text rt40">Web and Mobile App development team</span> for your <span className="ree-text rt40">Project</span></h2>
//                   <p>Contact our Web and Mobile App Development Company if you have any app ideas. We have a professional Android and iOS App Development Team who develop clients&apos; projects excellently and deliver the project on a timeline.</p>
//                   <a href="/contact-us" className="ree-btn ree-btn-grdt1 mw-80 mt40">Start Your Project <i className="fas fa-arrow-right fa-btn"></i></a>
//                 </div>
//               </div>
//               <div className="col-lg-6 vcenter">
//                 <div className="ct-sol-img">
//                   <img src="/images/cta/developers.svg" alt="app mockup" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <div className="resources-faq-wrapper">
//         <div className="_faq_container">
//           <div className="_faq_header">
//             <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
//             <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
//           </div>

//           <div className="_faq_list">
//             <div className="_faq_item active glow">
//               <button className="_faq_question">
//                 <span>What does mTouch Labs portfolio include?</span>
//                 <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">The portfolio showcases a wide range of digital products created by mTouch Labs, including mobile apps, business websites, e-commerce platforms, SaaS products, and custom software solutions across multiple industries.</p>
//               </div>
//             </div>

//             <div className="_faq_item">
//               <button className="_faq_question">
//                 <span>Can I request a project similar to something in mTouch Labs portfolio?</span>
//                 <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">Yes, you can. If you see a project that matches your vision or business model, the team can build a customized version tailored to your features, branding, and workflow requirements.</p>
//               </div>
//             </div>

//             <div className="_faq_item">
//               <button className="_faq_question">
//                 <span>Do you work on both mobile and web development projects?</span>
//                 <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">Absolutely. The portfolio includes end-to-end mobile app development (Android, iOS, Flutter) as well as modern web development projects using scalable, secure, and high-performance technologies.</p>
//               </div>
//             </div>

//             <div className="_faq_item">
//               <button className="_faq_question">
//                 <span>How can I get a quote for a project like the ones in your portfolio?</span>
//                 <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">You can submit your project details through the &ldquo;Get Quote&rdquo; section on the portfolio page. Once received, the team will review your requirements and send you an estimated cost and timeline.</p>
//               </div>
//             </div>

//             <div className="_faq_item">
//               <button className="_faq_question">
//                 <span>Are all projects in the portfolio custom-built for clients?</span>
//                 <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">Yes. Each project featured in the portfolio was designed, developed, and deployed based on individual client needs, ensuring unique outcomes aligned with their business goals.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <script dangerouslySetInnerHTML={{ __html: `
//         (function() {
//           function initFaq() {
//             var items = document.querySelectorAll('._faq_item');
//             if (!items.length) return setTimeout(initFaq, 300);
//             items.forEach(function(item) {
//               item.querySelector('._faq_question').addEventListener('click', function() {
//                 var isActive = item.classList.contains('active');
//                 items.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
//                 if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
//               });
//             });
//           }
//           initFaq();
//         })();
//       `}} />
//     </>
//   );
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web And Mobile App Development | mTouch Labs",
  description: "Explore our portfolio of innovative web and mobile apps built by our experienced Android and iOS app development team.",
};

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="portfolio-hero" style={{ backgroundImage: "url(/images/portfolio-bg.webp)", backgroundPosition: "center bottom" }} >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="portfolio-hero-content">
                <h1 data-aos="fade-up" data-aos-delay="200">
                  Our <span className="highlight-orange">Portfolio</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="400">
                  See how we transform ideas into powerful digital experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>

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
      <div className="resources-faq-wrapper">
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
          </div>

          <div className="_faq_list">
            <div className="_faq_item active glow">
              <button className="_faq_question">
                <span>What does mTouch Labs portfolio include?</span>
                <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">The portfolio showcases a wide range of digital products created by mTouch Labs, including mobile apps, business websites, e-commerce platforms, SaaS products, and custom software solutions across multiple industries.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Can I request a project similar to something in mTouch Labs portfolio?</span>
                <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Yes, you can. If you see a project that matches your vision or business model, the team can build a customized version tailored to your features, branding, and workflow requirements.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Do you work on both mobile and web development projects?</span>
                <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Absolutely. The portfolio includes end-to-end mobile app development (Android, iOS, Flutter) as well as modern web development projects using scalable, secure, and high-performance technologies.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>How can I get a quote for a project like the ones in your portfolio?</span>
                <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">You can submit your project details through the &ldquo;Get Quote&rdquo; section on the portfolio page. Once received, the team will review your requirements and send you an estimated cost and timeline.</p>
              </div>
            </div>

            <div className="_faq_item">
              <button className="_faq_question">
                <span>Are all projects in the portfolio custom-built for clients?</span>
                <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">Yes. Each project featured in the portfolio was designed, developed, and deployed based on individual client needs, ensuring unique outcomes aligned with their business goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initFaq() {
            var items = document.querySelectorAll('._faq_item');
            if (!items.length) return setTimeout(initFaq, 300);
            items.forEach(function(item) {
              item.querySelector('._faq_question').addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                items.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
                if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
              });
            });
          }
          initFaq();
        })();
      `}} />
    </>
  );
}