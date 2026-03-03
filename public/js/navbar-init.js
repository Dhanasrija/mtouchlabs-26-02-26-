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
    var navigationSections = {
      home: {
        pages: ['index', 'index.html', 'company-overview', 'company-overview.html',
          'artificial-intelligence-transforming-mobile-technology', 'artificial-intelligence-transforming-mobile-technology.html',
          'our-vision', 'our-vision.html', 'leadership-team', 'leadership-team.html',
          'our-journey', 'our-journey.html', 'awards-recognition', 'awards-recognition.html',
          'nasscom-membership', 'nasscom-membership.html', 'life-at-mtouch', 'life-at-mtouch.html',
          'about', 'about.html', 'blog', 'blog.html', 'case-studies', 'case-studies.html', 'our-vision',
          'ai-role-in-business-automation', 'top-10-free-ai-tools-for-software-developers',
          'mobile-app-development-bangalore-tech-startups', 'top-ecommerce-niches-us',
          'hyderabad-startups-app-development-mtouch-labs'],
        selectors: ['#firstMega > a.menu-links', '.menu-links[href="/"]', '.menu-links[href="index"]']
      },
      services: {
        pages: ['services', 'services.html',
          'cross-platform-development',
          'empowering-businesses-with-data-science', 'empowering-businesses-with-data-science.html',
          'cloud-infrastructure-management', 'cloud-native-application-development',
          'ai-consulting-strategy', 'predictive-analytics-data-modelling',
          'ai-powered-automation-tools', 'ai-model-deployment',
          'service-cloud-customer-support', 'influencer-video-marketing',
          'ai-driven-business-automation', 'saas-product-development',
          'data-analytics-business-intelligence', 'best-iot-development-company-in-india',
          'fintech-healthtech-platforms', 'Security & Maintence',
          'application-security-compliance', 'software-testing-qa-automation',
          'maintenance-support-service', 'legacy-software-modernization',
          'marketing-cloud', 'product-prototyping', 'design-system-development',
          'branding-visual-identity', 'content-marketing', 'email-marketing-automation',
          'custom-software-development', 'ios-app-development-company',
          'ai-powered-mobile-application', 'app-store-optimization-services-company',
          'e-commerce-app-development-company', 'app-maintenance-support',
          'android-app-development-company', 'enterprise-web-solutions',
          'saas-web-platforms', 'progressive-web-apps', 'cloud-based-web-applications',
          'ai-enabled-web-application', 'web-app-modernization-migration-services',
          'web-maintenance-support-services', 'crm-development',
          'software-integration-services', 'legacy-application-modernization',
          'enterprise-data-management', 'software-maintenance-support',
          'enterprise-mobility-solutions', 'enterprise-website-solutions',
          'flutter-app-development-company', 'react-native-app-development-company',
          'best-cross-platform-app-development-frameworks-in-2022',
          'enterprise-application-development-company',
          'on-demand-service-mobile-app-development',
          'openai-for-a-mobile-app-development-company',
          'mobile-app-development-company',
          'web-development-company', 'top-ecommerce-development-company-in-india',
          'saas-future-of-ecommerce',
          'progressive-web-app-development-company-in-india',
          'custom-cms-development-company-in-india',
          'custom-crm-software-development-company',
          '360-degree-photography-services-in-india',
          'cloud-devops-services', 'devops-services-and-solutions', 'aws-cloud-services',
          'ai-data-intelligence-services', 'ai-machine-learning-services',
          'generative-ai-development-company',
          'salesforce-consulting-services', 'salesforce-implementation-services',
          'salesforce-lightning-migration-development', 'salesforce-integration-services',
          'salesforce-sales-cloud-services', 'salesforce-service-cloud-services',
          'ui-ux-design-company',
          'digital-marketing-services', 'seo-services-company',
          'ppc-management-services-company', 'social-media-marketing-company-in-india',
          'business-solutions', 'ecommerce-app-development-company',
          'custom-app-development-for-temple-services',
          'cybersecurity-development-company', 'software-testing-services'],
        selectors: ['.menu-links[href="services"]']
      },
      products: {
        pages: ['on-demand-products-development-company-hyderabad', 'on-demand-products-development-company-hyderabad.html',
          'products', 'products.html',
          'on-demand-mobile-app-development-solutions-for-your-business-needs', 'on-demand-mobile-app-development-solutions-for-your-business-needs.html',
          'community-network-platforms',
          'food-delivery-app-development-service', 'food-delivery-app-development-service.html',
          'grocery-delivery-app-development-company', 'grocery-delivery-app-development-company.html',
          'milk-delivery-app-development-service', 'milk-delivery-app-development-service.html',
          'car-wash-app-development-company', 'car-wash-app-development-company.html',
          'chef-management-app-solutions', 'chef-management-app-solutions.html',
          'taxi-booking-app-development-company', 'taxi-booking-app-development-company.html',
          'hotel-booking-app-development-company', 'hotel-booking-app-development-company.html',
          'tickets-booking-app-development-company', 'tickets-booking-app-development-company.html',
          'effortless-wedding-planning-app-website', 'effortless-wedding-planning-app-website.html',
          'diagnostic-app-development-company', 'diagnostic-app-development-company.html',
          'online-shopping-app-development-company', 'online-shopping-app-development-company.html',
          'multi-vendor-marketplace-app-builder', 'multi-vendor-marketplace-app-builder.html',
          'real-estate-app-development-company', 'real-estate-app-development-company.html',
          'education-app-development-company-in-india', 'education-app-development-company-in-india.html',
          'e-learning-app-development-company', 'e-learning-app-development-company.html',
          'ott-app-development-company', 'ott-app-development-company.html',
          'gaming-apps-development-company', 'gaming-apps-development-company.html',
          'sports-and-fitness-app-development-company', 'sports-and-fitness-app-development-company.html',
          'top-healthcare-software-development-company-in-india',
          'custom-beauty-wellness-apps', 'custom-beauty-wellness-apps.html',
          'social-media-app-development-company', 'social-media-app-development-company.html',
          'social-community-mobile-app-development', 'social-community-mobile-app-development.html'],
        selectors: ['.menu-links[href="on-demand-products-development-company-hyderabad"]']
      },
      resources: {
        pages: ['hire-developers-in-india', 'hire-developers-in-india.html',
          'hire-salesforce-adminstrators', 'hire-devops-enginners',
          'hire-cloud-engineers', 'hire-erp-crm-developers',
          'hire-ai-developers', 'hire-machine-learning-engineers',
          'hire-chat-bot.developer', 'hire-product-designer', 'hire-graphic-designers',
          'hire-mobile-app-developers-in-india', 'hire-mobile-app-developers-in-india.html',
          'hire-android-app-developers-in-india', 'hire-android-app-developers-in-india.html',
          'hire-ios-app-developers-in-india', 'hire-ios-app-developers-in-india.html',
          'hire-ipad-developers-in-india', 'hire-ipad-developers-in-india.html',
          'hire-custom-software-developers-in-india', 'hire-custom-software-developers-in-india.html',
          'hire-native-app-developers-in-india', 'hire-native-app-developers-in-india.html',
          'hire-hybrid-app-developers-in-india', 'hire-hybrid-app-developers-in-india.html',
          'hire-flutter-app-developers-in-india', 'hire-flutter-app-developers-in-india.html',
          'hire-react-native-app-developers-in-india', 'hire-react-native-app-developers-in-india.html',
          'hire-web-developers-in-india', 'hire-web-developers-in-india.html',
          'hire-dedicated-developers-in-india', 'hire-dedicated-developers-in-india.html',
          'hire-fullstack-developers-in-india', 'hire-fullstack-developers-in-india.html',
          'hire-node-js-developers-in-india', 'hire-node-js-developers-in-india.html',
          'hire-react-developers-in-india', 'hire-react-developers-in-india.html',
          'hire-angular-developers-in-india', 'hire-angular-developers-in-india.html',
          'hire-salesforce-developers-in-india', 'hire-salesforce-developers-in-india.html',
          'hire-aws-developers-in-india', 'hire-aws-developers-in-india.html',
          'hire-ui-ux-designers-in-india', 'hire-ui-ux-designers-in-india.html',
          'hire-custom-cms-developers-in-india', 'hire-custom-cms-developers-in-india.html',
          'hire-php-developers-in-india', 'hire-php-developers-in-india.html',
          'mobile-app-design-company', 'mobile-app-design-company.html'],
        selectors: ['.menu-links[href="hire-developers-in-india"]']
      },
      portfolio: {
        pages: ['portfolio', 'portfolio.html', 'portfolio-2', 'portfolio-2.html',
          'portfolio-3', 'portfolio-3.html', 'portfolio-4', 'portfolio-4.html',
          'portfolio-5', 'portfolio-5.html',
          'case-studies', 'case-studies.html', 'our-work', 'our-work.html',
          'projects', 'projects.html', 'success-stories', 'success-stories.html'],
        selectors: ['.menu-links[href="portfolio"]']
      },
      careers: {
        pages: ['careers', 'careers.html', 'career-opportunities-web-mobile-development',
          'career-opportunities-web-mobile-development.html', 'jobs', 'jobs.html',
          'join-us', 'join-us.html', 'openings', 'openings.html',
          'work-with-us', 'work-with-us.html', 'job-opportunities', 'job-opportunities.html',
          'current-openings', 'current-openings.html', 'career-opportunities', 'career-opportunities.html'],
        selectors: ['.menu-links[href="careers"]']
      },
      contact: {
        pages: ['contact-us', 'contact-us.html', 'contact', 'contact.html',
          'get-in-touch', 'get-in-touch.html', 'reach-us', 'reach-us.html',
          'contact-form', 'contact-form.html', 'get-quote', 'get-quote.html',
          'request-quote', 'request-quote.html', 'inquiry', 'inquiry.html'],
        selectors: ['.menu-links[href="contact-us"]']
      }
    };

    var currentPath = window.location.pathname;
    var currentPage = currentPath.split('/').pop() || 'index';

    document.querySelectorAll('.menu-links.nav-active').forEach(function (link) {
      link.classList.remove('nav-active');
      link.style.color = '';
    });

    var activeSection = null;
    var entries = Object.entries(navigationSections);
    for (var i = 0; i < entries.length; i++) {
      var sectionName = entries[i][0];
      var section = entries[i][1];
      var isInSection = section.pages.some(function (page) {
        return currentPage === page || currentPage.includes(page.replace('.html', '')) ||
          currentPath.includes('/' + page.replace('.html', ''));
      });
      if (isInSection) {
        activeSection = sectionName;
        break;
      }
    }

    if (activeSection) {
      var sect = navigationSections[activeSection];
      var navLink = null;
      for (var j = 0; j < sect.selectors.length; j++) {
        navLink = document.querySelector(sect.selectors[j]);
        if (navLink) break;
      }
      if (!navLink) {
        var allMenuLinks = document.querySelectorAll('.menu-links');
        for (var k = 0; k < allMenuLinks.length; k++) {
          var linkText = allMenuLinks[k].textContent.toLowerCase();
          if (linkText.includes(activeSection) ||
            (activeSection === 'contact' && linkText.includes('contact us'))) {
            navLink = allMenuLinks[k];
            break;
          }
        }
      }
      if (navLink) {
        navLink.classList.add('nav-active');
        console.log(activeSection + ' link set to active for page:', currentPage);
      } else {
        console.warn(activeSection + ' link not found');
      }
    }

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
            navTitle: 'mTouch Labs Menu',
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