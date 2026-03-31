// const portfolioItems = [
//   {
//     href: "/telangana-ecommerce-mobile-app-development",
//     img: "/images/portfolio/golkonda.jpg",
//     tags: "UX, UI, Website, Android and iOS",
//     title: "Telangana State Government E-commerce online",
//   },
//   {
//     href: "/abu-dhabi-judicial-department-mobile-app-development",
//     img: "/images/portfolio/abudhabi government app.jpg",
//     tags: "UX, UI, Android",
//     title: "ADJD :- Abu Dhabi Judicial Department App",
//   },
//   {
//     href: "/on-demand-chef-management-web-development",
//     img: "/images/portfolio/cook a doodle.jpg",
//     tags: "UX, UI, Website",
//     title: "UK's On-Demand Chef Management Website",
//   },
//   {
//     href: "/multi-vendor-ecommerce-mobile-app-development",
//     img: "/images/portfolio/khidkee.jpg",
//     tags: "UX, UI, Android and iOS",
//     title: "Khidkee :- An E-Commerce Retail Store Mobile App",
//   },
//   {
//     href: "/bikers-community-social-networking-app-development",
//     img: "/images/portfolio/Rev your soul.jpg",
//     tags: "UX, UI, Android and iOS",
//     title: "Rev your soul :- Bikers Community App",
//   },
//   {
//     href: "/staff-and-student-management-enterprise-mobile-app-development",
//     img: "/images/portfolio/InstiServe.jpg",
//     tags: "UX, UI, Android and iOS",
//     title: "Instiserv :- Staff And Student Management App",
//   },
//   {
//     href: "/online-astrology-consultation-mobile-app-development",
//     img: "/images/portfolio/astrograha.jpg",
//     tags: "UX, UI, Website, Android and iOS",
//     title: "AstroGraha - Online Astrology Consultation App",
//   },
// ];

// export default function PortfolioSection() {
//   return (
//     <section className="r-bg-f sec-pad">
//       <div className="container-fluid">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 col-sm-8 vcenter text-center">
//             <div className="heading-hz-btn">
//               <span className="sub-heading mb15">QUALITY WORK</span>
//               <h3 className="w-txt">
//                 Some of our <span className="ree-text rt40">Finest</span> Work
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="row mt60">
//           <div className="col-lg-12 vcenter">
//             <div className="full_work_wrapper">
//               <div className="custom-nav">
//                 <button className="custom-prev">
//                   <i className="fas fa-chevron-left"></i>
//                 </button>
//                 <button className="custom-next">
//                   <i className="fas fa-chevron-right"></i>
//                 </button>
//               </div>
//               <div className="full-work-app owl-nv owl-carousel">
//                 {portfolioItems.map((item, i) => (
//                   <div className="fwb-main-x fwb-a" key={i}>
//                     <div className="work-thumbnails">
//                       <a href={item.href} target="_blank">
//                         <img src={item.img} alt="portfolio mTouchLabs" className="img-fluid" />
//                       </a>
//                     </div>
//                     <div className="work-details">
//                       <p className="mb10">{item.tags}</p>
//                       <h4>
//                         <a href={item.href} target="_blank">{item.title}</a>
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Bar */}
//         <div className="row mt60">
//           <div className="col-lg-12">
//             <div className="cta-block-2 text-center">
//               <h3 className="w-txt mb0 portfolio-cta-text">
//                 Take a look of our quality work
//               </h3>
//               <a href="/portfolio" className="ree-btn ree-btn-grdt2">
//                 View All Work <i className="fas fa-arrow-right fa-btn"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const portfolioItems = [
  {
    href: "/telangana-ecommerce-mobile-app-development",
    img: "/images/portfolio/abudhabi government app.jpg",
    imgAlt: "ADJD Abu Dhabi App",
    title: "ADJD :- Abu Dhabi Judicial Department App",
    tags: "UI/UX, Android & IOS",
    alwaysShowImage: true,
  },
  {
    href: "/abu-dhabi-judicial-department-mobile-app-development",
    img: "/images/portfolio/golkonda.jpg",
    imgAlt: "Telangana E-commerce App",
    title: "ADJD :- Abu Dhabi Judicial Department App",
    tags: "UI/UX, Android & IOS",
    alwaysShowImage: false,
  },
  {
    href: "/on-demand-chef-management-web-development",
    img: "/images/portfolio/cook a doodle.jpg",
    imgAlt: "Chef Management Website",
    title: "ADJD :- Abu Dhabi Judicial Department App",
    tags: "UI/UX, Android & IOS",
    alwaysShowImage: false,
  },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-ref-section">
      <div className="portfolio-ref-container">

        <div className="portfolio-ref-header">
          <p className="portfolio-ref-label">&#8226; QUALITY WORK</p>
          <h2 className="portfolio-ref-title">
            What Sets{" "}
            <span className="portfolio-ref-title-accent">mTouch Labs</span>{" "}
            Apart
          </h2>
          <p className="portfolio-ref-desc">
            Whether you&apos;re optimizing today or building for tomorrow &nbsp;we help you
            <br />move faster with confidence.
          </p>
        </div>

        <div className="portfolio-ref-cards">
          {portfolioItems.map((item, i) => (
            <div
              className={`portfolio-ref-card${item.alwaysShowImage ? " portfolio-ref-card--static-img" : " portfolio-ref-card--hover-img"}`}
              key={i}
            >
              {/* Arrow button */}
              <a className="portfolio-ref-arrow" href={item.href}>
                <ArrowIcon />
              </a>

              {/* Content + image row */}
              <div className="portfolio-ref-card-body">
                <div className="portfolio-ref-card-info">
                  <h4 className="portfolio-ref-card-title">
                    <a href={item.href}>{item.title}</a>
                  </h4>
                  <p className="portfolio-ref-card-tags">{item.tags}</p>
                </div>

                {/* Image — always visible for card 1, hover-reveal for others */}
                <div className="portfolio-ref-card-img-wrap">
                  <img src={item.img} alt={item.imgAlt ?? ""} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}