/**
 * Shared FAQ accordion — works on any page with ._faq_item elements
 * Also works with homepage .faq-item elements
 */
document.addEventListener("DOMContentLoaded", function () {
  // New-style FAQ (services, contact, portfolio)
  var faqItems = document.querySelectorAll("._faq_item");
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
});
