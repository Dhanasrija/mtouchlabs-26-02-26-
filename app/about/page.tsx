import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Android App development | iOS app development | Web Development",
  description:
    "mTouch Labs is the best Software Development Company in India that provides Android app development, iOS app development, and Web development",
  keywords:
    "Mobile App development company, Mobile application development company, Web application development, Android application development, iOS application development, Flutter app development",
  alternates: { canonical: "https://mtouchlabs.com/about" },
};

const awards = [
  { img: "award-winning-designers.png", alt: "Award mTouch Labs", title: "Award winning Designers", text: "Our award winning Web and mobile app designers are in business for 14+ years and helped worldwide companies successfully to achieve their vision and goals." },
  { img: "4.9-rating.png", alt: "Award mTouch Labs", title: "4.9 Rating in Google Reviews", text: "mTouchlabs has distinguished itself as one of the top rated mobile application development companies in Hyderabad with 4.9 rating in the google reviews." },
  { img: "dedicated-developers.png", alt: "Award mTouch Labs", title: "70+ Dedicated Developers", text: "Our dedicated team of professional mobile app developers has released 1500+ products for 80+ startups and enterprises across the world." },
  { img: "hours copy.png", alt: "Award mTouch Labs", title: "100+ hours of effort", text: "mTouch Labs leading mobile app and web development compnay, known for timely project delivery and building lasting client relationships." },
];

const missionTabs = [
  { id: "pills-mission", tabId: "mission-tab", icon: "fas fa-rocket", label: "Our Mission", title: "Our Mission", text: "We have a dedicated team of web and mobile app designers, developers, and project managers who believe in working with passion and complete dedication to deliver tailor-made applications and websites that drive huge online results. Our mission is to connect with clients and build a good relationship with them. We offer a free consultation to our clients about the right technique regarding the mobile application. We have a team of expert android and iOS mobile app developers who are experts in this field.\n\nmTouch Labs has really good experience in Mobile Application Development and we try to get your dream into reality.", active: true },
  { id: "pills-vision", tabId: "vision-tab", icon: "far fa-eye", label: "Our Vision", title: "Our Vision", text: "We cater result-driven customized web and mobile app solutions to every customer need with utmost professionalism and dedication. Our expert team of mobile app developers in India will start out your project with innovative solutions to achieve your goals. We also believe in making an app better, and therefore we will suggest the best customization ideas to tweak the overall functionality of your mobile" },
  { id: "pills-comit", tabId: "comit-tab", icon: "fas fa-hands-helping", label: "Our Commitment", title: "Our Commitment", text: "Our Mobile App Development company provides high-quality and cost-effective offshore web and software development services. mTouchlabs promotes innovation, out-of-the-box thinking, and constant learning. We follow a precise, systematic, and standard process to ensure flawless project completion. We put our clients\u2019 needs at the center of everything we do and deliver the finest customer experience." },
  { id: "pills-value", tabId: "value-tab", icon: "fas fa-hand-peace", label: "Core Values", title: "Core Value", text: "We Promote a long-term relationship with clients and deliver reliable web and mobile app development solutions, which are delighted to the client. We continuously endeavor to improve the process and technology competencies and offer you the best and latest technology in web design and web development" },
];

const keypoints = [
  { icon: "target.svg", title: "Client-centric Approach", text: "Our client-centric approach has made us the top mobile app development company in India" },
  { icon: "fast-time.svg", title: "Service Delivered in Time", text: "Our professional mobile app developers deliver the project in time." },
  { icon: "united.svg", title: "Effective Collaboration", text: "Even the largest and most complex work can be done effectively through clear and thoughtful communication" },
  { icon: "team.svg", title: "Employee Benefits", text: "From our company perspective, we offer various employee benefits, including an increase in employee loyalty and productivity." },
  { icon: "partnership.svg", title: "Team Work", text: "Our mobile app developers team split difficult tasks into simpler ones, then work together to complete them faster." },
  { icon: "qualitys.svg", title: "Quality of Service", text: "Our software development company creates custom software products as per the specific requirement of the business." },
];

const expertiseList = [
  "Web Design & Web Development", "Android App Development", "iOS App Development",
  "Hybrid App Development", "Native App Development", "Enterprise Mobile App Development",
  "Flutter App development", "Digital marketing/SEO Services", "App store optimization Services",
  "Cloud migration services", "UI & UX design",
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-heading-sec about-pag-head pt85 pb120">
        <div className="container">
          <div className="row pt80">
            <div className="col-lg-6">
              <div className="page-heading mr25">
                <span className="sub-heading mb15" data-aos="fade-up" data-aos-delay="200">
                  <i className="fas fa-building mr5"></i> Who We Are
                </span>
                <h1 data-aos="fade-up" data-aos-delay="400">
                  Top-rated <span className="ree-text rt45">Web Development</span> and Mobile App Development company in India
                </h1>
                <p className="mt30 h-light" data-aos="fade-up" data-aos-delay="600">
                  mTouch Labs is a top-tier software development company in India, providing a wide range of web development and mobile app development services since 2011.
                </p>
                <p className="mt15 h-light" data-aos="fade-up" data-aos-delay="800">
                  mTouch Labs offers a complete extensive and high-quality web and mobile application development services in Hyderabad including web designing, IOS application development, Android application development, hybrid app development, native app development, flutter app development, Mobile app design and web hosting in India. We started our journey in 2011 as a startup Mobile App development company in Hyderabad by providing many hybrid and native mobile app development services. Delivering the best mobile apps development solutions to our customers is our main motto.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sol-img m-mt30">
                <img src="/images/others/Mobile App Development Process.jpg" alt="mTouch Labs office" className="img-fluid" data-aos="fade-in" data-aos-delay="400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="r-bg-c sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-headings side-pghd">
                <span className="sub-heading mb15">About mTouch Labs?</span>
                <h2>The mTouch Labs</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <h4 className="mb15">mTouch Labs is Web Development and Mobile Application Development Company</h4>
              <p>Nowadays the use of iPhone, Smartphone, and tablets are growing fast, so the need for android application development and iOS app development is required for every business. mTouch Labs completely understands your business requirements and can create a customized native mobile application development, hybrid mobile app development as per your or your client&apos;s requirements.</p>
              <p className="mt15">Are you planning to start a new mobile app? Today, the mobile app development market is enormous. mTouch Labs provides mobile app development services in India and the USA. Our core expertise is in Android app Development, iOS app development, UI &amp; UX designs &amp; development, ReactNative mobile App development, Amazon web services, AOS/SMM, Online Marketing Services, and App Consultant with start-ups/Enterprises.</p>
              &nbsp;
              <p>mTouch Labs is an expert in the world of design, mobile app development, and web development. We bring on the serving numerous approaches and techniques that help in turning your ideas into reality. Our professional mobile app developers team has <span className="yearsOfExcellence">14+</span> years of experience in developing custom software mobile and web development.</p>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="company-stats2 roww mt30">
                    <div className="statsnum counter-number mt30"><p>Complete Projects</p> <span className="counter">1500</span> <span>+</span></div>
                    <div className="statsnum counter-number mt30"><p>Expert Team</p> <span className="counter">100</span><span>+</span></div>
                    <div className="statsnum counter-number mt30"><p>Success Years</p><span className="yearsOfExcellence"><span className="counter">14</span></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Awards */}
      <section className="r-bg-x sec-pad pt90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt30 m-mt0">
              <div className="page-headings side-pghd">
                <span className="sub-heading mb15">Why Choose mTouch Labs</span>
                <h3>Best Web and Mobile App Development Company</h3>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {awards.map((a, i) => (
                  <div className="col-lg-6 col-sm-6 mt30" key={i}>
                    <div className="ree-card ico-cont">
                      <div className="ic-img mb20"><img src={`/images/brand-logo/${a.img}`} alt={a.alt} /></div>
                      <div className="ic-cont">
                        <h4>{a.title}</h4>
                        <p className="mt15">{a.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="r-bg-a sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <ul className="vrt-tabb nav nav-pills nav-pills-custom" id="pills-tab" role="tablist" aria-orientation="vertical">
                {missionTabs.map((t) => (
                  <li key={t.id}>
                    <a className={`nav-link${t.active ? " active" : ""}`} id={t.tabId} data-toggle="pill" href={`#${t.id}`} role="tab" aria-controls={t.id} aria-selected={t.active ? "true" : "false"}>
                      <i className={t.icon}></i> {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="tab-content tab-bg" id="pills-tabContent">
                {missionTabs.map((t) => (
                  <div className={`tab-pane fade${t.active ? " show active" : ""}`} id={t.id} role="tabpanel" aria-labelledby={t.tabId} key={t.id}>
                    <h3 className="mb15">{t.title}</h3>
                    {t.text.split("\n\n").map((p, i) => (
                      <p className={i > 0 ? "mt15" : ""} key={i}>{p}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Keypoints */}
      <section className="r-bg-x sec-pad">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="page-headings">
                <h3>Transparency and Ethics Of Our Mobile Application Development Company</h3>
                <p className="mt15">We are a team of passionate people who solve complex problems through transformation aided by technology</p>
              </div>
            </div>
          </div>
          <div className="row mt30">
            {keypoints.map((k, i) => (
              <div className="col-lg-4 col-sm-6" key={i}>
                <div className="ree-card r-bg-c mt60">
                  <div className="ree-card-img"><img src={`/images/icons/${k.icon}`} alt="services" /></div>
                  <div className="ree-card-content mt40">
                    <h3 className="mb15">{k.title}</h3>
                    <p>{k.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="r-bg-c sec-pad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="page-headings side-pghd">
                <span className="sub-heading mb15">Areas of Expertise in</span>
                <h2>Our Mobile App Development Company</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <h4 className="mb15">Our Areas of expertise in Custom Software Development</h4>
              <p>Today, mTouch Labs is regarded as the best and topmost service-oriented Mobile application development company in India. We provide high-quality and result-oriented applications from Android app development, iOS app development, Native app development, Hybrid App development, Flutter app development, and many more, from diverse industry segments.</p>
              &nbsp;
              <p>Through a combination of Transparent Pricing, Quality Solutions, and a firm responsibility to deliver the project on time and to budget, our Android application development and iOS application development company has successfully built a strong relationship with clients based on mutual trust and respect.</p>
              &nbsp;
              <p className="mt15">Our Software development company provided a number of web development and mobile app development services to various sectors specialized in</p>
              &nbsp;
              <div className="aboutus-last-list">
                {expertiseList.map((item, i) => (
                  <span key={i}><li>{item}</li>&nbsp;</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA */}
      <section className="r-bg-a sec-pad">
        <div className="container">
          <div className="ree">
            <div className="row">
              <div className="col-lg-6 vcenter">
                <div className="cta-heading">
                  <span className="sub-heading mb15">Career</span>
                  <h3><span className="ree-text rt40">Teamwork</span> is the ability to work together toward a common vision.</h3>
                  <a href="/contact-us" className="ree-btn ree-btn-grdt1 mt40 mw-80">Join Our Team <i className="fas fa-arrow-right fa-btn"></i></a>
                </div>
              </div>
              <div className="col-lg-6 vcenter">
                <div className="ct-sol-img">
                  <img src="/images/cta/about us.svg" alt="team" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
