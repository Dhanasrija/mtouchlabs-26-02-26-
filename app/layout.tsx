import '../public/css/brand.css';
import "../public/css/case-study.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Script from "next/script";
import QuoteModal from "@/components/sections/home/QuoteModal";
import Analytics from "@/components/Analytics";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3E8CFB",
};

export const metadata = {
  metadataBase: new URL('https://www.mtouchlabs.com'),
  alternates: {
    canonical: 'https://www.mtouchlabs.com',
  },
  title: {
    default: "Software Development Company & IT Solutions | mTouch Labs",
    template: "%s | mTouch Labs"
  },
  description: "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
  openGraph: {
    siteName: "mTouch Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/Light.png",
        width: 1200,
        height: 630,
        alt: "mTouch Labs Software Development Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtouchlabs",
    creator: "@mtouchlabs",
    title: "Software Development Company & IT Solutions | mTouch Labs",
    description: "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
    images: ["/images/Light.png"]
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  manifest: "/manifest.json",
  authors: [{ name: "mTouch Labs", url: "https://www.mtouchlabs.com" }],
  creator: "mTouch Labs",
  publisher: "mTouch Labs",
  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ========== GOOGLE TAG MANAGER (GTM) — Global, all pages ========== */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K2PX82J8');`}
        </Script>
        {/* ========== END GOOGLE TAG MANAGER ========== */}

        {/* ========== GOOGLE TAG (gtag.js) — Ads + Analytics ========== */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XKH5MQ5FD4`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17755266570');
            gtag('config', 'G-XKH5MQ5FD4');
          `}
        </Script>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />

        {/* ========== SCHEMA.ORG — Organization ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "mTouch Labs",
              "url": "https://www.mtouchlabs.com",
              "logo": "https://www.mtouchlabs.com/images/favicon.png",
              "description": "Leading software development company specializing in web and mobile app development, partnering with Telangana and Abu Dhabi Governments.",
              "foundingDate": "2014",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500072",
                "addressCountry": "IN"
              },
              "contactPoint": [
                { "@type": "ContactPoint", "telephone": "+91-9390683154", "contactType": "sales", "areaServed": "IN" },
                { "@type": "ContactPoint", "telephone": "+1-551-222-0070", "contactType": "sales", "areaServed": "US" }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/mtouchlabs",
                "https://www.instagram.com/mtouchlabs",
                "https://twitter.com/mtouchlabs",
                "https://www.facebook.com/mtouchlabs",
                "https://www.youtube.com/@mtouchlabs"
              ]
            })
          }}
        />

        {/* ========== SCHEMA.ORG — WebSite ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "mTouch Labs",
              "url": "https://www.mtouchlabs.com"
            })
          }}
        />

        {/* ========== CSS — Core ========== */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/plugin.min.css" rel="stylesheet" />
        <link href="/css/all.min.css" rel="stylesheet" />
        <link href="/css/ionicon.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

        {/* ========== CSS — Site ========== */}
        <link href="/css/style.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link href="/css/mega-menu.css" rel="stylesheet" />
        <link href="/css/about.css" rel="stylesheet" />
        <link href="/css/blog.css" rel="stylesheet" />
        <link href="/css/home-mega-menu.css" rel="stylesheet" />
        <link href="/css/navbar-redesign.css" rel="stylesheet" />
        <link href="/css/chat-widget.css" rel="stylesheet" />
        <link href="/css/location-pages.css" rel="stylesheet" />
        <link href="/css/navbar-dropdown.css" rel="stylesheet" />
        <link href="/css/services.css" rel="stylesheet" />
        <link href="/css/homepage-fixes.css" rel="stylesheet"/>

        <meta name="turnstile-site-key" content={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />

        {/* ========== CSS — Third Party ========== */}
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
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
      <body suppressHydrationWarning>
        {/* ========== GOOGLE TAG MANAGER (noscript) — Global, all pages ========== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2PX82J8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* ========== END GOOGLE TAG MANAGER (noscript) ========== */}

        <Analytics />
        {/* Request Quote Modal Overlay (shared) */}
        <QuoteModal />
        {/* Brochure Modal Overlay */}
        <div className="modal-overlay hide" id="brochureModal">
          <div className="brochure-modal-box">
            <div className="brochure-modal-left">
              <div className="brochure-modal-circle">
                <img src="/images/sliders/mobile_app_development.png" alt="Web and Mobile App Development" />
              </div>
            </div>
            <div className="brochure-modal-right">
              <button id="closeBrochureModal" className="brochure-close-btn" aria-label="Close brochure modal" type="button">&#10005;</button>
              <h3 className="brochure-modal-title">Request Brochure</h3>
              <div id="brochureForm">
                <label className="brochure-form-label">Full Name</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128100;</span>
                  <input type="text" id="brochure_name" placeholder="Full Name" aria-label="Full Name" />
                </div>
                <label className="brochure-form-label">Your Email</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#9993;&#65039;</span>
                  <input type="email" id="brochure_email" placeholder="Email Id" aria-label="Email Address" />
                </div>
                <label className="brochure-form-label">Country Code</label>
                <select id="brochure_country" className="brochure-form-select" aria-label="Country Code">
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
                  <input type="tel" id="brochure_phone" placeholder="Contact Number" aria-label="Phone Number" />
                </div>
                <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onBrochureTurnstileSuccess" suppressHydrationWarning></div>

                <button type="button" id="brochureSubmitBtn" className="brochure-submit-btn">Submit Now</button>
              </div>
            </div>
          </div>
        </div>
        <Header />
        <div className="header-spacer"></div>
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_SHOW_CHATBOT === "true" && <ChatWidget />}
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

        {/* ========== JS — Core Libraries ========== */}
        <Script src="/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        {/* <Script id="app-bundle" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/app.bundle.js";s.onload=function(){var n=document.createElement("script");n.src="/js/navbar-init.js";document.body.appendChild(n)};document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} /> */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />

        {/* ========== JS — Site Scripts ========== */}
        {/* <Script id="main-js" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/main.js";document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} /> */}
        
        <Script src="/js/app.bundle.js" strategy="afterInteractive" />
        
<Script src="/js/navbar-init.js" strategy="afterInteractive" />
<Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/mega-menu.js" strategy="lazyOnload" />

        <Script src="/js/site-interactions.js" strategy="lazyOnload" />
        <Script src="/js/faq.js" strategy="afterInteractive" />
        <Script src="/js/tabs.js" strategy="lazyOnload" />
        <Script src="/js/services.js" strategy="lazyOnload" />

 {/* <script src="/js/nav-active.js"></script> */}

        {/* ========== JS — Request Quote Handler ========== */}
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
                  name: d.name, email: d.email, countryCode: d.countryCode,
                  mobile: d.mobile, service: d.service, budget: d.budget, message: d.message
                })
              }).then(function(r) {
                if (r.ok) { window.location.href = '/thank-you?source=quote'; }
                else { alert('Something went wrong. Please try again.'); if (btn) btn.disabled = false; if (icon) icon.style.display = 'none'; }
              }).catch(function(err) {
                console.error(err); alert('Something went wrong. Please try again.');
                if (btn) btn.disabled = false; if (icon) icon.style.display = 'none';
              });
            });
          })();
        `}} />

        {/* ========== JS — Brochure Form Handler ========== */}
       <Script id="brochure-form-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            var brochureTurnstileToken = '';
            window.onBrochureTurnstileSuccess = function(token) {
              brochureTurnstileToken = token;
            };
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
                name = name.trim(); email = email.trim(); mobile = mobile.trim();
                if (!name || !email) { alert('Please fill in your name and email.'); return; }
                btn.disabled = true; btn.textContent = 'Sending...';
                fetch('/api/brochure', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ name: name, email: email, countryCode: countryCode, mobile: mobile, 'cf-turnstile-response': brochureTurnstileToken })
                }).then(function() { window.location.href = '/thank-you?source=brochure'; })
                  .catch(function() { window.location.href = '/thank-you?source=brochure'; });
              });
            }
            if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initBrochure); }
            else { initBrochure(); }
          })();
        `}} />

        {/* ========== JS — Bottom Nav Icons ========== */}
        <Script id="bottom-nav-icons" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
          (function() {
            function fixBottomNav() {
              var allLinks = document.querySelectorAll('.bottom-nav .ree-hc a');
              if (!allLinks.length) return setTimeout(fixBottomNav, 500);
              var icons = ['/images/nav-icon/phone-call.png','/images/nav-icon/gmail.png','/images/nav-icon/whatsapp.png','/images/nav-icon/who.png'];
              var alts = ['Phone','Email','WhatsApp','About'];
              allLinks.forEach(function(a, i) {
                var idx = i % 4;
                if (!a.querySelector('img')) {
                  var img = document.createElement('img');
                  img.src = icons[idx]; img.alt = alts[idx]; img.width = 24; img.height = 24;
                  img.style.display = 'inline-block'; a.innerHTML = ''; a.appendChild(img);
                }
              });
            }
            setTimeout(fixBottomNav, 1500);
          })();
        `}} />

        <Script
          id="tawk-loader"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {};
              Tawk_API.customStyle = {
                visibility: {
                  desktop: { position: 'br', xOffset: 20, yOffset: 20 },
                  mobile: { position: 'br', xOffset: 10, yOffset: 70 }
                }
              };
              var Tawk_LoadStart = new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/614aeb4425797d7a890039a2/1fg6ae1bv';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />


      </body>
    </html>
  );
}