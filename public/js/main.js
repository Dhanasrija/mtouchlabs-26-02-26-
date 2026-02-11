/* Template: mTouch Labs Web Design & Digital Marketing Agency HTML5 Template*/
/*Author: Rajesh-Doot*/
/*File Description: Main JS file of the template*/

/**Table of contents**
1. Mobile sidebar menu   2. Sticky Header    3. Bootstrap Tooltips    4.  Owl-Carousel   5. Counter Up   6. Video magnific Popup    7  .scroll to top  **/

(function ($) {
  "use strict";

  //Preloader
  window.addEventListener("load", function () {
    var preloadpage = document.getElementById("page-load");
    if (preloadpage) {
      preloadpage.style.display = "none";
    }
  });

  //Mobile sidebar menu
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

  //Sticky Header
  function updateScroll() {
    if ($(window).scrollTop() >= 80) {
      $(".ree-header").addClass("sticky");
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
  $('[data-toggle="tooltip"]').tooltip();

  //Owl-Carousel - Home hero brands
  setTimeout(function () {
    $(".hero-brands").owlCarousel({
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
        0: {
          items: 2,
        },
        520: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 6,
        },
        1400: {
          items: 6,
        },
        1600: {
          items: 6,
        },
      },
    });
  });

  //Owl-Carousel - Home work slide
  setTimeout(function () {
    $(".full-work-block").owlCarousel({
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
        0: {
          items: 1,
        },
        520: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
        },
        1600: {
          items: 3,
        },
      },
    });
  });

  //Owl-Carousel - Home reivew slide
  setTimeout(function () {
    $(".home-review-slider").owlCarousel({
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

  //Owl-Carousel - home app reivew slide
  setTimeout(function () {
    $(".testimonial-card-b").owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      dotsContainer: "#testimonials-avatar",
      smartSpeed: 500,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1400: {
          items: 1,
        },
      },
    });
  });
  setTimeout(function () {
    $(".testimonial-cards").owlCarousel({
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
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1024: {
          items: 3,
        },
        1400: {
          items: 3,
        },
      },
    });
  });

  //Owl-Carousel - contact page review slide
  setTimeout(function () {
    $(".trust-review ").owlCarousel({
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
  /*  setTimeout(function () {
     $(".full-work-app").owlCarousel({
       items: 4,
       nav: true,
       dots: false,
       autoplay: true,
       loop: true,
       center: false,
       margin: 20,
       // stagePadding: 90,
       autoplayTimeout: 35000,
       autoplayHoverPause: true,
       autoHeight: true,
       smartSpeed: 1000,
       navText: [
         "<i class='fas fa-chevron-left'></i>",
         "<i class='fas fa-chevron-right'></i>",
       ],
       responsive: {
         0: {
           items: 1,
           stagePadding: 40,
         },
         520: {
           items: 1,
           stagePadding: 40,
         },
         768: {
           items: 2,
         },
         1200: {
           items: 3,
         },
         1400: {
           items: 4,
         },
         1600: {
           items: 4,
         },
       },
     });
   });
  */
  setTimeout(function () {
    var owl = $(".full-work-app");
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
    $(".ree-ca-service").owlCarousel({
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
        0: {
          items: 1,
        },
        520: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1400: {
          items: 3,
        },
        1600: {
          items: 3,
        },
      },
    });
  });

  //Owl-Carousel - digital agency hero slider
  setTimeout(function () {
    $(".hero-owl").owlCarousel({
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
    $(".app-screenss").owlCarousel({
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
        0: {
          items: 2,
        },
        520: {
          items: 3,
        },
        768: {
          items: 4,
        },
        1200: {
          items: 4,
        },
        1400: {
          items: 5,
        },
        1600: {
          items: 5,
        },
      },
    });
  });

  //Owl-Carousel - Testimonial cards
  setTimeout(function () {
    var $tc = $(".testimonial-cards");

    // Attach aria labels when owl creates nav buttons
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
    $(".counter").counterUp({
      delay: 10,
      time: 4500,
    });
  });

  //Video magnificPopup
  setTimeout(function () {
    $(".video-popup").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
    });
  });

  setTimeout(function () {
    $(".accordion-item").click(function () {
      var acordiaonstatus = $(this)
        .find(".accordion-title")
        .parents()
        .attr("aria-expanded");
      if (acordiaonstatus == "false") {
        $(".accordion-title").parents().attr("aria-expanded", "false");
        $(this)
          .find(".accordion-title")
          .parents()
          .attr("aria-expanded", "true");
      } else {
        $(this)
          .find(".accordion-title")
          .parents()
          .attr("aria-expanded", "false");
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
  AOS.init({
    offset: 10,
    delay: 0,
    duration: 1000,
    easing: "ease",
    once: true,
    mirror: true,
    anchorPlacement: "top-bottom",
  });



  var $nav = $("li.megamenu");
  $nav.hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );

  // Load footer and modals
  $(document).ready(function () {
    $("#footer").load("footer.html");
    $("#footer2").load("footer.html");
    $("#requestQuoteModal").load("requestquote.html");
    $("#brochureModal").load("brochureform.html");
    // load only the modal fragment to avoid pulling full HTML (head/scripts) into the page
    $("#careerformModal").load("careerform.html .modal");
    $("#openlogoModal").load("logomodal.html");

    var currentPage = window.location.pathname;
    /*drop down one*/
    $("li.megamenu a").each(function () {
      var link = $(this).attr("href");
      if (link == currentPage) {
        $(this).addClass("active");
      }
      // console.log(currentPage,link)
      if (currentPage.includes(`/${link}`) && link != "about") {
        $(this).addClass("active");
        var $parentLi = $(this).closest("li.megamenu");
        $parentLi.addClass("active_parent");
      } else if (currentPage == "/about.html" && link == "about") {
        $(this).addClass("active");

        let id = document.getElementById("firstMega");
        id.classList.add("active_parent");
      }
    });

    /*normal one*/
    $("li.megamenu1 a").each(function () {
      var link = $(this).attr("href");
      if (currentPage.includes(`/${link}`)) {
        $(this).addClass("active");
      }
    });
  });

})(jQuery);

/*G-tAG*/
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof (url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-836875485/MlvRCKLkqbkaEN3pho8D',
    'event_callback': callback
  });
  return false;
}

/*request modal*/
function openModal() {
  gtag_report_conversion(undefined)
  var modal = document.getElementById("requestQuoteModal");
  modal.classList.remove("hide");
}

function openModalcareer() {
  var modal = document.getElementById("careerformModal");
  modal.classList.remove("hide");
}

function closeModalcareer() {
  var modal = document.getElementById("careerformModal");
  modal.classList.add("hide");
}

function brochureModalClick() {
  var modal = document.getElementById("brochureModal");
  modal.classList.remove("hide");
}
function openPdf() {
  window.open("../files/mTouchLabs_Brochure.pdf", "_blank");
  // var modal = document.getElementById("brochureModal");
  // modal.classList.remove("hide");
}

function openlogoModal() {
  var modal = document.getElementById("openlogoModal");
  modal.classList.remove("hide");
}

function closeModal() {
  var modal = document.getElementById("requestQuoteModal");
  modal.classList.add("hide");
}


function closeModal1() {
  var modal = document.getElementById("brochureModal");
  modal.classList.add("hide");
}


function closeModal2() {
  var modal = document.getElementById("openlogoModal");
  modal.classList.add("hide");
}

// Close the brochure modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  var modal = document.getElementById("brochureModal");
  if (event.target == modal) {
    modal.classList.add("hide");
  }
};




/*home page jobs*/
(function () {
  const tabs = document.querySelectorAll(".what-we-do-tab-link");
  const panels = document.querySelectorAll(".what-we-do-tab-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });
})();

/*--technologies we work--*/
(() => {
  const tabButtons = document.querySelectorAll(".technologies-tab-button");
  const contentSections = document.querySelectorAll(".technologies-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      contentSections.forEach((section) => section.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
})();

const cityData = {
  hyderabad: {
    name: "Hyderabad",
    address:
      "mTouch Labs Private Limited, #514, Manjeera Trinity Corporate, JNTU â€“ Hitech City Road, Kukatpally, Hyderabad â€“ 500072",
    phone: "+91-9390683154",
    email: "contact@mtouchlabs.com",
    imgSrc: "images/home/hyderbad2.png",
  },
  bangalore: {
    name: "Bangalore",
    address:
      "mTouch Labs Private Limited, #101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka - 560076",
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
  const tabs = document.querySelectorAll(".newfooter-tab");
  if (!tabs.length) return;
  const cities = document.querySelectorAll(".newfooter-city");
  const cityNames = ["hyderabad", "bangalore", "usa"]; // Order of cities

  let currentCityIndex = 0;

  // Function to handle tab switching and content change
  function changeCity(cityId) {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    cities.forEach((city) => {
      city.classList.remove("active");
    });

    // Add active class to the clicked tab
    const selectedTab = document.querySelector(
      `button[onclick="changeCity('${cityId}')"]`
    );
    if (selectedTab) selectedTab.classList.add("active");

    // Show the corresponding city content
    const selectedCity = document.getElementById(cityId);
    if (selectedCity) selectedCity.classList.add("active");

    // Update the second container's content based on the selected city
    updateFooterContent(cityId);
  }

  function updateFooterContent(cityId) {
    const cityIndex = cityNames.indexOf(cityId);

    // Adjust the nextCities array based on the active city
    let nextCities;
    if (cityId === "hyderabad") {
      nextCities = ["bangalore", "usa"]; // Bangalore first, USA second
    } else if (cityId === "bangalore") {
      nextCities = ["usa", "hyderabad"]; // USA first, Hyderabad second
    } else if (cityId === "usa") {
      nextCities = ["hyderabad", "bangalore"]; // Hyderabad first, Bangalore second
    }

    const containerOne = document.querySelector(".newfooter_container_main");
    if (!containerOne) return;

    // Update the second container with two cities (exclude active city)
    containerOne.innerHTML = `
      <h2>Fuel Your Business <br></br> Success</h2>
      <div class="newfooter_container_two">
        ${nextCities
        .map((city) => {
          const data = cityData[city];
          return `
            <div class="newfooter-two-text-card">
              <div class="newfooter-card-img">
                <img src="${data.imgSrc}" alt="${data.name}">
              </div>
              <div class="newfooter-card-content">
                <h3>${data.name}</h3>
                <p>${data.address}</p>
              </div>
            </div>
          `;
        })
        .join("")}
      </div>
    `;
  }

  // Trigger the default city on load (Hyderabad)
  changeCity("hyderabad");

  // Adding click event listeners to each tab dynamically
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const cityId = tab.textContent.trim().toLowerCase();
      changeCity(cityId);
    });
  });
})();

function applyMarginBottom(contact) {
  let addressParagraphs = contact.querySelectorAll("p");
  addressParagraphs.forEach(function (p) {
    p.style.marginBottom = "10px";
  });
}

/*Home page questions*/
(function () {
  const faqItems = document.querySelectorAll(".Home-faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".Home-faq-question");
    question.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      if (!isActive) {
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
        this.querySelector(".Home-faq-toggle").textContent = "-";
      } else {
        this.classList.remove("active");
        this.nextElementSibling.style.display = "none";
        this.querySelector(".Home-faq-toggle").textContent = "+";
      }
    });
  });
})();

/*procduct page questions*/
(function () {
  const faqItems = document.querySelectorAll(".food-faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".food-faq-question");
    question.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      if (!isActive) {
        this.classList.add("active");
        this.nextElementSibling.style.display = "block";
        this.querySelector(".food-faq-toggle").textContent = "x";
      } else {
        this.classList.remove("active");
        this.nextElementSibling.style.display = "none";
        this.querySelector(".food-faq-toggle").textContent = "+";
      }
    });
  });
})();

/*services*/
// Tab functionality
(function () {
  const tabs = document.querySelectorAll('.servicesaNew-tab');
  const contentItems = document.querySelectorAll('.servicesaNew-content-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');

      // Remove active class from all tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        const icon = t.querySelector('.servicesaNew-tab-icon');
        icon.textContent = '+';
        icon.classList.remove('minus');
        icon.classList.add('plus');
      });

      // Add active class to clicked tab
      this.classList.add('active');
      const activeIcon = this.querySelector('.servicesaNew-tab-icon');
      activeIcon.textContent = '−';
      activeIcon.classList.remove('plus');
      activeIcon.classList.add('minus');

      // Hide all content items
      contentItems.forEach(item => {
        item.classList.remove('active');
      });

      // Show corresponding content
      document.getElementById(tabId).classList.add('active');
    });
  });
})();


/*home menu bar*/
(() => {
  const dropdowns = document.querySelectorAll(".menu-dropdown");
  const megaMenus = document.querySelectorAll(".megamenu");

  dropdowns.forEach((dropdown) => {
    dropdown.style.display = "none";
  });

  // Function to show the dropdown
  function showDropdown(menu, dropdown) {
    dropdown.style.display = "block";
  }

  // Function to hide the dropdown
  function hideDropdown(dropdown) {
    dropdown.style.display = "none";
  }

  megaMenus.forEach((menu) => {
    const dropdown = menu.querySelector(".menu-dropdown");

    // Show when entering the menu item, hide when leaving the entire menu li
    menu.addEventListener("mouseenter", () => {
      showDropdown(menu, dropdown);
      // If this dropdown contains home-mega panels, ensure default panel (about) is visible
      if (dropdown.classList.contains('home-mega')) {
        // show about panel by default
        const aboutPanel = dropdown.querySelector("[data-content='custom-about'], [data-content='about']");
        if (aboutPanel) {
          // hide other panels
          dropdown.querySelectorAll('[data-content]').forEach(p => p.style.display = 'none');
          aboutPanel.style.display = '';
          // mark About as active in the left sidebar
          const allLinks = dropdown.querySelectorAll('.quick-links a');
          allLinks.forEach(l => l.classList.remove('is-current'));
          const aboutLink = dropdown.querySelector(".quick-links a[data-service='custom-about'], .quick-links a[data-service='about']");
          if (aboutLink) aboutLink.classList.add('is-current');
        }
      }
    });

    menu.addEventListener("mouseleave", () => {
      hideDropdown(dropdown);
    });
  });

  // Panel switching for home dropdown quick-links: hover switches panel and keeps it visible
  document.querySelectorAll('.menu-dropdown.home-mega').forEach(function (dropdown) {
    const quickLinks = dropdown.querySelectorAll('.quick-links a[data-service]');
    if (!quickLinks.length) return;

    function showPanelForService(svc) {
      const key = svc ? svc.replace(/^custom-/, '') : '';
      const panels = dropdown.querySelectorAll('[data-content]');
      panels.forEach(p => p.style.display = 'none');
      // Update active class on sidebar links
      const allLinks = dropdown.querySelectorAll('.quick-links a');
      allLinks.forEach(l => l.classList.remove('is-current'));
      let target = null;
      if (svc) target = dropdown.querySelector("[data-content='" + svc + "']");
      if (!target && key) target = dropdown.querySelector("[data-content='" + key + "']");
      if (!target && key) target = dropdown.querySelector("[data-content='custom-" + key + "']");
      // Set active link if present
      let activeLink = null;
      if (svc) activeLink = dropdown.querySelector(".quick-links a[data-service='" + svc + "']");
      if (!activeLink && key) activeLink = dropdown.querySelector(".quick-links a[data-service='custom-" + key + "']");
      if (!activeLink && key) activeLink = dropdown.querySelector(".quick-links a[href*='" + key + "']");
      if (activeLink) activeLink.classList.add('is-current');
      if (target) target.style.display = '';
    }

    // mouseenter keeps the panel visible; do not hide on quick link leave so user can move to right panel
    quickLinks.forEach(link => {
      link.addEventListener('mouseenter', function () {
        const svc = this.getAttribute('data-service') || '';
        showPanelForService(svc);
      });
      // also support click (navigate) while retaining panel visibility
      link.addEventListener('click', function () {
        const svc = this.getAttribute('data-service') || '';
        showPanelForService(svc);
      });
    });
  });

  // Hide dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".megamenu")) {
      dropdowns.forEach((dropdown) => {
        hideDropdown(dropdown);
      });
    }
  });
})();

/*product food tab*/
function showPanel(event, panel) {
  var panels = document.querySelectorAll(".food-application-panel");
  panels.forEach(function (p) {
    p.style.display = "none";
  });

  var panelButtons = document.querySelectorAll(".food-application-panel-btn");
  panelButtons.forEach(function (btn) {
    btn.classList.remove("active");
  });

  document.getElementById(panel).style.display = "block";
  event.target.classList.add("active");
}

(function () {
  var defaultPanelBtn = document.querySelector(
    ".food-application-panel-btn.active"
  );
  if (defaultPanelBtn) {
    showPanel(
      { target: defaultPanelBtn },
      defaultPanelBtn.getAttribute("onclick").split("'")[1]
    );
  }
})();

/*milk product page*/
function showMilkPanel(button, panelId) {
  const panels = document.querySelectorAll(".milk-application-panel");
  panels.forEach((panel) => (panel.style.display = "none"));
  const buttons = document.querySelectorAll(".milk-application-panel-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  document.getElementById(panelId).style.display = "block";
  button.classList.add("active");
}
(function () {
  const defaultPanelBtn = document.querySelector(
    ".milk-application-panel-btn.active"
  );
  if (defaultPanelBtn) {
    const panelId = defaultPanelBtn
      .getAttribute("onclick")
      .match(/'([^']+)'/)[1];
    showMilkPanel(defaultPanelBtn, panelId);
  }
})();

/*product page questions*/
(function () {
  let year = document.getElementById("currentYear");
  console.log(year);
  if (year) {
    document.getElementById("currentYear").textContent =
      new Date().getFullYear();
  }
  const faqItems = document.querySelectorAll(".food-faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".grocary-faq-question");
    if (question) {
      question.addEventListener("click", function () {
        const isActive = this.classList.contains("active");

        if (!isActive) {
          this.classList.add("active");
          this.nextElementSibling.style.display = "block";
          this.querySelector(".food-faq-toggle").textContent = "x";
        } else {
          this.classList.remove("active");
          this.nextElementSibling.style.display = "none";
          this.querySelector(".food-faq-toggle").textContent = "+";
        }
      });
    }
  });
})();

/*product page  active tabs*/
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(
    "product-container-four-tabcontent"
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}


/*products page active tab*/
document.querySelectorAll(".product-container-five-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.98)";
    setTimeout(() => {
      card.style.transform = "scale(1)";
    }, 150);
  });
});


/*service page bg */

(function () {
  const banner = document.querySelector('.AIservices-banner');
  if (!banner) return;
  const bgImage = banner.getAttribute('data-bg');

  if (bgImage) {
    banner.style.background = `url('${bgImage}') center/cover no-repeat`;
  }
})();




/*blog*/
(function () {
  const sections = document.querySelectorAll(".blogid-content-section");
  const navLinks = document.querySelectorAll(".blogid-toc ul li a");

  function activateLinkOnScroll() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        currentSectionId = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateLinkOnScroll);

  // FAQ Accordion Functionality
  const faqItems = document.querySelectorAll(".blogid-faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".blogid-faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        // Close all items
        faqItems.forEach((faqItem) => {
          faqItem.classList.remove("active");
        });
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
})();


/*about page */
// Counter Animation Function
function animateCounter(element, target, suffix = '') {
  let current = 0;
  const increment = target / 80; // Slower animation
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 25);
}

// Initialize counters when page loads
function initializeCounters() {
  const statCards = document.querySelectorAll('.stat-card');
  statCards.forEach((card, index) => {
    setTimeout(() => {
      const numberElement = card.querySelector('.stat-number');
      const target = parseInt(card.dataset.target);
      const suffix = card.dataset.suffix || '';
      animateCounter(numberElement, target, suffix);
    }, index * 200);
  });
}

// Card flip functionality and counter observer (IIFE — no DOMContentLoaded dependency)
(function () {
  const cardContainers = document.querySelectorAll('.card-container');

  // Flip the first card by default
  if (cardContainers.length > 0) {
    cardContainers[0].classList.add('flipped');
  }

  // Handle touch devices (click-to-flip)
  if ('ontouchstart' in window) {
    cardContainers.forEach(container => {
      container.addEventListener('click', function (e) {
        e.preventDefault();
        cardContainers.forEach(otherContainer => {
          if (otherContainer !== container) {
            otherContainer.classList.remove('flipped');
          }
        });
        this.classList.toggle('flipped');
      });
    });
  }

  // Intersection Observer for counter animations
  const section = document.querySelector('.About-section');
  if (section) {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
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
let activeJobs = [];
let inactiveJobs = [];

function updateJobStatus(jobId, status) {
  const jobCard = document.getElementById(jobId);
  if (!jobCard) return;
  const applyButton = jobCard.querySelector('.careers-apply-btn');
  if (!applyButton) return;
  if (status === 'active') {
    if (!activeJobs.includes(jobId)) {
      activeJobs.push(jobId);
    }
    applyButton.style.pointerEvents = 'auto';
    applyButton.style.opacity = '1';
    applyButton.textContent = 'Apply Now';
  }
  else if (status === 'inactive') {
    if (!inactiveJobs.includes(jobId)) {
      inactiveJobs.push(jobId);
    }
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
const startYear = 2011;
const startMonth = 10;
const startDay = 6;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

let yearsOfExcellence = currentYear - startYear;

if (currentMonth < startMonth || (currentMonth === startMonth && currentDay < startDay)) {
  yearsOfExcellence--;
}

console.log(yearsOfExcellence);

var elements = document.getElementsByClassName("yearsOfExcellence");

for (var i = 0; i < elements.length; i++) {
  elements[i].textContent = `${yearsOfExcellence}+`;
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
const video = document.getElementById("aiVideo");
if (video) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.5
    }
  );
  observer.observe(video);
}

/*based on country code symbol will change*/
function updateBudgetOptions() {
  var countryEl = document.getElementById('countryCode');
  var budgetEl = document.getElementById('budget');
  if (!countryEl || !budgetEl) return;
  var selectedCountry = countryEl.value;
  var selectedCurrencySymbol = document.querySelector('#countryCode option:checked').getAttribute('data-currency-symbol');
  var budgetOptions = budgetEl.options;

  if (selectedCountry === '91') {
    budgetOptions[1].text = "₹80,000 to ₹1,50,000";
    budgetOptions[1].value = "₹80000 to ₹150000";

    budgetOptions[2].text = "₹1,50,000 to ₹4,00,000";
    budgetOptions[2].value = "₹150000 to ₹400000";

    budgetOptions[3].text = "₹4,00,000 to ₹10,00,000";
    budgetOptions[3].value = "₹400000 to ₹1000000";

    budgetOptions[4].text = "₹10,00,000 to ₹25,00,000";
    budgetOptions[4].value = "₹1000000 to ₹2500000";

    budgetOptions[5].text = "₹25,00,000 to ₹50,00,000";
    budgetOptions[5].value = "₹2500000 to ₹5000000";

    budgetOptions[6].text = "₹50,00,000 and above";
    budgetOptions[6].value = "₹5000000 and above";

  } else {
    // Ensure currency symbol is defined
    if (!selectedCurrencySymbol) {
      selectedCurrencySymbol = "$";
    }

    budgetOptions[1].text = selectedCurrencySymbol + "5,000 to " + selectedCurrencySymbol + "10,000";
    budgetOptions[1].value = selectedCurrencySymbol + "5,000 to " + selectedCurrencySymbol + "10,000";  // value with currency symbol and range

    budgetOptions[2].text = selectedCurrencySymbol + "10,000 to " + selectedCurrencySymbol + "25,000";
    budgetOptions[2].value = selectedCurrencySymbol + "10,000 to " + selectedCurrencySymbol + "25,000";  // value with currency symbol and range

    budgetOptions[3].text = selectedCurrencySymbol + "25,000 to " + selectedCurrencySymbol + "50,000";
    budgetOptions[3].value = selectedCurrencySymbol + "25,000 to " + selectedCurrencySymbol + "50,000";  // value with currency symbol and range

    budgetOptions[4].text = selectedCurrencySymbol + "50,000 to " + selectedCurrencySymbol + "100,000";
    budgetOptions[4].value = selectedCurrencySymbol + "50,000 to " + selectedCurrencySymbol + "100,000";  // value with currency symbol and range

    budgetOptions[5].text = selectedCurrencySymbol + "100,000 to " + selectedCurrencySymbol + "1,000,000";
    budgetOptions[5].value = selectedCurrencySymbol + "100,000 to " + selectedCurrencySymbol + "1,000,000";  // value with currency symbol and range

    budgetOptions[6].text = selectedCurrencySymbol + "1,000,000 and above";
    budgetOptions[6].value = selectedCurrencySymbol + "1,000,000 and above";
  }

  // Log the updated budget options for debugging
  for (var i = 1; i < budgetOptions.length; i++) {
    console.log('Budget Option ' + i + ':', budgetOptions[i].text, 'Value:', budgetOptions[i].value);
  }
}
var countryCodeEl2 = document.getElementById('countryCode');
if (countryCodeEl2) { countryCodeEl2.addEventListener('change', updateBudgetOptions); }
window.onload = function () {
  updateBudgetOptions();
};

// Navbar 





// FAQ Accordion Functionality
(function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', function () {
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      item.classList.toggle('active');
    });
  });
})();



/* ===== HOME MEGA MENU — sidebar hover switching (global) ===== */
(function () {
  var items = document.querySelectorAll('.js-home-mega-item');
  if (!items.length) return;

  items.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      items.forEach(function (i) { i.classList.remove('active'); });
      document.querySelectorAll('.home-mega-panel').forEach(function (p) { p.classList.remove('active'); });
      item.classList.add('active');
      var target = document.getElementById(item.getAttribute('data-target'));
      if (target) target.classList.add('active');
    });
  });
})();

/* ===== OWL CAROUSEL RE-INIT FOR NEXT.JS ===== */
/* Scripts load with afterInteractive - owl may not be ready when main.js runs */
(function initCarouselsWhenReady() {
  if (typeof jQuery === 'undefined' || !jQuery.fn.owlCarousel) {
    setTimeout(initCarouselsWhenReady, 150);
    return;
  }
  var $ = jQuery;

  // Portfolio / Quality Work carousel
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
    $(".custom-next").click(function(){ owl.trigger("next.owl.carousel"); });
    $(".custom-prev").click(function(){ owl.trigger("prev.owl.carousel"); });
  }

  // Hero brands
  var hb = $(".hero-brands");
  if (hb.length && !hb.hasClass('owl-loaded')) {
    hb.owlCarousel({
      items: 6, nav: false, dots: false, autoplay: true, loop: true,
      margin: 10, autoplayTimeout: 2500, autoplayHoverPause: true,
      smartSpeed: 1000,
      responsive: { 0: { items: 3 }, 520: { items: 4 }, 768: { items: 5 }, 1200: { items: 6 } }
    });
  }

  // Testimonial cards
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

  // Full work block
  var fwb = $(".full-work-block");
  if (fwb.length && !fwb.hasClass('owl-loaded')) {
    fwb.owlCarousel({
      items: 4, nav: true, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 5000, smartSpeed: 1000,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  // Home review slider
  var hrs = $(".home-review-slider");
  if (hrs.length && !hrs.hasClass('owl-loaded')) {
    hrs.owlCarousel({
      items: 3, nav: true, dots: false, autoplay: true, loop: true,
      margin: 30, autoplayTimeout: 5000, smartSpeed: 800,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
    });
  }

  // Trust review
  var tr = $(".trust-review");
  if (tr.length && !tr.hasClass('owl-loaded')) {
    tr.owlCarousel({
      items: 4, nav: false, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 3000, smartSpeed: 800,
      responsive: { 0: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  // Services carousel
  var svc = $(".ree-ca-service");
  if (svc.length && !svc.hasClass('owl-loaded')) {
    svc.owlCarousel({
      items: 4, nav: true, dots: false, autoplay: true, loop: true,
      margin: 20, autoplayTimeout: 5000, smartSpeed: 1000,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
      responsive: { 0: { items: 1 }, 520: { items: 2 }, 768: { items: 3 }, 1200: { items: 4 } }
    });
  }

  // App screens carousel
  var apps = $(".app-screenss");
  if (apps.length && !apps.hasClass('owl-loaded')) {
    apps.owlCarousel({
      items: 5, nav: false, dots: false, autoplay: true, loop: true,
      margin: 10, autoplayTimeout: 3000, smartSpeed: 800,
      responsive: { 0: { items: 2 }, 520: { items: 3 }, 768: { items: 4 }, 1200: { items: 5 } }
    });
  }
})();