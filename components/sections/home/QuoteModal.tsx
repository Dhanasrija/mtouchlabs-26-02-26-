/* ═══════════════════════════════════════════════════════
   QuoteModal — Pure SSR (Server Component)
   No "use client". No hooks. No React state.
   Form submit + close via inline <script>.
   ═══════════════════════════════════════════════════════ */

export default function QuoteModal() {
  return (
    <>
      <div className="rq-overlay hide" id="requestQuoteModal">
        <div className="rq-modal-card">

          {/* ─── LEFT: Hero Image ─── */}
          <div className="rq-hero-left">
            <div className="rq-hero-circle">
              <img
                src="/images/sliders/mobile_app_development.png"
                alt="Mobile App Development"
                className="rq-hero-img"
              />
            </div>
          </div>

          {/* ─── RIGHT: Form ─── */}
          <div className="rq-form-side">
            <button type="button" className="rq-close-btn" id="rqCloseBtn">&times;</button>

            {/* Form */}
            <div id="rqFormWrap">
              <h2 className="rq-title">Request Quote</h2>

              <form id="rqForm" noValidate>
                <label className="rq-label">Full Name <span className="rq-required">*</span></label>
                <div className="rq-input-wrap">
                  <svg className="rq-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <input type="text" name="name" placeholder="Full Name" className="rq-input" required />
                  <div className="rq-field-error" data-error-for="name"></div>
                </div>

                <label className="rq-label">Your Email <span className="rq-required">*</span></label>
                <div className="rq-input-wrap">
                  <svg className="rq-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input type="email" name="email" placeholder="Email Id" className="rq-input" required />
                  <div className="rq-field-error" data-error-for="email"></div>
                </div>

                <div className="rq-row">
                  <div className="rq-col">
                    <label className="rq-label">Country Code</label>
                    <select name="cc" className="rq-select" defaultValue="+91">
                      <option value="+91">India (+91)</option>
                      <option value="+1">USA (+1)</option>
                      <option value="+44">UK (+44)</option>
                      <option value="+971">UAE (+971)</option>
                      <option value="+65">Singapore (+65)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+49">Germany (+49)</option>
                      <option value="+33">France (+33)</option>
                      <option value="+81">Japan (+81)</option>
                      <option value="+86">China (+86)</option>
                      <option value="+966">Saudi (+966)</option>
                      <option value="+974">Qatar (+974)</option>
                    </select>
                  </div>
                  <div className="rq-col">
                    <label className="rq-label">Your Mobile <span className="rq-required">*</span></label>
                    <div className="rq-input-wrap">
                      <svg className="rq-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                      <input type="tel" name="phone" placeholder="Contact Number" className="rq-input" required />
                      <div className="rq-field-error" data-error-for="phone"></div>
                    </div>
                  </div>
                </div>

                <div className="rq-row">
                  <div className="rq-col">
                    <label className="rq-label">For <span className="rq-required">*</span></label>
                    <select name="service" className="rq-select" required>
                      <option value="">Select Service</option>
                      <option>Mobile App Development</option>
                      <option>Web Application Development</option>
                      <option>AI &amp; Automation</option>
                      <option>Enterprise Software</option>
                      <option>E-commerce Development</option>
                      <option>UI/UX Design</option>
                      <option>Salesforce Solutions</option>
                      <option>Digital Marketing</option>
                      <option>Cloud &amp; DevOps</option>
                      <option>Data &amp; Infrastructure</option>
                    </select>
                    <div className="rq-field-error" data-error-for="service"></div>
                  </div>
                  <div className="rq-col">
                    <label className="rq-label">Budget</label>
                    <select name="budget" className="rq-select">
                      <option value="">Select Budget</option>
                      <option>₹80K – ₹1.5L</option>
                      <option>₹1.5L – ₹4L</option>
                      <option>₹4L – ₹10L</option>
                      <option>₹10L – ₹25L</option>
                      <option>₹25L+</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                </div>

                <label className="rq-label">Message</label>
                <textarea name="message" placeholder="Message" className="rq-textarea" rows={3}></textarea>

                <div className="rq-error" id="rqError"></div>

                <div className="cf-turnstile" data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}  data-callback="onTurnstileSuccess"></div>

                <button type="submit" className="rq-submit" id="rqSubmitBtn">SUBMIT NOW</button>
              </form>
            </div>

            {/* Success (hidden by default) */}
            <div id="rqSuccess" className="rq-success" style={{ display: "none" }}>
              <div className="rq-success-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              </div>
              <h3>Thank You!</h3>
              <p>Our team will contact you within <strong>24 hours</strong>.</p>
              <button type="button" className="rq-submit" id="rqSuccessClose">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Inline styles for validation errors ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .rq-required {
          color: #ef4444;
          margin-left: 2px;
        }
        .rq-field-error {
          color: #ef4444;
          font-size: 12px;
          min-height: 0;
          margin-top: 2px;
          margin-bottom: 2px;
          transition: all 0.2s ease;
        }
        .rq-field-error.show {
          min-height: 16px;
        }
        .rq-input.rq-invalid,
        .rq-select.rq-invalid {
          border-color: #ef4444 !important;
          box-shadow: 0 0 0 2px rgba(239,68,68,0.15) !important;
        }
        .rq-input.rq-valid,
        .rq-select.rq-valid {
          border-color: #22c55e !important;
        }
      `}} />

      {/* ── Vanilla JS — close, validate, submit ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          var overlay = document.getElementById('requestQuoteModal');
          var form = document.getElementById('rqForm');
          var formWrap = document.getElementById('rqFormWrap');
          var success = document.getElementById('rqSuccess');
          var errEl = document.getElementById('rqError');
          var submitBtn = document.getElementById('rqSubmitBtn');
          var closeBtn = document.getElementById('rqCloseBtn');
          var successClose = document.getElementById('rqSuccessClose');

          /* ═══════════════════════════════════════════════════
             Country-code → phone rules map
             Each entry: { digits: [min, max], label: "Country" }
             ═══════════════════════════════════════════════════ */
          var phoneRules = {
            '+91':  { digits: [10, 10], label: 'India',     placeholder: '9876543210' },
            '+1':   { digits: [10, 10], label: 'USA',       placeholder: '2025551234' },
            '+44':  { digits: [10, 11], label: 'UK',        placeholder: '7911123456' },
            '+971': { digits: [9, 9],   label: 'UAE',       placeholder: '501234567' },
            '+65':  { digits: [8, 8],   label: 'Singapore', placeholder: '91234567' },
            '+61':  { digits: [9, 9],   label: 'Australia', placeholder: '412345678' },
            '+49':  { digits: [10, 11], label: 'Germany',   placeholder: '15112345678' },
            '+33':  { digits: [9, 9],   label: 'France',    placeholder: '612345678' },
            '+81':  { digits: [10, 11], label: 'Japan',     placeholder: '9012345678' },
            '+86':  { digits: [11, 11], label: 'China',     placeholder: '13812345678' },
            '+966': { digits: [9, 9],   label: 'Saudi',     placeholder: '512345678' },
            '+974': { digits: [8, 8],   label: 'Qatar',     placeholder: '55123456' }
          };

          function getPhoneRule(){
            var ccSelect = form ? form.querySelector('[name=cc]') : null;
            var cc = ccSelect ? ccSelect.value : '+91';
            return phoneRules[cc] || { digits: [7, 15], label: 'selected country', placeholder: '' };
          }

          /* ── Helper: check if any field has been touched ── */
          function isFormDirty(){
            if(!form) return false;
            var fd = new FormData(form);
            var name = (fd.get('name')||'').toString().trim();
            var email = (fd.get('email')||'').toString().trim();
            var phone = (fd.get('phone')||'').toString().trim();
            var service = (fd.get('service')||'').toString().trim();
            var message = (fd.get('message')||'').toString().trim();
            return !!(name || email || phone || service || message);
          }

          function resetForm(){
            if(form) form.reset();
            if(formWrap) formWrap.style.display='';
            if(success) success.style.display='none';
            if(errEl) { errEl.textContent=''; errEl.style.display='none'; }
            var allErrors = document.querySelectorAll('.rq-field-error');
            for(var i=0;i<allErrors.length;i++){ allErrors[i].textContent=''; allErrors[i].classList.remove('show'); }
            var allInputs = form ? form.querySelectorAll('.rq-input, .rq-select') : [];
            for(var j=0;j<allInputs.length;j++){ allInputs[j].classList.remove('rq-invalid','rq-valid'); }
            /* Reset placeholder to default country */
            updatePhonePlaceholder();
          }

          function closeModal(){
            if(overlay) overlay.classList.add('hide');
            setTimeout(resetForm, 300);
          }

          function tryClose(){
            if(isFormDirty()){
              if(confirm('You have unsaved changes. Are you sure you want to close?')){
                closeModal();
              }
            } else {
              closeModal();
            }
          }

          if(overlay) overlay.addEventListener('click',function(e){ if(e.target===overlay) tryClose(); });
          if(closeBtn) closeBtn.addEventListener('click', tryClose);
          if(successClose) successClose.addEventListener('click', closeModal);

          /* ── Field-level validation helpers ── */
          function showFieldError(fieldName, msg){
            var el = document.querySelector('[data-error-for="'+fieldName+'"]');
            var input = form ? form.querySelector('[name="'+fieldName+'"]') : null;
            if(el){ el.textContent=msg; el.classList.add('show'); }
            if(input){ input.classList.add('rq-invalid'); input.classList.remove('rq-valid'); }
          }
          function clearFieldError(fieldName){
            var el = document.querySelector('[data-error-for="'+fieldName+'"]');
            var input = form ? form.querySelector('[name="'+fieldName+'"]') : null;
            if(el){ el.textContent=''; el.classList.remove('show'); }
            if(input){ input.classList.remove('rq-invalid'); }
          }
          function markFieldValid(fieldName){
            var input = form ? form.querySelector('[name="'+fieldName+'"]') : null;
            if(input){ input.classList.add('rq-valid'); input.classList.remove('rq-invalid'); }
            clearFieldError(fieldName);
          }

          /* ── Email regex ── */
          var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

          /* ── Phone validation using country rules ── */
          function validatePhone(phoneVal){
            var rule = getPhoneRule();
            var min = rule.digits[0];
            var max = rule.digits[1];
            if(!phoneVal){ return 'Phone number is required.'; }
            if(phoneVal.length < min || phoneVal.length > max){
              if(min === max){
                return rule.label + ' numbers must be exactly ' + min + ' digits.';
              }
              return rule.label + ' numbers must be ' + min + '–' + max + ' digits.';
            }
            return ''; /* valid */
          }

          /* ── Update phone placeholder + maxlength on country change ── */
          function updatePhonePlaceholder(){
            var phoneInput = form ? form.querySelector('[name=phone]') : null;
            if(!phoneInput) return;
            var rule = getPhoneRule();
            phoneInput.placeholder = rule.placeholder || 'Contact Number';
            phoneInput.setAttribute('maxlength', rule.digits[1]);
          }

          if(form){
            var nameInput = form.querySelector('[name=name]');
            var emailInput = form.querySelector('[name=email]');
            var phoneInput = form.querySelector('[name=phone]');
            var serviceSelect = form.querySelector('[name=service]');
            var ccSelect = form.querySelector('[name=cc]');

            /* Set initial placeholder */
            updatePhonePlaceholder();

            /* ── Country code change: update placeholder + re-validate phone ── */
            if(ccSelect) ccSelect.addEventListener('change', function(){
              updatePhonePlaceholder();
              /* Re-validate if phone already has value */
              if(phoneInput && phoneInput.value.trim()){
                var err = validatePhone(phoneInput.value.trim());
                if(err){ showFieldError('phone', err); }
                else { markFieldValid('phone'); }
              }
            });

            /* ── Name blur ── */
            if(nameInput) nameInput.addEventListener('blur', function(){
              var v = this.value.trim();
              if(!v){ showFieldError('name','Full name is required.'); }
              else if(v.length < 2){ showFieldError('name','Name must be at least 2 characters.'); }
              else { markFieldValid('name'); }
            });

            /* ── Email blur ── */
            if(emailInput) emailInput.addEventListener('blur', function(){
              var v = this.value.trim();
              if(!v){ showFieldError('email','Email is required.'); }
              else if(!emailRegex.test(v)){ showFieldError('email','Please enter a valid email address.'); }
              else { markFieldValid('email'); }
            });

            /* ── Phone: digits only + blur validation ── */
            if(phoneInput){
              phoneInput.addEventListener('input', function(){
                this.value = this.value.replace(/[^0-9]/g,'');
                /* Enforce maxlength */
                var rule = getPhoneRule();
                if(this.value.length > rule.digits[1]){
                  this.value = this.value.slice(0, rule.digits[1]);
                }
                if(this.value.trim()) clearFieldError('phone');
              });
              phoneInput.addEventListener('blur', function(){
                var err = validatePhone(this.value.trim());
                if(err){ showFieldError('phone', err); }
                else { markFieldValid('phone'); }
              });
            }

            /* ── Service change ── */
            if(serviceSelect) serviceSelect.addEventListener('change', function(){
              if(!this.value){ showFieldError('service','Please select a service.'); }
              else { markFieldValid('service'); }
            });
          }

          /* ── Clear errors on input (real-time) ── */
          if(form){
            ['name','email'].forEach(function(fieldName){
              var inp = form.querySelector('[name='+fieldName+']');
              if(inp) inp.addEventListener('input', function(){
                if(this.value.trim()) clearFieldError(fieldName);
              });
            });
          }

          /* ── Form submit with full validation ── */
          if(form) form.addEventListener('submit', function(e){
            e.preventDefault();
            errEl.style.display='none'; errEl.textContent='';

            var fd = new FormData(form);
            var name = (fd.get('name')||'').toString().trim();
            var email = (fd.get('email')||'').toString().trim();
            var phone = (fd.get('phone')||'').toString().trim();
            var service = (fd.get('service')||'').toString().trim();

            var hasError = false;

            /* Name */
            if(!name){
              showFieldError('name','Full name is required.');
              hasError = true;
            } else if(name.length < 2){
              showFieldError('name','Name must be at least 2 characters.');
              hasError = true;
            } else { clearFieldError('name'); }

            /* Email */
            if(!email){
              showFieldError('email','Email is required.');
              hasError = true;
            } else if(!emailRegex.test(email)){
              showFieldError('email','Please enter a valid email address.');
              hasError = true;
            } else { clearFieldError('email'); }

            /* Phone — country-aware */
            var phoneErr = validatePhone(phone);
            if(phoneErr){
              showFieldError('phone', phoneErr);
              hasError = true;
            } else { clearFieldError('phone'); }

            /* Service */
            if(!service){
              showFieldError('service','Please select a service.');
              hasError = true;
            } else { clearFieldError('service'); }

            if(hasError){
              errEl.textContent='Please fill in all required fields.';
              errEl.style.display='block';
              var firstInvalid = form.querySelector('.rq-invalid');
              if(firstInvalid) firstInvalid.focus();
              return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            fetch('/api/estimate',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({
                name: name,
                email: email,
                phone: (fd.get('cc')||'+91') + ' ' + phone,
                companyType: 'N/A',
                projectType: service || 'Not specified',
                platform: 'Not specified',
                features: [],
                budget: (fd.get('budget')||'Not specified').toString(),
                timeline: 'Not specified',
                message: (fd.get('message')||'').toString().trim(),
                partial: false
              })
            })
            .then(function(r){ if(!r.ok) throw new Error('fail'); formWrap.style.display='none'; success.style.display='flex'; })
            .catch(function(){ errEl.textContent='Something went wrong. Please try again.'; errEl.style.display='block'; })
            .finally(function(){ submitBtn.disabled=false; submitBtn.textContent='SUBMIT NOW'; });
          });
        })();
      `}} />
    </>
  );
}