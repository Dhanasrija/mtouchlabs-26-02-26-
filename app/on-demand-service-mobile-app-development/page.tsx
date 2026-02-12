import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App and Web Development for On-Demand Services | mTouch Labs",
  description: "Expert mobile app and web development services for creating seamless on-demand platforms, connecting users and vendors for efficient service delivery.",
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
                                className="fas fa-briefcase mr5"></i>Adifie</span>
                        <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Streamlined Mobile App Development for
                            On-Demand Services</h1>
                        <p className="h-light" data-aos="fade-up" data-aos-delay="600">Create intuitive, feature-rich mobile
                            apps that connect customers and vendors for seamless on-demand service delivery, ensuring a
                            smooth experience from start to finish.
                        </p>
                        <a href="https://play.google.com/store/apps/details?id=com.adifie.user&hl=en" target="_blank"
                            className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to Play Store <i
                                className="fas fa-arrow-right fa-btn"></i></a>
                        {/*  <a href="https://apps.apple.com/us/app/khidkee-marketplace/id1546476049" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i className="fas fa-arrow-right fa-btn"></i></a>  */}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                            src="/images/case-study/adifie.svg" alt="On demand Services" className="img-fluid" /></div>
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
                        <h2 className="mb15">About Adifie</h2>
                        <p className="mt15">
                            One of the top platforms for developing on-demand service apps is Adify, which provides web
                            and mobile solutions to easily link customers with providers. Adify guarantees a seamless
                            experience for both clients and service providers by emphasizing effective service delivery.
                            Our apps are made to meet the specific requirements of different sectors by being
                            user-friendly, quick, and scalable.
                        </p>
                        <p className="mt15">
                            We guarantee a top-notch user experience by offering end-to-end services, from app design
                            and development to integration and deployment. Our team is committed to developing solutions
                            that increase customer satisfaction, expedite procedures, and promote business growth. For
                            all on-demand service requirements, Adify offers complete solutions, including secure
                            payment channels, real-time service tracking, and configurable features.
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
                                <div className="iwt-icon"> <img src="/images/icons/flutter-icon.svg" alt="angular" />
                                </div>
                                <div className="iwt-content">
                                    <p>Flutter</p>
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
                        <h2 className="mb15">Features of On-Demand Service Mobile App Development
                        </h2>
                        <p className="mb15">Let’s Go Through The Features Of This On-Demand Services Mobile App Development
                        </p>
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
                                            className="d-block  collapsed  collapsible-link">Real-Time Tracking
                                        </a></h6>
                                </div>
                                <div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
                                    className="collapse show">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Track service providers&apos; location for efficient
                                            delivery.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 2  */}
                            <div className="cards">
                                <div id="heading2" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse2"
                                            aria-expanded="false" aria-controls="collapse2"
                                            className="d-block  collapsed  collapsible-link">Secure Payment Integration
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Several safe payment methods to ensure seamless
                                            transactions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 3  */}
                            <div className="cards">
                                <div id="heading3" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse3"
                                            aria-expanded="false" aria-controls="collapse3"
                                            className="d-block  collapsed  collapsible-link"> User and Vendor Ratings
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0"> Ratings for both users and service providers
                                            ensure quality.

                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/*  Accordion item 4  */}
                            <div className="cards">
                                <div id="heading4" className="card-header">
                                    <h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse4"
                                            aria-expanded="false" aria-controls="collapse4"
                                            className="d-block  collapsed  collapsible-link">Push Notifications
                                        </a>
                                    </h6>
                                </div>
                                <div id="collapse4" aria-labelledby="heading4" data-parent="#accordionExample"
                                    className="collapse">
                                    <div className="card-body p-4">
                                        <p className="font-weight-light m-0">Get timely updates on order status and special
                                            offers.</p>
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
                        <h3 className="mb20 h1"> On-Demand Service Mobile App Development
                        </h3>
                        <p>
                            Mobile app development for on-demand services transforms how companies interact with clients
                            and suppliers. These applications offer a smooth user experience that enables speedy and
                            effective service access. On-demand apps simplify service delivery in a variety of
                            industries, from secure payment gateways and real-time tracking to configurable features and
                            intuitive user interfaces. On-demand mobile apps guarantee convenience, dependability, and
                            immediate access for home services, food delivery, and transportation, enabling businesses
                            to satisfy client requests while increasing operational efficiency.
                        </p>
                        &nbsp;
                        &nbsp;
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="color-palette">
                        <h5>Color palette</h5>

                        <div className="media mt60">
                            <div className="color-box1 cbx140 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Gold</h6>
                                <p>#FFD700</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx141 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6>Almost Black (Very Dark Gray)</h6>
                                <p>#111111</p>
                            </div>
                        </div>

                        <div className="media mt30">
                            <div className="color-box1 cbx142 ree-icon-set"></div>
                            <div className="color-detailss ree-details-set">
                                <h6> Gray (Medium Gray)</h6>
                                <p>#8A8A8A</p>
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
                        <p>Check Out Our Outstanding Screens of Adifie App Development</p>
                    </div>
                </div>
            </div>

            <div className="app-screenss owl-carousel mt70 dottss">
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/adifie-screen1.svg" alt="mockup"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/adifie-screen2.svg" alt="mockup"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/adifie-screen3.svg" alt="mockup"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/adifie-screen5.svg" alt="mockup"
                            className="img-fluid" />
                    </div>
                </div>
                <div className="appscreen">
                    <div className="itme-img"><img src="/images/case-study/adifie-screen4.svg" alt="mockup"
                            className="img-fluid" />
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
            <h3 className="sec-heading text-center">Why Choose Our App?</h3>
            <div className="mt15">
                <p><b>Tracking in Real Time:</b> Real-time vendor and service tracking improves ease and transparency,
                    allowing you to track service providers’ locations and updates for enhanced service delivery.</p>
            </div>
            <div className="mt15">
                <p><b>Integration of Secure Payments:</b> A seamless and secure transaction experience is guaranteed by
                    a variety of safe payment methods, ensuring peace of mind for users and service providers alike.</p>
            </div>
            <div className="mt15">
                <p><b>User-Friendly Interface:</b> Both clients and service providers can navigate with ease thanks to
                    our intuitive and user-friendly design, which makes interaction smooth and hassle-free.</p>
            </div>
            <div className="mt15">
                <p><b>Solutions That Are Scalable:</b> Our app comes with tools and features that adapt to your growing
                    business needs, ensuring your operations can expand effortlessly as your company grows.</p>
            </div>

            {/*  User App Features  */}
            <h3 className="sec-heading text-center mt60">User App Features</h3>
            <div className="mt15">
                <p><b>Simple Login & Signup:</b> For a smooth start, quickly register using cellphone numbers and OTP
                    verification, making the signup process fast and simple.</p>
            </div>
            <div className="mt15">
                <p><b>Tracking in Real Time:</b> Track service providers in real time for precise updates and
                    transparency, ensuring you always know the status of your request.</p>
            </div>
            <div className="mt15">
                <p><b>Safe Payment Methods:</b> Choose from several payment methods, including Cash on Delivery (COD)
                    and secure gateways, providing flexibility and security for users.</p>
            </div>
            <div className="mt15">
                <p><b>Filtering Services:</b> Easily sort services by availability, gender, and other criteria to find
                    exactly what you need with ease.</p>
            </div>
            <div className="mt15">
                <p><b>Order Overview and Savings:</b> Check orders, use coupons, and enjoy savings before completing the
                    checkout process, giving users more control over their experience.</p>
            </div>

            {/*  Vendor App Features  */}
            <h3 className="sec-heading text-center mt60">Vendor App Features</h3>
            <div className="mt15">
                <p><b>Fast Registration and Validation:</b> Simple registration that includes selecting a work category
                    and Aadhar verification, ensuring quick and easy onboarding for vendors.</p>
            </div>
            <div className="mt15">
                <p><b>Management of Orders:</b> Vendors can accept or reject orders based on availability and preferred
                    distance, providing flexibility in managing service requests.</p>
            </div>
            <div className="mt15">
                <p><b>Navigation in Real Time:</b> Vendors can track their location and projected arrival time via an
                    integrated map, ensuring accurate and timely service delivery.</p>
            </div>
            <div className="mt15">
                <p><b>The Dashboard for Earnings:</b> View detailed reports of referral incentives, graphical summaries,
                    and total earnings, helping vendors stay on top of their financial performance.</p>
            </div>
            <div className="mt15">
                <p><b>OTP-Assisted Service Completion:</b> OTP verification ensures the safe completion of services and
                    payments, adding an extra layer of security and trust for both vendors and users.</p>
            </div>
        </div>

        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/web-and-app-development-for-education-services" className="ree-btn ree-btn-grdt2">
                        <i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
                    </a>
                    <a href="/custom-app-development-for-temple-services" className="ree-btn ree-btn-grdt2">
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
