import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HiTech Shuttle – Smart Bus Management Platform & Apps | mTouch Labs",
  description: "HiTech Shuttle is a smart bus management system with admin panel, passenger app, and driver app. Book rides, track buses, and use secure digital ticketing.",
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
                        <i className="fas fa-bus mr5"></i> HiTech Shuttle
                    </span>
                    <h1 className="mb15" data-aos="fade-up" data-aos-delay="400">
                        Smart Bus Management Platform <span className="ree-text rt40"> Web Panel + Mobile Applications </span>
                    </h1>
                    <p className="h-light" data-aos="fade-up" data-aos-delay="600">
                        Seamless shuttle operations with real-time tracking, cashless booking, and centralized control.
                    </p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400">
                    <img src="/images/portfolio/hitechmain.png" alt="HiTech Shuttle Bus Management"
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
                    <h2 className="mb15">About HiTech Shuttle</h2>
                    <p>
                        HiTech Shuttle is a smart transportation management platform built to digitize and streamline shuttle services for both passengers and operators.
                    </p>
                    <p>It provides an integrated ecosystem consisting of:</p>
                    &nbsp;
                    <p><b>Super Admin Web Panel</b> – Manage buses, drivers, routes, pricing, and schedules.</p>
                    <p><b>User Mobile App</b> – Passengers discover routes, book rides, and make cashless payments.</p>
                    <p><b>Driver Mobile App</b> – Drivers manage trips, validate passengers, and share live locations.</p>
                    <p className="mt15">The platform ensures <b>safety, transparency, and efficiency</b> in every shuttle journey.</p>

                    <h4 className="mt30">The Challenges</h4>
                        &nbsp;
                    <p>• Manual bus and driver management leading to errors.</p>
                    <p>• Difficulty in handling routes, stoppages, and dynamic pricing.</p>
                    <p>• Lack of real-time bus tracking for passengers.</p>
                    <p>• Inefficient ticketing and passenger validation process.</p>
                    <p>• Limited communication between passengers, drivers, and administrators.</p>

                    <h4 className="mt30">The Solution</h4>
                        &nbsp;
                    <p>HiTech Shuttle was developed as an end-to-end digital platform enabling:</p>
                    <p>✔️ Centralized control of buses, drivers, and routes via the web panel.</p>
                    <p>✔️ Real-time route discovery, fare calculation, and ride booking for passengers.</p>
                    <p>✔️ Digital ticketing with QR code-based validation.</p>
                    <p>✔️ Driver-side app for trip initiation, passenger verification, and live tracking.</p>
                    <p>✔️ Comprehensive reporting and dashboards for administrators.</p>
                </div>
            </div>

            <div className="col-lg-6">
                <div className="technolo-sec">
                    <div className="icon-with-title">
                        <div className="iwt-icon"><img src="/images/icons/flutter-icon.svg" alt="Android" /></div>
                        <div className="iwt-content"><p>Flutter</p></div>
                    </div>
                    <div className="icon-with-title">
                        <div className="iwt-icon"><img src="/images/icons/React-icon.svg" alt="iOS" /></div>
                        <div className="iwt-content"><p>React JS</p></div>
                    </div>
                  
                    <div className="icon-with-title">
                        <div className="iwt-icon"><img src="/images/icons/Node.JS.svg" alt="NodeJS" /></div>
                        <div className="iwt-content"><p>NodeJS</p></div>
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
                    <h2 className="mb15"><span className="ree-text rt40">Features of </span> HiTech Shuttle Platform</h2>
                   
                    <p>The HiTech Shuttle ecosystem delivers powerful tools for administrators, passengers, and drivers.</p>
                </div>
                    &nbsp;
                <ul style={{listStyleType: "circle"}}>
                     
                    <li><h6>Super Admin Web Panel – Access & Roles, Bus/Driver Management, Route & Schedule Setup, Reporting</h6></li>
                       &nbsp;
                    <li><h6>User Mobile App – Route discovery, booking, payments, live tracking, QR-based boarding</h6></li>
                       &nbsp;
                    <li><h6>Driver Mobile App – Trip initiation, passenger validation, live GPS sharing</h6></li>
                       &nbsp;
                    <li><h6>Digital Payments – Secure and cashless with instant confirmations</h6></li>
                       &nbsp;
                    <li><h6>Comprehensive Dashboards – Real-time visibility of operations</h6></li>
                </ul>
            </div>
        </div>
    </div>
</section>
{/* features end */}

{/* typo & branding */}
<section className="home-partners-block r-bg-c sec-pad">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <h5>Typography & Branding</h5>
                <div className="typo-set mt60">
                    <div className="typo-head">
                        <h2>Aa</h2>
                        <p>Roboto / Inter<span>Modern & Readable</span></p>
                    </div>
                </div>
                <div className="heading-paragrapph mt60">
                    <h3 className="mb20">Consistent & Professional UI</h3>
                    <p>
                        HiTech Shuttle follows a clean and minimal design system with Roboto/Inter typography, making it easy to read and modern for both mobile and web platforms.
                    </p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="color-palette">
                    <h5>Color palette</h5>
                    <div className="media mt60">
                     
                        <div className="color-box1" style={{background: "#0066CC"}}></div>
                        
                        <div className="color-detailss" ><h6>Transport Blue</h6><p>#0066CC</p></div>
                    </div>
                    <div className="media mt30">
                        <div className="color-box1" style={{background: "#FF6B35"}}></div>
                           
                        <div className="color-detailss"><h6>Safety Orange</h6><p>#FF6B35</p></div>
                    </div>
                    <div className="media mt30">
                        <div className="color-box1" style={{background: "#F4F4F4"}}></div>
                        <div className="color-detailss"><h6>Neutral Gray</h6><p>#F4F4F4</p></div>
                    </div>
                    <div className="media mt30">
                        <div className="color-box1" style={{background: "#FFFFFF", border: "1px solid #ddd"}}></div>
                        <div className="color-detailss"><h6>White</h6><p>#FFFFFF</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* typo end */}

{/* app screens */}
<section className="home-partners-block r-bg-x sec-pad">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="sec-heading text-center">
                    <h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
                    <p>Check Out Passenger and Driver App Screens of HiTech Shuttle</p>
                </div>
            </div>
        </div>
        <div className="app-screenss owl-carousel mt70 dottss">
            <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech1.png" alt="Passenger App" className="img-fluid" /></div></div>
            <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech2.png" alt="Passenger Booking" className="img-fluid" /></div></div>
            <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech3.png" alt="Driver App" className="img-fluid" /></div></div>
            <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech4.png" alt="Driver Validation" className="img-fluid" /></div></div>

           <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech5.png" alt="Driver Validation" className="img-fluid" /></div></div>
           <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech6.png" alt="Driver Validation" className="img-fluid" /></div></div>
      
            <div className="appscreen"><div className="itme-img"><img src="/images/portfolio/hitech7.png" alt="Driver Validation" className="img-fluid" /></div></div>
      
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
                 &nbsp;
                <p><b>1. Seamless Shuttle Operations</b> – Centralized control of buses, drivers, and schedules.</p>
                <p><b>2. Passenger-Friendly</b> – Simple booking, digital tickets, live tracking.</p>
                <p><b>3. Driver-Centric</b> – Easy trip monitoring & QR validation.</p>
                <p><b>4. Data-Driven Insights</b> – Admin dashboards & reporting tools.</p>
                <p><b>5. Cashless & Secure</b> – Digital payments with real-time confirmations.</p>
            </div>
            <div className="col-lg-6 m-mt30">
                <h3>Business-Centric Solutions</h3>
                 &nbsp;
                <p><b>Shuttle Operators</b> → Efficient fleet & staff management.</p>
                <p><b>Passengers</b> → Convenient ride booking & safe travel experience.</p>
                <p><b>Drivers</b> → Simplified route navigation & passenger validation.</p>
                <p><b>Administrators</b> → End-to-end visibility & control with reports.</p>
            </div>
        </div>
        <div className="row justify-content-center mt60">
            <div className="col-lg-6">
                <div className="center-btn big-txt">
                    <a href="/healthcare-super-app" className="ree-btn ree-btn-grdt2"><i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project </a>
                    <a href="/next-project" className="ree-btn ree-btn-grdt2"> Next Project <i className="fas fa-arrow-right fa-btn"></i></a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* needs and solution end */}
    </>
  );
}
