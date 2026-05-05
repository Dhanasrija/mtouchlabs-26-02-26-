// //import "../location-pages.css";
// export default function Footer() {
//   return (
//     <footer className="transforming-footer">
//       <div className="transforming-container">
//         <div className="transforming-content">
//           <div className="newsletter-container">
//             <div className="newsletter-text-section">
//               <h2>
//                 Transforming thoughts
//                 <br />
//                 into Masterpieces!
//               </h2>
//             </div>
//           </div>
//         </div>

//         <div className="transforming-grid">
//           {/* Company Column */}
//           <div className="transforming-column">
//             <h3>Company</h3>
//             <ul>
//               <li><a href="/about" target="_blank">About us</a></li>
//               <li><a href="/portfolio" target="_blank">Portfolio</a></li>
//               <li><a href="/blog" target="_blank">Blogs</a></li>
//               <li><a href="/careers" target="_blank">Careers</a></li>
//               <li><a href="/contact-us" target="_blank">Contact us</a></li>
//               <li><a href="/privacy-policy" target="_blank">Privacy &amp; Policy</a></li>
//               <li><a href="/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
//               <li><a href="/refundpolicy" target="_blank">Refund Policy</a></li>
//             </ul>
//           </div>



//           {/* Get In Touch Column */}
//           <div className="transforming-column">
//             <h3>Get In Touch</h3>
//             <p>
//               <a href="tel:9390683154">
//                 <i className="fas fa-phone"></i>&nbsp; 9390683154
//               </a>
//             </p>
//             <p>
//               <a
//                 href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0"
//                 target="_blank"
//               >
//                 <i className="fab fa-whatsapp" style={{ color: "forestgreen" }}></i>&nbsp;
//                 9390683154
//               </a>
//             </p>
//             <p>
//               <a href="mailto:contact@mtouchlabs.com">
//                 <i className="fas fa-envelope"></i>&nbsp; contact@mtouchlabs.com
//               </a>
//             </p>
//             <p>
//               <i className="fas fa-envelope"></i>&nbsp;
//               <a href="mailto:hr@mtouchlabs.com">career@mtouchlabs.com</a>
//             </p>
//             {/* Brochure — opens brochure form modal */}
//             <button
//               className="transforming-brochure js-brochure-modal"
//               style={{ marginTop: "20px" }}
//             >
//               Our Brochure →
//             </button>
//           </div>

//           {/* Reach Us / Map Column */}
//           <div className="transforming-column">
//             <h3>Reach us</h3>
//             <div className="iframe-container">
//               <a
//                 className="iframe-link"
//                 href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               ></a>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.382984579238!2d78.39014957483255!3d17.489221983415387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cec63e97d9%3A0xb045c9dc22129055!2smTouch%20Labs%20Pvt%20Ltd%20-%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1739875624590!5m2!1sen!2sin"
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Locations */}
//       <div className="transforming-locations">
//         <div className="locations-grid">
//           <div className="location-item">
//             <h3>Locations</h3>
//           </div>
//           <div className="location-item">
//             <div className="location-item-div">
//               <img src="/images/home/india-flag.png" alt="India Flag" />
//               <a href="/software-development-company-hyderabad" target="_blank">Hyderabad</a>
//             </div>
//             <div className="location-item-div">
//               <img src="/images/home/india-flag.png" alt="India Flag" />
//               <a href="/software-development-company-bangalore" target="_blank">Bangalore</a>
//             </div>
//             <div className="location-item-div">
//               <img src="/images/home/india-flag.png" alt="India Flag" />
//               <a href="/software-development-company-chennai" target="_blank">Chennai</a>
//             </div>
//           </div>

//           <div className="location-item">
//             <div className="location-item-div">
//               <img src="/images/home/india-flag.png" alt="India Flag" />
//               <a href="/top-mobile-app-development-company-in-coimbatore" target="_blank">Coimbatore</a>
//             </div>
//             <div className="location-item-div">
//               <img src="/images/home/india-flag.png" alt="India Flag" />
//               <a href="/top-mobile-app-development-company-in-kochi" target="_blank">Kochi</a>
//             </div>
//             <div className="location-item-div">
//               <img src="/images/home/flag-canada.png" alt="Canada Flag" />
//               <a href="/software-development-company-canada" target="_blank">Canada</a>
//             </div>
//           </div>

//           <div style={{ marginTop: "1rem" }} className="location-item">
//             <div className="location-item-div">
//               <img src="/images/home/flag-usa.png" alt="USA Flag" />
//               <a href="/software-development-company-usa" target="_blank">USA</a>
//             </div>
//             <div className="location-item-div">
//               <img src="/images/home/flag-australia.png" alt="Australia Flag" />
//               <a href="/software-development-company-australia" target="_blank">Australia</a>
//             </div>
//             <div style={{ marginTop: "0.3rem" }} className="location-item-div">
//               <img src="/images/home/flag-qatar.png" alt="Qatar Flag" />
//               <a href="/software-development-company-qatar" target="_blank">Qatar</a>
//             </div>
//           </div>

//           <div className="location-item" style={{ marginTop: "1.2rem" }}>
//             <div className="location-item-div">
//               <img src="/images/home/flag-dubai.png" alt="Dubai Flag" />
//               <a href="/top-mobile-app-development-company-in-dubai" target="_blank">Dubai</a>
//             </div>
//             <div className="location-item-div" style={{ marginTop: "0.3rem" }}>
//               <img src="/images/home/flag-uk.png" alt="UK Flag" />
//               <a href="/top-mobile-app-development-company-in-uk" target="_blank">UK</a>
//             </div>
//             <div style={{ paddingTop: "1.3rem" }} className="location-item-div">
//               <img src="/images/home/kuait.png" alt="Kuwait Flag" />
//               <a href="/top-mobile-app-development-company-in-kuwait" target="_blank">Kuwait</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Certificates & Copyright */}
//       <div className="transforming-certificates">
//         <div className="transforming-certificates-one">
//           <div className="transforming-certificates-img">
//             <img src="/images/home/iso.png" alt="mTouch Labs" className="img" />
//             <a
//               target="_blank"
//               href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,17z/data=!4m8!3m7!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!9m1!1b1!16s%2Fg%2F11b8zhlwcv?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
//             >
//               <img src="/images/home/reviews.png" alt="mTouch Labs" className="img" />
//             </a>
//           </div>
//           <span className="transforming-certificates-one-span">
//             <p>
//               Copyright © <span id="currentYear"></span>{" "}
//               <a href="/" className="footer-copyright-link">
//                 mTouch Labs
//               </a>.{" "}
//               All rights reserved.
//             </p>
//           </span>
//         </div>

//         <div className="transforming-certificates-icons">
//           <a href="#">
//             <img src="/images/logo-white.svg" alt="mTouch Labs" className="img" />
//           </a>
//         </div>

//         <div className="transforming-certificates-icons">
//           <ul className="footer-links-list social-linkz" style={{ display: "flex" }}>
//             <li>
//               <a href="https://www.facebook.com/MTouchLabs/" target="_blank">
//                 <span><i className="fab fa-facebook-f"></i></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://twitter.com/mtouchlabs" target="_blank">
//                 <span><i className="fa-brands fa-x-twitter"></i></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.instagram.com/mtouch_labs/" target="_blank">
//                 <span><i className="fab fa-instagram"></i></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.linkedin.com/company/mtouchlabs/" target="_blank">
//                 <span><i className="fab fa-linkedin-in"></i></span>
//               </a>
//             </li>
//             <li>
//               <a href="https://www.youtube.com/@mtouchlabs" target="_blank">
//                 <span><i className="fab fa-youtube"></i></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// }


export default function Footer() {
  return (
    <footer className="ft">
      {/* ── TOP SECTION ── */}
      <div className="ft-main">
        <div className="ft-container">
          <div className="ft-top-grid">
            {/* Col 1: Brand */}
            <div className="ft-brand-col">
              <div className="ft-logo">
                <img src="/images/logo-black.svg" alt="mTouch Labs" className="ft-logo-img" />
              </div>
              <div className="ft-logo-line" />
              <p className="ft-brand-desc">
                A global technology partner engineering next-generation digital
                solutions that accelerate business transformation across industries.
              </p>
              <div className="ft-contact-info">
                <a href="mailto:contact@mtouchlabs.com" className="ft-contact-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  contact@mtouchlabs.com
                </a>
                <a href="tel:+919390683154" className="ft-contact-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +91 9390683154
                </a>
                <a href="tel:+15512220070" className="ft-contact-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  +1 (551) 222-0070
                </a>
              </div>
              <div className="ft-socials">
                <a href="https://www.linkedin.com/company/mtouchlabs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="LinkedIn"><img src="/images/footer/SVG (13).png" alt="LinkedIn" width="18" height="18" /></a>
                <a href="https://twitter.com/mtouchlabs" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Twitter"><img src="/images/footer/SVG (14).png" alt="Twitter" width="18" height="18" /></a>
                <a href="https://www.facebook.com/MTouchLabs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Facebook"><img src="/images/footer/SVG (15).png" alt="Facebook" width="18" height="18" /></a>
                <a href="https://www.instagram.com/mtouch_labs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Instagram"><img src="/images/footer/SVG (16).png" alt="Instagram" width="18" height="18" /></a>
                <a href="https://www.youtube.com/@mtouchlabs" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="YouTube"><img src="/images/footer/SVG (17).png" alt="YouTube" width="18" height="18" /></a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="ft-links-col">
              <h4 className="ft-col-heading">COMPANY</h4>
              <ul className="ft-link-list">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="ft-links-col">
              <h4 className="ft-col-heading">SERVICES</h4>
              <ul className="ft-link-list">
                <li><a href="/custom-software-development-company">Custom Software Development</a></li>
                <li><a href="/devops-services">Cloud &amp; DevOps Solutions</a></li>
                <li><a href="/mobile-app-development-company">Mobile Application Development</a></li>
                <li><a href="/salesforce-consulting-services-company">Salesforce Consulting</a></li>
                <li><a href="/quality-assurance-and-testing-services">Quality Assurance &amp; Testing</a></li>
                <li><a href="/generative-ai-development-company">AI &amp; Data Analytics</a></li>
              </ul>
            </div>

            {/* Col 4: Map + Brochure */}
            <div className="ft-cta-col">
              <div className="ft-map-box">
                <a
                  className="ft-map-overlay"
                  href="https://maps.app.goo.gl/yDpEjLczZQyQj7w7A"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps"
                />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.382984579238!2d78.39014957483255!3d17.489221983415387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cec63e97d9%3A0xb045c9dc22129055!2smTouch%20Labs%20Pvt%20Ltd%20-%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1739875624590!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  title="mTouch Labs Office Location"
                />
              </div>
              {/*
                Brochure CTA — opens the shared brochure modal in-place on
                the current screen (no intermediate /brochure page). The
                modal is mounted once globally in app/layout.tsx; this
                button toggles its visibility via the `.js-brochure-modal`
                hook wired up in /js/site-interactions.js.
              */}
              <button
                type="button"
                className="ft-brochure-btn js-brochure-modal"
                aria-label="Download Brochure"
              >
                Download Brochure →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      {/* <div className="ft-section-divider"><div className="ft-container"><div className="ft-divider" /></div></div> */}

      {/* ── GLOBAL PRESENCE ── */}
      <div className="ft-presence">
        <div className="ft-container">
          <div className="ft-presence-header">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0074E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
            <div>
              <h4 className="ft-presence-title">Global Presence</h4>
            </div>
          </div>
          <div className="ft-divider" />

          {/* 5-column regions */}
          <div className="ft-regions-grid">
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> INDIA</h5>
              <ul className="ft-region-list">
                <li><a href="/software-development-company-hyderabad">Hyderabad</a></li>
                <li><a href="/software-development-company-bangalore">Bangalore</a></li>
                <li><a href="/software-development-company-chennai">Chennai</a></li>
                <li><a href="/software-development-company-coimbatore">Coimbatore</a></li>
                <li><a href="/software-development-company-kochi">Kochi</a></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> AMERICAS</h5>
              <ul className="ft-region-list">
                <li><a href="/software-development-company-usa">United States</a></li>
                <li><a href="/software-development-company-canada">Canada</a></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> EUROPE</h5>
              <ul className="ft-region-list">
                <li><a href="/software-development-company-united-kingdom">United Kingdom</a></li>
                <li><a href="/software-development-company-germany">Germany</a></li>
                <li><a href="/software-development-company-ireland">Ireland</a></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> ASIA PACIFIC</h5>
              <ul className="ft-region-list">
                <li><a href="/software-development-company-singapore">Singapore</a></li>
                <li><a href="/software-development-company-australia">Australia</a></li>
                <li><a href="/software-development-company-new-zealand">New Zealand</a></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> MIDDLE EAST</h5>
              <ul className="ft-region-list">
                <li><a href="/software-development-company-united-arab-emirates">UAE</a></li>
                <li><a href="/software-development-company-dubai">Dubai</a></li>
                <li><a href="/software-development-company-saudi-arabia">Saudi Arabia</a></li>
                <li><a href="/software-development-company-qatar">Qatar</a></li>
                <li><a href="/software-development-company-kuwait">Kuwait</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ft-bottom">
        <div className="ft-container">
          <div className="ft-bottom-inner">
            <p className="ft-copyright">
              © 2026{" "}
              <a href="/" className="company-link">
                mTouch Labs Pvt. Ltd.
              </a>{" "}
              All rights reserved.
            </p>
            <div className="ft-legal">
              <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
              <a href="/terms-and-conditions" className="legal-link">Terms of Service</a>
              <a href="/refundpolicy" className="legal-link">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}