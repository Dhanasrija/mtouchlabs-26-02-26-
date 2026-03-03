/**
 * Vanilla JS for mTouch Labs site interactivity
 * Handles: modal open/close, brochure modal, current year, brochure form submit, request quote form
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
    btn.addEventListener("click", function (e) { e.preventDefault();
      var modal = document.getElementById("requestQuoteModal");
      if (modal) modal.classList.remove("hide");
    });
  });

  // ===== Close Request Quote Modal =====
  var closeQuoteBtn = document.getElementById("closeQuoteModal");
  if (closeQuoteBtn) {
    closeQuoteBtn.addEventListener("click", function () {
      var modal = document.getElementById("requestQuoteModal");
      if (modal) modal.classList.add("hide");
    });
  }

  // Close quote modal on outside click
  var quoteOverlay = document.getElementById("requestQuoteModal");
  if (quoteOverlay) {
    quoteOverlay.addEventListener("click", function (e) {
      if (e.target === quoteOverlay) {
        quoteOverlay.classList.add("hide");
      }
    });
  }

  // // ===== Request Quote Form Submit =====
  // var quoteForm = document.getElementById("requestQuoteForm");
  // if (quoteForm) {
  //   quoteForm.addEventListener("submit", async function (e) {
  //     e.preventDefault();
  //     var spinner = document.getElementById("rotating_icon");
  //     if (spinner) spinner.style.display = "inline-flex";

  //     var fd = new FormData(e.target);
  //     var d = Object.fromEntries(fd.entries());
  //     var phone = "+" + d.countryCode + " " + d.mobile;

  //     try {
  //       var res = await fetch("https://93iji6x3i1.execute-api.ap-south-1.amazonaws.com/Dev/send-mail", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           title: "Request Quote",
  //           type: "contact",
  //           message: "\nName: " + d.name + ",\nEmail: " + d.email + ",\nPhone: " + phone + ",\nBudget: " + d.budget + ",\nService: " + d.service + ",\nMessage: " + d.message,
  //           Name: d.name,
  //           Email: d.email,
  //           countryCode: d.countryCode,
  //           contactNumber: d.mobile,
  //           Budget: d.budget,
  //           Service: d.service,
  //           CustomMessage: d.message
  //         })
  //       });
  //       if (res.ok) {
  //         e.target.reset();
  //         window.location.href = "/thank-you";
  //       } else {
  //         alert("Something went wrong. Please try again.");
  //       }
  //     } catch (err) {
  //       alert("Error submitting form. Please try again.");
  //     } finally {
  //       if (spinner) spinner.style.display = "none";
  //     }
  //   });
  // }

  // ===== Budget update based on country =====
  var countrySelect = document.getElementById("countryCode");
  var budgetSelect = document.getElementById("budget");
  if (countrySelect && budgetSelect) {
    countrySelect.addEventListener("change", function () {
      var val = countrySelect.value;
      var opts = budgetSelect.options;
      if (val === "91") {
        opts[1].text = "₹80,000 to ₹1,50,000"; opts[1].value = "₹80,000 to ₹1,50,000";
        opts[2].text = "₹1,50,000 to ₹4,00,000"; opts[2].value = "₹1,50,000 to ₹4,00,000";
        opts[3].text = "₹4,00,000 to ₹10,00,000"; opts[3].value = "₹4,00,000 to ₹10,00,000";
        opts[4].text = "₹10,00,000 to ₹25,00,000"; opts[4].value = "₹10,00,000 to ₹25,00,000";
        opts[5].text = "₹25,00,000 to ₹50,00,000"; opts[5].value = "₹25,00,000 to ₹50,00,000";
        opts[6].text = "₹50,00,000 and above"; opts[6].value = "₹50,00,000 and above";
      } else {
        var s = "$";
        opts[1].text = s + "5,000 to " + s + "10,000"; opts[1].value = s + "5,000 to " + s + "10,000";
        opts[2].text = s + "10,000 to " + s + "25,000"; opts[2].value = s + "10,000 to " + s + "25,000";
        opts[3].text = s + "25,000 to " + s + "50,000"; opts[3].value = s + "25,000 to " + s + "50,000";
        opts[4].text = s + "50,000 to " + s + "100,000"; opts[4].value = s + "50,000 to " + s + "100,000";
        opts[5].text = s + "100,000 to " + s + "1,000,000"; opts[5].value = s + "100,000 to " + s + "1,000,000";
        opts[6].text = s + "1,000,000 and above"; opts[6].value = s + "1,000,000 and above";
      }
    });
  }

  // ===== Brochure Modal =====
  var brochureBtns = document.querySelectorAll(".js-brochure-modal");
  brochureBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) { e.preventDefault();
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

      window.location.href = "/thank-you";
    });
  }
})();

// ===== Request Quote Form Submit =====
var quoteForm = document.getElementById("requestQuoteForm");
if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var spinner = document.getElementById("rotating_icon");
    if (spinner) spinner.style.display = "inline-flex";

    // TODO: Connect to email API once CORS is fixed
    setTimeout(function () {
      if (spinner) spinner.style.display = "none";
      var modal = document.getElementById("requestQuoteModal");
      if (modal) modal.classList.add("hide");
      e.target.reset();
      window.location.href = "/thank-you";
    }, 1000);
  });
}