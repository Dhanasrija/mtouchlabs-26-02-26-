// const Stars = () => (
//   <div className="testimonial-stars">
//     <span className="star">★</span>
//     <span className="star">★</span>
//     <span className="star">★</span>
//     <span className="star">★</span>
//     <span className="star">★</span>
//   </div>
// );

// const testimonials = [
//   {
//     flag: "/images/testimonial/testimonial_ind.png",
//     flagAlt: "India flag",
//     text: "Have partnered with mTouch Labs for the development of the Sacchi application, and I'm pleased to share that the project went exceptionally well from start to finish.",
//     name: "Pavan HK",
//     role: "General Manager",
//     logo: "/images/testimonial/testimonial_saachi.png",
//     logoAlt: "Sacchi logo",
//     aos: "zoom-out-right",
//   },
//   {
//     flag: "/images/testimonial/testimonial_abudabhi.png",
//     flagAlt: "UAE flag",
//     text: "mTouch Labs transformed our parking operations with the Rahayel System. It's efficient, reliable, and perfectly suited to our needs. The team was professional and proactive.",
//     name: "Kezad Groups",
//     role: "CEO",
//     logo: "/images/testimonial/testimonial_rahayel.png",
//     logoAlt: "Rahayel logo",
//     aos: "zoom-out",
//   },
//   {
//     flag: "/images/testimonial/testimonial_ind.png",
//     flagAlt: "India flag",
//     text: "mTouch Labs made the Dr.Pick App development seamless. They understood our healthcare vision and delivered an intuitive, and patient-friendly platform with great commitment and timely execution.",
//     name: "Dr.Vishnu",
//     role: "Managing Director",
//     logo: "/images/testimonial/drpick.png",
//     logoAlt: "Dr Pick logo",
//     aos: "zoom-out-left",
//   },
// ];

// export default function TestimonialSection() {
//   return (
//     <section className="testimonial-section">
//       <div className="testimonial-container">
//         <div className="testimonial-header">
//           <p className="testimonial-label">TESTIMONIAL</p>
//           <h2 className="testimonial-title" data-aos="fade-right">What people think about us</h2>
//           <p className="testimonial-subtitle" data-aos="fade-left">
//             Their professionalism and commitment to our success were evident throughout the entire process.
//           </p>
//         </div>

//         <div className="testimonial-cards owl-carousel">
//           {testimonials.map((t, i) => (
//             <div className="testimonial-card" data-aos={t.aos} key={i}>
//               <div className="testimonial-flag">
//                 <img src={t.flag} alt={t.flagAlt} />
//               </div>
//               <div className="testimonial-content">
//                 <Stars />
//                 <p className="testimonial-text">{t.text}</p>
//                 <div className="testimonial-author">
//                   <div className="author-left">
//                     <p className="author-name">{t.name}</p>
//                     <p className="author-company">{t.role}</p>
//                   </div>
//                   <div className="author-logo">
//                     <img src={t.logo} alt={t.logoAlt} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="testimonial-stat">
//           <span className="stat-number">1500+</span>
//           <span className="stat-text">Successful Projects</span>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef } from "react";

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&q=80",
    logo: "LOGOIPSUM",
    quote:
      "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions that transformed the way we work.",
    name: "John Doe",
    company: "Tech Innovations",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    logo: "LOQO",
    quote:
      "An incredible team that overcame every hurdle, opening new paths and creating highly effective solutions we never thought possible.",
    name: "Sarah Miller",
    company: "Scale Ventures",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
    logo: "LOGO",
    quote:
      "They understood our requirements, cutting through noise and providing truly exceptional work that exceeded all our expectations.",
    name: "Marcus Chen",
    company: "GrowthBase",
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&q=80",
    logo: "IPSUM",
    quote:
      "They solved our toughest puzzles, removing bottlenecks and delivering brilliant results that made our product shine.",
    name: "Priya Sharma",
    company: "NovaBuild",
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    logo: "BRAND",
    quote:
      "Exceptional delivery from start to finish. Their commitment to quality and speed gave us a massive competitive edge in the market.",
    name: "Alex Torres",
    company: "Edge Systems",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 400 : -400, behavior: "smooth" });
  };

  return (
    <section className="testi-section">
      <div className="testi-container">

        {/* Header row */}
        <div className="testi-header-row">
          <div className="testi-header-left">
            <p className="testi-eyebrow">
              <span className="testi-eyebrow-dot" />
              TESTIMONIALS
            </p>
            <h2 className="testi-heading">
              <span className="testi-heading-highlight">What they say</span>{" "}
              about us?
            </h2>
            <p className="testi-subheading">
              Here&apos;s what they shared about their experience working with our team.
            </p>
          </div>
          <div className="testi-nav-btns">
            <button className="testi-nav-btn" onClick={() => scroll("left")} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className="testi-nav-btn" onClick={() => scroll("right")} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable cards strip */}
        <div className="testi-scroll-wrap" ref={scrollRef}>
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              {/* Full-bleed photo background */}
              <img
                className="testi-card-photo"
                src={t.image}
                alt={t.name}
              />

              {/* Dark gradient overlay */}
              <div className="testi-card-overlay" />

              {/* Logo top-left */}
              <div className="testi-card-logo">{t.logo}</div>

              {/* Quote bottom */}
              <div className="testi-card-bottom">
                <div className="testi-quote-mark">&ldquo;&rdquo;</div>
                <p className="testi-quote-text">{t.quote}</p>
                <p className="testi-card-name">- {t.name}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}