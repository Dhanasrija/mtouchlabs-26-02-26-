import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile app development company in India | Web development company",
  description: "Get in touch with our web development company and mobile app development company in India and transform your idea into engaging applications",
  keywords: "Mobile app development company in India, Web development company",
  alternates: { canonical: "https://mtouchlabs.com/contact-us" },
};

const clientCards = [
  { img: "7.png", title: "Work at Your Time\nZone", text: "We adapt to your schedule, ensuring seamless collaboration across continents." },
  { img: "8.png", title: "Easy & Timely\nCommunication", text: "Clear, responsive communication through your preferred channels." },
  { img: "9.png", title: "24 Hours Support\nAvailable", text: "Round-the-clock assistance to keep your projects running smoothly." },
];

const contactCards = [
  { img: "call.png", label: "CALL US", value: "+91 9390683154", href: "tel:+919390683154" },
  { img: "whatsap.png", label: "WHATSAPP", value: "+91 9390683154", href: "https://wa.me/919390683154?text=Hi%20mTouch%20Labs", external: true },
  { img: "mail.png", label: "EMAIL", value: "contact@mtouchlabs.com", href: "mailto:contact@mtouchlabs.com" },
  { img: "career.png", label: "CAREERS", value: "careers@mtouchlabs.com", href: "mailto:careers@mtouchlabs.com" },
];

const faqs = [
  { q: "How can I contact mTouch Labs for project inquiries?", a: "You can contact mTouch Labs through the website contact form, email, phone, or WhatsApp to discuss web and mobile app development requirements.", active: true },
  { q: "Where is mTouch Labs located in India?", a: "mTouch Labs has its headquarters in Hyderabad, India, with an additional office in Bangalore. The company also serves global clients through its USA office." },
  { q: "Can I schedule a consultation with the mTouch Labs team?", a: "Yes, businesses can schedule a consultation by submitting the contact form or reaching out via phone or email." },
  { q: "What services can I inquire about through the contact page?", a: "You can connect with mTouch Labs for services like mobile app development, web development, digital marketing, UI/UX design, and custom software solutions." },
  { q: "Does mTouch Labs provide global support for clients?", a: "Yes, mTouch Labs works with clients worldwide and offers flexible communication, time-zone support, and 24/7 assistance." },
];

export default function ContactUsPage() {
  return (
    <>
      <link href="/css/contact.css" rel="stylesheet" />

      {/* Header Title */}
      <section className="new_contact_heading_section">
        <h3>Let&apos;s Build Something <br /> <span>Extraordinary Together</span></h3>
        <p>We are a Professional Web Development &amp; Mobile App Development Company</p>
        <p className="new_contact_line"></p>
      </section>

      <div className="new_contact_body">
        <div className="new_contact_container">
          {/* Contact Form */}
          <div className="new_contact_form_section">
            <h2 className="new_contact_heading">Send Us a Message</h2>
            <p className="new_contact_subheading">Fill out the form below and we&apos;ll get back to you shortly.</p>

            <form id="contactForm" method="post">
              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <i className="fa fa-user input-icon" style={{ fontSize: "1.2rem" }}></i>
                  <input type="text" className="new_contact_input" placeholder="Full Name" name="name" required />
                </div>
              </div>

              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <i className="fa fa-envelope input-icon" style={{ fontSize: "1.2rem" }}></i>
                  <input type="email" className="new_contact_input" placeholder="Email Address" name="email" required />
                </div>
              </div>

              <div className="new_contact_form_group">
                <div className="new_contact_phone_wrapper">
                  <div className="new_contact_country_code">
                    <select className="new_contact_select" name="countryCode" id="countryCode" required>
                      <option value="91">India (+91)</option>
                      <option value="1">USA (+1)</option>
                      <option value="44">UK (+44)</option>
                      <option value="971">UAE (+971)</option>
                      <option value="61">Australia (+61)</option>
                      <option value="49">Germany (+49)</option>
                      <option value="33">France (+33)</option>
                      <option value="81">Japan (+81)</option>
                      <option value="86">China (+86)</option>
                      <option value="65">Singapore (+65)</option>
                    </select>
                  </div>
                  <div className="new_contact_input_wrapper new_contact_phone_input">
                    <i className="fa fa-phone input-icon" style={{ fontSize: "1.2rem" }}></i>
                    <input type="tel" className="new_contact_input" placeholder="Phone Number" name="mobile" required />
                  </div>
                </div>
              </div>

              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper">
                  <select className="new_contact_input" name="interest" required>
                    <option value="">Select Interested In</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="new_contact_form_group">
                <div className="new_contact_input_wrapper" style={{ alignItems: "flex-start" }}>
                  <textarea className="new_contact_textarea new_contact_input" placeholder="Tell us about your project..." name="message" rows={4} maxLength={1000} required></textarea>
                </div>
                <span className="new_contact_char_count">0/1000</span>
              </div>

              <div className="new_contact_form_group">
                <div className="new_contact_checkbox">
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy">I agree with the <a href="/privacy-policy" style={{ color: "#3E8CFB" }}>Privacy Policy</a></label>
                </div>
              </div>

              <button type="submit" className="new_contact_submit_btn">Send Message</button>
            </form>
          </div>

          {/* Right Side - Client Benefits */}
          <div className="new_contact_info_section">
            <section className="new_contact_CLIENT_section">
              <div className="new_contact_CLIENT_cards_grid_large">
                {clientCards.map((c, i) => (
                  <div className="new_contact_CLIENT_large_card" key={i}>
                    <div className="new_contact_CLIENT_large_card_icon">
                      <img className="new_contact_CLIENT_large_card_icon_img" src={`/images/contact/${c.img}`} alt={c.title} />
                    </div>
                    <h3 className="new_contact_CLIENT_large_card_title" dangerouslySetInnerHTML={{ __html: c.title.replace("\n", "<br/>") }} />
                    <p className="new_contact_CLIENT_large_card_description">{c.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Bottom Contact Info Cards */}
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
      <div style={{ padding: "6rem 0", backgroundColor: "rgba(243, 246, 253, 1)" }}>
        <div className="_faq_container">
          <div className="_faq_header">
            <h2 className="_faq_title">Your Questions <span className="_faq_title_highlight">Answered</span> Clearly</h2>
            <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
          </div>
          <div className="_faq_list">
            {faqs.map((f, i) => (
              <div className={`_faq_item${f.active ? " active glow" : ""}`} key={i}>
                <button className="_faq_question"><span>{f.q}</span><span className="_faq_icon">+</span></button>
                <div className="_faq_answer"><p className="_faq_answer_text">{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
