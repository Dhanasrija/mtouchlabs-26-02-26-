/**
 * Shared FAQ accordion — works on any page with ._faq_item elements
 */
(function initFaq() {
  var faqItems = document.querySelectorAll("._faq_item");
  if (!faqItems.length) {
    // DOM may not be ready in Next.js — retry
    if (document.readyState !== 'complete') {
      setTimeout(initFaq, 150);
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
        });
        // Open clicked if it wasn't active
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
})();