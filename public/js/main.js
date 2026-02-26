/* Template: mTouch Labs Web Design & Digital Marketing Agency HTML5 Template*/
/*Author: Rajesh-Doot*/
/*File Description: Main JS file of the template*/

/**Table of contents**
1. Mobile sidebar menu   2. Sticky Header    3. Bootstrap Tooltips    4.  Owl-Carousel   5. Counter Up   6. Video magnific Popup    7  .scroll to top  **/

(function ($) {
  "use strict";

  // Guard: exit early if jQuery is not available
  if (typeof $ === 'undefined') return;

  //Preloader
  window.addEventListener("load", function () {
    var preloadpage = document.getElementById("page-load");
    if (preloadpage) {
      preloadpage.style.display = "none";
    }
  });

  //Mobile sidebar menu
  if (typeof hcOffcanvasNav !== 'undefined') {
    var mainNav = document.getElementById("main-nav");
    if (mainNav) {
      var Nav = new hcOffcanvasNav("#main-nav", {
        disableAt: false,
        customToggle: ".toggle",
        levelSpacing: 40,
        navTitle: "mTouch Labs Menu",
        levelTitles: true,
        labelClose: false,
        levelTitleAsBack: true,
        closeOnClick: true,
        insertClose: true,
        closeActiveLevel: true,
        insertBack: true,
        swipeGestures: true,
      });
    }
  }

  //Sticky Header
  function updateScroll() {
    if ($(window).scrollTop() >= 80) {
      $(".ree-header").addClass("sticky");
    } else {
      $(".ree-header").removeClass("sticky");
    }
    if ($(window).scrollTop() >= 80) {
      $(".ree-header").addClass("sticky1");
    }
    if ($(window).scrollTop() <= 80) {
      $(".ree-header").removeClass("sticky1");
    }
  }
  $(function () {
    $(window).scroll(updateScroll);
    updateScroll();
  });

  // Tooltips
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip();
  }

  //Owl-Carousel - Home hero brands
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".hero-brands");
    if (!el.length) return;
    el.owlCarousel({
      items: 6,
      nav: false,
      dots: false,
      autoplay: true,
      loop: true,
      center: false,
      margin: 10,
      autoplayTimeout: 300000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 2000,
      responsive: {
        0: { items: 2 },
        520: { items: 3 },
        768: { items: 4 },
        1200: { items: 6 },
        1400: { items: 6 },
        1600: { items: 6 },
      },
    });
  });

  //Owl-Carousel - Home work slide
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".full-work-block");
    if (!el.length) return;
    el.owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      autoplay: false,
      loop: true,
      center: false,
      margin: 20,
      autoplayTimeout: 35000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 1000,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        520: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
        1400: { items: 3 },
        1600: { items: 3 },
      },
    });
  });

  //Owl-Carousel - Home review slide
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".home-review-slider");
    if (!el.length) return;
    el.owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      autoplay: false,
      loop: true,
      center: true,
      margin: 20,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 2000,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
    });
  });

  //Owl-Carousel - home app review slide
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".testimonial-card-b");
    if (!el.length) return;
    el.owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      dotsContainer: "#testimonials-avatar",
      smartSpeed: 500,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 1 },
        1400: { items: 1 },
      },
    });
  });

  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".testimonial-cards");
    if (!el.length) return;
    el.owlCarousel({
      items: 3,
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: false,
      arrow: false,
      dotsContainer: "#testimonials-avatar",
      smartSpeed: 500,
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 3 },
        1400: { items: 3 },
      },
    });
  });

  //Owl-Carousel - contact page review slide
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".trust-review");
    if (!el.length) return;
    el.owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      autoplay: true,
      loop: true,
      center: true,
      margin: 20,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 2000,
    });
  });

  //Owl-Carousel - app work slide
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var owl = $(".full-work-app");
    if (!owl.length) return;
    owl.owlCarousel({
      items: 4,
      nav: true,
      dots: false,
      autoplay: true,
      loop: true,
      center: false,
      margin: 20,
      autoplayTimeout: 35000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 1000,
      nav: false,
      responsive: {
        0: { items: 1, stagePadding: 40 },
        520: { items: 1, stagePadding: 40 },
        768: { items: 2 },
        1200: { items: 3 },
        1400: { items: 4 },
        1600: { items: 4 },
      },
    });

    // Custom nav buttons
    $(".custom-next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".custom-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
  });

  //Owl-Carousel - creative agency service
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".ree-ca-service");
    if (!el.length) return;
    el.owlCarousel({
      items: 3,
      nav: false,
      dots: false,
      autoplay: false,
      loop: true,
      center: false,
      margin: 20,
      autoplayTimeout: 2500000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 1500,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        520: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
        1400: { items: 3 },
        1600: { items: 3 },
      },
    });
  });

  //Owl-Carousel - digital agency hero slider
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".hero-owl");
    if (!el.length) return;
    el.owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      autoplay: true,
      loop: true,
      center: false,
      margin: 20,
      autoplayTimeout: 350000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 1500,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
    });
  });

  //Owl-Carousel - app screens
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var el = $(".app-screenss");
    if (!el.length) return;
    el.owlCarousel({
      items: 5,
      nav: false,
      dots: true,
      autoplay: true,
      loop: true,
      center: false,
      margin: 30,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 2000,
      responsive: {
        0: { items: 2 },
        520: { items: 3 },
        768: { items: 4 },
        1200: { items: 4 },
        1400: { items: 5 },
        1600: { items: 5 },
      },
    });
  });

  //Owl-Carousel - Testimonial cards
  setTimeout(function () {
    if (!$.fn.owlCarousel) return;
    var $tc = $(".testimonial-cards");
    if (!$tc.length) return;

    $tc.on('initialized.owl.carousel refreshed.owl.carousel changed.owl.carousel', function () {
      var $navPrev = $tc.find('.owl-prev');
      var $navNext = $tc.find('.owl-next');
      $navPrev.attr('aria-label', 'Previous testimonials').attr('title', 'Previous');
      $navNext.attr('aria-label', 'Next testimonials').attr('title', 'Next');
    });

    $tc.owlCarousel({
      items: 3,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplaySpeed: 700,
      loop: true,
      center: false,
      margin: 28,
      autoplayHoverPause: true,
      autoHeight: true,
      smartSpeed: 800,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1200: { items: 3 },
      },
    });
  });

  //counter animation
  setTimeout(function () {
    if ($.fn.counterUp) {
      $(".counter").counterUp({
        delay: 10,
        time: 4500,
      });
    }
  });

  //Video magnificPopup
  setTimeout(function () {
    if ($.fn.magnificPopup) {
      $(".video-popup").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
      });
    }
  });

  setTimeout(function () {
    $(".accordion-item").click(function () {
      var titleEl = $(this).find(".accordion-title");
      if (!titleEl.length) return;
      var acordiaonstatus = titleEl.parents().attr("aria-expanded");
      if (acordiaonstatus == "false") {
        $(".accordion-title").parents().attr("aria-expanded", "false");
        titleEl.parents().attr("aria-expanded", "true");
      } else {
        titleEl.parents().attr("aria-expanded", "false");
      }
    });
  });

  //Background image
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  //aos animation
  if (typeof AOS !== 'undefined') {
    AOS.init({
      offset: 10,
      delay: 0,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }

  var $nav = $("li.megamenu");
  $nav.hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // Load footer and modals - SKIP in Next.js (these are handled by components)
  $(document).ready(function () {
    // Only run .load() if the elements exist AND we're not in Next.js
    if (typeof __NEXT_DATA__ === 'undefined') {
      if ($("#footer").length) $("#footer").load("footer.html");
      if ($("#footer2").length) $("#footer2").load("footer.html");
      if ($("#requestQuoteModal").length) $("#requestQuoteModal").load("requestquote.html");
      if ($("#brochureModal").length) $("#brochureModal").load("brochureform.html");
      if ($("#careerformModal").length) $("#careerformModal").load("careerform.html .modal");
      if ($("#openlogoModal").length) $("#openlogoModal").load("logomodal.html");
    }

    var currentPage = window.location.pathname;
    /*drop down one*/
    $("li.megamenu a").each(function () {
      var link = $(this).attr("href");
      if (!link) return;
      if (link == currentPage) {
        $(this).addClass("active");
      }
      if (currentPage.includes("/" + link) && link != "about") {
        $(this).addClass("active");
        var $parentLi = $(this).closest("li.megamenu");
        $parentLi.addClass("active_parent");
      } else if (currentPage == "/about.html" && link == "about") {
        $(this).addClass("active");
        var id = document.getElementById("firstMega");
        if (id) id.classList.add("active_parent");
      }
    });

    /*normal one*/
    $("li.megamenu1 a").each(function () {
      var link = $(this).attr("href");
      if (!link) return;
      if (currentPage.includes("/" + link)) {
        $(this).addClass("active");
      }
    });
  });

})(typeof jQuery !== 'undefined' ? jQuery : null);

/*G-tAG*/
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  };
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': 'AW-836875485/MlvRCKLkqbkaEN3pho8D',
      'event_callback': callback
    });
  }
  return false;
}

/*request modal*/
function openModal() {
  gtag_report_conversion(undefined);
  var modal = document.getElementById("requestQuoteModal");
  if (modal) modal.classList.remove("hide");
}

function openModalcareer() {
  var modal = document.getElementById("careerformModal");
  if (modal) modal.classList.remove("hide");
}

function closeModalcareer() {
  var modal = document.getElementById("careerformModal");
  if (modal) modal.classList.add("hide");
}

function brochureModalClick() {
  var modal = document.getElementById("brochureModal");
  if (modal) modal.classList.remove("hide");
}

function openPdf() {
  window.open("../files/mTouchLabs_Brochure.pdf", "_blank");
}

function openlogoModal() {
  var modal = document.getElementById("openlogoModal");
  if (modal) modal.classList.remove("hide");
}

function closeModal() {
  var modal = document.getElementById("requestQuoteModal");
  if (modal) modal.classList.add("hide");
}

function closeModal1() {
  var modal = document.getElementById("brochureModal");
  if (modal) modal.classList.add("hide");
}

function closeModal2() {
  var modal = document.getElementById("openlogoModal");
  if (modal) modal.classList.add("hide");
}

// Close the brochure modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  var modal = document.getElementById("brochureModal");
  if (modal && event.target == modal) {
    modal.classList.add("hide");
  }
};

/*home page jobs*/
(function () {
  var tabs = document.querySelectorAll(".what-we-do-tab-link");
  var panels = document.querySelectorAll(".what-we-do-tab-panel");
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = this.getAttribute("data-tab");
      if (!target) return;

      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });

      this.classList.add("active");
      var targetEl = document.getElementById(target);
      if (targetEl) targetEl.classList.add("active");
    });
  });
})();

/*--technologies we work--*/
(function () {
  var tabButtons = document.querySelectorAll(".technologies-tab-button");
  var contentSections = document.querySelectorAll(".technologies-content");
  if (!tabButtons.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tabButtons.forEach(function (btn) { btn.classList.remove("active"); });
      contentSections.forEach(function (section) { section.classList.remove("active"); });

      button.classList.add("active");
      var tabId = button.dataset.tab;
      if (tabId) {
        var targetEl = document.getElementById(tabId);
        if (targetEl) targetEl.classList.add("active");
      }
    });
  });
})();

var cityData = {
  hyderabad: {
    name: "Hyderabad",
    address: "mTouch Labs Private Limited, #514, Manjeera Trinity Corporate, JNTU \u2013 Hitech City Road, Kukatpally, Hyderabad \u2013 500072",
    phone: "+91-9390683154",
    email: "contact@mtouchlabs.com",
    imgSrc: "images/home/hyderbad2.png",
  },
  bangalore: {
    name: "Bangalore",
    address: "mTouch Labs Private Limited, #101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka - 560076",
    phone: "+91-9390683154",
    email: "contact@mtouchlabs.com",
    imgSrc: "images/home/banglore2.png",
  },
  usa: {
    name: "USA",
    address: "1111b South Governors Ave STE 48193 Dover, DE, 19904 US",
    phone: "+18454424504",
    email: "contact@mtouchlabs.com",
    imgSrc: "images/home/usa2.png",
  },
};

/*contact us*/
(function () {
  var tabs = document.querySelectorAll(".newfooter-tab");
  if (!tabs.length) return;
  var cities = document.querySelectorAll(".newfooter-city");
  var cityNames = ["hyderabad", "bangalore", "usa"];

  function changeCity(cityId) {
    tabs.forEach(function (tab) { tab.classList.remove("active"); });
    cities.forEach(function (city) { city.classList.remove("active"); });

    var selectedTab = document.querySelector("button[onclick=\"changeCity('" + cityId + "')\"]");
    if (selectedTab) selectedTab.classList.add("active");

    var selectedCity = document.getElementById(cityId);
    if (selectedCity) selectedCity.classList.add("active");

    updateFooterContent(cityId);
  }

  function updateFooterContent(cityId) {
    var nextCities;
    if (cityId === "hyderabad") {
      nextCities = ["bangalore", "usa"];
    } else if (cityId === "bangalore") {
      nextCities = ["usa", "hyderabad"];
    } else if (cityId === "usa") {
      nextCities = ["hyderabad", "bangalore"];
    } else {
      nextCities = ["bangalore", "usa"];
    }

    var containerOne = document.querySelector(".newfooter_container_main");
    if (!containerOne) return;

    containerOne.innerHTML = '<h2>Fuel Your Business <br/> Success</h2><div class="newfooter_container_two">' +
      nextCities.map(function (city) {
        var data = cityData[city];
        if (!data) return '';
        return '<div class="newfooter-two-text-card"><div class="newfooter-card-img"><img src="' + data.imgSrc + '" alt="' + data.name + '"></div><div class="newfooter-card-content"><h3>' + data.name + '</h3><p>' + data.address + '</p></div></div>';
      }).join('') + '</div>';
  }

  changeCity("hyderabad");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var cityId = tab.textContent.trim().toLowerCase();
      changeCity(cityId);
    });
  });
})();

function applyMarginBottom(contact) {
  if (!contact) return;
  var addressParagraphs = contact.querySelectorAll("p");
  addressParagraphs.forEach(function (p) {
    p.style.marginBottom = "10px";
  });
}

/*Home page questions*/
(function () {
  var faqItems = document.querySelectorAll(".Home-faq-item");
  if (!faqItems.length) return;
  faqItems.forEach(function (item) {
    var question = item.querySelector(".Home-faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var isActive = this.classList.contains("active");
      if (!isActive) {
        this.classList.add("active");
        if (this.nextElementSibling) this.nextElementSibling.style.display = "block";
        var toggle = this.querySelector(".Home-faq-toggle");
        if (toggle) toggle.textContent = "-";
      } else {
        this.classList.remove("active");
        if (this.nextElementSibling) this.nextElementSibling.style.display = "none";
        var toggle = this.querySelector(".Home-faq-toggle");
        if (toggle) toggle.textContent = "+";
      }
    });
  });
})();

/*product page questions*/
(function () {
  var faqItems = document.querySelectorAll(".food-faq-item");
  if (!faqItems.length) return;
  faqItems.forEach(function (item) {
    var question = item.querySelector(".food-faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var isActive = this.classList.contains("active");
      if (!isActive) {
        this.classList.add("active");
        if (this.nextElementSibling) this.nextElementSibling.style.display = "block";
        var toggle = this.querySelector(".food-faq-toggle");
        if (toggle) toggle.textContent = "x";
      } else {
        this.classList.remove("active");
        if (this.nextElementSibling) this.nextElementSibling.style.display = "none";
        var toggle = this.querySelector(".food-faq-toggle");
        if (toggle) toggle.textContent = "+";
      }
    });
  });
})();

/*services*/
(function () {
  var tabs = document.querySelectorAll('.servicesaNew-tab');
  var contentItems = document.querySelectorAll('.servicesaNew-content-item');
  if (!tabs.length) return;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var tabId = this.getAttribute('data-tab');

      tabs.forEach(function (t) {
        t.classList.remove('active');
        var icon = t.querySelector('.servicesaNew-tab-icon');
        if (icon) {
          icon.textContent = '+';
          icon.classList.remove('minus');
          icon.classList.add('plus');
        }
      });

      this.classList.add('active');
      var activeIcon = this.querySelector('.servicesaNew-tab-icon');
      if (activeIcon) {
        activeIcon.textContent = '\u2212';
        activeIcon.classList.remove('plus');
        activeIcon.classList.add('minus');
      }

      contentItems.forEach(function (item) { item.classList.remove('active'); });

      if (tabId) {
        var targetEl = document.getElementById(tabId);
        if (targetEl) targetEl.classList.add('active');
      }
    });
  });
})();

/*home menu bar*/
(function () {
  var dropdowns = document.querySelectorAll(".menu-dropdown");
  var megaMenus = document.querySelectorAll(".megamenu");
  if (!megaMenus.length) return;

  dropdowns.forEach(function (dropdown) {
    dropdown.style.display = "none";
  });

  function showDropdown(menu, dropdown) {
    if (dropdown) dropdown.style.display = "block";
  }

  function hideDropdown(dropdown) {
    if (dropdown) dropdown.style.display = "none";
  }

  megaMenus.forEach(function (menu) {
    var dropdown = menu.querySelector(".menu-dropdown");
    if (!dropdown) return;

    menu.addEventListener("mouseenter", function () {
      showDropdown(menu, dropdown);
      if (dropdown.classList.contains('home-mega')) {
        var aboutPanel = dropdown.querySelector("[data-content='custom-about'], [data-content='about']");
        if (aboutPanel) {
          dropdown.querySelectorAll('[data-content]').forEach(function (p) { p.style.display = 'none'; });
          aboutPanel.style.display = '';
          var allLinks = dropdown.querySelectorAll('.quick-links a');
          allLinks.forEach(function (l) { l.classList.remove('is-current'); });
          var aboutLink = dropdown.querySelector(".quick-links a[data-service='custom-about'], .quick-links a[data-service='about']");
          if (aboutLink) aboutLink.classList.add('is-current');
        }
      }
    });

    menu.addEventListener("mouseleave", function () {
      hideDropdown(dropdown);
    });
  });

  document.querySelectorAll('.menu-dropdown.home-mega').forEach(function (dropdown) {
    var quickLinks = dropdown.querySelectorAll('.quick-links a[data-service]');
    if (!quickLinks.length) return;

    function showPanelForService(svc) {
      var key = svc ? svc.replace(/^custom-/, '') : '';
      var panels = dropdown.querySelectorAll('[data-content]');
      panels.forEach(function (p) { p.style.display = 'none'; });
      var allLinks = dropdown.querySelectorAll('.quick-links a');
      allLinks.forEach(function (l) { l.classList.remove('is-current'); });
      var target = null;
      if (svc) target = dropdown.querySelector("[data-content='" + svc + "']");
      if (!target && key) target = dropdown.querySelector("[data-content='" + key + "']");
      if (!target && key) target = dropdown.querySelector("[data-content='custom-" + key + "']");
      var activeLink = null;
      if (svc) activeLink = dropdown.querySelector(".quick-links a[data-service='" + svc + "']");
      if (!activeLink && key) activeLink = dropdown.querySelector(".quick-links a[data-service='custom-" + key + "']");
      if (!activeLink && key) activeLink = dropdown.querySelector(".quick-links a[href*='" + key + "']");
      if (activeLink) activeLink.classList.add('is-current');
      if (target) target.style.display = '';
    }

    quickLinks.forEach(function (link) {
      link.addEventListener('mouseenter', function () {
        var svc = this.getAttribute('data-service') || '';
        showPanelForService(svc);
      });
      link.addEventListener('click', function () {
        var svc = this.getAttribute('data-service') || '';
        showPanelForService(svc);
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".megamenu")) {
      dropdowns.forEach(function (dropdown) {
        hideDropdown(dropdown);
      });
    }
  });
})();

/*product food tab - FIXED: null check on getAttribute("onclick")*/
function showPanel(event, panel) {
  if (!panel) return;
  var panels = document.querySelectorAll(".food-application-panel");
  panels.forEach(function (p) {
    p.style.display = "none";
  });

  var panelButtons = document.querySelectorAll(".food-application-panel-btn");
  panelButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  var targetPanel = document.getElementById(panel);
  if (targetPanel) targetPanel.style.display = "block";
  if (event && event.target) event.target.classList.add("active");
}

(function () {
  var defaultPanelBtn = document.querySelector(".food-application-panel-btn.active");
  if (defaultPanelBtn) {
    var onclickAttr = defaultPanelBtn.getAttribute("onclick");
    if (onclickAttr) {
      var parts = onclickAttr.split("'");
      if (parts.length > 1) {
        showPanel({ target: defaultPanelBtn }, parts[1]);
      }
    }
  }
})();

/*milk product page - FIXED: null check on getAttribute("onclick")*/
function showMilkPanel(button, panelId) {
  if (!panelId) return;
  var panels = document.querySelectorAll(".milk-application-panel");
  panels.forEach(function (panel) { panel.style.display = "none"; });
  var buttons = document.querySelectorAll(".milk-application-panel-btn");
  buttons.forEach(function (btn) { btn.classList.remove("active"); });
  var targetPanel = document.getElementById(panelId);
  if (targetPanel) targetPanel.style.display = "block";
  if (button) button.classList.add("active");
}

(function () {
  var defaultPanelBtn = document.querySelector(".milk-application-panel-btn.active");
  if (defaultPanelBtn) {
    var onclickAttr = defaultPanelBtn.getAttribute("onclick");
    if (onclickAttr) {
      var match = onclickAttr.match(/'([^']+)'/);
      if (match) {
        showMilkPanel(defaultPanelBtn, match[1]);
      }
    }
  }
})();

/*product page questions - grocary*/
(function () {
  var year = document.getElementById("currentYear");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
  var faqItems = document.querySelectorAll(".food-faq-item");
  if (!faqItems.length) return;
  faqItems.forEach(function (item) {
    var question = item.querySelector(".grocary-faq-question");
    if (question) {
      question.addEventListener("click", function () {
        var isActive = this.classList.contains("active");
        if (!isActive) {
          this.classList.add("active");
          if (this.nextElementSibling) this.nextElementSibling.style.display = "block";
          var toggle = this.querySelector(".food-faq-toggle");
          if (toggle) toggle.textContent = "x";
        } else {
          this.classList.remove("active");
          if (this.nextElementSibling) this.nextElementSibling.style.display = "none";
          var toggle = this.querySelector(".food-faq-toggle");
          if (toggle) toggle.textContent = "+";
        }
      });
    }
  });
})();

/*product page active tabs*/
function openTab(evt, tabName) {
  if (!tabName) return;
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("product-container-four-tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  var target = document.getElementById(tabName);
  if (target) target.classList.add("active");
  if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
}

/*products page active tab*/
(function () {
  var cards = document.querySelectorAll(".product-container-five-card");
  if (!cards.length) return;
  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.style.transform = "scale(0.98)";
      setTimeout(function () {
        card.style.transform = "scale(1)";
      }, 150);
    });
  });
})();

/*service page bg */
(function () {
  var banner = document.querySelector('.AIservices-banner');
  if (!banner) return;
  var bgImage = banner.getAttribute('data-bg');
  if (bgImage) {
    banner.style.background = "url('" + bgImage + "') center/cover no-repeat";
  }
})();

/*blog*/
(function () {
  var sections = document.querySelectorAll(".blogid-content-section");
  var navLinks = document.querySelectorAll(".blogid-toc ul li a");

  if (sections.length && navLinks.length) {
    function activateLinkOnScroll() {
      var currentSectionId = "";
      sections.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom > 100) {
          currentSectionId = section.id;
        }
      });
      navLinks.forEach(function (link) {
        link.classList.remove("active");
        var href = link.getAttribute("href");
        if (href && href.includes(currentSectionId)) {
          link.classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", activateLinkOnScroll);
  }

  // FAQ Accordion
  var faqItems = document.querySelectorAll(".blogid-faq-item");
  if (faqItems.length) {
    faqItems.forEach(function (item) {
      var question = item.querySelector(".blogid-faq-question");
      if (question) {
        question.addEventListener("click", function () {
          var isActive = item.classList.contains("active");
          faqItems.forEach(function (faqItem) { faqItem.classList.remove("active"); });
          if (!isActive) {
            item.classList.add("active");
          }
        });
      }
    });
  }
})();

/*about page */
function animateCounter(element, target, suffix) {
  if (!element) return;
  suffix = suffix || '';
  var current = 0;
  var increment = target / 80;
  var timer = setInterval(function () {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 25);
}

function initializeCounters() {
  var statCards = document.querySelectorAll('.stat-card');
  if (!statCards.length) return;
  statCards.forEach(function (card, index) {
    setTimeout(function () {
      var numberElement = card.querySelector('.stat-number');
      var target = parseInt(card.dataset.target);
      var suffix = card.dataset.suffix || '';
      if (numberElement && !isNaN(target)) {
        animateCounter(numberElement, target, suffix);
      }
    }, index * 200);
  });
}

(function () {
  var cardContainers = document.querySelectorAll('.card-container');

  if (cardContainers.length > 0) {
    cardContainers[0].classList.add('flipped');
  }

  if ('ontouchstart' in window) {
    cardContainers.forEach(function (container) {
      container.addEventListener('click', function (e) {
        e.preventDefault();
        cardContainers.forEach(function (otherContainer) {
          if (otherContainer !== container) {
            otherContainer.classList.remove('flipped');
          }
        });
        this.classList.toggle('flipped');
      });
    });
  }

  var section = document.querySelector('.About-section');
  if (section && typeof IntersectionObserver !== 'undefined') {
    var observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          initializeCounters();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(section);
  }
})();

/*career page*/
var activeJobs = [];
var inactiveJobs = [];

function updateJobStatus(jobId, status) {
  var jobCard = document.getElementById(jobId);
  if (!jobCard) return;
  var applyButton = jobCard.querySelector('.careers-apply-btn');
  if (!applyButton) return;
  if (status === 'active') {
    if (activeJobs.indexOf(jobId) === -1) activeJobs.push(jobId);
    applyButton.style.pointerEvents = 'auto';
    applyButton.style.opacity = '1';
    applyButton.textContent = 'Apply Now';
  } else if (status === 'inactive') {
    if (inactiveJobs.indexOf(jobId) === -1) inactiveJobs.push(jobId);
    applyButton.style.pointerEvents = 'none';
    applyButton.style.opacity = '0.5';
    applyButton.textContent = 'Position Filled';
  }
}

(function () {
  updateJobStatus('job-card-1', 'active');
  updateJobStatus('job-card-2', 'active');
  updateJobStatus('job-card-3', 'inactive');
  updateJobStatus('job-card-4', 'inactive');
  updateJobStatus('job-card-5', 'inactive');
  updateJobStatus('job-card-6', 'active');
  updateJobStatus('job-card-7', 'inactive');
  updateJobStatus('job-card-8', 'inactive');
  updateJobStatus('job-card-9', 'active');
  updateJobStatus('job-card-10', 'inactive');
})();

function addJobToActive(jobId) {
  updateJobStatus(jobId, 'active');
}
function addJobToInactive(jobId) {
  updateJobStatus(jobId, 'inactive');
}

/*company year */
var startYear = 2011;
var startMonth = 10;
var startDay = 6;

var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth() + 1;
var currentDay = currentDate.getDate();

var yearsOfExcellence = currentYear - startYear;

if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
  yearsOfExcellence--;
}

var excellenceElements = document.getElementsByClassName("yearsOfExcellence");
for (var i = 0; i < excellenceElements.length; i++) {
  excellenceElements[i].textContent = yearsOfExcellence + "+";
}

var countryCodeEl = document.getElementById("countryCode");
if (countryCodeEl) {
  countryCodeEl.addEventListener("change", function () {
    var selectedOption = this.options[this.selectedIndex];
    this.style.width = "100%";
    this.setAttribute("placeholder", selectedOption.text);
  });
}

/*ai video*/
(function () {
  var video = document.getElementById("aiVideo");
  if (video && typeof IntersectionObserver !== 'undefined') {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
  }
})();

/*based on country code symbol will change*/
function updateBudgetOptions() {
  var countryEl = document.getElementById('countryCode');
  var budgetEl = document.getElementById('budget');
  if (!countryEl || !budgetEl) return;
  var selectedCountry = countryEl.value;
  var selectedOption = countryEl.querySelector('option:checked');
  var selectedCurrencySymbol = selectedOption ? selectedOption.getAttribute('data-currency-symbol') : '$';
  var budgetOptions = budgetEl.options;
  if (!budgetOptions || budgetOptions.length < 7) return;

  if (selectedCountry === '91') {
    budgetOptions[1].text = "\u20B980,000 to \u20B91,50,000";
    budgetOptions[1].value = "\u20B980000 to \u20B9150000";
    budgetOptions[2].text = "\u20B91,50,000 to \u20B94,00,000";
    budgetOptions[2].value = "\u20B9150000 to \u20B9400000";
    budgetOptions[3].text = "\u20B94,00,000 to \u20B910,00,000";
    budgetOptions[3].value = "\u20B9400000 to \u20B91000000";
    budgetOptions[4].text = "\u20B910,00,000 to \u20B925,00,000";
    budgetOptions[4].value = "\u20B91000000 to \u20B92500000";
    budgetOptions[5].text = "\u20B925,00,000 to \u20B950,00,000";
    budgetOptions[5].value = "\u20B92500000 to \u20B95000000";
    budgetOptions[6].text = "\u20B950,00,000 and above";
    budgetOptions[6].value = "\u20B95000000 and above";
  } else {
    if (!selectedCurrencySymbol) selectedCurrencySymbol = "$";
    budgetOptions[1].text = selectedCurrencySymbol + "5,000 to " + selectedCurrencySymbol + "10,000";
    budgetOptions[1].value = selectedCurrencySymbol + "5,000 to " + selectedCurrencySymbol + "10,000";
    budgetOptions[2].text = selectedCurrencySymbol + "10,000 to " + selectedCurrencySymbol + "25,000";
    budgetOptions[2].value = selectedCurrencySymbol + "10,000 to " + selectedCurrencySymbol + "25,000";
    budgetOptions[3].text = selectedCurrencySymbol + "25,000 to " + selectedCurrencySymbol + "50,000";
    budgetOptions[3].value = selectedCurrencySymbol + "25,000 to " + selectedCurrencySymbol + "50,000";
    budgetOptions[4].text = selectedCurrencySymbol + "50,000 to " + selectedCurrencySymbol + "100,000";
    budgetOptions[4].value = selectedCurrencySymbol + "50,000 to " + selectedCurrencySymbol + "100,000";
    budgetOptions[5].text = selectedCurrencySymbol + "100,000 to " + selectedCurrencySymbol + "1,000,000";
    budgetOptions[5].value = selectedCurrencySymbol + "100,000 to " + selectedCurrencySymbol + "1,000,000";
    budgetOptions[6].text = selectedCurrencySymbol + "1,000,000 and above";
    budgetOptions[6].value = selectedCurrencySymbol + "1,000,000 and above";
  }
}

var countryCodeEl2 = document.getElementById('countryCode');
if (countryCodeEl2) { countryCodeEl2.addEventListener('change', updateBudgetOptions); }
window.addEventListener('load', function () {
  updateBudgetOptions();
});

// FAQ Accordion Functionality
(function () {
  var faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function () {
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });
})();

/* ===== HOME MEGA MENU — sidebar hover switching ===== */
(function () {
  var layouts = document.querySelectorAll('.home-mega-layout');
  if (!layouts.length) return;

  layouts.forEach(function (layout) {
    var items = layout.querySelectorAll('.js-home-mega-item');
    var panels = layout.querySelectorAll('.home-mega-panel');

    items.forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        items.forEach(function (i) { i.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        item.classList.add('active');
        var targetId = item.getAttribute('data-target');
        if (targetId) {
          var target = document.getElementById(targetId);
          if (target) target.classList.add('active');
        }
      });
    });
  });
})();

/* ===== OWL CAROUSEL RE-INIT FOR NEXT.JS ===== */
(function initCarouselsWhenReady() {
  if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
    setTimeout(initCarouselsWhenReady, 150);
    return;
  }
  var $ = jQuery;

  var owl = $(".full-work-app");
  if (owl.length && !owl.hasClass('owl-loaded')) {
    owl.owlCarousel({
      items: 4, nav: false, dots: false, autoplay: true, loop: true,
      center: false, margin: 20, autoplayTimeout: 35000,
      autoplayHoverPause: true, autoHeight: true, smartSpeed: 1000,
      responsive: {
        0: { items: 1, stagePadding: 40 },
        520: { items: 1, stagePadding: 40 },
        768: { items: 2 },
        1200: { items: 3 },
        1400: { items: 4 },
        1600: { items: 4 }
      }
    });
    $(".custom-next").click(function () { owl.trigger("next.owl.carousel"); });
    $(".custom-prev").click(function () { owl.trigger("prev.owl.carousel"); });
  }

  var hb = $(".hero-brands");
  if (hb.length && !hb.hasClass('owl-loaded')) {
    hb.owlCarousel({
      items: 6, nav: false, dots: false, autoplay: true, loop: true,
      margin: 10, autoplayTimeout: 2500, autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: { 0: { items: 3 }, 520: { items: 4 }, 768: { items: 5 }, 1200: { items: 6 } }
    });
  }

  var tc = $(".testimonial-cards");
  if (tc.length && !tc.hasClass('owl-loaded')) {
    tc.owlCarousel({
      items: 3, nav: true, dots: false, autoplay: true, loop: true,
      margin: 30, autoplayTimeout: 5000, autoplayHoverPause: true,
      smartSpeed: 800,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });
  }

  var fwb = $(".full-work-block");
  if (fwb.length && !fwb.hasClass('owl-loaded')) {
    fwb.owlCarousel({
      items: 4, nav: true, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 5000, smartSpeed: 1000,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  var hrs = $(".home-review-slider");
  if (hrs.length && !hrs.hasClass('owl-loaded')) {
    hrs.owlCarousel({
      items: 3, nav: true, dots: false, autoplay: true, loop: true,
      margin: 30, autoplayTimeout: 5000, smartSpeed: 800,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });
  }

  var tr = $(".trust-review");
  if (tr.length && !tr.hasClass('owl-loaded')) {
    tr.owlCarousel({
      items: 4, nav: false, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 3000, smartSpeed: 800,
      responsive: { 0: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  var svc = $(".ree-ca-service");
  if (svc.length && !svc.hasClass('owl-loaded')) {
    svc.owlCarousel({
      items: 4, nav: true, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 5000, smartSpeed: 1000,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  var apps = $(".app-screenss");
  if (apps.length && !apps.hasClass('owl-loaded')) {
    apps.owlCarousel({
      items: 5, nav: false, dots: false, autoplay: true, loop: true,
      margin: 10, autoplayTimeout: 3000, smartSpeed: 800,
      responsive: { 0: { items: 2 }, 520: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 } }
    });
  }
})();