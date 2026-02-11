/**
 * Homepage JS — runs after DOM ready
 * Contains: AOS init, FAQ, Location carousel (exact from original), 
 * Industries carousel, View All modal, stat counters, years of excellence
 */

/* ===== LOCATION CAROUSEL — exact copy from original index.html <script> ===== */
(function () {
  var locations = {
    hyderabad: {
      address: "mTouch Labs Private Limited, #514, Manjeera Trinity Corporate, JNTU \u2013 Hitech City Road, Kukatpally, Hyderabad \u2013 500072",
      phone: "+91-9390683154",
      email: "contact@mtouchlabs.com",
      index: 0
    },
    bangalore: {
      address: "mTouch Labs Private Limited, #101, 4th Main Rd, Gayathri Layout, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka - 560076",
      phone: "+91-9014793487",
      email: "contact@mtouchlabs.com",
      index: 1
    },
    usa: {
      address: "1111b South Governors Avenue, Suite 48193,Dover,Delaware (DE)-19904 United States (US)",
      phone: "+1 (551) 222-0070",
      email: "contact@mtouchlabs.com",
      index: 2
    }
  };

  var buttons = document.querySelectorAll('._location_we_serve_location-btn');
  var divs = document.querySelectorAll('._location_we_serve_carousel-card');
  var carouselWrapper = document.getElementById('carouselWrapper');
  var addressText = document.getElementById('addressText');
  var phoneNumber = document.getElementById('phoneNumber');
  var emailAddress = document.getElementById('emailAddress');
  var cards = document.querySelectorAll('._location_we_serve_card');
  var cardbtn = document.querySelectorAll('._location_we_serve_view-map-btn');

  if (!carouselWrapper || !addressText) return;

  var currentIndex = 0;
  var totalCards = 3;

  function updateLocation(locationKey) {
    var location = locations[locationKey];
    if (!location) return;
    currentIndex = location.index;

    // Update text info
    addressText.textContent = location.address;
    phoneNumber.textContent = location.phone;
    emailAddress.textContent = location.email;

    // Move carousel
    var offset = -currentIndex * 300;
    carouselWrapper.style.transition = 'transform 0.5s ease-in-out';
    carouselWrapper.style.transform = 'translateX(' + offset + 'px)';

    // Update button active state
    buttons.forEach(function (btn) {
      btn.classList.remove('active');
      if (btn.getAttribute('data-location') === locationKey) {
        btn.classList.add('active');
      }
    });

    // Resize active card
    cards.forEach(function (card, index) {
      card.style.transition = 'width 0.4s ease';
      if (index === currentIndex) {
        card.style.width = '400px';
      } else {
        card.style.width = '300px';
      }
    });

    // Show/hide view map buttons
    cardbtn.forEach(function (card, index) {
      if (index !== currentIndex) {
        card.style.display = 'none';
      } else {
        card.style.display = 'block';
      }
    });

    // Handle looping
    setTimeout(function () {
      if (currentIndex >= totalCards) {
        carouselWrapper.style.transition = 'none';
        currentIndex = 0;
        carouselWrapper.style.transform = 'translateX(0px)';
      }
    }, 500);
  }

  // Initialize default
  updateLocation('hyderabad');

  // Add button click listeners
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      updateLocation(button.getAttribute('data-location'));
    });
  });

  // Add card click listeners
  divs.forEach(function (card) {
    card.addEventListener('click', function () {
      updateLocation(card.getAttribute('data-location'));
    });
  });
})();


/* ===== AOS INIT ===== */
if (typeof AOS !== 'undefined') {
  AOS.init();
}


/* ===== INDUSTRIES CAROUSEL ===== */
(function () {
  var carouselGrid = document.querySelector('.industries-grid');
  var prevBtn = document.querySelector('.industries-carousel-prev');
  var nextBtn = document.querySelector('.industries-carousel-next');
  var wrapper = document.querySelector('.industries-carousel-wrapper');

  if (!carouselGrid || !prevBtn || !nextBtn || !wrapper) return;

  var scrollPosition = 0;
  var itemWidth = 180;
  var gap = 30;
  var scrollAmount = itemWidth + gap;

  function getVisibleItems() {
    return Math.floor(wrapper.offsetWidth / scrollAmount);
  }

  function getMaxScroll() {
    var totalItems = carouselGrid.children.length;
    return (totalItems - getVisibleItems()) * scrollAmount;
  }

  function updateButtons() {
    var maxScroll = getMaxScroll();
    prevBtn.style.opacity = scrollPosition <= 0 ? '0.5' : '1';
    prevBtn.style.pointerEvents = scrollPosition <= 0 ? 'none' : 'auto';
    nextBtn.style.opacity = scrollPosition >= maxScroll ? '0.5' : '1';
    nextBtn.style.pointerEvents = scrollPosition >= maxScroll ? 'none' : 'auto';
  }

  function scrollCarousel(direction) {
    var maxScroll = getMaxScroll();
    if (direction === 'next') {
      scrollPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
    } else {
      scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
    }
    carouselGrid.style.transform = 'translateX(-' + scrollPosition + 'px)';
    updateButtons();
  }

  prevBtn.addEventListener('click', function () { scrollCarousel('prev'); });
  nextBtn.addEventListener('click', function () { scrollCarousel('next'); });
  updateButtons();

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      scrollPosition = 0;
      carouselGrid.style.transform = 'translateX(0)';
      updateButtons();
    }, 250);
  });
})();


/* ===== FAQ ACCORDION ===== */
(function () {
  var faqItems = document.querySelectorAll('._faq_item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('._faq_question');
    if (!question) return;
    question.addEventListener('click', function () {
      var isActive = item.classList.contains('active');
      faqItems.forEach(function (other) { other.classList.remove('active'); });
      if (!isActive) item.classList.add('active');
    });
  });
})();


/* ===== VIEW ALL LOGO MODAL ===== */
/* openlogoModal / closeModal2 are defined in main.js, 
   but the original uses onclick="openlogoModal()" which doesn't work in JSX.
   So we bind via class name instead. */
(function () {
  var viewAllBtns = document.querySelectorAll('.js-open-logo-modal');
  viewAllBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof openlogoModal === 'function') {
        openlogoModal();
      } else {
        var modal = document.getElementById('openlogoModal');
        if (modal) modal.classList.remove('hide');
      }
    });
  });

  // Close logo modal
  var closeBtns = document.querySelectorAll('.js-close-logo-modal');
  closeBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (typeof closeModal2 === 'function') {
        closeModal2();
      } else {
        var modal = document.getElementById('openlogoModal');
        if (modal) modal.classList.add('hide');
      }
    });
  });

  // Close on overlay click
  var logoOverlay = document.getElementById('openlogoModal');
  if (logoOverlay) {
    logoOverlay.addEventListener('click', function (e) {
      if (e.target === logoOverlay) {
        logoOverlay.classList.add('hide');
      }
    });
  }
})();


/* ===== TECH TAB SWITCHING ===== */
(function () {
  var tabButtons = document.querySelectorAll('.technologies-tab-button');
  var contentSections = document.querySelectorAll('.technologies-content');
  if (!tabButtons.length) return;

  tabButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      tabButtons.forEach(function (btn) { btn.classList.remove('active'); });
      contentSections.forEach(function (section) { section.classList.remove('active'); });
      button.classList.add('active');
      var target = document.getElementById(button.dataset.tab);
      if (target) target.classList.add('active');
    });
  });
})();


/* ===== TECH SCROLL ARROW — scroll to top of Technologies section ===== */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('.tech-scroll-arrow');
    if (!btn) return;
    e.preventDefault();
    var header = document.querySelector('.technologies-container-header') || document.querySelector('#web');
    if (!header) return;
    var fixedHeader = document.querySelector('.ree-header.fixed-top');
    var offset = fixedHeader ? (fixedHeader.offsetHeight || 0) : 0;
    offset += 12;
    var top = header.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(0, Math.floor(top)), behavior: 'smooth' });
  }, true);
})();


/* ===== STAT COUNTER ANIMATION ===== */
(function () {
  var counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.textContent, 10);
      if (isNaN(target)) return;
      var current = 0;
      var step = Math.max(1, Math.floor(target / 60));
      var timer = setInterval(function () {
        current += step;
        if (current >= target) { el.textContent = target; clearInterval(timer); }
        else { el.textContent = current; }
      }, 20);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(function (c) { observer.observe(c); });
})();


/* ===== YEARS OF EXCELLENCE ===== */
(function () {
  var yoe = document.querySelectorAll('.yearsOfExcellence');
  var years = new Date().getFullYear() - 2011;
  yoe.forEach(function (el) {
    if (!el.querySelector('.counter')) el.textContent = years + '+';
  });
})();