/**
 * Contact Us page — vanilla JS
 * Form submission, character counter, FAQ
 */
document.addEventListener("DOMContentLoaded", function () {
  // Contact form submission
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      var formData = new FormData(event.target);
      var data = Object.fromEntries(formData.entries());
      var body = {
        title: "Contact Form",
        type: "contact",
        message:
          "\nName: " + data.name +
          ",\nEmail: " + data.email +
          ",\nPhone: +" + data.countryCode + " " + data.mobile +
          ",\nInterested: " + data.interest +
          ",\nMessage: " + data.message,
      };
      try {
        var response = await fetch(
          "https://93iji6x3i1.execute-api.ap-south-1.amazonaws.com/Dev/send-mail",
          { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }
        );
        if (response.ok) {
          window.location.href = "/thank-you";
          event.target.reset();
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  }

  // Textarea character counter
  var textarea = document.querySelector(".new_contact_textarea");
  var charCount = document.querySelector(".new_contact_char_count");
  if (textarea && charCount) {
    textarea.addEventListener("input", function () {
      charCount.textContent = this.value.length + "/1000";
    });
  }
});
