import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Super App | Unified Digital Healthcare Platform | mTouch Labs",
  description: "A single Healthcare Super App for patients, doctors, labs & pharmacies. Book consultations, order medicines, rent equipment & manage health records.",
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
                                                <span className="sub-heading mb15" data-aos="fade-up"
                                                        data-aos-delay="200"><i className="fas fa-hospital mr5"></i>
                                                        Healthcare Super App</span>
                                                <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Healthcare
                                                        Super App – <span className="ree-text rt40">ECommerce Web & Mobile
                                                                Application</span></h1>
                                                <p className="h-light" data-aos="fade-up" data-aos-delay="600">A Unified
                                                        Digital Healthcare Platform –
                                                        Connecting Patients, Doctors, Labs, Pharmacies, and Equipment
                                                        Providers in One App.</p>
                                                <a href="/healthcare-super-app" target="_blank" className="port-links mt40"
                                                        data-aos="fade-up" data-aos-delay="800">Go to Website <i
                                                                className="fas fa-arrow-right fa-btn"></i></a>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
                                                        src="/images/portfolio/onusmain.png" alt="Healthcare Super App"
                                                        className="img-fluid" /></div>
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
                                                <h2 className="mb15">About Healthcare Super App</h2>
                                                <h4>Concept</h4>
                                                <p>The Healthcare Super App is an all-in-one patient-centric platform
                                                        that simplifies access to
                                                        healthcare services. From doctor consultations, lab tests, and
                                                        medicine delivery to medical
                                                        equipment rentals, the app ensures seamless digital healthcare
                                                        experiences across hospitals,
                                                        clinics, pharmacies, and diagnostic centers.</p>

                                                <h6 className="mt15">This platform enables:</h6>
                                                &nbsp;
                                                <ul className="list-style" style={{lineHeight: 28}}>
                                                        <li>Easy doctor/hospital discovery</li>
                                                        <li>Online & in-hospital appointments</li>
                                                        <li>Digital health records management</li>
                                                        <li>AI-powered prescription-based medicine ordering</li>
                                                        <li>Doorstep delivery of medicines & equipment</li>
                                                </ul>
                                                <p className="mt15">It’s designed for patients, hospitals, pharmacies, and
                                                        labs – ensuring an integrated
                                                        healthcare ecosystem.</p>


                                                <h4 className="mt30 mb10">The Solution</h4>
                                                <p>The Healthcare Super App solves these challenges by building a single
                                                        digital ecosystem.</p>
                                                <ul className="list-style" style={{lineHeight: 28}}>
                                                        <li>✔️ Unified onboarding with medical history storage.</li>
                                                        <li>✔️ Advanced search & filters for hospitals, doctors, and
                                                                labs.</li>
                                                        <li>✔️ 24/7 video/audio consultations.</li>
                                                        <li>✔️ AI-based prescription scanning for medicine ordering.
                                                        </li>
                                                        <li>✔️ Real-time delivery tracking.</li>
                                                        <li>✔️ Integrated reports, prescriptions, and past visit
                                                                history.</li>
                                                        <li>✔️ Multiple payment options including insurance.</li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="col-lg-6">
                                        <div className="technolo-sec">
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/flutter-icon.svg"
                                                                        alt="Android" /></div>
                                                        <div className="iwt-content">
                                                                <p>Flutter</p>
                                                        </div>
                                                </div>
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/IOS.svg" alt="iOS" />
                                                        </div>
                                                        <div className="iwt-content">
                                                                <p>iOS</p>
                                                        </div>
                                                </div>
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/React-icon.svg"
                                                                        alt="Website" /></div>
                                                        <div className="iwt-content">
                                                                <p>React JS</p>
                                                        </div>
                                                </div>
                                                <div className="icon-with-title">
                                                        <div className="iwt-icon"><img src="/images/icons/Node.JS.svg"
                                                                        alt="NodeJS" /></div>
                                                        <div className="iwt-content">
                                                                <p>NodeJS</p>
                                                        </div>
                                                </div>


                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* about items end */}

        {/* features */}
        <section className="home-partners-block r-bg-x sec-pad">
                <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-lg-8">
                                        <div className="sec-heading text-center">
                                                <h2 className="mb15"><span className="ree-text rt40">Features of Healthcare
                                                                Super App</span></h2>
                                                <p>The solution of unified healthcare app development by the team of
                                                        mTouchlabs has the following
                                                        unbeatable features</p>
                                        </div>
                                        <div className="row justify-content-center mt30">
                                                <ul style={{listStyleType: "circle", lineHeight: 28}}>
                                                        <li>Smart Onboarding – Register via mobile/email, save health
                                                                records.</li>
                                                        <li>Hospital & Doctor Booking – Filter by hospital, specialty,
                                                                slots, ratings.</li>
                                                        <li>Health Check-ups – Book lab tests & health packages with
                                                                online reports.</li>
                                                        <li>Consultations – Video, audio, or in-clinic with digital
                                                                prescription upload.</li>
                                                        <li>Medicine Ordering – Search, upload prescription, or
                                                                auto-order from consultation.</li>
                                                        <li>Medical Equipment Delivery – Rent/buy equipment with
                                                                doorstep delivery.</li>
                                                        <li>Order Tracking – Live status for medicines, equipment, and
                                                                samples.</li>
                                                        <li>Health Records – Centralized prescriptions, lab reports &
                                                                history.</li>
                                                        <li>Payments & Insurance – UPI, Cards, Wallet & insurance
                                                                integration.</li>
                                                </ul>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* features end */}

        {/* branding */}
        <section className="home-partners-block r-bg-c sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-8">
                                        <h5>Typography & Branding</h5>
                                        <div className="typo-set mt60">
                                                <div className="typo-head">
                                                        <h2>Aa</h2>
                                                        <p>Poppins / Roboto <span>Modern & Clean</span></p>
                                                </div>

                                        </div>
                                        <div>
                                                <h4 className="mt30 mb10">The Challenges</h4>
                                                <ul className="list-style" style={{lineHeight: 28}}>
                                                        <li>Fragmented healthcare services spread across multiple
                                                                platforms.</li>
                                                        <li>Lack of a unified system for appointments, consultations,
                                                                medicines, and diagnostics.</li>
                                                        <li>Manual record-keeping → no centralized patient medical
                                                                history.</li>
                                                        <li>Delayed medicine deliveries & poor tracking.</li>
                                                        <li>Patients struggling with multiple apps for doctors,
                                                                pharmacies, and labs.</li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="col-lg-4">
                                        <div className="color-palette">
                                                <h5>Color palette</h5>
                                                <div className="media mt60">
                                                        <div className="color-box1 cbx11 ree-icon-set"></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Healthcare Blue</h6>
                                                                <p>#007ACC</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1 cbx12 ree-icon-set"></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Emerald Green</h6>
                                                                <p>#28A745</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1 cbx13 ree-icon-set"></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Soft Gray</h6>
                                                                <p>#F5F5F5</p>
                                                        </div>
                                                </div>
                                                <div className="media mt30">
                                                        <div className="color-box1 cbx14 ree-icon-set"></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>White</h6>
                                                                <p>#FFFFFF</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* branding end */}

        {/* app screens */}
        <section className="home-partners-block r-bg-x sec-pad">
                <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-lg-8">
                                        <div className="sec-heading text-center">
                                                <h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
                                                <p>Check Out Our Outstanding App Screens Of Healthcare Super App</p>
                                        </div>
                                </div>
                        </div>
                        <div className="app-screenss owl-carousel mt70 dottss">
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus1.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus2.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus3.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus4.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus5.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus6.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img"><img src="/images/portfolio/onus7.png" alt="mockup"
                                                        className="img-fluid" /></div>
                                </div>

                        </div>
                </div>
        </section>
        {/* app screens end */}

        {/* needs and solution */}
        <section className="r-bg-a sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                        <h3>Core Features</h3>
                                        <p className="mt15"><b>Simplified Patient Journey</b> – End-to-end healthcare in one
                                                app.</p>
                                        <p className="mt15"><b>Smart Consultations</b> – In-app video, audio & instant
                                                consultations.</p>
                                        <p className="mt15"><b>Prescription AI</b> – Auto-detect medicines from uploaded
                                                prescriptions.</p>
                                        <p className="mt15"><b>Order Tracking</b> – Real-time status of medicines, labs &
                                                equipment.</p>
                                        <p className="mt15"><b>Health History</b> – Digital storage of all health records.
                                        </p>
                                </div>
                                <div className="col-lg-6 m-mt30">
                                        <h3>Business-Centric Solutions</h3>
                                        <p className="mt15"><b>Hospitals</b> → Manage doctors, bookings, reports, and
                                                patients.</p>
                                        <p className="mt15"><b>Pharmacies</b> → AI-driven medicine orders, digital
                                                prescriptions.</p>
                                        <p className="mt15"><b>Labs</b> → Integrated test booking, sample collection &
                                                report uploads.</p>
                                        <p className="mt15"><b>Equipment Providers</b> → Rent/sell medical equipment with
                                                delivery tracking.</p>
                                        <p className="mt15"><b>Insurance Partners</b> → Direct claim support within the app.
                                        </p>
                                </div>
                        </div>
                        <div className="row justify-content-center mt60">
                                <div className="col-lg-6">
                                        <div className="center-btn big-txt">
                                                <a href="/web-and-app-development-for-real-estate-services"
                                                        className="ree-btn  ree-btn-grdt2"><i
                                                                className="fas fa-arrow-left fa-btn mr5"></i> Previous
                                                        Project </a>
                                                <a href="/hitech-shuttle-bus-management-platform"
                                                        className="ree-btn  ree-btn-grdt2"> Next Project <i
                                                                className="fas fa-arrow-right fa-btn"></i></a>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* needs and solution end */}
    </>
  );
}
