/**
 * Vanilla JS for mTouch Labs site interactivity
 * Handles: modal open/close, brochure modal, current year, brochure form submit
 */

(function () {
  // ===== Set current year in footer =====
  var yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // ===== Request Quote Modal =====
  var openModalBtns = document.querySelectorAll(".js-open-modal");
  openModalBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modal = document.getElementById("requestQuoteModal");
      if (modal) modal.classList.remove("hide");
    });
  });

  // ===== Brochure Modal =====
  var brochureBtns = document.querySelectorAll(".js-brochure-modal");
  brochureBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var modal = document.getElementById("brochureModal");
      if (modal) modal.classList.remove("hide");
    });
  });

  // ===== Close Brochure Modal =====
  var closeBrochureBtn = document.getElementById("closeBrochureModal");
  if (closeBrochureBtn) {
    closeBrochureBtn.addEventListener("click", function () {
      var modal = document.getElementById("brochureModal");
      if (modal) modal.classList.add("hide");
    });
  }

  // Close brochure modal on outside click
  var brochureModal = document.getElementById("brochureModal");
  if (brochureModal) {
    brochureModal.addEventListener("click", function (e) {
      if (e.target === brochureModal) {
        brochureModal.classList.add("hide");
      }
    });
  }

  // ===== Brochure Form Submit =====
  var brochureSubmitBtn = document.getElementById("brochureSubmitBtn");
  if (brochureSubmitBtn) {
    brochureSubmitBtn.addEventListener("click", function () {
      var name = document.getElementById("brochure_name").value.trim();
      var email = document.getElementById("brochure_email").value.trim();
      var phone = document.getElementById("brochure_phone").value.trim();

      if (!name || !email || !phone) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // TODO: Send form data to your PHP backend or Next.js API route
      // Example:
      // fetch('/your-php-endpoint.php', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, phone, company })
      // });

      // Redirect to thank-you page
      window.location.href = "/thank-you";
    });
  }
})();