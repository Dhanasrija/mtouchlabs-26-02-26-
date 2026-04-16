/**
 * Services page — vanilla JS
 * Dev tabs, Process scroll
 */
(function initServiceTabs() {
  var devTabs = document.querySelectorAll(".dev_tab_btn");
  if (!devTabs.length) {
    // DOM may not be ready yet in Next.js — retry
    if (document.readyState !== 'complete') {
      setTimeout(initServiceTabs, 150);
    }
    return;
  }
  var devTitle = document.getElementById("dev_content_title");
  var devDesc = document.getElementById("dev_content_desc");

  var devContentData = {
    "web-app": { title: "Web Application Development", desc: "<p>We provide highly scalable web application development services in Hyderabad and offer end-to-end support for website design.</p>" },
    "custom-soft": { title: "Custom Software Development Services", desc: "<p>Elevate your business with our custom software development services. We craft unique, high-performance solutions designed to meet your specific needs.</p>" },
    "mobile-app": { title: "On-Demand Mobile App Development", desc: "<p>Elevate your business with our custom software development services. We craft unique, high-performance solutions designed to meet your specific needs.</p>" },
    "enterprise": { title: "Enterprise Application Development", desc: "<p>We provide the most scalable web application development services in Hyderabad.</p>" }
  };

  devTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      devTabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      var key = tab.getAttribute("data-tab");
      var data = devContentData[key];
      if (data && devTitle && devDesc) {
        devTitle.textContent = data.title;
        devDesc.innerHTML = data.desc;
      }
    });
  });

  // Process Steps Scroll
  var processSteps = document.querySelector(".process-steps-new");
  var scrollLeftBtn = document.getElementById("scrollLeft");
  var scrollRightBtn = document.getElementById("scrollRight");

  if (processSteps && scrollLeftBtn && scrollRightBtn) {
    var scrollAmount = 300;
    scrollLeftBtn.addEventListener("click", function () { processSteps.scrollBy({ left: -scrollAmount, behavior: "smooth" }); });
    scrollRightBtn.addEventListener("click", function () { processSteps.scrollBy({ left: scrollAmount, behavior: "smooth" }); });
  }
})();