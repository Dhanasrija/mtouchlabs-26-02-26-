// import '../public/css/brand.css';
// import "../public/css/case-study.css";
// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
// import ChatWidget from "@/components/layout/ChatWidget";
// import Script from "next/script";
// import QuoteModal from "@/components/sections/home/QuoteModal";
// import Analytics from "@/components/Analytics";
// import AOSRefresh from "@/components/AOSRefresh";
// import type { Viewport } from "next";

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   themeColor: "#3E8CFB",
// };

// export const metadata = {
//   metadataBase: new URL('https://www.mtouchlabs.com'),
//   alternates: {
//     canonical: 'https://www.mtouchlabs.com',
//   },
//   title: {
//     default: "Software Development Company & IT Solutions | mTouch Labs",
//     template: "%s | mTouch Labs"
//   },
//   description: "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
//   openGraph: {
//     siteName: "mTouch Labs",
//     type: "website",
//     locale: "en_US",
//     images: [
//       {
//         url: "/images/Light.png",
//         width: 1200,
//         height: 630,
//         alt: "mTouch Labs Software Development Company"
//       }
//     ]
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@mtouchlabs",
//     creator: "@mtouchlabs",
//     title: "Software Development Company & IT Solutions | mTouch Labs",
//     description: "mTouch Labs is a leading software development company providing mobile app development, web development, and digital marketing services.",
//     images: ["/images/Light.png"]
//   },
//   icons: {
//     icon: "/images/favicon.png",
//     shortcut: "/images/favicon.png",
//     apple: "/images/favicon.png",
//   },
//   manifest: "/manifest.json",
//   authors: [{ name: "mTouch Labs", url: "https://www.mtouchlabs.com" }],
//   creator: "mTouch Labs",
//   publisher: "mTouch Labs",
//   category: "Technology",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         {/* ========== GOOGLE TAG MANAGER (GTM) — Global, all pages ========== */}
//         <Script id="gtm-init" strategy="afterInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-K2PX82J8');`}
//         </Script>
//         {/* ========== END GOOGLE TAG MANAGER ========== */}

//         {/* ========== GOOGLE TAG (gtag.js) — Ads + Analytics ========== */}
//         <Script
//           src={`https://www.googletagmanager.com/gtag/js?id=G-XKH5MQ5FD4`}
//           strategy="afterInteractive"
//         />
//         <Script id="gtag-init" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'AW-17755266570');
//             gtag('config', 'G-XKH5MQ5FD4');
//           `}
//         </Script>
//         <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />

//         {/* ========== SCHEMA.ORG — Organization ========== */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "mTouch Labs",
//               "url": "https://www.mtouchlabs.com",
//               "logo": "https://www.mtouchlabs.com/images/favicon.png",
//               "description": "Leading software development company specializing in web and mobile app development, partnering with Telangana and Abu Dhabi Governments.",
//               "foundingDate": "2014",
//               "address": {
//                 "@type": "PostalAddress",
//                 "addressLocality": "Hyderabad",
//                 "addressRegion": "Telangana",
//                 "postalCode": "500072",
//                 "addressCountry": "IN"
//               },
//               "contactPoint": [
//                 { "@type": "ContactPoint", "telephone": "+91-9390683154", "contactType": "sales", "areaServed": "IN" },
//                 { "@type": "ContactPoint", "telephone": "+1-551-222-0070", "contactType": "sales", "areaServed": "US" }
//               ],
//               "sameAs": [
//                 "https://www.linkedin.com/company/mtouchlabs",
//                 "https://www.instagram.com/mtouchlabs",
//                 "https://twitter.com/mtouchlabs",
//                 "https://www.facebook.com/mtouchlabs",
//                 "https://www.youtube.com/@mtouchlabs"
//               ]
//             })
//           }}
//         />

//         {/* ========== SCHEMA.ORG — WebSite ========== */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               "name": "mTouch Labs",
//               "url": "https://www.mtouchlabs.com"
//             })
//           }}
//         />

//         {/* ========== CSS — Core ========== */}
//         <link href="/css/bootstrap.min.css" rel="stylesheet" />
//         <link href="/css/plugin.min.css" rel="stylesheet" />
//         <link href="/css/all.min.css" rel="stylesheet" />
//         <link href="/css/ionicon.min.css" rel="stylesheet" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />        <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lora:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
//         />

//         {/* ========== CSS — Site ========== */}
//         <link href="/css/style.css" rel="stylesheet" />
//         <link href="/css/responsive.css" rel="stylesheet" />
//         <link href="/css/mega-menu.css" rel="stylesheet" />
//         <link href="/css/about.css" rel="stylesheet" />
//         <link href="/css/blog.css" rel="stylesheet" />
//         <link href="/css/home-mega-menu.css" rel="stylesheet" />
//         <link href="/css/navbar-redesign.css" rel="stylesheet" />
//         <link href="/css/chat-widget.css" rel="stylesheet" />
//         <link href="/css/location-pages.css" rel="stylesheet" />
//         <link href="/css/navbar-dropdown.css" rel="stylesheet" />
//         <link href="/css/services.css" rel="stylesheet" />
//         <link href="/css/homepage-fixes.css" rel="stylesheet"/>

//         <meta name="turnstile-site-key" content={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} />

//         {/* ========== CSS — Third Party ========== */}
//         <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
//         />
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
//         />

//         {/* Favicon */}
//         <link href="/images/favicon.png" rel="icon" />
//       </head>
//       <body suppressHydrationWarning>
//         {/* ========== GOOGLE TAG MANAGER (noscript) — Global, all pages ========== */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-K2PX82J8"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>
//         {/* ========== END GOOGLE TAG MANAGER (noscript) ========== */}

//         <Analytics />
//         <AOSRefresh />
//         {/* Request Quote Modal Overlay (shared) */}
//         <QuoteModal />
//         {/* Brochure Modal Overlay */}
//         <div className="modal-overlay hide" id="brochureModal" role="dialog" aria-modal="true" aria-labelledby="brochureModalTitle">
//           <div className="brochure-modal-box">
//             <div className="brochure-modal-left">
//               <div className="brochure-modal-circle">
//                 <img src="/images/sliders/mobile_app_development.png" alt="Web and Mobile App Development" />
//               </div>
//             </div>
//             <div className="brochure-modal-right">
//               <button id="closeBrochureModal" className="brochure-close-btn" aria-label="Close brochure modal" type="button">&#10005;</button>
//               <h3 id="brochureModalTitle" className="brochure-modal-title">Request Brochure</h3>
//               <form id="brochureForm" noValidate>
//                 <label className="brochure-form-label" htmlFor="brochure_name">Full Name</label>
//                 <div className="brochure-input-group">
//                   <span className="brochure-input-icon">&#128100;</span>
//                   <input type="text" id="brochure_name" name="name" placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
//                 </div>
//                 <div className="brochure-error" id="brochure_name_err" aria-live="polite"></div>

//                 <label className="brochure-form-label" htmlFor="brochure_email">Your Email</label>
//                 <div className="brochure-input-group">
//                   <span className="brochure-input-icon">&#9993;&#65039;</span>
//                   <input type="email" id="brochure_email" name="email" placeholder="Email Id" aria-label="Email Address" autoComplete="email" required />
//                 </div>
//                 <div className="brochure-error" id="brochure_email_err" aria-live="polite"></div>

//                 <label className="brochure-form-label" htmlFor="brochure_country">Country Code</label>
//                 <select id="brochure_country" name="countryCode" className="brochure-form-select" aria-label="Country Code">
//                   <option value="+91">India (+91)</option>
//                   <option value="+1">USA (+1)</option>
//                   <option value="+44">UK (+44)</option>
//                   <option value="+61">Australia (+61)</option>
//                   <option value="+971">UAE (+971)</option>
//                   <option value="+65">Singapore (+65)</option>
//                   <option value="+49">Germany (+49)</option>
//                   <option value="+33">France (+33)</option>
//                   <option value="+81">Japan (+81)</option>
//                   <option value="+86">China (+86)</option>
//                   <option value="+974">Qatar (+974)</option>
//                   <option value="+965">Kuwait (+965)</option>
//                   <option value="+966">Saudi Arabia (+966)</option>
//                   <option value="+1-ca">Canada (+1)</option>
//                 </select>

//                 <label className="brochure-form-label" htmlFor="brochure_phone">Your Mobile</label>
//                 <div className="brochure-input-group">
//                   <span className="brochure-input-icon">&#128241;</span>
//                   <input type="tel" id="brochure_phone" name="mobile" placeholder="Contact Number" aria-label="Phone Number" autoComplete="tel" inputMode="tel" required />
//                 </div>
//                 <div className="brochure-error" id="brochure_phone_err" aria-live="polite"></div>

//                 <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onBrochureTurnstileSuccess" suppressHydrationWarning></div>

//                 <button type="submit" id="brochureSubmitBtn" className="brochure-submit-btn">Submit Now</button>
//                 <div className="brochure-error brochure-error--form" id="brochure_form_err" aria-live="polite"></div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <Header />
//         <div className="header-spacer"></div>
//         {children}
//         <Footer />
//         {process.env.NEXT_PUBLIC_SHOW_CHATBOT === "true" && <ChatWidget />}
//         {/* Floating WhatsApp Button */}
//         <a
//           href="https://wa.me/message/H5VADFWLMPYIM1"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="whatsapp-hero-btn"
//           aria-label="Chat on WhatsApp"
//         >
//           <img
//             src="/images/new_home/ai-product-pages/cybersecurity/whatsapp.png"
//             alt="WhatsApp"
//             className="whatsapp-hero-img"
//           />
//           <span className="wa-tooltip">Chat with us!</span>
//         </a>

//         {/* ========== JS — Core Libraries ========== */}
//         <Script src="/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
//         <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
//         {/* <Script id="app-bundle" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/app.bundle.js";s.onload=function(){var n=document.createElement("script");n.src="/js/navbar-init.js";document.body.appendChild(n)};document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} /> */}
//         <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" strategy="afterInteractive" />
//         <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive" />

//         {/* ========== JS — Site Scripts ========== */}
//         {/* <Script id="main-js" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `(function c(){if(typeof jQuery!=="undefined"){var s=document.createElement("script");s.src="/js/main.js";document.body.appendChild(s)}else{setTimeout(c,100)}})()` }} /> */}
        
//         <Script src="/js/app.bundle.js" strategy="afterInteractive" />
        
// <Script src="/js/navbar-init.js" strategy="afterInteractive" />
// <Script src="/js/main.js" strategy="afterInteractive" />
//         <Script src="/js/mega-menu.js" strategy="lazyOnload" />

//         <Script src="/js/site-interactions.js" strategy="lazyOnload" />
//         <Script src="/js/faq.js" strategy="afterInteractive" />
//         <Script src="/js/tabs.js" strategy="lazyOnload" />
//         <Script src="/js/services.js" strategy="lazyOnload" />

//  {/* <script src="/js/nav-active.js"></script> */}

//         {/* ========== JS — Request Quote Handler ========== */}
//         <Script id="request-quote-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
//           (function() {
//             var form = document.getElementById('requestQuoteForm');
//             if (!form) return;
//             form.addEventListener('submit', function(e) {
//               e.preventDefault();
//               var btn = document.getElementById('submitButton');
//               var icon = document.getElementById('rotating_icon');
//               if (btn) btn.disabled = true;
//               if (icon) icon.style.display = 'inline-block';
//               var fd = new FormData(form);
//               var d = Object.fromEntries(fd.entries());
//               fetch('/api/request-quote', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                   name: d.name, email: d.email, countryCode: d.countryCode,
//                   mobile: d.mobile, service: d.service, budget: d.budget, message: d.message
//                 })
//               }).then(function(r) {
//                 if (r.ok) { window.location.href = '/thank-you?source=quote'; }
//                 else { alert('Something went wrong. Please try again.'); if (btn) btn.disabled = false; if (icon) icon.style.display = 'none'; }
//               }).catch(function(err) {
//                 console.error(err); alert('Something went wrong. Please try again.');
//                 if (btn) btn.disabled = false; if (icon) icon.style.display = 'none';
//               });
//             });
//           })();
//         `}} />

//         {/* ========== JS — Brochure Form Handler (validating, modal-only) ========== */}
//        <Script id="brochure-form-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
//           (function() {
//             var brochureTurnstileToken = '';
//             window.onBrochureTurnstileSuccess = function(token) { brochureTurnstileToken = token; };

//             var NAME_RE  = /^[A-Za-z][A-Za-z .'\\-]{1,59}$/;
//             var EMAIL_RE = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;
//             var PHONE_RE = /^[0-9+()\\-\\s]{7,20}$/;

//             function $(id) { return document.getElementById(id); }
//             function setError(fieldId, errId, msg) {
//               var field = $(fieldId), err = $(errId);
//               if (field) {
//                 var group = field.closest ? field.closest('.brochure-input-group') || field.parentElement : field.parentElement;
//                 if (msg) { if (group) group.classList.add('brochure-input-group--error'); field.setAttribute('aria-invalid','true'); }
//                 else { if (group) group.classList.remove('brochure-input-group--error'); field.removeAttribute('aria-invalid'); }
//               }
//               if (err) err.textContent = msg || '';
//             }
//             function validateName(v)  { v = (v||'').trim(); if (!v) return 'Please enter your full name.'; if (v.length < 2) return 'Name must be at least 2 characters.'; if (!NAME_RE.test(v)) return 'Name can only contain letters, spaces, apostrophes and hyphens.'; return ''; }
//             function validateEmail(v) { v = (v||'').trim(); if (!v) return 'Please enter your email address.'; if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.'; return ''; }
//             function validatePhone(v) { v = (v||'').trim(); if (!v) return 'Please enter your mobile number.'; if (!PHONE_RE.test(v)) return 'Please enter a valid phone number (digits only).'; var digits = v.replace(/[^0-9]/g,''); if (digits.length < 7 || digits.length > 15) return 'Phone number must be between 7 and 15 digits.'; return ''; }

//             function validateAll(silent) {
//               var n = $('brochure_name'), e = $('brochure_email'), p = $('brochure_phone');
//               var errN = validateName(n && n.value), errE = validateEmail(e && e.value), errP = validatePhone(p && p.value);
//               if (!silent) {
//                 setError('brochure_name',  'brochure_name_err',  errN);
//                 setError('brochure_email', 'brochure_email_err', errE);
//                 setError('brochure_phone', 'brochure_phone_err', errP);
//               }
//               return !(errN || errE || errP);
//             }

//             function attachLiveValidation() {
//               var pairs = [
//                 ['brochure_name',  'brochure_name_err',  validateName],
//                 ['brochure_email', 'brochure_email_err', validateEmail],
//                 ['brochure_phone', 'brochure_phone_err', validatePhone],
//               ];
//               pairs.forEach(function(p){
//                 var el = $(p[0]);
//                 if (!el || el.dataset.liveBound) return;
//                 el.dataset.liveBound = '1';
//                 el.addEventListener('blur',  function(){ setError(p[0], p[1], p[2](el.value)); });
//                 el.addEventListener('input', function(){ if (el.getAttribute('aria-invalid')==='true') setError(p[0], p[1], p[2](el.value)); });
//               });
//             }

//             function initBrochure() {
//               var form = $('brochureForm');
//               var btn  = $('brochureSubmitBtn');
//               if (!form || !btn) return setTimeout(initBrochure, 400);
//               if (form.dataset.handled) return;
//               form.dataset.handled = 'true';

//               attachLiveValidation();

//               function handleSubmit(e) {
//                 if (e && e.preventDefault) e.preventDefault();
//                 var formErr = $('brochure_form_err');
//                 if (formErr) formErr.textContent = '';

//                 if (!validateAll(false)) {
//                   if (formErr) formErr.textContent = 'Please fix the highlighted fields before submitting.';
//                   var firstInvalid = document.querySelector('#brochureForm [aria-invalid="true"]');
//                   if (firstInvalid) firstInvalid.focus();
//                   return false;
//                 }

//                 var name  = ($('brochure_name')  || {}).value || '';
//                 var email = ($('brochure_email') || {}).value || '';
//                 var cc    = ($('brochure_country')|| {}).value || '+91';
//                 var phone = ($('brochure_phone') || {}).value || '';

//                 btn.disabled = true;
//                 var originalText = btn.textContent;
//                 btn.textContent = 'Sending...';

//                 fetch('/api/brochure', {
//                   method: 'POST',
//                   headers: { 'Content-Type': 'application/json' },
//                   body: JSON.stringify({
//                     name: name.trim(),
//                     email: email.trim(),
//                     countryCode: (cc.replace(/-ca$/,'')),
//                     mobile: phone.trim(),
//                     'cf-turnstile-response': brochureTurnstileToken
//                   })
//                 }).then(function(){
//                   window.location.href = '/thank-you?source=brochure';
//                 }).catch(function(){
//                   // Even on network error, treat as submitted (lead captured client-side) so UX is smooth.
//                   window.location.href = '/thank-you?source=brochure';
//                 }).finally(function(){
//                   btn.disabled = false; btn.textContent = originalText;
//                 });
//                 return false;
//               }

//               form.addEventListener('submit', handleSubmit);
//               // The button is type="submit" inside the form, so form submit will fire. No separate click handler needed.

//               // Auto-open modal when /brochure redirected with ?brochure=1 (also supports /?brochure=1).
//               try {
//                 var params = new URLSearchParams(window.location.search);
//                 if (params.get('brochure') === '1') {
//                   var modal = document.getElementById('brochureModal');
//                   if (modal) modal.classList.remove('hide');
//                   // Clean up URL so refresh doesn't reopen the modal
//                   if (window.history && window.history.replaceState) {
//                     params.delete('brochure');
//                     var qs = params.toString();
//                     var clean = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
//                     window.history.replaceState({}, document.title, clean);
//                   }
//                 }
//               } catch (_) {}
//             }

//             if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initBrochure); }
//             else { initBrochure(); }
//           })();
//         `}} />

//         {/* ========== JS — Bottom Nav Icons ========== */}
//         <Script id="bottom-nav-icons" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
//           (function() {
//             function fixBottomNav() {
//               var allLinks = document.querySelectorAll('.bottom-nav .ree-hc a');
//               if (!allLinks.length) return setTimeout(fixBottomNav, 500);
//               var icons = ['/images/nav-icon/phone-call.png','/images/nav-icon/gmail.png','/images/nav-icon/whatsapp.png','/images/nav-icon/who.png'];
//               var alts = ['Phone','Email','WhatsApp','About'];
//               allLinks.forEach(function(a, i) {
//                 var idx = i % 4;
//                 if (!a.querySelector('img')) {
//                   var img = document.createElement('img');
//                   img.src = icons[idx]; img.alt = alts[idx]; img.width = 24; img.height = 24;
//                   img.style.display = 'inline-block'; a.innerHTML = ''; a.appendChild(img);
//                 }
//               });
//             }
//             setTimeout(fixBottomNav, 1500);
//           })();
//         `}} />

//         <Script
//           id="tawk-loader"
//           strategy="lazyOnload"
//           dangerouslySetInnerHTML={{
//             __html: `
//               var Tawk_API = Tawk_API || {};
//               Tawk_API.customStyle = {
//                 visibility: {
//                   desktop: { position: 'br', xOffset: 20, yOffset: 20 },
//                   mobile: { position: 'br', xOffset: 10, yOffset: 70 }
//                 }
//               };
//               var Tawk_LoadStart = new Date();
//               (function(){
//                 var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//                 s1.async=true;
//                 s1.src='https://embed.tawk.to/614aeb4425797d7a890039a2/1fg6ae1bv';
//                 s1.charset='UTF-8';
//                 s1.setAttribute('crossorigin','*');
//                 s0.parentNode.insertBefore(s1,s0);
//               })();
//             `,
//           }}
//         />


//       </body>
//     </html>
//   );
// }


import '../public/css/brand.css';
import "../public/css/case-study.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import Script from "next/script";
import QuoteModal from "@/components/sections/home/QuoteModal";
import Analytics from "@/components/Analytics";
import AOSRefresh from "@/components/AOSRefresh";
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
        <AOSRefresh />
        {/* Request Quote Modal Overlay (shared) */}
        <QuoteModal />
        {/* Brochure Modal Overlay */}
        <div className="modal-overlay hide" id="brochureModal" role="dialog" aria-modal="true" aria-labelledby="brochureModalTitle">
          <div className="brochure-modal-box">
            <div className="brochure-modal-left">
              <div className="brochure-modal-circle">
                <img src="/images/sliders/mobile_app_development.png" alt="Web and Mobile App Development" />
              </div>
            </div>
            <div className="brochure-modal-right">
              <button id="closeBrochureModal" className="brochure-close-btn" aria-label="Close brochure modal" type="button">&#10005;</button>
              <h3 id="brochureModalTitle" className="brochure-modal-title">Request Brochure</h3>
              <form id="brochureForm" noValidate>
                <label className="brochure-form-label" htmlFor="brochure_name">Full Name</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128100;</span>
                  <input type="text" id="brochure_name" name="name" placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
                </div>
                <div className="brochure-error" id="brochure_name_err" aria-live="polite"></div>

                <label className="brochure-form-label" htmlFor="brochure_email">Your Email</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#9993;&#65039;</span>
                  <input type="email" id="brochure_email" name="email" placeholder="Email Id" aria-label="Email Address" autoComplete="email" required />
                </div>
                <div className="brochure-error" id="brochure_email_err" aria-live="polite"></div>

                <label className="brochure-form-label" htmlFor="brochure_country">Country Code</label>
                <select id="brochure_country" name="countryCode" className="brochure-form-select" aria-label="Country Code">
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
                  <option value="+1-ca">Canada (+1)</option>
                </select>

                <label className="brochure-form-label" htmlFor="brochure_phone">Your Mobile</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128241;</span>
                  <input type="tel" id="brochure_phone" name="mobile" placeholder="Contact Number" aria-label="Phone Number" autoComplete="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} required />
                </div>
                <div className="brochure-error" id="brochure_phone_err" aria-live="polite"></div>

                <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onBrochureTurnstileSuccess" suppressHydrationWarning></div>

                <button type="submit" id="brochureSubmitBtn" className="brochure-submit-btn">Submit Now</button>
                <div className="brochure-error brochure-error--form" id="brochure_form_err" aria-live="polite"></div>
              </form>
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

        {/* ========== JS — Brochure Form Handler (country-aware validation, modal-only) ========== */}
       <Script id="brochure-form-handler" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            var brochureTurnstileToken = '';
            window.onBrochureTurnstileSuccess = function(token) { brochureTurnstileToken = token; };

            var NAME_RE  = /^[A-Za-z][A-Za-z .'\\-]{1,59}$/;
            var EMAIL_RE = /^[A-Za-z0-9._%+\\-]{1,64}@(?:[A-Za-z0-9](?:[A-Za-z0-9\\-]{0,61}[A-Za-z0-9])?\\.)+[A-Za-z]{2,24}$/;
            var BLOCKED_EMAIL_DOMAINS = ['mailinator.com','tempmail.com','10minutemail.com','guerrillamail.com','yopmail.com','trashmail.com','sharklasers.com','getnada.com','dispostable.com'];

            // Per-country phone rules — strict digit lengths
            var PHONE_RULES = {
              '+91':   { len: 10,        starts: /^[6-9]/ },     // India
              '+1':    { len: 10,        starts: /^[2-9]/ },     // USA
              '+1-ca': { len: 10,        starts: /^[2-9]/ },     // Canada
              '+44':   { len: [10, 11],  starts: /^[1-9]/ },     // UK
              '+61':   { len: 9,         starts: /^[2-9]/ },     // Australia
              '+971':  { len: [8, 9],    starts: /^[2-9]/ },     // UAE
              '+65':   { len: 8,         starts: /^[3689]/ },    // Singapore
              '+49':   { len: [10, 11],  starts: /^[1-9]/ },     // Germany
              '+33':   { len: 9,         starts: /^[1-9]/ },     // France
              '+81':   { len: [10, 11],  starts: /^[1-9]/ },     // Japan
              '+86':   { len: 11,        starts: /^1/ },         // China
              '+974':  { len: 8,         starts: /^[3-7]/ },     // Qatar
              '+965':  { len: 8,         starts: /^[2-9]/ },     // Kuwait
              '+966':  { len: 9,         starts: /^5/ }          // Saudi Arabia
            };

            function $(id) { return document.getElementById(id); }
            function maxAllowed(rule) {
              if (!rule) return 15;
              return Array.isArray(rule.len) ? rule.len[1] : rule.len;
            }
            function minAllowed(rule) {
              if (!rule) return 7;
              return Array.isArray(rule.len) ? rule.len[0] : rule.len;
            }
            function lengthLabel(rule, cc) {
              var ccClean = (cc || '').replace('-ca','');
              if (Array.isArray(rule.len)) return 'Mobile number must be ' + rule.len[0] + '-' + rule.len[1] + ' digits for ' + ccClean + '.';
              return 'Mobile number must be exactly ' + rule.len + ' digits for ' + ccClean + '.';
            }

            function setError(fieldId, errId, msg) {
              var field = $(fieldId), err = $(errId);
              if (field) {
                var group = field.closest ? field.closest('.brochure-input-group') || field.parentElement : field.parentElement;
                if (msg) { if (group) group.classList.add('brochure-input-group--error'); field.setAttribute('aria-invalid','true'); }
                else { if (group) group.classList.remove('brochure-input-group--error'); field.removeAttribute('aria-invalid'); }
              }
              if (err) err.textContent = msg || '';
            }

            function validateName(v) {
              v = (v||'').trim();
              if (!v) return 'Please enter your full name.';
              if (v.length < 2) return 'Name must be at least 2 characters.';
              if (!NAME_RE.test(v)) return 'Name can only contain letters, spaces, apostrophes and hyphens.';
              return '';
            }

            function validateEmail(v) {
              v = (v||'').trim().toLowerCase();
              if (!v) return 'Please enter your email address.';
              if (v.length > 254) return 'Email address is too long.';
              if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.';
              var domain = v.split('@')[1] || '';
              if (BLOCKED_EMAIL_DOMAINS.indexOf(domain) !== -1) return 'Please use a non-disposable email address.';
              if (domain.indexOf('..') !== -1) return 'Please enter a valid email address.';
              return '';
            }

            function validatePhone(v, countryCode) {
              v = (v||'').trim();
              if (!v) return 'Please enter your mobile number.';
              var digits = v.replace(/[^0-9]/g, '');
              // Strip country-code prefix if user typed it inside the phone field
              var ccDigits = (countryCode || '').replace(/-ca$/,'').replace(/[^0-9]/g, '');
              if (ccDigits && digits.indexOf(ccDigits) === 0 && digits.length > ccDigits.length) {
                digits = digits.slice(ccDigits.length);
              }
              if (!digits) return 'Please enter your mobile number.';

              var rule = PHONE_RULES[countryCode];
              if (!rule) {
                if (digits.length < 7 || digits.length > 15) return 'Mobile number must be between 7 and 15 digits.';
                return '';
              }
              var minL = minAllowed(rule), maxL = maxAllowed(rule);
              if (digits.length < minL || digits.length > maxL) return lengthLabel(rule, countryCode);
              if (rule.starts && !rule.starts.test(digits)) return 'Mobile number is not valid for ' + countryCode.replace('-ca','') + '.';
              return '';
            }

            function currentCountry() {
              var sel = $('brochure_country');
              return sel ? sel.value : '+91';
            }

            function applyPhoneMaxLength() {
              var phone = $('brochure_phone');
              if (!phone) return;
              var rule = PHONE_RULES[currentCountry()];
              var max = rule ? maxAllowed(rule) : 15;
              phone.setAttribute('maxlength', String(max));
              // Trim existing value if it now exceeds the limit
              var digits = (phone.value || '').replace(/[^0-9]/g, '');
              if (digits.length > max) {
                phone.value = digits.slice(0, max);
              }
            }

            function enforceDigitsOnly(el) {
              var rule = PHONE_RULES[currentCountry()];
              var max = rule ? maxAllowed(rule) : 15;
              var digits = (el.value || '').replace(/[^0-9]/g, '').slice(0, max);
              if (el.value !== digits) el.value = digits;
            }

            function validateAll(silent) {
              var n = $('brochure_name'), e = $('brochure_email'), p = $('brochure_phone');
              var errN = validateName(n && n.value);
              var errE = validateEmail(e && e.value);
              var errP = validatePhone(p && p.value, currentCountry());
              if (!silent) {
                setError('brochure_name',  'brochure_name_err',  errN);
                setError('brochure_email', 'brochure_email_err', errE);
                setError('brochure_phone', 'brochure_phone_err', errP);
              }
              return !(errN || errE || errP);
            }

            function attachLiveValidation() {
              var pairs = [
                ['brochure_name',  'brochure_name_err',  function(v){ return validateName(v); }],
                ['brochure_email', 'brochure_email_err', function(v){ return validateEmail(v); }],
                ['brochure_phone', 'brochure_phone_err', function(v){ return validatePhone(v, currentCountry()); }],
              ];
              pairs.forEach(function(p){
                var el = $(p[0]);
                if (!el || el.dataset.liveBound) return;
                el.dataset.liveBound = '1';
                el.addEventListener('blur',  function(){ setError(p[0], p[1], p[2](el.value)); });
                el.addEventListener('input', function(){ if (el.getAttribute('aria-invalid')==='true') setError(p[0], p[1], p[2](el.value)); });
              });

              var phone = $('brochure_phone');
              if (phone && !phone.dataset.digitsBound) {
                phone.dataset.digitsBound = '1';
                phone.addEventListener('input', function(){ enforceDigitsOnly(phone); });
                phone.addEventListener('keypress', function(ev){
                  var ch = String.fromCharCode(ev.which || ev.keyCode || 0);
                  if (ch && !/[0-9]/.test(ch)) ev.preventDefault();
                });
                phone.addEventListener('paste', function(ev){
                  ev.preventDefault();
                  var text = (ev.clipboardData || window.clipboardData).getData('text') || '';
                  var rule = PHONE_RULES[currentCountry()];
                  var max = rule ? maxAllowed(rule) : 15;
                  phone.value = text.replace(/[^0-9]/g, '').slice(0, max);
                  setError('brochure_phone', 'brochure_phone_err', validatePhone(phone.value, currentCountry()));
                });
              }

              var ccSel = $('brochure_country');
              if (ccSel && !ccSel.dataset.liveBound) {
                ccSel.dataset.liveBound = '1';
                ccSel.addEventListener('change', function(){
                  applyPhoneMaxLength();
                  var phone = $('brochure_phone');
                  if (phone && phone.value) {
                    setError('brochure_phone', 'brochure_phone_err', validatePhone(phone.value, currentCountry()));
                  }
                });
              }

              applyPhoneMaxLength();
            }

            function doSubmit() {
              var formErr = $('brochure_form_err');
              if (formErr) formErr.textContent = '';
              if (!validateAll(false)) {
                if (formErr) formErr.textContent = 'Please fix the highlighted fields before submitting.';
                var firstInvalid = document.querySelector('#brochureForm [aria-invalid="true"]');
                if (firstInvalid) {
                  try { firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch(e) {}
                  // Defer focus slightly so the keyboard reliably opens on iOS Safari
                  // and the input remains tappable/typable after the error appears.
                  setTimeout(function(){ try { firstInvalid.focus({ preventScroll: true }); } catch(e) { firstInvalid.focus(); } }, 50);
                }
                return;
              }

              var btn   = $('brochureSubmitBtn');
              var name  = ($('brochure_name')  || {}).value || '';
              var email = ($('brochure_email') || {}).value || '';
              var cc    = ($('brochure_country')|| {}).value || '+91';
              var phone = ($('brochure_phone') || {}).value || '';

              if (btn) { btn.disabled = true; btn.dataset.origText = btn.textContent; btn.textContent = 'Sending...'; }

              fetch('/api/brochure', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: name.trim(),
                  email: email.trim(),
                  countryCode: (cc.replace(/-ca$/,'')),
                  mobile: phone.replace(/[^0-9]/g,''),
                  source: 'brochure',
                  'cf-turnstile-response': brochureTurnstileToken
                })
              }).then(function(){
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'generate_lead', { source: 'brochure' });
                }
                window.location.href = '/thank-you?source=brochure';
              }).catch(function(){
                window.location.href = '/thank-you?source=brochure';
              });
            }

            function initBrochure() {
              var form = $('brochureForm');
              var btn  = $('brochureSubmitBtn');
              if (!form || !btn) return setTimeout(initBrochure, 400);
              if (form.dataset.handled) return;
              form.dataset.handled = 'true';

              attachLiveValidation();

              // Capture-phase submit handler — wins against any other submit handler
              // bound by /js/main.js or /js/app.bundle.js.
              form.addEventListener('submit', function(e){
                e.preventDefault();
                if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                doSubmit();
                return false;
              }, true);

              // Also intercept the button click in capture phase, so any
              // other click handler that triggers a request-free-quote
              // redirect never runs.
              btn.addEventListener('click', function(e){
                e.preventDefault();
                if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                doSubmit();
                return false;
              }, true);

              // Auto-open modal when /brochure redirected with ?brochure=1 (also supports /?brochure=1).
              try {
                var params = new URLSearchParams(window.location.search);
                if (params.get('brochure') === '1') {
                  var modal = document.getElementById('brochureModal');
                  if (modal) modal.classList.remove('hide');
                  if (window.history && window.history.replaceState) {
                    params.delete('brochure');
                    var qs = params.toString();
                    var clean = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
                    window.history.replaceState({}, document.title, clean);
                  }
                }
              } catch (_) {}
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