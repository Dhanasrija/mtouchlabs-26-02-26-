/**
 * Shared FAQ accordion — works on any page with ._faq_item elements
 */
(function initFaq() {
  var faqItems = document.querySelectorAll("._faq_item");
  if (!faqItems.length) {
    // Retry up to 20 times (4 seconds) — handles Next.js hydration timing
    if (!window.__faqRetries) window.__faqRetries = 0;
    if (window.__faqRetries < 20) {
      window.__faqRetries++;
      setTimeout(initFaq, 200);
    }
    return;
  }

  faqItems.forEach(function (item) {
    var question = item.querySelector("._faq_question");
    if (question) {
      question.addEventListener("click", function () {
        var isActive = item.classList.contains("active");
        // Close all
        faqItems.forEach(function (other) {
          other.classList.remove("active");
          other.classList.remove("glow");
          var icon = other.querySelector("._faq_icon");
          if (icon) icon.textContent = "+";
        });
        // Open clicked if it wasn't active
        if (!isActive) {
          item.classList.add("active");
          var icon = item.querySelector("._faq_icon");
          if (icon) icon.textContent = "\u2212";
        }
      });
    }
  });
})();