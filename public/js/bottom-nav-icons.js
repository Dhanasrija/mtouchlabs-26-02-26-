(function() {
            function fixBottomNav() {
              var allLinks = document.querySelectorAll('.bottom-nav .ree-hc a');
              if (!allLinks.length) return setTimeout(fixBottomNav, 500);
              var icons = ['/images/nav-icon/phone-call.webp','/images/nav-icon/gmail.webp','/images/nav-icon/whatsapp.webp','/images/nav-icon/who.webp'];
              var alts = ['Phone','Email','WhatsApp','About'];
              allLinks.forEach(function(a, i) {
                var idx = i % 4;
                if (!a.querySelector('img')) {
                  var img = document.createElement('img');
                  img.src = icons[idx]; img.alt = alts[idx]; img.width = 24; img.height = 24;
                  img.style.display = 'inline-block'; a.innerHTML = ''; a.appendChild(img);
                }
              });
            }
            setTimeout(fixBottomNav, 1500);
          })();
