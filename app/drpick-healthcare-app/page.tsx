import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dr.Pick – Digital Healthcare Super App | Online Consultations, Lab Tests & Medicines | mTouch Labs",
  description: "Dr.Pick is a digital healthcare super app for online doctor consultations, hospital bookings, lab tests, medicine delivery, and health record management.",
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
						<i className="fas fa-hospital mr5"></i> Dr.Pick – Digital Healthcare Super App
					</span>
					<h1 className="mb15" data-aos="fade-up" data-aos-delay="400">
						Dr.Pick – <span className="ree-text rt40">Unified Healthcare Web & Mobile App</span>
					</h1>
					<p className="h-light" data-aos="fade-up" data-aos-delay="600">
						A next-gen digital healthcare platform connecting Patients, Doctors, Labs, Pharmacies, and Insurance Partners in one powerful app.
					</p>
					<a href="https://play.google.com/store/apps/details?id=com.drpick.user" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">
						Go to Play Store <i className="fas fa-arrow-right fa-btn"></i>
					</a>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400">
					<img src="/images/portfolio/drpickmain.png" alt="Dr.Pick Healthcare Super App" className="img-fluid" />
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
					<h2 className="mb15">About Dr.Pick</h2>
					
					<p>Dr.Pick is an all-in-one patient-focused platform designed to simplify healthcare access. From online consultations and lab test bookings to medicine delivery and centralized health records, Dr.Pick ensures a seamless experience across hospitals, clinics, pharmacies, and diagnostic centers.</p>
					
					<h6 className="mt15">This platform enables:</h6>
					<ul className="list-style" style={{lineHeight: 28}}>
						<li>Easy doctor/hospital discovery</li>
						<li>Online appointments & virtual consultations</li>
						<li>Digital health records management</li>
						<li>AI-powered prescription-based medicine ordering</li>
						<li>Doorstep medicine & equipment delivery</li>
					</ul>
					<p className="mt15">It’s designed for patients, hospitals, pharmacies, labs, and insurance providers – ensuring an integrated healthcare ecosystem.</p>

					<h4 className="mt30 mb10">The Challenges</h4>
					<ul className="list-style" style={{lineHeight: 28}}>
						<li>Fragmented healthcare services across multiple apps.</li>
						<li>No unified system for appointments, consultations, and diagnostics.</li>
						<li>Lack of centralized medical history.</li>
						<li>Delayed medicine deliveries & poor tracking.</li>
						<li>Patients struggling with multiple apps for doctors, labs, and pharmacies.</li>
					</ul>

					<h4 className="mt30 mb10">The Solution</h4>
					<p>Dr.Pick solves these challenges by building a unified digital ecosystem.</p>
					<ul className="list-style" style={{lineHeight: 28}}>
						<li>✔️ Unified onboarding with health history storage</li>
						<li>✔️ Advanced search & filters for hospitals, doctors, and labs</li>
						<li>✔️ 24/7 video/audio consultations with instant e-prescriptions</li>
						<li>✔️ AI-based prescription scanning for medicine ordering</li>
						<li>✔️ Real-time delivery & lab tracking</li>
						<li>✔️ Centralized reports, prescriptions, and visit history</li>
						<li>✔️ Multiple payment options including insurance support</li>
					</ul>
				</div>
			</div>

			<div className="col-lg-6">
				<div className="technolo-sec">
					<div className="icon-with-title">
						<div className="iwt-icon"><img src="/images/icons/flutter-icon.svg" alt="Flutter" /></div>
						<div className="iwt-content"><p>Flutter</p></div>
					</div>
					<div className="icon-with-title">
						<div className="iwt-icon"><img src="/images/icons/IOS.svg" alt="iOS" /></div>
						<div className="iwt-content"><p>iOS</p></div>
					</div>
					<div className="icon-with-title">
						<div className="iwt-icon"><img src="/images/icons/React-icon.svg" alt="React JS" /></div>
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
					<h2 className="mb15"><span className="ree-text rt40">Features of Dr.Pick</span></h2>
					<p>Dr.Pick offers a unified digital healthcare app with advanced features for patients and providers.</p>
				</div>
				<div className="row justify-content-center mt30">
					<ul style={{listStyleType: "circle", lineHeight: 28}}>
						<li>Smart Onboarding – Mobile/email signup & secure health record storage</li>
						<li>Doctor & Hospital Booking – Filter by specialty, hospital, ratings</li>
						<li>Lab Tests – Book tests & health packages with online reports</li>
						<li>Consultations – Video, audio, or in-clinic with e-prescriptions</li>
						<li>Medicine Ordering – Search or auto-order via prescription</li>
						<li>Order Tracking – Real-time status for medicines & lab samples</li>
						<li>Health Records – Centralized prescriptions & reports</li>
						<li>Payments & Insurance – UPI, Cards, Wallets, Insurance</li>
						<li>Notifications – Appointment reminders & refill alerts</li>
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
			</div>
			<div className="col-lg-4">
				<div className="color-palette">
					<h5>Color palette</h5>

					{/*  Healthcare Blue  */}
					<div className="media mt60">
						<div className="color-box1 cbx11 ree-icon-set" style={{background: "#007ACC"}}></div>
						<div className="color-detailss ree-details-set">
							<h6>Healthcare Blue</h6>
							<p>#007ACC</p>
						</div>
					</div>

					{/*  Emerald Green  */}
					<div className="media mt30">
						<div className="color-box1 cbx12 ree-icon-set" style={{background: "#28A745"}}></div>
						<div className="color-detailss ree-details-set">
							<h6>Emerald Green</h6>
							<p>#28A745</p>
						</div>
					</div>

					{/*  Amber Orange  */}
					<div className="media mt30">
						<div className="color-box1 cbx15 ree-icon-set" style={{background: "#ffa600"}}></div>
						<div className="color-detailss ree-details-set">
							<h6>Amber Orange</h6>
							<p>#FFA600</p>
						</div>
					</div>

					{/*  Deep Blue  */}
					<div className="media mt30">
						<div className="color-box1 cbx16 ree-icon-set" style={{background: "#435c90"}}></div>
						<div className="color-detailss ree-details-set">
							<h6>Deep Blue</h6>
							<p>#435C90</p>
						</div>
					</div>

					{/*  Soft Gray  */}
					<div className="media mt30">
						<div className="color-box1 cbx13 ree-icon-set" style={{background: "#F5F5F5"}}></div>
						<div className="color-detailss ree-details-set">
							<h6>Soft Gray</h6>
							<p>#F5F5F5</p>
						</div>
					</div>

					{/*  White  */}
					<div className="media mt30">
						<div className="color-box1 cbx14 ree-icon-set" style={{background: "#FFFFFF", border: "1px solid #ddd"}}></div>
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
					<p>Explore Dr.Pick’s user-friendly app screens designed for patients and providers.</p>
				</div>
			</div>
		</div>
		<div className="app-screenss owl-carousel mt70 dottss">
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick1.png" alt="Onboarding" className="img-fluid" /></div></div>
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick2.png" alt="Doctor Booking" className="img-fluid" /></div></div>
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick3.png" alt="Hospital Profile" className="img-fluid" /></div></div>
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick4.png" alt="Lab Booking" className="img-fluid" /></div></div>
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick5.png" alt="Medicine Ordering" className="img-fluid" /></div></div>
			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick6.png" alt="Health Records" className="img-fluid" /></div></div>
                        			<div className="appscreen"><div className="itme-img"><img src="/images/portfolio/drpick7.png" alt="Health Records" className="img-fluid" /></div></div>
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
				<p className="mt15"><b>Simplified Patient Journey</b> – End-to-end healthcare in one app.</p>
				<p className="mt15"><b>Smart Consultations</b> – Video & audio consultations with instant e-prescriptions.</p>
				<p className="mt15"><b>Prescription AI</b> – Auto-detect medicines from uploaded prescriptions.</p>
				<p className="mt15"><b>Order Tracking</b> – Real-time status for medicines, labs & reports.</p>
				<p className="mt15"><b>Health History</b> – Secure digital storage of medical records.</p>
			</div>
			<div className="col-lg-6 m-mt30">
				<h3>Business-Centric Solutions</h3>
				<p className="mt15"><b>Hospitals</b> → Manage doctors, bookings, reports, and patients.</p>
				<p className="mt15"><b>Pharmacies</b> → AI-powered medicine orders with digital prescriptions.</p>
				<p className="mt15"><b>Labs</b> → Integrated test booking, sample collection & report uploads.</p>
				<p className="mt15"><b>Insurance Partners</b> → Direct claim support within the app.</p>
			</div>
		</div>
		<div className="row justify-content-center mt60">
			<div className="col-lg-6">
				<div className="center-btn big-txt">
					<a href="/web-and-app-development-for-real-estate-services" className="ree-btn ree-btn-grdt2">
						<i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
					</a>
					<a href="/app-and-web-development-for-ecommerce-services" className="ree-btn ree-btn-grdt2">
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
