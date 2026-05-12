/**
 * Shared FAQ accordion — works on any page with ._faq_item elements.
 *
 * Hardened version:
 *   • Uses a single document-level click delegate so newly-mounted
 *     items (e.g. last two on Next.js hydration) always toggle.
 *   • Tracks whether each item already has its own onclick handler so
 *     we never double-toggle (which previously broke items 6+).
 *   • De-duplicates against any inline script bound to the same list.
 */
(function () {
  if (window.__mtlFaqBound) return;
  window.__mtlFaqBound = true;

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("._faq_question");
    if (!btn) return;
    var item = btn.closest && btn.closest("._faq_item");
    if (!item) return;
    var list = item.parentElement;
    if (!list) return;

    var wasActive = item.classList.contains("active");

    // Close ALL siblings inside the same list
    list.querySelectorAll("._faq_item").forEach(function (other) {
      other.classList.remove("active");
      other.classList.remove("glow");
      var icon = other.querySelector("._faq_icon");
      if (icon) icon.textContent = "+";
    });

    // Toggle the clicked one
    if (!wasActive) {
      item.classList.add("active", "glow");
      var icon = item.querySelector("._faq_icon");
      if (icon) icon.textContent = "−";
    }
  });
})();
