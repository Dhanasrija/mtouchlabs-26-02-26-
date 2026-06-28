// ─────────────────────────────────────────────────────────────────
// Portfolio listing — exposed as window.__mtlInitPortfolioList() so it
// can be re-run on every client-side navigation back to /portfolio.
// ─────────────────────────────────────────────────────────────────
window.__mtlInitPortfolioList = function initPortfolio() {
  var blogContainer = document.getElementById("blog-cards-container");
  if (!blogContainer) {
    if (document.readyState !== "complete") {
      setTimeout(window.__mtlInitPortfolioList, 200);
    }
    return;
  }

const blogCards = [
      // ── NEWEST PORTFOLIOS (top of the listing) ───────────────────────────
      {
        image: "/images/portfolio/classy/Classyy.webp",
        link: "classyy",
        name: "Classyy — Campaign-Based Ecommerce Solution",
        tag: "UX, UI, Android, iOS, Ecommerce, Campaigns",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/communitykitchen/CommunityKitchen.webp",
        link: "community-kitchen",
        name: "Community Kitchen — Hyperlocal Home Chef Marketplace",
        tag: "UX, UI, Android, iOS, Flutter",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/resqbox/ResQBox.webp",
        link: "resqbox",
        name: "ResqBox — Sustainable Food Rescue App",
        tag: "UX, UI, Android, iOS, Flutter",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/kadampe/Kadhampay.webp",
        link: "kadampe",
        name: "KadamPe — Walk & Earn Fitness Rewards App",
        tag: "UX, UI, Android, iOS, Flutter",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/zoviyo/Zoviyo.webp",
        link: "zoviyo",
        name: "Zoviyo — Home Kitchen & Food Delivery App",
        tag: "UX, UI, Android, iOS, Flutter",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/cenzo/Cenzo.webp",
        link: "cenzo",
        name: "Cenzo — Grocery & Essentials Delivery App",
        tag: "UX, UI, Android, iOS, Flutter, Web",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/otloffers.webp",
        link: "olt-offers-mobile-app-development",
        name: "OLT Offers — Location-Based Deals & Coupon App",
        tag: "UX, UI, Android, iOS, Flutter",
        category: "Online Services"
      },
      // ── OLDER PORTFOLIOS ─────────────────────────────────────────────────
      {
        image: "/images/portfolio/omVideos.webp",
        link: "devotional-mobile-app-development",
        name: "Om Video Devotional Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/onlyshop.webp",
        link: "onlyshop-mobile-shopping-app-development",
        name: "Onlyshop Mobile Shopping App Development",
        tag: "UX, UI,Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/adfini8.webp",
        link: "adfini8-mobile-advertising-platform-development",
        name: "Adfin8 Mobile Advertising Platform Development",
        tag: "UX, UI,Web,Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/golkonda.webp",
        link: "telangana-ecommerce-mobile-app-development",
        name: "Telangana Government E-Commerce Web Development",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },


      {
        image: "/images/portfolio/sacchi.webp",
        link: "retailer-management-system-mobile-web-app ",
        name: "Saachi Retailer Management System",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Avenue.webp",
        link: "real-estate-lead-app",
        name: "Avenue - Real Estate Lead Management App",
        tag: "UX, UI, Website, Android and iOS",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/rahal.webp",
        link: "rahayel-parking-lot-management-system",
        name: "Rahayel Parking Lot Management System",
        tag: "UX, UI, Android",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/Tripsy.webp",
        link: "car-booking-app-rent-ride",
        name: "Car Booking App | Rent a Ride in Minutes",
        tag: "UX, UI, Android",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/abudhabi government app.jpg",
        link: "abu-dhabi-judicial-department-mobile-app-development",
        name: "Abu Dhabi Judicial Department Mobile App Development",
        tag: "UX, UI, Android",
        category: "Legal"
      },
      {
        image: "/images/portfolio/zefsci-screen-main.webp",
        link: "app-solutions-for-medical-device-companies",
        name: "Medical Devices & Equipment, Engineered for Precision and Care",
        tag: "UX, UI, Android",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/aduri.webp",
        link: "web-and-app-development-for-real-estate-services",
        name: "Building Dreams, Shaping Realities",
        tag: "UX, UI, Android, iOS, Web",
        category: "CRM"
      },
      {
        image: "/images/portfolio/onusmain.webp",
        link: "healthcare-super-app",
        name: "Healthcare Super App – ECommerce Web & Mobile Application",
        tag: "Healthcare, UX, UI, Android, iOS, Web",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/hitechmain.webp",
        link: "hitech-shuttle-bus-management-platform",
        name: "HiTech Shuttle – Smart Bus Management Platform",
        tag: "UX, UI, Website, Android, iOS",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/koheremain.webp",
        link: "b2b-lead-intelligence-platform",
        name: "Kohere – B2B Lead Intelligence Platform",
        tag: "UX, UI, Web Platform, SaaS",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/drpickmain.webp",
        link: "drpick-healthcare-app",
        name: "Dr.Pick – Digital Healthcare Super App",
        tag: "UX, UI, Website, Android, iOS",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/ricehub.webp",
        link: "app-and-web-development-for-ecommerce-services",
        name: "Discover the Finest Rice, Anytime, Anywhere",
        tag: "UX, UI, Website, Android, iOS",
        category: "Retail Management"
      },
      {
        image: "/images/case-study/l2r-main.svg",
        link: "web-and-app-development-for-education-services",
        name: "Empowering Early Literacy with Engaging Digital Learning Tools",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ed-tech"
      },
      {
        image: "/images/case-study/adifie.svg",
        link: "on-demand-service-mobile-app-development",
        name: "Streamlined Mobile App Development for On-Demand Services",
        tag: "UX, UI, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/clickget.webp",
        link: "secure-ecommerce-shopping-platform",
        name: "Innovative E-Commerce Platform for Secure Online Shopping",
        tag: "UX, UI, Android , iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Bhandam.webp",
        link: "custom-matrimonial-mobile-app-development",
        name: "Smart Matrimony Mobile App Development for Perfect Matchmaking",
        tag: "UX, UI, Website, Android and iOS",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/Roboride-portfolio.webp",
        link: "cabs-booking-app-development-company",
        name: "Cabs Booking App Development Company",
        tag: "UX, UI, Website, Android and iOS",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/Tanyya.webp",
        link: "custom-crm-software-development-company",
        name: "Custom CRM Software Development Company",
        tag: "UX, UI, Website, Android and iOS",
        category: "CRM"
      },
      {
        image: "/images/portfolio/cook a doodle.jpg",
        link: "on-demand-chef-management-web-development",
        name: "On-Demand Chef Management Web Development",
        tag: "UX, UI, Website",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/khidkee.webp",
        link: "multi-vendor-ecommerce-mobile-app-development",
        name: "Multi-Vendor Ecommerce Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/InstiServe.webp",
        link: "staff-and-student-management-enterprise-mobile-app-development",
        name: "Staff and Student Management Android App Development",
        tag: "UX, UI, Android",
        category: "CRM"
      },
      {
        image: "/images/portfolio/veatech.webp",
        link: "online-learning-platform-mobile-app-development",
        name: "Online learning platform Mobile App Development",
        tag: "UX, UI, Website ,Android",
        category: "Ed-tech"
      },
      {
        image: "/images/portfolio/Medbuzz-main.webp",
        link: "online-generic-medicine-mobile-app-development-and-web-development",
        name: "Online Generic Medicine Mobile App Development & Web Development",
        tag: "UX, UI, Website ,Android",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/Heyman.webp",
        link: "on-demand-home-services-mobile-app-development",
        name: "On-Demand Home Services Mobile App Development",
        tag: "UX, UI, Website ,Android and IOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/vivent.webp",
        link: "event-management-and-gifting-app",
        name: "Seamlessly Plan Events and Send Gifts with Our All-in-One App Development",
        tag: "UX, UI, Website ,Android and IOS",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/citzon.webp",
        link: "hyper-local-delivery-mobile-app-development",
        name: "Hyper-Local Grocery Shopping App",
        tag: "UX, UI, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Rev your soul.jpg",
        link: "bikers-community-social-networking-app-development",
        name: "Bikers community Android and iOS App Development",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/fairloy.webp",
        link: "loyalty-program-management-mobile-app-development",
        name: "Loyalty Program Management iOS and Android App Development",
        tag: "UX, UI, Android and iOS",
        category: "CRM"
      },
      {
        image: "/images/portfolio/NTik copy.jpg",
        link: "short-video-sharing-mobile-app-development",
        name: "Short Video Sharing Mobile Application Development",
        tag: "UX, UI, Android",
        category: "social media"
      },
      {
        image: "/images/portfolio/farmers village copy.jpg",
        link: "online-grocery-shopping-mobile-app-development",
        name: "Grocery Delivery App Development",
        tag: "UX, UI, Android",
        category: "ecommerce"
      },
      {
        image: "/images/portfolio/brickberry.webp",
        link: "fractional-property-ownership-web-development",
        name: "Real Estate Web Development",
        tag: "UX, UI, Website",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/PI.VA.webp",
        link: "call-management-mobile-app-development",
        name: "Call Management iOS App Development and Android App",
        tag: "UX, UI, Android and iOS",
        category: "CRM"
      },
      {
        image: "/images/portfolio/PF.webp",
        link: "online-learning-android-app-development",
        name: "E-Learning Android App Development",
        tag: "UX, UI, Android and iOS",
        category: "Ed-tech"
      },
      {
        image: "/images/portfolio/smart pg.jpg",
        link: "pg-hostel-management-mobile-app-development",
        name: "PG Hostel Management App",
        tag: "UX, UI, Android and iOS",
        category: "CRM"
      },
      {
        image: "/images/portfolio/dubshoot-image.webp",
        link: "lip-sync-video-dubbing-mobile-app-development",
        name: "Video-Sharing iOS App Development and Android App",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/uber-clone-app.webp",
        link: "make-your-taxi-business-smart-with-our-uber-clone-app-development",
        name: "Uber Clone App",
        tag: "UX, UI",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/astrograha.webp",
        link: "online-astrology-consultation-mobile-app-development",
        name: "Online Astrology Consultation Mobile App Development",
        tag: "UX, UI, Website, Android, and iOS",
        category: "Online Services"
      }, {
        image: "/images/portfolio/Country Club.jpg",
        link: "hotel-booking-ios-app-development",
        name: "Hotel Booking iOS Application Development",
        tag: "UX, UI, iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/meal village.jpg",
        link: "online-food-ordering-mobile-app-development",
        name: "online food ordering app",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/cut me out.jpg",
        link: "photo-editor-mobile-app-development",
        name: "Photo Editor App Development",
        tag: "UX, UI, iOS",
        category: "utility"
      },
      {
        image: "/images/portfolio/wefix.webp",
        link: "on-demand-service-providers-web-and-mobile-app-development",
        name: "On-Demand Service Providers Web And Mobile App Development",
        tag: "UX, UI, Android, Website",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Pragathi Mart.jpg",
        link: "grocery-delivery-android-app-development",
        name: "Grocery shopping App",
        tag: "UX, UI, Website, Android, and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Sai shiva.jpg",
        link: "best-on-demand-grocery-delivery-android-app-development",
        name: "Grocery Delivery app",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/esra.webp",
        link: "spa-and-salon-booking-flutter-app-development",
        name: "Spa and salon Booking App Development",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Desicart.webp",
        link: "online-shopping-and-international-shipping-service-mobile-app",
        name: "Online Shopping And International Shipping Service Mobile App",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/gullyshop.webp",
        link: "online-grocery-delivery-android-app-development",
        name: "Online Grocery Delivery Android App Development",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Genifast.webp",
        link: "online-generic-medicine-delivery-mobile-app-development",
        name: "Online Generic Medicine Delivery Mobile App Development",
        tag: "UX, UI, Website, Android and iOS",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/Kalptaruh.webp",
        link: "key-plantation-ngo-mobile-app-development",
        name: "Key Plantation NGO Mobile App Development",
        tag: "UX, UI, Android",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/Mynet.webp",
        link: "social-community-mobile-app-development",
        name: "Social Community Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/Favmall.webp",
        link: "online-delivery-grocery-shopping-mobile-app-development",
        name: "Online Delivery Grocery Shopping Mobile App Development",
        tag: "UX, UI, Android,iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/AnajBazaar.webp",
        link: "b2b-grocery-shopping-mobile-app-development-and-web-development",
        name: "B2B Grocery Shopping Mobile App Development & Web Development",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      }

    ];

    // blogContainer already declared at top

    const perPage = 30;
    let currentPage = 1;
    let currentFilter = 'all';

    function normalizeCategory(item) {
      return (item.category || item.data || '').toString().trim();
    }

    function getFilteredCards() {
      if (!currentFilter || currentFilter.toLowerCase() === 'all') return blogCards;
      return blogCards.filter(item => normalizeCategory(item).toLowerCase() === currentFilter.toLowerCase());
    }

    function renderCards(page = 1) {
      const cards = getFilteredCards();
      const totalPages = Math.max(1, Math.ceil(cards.length / perPage));
      currentPage = Math.min(Math.max(1, page), totalPages);

      blogContainer.innerHTML = '';

      const start = (currentPage - 1) * perPage;
      const end = start + perPage;
      const pageItems = cards.slice(start, end);

      pageItems.forEach(item => {
        // Build an absolute URL so the card works no matter what the current
        // route's trailing-slash behaviour is. If item.link already starts
        // with "/" or "http", use it as-is; otherwise scope it under /portfolio/.
        var rawLink = (item.link || '').trim();
        var href = (/^https?:\/\//i.test(rawLink) || rawLink.charAt(0) === '/')
          ? rawLink
          : '/portfolio/' + rawLink;
        const cardHTML = `
      <div class="col-lg-4 col-sm-6 blog-card-item" data-category="${normalizeCategory(item)}" data-aos="fade-down">
        <div class="ree-media-crd">
          <div class="rpl-img">
            <a href="${href}" target="_blank" rel="noopener noreferrer">
              <img src="${item.image}" alt="${item.name}" class="fill-fixed">
            </a>
          </div>
          <div class="rpl-contt">
            <p class="port-tags" style="font-size: 14px;font-weight: 600;">${item.tag}</p>
            <h4><a href="${href}" target="_blank" rel="noopener noreferrer">${item.name}</a></h4>
            <a href="${href}" target="_blank" rel="noopener noreferrer" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `;
        blogContainer.insertAdjacentHTML('beforeend', cardHTML);
      });

      renderPagination(totalPages);
      // Re-init animation for newly added cards
      setTimeout(() => {
        const cardsEls = document.querySelectorAll('.blog-block .col-lg-4');
        cardsEls.forEach((col, index) => {
          const card = col.querySelector('.ree-media-crd');
          if (card) {
            card.classList.remove('animate-in');
            const row = Math.floor(index / 3);
            const colIndex = index % 3;
            const delay = 100 + row * 120 + colIndex * 60;
            setTimeout(() => card.classList.add('animate-in'), delay);
          }
        });
      }, 50);
    }

    function renderPagination(totalPages) {
      const paginationContainer = document.getElementById('pagination-container');
      if (!paginationContainer) return;

      paginationContainer.innerHTML = '';

      const row = document.createElement('div');
      row.className = 'row';
      const col = document.createElement('div');
      col.className = 'col-lg-12 col-sm-12';

      const ul = document.createElement('ul');
      ul.className = 'pagination shadows';

      function createPageItem(pageNum, label, isActive) {
        const li = document.createElement('li');
        li.className = 'pageNumber' + (isActive ? ' active' : '');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = label || pageNum;
        a.addEventListener('click', (e) => {
          e.preventDefault();
          renderCards(pageNum);
          window.scrollTo({ top: 200, behavior: 'smooth' });
        });
        li.appendChild(a);
        return li;
      }

      // Prev
      if (currentPage > 1) {
        const prevLi = createPageItem(currentPage - 1, 'Prev', false);
        ul.appendChild(prevLi);
      }

      // Page numbers (limit long lists)
      const maxButtons = 7;
      let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
      let endPage = Math.min(totalPages, startPage + maxButtons - 1);
      if (endPage - startPage < maxButtons - 1) {
        startPage = Math.max(1, endPage - maxButtons + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        ul.appendChild(createPageItem(i, i, i === currentPage));
      }

      // Next
      if (currentPage < totalPages) {
        const nextLi = createPageItem(currentPage + 1, 'Next', false);
        ul.appendChild(nextLi);
      }

      col.appendChild(ul);
      row.appendChild(col);
      paginationContainer.appendChild(row);
    }

    // Wire up filter buttons to re-render pages using event delegation —
    // robust against Next.js hydration, late DOM availability, and re-renders.
    if (!window.__mtl_portfolio_filter_bound) {
      window.__mtl_portfolio_filter_bound = true;
      document.addEventListener('click', function (e) {
        const btn = e.target && e.target.closest && e.target.closest('.blog-filter-btn');
        if (!btn) return;
        const filterValue = btn.getAttribute('data-filter') || 'all';
        currentFilter = filterValue;
        // Highlight the active filter button and clear highlight from the rest.
        document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCards(1);
      });
    }

    // Initial render
    renderCards(1);
};
// Run once on script load (covers first-paint case where the listing is
// already in the DOM). Client-side navigation re-runs this via
// PortfolioInit.tsx.
window.__mtlInitPortfolioList();

/* Portfolio TOC Scroll Spy — exposed globally so it re-runs on
   client-side navigation between portfolio detail pages. */
window.__mtlInitPortfolioTOC = (function() {
  'use strict';

  var currentObserver = null;

  function initScrollSpy() {
    // Tear down a previous observer if the user navigated to a new
    // detail page (sections from the previous page would otherwise leak).
    if (currentObserver) {
      try { currentObserver.disconnect(); } catch (e) { /* noop */ }
      currentObserver = null;
    }

    const tocLinks = document.querySelectorAll('.cs-toc__link');
    const sections = document.querySelectorAll('.cs-sec[id]');

    if (!tocLinks.length || !sections.length) return;

    // CSS uses the BEM modifier `cs-toc__link--active` for the blue
    // highlight — keep this in sync with case-study.css.
    var ACTIVE_CLASS = 'cs-toc__link--active';

    // Set first link as active initially
    tocLinks[0] && tocLinks[0].classList.add(ACTIVE_CLASS);

    // IntersectionObserver to track which section is in view
    currentObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Remove active from all
          tocLinks.forEach(function(link) {
            link.classList.remove(ACTIVE_CLASS);
          });
          // Add active to matching link
          const id = entry.target.id;
          const activeLink = document.querySelector('.cs-toc__link[href="#' + id + '"]');
          if (activeLink) {
            activeLink.classList.add(ACTIVE_CLASS);
            // Scroll TOC to keep active link visible
            var tocContainer = document.querySelector('.cs-toc');
            if (tocContainer) {
              var linkTop = activeLink.offsetTop - tocContainer.offsetTop;
              var tocHeight = tocContainer.clientHeight;
              if (linkTop < tocContainer.scrollTop || linkTop > tocContainer.scrollTop + tocHeight - 40) {
                tocContainer.scrollTo({ top: linkTop - tocHeight / 3, behavior: 'smooth' });
              }
            }
          }
        }
      });
    }, {
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    });
    
    sections.forEach(function(section) {
      currentObserver.observe(section);
    });
    
    // Smooth scroll on TOC click — bind once per element to avoid stacking
    // listeners after re-init.
    tocLinks.forEach(function(link) {
      if (link.__mtlTocBound) return;
      link.__mtlTocBound = true;
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update active immediately
          document.querySelectorAll('.cs-toc__link').forEach(function(l) {
            l.classList.remove(ACTIVE_CLASS);
          });
          this.classList.add(ACTIVE_CLASS);
        }
      });
    });

    // FAQ accordion — bind once per item. Only one answer open at a time:
    // opening a question closes any other; clicking an open one closes it.
    document.querySelectorAll('.cs-faq-q').forEach(function(btn) {
      if (btn.__mtlFaqBound) return;
      btn.__mtlFaqBound = true;
      btn.addEventListener('click', function() {
        var item = this.closest('.cs-faq-item');
        if (!item) return;
        var willOpen = !item.classList.contains('open');
        document.querySelectorAll('.cs-faq-item.open').forEach(function(openItem) {
          openItem.classList.remove('open');
          var q = openItem.querySelector('.cs-faq-q');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
          item.classList.add('open');
          this.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // Run after DOM is ready (covers first-paint). Client-side navigation
  // re-runs initScrollSpy via PortfolioInit.tsx.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSpy);
  } else {
    initScrollSpy();
  }

  // Expose the initializer so a client component can re-call it after
  // every route change inside /portfolio.
  return initScrollSpy;
})();