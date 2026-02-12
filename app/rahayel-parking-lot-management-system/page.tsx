import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parking Lot Management | Vehicle Slot Allocation App | mTouch Labs",
  description: "Rahayel is a VIN-based parking lot management system by mTouch Labs for the Rahayel Group. Designed to streamline vehicle drop-off, pickup, and slot tracking with secure workflows and real-time admin control.",
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
							<i className="fas fa-briefcase mr5"></i> Rahayel
						</span>
						<h1 className="mb15" data-aos="fade-up" data-aos-delay="400">
							Rahayel Parking Lot Management System <span className="ree-text rt40">Mobile & Web
								Application</span>
						</h1>
						<p className="h-light" data-aos="fade-up" data-aos-delay="600">
							Optimize port-based vehicle logistics with real-time VIN
							tracking, digital workflows, and parking slot control.
						</p>
						<a href="https://play.google.com/" target="_blank" className="port-links mt40" data-aos="fade-up"
							data-aos-delay="800">
							Go to Play Store <i className="fas fa-arrow-right fa-btn"></i>
						</a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400">
						<img src="/images/portfolio/rahal.png" alt="Rahayel App Screenshot" className="img-fluid" />
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
						<h2 className="mb15">About Rahayel</h2>
						<p>Rahayel is an advanced parking lot management solution developed by
							mTouch Labs. Designed for port logistics, it enables real-time
							parking slot allocation, vehicle tracking, and role-based access
							for dealerships, security staff, and administrators.</p>
						<p className="mt15">Using VIN-based identification and smart digital
							workflows, it provides full traceability from vehicle drop-off
							to pick-up. Rahayel reduces congestion and manual processes by
							enabling dealers to raise pickup/drop requests and allowing
							security to verify and approve them seamlessly.</p>
						<p className="mt15">A powerful admin dashboard provides visibility and
							control of parking slots, user accounts, and detailed vehicle
							logs, supporting informed decision-making and efficient space
							utilization.</p>

						<h4 className="mt30">Why Choose Rahayel?</h4>
						<p className="mt15">Rahayel modernizes port-based vehicle logistics with
							secure role-based access, digital logs, and real-time updates.
							Say goodbye to manual processes—track, verify, and manage every
							vehicle movement with confidence.</p>
					</div>
				</div>

				<div className="col-lg-6">
					<div className="technolo-sec">

						<div className="icon-with-title">
							<a href="javascript:void(0)">
								<div className="iwt-icon"> <img src="/images/icons/website.svg" alt="website" /> </div>
								<div className="iwt-content">
									<p>Web</p>
								</div>
							</a>
						</div>
						<div className="icon-with-title">
							<a href="javascript:void(0)">
								<div className="iwt-icon"> <img src="/images/icons/flutter-icon.svg" alt="Flutter" /> </div>
								<div className="iwt-content">
									<p>Flutter</p>
								</div>
							</a>
						</div>
						<div className="icon-with-title">
							<a href="javascript:void(0)">
								<div className="iwt-icon"> <img src="/images/icons/Node.JS.svg" alt="NodeJS" /> </div>
								<div className="iwt-content">
									<p>NodeJS</p>
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
	<section className="home-partners-block r-bg-c sec-pad">
		<div className="container">
			<div className="row">
				<div className="col-lg-8">
					<h5>Typography</h5>
					<div className="typo-set mt60">
						<div className="typo-head">
							<h2>Aa</h2>
							<p>PT Serif Caption <span>for Headings</span></p>
							<p>Poppins <span>for Body</span></p>
						</div>
					</div>
				</div>

				<div className="col-lg-4">
					<div className="color-palette">
						<h5>Color Palette</h5>
						<div className="media mt60">
							<div className="color-box1 cbx11 ree-icon-set" style={{background: "#040404"}}></div>
							<div className="color-detailss ree-details-set">
								<h6>Primary</h6>
								<p>#040404</p>
							</div>
						</div>
						<div className="media mt30">
							<div className="color-box1 cbx12 ree-icon-set" style={{background: "#FABA50"}}></div>
							<div className="color-detailss ree-details-set">
								<h6>Accent</h6>
								<p>#FABA50</p>
							</div>
						</div>
						<div className="media mt30">
							<div className="color-box1 cbx13 ree-icon-set" style={{background: "#FFEACB"}}></div>
							<div className="color-detailss ree-details-set">
								<h6>Background</h6>
								<p>#FFEACB</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* item features end */}

	{/* item typo */}
	<section className="home-partners-block r-bg-x sec-pad">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8">
					<div className="sec-heading text-center">
						<h3 className="mb15"><span className="ree-text rt40">App</span> Screens</h3>
						<p>Showcase UI flows for dealer request creation, security approvals, and parking slot
							monitoring.</p>
					</div>
				</div>
			</div>

			<div className="app-screenss owl-carousel mt70 dottss">
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen1.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen2.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen3.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen4.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen5.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>

				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen6.png" className="img-fluid"
							alt="Rahayel App" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Rahayel_appscreen7.png" className="img-fluid"
							alt="Rahayel App" /></div>
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
				{/*  Left Column  */}
				<div className="col-lg-6">
					<h3>Key Features of Rahayel</h3>

					<p className="mt15"><b>1. VIN-Based Identification</b></p>
					<p className="mt15">Each vehicle is uniquely tracked by its Vehicle Identification Number (VIN) for
						foolproof identification.</p>
					&nbsp;

					<p className="mt15"><b>2. Dealer App Features</b></p>
					<ul className="mt15" style={{lineHeight: 26}}>
						<li><b>Secure Dealer Login:</b> Access credentials issued by admin; password reset available.
						</li>
						&nbsp;
						<li><b>Driver Management:</b> Add and manage authorized drivers for vehicle drop-off or pickup.
						</li>
						&nbsp;
						<li><b>Create Drop/Pickup Requests:</b> Specify transport mode (Tow Truck or Driver-Driven),
							truck number, driver, and VIN details.</li>
						&nbsp;
						<li><b>Request Tracking:</b> Track status updates and approvals directly from the app.</li>
						&nbsp;
						<li><b>Slot Overview:</b> View available parking slots assigned by the admin.</li>
					</ul>
					&nbsp;

					<p className="mt15"><b>3. Security Team App Features</b></p>
					<ul className="mt15" style={{lineHeight: 26}}>
						<li><b>Request Verification:</b> Access dealer requests and verify truck/driver/VIN details.
						</li>
						&nbsp;
						<li><b>VIN Scan or Manual Verification:</b> Verify vehicles by scanning or capturing VIN data.
						</li>
						&nbsp;
						<li><b>Full/Partial Request Approval:</b> Accept or reject vehicles, with reasons for each.</li>
						&nbsp;
						<li><b>Real-Time Confirmation:</b> Instant update of approval status and parking instructions.
						</li>
					</ul>
				</div>

				{/*  Right Column  */}
				<div className="col-lg-6 m-mt30">
					<h3>Admin Portal Features</h3>

					<p className="mt15"><b>1. Dealer Management</b></p>
					<p className="mt15">Add and manage dealership accounts with assigned slot limits.</p>
					&nbsp;

					<p className="mt15"><b>2. Slot Management</b></p>
					<p className="mt15">View, update, and monitor parking slots with color-coded status (occupied/vacant).
					</p>
					&nbsp;

					<p className="mt15"><b>3. Security Team Management</b></p>
					<p className="mt15">Add, edit, or remove security personnel with role-based access.</p>
					&nbsp;

					<p className="mt15"><b>4. Dashboard Overview</b></p>
					<p className="mt15">Live visibility of parking lot status with detailed slot-to-VIN mapping.</p>
					&nbsp;
				</div>
			</div>

			<div className="row justify-content-center mt60">
				<div className="col-lg-6">
					<div className="center-btn big-txt">
						<a href="/real-estate-lead-app" className="ree-btn ree-btn-grdt2">
							<i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
						</a>
						<a href="/car-booking-app-rent-ride" className="ree-btn ree-btn-grdt2">
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
