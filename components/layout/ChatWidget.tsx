"use client";
import { useEffect, useState, useRef, useCallback } from "react";

type OptionItem = {
  value: string;
  label: string;
  image?: string;
};

type Message = {
  from: "ai" | "user";
  text: string;
  options?: OptionItem[];
};

const WS_BASE = process.env.NEXT_PUBLIC_SHOW_CHATBOT === "true"
  ? "wss://webagent.dev.mtouchlabs.com/ws"
  : "wss://webagent.mtouchlabs.com/ws";

function generateSessionId() {
  return "sess_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

function extractText(val: unknown): string {
  if (typeof val === "string") return val;
  if (Array.isArray(val)) return val.map(extractText).filter(Boolean).join("\n");
  if (val && typeof val === "object") {
    const obj = val as Record<string, unknown>;
    const keys = ["response", "message", "answer", "text", "reply", "content", "output", "result"];
    for (const key of keys) {
      if (obj[key] !== undefined && obj[key] !== null) {
        const extracted = extractText(obj[key]);
        if (extracted) return extracted;
      }
    }
    for (const value of Object.values(obj)) {
      if (typeof value === "string" && value.length > 10) return value;
    }
  }
  return "";
}

function extractOptions(data: Record<string, unknown>): OptionItem[] | undefined {
  const parseOptions = (raw: unknown): OptionItem[] | undefined => {
    if (!Array.isArray(raw) || raw.length === 0) return undefined;
    return raw.map((o) => {
      if (typeof o === "string") return { value: o, label: o };
      if (o && typeof o === "object") {
        const obj = o as Record<string, unknown>;
        return {
          value: (obj.value as string) || (obj.label as string) || String(obj),
          label: (obj.label as string) || (obj.value as string) || String(obj),
          image: (obj.image as string) || undefined,
        };
      }
      return { value: String(o), label: String(o) };
    });
  };
  if (data.options) return parseOptions(data.options);
  if (data.response && typeof data.response === "object" && !Array.isArray(data.response)) {
    const resp = data.response as Record<string, unknown>;
    if (resp.options) return parseOptions(resp.options);
  }
  return undefined;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);

  // ⭐ Lead form state
  const [showForm, setShowForm] = useState(false);
  const [leadCollected, setLeadCollected] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);

  const bodyRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const sessionIdRef = useRef<string>(generateSessionId());
  const reconnectAttempts = useRef(0);

  useEffect(() => {
    const t1 = setTimeout(() => setShowLabel(true), 2500);
    const t2 = setTimeout(() => setShowLabel(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      setTimeout(() => {
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }, 100);
    }
  }, [messages, loading, showForm]);

  const toggle = () => setOpen(p => !p);

  /* ── WebSocket Connection ── */
  const connectWebSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    const ws = new WebSocket(`${WS_BASE}/${sessionIdRef.current}`);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      reconnectAttempts.current = 0;
    };

    ws.onmessage = (event) => {
      setLoading(false);
      setFormSubmitting(false);

      try {
        const data = JSON.parse(event.data);

        if (data.tool_calls || data.function_call) return;

        // ⭐ Handle show_form flag
        if (data.show_form === true) {
          setShowForm(true);
          setLeadCollected(false);
        } else if (data.show_form === false) {
          setShowForm(false);
        }

        // ⭐ Handle lead_collected flag
        if (data.lead_collected === true) {
          setLeadCollected(true);
          setShowForm(false);
        }

        const text = extractText(data);
        const options = extractOptions(data);

        if (text) {
          setMessages(prev => [...prev, { from: "ai", text, options }]);
        }
      } catch {
        const raw = event.data;
        if (raw && typeof raw === "string" && raw.trim()) {
          setMessages(prev => [...prev, { from: "ai", text: raw.trim() }]);
        }
      }
    };

    ws.onerror = () => setConnected(false);

    ws.onclose = () => {
      setConnected(false);
      wsRef.current = null;
      if (reconnectAttempts.current < 5) {
        const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000);
        reconnectAttempts.current++;
        setTimeout(connectWebSocket, delay);
      }
    };
  }, []);

  useEffect(() => {
    if (open) connectWebSocket();
  }, [open, connectWebSocket]);

  useEffect(() => {
    return () => { wsRef.current?.close(); };
  }, []);

  /* ── Send type:1 message (normal chat) ── */
  const sendMessage = (text: string, value?: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: "user", text }]);
    setInput("");
    setLoading(true);

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({ type: 1, message: value || text }));
      } catch {
        wsRef.current.send(value || text);
      }
    } else {
      setLoading(false);
      setMessages(prev => [...prev, { from: "ai", text: "⚠️ Connection lost. Reconnecting..." }]);
      connectWebSocket();
    }
  };

  /* ── Send type:0 message (lead form) ── */
  const submitLeadForm = () => {
    if (!formName.trim() || !formEmail.trim() || !formPhone.trim()) return;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail.trim());
    if (!emailOk) { setMessages(prev => [...prev, { from: "ai", text: "Please enter a valid email address." }]); return; }
    if (formPhone.replace(/[^0-9]/g, "").length < 10) { setMessages(prev => [...prev, { from: "ai", text: "Please enter a valid phone number (minimum 10 digits)." }]); return; }
    setFormSubmitting(true);

    setMessages(prev => [...prev, {
      from: "user",
      text: `${formName} • ${formEmail} • ${formPhone}`
    }]);

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({
          type: 0,
          name: formName.trim(),
          email: formEmail.trim(),
          phone: formPhone.trim(),
        }));
      } catch {
        setFormSubmitting(false);
      }
    }

    setFormName("");
    setFormEmail("");
    setFormPhone("");
  };

  const handleSend = () => {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleOptionClick = (option: OptionItem) => {
    if (loading) return;
    sendMessage(option.label, option.value);
  };

  const renderText = (text: string) => {
    if (!text || typeof text !== "string") return null;
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

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="cw-wrapper" style={{ right: 'auto', left: '-10px', bottom: '90px' }}>
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

      {/* CHAT PANEL */}
      <div className={`cw-panel ${open ? "cw-panel-open" : ""}`}>
        <div className="cw-panel-header">
          <div className="cw-panel-header-left">
            <div className="cw-avatar cw-ai-avatar">
              <span className="cw-ai-sparkle-icon">✦</span>
              <span className={`cw-online-dot ${connected ? "" : "cw-online-dot-offline"}`} />
            </div>
            <div className="cw-header-info">
              <h4>mTouch AI</h4>
              <p>
                <span className={`cw-ai-status-dot ${connected ? "" : "cw-ai-status-dot-offline"}`} />
                {connected ? "Online — Ask me anything" : "Connecting..."}
              </p>
            </div>
          </div>
          <button className="cw-panel-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cw-panel-body" ref={bodyRef}>
          <div className="cw-time-stamp">Today</div>

          <div className="cw-msg cw-msg-anim-1">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">Hi there! 👋 I&apos;m the <strong>mTouch AI Assistant</strong>.</div>
          </div>
          <div className="cw-msg cw-msg-anim-2">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">Ask me anything about mTouch Labs — our services, technologies, pricing, or how we can help with your project!</div>
          </div>

          {/* Dynamic messages */}
          {messages.map((msg, i) => (
            <div key={i} className={`cw-msg ${msg.from === "user" ? "cw-msg-user" : ""}`}>
              {msg.from === "ai" && (
                <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              )}
              <div className={`cw-msg-bubble ${msg.from === "user" ? "cw-msg-bubble-user" : ""}`}>
                {renderText(msg.text)}
                {msg.from === "ai" && msg.options && msg.options.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
                    {msg.options.map((opt, j) => (
                      <button
                        key={j}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          display: "flex", alignItems: "center", gap: "8px",
                          padding: opt.image ? "8px 14px 8px 8px" : "7px 14px",
                          borderRadius: "10px", border: "1px solid rgba(99,102,241,0.25)",
                          background: "rgba(99,102,241,0.06)", color: "#6366f1",
                          fontSize: "13px", fontWeight: 600, cursor: "pointer",
                          transition: "all 0.2s ease", fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(99,102,241,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                      >
                        {opt.image && <img src={opt.image} alt={opt.label} width={22} height={22} style={{ borderRadius: "6px", objectFit: "cover" }} />}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* ⭐ LEAD COLLECTION FORM */}
          {showForm && !leadCollected && (
            <div className="cw-msg">
              <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              <div className="cw-msg-bubble" style={{ padding: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 600, color: "#374151" }}>Please share your details to continue:</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    style={{
                      padding: "10px 14px", borderRadius: "8px", border: "1px solid #d1d5db",
                      fontSize: "14px", fontFamily: "inherit", outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "#6366f1"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    style={{
                      padding: "10px 14px", borderRadius: "8px", border: "1px solid #d1d5db",
                      fontSize: "14px", fontFamily: "inherit", outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "#6366f1"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    style={{
                      padding: "10px 14px", borderRadius: "8px", border: "1px solid #d1d5db",
                      fontSize: "14px", fontFamily: "inherit", outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = "#6366f1"}
                    onBlur={(e) => e.currentTarget.style.borderColor = "#d1d5db"}
                    onKeyDown={(e) => { if (e.key === "Enter") submitLeadForm(); }}
                  />
                  <button
                    onClick={submitLeadForm}
                    disabled={!formName.trim() || !formEmail.trim() || !formPhone.trim() || formSubmitting}
                    style={{
                      padding: "10px 20px", borderRadius: "10px", border: "none",
                      background: (formName.trim() && formEmail.trim() && formPhone.trim() && !formSubmitting) ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#e5e7eb",
                      color: (formName.trim() && formEmail.trim() && formPhone.trim() && !formSubmitting) ? "#fff" : "#9ca3af",
                      fontSize: "14px", fontWeight: 700, cursor: (formName.trim() && formEmail.trim() && formPhone.trim()) ? "pointer" : "not-allowed",
                      transition: "all 0.2s ease", fontFamily: "inherit",
                    }}
                  >
                    {formSubmitting ? "Submitting..." : "Continue →"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {loading && (
            <div className="cw-msg">
              <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              <div className="cw-msg-bubble cw-typing">
                <span className="cw-typing-dot" /><span className="cw-typing-dot" /><span className="cw-typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input — disabled when form is showing */}
        <div className="cw-ai-input-area">
          <div className="cw-ai-input-row cw-ai-input-row-active">
            <input
              type="text"
              className="cw-ai-input"
              placeholder={
                !connected ? "Connecting..." :
                showForm && !leadCollected ? "Please fill the form above..." :
                isMobile ? "Ask anything..." : "Ask me anything about mTouch Labs..."
              }
              disabled={!connected || loading || (showForm && !leadCollected)}
              autoComplete="off"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={`cw-ai-send ${connected && input.trim() && !loading && !(showForm && !leadCollected) ? "cw-ai-send-active" : ""}`}
              disabled={!connected || !input.trim() || loading || (showForm && !leadCollected)}
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
            {loading ? "Thinking..." : showForm && !leadCollected ? "Fill in your details to continue" : "Powered by mTouch Labs AI"}
          </div>
        </div>

        <div className="cw-panel-footer">Powered by <strong>mTouch Labs</strong></div>
      </div>
    </>
  );
}