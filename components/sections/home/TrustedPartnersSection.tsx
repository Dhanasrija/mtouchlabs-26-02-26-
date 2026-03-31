// const logos = [
//   { src: "/images/home/tech/kezad-logo.png", alt: "Kezad Group" },
//   { src: "/images/home/tech/kohere.png", alt: "Kohere" },
//   { src: "/images/home/tech/aduri.png", alt: "Aburi Group" },
//   { src: "/images/home/tech/adjd.png", alt: "ADJD" },
//   { src: "/images/home/tech/govt.png", alt: "Government of Telangana" },
//   { src: "/images/home/tech/zefsci.png", alt: "ZefSci" },
//   { src: "/images/home/tech/uptick.png", alt: "UpTik" },
//   { src: "/images/home/tech/saachi.png", alt: "Saachi" },
//   { src: "/images/home/tech/drpicklogo.png", alt: "Dr Pick" },
//   { src: "/images/home/tech/payville.png", alt: "Payville" },
//   { src: "/images/home/tech/l2r.png", alt: "L2R" },
//   { src: "/images/home/tech/voosh.png", alt: "Voosh" },
//   { src: "/images/home/tech/paygen.png", alt: "Paygen" },
//   { src: "/images/home/tech/omvideos.png", alt: "OM Videos" },
//   { src: "/images/home/tech/onlyshops.png", alt: "OnlyShops" },
//   { src: "/images/home/tech/roboride.png", alt: "RoboRide" },
// ];

// const galleryImages = [
//   { src: "/images/home/home/ban1.webp",            alt: "mTouch Labs AI Innovation" },
//   { src: "/images/banner/team-work.jpg",            alt: "mTouch Labs Team" },
//   { src: "/images/about/nasscom_bg.png",            alt: "Nasscom SME Inspire Award March 2026" },
//   { src: "/images/banner/software-development.jpg", alt: "mTouch Labs Office" },
//   { src: "/images/home/home/ban2.webp",             alt: "mTouch Labs Solutions" },
// ];

// export default function TrustedPartnersSection() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         /* ── Logo Scroll Section ── */
//         .mtl-partners-wrap {
//           background: #fff;
//           padding: 36px 0 0;
//           overflow: hidden;
//         }
//         .mtl-logo-track-outer {
//           overflow: hidden;
//           width: 100%;
//           mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
//           -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
//         }
//         .mtl-logo-track {
//           display: flex;
//           width: max-content;
//           animation: mtlScrollLeft 30s linear infinite;
//           gap: 0;
//         }
//         .mtl-logo-track:hover { animation-play-state: paused; }
//         @keyframes mtlScrollLeft {
//           0%   { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .mtl-logo-item {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           padding: 12px 36px;
//           flex-shrink: 0;
//           border-right: 1px solid #eee;
//         }
//         .mtl-logo-item img {
//           height: 36px;
//           width: auto;
//           max-width: 120px;
//           object-fit: contain;
//           filter: grayscale(100%);
//           opacity: 0.65;
//           transition: filter 0.3s, opacity 0.3s;
//         }
//         .mtl-logo-item img:hover {
//           filter: grayscale(0%);
//           opacity: 1;
//         }

//         /* ── Curved Gallery Section ── */
//         .mtl-gallery-wrap {
//           background: #fff;
//           padding: 40px 0 60px;
//           overflow: hidden;
//         }
//         .mtl-gallery-scene {
//           perspective: 1200px;
//           perspective-origin: 50% 50%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 0;
//           padding: 20px 0;
//           overflow: visible;
//         }
//         .mtl-gallery-item {
//           flex-shrink: 0;
//           width: 280px;
//           height: 340px;
//           border-radius: 16px;
//           overflow: hidden;
//           position: relative;
//           box-shadow: 0 20px 60px rgba(0,0,0,0.18);
//           transition: transform 0.4s cubic-bezier(.22,.68,0,1.2), box-shadow 0.4s, z-index 0s;
//           cursor: pointer;
//         }
//         /* Curve effect — each card rotates on Y axis based on position */
//         .mtl-gallery-item:nth-child(1) {
//           transform: rotateY(28deg) translateX(60px) scale(0.88);
//           z-index: 1;
//           margin-right: -60px;
//         }
//         .mtl-gallery-item:nth-child(2) {
//           transform: rotateY(14deg) translateX(20px) scale(0.94);
//           z-index: 2;
//           margin-right: -40px;
//         }
//         .mtl-gallery-item:nth-child(3) {
//           transform: rotateY(0deg) scale(1);
//           z-index: 5;
//         }
//         .mtl-gallery-item:nth-child(4) {
//           transform: rotateY(-14deg) translateX(-20px) scale(0.94);
//           z-index: 2;
//           margin-left: -40px;
//         }
//         .mtl-gallery-item:nth-child(5) {
//           transform: rotateY(-28deg) translateX(-60px) scale(0.88);
//           z-index: 1;
//           margin-left: -60px;
//         }
//         .mtl-gallery-item:hover {
//           transform: rotateY(0deg) translateX(0) scale(1.06) !important;
//           z-index: 10 !important;
//           box-shadow: 0 30px 80px rgba(0,0,0,0.28);
//           margin: 0 10px !important;
//         }
//         .mtl-gallery-item img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.4s ease;
//         }
//         .mtl-gallery-item:hover img { transform: scale(1.06); }

//         /* Label overlay on center card */
//         .mtl-gallery-item:nth-child(3) .mtl-gallery-label {
//           display: flex;
//         }
//         .mtl-gallery-label {
//           display: none;
//           position: absolute;
//           bottom: 0; left: 0; right: 0;
//           background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%);
//           padding: 28px 16px 16px;
//           flex-direction: column;
//           align-items: flex-start;
//           color: #fff;
//         }
//         .mtl-gallery-label-tag {
//           font-size: 11px;
//           font-weight: 700;
//           letter-spacing: 0.1em;
//           color: rgba(255,255,255,0.75);
//           margin-bottom: 4px;
//         }
//         .mtl-gallery-label-title {
//           font-size: 20px;
//           font-weight: 900;
//           color: #fff;
//           line-height: 1.2;
//         }
//         .mtl-gallery-label-title span {
//           color: #e74c3c;
//           display: block;
//           font-style: italic;
//         }

//         @media (max-width: 768px) {
//           .mtl-gallery-scene {
//             gap: 10px;
//             padding: 10px 16px;
//             overflow-x: auto;
//             justify-content: flex-start;
//           }
//           .mtl-gallery-item {
//             width: 200px !important;
//             height: 250px !important;
//             transform: none !important;
//             margin: 0 !important;
//             flex-shrink: 0;
//           }
//           .mtl-gallery-item:hover {
//             transform: scale(1.04) !important;
//             margin: 0 !important;
//           }
//         }
//       `}} />

//       <section className="mtl-partners-wrap">

//         {/* ── Single Continuous Logo Scroll ── */}
//         <div className="mtl-logo-track-outer">
//           <div className="mtl-logo-track">
//             {/* First set */}
//             {logos.map((logo, i) => (
//               <div className="mtl-logo-item" key={`a-${i}`}>
//                 <img src={logo.src} alt={logo.alt} loading="lazy" />
//               </div>
//             ))}
//             {/* Duplicate for infinite loop */}
//             {logos.map((logo, i) => (
//               <div className="mtl-logo-item" key={`b-${i}`}>
//                 <img src={logo.src} alt={logo.alt} loading="lazy" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── Curved Perspective Image Gallery ── */}
//         <div className="mtl-gallery-wrap">
//           <div className="mtl-gallery-scene">
//             {galleryImages.map((img, i) => (
//               <div className="mtl-gallery-item" key={i}>
//                 <img src={img.src} alt={img.alt} loading={i === 2 ? "eager" : "lazy"} />
//                 {/* Label only shown on center card via CSS */}
//                 <div className="mtl-gallery-label">
//                   <div className="mtl-gallery-label-tag">MARCH 2026</div>
//                   <div className="mtl-gallery-label-title">
//                     <span>nasscom</span>
//                     SME INSPIRE
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </section>
//     </>
//   );
// }




const logos = [
  { src: "/images/home/tech/kezad-logo.png", alt: "Kezad Group" },
  { src: "/images/home/tech/kohere.png",     alt: "Kohere" },
  { src: "/images/home/tech/aduri.png",      alt: "Aburi Group" },
  { src: "/images/home/tech/adjd.png",       alt: "ADJD" },
  { src: "/images/home/tech/govt.png",       alt: "Government of Telangana" },
  { src: "/images/home/tech/zefsci.png",     alt: "ZefSci" },
  { src: "/images/home/tech/uptick.png",     alt: "UpTik" },
  { src: "/images/home/tech/saachi.png",     alt: "Saachi" },
  { src: "/images/home/tech/drpicklogo.png", alt: "Dr Pick" },
  { src: "/images/home/tech/payville.png",   alt: "Payville" },
  { src: "/images/home/tech/l2r.png",        alt: "L2R" },
  { src: "/images/home/tech/voosh.png",      alt: "Voosh" },
  { src: "/images/home/tech/paygen.png",     alt: "Paygen" },
  { src: "/images/home/tech/omvideos.png",   alt: "OM Videos" },
  { src: "/images/home/tech/onlyshops.png",  alt: "OnlyShops" },
  { src: "/images/home/tech/roboride.png",   alt: "RoboRide" },
];

// 8 images duplicated = long enough for seamless infinite scroll
const galleryImages = [
  { src: "/images/home/home/ban1.webp",             alt: "AI Innovation" },
  { src: "/images/banner/team-work.jpg",             alt: "mTouch Labs Team" },
  { src: "/images/about/nasscom_bg.png",             alt: "Nasscom SME Inspire 2026" },
  { src: "/images/banner/software-development.jpg",  alt: "Software Development" },
  { src: "/images/home/home/ban2.webp",              alt: "mTouch Labs Solutions" },
  { src: "/images/banner/office.jpg",                alt: "mTouch Labs Office" },
  { src: "/images/home/home/ban3.webp",              alt: "Enterprise Solutions" },
  { src: "/images/banner/saas-concept-collage.jpg",  alt: "SaaS Platform" },
];

export default function TrustedPartnersSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        /* ════════════════════════════
           LOGO SCROLL
        ════════════════════════════ */
        .mtl-partners-wrap {
          background: #fff;
          padding: 36px 0 0;
          overflow: hidden;
        }
        .mtl-logo-track-outer {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .mtl-logo-track {
          display: flex;
          width: max-content;
          animation: mtlScrollLeft 32s linear infinite;
        }
        .mtl-logo-track:hover { animation-play-state: paused; }
        @keyframes mtlScrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .mtl-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 36px;
          flex-shrink: 0;
          border-right: 1px solid #eee;
        }
        .mtl-logo-item img {
          height: 36px;
          width: auto;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.6;
          transition: filter 0.3s, opacity 0.3s;
        }
        .mtl-logo-item img:hover { filter: grayscale(0%); opacity: 1; }

        /* ════════════════════════════
           CONCAVE SCROLLING GALLERY
        ════════════════════════════ */
        .mtl-cgallery-wrap {
          background: #fff;
          padding: 48px 0 64px;
          /* perspective applied here so rotateY works in 3D space */
          perspective: 1000px;
          perspective-origin: 50% 50%;
          overflow: hidden;
        }
        .mtl-cgallery-track {
          display: flex;
          align-items: center;
          width: max-content;
          /* transform-style so child rotateY is in 3D space */
          transform-style: preserve-3d;
          will-change: transform;
          gap: 20px;
          padding: 20px 40px;
        }
        .mtl-cgallery-card {
          flex-shrink: 0;
          width: 260px;
          height: 320px;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.2);
          position: relative;
          /* rotateY is set by JS each frame */
          transform-origin: center center;
          will-change: transform;
          transition: box-shadow 0.3s;
          cursor: pointer;
        }
        .mtl-cgallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          pointer-events: none;
        }
        /* Gradient overlay on all cards */
        .mtl-cgallery-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 55%);
          border-radius: 18px;
        }
        /* Nasscom label — only on nasscom card (3rd) */
        .mtl-cgallery-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 24px 16px 16px;
          z-index: 2;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%);
          border-radius: 0 0 18px 18px;
        }
        .mtl-cgallery-label-month {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.8);
          margin-bottom: 3px;
        }
        .mtl-cgallery-label-name {
          font-size: 22px;
          font-weight: 900;
          color: #fff;
          line-height: 1.1;
        }
        .mtl-cgallery-label-name span {
          color: #e74c3c;
          font-style: italic;
          display: block;
        }
      `}} />

      <section className="mtl-partners-wrap">

        {/* ── Continuous Logo Scroll ── */}
        <div className="mtl-logo-track-outer">
          <div className="mtl-logo-track">
            {logos.map((l, i) => (
              <div className="mtl-logo-item" key={`a${i}`}>
                <img src={l.src} alt={l.alt} loading="lazy" />
              </div>
            ))}
            {logos.map((l, i) => (
              <div className="mtl-logo-item" key={`b${i}`}>
                <img src={l.src} alt={l.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Concave Scrolling Gallery ── */}
        <div className="mtl-cgallery-wrap" id="mtl-cgallery-wrap">
          <div className="mtl-cgallery-track" id="mtl-cgallery-track">
            {/* Render 3 sets so infinite loop looks seamless */}
            {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
              <div className="mtl-cgallery-card" key={i}>
                <img src={img.src} alt={img.alt} loading={i < 8 ? "eager" : "lazy"} />
                {/* Nasscom label on every 3rd card (index 2, 10, 18 ...) */}
                {i % galleryImages.length === 2 && (
                  <div className="mtl-cgallery-label">
                    <div className="mtl-cgallery-label-month">MARCH 2026</div>
                    <div className="mtl-cgallery-label-name">
                      <span>nasscom</span>
                      SME INSPIRE
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── Concave Scroll Engine (vanilla JS, SSR-safe) ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initConcave() {
            var wrap  = document.getElementById('mtl-cgallery-wrap');
            var track = document.getElementById('mtl-cgallery-track');
            if (!wrap || !track) return setTimeout(initConcave, 200);

            var x       = 0;
            var speed   = 0.8;        // px per frame — tweak for faster/slower
            var paused  = false;
            var maxRot  = 42;         // max rotateY degrees at the edges

            function getCards() {
              return Array.from(track.querySelectorAll('.mtl-cgallery-card'));
            }

            function applyCurve() {
              var wrapRect  = wrap.getBoundingClientRect();
              var centerX   = wrapRect.left + wrapRect.width / 2;
              var halfW     = wrapRect.width / 2;

              getCards().forEach(function(card) {
                var rect    = card.getBoundingClientRect();
                var cardCX  = rect.left + rect.width / 2;
                var dist    = cardCX - centerX;          // negative = left, positive = right
                var ratio   = dist / halfW;              // -1 … +1
                var clamped = Math.max(-1, Math.min(1, ratio));

                // concave: right cards lean right-edge away, left cards lean left-edge away
                var rotY    = clamped * -maxRot;
                // subtle scale — cards at edges appear slightly smaller
                var scale   = 1 - Math.abs(clamped) * 0.12;

                card.style.transform = 'rotateY(' + rotY + 'deg) scale(' + scale + ')';
                card.style.zIndex    = Math.round((1 - Math.abs(clamped)) * 10).toString();
              });
            }

            function tick() {
              if (!paused) {
                x -= speed;
                // reset when first set has fully scrolled out
                var oneSetWidth = track.scrollWidth / 3;
                if (Math.abs(x) >= oneSetWidth) x = 0;
                track.style.transform = 'translateX(' + x + 'px)';
              }
              applyCurve();
              requestAnimationFrame(tick);
            }

            wrap.addEventListener('mouseenter', function() { paused = true; });
            wrap.addEventListener('mouseleave', function() { paused = false; });

            requestAnimationFrame(tick);
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initConcave);
          } else {
            initConcave();
          }
        })();
      `}} />
    </>
  );
}
