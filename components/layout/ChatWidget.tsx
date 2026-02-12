export default function ChatWidget() {
  return (
    <>
      {/* Floating Chat Trigger */}
      <div className="cw-wrapper" id="chatWidget">
        {/* Animated label */}
        <div className="cw-label" id="cwLabel">
          <span className="cw-label-dot"></span>
          <span className="cw-label-text">Let&apos;s chat — we&apos;re here!</span>
        </div>
        {/* Bubble */}
        <button className="cw-bubble" id="cwBubble" aria-label="Chat with us">
          <span className="cw-pulse-ring"></span>
          <span className="cw-pulse-ring cw-pulse-ring-2"></span>
          <svg className="cw-bubble-icon cw-icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <svg className="cw-bubble-icon cw-icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Chat Panel */}
      <div className="cw-panel" id="cwPanel">
        <div className="cw-panel-header">
          <div className="cw-panel-header-left">
            <div className="cw-avatar">
              <img src="/images/favicon.png" alt="mTouch Labs" />
              <span className="cw-online-dot"></span>
            </div>
            <div className="cw-header-info">
              <h4>mTouch Labs</h4>
              <p><span className="cw-status-dot"></span>Online now</p>
            </div>
          </div>
          <button className="cw-panel-close" id="cwPanelClose" aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="cw-panel-body" id="cwBody">
          <div className="cw-time-stamp">Today</div>
          <div className="cw-msg cw-msg-bot cw-msg-anim-1">
            <div className="cw-msg-avatar"><img src="/images/favicon.png" alt="mTouch" /></div>
            <div className="cw-msg-content">
              <div className="cw-msg-bubble">Hi there! 👋</div>
            </div>
          </div>
          <div className="cw-msg cw-msg-bot cw-msg-anim-2">
            <div className="cw-msg-avatar"><img src="/images/favicon.png" alt="mTouch" /></div>
            <div className="cw-msg-content">
              <div className="cw-msg-bubble">Welcome to mTouch Labs. How can we help you today?</div>
            </div>
          </div>
          <div className="cw-typing cw-msg-anim-3" id="cwTyping">
            <div className="cw-msg-avatar"><img src="/images/favicon.png" alt="mTouch" /></div>
            <div className="cw-typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div className="cw-quick-actions cw-msg-anim-4" id="cwActions">
            <button className="cw-quick-btn" data-msg="I need a mobile app">📱 Mobile App</button>
            <button className="cw-quick-btn" data-msg="I need a website">🌐 Website</button>
            <button className="cw-quick-btn" data-msg="I want to hire developers">👨‍💻 Hire Developers</button>
            <button className="cw-quick-btn" data-msg="Just browsing">👀 Just Browsing</button>
          </div>
        </div>

        <div className="cw-panel-form" id="cwForm">
          <div className="cw-form-selected" id="cwFormSelected"></div>
          <form id="cwContactForm">
            <input type="text" className="cw-form-input" placeholder="Your Name" name="cw_name" required />
            <input type="email" className="cw-form-input" placeholder="Email Address" name="cw_email" required />
            <input type="tel" className="cw-form-input" placeholder="Phone Number (optional)" name="cw_phone" />
            <textarea className="cw-form-input cw-form-textarea" placeholder="Tell us more about your project..." name="cw_message"></textarea>
            <button type="submit" className="cw-form-submit">
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
            </button>
          </form>
        </div>

        <div className="cw-panel-footer">
          <span>Powered by</span>
          <strong>mTouch Labs</strong>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          function initCW() {
            var bubble = document.getElementById('cwBubble');
            var panel = document.getElementById('cwPanel');
            var label = document.getElementById('cwLabel');
            var panelClose = document.getElementById('cwPanelClose');
            var body = document.getElementById('cwBody');
            var formArea = document.getElementById('cwForm');
            var formSelected = document.getElementById('cwFormSelected');
            var form = document.getElementById('cwContactForm');
            var typing = document.getElementById('cwTyping');
            var actions = document.getElementById('cwActions');
            var quickBtns = document.querySelectorAll('.cw-quick-btn');
            if (!bubble) return setTimeout(initCW, 300);

            var isOpen = false;

            /* Show label after 1.5s */
            setTimeout(function() { label.classList.add('cw-label-show'); }, 1500);

            /* Hide typing, show actions after panel open */
            function animateMessages() {
              typing.style.display = 'flex';
              actions.style.display = 'none';
              setTimeout(function() {
                typing.style.display = 'none';
                actions.style.display = 'flex';
              }, 1800);
            }

            /* Toggle panel */
            bubble.addEventListener('click', function() {
              isOpen = !isOpen;
              panel.classList.toggle('cw-panel-open', isOpen);
              bubble.classList.toggle('cw-bubble-active', isOpen);
              label.classList.remove('cw-label-show');
              if (isOpen) animateMessages();
            });

            /* Close panel */
            panelClose.addEventListener('click', function() {
              isOpen = false;
              panel.classList.remove('cw-panel-open');
              bubble.classList.remove('cw-bubble-active');
            });

            /* Quick action buttons */
            quickBtns.forEach(function(btn) {
              btn.addEventListener('click', function() {
                var msg = btn.getAttribute('data-msg');
                formSelected.innerHTML = '<div class=\"cw-selected-topic\"><span>Topic:</span> ' + msg + '</div>';
                body.classList.add('cw-hide');
                formArea.classList.add('cw-form-show');
              });
            });

            /* Form submit */
            form.addEventListener('submit', function(e) {
              e.preventDefault();
              var submitBtn = form.querySelector('.cw-form-submit');
              submitBtn.classList.add('cw-btn-loading');
              submitBtn.innerHTML = '<span class=\"cw-spinner\"></span> Sending...';
              var fd = new FormData(form);
              var d = Object.fromEntries(fd.entries());
              var topic = formSelected.textContent || '';
              fetch('https://93iji6x3i1.execute-api.ap-south-1.amazonaws.com/Dev/send-mail', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: 'Chat Widget', type: 'chat', message: '\\nTopic: '+topic+'\\nName: '+d.cw_name+',\\nEmail: '+d.cw_email+',\\nPhone: '+d.cw_phone+',\\nMessage: '+d.cw_message })
              }).then(function(r) {
                if (r.ok) {
                  formArea.innerHTML = '<div class=\"cw-form-success\"><div class=\"cw-success-check\">✓</div><h4>Message Sent!</h4><p>We will get back to you shortly.</p></div>';
                }
              }).catch(function(err) {
                submitBtn.classList.remove('cw-btn-loading');
                submitBtn.innerHTML = '<span>Send Message</span>';
                console.error(err);
              });
            });
          }
          initCW();
        })();
      `}} />
    </>
  );
}