import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web and App Development for Multivendor Lab Equipment Services | mTouch Labs",
  description: "ZefSci offers expert LCMS maintenance, repair, and multivendor support to boost lab productivity and reduce downtime for reliable, cost-effective solutions.",
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
                                className="fas fa-briefcase mr5"></i> ZefSci </span>
                        <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Innovative Medical Devices & Equipment,
                            Engineered for Precision and Care</h1>
                        <p className="h-light" data-aos="fade-up" data-aos-delay="600">We design, manufacture, and supply
                            high-quality medical devices that improve patient outcomes and advance healthcare solutions
                            globally.
                        </p>
                        <a href="https://clientportal.zefsci.com/" target="_blank" className="port-links mt40"
                            data-aos="fade-up" data-aos-delay="800">Go to Website <i
                                className="fas fa-arrow-right fa-btn"></i></a>
                        {/*  <a href="https://apps.apple.com/us/app/khidkee-marketplace/id1546476049" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i className="fas fa-arrow-right fa-btn"></i></a>  */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                            src="/images/portfolio/zefsci-screen-main.png" alt="Healthcare App" className="img-fluid" /></div>
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
                        <h2 className="mb15">About ZefSci</h2>
                        <p className="mt15">At ZefSci, we are committed to transforming healthcare with cutting-edge medical
                            devices that improve patient outcomes and streamline healthcare practices. Our innovative
                            products are designed with precision, reliability, and safety at their core, catering to a
                            wide range of healthcare providers, from hospitals to clinics, globally.
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
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="sec-heading text-center">
                        <h3 className="mb15">Industries Served </h3>
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
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse1"
                                            aria-expanded="true" aria-controls="collapse1"
                                            className="d-block  collapsed  collapsible-link">Hospitals and Clinics</a></h6>
                                </div>
                                <div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
                                    className="collapse show">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Facilities providing comprehensive medical
                                            care, including diagnostics and treatment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 2  */}
                            <div className="cards">
                                <div id="heading2" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2"
                                            className="d-block  collapsed  collapsible-link">Diagnostic Laboratories </a>
                                    </h6>
                                </div>
                                <div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Specialized labs conducting tests to diagnose
                                            diseases and monitor health.</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 3  */}
                            <div className="cards">
                                <div id="heading3" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3"
                                            className="d-block  collapsed  collapsible-link"> Rehabilitation Centers </a>
                                    </h6>
                                </div>
                                <div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0"> Institutions focused on recovery and
                                            rehabilitation for physical and mental health.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 4  */}
                            <div className="cards">
                                <div id="heading4" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse4"
                                            aria-expanded="false" aria-controls="collapse4"
                                            className="d-block  collapsed  collapsible-link">Pharmacies and Retailers</a>
                                    </h6>
                                </div>
                                <div id="collapse4" aria-labelledby="heading4" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Outlets dispensing medications and health
                                            products, offering patient consultations.</p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 5  */}
                            <div className="cards">
                                <div id="heading5" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse5"
                                            aria-expanded="false" aria-controls="collapse5"
                                            className="d-block  collapsed  collapsible-link">Research Institutions</a></h6>
                                </div>
                                <div id="collapse5" aria-labelledby="heading5" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0"> Organizations conducting medical research to
                                            advance healthcare and treatment methods.</p>
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
                        <h3 className="mb20 h1">Features & Benefits:</h3>

                        <p>Our products are designed with patient safety and healthcare efficiency in mind. Equipped
                            with the latest technological innovations, each product is crafted to provide:

                        </p>
                        &nbsp;
                        <ul>
                            <li>Accurate diagnostics</li>
                            &nbsp;
                            <li>Superior performance</li>
                            &nbsp;
                            <li>Ease of use for healthcare professionals</li>
                            &nbsp;
                            <li>Durability and reliability in clinical settings.</li>
                        </ul>
                        &nbsp;

                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="color-palette">
                        <h5>Color palette</h5>

                        <div className="media mt60">
                            <div className="color-box1 cbx129 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Oxford Blue</h6>
                                <p>#051A35</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx130 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Anti-Flash White</h6>
                                <p>#F2F5F6</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx131 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>White</h6>
                                <p>#FFFFFF</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx132 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Philippine Silver</h6>
                                <p>#B7B7B9</p>
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
                        <h3 className="mb15"><span className="ree-text rt40">Admin</span> Screens</h3>
                        <p>Check Out Our Outstanding Screens Of This admin Online Platform</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen1.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen2.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen3.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen4.png" alt="mockup"
                            className="img-fluid" /></div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/zefsci-screen5.png" alt="mockup"
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
            <h3 className="sec-heading text-center">Core Services</h3>
            &nbsp;
            <h4>Manufacturing</h4>
            &nbsp;
            <p className="mt15"><b>With cutting-edge manufacturing facilities, we ensure the production of medical
                    devices that meet the highest industry standards. Our advanced machinery and skilled workforce
                    guarantee precision, consistency, and quality in every product we manufacture.</b></p>
            {/*  <p className="mt15">Admin can track all the ongoing orders, active pharmacists, delivery boys, and total earnings on a single web view.</p>  */}
            &nbsp;
            <h4>Supply Chain & Distribution</h4>
            &nbsp;
            <p className="mt15"><b>Our robust supply chain ensures timely and efficient delivery of products to
                    healthcare providers across the globe. From initial order to final delivery, we manage every
                    aspect to provide a seamless experience.</b></p>
            {/*  <p className="mt15">Admin can be able to manage all the ongoing orders, and check tracking status.</p>  */}
            &nbsp;
            <h4>Research & Development</h4>
            &nbsp;
            <p className="mt15"><b>Innovation is at the heart of what we do. Our dedicated R&D team works tirelessly to
                    develop new products and enhance existing ones, keeping up with the latest healthcare trends and
                    needs. Whether it&apos;s new materials or breakthrough technologies, our R&D is focused on advancing
                    healthcare solutions.</b></p>
            {/*  <p className="mt15">Admin can manage (add, remove, update) all pharmacists.</p>  */}
            &nbsp;
            <h4>Compliance & Certifications</h4>
            &nbsp;
            <p className="mt15"><b>We adhere to the most stringent global standards in the medical industry, including
                    ISO certifications and FDA approvals. Our commitment to quality, safety, and compliance is what
                    sets us apart as a reliable partner for healthcare providers worldwide.</b></p>
            {/* <p className="mt15"><b>Conclusion</b></p>
						 <p className="mt15">Considering the factors mentioned above, we can definitely say that choosing the right <a href="/mobile-app-development-company"target="_blank">on-demand mobile app development company </a>is essential to developing the best online medicine delivery app development. mTouchlabs is a leading Online Medicine Delivery Mobile app development company with years of experience and expertise in building high-quality and feature-rich on-demand delivery apps. For building a successful online generic medicine delivery mobile app and for a rich user experience, reach out to our<a href="/index"target="_blank"> Mobile Application Development Company</a>. </p>
						 &nbsp; */}
            {/*<p className="mt15"><b>Ratings</b></p>
						 <p className="mt15">Customers can rate their experience and share reviews with the grocery delivery stores in this section.</p>
						 &nbsp; 
						 <p className="mt15"><b>Transaction History</b></p>
						 <p className="mt15">Users can see all the detailed previous transactions made through the app in this section.</p> */}


        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/abu-dhabi-judicial-department-mobile-app-development" className="ree-btn  ree-btn-grdt2"><i
                            className="fas fa-arrow-left fa-btn mr5"></i>
                        Previous Project </a>
                    <a href="/web-and-app-development-for-real-estate-services" className="ree-btn  ree-btn-grdt2"> Next
                        Project <i className="fas fa-arrow-right fa-btn"></i></a>
                </div>
            </div>
        </div>

        </div>
    </section>
    {/* needs and solution end */}
    </>
  );
}
