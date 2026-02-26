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
                <label className="rq-label">Full Name</label>
                <div className="rq-input-wrap">
                  <svg className="rq-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <input type="text" name="name" placeholder="Full Name" className="rq-input" required />
                </div>

                <label className="rq-label">Your Email</label>
                <div className="rq-input-wrap">
                  <svg className="rq-input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input type="email" name="email" placeholder="Email Id" className="rq-input" />
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
                    <label className="rq-label">Your Mobile</label>
                    <div className="rq-input-wrap">
                      <svg className="rq-input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
                      </svg>
                      <input type="tel" name="phone" placeholder="Contact Number" className="rq-input" required />
                    </div>
                  </div>
                </div>

                <div className="rq-row">
                  <div className="rq-col">
                    <label className="rq-label">For</label>
                    <select name="service" className="rq-select">
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

          function closeModal(){
            if(overlay) overlay.classList.add('hide');
            setTimeout(function(){
              if(form) form.reset();
              if(formWrap) formWrap.style.display='';
              if(success) success.style.display='none';
              if(errEl) { errEl.textContent=''; errEl.style.display='none'; }
            },300);
          }

          if(overlay) overlay.addEventListener('click',function(e){ if(e.target===overlay) closeModal(); });
          if(closeBtn) closeBtn.addEventListener('click', closeModal);
          if(successClose) successClose.addEventListener('click', closeModal);

          // Phone input — digits only
          var phoneInput = form ? form.querySelector('[name=phone]') : null;
          if(phoneInput) phoneInput.addEventListener('input',function(){ this.value = this.value.replace(/[^0-9]/g,''); });

          if(form) form.addEventListener('submit', function(e){
            e.preventDefault();
            errEl.style.display='none'; errEl.textContent='';

            var fd = new FormData(form);
            var name = (fd.get('name')||'').toString().trim();
            var phone = (fd.get('phone')||'').toString().trim();
            if(!name){ errEl.textContent='Please enter your name.'; errEl.style.display='block'; return; }
            if(!phone || phone.length < 7){ errEl.textContent='Please enter a valid phone number.'; errEl.style.display='block'; return; }

            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            fetch('/api/estimate',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body: JSON.stringify({
                name: name,
                email: (fd.get('email')||'').toString().trim(),
                phone: (fd.get('cc')||'+91') + ' ' + phone,
                companyType: 'N/A',
                projectType: (fd.get('service')||'Not specified').toString(),
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