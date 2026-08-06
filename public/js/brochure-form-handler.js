(function() {
            var brochureTurnstileToken = '';
            window.onBrochureTurnstileSuccess = function(token) { brochureTurnstileToken = token; };

            var NAME_RE  = /^[A-Za-z][A-Za-z .'\\-]{1,59}$/;
            var EMAIL_RE = /^[A-Za-z0-9._%+\\-]{1,64}@(?:[A-Za-z0-9](?:[A-Za-z0-9\\-]{0,61}[A-Za-z0-9])?\\.)+[A-Za-z]{2,24}$/;
            var BLOCKED_EMAIL_DOMAINS = ['mailinator.com','tempmail.com','10minutemail.com','guerrillamail.com','yopmail.com','trashmail.com','sharklasers.com','getnada.com','dispostable.com'];

            // Per-country phone rules — strict digit lengths
            var PHONE_RULES = {
              '+91':   { len: 10,        starts: /^[6-9]/ },     // India
              '+1':    { len: 10,        starts: /^[2-9]/ },     // USA
              '+1-ca': { len: 10,        starts: /^[2-9]/ },     // Canada
              '+44':   { len: [10, 11],  starts: /^[1-9]/ },     // UK
              '+61':   { len: 9,         starts: /^[2-9]/ },     // Australia
              '+971':  { len: [8, 9],    starts: /^[2-9]/ },     // UAE
              '+65':   { len: 8,         starts: /^[3689]/ },    // Singapore
              '+49':   { len: [10, 11],  starts: /^[1-9]/ },     // Germany
              '+33':   { len: 9,         starts: /^[1-9]/ },     // France
              '+81':   { len: [10, 11],  starts: /^[1-9]/ },     // Japan
              '+86':   { len: 11,        starts: /^1/ },         // China
              '+974':  { len: 8,         starts: /^[3-7]/ },     // Qatar
              '+965':  { len: 8,         starts: /^[2-9]/ },     // Kuwait
              '+966':  { len: 9,         starts: /^5/ }          // Saudi Arabia
            };

            function $(id) { return document.getElementById(id); }
            function maxAllowed(rule) {
              if (!rule) return 15;
              return Array.isArray(rule.len) ? rule.len[1] : rule.len;
            }
            function minAllowed(rule) {
              if (!rule) return 7;
              return Array.isArray(rule.len) ? rule.len[0] : rule.len;
            }
            function lengthLabel(rule, cc) {
              var ccClean = (cc || '').replace('-ca','');
              if (Array.isArray(rule.len)) return 'Mobile number must be ' + rule.len[0] + '-' + rule.len[1] + ' digits for ' + ccClean + '.';
              return 'Mobile number must be exactly ' + rule.len + ' digits for ' + ccClean + '.';
            }

            function setError(fieldId, errId, msg) {
              var field = $(fieldId), err = $(errId);
              if (field) {
                var group = field.closest ? field.closest('.brochure-input-group') || field.parentElement : field.parentElement;
                if (msg) { if (group) group.classList.add('brochure-input-group--error'); field.setAttribute('aria-invalid','true'); }
                else { if (group) group.classList.remove('brochure-input-group--error'); field.removeAttribute('aria-invalid'); }
              }
              if (err) err.textContent = msg || '';
            }

            function validateName(v) {
              v = (v||'').trim();
              if (!v) return 'Please enter your full name.';
              if (v.length < 2) return 'Name must be at least 2 characters.';
              if (!NAME_RE.test(v)) return 'Name can only contain letters, spaces, apostrophes and hyphens.';
              return '';
            }

            function validateEmail(v) {
              v = (v||'').trim().toLowerCase();
              if (!v) return 'Please enter your email address.';
              if (v.length > 254) return 'Email address is too long.';
              if (!EMAIL_RE.test(v)) return 'Please enter a valid email address.';
              var domain = v.split('@')[1] || '';
              if (BLOCKED_EMAIL_DOMAINS.indexOf(domain) !== -1) return 'Please use a non-disposable email address.';
              if (domain.indexOf('..') !== -1) return 'Please enter a valid email address.';
              return '';
            }

            function validatePhone(v, countryCode) {
              v = (v||'').trim();
              if (!v) return 'Please enter your mobile number.';
              var digits = v.replace(/[^0-9]/g, '');
              // Strip country-code prefix if user typed it inside the phone field
              var ccDigits = (countryCode || '').replace(/-ca$/,'').replace(/[^0-9]/g, '');
              if (ccDigits && digits.indexOf(ccDigits) === 0 && digits.length > ccDigits.length) {
                digits = digits.slice(ccDigits.length);
              }
              if (!digits) return 'Please enter your mobile number.';

              var rule = PHONE_RULES[countryCode];
              if (!rule) {
                if (digits.length < 7 || digits.length > 15) return 'Mobile number must be between 7 and 15 digits.';
                return '';
              }
              var minL = minAllowed(rule), maxL = maxAllowed(rule);
              if (digits.length < minL || digits.length > maxL) return lengthLabel(rule, countryCode);
              if (rule.starts && !rule.starts.test(digits)) return 'Mobile number is not valid for ' + countryCode.replace('-ca','') + '.';
              return '';
            }

            function currentCountry() {
              var sel = $('brochure_country');
              return sel ? sel.value : '+91';
            }

            function applyPhoneMaxLength() {
              var phone = $('brochure_phone');
              if (!phone) return;
              var rule = PHONE_RULES[currentCountry()];
              var max = rule ? maxAllowed(rule) : 15;
              phone.setAttribute('maxlength', String(max));
              // Trim existing value if it now exceeds the limit
              var digits = (phone.value || '').replace(/[^0-9]/g, '');
              if (digits.length > max) {
                phone.value = digits.slice(0, max);
              }
            }

            function enforceDigitsOnly(el) {
              var rule = PHONE_RULES[currentCountry()];
              var max = rule ? maxAllowed(rule) : 15;
              var digits = (el.value || '').replace(/[^0-9]/g, '').slice(0, max);
              if (el.value !== digits) el.value = digits;
            }

            function validateAll(silent) {
              var n = $('brochure_name'), e = $('brochure_email'), p = $('brochure_phone');
              var errN = validateName(n && n.value);
              var errE = validateEmail(e && e.value);
              var errP = validatePhone(p && p.value, currentCountry());
              if (!silent) {
                setError('brochure_name',  'brochure_name_err',  errN);
                setError('brochure_email', 'brochure_email_err', errE);
                setError('brochure_phone', 'brochure_phone_err', errP);
              }
              return !(errN || errE || errP);
            }

            function attachLiveValidation() {
              var pairs = [
                ['brochure_name',  'brochure_name_err',  function(v){ return validateName(v); }],
                ['brochure_email', 'brochure_email_err', function(v){ return validateEmail(v); }],
                ['brochure_phone', 'brochure_phone_err', function(v){ return validatePhone(v, currentCountry()); }],
              ];
              pairs.forEach(function(p){
                var el = $(p[0]);
                if (!el || el.dataset.liveBound) return;
                el.dataset.liveBound = '1';
                el.addEventListener('blur',  function(){ setError(p[0], p[1], p[2](el.value)); });
                el.addEventListener('input', function(){ if (el.getAttribute('aria-invalid')==='true') setError(p[0], p[1], p[2](el.value)); });
              });

              var phone = $('brochure_phone');
              if (phone && !phone.dataset.digitsBound) {
                phone.dataset.digitsBound = '1';
                phone.addEventListener('input', function(){ enforceDigitsOnly(phone); });
                phone.addEventListener('keypress', function(ev){
                  var ch = String.fromCharCode(ev.which || ev.keyCode || 0);
                  if (ch && !/[0-9]/.test(ch)) ev.preventDefault();
                });
                phone.addEventListener('paste', function(ev){
                  ev.preventDefault();
                  var text = (ev.clipboardData || window.clipboardData).getData('text') || '';
                  var rule = PHONE_RULES[currentCountry()];
                  var max = rule ? maxAllowed(rule) : 15;
                  phone.value = text.replace(/[^0-9]/g, '').slice(0, max);
                  setError('brochure_phone', 'brochure_phone_err', validatePhone(phone.value, currentCountry()));
                });
              }

              var ccSel = $('brochure_country');
              if (ccSel && !ccSel.dataset.liveBound) {
                ccSel.dataset.liveBound = '1';
                ccSel.addEventListener('change', function(){
                  applyPhoneMaxLength();
                  var phone = $('brochure_phone');
                  if (phone && phone.value) {
                    setError('brochure_phone', 'brochure_phone_err', validatePhone(phone.value, currentCountry()));
                  }
                });
              }

              applyPhoneMaxLength();
            }

            function doSubmit() {
              var formErr = $('brochure_form_err');
              if (formErr) formErr.textContent = '';
              if (!validateAll(false)) {
                if (formErr) formErr.textContent = 'Please fix the highlighted fields before submitting.';
                var firstInvalid = document.querySelector('#brochureForm [aria-invalid="true"]');
                if (firstInvalid) {
                  try { firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' }); } catch(e) {}
                  // Defer focus slightly so the keyboard reliably opens on iOS Safari
                  // and the input remains tappable/typable after the error appears.
                  setTimeout(function(){ try { firstInvalid.focus({ preventScroll: true }); } catch(e) { firstInvalid.focus(); } }, 50);
                }
                return;
              }

              var btn   = $('brochureSubmitBtn');
              var name  = ($('brochure_name')  || {}).value || '';
              var email = ($('brochure_email') || {}).value || '';
              var cc    = ($('brochure_country')|| {}).value || '+91';
              var phone = ($('brochure_phone') || {}).value || '';

              if (btn) { btn.disabled = true; btn.dataset.origText = btn.textContent; btn.textContent = 'Sending...'; }

              fetch('/api/brochure', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: name.trim(),
                  email: email.trim(),
                  countryCode: (cc.replace(/-ca$/,'')),
                  mobile: phone.replace(/[^0-9]/g,''),
                  source: 'brochure',
                  'cf-turnstile-response': brochureTurnstileToken
                })
              }).then(function(){
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'generate_lead', { source: 'brochure' });
                }
                window.location.href = '/thank-you?source=brochure';
              }).catch(function(){
                window.location.href = '/thank-you?source=brochure';
              });
            }

            function initBrochure() {
              var form = $('brochureForm');
              var btn  = $('brochureSubmitBtn');
              if (!form || !btn) return setTimeout(initBrochure, 400);
              if (form.dataset.handled) return;
              form.dataset.handled = 'true';

              attachLiveValidation();

              // Capture-phase submit handler — wins against any other submit handler
              // bound by /js/main.js or /js/app.bundle.js.
              form.addEventListener('submit', function(e){
                e.preventDefault();
                if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                doSubmit();
                return false;
              }, true);

              // Also intercept the button click in capture phase, so any
              // other click handler that triggers a request-free-quote
              // redirect never runs.
              btn.addEventListener('click', function(e){
                e.preventDefault();
                if (e.stopImmediatePropagation) e.stopImmediatePropagation();
                doSubmit();
                return false;
              }, true);

              // Auto-open modal when /brochure redirected with ?brochure=1 (also supports /?brochure=1).
              try {
                var params = new URLSearchParams(window.location.search);
                if (params.get('brochure') === '1') {
                  var modal = document.getElementById('brochureModal');
                  if (modal) modal.classList.remove('hide');
                  if (window.history && window.history.replaceState) {
                    params.delete('brochure');
                    var qs = params.toString();
                    var clean = window.location.pathname + (qs ? '?' + qs : '') + window.location.hash;
                    window.history.replaceState({}, document.title, clean);
                  }
                }
              } catch (_) {}
            }

            if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', initBrochure); }
            else { initBrochure(); }
          })();
