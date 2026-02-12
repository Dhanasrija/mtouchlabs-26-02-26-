import MegaMenuExtraInfo from "./MegaMenuExtraInfo";

function HomeCTA() {
  return (
    <div className="home-mega-cta">
      <div className="home-mega-cta-inner">
        <h4>ABOUT mTOUCH LABS</h4>
        <ul className="home-mega-cta-list">
          <li><span className="cta-check-icon"></span> ISO-Certified Enterprise IT Company</li>
          <li><span className="cta-check-icon"></span> 14+ Years of Industry Experience</li>
          <li><span className="cta-check-icon"></span> Trusted by Telangana &amp; Abu Dhabi Govt</li>
          <li><span className="cta-check-icon"></span> 1500+ Apps Delivered Worldwide</li>
          <li><span className="cta-check-icon"></span> Offices in Hyderabad, Bangalore &amp; USA</li>
        </ul>
        <a className="mega-cta-btn js-open-modal">Get in Touch</a>
      </div>
    </div>
  );
}

function ServicesCTA() {
  return (
    <div className="home-mega-cta">
      <div className="home-mega-cta-inner">
        <h4>WHY mTOUCH LABS?</h4>
        <ul className="home-mega-cta-list">
          <li><span className="cta-check-icon"></span> 200+ Projects Delivered Globally</li>
          <li><span className="cta-check-icon"></span> Offices in Hyderabad, Bangalore &amp; USA</li>
          <li><span className="cta-check-icon"></span> Agile &amp; DevOps-First Approach</li>
          <li><span className="cta-check-icon"></span> Dedicated Account Managers</li>
          <li><span className="cta-check-icon"></span> Transparent &amp; On-Time Delivery</li>
        </ul>
        <a className="mega-cta-btn js-open-modal">Talk to Our Experts</a>
      </div>
    </div>
  );
}

function ProductsCTA() {
  return (
    <div className="home-mega-cta">
      <div className="home-mega-cta-inner">
        <h4>OUR PRODUCT EDGE</h4>
        <ul className="home-mega-cta-list">
          <li><span className="cta-check-icon"></span> Scalable &amp; High-Performance Apps</li>
          <li><span className="cta-check-icon"></span> White-Label Ready Solutions</li>
          <li><span className="cta-check-icon"></span> Quick Deployment in 2-4 Weeks</li>
          <li><span className="cta-check-icon"></span> Full Source Code Ownership</li>
          <li><span className="cta-check-icon"></span> Post-Launch Support &amp; Maintenance</li>
        </ul>
        <a className="mega-cta-btn js-open-modal">Request a Demo</a>
      </div>
    </div>
  );
}

function ResourcesCTA() {
  return (
    <div className="home-mega-cta">
      <div className="home-mega-cta-inner">
        <h4>HIRING MADE EASY</h4>
        <ul className="home-mega-cta-list">
          <li><span className="cta-check-icon"></span> Pre-Vetted Senior Developers</li>
          <li><span className="cta-check-icon"></span> Flexible Engagement Models</li>
          <li><span className="cta-check-icon"></span> Timezone-Aligned Teams</li>
          <li><span className="cta-check-icon"></span> Start Within 48 Hours</li>
          <li><span className="cta-check-icon"></span> Dedicated Project Managers</li>
        </ul>
        <a className="mega-cta-btn js-open-modal">Hire Developers</a>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="container-fluid m-p-l-r-0">
      <div className="menu-header">
        <div className="menu-logo">
          <div className="dskt-logo" style={{ lineHeight: 0 }}>
            <a className="nav-brand" href="/" aria-label="mTouch Labs">
              <img src="/images/logo-white.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="ree-nav" role="navigation">
          <ul className="nav-list">
            {/* HOME */}
            <li className="megamenu">
              <a href="/" className="menu-links">Home<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a home-mega-layout">
                      <div className="home-mega-sidebar">
                        <h4 className="home-mega-title">Home</h4>
                        <div className="home-mega-item js-home-mega-item active" data-target="home-about">
                          <div className="home-mega-item-icon"><img src="/images/new_home/chat.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">About us</span>
                            <span className="home-mega-item-desc">mTouch Labs delivers innovative mobile and web app solutions for modern businesses.</span>
                          </div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="home-blog">
                          <div className="home-mega-item-icon"><img src="/images/new_home/blog.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">Blog</span>
                            <span className="home-mega-item-desc">Discover expert ideas and innovations on our Blogs</span>
                          </div>
                        </div>
                      </div>
                      <div className="home-mega-content">
                        <div className="home-mega-panel active" id="home-about">
                          <h4 className="home-mega-panel-title">About Us</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/company-overview"><span className="mega-link-title">Company Overview</span><span className="mega-link-desc">Our story, values, and global presence</span></a></li>
                                <li><a href="/our-vision"><span className="mega-link-title">Vision &amp; Mission</span><span className="mega-link-desc">Driving innovation with purpose</span></a></li>
                                <li><a href="/leadership-team"><span className="mega-link-title">Leadership Team</span><span className="mega-link-desc">Meet the minds behind mTouch Labs</span></a></li>
                                <li><a href="/our-journey"><span className="mega-link-title">Our Journey</span><span className="mega-link-desc">14+ years of building digital excellence</span></a></li>
                              </ul>
                            </div>
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/awards-recognition"><span className="mega-link-title">Awards &amp; Recognition</span><span className="mega-link-desc">Industry accolades and achievements</span></a></li>
                                <li><a href="/nasscom-membership"><span className="mega-link-title">NASSCOM Membership</span><span className="mega-link-desc">Proud member of India&apos;s top IT body</span></a></li>
                                <li><a href="/about"><span className="mega-link-title">Life at mTouch Labs</span><span className="mega-link-desc">Culture, people, and work environment</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="home-blog">
                          <h4 className="home-mega-panel-title">Blogs</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/ai-role-in-business-automation"><span className="mega-link-title">AI &amp; Automation in Business</span><span className="mega-link-desc">How AI is reshaping enterprise workflows</span></a></li>
                                <li><a href="/top-10-free-ai-tools-for-software-developers"><span className="mega-link-title">Top 10 Free AI Tools</span><span className="mega-link-desc">Best AI tools for software developers in 2025</span></a></li>
                                <li><a href="/mobile-app-development-bangalore-tech-startups"><span className="mega-link-title">Mobile App Dev in Bangalore</span><span className="mega-link-desc">Scalable solutions for tech startups</span></a></li>
                              </ul>
                            </div>
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/top-ecommerce-niches-us"><span className="mega-link-title">Top eCommerce Niches (2025)</span><span className="mega-link-desc">Profitable niches in the US market</span></a></li>
                                <li><a href="/hyderabad-startups-app-development-mtouch-labs"><span className="mega-link-title">Why Startups Choose mTouch</span><span className="mega-link-desc">Hyderabad&apos;s trusted app development partner</span></a></li>
                              </ul>
                              <a href="/blog" className="home-mega-readmore">Read more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <HomeCTA />
                    </div>
                  </div>
                  <MegaMenuExtraInfo />
                </div>
              </div>
            </li>

            {/* SERVICES */}
            <li className="megamenu">
              <a href="/services" className="menu-links">Services<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a home-mega-layout">
                      <div className="home-mega-sidebar">
                        <h4 className="home-mega-title">Services</h4>
                        <div className="home-mega-item js-home-mega-item active" data-target="svc-software">
                          <div className="home-mega-item-icon"><img src="/images/nav/custom_software-dev.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">Custom Software Development</span>
                            <span className="home-mega-item-desc">Delivering seamless digital experiences with expert software development.</span>
                          </div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-cloud">
                          <div className="home-mega-item-icon"><img src="/images/nav/cloud_devops.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Cloud &amp; DevOps</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-ai">
                          <div className="home-mega-item-icon"><img src="/images/nav/ai_data_intelligence.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">AI &amp; Data Intelligence</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-salesforce">
                          <div className="home-mega-item-icon"><img src="/images/nav/sales_force.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Salesforce</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-design">
                          <div className="home-mega-item-icon"><img src="/images/nav/design_experience.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Design &amp; Experience</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-marketing">
                          <div className="home-mega-item-icon"><img src="/images/nav/digital-marketing-services.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Digital Marketing Solutions</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="svc-business">
                          <div className="home-mega-item-icon"><img src="/images/nav/business_solution.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Business Solutions</span></div>
                        </div>
                      </div>
                      <div className="home-mega-content">
                        <div className="home-mega-panel active" id="svc-software">
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss">
                              <label className="menu-headings">MOBILE APP DEVELOPMENT</label>
                              <ul className="menu-li-link">
                                <li><a href="/custom-software-development-company"><span className="mega-link-title">Custom Software Development</span><span className="mega-link-desc">Tailored solutions for your unique business needs</span></a></li>
                                <li><a href="/ios-app-development-company"><span className="mega-link-title">iOS App Development</span><span className="mega-link-desc">Native iPhone apps with seamless UX</span></a></li>
                                <li><a href="/ipad-app-development-company"><span className="mega-link-title">iPad App Development</span><span className="mega-link-desc">Optimized tablet experiences for enterprise</span></a></li>
                                <li><a href="/android-app-development-company"><span className="mega-link-title">Android App Development</span><span className="mega-link-desc">Robust apps for the Android ecosystem</span></a></li>
                                <li><a href="/flutter-app-development-company"><span className="mega-link-title">Flutter App Development</span><span className="mega-link-desc">Cross-platform apps from a single codebase</span></a></li>
                                <li><a href="/react-native-app-development-company"><span className="mega-link-title">React Native App Development</span><span className="mega-link-desc">High-performance hybrid mobile apps</span></a></li>
                              </ul>
                            </div>
                            <div className="inner-blockss">
                              <label className="menu-headings">WEB DEVELOPMENT</label>
                              <ul className="menu-li-link">
                                <li><a href="/web-development-company"><span className="mega-link-title">Custom Web Applications</span><span className="mega-link-desc">Scalable web apps built for your business</span></a></li>
                                <li><a href="/custom-cms-development-company-in-india"><span className="mega-link-title">CMS &amp; Portal Development</span><span className="mega-link-desc">Content management systems for easy updates</span></a></li>
                                <li><a href="/360-degree-photography-services-in-india"><span className="mega-link-title">360° Photography Services</span><span className="mega-link-desc">Immersive virtual tours and product views</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="svc-cloud">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">CLOUD SERVICES</label><ul className="menu-li-link">
                            <li><a href="/amazon-web-services-company"><span className="mega-link-title">Amazon Web Services</span><span className="mega-link-desc">Cloud infrastructure, deployment &amp; scaling on AWS</span></a></li>
                            <li><a href="/progressive-web-app-development-company-in-india"><span className="mega-link-title">Progressive Web Apps</span><span className="mega-link-desc">Fast, reliable apps that work offline</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="svc-ai">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">AI &amp; DATA</label><ul className="menu-li-link">
                            <li><a href="/generative-ai-development-company"><span className="mega-link-title">Generative AI</span><span className="mega-link-desc">AI-powered content, chatbots &amp; automation</span></a></li>
                            <li><a href="/empowering-businesses-with-data-science"><span className="mega-link-title">Data Science</span><span className="mega-link-desc">Turn raw data into actionable business insights</span></a></li>
                            <li><a href="/cybersecurity-development-company"><span className="mega-link-title">Cyber Security</span><span className="mega-link-desc">Protect your digital assets from threats</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="svc-salesforce">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">SALESFORCE SOLUTIONS</label><ul className="menu-li-link">
                            <li><a href="/salesforce-consulting-services"><span className="mega-link-title">Salesforce Consulting</span><span className="mega-link-desc">CRM implementation, customization &amp; integration</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="svc-design">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">DESIGN SERVICES</label><ul className="menu-li-link">
                            <li><a href="/ui-ux-design-company"><span className="mega-link-title">UI/UX Design Services</span><span className="mega-link-desc">User-centered interfaces that convert</span></a></li>
                            <li><a href="/mobile-app-design-company"><span className="mega-link-title">Mobile App Design</span><span className="mega-link-desc">Beautiful, intuitive mobile experiences</span></a></li>
                            <li><a href="/web-design-company"><span className="mega-link-title">Web Design</span><span className="mega-link-desc">Responsive websites that engage visitors</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="svc-marketing">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">MARKETING SERVICES</label><ul className="menu-li-link">
                            <li><a href="/digital-marketing-company"><span className="mega-link-title">Digital Marketing</span><span className="mega-link-desc">Full-funnel strategies to grow your brand</span></a></li>
                            <li><a href="/seo-services-company"><span className="mega-link-title">SEO Services</span><span className="mega-link-desc">Rank higher and drive organic traffic</span></a></li>
                            <li><a href="/ppc-management-services-company"><span className="mega-link-title">PPC Management</span><span className="mega-link-desc">Targeted paid campaigns with high ROI</span></a></li>
                            <li><a href="/app-store-optimization-services-company"><span className="mega-link-title">ASO Services</span><span className="mega-link-desc">Boost app visibility and downloads</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="svc-business">
                          <div className="menu-inner-block-a"><div className="inner-blockss"><label className="menu-headings">BUSINESS SOLUTIONS</label><ul className="menu-li-link">
                            <li><a href="/mobile-app-development-company"><span className="mega-link-title">Mobile App Development</span><span className="mega-link-desc">End-to-end mobile solutions for enterprises</span></a></li>
                            <li><a href="/web-development-company"><span className="mega-link-title">Web Application Development</span><span className="mega-link-desc">Powerful web platforms for business growth</span></a></li>
                          </ul></div></div>
                        </div>
                      </div>
                      <ServicesCTA />
                    </div>
                  </div>
                  <MegaMenuExtraInfo />
                </div>
              </div>
            </li>

            {/* PRODUCTS */}
            <li className="megamenu">
              <a href="/on-demand-products-development-company-hyderabad" className="menu-links">Products<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a home-mega-layout">
                      <div className="home-mega-sidebar">
                        <h4 className="home-mega-title">Products</h4>
                        <div className="home-mega-item js-home-mega-item active" data-target="prod-ondemand">
                          <div className="home-mega-item-icon"><img src="/images/nav/ondemand.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">On-Demand &amp; Delivery Apps</span>
                            <span className="home-mega-item-desc">On Demand and Delivery apps-Transforming everyday services into on-demand success stories.</span>
                          </div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="prod-booking">
                          <div className="home-mega-item-icon"><img src="/images/nav/booking.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Booking and service Platforms</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="prod-ecommerce">
                          <div className="home-mega-item-icon"><img src="/images/nav/ecommerce.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">E-Commerce &amp; Marketplace Solutions</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="prod-education">
                          <div className="home-mega-item-icon"><img src="/images/nav/education.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Education &amp; Entertainment</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="prod-healthcare">
                          <div className="home-mega-item-icon"><img src="/images/nav/healthcare.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Healthcare &amp; wellness</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="prod-social">
                          <div className="home-mega-item-icon"><img src="/images/nav/socialmedia.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Social &amp; Media Apps</span></div>
                        </div>
                      </div>
                      <div className="home-mega-content">
                        <div className="home-mega-panel active" id="prod-ondemand">
                          <h4 className="home-mega-panel-title">On-Demand &amp; Delivery Apps</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/food-delivery-app-development-service"><span className="mega-link-title">Food Delivery App</span><span className="mega-link-desc">Multi-restaurant ordering with real-time tracking</span></a></li>
                              <li><a href="/grocery-delivery-app-development-company"><span className="mega-link-title">Grocery Delivery App</span><span className="mega-link-desc">Quick commerce for daily essentials</span></a></li>
                              <li><a href="/milk-delivery-app-development-company"><span className="mega-link-title">Milk Delivery App</span><span className="mega-link-desc">Subscription-based daily delivery management</span></a></li>
                              <li><a href="/car-wash-app-development-company"><span className="mega-link-title">Car Wash App</span><span className="mega-link-desc">On-demand vehicle care at your doorstep</span></a></li>
                            </ul></div>
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/on-demand-chef-app-development-company"><span className="mega-link-title">Chef Management App</span><span className="mega-link-desc">Book professional chefs for home dining</span></a></li>
                            </ul></div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="prod-booking">
                          <h4 className="home-mega-panel-title">Booking &amp; Service Platforms</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/taxi-booking-app-development-company"><span className="mega-link-title">Taxi Booking App</span><span className="mega-link-desc">Ride-hailing with smart route optimization</span></a></li>
                            <li><a href="/hotel-booking-app-development-company"><span className="mega-link-title">Hotel Booking App</span><span className="mega-link-desc">Seamless hotel search, compare &amp; reserve</span></a></li>
                            <li><a href="/tickets-booking-app-development-company"><span className="mega-link-title">Ticket Booking App</span><span className="mega-link-desc">Events, travel &amp; entertainment ticketing</span></a></li>
                            <li><a href="/real-estate-app-development-company"><span className="mega-link-title">Real Estate App</span><span className="mega-link-desc">Property listing, virtual tours &amp; lead management</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="prod-ecommerce">
                          <h4 className="home-mega-panel-title">E-Commerce &amp; Marketplace</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/ecommerce-app-development-company"><span className="mega-link-title">eCommerce App</span><span className="mega-link-desc">Scalable online stores with seamless checkout</span></a></li>
                            <li><a href="/online-shopping-app-development-company"><span className="mega-link-title">Online Shopping App</span><span className="mega-link-desc">Feature-rich shopping experience for customers</span></a></li>
                            <li><a href="/multi-vendor-marketplace-app-builder"><span className="mega-link-title">Multi-Vendor Marketplace</span><span className="mega-link-desc">Connect multiple sellers on one platform</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="prod-education">
                          <h4 className="home-mega-panel-title">Education &amp; Entertainment</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/e-learning-app-development-company"><span className="mega-link-title">E-Learning App</span><span className="mega-link-desc">Interactive courses, quizzes &amp; certifications</span></a></li>
                            <li><a href="/gaming-apps-development-company"><span className="mega-link-title">Gaming App</span><span className="mega-link-desc">Engaging mobile games with monetization</span></a></li>
                            <li><a href="/ott-app-development-company"><span className="mega-link-title">OTT App</span><span className="mega-link-desc">Video streaming like Netflix &amp; Hotstar</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="prod-healthcare">
                          <h4 className="home-mega-panel-title">Healthcare &amp; Wellness</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/diagnostic-app-development-company"><span className="mega-link-title">Diagnostic App</span><span className="mega-link-desc">Lab booking, reports &amp; health tracking</span></a></li>
                            <li><a href="/sports-and-fitness-app-development-company"><span className="mega-link-title">Sports &amp; Fitness App</span><span className="mega-link-desc">Workout plans, tracking &amp; community features</span></a></li>
                          </ul></div></div>
                        </div>
                        <div className="home-mega-panel" id="prod-social">
                          <h4 className="home-mega-panel-title">Social &amp; Media Apps</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/social-media-app-development-company"><span className="mega-link-title">Social Media App</span><span className="mega-link-desc">Community platforms with feeds, chat &amp; sharing</span></a></li>
                          </ul></div></div>
                        </div>
                      </div>
                      <ProductsCTA />
                    </div>
                  </div>
                  <MegaMenuExtraInfo />
                </div>
              </div>
            </li>

            {/* RESOURCES */}
            <li className="megamenu">
              <a href="/hire-developers-in-india" className="menu-links">Resources<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a home-mega-layout">
                      <div className="home-mega-sidebar">
                        <h4 className="home-mega-title">Resources</h4>
                        <div className="home-mega-item js-home-mega-item active" data-target="res-mobile">
                          <div className="home-mega-item-icon"><img src="/images/nav/resources.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">Mobile App Developers</span>
                            <span className="home-mega-item-desc">Mobile App Development - From concept to code, we create apps that connect and convert.</span>
                          </div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="res-web">
                          <div className="home-mega-item-icon"><img src="/images/nav/web.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Web App Developers</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="res-enterprise">
                          <div className="home-mega-item-icon"><img src="/images/nav/entr.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Enterprise &amp; Cloud Solutions</span></div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="res-design">
                          <div className="home-mega-item-icon"><img src="/images/nav/design_experience.png" alt="" width="28" height="28" /></div>
                          <div className="home-mega-item-text"><span className="home-mega-item-label">Design &amp; Creative Experts</span></div>
                        </div>
                      </div>
                      <div className="home-mega-content">
                        <div className="home-mega-panel active" id="res-mobile">
                          <h4 className="home-mega-panel-title">Hire Mobile App Developers</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-mobile-app-developers-in-india"><span className="mega-link-title">Mobile App Developers</span><span className="mega-link-desc">Full-cycle iOS &amp; Android app specialists</span></a></li>
                              <li><a href="/hire-android-app-developers-in-india"><span className="mega-link-title">Android App Developers</span><span className="mega-link-desc">Kotlin &amp; Java experts for the Play Store</span></a></li>
                              <li><a href="/hire-ios-app-developers-in-india"><span className="mega-link-title">iOS App Developers</span><span className="mega-link-desc">Swift developers for iPhone &amp; Apple ecosystem</span></a></li>
                              <li><a href="/hire-ipad-developers-in-india"><span className="mega-link-title">iPad App Developers</span><span className="mega-link-desc">Tablet-optimized apps for enterprise &amp; education</span></a></li>
                              <li><a href="/hire-custom-software-developers-in-india"><span className="mega-link-title">Custom Software Developers</span><span className="mega-link-desc">Bespoke solutions tailored to your workflow</span></a></li>
                            </ul></div>
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-native-app-developers-in-india"><span className="mega-link-title">Native App Developers</span><span className="mega-link-desc">Platform-specific apps for peak performance</span></a></li>
                              <li><a href="/hire-hybrid-app-developers-in-india"><span className="mega-link-title">Hybrid App Developers</span><span className="mega-link-desc">Single codebase apps across iOS &amp; Android</span></a></li>
                              <li><a href="/hire-flutter-app-developers-in-india"><span className="mega-link-title">Flutter App Developers</span><span className="mega-link-desc">Google&apos;s UI toolkit for beautiful cross-platform apps</span></a></li>
                              <li><a href="/hire-react-native-app-developers-in-india"><span className="mega-link-title">React Native Developers</span><span className="mega-link-desc">JavaScript-powered mobile apps with native feel</span></a></li>
                            </ul></div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="res-web">
                          <h4 className="home-mega-panel-title">Hire Web Developers</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-web-developers-in-india"><span className="mega-link-title">Web Developers</span><span className="mega-link-desc">Frontend &amp; backend engineers for modern web</span></a></li>
                              <li><a href="/hire-wordpress-developers-in-india"><span className="mega-link-title">WordPress Developers</span><span className="mega-link-desc">Custom themes, plugins &amp; CMS solutions</span></a></li>
                              <li><a href="/hire-php-developers-in-india"><span className="mega-link-title">PHP Developers</span><span className="mega-link-desc">Server-side scripting &amp; web app backends</span></a></li>
                              <li><a href="/hire-custom-cms-developers-in-india"><span className="mega-link-title">Custom CMS Developers</span><span className="mega-link-desc">Tailored content management platforms</span></a></li>
                              <li><a href="/hire-angular-developers-in-india"><span className="mega-link-title">Angular Developers</span><span className="mega-link-desc">Enterprise-grade SPAs with TypeScript</span></a></li>
                            </ul></div>
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-react-developers-in-india"><span className="mega-link-title">React Developers</span><span className="mega-link-desc">Component-driven UIs with React &amp; Next.js</span></a></li>
                              <li><a href="/hire-swift-developers-in-india"><span className="mega-link-title">Swift Developers</span><span className="mega-link-desc">Apple platform specialists for macOS &amp; iOS</span></a></li>
                              <li><a href="/hire-laravel-developers-in-india"><span className="mega-link-title">Laravel Developers</span><span className="mega-link-desc">Elegant PHP framework for scalable APIs</span></a></li>
                              <li><a href="/hire-magento-developers-in-india"><span className="mega-link-title">Magento Developers</span><span className="mega-link-desc">Adobe Commerce for large-scale eCommerce</span></a></li>
                              <li><a href="/hire-woocommerce-developers-in-india"><span className="mega-link-title">WooCommerce Developers</span><span className="mega-link-desc">WordPress-powered online store specialists</span></a></li>
                            </ul></div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="res-enterprise">
                          <h4 className="home-mega-panel-title">Hire Enterprise Developers</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-javascript-developers-in-india"><span className="mega-link-title">JavaScript Developers</span><span className="mega-link-desc">Versatile JS engineers for web &amp; server</span></a></li>
                              <li><a href="/hire-fullstack-developers-in-india"><span className="mega-link-title">Full Stack Developers</span><span className="mega-link-desc">End-to-end development from UI to database</span></a></li>
                              <li><a href="/hire-mean-stack-developers-in-india"><span className="mega-link-title">MEAN Stack Developers</span><span className="mega-link-desc">MongoDB, Express, Angular &amp; Node.js experts</span></a></li>
                              <li><a href="/hire-mern-stack-developers-in-india"><span className="mega-link-title">MERN Stack Developers</span><span className="mega-link-desc">MongoDB, Express, React &amp; Node.js specialists</span></a></li>
                              <li><a href="/hire-vue-js-developers-in-india"><span className="mega-link-title">Vue.js Developers</span><span className="mega-link-desc">Lightweight, reactive frontend framework experts</span></a></li>
                              <li><a href="/hire-node-js-developers-in-india"><span className="mega-link-title">Node.js Developers</span><span className="mega-link-desc">High-performance server-side JavaScript</span></a></li>
                            </ul></div>
                            <div className="inner-blockss"><ul className="menu-li-link">
                              <li><a href="/hire-aws-developers-in-india"><span className="mega-link-title">AWS Developers</span><span className="mega-link-desc">Cloud architecture, Lambda &amp; infrastructure</span></a></li>
                              <li><a href="/hire-dedicated-developers-in-india"><span className="mega-link-title">Dedicated Developers</span><span className="mega-link-desc">Full-time remote devs integrated with your team</span></a></li>
                              <li><a href="/hire-salesforce-developers-in-india"><span className="mega-link-title">Salesforce Developers</span><span className="mega-link-desc">Apex, Lightning &amp; CRM customization pros</span></a></li>
                            </ul></div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="res-design">
                          <h4 className="home-mega-panel-title">Hire Design Experts</h4>
                          <div className="menu-inner-block-a"><div className="inner-blockss"><ul className="menu-li-link">
                            <li><a href="/hire-ui-ux-designers-in-india"><span className="mega-link-title">UI/UX Designers</span><span className="mega-link-desc">User research, wireframes &amp; visual design</span></a></li>
                            <li><a href="/hire-mobile-app-designers-in-india"><span className="mega-link-title">Mobile App Designers</span><span className="mega-link-desc">Pixel-perfect mobile interfaces &amp; prototypes</span></a></li>
                            <li><a href="/hire-quality-analyst-developers-in-india"><span className="mega-link-title">Quality Analysts</span><span className="mega-link-desc">Manual &amp; automated testing specialists</span></a></li>
                            <li><a href="/hire-pwa-developers-in-india"><span className="mega-link-title">PWA Developers</span><span className="mega-link-desc">Progressive web apps with offline support</span></a></li>
                            <li><a href="/hire-shopify-developers-in-india"><span className="mega-link-title">Shopify Developers</span><span className="mega-link-desc">Custom Shopify stores &amp; Liquid theme experts</span></a></li>
                          </ul></div></div>
                        </div>
                      </div>
                      <ResourcesCTA />
                    </div>
                  </div>
                  <MegaMenuExtraInfo />
                </div>
              </div>
            </li>

            <li className="megamenu1 mega-small"><a href="/portfolio" className="menu-links">Portfolio</a></li>
            <li className="megamenu1 mega-small"><a href="/careers" className="menu-links">Careers</a></li>
            <li className="megamenu1 mega-small"><a href="/contact-us" className="menu-links">Contact Us</a></li>
          </ul>
        </div>
        <div className="mobile-menu2">
          <ul className="mob-nav2">
            <li><a className="ree-btn2 ree-btn-grdt1 js-open-modal"><i className="fas fa-envelope-open-text"></i></a></li>
            <li className="navm-"><a className="toggle" href="/"><span></span></a></li>
          </ul>
        </div>
        <nav id="main-nav">
          <ul>
            <li><a href="/">Home</a><ul className="menu-li-link"><li><a href="/about">About Us</a></li><li><a href="/blog">Blogs</a></li><li><a href="/case-studies">Case Studies</a></li><li><a href="/careers">Careers</a></li></ul></li>
            <li><a href="/services">Services</a><ul className="menu-li-link"><li><a href="#">MOBILE APP DEVELOPMENT</a><ul><li><a href="/mobile-app-development-company">Mobile App Development</a></li><li><a href="/android-app-development-company">Android App Development</a></li><li><a href="/ios-app-development-company">iOS App Development</a></li><li><a href="/ipad-app-development-company">iPad App Development</a></li><li><a href="/custom-software-development-company">Custom Software Development</a></li><li><a href="/native-app-development-company">Native App Development</a></li><li><a href="/hybrid-app-development-company">Hybrid App Development</a></li><li><a href="/flutter-app-development-company">Flutter App development</a></li><li><a href="/react-native-app-development-company">React Native App Development</a></li></ul></li><li><a href="#">WEB DEVELOPMENT</a><ul><li><a href="/web-development-company">Web Application Development</a></li><li><a href="/wordpress-development-company">Wordpress Development</a></li><li><a href="/php-development-company">PHP Web Development</a></li><li><a href="/custom-cms-development-company-in-india">Custom CMS Development</a></li><li><a href="/woocommerce-development-company-in-india">Woo Commerce Development</a></li><li><a href="/magento-development-company-in-india">Magento Development</a></li><li><a href="/shopify-development-company-in-india">Shopify Development</a></li><li><a href="/web-design-company">Web Design</a></li></ul></li><li><a href="#">OTHER SERVICES</a><ul><li><a href="/ui-ux-design-company">UI / UX Design Services</a></li><li><a href="/seo-services-company">SEO Services</a></li><li><a href="/ppc-management-services-company">PPC Management Services</a></li><li><a href="/amazon-web-services-company">Amazon Web Services</a></li><li><a href="/app-store-optimization-services-company">ASO Services</a></li><li><a href="/progressive-web-app-development-company-in-india">Progressive Web App Development</a></li><li><a href="/360-degree-photography-services-in-india">360 Degree Photography Services</a></li><li><a href="/generative-ai-development-company" target="_blank">Generative AI</a></li><li><a href="/empowering-businesses-with-data-science" target="_blank">Data Science</a></li><li><a href="/cybersecurity-development-company" target="_blank">Cyber Security</a></li></ul></li></ul></li>
            <li><a href="/on-demand-products-development-company-hyderabad">Products</a><ul className="menu-li-link"><li><a href="/food-delivery-app-development-service">Food Delivery App Development</a></li><li><a href="/grocery-delivery-app-development-company">Grocery Delivery App Development</a></li><li><a href="/taxi-booking-app-development-company">Taxi Booking App Development</a></li><li><a href="/hotel-booking-app-development-company">Hotel Booking App Development</a></li><li><a href="/e-learning-app-development-company">E-Learning App Development</a></li><li><a href="/real-estate-app-development-company">Real Estate App Development</a></li><li><a href="/social-media-app-development-company">Social Media App Development</a></li><li><a href="/diagnostic-app-development-company">Diagnostic App Development</a></li><li><a href="/ott-app-development-company">OTT App Development</a></li><li><a href="/ecommerce-app-development-company">ecommerce App Development</a></li><li><a href="/online-shopping-app-development-company">Online Shopping App Development</a></li><li><a href="/tickets-booking-app-development-company">Ticket Booking App Development</a></li><li><a href="/sports-and-fitness-app-development-company">Sports and Fitness App Development</a></li><li><a href="/gaming-apps-development-company">Gaming App Development</a></li><li><a href="/multi-vendor-marketplace-app-builder">Multi Vendor Ecommerce App Development</a></li><li><a href="/car-wash-app-development-company">Car Wash App Development</a></li></ul></li>
            <li><a href="/hire-developers-in-india">Resources</a><ul className="menu-li-link"><li><a href="#">Hire Mobile App Developers</a><ul><li><a href="/hire-mobile-app-developers-in-india">Hire Mobile App Developers</a></li><li><a href="/hire-android-app-developers-in-india">Hire Android App Developers</a></li><li><a href="/hire-ios-app-developers-in-india">Hire iOS App Developers</a></li><li><a href="/hire-ipad-developers-in-india">Hire iPad App Developers</a></li><li><a href="/hire-custom-software-developers-in-india">Hire Custom Software Developers</a></li><li><a href="/hire-native-app-developers-in-india">Hire Native App Developers</a></li><li><a href="/hire-hybrid-app-developers-in-india">Hire Hybrid App Developers</a></li><li><a href="/hire-flutter-app-developers-in-india">Hire Flutter App Developers</a></li><li><a href="/hire-react-native-app-developers-in-india">Hire React Native App Developers</a></li></ul></li><li><a href="#">Hire Web Developers</a><ul><li><a href="/hire-web-developers-in-india">Hire Web Developers</a></li><li><a href="/hire-wordpress-developers-in-india">Hire Wordpress Developers</a></li><li><a href="/hire-php-developers-in-india">Hire PHP Developers</a></li><li><a href="/hire-custom-cms-developers-in-india">Hire Custom CMS Developers</a></li><li><a href="/hire-angular-developers-in-india">Hire Angular Developers</a></li><li><a href="/hire-react-developers-in-india">Hire React Developers</a></li><li><a href="/hire-swift-developers-in-india">Hire Swift Developers</a></li><li><a href="/hire-laravel-developers-in-india">Hire Laravel Developers</a></li><li><a href="/hire-magento-developers-in-india">Hire Magento Developers</a></li><li><a href="/hire-woocommerce-developers-in-india">Hire WooCommerce Developers</a></li></ul></li><li><a href="#">Hire Java Script Developers</a><ul><li><a href="/hire-javascript-developers-in-india">Hire JS Developers</a></li><li><a href="/hire-fullstack-developers-in-india">Hire Full Stack Developers</a></li><li><a href="/hire-mean-stack-developers-in-india">Hire Mean Stack Developers</a></li><li><a href="/hire-mern-stack-developers-in-india">Hire Mern Stack Developers</a></li><li><a href="/hire-vue-js-developers-in-india">Hire Vue.JS Developers</a></li><li><a href="/hire-node-js-developers-in-india">Hire NodeJS Developers</a></li></ul></li><li><a href="#">Hire Other Developers</a><ul><li><a href="/hire-dedicated-developers-in-india">Hire Dedicated Developers</a></li><li><a href="/hire-quality-analyst-developers-in-india">Hire Quality Analyst</a></li><li><a href="/hire-ui-ux-designers-in-india">Hire Ui/UX Designers</a></li><li><a href="/hire-mobile-app-designers-in-india">Hire Mobile App Designers</a></li><li><a href="/hire-aws-developers-in-india">Hire AWS Developers</a></li><li><a href="/hire-pwa-developers-in-india">Hire PWA Developers</a></li><li><a href="/hire-shopify-developers-in-india">Hire Shopify Developers</a></li><li><a href="/hire-salesforce-developers-in-india">Hire Salesforce Developers</a></li></ul></li></ul></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
          <ul className="bottom-nav">
            <li className="ree-hc"><a href="tel:+919390683154" rel="noreferrer" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.625 25.625"><g><path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995L22.079,17.835z"/></g></svg></a></li>
            <li className="ree-hc"><a href="mailto:contact@mtouchlabs.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></a></li>
            <li className="ree-hc"><a href="https://wa.me/message/H5VADFWLMPYIM1" rel="noreferrer" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z"/></g></svg></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}