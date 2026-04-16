import FAQSchema from "@/components/seo/FAQSchema";

const faqs = [
  { q: "What does a software development company do?", a: "A software development company designs, develops, and maintains digital applications and systems tailored to business needs. mTouch Labs provides end-to-end custom software, SaaS, cloud, Salesforce CRM, and enterprise digital transformation solutions." },
  { q: "Do you work with international clients?", a: "Yes. We serve startups and enterprises across North America, Europe, the Middle East, and APAC from our offices in Hyderabad, Bangalore, and the United States." },
  { q: "Do you offer SaaS and enterprise solutions?", a: "Yes. We develop scalable SaaS platforms with multi-tenant architecture, subscription systems, API integrations, and cloud-native infrastructure, as well as enterprise-grade applications designed for security, performance, and growth." },
  { q: "What custom software development services does mTouch Labs provide?", a: "We build tailored software systems including enterprise application development, business process automation, scalable backend architecture, and full-stack web and mobile applications." },
  { q: "Does mTouch Labs offer Salesforce consulting?", a: "Yes. We provide Salesforce implementation, customization, automation workflows, and CRM integrations to help organizations optimize customer relationship management." },
  { q: "What cloud and DevOps services does mTouch Labs offer?", a: "We implement cloud-native environments, CI/CD pipelines, infrastructure automation, and scalable deployment solutions on AWS, Google Cloud, and Azure." },
  { q: "Why choose mTouch Labs as a technology partner?", a: "We offer end-to-end software development expertise, enterprise-grade architecture, agile and DevOps-driven delivery, a global client engagement model, and long-term technology partnerships." },
];

export default function FAQSection() {
  return (
    <div className="_faq_wrapper">
      <FAQSchema faqs={faqs} />
      <div className="_faq_container">
        <div className="_faq_header">
          <h2 className="_faq_title">
            Your Questions <span className="_faq_title_highlight">Answered</span> Clearly
          </h2>
          <p className="_faq_subtitle">Everything you need to know about mTouch Labs</p>
        </div>

        <div className="_faq_list" id="faqList">
          {faqs.map((faq, i) => (
            <div className={`_faq_item${i === 0 ? " active glow" : ""}`} key={i}>
              <button className="_faq_question" type="button">
                <span>{faq.q}</span>
                <span className="_faq_icon">{i === 0 ? "\u2212" : "+"}</span>
              </button>
              <div className="_faq_answer">
                <p className="_faq_answer_text">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
          document.addEventListener("DOMContentLoaded", function() {
            var list = document.getElementById("faqList");
            if (!list) return;
            list.addEventListener("click", function(e) {
              var btn = e.target.closest("._faq_question");
              if (!btn) return;
              var item = btn.closest("._faq_item");
              if (!item) return;
              var wasActive = item.classList.contains("active");
              list.querySelectorAll("._faq_item").forEach(function(o) {
                o.classList.remove("active", "glow");
                var ic = o.querySelector("._faq_icon");
                if (ic) ic.textContent = "+";
              });
              if (!wasActive) {
                item.classList.add("active");
                var ic = item.querySelector("._faq_icon");
                if (ic) ic.textContent = "\\u2212";
              }
            });
          });
          `
        }}
      />
    </div>
  );
}