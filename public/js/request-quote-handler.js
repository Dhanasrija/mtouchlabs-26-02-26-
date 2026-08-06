(function() {
            var form = document.getElementById('requestQuoteForm');
            if (!form) return;
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              var btn = document.getElementById('submitButton');
              var icon = document.getElementById('rotating_icon');
              if (btn) btn.disabled = true;
              if (icon) icon.style.display = 'inline-block';
              var fd = new FormData(form);
              var d = Object.fromEntries(fd.entries());
              fetch('/api/request-quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: d.name, email: d.email, countryCode: d.countryCode,
                  mobile: d.mobile, service: d.service, budget: d.budget, message: d.message
                })
              }).then(function(r) {
                if (r.ok) { window.location.href = '/thank-you?source=quote'; }
                else { alert('Something went wrong. Please try again.'); if (btn) btn.disabled = false; if (icon) icon.style.display = 'none'; }
              }).catch(function(err) {
                console.error(err); alert('Something went wrong. Please try again.');
                if (btn) btn.disabled = false; if (icon) icon.style.display = 'none';
              });
            });
          })();
