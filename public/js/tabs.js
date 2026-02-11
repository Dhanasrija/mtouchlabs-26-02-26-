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

      // Deactivate all tabs
      pillTabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      // Deactivate all panes
      var tabContent = document.querySelector(".tab-content");
      if (tabContent) {
        var panes = tabContent.querySelectorAll(".tab-pane");
        panes.forEach(function (pane) {
          pane.classList.remove("show", "active");
        });
      }

      // Activate clicked tab
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      // Activate target pane
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
