// import MegaMenuCTA from "./MegaMenuCTA";
// import MegaMenuExtraInfo from "./MegaMenuExtraInfo";

// export default function Navbar() {
//   return (
//     <div className="container-fluid m-p-l-r-0">
//       <div className="menu-header">
//         <div className="menu-logo">
//           <div className="dskt-logo" style={{ lineHeight: 0 }}>
//             <a className="nav-brand" href="/" aria-label="mTouch Labs">
//               <img src="/images/logo-white.png" alt="Logo" />
//             </a>
//           </div>
//         </div>
//         <div className="ree-nav" role="navigation">
//           <ul className="nav-list">
//             {/* HOME — sidebar hover mega menu */}
//             <li className="megamenu">
//               <a href="/" className="menu-links">Home<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
//               <div className="menu-dropdown">
//                 <div className="menu-block-set">
//                   <div className="container">
//                     <div className="menu-block-a home-mega-layout">
//                       <div className="home-mega-sidebar">
//                         <h4 className="home-mega-title">Home</h4>
//                         <div className="home-mega-item js-home-mega-item active" data-target="home-about">
//                           <div className="home-mega-item-icon"><i className="fas fa-info-circle"></i></div>
//                           <div className="home-mega-item-text">
//                             <span className="home-mega-item-label">About us</span>
//                             <span className="home-mega-item-desc">mTouch Labs delivers innovative mobile and web app solutions for modern businesses.</span>
//                           </div>
//                         </div>
//                         <div className="home-mega-item js-home-mega-item" data-target="home-blog">
//                           <div className="home-mega-item-icon"><i className="fas fa-file-alt"></i></div>
//                           <div className="home-mega-item-text">
//                             <span className="home-mega-item-label">Blog</span>
//                             <span className="home-mega-item-desc">Discover expert ideas and innovations on our Blogs</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="home-mega-content">
//                         <div className="home-mega-panel active" id="home-about">
//                           <h4 className="home-mega-panel-title">About Us</h4>
//                           <div className="menu-inner-block-a">
//                             <div className="inner-blockss">
//                               <ul className="menu-li-link">
//                                 <li><a href="/company-overview">Company Overview</a></li>
//                                 <li><a href="/our-vision">Vision &amp; Mission</a></li>
//                                 <li><a href="/leadership-team">Leadership Team</a></li>
//                                 <li><a href="/our-journey">Our Journey</a></li>
//                               </ul>
//                             </div>
//                             <div className="inner-blockss">
//                               <ul className="menu-li-link">
//                                 <li><a href="/awards-recognition">Awards &amp; Recognition</a></li>
//                                 <li><a href="/nasscom-membership">NASSCOM Membership</a></li>
//                                 <li><a href="/about">Life at mTouch Labs</a></li>
//                               </ul>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="home-mega-panel" id="home-blog">
//                           <h4 className="home-mega-panel-title">Blogs</h4>
//                           <div className="menu-inner-block-a">
//                             <div className="inner-blockss">
//                               <ul className="menu-li-link">
//                                 <li><a href="/ai-role-in-business-automation">AI &amp; Automation The Future of AI Automation in Business</a></li>
//                                 <li><a href="/top-10-free-ai-tools-for-software-developers">Top 10 Free AI Tools for Software Developers in 2025</a></li>
//                                 <li><a href="/mobile-app-development-bangalore-tech-startups">Scalable Mobile App Development in Bangalore for...</a></li>
//                               </ul>
//                             </div>
//                             <div className="inner-blockss">
//                               <ul className="menu-li-link">
//                                 <li><a href="/top-ecommerce-niches-us">Top eCommerce Niches in the US Market (2025)</a></li>
//                                 <li><a href="/hyderabad-startups-app-development-mtouch-labs">Why Startups in Hyderabad Choose mTouch Labs for ...</a></li>
//                               </ul>
//                               <a href="/blog" className="home-mega-readmore">Read more</a>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="home-mega-cta">
//                         <div className="home-mega-cta-inner">
//                           <span className="home-mega-cta-quote">&ldquo;</span>
//                           <h4>We Will Shape Your Brand With Our Solutions</h4>
//                           <a className="ree-btn ree-btn0 ree-btn-grdt2 mt30 js-open-modal">Request Quote <i className="fas fa-arrow-right fa-btn"></i></a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <MegaMenuExtraInfo />
//               </div>
//             </li>
//             {/* SERVICES */}
//             <li className="megamenu">
//               <a href="/services" className="menu-links">Services<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
//               <div className="menu-dropdown">
//                 <div className="menu-block-set">
//                   <div className="container">
//                     <div className="menu-block-a">
//                       <MegaMenuCTA />
//                       <div className="mega-menu-blocks">
//                         <div className="menu-inner-block-a">
//                           <div className="inner-blockss">
//                             <label className="menu-headings">MOBILE APP DEVELOPMENT</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/mobile-app-development-company">Mobile App Development</a></li>
//                               <li><a href="/android-app-development-company">Android App Development</a></li>
//                               <li><a href="/ios-app-development-company">iOS App Development</a></li>
//                               <li><a href="/ipad-app-development-company">iPad App Development</a></li>
//                               <li><a href="/custom-software-development-company">Custom Software Development</a></li>
//                               <li><a href="/mobile-app-design-company">Mobile App Design</a></li>
//                               <li><a href="/native-app-development-company">Native App Development</a></li>
//                               <li><a href="/hybrid-app-development-company">Hybrid App Development</a></li>
//                               <li><a href="/flutter-app-development-company">Flutter App development</a></li>
//                               <li><a href="/react-native-app-development-company">React Native App Development</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">WEB DEVELOPMENT</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/web-development-company">Web Application Development</a></li>
//                               <li><a href="/wordpress-development-company">Wordpress Development</a></li>
//                               <li><a href="/php-development-company">PHP Web Development</a></li>
//                               <li><a href="/custom-cms-development-company-in-india">Custom CMS Development</a></li>
//                               <li><a href="/woocommerce-development-company-in-india">Woo Commerce Development</a></li>
//                               <li><a href="/magento-development-company-in-india">Magento Development</a></li>
//                               <li><a href="/shopify-development-company-in-india">Shopify Development</a></li>
//                               <li><a href="/web-design-company">Web Design</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">FRONTEND DEVELOPMENT</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/angular-development-company-in-india">Angular Development</a></li>
//                               <li><a href="/node-js-development-company-in-india">NodeJS Development</a></li>
//                               <li><a href="/vue-js-development-company-in-india">Vue.JS Development</a></li>
//                               <li><a href="/react-js-development-company-in-india">ReactJS Development</a></li>
//                               <li><a href="/express-js-development-company-in-india">ExpressJS Development</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">OTHER SERVICES</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/ui-ux-design-company">UI / UX Design Services</a></li>
//                               <li><a href="/seo-services-company">SEO Services</a></li>
//                               <li><a href="/ppc-management-services-company">PPC Management Services</a></li>
//                               <li><a href="/amazon-web-services-company">Amazon Web Services</a></li>
//                               <li><a href="/app-store-optimization-services-company">ASO Services</a></li>
//                               <li><a href="/progressive-web-app-development-company-in-india">Progressive Web App Development</a></li>
//                               <li><a href="/360-degree-photography-services-in-india">360 Degree Photography Services</a></li>
//                               <li><a href="/generative-ai-development-company" target="_blank">Generative AI</a></li>
//                               <li><a href="/empowering-businesses-with-data-science" target="_blank">Data Science</a></li>
//                               <li><a href="/cybersecurity-development-company" target="_blank">Cyber Security</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <MegaMenuExtraInfo />
//               </div>
//             </li>
//             {/* PRODUCTS */}
//             <li className="megamenu">
//               <a href="/Products" className="menu-links">Products<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
//               <div className="menu-dropdown">
//                 <div className="menu-block-set">
//                   <div className="container">
//                     <div className="menu-block-a">
//                       <MegaMenuCTA />
//                       <div className="mega-menu-blocks">
//                         <div className="menu-inner-block-a">
//                           <div className="inner-blockss">
//                             <ul className="menu-li-link">
//                               <li><a href="/food-delivery-app-development-service">Food Delivery App Development</a></li>
//                               <li><a href="/grocery-delivery-app-development-company">Grocery Delivery App Development</a></li>
//                               <li><a href="/taxi-booking-app-development-company">Taxi Booking App Development</a></li>
//                               <li><a href="/hotel-booking-app-development-company">Hotel Booking App Development</a></li>
//                               <li><a href="/e-learning-app-development-company">E-Learning App Development</a></li>
//                               <li><a href="/real-estate-app-development-company">Real Estate App Development</a></li>
//                               <li><a href="/social-media-app-development-company">Social Media App Development</a></li>
//                               <li><a href="/diagnostic-app-development-company">Diagnostic App Development</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <ul className="menu-li-link">
//                               <li><a href="/ott-app-development-company">OTT App Development</a></li>
//                               <li><a href="/ecommerce-app-development-company">ecommerce App Development</a></li>
//                               <li><a href="/online-shopping-app-development-company">Online Shopping App Development</a></li>
//                               <li><a href="/tickets-booking-app-development-company">Ticket Booking App Development</a></li>
//                               <li><a href="/sports-and-fitness-app-development-company">Sports and Fitness App Development</a></li>
//                               <li><a href="/gaming-apps-development-company">Gaming App Development</a></li>
//                               <li><a href="/multi-vendor-marketplace-app-builder">Multi Vendor Ecommerce App Development</a></li>
//                               <li><a href="/car-wash-app-development-company">Car Wash App Development</a></li>
//                             </ul>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <MegaMenuExtraInfo />
//               </div>
//             </li>
//             {/* RESOURCES */}
//             <li className="megamenu">
//               <a href="/hire-developers" className="menu-links">Resources<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
//               <div className="menu-dropdown">
//                 <div className="menu-block-set">
//                   <div className="container">
//                     <div className="menu-block-a">
//                       <MegaMenuCTA heading="Want to Hire Developers?" subheading="We Will Shape Your Brand With Our Resources" />
//                       <div className="mega-menu-blocks">
//                         <div className="menu-inner-block-a">
//                           <div className="inner-blockss">
//                             <label className="menu-headings">Hire Mobile App Developers</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/hire-mobile-app-developers-in-india">Hire Mobile App Developers</a></li>
//                               <li><a href="/hire-android-app-developers-in-india">Hire Android App Developers</a></li>
//                               <li><a href="/hire-ios-app-developers-in-india">Hire iOS App Developers</a></li>
//                               <li><a href="/hire-ipad-developers-in-india">Hire iPad App Developers</a></li>
//                               <li><a href="/hire-custom-software-developers-in-india">Hire Custom Software Developers</a></li>
//                               <li><a href="/hire-native-app-developers-in-india">Hire Native App Developers</a></li>
//                               <li><a href="/hire-hybrid-app-developers-in-india">Hire Hybrid App Developers</a></li>
//                               <li><a href="/hire-flutter-app-developers-in-india">Hire Flutter App Developers</a></li>
//                               <li><a href="/hire-react-native-app-developers-in-india">Hire React Native App Developers</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">Hire Web Developers</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/hire-web-developers-in-india">Hire Web Developers</a></li>
//                               <li><a href="/hire-wordpress-developers-in-india">Hire Wordpress Developers</a></li>
//                               <li><a href="/hire-php-developers-in-india">Hire PHP Developers</a></li>
//                               <li><a href="/hire-custom-cms-developers-in-india">Hire Custom CMS Developers</a></li>
//                               <li><a href="/hire-angular-developers-in-india">Hire Angular Developers</a></li>
//                               <li><a href="/hire-react-developers-in-india">Hire React Developers</a></li>
//                               <li><a href="/hire-swift-developers-in-india">Hire Swift Developers</a></li>
//                               <li><a href="/hire-laravel-developers-in-india">Hire Laravel Developers</a></li>
//                               <li><a href="/hire-magento-developers-in-india">Hire Magento Developers</a></li>
//                               <li><a href="/hire-woocommerce-developers-in-india">Hire WooCommerce Developers</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">Hire Java Script Developers</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/hire-javascript-developers-in-india">Hire JS Developers</a></li>
//                               <li><a href="/hire-fullstack-developers-in-india">Hire Full Stack Developers</a></li>
//                               <li><a href="/hire-mean-stack-developers-in-india">Hire Mean Stack Developers</a></li>
//                               <li><a href="/hire-mern-stack-developers-in-india">Hire Mern Stack Developers</a></li>
//                               <li><a href="/hire-vue-js-developers-in-india">Hire Vue.JS Developers</a></li>
//                               <li><a href="/hire-node-js-developers-in-india">Hire NodeJS Developers</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss">
//                             <label className="menu-headings">Hire Other Developers</label>
//                             <ul className="menu-li-link">
//                               <li><a href="/hire-dedicated-developers-in-india">Hire Dedicated Developers</a></li>
//                               <li><a href="/hire-quality-analyst-developers-in-india">Hire Quality Analyst</a></li>
//                               <li><a href="/hire-ui-ux-designers-in-india">Hire Ui/UX Designers</a></li>
//                               <li><a href="/hire-mobile-app-designers-in-india">Hire Mobile App Designers</a></li>
//                               <li><a href="/hire-aws-developers-in-india">Hire AWS Developers</a></li>
//                               <li><a href="/hire-pwa-developers-in-india">Hire PWA Developers</a></li>
//                               <li><a href="/hire-shopify-developers-in-india">Hire Shopify Developers</a></li>
//                               <li><a href="/hire-salesforce-developers-in-india">Hire Salesforce Developers</a></li>
//                             </ul>
//                           </div>
//                           <div className="inner-blockss"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <MegaMenuExtraInfo />
//               </div>
//             </li>
//             <li className="megamenu1 mega-small"><a href="/portfolio" className="menu-links">Portfolio</a></li>
//             <li className="megamenu1 mega-small"><a href="/careers" className="menu-links">Careers</a></li>
//             <li className="megamenu1 mega-small"><a href="/contact-us" className="menu-links">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className="nav-right-btn">
//           <a className="request_btn js-open-modal" style={{ cursor: "pointer" }}> Request Quote</a>
//         </div>
//         <div className="mobile-menu2">
//           <ul className="mob-nav2">
//             <li><a className="ree-btn2 ree-btn-grdt1 js-open-modal"><i className="fas fa-envelope-open-text"></i></a></li>
//             <li className="navm-"><a className="toggle" href="/"><span></span></a></li>
//           </ul>
//         </div>
//         <nav id="main-nav">
//           <ul>
//             <li><a href="/">Home</a><ul className="menu-li-link"><li><a href="/about">About Us</a></li><li><a href="/blog">Blogs</a></li><li><a href="/case-studies">Case Studies</a></li><li><a href="/careers">Careers</a></li></ul></li>
//             <li><a href="/services">Services</a><ul className="menu-li-link"><li><a href="#">MOBILE APP DEVELOPMENT</a><ul><li><a href="/mobile-app-development-company">Mobile App Development</a></li><li><a href="/android-app-development-company">Android App Development</a></li><li><a href="/ios-app-development-company">iOS App Development</a></li><li><a href="/ipad-app-development-company">iPad App Development</a></li><li><a href="/custom-software-development-company">Custom Software Development</a></li><li><a href="/native-app-development-company">Native App Development</a></li><li><a href="/hybrid-app-development-company">Hybrid App Development</a></li><li><a href="/flutter-app-development-company">Flutter App development</a></li><li><a href="/react-native-app-development-company">React Native App Development</a></li></ul></li><li><a href="#">WEB DEVELOPMENT</a><ul><li><a href="/web-development-company">Web Application Development</a></li><li><a href="/wordpress-development-company">Wordpress Development</a></li><li><a href="/php-development-company">PHP Web Development</a></li><li><a href="/custom-cms-development-company-in-india">Custom CMS Development</a></li><li><a href="/woocommerce-development-company-in-india">Woo Commerce Development</a></li><li><a href="/magento-development-company-in-india">Magento Development</a></li><li><a href="/shopify-development-company-in-india">Shopify Development</a></li><li><a href="/web-design-company">Web Design</a></li></ul></li><li><a href="#">FRONTEND DEVELOPMENT</a><ul><li><a href="/angular-development-company-in-india">Angular Development</a></li><li><a href="/node-js-development-company-in-india">NodeJS Development</a></li><li><a href="/vue-js-development-company-in-india">Vue.JS Development</a></li><li><a href="/react-js-development-company-in-india">ReactJS Development</a></li><li><a href="/express-js-development-company-in-india">ExpressJS Development</a></li></ul></li><li><a href="#">OTHER SERVICES</a><ul><li><a href="/ui-ux-design-company">UI / UX Design Services</a></li><li><a href="/seo-services-company">SEO Services</a></li><li><a href="/ppc-management-services-company">PPC Management Services</a></li><li><a href="/amazon-web-services-company">Amazon Web Services</a></li><li><a href="/app-store-optimization-services-company">ASO Services</a></li><li><a href="/progressive-web-app-development-company-in-india">Progressive Web App Development</a></li><li><a href="/360-degree-photography-services-in-india">360 Degree Photography Services</a></li><li><a href="/generative-ai-development-company" target="_blank">Generative AI</a></li><li><a href="/empowering-businesses-with-data-science" target="_blank">Data Science</a></li><li><a href="/cybersecurity-development-company" target="_blank">Cyber Security</a></li></ul></li></ul></li>
//             <li><a href="/Products">Products</a><ul className="menu-li-link"><li><a href="/food-delivery-app-development-service">Food Delivery App Development</a></li><li><a href="/grocery-delivery-app-development-company">Grocery Delivery App Development</a></li><li><a href="/taxi-booking-app-development-company">Taxi Booking App Development</a></li><li><a href="/hotel-booking-app-development-company">Hotel Booking App Development</a></li><li><a href="/e-learning-app-development-company">E-Learning App Development</a></li><li><a href="/real-estate-app-development-company">Real Estate App Development</a></li><li><a href="/social-media-app-development-company">Social Media App Development</a></li><li><a href="/diagnostic-app-development-company">Diagnostic App Development</a></li><li><a href="/ott-app-development-company">OTT App Development</a></li><li><a href="/ecommerce-app-development-company">ecommerce App Development</a></li><li><a href="/online-shopping-app-development-company">Online Shopping App Development</a></li><li><a href="/tickets-booking-app-development-company">Ticket Booking App Development</a></li><li><a href="/sports-and-fitness-app-development-company">Sports and Fitness App Development</a></li><li><a href="/gaming-apps-development-company">Gaming App Development</a></li><li><a href="/multi-vendor-marketplace-app-builder">Multi Vendor Ecommerce App Development</a></li><li><a href="/car-wash-app-development-company">Car Wash App Development</a></li></ul></li>
//             <li><a href="/hire-developers-in-india">Resources</a><ul className="menu-li-link"><li><a href="#">Hire Mobile App Developers</a><ul><li><a href="/hire-mobile-app-developers-in-india">Hire Mobile App Developers</a></li><li><a href="/hire-android-app-developers-in-india">Hire Android App Developers</a></li><li><a href="/hire-ios-app-developers-in-india">Hire iOS App Developers</a></li><li><a href="/hire-ipad-developers-in-india">Hire iPad App Developers</a></li><li><a href="/hire-custom-software-developers-in-india">Hire Custom Software Developers</a></li><li><a href="/hire-native-app-developers-in-india">Hire Native App Developers</a></li><li><a href="/hire-hybrid-app-developers-in-india">Hire Hybrid App Developers</a></li><li><a href="/hire-flutter-app-developers-in-india">Hire Flutter App Developers</a></li><li><a href="/hire-react-native-app-developers-in-india">Hire React Native App Developers</a></li></ul></li><li><a href="#">Hire Web Developers</a><ul><li><a href="/hire-web-developers-in-india">Hire Web Developers</a></li><li><a href="/hire-wordpress-developers-in-india">Hire Wordpress Developers</a></li><li><a href="/hire-php-developers-in-india">Hire PHP Developers</a></li><li><a href="/hire-custom-cms-developers-in-india">Hire Custom CMS Developers</a></li><li><a href="/hire-angular-developers-in-india">Hire Angular Developers</a></li><li><a href="/hire-react-developers-in-india">Hire React Developers</a></li><li><a href="/hire-swift-developers-in-india">Hire Swift Developers</a></li><li><a href="/hire-laravel-developers-in-india">Hire Laravel Developers</a></li><li><a href="/hire-magento-developers-in-india">Hire Magento Developers</a></li><li><a href="/hire-woocommerce-developers-in-india">Hire WooCommerce Developers</a></li></ul></li><li><a href="#">Hire Java Script Developers</a><ul><li><a href="/hire-javascript-developers-in-india">Hire JS Developers</a></li><li><a href="/hire-fullstack-developers-in-india">Hire Full Stack Developers</a></li><li><a href="/hire-mean-stack-developers-in-india">Hire Mean Stack Developers</a></li><li><a href="/hire-mern-stack-developers-in-india">Hire Mern Stack Developers</a></li><li><a href="/hire-vue-js-developers-in-india">Hire Vue.JS Developers</a></li><li><a href="/hire-node-js-developers-in-india">Hire NodeJS Developers</a></li></ul></li><li><a href="#">Hire Other Developers</a><ul><li><a href="/hire-dedicated-developers-in-india">Hire Dedicated Developers</a></li><li><a href="/hire-quality-analyst-developers-in-india">Hire Quality Analyst</a></li><li><a href="/hire-ui-ux-designers-in-india">Hire Ui/UX Designers</a></li><li><a href="/hire-mobile-app-designers-in-india">Hire Mobile App Designers</a></li><li><a href="/hire-aws-developers-in-india">Hire AWS Developers</a></li><li><a href="/hire-pwa-developers-in-india">Hire PWA Developers</a></li><li><a href="/hire-shopify-developers-in-india">Hire Shopify Developers</a></li><li><a href="/hire-salesforce-developers-in-india">Hire Salesforce Developers</a></li></ul></li></ul></li>
//             <li><a href="/portfolio">Portfolio</a></li>
//             <li><a href="/contact-us">Contact Us</a></li>
//           </ul>
//           <ul className="bottom-nav">
//             <li className="ree-hc"><a href="tel:+919390683154" rel="noreferrer" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.625 25.625"><g><path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995L22.079,17.835z"/></g></svg></a></li>
//             <li className="ree-hc"><a href="mailto:contact@mtouchlabs.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></a></li>
//             <li className="ree-hc"><a href="https://wa.me/message/H5VADFWLMPYIM1" rel="noreferrer" target="_blank"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="M256.064,0h-0.128C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z M405.024,361.504c-6.176,17.44-30.688,31.904-50.24,36.128c-13.376,2.848-30.848,5.12-89.664-19.264C189.888,347.2,141.44,270.752,137.664,265.792c-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624,26.176-62.304c6.176-6.304,16.384-9.184,26.176-9.184c3.168,0,6.016,0.16,8.576,0.288c7.52,0.32,11.296,0.768,16.256,12.64c6.176,14.88,21.216,51.616,23.008,55.392c1.824,3.776,3.648,8.896,1.088,13.856c-2.4,5.12-4.512,7.392-8.288,11.744c-3.776,4.352-7.36,7.68-11.136,12.352c-3.456,4.064-7.36,8.416-3.008,15.936c4.352,7.36,19.392,31.904,41.536,51.616c28.576,25.44,51.744,33.568,60.032,37.024c6.176,2.56,13.536,1.952,18.048-2.848c5.728-6.176,12.8-16.416,20-26.496c5.12-7.232,11.584-8.128,18.368-5.568c6.912,2.4,43.488,20.48,51.008,24.224c7.52,3.776,12.48,5.568,14.304,8.736C411.2,329.152,411.2,344.032,405.024,361.504z"/></g></svg></a></li>
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }

import MegaMenuCTA from "./MegaMenuCTA";
import MegaMenuExtraInfo from "./MegaMenuExtraInfo";

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
            {/* HOME — sidebar hover mega menu */}
            <li className="megamenu">
              <a href="/" className="menu-links">Home<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a home-mega-layout">
                      <div className="home-mega-sidebar">
                        <h4 className="home-mega-title">Home</h4>
                        <div className="home-mega-item js-home-mega-item active" data-target="home-about">
                          <div className="home-mega-item-icon"><i className="fas fa-info-circle"></i></div>
                          <div className="home-mega-item-text">
                            <span className="home-mega-item-label">About us</span>
                            <span className="home-mega-item-desc">mTouch Labs delivers innovative mobile and web app solutions for modern businesses.</span>
                          </div>
                        </div>
                        <div className="home-mega-item js-home-mega-item" data-target="home-blog">
                          <div className="home-mega-item-icon"><i className="fas fa-file-alt"></i></div>
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
                                <li><a href="/company-overview">Company Overview</a></li>
                                <li><a href="/our-vision">Vision &amp; Mission</a></li>
                                <li><a href="/leadership-team">Leadership Team</a></li>
                                <li><a href="/our-journey">Our Journey</a></li>
                              </ul>
                            </div>
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/awards-recognition">Awards &amp; Recognition</a></li>
                                <li><a href="/nasscom-membership">NASSCOM Membership</a></li>
                                <li><a href="/about">Life at mTouch Labs</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="home-mega-panel" id="home-blog">
                          <h4 className="home-mega-panel-title">Blogs</h4>
                          <div className="menu-inner-block-a">
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/ai-role-in-business-automation">AI &amp; Automation The Future of AI Automation in Business</a></li>
                                <li><a href="/top-10-free-ai-tools-for-software-developers">Top 10 Free AI Tools for Software Developers in 2025</a></li>
                                <li><a href="/mobile-app-development-bangalore-tech-startups">Scalable Mobile App Development in Bangalore for...</a></li>
                              </ul>
                            </div>
                            <div className="inner-blockss">
                              <ul className="menu-li-link">
                                <li><a href="/top-ecommerce-niches-us">Top eCommerce Niches in the US Market (2025)</a></li>
                                <li><a href="/hyderabad-startups-app-development-mtouch-labs">Why Startups in Hyderabad Choose mTouch Labs for ...</a></li>
                              </ul>
                              <a href="/blog" className="home-mega-readmore">Read more</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="home-mega-cta">
                        <div className="home-mega-cta-inner">
                          <span className="home-mega-cta-quote">&ldquo;</span>
                          <h4>We Will Shape Your Brand With Our Solutions</h4>
                          <a className="ree-btn ree-btn0 ree-btn-grdt2 mt30 js-open-modal">Request Quote <i className="fas fa-arrow-right fa-btn"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MegaMenuExtraInfo />
              </div>
            </li>
            {/* SERVICES */}
            <li className="megamenu">
              <a href="/services" className="menu-links">Services<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a">
                      <MegaMenuCTA />
                      <div className="mega-menu-blocks">
                        <div className="menu-inner-block-a">
                          <div className="inner-blockss">
                            <label className="menu-headings">MOBILE APP DEVELOPMENT</label>
                            <ul className="menu-li-link">
                              <li><a href="/mobile-app-development-company">Mobile App Development</a></li>
                              <li><a href="/android-app-development-company">Android App Development</a></li>
                              <li><a href="/ios-app-development-company">iOS App Development</a></li>
                              <li><a href="/ipad-app-development-company">iPad App Development</a></li>
                              <li><a href="/custom-software-development-company">Custom Software Development</a></li>
                              <li><a href="/mobile-app-design-company">Mobile App Design</a></li>
                              <li><a href="/native-app-development-company">Native App Development</a></li>
                              <li><a href="/hybrid-app-development-company">Hybrid App Development</a></li>
                              <li><a href="/flutter-app-development-company">Flutter App development</a></li>
                              <li><a href="/react-native-app-development-company">React Native App Development</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">WEB DEVELOPMENT</label>
                            <ul className="menu-li-link">
                              <li><a href="/web-development-company">Web Application Development</a></li>
                              <li><a href="/wordpress-development-company">Wordpress Development</a></li>
                              <li><a href="/php-development-company">PHP Web Development</a></li>
                              <li><a href="/custom-cms-development-company-in-india">Custom CMS Development</a></li>
                              <li><a href="/woocommerce-development-company-in-india">Woo Commerce Development</a></li>
                              <li><a href="/magento-development-company-in-india">Magento Development</a></li>
                              <li><a href="/shopify-development-company-in-india">Shopify Development</a></li>
                              <li><a href="/web-design-company">Web Design</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">FRONTEND DEVELOPMENT</label>
                            <ul className="menu-li-link">
                              <li><a href="/angular-development-company-in-india">Angular Development</a></li>
                              <li><a href="/node-js-development-company-in-india">NodeJS Development</a></li>
                              <li><a href="/vue-js-development-company-in-india">Vue.JS Development</a></li>
                              <li><a href="/react-js-development-company-in-india">ReactJS Development</a></li>
                              <li><a href="/express-js-development-company-in-india">ExpressJS Development</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">OTHER SERVICES</label>
                            <ul className="menu-li-link">
                              <li><a href="/ui-ux-design-company">UI / UX Design Services</a></li>
                              <li><a href="/seo-services-company">SEO Services</a></li>
                              <li><a href="/ppc-management-services-company">PPC Management Services</a></li>
                              <li><a href="/amazon-web-services-company">Amazon Web Services</a></li>
                              <li><a href="/app-store-optimization-services-company">ASO Services</a></li>
                              <li><a href="/progressive-web-app-development-company-in-india">Progressive Web App Development</a></li>
                              <li><a href="/360-degree-photography-services-in-india">360 Degree Photography Services</a></li>
                              <li><a href="/generative-ai-development-company" target="_blank">Generative AI</a></li>
                              <li><a href="/empowering-businesses-with-data-science" target="_blank">Data Science</a></li>
                              <li><a href="/cybersecurity-development-company" target="_blank">Cyber Security</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MegaMenuExtraInfo />
              </div>
            </li>
            {/* PRODUCTS */}
            <li className="megamenu">
              <a href="/on-demand-products-development-company-hyderabad" className="menu-links">Products<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a">
                      <MegaMenuCTA />
                      <div className="mega-menu-blocks">
                        <div className="menu-inner-block-a">
                          <div className="inner-blockss">
                            <ul className="menu-li-link">
                              <li><a href="/food-delivery-app-development-service">Food Delivery App Development</a></li>
                              <li><a href="/grocery-delivery-app-development-company">Grocery Delivery App Development</a></li>
                              <li><a href="/taxi-booking-app-development-company">Taxi Booking App Development</a></li>
                              <li><a href="/hotel-booking-app-development-company">Hotel Booking App Development</a></li>
                              <li><a href="/e-learning-app-development-company">E-Learning App Development</a></li>
                              <li><a href="/real-estate-app-development-company">Real Estate App Development</a></li>
                              <li><a href="/social-media-app-development-company">Social Media App Development</a></li>
                              <li><a href="/diagnostic-app-development-company">Diagnostic App Development</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <ul className="menu-li-link">
                              <li><a href="/ott-app-development-company">OTT App Development</a></li>
                              <li><a href="/ecommerce-app-development-company">ecommerce App Development</a></li>
                              <li><a href="/online-shopping-app-development-company">Online Shopping App Development</a></li>
                              <li><a href="/tickets-booking-app-development-company">Ticket Booking App Development</a></li>
                              <li><a href="/sports-and-fitness-app-development-company">Sports and Fitness App Development</a></li>
                              <li><a href="/gaming-apps-development-company">Gaming App Development</a></li>
                              <li><a href="/multi-vendor-marketplace-app-builder">Multi Vendor Ecommerce App Development</a></li>
                              <li><a href="/car-wash-app-development-company">Car Wash App Development</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MegaMenuExtraInfo />
              </div>
            </li>
            {/* RESOURCES */}
            <li className="megamenu">
              <a href="/hire-developers-in-india" className="menu-links">Resources<i id="menu-linkicon" className="fas fa-angle-down"></i></a>
              <div className="menu-dropdown">
                <div className="menu-block-set">
                  <div className="container">
                    <div className="menu-block-a">
                      <MegaMenuCTA heading="Want to Hire Developers?" subheading="We Will Shape Your Brand With Our Resources" />
                      <div className="mega-menu-blocks">
                        <div className="menu-inner-block-a">
                          <div className="inner-blockss">
                            <label className="menu-headings">Hire Mobile App Developers</label>
                            <ul className="menu-li-link">
                              <li><a href="/hire-mobile-app-developers-in-india">Hire Mobile App Developers</a></li>
                              <li><a href="/hire-android-app-developers-in-india">Hire Android App Developers</a></li>
                              <li><a href="/hire-ios-app-developers-in-india">Hire iOS App Developers</a></li>
                              <li><a href="/hire-ipad-developers-in-india">Hire iPad App Developers</a></li>
                              <li><a href="/hire-custom-software-developers-in-india">Hire Custom Software Developers</a></li>
                              <li><a href="/hire-native-app-developers-in-india">Hire Native App Developers</a></li>
                              <li><a href="/hire-hybrid-app-developers-in-india">Hire Hybrid App Developers</a></li>
                              <li><a href="/hire-flutter-app-developers-in-india">Hire Flutter App Developers</a></li>
                              <li><a href="/hire-react-native-app-developers-in-india">Hire React Native App Developers</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">Hire Web Developers</label>
                            <ul className="menu-li-link">
                              <li><a href="/hire-web-developers-in-india">Hire Web Developers</a></li>
                              <li><a href="/hire-wordpress-developers-in-india">Hire Wordpress Developers</a></li>
                              <li><a href="/hire-php-developers-in-india">Hire PHP Developers</a></li>
                              <li><a href="/hire-custom-cms-developers-in-india">Hire Custom CMS Developers</a></li>
                              <li><a href="/hire-angular-developers-in-india">Hire Angular Developers</a></li>
                              <li><a href="/hire-react-developers-in-india">Hire React Developers</a></li>
                              <li><a href="/hire-swift-developers-in-india">Hire Swift Developers</a></li>
                              <li><a href="/hire-laravel-developers-in-india">Hire Laravel Developers</a></li>
                              <li><a href="/hire-magento-developers-in-india">Hire Magento Developers</a></li>
                              <li><a href="/hire-woocommerce-developers-in-india">Hire WooCommerce Developers</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">Hire Java Script Developers</label>
                            <ul className="menu-li-link">
                              <li><a href="/hire-javascript-developers-in-india">Hire JS Developers</a></li>
                              <li><a href="/hire-fullstack-developers-in-india">Hire Full Stack Developers</a></li>
                              <li><a href="/hire-mean-stack-developers-in-india">Hire Mean Stack Developers</a></li>
                              <li><a href="/hire-mern-stack-developers-in-india">Hire Mern Stack Developers</a></li>
                              <li><a href="/hire-vue-js-developers-in-india">Hire Vue.JS Developers</a></li>
                              <li><a href="/hire-node-js-developers-in-india">Hire NodeJS Developers</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss">
                            <label className="menu-headings">Hire Other Developers</label>
                            <ul className="menu-li-link">
                              <li><a href="/hire-dedicated-developers-in-india">Hire Dedicated Developers</a></li>
                              <li><a href="/hire-quality-analyst-developers-in-india">Hire Quality Analyst</a></li>
                              <li><a href="/hire-ui-ux-designers-in-india">Hire Ui/UX Designers</a></li>
                              <li><a href="/hire-mobile-app-designers-in-india">Hire Mobile App Designers</a></li>
                              <li><a href="/hire-aws-developers-in-india">Hire AWS Developers</a></li>
                              <li><a href="/hire-pwa-developers-in-india">Hire PWA Developers</a></li>
                              <li><a href="/hire-shopify-developers-in-india">Hire Shopify Developers</a></li>
                              <li><a href="/hire-salesforce-developers-in-india">Hire Salesforce Developers</a></li>
                            </ul>
                          </div>
                          <div className="inner-blockss"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MegaMenuExtraInfo />
              </div>
            </li>
            <li className="megamenu1 mega-small"><a href="/portfolio" className="menu-links">Portfolio</a></li>
            <li className="megamenu1 mega-small"><a href="/careers" className="menu-links">Careers</a></li>
            <li className="megamenu1 mega-small"><a href="/contact-us" className="menu-links">Contact US</a></li>
          </ul>
        </div>
        <div className="nav-right-btn">
          <a className="request_btn js-open-modal" style={{ cursor: "pointer" }}> Request Quote</a>
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
            <li><a href="/services">Services</a><ul className="menu-li-link"><li><a href="#">MOBILE APP DEVELOPMENT</a><ul><li><a href="/mobile-app-development-company">Mobile App Development</a></li><li><a href="/android-app-development-company">Android App Development</a></li><li><a href="/ios-app-development-company">iOS App Development</a></li><li><a href="/ipad-app-development-company">iPad App Development</a></li><li><a href="/custom-software-development-company">Custom Software Development</a></li><li><a href="/native-app-development-company">Native App Development</a></li><li><a href="/hybrid-app-development-company">Hybrid App Development</a></li><li><a href="/flutter-app-development-company">Flutter App development</a></li><li><a href="/react-native-app-development-company">React Native App Development</a></li></ul></li><li><a href="#">WEB DEVELOPMENT</a><ul><li><a href="/web-development-company">Web Application Development</a></li><li><a href="/wordpress-development-company">Wordpress Development</a></li><li><a href="/php-development-company">PHP Web Development</a></li><li><a href="/custom-cms-development-company-in-india">Custom CMS Development</a></li><li><a href="/woocommerce-development-company-in-india">Woo Commerce Development</a></li><li><a href="/magento-development-company-in-india">Magento Development</a></li><li><a href="/shopify-development-company-in-india">Shopify Development</a></li><li><a href="/web-design-company">Web Design</a></li></ul></li><li><a href="#">FRONTEND DEVELOPMENT</a><ul><li><a href="/angular-development-company-in-india">Angular Development</a></li><li><a href="/node-js-development-company-in-india">NodeJS Development</a></li><li><a href="/vue-js-development-company-in-india">Vue.JS Development</a></li><li><a href="/react-js-development-company-in-india">ReactJS Development</a></li><li><a href="/express-js-development-company-in-india">ExpressJS Development</a></li></ul></li><li><a href="#">OTHER SERVICES</a><ul><li><a href="/ui-ux-design-company">UI / UX Design Services</a></li><li><a href="/seo-services-company">SEO Services</a></li><li><a href="/ppc-management-services-company">PPC Management Services</a></li><li><a href="/amazon-web-services-company">Amazon Web Services</a></li><li><a href="/app-store-optimization-services-company">ASO Services</a></li><li><a href="/progressive-web-app-development-company-in-india">Progressive Web App Development</a></li><li><a href="/360-degree-photography-services-in-india">360 Degree Photography Services</a></li><li><a href="/generative-ai-development-company" target="_blank">Generative AI</a></li><li><a href="/empowering-businesses-with-data-science" target="_blank">Data Science</a></li><li><a href="/cybersecurity-development-company" target="_blank">Cyber Security</a></li></ul></li></ul></li>
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