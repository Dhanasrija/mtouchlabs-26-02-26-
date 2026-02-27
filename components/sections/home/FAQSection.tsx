// const faqs = [
//   { q: "Why is mTouch Labs one of the best mobile app development companies in Hyderabad?", a: "mTouch Labs builds secure, scalable, and high-performance apps with strong technical expertise, transparent communication, and reliable on-time delivery.", active: true },
//   { q: "Do you provide custom software and website development services?", a: "Yes, we build custom software and websites tailored to business needs with modern, secure, and SEO-friendly architecture." },
//   { q: "Can mTouch Labs integrate AI features into mobile and web applications?", a: "Yes, we add AI features like chatbots, automation, analytics, and recommendation engines to boost efficiency and user experience." },
//   { q: "How much does mobile app development cost in India?", a: "Costs vary by features and complexity—basic apps start low, while advanced/enterprise apps require higher investment." },
//   { q: "Do you offer cross-platform app development?", a: "Yes, we build cross-platform apps for Android and iOS to reduce cost and development time." },
//   { q: "How long does it take to develop a mobile application?", a: "Timelines range from 6\u20138 weeks (simple apps) to 3\u20136+ months for complex or enterprise solutions." },
//   { q: "What makes mTouch Labs different from other software development companies?", a: "Our client-first approach, expertise in mobile/web/AI, agile development, and transparent communication set us apart." },
// ];

// export default function FAQSection() {
//   return (
//     <div className="_faq_wrapper">
//       <div className="_faq_container">
//         <div className="_faq_header">
//           <h2 className="_faq_title">
//             Your Questions <span className="_faq_title_highlight">Answered</span> Clearly
//           </h2>
//           <p className="_faq_subtitle">Everything you need to know about Mtouchlabs</p>
//         </div>

//         <div className="_faq_list" id="faqList">
//           {faqs.map((faq, i) => (
//             <div className={`_faq_item${faq.active ? " active glow" : ""}`} key={i}>
//               <button className="_faq_question" type="button">
//                 <span>{faq.q}</span>
//                 <span className="_faq_icon">{faq.active ? "\u2212" : "+"}</span>
//               </button>
//               <div className="_faq_answer">
//                 <p className="_faq_answer_text">{faq.a}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <script
//         dangerouslySetInnerHTML={{
//           __html: `
// (function initFaq() {
//   var list = document.getElementById("faqList");
//   if (!list) { setTimeout(initFaq, 100); return; }
//   var items = list.querySelectorAll("._faq_item");
//   if (!items.length) { setTimeout(initFaq, 100); return; }
//   items.forEach(function(item) {
//     var btn = item.querySelector("._faq_question");
//     if (!btn || btn.dataset.faqBound) return;
//     btn.dataset.faqBound = "1";
//     btn.addEventListener("click", function() {
//       var wasActive = item.classList.contains("active");
//       items.forEach(function(o) {
//         o.classList.remove("active");
//         o.classList.remove("glow");
//         var ic = o.querySelector("._faq_icon");
//         if (ic) ic.textContent = "+";
//       });
//       if (!wasActive) {
//         item.classList.add("active");
//         var ic = item.querySelector("._faq_icon");
//         if (ic) ic.textContent = "\\u2212";
//       }
//     });
//   });
// })();
// `
//         }}
//       />
//     </div>
//   );
// }




const faqs = [
  { q: "What does a software development company do?", a: "A software development company designs, develops, and maintains digital applications and systems tailored to business needs. mTouch Labs provides end-to-end custom software, SaaS, cloud, Salesforce CRM, and enterprise digital transformation solutions.", active: true },
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
      <div className="_faq_container">
        <div className="_faq_header">
          <h2 className="_faq_title">
            Your Questions <span className="_faq_title_highlight">Answered</span> Clearly
          </h2>
          <p className="_faq_subtitle">Everything you need to know about mTouch Labs</p>
        </div>

        <div className="_faq_list" id="faqList">
          {faqs.map((faq, i) => (
            <div className={`_faq_item${faq.active ? " active glow" : ""}`} key={i}>
              <button className="_faq_question" type="button">
                <span>{faq.q}</span>
                <span className="_faq_icon">{faq.active ? "\u2212" : "+"}</span>
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
(function initFaq() {
  var list = document.getElementById("faqList");
  if (!list) { setTimeout(initFaq, 100); return; }
  var items = list.querySelectorAll("._faq_item");
  if (!items.length) { setTimeout(initFaq, 100); return; }
  items.forEach(function(item) {
    var btn = item.querySelector("._faq_question");
    if (!btn || btn.dataset.faqBound) return;
    btn.dataset.faqBound = "1";
    btn.addEventListener("click", function() {
      var wasActive = item.classList.contains("active");
      items.forEach(function(o) {
        o.classList.remove("active");
        o.classList.remove("glow");
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
})();
`
        }}
      />
    </div>
  );
}