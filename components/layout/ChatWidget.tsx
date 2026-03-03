"use client";
import { useEffect, useState, useRef, useCallback } from "react";

type Message = {
  from: "ai" | "user";
  text: string;
};

// const WS_BASE = "ws://3.6.54.39:8000/ws";

function generateSessionId() {
  return "sess_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [showLabel, setShowLabel] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setShowLabel(true), 2500);
    const t2 = setTimeout(() => setShowLabel(false), 9000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const toggle = () => setOpen(p => !p);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const sessionIdRef = useRef<string>(generateSessionId());
  const reconnectAttempts = useRef(0);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, loading]);

  /* ── WebSocket Connection ── */
  const connectWebSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

const protocol =
  window.location.protocol === "https:" ? "wss:" : "ws:";

const ws = new WebSocket(
  `${protocol}//3.6.54.39:8000/ws/${sessionIdRef.current}`
);    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
      setConnected(true);
      reconnectAttempts.current = 0;
    };

ws.onmessage = (event) => {
  setLoading(false);

  try {
    const data = JSON.parse(event.data);

    // If backend is sending tool call
    if (data.tool_calls || data.function_call) {
      console.log("Function call detected:", data);
      return; // do not display in chat
    }

    const text =
      data.response ||
      data.message ||
      data.answer ||
      data.text ||
      data.reply;

    if (text) {
      setMessages(prev => [...prev, { from: "ai", text }]);
    }
  } catch {
    if (event.data?.trim()) {
      setMessages(prev => [...prev, { from: "ai", text: event.data }]);
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

  /* ── Send message ── */
  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: "user", text }]);
    setInput("");
    setLoading(true);

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({ message: text }));
      } catch {
        wsRef.current.send(text);
      }
    } else {
      setLoading(false);
      setMessages(prev => [...prev, { from: "ai", text: "⚠️ Connection lost. Reconnecting..." }]);
      connectWebSocket();
    }
  };

  const handleSend = () => {
    if (!input.trim() || loading) return;
    sendMessage(input.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const handleQuickAction = (action: string) => {
    if (loading) return;
    sendMessage(action);
  };

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

  return (
    <>
      {/* FLOATING BUTTON */}
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

          {/* Suggested prompts */}
          <div className="cw-quick-actions cw-msg-anim-3">
            <button className="cw-quick-btn" onClick={() => handleQuickAction("What services does mTouch Labs offer?")}>🔧 Our Services</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("I need a quote for my project")}>💡 Get a Quote</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("Tell me about your mobile app development")}>📱 Mobile Apps</button>
            <button className="cw-quick-btn" onClick={() => handleQuickAction("What AI solutions do you provide?")}>🤖 AI Solutions</button>
            <a href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="cw-quick-btn cw-expert-btn">💬 Talk to Expert</a>
          </div>

          {/* Dynamic messages */}
          {messages.map((msg, i) => (
            <div key={i} className={`cw-msg ${msg.from === "user" ? "cw-msg-user" : ""}`}>
              {msg.from === "ai" && (
                <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              )}
              <div className={`cw-msg-bubble ${msg.from === "user" ? "cw-msg-bubble-user" : ""}`}>
                {renderText(msg.text)}
              </div>
            </div>
          ))}

          {loading && (
            <div className="cw-msg">
              <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              <div className="cw-msg-bubble cw-typing">
                <span className="cw-typing-dot" /><span className="cw-typing-dot" /><span className="cw-typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input — always active */}
        <div className="cw-ai-input-area">
          <div className="cw-ai-input-row cw-ai-input-row-active">
            <input
              type="text"
              className="cw-ai-input"
              placeholder={connected ? "Ask me anything about mTouch Labs..." : "Connecting to AI..."}
              disabled={!connected || loading}
              autoComplete="off"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={`cw-ai-send ${connected && input.trim() && !loading ? "cw-ai-send-active" : ""}`}
              disabled={!connected || !input.trim() || loading}
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
            {loading ? "Thinking..." : "Powered by mTouch Labs AI"}
          </div>
        </div>

        <div className="cw-panel-footer">Powered by <strong>mTouch Labs</strong></div>
      </div>
    </>
  );
}