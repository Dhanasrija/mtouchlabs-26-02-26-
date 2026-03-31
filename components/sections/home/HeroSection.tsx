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
//     </div>
//   );
// }
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
//     </div>
//   );
// }
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




// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         .mtl-new-hero {
//           min-height: calc(100vh - 80px);
//           margin-top: 80px;
//           background: linear-gradient(135deg, #eef0fc 0%, #f3f4fb 40%, #ffffff 70%, #f0f2ff 100%);
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           padding: 80px 24px 60px;
//           position: relative;
//           overflow: hidden;
//         }
//         .mtl-new-hero-blob1 {
//           position: absolute; top: -80px; left: -80px;
//           width: 420px; height: 420px;
//           background: radial-gradient(circle, rgba(180,185,255,0.22) 0%, transparent 70%);
//           border-radius: 50%; pointer-events: none;
//         }
//         .mtl-new-hero-blob2 {
//           position: absolute; top: -60px; right: -80px;
//           width: 380px; height: 380px;
//           background: radial-gradient(circle, rgba(160,170,255,0.18) 0%, transparent 70%);
//           border-radius: 50%; pointer-events: none;
//         }
//         .mtl-new-hero-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 28px;
//           position: relative; z-index: 2;
//         }
//         .mtl-new-hero-badge img {
//           height: 64px;
//           width: auto;
//           object-fit: contain;
//         }
//         .mtl-new-hero-badge-text {
//           display: flex;
//           flex-direction: column;
//           align-items: flex-start;
//           font-weight: 700;
//           font-size: 13px;
//           color: #c0392b;
//           letter-spacing: 0.06em;
//           line-height: 1.3;
//         }
//         .mtl-new-hero-badge-text span:first-child {
//           font-size: 18px;
//           font-weight: 900;
//           color: #c0392b;
//         }
//         .mtl-new-hero-h1 {
//           font-size: clamp(36px, 6vw, 76px);
//           font-weight: 600;
//           color: #0a0a1a;
//           line-height: 1.1;
//           letter-spacing: -0.02em;
//           max-width: 900px;
//           margin: 0 auto 20px;
//           position: relative; z-index: 2;
//         }
//         .mtl-new-hero-sub {
//           font-size: clamp(15px, 1.8vw, 18px);
//           color: #555;
//           max-width: 580px;
//           margin: 0 auto 36px;
//           line-height: 1.7;
//           position: relative; z-index: 2;
//         }
//         .mtl-new-hero-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           background: linear-gradient(90deg, #00c8f0, #00a8e0);
//           color: #fff;
//           font-size: 17px;
//           font-weight: 700;
//           padding: 16px 36px;
//           border-radius: 50px;
//           text-decoration: none;
//           position: relative; z-index: 2;
//           box-shadow: 0 8px 28px rgba(0, 180, 230, 0.35);
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .mtl-new-hero-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 14px 36px rgba(0, 180, 230, 0.45);
//           color: #fff;
//         }
//         @keyframes mtlHeroFadeUp {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .mtl-new-hero-badge  { animation: mtlHeroFadeUp 0.5s 0.05s ease both; }
//         .mtl-new-hero-h1     { animation: mtlHeroFadeUp 0.6s 0.15s ease both; }
//         .mtl-new-hero-sub    { animation: mtlHeroFadeUp 0.6s 0.25s ease both; }
//         .mtl-new-hero-btn    { animation: mtlHeroFadeUp 0.6s 0.35s ease both; }

//         @media (max-width: 640px) {
//           .mtl-new-hero { padding: 60px 20px 50px; }
//           .mtl-new-hero-badge img { height: 48px; }
//         }
//       `}} />

//       <section className="mtl-new-hero">
//         <div className="mtl-new-hero-blob1" />
//         <div className="mtl-new-hero-blob2" />

//         {/* Nasscom Award Badge */}
//         <div className="mtl-new-hero-badge">
//           <img
//             src="/images/brand-logo/nasscom.png"
//             alt="Nasscom Award Winner 2026"
//           />
//           <div className="mtl-new-hero-badge-text">
//             <span>nasscom</span>
//             <span>AWARD WINNER 2026</span>
//           </div>
//         </div>

//         {/* Headline */}
//         <h1 className="mtl-new-hero-h1">
//           AI-Driven Software Development<br />
//           for Real-World Impact
//         </h1>

//         {/* Subtitle */}
//         <p className="mtl-new-hero-sub">
//           We design and build intelligent, scalable solutions that solve real
//           business challenges and drive measurable results.
//         </p>

//         {/* CTA Button */}
//         <Link href="/contact-us" className="mtl-new-hero-btn">
//           Get Started
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//             <line x1="5" y1="12" x2="19" y2="12"/>
//             <polyline points="12 5 19 12 12 19"/>
//           </svg>
//         </Link>
//       </section>
//     </>
//   );
// }
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


// import Link from "next/link";

// const CARDS = [
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9793bec9aef0bae6_card.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007eb87553c5aa32934f_card-1.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007dd38878bbefc784aa_card-8.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007db9ab99a268357410_card-3.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e27ef20e6e3edd02e_card-4.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d920bdd6882dc8eb7_card-2.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d21f950db130e28c9_card-6.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9468539ba66cdd61_card-7.avif",
//   "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d1354bb8698409c38_card-5.avif",
// ];

// const ANGLES = [0, 40, 80, 120, 160, 200, 240, 280, 320];

// export default function HeroSection() {
//   return (
//     <section className="hs-section">

//       {/* Sky background — absolute, does not affect layout */}
//       {/* eslint-disable-next-line @next/next/no-img-element */}
//       <img
//         src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6929d3408e9ff6a515b9eee8_ai-hero%20(1).avif"
//         alt=""
//         className="hs-sky-img"
//         aria-hidden="true"
//       />

//       {/* Nasscom badge */}
//       <div className="hs-badge">
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img src="/images/brand-logo/nasscom.png" alt="Nasscom Award" className="hs-badge-img" />
//         <div className="hs-badge-text">
//           <span className="hs-badge-brand">nasscom</span>
//           <span className="hs-badge-sub">AWARD WINNER 2026</span>
//         </div>
//       </div>

//       {/* Heading */}
//       <h1 className="hs-h1">
//         Building the future with
//         <br />
//         <span className="hs-h1-muted">AI and strategy</span>
//       </h1>

//       {/* Subtext */}
//       <p className="hs-sub">
//         We help organizations unlock growth and efficiency through
//         <br />
//         data-driven consulting and intelligent automation.
//       </p>

//       {/* CTA buttons */}
//       <div className="hs-btns">
//         <Link href="/contact-us" className="hs-btn-demo">VIEW DEMO</Link>
//         <Link href="/contact-us" className="hs-btn-cta">
//           GET STARTED
//           <span className="hs-btn-arrow">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
//               stroke="currentColor" strokeWidth="2.5"
//               strokeLinecap="round" strokeLinejoin="round">
//               <line x1="7" y1="17" x2="17" y2="7" />
//               <polyline points="7 7 17 7 17 17" />
//             </svg>
//           </span>
//         </Link>
//       </div>

//       {/*
//         3D Cylinder — pure CSS, zero JS.
//         .hs-3d: height:240px + overflow:hidden clips to arc only
//         .hs-wrap: translateY(-48%) positions arc at top of container
//         .hs-group: animation:hs-spin 18s linear infinite
//         .hs-img3d: 9 slots at 40° intervals, radius 320px
//         .hs-image3d: rotateX(90deg) faces viewer
//       */}
//       <div className="hs-3d">
//         <div className="hs-wrap">
//           <div className="hs-group">
//             {ANGLES.map((angle, i) => (
//               <div
//                 key={i}
//                 className="hs-img3d"
//                 style={{ transform: `rotateZ(${angle}deg) translateY(-320px)` }}
//               >
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img
//                   src={CARDS[i]}
//                   alt=""
//                   className="hs-image3d"
//                   loading="eager"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Rating */}
//       <div className="hs-rating">
//         <p className="hs-rating-text">Rated 4.9/5 by 4.900+ clients</p>
//         <div className="hs-stars">
//           {[1, 2, 3, 4, 5].map((s) => (
//             <svg key={s} width="20" height="20" viewBox="0 0 24 24"
//               fill="#facc15" stroke="#facc15" strokeWidth="0.5">
//               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//             </svg>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }



import Link from "next/link";

const CARDS = [
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9793bec9aef0bae6_card.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007eb87553c5aa32934f_card-1.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007dd38878bbefc784aa_card-8.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007db9ab99a268357410_card-3.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e27ef20e6e3edd02e_card-4.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d920bdd6882dc8eb7_card-2.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007d21f950db130e28c9_card-6.avif",
  "https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a5007e9468539ba66cdd61_card-7.avif",
];

/* 8 slots × 30° apart, radius 260px — confirmed in browser */
const ANGLES = [0, 40, 80, 120, 160, 200];

export default function HeroSection() {
  return (
    <section className="hs-section">

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/6929d3408e9ff6a515b9eee8_ai-hero%20(1).avif"
        alt=""
        className="hs-sky-img"
        aria-hidden="true"
      />

      <div className="hs-badge">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/brand-logo/nasscom.png" alt="Nasscom Award" className="hs-badge-img" />
        <div className="hs-badge-text">
          <span className="hs-badge-brand">nasscom</span>
          <span className="hs-badge-sub">AWARD WINNER 2026</span>
        </div>
      </div>

      <h1 className="hs-h1">
        Building the future with
        <br />
        <span className="hs-h1-muted">AI and strategy</span>
      </h1>

      <p className="hs-sub">
        We help organizations unlock growth and efficiency through
        <br />
        data-driven consulting and intelligent automation.
      </p>

      <div className="hs-btns">
        <Link href="/contact-us" className="hs-btn-demo">VIEW DEMO</Link>
        <Link href="/contact-us" className="hs-btn-cta">
          GET STARTED
          <span className="hs-btn-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </Link>
      </div>

      <div className="hs-3d">
        <div className="hs-wrap">
          <div className="hs-group">
            {ANGLES.map((angle, i) => (
              <div
                key={i}
                className="hs-img3d"
style={{ transform: `rotateZ(${angle}deg) translateY(-260px)` }} // radius 260px
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={CARDS[i]} alt="" className="hs-image3d" loading="eager" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hs-rating">
        <p className="hs-rating-text">Rated 4.9/5 by 4.900+ clients</p>
        <div className="hs-stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg key={s} width="20" height="20" viewBox="0 0 24 24"
              fill="#facc15" stroke="#facc15" strokeWidth="0.5">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
      </div>

    </section>
  );
}