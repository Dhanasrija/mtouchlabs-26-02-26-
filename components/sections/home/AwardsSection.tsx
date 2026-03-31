// const awards = [
//   { img: "award-winning-designers.png", alt: "Award winning designers", text: "Award <br /> winning designers", aos: "fade-right" },
//   { img: "4.9-rating.png", alt: "4.9 rating in google reviews", text: "4.9 rating in google <br /> reviews", aos: "zoom-in" },
//   { img: "app-development-company.png", alt: "App Development Company of the Year", text: "App Development <br /> Company of the <br />Year", aos: "zoom-in" },
//   { img: "RushLogo.png", alt: "App Development Company of the Year", text: "Partnered With <br /> Design Rush", aos: "zoom-in" },
//   { img: "nasscom.png", alt: "Official NASSCOM Member", text: "Official<br /> NASSCOM Member", aos: "fade-left" },
// ];

// export default function AwardsSection() {
//   return (
//     <section className="home-about sec-pad r-bg-x" style={{ paddingTop: 0 }}>
//       {/* Top Button Section */}
//       <div className="container text-center mb60 mt50">
//         <a href="/about" target="_blank" className="know-more-btn">
//           Know More mTouchLabs
//           <i className="fa-solid fa-arrow-right"></i>
//         </a>
//       </div>

//       {/* Awards Badges Section */}
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-12">
//             <div className="app-awards">
//               {awards.map((award, i) => (
//                 <div className="award-achivt" data-aos={award.aos} key={i}>
//                   <a target="_blank">
//                     <img
//                       src={`/images/brand-logo/${award.img}`}
//                       alt={award.alt}
//                       className="img-fluid"
//                     />
//                   </a>
//                   <p dangerouslySetInnerHTML={{ __html: award.text }} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



const awards = [
  {
    img: "/images/brand-logo/award-winning-designers.png",
    alt: "Award Winning Designers",
    label: "Award Winning\nDesigners",
    bg: "#cdd5f3",
    dark: false,
  },
  {
    img: "/images/brand-logo/nasscom-sme-inspire.png",
    alt: "NASSCOM SME Inspire Awards 2026",
    label: "SME Inspire\nAwards 2026",
    bg: "#7b0e0e",
    dark: true,
  },
  {
    img: "/images/brand-logo/RushLogo.png",
    alt: "Top Mobile App Development Company — DesignRush 2025",
    label: "Top Mobile App Dev\nCompany 2025",
    bg: "#ffffff",
    dark: false,
  },
  {
    img: "/images/brand-logo/4.9-rating.png",
    alt: "4.9 Rating in Google Reviews",
    label: "4.9 Rating in\nGoogle Reviews",
    bg: "#111827",
    dark: true,
  },
  {
    img: "/images/brand-logo/nasscom.png",
    alt: "Official NASSCOM Member",
    label: "Official NASSCOM\nMember",
    bg: "#cc0000",
    dark: true,
  },
  {
    img: "/images/brand-logo/app-development-company.png",
    alt: "App Development Company of the Year",
    label: "App Development\nCompany of the Year",
    bg: "#cdd5f3",
    dark: false,
  },
];

export default function AwardsSection() {
  return (
    <section className="aw-section">
      <div className="aw-container">

        {/* Left — text */}
        <div className="aw-left">
          <p className="aw-eyebrow">
            <span className="aw-eyebrow-dot" />
            AWARDS
          </p>
          <h2 className="aw-heading">
            <span className="aw-heading-blue">Awards</span>
            {" & Recognition"}
          </h2>
          <p className="aw-desc">
            Industry awards that reflect our commitment to
            innovation, quality, and client success.
          </p>

          {/* Floating stat badges */}
          <div className="aw-stats">
            <div className="aw-stat">
              <span className="aw-stat-num">14+</span>
              <span className="aw-stat-label">Years of Excellence</span>
            </div>
            <div className="aw-stat">
              <span className="aw-stat-num">1500+</span>
              <span className="aw-stat-label">Projects Delivered</span>
            </div>
            <div className="aw-stat">
              <span className="aw-stat-num">4.9★</span>
              <span className="aw-stat-label">Google Rating</span>
            </div>
          </div>
        </div>

        {/* Right — award cards grid */}
        <div className="aw-right">
          <div className="aw-grid">
            {awards.map((aw, i) => (
              <div
                key={i}
                className={`aw-card${aw.dark ? " aw-card--dark" : ""}`}
                style={{
                  background: aw.bg,
                  animationDelay: `${i * 120}ms`,
                }}
              >
                {/* Shimmer overlay */}
                <div className="aw-card-shimmer" />

                {/* Award image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={aw.img}
                  alt={aw.alt}
                  className="aw-card-img"
                  loading="lazy"
                />

                {/* Label */}
                <p className="aw-card-label">
                  {aw.label.split("\n").map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < aw.label.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative glow blobs */}
          <div className="aw-blob aw-blob--1" aria-hidden="true" />
          <div className="aw-blob aw-blob--2" aria-hidden="true" />
        </div>

      </div>
    </section>
  );
}