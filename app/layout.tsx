import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Script from "next/script";
import QuoteModal from "@/components/sections/home/QuoteModal";
//import './css/blog.css'; />
export const metadata = {
  metadataBase: new URL('https://www.mtouchlabs.com'),
  alternates: {
    canonical: './',   // ← this tells Next.js to auto-canonical every page
  },
  title: "mTouch Labs - Software Development Company",
  description: "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Core CSS */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/plugin.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/ionicon.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        {/* Template CSS */}
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/mega-menu.css" rel="stylesheet" />
        <link href="/css/about.css" rel="stylesheet" />
        <link href="/css/blog.css" rel="stylesheet" />
        <link href="/css/case-study.css" rel="stylesheet" />
        <link href="/css/home-mega-menu.css" rel="stylesheet" />
        <link href="/css/chat-widget.css" rel="stylesheet" />
        <link href="/css/location-pages.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/navbar-dropdown.css" rel="stylesheet" />
        <meta name="turnstile-site-key" content={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />
        {/* AOS animations */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        {/* Owl Carousel */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
        {/* Favicon */}
        <link href="/images/favicon.png" rel="icon" />
      </head>
      <body>
        {/* Request Quote Modal Overlay (shared) */}
        <QuoteModal />
        {/* Brochure Modal Overlay */}
        <div className="modal-overlay hide" id="brochureModal">
          <div className="brochure-modal-box">
            {/* Left — Brochure Image */}
            <div className="brochure-modal-left">
              <div className="brochure-modal-circle">
                <img src="/images/sliders/mobile_app_development.png" alt="Web and Mobile App Development" />
              </div>
            </div>
            {/* Right — Form */}
            <div className="brochure-modal-right">
              <button id="closeBrochureModal" className="brochure-close-btn">&#10005;</button>
              <h3 className="brochure-modal-title">Request Brochure</h3>
              <div id="brochureForm">
                <label className="brochure-form-label">Full Name</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128100;</span>
                  <input type="text" id="brochure_name" placeholder="Full Name" />
                </div>
                <label className="brochure-form-label">Your Email</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#9993;&#65039;</span>
                  <input type="email" id="brochure_email" placeholder="Email Id" />
                </div>
                <label className="brochure-form-label">Country Code</label>
                <select id="brochure_country" className="brochure-form-select">
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+971">UAE (+971)</option>
                  <option value="+65">Singapore (+65)</option>
                  <option value="+49">Germany (+49)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+974">Qatar (+974)</option>
                  <option value="+965">Kuwait (+965)</option>
                  <option value="+966">Saudi Arabia (+966)</option>
                  <option value="+1">Canada (+1)</option>
                </select>
                <label className="brochure-form-label">Your Mobile</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128241;</span>
                  <input type="tel" id="brochure_phone" placeholder="Contact Number" />
                </div>
                <button id="brochureSubmitBtn" className="brochure-submit-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div className="header-spacer"></div>
        {children}
        <Footer />
        <ChatWidget />
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/message/H5VADFWLMPYIM1"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-hero-btn"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/images/new_home/ai-product-pages/cybersecurity/whatsapp.png"
            alt="WhatsApp"
            className="whatsapp-hero-img"
          />
          <span className="wa-tooltip">Chat with us!</span>
        </a>

        {/* ========== SHARED SCRIPTS ========== */}
        <Script
          src="/js/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script id="app-bundle" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/app.bundle.js";document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="afterInteractive"
        />
        <Script src="/js/mega-menu.js" strategy="lazyOnload" />
        <Script src="/js/navbar-init.js" strategy="lazyOnload" />
        <Script id="main-js" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/main.js";document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} />
        <Script src="/js/site-interactions.js" strategy="lazyOnload" />
        <Script src="/js/faq.js" strategy="lazyOnload" />
        <Script src="/js/tabs.js" strategy="lazyOnload" />
        <Script src="/js/services.js" strategy="lazyOnload" />

        {/* ========== REQUEST QUOTE HANDLER ========== */}
        <Script id="request-quote-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            var form = document.getElementById('requestQuoteForm');
            if (!form) return;
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              var btn = document.getElementById('submitButton');
              var icon = document.getElementById('rotating_icon');
              if (btn) btn.disabled = true;
              if (icon) icon.style.display = 'inline-block';
              var fd = new FormData(form);
              var d = Object.fromEntries(fd.entries());
              fetch('/api/request-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: d.name,
                  email: d.email,
                  countryCode: d.countryCode,
                  mobile: d.mobile,
                  service: d.service,
                  budget: d.budget,
                  message: d.message
                })
              }).then(function(r) {
                if (r.ok) {
                  window.location.href = '/thank-you';
                } else {
                  alert('Something went wrong. Please try again.');
                  if (btn) btn.disabled = false;
                  if (icon) icon.style.display = 'none';
                }
              }).catch(function(err) {
                console.error(err);
                alert('Something went wrong. Please try again.');
                if (btn) btn.disabled = false;
                if (icon) icon.style.display = 'none';
              });
            });
          })();
        `}} />

        {/* ========== BROCHURE FORM HANDLER ========== */}
        <Script id="brochure-form-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            function initBrochure() {
              var btn = document.getElementById('brochureSubmitBtn');
              if (!btn) return setTimeout(initBrochure, 500);
              if (btn.dataset.handled) return;
              btn.dataset.handled = 'true';

              btn.addEventListener('click', function(e) {
                e.preventDefault();

                var name = (document.getElementById('brochure_name') || {}).value || '';
                var email = (document.getElementById('brochure_email') || {}).value || '';
                var countryCode = (document.getElementById('brochure_country') || {}).value || '+91';
                var mobile = (document.getElementById('brochure_phone') || {}).value || '';

                name = name.trim();
                email = email.trim();
                mobile = mobile.trim();

                if (!name || !email) {
                  alert('Please fill in your name and email.');
                  return;
                }

                btn.disabled = true;
                btn.textContent = 'Sending...';

                fetch('/api/brochure', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: name,
                    email: email,
                    countryCode: countryCode,
                    mobile: mobile
                  })
                }).then(function() {
                  window.location.href = '/thank-you';
                }).catch(function() {
                  window.location.href = '/thank-you';
                });
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initBrochure);
            } else {
              initBrochure();
            }
          })();
        `}} />
      </body>
    </html>
  );
}