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



import Link from "next/link";

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
                <img src="/images/logo-white.svg" alt="mTouch Labs" className="ft-logo-img" />
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
                <a href="https://www.linkedin.com/company/mtouchlabs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
                <a href="https://twitter.com/mtouchlabs" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                <a href="https://www.facebook.com/MTouchLabs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
                <a href="https://www.instagram.com/mtouch_labs/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg></a>
                <a href="https://www.youtube.com/@mtouchlabs" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div className="ft-links-col">
              <h4 className="ft-col-heading">COMPANY</h4>
              <ul className="ft-link-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="ft-links-col">
              <h4 className="ft-col-heading">SERVICES</h4>
              <ul className="ft-link-list">
                <li><Link href="/services/custom-software-development">Custom Software Development</Link></li>
                <li><Link href="/services/cloud-devops-solutions">Cloud &amp; DevOps Solutions</Link></li>
                <li><Link href="/services/mobile-app-development">Mobile Application Development</Link></li>
                <li><Link href="/services/salesforce-consulting">Salesforce Consulting</Link></li>
                <li><Link href="/services/quality-engineering">Quality Engineering &amp; Testing</Link></li>
                <li><Link href="/services/ai-data-analytics">AI &amp; Data Analytics</Link></li>
              </ul>
            </div>

            {/* Col 4: Map + Brochure */}
            <div className="ft-cta-col">
              <div className="ft-map-box">
                <a
                  className="ft-map-overlay"
                  href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,17z"
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
              <button className="ft-brochure-btn js-brochure-modal">Download Brochure →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="ft-section-divider"><div className="ft-container"><div className="ft-divider" /></div></div>

      {/* ── GLOBAL PRESENCE ── */}
      <div className="ft-presence">
        <div className="ft-container">
          <div className="ft-presence-header">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0074E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
            <div>
              <h4 className="ft-presence-title">Global Presence</h4>
              {/* <p className="ft-presence-sub">Delivering from 15 countries worldwide</p> */}
            </div>
          </div>
          <div className="ft-divider" />

          {/* 5-column regions — all vertical */}
          <div className="ft-regions-grid">
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> INDIA</h5>
              <ul className="ft-region-list">
                <li><Link href="/software-development-company-hyderabad">Hyderabad</Link></li>
                <li><Link href="/software-development-company-bangalore">Bangalore</Link></li>
                <li><Link href="/software-development-company-chennai">Chennai</Link></li>
                <li><Link href="/top-mobile-app-development-company-in-coimbatore">Coimbatore</Link></li>
                <li><Link href="/top-mobile-app-development-company-in-kochi">Kochi</Link></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> AMERICAS</h5>
              <ul className="ft-region-list">
                <li><Link href="/software-development-company-usa">United States</Link></li>
                <li><Link href="/software-development-company-canada">Canada</Link></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> EUROPE</h5>
              <ul className="ft-region-list">
                <li><Link href="/software-development-company-united-kingdom">United Kingdom</Link></li>
                <li><Link href="/software-development-company-germany">Germany</Link></li>
                <li><Link href="/software-development-company-ireland">Ireland</Link></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> ASIA PACIFIC</h5>
              <ul className="ft-region-list">
                <li><Link href="/software-development-company-singapore">Singapore</Link></li>
                <li><Link href="/software-development-company-australia">Australia</Link></li>
                <li><Link href="/software-development-company-new-zealand">New Zealand</Link></li>
              </ul>
            </div>
            <div className="ft-region">
              <h5 className="ft-region-label"><span className="ft-region-dot" /> MIDDLE EAST</h5>
              <ul className="ft-region-list">
                <li><Link href="/software-development-company-united-arab-emirates">UAE</Link></li>
                <li><Link href="/software-development-company-dubai">Dubai</Link></li>
                <li><Link href="/software-development-company-saudi-arabia">Saudi Arabia</Link></li>
                <li><Link href="/software-development-company-qatar">Qatar</Link></li>
                <li><Link href="/software-development-company-kuwait">Kuwait</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ft-bottom">
        <div className="ft-container">
          <div className="ft-bottom-inner">
            <p className="ft-copyright">© 2026 mTouch Labs Pvt. Ltd. All rights reserved.</p>
            <div className="ft-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-and-conditions">Terms of Service</Link>
              <Link href="/refundpolicy">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}