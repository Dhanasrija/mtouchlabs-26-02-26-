// import type { Metadata } from "next";
// import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Careers | Join Our Software Development Team",
//   description: "Explore software development and IT career opportunities. Join our team working on AI, cloud, mobile, and enterprise solutions.",
//   alternates: {
//     canonical: "https://www.mtouchlabs.com/careers",
//   },
 
//   openGraph: {
//     title: "Careers",
//     description: "Join our team and build the future of technology.",
//     url: "https://www.mtouchlabs.com/careers",
//     siteName: "mTouch Labs",
//     type: "website",
//     images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp", width: 1200, height: 630, alt: "Careers" }],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Careers",
//     description: "Join our team and build the future of technology.",
//     images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.webp"],
//   },
// };


// const countryCodes = [
//   { code: "IN", value: "91", label: "India (+91)" },
//   { code: "US", value: "+1", label: "United States (+1)" },
//   { code: "GB", value: "44", label: "United Kingdom (+44)" },
//   { code: "AU", value: "61", label: "Australia (+61)" },
//   { code: "AE", value: "971", label: "UAE (+971)" },
//   { code: "SG", value: "65", label: "Singapore (+65)" },
//   { code: "DE", value: "49", label: "Germany (+49)" },
//   { code: "FR", value: "33", label: "France (+33)" },
//   { code: "JP", value: "81", label: "Japan (+81)" },
//   { code: "CN", value: "86", label: "China (+86)" },
//   { code: "CA", value: "1", label: "Canada (+1)" },
//   { code: "SA", value: "966", label: "Saudi Arabia (+966)" },
//   { code: "QA", value: "974", label: "Qatar (+974)" },
//   { code: "KW", value: "965", label: "Kuwait (+965)" },
// ];

// const jobRoles = [
//   "Business Development Manager",
//   "Next JS Developer",
//   "Project Management",
//   "Digital Marketing Manager",
//   "Flutter Developer",
//   "Full Stack Developer",
//   "Manual Tester",
//   "React JS Developer",
//   "UI / UX Designer",
//   "Node JS Developer",
// ];

// export default function Page() {
//   return (
//     <>
//       <div>
//         {/* ===== APPLY JOB MODAL ===== */}
//         <div className="career-modal-overlay" id="careerFormModal">
//           <div className="career-modal-box">
//             <button className="career-modal-close" id="closeCareerModal">&times;</button>
//             <h2 className="career-modal-title">Apply Job</h2>
//             <form id="careerApplyForm">
//               <div className="career-modal-field">
//                 <label>Full Name</label>
//                 <div className="career-modal-input-wrap">
//                   <i className="fas fa-user"></i>
//                   <input type="text" name="name" placeholder="Full Name" required />
//                 </div>
//               </div>
//               <div className="career-modal-field">
//                 <label>Your Email</label>
//                 <div className="career-modal-input-wrap">
//                   <i className="fas fa-envelope"></i>
//                   <input type="email" name="email" placeholder="Email Id" required />
//                 </div>
//               </div>
//               <div className="career-modal-row">
//                 <div className="career-modal-field career-modal-half">
//                   <label>Country Code</label>
//                   <select name="countryCode" required>
//                     {countryCodes.map((c, i) => (
//                       <option key={`${c.code}-${i}`} value={c.value}>{c.label}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="career-modal-field career-modal-half">
//                   <label>Your Mobile</label>
//                   <div className="career-modal-input-wrap">
//                     <i className="fas fa-mobile-alt"></i>
//                     <input type="tel" name="mobile" placeholder="Contact Number" required inputMode="numeric" pattern="\d*" />
//                   </div>
//                 </div>
//               </div>
//               <div className="career-modal-field">
//                 <label>Choose Role</label>
//                 <select name="role" required>
//                   <option value="">Choose Role</option>
//                   {jobRoles.map((r, i) => (
//                     <option key={i} value={r}>{r}</option>
//                   ))}
//                 </select>
//               </div>
//               <div className="career-modal-field">
//                 <label>Upload Your Resume</label>
//                 <input type="file" name="resume" accept=".pdf,.doc,.docx" />
//               </div>
//               <div className="career-modal-field">
//                 <label>Message</label>
//                 <textarea name="message" placeholder="Message" rows={3} required></textarea>
//               </div>
//               <button type="submit" className="career-modal-submit">SUBMIT NOW</button>
//             </form>
//           </div>
//         </div>

//         {/* ===== JOB DETAILS MODAL ===== */}
//         <div className="career-modal-overlay" id="jobDetailsModal">
//           <div className="career-modal-box">
//             <button className="career-modal-close" id="closeJobDetailsModal">&times;</button>
//             <h2 className="career-modal-title" id="jobDetailsTitle">Job Details</h2>
//             <div id="jobDetailsContent" className="op-job-details-content"></div>
//           </div>
//         </div>

//         {/* ===== HERO SECTION ===== */}
//         <section className="career-hero">
//           <div className="career-hero-overlay"></div>
//           <div className="career-hero-content-wrapper">
//             <div className="career-hero-text">
//               <h1 data-aos="fade-up" data-aos-delay="200">
//                 <span className="career-h1-white">Join</span>{" "}
//                 <span className="career-h1-dark">Our Team,</span>
//                 <br />
//                 <span className="career-h1-white">Shape the Future Together</span>
//               </h1>
//               <p className="career-hero-desc" data-aos="fade-up" data-aos-delay="400">
//                 <a href="#open-positions" className="career-findjob-btn">
//               Find More Jobs <i className="fas fa-external-link-alt"></i>
//             </a>
//               </p>
//             </div>
//             <div className="career-hero-img-space"></div>
//           </div>
//         </section>

//         {/* ===== FIND JOBS BAR ===== */}
//         <div className="career-findjob-bar">
//           <div className="career-findjob-bar-inner">
           
            
//           </div>
//         </div>

//         {/* ===== OPEN POSITIONS SECTION ===== */}
//         <section className="op-section" id="open-positions">
//           <div className="op-container">
//             <h2 className="op-heading">Open <span className="op-heading-highlight">Positions</span></h2>
//             <div className="op-filter-bar">
//               <div className="op-filter-item">
//                 <i className="fas fa-map-marker-alt"></i>
//                 <select id="opFilterLocation">
//                   <option value="">Enter Location</option>
//                   <option value="Hyderabad">Hyderabad</option>
//                   <option value="Bangalore">Bangalore</option>
//                   <option value="Remote">Remote</option>
//                 </select>
//               </div>
//               <div className="op-filter-item">
//                 <i className="fas fa-briefcase"></i>
//                 <select id="opFilterRole">
//                   <option value="">Enter Role</option>
//                   <option value="Business Development Manager">Business Development Manager</option>
//                   <option value="Next JS Developer">Next JS Developer</option>
//                   <option value="Project Management">Project Management</option>
//                   <option value="Digital Marketing Manager">Digital Marketing Manager</option>
//                   <option value="Flutter Developer">Flutter Developer</option>
//                   <option value="Full Stack Developer">Full Stack Developer</option>
//                   <option value="Manual Tester">Manual Tester</option>
//                   <option value="React JS Developer">React JS Developer</option>
//                   <option value="UI / UX Designer">UI / UX Designer</option>
//                   <option value="Node JS Developer">Node JS Developer</option>
//                 </select>
//               </div>
//               <button className="op-filter-apply" id="opApplyFilter">Apply Filter</button>
//             </div>
//             <div className="op-cards-grid" id="opCardsGrid"></div>
//             <p className="op-no-results" id="opNoResults" style={{ display: "none" }}>No positions found matching your filters.</p>
//             <div className="op-pagination" id="opPagination"></div>
//           </div>
//         </section>

//         {/* ===== STATS ===== */}
//         <div className="careers-stats-main">
//           <h3 className="careers-stats-main-heading">
//             Our Achievements Reflect <br /> Our Commitment to Excellence
//           </h3>
//           <section className="careers-stats">
//             <div className="careers-stat">
//               <h3 data-target="14" data-suffix="+" className="counter-num">0</h3>
//               <p>Years of Excellence</p>
//             </div>
//             <div className="careers-stat">
//               <h3 data-target="70" data-suffix="+" className="counter-num">0</h3>
//               <p>Tech Experts</p>
//             </div>
//             <div className="careers-stat">
//               <h3 data-target="4000" data-display="4k" className="counter-num">0</h3>
//               <p>Achievements</p>
//             </div>
//             <div className="careers-stat">
//               <h3 data-target="30" data-suffix="+" className="counter-num">0</h3>
//               <p>Industries Covered</p>
//             </div>
//           </section>
//         </div>

//         {/* ===== HOW IT WORKS ===== */}
//         <div className="careers-how">
//           <div className="careers-text">
//             <h4>How it Works</h4>
//             <h2>Start Your Career in Just <br /> a Few Simple Steps</h2>
//             <p className="description">Take the next step in your professional journey with a quick and seamless application process.</p>
//             <div className="careers-step">
//               <span className="icon"><img width={70} height={70} loading="lazy" decoding="async" src="/images/career/icon1.webp" className="career-how-it-icon" alt="step 1" /></span>
//               <div>
//                 <h3>Complete Your Profile</h3>
//                 <p>Upload your resume or create a professional<br /> profile in just a few minutes.</p>
//               </div>
//             </div>
//             <div className="careers-step">
//               <span className="icon"><img width={70} height={70} loading="lazy" decoding="async" src="/images/career/icon2.webp" className="career-how-it-icon" alt="step 2" /></span>
//               <div>
//                 <h3>Explore Career Opportunities</h3>
//                 <p>Browse job openings across various industries<br /> and find the perfect role that matches your skills.</p>
//               </div>
//             </div>
//             <div className="careers-step">
//               <span className="icon"><img width={78} height={78} loading="lazy" decoding="async" src="/images/career/icon3.webp" className="career-how-it-icon" alt="step 3" /></span>
//               <div>
//                 <h3>Apply Instantly</h3>
//                 <p>Submit your application in one click and<br /> move closer to your dream job effortlessly.</p>
//               </div>
//             </div>
//           </div>
//           <div className="careers-image">
//             <img width={960} height={1072} loading="lazy" decoding="async" src="/images/career/how-it-works.webp" alt="current Job Openings At mTouch Labs" />
//           </div>
//         </div>

//         {/* ===== WHY CHOOSE ===== */}
//         <section className="careers-why-choose">
//           <div className="careers-why-choose-one">
//             <div className="careers-why-choose-one-inside">
//               <div>
//                 <img width={160} height={160} loading="lazy" decoding="async" src="/images/career/why1.webp" className="careers-why-choose-img" alt="award" />
//                 <p>Award winning designers</p>
//               </div>
//               <div>
//                 <img width={160} height={162} loading="lazy" decoding="async" src="/images/career/why2.webp" className="careers-why-choose-img" alt="rating" />
//                 <p>4.9 rating in google reviews</p>
//               </div>
//               <div>
//                 <img width={1064} height={280} loading="lazy" decoding="async" src="/images/brand-logo/nasscom.webp" alt="Official NASSCOM Member" className="careers-why-choose-img" />
//                 <p>NASSCOM Member</p>
//               </div>
//             </div>
//             <div className="careers-why-choose-one-inside">
//               <div>
//                 <img width={160} height={158} loading="lazy" decoding="async" src="/images/career/why4.webp" className="careers-why-choose-img" alt="company" />
//                 <p>App Development Company of the Year</p>
//               </div>
//               <div>
//                 <img width={160} height={159} loading="lazy" decoding="async" src="/images/career/why5.webp" className="careers-why-choose-img" alt="effort" />
//                 <p>100+ hours of effort</p>
//               </div>
//             </div>
//           </div>
//           <div className="careers-why-choose-two">
//             <h3>Why Choose mTouch Labs?</h3>
//             <p><b>Industry Leader:</b> acknowledged as a <a href="/" target="_blank" rel="noopener noreferrer">web and mobile app development</a> business with ISO certification.</p>
//             <p><b>Career Growth:</b> We offer career progression opportunities, mentorship, and skill development programs.</p>
//             <p><b>Innovative Culture:</b> Develop technologies such as blockchain, AI, Flutter, and React Native.</p>
//             <p><b>Global Projects:</b> Work together on software solutions, UI/UX design, and app development with clients from around the world.</p>
//             <p><b>Employee-focused setting:</b> We place a high priority on employee wellness, remote work choices, and work-life balance.</p>
//           </div>
//         </section>

//         {/* ===== CLIENTS ===== */}
//         <div className="Home-logo-container">
//           <div id="logoCarousel" className="carousel slide" data-ride="carousel" style={{ padding: "30px", borderRadius: "10px" }}>
//             <ol className="carousel-indicators carousel-indicators_two">
//               <li data-target="#logoCarousel" data-slide-to="0" className="active"></li>
//               <li data-target="#logoCarousel" data-slide-to="1"></li>
//             </ol>
//             <h3>Some of Our Clients</h3>
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div className="d-flex justify-content-center align-items-start flex-wrap" style={{ width: "100%", margin: "auto", marginBottom: "30px" }}>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/adjd.webp" alt="adjd" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/govt.webp" alt="golkonda" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/aduri.webp" alt="aduri" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/voosh.webp" alt="voosh" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/l2r.webp" alt="learn2read" /></div>
//                   <div className="Home-logo-grid-item"><img width={200} height={93} loading="lazy" decoding="async" src="/images/home/tech/zefsci.webp" alt="zefsci" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={141} loading="lazy" decoding="async" src="/images/home/tech/medbuz.webp" alt="medbuz" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/veteach.webp" alt="veteach" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/tanyya.webp" alt="tannya" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/heyman.webp" alt="heyman" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/badham.webp" alt="badham" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/v.webp" alt="vivent" /></div>
//                   <div className="Home-logo-grid-item"><img width={200} height={93} loading="lazy" decoding="async" src="/images/home/tech/tej.webp" alt="tej" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/adify.webp" alt="adify" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/clikget.webp" alt="roboride" /></div>
//                 </div>
//               </div>
//               <div className="carousel-item">
//                 <div className="d-flex justify-content-center align-items-start flex-wrap" style={{ width: "100%", margin: "auto", marginBottom: "30px" }}>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/countryclub.webp" alt="countryclub" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/kalp.webp" alt="kalp" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/roboride.webp" alt="roboride" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/ricehub.webp" alt="ricehub" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/jaimaxcoin.webp" alt="jaimaxcoin" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/Citzon.webp" alt="Citzon" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/fair.webp" alt="fair" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/inst.webp" alt="inst" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/dush.webp" alt="dush" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/revsoul.webp" alt="revsoul" /></div>
//                   <div className="Home-logo-grid-item"><img width={300} height={140} loading="lazy" decoding="async" src="/images/home/tech/smartpg.webp" alt="smartpg" /></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===== YOUR BEST CAREER JOURNEY ===== */}
//     <section className="career-journey-section">
//   <div className="career-journey-content">
//     <h2>Your best career<br />journey starts here</h2>
//     <p>Subscribe to our newsletters to discover more opportunities</p>
//     <div className="career-journey-subscribe">
//       <i className="fas fa-envelope"></i>
//       <input type="email" placeholder="Enter Your Mail ID here" />
//       <button type="button">Subscribe</button>
//     </div>
//   </div>
// </section>

//   {/* ===== EMPLOYEE TESTIMONIAL ===== */}
//         <section className="career-testimonial-section">
//           <div className="career-testimonial-wrapper">
//             <h2>Discover inspiring success stories<br />from our happy employees!</h2>
//             <div className="career-testimonial-card">
//               <div className="career-testimonial-avatar">
//                 <div className="career-testimonial-avatar-frame">
//                   <img width={152} height={152} loading="lazy" decoding="async" src="/images/employee.svg" alt="Suresh" className="career-avatar-photo" />
//                 </div>
//               </div>
//               <div className="career-testimonial-info">
//                 <h3>Suresh</h3>
//                 <p className="career-testimonial-role">UI/UX Designer</p>
//                 <p className="career-testimonial-quote">
//                   Working at mTouch has been an incredible experience! The collaborative environment,
//                   innovative projects, and growth opportunities have truly elevated my career as a
//                   UI/UX designer. I feel valued, inspired, and motivated every day!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ===== FAQ Section ===== */}
//         <div className="resources-faq-wrapper">
//           <div className="_faq_container">
//             <div className="_faq_header">
//               <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
//               <p className="_faq_subtitle">Everything you need to know about careers</p>
//             </div>
//             <div className="_faq_list">
//               <div className="_faq_item active glow">
//                 <button className="_faq_question">
//                   <span>What job opportunities are available in Hyderabad?</span>
//                   <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//                 </button>
//                 <div className="_faq_answer">
//                   <p className="_faq_answer_text">mTouch Labs offers IT job opportunities in Hyderabad for roles such as Flutter developers, React JS developers, full-stack developers, UI/UX designers, digital marketing managers, and project managers.</p>
//                 </div>
//               </div>
//               <div className="_faq_item">
//                 <button className="_faq_question">
//                   <span>How can I apply for jobs?</span>
//                   <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//                 </button>
//                 <div className="_faq_answer">
//                   <p className="_faq_answer_text">Candidates can apply by visiting the careers page, selecting a suitable position, and submitting their resume through the online application form.</p>
//                 </div>
//               </div>
//               <div className="_faq_item">
//                 <button className="_faq_question">
//                   <span>Does mTouch Labs offer career growth for developers and freshers?</span>
//                   <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//                 </button>
//                 <div className="_faq_answer">
//                   <p className="_faq_answer_text">Yes, mTouch Labs provides career growth through mentorship, skill development programs, and exposure to global projects.</p>
//                 </div>
//               </div>
//               <div className="_faq_item">
//                 <button className="_faq_question">
//                   <span>What skills are required to work?</span>
//                   <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//                 </button>
//                 <div className="_faq_answer">
//                   <p className="_faq_answer_text">Strong technical knowledge, problem-solving skills, teamwork, and passion for innovation. Experience in web/mobile development, UI/UX design, testing, and digital marketing is valued.</p>
//                 </div>
//               </div>
//               <div className="_faq_item">
//                 <button className="_faq_question">
//                   <span>Why choose mTouch Labs for a career in app development and IT?</span>
//                   <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
//                 </button>
//                 <div className="_faq_answer">
//                   <p className="_faq_answer_text">mTouch Labs offers innovative work culture, global client exposure, and opportunities with AI, Flutter, blockchain, and React Native in a collaborative environment.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== ALL SCRIPTS ===== */}
//       <Script id="career-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
//         (function() {
//           function init() {
//             var modal = document.getElementById('careerFormModal');
//             var closeBtn = document.getElementById('closeCareerModal');
//             var detailsModal = document.getElementById('jobDetailsModal');
//             var closeDetailsBtn = document.getElementById('closeJobDetailsModal');
//             if (!modal || !closeBtn) return setTimeout(init, 300);

//             var jobs = [
//               { role: 'Business Development Manager', positions: 1, exp: '5-10 Years', location: 'Hyderabad', desc: 'Lead business growth initiatives, manage client relationships, and drive revenue through strategic partnerships.' },
//               { role: 'Next JS Developer', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Build high-performance web applications using Next.js, React, and modern frontend technologies.' },
//               { role: 'Project Management', positions: 1, exp: '4-6 Years', location: 'Hyderabad', desc: 'Oversee project delivery, coordinate cross-functional teams, and ensure timely completion of milestones.' },
//               { role: 'Digital Marketing Manager', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Plan and execute digital marketing campaigns across SEO, SEM, social media, and content marketing channels.' },
//               { role: 'Flutter Developer', positions: 2, exp: '1+ Years', location: 'Hyderabad', desc: 'Develop cross-platform mobile applications using Flutter and Dart with clean architecture patterns.' },
//               { role: 'Full Stack Developer', positions: 2, exp: '1-3 Years', location: 'Hyderabad', desc: 'Build end-to-end web applications using React/Next.js frontend and Node.js/Java backend technologies.' },
//               { role: 'Manual Tester', positions: 1, exp: '0-1 Years', location: 'Hyderabad', desc: 'Execute test cases, identify bugs, and ensure software quality through thorough manual testing processes.' },
//               { role: 'React JS Developer', positions: 2, exp: '1-3 Years', location: 'Hyderabad', desc: 'Create interactive user interfaces using React.js with state management and component-based architecture.' },
//               { role: 'UI / UX Designer', positions: 1, exp: '1-3 Years', location: 'Hyderabad', desc: 'Design intuitive user experiences and pixel-perfect interfaces using Figma and modern design principles.' },
//               { role: 'Node JS Developer', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Build scalable backend services and REST APIs using Node.js, Express, and database technologies.' }
//             ];

//             var PAGE_SIZE = 6;
//             var currentPage = 0;
//             var filteredJobs = jobs.slice();

//             function renderCards() {
//               var grid = document.getElementById('opCardsGrid');
//               var noResults = document.getElementById('opNoResults');
//               var pagination = document.getElementById('opPagination');
//               if (!grid) return;
//               var start = currentPage * PAGE_SIZE;
//               var pageJobs = filteredJobs.slice(start, start + PAGE_SIZE);
//               var totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);
//               if (filteredJobs.length === 0) {
//                 grid.innerHTML = '';
//                 noResults.style.display = 'block';
//                 pagination.innerHTML = '';
//                 return;
//               }
//               noResults.style.display = 'none';
//               var html = '';
//               pageJobs.forEach(function(job, idx) {
//                 html += '<div class="op-card">';
//                 html += '<div class="op-card-logo"><img width={100} height={100} loading="lazy" decoding="async" src="/images/favicon.png" alt="mTouch Labs" /></div>';
//                 html += '<h3 class="op-card-title">' + job.role + '</h3>';
//                 html += '<div class="op-card-meta">';
//                 html += '<span><i class="fas fa-users"></i> 0' + job.positions + ' Open Position' + (job.positions > 1 ? 's' : '') + '</span>';
//                 html += '<span><i class="fas fa-calendar-alt"></i> ' + job.exp + ' Of Experience</span>';
//                 html += '<span><i class="fas fa-map-marker-alt"></i> ' + job.location + '</span>';
//                 html += '</div>';
//                 html += '<div class="op-card-actions">';
//                 html += '<button class="op-btn-details" data-idx="' + (start + idx) + '">Job Details</button>';
//                 html += '<button class="op-btn-apply" data-role="' + job.role + '">Apply Job</button>';
//                 html += '</div>';
//                 html += '</div>';
//               });
//               grid.innerHTML = html;
//               var dotsHtml = '';
//               for (var i = 0; i < totalPages; i++) {
//                 dotsHtml += '<span class="op-dot' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '"></span>';
//               }
//               pagination.innerHTML = dotsHtml;
//             }

//             function applyFilters() {
//               var locVal = document.getElementById('opFilterLocation').value;
//               var roleVal = document.getElementById('opFilterRole').value;
//               filteredJobs = jobs.filter(function(j) {
//                 return (!locVal || j.location === locVal) && (!roleVal || j.role === roleVal);
//               });
//               currentPage = 0;
//               renderCards();
//             }

//             document.getElementById('opApplyFilter').addEventListener('click', applyFilters);

//             document.addEventListener('click', function(e) {
//               if (e.target.classList.contains('op-dot')) {
//                 currentPage = parseInt(e.target.getAttribute('data-page'));
//                 renderCards();
//               }
//             });

//             document.addEventListener('click', function(e) {
//               var btn = e.target.closest('.op-btn-details');
//               if (!btn) return;
//               var idx = parseInt(btn.getAttribute('data-idx'));
//               var job = filteredJobs[idx];
//               if (!job) return;
//               document.getElementById('jobDetailsTitle').textContent = job.role;
//               document.getElementById('jobDetailsContent').innerHTML =
//                 '<p><strong>Location:</strong> ' + job.location + '</p>' +
//                 '<p><strong>Experience:</strong> ' + job.exp + '</p>' +
//                 '<p><strong>Open Positions:</strong> 0' + job.positions + '</p>' +
//                 '<p><strong>Description:</strong> ' + job.desc + '</p>';
//               detailsModal.classList.add('active');
//               document.body.style.overflow = 'hidden';
//             });

//             document.addEventListener('click', function(e) {
//               var btn = e.target.closest('.op-btn-apply, .careers-apply-btn, .careers-apply-btn-section');
//               if (!btn) return;
//               var role = btn.getAttribute('data-role') || '';
//               var roleSelect = modal.querySelector('select[name="role"]');
//               if (roleSelect && role) roleSelect.value = role;
//               modal.classList.add('active');
//               document.body.style.overflow = 'hidden';
//             });

//             closeBtn.addEventListener('click', function() { modal.classList.remove('active'); document.body.style.overflow = ''; });
//             modal.addEventListener('click', function(e) { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } });
//             closeDetailsBtn.addEventListener('click', function() { detailsModal.classList.remove('active'); document.body.style.overflow = ''; });
//             detailsModal.addEventListener('click', function(e) { if (e.target === detailsModal) { detailsModal.classList.remove('active'); document.body.style.overflow = ''; } });

//             var ph = modal.querySelector('input[name="mobile"]');
//             if (ph) ph.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });

//             var form = document.getElementById('careerApplyForm');
//             if (form) {
//               form.addEventListener('submit', function(e) {
//                 e.preventDefault();
//                 var formData = new FormData(form);
//                 fetch('/api/careers', {
//                   method: 'POST',
//                   body: formData
//                 }).then(function(r) {
//                   if (r.ok) { alert('Application submitted successfully!'); modal.classList.remove('active'); document.body.style.overflow = ''; form.reset(); }
//                 }).catch(function(err) { console.error(err); });
//               });
//             }

//             renderCards();

//             // Counter animation - numbers count up when scrolled into view
//             function animateCounters() {
//               var counters = document.querySelectorAll('.counter-num');
//               counters.forEach(function(counter) {
//                 var target = parseInt(counter.getAttribute('data-target'));
//                 var suffix = counter.getAttribute('data-suffix') || '';
//                 var display = counter.getAttribute('data-display') || '';
//                 var duration = 2000;
//                 var startTime = null;
//                 function step(timestamp) {
//                   if (!startTime) startTime = timestamp;
//                   var progress = Math.min((timestamp - startTime) / duration, 1);
//                   var eased = 1 - Math.pow(1 - progress, 3);
//                   var current = Math.floor(eased * target);
//                   if (display && progress >= 1) {
//                     counter.textContent = display;
//                   } else if (display) {
//                     counter.textContent = current;
//                   } else {
//                     counter.textContent = current + suffix;
//                   }
//                   if (progress < 1) {
//                     requestAnimationFrame(step);
//                   } else if (display) {
//                     counter.textContent = display;
//                   } else {
//                     counter.textContent = target + suffix;
//                   }
//                 }
//                 requestAnimationFrame(step);
//               });
//             }
//             var statsSection = document.querySelector('.careers-stats-main');
//             if (statsSection) {
//               var observer = new IntersectionObserver(function(entries) {
//                 entries.forEach(function(entry) {
//                   if (entry.isIntersecting) {
//                     animateCounters();
//                     observer.unobserve(entry.target);
//                   }
//                 });
//               }, { threshold: 0.3 });
//               observer.observe(statsSection);
//             }

//             // FAQ toggle
//             var faqItems = document.querySelectorAll('._faq_item');
//             faqItems.forEach(function(item) {
//               item.querySelector('._faq_question').addEventListener('click', function() {
//                 var isActive = item.classList.contains('active');
//                 faqItems.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
//                 if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
//               });
//             });
//           }
//           init();
//         })();
//       `}} />
//     </>
//   );
// }

import type { Metadata } from "next";
import Script from "next/script";
import "../it-solutions-company/style.css";
import "./careers-hero.css";

export const metadata: Metadata = {
  title: "Careers | Join Our Software Development Team",
  description:
    "Join the software development team. Explore IT career opportunities in AI, cloud, mobile apps, and enterprise technology.",
  keywords: [
    "Careers",
    "Software Development Jobs",
    "IT Careers",
    "Tech Jobs in India",
    "AI and Cloud Jobs",
    "Software Engineer Jobs",
  ],
  alternates: { canonical: "/careers" },
 openGraph: {
    title: "Careers | Join Our Software Development Team",
    description: "Explore career opportunities in software development, AI, cloud, and enterprise technology.",
    url: "https://www.mtouchlabs.com/careers",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "/images/Light.png", width: 1200, height: 630, alt: "mTouch Labs Careers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join Our Software Development Team",
    description: "Build your career in AI, cloud, and enterprise software with mTouch Labs.",
    images: ["/images/Light.png"],
  },
  robots: { index: true, follow: true },
};

const countryCodes = [
  { code: "IN", value: "91", label: "India (+91)" },
  { code: "US", value: "1", label: "United States (+1)" },
  { code: "GB", value: "44", label: "United Kingdom (+44)" },
  { code: "AU", value: "61", label: "Australia (+61)" },
  { code: "AE", value: "971", label: "UAE (+971)" },
  { code: "SG", value: "65", label: "Singapore (+65)" },
  { code: "DE", value: "49", label: "Germany (+49)" },
  { code: "FR", value: "33", label: "France (+33)" },
  { code: "JP", value: "81", label: "Japan (+81)" },
  { code: "CN", value: "86", label: "China (+86)" },
  { code: "CA", value: "1_CA", label: "Canada (+1)" },
  { code: "SA", value: "966", label: "Saudi Arabia (+966)" },
  { code: "QA", value: "974", label: "Qatar (+974)" },
  { code: "KW", value: "965", label: "Kuwait (+965)" },
];

const jobRoles = [
  "Full Stack Developer",
  "React & Node.js Developer",
  "Mobile App Developer (iOS, Android, Hybrid)",
  "Salesforce Developer",
  "DevOps Engineer",
  "QA & Automation Engineer",
  "AI / Machine Learning Engineer",
  "UI/UX Designer",
  "Project Manager",
];

export default function Page() {
  return (
    <>
      <div>
        {/* ===== APPLY MODAL ===== */}
        <div className="crm-overlay" id="careerFormModal">
          <div className="crm-box">
            <button className="crm-close" id="closeCareerModal" aria-label="Close apply form" type="button">&times;</button>
            <h2 className="crm-title">Apply for this Role</h2>
            <form id="careerApplyForm" noValidate>
              {/* Hidden — captured from the job card the user clicks "Apply Now" on. Sent to xCRM /hr/apply. */}
              <input type="hidden" name="openingId" id="applyOpeningId" defaultValue="" />
              <div className="crm-field">
                <label>Full Name <span className="crm-req">*</span></label>
                <div className="crm-input-wrap">
                  <i className="fas fa-user"></i>
                  <input type="text" name="name" placeholder="John Doe" required minLength={2} />
                </div>
                <span className="crm-error" id="err-name"></span>
              </div>
              <div className="crm-field">
                <label>Email Address <span className="crm-req">*</span></label>
                <div className="crm-input-wrap">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" placeholder="you@email.com" required />
                </div>
                <span className="crm-error" id="err-email"></span>
              </div>
              <div className="crm-row">
                <div className="crm-field crm-half">
                  <label>Country Code <span className="crm-req">*</span></label>
                  <select name="countryCode" required>
                    {countryCodes.map((c, i) => (
                      <option key={`${c.code}-${i}`} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div className="crm-field crm-half">
                  <label>Phone Number <span className="crm-req">*</span></label>
                  <div className="crm-input-wrap">
                    <i className="fas fa-phone"></i>
                    <input type="tel" name="mobile" placeholder="9876543210" required inputMode="numeric" maxLength={15} />
                  </div>
                  <span className="crm-error" id="err-mobile"></span>
                </div>
              </div>
              <div className="crm-field">
                <label>Role <span className="crm-req">*</span></label>
                <select name="role" required>
                  <option value="">Select a role</option>
                  {jobRoles.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                  ))}
                </select>
                <span className="crm-error" id="err-role"></span>
              </div>
              <div className="crm-field">
                <label>Resume <span className="crm-req">*</span> <span className="crm-hint">(PDF, DOC, DOCX — max 5 MB)</span></label>
                <div className="crm-file-wrap" id="fileDropZone">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag &amp; drop or <span className="crm-file-browse">browse</span></p>
                  <p className="crm-file-name" id="fileName"></p>
                  <input type="file" name="resume" accept=".pdf,.doc,.docx" id="resumeInput" required />
                </div>
                <span className="crm-error" id="err-resume"></span>
              </div>
              <div className="crm-field">
                <label>Total Experience (Years) <span className="crm-req">*</span></label>
                <div className="crm-input-wrap">
                  <i className="fas fa-briefcase"></i>
                  <input type="number" name="experience" placeholder="e.g. 3" required min={0} max={50} step="0.5" />
                </div>
                <span className="crm-error" id="err-experience"></span>
              </div>
              <div className="crm-field">
                <label>Message <span className="crm-req">*</span></label>
                <textarea name="message" placeholder="Tell us briefly about your experience and why you'd be a great fit..." rows={4} required minLength={10}></textarea>
                <span className="crm-error" id="err-message"></span>
              </div>
              {/* Cloudflare Turnstile — managed (visible) */}
              <div className="crm-field crm-captcha-field">
                <label>Verify you&apos;re human <span className="crm-req">*</span></label>
                <div id="turnstile-container" className="crm-turnstile-visible"></div>
                <span className="crm-error" id="err-captcha"></span>
              </div>
              <button type="submit" className="crm-submit" id="careerSubmitBtn">
                <span className="crm-btn-text">Submit Application</span>
                <span className="crm-btn-loader" style={{ display: "none" }}><i className="fas fa-spinner fa-spin"></i></span>
              </button>
            </form>
          </div>
        </div>

        {/* ===== JOB DETAILS MODAL ===== */}
        <div className="crm-overlay" id="jobDetailsModal">
          <div className="crm-box crm-box-details">
            <button className="crm-close" id="closeJobDetailsModal" aria-label="Close job details" type="button">&times;</button>
            <h2 className="crm-title" id="jobDetailsTitle">Job Details</h2>
            <div id="jobDetailsContent" className="crm-details-body"></div>
            <button className="crm-apply-from-details" id="applyFromDetails">Apply for this Role <i className="fas fa-arrow-right"></i></button>
          </div>
        </div>

        {/* ═══════════ HERO (itsc-hero style) ═══════════ */}
        <div className="itsc-page">
          <section className="itsc-hero">
            <div className="itsc-hero-grid" aria-hidden="true" />
            <div className="itsc-blob itsc-blob-a" aria-hidden="true" />
            <div className="itsc-blob itsc-blob-b" aria-hidden="true" />
            <div className="itsc-blob itsc-blob-c" aria-hidden="true" />

            <div className="itsc-container">
              <div className="itsc-hero-content">
                <div className="itsc-badge">
                  <span className="itsc-badge-dot" />
                  We&apos;re Hiring
                </div>

                <h1 className="itsc-h1">
                  Build Your Career
                  <br />
                  with <span className="itsc-h1-gradient">mTouch Labs</span>
                </h1>

                <p className="itsc-hero-sub">
                  Join a passionate team of developers, designers, engineers, and innovators building
                  world-class software, AI, and{" "}
                  <a className="itsc-inline-link" href="/it-services-digital-transformation-company">
                    enterprise solutions
                  </a>{" "}
                  for global businesses.
                </p>

                {/* Careers introduction — sits where the stats/CTA block used to be */}
                <h2 className="cr-hero-intro-title">
                  Join a Leading Software Development &amp; AI Solutions Company
                </h2>
                <p className="cr-hero-intro-text">
                  At mTouch Labs, we build scalable software, enterprise platforms, AI-powered
                  systems, and cloud-native applications for global businesses. Behind every
                  successful solution is a passionate team of developers, designers, engineers,
                  and innovators.
                </p>
                <p className="cr-hero-intro-text cr-hero-intro-text-last">
                  If you&apos;re looking for meaningful software development careers, exciting IT
                  job opportunities, and a culture that values growth and innovation —
                  you&apos;ll thrive here.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ===== 2 · WHY WORK ===== */}
        <section className="cr-why scroll-reveal">
          <div className="cr-why-container">
            <h2 className="cr-section-heading">Why Work at <span className="cr-accent">mTouch Labs?</span></h2>
            <div className="cr-why-grid">
              <div className="cr-why-card sr-card" style={{ animationDelay: "0s" }}>
                <div className="cr-why-num">01</div>
                <div className="cr-why-icon"><i className="fas fa-globe-americas"></i></div>
                <h3>Work on Global Projects</h3>
                <p>We deliver enterprise software, SaaS platforms, mobile apps, DevOps automation, and AI solutions across India, the UAE, the UK, the US, and other international markets.</p>
              </div>
              <div className="cr-why-card sr-card" style={{ animationDelay: "0.12s" }}>
                <div className="cr-why-num">02</div>
                <div className="cr-why-icon"><i className="fas fa-chart-line"></i></div>
                <h3>Real Career Growth</h3>
                <p>We believe careers should grow with capability. Our team members gain exposure to full-stack development, cloud computing &amp; DevOps, Salesforce &amp; enterprise platforms, AI &amp; Machine Learning, and scalable SaaS product engineering.</p>
              </div>
              <div className="cr-why-card sr-card" style={{ animationDelay: "0.24s" }}>
                <div className="cr-why-num">03</div>
                <div className="cr-why-icon"><i className="fas fa-flask"></i></div>
                <h3>Innovation-Driven Culture</h3>
                <p>We encourage experimentation, continuous improvement, and collaborative problem-solving.</p>
              </div>
              <div className="cr-why-card sr-card" style={{ animationDelay: "0.36s" }}>
                <div className="cr-why-num">04</div>
                <div className="cr-why-icon"><i className="fas fa-hands-helping"></i></div>
                <h3>Transparent &amp; Supportive Environment</h3>
                <p>Open communication, performance recognition, and leadership mentorship are part of our DNA.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3 · SUBMIT YOUR RESUME ===== */}
        <section className="cr-resume scroll-reveal" id="submit-resume">
          <div className="cr-resume-container">
            <div className="cr-resume-card">
              <div className="cr-resume-icon"><i className="fas fa-file-arrow-up" aria-hidden="true"></i></div>
              <h2 className="cr-resume-heading">Looking for a Job at <span className="cr-accent">mTouch Labs?</span></h2>
              <p className="cr-resume-text">
                We hire year-round across software development, mobile, cloud, DevOps, Salesforce,
                AI and design. Send us your resume and our talent team will get in touch when a
                role matches your skills and experience.
              </p>
              <div className="cr-resume-actions">
                <a
                  href="mailto:careers@mtouchlabs.com?subject=Job%20Application%20%E2%80%93%20mTouch%20Labs&amp;body=Hi%20mTouch%20Labs%20team%2C%0A%0APlease%20find%20my%20resume%20attached.%0A%0AName%3A%0ARole%20of%20interest%3A%0ATotal%20experience%3A%0APreferred%20location%3A%0A%0AThank%20you."
                  className="cr-resume-btn-primary"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true"></i> Submit Your Resume
                </a>
                <a href="/contact-us" className="cr-resume-btn-secondary">
                  <i className="fas fa-headset" aria-hidden="true"></i> Talk to Our Team
                </a>
              </div>
              <p className="cr-resume-note">
                Email your CV to{" "}
                <a href="mailto:careers@mtouchlabs.com">careers@mtouchlabs.com</a> — please attach
                it as a PDF and mention the role you&apos;re interested in.
              </p>
              <p className="cr-resume-loc">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i> Hyderabad, Bangalore &amp; Remote
              </p>
            </div>
          </div>
        </section>

        {/* ===== 3 · WHAT WE VALUE ===== */}
        <section className="cr-values scroll-reveal">
          <div className="cr-values-container">
            <div className="cr-section-label">Our Principles</div>
            <h2 className="cr-section-heading">What We <span className="cr-accent">Value</span></h2>
            <p className="cr-values-intro">At mTouch Labs, we hire for attitude, adaptability, and ambition — not just skillsets.</p>
            <div className="cr-values-grid">
              <div className="cr-value-item sr-card" style={{ animationDelay: "0s" }}><div className="cr-value-icon"><i className="fas fa-code"></i></div><h3>Strong Technical Foundation</h3></div>
              <div className="cr-value-item sr-card" style={{ animationDelay: "0.08s" }}><div className="cr-value-icon"><i className="fas fa-puzzle-piece"></i></div><h3>Problem-Solving Mindset</h3></div>
              <div className="cr-value-item sr-card" style={{ animationDelay: "0.16s" }}><div className="cr-value-icon"><i className="fas fa-flag"></i></div><h3>Ownership &amp; Accountability</h3></div>
              <div className="cr-value-item sr-card" style={{ animationDelay: "0.24s" }}><div className="cr-value-icon"><i className="fas fa-rocket"></i></div><h3>Passion for Scalable Systems</h3></div>
              <div className="cr-value-item sr-card" style={{ animationDelay: "0.32s" }}><div className="cr-value-icon"><i className="fas fa-users"></i></div><h3>Team Collaboration</h3></div>
            </div>
          </div>
        </section>

        {/* ===== 4 · FAQ ===== */}
        <section className="cr-faq scroll-reveal">
          <div className="cr-faq-container">
            <div className="cr-section-label">Got Questions?</div>
            <h2 className="cr-section-heading">Frequently Asked <span className="cr-accent">Questions</span></h2>
            <div className="cr-faq-list">
              <div className="cr-faq-item active">
                <button className="cr-faq-q"><span>What technologies does mTouch Labs hire for?</span><span className="cr-faq-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
                <div className="cr-faq-a"><p>We hire professionals skilled in web development, mobile app development, cloud services, DevOps, Salesforce, AI, and enterprise software engineering.</p></div>
              </div>
              <div className="cr-faq-item">
                <button className="cr-faq-q"><span>Does mTouch Labs offer remote jobs?</span><span className="cr-faq-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
                <div className="cr-faq-a"><p>Yes, depending on the role and project requirements, we offer hybrid and remote work opportunities.</p></div>
              </div>
              <div className="cr-faq-item">
                <button className="cr-faq-q"><span>What is the hiring process?</span><span className="cr-faq-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
                <div className="cr-faq-a"><p>Our hiring process includes resume screening, technical assessment, interview discussions, and HR evaluation.</p></div>
              </div>
              <div className="cr-faq-item">
                <button className="cr-faq-q"><span>How can I apply for jobs?</span><span className="cr-faq-chevron"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg></span></button>
                <div className="cr-faq-a"><p>You can apply by submitting your resume through our careers page or by emailing <a href="mailto:careers@mtouchlabs.com">careers@mtouchlabs.com</a>.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5 · READY TO JOIN ===== */}
        <section className="cr-cta scroll-reveal">
          <div className="cr-cta-shapes"><span></span><span></span><span></span></div>
          <div className="cr-cta-inner">
            <h2>Ready to Join Our Team?</h2>
            <p>If you&apos;re passionate about building high-performance software solutions and want to grow your career in a forward-thinking IT company, we&apos;d love to connect with you.</p>
            <p className="cr-cta-tagline">Let&apos;s build the future of digital innovation together.</p>
            <div className="cr-cta-actions">
              <a href="/contact-us" className="cr-cta-btn-primary"><i className="fas fa-headset"></i> Contact Us</a>
              <a href="#submit-resume" className="cr-cta-btn-secondary"><i className="fas fa-paper-plane"></i> Send Your Resume</a>
            </div>
          </div>
        </section>
      </div>

      {/* Cloudflare Turnstile API */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" />

      {/* ===== SCRIPTS ===== */}
      <Script id="career-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(){
function init(){
  console.log('[Careers] Script initializing...');
  var modal=document.getElementById('careerFormModal'),closeBtn=document.getElementById('closeCareerModal'),detailsModal=document.getElementById('jobDetailsModal'),closeDetailsBtn=document.getElementById('closeJobDetailsModal'),applyFromDetailsBtn=document.getElementById('applyFromDetails');
  if(!modal||!closeBtn)return setTimeout(init,300);

  /* Live data — populated from xCRM GET /hr/getallopening on init() */
  var jobs = [];

  /* xCRM HR API — single source of truth, used in both local dev and production. */
  var XCRM_BASE_URL = 'https://crmapi.mtouchlabs.com';
  var OPENINGS_API_URL = XCRM_BASE_URL + '/hr/getallopening';
  var PAGE_SIZE=6,currentPage=0,filteredJobs=jobs.slice(),currentDetailsRole='',currentDetailsOpeningId='';

  /* Strip HTML tags for safe display in card preview */
  function stripHtml(html){
    if(!html) return '';
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    var text = (tmp.textContent || tmp.innerText || '').replace(/\\s+/g,' ').trim();
    return text;
  }

  /* Build "exp_from-exp_to Years" label, with sensible fallbacks */
  function formatExperience(from, to){
    if(from == null && to == null) return 'Experience not specified';
    if(from == null) return '0-' + to + ' Years';
    if(to == null || to === from) return from + '+ Years';
    return from + '-' + to + ' Years';
  }

  /* Map a raw xCRM opening into the shape the rest of the script already understands */
  function mapOpening(o){
    return {
      id: o.id,
      role: o.title || 'Untitled Role',
      positions: typeof o.positions === 'number' ? o.positions : (parseInt(o.positions,10) || 1),
      exp: formatExperience(o.exp_from, o.exp_to),
      expFrom: o.exp_from,
      expTo: o.exp_to,
      location: (o.location || '').trim() || 'Hyderabad',
      descHtml: o.description || '',
      descText: stripHtml(o.description || '').slice(0, 180) + (stripHtml(o.description || '').length > 180 ? '…' : ''),
      salaryFrom: o.salary_from,
      salaryTo: o.salary_to,
      closingDate: o.closingdate
    };
  }

  /* Populate the location & role filter dropdowns from live data so user can filter
     by whatever the xCRM is actually returning instead of stale hardcoded values. */
  function rebuildFilterOptions(){
    var locSel = document.getElementById('opFilterLocation');
    var roleSel = document.getElementById('opFilterRole');
    if(!locSel || !roleSel) return;
    var locs = {}, roles = {};
    jobs.forEach(function(j){
      if(j.location) locs[j.location] = true;
      if(j.role) roles[j.role] = true;
    });
    locSel.innerHTML = '<option value="">All Locations</option>' +
      Object.keys(locs).map(function(l){ return '<option value="' + l.replace(/"/g,'&quot;') + '">' + l + '</option>'; }).join('');
    roleSel.innerHTML = '<option value="">All Roles</option>' +
      Object.keys(roles).map(function(r){ return '<option value="' + r.replace(/"/g,'&quot;') + '">' + r + '</option>'; }).join('');
  }

  function fetchOpenings(){
    var grid = document.getElementById('opCardsGrid');
    var noRes = document.getElementById('opNoResults');
    /* The public careers page no longer lists individual openings — candidates
       email their resume instead. Skip the network call when the grid is absent. */
    if(!grid){ return Promise.resolve(); }
    if(grid){ grid.innerHTML = '<div class="cr-jobs-loading" style="grid-column:1/-1;padding:40px;text-align:center;color:#6b7280;"><i class="fas fa-spinner fa-spin"></i> Loading open positions…</div>'; }
    return fetch(OPENINGS_API_URL, { method: 'GET', cache: 'no-store' })
      .then(function(r){ if(!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function(payload){
        var list = (payload && payload.data) ? payload.data : [];
        /* Drop archived / soft-deleted / disabled entries defensively */
        list = list.filter(function(o){ return o && o.status !== false && !o.isdeleted && !o.isArchived; });
        jobs = list.map(mapOpening);
        filteredJobs = jobs.slice();
        currentPage = 0;
        rebuildFilterOptions();
        /* Re-init custom dropdowns to pick up the new <option>s */
        try { initCustomDropdowns(); } catch(e){}
        renderCards();
      })
      .catch(function(err){
        console.error('[Careers] Failed to fetch openings:', err);
        if(grid){ grid.innerHTML = ''; }
        if(noRes){ noRes.textContent = 'Unable to load open positions right now. Please try again later.'; noRes.style.display = 'block'; }
      });
  }

  function renderCards(){
    var grid=document.getElementById('opCardsGrid'),noRes=document.getElementById('opNoResults'),pag=document.getElementById('opPagination');
    if(!grid)return;
    var start=currentPage*PAGE_SIZE,pageJobs=filteredJobs.slice(start,start+PAGE_SIZE),totalPages=Math.ceil(filteredJobs.length/PAGE_SIZE);
    if(!filteredJobs.length){grid.innerHTML='';noRes.style.display='block';pag.innerHTML='';return;}
    noRes.style.display='none';
    var h='';
    pageJobs.forEach(function(job,idx){
      var posStr = (job.positions < 10 ? '0' : '') + job.positions;
      var safeRole = String(job.role).replace(/"/g,'&quot;');
      h+='<div class="cr-job-card">';
      h+='<div class="cr-job-card-top"><div class="cr-job-card-logo"><img width={100} height={100} loading="lazy" decoding="async" src="/images/favicon.png" alt="mTouch Labs"/></div><span class="cr-job-card-loc"><i class="fas fa-map-marker-alt"></i> '+job.location+'</span></div>';
      h+='<h3 class="cr-job-card-title">'+job.role+'</h3>';
      h+='<div class="cr-job-card-meta"><span><i class="fas fa-users"></i> '+posStr+' Position'+(job.positions>1?'s':'')+'</span><span><i class="fas fa-briefcase"></i> '+job.exp+'</span></div>';
      h+='<p class="cr-job-card-desc">'+job.descText+'</p>';
      h+='<div class="cr-job-card-actions"><button class="cr-btn-details" data-idx="'+(start+idx)+'">View Details</button><button class="cr-btn-apply" data-role="'+safeRole+'" data-opening-id="'+job.id+'">Apply Now</button></div>';
      h+='</div>';
    });
    grid.innerHTML=h;
    var dots='';for(var i=0;i<totalPages;i++){dots+='<span class="cr-dot'+(i===currentPage?' active':'')+'" data-page="'+i+'"></span>';}
    pag.innerHTML=dots;
  }

  function applyFilters(){var locEl=document.getElementById('opFilterLocation'),roleEl=document.getElementById('opFilterRole');if(!locEl||!roleEl)return;var loc=locEl.value,role=roleEl.value;filteredJobs=jobs.filter(function(j){return(!loc||j.location===loc)&&(!role||j.role===role);});currentPage=0;renderCards();}
  var opApplyBtn=document.getElementById('opApplyFilter');
  if(opApplyBtn){opApplyBtn.addEventListener('click',applyFilters);}

  /* ── Viewport-aware custom dropdown (replaces native <select> in filter bar) ── */
  function initCustomDropdowns(){
    var targets = document.querySelectorAll('#opFilterLocation, #opFilterRole');
    targets.forEach(function(sel){
      if(sel.dataset.customized === '1') return;
      sel.dataset.customized = '1';
      sel.classList.add('cr-custom-dd-native');

      var wrap = document.createElement('div');
      wrap.className = 'cr-custom-dd';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cr-custom-dd-btn';
      btn.setAttribute('aria-haspopup','listbox');
      btn.setAttribute('aria-expanded','false');
      btn.innerHTML = '<span class="cr-custom-dd-label"></span><i class="fas fa-chevron-down" aria-hidden="true"></i>';
      var list = document.createElement('div');
      list.className = 'cr-custom-dd-list';
      list.setAttribute('role','listbox');
      list.setAttribute('hidden','');

      Array.from(sel.options).forEach(function(opt){
        var li = document.createElement('div');
        li.className = 'cr-custom-dd-item' + (opt.selected ? ' selected' : '');
        li.setAttribute('role','option');
        li.dataset.value = opt.value;
        li.textContent = opt.textContent;
        list.appendChild(li);
      });

      wrap.appendChild(btn);
      wrap.appendChild(list);
      sel.parentNode.insertBefore(wrap, sel);
      wrap.appendChild(sel);

      function setLabel(){
        var selOpt = sel.options[sel.selectedIndex];
        wrap.querySelector('.cr-custom-dd-label').textContent = selOpt ? selOpt.textContent : '';
      }
      setLabel();

      function closeAll(){
        document.querySelectorAll('.cr-custom-dd-list').forEach(function(l){ l.setAttribute('hidden',''); l.removeAttribute('data-position'); l.style.maxHeight=''; });
        document.querySelectorAll('.cr-custom-dd').forEach(function(w){ w.classList.remove('open'); });
        document.querySelectorAll('.cr-custom-dd-btn').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
      }

      function positionList(){
        list.removeAttribute('data-position');
        list.style.maxHeight = '';
        var btnRect = btn.getBoundingClientRect();
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var spaceBelow = vh - btnRect.bottom - 16;
        var spaceAbove = btnRect.top - 16;
        var prefer = spaceBelow >= 200 || spaceBelow >= spaceAbove ? 'down' : 'up';
        if(prefer === 'up') list.setAttribute('data-position','up');
        var avail = prefer === 'up' ? spaceAbove : spaceBelow;
        list.style.maxHeight = Math.max(160, Math.min(avail, 320)) + 'px';
      }

      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var isOpen = !list.hasAttribute('hidden');
        closeAll();
        if(!isOpen){
          wrap.classList.add('open');
          btn.setAttribute('aria-expanded','true');
          list.removeAttribute('hidden');
          positionList();
        }
      });

      list.addEventListener('click', function(e){
        var item = e.target.closest('.cr-custom-dd-item');
        if(!item) return;
        sel.value = item.dataset.value;
        list.querySelectorAll('.cr-custom-dd-item').forEach(function(i){ i.classList.remove('selected'); });
        item.classList.add('selected');
        setLabel();
        try { sel.dispatchEvent(new Event('change', { bubbles: true })); } catch(err){ var ev = document.createEvent('HTMLEvents'); ev.initEvent('change', true, false); sel.dispatchEvent(ev); }
        closeAll();
      });

      window.addEventListener('resize', function(){ if(!list.hasAttribute('hidden')) positionList(); });
      window.addEventListener('scroll', function(){ if(!list.hasAttribute('hidden')) positionList(); }, true);
    });

    document.addEventListener('click', function(e){
      if(!e.target.closest('.cr-custom-dd')){
        document.querySelectorAll('.cr-custom-dd-list').forEach(function(l){ l.setAttribute('hidden',''); });
        document.querySelectorAll('.cr-custom-dd').forEach(function(w){ w.classList.remove('open'); });
        document.querySelectorAll('.cr-custom-dd-btn').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
      }
    });
  }
  initCustomDropdowns();
  document.addEventListener('click',function(e){if(e.target.classList.contains('cr-dot')){currentPage=parseInt(e.target.getAttribute('data-page'));renderCards();}});

  document.addEventListener('click',function(e){
    var btn=e.target.closest('.cr-btn-details'); if(!btn) return;
    var idx=parseInt(btn.getAttribute('data-idx')), job=filteredJobs[idx]; if(!job) return;
    currentDetailsRole = job.role;
    currentDetailsOpeningId = job.id;
    var posStr = (job.positions < 10 ? '0' : '') + job.positions;
    document.getElementById('jobDetailsTitle').textContent = job.role;
    document.getElementById('jobDetailsContent').innerHTML =
      '<div class="crm-detail-row"><span class="crm-detail-label">Location</span><span>'+job.location+'</span></div>'+
      '<div class="crm-detail-row"><span class="crm-detail-label">Experience</span><span>'+job.exp+'</span></div>'+
      '<div class="crm-detail-row"><span class="crm-detail-label">Open Positions</span><span>'+posStr+'</span></div>'+
      '<div class="crm-detail-desc">'+(job.descHtml || '<p>'+job.descText+'</p>')+'</div>';
    detailsModal.classList.add('active');
    document.body.style.overflow='hidden';
  });
  document.addEventListener('click',function(e){
    var btn=e.target.closest('.cr-btn-apply'); if(!btn) return;
    openApplyModal(btn.getAttribute('data-role')||'', btn.getAttribute('data-opening-id')||'');
  });
  applyFromDetailsBtn.addEventListener('click',function(){
    detailsModal.classList.remove('active');
    openApplyModal(currentDetailsRole, currentDetailsOpeningId);
  });

  function openApplyModal(role, openingId){
    var rs = modal.querySelector('select[name="role"]');
    if(rs && role){
      /* Make sure the option exists (live data may bring titles not in the static <option> list). */
      var has = false;
      for(var i=0;i<rs.options.length;i++){ if(rs.options[i].value === role){ has = true; break; } }
      if(!has){ var opt = document.createElement('option'); opt.value = role; opt.textContent = role; rs.appendChild(opt); }
      rs.value = role;
    }
    var oid = document.getElementById('applyOpeningId');
    if(oid) oid.value = openingId || '';
    clearAllErrors();
    modal.classList.add('active');
    document.body.style.overflow='hidden';
  }
  closeBtn.addEventListener('click',function(){modal.classList.remove('active');document.body.style.overflow='';});
  modal.addEventListener('click',function(e){if(e.target===modal){modal.classList.remove('active');document.body.style.overflow='';}});
  closeDetailsBtn.addEventListener('click',function(){detailsModal.classList.remove('active');document.body.style.overflow='';});
  detailsModal.addEventListener('click',function(e){if(e.target===detailsModal){detailsModal.classList.remove('active');document.body.style.overflow='';}});

  /* ── PHONE: real-time enforcement ── */
  var phoneMaxDigits = {
    '91':10, '1':10, '1_CA':10, '44':10, '61':9,
    '971':9, '65':8, '49':11, '33':9, '81':10,
    '86':11, '966':9, '974':8, '965':8
  };

  var ph = modal.querySelector('input[name="mobile"]');
  var ccSelect = modal.querySelector('select[name="countryCode"]');

  function getMaxDigits(){
    var cc = ccSelect ? ccSelect.value : '91';
    return phoneMaxDigits[cc] || 15;
  }

  function updatePhonePlaceholder(){
    if(!ph) return;
    var cc = ccSelect ? ccSelect.value : '91';
    var placeholders = {
      '91':'9876543210', '1':'2025551234', '1_CA':'4165551234',
      '44':'7911123456', '61':'412345678', '971':'501234567',
      '65':'91234567', '49':'15112345678', '33':'612345678',
      '81':'9012345678', '86':'13812345678', '966':'512345678',
      '974':'55123456', '965':'55123456'
    };
    ph.placeholder = placeholders[cc] || '1234567890';
    ph.maxLength = getMaxDigits();
  }

  if(ph){
    console.log('[Careers] Phone input handler attached, max digits for', ccSelect?ccSelect.value:'91', '=', getMaxDigits());
    ph.addEventListener('input', function(){
      /* Strip non-digits */
      var digits = this.value.replace(/[^0-9]/g, '');
      /* Enforce max length based on country */
      var maxLen = getMaxDigits();
      if(digits.length > maxLen) digits = digits.substring(0, maxLen);
      this.value = digits;
      /* Live validation feedback */
      if(digits.length > 0){
        var err = validatePhone(digits, ccSelect ? ccSelect.value : '91');
        if(err) { showErr('err-mobile', err); }
        else { hideErr('err-mobile'); }
      } else {
        hideErr('err-mobile');
      }
    });
    ph.addEventListener('paste', function(e){
      e.preventDefault();
      var paste = (e.clipboardData || window.clipboardData).getData('text');
      var digits = paste.replace(/[^0-9]/g, '');
      var maxLen = getMaxDigits();
      if(digits.length > maxLen) digits = digits.substring(0, maxLen);
      this.value = digits;
    });
  }

  if(ccSelect){
    ccSelect.addEventListener('change', function(){
      updatePhonePlaceholder();
      /* Re-validate current phone value for new country */
      if(ph && ph.value.trim()){
        var digits = ph.value.trim();
        var maxLen = getMaxDigits();
        if(digits.length > maxLen){
          ph.value = digits.substring(0, maxLen);
        }
        var err = validatePhone(ph.value.trim(), this.value);
        if(err) { showErr('err-mobile', err); }
        else { hideErr('err-mobile'); }
      }
    });
  }

  updatePhonePlaceholder();

  var dropZone=document.getElementById('fileDropZone'),fileInput=document.getElementById('resumeInput'),fileNameEl=document.getElementById('fileName');
  if(dropZone&&fileInput){
    dropZone.addEventListener('click',function(){fileInput.click();});
    fileInput.addEventListener('change',function(){if(this.files&&this.files[0]){fileNameEl.textContent=this.files[0].name;dropZone.classList.add('has-file');}});
    dropZone.addEventListener('dragover',function(e){e.preventDefault();this.classList.add('drag-over');});
    dropZone.addEventListener('dragleave',function(){this.classList.remove('drag-over');});
    dropZone.addEventListener('drop',function(e){e.preventDefault();this.classList.remove('drag-over');if(e.dataTransfer.files&&e.dataTransfer.files[0]){fileInput.files=e.dataTransfer.files;fileNameEl.textContent=e.dataTransfer.files[0].name;dropZone.classList.add('has-file');}});
  }

  function showErr(id,msg){var el=document.getElementById(id);if(el){el.textContent=msg;el.style.display='block';}}
  function hideErr(id){var el=document.getElementById(id);if(el){el.textContent='';el.style.display='none';}}
  function clearAllErrors(){['err-name','err-email','err-mobile','err-role','err-resume','err-experience','err-message','err-captcha'].forEach(hideErr);}
  function shakeField(name){var w=modal.querySelector('[name="'+name+'"]');if(w){var p=w.closest('.crm-input-wrap')||w.closest('.crm-field')||w;p.classList.add('shake');setTimeout(function(){p.classList.remove('shake');},500);}}

  var emailRe=/^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$/;

  /* Country-specific phone validation rules:
     min/max = digit count (excluding country code),
     startsWith = allowed first digits (optional),
     msg = user-facing error */
  var phoneRules={
    '91':  {min:10, max:10, startsWith:['6','7','8','9'], msg:'Indian numbers must be 10 digits starting with 6, 7, 8, or 9'},
    '1':   {min:10, max:10, startsWith:['2','3','4','5','6','7','8','9'], msg:'US numbers must be 10 digits and cannot start with 0 or 1'},
    '1_CA':{min:10, max:10, startsWith:['2','3','4','5','6','7','8','9'], msg:'Canadian numbers must be 10 digits and cannot start with 0 or 1'},
    '44':  {min:10, max:10, startsWith:['1','2','3','7','8','9'], msg:'UK numbers must be 10 digits (without leading 0)'},
    '61':  {min:9,  max:9,  startsWith:['2','3','4','7','8'], msg:'Australian numbers must be 9 digits starting with 2, 3, 4, 7, or 8'},
    '971': {min:7,  max:9,  startsWith:['2','3','4','5','6','7','9'], msg:'UAE numbers must be 7-9 digits'},
    '65':  {min:8,  max:8,  startsWith:['3','6','8','9'], msg:'Singapore numbers must be 8 digits starting with 3, 6, 8, or 9'},
    '49':  {min:10, max:11, startsWith:['1','2','3','4','5','6','7','8','9'], msg:'German numbers must be 10-11 digits (without leading 0)'},
    '33':  {min:9,  max:9,  startsWith:['1','2','3','4','5','6','7','8','9'], msg:'French numbers must be 9 digits (without leading 0)'},
    '81':  {min:10, max:10, startsWith:['1','2','3','4','5','6','7','8','9'], msg:'Japanese numbers must be 10 digits (without leading 0)'},
    '86':  {min:11, max:11, startsWith:['1'], msg:'Chinese mobile numbers must be 11 digits starting with 1'},
    '966': {min:9,  max:9,  startsWith:['5'], msg:'Saudi mobile numbers must be 9 digits starting with 5'},
    '974': {min:8,  max:8,  startsWith:['3','4','5','6','7'], msg:'Qatar numbers must be 8 digits'},
    '965': {min:8,  max:8,  startsWith:['1','2','5','6','9'], msg:'Kuwait numbers must be 8 digits'}
  };

  function validatePhone(mobile, cc){
    if(!mobile) return 'Mobile number is required';
    if(!/^\\d+$/.test(mobile)) return 'Mobile number must contain only digits';
    /* Strip leading 0 if present (common in UK, France, Japan, etc.) */
    var cleaned = mobile;
    if(cleaned.charAt(0)==='0' && cc!=='91') cleaned = cleaned.substring(1);

    var rule = phoneRules[cc];
    if(rule){
      if(cleaned.length < rule.min || cleaned.length > rule.max) return rule.msg;
      if(rule.startsWith && rule.startsWith.length > 0){
        var firstDigit = cleaned.charAt(0);
        if(rule.startsWith.indexOf(firstDigit) === -1) return rule.msg;
      }
      return null; /* valid */
    }
    /* Fallback for unknown country codes */
    if(cleaned.length < 7 || cleaned.length > 15) return 'Mobile number must be 7-15 digits';
    return null;
  }

  function validateEmail(email){
    if(!email) return 'Email address is required';
    if(!emailRe.test(email)) return 'Please enter a valid email address';
    /* Check for common typos in domain */
    var domain = email.split('@')[1].toLowerCase();
    var typos = {'gmial.com':'gmail.com','gmal.com':'gmail.com','gamil.com':'gmail.com','gnail.com':'gmail.com','yahooo.com':'yahoo.com','yaho.com':'yahoo.com','hotmal.com':'hotmail.com','outloo.com':'outlook.com'};
    if(typos[domain]) return 'Did you mean ' + email.split('@')[0] + '@' + typos[domain] + '?';
    /* Check domain has at least one dot and reasonable TLD */
    var parts = domain.split('.');
    if(parts.length < 2) return 'Please enter a valid email domain';
    var tld = parts[parts.length - 1];
    if(tld.length < 2 || tld.length > 12) return 'Please enter a valid email domain';
    return null;
  }

  function validateForm(){
    clearAllErrors();
    var valid = true;
    var f = document.getElementById('careerApplyForm');
    var name = f.name.value.trim();
    var email = f.email.value.trim();
    var mobile = f.mobile.value.trim();
    var cc = f.countryCode.value;
    var role = f.role.value;
    var message = f.message.value.trim();
    var resume = f.resume.files[0];

    /* Name */
    if(!name || name.length < 2){
      showErr('err-name','Please enter your full name (min 2 characters)');
      shakeField('name'); valid = false;
    }

    /* Email */
    var emailErr = validateEmail(email);
    if(emailErr){
      showErr('err-email', emailErr);
      shakeField('email'); valid = false;
    }

    /* Phone — country-specific */
    var phoneErr = validatePhone(mobile, cc);
    if(phoneErr){
      showErr('err-mobile', phoneErr);
      shakeField('mobile'); valid = false;
    }

    /* Role */
    if(!role){ showErr('err-role','Please select a role'); valid = false; }

    /* Resume — REQUIRED */
    if(!resume){
      showErr('err-resume','Please upload your resume (PDF, DOC, or DOCX)');
      valid = false;
    } else {
      var ext = resume.name.split('.').pop().toLowerCase();
      if(['pdf','doc','docx'].indexOf(ext)===-1){
        showErr('err-resume','Only PDF, DOC, DOCX files allowed'); valid = false;
      } else if(resume.size > 5*1024*1024){
        showErr('err-resume','File size must be under 5 MB'); valid = false;
      } else if(resume.size === 0){
        showErr('err-resume','The file appears to be empty. Please upload a valid resume.');
        valid = false;
      }
    }

    /* Experience — required by xCRM /hr/apply */
    var expRaw = f.experience.value.trim();
    if(!expRaw){
      showErr('err-experience','Please enter your total experience in years');
      shakeField('experience'); valid = false;
    } else {
      var expNum = parseFloat(expRaw);
      if(isNaN(expNum) || expNum < 0 || expNum > 50){
        showErr('err-experience','Experience must be a number between 0 and 50');
        shakeField('experience'); valid = false;
      }
    }

    /* openingId — set when user clicks "Apply Now" on a card. Should never be empty. */
    var oid = document.getElementById('applyOpeningId');
    if(!oid || !oid.value){
      showErr('err-role','Please choose a role from the open positions list above');
      valid = false;
    }

    /* Message */
    if(!message || message.length < 10){
      showErr('err-message','Please write at least 10 characters');
      shakeField('message'); valid = false;
    }

    return valid;
  }

  /* ── TURNSTILE MANAGED CAPTCHA (visible) ── */
  var TURNSTILE_SITEKEY = '${process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}';
  var turnstileWidgetId = null;
  var turnstileToken = null;
  var turnstileReady = false;
  var turnstileAttempts = 0;

  function initTurnstile(){
    turnstileAttempts++;
    if(turnstileAttempts > 40) { console.warn('Turnstile: gave up after 40 attempts'); return; }
    if(typeof turnstile==='undefined' || !turnstile.render) return setTimeout(initTurnstile, 500);
    var container = document.getElementById('turnstile-container');
    if(!container) return setTimeout(initTurnstile, 500);
    if(!TURNSTILE_SITEKEY || TURNSTILE_SITEKEY === 'undefined') { console.error('Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY is not set'); return; }
    try {
      turnstileWidgetId = turnstile.render(container, {
        sitekey: TURNSTILE_SITEKEY,
        size: 'normal',
        theme: 'light',
        callback: function(token){
          turnstileToken = token;
          hideErr('err-captcha');
        },
        'error-callback': function(){
          turnstileToken = null;
          showErr('err-captcha','Captcha verification failed. Please try again.');
        },
        'expired-callback': function(){
          turnstileToken = null;
        }
      });
      turnstileReady = true;
    } catch(e) { console.error('Turnstile render error:', e); }
  }
  initTurnstile();

  function resetSubmitBtn(){
    var btn=document.getElementById('careerSubmitBtn'),bT=btn.querySelector('.crm-btn-text'),bL=btn.querySelector('.crm-btn-loader');
    btn.disabled=false;bT.style.display='inline';bL.style.display='none';
  }

  function submitForm(){
    var btn=document.getElementById('careerSubmitBtn'),bT=btn.querySelector('.crm-btn-text'),bL=btn.querySelector('.crm-btn-loader');
    btn.disabled=true;bT.style.display='none';bL.style.display='inline-flex';
    var fd=new FormData(form);
    fd.append('cf-turnstile-response', turnstileToken);
    fetch('/api/careers',{method:'POST',body:fd})
    .then(function(r){
      resetSubmitBtn();
      if(r.ok){
        form.reset();
        if(fileNameEl)fileNameEl.textContent='';
        if(dropZone)dropZone.classList.remove('has-file');
        modal.classList.remove('active');document.body.style.overflow='';
        showToast('Application submitted successfully!','success');
      }else{showToast('Something went wrong. Please try again.','error');}
      turnstileToken=null;
      if(turnstileReady&&turnstileWidgetId!==null){try{turnstile.reset(turnstileWidgetId);}catch(e){}}
    })
    .catch(function(){
      resetSubmitBtn();
      showToast('Network error. Please try again.','error');
      turnstileToken=null;
      if(turnstileReady&&turnstileWidgetId!==null){try{turnstile.reset(turnstileWidgetId);}catch(e){}}
    });
  }

  var form=document.getElementById('careerApplyForm');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      console.log('[Careers] Form submit — running validateForm()');
      if(!validateForm()){
        console.log('[Careers] Validation FAILED — form not submitted');
        return;
      }
      console.log('[Careers] Validation PASSED');
      hideErr('err-captcha');

      /* Check captcha is completed */
      if(!turnstileToken){
        showErr('err-captcha','Please complete the captcha verification.');
        return;
      }

      submitForm();
    });
    form.querySelectorAll('input,select,textarea').forEach(function(inp){
      inp.addEventListener('blur',function(){
        var n = this.name;
        if(n==='name'){
          var v = this.value.trim();
          if(v.length >= 2) hideErr('err-name');
        }
        if(n==='email'){
          if(!validateEmail(this.value.trim())) hideErr('err-email');
        }
        if(n==='mobile'){
          var cc = form.countryCode.value;
          if(!validatePhone(this.value.trim(), cc)) hideErr('err-mobile');
        }
        if(n==='countryCode'){
          /* Re-validate phone when country changes */
          var mob = form.mobile.value.trim();
          if(mob && !validatePhone(mob, this.value)) hideErr('err-mobile');
        }
        if(n==='role' && this.value) hideErr('err-role');
        if(n==='message' && this.value.trim().length >= 10) hideErr('err-message');
      });
    });
  }

  function showToast(msg,type){var t=document.createElement('div');t.className='cr-toast cr-toast-'+type;t.innerHTML='<i class="fas fa-'+(type==='success'?'check-circle':'exclamation-circle')+'"></i><span>'+msg+'</span>';document.body.appendChild(t);setTimeout(function(){t.classList.add('show');},10);setTimeout(function(){t.classList.remove('show');setTimeout(function(){t.remove();},400);},3500);}

  /* Fetch live openings from xCRM on first load. */
  fetchOpenings();

  var revSections=document.querySelectorAll('.scroll-reveal');
  if(revSections.length){var sObs=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('revealed');entry.target.querySelectorAll('.sr-card').forEach(function(c){c.classList.add('sr-card-visible');});sObs.unobserve(entry.target);}});},{threshold:0.1,rootMargin:'0px 0px -30px 0px'});revSections.forEach(function(s){sObs.observe(s);});}

  document.querySelectorAll('.cr-faq-item').forEach(function(item){item.querySelector('.cr-faq-q').addEventListener('click',function(){var isA=item.classList.contains('active');document.querySelectorAll('.cr-faq-item').forEach(function(i){i.classList.remove('active');});if(!isA)item.classList.add('active');});});
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(this.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}});});
}
init();
})();
      `}} />
    </>
  );
}