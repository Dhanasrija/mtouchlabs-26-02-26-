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
//   {
//     hq: true,
//     location: "India - Hyderabad Office",
//     company: "mTouch Labs Private Limited",
//     address:
//       "#514, Manjeera Trinity Corporate, JNTU - Hitech City Road, Kukatpally, Hyderabad - 500072",
//     landmark: "Landmark: Beside Manjeera Mall",
//     mapUrl:
//       "https://www.google.com/maps/place/mTouch+Labs+%E2%80%93+Software+Development+Company+in+Hyderabad/@17.489222,78.3927245,946m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bcb90cec63e97d9:0xb045c9dc22129055!8m2!3d17.489222!4d78.3927245!16s%2Fg%2F11b8zhlwcv",
//     email: "contact@mtouchlabs.com",
//     phone: "+91 9390683154",
//     flag: "/images/flags/india.png"
//   },
//   {
//     location: "India - Bangalore Office",
//     company: "mTouch Labs Private Limited",
//     address:
//       "101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076",
//     mapUrl:
//       "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd/@12.8905936,77.6054813,966m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae159f6a3c1bd1:0xb1454d20e410b70e!8m2!3d12.8905936!4d77.6054813!16s%2Fg%2F11vbldn91x",
//     email: "contact@mtouchlabs.com",
//     phone: "+91 9390683154",
//     flag: "/images/flags/india.png"
//   },
//   {
//     location: "USA - USA Office",
//     company: "mTouch Labs",
//     address:
//       "1111b South Governors Avenue, Suite 48193, Dover, Delaware (DE)-19904, United States",
//     mapUrl:
//       "https://www.google.com/maps/place/mTouch+AI+Labs+%E2%80%93+Software+Development+Company+in+USA/@39.1395519,-75.5254408,675m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c763817472e2c3:0x102e4f6c800dacbd!8m2!3d39.1395519!4d-75.5254408!16s%2Fg%2F11ymhl_km1",
//     email: "contact@mtouchlabs.com",
//     phone: "+1 (551) 222-0070",
//     flag: "/images/flags/usa.png"
//   }
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
// <div className="new_contact_office_contact_info">
//   <p className="new_contact_office_phone">
//     <i className="fas fa-phone-alt"></i>&nbsp;
//     <a href={`tel:${o.phone.replace(/\s/g, '')}`} style={{ color: '#3E8CFB', textDecoration: 'none' }}>{o.phone}</a>
//   </p>
  
// </div>
// <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="new_contact_directions_btn"><LocationIcon />Get Directions</a>              </div>
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
//                 <button className="_faq_question"><span>{f.q}</span><span className="_faq_chevron" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#08182b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg></span></button>
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
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact mTouch Labs | Enterprise Software & SaaS Consultation",
  description: "Request an enterprise consultation with mTouch Labs. Connect with our solution architects in Hyderabad, Bangalore, and USA for SaaS, cloud, and AI solutions.",
  keywords: ["contact mTouch Labs","enterprise software consultation","SaaS development company contact","software development company Hyderabad","custom software consultation","hire software developers India","enterprise digital transformation","cloud engineering consultation","mobile app development inquiry","mTouch Labs offices"].join(", "),
  alternates: { canonical: "https://www.mtouchlabs.com/contact-us" },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" as const, "max-video-preview": -1 },
  openGraph: { title: "Contact mTouch Labs | Enterprise Software & SaaS Experts", description: "Connect with mTouch Labs for enterprise software, SaaS platforms, cloud architecture, and AI-powered digital transformation solutions.", url: "https://www.mtouchlabs.com/contact-us", siteName: "mTouch Labs", type: "website", locale: "en_US", images: [{ url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png", width: 1200, height: 630, alt: "Contact mTouch Labs" }] },
  twitter: { card: "summary_large_image", title: "Contact mTouch Labs | Enterprise Software & SaaS Experts", description: "Speak with our enterprise solution architects. Offices in Hyderabad, Bangalore & USA.", images: [{ url: "https://mtouchlabs.com/images/web-and-mobile-app-development.png", alt: "Contact mTouch Labs" }] },
};

const contactPageSchema = { "@context": "https://schema.org", "@type": "ContactPage", name: "Contact mTouch Labs", description: "Request an enterprise consultation with mTouch Labs for SaaS, cloud, AI, and custom software development.", url: "https://www.mtouchlabs.com/contact-us", mainEntity: { "@type": "Organization", name: "mTouch Labs", url: "https://mtouchlabs.com", logo: "https://mtouchlabs.com/images/logo.png", contactPoint: [{ "@type": "ContactPoint", telephone: "+91-9390683154", contactType: "sales", areaServed: ["IN","US","AE","GB"], availableLanguage: ["English","Hindi","Telugu"] },{ "@type": "ContactPoint", telephone: "+1-551-222-0070", contactType: "sales", areaServed: "US", availableLanguage: "English" }], address: [{ "@type": "PostalAddress", name: "Hyderabad Head Office", streetAddress: "#514, Manjeera Trinity Corporate, JNTU - Hitech City Road, Kukatpally", addressLocality: "Hyderabad", addressRegion: "Telangana", postalCode: "500072", addressCountry: "IN" },{ "@type": "PostalAddress", name: "Bangalore Office", streetAddress: "101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli", addressLocality: "Bengaluru", addressRegion: "Karnataka", postalCode: "560076", addressCountry: "IN" },{ "@type": "PostalAddress", name: "USA Office", streetAddress: "1111b South Governors Avenue, Suite 48193", addressLocality: "Dover", addressRegion: "DE", postalCode: "19904", addressCountry: "US" }] } };

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "How soon can we begin an enterprise software project with mTouch Labs?", acceptedAnswer: { "@type": "Answer", text: "Once you submit your request, our solution architects schedule a discovery call within 24-48 hours." } },{ "@type": "Question", name: "Does mTouch Labs work with global enterprises?", acceptedAnswer: { "@type": "Answer", text: "Yes. mTouch Labs collaborates with clients across the USA, Europe, the Middle East, and APAC regions." } },{ "@type": "Question", name: "Does mTouch Labs sign NDAs before discussing projects?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Confidentiality and data security are core to our engagement process." } },{ "@type": "Question", name: "What industries does mTouch Labs specialize in?", acceptedAnswer: { "@type": "Answer", text: "mTouch Labs serves FinTech, Healthcare, Retail, Logistics, SaaS, Enterprise IT, Manufacturing, and digital-first businesses." } },{ "@type": "Question", name: "What is the typical enterprise engagement budget at mTouch Labs?", acceptedAnswer: { "@type": "Answer", text: "Enterprise engagements typically start at $25,000 and scale based on complexity." } },{ "@type": "Question", name: "Does mTouch Labs provide dedicated enterprise development teams?", acceptedAnswer: { "@type": "Answer", text: "Yes. mTouch Labs provides cross-functional teams including solution architects, developers, DevOps engineers, and QA specialists." } },{ "@type": "Question", name: "Does mTouch Labs offer cloud and DevOps services?", acceptedAnswer: { "@type": "Answer", text: "Yes. mTouch Labs provides end-to-end cloud architecture design, CI/CD implementation, and DevOps consulting." } },{ "@type": "Question", name: "Can mTouch Labs modernize legacy systems?", acceptedAnswer: { "@type": "Answer", text: "Yes. mTouch Labs helps enterprises migrate legacy systems to scalable, cloud-native architectures." } },{ "@type": "Question", name: "How does mTouch Labs ensure enterprise-grade security?", acceptedAnswer: { "@type": "Answer", text: "mTouch Labs follows secure coding standards, encryption best practices, and cloud security protocols." } }] };

const servicesOptions = ["Enterprise Software Development","SaaS Product Development","Mobile App Development","Cloud & DevOps Engineering","AI & Automation Solutions","UI/UX & Product Design","Legacy System Modernization","Web Application Development","Digital Marketing"];

const offices = [
  {
    id: "usa",
    flag: "\u{1F1FA}\u{1F1F8}",
    city: "Dover, Delaware, United States",
    label: "US Operations",
    company: "mTouch Labs",
    address: "1111B South Governors Avenue, Suite 48193, Dover, DE 19904, United States",
    phone: "+1 (551) 222-0070",
    email: "contact@mtouchlabs.com",
    hours: "Mon–Fri, 9:00 AM – 6:00 PM EST",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.5!2d-75.5254408!3d39.1395519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c763817472e2c3%3A0x102e4f6c800dacbd!2smTouch%20AI%20Labs!5e0!3m2!1sen!2sus!4v1700000000000",
    mapUrl: "https://www.google.com/maps/place/mTouch+AI+Labs"
  },
  {
    id: "hyderabad",
    hq: true,
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Hyderabad, Telangana, India",
    label: "Head Office",
    company: "mTouch Labs Private Limited",
    address: "#514, Manjeera Trinity Corporate, JNTU–Hitech City Road, Kukatpally, Hyderabad, Telangana 500072",
    phone: "+91 9390683154",
    email: "contact@mtouchlabs.com",
    hours: "Mon–Fri, 9:30 AM – 6:30 PM IST",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7!2d78.3927245!3d17.489222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90cec63e97d9%3A0xb045c9dc22129055!2smTouch%20Labs!5e0!3m2!1sen!2sin!4v1700000000000",
    mapUrl: "https://www.google.com/maps/place/mTouch+Labs"
  },
  {
    id: "bengaluru",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Bengaluru, Karnataka, India",
    label: "Development Center",
    company: "mTouch Labs Private Limited",
    address: "101, 4th Main Road, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076",
    phone: "+91 9390683154",
    email: "contact@mtouchlabs.com",
    hours: "Mon–Fri, 9:30 AM – 6:30 PM IST",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.6054813!3d12.8905936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae159f6a3c1bd1%3A0xb1454d20e410b70e!2smTouch%20Labs%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000",
    mapUrl: "https://www.google.com/maps/place/mTouch+Labs+Pvt+Ltd"
  }
];

const whyPartner = [
  { icon: "\u{1F465}", title: "Dedicated Enterprise Teams", desc: "Cross-functional teams with solution architects, developers, DevOps engineers, and QA specialists." },
  { icon: "\u{1F4CA}", title: "Transparent Engagement", desc: "Clear communication, milestone-based delivery, and full project visibility at every stage." },
  { icon: "\u{1F30D}", title: "Scalable Global Delivery", desc: "Offices across India and the USA serving enterprises in APAC, Middle East, Europe, and North America." },
  { icon: "\u{1F3D7}\u{FE0F}", title: "Solution Architecture Expertise", desc: "From system design to cloud deployment \u2014 we architect solutions built for scale and performance." },
  { icon: "\u{1F91D}", title: "Long-term Technology Partnerships", desc: "We don\u2019t just deliver projects \u2014 we build lasting relationships that drive continuous innovation." },
  { icon: "\u{1F504}", title: "Legacy Modernization", desc: "Migrate and modernize legacy systems to scalable, cloud-native architectures with zero downtime." },
];

const faqs = [
  { q: "How soon can we begin an enterprise software project?", a: "Once you submit your request, our solution architects schedule a discovery call within 24\u201348 hours. A tailored roadmap and proposal are typically delivered within 3\u20135 business days.", active: true },
  { q: "Do you work with global enterprises?", a: "Yes. We collaborate with clients across the USA, Europe, the Middle East, and APAC regions through our offices in Hyderabad, Bangalore, and the United States." },
  { q: "Do you sign NDAs before discussing projects?", a: "Absolutely. Confidentiality and data security are core to our engagement process. NDAs are available upon request before any project discussion begins." },
  { q: "What industries do you specialize in?", a: "We serve FinTech, Healthcare, Retail, Logistics, SaaS, Enterprise IT, Manufacturing, and digital-first businesses with tailored software solutions." },
  { q: "What is the typical enterprise engagement budget?", a: "Enterprise engagements typically start at $25,000 and scale based on complexity, integrations, and cloud infrastructure requirements." },
  { q: "Do you provide dedicated enterprise development teams?", a: "Yes. We provide cross-functional teams including solution architects, developers, DevOps engineers, and QA specialists." },
  { q: "Do you offer cloud and DevOps services?", a: "Yes. We provide end-to-end cloud architecture design, CI/CD implementation, infrastructure automation, and DevOps consulting." },
  { q: "Can you modernize legacy systems?", a: "Yes. We help enterprises migrate legacy systems to scalable, cloud-native architectures using modern frameworks." },
  { q: "How do you ensure enterprise-grade security?", a: "We follow secure coding standards, encryption best practices, compliance frameworks, and cloud security protocols." },
];

const ChevronIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>);
const ArrowIcon = () => (<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>);

export default function ContactUsPage() {
  return (
    <>
      <Script id="contact-page-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <Script id="contact-faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <link href="/css/contact.css" rel="stylesheet" />

      {/* ════════ HERO — Split: Left info + Right form ════════ */}
      <section className="ct-hero">
        <div className="ct-hero__inner">
          <div className="ct-hero__left">
            <div className="ct-hero__badge"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg> GET IN TOUCH</div>
            <h1 className="ct-hero__title">Let&apos;s Build Something<br /><span className="ct-hero__accent">Extraordinary</span></h1>
            <p className="ct-hero__desc">Have a project in mind? Fill out the form and let&apos;s discuss how mTouch Labs can transform your vision into reality.</p>
            <div className="ct-hero__stats">
              <div className="ct-hero__stat"><span className="ct-hero__stat-num">1500+</span><span className="ct-hero__stat-label">Projects Delivered</span></div>
              <div className="ct-hero__stat"><span className="ct-hero__stat-num">1000+</span><span className="ct-hero__stat-label">Global Clients</span></div>
              <div className="ct-hero__stat"><span className="ct-hero__stat-num">98%</span><span className="ct-hero__stat-label">Client Retention</span></div>
              <div className="ct-hero__stat"><span className="ct-hero__stat-num">24/7</span><span className="ct-hero__stat-label">Support Available</span></div>
            </div>
            <div className="ct-hero__tags">{["React","Node.js","AWS","Salesforce","AI/ML","DevOps"].map((t)=>(<span className="ct-hero__tag" key={t}>{t}</span>))}</div>
          </div>

          <div className="ct-hero__right" id="consultation-form">
            <div className="ct-form-card">
              <h2 className="ct-form-card__title">Send Us a Message</h2>
              <p className="ct-form-card__sub">We&apos;ll get back to you within 24 hours.</p>
              <form id="contactForm" method="post" className="ct-form">
                <div className="ct-form__row"><div className="ct-form__group"><label className="ct-form__label">FULL NAME *</label><input type="text" name="name" className="ct-form__input" placeholder="John Doe" required /></div><div className="ct-form__group"><label className="ct-form__label">EMAIL *</label><input type="email" name="email" className="ct-form__input" placeholder="john@company.com" required /></div></div>
                <div className="ct-form__row"><div className="ct-form__group"><label className="ct-form__label">COMPANY</label><input type="text" name="company" className="ct-form__input" placeholder="Your Company" /></div><div className="ct-form__group"><label className="ct-form__label">PHONE *</label><div className="ct-form__phone-row"><select name="countryCode" className="ct-form__select ct-form__country-code" defaultValue="91"><option value="91">🇮🇳 +91</option><option value="1">🇺🇸 +1</option><option value="44">🇬🇧 +44</option><option value="971">🇦🇪 +971</option><option value="61">🇦🇺 +61</option><option value="49">🇩🇪 +49</option><option value="33">🇫🇷 +33</option><option value="81">🇯🇵 +81</option><option value="86">🇨🇳 +86</option><option value="65">🇸🇬 +65</option><option value="966">🇸🇦 +966</option><option value="974">🇶🇦 +974</option><option value="82">🇰🇷 +82</option><option value="55">🇧🇷 +55</option><option value="52">🇲🇽 +52</option><option value="234">🇳🇬 +234</option><option value="254">🇰🇪 +254</option><option value="27">🇿🇦 +27</option><option value="92">🇵🇰 +92</option><option value="880">🇧🇩 +880</option><option value="94">🇱🇰 +94</option><option value="977">🇳🇵 +977</option><option value="60">🇲🇾 +60</option><option value="62">🇮🇩 +62</option><option value="66">🇹🇭 +66</option><option value="84">🇻🇳 +84</option><option value="380">🇺🇦 +380</option><option value="48">🇵🇱 +48</option><option value="39">🇮🇹 +39</option><option value="34">🇪🇸 +34</option><option value="31">🇳🇱 +31</option><option value="46">🇸🇪 +46</option><option value="47">🇳🇴 +47</option><option value="45">🇩🇰 +45</option><option value="41">🇨🇭 +41</option><option value="43">🇦🇹 +43</option><option value="353">🇮🇪 +353</option><option value="351">🇵🇹 +351</option><option value="30">🇬🇷 +30</option><option value="90">🇹🇷 +90</option><option value="7">🇷🇺 +7</option><option value="972">🇮🇱 +972</option><option value="20">🇪🇬 +20</option><option value="212">🇲🇦 +212</option><option value="64">🇳🇿 +64</option></select><input type="tel" name="mobile" id="phoneInput" className="ct-form__input" placeholder="9876543210" required inputMode="numeric" /></div><span className="ct-form__phone-hint" id="phoneHint"></span></div></div>
                <div className="ct-form__row"><div className="ct-form__group"><label className="ct-form__label">SUBJECT</label><input type="text" name="subject" className="ct-form__input" placeholder="How can we help?" /></div><div className="ct-form__group"><label className="ct-form__label">SERVICE</label><select name="interest" className="ct-form__select" defaultValue=""><option value="" disabled>Select a service</option>{servicesOptions.map((s)=>(<option key={s} value={s}>{s}</option>))}</select></div></div>
                <div className="ct-form__group ct-form__group--full"><label className="ct-form__label">MESSAGE *</label><textarea name="message" className="ct-form__textarea" placeholder="Tell us about your project..." rows={5} required maxLength={1000} /></div>
                <div className="ct-form__terms"><input type="checkbox" id="terms" className="ct-form__checkbox" required /><label htmlFor="terms" className="ct-form__checkbox-label">I agree to the <a href="/privacy-policy" className="ct-form__link">Privacy Policy</a> and consent to being contacted.</label></div>
                <button type="submit" className="ct-form__submit">Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></button>
                <div className="ct-form__secure"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg><span>100% Secure. Your information is encrypted and never shared with third parties.</span></div>
              </form>
            </div>
          </div>
        </div>
        <div className="ct-hero__dot ct-hero__dot--1"></div>
        <div className="ct-hero__dot ct-hero__dot--2"></div>
        <div className="ct-hero__dot ct-hero__dot--3"></div>
      </section>

      {/* ════════ OFFICES — Tabbed with Map ════════ */}
      <section className="ct-offices" id="offices">
        <div className="ct-offices__inner">
          <h2 className="ct-offices__heading">Visit Us <span className="ct-offices__accent">Worldwide</span></h2>
          <p className="ct-offices__sub">With offices across 3 continents, we&apos;re always close to you. Find the nearest mTouch Labs office below.</p>
          <div className="ct-offices__tabs" id="officeTabs">{offices.map((o,i)=>(<button key={o.id} className={`ct-offices__tab${i===0?" ct-offices__tab--active":""}`} data-office={o.id} type="button"><span>{o.flag}</span> {o.city.split(",")[0]}, {o.city.includes("USA")?"USA":o.city.split(",").pop()?.trim()}</button>))}</div>
          {offices.map((o,i)=>(<div key={o.id} className={`ct-offices__panel${i===0?" ct-offices__panel--active":""}`} data-panel={o.id}><div className="ct-offices__panel-grid">
            <div className="ct-offices__map"><iframe src={o.mapEmbed} width="100%" height="100%" style={{border:0,borderRadius:"16px"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`mTouch Labs ${o.city} office`} /></div>
            <div className="ct-offices__details">
              <div className="ct-offices__details-header"><span className="ct-offices__details-flag">{o.flag}</span><div><h3 className="ct-offices__details-city">{o.city}</h3><span className="ct-offices__details-label">{o.hq&&<span className="ct-offices__hq-badge">HQ</span>}{o.label}</span></div></div>
              <div className="ct-offices__info-row"><span className="ct-offices__info-icon">{"\u{1F4CD}"}</span><div><strong className="ct-offices__info-label">ADDRESS</strong><p>{o.address}</p></div></div>
              <div className="ct-offices__info-row"><span className="ct-offices__info-icon">{"\u{1F4DE}"}</span><div><strong className="ct-offices__info-label">PHONE</strong><p><a href={`tel:${o.phone.replace(/\s/g,"")}`} className="ct-offices__link">{o.phone}</a></p></div></div>
              <div className="ct-offices__info-row"><span className="ct-offices__info-icon">{"\u{2709}\u{FE0F}"}</span><div><strong className="ct-offices__info-label">EMAIL</strong><p><a href={`mailto:${o.email}`} className="ct-offices__link">{o.email}</a></p></div></div>
              <div className="ct-offices__info-row"><span className="ct-offices__info-icon">{"\u{1F550}"}</span><div><strong className="ct-offices__info-label">BUSINESS HOURS</strong><p>{o.hours}</p></div></div>
              <a href={o.mapUrl} target="_blank" rel="noopener noreferrer" className="ct-offices__map-btn">Open in Google Maps <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg></a>
            </div>
          </div></div>))}
          <div className="ct-offices__cards" id="officeCards">{offices.map((o,i)=>(<div className={`ct-offices__card${i===0?" ct-offices__card--active":""}`} key={o.id} data-card={o.id}><h4><span>{o.flag}</span> {o.city}</h4><p>{o.address}</p><a href={`tel:${o.phone.replace(/\s/g,"")}`} className="ct-offices__card-phone">{o.phone}</a></div>))}</div>
        </div>
      </section>

      {/* ════════ WHY PARTNER — Same ════════ */}
      <section className="ent-why"><div className="ent-why__inner">
        <h2 className="ent-why__title">Why Partner with <span className="ent-why__accent">mTouch Labs</span>?</h2>
        <p className="ent-why__subtitle">We don&apos;t just write code &mdash; we engineer solutions that scale with your business.</p>
        <div className="ent-why__grid">{whyPartner.map((item,i)=>(<div className="ent-why__card" key={i}><span className="ent-why__card-icon">{item.icon}</span><h3 className="ent-why__card-title">{item.title}</h3><p className="ent-why__card-desc">{item.desc}</p></div>))}</div>
      </div></section>

      {/* ════════ FAQ — Same ════════ */}
      <section className="ent-faq"><div className="ent-faq__inner">
        <h2 className="ent-faq__title">Frequently Asked <span className="ent-faq__accent">Questions</span></h2>
        <p className="ent-faq__subtitle">Everything you need to know about working with mTouch Labs</p>
        <div className="ent-faq__list">{faqs.map((f,i)=>(<div className={`ent-faq__item${f.active?" ent-faq__item--active":""}`} key={i}><button className="ent-faq__question"><span>{f.q}</span><span className="ent-faq__chevron"><ChevronIcon /></span></button><div className="ent-faq__answer"><p>{f.a}</p></div></div>))}</div>
      </div></section>

      {/* ════════ CTA — Same ════════ */}
      <section className="ent-cta-banner"><div className="ent-cta-banner__inner">
        <h2 className="ent-cta-banner__title">Ready to Accelerate Your Digital Transformation?</h2>
        <p className="ent-cta-banner__text">Connect with mTouch Labs today and speak with our enterprise technology experts.</p>
        <button type="button" className="ent-cta-banner__btn js-open-modal">Get Started Now <ArrowIcon /></button>
      </div></section>

      {/* ════════ SCRIPTS ════════ */}
      <script dangerouslySetInnerHTML={{ __html: `
(function() {
  // ── Form + Phone Validation ──
  function init() {
    var f = document.getElementById("contactForm");
    if (!f) return setTimeout(init, 300);

    var ph = document.getElementById("phoneInput");
    var cc = f.querySelector('select[name="countryCode"]');
    var hint = document.getElementById("phoneHint");

    var rules = {
      "91": { len: 10, msg: "Indian numbers must be 10 digits" },
      "1": { len: 10, msg: "US numbers must be 10 digits" },
      "44": { len: 10, msg: "UK numbers must be 10-11 digits", max: 11 },
      "971": { len: 9, msg: "UAE numbers must be 9 digits" }
    };

    if (ph) {
      ph.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, "");
        var rule = rules[cc.value];
        var maxLen = rule ? (rule.max || rule.len) : 15;
        if (this.value.length > maxLen) this.value = this.value.slice(0, maxLen);
        if (hint) {
          if (rule && this.value.length > 0 && this.value.length < rule.len) {
            hint.textContent = rule.msg;
            hint.style.color = "#ef4444";
          } else {
            hint.textContent = "";
          }
        }
      });
    }

    if (cc) {
      cc.addEventListener("change", function() {
        if (ph) { ph.value = ""; }
        if (hint) hint.textContent = "";
      });
    }

    f.addEventListener("submit", function(e) {
      e.preventDefault();
      var rule = rules[cc.value];
      if (rule && ph.value.length < rule.len) {
        if (hint) { hint.textContent = rule.msg; hint.style.color = "#ef4444"; }
        ph.focus();
        return;
      }
      var fd = new FormData(f);
      var d = Object.fromEntries(fd.entries());
      fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) })
        .then(function(r) { if (r.ok) window.location.href = "/thank-you"; })
        .catch(function(e) { console.error(e); });
    });
  }
  init();

  // ── Office Tabs + Cards sync ──
  function initTabs() {
    var tabs = document.querySelectorAll(".ct-offices__tab");
    var panels = document.querySelectorAll(".ct-offices__panel");
    var cards = document.querySelectorAll(".ct-offices__card");
    if (!tabs.length) return setTimeout(initTabs, 300);

    function switchTo(id) {
      tabs.forEach(function(t) { t.classList.remove("ct-offices__tab--active"); });
      panels.forEach(function(p) { p.classList.remove("ct-offices__panel--active"); });
      cards.forEach(function(c) { c.classList.remove("ct-offices__card--active"); });

      var activeTab = null;
      tabs.forEach(function(t) { if (t.getAttribute("data-office") === id) activeTab = t; });
      if (activeTab) activeTab.classList.add("ct-offices__tab--active");

      var activePanel = null;
      panels.forEach(function(p) { if (p.getAttribute("data-panel") === id) activePanel = p; });
      if (activePanel) activePanel.classList.add("ct-offices__panel--active");

      var activeCard = null;
      cards.forEach(function(c) { if (c.getAttribute("data-card") === id) activeCard = c; });
      if (activeCard) activeCard.classList.add("ct-offices__card--active");
    }

    tabs.forEach(function(tab) {
      tab.addEventListener("click", function() { switchTo(this.getAttribute("data-office")); });
    });

    cards.forEach(function(card) {
      card.addEventListener("click", function() { switchTo(this.getAttribute("data-card")); });
    });
  }
  initTabs();

  // ── FAQ ──
  function initFaq() {
    var items = document.querySelectorAll(".ent-faq__item");
    if (!items.length) return setTimeout(initFaq, 300);
    items.forEach(function(item) {
      item.querySelector(".ent-faq__question").addEventListener("click", function() {
        var a = item.classList.contains("ent-faq__item--active");
        items.forEach(function(i) { i.classList.remove("ent-faq__item--active"); });
        if (!a) item.classList.add("ent-faq__item--active");
      });
    });
  }
  initFaq();

  // ── Smooth scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(function(a) {
    a.addEventListener("click", function(e) {
      var t = document.querySelector(this.getAttribute("href"));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });
})();
      ` }} />
    </>
  );
}