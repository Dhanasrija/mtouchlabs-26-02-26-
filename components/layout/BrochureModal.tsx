"use client";

/*
  BrochureModal — static markup for the "Request Brochure" overlay.

  Marked "use client" purely as a payload optimisation: the overlay is hidden
  until opened, but as a server component its ~2.9 KB of markup was ALSO
  serialised into the inlined RSC flight payload on every page load. As a
  client component the rendered HTML is byte-for-byte identical (still SSR'd,
  same ids, so the existing brochure handler in app/layout.tsx keeps working),
  but the tree is no longer duplicated into the flight payload — it lives in a
  cached JS chunk instead.

  There is no state or event handler here on purpose; behaviour is unchanged.
*/
export default function BrochureModal() {
  return (
        <div className="modal-overlay hide" id="brochureModal" role="dialog" aria-modal="true" aria-labelledby="brochureModalTitle">
          <div className="brochure-modal-box">
            <div className="brochure-modal-left">
              <div className="brochure-modal-circle">
                <img width={516} height={546} loading="lazy" decoding="async" src="/images/sliders/mobile_app_development.webp" alt="Web and Mobile App Development" />
              </div>
            </div>
            <div className="brochure-modal-right">
              <button id="closeBrochureModal" className="brochure-close-btn" aria-label="Close brochure modal" type="button">&#10005;</button>
              <h3 id="brochureModalTitle" className="brochure-modal-title">Request Brochure</h3>
              <form id="brochureForm" noValidate>
                <label className="brochure-form-label" htmlFor="brochure_name">Full Name</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128100;</span>
                  <input type="text" id="brochure_name" name="name" placeholder="Full Name" aria-label="Full Name" autoComplete="name" required />
                </div>
                <div className="brochure-error" id="brochure_name_err" aria-live="polite"></div>

                <label className="brochure-form-label" htmlFor="brochure_email">Your Email</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#9993;&#65039;</span>
                  <input type="email" id="brochure_email" name="email" placeholder="Email Id" aria-label="Email Address" autoComplete="email" required />
                </div>
                <div className="brochure-error" id="brochure_email_err" aria-live="polite"></div>

                <label className="brochure-form-label" htmlFor="brochure_country">Country Code</label>
                <select id="brochure_country" name="countryCode" className="brochure-form-select" aria-label="Country Code">
                  <option value="+91">India (+91)</option>
                  <option value="+1">USA (+1)</option>
                  <option value="+44">UK (+44)</option>
                  <option value="+61">Australia (+61)</option>
                  <option value="+971">UAE (+971)</option>
                  <option value="+65">Singapore (+65)</option>
                  <option value="+49">Germany (+49)</option>
                  <option value="+33">France (+33)</option>
                  <option value="+81">Japan (+81)</option>
                  <option value="+86">China (+86)</option>
                  <option value="+974">Qatar (+974)</option>
                  <option value="+965">Kuwait (+965)</option>
                  <option value="+966">Saudi Arabia (+966)</option>
                  <option value="+1-ca">Canada (+1)</option>
                </select>

                <label className="brochure-form-label" htmlFor="brochure_phone">Your Mobile</label>
                <div className="brochure-input-group">
                  <span className="brochure-input-icon">&#128241;</span>
                  <input type="tel" id="brochure_phone" name="mobile" placeholder="Contact Number" aria-label="Phone Number" autoComplete="tel" inputMode="numeric" pattern="[0-9]*" maxLength={10} required />
                </div>
                <div className="brochure-error" id="brochure_phone_err" aria-live="polite"></div>

                <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} data-callback="onBrochureTurnstileSuccess" suppressHydrationWarning></div>

                <button type="submit" id="brochureSubmitBtn" className="brochure-submit-btn">Submit Now</button>
                <div className="brochure-error brochure-error--form" id="brochure_form_err" aria-live="polite"></div>
              </form>
            </div>
          </div>
        </div>
  );
}
