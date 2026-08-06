"use client";
/*
  Marked "use client" as an HTML-payload optimisation, not for interactivity.
  As a server component this section's element tree was serialised a second time
  into the inlined RSC flight payload on every request. As a client component the
  SSR'd HTML is byte-for-byte identical, but the tree is no longer duplicated —
  its JSX lives in a cacheable JS chunk instead.
*/
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
//       

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