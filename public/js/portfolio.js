(function initPortfolio() {
  var blogContainer = document.getElementById("blog-cards-container");
  if (!blogContainer) {
    if (document.readyState !== "complete") {
      setTimeout(initPortfolio, 200);
    }
    return;
  }

const blogCards = [
      {
        image: "/images/portfolio/otloffers.png",
        link: "otloffers-mobile-app-development",
        name: "OLT Offers Mobile Deals & Coupon App Development",
        tag: "UX, UI, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/omVideos.png",
        link: "devotional-mobile-app-development",
        name: "Om Video Devotional Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/onlyshop.png",
        link: "onlyshop-mobile-shopping-app-development",
        name: "Onlyshop Mobile Shopping App Development",
        tag: "UX, UI,Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/adfini8.png",
        link: "adfini8-mobile-advertising-platform-development",
        name: "Adfin8 Mobile Advertising Platform Development",
        tag: "UX, UI,Web,Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/golkonda.jpg",
        link: "telangana-ecommerce-mobile-app-development",
        name: "Telangana Government E-Commerce Web Development",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },


      {
        image: "/images/portfolio/sacchi.png",
        link: "retailer-management-system-mobile-web-app ",
        name: "Saachi Retailer Management System",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Avenue.png",
        link: "real-estate-lead-app",
        name: "Avenue - Real Estate Lead Management App",
        tag: "UX, UI, Website, Android and iOS",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/rahal.png",
        link: "rahayel-parking-lot-management-system",
        name: "Rahayel Parking Lot Management System",
        tag: "UX, UI, Android",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/Tripsy.png",
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
        image: "/images/portfolio/zefsci-screen-main.png",
        link: "app-solutions-for-medical-device-companies",
        name: "Medical Devices & Equipment, Engineered for Precision and Care",
        tag: "UX, UI, Android",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/aduri.png",
        link: "web-and-app-development-for-real-estate-services",
        name: "Building Dreams, Shaping Realities",
        tag: "UX, UI, Android, iOS, Web",
        category: "CRM"
      },
      {
        image: "/images/portfolio/onusmain.png",
        link: "healthcare-super-app",
        name: "Healthcare Super App – ECommerce Web & Mobile Application",
        tag: "Healthcare, UX, UI, Android, iOS, Web",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/hitechmain.png",
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
        image: "/images/portfolio/drpickmain.png",
        link: "drpick-healthcare-app",
        name: "Dr.Pick – Digital Healthcare Super App",
        tag: "UX, UI, Website, Android, iOS",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/ricehub.png",
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
        image: "/images/portfolio/clickget.jpg",
        link: "secure-ecommerce-shopping-platform",
        name: "Innovative E-Commerce Platform for Secure Online Shopping",
        tag: "UX, UI, Android , iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Bhandam.jpg",
        link: "custom-matrimonial-mobile-app-development",
        name: "Smart Matrimony Mobile App Development for Perfect Matchmaking",
        tag: "UX, UI, Website, Android and iOS",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/Roboride-portfolio.jpg",
        link: "cabs-booking-app-development-company",
        name: "Cabs Booking App Development Company",
        tag: "UX, UI, Website, Android and iOS",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/Tanyya.jpg",
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
        image: "/images/portfolio/khidkee.jpg",
        link: "multi-vendor-ecommerce-mobile-app-development",
        name: "Multi-Vendor Ecommerce Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/InstiServe.jpg",
        link: "staff-and-student-management-enterprise-mobile-app-development",
        name: "Staff and Student Management Android App Development",
        tag: "UX, UI, Android",
        category: "CRM"
      },
      {
        image: "/images/portfolio/veatech.jpg",
        link: "online-learning-platform-mobile-app-development",
        name: "Online learning platform Mobile App Development",
        tag: "UX, UI, Website ,Android",
        category: "Ed-tech"
      },
      {
        image: "/images/portfolio/Medbuzz-main.jpg",
        link: "online-generic-medicine-mobile-app-development-and-web-development",
        name: "Online Generic Medicine Mobile App Development & Web Development",
        tag: "UX, UI, Website ,Android",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/Heyman.jpg",
        link: "on-demand-home-services-mobile-app-development",
        name: "On-Demand Home Services Mobile App Development",
        tag: "UX, UI, Website ,Android and IOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/vivent.png",
        link: "event-management-and-gifting-app",
        name: "Seamlessly Plan Events and Send Gifts with Our All-in-One App Development",
        tag: "UX, UI, Website ,Android and IOS",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/citzon.jpg",
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
        image: "/images/portfolio/fairloy.jpg",
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
        image: "/images/portfolio/brickberry.jpg",
        link: "fractional-property-ownership-web-development",
        name: "Real Estate Web Development",
        tag: "UX, UI, Website",
        category: "Real Estate"
      },
      {
        image: "/images/portfolio/PI.VA.jpg",
        link: "call-management-mobile-app-development",
        name: "Call Management iOS App Development and Android App",
        tag: "UX, UI, Android and iOS",
        category: "CRM"
      },
      {
        image: "/images/portfolio/PF.jpg",
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
        image: "/images/portfolio/dubshoot-image.jpg",
        link: "lip-sync-video-dubbing-mobile-app-development",
        name: "Video-Sharing iOS App Development and Android App",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/uber-clone-app.jpg",
        link: "make-your-taxi-business-smart-with-our-uber-clone-app-development",
        name: "Uber Clone App",
        tag: "UX, UI",
        category: "Transport Management"
      },
      {
        image: "/images/portfolio/astrograha.jpg",
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
        image: "/images/portfolio/wefix.jpg",
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
        image: "/images/portfolio/esra.jpg",
        link: "spa-and-salon-booking-flutter-app-development",
        name: "Spa and salon Booking App Development",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Desicart.jpg",
        link: "online-shopping-and-international-shipping-service-mobile-app",
        name: "Online Shopping And International Shipping Service Mobile App",
        tag: "UX, UI, Website, Android and iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/gullyshop.jpg",
        link: "online-grocery-delivery-android-app-development",
        name: "Online Grocery Delivery Android App Development",
        tag: "UX, UI, Android",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/Genifast.jpg",
        link: "online-generic-medicine-delivery-mobile-app-development",
        name: "Online Generic Medicine Delivery Mobile App Development",
        tag: "UX, UI, Website, Android and iOS",
        category: "Health Care"
      },
      {
        image: "/images/portfolio/Kalptaruh.png",
        link: "key-plantation-ngo-mobile-app-development",
        name: "Key Plantation NGO Mobile App Development",
        tag: "UX, UI, Android",
        category: "Online Services"
      },
      {
        image: "/images/portfolio/Mynet.jpg",
        link: "social-community-mobile-app-development",
        name: "Social Community Mobile App Development",
        tag: "UX, UI, Android and iOS",
        category: "social media"
      },
      {
        image: "/images/portfolio/Favmall.png",
        link: "online-delivery-grocery-shopping-mobile-app-development",
        name: "Online Delivery Grocery Shopping Mobile App Development",
        tag: "UX, UI, Android,iOS",
        category: "Ecommerce"
      },
      {
        image: "/images/portfolio/AnajBazaar.jpg",
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
        const cardHTML = `
      <div class="col-lg-4 col-sm-6 blog-card-item" data-category="${normalizeCategory(item)}" data-aos="fade-down">
        <div class="ree-media-crd">
          <div class="rpl-img">
            <a href="${item.link}" target="_blank">
              <img src="${item.image}" alt="${item.name}" class="fill-fixed">
            </a>
          </div>
          <div class="rpl-contt">
            <p class="port-tags" style="font-size: 14px;font-weight: 600;">${item.tag}</p>
            <h4><a href="${item.link}" target="_blank">${item.name}</a></h4>
            <a href="${item.link}" target="_blank" class="blog-read-more">Read More <i class="fas fa-arrow-right"></i></a>
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

    // Wire up filter buttons to re-render pages
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter') || 'all';
        currentFilter = filterValue;
        // update active class handled elsewhere, but ensure we start at page 1
        renderCards(1);
      });
    });

    // Initial render
    renderCards(1);
})();

/* Portfolio TOC Scroll Spy */
(function() {
  'use strict';
  
  function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.cs-toc__link');
    const sections = document.querySelectorAll('.cs-sec[id]');
    
    if (!tocLinks.length || !sections.length) return;
    
    // Set first link as active initially
    tocLinks[0]?.classList.add('active');
    
    // IntersectionObserver to track which section is in view
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Remove active from all
          tocLinks.forEach(function(link) {
            link.classList.remove('active');
          });
          // Add active to matching link
          const id = entry.target.id;
          const activeLink = document.querySelector('.cs-toc__link[href="#' + id + '"]');
          if (activeLink) {
            activeLink.classList.add('active');
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
      observer.observe(section);
    });
    
    // Smooth scroll on TOC click
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Update active immediately
          tocLinks.forEach(function(l) { l.classList.remove('active'); });
          this.classList.add('active');
        }
      });
    });
    
    // FAQ toggle
    document.querySelectorAll('.cs-faq-q').forEach(function(btn) {
      btn.addEventListener('click', function() {
        this.closest('.cs-faq-item').classList.toggle('open');
      });
    });
  }
  
  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollSpy);
  } else {
    initScrollSpy();
  }
})();