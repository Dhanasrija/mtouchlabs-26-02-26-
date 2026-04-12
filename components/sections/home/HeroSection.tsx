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
// import Link from "next/link";

// const carouselImages = [
//   { src: "/images/home/home/fintech.png", alt: "Fintech App" },
//   { src: "/images/home/home/hotel.png", alt: "Hotel Management" },
//   { src: "/images/home/home/taxi.png", alt: "Taxi App" },
//   { src: "/images/home/home/retail.png", alt: "Retail Platform" },
//   { src: "/images/home/home/realstate.png", alt: "Real Estate" },
//   { src: "/images/home/home/food.png", alt: "Food Delivery" },
//   { src: "/images/home/home/sports.png", alt: "Sports App" },
//   { src: "/images/home/home/goverment.png", alt: "Government Portal" },
//   { src: "/images/home/home/ban2.webp", alt: "Enterprise Solution" },
//   { src: "/images/home/home/ban3.webp", alt: "Digital Platform" },
// ];

// export default function HeroSection() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         .mtl-hero {
//           background: linear-gradient(150deg, #dff0d4 0%, #edf7e6 25%, #f7fbf4 55%, #ffffff 80%, #f5f5f5 100%);
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           position: relative;
//           overflow: hidden;
//           padding-top: 110px;
//           padding-bottom: 48px;
//         }
//         .mtl-hero-blob1 {
//           position: absolute; top: -140px; right: -100px;
//           width: 520px; height: 520px;
//           background: radial-gradient(circle, rgba(130,210,80,0.16) 0%, transparent 70%);
//           border-radius: 50%; pointer-events: none;
//         }
//         .mtl-hero-blob2 {
//           position: absolute; bottom: 60px; left: -100px;
//           width: 380px; height: 380px;
//           background: radial-gradient(circle, rgba(90,180,50,0.10) 0%, transparent 70%);
//           border-radius: 50%; pointer-events: none;
//         }
//         .mtl-hero-top {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//           padding: 0 5vw;
//           position: relative; z-index: 2;
//           gap: 24px;
//         }
//         .mtl-hero-left { max-width: 320px; padding-top: 8px; flex-shrink: 0; }
//         .mtl-hero-badge {
//           display: inline-flex; align-items: center; gap: 8px;
//           font-size: 13px; font-weight: 700; color: #2a6010;
//           letter-spacing: 0.04em; margin-bottom: 16px;
//         }
//         .mtl-hero-sub {
//           font-size: 15px; color: #555; line-height: 1.75;
//           font-family: Georgia, serif;
//         }
//         .mtl-hero-headline { flex: 1; padding: 0 1vw; }
//         .mtl-hero-h1 {
//           font-size: clamp(52px, 7.5vw, 118px);
//           font-weight: 900; line-height: 0.9;
//           letter-spacing: -0.035em; color: #0b1508;
//           font-family: Georgia, 'Times New Roman', serif;
//           margin: 0;
//         }
//         .mtl-hero-h1 .line { display: block; }
//         .mtl-hero-right { flex-shrink: 0; padding-top: 16px; }
//         .mtl-talk-btn {
//           width: 126px; height: 126px;
//           background: #7ecb3f; border-radius: 50%;
//           display: flex; flex-direction: column;
//           align-items: center; justify-content: center;
//           text-decoration: none; color: #0b1508;
//           font-weight: 800; font-size: 14px; gap: 5px;
//           box-shadow: 0 8px 28px rgba(90,180,40,0.28);
//           transition: transform 0.3s, background 0.3s;
//         }
//         .mtl-talk-btn:hover { transform: scale(1.08); background: #69b82c; color: #0b1508; }
//         .mtl-talk-arr { transform: rotate(-45deg); display: block; }
//         .mtl-hero-h1-line2 { padding: 0 5vw; position: relative; z-index: 2; margin-top: 4px; }

//         /* ── Dark concave band ── */
//         .mtl-band {
//           background: #0e1a0b;
//           margin: 28px 5vw 0;
//           border-radius: 28px;
//           overflow: hidden;
//           position: relative; z-index: 2;
//           padding: 32px 0 28px;
//         }
//         .mtl-band::before, .mtl-band::after {
//           content: '';
//           position: absolute; left: 0; right: 0; height: 60px;
//           pointer-events: none; z-index: 4;
//         }
//         .mtl-band::before {
//           top: 0;
//           background: linear-gradient(to bottom, rgba(14,26,11,0.9) 0%, transparent 100%);
//         }
//         .mtl-band::after {
//           bottom: 0;
//           background: linear-gradient(to top, rgba(14,26,11,0.9) 0%, transparent 100%);
//         }
//         .mtl-carousel-wrap { overflow: hidden; width: 100%; }
//         .mtl-carousel-track {
//           display: flex; gap: 18px;
//           will-change: transform;
//           padding: 8px 24px;
//         }
//         .mtl-carousel-item {
//           flex-shrink: 0;
//           width: 210px;
//           border-radius: 18px;
//           overflow: hidden;
//           position: relative;
//           cursor: zoom-in;
//           transform: perspective(700px) rotateX(8deg) scaleY(0.95);
//           transition: transform 0.38s cubic-bezier(.22,.68,0,1.2), box-shadow 0.38s;
//           box-shadow: 0 10px 36px rgba(0,0,0,0.5);
//         }
//         .mtl-carousel-item:nth-child(odd)  { height: 260px; margin-top: 0; }
//         .mtl-carousel-item:nth-child(even) { height: 220px; margin-top: 28px; }
//         .mtl-carousel-item:hover {
//           transform: perspective(700px) rotateX(0deg) scaleY(1) scale(1.1);
//           box-shadow: 0 22px 56px rgba(0,0,0,0.65);
//           z-index: 5;
//         }
//         .mtl-carousel-item img {
//           width: 100%; height: 100%;
//           object-fit: cover; display: block;
//           transition: transform 0.4s ease;
//         }
//         .mtl-carousel-item:hover img { transform: scale(1.12); }

//         /* ── Stats ── */
//         .mtl-stats-row {
//           display: flex; align-items: center; gap: 40px;
//           padding: 32px 5vw 0; position: relative; z-index: 2;
//           flex-wrap: wrap;
//         }
//         .mtl-stat-num {
//           font-size: 36px; font-weight: 900; color: #0b1508;
//           letter-spacing: -0.02em; font-family: Georgia, serif; line-height: 1;
//         }
//         .mtl-stat-label { font-size: 12px; color: #777; margin-top: 4px; }
//         .mtl-divider { width: 1px; height: 44px; background: #ddd; flex-shrink: 0; }
//         .mtl-cta-row { margin-left: auto; display: flex; gap: 12px; align-items: center; }
//         .mtl-btn-dark {
//           background: #0b1508; color: #fff; border: none;
//           padding: 13px 26px; border-radius: 50px;
//           font-size: 14px; font-weight: 700; cursor: pointer;
//           text-decoration: none; display: inline-flex;
//           align-items: center; gap: 8px;
//           transition: background 0.2s, transform 0.2s;
//         }
//         .mtl-btn-dark:hover { background: #2a6010; transform: translateY(-2px); color: #fff; }
//         .mtl-btn-ghost {
//           background: transparent; color: #0b1508;
//           border: 2px solid #0b1508; padding: 11px 24px;
//           border-radius: 50px; font-size: 14px; font-weight: 700;
//           text-decoration: none; display: inline-flex;
//           align-items: center; gap: 8px;
//           transition: all 0.2s;
//         }
//         .mtl-btn-ghost:hover { background: #0b1508; color: #fff; transform: translateY(-2px); }

//         /* ── Lightbox ── */
//         .mtl-lightbox {
//           display: none; position: fixed;
//           inset: 0; z-index: 9999;
//           background: rgba(0,0,0,0.92);
//           align-items: center; justify-content: center;
//           backdrop-filter: blur(8px);
//         }
//         .mtl-lightbox.open { display: flex; }
//         .mtl-lightbox-img {
//           max-width: 90vw; max-height: 88vh;
//           border-radius: 16px;
//           box-shadow: 0 24px 80px rgba(0,0,0,0.8);
//           animation: mtlZoomIn 0.32s cubic-bezier(.22,.68,0,1.2) both;
//           object-fit: contain;
//         }
//         @keyframes mtlZoomIn {
//           from { opacity: 0; transform: scale(0.65); }
//           to   { opacity: 1; transform: scale(1); }
//         }
//         .mtl-lightbox-close {
//           position: fixed; top: 24px; right: 32px;
//           font-size: 44px; color: #fff; cursor: pointer;
//           line-height: 1; background: none; border: none;
//           font-family: sans-serif; opacity: 0.75;
//           transition: opacity 0.2s;
//         }
//         .mtl-lightbox-close:hover { opacity: 1; }

//         /* ── Entrance anims ── */
//         @keyframes mtlUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .mtl-hero-badge  { animation: mtlUp 0.55s 0.05s ease both; }
//         .mtl-hero-sub    { animation: mtlUp 0.55s 0.12s ease both; }
//         .mtl-hero-h1     { animation: mtlUp 0.65s 0.08s ease both; }
//         .mtl-hero-h1-line2 .mtl-hero-h1 { animation: mtlUp 0.65s 0.18s ease both; }
//         .mtl-talk-btn    { animation: mtlUp 0.65s 0.22s ease both; }
//         .mtl-band        { animation: mtlUp 0.75s 0.28s ease both; }
//         .mtl-stats-row   { animation: mtlUp 0.65s 0.38s ease both; }

//         @media (max-width: 860px) {
//           .mtl-hero-top { flex-direction: column; align-items: center; text-align: center; }
//           .mtl-hero-left { max-width: 100%; }
//           .mtl-hero-right { display: flex; justify-content: center; width: 100%; }
//           .mtl-band { margin: 20px 12px 0; }
//           .mtl-carousel-item { width: 150px; }
//           .mtl-carousel-item:nth-child(odd)  { height: 190px; }
//           .mtl-carousel-item:nth-child(even) { height: 160px; margin-top: 22px; }
//           .mtl-stats-row { gap: 20px; padding: 24px 16px 0; }
//           .mtl-cta-row { margin-left: 0; width: 100%; justify-content: center; }
//           .mtl-divider { display: none; }
//         }
//       `}} />

//       <section className="mtl-hero">
//         <div className="mtl-hero-blob1" />
//         <div className="mtl-hero-blob2" />

//         {/* Top row */}
//         <div className="mtl-hero-top">
//           <div className="mtl-hero-left">
//             <div className="mtl-hero-badge">
//               <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
//                 <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#2a6010"/>
//               </svg>
//               Let&apos;s build your future
//             </div>
//             <p className="mtl-hero-sub">
//               Trusted by 200+ businesses worldwide. We craft digital solutions that drive real growth — from startups to enterprises.
//             </p>
//           </div>

//           <div className="mtl-hero-headline">
//             <h1 className="mtl-hero-h1">
//               <span className="line">Software</span>
//               <span className="line">Development</span>
//             </h1>
//           </div>

//           <div className="mtl-hero-right">
//             <Link href="/contact-us" className="mtl-talk-btn">
//               <span>Let&apos;s talk</span>
//               <svg className="mtl-talk-arr" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
//               </svg>
//             </Link>
//           </div>
//         </div>

//         {/* Second headline */}
//         <div className="mtl-hero-h1-line2">
//           <h1 className="mtl-hero-h1">
//             <span className="line">Company &amp; IT Solutions</span>
//           </h1>
//         </div>

//         {/* Dark concave carousel band */}
//         <div className="mtl-band">
//           <div className="mtl-carousel-wrap">
//             <div className="mtl-carousel-track" id="mtlTrack">
//               {carouselImages.map((img, i) => (
//                 <div
//                   className="mtl-carousel-item"
//                   key={i}
//                   data-src={img.src}
//                   data-alt={img.alt}
//                 >
//                   {/* eslint-disable-next-line @next/next/no-img-element */}
//                   <img src={img.src} alt={img.alt} loading={i < 4 ? "eager" : "lazy"} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Stats + CTA */}
//         <div className="mtl-stats-row">
//           <div>
//             <div className="mtl-stat-num">200+</div>
//             <div className="mtl-stat-label">Projects Delivered</div>
//           </div>
//           <div className="mtl-divider" />
//           <div>
//             <div className="mtl-stat-num">13+</div>
//             <div className="mtl-stat-label">Years Experience</div>
//           </div>
//           <div className="mtl-divider" />
//           <div>
//             <div className="mtl-stat-num">50+</div>
//             <div className="mtl-stat-label">Expert Engineers</div>
//           </div>
//           <div className="mtl-divider" />
//           <div>
//             <div className="mtl-stat-num">4.9★</div>
//             <div className="mtl-stat-label">Client Rating</div>
//           </div>
//           <div className="mtl-cta-row">
//             <Link href="/contact-us" className="mtl-btn-dark">
//               Get a Free Quote
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
//               </svg>
//             </Link>
//             <Link href="/portfolio" className="mtl-btn-ghost">View Our Work</Link>
//           </div>
//         </div>
//       </section>

//       {/* Lightbox */}
//       <div className="mtl-lightbox" id="mtlLightbox">
//         <button className="mtl-lightbox-close" id="mtlLbClose">&times;</button>
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img className="mtl-lightbox-img" id="mtlLbImg" src="" alt="" />
//       </div>

//       {/* Carousel + Lightbox — pure vanilla JS, SSR safe */}
//       <script dangerouslySetInnerHTML={{ __html: `
//         (function() {
//           function init() {
//             var track   = document.getElementById('mtlTrack');
//             var lb      = document.getElementById('mtlLightbox');
//             var lbImg   = document.getElementById('mtlLbImg');
//             var lbClose = document.getElementById('mtlLbClose');
//             if (!track || !lb) return;

//             /* Clone for infinite scroll */
//             Array.from(track.children).forEach(function(el) {
//               track.appendChild(el.cloneNode(true));
//             });

//             /* Auto-scroll */
//             var x = 0;
//             var paused = false;
//             var speed = 0.55;

//             function tick() {
//               if (!paused) {
//                 x -= speed;
//                 if (Math.abs(x) >= track.scrollWidth / 2) x = 0;
//                 track.style.transform = 'translateX(' + x + 'px)';
//               }
//               requestAnimationFrame(tick);
//             }
//             requestAnimationFrame(tick);

//             track.addEventListener('mouseenter', function() { paused = true; });
//             track.addEventListener('mouseleave', function() { paused = false; });

//             /* Click to zoom */
//             track.addEventListener('click', function(e) {
//               var item = e.target.closest('.mtl-carousel-item');
//               if (!item) return;
//               lbImg.src = item.getAttribute('data-src');
//               lbImg.alt = item.getAttribute('data-alt') || '';
//               lb.classList.add('open');
//               document.body.style.overflow = 'hidden';
//             });

//             function closeLb() {
//               lb.classList.remove('open');
//               lbImg.src = '';
//               document.body.style.overflow = '';
//             }

//             lbClose.addEventListener('click', closeLb);
//             lb.addEventListener('click', function(e) { if (e.target === lb) closeLb(); });
//             document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLb(); });
//           }

//           if (document.readyState === 'loading') {
//             document.addEventListener('DOMContentLoaded', init);
//           } else {
//             init();
//           }
//         })();
//       `}} />
//     </>
//   );
// }