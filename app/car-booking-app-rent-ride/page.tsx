import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Booking App | Rent a Ride in Minutes | mTouch Labs",
  description: "Tripsy is a mobile car booking app by mTouch Labs, designed for users to rent vehicles easily while helping providers manage listings, bookings, and customers from a single dashboard.",
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
                                                <span className="sub-heading mb15" data-aos="fade-up" data-aos-delay="200">
                                                        <i className="fas fa-car mr5"></i> Car Booking App
                                                </span>
                                                <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">
                                                        Tripsy Car Booking <span className="ree-text rt40">App
                                                                Development</span>
                                                </h1>
                                                <p className="h-light" data-aos="fade-up" data-aos-delay="600">
                                                        Tripsy is a mobile-first car rental application designed to
                                                        simplify booking, fleet management, and customer interactions
                                                        for vehicle rental businesses.
                                                </p>
                                                <a href="https://play.google.com/store/apps/details?id=com.tripsy.user&pcampaignid=web_share"
                                                        target="_blank" className="port-links mt40" data-aos="fade-up"
                                                        data-aos-delay="800">
                                                        Go to Play Store <i className="fas fa-arrow-right fa-btn"></i>
                                                </a>
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400">
                                                <img src="/images/portfolio/Tripsy.png" alt="Tripsy App Screens"
                                                        className="img-fluid" />
                                        </div>
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
                                                <h2 className="mb15">About Tripsy</h2>
                                                <p>
                                                        Tripsy is a smart, user-friendly car booking mobile application
                                                        developed by
                                                        <strong>mTouch Labs</strong> to revolutionize how users find,
                                                        book, and manage car rentals on the go.
                                                </p>
                                                <p className="mt15">
                                                        Designed for both travelers and rental agencies, Tripsy lets
                                                        users browse cars by category, filter options based on location,
                                                        compare prices, and book seamlessly through the app.
                                                </p>
                                                <p className="mt15">
                                                        On the provider side, vehicle rental businesses can manage
                                                        inventory, pricing, availability, and customer bookings through
                                                        a centralized dashboard—ensuring real-time control and
                                                        visibility.
                                                </p>
                                                <p className="mt15">
                                                        Features like secure UPI/card payments, ride tracking, history
                                                        logs, and automated push notifications make Tripsy a holistic
                                                        digital solution for modern car rental needs.
                                                </p>
                                        </div>
                                </div>

                                <div className="col-lg-6">
                                        <div className="technolo-sec">
                                                <div className="icon-with-title">
                                                        <a href="javascript:void(0)">
                                                                <div className="iwt-icon">
                                                                        <img src="/images/icons/flutter-icon.svg"
                                                                                alt="Flutter" />
                                                                </div>
                                                                <div className="iwt-content">
                                                                        <p>Flutter (Mobile App)</p>
                                                                </div>
                                                        </a>
                                                </div>

                                                <div className="icon-with-title">
                                                        <a href="javascript:void(0)">
                                                                <div className="iwt-icon">
                                                                        <img src="/images/icons/React-icon.svg"
                                                                                alt="React JS" />
                                                                </div>
                                                                <div className="iwt-content">
                                                                        <p>React JS (Admin Panel)</p>
                                                                </div>
                                                        </a>
                                                </div>

                                                <div className="icon-with-title">
                                                        <a href="javascript:void(0)">
                                                                <div className="iwt-icon">
                                                                        <img src="/images/icons/Node.JS.svg"
                                                                                alt="Node JS" />
                                                                </div>
                                                                <div className="iwt-content">
                                                                        <p>Node JS (Backend)</p>
                                                                </div>
                                                        </a>
                                                </div>

                                                <div className="icon-with-title">
                                                        <a href="javascript:void(0)">
                                                                <div className="iwt-icon">
                                                                        <img src="/images/icons/Firebase.svg"
                                                                                alt="Firebase" />
                                                                </div>
                                                                <div className="iwt-content">
                                                                        <p>Firebase (Auth & Notifications)</p>
                                                                </div>
                                                        </a>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* about items end */}

        {/* item screen */}
        {/* item screen */}
        <section className="home-partners-block r-bg-x sec-pad">
                <div className="container">
                        <div className="row justify-content-center">
                                <div className="col-lg-8">
                                        <div className="sec-heading text-center">
                                                <h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
                                                <p>Display intuitive user flow for car search, booking confirmation,
                                                        trip history, and admin dashboard panels.</p>
                                        </div>
                                </div>
                        </div>

                        <div className="app-screenss owl-carousel mt70 dottss">
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy1.png" alt="Tripsy App Screen 1"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy2.png" alt="Tripsy App Screen 2"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy3.png" alt="Tripsy App Screen 3"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy4.png" alt="Tripsy App Screen 4"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy5.png" alt="Tripsy App Screen 5"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy6.png" alt="Tripsy App Screen 6"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                                <div className="appscreen">
                                        <div className="itme-img">
                                                <img src="/images/case-study/Tripsy7.png" alt="Tripsy App Screen 7"
                                                        className="img-fluid" />
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* item screen end */}


        {/* item screen end */}

        {/* item typo */}
        <section className="home-partners-block r-bg-c sec-pad">
                <div className="container">
                        <div className="row">
                                {/*  Typography Section with Business Highlight  */}
                                <div className="col-lg-8">
                                        <h5>Typography</h5>
                                        <div className="typo-set mt60">
                                                <div className="typo-head">
                                                        <h2>Aa</h2>
                                                        <p>PT Serif Caption <span>Headings</span></p>
                                                </div>

                                                <div className="typo-head mt40">
                                                        <h2>Aa</h2>
                                                        <p>Poppins <span>Body</span></p>
                                                </div>
                                        </div>

                                        <div className="heading-paragrapph mt60">
                                                <h3 className="mb20 h1">Why Choose Tripsy?</h3>
                                                <p>
                                                        <strong>Tripsy</strong> is not just another car booking app —
                                                        it’s a complete ecosystem for smart mobility. Designed with a
                                                        mobile-first approach, it offers the flexibility, speed, and
                                                        convenience modern users expect, while giving rental businesses
                                                        the tools to manage operations effectively.
                                                </p>
                                                &nbsp;
                                                <p>
                                                        From small rental shops to enterprise fleets, Tripsy supports
                                                        scalable growth through automation, transparency, and a great
                                                        user experience. Say goodbye to phone calls, paper records, and
                                                        booking errors — <strong>Tripsy</strong> does the heavy lifting
                                                        so you can focus on the journey.
                                                </p>
                                        </div>
                                </div>

                                {/*  Color Palette Section  */}
                                <div className="col-lg-4">
                                        <div className="color-palette">
                                                <h5>Color Palette</h5>

                                                <div className="media mt60">
                                                        <div className="color-box1 ree-icon-set"
                                                                style={{backgroundColor: "#040404"}}></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Primary: Almost Black</h6>
                                                                <p>#040404</p>
                                                        </div>
                                                </div>

                                                <div className="media mt30">
                                                        <div className="color-box1 ree-icon-set"
                                                                style={{backgroundColor: "#FABA50"}}></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Accent: Yellow Orange</h6>
                                                                <p>#FABA50</p>
                                                        </div>
                                                </div>

                                                <div className="media mt30">
                                                        <div className="color-box1 ree-icon-set"
                                                                style={{backgroundColor: "#FFEACB"}}></div>
                                                        <div className="color-detailss ree-details-set">
                                                                <h6>Background: Peach</h6>
                                                                <p>#FFEACB</p>
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* item typo end */}

        &nbsp;

        {/* needs and solution */}
        <section className="r-bg-a sec-pad">
                <div className="container">
                        <div className="row">
                                <div className="col-lg-6">
                                        <h3>User App Features</h3>

                                        <p className="mt15"><b>1. Easy Sign-Up and Login</b></p>
                                        <p className="mt15">Quick registration with mobile verification or social login
                                                options.</p>
                                        &nbsp;

                                        <p className="mt15"><b>2. Browse & Filter Cars</b></p>
                                        <p className="mt15">Search and filter vehicles by category (SUV, Sedan, Hatchback),
                                                pricing, location, or availability.</p>
                                        &nbsp;

                                        <p className="mt15"><b>3. Instant Booking</b></p>
                                        <p className="mt15">Book your ride with just a few taps by selecting pickup and
                                                drop-off locations and timings.</p>
                                        &nbsp;

                                        <p className="mt15"><b>4. Secure Payments</b></p>
                                        <p className="mt15">Pay securely using Razorpay or Stripe via UPI, credit/debit
                                                cards, or wallets.</p>
                                        &nbsp;

                                        <p className="mt15"><b>5. Trip History</b></p>
                                        <p className="mt15">Access your previous bookings, invoices, and upcoming rides in
                                                one place.</p>
                                        &nbsp;

                                        <p className="mt15"><b>6. Push Notifications</b></p>
                                        <p className="mt15">Receive real-time alerts for booking confirmations, reminders,
                                                and offers.</p>
                                </div>

                                <div className="col-lg-6 m-mt30">
                                        <h3>Admin/Provider Dashboard Features</h3>

                                        <p className="mt15"><b>1. Car Listing Management</b></p>
                                        <p className="mt15">Add, update, or remove vehicle listings with images, pricing,
                                                and availability details.</p>
                                        &nbsp;

                                        <p className="mt15"><b>2. Booking Overview</b></p>
                                        <p className="mt15">Track current bookings, user details, and monitor real-time
                                                revenue metrics.</p>
                                        &nbsp;

                                        <p className="mt15"><b>3. Customer Management</b></p>
                                        <p className="mt15">View customer profiles, booking history, feedback, and behavior
                                                trends.</p>
                                        &nbsp;

                                        <p className="mt15"><b>4. Reporting & Analytics</b></p>
                                        <p className="mt15">Analyze booking trends, fleet performance, and financial
                                                reports.</p>
                                        &nbsp;

                                        <p className="mt15"><b>5. Promotions & Discounts</b></p>
                                        <p className="mt15">Create and manage discount codes, special offers, and loyalty
                                                programs.</p>
                                        &nbsp;

                                        <p className="mt15"><b>6. User Role Management</b></p>
                                        <p className="mt15">Assign roles and access controls to admins, agents, and support
                                                staff.</p>
                                </div>
                        </div>

                        <div className="row justify-content-center mt60">
                                <div className="col-lg-6">
                                        <div className="center-btn big-txt">
                                                <a href="/rahayel-parking-lot-management-system"
                                                        className="ree-btn ree-btn-grdt2">
                                                        <i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
                                                </a>
                                                <a href="/abu-dhabi-judicial-department-mobile-app-development"
                                                        className="ree-btn ree-btn-grdt2">
                                                        Next Project <i className="fas fa-arrow-right fa-btn"></i>
                                                </a>
                                        </div>
                                </div>
                        </div>
                </div>
        </section>
        {/* needs and solution end */}
    </>
  );
}
