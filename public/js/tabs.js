/**
 * Bootstrap pill tabs — vanilla JS fallback
 * For the About page Mission/Vision/Commitment/Values tabs
 * Works even if Bootstrap JS tab component doesn't auto-init
 */
document.addEventListener("DOMContentLoaded", function () {
  var pillTabs = document.querySelectorAll('[data-toggle="pill"]');
  if (pillTabs.length === 0) return;

  pillTabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      pillTabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      var tabContent = document.querySelector(".tab-content");
      if (tabContent) {
        var panes = tabContent.querySelectorAll(".tab-pane");
        panes.forEach(function (pane) {
          pane.classList.remove("show", "active");
        });
      }

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      var targetId = tab.getAttribute("href");
      if (targetId) {
        var targetPane = document.querySelector(targetId);
        if (targetPane) {
          targetPane.classList.add("show", "active");
        }
      }
    });
  });
});

// Product page tab switching
(function initProductTabs() {
  var tablinks = document.querySelectorAll('.tablink[data-tab]');
  if (!tablinks.length) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProductTabs);
    }
    return;
  }

  tablinks.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetId = this.getAttribute('data-tab');

      document.querySelectorAll('.product-container-four-tabcontent').forEach(function (content) {
        content.classList.remove('active');
      });

      tablinks.forEach(function (t) {
        t.classList.remove('active');
      });

      var target = document.getElementById(targetId);
      if (target) {
        target.classList.add('active');
      }
      this.classList.add('active');
    });
  });
})();