import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Careers | mTouch Labs",
  description: "Join our team and build the future of technology.",
  alternates: {
    canonical: "https://www.mtouchlabs.com/careers",
  },
 
  openGraph: {
    title: "Careers | mTouch Labs",
    description: "Join our team and build the future of technology.",
    url: "https://www.mtouchlabs.com/careers",
    siteName: "mTouch Labs",
    type: "website",
    images: [{ url: "https://www.mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Careers | mTouch Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | mTouch Labs",
    description: "Join our team and build the future of technology.",
    images: ["https://www.mtouchlabs.com/images/web-and-mobile-app-development.png"],
  },
};


const countryCodes = [
  { code: "IN", value: "91", label: "India (+91)" },
  { code: "US", value: "+1", label: "United States (+1)" },
  { code: "GB", value: "44", label: "United Kingdom (+44)" },
  { code: "AU", value: "61", label: "Australia (+61)" },
  { code: "AE", value: "971", label: "UAE (+971)" },
  { code: "SG", value: "65", label: "Singapore (+65)" },
  { code: "DE", value: "49", label: "Germany (+49)" },
  { code: "FR", value: "33", label: "France (+33)" },
  { code: "JP", value: "81", label: "Japan (+81)" },
  { code: "CN", value: "86", label: "China (+86)" },
  { code: "CA", value: "1", label: "Canada (+1)" },
  { code: "SA", value: "966", label: "Saudi Arabia (+966)" },
  { code: "QA", value: "974", label: "Qatar (+974)" },
  { code: "KW", value: "965", label: "Kuwait (+965)" },
];

const jobRoles = [
  "Business Development Manager",
  "Next JS Developer",
  "Project Management",
  "Digital Marketing Manager",
  "Flutter Developer",
  "Full Stack Developer",
  "Manual Tester",
  "React JS Developer",
  "UI / UX Designer",
  "Node JS Developer",
];

export default function Page() {
  return (
    <>
      <div>
        {/* ===== APPLY JOB MODAL ===== */}
        <div className="career-modal-overlay" id="careerFormModal">
          <div className="career-modal-box">
            <button className="career-modal-close" id="closeCareerModal">&times;</button>
            <h2 className="career-modal-title">Apply Job</h2>
            <form id="careerApplyForm">
              <div className="career-modal-field">
                <label>Full Name</label>
                <div className="career-modal-input-wrap">
                  <i className="fas fa-user"></i>
                  <input type="text" name="name" placeholder="Full Name" required />
                </div>
              </div>
              <div className="career-modal-field">
                <label>Your Email</label>
                <div className="career-modal-input-wrap">
                  <i className="fas fa-envelope"></i>
                  <input type="email" name="email" placeholder="Email Id" required />
                </div>
              </div>
              <div className="career-modal-row">
                <div className="career-modal-field career-modal-half">
                  <label>Country Code</label>
                  <select name="countryCode" required>
                    {countryCodes.map((c, i) => (
                      <option key={`${c.code}-${i}`} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div className="career-modal-field career-modal-half">
                  <label>Your Mobile</label>
                  <div className="career-modal-input-wrap">
                    <i className="fas fa-mobile-alt"></i>
                    <input type="tel" name="mobile" placeholder="Contact Number" required inputMode="numeric" pattern="\d*" />
                  </div>
                </div>
              </div>
              <div className="career-modal-field">
                <label>Choose Role</label>
                <select name="role" required>
                  <option value="">Choose Role</option>
                  {jobRoles.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="career-modal-field">
                <label>Upload Your Resume</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" />
              </div>
              <div className="career-modal-field">
                <label>Message</label>
                <textarea name="message" placeholder="Message" rows={3} required></textarea>
              </div>
              <button type="submit" className="career-modal-submit">SUBMIT NOW</button>
            </form>
          </div>
        </div>

        {/* ===== JOB DETAILS MODAL ===== */}
        <div className="career-modal-overlay" id="jobDetailsModal">
          <div className="career-modal-box">
            <button className="career-modal-close" id="closeJobDetailsModal">&times;</button>
            <h2 className="career-modal-title" id="jobDetailsTitle">Job Details</h2>
            <div id="jobDetailsContent" className="op-job-details-content"></div>
          </div>
        </div>

        {/* ===== HERO SECTION ===== */}
        <section className="career-hero">
          <div className="career-hero-overlay"></div>
          <div className="career-hero-content-wrapper">
            <div className="career-hero-text">
              <h1 data-aos="fade-up" data-aos-delay="200">
                <span className="career-h1-white">Join</span>{" "}
                <span className="career-h1-dark">Our Team,</span>
                <br />
                <span className="career-h1-white">Shape the Future Together</span>
              </h1>
              <p className="career-hero-desc" data-aos="fade-up" data-aos-delay="400">
                Explore exciting career opportunities where your skills, ideas, and
                passion make an impact. Together, we drive success and create a
                brighter future for everyone.
              </p>
            </div>
            <div className="career-hero-img-space"></div>
          </div>
        </section>

        {/* ===== FIND JOBS BAR ===== */}
        <div className="career-findjob-bar">
          <div className="career-findjob-bar-inner">
            <div>
              <h2>Discover Your Next Opportunity<br />Across Every Industry</h2>
            </div>
            <a href="#open-positions" className="career-findjob-btn">
              Find More Jobs <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        {/* ===== OPEN POSITIONS SECTION ===== */}
        <section className="op-section" id="open-positions">
          <div className="op-container">
            <h2 className="op-heading">Open <span className="op-heading-highlight">Positions</span></h2>
            <div className="op-filter-bar">
              <div className="op-filter-item">
                <i className="fas fa-map-marker-alt"></i>
                <select id="opFilterLocation">
                  <option value="">Enter Location</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="op-filter-item">
                <i className="fas fa-briefcase"></i>
                <select id="opFilterRole">
                  <option value="">Enter Role</option>
                  <option value="Business Development Manager">Business Development Manager</option>
                  <option value="Next JS Developer">Next JS Developer</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Digital Marketing Manager">Digital Marketing Manager</option>
                  <option value="Flutter Developer">Flutter Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Manual Tester">Manual Tester</option>
                  <option value="React JS Developer">React JS Developer</option>
                  <option value="UI / UX Designer">UI / UX Designer</option>
                  <option value="Node JS Developer">Node JS Developer</option>
                </select>
              </div>
              <button className="op-filter-apply" id="opApplyFilter">Apply Filter</button>
            </div>
            <div className="op-cards-grid" id="opCardsGrid"></div>
            <p className="op-no-results" id="opNoResults" style={{ display: "none" }}>No positions found matching your filters.</p>
            <div className="op-pagination" id="opPagination"></div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <div className="careers-stats-main">
          <h3 className="careers-stats-main-heading">
            Our Achievements Reflect <br /> Our Commitment to Excellence
          </h3>
          <section className="careers-stats">
            <div className="careers-stat">
              <h3 data-target="14" data-suffix="+" className="counter-num">0</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="careers-stat">
              <h3 data-target="70" data-suffix="+" className="counter-num">0</h3>
              <p>Tech Experts</p>
            </div>
            <div className="careers-stat">
              <h3 data-target="4000" data-display="4k" className="counter-num">0</h3>
              <p>Achievements</p>
            </div>
            <div className="careers-stat">
              <h3 data-target="30" data-suffix="+" className="counter-num">0</h3>
              <p>Industries Covered</p>
            </div>
          </section>
        </div>

        {/* ===== HOW IT WORKS ===== */}
        <div className="careers-how">
          <div className="careers-text">
            <h4>How it Works</h4>
            <h2>Start Your Career in Just <br /> a Few Simple Steps</h2>
            <p className="description">Take the next step in your professional journey with a quick and seamless application process.</p>
            <div className="careers-step">
              <span className="icon"><img src="/images/career/icon1.png" className="career-how-it-icon" alt="step 1" /></span>
              <div>
                <h3>Complete Your Profile</h3>
                <p>Upload your resume or create a professional<br /> profile in just a few minutes.</p>
              </div>
            </div>
            <div className="careers-step">
              <span className="icon"><img src="/images/career/icon2.png" className="career-how-it-icon" alt="step 2" /></span>
              <div>
                <h3>Explore Career Opportunities</h3>
                <p>Browse job openings across various industries<br /> and find the perfect role that matches your skills.</p>
              </div>
            </div>
            <div className="careers-step">
              <span className="icon"><img src="/images/career/icon3.png" className="career-how-it-icon" alt="step 3" /></span>
              <div>
                <h3>Apply Instantly</h3>
                <p>Submit your application in one click and<br /> move closer to your dream job effortlessly.</p>
              </div>
            </div>
          </div>
          <div className="careers-image">
            <img src="/images/career/how-it-works.png" alt="current Job Openings At mTouch Labs" />
          </div>
        </div>

        {/* ===== WHY CHOOSE ===== */}
        <section className="careers-why-choose">
          <div className="careers-why-choose-one">
            <div className="careers-why-choose-one-inside">
              <div>
                <img src="/images/career/why1.png" className="careers-why-choose-img" alt="award" />
                <p>Award winning designers</p>
              </div>
              <div>
                <img src="/images/career/why2.png" className="careers-why-choose-img" alt="rating" />
                <p>4.9 rating in google reviews</p>
              </div>
              <div>
                <img src="/images/brand-logo/nasscom.png" alt="Official NASSCOM Member" className="careers-why-choose-img" />
                <p>NASSCOM Member</p>
              </div>
            </div>
            <div className="careers-why-choose-one-inside">
              <div>
                <img src="/images/career/why4.png" className="careers-why-choose-img" alt="company" />
                <p>App Development Company of the Year</p>
              </div>
              <div>
                <img src="/images/career/why5.png" className="careers-why-choose-img" alt="effort" />
                <p>100+ hours of effort</p>
              </div>
            </div>
          </div>
          <div className="careers-why-choose-two">
            <h3>Why Choose mTouch Labs?</h3>
            <p><b>Industry Leader:</b> acknowledged as a <a href="/" target="_blank">web and mobile app development</a> business with ISO certification.</p>
            <p><b>Career Growth:</b> We offer career progression opportunities, mentorship, and skill development programs.</p>
            <p><b>Innovative Culture:</b> Develop technologies such as blockchain, AI, Flutter, and React Native.</p>
            <p><b>Global Projects:</b> Work together on software solutions, UI/UX design, and app development with clients from around the world.</p>
            <p><b>Employee-focused setting:</b> We place a high priority on employee wellness, remote work choices, and work-life balance.</p>
          </div>
        </section>

        {/* ===== CLIENTS ===== */}
        <div className="Home-logo-container">
          <div id="logoCarousel" className="carousel slide" data-ride="carousel" style={{ padding: "30px", borderRadius: "10px" }}>
            <ol className="carousel-indicators carousel-indicators_two">
              <li data-target="#logoCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#logoCarousel" data-slide-to="1"></li>
            </ol>
            <h3>Some of Our Clients</h3>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center align-items-start flex-wrap" style={{ width: "100%", margin: "auto", marginBottom: "30px" }}>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/adjd.png" alt="adjd" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/govt.png" alt="golkonda" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/aduri.png" alt="aduri" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/voosh.png" alt="voosh" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/l2r.png" alt="learn2read" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/zefsci.png" alt="zefsci" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/medbuz.png" alt="medbuz" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/veteach.png" alt="veteach" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/tanyya.png" alt="tannya" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/heyman.png" alt="heyman" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/badham.png" alt="badham" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/v.png" alt="vivent" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/tej.png" alt="tej" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/adify.png" alt="adify" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/clikget.png" alt="roboride" /></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-center align-items-start flex-wrap" style={{ width: "100%", margin: "auto", marginBottom: "30px" }}>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/countryclub.png" alt="countryclub" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/kalp.png" alt="kalp" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/roboride.png" alt="roboride" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/ricehub.png" alt="ricehub" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/jaimaxcoin.png" alt="jaimaxcoin" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/Citzon.png" alt="Citzon" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/fair.png" alt="fair" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/inst.png" alt="inst" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/dush.png" alt="dush" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/revsoul.png" alt="revsoul" /></div>
                  <div className="Home-logo-grid-item"><img src="/images/home/tech/smartpg.png" alt="smartpg" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== YOUR BEST CAREER JOURNEY ===== */}
    <section className="career-journey-section">
  <div className="career-journey-content">
    <h2>Your best career<br />journey starts here</h2>
    <p>Subscribe to our newsletters to discover more opportunities</p>
    <div className="career-journey-subscribe">
      <i className="fas fa-envelope"></i>
      <input type="email" placeholder="Enter Your Mail ID here" />
      <button type="button">Subscribe</button>
    </div>
  </div>
</section>

  {/* ===== EMPLOYEE TESTIMONIAL ===== */}
        <section className="career-testimonial-section">
          <div className="career-testimonial-wrapper">
            <h2>Discover inspiring success stories<br />from our happy employees!</h2>
            <div className="career-testimonial-card">
              <div className="career-testimonial-avatar">
                <div className="career-testimonial-avatar-frame">
                  <img src="/images/employee.svg" alt="Suresh" className="career-avatar-photo" />
                </div>
              </div>
              <div className="career-testimonial-info">
                <h3>Suresh</h3>
                <p className="career-testimonial-role">UI/UX Designer</p>
                <p className="career-testimonial-quote">
                  Working at mTouch has been an incredible experience! The collaborative environment,
                  innovative projects, and growth opportunities have truly elevated my career as a
                  UI/UX designer. I feel valued, inspired, and motivated every day!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ Section ===== */}
        <div className="resources-faq-wrapper">
          <div className="_faq_container">
            <div className="_faq_header">
              <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
              <p className="_faq_subtitle">Everything you need to know about careers at mTouch Labs</p>
            </div>
            <div className="_faq_list">
              <div className="_faq_item active glow">
                <button className="_faq_question">
                  <span>What job opportunities are available at mTouch Labs in Hyderabad?</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer">
                  <p className="_faq_answer_text">mTouch Labs offers IT job opportunities in Hyderabad for roles such as Flutter developers, React JS developers, full-stack developers, UI/UX designers, digital marketing managers, and project managers.</p>
                </div>
              </div>
              <div className="_faq_item">
                <button className="_faq_question">
                  <span>How can I apply for jobs at mTouch Labs?</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer">
                  <p className="_faq_answer_text">Candidates can apply by visiting the careers page, selecting a suitable position, and submitting their resume through the online application form.</p>
                </div>
              </div>
              <div className="_faq_item">
                <button className="_faq_question">
                  <span>Does mTouch Labs offer career growth for developers and freshers?</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer">
                  <p className="_faq_answer_text">Yes, mTouch Labs provides career growth through mentorship, skill development programs, and exposure to global projects.</p>
                </div>
              </div>
              <div className="_faq_item">
                <button className="_faq_question">
                  <span>What skills are required to work at mTouch Labs?</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer">
                  <p className="_faq_answer_text">Strong technical knowledge, problem-solving skills, teamwork, and passion for innovation. Experience in web/mobile development, UI/UX design, testing, and digital marketing is valued.</p>
                </div>
              </div>
              <div className="_faq_item">
                <button className="_faq_question">
                  <span>Why choose mTouch Labs for a career in app development and IT?</span>
                  <span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span>
                </button>
                <div className="_faq_answer">
                  <p className="_faq_answer_text">mTouch Labs offers innovative work culture, global client exposure, and opportunities with AI, Flutter, blockchain, and React Native in a collaborative environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== ALL SCRIPTS ===== */}
      <Script id="career-scripts" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
        (function() {
          function init() {
            var modal = document.getElementById('careerFormModal');
            var closeBtn = document.getElementById('closeCareerModal');
            var detailsModal = document.getElementById('jobDetailsModal');
            var closeDetailsBtn = document.getElementById('closeJobDetailsModal');
            if (!modal || !closeBtn) return setTimeout(init, 300);

            var jobs = [
              { role: 'Business Development Manager', positions: 1, exp: '5-10 Years', location: 'Hyderabad', desc: 'Lead business growth initiatives, manage client relationships, and drive revenue through strategic partnerships.' },
              { role: 'Next JS Developer', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Build high-performance web applications using Next.js, React, and modern frontend technologies.' },
              { role: 'Project Management', positions: 1, exp: '4-6 Years', location: 'Hyderabad', desc: 'Oversee project delivery, coordinate cross-functional teams, and ensure timely completion of milestones.' },
              { role: 'Digital Marketing Manager', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Plan and execute digital marketing campaigns across SEO, SEM, social media, and content marketing channels.' },
              { role: 'Flutter Developer', positions: 2, exp: '1+ Years', location: 'Hyderabad', desc: 'Develop cross-platform mobile applications using Flutter and Dart with clean architecture patterns.' },
              { role: 'Full Stack Developer', positions: 2, exp: '1-3 Years', location: 'Hyderabad', desc: 'Build end-to-end web applications using React/Next.js frontend and Node.js/Java backend technologies.' },
              { role: 'Manual Tester', positions: 1, exp: '0-1 Years', location: 'Hyderabad', desc: 'Execute test cases, identify bugs, and ensure software quality through thorough manual testing processes.' },
              { role: 'React JS Developer', positions: 2, exp: '1-3 Years', location: 'Hyderabad', desc: 'Create interactive user interfaces using React.js with state management and component-based architecture.' },
              { role: 'UI / UX Designer', positions: 1, exp: '1-3 Years', location: 'Hyderabad', desc: 'Design intuitive user experiences and pixel-perfect interfaces using Figma and modern design principles.' },
              { role: 'Node JS Developer', positions: 1, exp: '4-5 Years', location: 'Hyderabad', desc: 'Build scalable backend services and REST APIs using Node.js, Express, and database technologies.' }
            ];

            var PAGE_SIZE = 6;
            var currentPage = 0;
            var filteredJobs = jobs.slice();

            function renderCards() {
              var grid = document.getElementById('opCardsGrid');
              var noResults = document.getElementById('opNoResults');
              var pagination = document.getElementById('opPagination');
              if (!grid) return;
              var start = currentPage * PAGE_SIZE;
              var pageJobs = filteredJobs.slice(start, start + PAGE_SIZE);
              var totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);
              if (filteredJobs.length === 0) {
                grid.innerHTML = '';
                noResults.style.display = 'block';
                pagination.innerHTML = '';
                return;
              }
              noResults.style.display = 'none';
              var html = '';
              pageJobs.forEach(function(job, idx) {
                html += '<div class="op-card">';
                html += '<div class="op-card-logo"><img src="/images/favicon.png" alt="mTouch Labs" /></div>';
                html += '<h3 class="op-card-title">' + job.role + '</h3>';
                html += '<div class="op-card-meta">';
                html += '<span><i class="fas fa-users"></i> 0' + job.positions + ' Open Position' + (job.positions > 1 ? 's' : '') + '</span>';
                html += '<span><i class="fas fa-calendar-alt"></i> ' + job.exp + ' Of Experience</span>';
                html += '<span><i class="fas fa-map-marker-alt"></i> ' + job.location + '</span>';
                html += '</div>';
                html += '<div class="op-card-actions">';
                html += '<button class="op-btn-details" data-idx="' + (start + idx) + '">Job Details</button>';
                html += '<button class="op-btn-apply" data-role="' + job.role + '">Apply Job</button>';
                html += '</div>';
                html += '</div>';
              });
              grid.innerHTML = html;
              var dotsHtml = '';
              for (var i = 0; i < totalPages; i++) {
                dotsHtml += '<span class="op-dot' + (i === currentPage ? ' active' : '') + '" data-page="' + i + '"></span>';
              }
              pagination.innerHTML = dotsHtml;
            }

            function applyFilters() {
              var locVal = document.getElementById('opFilterLocation').value;
              var roleVal = document.getElementById('opFilterRole').value;
              filteredJobs = jobs.filter(function(j) {
                return (!locVal || j.location === locVal) && (!roleVal || j.role === roleVal);
              });
              currentPage = 0;
              renderCards();
            }

            document.getElementById('opApplyFilter').addEventListener('click', applyFilters);

            document.addEventListener('click', function(e) {
              if (e.target.classList.contains('op-dot')) {
                currentPage = parseInt(e.target.getAttribute('data-page'));
                renderCards();
              }
            });

            document.addEventListener('click', function(e) {
              var btn = e.target.closest('.op-btn-details');
              if (!btn) return;
              var idx = parseInt(btn.getAttribute('data-idx'));
              var job = filteredJobs[idx];
              if (!job) return;
              document.getElementById('jobDetailsTitle').textContent = job.role;
              document.getElementById('jobDetailsContent').innerHTML =
                '<p><strong>Location:</strong> ' + job.location + '</p>' +
                '<p><strong>Experience:</strong> ' + job.exp + '</p>' +
                '<p><strong>Open Positions:</strong> 0' + job.positions + '</p>' +
                '<p><strong>Description:</strong> ' + job.desc + '</p>';
              detailsModal.classList.add('active');
              document.body.style.overflow = 'hidden';
            });

            document.addEventListener('click', function(e) {
              var btn = e.target.closest('.op-btn-apply, .careers-apply-btn, .careers-apply-btn-section');
              if (!btn) return;
              var role = btn.getAttribute('data-role') || '';
              var roleSelect = modal.querySelector('select[name="role"]');
              if (roleSelect && role) roleSelect.value = role;
              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
            });

            closeBtn.addEventListener('click', function() { modal.classList.remove('active'); document.body.style.overflow = ''; });
            modal.addEventListener('click', function(e) { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = ''; } });
            closeDetailsBtn.addEventListener('click', function() { detailsModal.classList.remove('active'); document.body.style.overflow = ''; });
            detailsModal.addEventListener('click', function(e) { if (e.target === detailsModal) { detailsModal.classList.remove('active'); document.body.style.overflow = ''; } });

            var ph = modal.querySelector('input[name="mobile"]');
            if (ph) ph.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });

            var form = document.getElementById('careerApplyForm');
            if (form) {
              form.addEventListener('submit', function(e) {
                e.preventDefault();
                var formData = new FormData(form);
                fetch('/api/careers', {
                  method: 'POST',
                  body: formData
                }).then(function(r) {
                  if (r.ok) { alert('Application submitted successfully!'); modal.classList.remove('active'); document.body.style.overflow = ''; form.reset(); }
                }).catch(function(err) { console.error(err); });
              });
            }

            renderCards();

            // Counter animation - numbers count up when scrolled into view
            function animateCounters() {
              var counters = document.querySelectorAll('.counter-num');
              counters.forEach(function(counter) {
                var target = parseInt(counter.getAttribute('data-target'));
                var suffix = counter.getAttribute('data-suffix') || '';
                var display = counter.getAttribute('data-display') || '';
                var duration = 2000;
                var startTime = null;
                function step(timestamp) {
                  if (!startTime) startTime = timestamp;
                  var progress = Math.min((timestamp - startTime) / duration, 1);
                  var eased = 1 - Math.pow(1 - progress, 3);
                  var current = Math.floor(eased * target);
                  if (display && progress >= 1) {
                    counter.textContent = display;
                  } else if (display) {
                    counter.textContent = current;
                  } else {
                    counter.textContent = current + suffix;
                  }
                  if (progress < 1) {
                    requestAnimationFrame(step);
                  } else if (display) {
                    counter.textContent = display;
                  } else {
                    counter.textContent = target + suffix;
                  }
                }
                requestAnimationFrame(step);
              });
            }
            var statsSection = document.querySelector('.careers-stats-main');
            if (statsSection) {
              var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                  if (entry.isIntersecting) {
                    animateCounters();
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.3 });
              observer.observe(statsSection);
            }

            // FAQ toggle
            var faqItems = document.querySelectorAll('._faq_item');
            faqItems.forEach(function(item) {
              item.querySelector('._faq_question').addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                faqItems.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
                if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
              });
            });
          }
          init();
        })();
      `}} />
    </>
  );
}