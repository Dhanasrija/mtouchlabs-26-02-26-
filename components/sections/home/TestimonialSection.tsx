// import React from "react";
// import { BlurText } from "@/components/sections/home/ui/BlurText";
// import TestimonialCarousel from "./ui/TestimonialCarousel";

// const testimonials = [
//   {
//     image: "/images/home/testmonial/image 6929.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "Partnered with mTouch Labs to develop the Sacchi application, and the project was successfully delivered end-to-end.",
//     name: "Rohit",
//     company: "Founder",
//   },
//   {
//     image: "/images/home/testmonial/image 6930.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "mTouch Labs transformed our parking operations with the efficient and reliable Rahayel System.",
//     name: "CEO",
//     company: "Rahayel",
//   },
//   {
//     image: "/images/home/testmonial/image 6931.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "mTouch Labs built the Dr.Pick App seamlessly with great commitment and timely delivery.",
//     name: "Dr Gowardhan",
//     company: "Dr.Pick",
//   },
//   {
//     image: "/images/home/testmonial/image 6929.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "Partnered with mTouch Labs to develop the Sacchi application, and the project was successfully delivered end-to-end.",
//     name: "Rohit",
//     company: "Founder",
//   },
//   {
//     image: "/images/home/testmonial/image 6930.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "mTouch Labs transformed our parking operations with the efficient and reliable Rahayel System.",
//     name: "CEO",
//     company: "Rahayel",
//   },
//   {
//     image: "/images/home/testmonial/image 6931.png",
//     icon: "/images/home/testmonial/quots-icon.webp",
//     quote:
//       "mTouch Labs built the Dr.Pick App seamlessly with great commitment and timely delivery.",
//     name: "Dr Gowardhan",
//     company: "Dr.Pick",
//   },
// ];

// export default function TestimonialSection() {
//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes testiFadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to   { opacity: 1; transform: translateY(0);    }
//         }
//         .testi-scroll-wrap {
//           scroll-snap-type: x mandatory;
//           -webkit-overflow-scrolling: touch;
//         }
//         .testi-card {
//           scroll-snap-align: start;
//           opacity: 0;
//         }

//         .testi-card-enter {
//           animation: testiFadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
//         }

//         .testi-eyebrow {
//           font-family: 'Inter', sans-serif;
//           font-weight: 500;
//           font-size: 16px;
//           line-height: 22.4px;
//           letter-spacing: 1.92px;
//           text-transform: uppercase;
//           color: #1A1A1A;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           margin-bottom: 20px;
//         }

//         .testi-eyebrow-dot {
//           width: 5px;
//           height: 5px;
//           background-color: #1A1A1A;
//           border-radius: 50%;
//         }

//         .testi-heading {
//           font-family: 'Inter', sans-serif;
//           font-weight: 700;
//           font-size: 48px;
//           line-height: 57.6px;
//           letter-spacing: -2.88px;
//           color: #1A1A1A;
//           margin-bottom: 24px;
//         }

//         .testi-subheading {
//           font-family: 'Inter', sans-serif;
//           font-weight: 400;
//           font-size: 20px;
//           line-height: 22.4px;
//           letter-spacing: -0.32px;
//           color: #585858;
//           max-width: 600px;
//         }

//         .testi-quote-text {
//           font-family: 'Inter', sans-serif;
//           font-weight: 400;
//           font-size: 20px;
//           line-height: 30px;
//           letter-spacing: -0.4px;
//           color: #FFFFFF;
//           display: block;
//         }

//         .testi-quote-icon {
//           width: 38px;
//           height: auto;
//           margin-bottom: 8px;
//           display: block;
//         }

//         .testi-card-name {
//           font-family: 'Inter', sans-serif;
//           font-weight: 400;
//           font-size: 14px;
//           color: #E5E7EB;
//           text-align: right;
//           margin-top: 12px;
//         }

//         .testi-card-bottom {
//           padding: 0 22px 15px;
//         }

//         .testi-nav-btns-container {
//            display: flex;
//            justify-content: flex-end;
//         }

//         .testi-nav-btns {
//           display: flex;
//           gap: 15px;
//           margin-top: 20px;
//         }

//         .testi-nav-btn {
//           cursor: pointer;
//           background: #F3F4F6;
//           border: none;
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .testi-nav-btn:hover {
//           background-color: #3E8CFB;
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(62, 140, 251, 0.3);
//         }

//         .testi-nav-btn:hover .testi-nav-icon {
//           filter: brightness(0) invert(1);
//         }

//         .testi-nav-icon {
//           width: 22px;
//           height: 22px;
//           object-fit: contain;
//           transition: filter 0.3s ease;
//         }

//         @media (max-width: 1024px) {
//           .testi-heading {
//             font-size: 36px;
//             line-height: 44px;
//             letter-spacing: -1.5px;
//           }
//           .testi-subheading {
//             font-size: 18px;
//             line-height: 24px;
//           }
//         }

//         @media (max-width: 768px) {
//           .testi-section {
//             padding: 60px 0;
//           }
//           .testi-header-row {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 20px;
//           }
//           .testi-heading {
//             font-size: 28px;
//             line-height: 34px;
//             letter-spacing: -1px;
//             margin-bottom: 5px;
//           }
//           .testi-subheading {
//             font-size: 16px;
//             line-height: 22px;
//           }
//           .testi-quote-text {
//             font-size: 16px;
//             line-height: 24px;
//           }
//           .testi-quote-icon {
//             width: 32px;
//           }
//           .testi-nav-btns {
//             margin-top: 10px;
//           }
//         }
//       `}} />

//       <section className="testi-section">
//         <div className="testi-container">
//           <div className="testi-header-row">
//             <div className="testi-header-left">
//               <p className="testi-eyebrow">
//                 <BlurText text="• TESTIMONIALS" delay={0} />
//               </p>
//               <h2 className="testi-heading">
//                 <BlurText text="What they say" delay={0.2} style={{ color: "#3E8CFB", display: "inline-block" }} />
//                 {" "}
//                 <BlurText text="about us?" delay={0.6} style={{ display: "inline-block" }} />
//               </h2>
//               <div className="testi-subheading">
//                 <BlurText text="Here's what they shared about their experience" delay={1} />
//                 <br />
//                 <BlurText text="working with our team." delay={1} />
//               </div>
//             </div>
//           </div>

//           <TestimonialCarousel testimonials={testimonials} />
//         </div>
//       </section>
//     </>
//   );
// }


const Stars = () => (
  <div className="testimonial-stars">
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
    <span className="star">★</span>
  </div>
);

const testimonials = [
  {
    flag: "/images/testimonial/testimonial_ind.webp",
    flagAlt: "India flag",
    text: "We have partnered with mTouch Labs for the development of the Sacchi application, and I'm pleased to share that the project went exceptionally well from start to finish.",
    name: "Pavan HK",
    role: "General Manager",
    logo: "/images/testimonial/testimonial_saachi.webp",
    logoAlt: "Sacchi logo",
    aos: "zoom-out-right",
  },
  {
    flag: "/images/testimonial/testimonial_abudabhi.webp",
    flagAlt: "UAE flag",
    text: "mTouch Labs transformed our parking operations with the Rahayel System. It's efficient, reliable, and perfectly suited to our needs. The team was professional and proactive.",
    name: "Kezad Groups",
    role: "CEO",
    logo: "/images/testimonial/testimonial_rahayel.webp",
    logoAlt: "Rahayel logo",
    aos: "zoom-out",
  },
  {
    flag: "/images/testimonial/testimonial_ind.webp",
    flagAlt: "India flag",
    text: "mTouch Labs made the Dr. Pick app development seamless. They understood our healthcare vision and delivered an intuitive, and patient-friendly platform with great commitment and timely execution.",
    name: "Dr.Vishnu",
    role: "Managing Director",
    logo: "/images/testimonial/drpick.webp",
    logoAlt: "Dr Pick logo",
    aos: "zoom-out-left",
  },
];

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <p className="testimonial-label">TESTIMONIAL</p>
          <h2 className="testimonial-title" data-aos="fade-right">What people think about us</h2>
          <p className="testimonial-subtitle" data-aos="fade-left">
            Their professionalism and commitment to our success were evident throughout the entire process.
          </p>
        </div>

        <div className="testimonial-cards owl-carousel">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" data-aos={t.aos} key={i}>
              <div className="testimonial-flag">
                <img src={t.flag} alt={t.flagAlt} />
              </div>
              <div className="testimonial-content">
                <Stars />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-left">
                    <p className="author-name">{t.name}</p>
                    <p className="author-company">{t.role}</p>
                  </div>
                  <div className="author-logo">
                    <img src={t.logo} alt={t.logoAlt} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-stat">
          <span className="stat-number">1500+</span>
          <span className="stat-text">Successful Projects</span>
        </div>
      </div>
    </section>
  );
}