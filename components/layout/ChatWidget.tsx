"use client";
import { useEffect, useState, useRef } from "react";

type Message = {
  from: "ai" | "user";
  text: string;
  buttons?: boolean;
};

type FormStep = "idle" | "name" | "email" | "phone" | "requirement" | "done";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  /* Auto-show label then hide */
  const [showLabel, setShowLabel] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setShowLabel(true), 2500);
    const t2 = setTimeout(() => setShowLabel(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const toggle = () => setOpen(p => !p);

  /* ── Chat state ── */
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<FormStep>("idle");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    contactPerson: "",
    email: "",
    countryCode: "+91",
    phone: "",
    requirement: "",
  });
  const bodyRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll on new messages */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  /* ── Helpers ── */
  const addMsg = (from: "ai" | "user", text: string, buttons?: boolean) => {
    setMessages(prev => [...prev, { from, text, buttons }]);
  };

  const startLeadFlow = () => {
    setStep("name");
    addMsg("ai", "Great! Let me collect a few details. 😊\n\nWhat's your **name**?");
  };

  /* ── Validation ── */
  const isValidEmail = (em: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em);
  const isValidPhone = (ph: string) => /^\d{7,15}$/.test(ph.replace(/[\s\-\(\)]/g, ""));

  /* ── Submit lead via server-side proxy (avoids CORS) ── */
  const submitLead = async (data: typeof formData) => {
    setLoading(true);
    try {
      const res = await fetch("/api/chat-lead-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        addMsg("ai", "✅ Thank you, **" + data.contactPerson + "**! Your details have been submitted successfully.\n\nOur team will reach out to you shortly. Have a great day! 🚀");
      } else {
        const errData = await res.json().catch(() => ({}));
        console.error("Lead submit error:", errData);
        addMsg("ai", "⚠️ Something went wrong while submitting. Please try again or reach out via WhatsApp.");
      }
    } catch (err) {
      console.error("Lead submit network error:", err);
      addMsg("ai", "⚠️ Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
      setStep("done");
    }
  };

  /* ── Handle user input per step ── */
  const handleSend = () => {
    const val = input.trim();
    if (!val || step === "idle" || step === "done" || loading) return;

    addMsg("user", val);
    setInput("");

    switch (step) {
      case "name":
        setFormData(prev => ({ ...prev, contactPerson: val }));
        setStep("email");
        setTimeout(() => addMsg("ai", "Nice to meet you, **" + val + "**! 👋\n\nWhat's your **email address**?"), 400);
        break;

      case "email":
        if (!isValidEmail(val)) {
          setTimeout(() => addMsg("ai", "That doesn't look like a valid email. Please try again. 📧"), 400);
          return;
        }
        setFormData(prev => ({ ...prev, email: val }));
        setStep("phone");
        setTimeout(() => addMsg("ai", "Got it! 📧\n\nNow, your **phone number** (with country code, e.g. +91 9998979695)?"), 400);
        break;

      case "phone": {
        let countryCode = "+91";
        let phone = val;
        const ccMatch = val.match(/^(\+\d{1,3})\s*(.+)/);
        if (ccMatch) {
          countryCode = ccMatch[1];
          phone = ccMatch[2].replace(/[\s\-\(\)]/g, "");
        } else {
          phone = val.replace(/[\s\-\(\)]/g, "");
        }
        if (!isValidPhone(phone)) {
          setTimeout(() => addMsg("ai", "Please enter a valid phone number (7–15 digits). 📱"), 400);
          return;
        }
        setFormData(prev => ({ ...prev, countryCode, phone }));
        setStep("requirement");
        setTimeout(() => addMsg("ai", "Almost done! 🎯\n\nBriefly describe your **requirement** (e.g. Mobile App, AI Solution, Web Development, etc.)"), 400);
        break;
      }

      case "requirement": {
        const finalData = { ...formData, requirement: val };
        setFormData(finalData);
        setTimeout(() => {
          addMsg("ai",
            "📋 Here's a summary:\n\n" +
            "• **Name:** " + finalData.contactPerson + "\n" +
            "• **Email:** " + finalData.email + "\n" +
            "• **Phone:** " + finalData.countryCode + " " + finalData.phone + "\n" +
            "• **Requirement:** " + val + "\n\n" +
            "Submitting your details now..."
          );
          submitLead(finalData);
        }, 400);
        break;
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* ── Quick action handler ── */
  const handleQuickAction = (action: string) => {
    if (step !== "idle" && step !== "done") return;

    addMsg("user", action);

    if (action === "💡 Get a Quote" || action === "📱 Mobile Apps" || action === "🤖 AI Solutions") {
      setTimeout(() => {
        addMsg("ai", "I'd love to help with that! Let me connect you with our team. 🚀");
        setTimeout(() => startLeadFlow(), 600);
      }, 400);
    } else if (action === "🔧 Our Services") {
      setTimeout(() => {
        addMsg("ai",
          "We offer a wide range of services:\n\n" +
          "• **Mobile App Development** — iOS, Android, Cross-Platform\n" +
          "• **Web Development** — React, Next.js, Full-Stack\n" +
          "• **AI/ML Solutions** — Computer Vision, NLP, Automation\n" +
          "• **Cloud & DevOps** — AWS, CI/CD, Infrastructure\n" +
          "• **UI/UX Design** — Research, Prototyping, Design Systems\n" +
          "• **Digital Marketing** — SEO, PPC, Content Strategy\n\n" +
          "Would you like to get a quote? Click a button below or type **\"quote\"**!"
        );
      }, 400);
    }
  };

  /* After done → show buttons below the thank-you message */
  useEffect(() => {
    if (step === "done") {
      const t = setTimeout(() => {
        addMsg("ai", "Need anything else? 😊", true);
        setStep("idle");
        setFormData({ contactPerson: "", email: "", countryCode: "+91", phone: "", requirement: "" });
      }, 3000);
      return () => clearTimeout(t);
    }
  }, [step]);

  /* Listen for "quote" keyword in idle */
  useEffect(() => {
    if (step === "idle" && messages.length > 0) {
      const lastMsg = messages[messages.length - 1];
      if (lastMsg.from === "user" && lastMsg.text.toLowerCase().includes("quote")) {
        startLeadFlow();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages, step]);

  const isInputActive = step !== "idle" && step !== "done" && !loading;

  /* ── Render markdown bold ── */
  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return <span key={j}>{part}</span>;
        })}
      </span>
    ));
  };

  /* ── Reusable quick buttons ── */
  const QuickButtons = () => (
    <div className="cw-quick-actions cw-quick-actions-inline">
      <button className="cw-quick-btn" onClick={() => handleQuickAction("💡 Get a Quote")}>💡 Get a Quote</button>
      <button className="cw-quick-btn" onClick={() => handleQuickAction("🔧 Our Services")}>🔧 Our Services</button>
      <button className="cw-quick-btn" onClick={() => handleQuickAction("📱 Mobile Apps")}>📱 Mobile Apps</button>
      <button className="cw-quick-btn" onClick={() => handleQuickAction("🤖 AI Solutions")}>🤖 AI Solutions</button>
      <a href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="cw-quick-btn cw-expert-btn">💬 Talk to Expert</a>
    </div>
  );

  return (
    <>
      {/* ═══ AI FLOATING BUTTON ═══ */}
      <div className="cw-wrapper">
        <div className={`cw-label ${showLabel && !open ? "cw-label-show" : ""}`}>
          <span className="cw-label-dot" />
          <span className="cw-label-text">Ask AI ✦</span>
        </div>

        <button className={`cw-ai-btn ${open ? "cw-ai-btn-active" : ""}`} onClick={toggle} aria-label="Open AI Assistant">
          <span className="cw-ai-ring cw-ai-ring-1" />
          <span className="cw-ai-ring cw-ai-ring-2" />
          <span className="cw-ai-ring cw-ai-ring-3" />
          <span className="cw-ai-orbit">
            <span className="cw-ai-dot cw-ai-dot-1" />
            <span className="cw-ai-dot cw-ai-dot-2" />
            <span className="cw-ai-dot cw-ai-dot-3" />
          </span>
          <span className={`cw-ai-center ${open ? "cw-ai-center-close" : ""}`}>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <img src="/images/artificial-intelligence.gif" alt="AI Assistant" width={42} height={42} style={{ borderRadius: "50%", objectFit: "cover" }} />
            )}
          </span>
        </button>
      </div>

      {/* ═══ CHAT PANEL ═══ */}
      <div className={`cw-panel ${open ? "cw-panel-open" : ""}`}>
        {/* Header */}
        <div className="cw-panel-header">
          <div className="cw-panel-header-left">
            <div className="cw-avatar cw-ai-avatar">
              <span className="cw-ai-sparkle-icon">✦</span>
              <span className="cw-online-dot" />
            </div>
            <div className="cw-header-info">
              <h4>mTouch AI</h4>
              <p><span className="cw-ai-status-dot" />Powered by AI</p>
            </div>
          </div>
          <button className="cw-panel-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="cw-panel-body" ref={bodyRef}>
          <div className="cw-time-stamp">Today</div>

          <div className="cw-msg cw-msg-anim-1">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">Hi there! 👋 I&apos;m the <strong>mTouch AI Assistant</strong>.</div>
          </div>

          <div className="cw-msg cw-msg-anim-2">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">I can help you with project estimates, service information, and connecting you with our team.</div>
          </div>

          {/* Initial Quick Action Chips */}
          <div className="cw-quick-actions cw-msg-anim-3">
            <button className="cw-quick-btn" onClick={() => handleQuickAction("💡 Get a Quote")}>💡 Get a Quote</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("🔧 Our Services")}>🔧 Our Services</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("📱 Mobile Apps")}>📱 Mobile Apps</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("🤖 AI Solutions")}>🤖 AI Solutions</button>
            <a href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="cw-quick-btn cw-expert-btn">💬 Talk to Expert</a>
          </div>

          {/* Dynamic messages + inline buttons */}
          {messages.map((msg, i) => (
            <div key={i}>
              <div className={`cw-msg ${msg.from === "user" ? "cw-msg-user" : ""}`}>
                {msg.from === "ai" && (
                  <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
                )}
                <div className={`cw-msg-bubble ${msg.from === "user" ? "cw-msg-bubble-user" : ""}`}>
                  {renderText(msg.text)}
                </div>
              </div>
              {msg.buttons && <QuickButtons />}
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="cw-msg">
              <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              <div className="cw-msg-bubble cw-typing">
                <span className="cw-typing-dot" />
                <span className="cw-typing-dot" />
                <span className="cw-typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="cw-ai-input-area">
          <div className={`cw-ai-input-row ${isInputActive ? "cw-ai-input-row-active" : ""}`}>
            <input
              type="text"
              className="cw-ai-input"
              placeholder={
                step === "name" ? "Enter your name..." :
                step === "email" ? "Enter your email..." :
                step === "phone" ? "e.g. +91 9998979695" :
                step === "requirement" ? "Describe your requirement..." :
                "Click a button above to get started"
              }
              disabled={!isInputActive}
              autoComplete="off"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={`cw-ai-send ${isInputActive ? "cw-ai-send-active" : ""}`}
              disabled={!isInputActive || !input.trim()}
              aria-label="Send"
              onClick={handleSend}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <div className="cw-ai-hint">
            <span className="cw-ai-badge">AI</span>
            {isInputActive ? "Type your response and press Enter" : "Powered by mTouch Labs AI"}
          </div>
        </div>

        <div className="cw-panel-footer">Powered by <strong>mTouch Labs</strong></div>
      </div>
    </>
  );
}