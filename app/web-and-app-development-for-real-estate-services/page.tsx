import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web and App Development for Real Estate | mTouch Labs",
  description: "Get feature-rich web and app development for real estate, enhancing user engagement, property listings, and seamless interactions for buyers and sellers",
  alternates: {
    canonical: "https://www.mtouchlabs.com/web-and-app-development-for-real-estate-services",
  },

  openGraph: {
    title: "Web and App Development for Real Estate | mTouch Labs",
    description: "Get feature-rich web and app development for real estate, enhancing user engagement, property listings, and seamless interactions for buyers and sellers",
    url: "https://www.mtouchlabs.com/web-and-app-development-for-real-estate-services",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Web and App Development for Real Estate | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web and App Development for Real Estate | mTouch Labs",
    description: "Get feature-rich web and app development for real estate, enhancing user engagement, property listings, and seamless interactions for buyers and sellers",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};

export default function Page() {
  return (
    <>
<div className="port-head-sec pt85 pb120 r-bg-x">
        <div className="container">
            <div className="row vcenter pt80">
                <div className="col-lg-6">
                    <div className="page-headings">
                        <span className="sub-heading mb15" data-aos="fade-up" data-aos-delay="200"><i
                                className="fas fa-briefcase mr5"></i>Aduri</span>
                        <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Building Dreams, Shaping Realities</h1>
                        <p className="h-light" data-aos="fade-up" data-aos-delay="600">"Explore Our Properties" or "Schedule
                            a Visit".
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=com.app.aduri_associate" target="_blank"
                            className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to Play Store <i
                                className="fas fa-arrow-right fa-btn"></i></a>
                        {/*  <a href="https://apps.apple.com/us/app/khidkee-marketplace/id1546476049" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i className="fas fa-arrow-right fa-btn"></i></a>  */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                            src="/images/portfolio/aduri.png" alt="Real estate Services" className="img-fluid" /></div>
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
                        <h2 className="mb15">About Aduri</h2>
                        <p className="mt15">Aduri Group, a premier real estate company based in Telangana, has earned a
                            reputation for delivering clear title plots in prime locations around Hyderabad. With over
                            20 years of experience, they provide 24/7 security, maintenance for up to 10 years, and a
                            strong focus on customer satisfaction. Aduri Group is recognized for its reliability,
                            value-driven projects, and high returns, offering hassle-free transactions. Their commitment
                            to excellence is underscored by prestigious awards like the ET Excellence Award (2020-21),
                            positioning them as a trusted leader in real estate.
                        </p>
                        &nbsp;
                    </div>
                </div>

                <div className="col-lg-6">

                    <div className="technolo-sec">

                        {/*  NodeJS  */}
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/Node.JS.svg" alt="NodeJS" />
                                </div>
                                <div className="iwt-content">
                                    <p>Node JS</p>
                                </div>
                            </a>
                        </div>

                        {/*  Angular (Change to React JS)  */}
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/React-icon.svg" alt="React JS" />
                                </div>
                                <div className="iwt-content">
                                    <p>React JS</p>
                                </div>
                            </a>
                        </div>

                        {/*  MySQL  */}
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/mysql.svg" alt="MySQL" />
                                </div>
                                <div className="iwt-content">
                                    <p>MySQL</p>
                                </div>
                            </a>
                        </div>

                        {/*  TypeScript  */}
                        {/*  <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/TypeScript.svg" alt="TypeScript" />
                                </div>
                                <div className="iwt-content">
                                    <p>TypeScript</p>
                                </div>
                            </a>
                        </div>  */}

                        {/*  Electron JS  */}
                        <div className="icon-with-title">
                            <a href="javascript:void(0)">
                                <div className="iwt-icon"> <img src="/images/icons/electron-icon.svg" alt="Electron JS" />
                                </div>
                                <div className="iwt-content">
                                    <p>Electron JS</p>
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
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h3 className="mb15">Key Services
                        </h3>
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
                                    <h6 className="mb-0">
                                        <a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="true"
                                            aria-controls="collapse1" className="d-block collapsed collapsible-link">
                                            Land Development
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
                                    className="collapse show">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">
                                            Crafting premium, clear-title plots.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 2  */}
                            <div className="cards">
                                <div id="heading2" className="card-header">
                                    <h6 className="mb-0">
                                        <a href="#" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2"
                                            className="d-block collapsed collapsible-link">
                                            Residential and Commercial Properties
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">
                                            High-growth investment opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 3  */}
                            <div className="cards">
                                <div id="heading3" className="card-header">
                                    <h6 className="mb-0">
                                        <a href="#" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3"
                                            className="d-block collapsed collapsible-link">
                                            Long-Term Property Maintenance
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">
                                            Including 24/7 security and upkeep for up to 10 years. This section focuses
                                            on how our services cater to different buyer needs, from first-time
                                            homeowners to seasoned investors.
                                        </p>
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
                        <h3 className="mb20 h1">How Aduri Group Benefited? </h3>

                        <p>
                            The mobile app allowed Aduri Group to enhance customer engagement, offering a seamless,
                            user-friendly interface that increased inquiries and ultimately led to a higher conversion
                            rate. The convenience of accessing all real estate services through the app improved
                            operational efficiency, positioning Aduri Group as a tech-forward leader in the real estate
                            industry.
                            With mTouchLabs, Aduri Group took a significant leap in digital transformation, reinforcing
                            their competitive edge and achieving measurable success in their business.

                        </p>
                        &nbsp;
                        &nbsp;

                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="color-palette">
                        <h5>Color palette</h5>

                        <div className="media mt60">
                            <div className="color-box1 cbx125 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>French Wine</h6>
                                <p>#AC134B</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx126 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Tiger&apos;s Eye</h6>
                                <p>#E4953E</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx127 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>White</h6>
                                <p>#FFFFFF</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx128 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Floral White</h6>
                                <p>#FFFCF0</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* item typo end */}

    {/* item screen */}
    <section className="home-partners-block r-bg-x sec-pad">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
                        <p>Check Out Our Outstanding Screens of Real Estate App Development</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/aduri-screen1.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/aduri-screen2.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/aduri-screen3.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/aduri-screen4.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/aduri-screen5.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                {/*  <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/favmall-screen-6.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>  */}
            </div>
        </div>
    </section>
    {/* item screen end */}
    &nbsp;

    {/*  <section className="home-partners-block r-bg-x sec-pad">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h2 className="mb15"><span className="ree-text rt40">Admin</span> Screens</h2>
                        <p>Check Out Our Outstanding Screens Of This admin Online Community Platform App Development</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/favmall-admin-screen-1.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/favmall-admin-screen-2.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/favmall-admin-screen-3.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/favmall-admin-screen-4.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
            </div>
        </div>
    </section>  */}

    {/* needs and solution */}
    <section className="r-bg-a sec-pad">
        <div className="container">
            <h3 className="sec-heading text-center">Mobile App Development for Aduri Group</h3>
            &nbsp;
            &nbsp;
            <p className="mt15"><b>We partnered with Aduri Group to build a custom mobile application tailored to streamline
                    their real estate services. The app allows users to browse property listings, book site visits, and
                    receive real-time updates on ongoing projects. Through this solution, Aduri Group significantly
                    improved customer interaction and lead management, while also enhancing the overall property buying
                    experience. The app has proven to be a valuable tool in scaling Aduri Group’s operations and
                    boosting sales.
                </b></p>
            {/*  <p className="mt15">Admin can track all the ongoing orders, active pharmacists, delivery boys, and total earnings on a single web view.</p>  */}
            &nbsp;
            <h6>Innovative Features We Delivered</h6>
            &nbsp;
            <ul>
                <li><b>Property Listings:</b> Easy access to browse plots and real estate projects.</li>
                &nbsp;
                <li><b>Site Booking:</b> Users can schedule visits directly through the app.</li>
                &nbsp;
                <li><b>Real-Time Updates: </b>Clients receive notifications on project developments.</li>
                &nbsp;
                <li><b>Lead Management: </b>Simplified process for handling customer inquiries.</li>
            </ul>

        </div>
        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/app-solutions-for-medical-device-companies" className="ree-btn  ree-btn-grdt2"><i
                            className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
                    </a>
                    <a href="/healthcare-super-app" className="ree-btn  ree-btn-grdt2"> Next
                        Project <i className="fas fa-arrow-right fa-btn"></i></a>

                </div>
            </div>
        </div>

    </section>
    {/* needs and solution end */}
    </>
  );
}
