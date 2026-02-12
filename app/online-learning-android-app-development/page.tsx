import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online learning app | E learning app | Android app development | mTouch Labs",
  description: "Physics factor is an online learning app for CBSE students of class 9th-12th. This E-learning app Android app development provides exam Courses for free",
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
								className="fas fa-briefcase mr5"></i>Online Education</span>
						<h1 className="mb15" data-aos="fade-up" data-aos-delay="400">Online Learning <span
								className="ree-text rt40"> Android App Development</span></h1>
						<p className="h-light" data-aos="fade-up" data-aos-delay="600">Online learning Android Application
							development offers comprehensive learning in Physics</p>
						{/* <a href="https://play.google.com/store/apps/details?id=com.fs.physicsfactor&hl=en_US" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to Play Store <i className="fas fa-arrow-right fa-btn"></i></a>	
						 */}
						{/*  <a href="https://apps.apple.com/us/app/khidkee-marketplace/id1546476049" target="_blank" className="port-links mt40" data-aos="fade-up" data-aos-delay="800">Go to App Store <i className="fas fa-arrow-right fa-btn"></i></a>  */}
					</div>
				</div>
				<div className="col-lg-6">
					<div className="sol-img m-mt30" data-aos="fade-in" data-aos-delay="400"><img
							src="/images/portfolio/PhysicsFactor.png" alt="e-learning App Developement"
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
						<h2 className="mb15">About Physics Factor</h2>
						<p>Physics factor is physics online learning <a href="/android-app-development-company"
								target="_blank">android app development </a>especially made for CBSE, IIT, JEE and NEET
							Exam Preparation. This free online learning app offers comprehensive learning programs in
							Physics for students between classes 9th-12th CBSE Students. It also covers CBSE guide books
							for NEET, Physics Question Bank for IIT JEE, CBSE guide books, Physics formula sheet for IIT
							JEE Mains and Advanced.</p>
						<p className="mt15">This online learning app android app development has an amazing user interface
							so anyone can use it easily. The app is designed for students who are preparing for JEE Main
							& JEE Advanced, NEET students. The course material will help students learn, practice and
							revise Physics chapters for CBSE students.
						</p>
						&nbsp;
						&nbsp;

					</div>
				</div>

				<div className="col-lg-6">

					<div className="technolo-sec">

						<div className="icon-with-title">
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
						<h2 className="mb15"><span className="ree-text rt40">Standard Features List Of This Online Teaching App
							</span> </h2>
						<p>Let’s Go Through The Features Of This Online Learning App </p>
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
											className="d-block  collapsed  collapsible-link">Personalized Learning</a></h6>
								</div>
								<div id="collapse1" aria-labelledby="heading1" data-parent="#accordionExample"
									className="collapse show">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">This app allows users to leverage content and
											features based on user preferences.
										</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 2  */}
							<div className="cards">
								<div id="heading2" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse2"
											aria-expanded="false" aria-controls="collapse2"
											className="d-block  collapsed  collapsible-link">Intuitive Content</a></h6>
								</div>
								<div id="collapse2" aria-labelledby="heading2" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">Interactive strategies with intuitive content
											provide better knowledge experiences for learners.</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 3  */}
							<div className="cards">
								<div id="heading3" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse3"
											aria-expanded="false" aria-controls="collapse3"
											className="d-block  collapsed  collapsible-link">Push Notifications</a></h6>
								</div>
								<div id="collapse3" aria-labelledby="heading3" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">Push notifications can be available as an
											excellent way of connecting and engaging with users.
										</p>
									</div>
								</div>
							</div>

							{/*  Accordion item 4  */}
							<div className="cards">
								<div id="heading4" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse4"
											aria-expanded="false" aria-controls="collapse4"
											className="d-block  collapsed  collapsible-link">In-Application Messaging</a>
									</h6>
								</div>
								<div id="collapse4" aria-labelledby="heading4" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">Exchange ideas with your trainer to improve the
											overall learning process.</p>
									</div>
								</div>
							</div>


							{/*  Accordion item 5  */}
							<div className="cards">
								<div id="heading5" className="card-header">
									<h6 className="mb-0 "><a href="#" data-toggle="collapse" data-target="#collapse5"
											aria-expanded="false" aria-controls="collapse5"
											className="d-block  collapsed  collapsible-link">Real-Time Learning Support</a>
									</h6>
								</div>
								<div id="collapse5" aria-labelledby="heading5" data-parent="#accordionExample"
									className="collapse">
									<div className="card-body p-4">
										<p className="font-weight-light m-0">The teacher teaches students in real-time and
											receives answers to questions on the topic within the lesson. </p>
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
							<h3>Aa</h3>
							<p>Roboto<span>Bold</span></p>
						</div>

						{/* <div className="typo-para">
						<h2>Aa</h2>
						<p>Lato<span>Regular</span></p>
					</div> */}
					</div>
					<div className="heading-paragrapph mt60">
						<h3 className="mb20 h1">Let’s Go Through This On-demand E-Learning Android App Development</h3>
						<h3 className="mb20">Grocery App</h3>
						<p>The physics factor E-learning app team has developed the complete app in-house and uses the
							state of the art technology for online learning in your hands. This team is committed to
							making learning more engaging and effective. The physics factor E-learning app also
							personalized learning based on each student’s style of learning. Students can choose their
							preferred topic of Physics chapter and book their free online classes. In this online
							educational app, each module offers a set of the syllabus for reading and practice sessions
							for students to perfect their understanding of CBSE concepts. So, get yourself a mobile app
							for your business from our<a href="/top-mobile-app-development-company-in-hyderabad"
								target="_blank"> Mobile application development company in Hyderabad</a>.</p>
						&nbsp;

					</div>
				</div>

				<div className="col-lg-4">
					<div className="color-palette">
						<h5>Color palette</h5>

						<div className="media mt60">
							<div className="color-box1 cbx58 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Indigo</h6>
								<p>#213266</p>
							</div>
						</div>

						<div className="media mt30">
							<div className="color-box1 cbx59 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Azureish White</h6>
								<p>#D3E6F5</p>
							</div>
						</div>

						<div className="media mt30">
							<div className="color-box1 cbx13 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Black</h6>
								<p>#000000</p>
							</div>
						</div>
						<div className="media mt30">
							<div className="color-box1 cbx60 ree-icon-set"></div>
							<div className="color-detailss ree-details-set">
								<h6>Outer Space</h6>
								<p>#444444</p>
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
						<p>Check Out Our Outstanding App Screens Of Online Learning Mobile App Development</p>
					</div>
				</div>
			</div>

			<div className="app-screenss owl-carousel mt70 dottss">
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Physics-Factor-screen-1.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Physics-Factor-screen-2.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Physics-Factor-screen-3.png" alt="mockup"
							className="img-fluid" /></div>
				</div>
				<div className="appscreen">
					<div className="itme-img"><img src="/images/case-study/Physics-Factor-screen-4.png" alt="mockup"
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
					<h3>Student Panel Features</h3>
					<p className="mt15"><b>1. Social Signup/Login</b></p>
					{/*  <p className="mt15">Allow users to discover nearby stores and items like groceries, dairy, fruits, and vegetables using the application. Users scroll thousands of stores and items as per their need</p>  */}
					&nbsp;
					<p className="mt15"><b>2. Browse via various subscription plans </b></p>
					{/*  <p className="mt15">After discovering the items and nearby local stores, users can order anything they want with just a few clicks on the screen. The nearest delivery executive will go to the closest store and deliver it to the customer.</p>  */}
					&nbsp;
					<p className="mt15"><b>3. Payment for classes and e-learning plan</b></p>
					{/*  <p className="mt15">Once customers give orders, they can constantly track the order and delivery executive. They can check the real-time location of the delivery executive and check his estimated arrival time.</p>  */}
					&nbsp;
					<p className="mt15"><b>4. Pick and view available subjects.</b></p>
					{/*  <p className="mt15">Customers can share and rate their feedback experience related to the service. Whether they liked it or did not desire service, they can give ratings and share their experience directly from the app.</p>  */}
					&nbsp;
					<p className="mt15"><b>5. Post questions and doubts</b></p>
					{/*  <p className="mt15">Admin can access the order status like completed or processing, and the total amount earned on each order, and also have the control on taking actions on them.</p>  */}
					&nbsp;
					<p className="mt15"><b>6. Search and filter through online tutors</b></p>
					{/*  <p className="mt15">Admin can get a list of items from the store partners, arranged by adding them category wise, updating and making them available for ordering.</p>  */}
					&nbsp;
					<p className="mt15"><b>7. Select teachers </b></p>
					{/* <p className="mt15">Admin can have complete information about the customers like their phone no, email id, zip code, status, and edit/manage them easily.</p> */}
					&nbsp;
					<p className="mt15"><b>8. Consult with teacher through live chat or video call.</b></p>
					&nbsp;
					<p className="mt15"><b>9. Rate and review courses and tutors</b></p>


				</div>
				<div className="col-lg-6 m-mt30">
					<h3>Teacher Panel Features</h3>
					<p className="mt15"><b>1. Registration</b></p>
					{/*  <p className="mt15">On the grocery mobile app, customers need to register with all the primary details which include name, email, contact, address, etc.</p>  */}
					&nbsp;
					<p className="mt15"><b>2. Create and Manage detailed profile</b></p>
					{/*  <p className="mt15">Customers can quickly search the product by the search alternative option on the Grocery delivery App. </p>  */}
					&nbsp;
					<p className="mt15"><b>3. Manage account settings </b></p>
					{/*  <p className="mt15">When looking for the item in an on-demand grocery app, customers will add their desirable things to the cart and will order. </p>  */}
					&nbsp;
					<p className="mt15"><b>4. Push Notifications for student interaction</b></p>
					{/*  <p className="mt15">The grocery mobile app was developed in such a way that the customers will program their delivery items in accordance with their own preferable time.</p>  */}
					&nbsp;
					<p className="mt15"><b>5. Schedule live classes</b></p>
					{/*  <p className="mt15">Throughout the procedure for grocery app development via API, the stage utilizes integration with different payment modes like UPI, NetbankingPaytm, debit/credit cards, etc.</p>  */}
					&nbsp;
					<p className="mt15"><b>6. View Ratings and Reviews</b></p>
					{/* <p className="mt15">Customers can track their orders in Real-time on an online grocery ordering app.</p>  */}
					&nbsp;
					<p className="mt15"><b>7. Sort and answer queries posted by students </b></p>
					{/*  <p className="mt15">Users can give feedback or reviews and ratings on the products they’ve purchased</p>  */}
					&nbsp;
					<p className="mt15"><b>8. Interact with students via text, audio or video </b></p>
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
						<a href="/call-management-mobile-app-development" className="ree-btn  ree-btn-grdt2"><i
								className="fas fa-arrow-left fa-btn mr5"></i> Previous Project </a>
						<a href="/pg-hostel-management-mobile-app-development" className="ree-btn  ree-btn-grdt2"> Next
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
