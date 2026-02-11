export default function Footer() {
  return (
    <footer className="transforming-footer">
      <div className="transforming-container">
        <div className="transforming-content">
          <div className="newsletter-container">
            <div className="newsletter-text-section">
              <h2>
                Transforming thoughts
                <br />
                into Masterpieces!
              </h2>
            </div>
          </div>
        </div>

        <div className="transforming-grid">
          {/* Company Column */}
          <div className="transforming-column">
            <h3>Company</h3>
            <ul>
              <li><a href="/about" target="_blank">About us</a></li>
              <li><a href="/portfolio" target="_blank">Portfolio</a></li>
              <li><a href="/blog" target="_blank">Blogs</a></li>
              <li><a href="/careers" target="_blank">Careers</a></li>
              <li><a href="/contact-us" target="_blank">Contact us</a></li>
              <li><a href="/privacy-policy" target="_blank">Privacy &amp; Policy</a></li>
              <li><a href="/terms-and-conditions" target="_blank">Terms and Conditions</a></li>
              <li><a href="/refundpolicy" target="_blank">Refund Policy</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="transforming-column">
            <h3>Services</h3>
            <ul>
              <li><a href="/hire-dedicated-developers-in-india" target="_blank">Hire Dedicated Developers</a></li>
              <li><a href="/web-development-company" target="_blank">Web App Development</a></li>
              <li><a href="/mobile-app-development-company" target="_blank">Mobile App Development</a></li>
              <li><a href="/seo-services-company" target="_blank">Search Engine Optimization</a></li>
              <li><a href="/ppc-management-services-company" target="_blank">Pay-Per-Click</a></li>
              <li><a href="/social-media-marketing-company-in-india" target="_blank">Social Media Marketing</a></li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="transforming-column">
            <h3>Get In Touch</h3>
            <p>
              <a href="tel:9390683154">
                <i className="fas fa-phone"></i>&nbsp; 9390683154
              </a>
            </p>
            <p>
              <a
                href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0"
                target="_blank"
              >
                <i className="fab fa-whatsapp" style={{ color: "forestgreen" }}></i>&nbsp;
                9390683154
              </a>
            </p>
            <p>
              <a href="mailto:contact@mtouchlabs.com">
                <i className="fas fa-envelope"></i>&nbsp; contact@mtouchlabs.com
              </a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>&nbsp;
              <a href="mailto:hr@mtouchlabs.com">hr@mtouchlabs.com</a>
            </p>
            {/* Brochure — opens brochure form modal */}
            <button
              className="transforming-brochure js-brochure-modal"
              style={{ marginTop: "20px" }}
            >
              Our Brochure →
            </button>
          </div>

          {/* Reach Us / Map Column */}
          <div className="transforming-column">
            <h3>Reach us</h3>
            <div className="iframe-container">
              <a
                className="iframe-link"
                href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.382984579238!2d78.39014957483255!3d17.489221983415387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cec63e97d9%3A0xb045c9dc22129055!2smTouch%20Labs%20Pvt%20Ltd%20-%20Software%20Development%20Company!5e0!3m2!1sen!2sin!4v1739875624590!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="transforming-locations">
        <div className="locations-grid">
          <div className="location-item">
            <h3>Locations</h3>
          </div>
          <div className="location-item">
            <div className="location-item-div">
              <img src="/images/home/india-flag.png" alt="India Flag" />
              <a href="/top-mobile-app-development-company-in-hyderabad" target="_blank">Hyderabad</a>
            </div>
            <div className="location-item-div">
              <img src="/images/home/india-flag.png" alt="India Flag" />
              <a href="/top-mobile-app-development-company-in-bangalore" target="_blank">Bangalore</a>
            </div>
            <div className="location-item-div">
              <img src="/images/home/india-flag.png" alt="India Flag" />
              <a href="/top-mobile-app-development-company-in-chennai" target="_blank">Chennai</a>
            </div>
          </div>

          <div className="location-item">
            <div className="location-item-div">
              <img src="/images/home/india-flag.png" alt="India Flag" />
              <a href="/top-mobile-app-development-company-in-coimbatore" target="_blank">Coimbatore</a>
            </div>
            <div className="location-item-div">
              <img src="/images/home/india-flag.png" alt="India Flag" />
              <a href="/top-mobile-app-development-company-in-kochi" target="_blank">Kochi</a>
            </div>
            <div className="location-item-div">
              <img src="/images/home/flag-canada.png" alt="Canada Flag" />
              <a href="/best-mobile-app-development-company-in-canada" target="_blank">Canada</a>
            </div>
          </div>

          <div style={{ marginTop: "1rem" }} className="location-item">
            <div className="location-item-div">
              <img src="/images/home/flag-usa.png" alt="USA Flag" />
              <a href="/best-mobile-app-development-company-in-usa" target="_blank">USA</a>
            </div>
            <div className="location-item-div">
              <img src="/images/home/flag-australia.png" alt="Australia Flag" />
              <a href="/top-mobile-app-development-company-in-australia" target="_blank">Australia</a>
            </div>
            <div style={{ marginTop: "0.3rem" }} className="location-item-div">
              <img src="/images/home/flag-qatar.png" alt="Qatar Flag" />
              <a href="/top-mobile-app-development-company-in-qatar" target="_blank">Qatar</a>
            </div>
          </div>

          <div className="location-item" style={{ marginTop: "1.2rem" }}>
            <div className="location-item-div">
              <img src="/images/home/flag-dubai.png" alt="Dubai Flag" />
              <a href="/top-mobile-app-development-company-in-dubai" target="_blank">Dubai</a>
            </div>
            <div className="location-item-div" style={{ marginTop: "0.3rem" }}>
              <img src="/images/home/flag-uk.png" alt="UK Flag" />
              <a href="/top-mobile-app-development-company-in-uk" target="_blank">UK</a>
            </div>
            <div style={{ paddingTop: "1.3rem" }} className="location-item-div">
              <img src="/images/home/kuait.png" alt="Kuwait Flag" />
              <a href="/top-mobile-app-development-company-in-kuwait" target="_blank">Kuwait</a>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates & Copyright */}
      <div className="transforming-certificates">
        <div className="transforming-certificates-one">
          <div className="transforming-certificates-img">
            <img src="/images/home/iso.png" alt="mTouch Labs" className="img" />
            <a
              target="_blank"
              href="https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd+-+Software+Development+Company/@17.4892271,78.3901496,17z/data=!4m8!3m7!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!9m1!1b1!16s%2Fg%2F11b8zhlwcv?authuser=0&entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
            >
              <img src="/images/home/reviews.png" alt="mTouch Labs" className="img" />
            </a>
          </div>
          <span className="transforming-certificates-one-span">
            <p>
              Copyright © <span id="currentYear"></span>
              <a href="/" style={{ color: "#ADB7C5" }}>
                mtouchLabs
              </a>{" "}
              All rights reserved.
            </p>
          </span>
        </div>

        <div className="transforming-certificates-icons">
          <a href="#">
            <img src="/images/logo-white.png" alt="mTouch Labs" className="img" />
          </a>
        </div>

        <div className="transforming-certificates-icons">
          <ul className="footer-links-list social-linkz" style={{ display: "flex" }}>
            <li>
              <a href="https://www.facebook.com/MTouchLabs/" target="_blank">
                <span><i className="fab fa-facebook-f"></i></span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/mtouchlabs" target="_blank">
                <span><i className="fa-brands fa-x-twitter"></i></span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mtouch_labs/" target="_blank">
                <span><i className="fab fa-instagram"></i></span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mtouchlabs/" target="_blank">
                <span><i className="fab fa-linkedin-in"></i></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}