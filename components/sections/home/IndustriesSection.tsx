// const industries = [
//   { img: "realstate.png", label: "Real Estate", aos: "fade-up" },
//   { img: "tours.png", label: "Tour & Travel", aos: "fade-down" },
//   { img: "education.png", label: "Education", aos: "fade-up" },
//   { img: "taxi.png", label: "Transport", aos: "fade-down" },
//   { img: "retail.png", label: "e Commerce", aos: "fade-up" },
//   { img: "media.png", label: "Game", aos: "fade-down" },
//   { img: "sports.png", label: "Sports & Fitness", aos: "fade-up" },
//   { img: "fintech.png", label: "Fintech", aos: "fade-down" },
//   { img: "food.png", label: "Food and Grocery Delivery", aos: "fade-up" },
//   { img: "hotel.png", label: "Hotel Booking Apps", aos: "fade-down" },
//   { img: "goverment.png", label: "Government Apps", aos: "fade-up" },
//   { img: "sector.png", label: "Manufacturing Sector", aos: "fade-down" },
//   { img: "healthcare.png", label: "Health Care", aos: "fade-up" },
// ];

// export default function IndustriesSection() {
//   return (
//     <section className="industries-section">
//       <h3 className="industries-title">Industries We Serve</h3>

//       <div className="industries-carousel-container">
//         <button className="industries-carousel-nav industries-carousel-prev" aria-label="Previous">
//           <i className="fas fa-chevron-left"></i>
//         </button>

//         <div className="industries-carousel-wrapper">
//           <div className="industries-grid">
//             {industries.map((item, i) => (
//               <div className="industry-item" data-aos={item.aos} key={i}>
//                 <img src={`/images/home/${item.img}`} alt={item.label} />
//                 <p>{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="industries-carousel-nav industries-carousel-next" aria-label="Next">
//           <i className="fas fa-chevron-right"></i>
//         </button>
//       </div>
//     </section>
//   );
// }

export default function IndustriesSection() {
  return (
    <section className="ind-section">
      <div className="ind-container">

        {/* Eyebrow */}
        <p className="ind-eyebrow">
          <span className="ind-eyebrow-dot" />
          INDUSTRIES WE SERVE
        </p>

        {/* Heading */}
        <h2 className="ind-heading">
          Industry-Specific Expertise to<br />
          Drive Your Success
        </h2>

        {/* Floating pills */}
        <div className="ind-pills-wrap">

          {/* Row 1 */}
          <div className="ind-pill ind-pill--blue ind-pill--tall ind-pill--rot-neg ind-anim-1">
            Health &amp; Wellness
          </div>
          <div className="ind-pill ind-pill--yellow ind-anim-2">
            Real Estate
          </div>
          <div className="ind-pill ind-pill--salmon ind-pill--wide ind-pill--rot-neg-sm ind-anim-3">
            Tours &amp; Travel
          </div>
          <div className="ind-pill ind-pill--green ind-pill--rot-pos ind-anim-4">
            Grocery
          </div>

          {/* Row 2 */}
          <div className="ind-pill ind-pill--navy ind-anim-5">
            Corporate
          </div>
          <div className="ind-pill ind-pill--pink ind-anim-6">
            Game
          </div>
          <div className="ind-pill ind-pill--steel ind-anim-7">
            E-commerce
          </div>
          <div className="ind-pill ind-pill--teal ind-anim-8">
            Restaurant
          </div>

          {/* Extra pills to fill out the section */}
          <div className="ind-pill ind-pill--yellow ind-pill--rot-pos-sm ind-anim-9">
            Healthcare
          </div>
          <div className="ind-pill ind-pill--salmon ind-anim-10">
            SaaS &amp; Technology
          </div>
          <div className="ind-pill ind-pill--blue ind-anim-11">
            Education
          </div>
          <div className="ind-pill ind-pill--green ind-pill--rot-neg-sm ind-anim-12">
            Logistics
          </div>
          <div className="ind-pill ind-pill--pink ind-pill--rot-pos ind-anim-13">
            Financial Services
          </div>

        </div>
      </div>
    </section>
  );
}