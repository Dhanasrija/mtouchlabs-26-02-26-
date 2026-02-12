import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel booking app development | online room booking app | mTouch Labs",
  description: "Country club is an online hotel booking app development and online room booking app developed by our iOS app development company for booking rooms online",
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
								className="fas fa-briefcase mr5"></i> Country Club </span>
						<h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Hotel Booking <span
								className="ree-text rt40"> iOS App Development </span></h1>
						<p className="h-light" data-aos="fade-up" data-aos-delay="600">Country Club is a hotel booking
							application development to browse and book hotels in US</p>
						{/*  <a href="https://play.google.com/store/apps/details?id=com.mealvillage&hl=en_US" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to Play Store <i className="fas fa-arrow-right fa-btn"></i></a>	  */}
						<a href="https://apps.apple.com/us/app/country-club-world/id873538881" target="_blank"
							className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i
								className="fas fa-arrow-right fa-btn"></i></a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
							src="/images/portfolio/Country-Club.png" alt="Hotel Booking Application Developement"
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
						<h2 className="mb15">About Country Club</h2>
						<p>Country Club is one of the best hotel booking apps now which fits right into your pocket.
							Experience a brand new, specially designed mobile app developed for iOS users developed by
							the <a href="/ios-app-development-company" target="_blank">best iOS app development company
								in Hyderabad </a>. </p>
						<p className="mt15">Country Club hotel booking app is one of the best online room apps for users to
							browse and locate up-to-date country club properties such as (hotels, resorts, clubs, and
							fitness centers) around the globe. Users have convenient buttons to call, email, view
							properties on the map. And the users using this online hotel booking app can also view the
							available photos of the resort. Country Club hotel booking users can log with the Country
							Club account credentials or Facebook / Google account.
						</p>
						&nbsp;
						&nbsp;
						<p>By using this custom mobile app developed by our iOS app development company in Hyderabad,
							this online room booking app members can instantly view profiles, pay their membership /
							annual maintenance fee, and book real-time vacations with the instant confirmation voucher.
							So it is essential to hire a good and experienced <a href="/ios-app-development-company"
								target="_blank">iOS app development company in Hyderabad </a> that will help you to grow
							your business to the next level like mTouch Labs.
						</p>
						{/*  <p className="mt15">This hyper-local delivery app can target potential customers through in-app integrated analytics. In developing countries like India, the competition in the grocery mobile application development market can even beat with a single penny. Every vendor has similar kinds of fruits and veggies but the price differs. Hyper-local delivery business owners are adopting the new trend for their business to target the local segment by online grocery delivery business software. There is a continuous demand of customers for healthy and quality products. But the unmatched level of increase in demand and supply inspired many young organizers to invest in on-demand online grocery shopping app development. But with the online grocery shopping app and delivery application, they can even run a business aggregator and manage the business on a single panel.  */}
						{/*  </p>  */}
					</div>
				</div>

				<div className="col-lg-6">

					<div className="technolo-sec">

						{/* <div className="icon-with-title">
								<a href="javascript:void(0)">
									<div className="iwt-icon"> <img src="/images/icons/android-icon.svg" alt="Android" /> </div>
									<div className="iwt-content">
										<p>Android</p>
									</div>
								</a>
							</div>		
								
							<div className="icon-with-title">
								<a href="javascript:void(0)">
									<div className="iwt-icon"> <img src="/images/icons/java-icon.svg" alt="Java" /> </div>
									<div className="iwt-content">
										<p>Java</p>
									</div>
								</a>
							</div>		 */}
						<div className="icon-with-title">
							<a href="javascript:void(0)">
								<div className="iwt-icon"> <img src="/images/icons/IOS.svg" alt="iOS" /> </div>
								<div className="iwt-content">
									<p>iOS</p>
								</div>
							</a>
						</div>
						<div className="icon-with-title">
							<a href="javascript:void(0)">
								<div className="iwt-icon"> <img src="/images/icons/swift-icon.svg" alt="swift" /> </div>
								<div className="iwt-content">
									<p>Swift</p>
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
						<h2 className="mb15"><span className="ree-text rt40">Standard Features Of this </span> Hotel Booking
							Mobile Application Development</h2>
						<p>Let’s Go Through The Features Of this Country Club Mobile App development</p>
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
											className="d-block  collapsed  collapsible-link">Systematic Control</a></h6>
								</div>
								<div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
									className="collapse show">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">Pre-defined hotel room allocation management
											helps the customer to choose the best rooms
										</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 2 */}
							<div className="cards">
								<div id="heading2" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse2"
											aria-expanded="false" aria-controls="collapse2"
											className="d-block  collapsed  collapsible-link">Alerts And Notifications</a>
									</h6>
								</div>
								<div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">The SMS and email notification facility
											incorporated into the hotel booking app allows the hotel owners to send
											alerts.</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 3  */}
							<div className="cards">
								<div id="heading3" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse3"
											aria-expanded="false" aria-controls="collapse3"
											className="d-block  collapsed  collapsible-link">Visitor Management Records</a>
									</h6>
								</div>
								<div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">Manages the records of customers by asking
											their id proof to get entry into the hotel.
										</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 4  */}
							<div className="cards">
								<div id="heading4" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse4"
											aria-expanded="false" aria-controls="collapse4"
											className="d-block  collapsed  collapsible-link">Hotel Reports</a></h6>
								</div>
								<div id="collapse4" aria-labelledby="heading4" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">The hotel staff authorities can generate
											various reports in the hotel booking app.</p>
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
							<p>Gilroy<span>Bold</span></p>
						</div>
					</div>
					<div className="heading-paragrapph mt60">
						<h3 className="mb20 h1">Would you like to develop an innovative and specific Hotel Booking App</h3>
						<h3 className="mb20">Hotel Management App</h3>
						<p>By hiring the expert mobile app developers of mTouch Labs which is a highly renowned and
							well-established hotel booking app Development Company you will get many benefits. For
							developing the best hotel booking app our<a href="/services" target="_blank">hotel booking
								app development company </a>has a team of enough experience.</p>
						&nbsp;
						<p>They are in this field for a very long time and have offered the best results to the clients.
							Any kind of major or minor mistake from the end of the developing team may spoil the
							reputation of the clients and they may suffer a huge loss. But with us, you don’t have to
							worry at all. Our skilled and experienced team of hotel booking <a href="/index"
								target="_blank">mobile app development company </a>members will offer the best service.
						</p>
						&nbsp;

					</div>
				</div>

				<div className="col-lg-4">
					<div className="color-palette">
						<h5>Color palette</h5>

						<div className="media mt60">
							<div className="color-box1 cbx35 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Charcoal</h6>
								<p>#37464D</p>
							</div>
						</div>

						<div className="media mt30">
							<div className="color-box1 cbx36 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Vampire Black</h6>
								<p>#060606</p>
							</div>
						</div>

						<div className="media mt30">
							<div className="color-box1 cbx37 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Quartz</h6>
								<p>#4B4B4B</p>
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
						<p>Check Out Our Outstanding App Screens Of Hotel Booking Mobile Application Development</p>
					</div>
				</div>
			</div>

			<div className="app-screenss owl-carousel mt70 dottss">
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Country-Club-screen-1.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Country-Club-screen-2.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Country-Club-screen-3.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Country-Club-screen-4.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				{/*  <div className="appscreen"> <div className="itme-img"><img src="/images/case-study/Shiva-Sai-Enterprises-admin-screen.png" alt="mockup" className="img-fluid" /></div> </div>	  */}
				{/*  <div className="appscreen"> <div className="itme-img"><img src="/images/case-study/appui-3.png" alt="mockup" className="img-fluid" /></div> </div>	  */}
			</div>
		</div>
	</section>
	{/* item screen end */}
	&nbsp;

	{/* needs and solution */}
	<section className="r-bg-a sec-pad">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<h3>App Features</h3>
					<p className="mt15"><b>1. Allotment of Rooms</b></p>
					<p className="mt15">Easy allotment of rooms by checking the availability in online through the app </p>
					&nbsp;
					<p className="mt15"><b>2. Hotel Information</b></p>
					<p className="mt15">Keep a track of the information related to the hotel room and their services</p>
					&nbsp;
					<p className="mt15"><b>3. Room Charges</b></p>
					<p className="mt15">Room chargers collection made easy with options to pay it online. </p>
					&nbsp;
					<p className="mt15"><b>4. Visitor Records</b></p>
					<p className="mt15">All your visitor records are maintained in our database.</p>
					&nbsp;
					<p className="mt15"><b>5. Customized Reports</b></p>
					<p className="mt15">Customized reports about hostel related activities are automatically generated.</p>
					&nbsp;
					{/* <p className="mt15"><b>6. Rating the Food</b></p>
						 <p className="mt15">It’s an incredible way of describing other users about their food experiences, and a must-have.</p>
						 &nbsp; */}
					{/*  <p className="mt15"><b>7. View and Update Profile</b></p>  */}
					{/*<p className="mt15">Admin can have complete information about the customers like their phone no, email id, zip code, status, and edit/manage them easily.</p>
						 &nbsp; */}


				</div>
				<div className="col-lg-6 m-mt30">
					<h3>Benefits</h3>
					<p className="mt15"><b>1. Easy and smooth Hotel room allocation and management.</b></p>
					{/*  <p className="mt15">The registration process will be identical across all these kinds of apps.</p>  */}
					&nbsp;
					<p className="mt15"><b>2. Set rent of the hotel room and other facilities.</b></p>
					{/*  <p className="mt15">The assigning of orders is a must-have feature. where they allocate order requests to delivery personnel. </p>  */}
					&nbsp;
					<p className="mt15"><b>3. Keep a documentation of hotel ins and outs of the customers </b></p>
					{/*  <p className="mt15">You can get a quick view of the orders, deliveries, payments manage your restaurant better  </p>  */}
					&nbsp;
					<p className="mt15"><b>4. Manage and analyze reports of hotel such as number of rooms availability and
							number of members in each room</b></p>
					{/*  <p className="mt15">Restaurant owners can manage the information, and stay assured of getting the latest content from the food delivery platform.</p>  */}
					&nbsp;
					{/* <p className="mt15"><b>5. Additional Features </b></p>
						 <p className="mt15">The panel can be able to create loyalty campaigns, coupons, and new offers.</p>
						 &nbsp; */}
					{/* <p className="mt15"><b>6. Track Grocery Item</b></p>
						 <p className="mt15">Customers can track their orders in Real-time on an online grocery ordering app.</p> */}
					&nbsp;
					{/*  <p className="mt15"><b>7. Time Table Management </b></p>  */}
					{/*  <p className="mt15">Users can give feedback or reviews and ratings on the products they’ve purchased</p>  */}
					&nbsp;
					{/*  <p className="mt15"><b>8. Payments </b></p>  */}
					{/*  <p className="mt15">Notifications to inform the customer about the current status of their purchased order</p>  */}
					&nbsp;
					{/* <p className="mt15"><b>9. Coupons & Promo Codes</b></p>
						 <p className="mt15">Coupons and promo codes to purchase your favorite items at a discounted rate</p>
						 &nbsp;
						<p className="mt15"><b>10. Filter Option </b></p>
						 <p className="mt15">Filter option to sort the products based on the local stores the user wishes to search</p> */}

					&nbsp;
					{/*  <p className="mt15">Astograha – an online astrology consultation app is specially created to generate fast and accurate calculations and predictions. So if you are looking for any online consultation mobile app development, it’s not too late to get started. Contact our mobile app development company to get your work done!</p>   */}
					{/*  <p className="mt15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>  */}
				</div>
			</div>
			<div className="row justify-content-center mt60">
				<div className="col-lg-6">
					<div className="center-btn big-txt">
						<a href="/make-your-taxi-business-smart-with-our-uber-clone-app-development"
							className="ree-btn  ree-btn-grdt2"><i className="fas fa-arrow-left fa-btn mr5"></i> Previous Project
						</a>
						<a href="/online-food-ordering-mobile-app-development" className="ree-btn  ree-btn-grdt2"> Next
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
