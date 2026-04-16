/**
 * Homepage JS — runs after DOM ready
 * Contains: AOS init, FAQ, Location carousel (exact from original), 
 * Industries carousel, View All modal, stat counters, years of excellence
 */

/* ===== LOCATION CAROUSEL — Migrated to React component ===== */


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
/* ===== FAQ ACCORDION ===== */
(function initFaq() {
  var items = document.querySelectorAll('._faq_item');
  if (!items.length) { if (!window.__hfaqR) window.__hfaqR=0; if (window.__hfaqR<20) { window.__hfaqR++; return setTimeout(initFaq, 300); } return; }
  items.forEach(function(item) {
    var btn = item.querySelector('._faq_question');
    if (!btn || btn.dataset.faqBound) return;
    btn.dataset.faqBound = '1';
    btn.addEventListener('click', function() {
      var isActive = item.classList.contains('active');
      items.forEach(function(i) { i.classList.remove('active'); i.classList.remove('glow'); });
      if (!isActive) { item.classList.add('active'); item.classList.add('glow'); }
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