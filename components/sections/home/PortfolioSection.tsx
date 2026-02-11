const portfolioItems = [
  {
    href: "telangana-ecommerce-mobile-app-development",
    img: "/images/portfolio/golkonda.jpg",
    tags: "UX, UI, Website, Android and iOS",
    title: "Telangana State Government E-commerce online",
  },
  {
    href: "abu-dhabi-judicial-department-mobile-app-development",
    img: "/images/portfolio/abudhabi government app.jpg",
    tags: "UX, UI, Android",
    title: "ADJD :- Abu Dhabi Judicial Department App",
  },
  {
    href: "on-demand-chef-management-web-development",
    img: "/images/portfolio/cook a doodle.jpg",
    tags: "UX, UI, Website",
    title: "UK's On-Demand Chef Management Website",
  },
  {
    href: "multi-vendor-ecommerce-mobile-app-development",
    img: "/images/portfolio/khidkee.jpg",
    tags: "UX, UI, Android and iOS",
    title: "Khidkee :- An E-Commerce Retail Store Mobile App",
  },
  {
    href: "bikers-community-social-networking-app-development",
    img: "/images/portfolio/Rev your soul.jpg",
    tags: "UX, UI, Android and iOS",
    title: "Rev your soul :- Bikers Community App",
  },
  {
    href: "staff-and-student-management-enterprise-mobile-app-development",
    img: "/images/portfolio/InstiServe.jpg",
    tags: "UX, UI, Android and iOS",
    title: "Instiserve :- Staff And Student Management App",
  },
  {
    href: "online-astrology-consultation-mobile-app-development",
    img: "/images/portfolio/astrograha.jpg",
    tags: "UX, UI, Website, Android and iOS",
    title: "AstroGraha - Online Astrology Consultation App",
  },
];

export default function PortfolioSection() {
  return (
    <section className="r-bg-f sec-pad">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-8 vcenter text-center">
            <div className="heading-hz-btn">
              <span className="sub-heading mb15">QUALITY WORK</span>
              <h3 className="w-txt">
                Some of our <span className="ree-text rt40">Finest</span> Work
              </h3>
            </div>
          </div>
        </div>

        <div className="row mt60">
          <div className="col-lg-12 vcenter">
            <div className="full_work_wrapper">
              <div className="custom-nav">
                <button className="custom-prev">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="custom-next">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="full-work-app owl-nv owl-carousel">
                {portfolioItems.map((item, i) => (
                  <div className="fwb-main-x fwb-a" key={i}>
                    <div className="work-thumbnails">
                      <a href={item.href} target="_blank">
                        <img src={item.img} alt="portfolio mTouchLabs" className="img-fluid" />
                      </a>
                    </div>
                    <div className="work-details">
                      <p className="mb10">{item.tags}</p>
                      <h4>
                        <a href={item.href} target="_blank">{item.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
