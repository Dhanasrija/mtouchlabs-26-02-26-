(function () {
  let __megaMenuInitialized = false;
  let menuOpenTimeout;

  // Function to prevent body scroll when menu is open
  function preventBodyScroll(prevent) {
    if (prevent) {
      document.documentElement.classList.add('no-scroll');
      document.body.classList.add('no-scroll');
      clearTimeout(menuOpenTimeout);
    } else {
      // Delay removal to prevent flickering
      menuOpenTimeout = setTimeout(() => {
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');
      }, 100);
    }
  }

  function initMegaMenu() {
    // Prevent double initialization
    if (__megaMenuInitialized) {
      console.log('Mega menu already initialized');
      return;
    }

    console.log('Initializing mega menu...');

    // Add scroll prevention to the entire nav-list container
    const navLists = document.querySelectorAll('.nav-list');
    navLists.forEach(navList => {
      navList.addEventListener('mouseenter', function () {
        preventBodyScroll(true);
      });

      navList.addEventListener('mouseleave', function () {
        preventBodyScroll(false);
      });
    });

    try {
      const dropdown = document.querySelector(".home-mega");
      if (!dropdown) {
        console.log('Home mega menu not found yet');
        return;
      }

      const path = (location.pathname || "").toLowerCase();

      const aboutLink = dropdown.querySelector('.feature-card[href*="about"]');
      const blogLink = dropdown.querySelector('.row-link[href*="blog"]');
      const caseLink = dropdown.querySelector('.row-link[href*="case-studies"]');

      const clearActive = () => {
        dropdown
          .querySelectorAll(".row-link.is-current, .feature-card.is-current")
          .forEach((el) => el.classList.remove("is-current"));
      };

      clearActive();

      if (path.includes("/about")) {
        if (aboutLink) aboutLink.classList.add("is-current");
      } else if (path.includes("/blog")) {
        if (blogLink) blogLink.classList.add("is-current");
      } else if (path.includes("/case-studies")) {
        if (caseLink) caseLink.classList.add("is-current");
      }
    } catch (e) {
      console.error('Error in home mega menu:', e);
    }

    // Services Menu Functionality
    try {
      const servicesDropdown = document.querySelector(".services-mega");
      if (!servicesDropdown) {
        console.log('Services mega menu not found yet');
        return;
      }

      const serviceContents = servicesDropdown.querySelectorAll('.service-content');

      // Clear all active states
      const allServiceLinks = servicesDropdown.querySelectorAll('.row-link[data-service], .feature-card[data-service], .row-link[href="custom-software-development"], .feature-card[href="custom-software-development"]');
      allServiceLinks.forEach(link => {
        link.classList.remove('is-current');
        link.classList.remove('active');
      });
      serviceContents.forEach(content => {
        content.classList.remove('active');
      });

      function switchService(serviceId) {
        const allLinks = servicesDropdown.querySelectorAll('.row-link[data-service], .feature-card[data-service], .row-link[href="custom-software-development"], .feature-card[href="custom-software-development"]');
        allLinks.forEach(link => link.classList.remove('is-current'));
        serviceContents.forEach(content => content.classList.remove('active'));

        const clickedLink = servicesDropdown.querySelector(`[data-service="${serviceId}"]`);
        if (clickedLink) {
          clickedLink.classList.add('is-current');
        } else {
          const hrefLink = servicesDropdown.querySelector(`[href="${serviceId}"]`);
          if (hrefLink) {
            hrefLink.classList.add('is-current');
          }
        }

        const targetContent = servicesDropdown.querySelector(`.service-content[data-content="${serviceId}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      }

      const serviceLinks = servicesDropdown.querySelectorAll('.row-link[data-service], .feature-card[data-service], .row-link[href="custom-software-development"], .feature-card[href="custom-software-development"]');

      serviceLinks.forEach(link => {
        let serviceId = link.getAttribute('data-service');
        if (!serviceId) {
          const href = link.getAttribute('href');
          if (href === 'custom-software-development') {
            serviceId = 'custom-software-development';
          }
        }

        if (serviceId) {
          link.addEventListener('mouseenter', function (e) {
            e.stopPropagation();
            switchService(serviceId);
          });

          link.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            switchService(serviceId);
          });
        }
      });

      const anyActive = servicesDropdown.querySelector('.row-link.is-current, .feature-card.is-current');
      if (!anyActive) {
        const firstLink = servicesDropdown.querySelector('.row-link[data-service], .feature-card[data-service], .row-link[href="custom-software-development"], .feature-card[href="custom-software-development"]');
        if (firstLink) {
          let serviceId = firstLink.getAttribute('data-service');
          if (!serviceId) {
            const href = firstLink.getAttribute('href');
            if (href === 'custom-software-development' || href === './custom-software-development') serviceId = 'custom-software-development';
          }
          if (serviceId) switchService(serviceId);
        }
      }
    } catch (e) {
      console.error('Services menu error:', e);
    }

    // Products Menu Functionality
    try {
      const productsDropdowns = document.querySelectorAll(".products-mega");
      if (!productsDropdowns || productsDropdowns.length === 0) {
        console.log('Products mega menu not found yet');
        return;
      }

      productsDropdowns.forEach(productsDropdown => {
        const productContents = productsDropdown.querySelectorAll('.product-content');

        const allProductLinks = productsDropdown.querySelectorAll('.row-link[data-product], .feature-card[data-product]');
        allProductLinks.forEach(link => {
          link.classList.remove('is-current');
          link.classList.remove('active');
        });
        productContents.forEach(content => {
          content.classList.remove('active');
        });

        let firstProductLink = productsDropdown.querySelector('[data-product="on-demand-delivery"]') || productsDropdown.querySelector('.row-link[data-product], .feature-card[data-product]');
        let firstProductContent = productsDropdown.querySelector('.product-content[data-content="on-demand-delivery"]') || productsDropdown.querySelector('.product-content');
        if (firstProductLink && firstProductContent) {
          firstProductLink.classList.add('is-current');
          firstProductContent.classList.add('active');
        }

        function switchProduct(productId) {
          const allLinks = productsDropdown.querySelectorAll('.row-link[data-product], .feature-card[data-product]');
          allLinks.forEach(link => link.classList.remove('is-current'));
          const contents = productsDropdown.querySelectorAll('.product-content');
          contents.forEach(content => content.classList.remove('active'));

          const clickedLink = productsDropdown.querySelector(`[data-product="${productId}"]`);
          if (clickedLink) {
            clickedLink.classList.add('is-current');
          }

          const targetContent = productsDropdown.querySelector(`.product-content[data-content="${productId}"]`);
          if (targetContent) {
            targetContent.classList.add('active');
          }
        }

        const productLinks = productsDropdown.querySelectorAll('.row-link[data-product], .feature-card[data-product]');

        productLinks.forEach(link => {
          let productId = link.getAttribute('data-product');

          if (productId) {
            link.addEventListener('mouseenter', function (e) {
              e.stopPropagation();
              switchProduct(productId);
            });

            link.addEventListener('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              switchProduct(productId);
            });
          }
        });
      });
    } catch (e) {
      console.error('Products menu error:', e);
    }

    // Mark as initialized
    __megaMenuInitialized = true;
    console.log('Mega menu initialized successfully');
  }

  // Expose globally for manual initialization
  if (typeof window !== 'undefined') {
    window.initMegaMenu = initMegaMenu;
  }

  // Auto-initialize if DOM is already loaded (for inline navbar)
  if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initMegaMenu);
  } else {
    // Try immediate initialization
    setTimeout(initMegaMenu, 100);
  }
})();