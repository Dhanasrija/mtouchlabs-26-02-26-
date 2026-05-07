// navbar-init.js - Safe, idempotent navbar initialization
(function () {
  var __navbarInitialized = false;

  function safeDestroy() {
    try {
      if (window._mobileNav && typeof window._mobileNav.destroy === 'function') {
        try { window._mobileNav.destroy(); } catch (e) { console.warn('Error destroying _mobileNav', e); }
        window._mobileNav = null;
      }
      if (window._navbarInstance && typeof window._navbarInstance.destroy === 'function') {
        try { window._navbarInstance.destroy(); } catch (e) { console.warn('Error destroying _navbarInstance', e); }
        window._navbarInstance = null;
      }
      document.querySelectorAll('.hc-offcanvas-nav, .hc-nav-trigger').forEach(function (el) {
        try { el.parentNode && el.parentNode.removeChild(el); } catch (e) { /* ignore */ }
      });
      Array.from(document.querySelectorAll('style')).forEach(function (s) {
        if (s.innerText && s.innerText.indexOf('.hc-offcanvas-nav') !== -1) {
          try { s.parentNode && s.parentNode.removeChild(s); } catch (e) { }
        }
      });
    } catch (err) {
      console.warn('safeDestroy error', err);
    }
  }

  function setActiveNavLink() {
  // ═══ REPLACE the entire `navigationSections` object inside setActiveNavLink() in navbar-init.js ═══
// Copy everything between the { } below and replace the existing navigationSections object

    var navigationSections = {
      home: {
        pages: ['index', '/',
          'it-services-digital-transformation-company',
          'vision-mission', 'leadership-team', 'our-journey',
          'awards-recognition', 'nasscom-membership', 'life-at-mtouch',
          'about', 'blog',
          'ai-role-in-business-automation',
          'top-10-free-ai-tools-for-software-developers',
          'mobile-app-development-bangalore-tech-startups',
          'top-ecommerce-niches-us',
          'hyderabad-startups-app-development-mtouch-labs'],
        selectors: ['.menu-links[href="/"]']
      },
      services: {
        pages: ['services',
          'mobile-app-development-company', 'ios-app-development-company',
          'android-app-development-company', 'ipad-app-development-company',
          'flutter-app-development-company', 'react-native-app-development-company',
          'cross-platform-app-development-company',
          'web-development-company', 'custom-software-development-company',
          'custom-cms-development-company-in-india',
          '360-degree-photography-services-in-india',
          'enterprise-application-development-company',
          'app-maintenance-support-services',
          'cloud-services', 'devops-services', 'cloud-migration-services',
          'devops-consulting-services', 'cloud-security-services',
          'cloud-managed-services', 'best-iot-development-company-in-india',
          'aws-cloud-services', 'amazon-web-services-company',
          'generative-ai-development-company', 'machine-learning-development-company',
          'data-science-solutions', 'cyber-security-services-company',
          'saas-development-services',
          'salesforce-consulting-services-company', 'salesforce-implementation-services',
          'salesforce-lightning-migration-development', 'salesforce-integration-services',
          'salesforce-sales-cloud-services',
          'ui-ux-design-company', 'mobile-app-design-company',
          'product-design-services', 'ux-research-services',
          'design-system-development', 'web-design-company',
          'digital-marketing-solutions', 'seo-services',
          'ppc-advertising-services', 'app-store-optimization-services',
          'social-media-marketing-services', 'conversion-rate-optimization-services',
          'content-marketing-services', 'email-marketing-services',
          'progressive-web-app-development-company-in-india',
          'quality-assurance-and-testing-services',
          'performance-marketing-services'],
        selectors: ['.menu-links[href="/services"]']
      },
      products: {
        pages: ['on-demand-products-development-company-hyderabad',
          'food-delivery-app-development-service', 'grocery-delivery-app-development-company',
          'milk-delivery-app-development-service', 'car-wash-app-development-company',
          'chef-management-app-solutions',
          'taxi-booking-app-development-company', 'hotel-booking-app-development-company',
          'tickets-booking-app-development-company', 'real-estate-app-development-company',
          'ecommerce-app-development-company', 'online-shopping-app-development-company',
          'multi-vendor-marketplace-app-builder',
          'e-learning-app-development-company', 'gaming-apps-development-company',
          'ott-app-development-company',
          'diagnostic-app-development-company', 'sports-and-fitness-app-development-company',
          'social-media-app-development-company'],
        selectors: ['.menu-links[href="/on-demand-products-development-company-hyderabad"]']
      },
      resources: {
        pages: ['hire-developers-in-india',
          'hire-mobile-app-developers-in-india', 'hire-android-app-developers-in-india',
          'hire-ios-app-developers-in-india', 'hire-ipad-developers-in-india',
          'hire-custom-software-developers-in-india', 'hire-native-app-developers-in-india',
          'hire-hybrid-app-developers-in-india', 'hire-flutter-app-developers-in-india',
          'hire-react-native-app-developers-in-india',
          'hire-web-developers-in-india', 'hire-wordpress-developers-in-india',
          'hire-php-developers-in-india', 'hire-custom-cms-developers-in-india',
          'hire-angular-developers-in-india', 'hire-react-developers-in-india',
          'hire-swift-developers-in-india', 'hire-laravel-developers-in-india',
          'hire-magento-developers-in-india', 'hire-woocommerce-developers-in-india',
          'hire-javascript-developers-in-india', 'hire-fullstack-developers-in-india',
          'hire-mean-stack-developers-in-india', 'hire-mern-stack-developers-in-india',
          'hire-vue-js-developers-in-india', 'hire-node-js-developers-in-india',
          'hire-aws-developers-in-india', 'hire-dedicated-developers-in-india',
          'hire-salesforce-developers-in-india',
          'hire-ui-ux-designers-in-india', 'hire-mobile-app-designers-in-india',
          'hire-quality-analyst-developers-in-india',
          'hire-pwa-developers-in-india', 'hire-shopify-developers-in-india'],
        selectors: ['.menu-links[href="/hire-developers-in-india"]']
      },
      portfolio: {
        pages: ['portfolio'],
        selectors: ['.menu-links[href="/portfolio"]']
      },
      careers: {
        pages: ['careers'],
        selectors: ['.menu-links[href="/careers"]']
      },
      contact: {
        pages: ['contact-us'],
        selectors: ['.menu-links[href="/contact-us"]']
      }
    };

    // Top-level active highlighting is handled server-side via active-link class in Navbar.tsx.
    // Only handle sub-link highlighting in mega-menu dropdowns here.
    var currentPath = window.location.pathname;
    var currentPage = currentPath.split('/').pop() || 'index';

    setActiveDropdownLink(currentPage, currentPath);
  }

  function setActiveDropdownLink(currentPage, currentPath) {
    document.querySelectorAll('.menu-dropdown a.page-active, .quick-links a.page-active').forEach(function (link) {
      link.classList.remove('page-active');
      link.style.color = '';
      link.style.fontWeight = '';
    });

    var possibleSelectors = [
      'a[href="' + currentPage + '"]',
      'a[href="' + currentPage.replace('.html', '') + '"]',
      'a[href="' + currentPath + '"]',
      'a[href*="' + currentPage.replace('.html', '') + '"]'
    ];

    var activeDropdownLink = null;
    for (var i = 0; i < possibleSelectors.length; i++) {
      activeDropdownLink = document.querySelector('.menu-dropdown ' + possibleSelectors[i] + ', .quick-links ' + possibleSelectors[i]);
      if (activeDropdownLink) break;
    }

    if (!activeDropdownLink) {
      var allDropdownLinks = document.querySelectorAll('.menu-dropdown a, .quick-links a');
      var cleanCurrentPage = currentPage.replace('.html', '');
      for (var j = 0; j < allDropdownLinks.length; j++) {
        var href = allDropdownLinks[j].getAttribute('href') || '';
        var cleanHref = href.replace('.html', '');
        if (cleanHref === cleanCurrentPage ||
          (cleanCurrentPage && href.includes(cleanCurrentPage)) ||
          (cleanCurrentPage && cleanHref.includes(cleanCurrentPage))) {
          activeDropdownLink = allDropdownLinks[j];
          break;
        }
      }
    }

    if (activeDropdownLink) {
      activeDropdownLink.classList.add('page-active');
      activeDropdownLink.style.color = '#3E8CFB';
      activeDropdownLink.style.fontWeight = '600';
      console.log('Dropdown link set to active for page:', currentPage, activeDropdownLink);
    }
  }

  function initNavbar() {
    if (__navbarInitialized) return;
    console.log('initNavbar: starting');

    var dropdowns = document.querySelectorAll('.menu-dropdown');
    var megaMenus = document.querySelectorAll('.megamenu');

    if (!megaMenus || megaMenus.length === 0) {
      console.warn('initNavbar: no megamenu elements found');
      return;
    }

    safeDestroy();

    dropdowns.forEach(function (dropdown) { dropdown.style.display = 'none'; });

    function showDropdown(menu, dropdown) { dropdown.style.display = 'block'; }
    function hideDropdown(dropdown) { dropdown.style.display = 'none'; }

    // Initialize mobile offcanvas nav
    try {
      if (typeof hcOffcanvasNav !== 'undefined') {
        try {
          window._mobileNav = new hcOffcanvasNav('#main-nav', {
            disableAt: false,
            customToggle: '.toggle',
            levelSpacing: 40,
            navTitle: 'mTouch Labs',
            levelTitles: true,
            labelClose: '\u2715',
            levelTitleAsBack: true,
            closeOnClick: true,
            insertClose: true,
            closeActiveLevel: true,
            insertBack: true,
            swipeGestures: true,
          });
        } catch (e) {
          console.warn('hcOffcanvasNav init error', e);
        }
        // Replace navTitle with clickable logo in blue bar
        var checkTitle = setInterval(function() {
          var titles = document.querySelectorAll('h2');
          for (var i = 0; i < titles.length; i++) {
            if (titles[i].className && titles[i].className.indexOf('nav-title') > -1) {
              titles[i].innerHTML = '<a href="/"><img src="/images/logo-white.svg" alt="mTouch Labs" height="28"></a>';
              titles[i].style.lineHeight = '0';
              clearInterval(checkTitle);
              break;
            }
          }
        }, 50);
      }
    } catch (err) {
      console.warn('hcOffcanvasNav check error', err);
    }

    // ═══════════════════════════════════════════════════════
    // GLOBAL HOVER SYSTEM
    // Single shared timer. Because .megamenu is position:static,
    // the dropdown panel renders OUTSIDE the <li> in the DOM flow.
    // Per-element mouseenter/mouseleave won't work across the gap.
    // Instead we use ONE global timer: any mouseenter on a nav link
    // OR a dropdown panel cancels the timer. Any mouseleave starts it.
    // ═══════════════════════════════════════════════════════
    var globalHideTimer = null;
    var activeDropdownEl = null;

    function hideAllDropdowns() {
      dropdowns.forEach(function (dd) { dd.style.display = 'none'; });
      activeDropdownEl = null;
    }

    function showMenuDropdown(menu, dropdown) {
      cancelHideTimer();
      if (activeDropdownEl && activeDropdownEl !== dropdown) {
        activeDropdownEl.style.display = 'none';
      }
      dropdown.style.display = 'block';
      activeDropdownEl = dropdown;

      if (dropdown.classList.contains('home-mega')) {
        var aboutPanel = dropdown.querySelector("[data-content='custom-about'], [data-content='about']");
        if (aboutPanel) {
          dropdown.querySelectorAll('[data-content]').forEach(function (p) { p.style.display = 'none'; });
          aboutPanel.style.display = '';
          dropdown.querySelectorAll('.quick-links a').forEach(function (l) { l.classList.remove('is-current'); });
          var aboutLink = dropdown.querySelector('.quick-links a[data-service="custom-about"], .quick-links a[data-service="about"]');
          if (aboutLink) aboutLink.classList.add('is-current');
        }
      }
    }

    function startHideTimer() {
      if (globalHideTimer) clearTimeout(globalHideTimer);
      globalHideTimer = setTimeout(hideAllDropdowns, 500);
    }

    function cancelHideTimer() {
      if (globalHideTimer) {
        clearTimeout(globalHideTimer);
        globalHideTimer = null;
      }
    }

    // ─── Nav links: show dropdown on hover ───
    megaMenus.forEach(function (menu) {
      var dropdown = menu.querySelector('.menu-dropdown');
      if (!dropdown) return;

      menu.addEventListener('mouseenter', function () {
        cancelHideTimer();
        showMenuDropdown(menu, dropdown);
      });

      menu.addEventListener('mouseleave', function () {
        startHideTimer();
      });
    });

    // ─── Dropdown panels: cancel timer while hovering ───
    dropdowns.forEach(function (dd) {
      dd.addEventListener('mouseenter', function () {
        cancelHideTimer();
      });
      dd.addEventListener('mouseleave', function () {
        startHideTimer();
      });
    });

    // ─── Menu header: start timer only if not moving to dropdown ───
    var menuHeader = document.querySelector('.menu-header');
    if (menuHeader) {
      menuHeader.addEventListener('mouseleave', function (e) {
        var related = e.relatedTarget;
        if (related && (related.closest('.menu-dropdown') || related.closest('.megamenu'))) {
          return;
        }
        startHideTimer();
      });
    }
    // ═══ END GLOBAL HOVER SYSTEM ═══

    // Panel switching for home dropdown quick-links
    document.querySelectorAll('.menu-dropdown.home-mega').forEach(function (dropdown) {
      var quickLinks = dropdown.querySelectorAll('.quick-links a[data-service]');
      if (!quickLinks || quickLinks.length === 0) return;

      // function showPanelForService(svc) {
      //   var key = svc ? svc.replace(/^custom-/, '') : '';
      //   dropdown.querySelectorAll('[data-content]').forEach(function (p) { p.style.display = 'none'; });
      //   dropdown.querySelectorAll('.quick-links a').forEach(function (l) { l.classList.remove('is-current'); });

      //   var target = null;
      //   if (svc) target = dropdown.querySelector('[data-content="' + svc + '"]');
      //   if (!target && key) target = dropdown.querySelector('[data-content="' + key + '"]');
      //   if (!target && key) target = dropdown.querySelector('[data-content="custom-' + key + '"]');

      //   var activeLink = null;
      //   if (svc) activeLink = dropdown.querySelector('.quick-links a[data-service="' + svc + '"]');
      //   if (!activeLink && key) activeLink = dropdown.querySelector('.quick-links a[data-service="custom-' + key + '"]');
      //   if (!activeLink && key) activeLink = dropdown.querySelector('.quick-links a[href*="' + key + '"]');

      //   if (activeLink) activeLink.classList.add('is-current');
      //   if (target) target.style.display = '';
      // }-----> test changes nav


      function showPanelForService(svc) {
  var key = svc ? svc.replace(/^custom-/, '') : '';

  dropdown.querySelectorAll('[data-content]').forEach(function (p) {
    p.classList.remove('active');   // ✅ use class instead
  });

  dropdown.querySelectorAll('.quick-links a').forEach(function (l) {
    l.classList.remove('is-current');
  });

  var target = null;

  if (svc) target = dropdown.querySelector('[data-content="' + svc + '"]');
  if (!target && key) target = dropdown.querySelector('[data-content="' + key + '"]');
  if (!target && key) target = dropdown.querySelector('[data-content="custom-' + key + '"]');

  var activeLink = dropdown.querySelector('.quick-links a[data-service="' + svc + '"]');
  if (activeLink) activeLink.classList.add('is-current');

  if (target) target.classList.add('active');   // ✅ activate panel
}
// Position dropdowns below header dynamically
function positionDropdowns() {
  var header = document.querySelector('.menu-header');
  if (!header) return;
  var bottom = header.getBoundingClientRect().bottom;
  document.querySelectorAll('.menu-dropdown').forEach(function(dd) {
    dd.style.top = bottom + 'px';
  });
}


window.addEventListener('scroll', positionDropdowns);
window.addEventListener('resize', positionDropdowns);
positionDropdowns();
      quickLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function () {
          var svc = this.getAttribute('data-service') || '';
          showPanelForService(svc);
        });
        link.addEventListener('click', function (e) {
          var svc = this.getAttribute('data-service') || '';
          showPanelForService(svc);
        });
      });
    });

    // Hide dropdowns when clicking outside
    document.addEventListener('click', function (event) {
      if (!event.target.closest('.megamenu') && !event.target.closest('.menu-dropdown')) {
        hideAllDropdowns();
      }
    });

    // ─── DEFENSIVE: Direct toggle binding for slow/failed mobile init ───
    // If hcOffcanvasNav fails or initializes late on slow mobile,
    // this ensures the hamburger works directly.
    document.querySelectorAll('.toggle').forEach(function(t) {
      if (t.dataset.directBound) return;
      t.dataset.directBound = '1';
      t.addEventListener('click', function(e) {
        e.preventDefault();
        if (window._mobileNav && typeof window._mobileNav.open === 'function') {
          window._mobileNav.open();
        } else {
          // Fallback: toggle body class that library uses
          document.body.classList.toggle('hc-nav-open');
        }
      });
    });

    // Set active state for navigation links
    setActiveNavLink();

    __navbarInitialized = true;
    console.log('initNavbar: completed');
  }

  // Expose functions
  if (typeof window !== 'undefined') {
    window.initNavbar = initNavbar;
    window.setActiveNavLink = setActiveNavLink;

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function () {
        setTimeout(setActiveNavLink, 200);
      });
    } else {
      setTimeout(setActiveNavLink, 200);
    }
  }
})();