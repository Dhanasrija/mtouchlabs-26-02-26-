import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web and app development for Education Services | mTouch Labs",
  description: "Boost learning with custom web & app development for education—engage students, support educators, and streamline management with digital solutions.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/web-and-app-development-for-education-services",
  },

  openGraph: {
    title: "Web and app development for Education Services | mTouch Labs",
    description: "Boost learning with custom web & app development for education—engage students, support educators, and streamline management with digital solutions.",
    url: "https://www.mtouchlabs.com/web-and-app-development-for-education-services",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Web and app development for Education Services | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web and app development for Education Services | mTouch Labs",
    description: "Boost learning with custom web & app development for education—engage students, support educators, and streamline management with digital solutions.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>
{/* page head */}
    <div className="port-head-sec pt85 pb120 r-bg-x">
        <div className="container">
            <div className="row vcenter pt80">
                <div className="col-lg-6">
                    <div className="page-headings">
                        <span className="sub-heading mb15" data-aos="fade-up" data-aos-delay="200"><i
                                className="fas fa-briefcase mr5"></i>Learn2read</span>
                        <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Empowering Early Literacy with Engaging
                            Digital Learning Tools
                        </h1>
                        <p className="h-light" data-aos="fade-up" data-aos-delay="600">Unlocking the Power of Reading with
                            Digital Innovation
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                            src="/images/case-study/l2r-main.svg" alt="education Services" className="img-fluid" /></div>
                </div>
            </div>
        </div>
    </div>
    {/* end page head */}

    {/* about items */}
    <section className="r-bg-a sec-pad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="details-port">
                        <h2 className="mb15">About Learn2Read </h2>
                        <p className="mt15">LearnToRead is a digital platform dedicated to enhancing literacy skills for
                            young children through interactive and engaging tools. Designed with a focus on early
                            childhood education, the website serves as a resource for parents, teachers, and children,
                            offering structured reading exercises, gamified lessons, and visual storytelling.
                        </p>
                        &nbsp;


                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="technolo-sec">

                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/Node.JS.svg" alt="nodeJS" />
                                </div>
                                <div className="iwt-content">
                                    <p>nodeJS</p>
                                </div>
                            </a>
                        </div>
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/React-icon.svg" alt="angular" />
                                </div>
                                <div className="iwt-content">
                                    <p>React JS</p>
                                </div>
                            </a>
                        </div>
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/mysql.svg" alt="MySql" />
                                </div>
                                <div className="iwt-content">
                                    <p>MySql</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* about items end */}

    {/* item features */}
    <section className="home-partners-block r-bg-x sec-pad">
        <div className="container">
            {/*  Key Features Heading  */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h3 className="mb15">Key Features</h3>
                    </div>
                </div>
            </div>

            <div className="row mt60">
                <div className="col-lg-6">
                    <div className="feature-list">
                        <div id="accordionExample" className="accordion ac-1">
                            {/*  Accordion item 1  */}
                            <div className="cards">
                                <div id="heading1" className="card-header">
                                    <h6 className="mb-0"><a href="#" data-toggle="collapse" data-target="#collapse1"
                                            aria-expanded="true" aria-controls="collapse1"
                                            className="d-block  collapsed  collapsible-link">Interactive Reading Modules</a>
                                    </h6>
                                </div>
                                <div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
                                    className="collapse show">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Custom animations, quizzes, and interactive
                                            elements that captivate young learners.</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 2  */}
                            <div className="cards">
                                <div id="heading2" className="card-header">
                                    <h6 className="mb-0"><a href="#" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2"
                                            className="d-block  collapsed  collapsible-link">Progress Tracking</a></h6>
                                </div>
                                <div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Parents and educators can monitor learning
                                            progress, track reading levels, and set personalized goals.</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 3  */}
                            <div className="cards">
                                <div id="heading3" className="card-header">
                                    <h6 className="mb-0"><a href="#" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3"
                                            className="d-block  collapsed  collapsible-link">Responsive Design</a></h6>
                                </div>
                                <div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Optimized for desktops, tablets, and mobile
                                            devices, providing seamless access across platforms.</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 4  */}
                            <div className="cards">
                                <div id="heading4" className="card-header">
                                    <h6 className="mb-0"><a href="#" data-toggle="collapse" data-target="#collapse4"
                                            aria-expanded="false" aria-controls="collapse4"
                                            className="d-block  collapsed  collapsible-link">Secure User Profiles</a></h6>
                                </div>
                                <div id="collapse4" aria-labelledby="heading4" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Each child has a secure profile, where they can
                                            save progress, earn rewards, and explore new lessons.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* item features end */}

    {/* item typo */}
    <section className="home-partners-block r-bg-c sec-pad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <h5>Typography</h5>
                    <div className="typo-set mt60">
                        <div className="typo-head">
                            <h2>Aa</h2>
                            <p>Proxima Nova<span>Bold</span></p>
                        </div>


                    </div>
                    <div className="heading-paragrapph mt60">
                        <h3 className="mb20 h1"> Objectives</h3>
                        <p> The key goals for the LearnToRead website were to create an intuitive and child-friendly
                            platform with easy navigation and engaging content. It needed to accommodate rich media such
                            as animated lessons, sound, and interactive games while ensuring accessibility and a
                            user-friendly interface.
                        </p>
                        &nbsp;
                        &nbsp;
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="color-palette">
                        <h5>Color palette</h5>

                        <div className="media mt60">
                            <div className="color-box1 cbx133 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Steel Pink</h6>
                                <p>#D341FB</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx134 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Royal Purple</h6>
                                <p>#6752A4</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx135 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Chinese Black</h6>
                                <p>#101115</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx136 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Floral White</h6>
                                <p>#FFFAF4</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* item typo end */}


    &nbsp;


    <section className="home-partners-block r-bg-x sec-pad">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
                        <p>Making Reading Easy, Engaging, and Exciting</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-phone1.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-phone2.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-phone3.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-phone4.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-phone5.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="home-partners-block r-bg-x sec-pad">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h2 className="mb15"><span className="ree-text rt40">Admin</span> Screens</h2>
                        <p></p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-screen5.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-screen1.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/l2r-screen2.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen3.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen4.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                {/*  <div className="appscreen"> <div className="itme-img"><img src="/images/case-study/Shiva-Sai-Enterprises-admin-screen.png" alt="mockup" className="img-fluid" /></div> </div>	  */}
                {/*  <div className="appscreen"> <div className="itme-img"><img src="/images/case-study/appui-3.png" alt="mockup" className="img-fluid" /></div> </div>	  */}
            </div>
        </div>
    </section>


    {/* needs and solution */}
    <section className="r-bg-a sec-pad">
        <div className="container">
            {/*  Our Approach Heading  */}
            <h3 className="sec-heading text-center">Our Approach</h3>
            &nbsp;

            {/*  User-Centric Design  */}
            <h4>User-Centric Design</h4>
            &nbsp;
            <p className="mt15"><b>We crafted a playful and visually engaging UX/UI that resonates with children while being
                    easy for parents and educators to navigate.</b></p>
            &nbsp;

            {/*  Learning Tools Integration  */}
            <h4>Learning Tools Integration</h4>
            &nbsp;
            <p className="mt15"><b>The platform is built to support various multimedia formats, providing a dynamic learning
                    experience with phonics, vocabulary games, and story narrations.</b></p>
            &nbsp;

            {/*  Scalable Content Management  */}
            <h4>Scalable Content Management</h4>
            &nbsp;
            <p className="mt15"><b>By integrating a robust CMS, we empowered LearnToRead’s team to effortlessly update
                    content, add new lessons, and manage user subscriptions.</b></p>
            &nbsp;

        </div>

        {/*  Navigation Buttons for Previous and Next Projects  */}
        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/app-and-web-development-for-ecommerce-services" className="ree-btn  ree-btn-grdt2">
                        <i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
                    </a>
                    <a href="/on-demand-service-mobile-app-development" className="ree-btn  ree-btn-grdt2">
                        Next Project <i className="fas fa-arrow-right fa-btn"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    {/* needs and solution end */}
    </>
  );
}
