// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Mobile app development company in India | Web development company",
//   description: "Get in touch with our web development company and mobile app development company in India and transform your idea into engaging applications",
//   keywords: "Mobile app development company in India, Web development company",
//   alternates: { canonical: "/contact-us" },
// };

// const countryCodes = [
//   { code: "IN", value: "91", label: "India (+91)" },
//   { code: "DZ", value: "213", label: "Algeria (+213)" },
//   { code: "AD", value: "376", label: "Andorra (+376)" },
//   { code: "AO", value: "244", label: "Angola (+244)" },
//   { code: "AI", value: "1264", label: "Anguilla (+1264)" },
//   { code: "AG", value: "1268", label: "Antigua &amp; Barbuda (+1268)" },
//   { code: "AR", value: "54", label: "Argentina (+54)" },
//   { code: "AM", value: "374", label: "Armenia (+374)" },
//   { code: "AW", value: "297", label: "Aruba (+297)" },
//   { code: "AU", value: "61", label: "Australia (+61)" },
//   { code: "AT", value: "43", label: "Austria (+43)" },
//   { code: "AZ", value: "994", label: "Azerbaijan (+994)" },
//   { code: "BS", value: "1242", label: "Bahamas (+1242)" },
//   { code: "BH", value: "973", label: "Bahrain (+973)" },
//   { code: "BD", value: "880", label: "Bangladesh (+880)" },
//   { code: "BB", value: "1246", label: "Barbados (+1246)" },
//   { code: "BY", value: "375", label: "Belarus (+375)" },
//   { code: "BE", value: "32", label: "Belgium (+32)" },
//   { code: "BZ", value: "501", label: "Belize (+501)" },
//   { code: "BR", value: "55", label: "Brazil (+55)" },
//   { code: "BG", value: "359", label: "Bulgaria (+359)" },
//   { code: "KH", value: "855", label: "Cambodia (+855)" },
//   { code: "CM", value: "237", label: "Cameroon (+237)" },
//   { code: "CA", value: "1", label: "Canada (+1)" },
//   { code: "CL", value: "56", label: "Chile (+56)" },
//   { code: "CN", value: "86", label: "China (+86)" },
//   { code: "CO", value: "57", label: "Colombia (+57)" },
//   { code: "CR", value: "506", label: "Costa Rica (+506)" },
//   { code: "HR", value: "385", label: "Croatia (+385)" },
//   { code: "CY", value: "357", label: "Cyprus (+357)" },
//   { code: "CZ", value: "42", label: "Czech Republic (+42)" },
//   { code: "DK", value: "45", label: "Denmark (+45)" },
//   { code: "EC", value: "593", label: "Ecuador (+593)" },
//   { code: "EG", value: "20", label: "Egypt (+20)" },
//   { code: "EE", value: "372", label: "Estonia (+372)" },
//   { code: "ET", value: "251", label: "Ethiopia (+251)" },
//   { code: "FI", value: "358", label: "Finland (+358)" },
//   { code: "FR", value: "33", label: "France (+33)" },
//   { code: "DE", value: "49", label: "Germany (+49)" },
//   { code: "GH", value: "233", label: "Ghana (+233)" },
//   { code: "GR", value: "30", label: "Greece (+30)" },
//   { code: "GT", value: "502", label: "Guatemala (+502)" },
//   { code: "HK", value: "852", label: "Hong Kong (+852)" },
//   { code: "HU", value: "36", label: "Hungary (+36)" },
//   { code: "IS", value: "354", label: "Iceland (+354)" },
//   { code: "ID", value: "62", label: "Indonesia (+62)" },
//   { code: "IR", value: "98", label: "Iran (+98)" },
//   { code: "IQ", value: "964", label: "Iraq (+964)" },
//   { code: "IE", value: "353", label: "Ireland (+353)" },
//   { code: "IL", value: "972", label: "Israel (+972)" },
//   { code: "IT", value: "39", label: "Italy (+39)" },
//   { code: "JM", value: "1876", label: "Jamaica (+1876)" },
//   { code: "JP", value: "81", label: "Japan (+81)" },
//   { code: "JO", value: "962", label: "Jordan (+962)" },
//   { code: "KZ", value: "7", label: "Kazakhstan (+7)" },
//   { code: "KE", value: "254", label: "Kenya (+254)" },
//   { code: "KR", value: "82", label: "Korea South (+82)" },
//   { code: "KW", value: "965", label: "Kuwait (+965)" },
//   { code: "LV", value: "371", label: "Latvia (+371)" },
//   { code: "LB", value: "961", label: "Lebanon (+961)" },
//   { code: "LY", value: "218", label: "Libya (+218)" },
//   { code: "LT", value: "370", label: "Lithuania (+370)" },
//   { code: "LU", value: "352", label: "Luxembourg (+352)" },
//   { code: "MY", value: "60", label: "Malaysia (+60)" },
//   { code: "MV", value: "960", label: "Maldives (+960)" },
//   { code: "MT", value: "356", label: "Malta (+356)" },
//   { code: "MX", value: "52", label: "Mexico (+52)" },
//   { code: "MA", value: "212", label: "Morocco (+212)" },
//   { code: "MM", value: "95", label: "Myanmar (+95)" },
//   { code: "NP", value: "977", label: "Nepal (+977)" },
//   { code: "NL", value: "31", label: "Netherlands (+31)" },
//   { code: "NZ", value: "64", label: "New Zealand (+64)" },
//   { code: "NG", value: "234", label: "Nigeria (+234)" },
//   { code: "NO", value: "47", label: "Norway (+47)" },
//   { code: "OM", value: "968", label: "Oman (+968)" },
//   { code: "PK", value: "92", label: "Pakistan (+92)" },
//   { code: "PA", value: "507", label: "Panama (+507)" },
//   { code: "PE", value: "51", label: "Peru (+51)" },
//   { code: "PH", value: "63", label: "Philippines (+63)" },
//   { code: "PL", value: "48", label: "Poland (+48)" },
//   { code: "PT", value: "351", label: "Portugal (+351)" },
//   { code: "QA", value: "974", label: "Qatar (+974)" },
//   { code: "RO", value: "40", label: "Romania (+40)" },
//   { code: "RU", value: "7", label: "Russia (+7)" },
//   { code: "SA", value: "966", label: "Saudi Arabia (+966)" },
//   { code: "SG", value: "65", label: "Singapore (+65)" },
//   { code: "ZA", value: "27", label: "South Africa (+27)" },
//   { code: "ES", value: "34", label: "Spain (+34)" },
//   { code: "LK", value: "94", label: "Sri Lanka (+94)" },
//   { code: "SE", value: "46", label: "Sweden (+46)" },
//   { code: "CH", value: "41", label: "Switzerland (+41)" },
//   { code: "TW", value: "886", label: "Taiwan (+886)" },
//   { code: "TZ", value: "255", label: "Tanzania (+255)" },
//   { code: "TH", value: "66", label: "Thailand (+66)" },
//   { code: "TR", value: "90", label: "Turkey (+90)" },
//   { code: "UG", value: "256", label: "Uganda (+256)" },
//   { code: "UA", value: "380", label: "Ukraine (+380)" },
//   { code: "AE", value: "971", label: "United Arab Emirates (+971)" },
//   { code: "GB", value: "44", label: "United Kingdom (+44)" },
//   { code: "US", value: "+1", label: "United States (+1)" },
//   { code: "UY", value: "598", label: "Uruguay (+598)" },
//   { code: "VE", value: "58", label: "Venezuela (+58)" },
//   { code: "VN", value: "84", label: "Vietnam (+84)" },
//   { code: "ZM", value: "260", label: "Zambia (+260)" },
//   { code: "ZW", value: "263", label: "Zimbabwe (+263)" },
// ];

// const trustCards = [
//   { img: "1.png", title: "Best Price", desc: "Competitive rates" },
//   { img: "2.png", title: "Quality Service", desc: "Premium solutions" },
//   { img: "3.png", title: "24/7 Support", desc: "Always available" },
//   { img: "4.png", title: "100% Satisfaction", desc: "Guaranteed results" },
//   { img: "5.png", title: "4.9 ⭐ Rating", desc: "500+ Reviews" },
//   { img: "6.png", title: "Award Winning", desc: "Industry recognition" },
// ];

// const chooseUsCards = [
//   { img: "7.png", title: "Work at Your Time Zone", text: "We adapt to your schedule, ensuring seamless collaboration across continents." },
//   { img: "8.png", title: "Easy & Timely Communication", text: "Clear, responsive communication through your preferred channels." },
//   { img: "9.png", title: "24 Hours Support Available", text: "Round-the-clock assistance to keep your projects running smoothly." },
// ];

// const contactCards = [
//   { img: "call.png", label: "CALL US", value: "+91 9390683154", href: "tel:+919390683154" },
//   { img: "whatsap.png", label: "WHATSAPP", value: "+91 9390683154", href: "https://wa.me/919390683154?text=Hi%20mTouch%20Labs", external: true },
//   { img: "mail.png", label: "EMAIL", value: "contact@mtouchlabs.com", href: "mailto:contact@mtouchlabs.com" },
//   { img: "career.png", label: "CAREERS", value: "careers@mtouchlabs.com", href: "mailto:careers@mtouchlabs.com" },
// ];

// const offices = [
//   { hq: true, location: "India - Hyderabad Office", company: "mTouch Labs Private Limited", address: "#514, Manjeera Trinity Corporate, JNTU - Hitech City Road, Kukatpally, Hyderabad - 500072", landmark: "Landmark: Beside Manjeera Mall", mapUrl: "https://www.google.com/maps/place/mTouch+Labs+%E2%80%93+Software+Development+Company+in+Hyderabad/@17.489222,78.3927245,946m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv" },
//   { location: "India - Bangalore Office", company: "mTouch Labs Private Limited", address: "101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076", mapUrl: "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd/@12.8905936,77.6054813,966m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae159f6a3c1bd1:0xb1454d20e410b70e!8m2!3d12.8905936!4d77.6054813!16s%2Fg%2F11vbldn91x" },
//   { location: "USA - USA Office", company: "mTouch Labs", address: "1111b South Governors Avenue, Suite 48193, Dover, Delaware (DE)-19904, United States", mapUrl: "https://www.google.com/maps/place/mTouch+AI+Labs+%E2%80%93+Software+Development+Company+in+USA/@39.1395519,-75.5254408,675m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c763817472e2c3:0x102e4f6c800dacbd!8m2!3d39.1395519!4d-75.5254408!16s%2Fg%2F11ymhl_km1" },
// ];

// const faqs = [
//   { q: "How can I contact mTouch Labs for project inquiries?", a: "You can contact mTouch Labs through the website contact form, email, phone, or WhatsApp to discuss web and mobile app development requirements. The team responds quickly to business inquiries and provides consultation based on project needs.", active: true },
//   { q: "Where is mTouch Labs located in India?", a: "mTouch Labs has its headquarters in Hyderabad, India, with an additional office in Bangalore. The company also serves global clients through its USA office, making it easy for businesses worldwide to connect and collaborate." },
//   { q: "Can I schedule a consultation with the mTouch Labs team?", a: "Yes, businesses can schedule a consultation by submitting the contact form or reaching out via phone or email. The team discusses project requirements, timelines, and technology solutions to help plan the right development strategy." },
//   { q: "What services can I inquire about through the contact page?", a: "You can connect with mTouch Labs for services like mobile app development, web development, digital marketing, UI/UX design, and custom software solutions. The contact page allows businesses to select their service interest and send detailed requirements." },
//   { q: "Does mTouch Labs provide global support for clients?", a: "Yes, mTouch Labs works with clients worldwide and offers flexible communication, time-zone support, and 24/7 assistance. Businesses from different countries can easily reach the team and collaborate on development projects." },
// ];

// const LocationIcon = () => (
//   <svg className="new_contact_location_icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
// );

// const DropdownIcon = () => (
//   <svg className="new_contact_dropdown_icon" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
// );

// export default function ContactUsPage() {
//   return (
//     <>
//       <link href="/css/contact.css" rel="stylesheet" />

//       {/* ===== HERO SECTION ===== */}
//       <section className="contact-hero">
//         <div className="contact-hero-overlay"></div>
//         <div className="contact-hero-content-wrapper">
//           <div className="contact-hero-text">
//             <h3>Let&apos;s Build <b>Something</b><br /><span className="contact-hero-highlight">Extraordinary</span> Together</h3>
//             <p>We are a Professional Web Development &amp; Mobile App Development Company</p>
//           </div>
//           <div className="contact-hero-img-space"></div>
//         </div>
//       </section>

//       <div className="new_contact_body">
//         <div className="new_contact_container">
//           {/* Form */}
//           <div className="new_contact_form_section">
//             <h2 className="new_contact_heading">Send Us a Message</h2>
//             <p className="new_contact_subheading">Fill out the form below and we&apos;ll get back to you shortly.</p>
//             <form id="contactForm" method="post">
//               <div className="new_contact_form_group">
//                 <div className="new_contact_input_wrapper">
//                   <i className="fa fa-user input-icon new_contact_input_icon"></i>
//                   <input type="text" className="new_contact_input" placeholder="Full Name" name="name" required />
//                 </div>
//               </div>
//               <div className="new_contact_form_group">
//                 <div className="new_contact_input_wrapper">
//                   <i className="fa fa-envelope input-icon new_contact_input_icon"></i>
//                   <input type="email" className="new_contact_input" placeholder="Email Address" name="email" required />
//                 </div>
//               </div>
//               <div className="new_contact_form_group">
//                 <div className="new_contact_phone_wrapper">
//                   <div className="new_contact_country_code">
//                     <select className="new_contact_select" name="countryCode" id="countryCode" required>
//                       {countryCodes.map((c, i) => (
//                         <option key={`${c.code}-${i}`} value={c.value}>{c.label}</option>
//                       ))}
//                     </select>
//                     <DropdownIcon />
//                   </div>
//                   <div className="new_contact_input_wrapper new_contact_phone_input">
//                     <i className="fa fa-mobile input-icon new_contact_input_icon"></i>
//                     <input type="text" className="new_contact_input" placeholder="Phone Number" name="mobile" required inputMode="numeric" pattern="\d*" />
//                   </div>
//                 </div>
//               </div>
//               <div className="new_contact_form_group">
//                 <div className="new_contact_input_wrapper">
//                   <select className="new_contact_input new_contact_interest_select" name="interest">
//                     <option value="">Interested In</option>
//                     <option value="Web Design">Web Design</option>
//                     <option value="Graphic Design">Graphic Design</option>
//                     <option value="App Development">App Development</option>
//                     <option value="Digital Marketing">Digital Marketing</option>
//                     <option value="Business Development">Business Development</option>
//                     <option value="Job Requirements">Job Requirements</option>
//                     <option value="Other">Other...</option>
//                   </select>
//                   <DropdownIcon />
//                 </div>
//               </div>
//               <div className="new_contact_form_group">
//                 <div className="new_contact_textarea_wrapper">
//                   <textarea className="new_contact_textarea" name="message" required placeholder="Your Message" maxLength={1000}></textarea>
//                   <span className="new_contact_char_count">0/1000</span>
//                 </div>
//               </div>
//               <div className="new_contact_checkbox_wrapper">
//                 <input type="checkbox" className="new_contact_checkbox" id="terms" required />
//                 <label htmlFor="terms" className="new_contact_checkbox_label">I agree to the <a href="/terms-and-conditions" className="new_contact_link">Terms &amp; Conditions</a> of mTouch Labs</label>
//               </div>
//               <button type="submit" className="new_contact_submit_btn">
//                 Send Inquiry
//                 <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
//               </button>
//               <div className="new_contact_privacy_note">
//                 <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
//                 We hate spam, and we respect your privacy.
//               </div>
//             </form>
//           </div>

//           {/* Offices */}
//           <div className="new_contact_offices_section">
//             <div className="new_contact_offices_header">
//               <h2 className="new_contact_offices_title">Our <span className="new_contact_offices_title_accent">Offices</span></h2>
//             </div>
//             {offices.map((o, i) => (
//               <div className="new_contact_office_card" key={i}>
//                 {o.hq && <span className="new_contact_hq_badge">HQ</span>}
//                 <h3 className="new_contact_office_location">{o.location}</h3>
//                 <p className="new_contact_office_company">{o.company}</p>
//                 <p className="new_contact_office_address">{o.address}</p>
//                 {o.landmark && <p className="new_contact_office_landmark">{o.landmark}</p>}
//                 <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="new_contact_directions_btn"><LocationIcon />Get Directions</a>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Trust + Choose Us */}
//         <div className="new_contact_CLIENT_wrapper">
//           <div className="new_contact_CLIENT_container">
//             <section className="new_contact_CLIENT_section">
//               <h2 className="new_contact_CLIENT_section_title">Why <span className="new_contact_CLIENT_section_title_highlight">Clients Trust Us</span></h2>
//               <div className="new_contact_CLIENT_cards_grid">
//                 {trustCards.map((c, i) => (
//                   <div className="new_contact_CLIENT_card" key={i}>
//                     <div className="new_contact_CLIENT_card_icon">
//                       <img className="new_contact_CLIENT_card_icon_img" src={`/images/contact/${c.img}`} alt={c.title} />
//                     </div>
//                     <h3 className="new_contact_CLIENT_card_title">{c.title}</h3>
//                     <p className="new_contact_CLIENT_card_description">{c.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//             <section className="new_contact_CLIENT_section">
//               <h2 className="new_contact_CLIENT_section_title">Why <span className="new_contact_CLIENT_section_title_highlight">Choose Us</span></h2>
//               <p className="new_contact_CLIENT_subtitle">We&apos;re committed to delivering excellence with every project</p>
//               <div className="new_contact_CLIENT_large_cards_grid">
//                 {chooseUsCards.map((c, i) => (
//                   <div className="new_contact_CLIENT_large_card" key={i}>
//                     <div className="new_contact_CLIENT_large_card_icon">
//                       <img className="new_contact_CLIENT_large_card_icon_img" src={`/images/contact/${c.img}`} alt={c.title} />
//                     </div>
//                     <h3 className="new_contact_CLIENT_large_card_title">{c.title}</h3>
//                     <p className="new_contact_CLIENT_large_card_description">{c.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>

//         {/* Contact Info Cards */}
//         <div className="new_contact_last_wrapper">
//           <div className="new_contact_last_container">
//             <div className="new_contact_last_left">
//               <div className="new_contact_last_image_wrapper">
//                 <img src="/images/contact/woman.png" alt="Professional Woman" className="new_contact_last_image" />
//               </div>
//             </div>
//             <div className="new_contact_last_right">
//               {contactCards.map((c, i) => (
//                 <a className="new_contact_last_card_link" href={c.href} key={i} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
//                   <div className="new_contact_last_card">
//                     <div className="new_contact_last_icon_wrapper">
//                       <img src={`/images/contact/${c.img}`} alt={c.label} className="new_contact_last_icon" />
//                     </div>
//                     <div className="new_contact_last_info">
//                       <p className="new_contact_last_label">{c.label}</p>
//                       <p className="new_contact_last_value">{c.value}</p>
//                     </div>
//                   </div>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ */}
//       <div className="contact_faq_wrapper">
//         <div className="_faq_container">
//           <div className="_faq_header">
//             <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
//             <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
//           </div>
//           <div className="_faq_list">
//             {faqs.map((f, i) => (
//               <div className={`_faq_item${f.active ? " active glow" : ""}`} key={i}>
//                 <button className="_faq_question"><span>{f.q}</span><span className="_faq_icon">+</span></button>
//                 <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <script dangerouslySetInnerHTML={{ __html: `
//         (function() {
//           function init() {
//             var form = document.getElementById('contactForm');
//             var ta = document.querySelector('.new_contact_textarea');
//             var cc = document.querySelector('.new_contact_char_count');
//             if (!form || !ta) return setTimeout(init, 300);
//             ta.addEventListener('input', function() { cc.textContent = this.value.length + '/1000'; });
//             var ph = document.querySelector('input[name="mobile"]');
//             if (ph) ph.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });
//             var sel = document.querySelector('.new_contact_interest_select');
//             if (sel) sel.addEventListener('change', function() { this.classList.toggle('new_contact_select_active', !!this.value); });
//             form.addEventListener('submit', function(e) {
//               e.preventDefault();
//               var fd = new FormData(form);
//               var d = Object.fromEntries(fd.entries());
//               fetch('/api/contact', {
//                 method: 'POST', headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ name: d.name, email: d.email, countryCode: d.countryCode, mobile: d.mobile, interest: d.interest, message: d.message })
//               }).then(function(r) { if (r.ok) window.location.href = '/thank-you'; }).catch(function(e) { console.error(e); });
//             });
//           }
//           init();

//           function initFaq() {
//             var items = document.querySelectorAll('._faq_item');
//             if (!items.length) return setTimeout(initFaq, 300);
//             items.forEach(function(item) {
//               item.querySelector('._faq_question').addEventListener('click', function() {
//                 var isActive = item.classList.contains('active');
//                 items.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
//                 if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
//               });
//             });
//           }
//           initFaq();
//         })();
//       `}} />
//     </>
//   );
// }

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile app development company in India | Web development company",
  description: "Get in touch with our web development company and mobile app development company in India and transform your idea into engaging applications",
  keywords: "Mobile app development company in India, Web development company",
  alternates: { canonical: "/contact-us" },
};

const countryCodes = [
  { code: "IN", value: "91", label: "India (+91)" },
  { code: "DZ", value: "213", label: "Algeria (+213)" },
  { code: "AD", value: "376", label: "Andorra (+376)" },
  { code: "AO", value: "244", label: "Angola (+244)" },
  { code: "AI", value: "1264", label: "Anguilla (+1264)" },
  { code: "AG", value: "1268", label: "Antigua &amp; Barbuda (+1268)" },
  { code: "AR", value: "54", label: "Argentina (+54)" },
  { code: "AM", value: "374", label: "Armenia (+374)" },
  { code: "AW", value: "297", label: "Aruba (+297)" },
  { code: "AU", value: "61", label: "Australia (+61)" },
  { code: "AT", value: "43", label: "Austria (+43)" },
  { code: "AZ", value: "994", label: "Azerbaijan (+994)" },
  { code: "BS", value: "1242", label: "Bahamas (+1242)" },
  { code: "BH", value: "973", label: "Bahrain (+973)" },
  { code: "BD", value: "880", label: "Bangladesh (+880)" },
  { code: "BB", value: "1246", label: "Barbados (+1246)" },
  { code: "BY", value: "375", label: "Belarus (+375)" },
  { code: "BE", value: "32", label: "Belgium (+32)" },
  { code: "BZ", value: "501", label: "Belize (+501)" },
  { code: "BR", value: "55", label: "Brazil (+55)" },
  { code: "BG", value: "359", label: "Bulgaria (+359)" },
  { code: "KH", value: "855", label: "Cambodia (+855)" },
  { code: "CM", value: "237", label: "Cameroon (+237)" },
  { code: "CA", value: "1", label: "Canada (+1)" },
  { code: "CL", value: "56", label: "Chile (+56)" },
  { code: "CN", value: "86", label: "China (+86)" },
  { code: "CO", value: "57", label: "Colombia (+57)" },
  { code: "CR", value: "506", label: "Costa Rica (+506)" },
  { code: "HR", value: "385", label: "Croatia (+385)" },
  { code: "CY", value: "357", label: "Cyprus (+357)" },
  { code: "CZ", value: "42", label: "Czech Republic (+42)" },
  { code: "DK", value: "45", label: "Denmark (+45)" },
  { code: "EC", value: "593", label: "Ecuador (+593)" },
  { code: "EG", value: "20", label: "Egypt (+20)" },
  { code: "EE", value: "372", label: "Estonia (+372)" },
  { code: "ET", value: "251", label: "Ethiopia (+251)" },
  { code: "FI", value: "358", label: "Finland (+358)" },
  { code: "FR", value: "33", label: "France (+33)" },
  { code: "DE", value: "49", label: "Germany (+49)" },
  { code: "GH", value: "233", label: "Ghana (+233)" },
  { code: "GR", value: "30", label: "Greece (+30)" },
  { code: "GT", value: "502", label: "Guatemala (+502)" },
  { code: "HK", value: "852", label: "Hong Kong (+852)" },
  { code: "HU", value: "36", label: "Hungary (+36)" },
  { code: "IS", value: "354", label: "Iceland (+354)" },
  { code: "ID", value: "62", label: "Indonesia (+62)" },
  { code: "IR", value: "98", label: "Iran (+98)" },
  { code: "IQ", value: "964", label: "Iraq (+964)" },
  { code: "IE", value: "353", label: "Ireland (+353)" },
  { code: "IL", value: "972", label: "Israel (+972)" },
  { code: "IT", value: "39", label: "Italy (+39)" },
  { code: "JM", value: "1876", label: "Jamaica (+1876)" },
  { code: "JP", value: "81", label: "Japan (+81)" },
  { code: "JO", value: "962", label: "Jordan (+962)" },
  { code: "KZ", value: "7", label: "Kazakhstan (+7)" },
  { code: "KE", value: "254", label: "Kenya (+254)" },
  { code: "KR", value: "82", label: "Korea South (+82)" },
  { code: "KW", value: "965", label: "Kuwait (+965)" },
  { code: "LV", value: "371", label: "Latvia (+371)" },
  { code: "LB", value: "961", label: "Lebanon (+961)" },
  { code: "LY", value: "218", label: "Libya (+218)" },
  { code: "LT", value: "370", label: "Lithuania (+370)" },
  { code: "LU", value: "352", label: "Luxembourg (+352)" },
  { code: "MY", value: "60", label: "Malaysia (+60)" },
  { code: "MV", value: "960", label: "Maldives (+960)" },
  { code: "MT", value: "356", label: "Malta (+356)" },
  { code: "MX", value: "52", label: "Mexico (+52)" },
  { code: "MA", value: "212", label: "Morocco (+212)" },
  { code: "MM", value: "95", label: "Myanmar (+95)" },
  { code: "NP", value: "977", label: "Nepal (+977)" },
  { code: "NL", value: "31", label: "Netherlands (+31)" },
  { code: "NZ", value: "64", label: "New Zealand (+64)" },
  { code: "NG", value: "234", label: "Nigeria (+234)" },
  { code: "NO", value: "47", label: "Norway (+47)" },
  { code: "OM", value: "968", label: "Oman (+968)" },
  { code: "PK", value: "92", label: "Pakistan (+92)" },
  { code: "PA", value: "507", label: "Panama (+507)" },
  { code: "PE", value: "51", label: "Peru (+51)" },
  { code: "PH", value: "63", label: "Philippines (+63)" },
  { code: "PL", value: "48", label: "Poland (+48)" },
  { code: "PT", value: "351", label: "Portugal (+351)" },
  { code: "QA", value: "974", label: "Qatar (+974)" },
  { code: "RO", value: "40", label: "Romania (+40)" },
  { code: "RU", value: "7", label: "Russia (+7)" },
  { code: "SA", value: "966", label: "Saudi Arabia (+966)" },
  { code: "SG", value: "65", label: "Singapore (+65)" },
  { code: "ZA", value: "27", label: "South Africa (+27)" },
  { code: "ES", value: "34", label: "Spain (+34)" },
  { code: "LK", value: "94", label: "Sri Lanka (+94)" },
  { code: "SE", value: "46", label: "Sweden (+46)" },
  { code: "CH", value: "41", label: "Switzerland (+41)" },
  { code: "TW", value: "886", label: "Taiwan (+886)" },
  { code: "TZ", value: "255", label: "Tanzania (+255)" },
  { code: "TH", value: "66", label: "Thailand (+66)" },
  { code: "TR", value: "90", label: "Turkey (+90)" },
  { code: "UG", value: "256", label: "Uganda (+256)" },
  { code: "UA", value: "380", label: "Ukraine (+380)" },
  { code: "AE", value: "971", label: "United Arab Emirates (+971)" },
  { code: "GB", value: "44", label: "United Kingdom (+44)" },
  { code: "US", value: "+1", label: "United States (+1)" },
  { code: "UY", value: "598", label: "Uruguay (+598)" },
  { code: "VE", value: "58", label: "Venezuela (+58)" },
  { code: "VN", value: "84", label: "Vietnam (+84)" },
  { code: "ZM", value: "260", label: "Zambia (+260)" },
  { code: "ZW", value: "263", label: "Zimbabwe (+263)" },
];

const trustCards = [
  { img: "1.png", title: "Best Price", desc: "Competitive rates" },
  { img: "2.png", title: "Quality Service", desc: "Premium solutions" },
  { img: "3.png", title: "24/7 Support", desc: "Always available" },
  { img: "4.png", title: "100% Satisfaction", desc: "Guaranteed results" },
  { img: "5.png", title: "4.9 ⭐ Rating", desc: "500+ Reviews" },
  { img: "6.png", title: "Award Winning", desc: "Industry recognition" },
];

const chooseUsCards = [
  { img: "7.png", title: "Work at Your Time Zone", text: "We adapt to your schedule, ensuring seamless collaboration across continents." },
  { img: "8.png", title: "Easy & Timely Communication", text: "Clear, responsive communication through your preferred channels." },
  { img: "9.png", title: "24 Hours Support Available", text: "Round-the-clock assistance to keep your projects running smoothly." },
];

const contactCards = [
  { img: "call.png", label: "CALL US", value: "+91 9390683154", href: "tel:+919390683154" },
  { img: "whatsap.png", label: "WHATSAPP", value: "+91 9390683154", href: "https://wa.me/919390683154?text=Hi%20mTouch%20Labs", external: true },
  { img: "mail.png", label: "EMAIL", value: "contact@mtouchlabs.com", href: "mailto:contact@mtouchlabs.com" },
  { img: "career.png", label: "CAREERS", value: "careers@mtouchlabs.com", href: "mailto:careers@mtouchlabs.com" },
];

const offices = [
  { hq: true, location: "India - Hyderabad Office", company: "mTouch Labs Private Limited", address: "#514, Manjeera Trinity Corporate, JNTU - Hitech City Road, Kukatpally, Hyderabad - 500072", landmark: "Landmark: Beside Manjeera Mall", mapUrl: "https://www.google.com/maps/place/mTouch+Labs+%E2%80%93+Software+Development+Company+in+Hyderabad/@17.489222,78.3927245,946m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv" },
  { location: "India - Bangalore Office", company: "mTouch Labs Private Limited", address: "101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076", mapUrl: "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd/@12.8905936,77.6054813,966m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae159f6a3c1bd1:0xb1454d20e410b70e!8m2!3d12.8905936!4d77.6054813!16s%2Fg%2F11vbldn91x" },
  { location: "USA - USA Office", company: "mTouch Labs", address: "1111b South Governors Avenue, Suite 48193, Dover, Delaware (DE)-19904, United States", mapUrl: "https://www.google.com/maps/place/mTouch+AI+Labs+%E2%80%93+Software+Development+Company+in+USA/@39.1395519,-75.5254408,675m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c763817472e2c3:0x102e4f6c800dacbd!8m2!3d39.1395519!4d-75.5254408!16s%2Fg%2F11ymhl_km1" },
];

const faqs = [
  { q: "How can I contact mTouch Labs for project inquiries?", a: "You can contact mTouch Labs through the website contact form, email, phone, or WhatsApp to discuss web and mobile app development requirements. The team responds quickly to business inquiries and provides consultation based on project needs.", active: true },
  { q: "Where is mTouch Labs located in India?", a: "mTouch Labs has its headquarters in Hyderabad, India, with an additional office in Bangalore. The company also serves global clients through its USA office, making it easy for businesses worldwide to connect and collaborate." },
  { q: "Can I schedule a consultation with the mTouch Labs team?", a: "Yes, businesses can schedule a consultation by submitting the contact form or reaching out via phone or email. The team discusses project requirements, timelines, and technology solutions to help plan the right development strategy." },
  { q: "What services can I inquire about through the contact page?", a: "You can connect with mTouch Labs for services like mobile app development, web development, digital marketing, UI/UX design, and custom software solutions. The contact page allows businesses to select their service interest and send detailed requirements." },
  { q: "Does mTouch Labs provide global support for clients?", a: "Yes, mTouch Labs works with clients worldwide and offers flexible communication, time-zone support, and 24/7 assistance. Businesses from different countries can easily reach the team and collaborate on development projects." },
];

const LocationIcon = () => (
  <svg className="new_contact_location_icon" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
);

const DropdownIcon = () => (
  <svg className="new_contact_dropdown_icon" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
);

export default function ContactUsPage() {
  return (
    <>
      <link href="/css/contact.css" rel="stylesheet" />

      {/* ===== HERO SECTION ===== */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content-wrapper">
          <div className="contact-hero-text">
            <h3>Let&apos;s Build <b>Something</b><br /><span className="contact-hero-highlight">Extraordinary</span> Together</h3>
            <p>We are a Professional Web Development &amp; Mobile App Development Company</p>
          </div>
          <div className="contact-hero-img-space"></div>
        </div>
      </section>

      <div className="new_contact_body">
        <div className="new_contact_container">
          {/* Form */}
          <div className="new_contact_form_section">
            <h2 className="new_contact_heading">Send Us a Message</h2>
            <p className="new_contact_subheading">Fill out the form below and we&apos;ll get back to you shortly.</p>
            <form id="contactForm" method="post">
              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <i className="fa fa-user input-icon new_contact_input_icon"></i>
                  <input type="text" className="new_contact_input" placeholder="Full Name" name="name" required />
                </div>
              </div>
              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <i className="fa fa-envelope input-icon new_contact_input_icon"></i>
                  <input type="email" className="new_contact_input" placeholder="Email Address" name="email" required />
                </div>
              </div>
              <div className="new_contact_form_group">
                <div className="new_contact_phone_wrapper">
                  <div className="new_contact_country_code">
                    <select className="new_contact_select" name="countryCode" id="countryCode" required>
                      {countryCodes.map((c, i) => (
                        <option key={`${c.code}-${i}`} value={c.value}>{c.label}</option>
                      ))}
                    </select>
                    <DropdownIcon />
                  </div>
                  <div className="new_contact_input_wrapper new_contact_phone_input">
                    <i className="fa fa-mobile input-icon new_contact_input_icon"></i>
                    <input type="text" className="new_contact_input" placeholder="Phone Number" name="mobile" required inputMode="numeric" pattern="\d*" />
                  </div>
                </div>
              </div>
              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <select className="new_contact_input new_contact_interest_select" name="interest">
                    <option value="">Interested In</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Job Requirements">Job Requirements</option>
                    <option value="Other">Other...</option>
                  </select>
                  <DropdownIcon />
                </div>
              </div>
              <div className="new_contact_form_group">
                <div className="new_contact_textarea_wrapper">
                  <textarea className="new_contact_textarea" name="message" required placeholder="Your Message" maxLength={1000}></textarea>
                  <span className="new_contact_char_count">0/1000</span>
                </div>
              </div>
              <div className="new_contact_checkbox_wrapper">
                <input type="checkbox" className="new_contact_checkbox" id="terms" required />
                <label htmlFor="terms" className="new_contact_checkbox_label">I agree to the <a href="/terms-and-conditions" className="new_contact_link">Terms &amp; Conditions</a> of mTouch Labs</label>
              </div>
              <button type="submit" className="new_contact_submit_btn">
                Send Inquiry
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <div className="new_contact_privacy_note">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>
                We hate spam, and we respect your privacy.
              </div>
            </form>
          </div>

          {/* Offices */}
          <div className="new_contact_offices_section">
            <div className="new_contact_offices_header">
              <h2 className="new_contact_offices_title">Our <span className="new_contact_offices_title_accent">Offices</span></h2>
            </div>
            {offices.map((o, i) => (
              <div className="new_contact_office_card" key={i}>
                {o.hq && <span className="new_contact_hq_badge">HQ</span>}
                <h3 className="new_contact_office_location">{o.location}</h3>
                <p className="new_contact_office_company">{o.company}</p>
                <p className="new_contact_office_address">{o.address}</p>
                {o.landmark && <p className="new_contact_office_landmark">{o.landmark}</p>}
                <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="new_contact_directions_btn"><LocationIcon />Get Directions</a>
              </div>
            ))}
          </div>
        </div>

        {/* Trust + Choose Us */}
        <div className="new_contact_CLIENT_wrapper">
          <div className="new_contact_CLIENT_container">
            <section className="new_contact_CLIENT_section">
              <h2 className="new_contact_CLIENT_section_title">Why <span className="new_contact_CLIENT_section_title_highlight">Clients Trust Us</span></h2>
              <div className="new_contact_CLIENT_cards_grid">
                {trustCards.map((c, i) => (
                  <div className="new_contact_CLIENT_card" key={i}>
                    <div className="new_contact_CLIENT_card_icon">
                      <img className="new_contact_CLIENT_card_icon_img" src={`/images/contact/${c.img}`} alt={c.title} />
                    </div>
                    <h3 className="new_contact_CLIENT_card_title">{c.title}</h3>
                    <p className="new_contact_CLIENT_card_description">{c.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="new_contact_CLIENT_section">
              <h2 className="new_contact_CLIENT_section_title">Why <span className="new_contact_CLIENT_section_title_highlight">Choose Us</span></h2>
              <p className="new_contact_CLIENT_subtitle">We&apos;re committed to delivering excellence with every project</p>
              <div className="new_contact_CLIENT_large_cards_grid">
                {chooseUsCards.map((c, i) => (
                  <div className="new_contact_CLIENT_large_card" key={i}>
                    <div className="new_contact_CLIENT_large_card_icon">
                      <img className="new_contact_CLIENT_large_card_icon_img" src={`/images/contact/${c.img}`} alt={c.title} />
                    </div>
                    <h3 className="new_contact_CLIENT_large_card_title">{c.title}</h3>
                    <p className="new_contact_CLIENT_large_card_description">{c.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="new_contact_last_wrapper">
          <div className="new_contact_last_container">
            <div className="new_contact_last_left">
              <div className="new_contact_last_image_wrapper">
                <img src="/images/contact/woman.png" alt="Professional Woman" className="new_contact_last_image" />
              </div>
            </div>
            <div className="new_contact_last_right">
              {contactCards.map((c, i) => (
                <a className="new_contact_last_card_link" href={c.href} key={i} {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <div className="new_contact_last_card">
                    <div className="new_contact_last_icon_wrapper">
                      <img src={`/images/contact/${c.img}`} alt={c.label} className="new_contact_last_icon" />
                    </div>
                    <div className="new_contact_last_info">
                      <p className="new_contact_last_label">{c.label}</p>
                      <p className="new_contact_last_value">{c.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="contact_faq_wrapper">
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
          </div>
          <div className="_faq_list">
            {faqs.map((f, i) => (
              <div className={`_faq_item${f.active ? " active glow" : ""}`} key={i}>
                <button className="_faq_question"><span>{f.q}</span><span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
                <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function init() {
            var form = document.getElementById('contactForm');
            var ta = document.querySelector('.new_contact_textarea');
            var cc = document.querySelector('.new_contact_char_count');
            if (!form || !ta) return setTimeout(init, 300);
            ta.addEventListener('input', function() { cc.textContent = this.value.length + '/1000'; });
            var ph = document.querySelector('input[name="mobile"]');
            if (ph) ph.addEventListener('input', function() { this.value = this.value.replace(/[^0-9]/g, ''); });
            var sel = document.querySelector('.new_contact_interest_select');
            if (sel) sel.addEventListener('change', function() { this.classList.toggle('new_contact_select_active', !!this.value); });
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              var fd = new FormData(form);
              var d = Object.fromEntries(fd.entries());
              fetch('/api/contact', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: d.name, email: d.email, countryCode: d.countryCode, mobile: d.mobile, interest: d.interest, message: d.message })
              }).then(function(r) { if (r.ok) window.location.href = '/thank-you'; }).catch(function(e) { console.error(e); });
            });
          }
          init();

          function initFaq() {
            var items = document.querySelectorAll('._faq_item');
            if (!items.length) return setTimeout(initFaq, 300);
            items.forEach(function(item) {
              item.querySelector('._faq_question').addEventListener('click', function() {
                var isActive = item.classList.contains('active');
                items.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
                if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
              });
            });
          }
          initFaq();
        })();
      `}} />
    </>
  );
}