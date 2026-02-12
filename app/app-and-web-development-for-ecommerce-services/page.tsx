import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web and App Development for Ecommerce Services | mTouch Labs",
  description: "",
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
                                className="fas fa-briefcase mr5"></i>Rice Hub</span>
                        <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Discover the Finest Rice, Anytime,
                            Anywhere</h1>
                        <p className="h-light" data-aos="fade-up" data-aos-delay="600">RiceHub is a premier provider of
                            high-quality rice, sourcing a variety of premium grains from trusted farmers. Committed to
                            sustainability and exceptional quality, RiceHub delivers fresh, carefully selected rice to
                            elevate every meal.
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=com.app.ricehub" target="_blank"
                            className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to Play Store <i
                                className="fas fa-arrow-right fa-btn"></i></a>
                        {/*  <a href="https://apps.apple.com/us/app/khidkee-marketplace/id1546476049" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i className="fas fa-arrow-right fa-btn"></i></a>  */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                            src="/images/portfolio/ricehub.png" alt="eCommerce Services" className="img-fluid" /></div>
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
                        <h2 className="mb15"> About Rice Hub</h2>
                        <p className="mt15"> Rice Hub stands as a premier supplier and distributor of highquality rice,
                            dedicated to bringing the finest grains from farm to table. We specialize in a diverse
                            selection of rice varieties, each carefully sourced from trusted farmers who prioritize
                            sustainable agriculture and traditional cultivation techniques. From basmati to jasmine, and
                            organic brown rice to aromatic wild rice, Rice Hub ensures excellence in every grain.

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
                        <h3 className="mb20 h1"> Our Commitment to Quality</h3>

                        <p> At Rice Hub, quality is more than just a standard; it&apos;s a promise. We employ rigorous
                            quality control measures, from harvesting to packaging, ensuring that each grain of rice
                            retains its natural flavor, aroma, and nutritional value. Our advanced processing facilities
                            adhere to international standards, guaranteeing freshness and purity in every pack.


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
                            <div className="color-box1 cbx94 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Halloween Orange</h6>
                                <p>#2F91F8</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx95 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Beer</h6>
                                <p>#F7931E</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx96 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Apple</h6>
                                <p>#62B741</p>
                            </div>
                        </div>
                        <div className="media mt30">
                            <div className="color-box1 cbx69 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6> Dark Charcoal </h6>
                                <p>#333333</p>
                            </div>
                        </div>
                        <div className="media mt30">
                            <div className="color-box1 cbx97 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6> Granite Gray </h6>
                                <p>#666666</p>
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
                        <p>Check Out Our Outstanding Screens Of Grocery Local Delivery App Development</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub1.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub2.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub3.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub4.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub5.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/rice-hub3.svg" alt="mockup" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* item screen end */}
    &nbsp;


    {/* needs and solution */}
    <section className="r-bg-a sec-pad">
        <div className="container">
            <h3 className="sec-heading text-center">Why Choose Rice Hub?</h3>
            <div className="mt15">
                <p><b>Variety and Selection:</b> Rice Hub offers an extensive range of rice types, curated to meet the
                    tastes and preferences of every customer, whether for daily meals or gourmet dishes.</p>
            </div>
            <div className="mt15">
                <p><b>Sustainable Sourcing:</b> We partner with eco-conscious farmers who use sustainable practices,
                    minimizing environmental impact while supporting local communities.</p>
            </div>
            <div className="mt15">
                <p><b>Stringent Quality Checks:</b> Our quality assurance process includes multiple checks to deliver
                    only the finest and purest rice, ready for immediate use.</p>
            </div>
            <div className="mt15">
                <p><b>Customer-Centric Approach:</b> We prioritize customer satisfaction, providing clear information on
                    sourcing, product selection, and cooking tips to enhance the rice experience.</p>
            </div>
        </div>

        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/b2b-lead-intelligence-platform" className="ree-btn ree-btn-grdt2">
                        <i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
                    </a>
                    <a href="/web-and-app-development-for-education-services" className="ree-btn ree-btn-grdt2">
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
