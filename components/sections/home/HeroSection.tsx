// export default function HeroSection() {
//   return (
//     <div className="hero-wrapper">
//       <div
//         dangerouslySetInnerHTML={{
//           __html: `
//             <video id="heroVideo" autoplay muted loop playsinline preload="auto"
//               style="width:100%;height:100%;object-fit:cover;display:block;">
//               <source src="/images/banner/mtouchnew_banner.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           `,
//         }}
//       />

//       <a
//         href="https://wa.me/message/H5VADFWLMPYIM1"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="whatsapp-hero-btn"
//         title="Chat with us on WhatsApp"
//       >
//         <img
//           src="/images/new_home/ai-product-pages/cybersecurity/whatsapp.png"
//           alt="WhatsApp"
//           className="whatsapp-hero-img"
//         />
//         <span className="wa-tooltip">Chat with us!</span>
//       </a>
//     </div>
//   );
// }




export default function HeroSection() {
  return (
    <div className="hero-wrapper">
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <video id="heroVideo" autoplay muted loop playsinline preload="auto"
              style="width:100%;height:100%;object-fit:cover;display:block;">
              <source src="/images/banner/mtouchnew_banner.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          `,
        }}
      />
    </div>
  );
}
// import Script from "next/script";

// export default function HeroSection() {
//   return (
//     <>
//       <section className="sp-hero" id="home">
//         <div className="sp-hero__inner">
//           <div className="sp-hero__badge">
//             <span className="sp-hero__badge-icon">🚀</span>
//             Trusted by Telangana &amp; Abu Dhabi Governments
//             <span className="sp-hero__badge-tag">14+ Years</span>
//           </div>

//           <h1 className="sp-hero__title">
//             Software Development Company<br /><span className="sp-hero__title-grad">&amp; IT Solutions</span>
//           </h1>

//           <p className="sp-hero__desc">
//             From enterprise web apps to AI-powered platforms — mTouch Labs delivers
//             scalable, secure, and high-performance digital solutions trusted
//             by businesses across 20+ countries.
//           </p>

//           <div className="sp-hero__cta-row">
//             <a href="/it-services-digital-transformation-company" className="sp-hero__cta-primary">
//               See Our Services
//             </a>
//             <a href="/contact-us" className="sp-hero__cta-outline">
//               Contact Us
//             </a>
//           </div>
//         </div>

//         {/* ══ Image Showcase — center visible, sides slide in on scroll ══ */}
//         <div className="sp-showcase" id="spShowcase">
//           {/* LEFT PANEL — slides in from left */}
//           <div className="sp-showcase__side sp-showcase__side--left" id="spLeft">
//             <div className="sp-showcase__stat-card">
//               <div className="sp-showcase__stat-num">1500+</div>
//               <div className="sp-showcase__stat-label">Projects delivered<br />worldwide</div>
//               <div className="sp-showcase__stat-img">
//                 <img src="/images/banner/views.webp" alt="Project Views" />
//               </div>
//             </div>
//             <div className="sp-showcase__text-card">
//               <p>We are dedicated to building your <strong>digital products with expertise</strong>, innovation, and a results-driven approach.</p>
//               <a href="/contact-us" className="sp-showcase__link">Get Started →</a>
//             </div>
//           </div>

//           {/* CENTER — big image, always visible */}
//           <div className="sp-showcase__center">
//             <img src="/images/banner/group.webp" alt="mTouch Labs Team Collaboration" className="sp-showcase__center-img" />
//           </div>

//           {/* RIGHT PANEL — slides in from right */}
//           <div className="sp-showcase__side sp-showcase__side--right" id="spRight">
//             <div className="sp-showcase__right-card">
//               <div className="sp-showcase__right-top">
//                 <span className="sp-showcase__badge-num">20+</span>
//                 <div className="sp-showcase__badge-text">Countries<br />we&apos;re serving</div>
//               </div>
//               <div className="sp-showcase__right-img">
//                 <img src="/images/banner/boy.webp" alt="mTouch Labs Developer" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Staggered fade-up for all card sections */}
//       <Script id="homepage-animations" strategy="afterInteractive">{`
//         (function() {
//           var observer = new IntersectionObserver(function(entries) {
//             entries.forEach(function(entry) {
//               if (entry.isIntersecting) {
//                 var cards = entry.target.querySelectorAll('.anim-card');
//                 cards.forEach(function(card, i) {
//                   setTimeout(function() {
//                     card.style.opacity = '1';
//                     card.style.transform = 'translateY(0)';
//                   }, i * 120);
//                 });
//                 observer.unobserve(entry.target);
//               }
//             });
//           }, { threshold: 0.15 });

//           // Only target sections that are NOT hero/showcase
//           document.querySelectorAll('section, [class*="section"], [class*="Section"]').forEach(function(sec) {
//             if (sec.classList.contains('sp-hero') || sec.classList.contains('mh-services-reveal')) return;
//             if (sec.id === 'home') return;
//             var cards = sec.querySelectorAll('[class*="card"], [class*="Card"]');
//             if (cards.length >= 2) {
//               cards.forEach(function(card) {
//                 // Don't override cards that already have specific transforms
//                 if (card.closest('.sp-showcase')) return;
//                 card.classList.add('anim-card');
//                 card.style.opacity = '0';
//                 card.style.transform = 'translateY(40px)';
//                 card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
//               });
//               observer.observe(sec);
//             }
//           });

//           // Showcase — sides slide in only when user scrolls TO the center image
//           var showcase = document.getElementById('spShowcase');
//           var spLeft = document.getElementById('spLeft');
//           var spRight = document.getElementById('spRight');
//           if (showcase && spLeft && spRight) {
//             var revealed = false;
//             function checkShowcase() {
//               if (revealed) return;
//               var rect = showcase.getBoundingClientRect();
//               var winH = window.innerHeight;
//               // Only trigger when the TOP of showcase is at least 40% up from bottom
//               var triggerPoint = winH * 0.6;
//               if (rect.top < triggerPoint) {
//                 revealed = true;
//                 spLeft.classList.add('sp-showcase--visible');
//                 setTimeout(function() {
//                   spRight.classList.add('sp-showcase--visible');
//                 }, 200);
//               }
//             }
//             window.addEventListener('scroll', checkShowcase, { passive: true });
//             // Don't check on load — only on scroll
//           }
//         })();
//       `}</Script>
//     </>
//   );
// }