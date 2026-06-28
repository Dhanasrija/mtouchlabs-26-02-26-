// "use client";
// import { useEffect, useState, useRef, useCallback } from "react";

// type OptionItem = {
//   value: string;
//   label: string;
//   image?: string;
// };

// type Message = {
//   from: "ai" | "user";
//   text: string;
//   options?: OptionItem[];
// };

// const COUNTRY_CODES = [
//   { code: "+91", flag: "🇮🇳", name: "India", maxDigits: 10 },
//   { code: "+1", flag: "🇺🇸", name: "USA/Canada", maxDigits: 10 },
//   { code: "+44", flag: "🇬🇧", name: "UK", maxDigits: 10 },
//   { code: "+971", flag: "🇦🇪", name: "UAE", maxDigits: 9 },
//   { code: "+61", flag: "🇦🇺", name: "Australia", maxDigits: 9 },
//   { code: "+49", flag: "🇩🇪", name: "Germany", maxDigits: 11 },
//   { code: "+65", flag: "🇸🇬", name: "Singapore", maxDigits: 8 },
//   { code: "+60", flag: "🇲🇾", name: "Malaysia", maxDigits: 10 },
// ];

// function validatePhone(digits: string, countryCode: string): { valid: boolean; error: string } {
//   switch (countryCode) {
//     case "+91":
//       if (digits.length !== 10) return { valid: false, error: "India (+91): exactly 10 digits required" };
//       if (!/^[6-9]/.test(digits)) return { valid: false, error: "India (+91): must start with 6, 7, 8, or 9" };
//       return { valid: true, error: "" };
//     case "+1":
//       if (digits.length !== 10) return { valid: false, error: "USA/Canada (+1): exactly 10 digits required" };
//       if (/^[01]/.test(digits)) return { valid: false, error: "USA/Canada (+1): cannot start with 0 or 1" };
//       return { valid: true, error: "" };
//     case "+44":
//       if (digits.length !== 10) return { valid: false, error: "UK (+44): exactly 10 digits required" };
//       if (!/^[127]/.test(digits)) return { valid: false, error: "UK (+44): must start with 7 (mobile) or 1/2 (landline)" };
//       return { valid: true, error: "" };
//     case "+971":
//       if (digits.length !== 9) return { valid: false, error: "UAE (+971): exactly 9 digits required" };
//       return { valid: true, error: "" };
//     case "+61":
//       if (digits.length !== 9) return { valid: false, error: "Australia (+61): exactly 9 digits required" };
//       if (!/^[2-9]/.test(digits)) return { valid: false, error: "Australia (+61): must start with 2–9" };
//       return { valid: true, error: "" };
//     case "+49":
//       if (digits.length < 10 || digits.length > 11) return { valid: false, error: "Germany (+49): 10 or 11 digits required" };
//       return { valid: true, error: "" };
//     case "+65":
//       if (digits.length !== 8) return { valid: false, error: "Singapore (+65): exactly 8 digits required" };
//       if (!/^[689]/.test(digits)) return { valid: false, error: "Singapore (+65): must start with 6, 8, or 9" };
//       return { valid: true, error: "" };
//     case "+60":
//       if (digits.length < 9 || digits.length > 10) return { valid: false, error: "Malaysia (+60): 9 or 10 digits required" };
//       if (!/^1/.test(digits)) return { valid: false, error: "Malaysia (+60): mobile numbers start with 1" };
//       return { valid: true, error: "" };
//     default:
//       if (digits.length < 8 || digits.length > 12) return { valid: false, error: "Phone number must be 8–12 digits" };
//       return { valid: true, error: "" };
//   }
// }

// function getMaxDigits(countryCode: string): number {
//   return COUNTRY_CODES.find(c => c.code === countryCode)?.maxDigits ?? 12;
// }

// function getPlaceholder(countryCode: string): string {
//   switch (countryCode) {
//     case "+91": return "98765 43210";
//     case "+1": return "415 555 0100";
//     case "+44": return "7911 123456";
//     case "+971": return "50 123 4567";
//     case "+61": return "412 345 678";
//     case "+49": return "1512 3456789";
//     case "+65": return "9123 4567";
//     case "+60": return "12 345 6789";
//     default: return "Phone number";
//   }
// }

// const WS_BASE = process.env.NEXT_PUBLIC_SHOW_CHATBOT === "true"
//   ? "wss://webagent.dev.mtouchlabs.com/ws"
//   : "wss://webagent.mtouchlabs.com/ws";

// function generateSessionId() {
//   return "sess_" + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
// }

// function extractText(val: unknown): string {
//   if (typeof val === "string") return val;
//   if (Array.isArray(val)) return val.map(extractText).filter(Boolean).join("\n");
//   if (val && typeof val === "object") {
//     const obj = val as Record<string, unknown>;
//     const keys = ["response", "message", "answer", "text", "reply", "content", "output", "result"];
//     for (const key of keys) {
//       if (obj[key] !== undefined && obj[key] !== null) {
//         const extracted = extractText(obj[key]);
//         if (extracted) return extracted;
//       }
//     }
//     for (const value of Object.values(obj)) {
//       if (typeof value === "string" && value.length > 10) return value;
//     }
//   }
//   return "";
// }

// function extractOptions(data: Record<string, unknown>): OptionItem[] | undefined {
//   const parseOptions = (raw: unknown): OptionItem[] | undefined => {
//     if (!Array.isArray(raw) || raw.length === 0) return undefined;
//     return raw.map((o) => {
//       if (typeof o === "string") return { value: o, label: o };
//       if (o && typeof o === "object") {
//         const obj = o as Record<string, unknown>;
//         return {
//           value: (obj.value as string) || (obj.label as string) || String(obj),
//           label: (obj.label as string) || (obj.value as string) || String(obj),
//           image: (obj.image as string) || undefined,
//         };
//       }
//       return { value: String(o), label: String(o) };
//     });
//   };
//   if (data.options) return parseOptions(data.options);
//   if (data.response && typeof data.response === "object" && !Array.isArray(data.response)) {
//     const resp = data.response as Record<string, unknown>;
//     if (resp.options) return parseOptions(resp.options);
//   }
//   return undefined;
// }

// export default function ChatWidget() {
//   const [open, setOpen] = useState(false);
//   const [showLabel, setShowLabel] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [connected, setConnected] = useState(false);
//   const [sessionEnded, setSessionEnded] = useState(false);

//   const [showForm, setShowForm] = useState(false);
//   const [leadCollected, setLeadCollected] = useState(false);
//   const [formName, setFormName] = useState("");
//   const [formEmail, setFormEmail] = useState("");
//   const [formPhone, setFormPhone] = useState("");
//   const [formCountryCode, setFormCountryCode] = useState("+91");
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");

//   const bodyRef = useRef<HTMLDivElement>(null);
//   const wsRef = useRef<WebSocket | null>(null);
//   const sessionIdRef = useRef<string>(generateSessionId());
//   const reconnectAttempts = useRef(0);

//   useEffect(() => {
//     const t1 = setTimeout(() => setShowLabel(true), 2500);
//     const t2 = setTimeout(() => setShowLabel(false), 9000);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, []);

//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth <= 600);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   useEffect(() => {
//     if (bodyRef.current) {
//       bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
//       setTimeout(() => {
//         if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
//       }, 100);
//     }
//   }, [messages, loading, showForm]);

//   const closeChat = useCallback(() => {
//     setOpen(false);
//     if (wsRef.current) { wsRef.current.close(); wsRef.current = null; }
//     setConnected(false);
//     setMessages([]);
//     setInput("");
//     setLoading(false);
//     setShowForm(false);
//     setLeadCollected(false);
//     setFormName("");
//     setFormEmail("");
//     setFormPhone("");
//     setFormCountryCode("+91");
//     setFormSubmitting(false);
//     setFormError("");
//     setSessionEnded(false);
//     reconnectAttempts.current = 0;
//     sessionIdRef.current = generateSessionId();
//   }, []);

//   const toggle = () => { if (open) { closeChat(); } else { setOpen(true); } };

//   const connectWebSocket = useCallback(() => {
//     if (wsRef.current?.readyState === WebSocket.OPEN) return;
//     const ws = new WebSocket(`${WS_BASE}/${sessionIdRef.current}`);
//     wsRef.current = ws;
//     ws.onopen = () => { setConnected(true); reconnectAttempts.current = 0; };
//     ws.onmessage = (event) => {
//       setLoading(false);
//       setFormSubmitting(false);
//       try {
//         const data = JSON.parse(event.data);
//         if (data.tool_calls || data.function_call) return;
//         if (data.show_form === true) { setShowForm(true); setLeadCollected(false); }
//         else if (data.show_form === false) { setShowForm(false); }
//         if (data.lead_collected === true) { setLeadCollected(true); setShowForm(false); }
//         const text = extractText(data);
//         const options = extractOptions(data);
//         if (text) { setMessages(prev => [...prev, { from: "ai", text, options }]); }
//       } catch {
//         const raw = event.data;
//         if (raw && typeof raw === "string" && raw.trim()) {
//           setMessages(prev => [...prev, { from: "ai", text: raw.trim() }]);
//         }
//       }
//     };
//     ws.onerror = () => setConnected(false);
//     ws.onclose = () => {
//       setConnected(false);
//       wsRef.current = null;
//       if (reconnectAttempts.current < 5) {
//         const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 10000);
//         reconnectAttempts.current++;
//         setTimeout(connectWebSocket, delay);
//       }
//     };
//   }, []);

//   useEffect(() => { if (open) connectWebSocket(); }, [open, connectWebSocket]);
//   useEffect(() => { return () => { wsRef.current?.close(); }; }, []);

//   const sendMessage = (text: string, value?: string) => {
//     if (!text.trim()) return;
//     setMessages(prev => [...prev, { from: "user", text }]);
//     setInput("");
//     setLoading(true);
//     if (wsRef.current?.readyState === WebSocket.OPEN) {
//       try { wsRef.current.send(JSON.stringify({ type: 1, message: value || text })); }
//       catch { wsRef.current.send(value || text); }
//     } else {
//       setLoading(false);
//       setMessages(prev => [...prev, { from: "ai", text: "Connection lost. Reconnecting..." }]);
//       connectWebSocket();
//     }
//   };

//   const submitLeadForm = () => {
//     if (!formName.trim() || !formEmail.trim() || !formPhone.trim()) return;
//     const errors: string[] = [];
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailRegex.test(formEmail.trim())) {
//       errors.push("• Invalid email address (e.g. name@gmail.com)");
//     }
//     const digits = formPhone.trim().replace(/[^0-9]/g, "");
//     const phoneResult = validatePhone(digits, formCountryCode);
//     if (!phoneResult.valid) {
//       errors.push("• " + phoneResult.error);
//     }
//     if (errors.length > 0) {
//       setFormError(errors.join("\n"));
//       return;
//     }
//     setFormError("");
//     setFormSubmitting(true);
//     const fullPhone = formCountryCode + digits;
//     setMessages(prev => [...prev, { from: "user", text: `${formName.trim()} • ${formEmail.trim()} • ${fullPhone}` }]);
//     if (wsRef.current?.readyState === WebSocket.OPEN) {
//       try {
//         wsRef.current.send(JSON.stringify({
//           type: 0,
//           name: formName.trim(),
//           email: formEmail.trim(),
//           phone: digits,
//         }));
//       } catch { setFormSubmitting(false); }
//     }
//     setFormName("");
//     setFormEmail("");
//     setFormPhone("");
//     setFormCountryCode("+91");
//     setFormError("");
//   };

//   const handleSend = () => {
//     const trimmed = input.trim();
//     if (!trimmed || loading || sessionEnded) return;
//     if (showForm && !leadCollected) return;
//     sendMessage(trimmed);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       e.stopPropagation();
//       const trimmed = input.trim();
//       if (!trimmed || loading || sessionEnded) return;
//       if (showForm && !leadCollected) return;
//       handleSend();
//     }
//   };

//   const handleOptionClick = (option: OptionItem) => {
//     if (loading || sessionEnded) return;
//     const isEndChat = /end\s*chat|end\s*session|bye|exit/i.test(option.label);
//     sendMessage(option.label, option.value);
//     if (isEndChat) {
//       setSessionEnded(true);
//       setTimeout(() => {
//         sessionIdRef.current = generateSessionId();
//         if (wsRef.current) { wsRef.current.close(); wsRef.current = null; }
//         setConnected(false);
//         reconnectAttempts.current = 0;
//       }, 800);
//     }
//   };

//   const renderText = (text: string) => {
//     if (!text || typeof text !== "string") return null;
//     return text.split("\n").map((line, i) => (
//       <span key={i}>
//         {i > 0 && <br />}
//         {line.split(/(\*\*.*?\*\*)/).map((part, j) => {
//           if (part.startsWith("**") && part.endsWith("**")) {
//             return <strong key={j}>{part.slice(2, -2)}</strong>;
//           }
//           return <span key={j}>{part}</span>;
//         })}
//       </span>
//     ));
//   };

//   const inputStyle = {
//     padding: "10px 14px",
//     borderRadius: "8px",
//     border: "1px solid #d1d5db",
//     fontSize: "14px",
//     fontFamily: "inherit",
//     outline: "none",
//     width: "100%",
//     boxSizing: "border-box" as const,
//     transition: "border-color 0.2s",
//     height: "42px",
//   };

//   const maxDigits = getMaxDigits(formCountryCode);
//   const canSubmit = formName.trim() && formEmail.trim() && formPhone.length >= (formCountryCode === "+49" || formCountryCode === "+60" ? maxDigits - 1 : maxDigits) && !formSubmitting;

//   return (
//     <>
//       <div className="cw-wrapper" style={{ right: "auto", left: "-10px", bottom: "90px" }}>
//         <div className={`cw-label ${showLabel && !open ? "cw-label-show" : ""}`}>
//           <span className="cw-label-dot" />
//           <span className="cw-label-text">Ask AI ✦</span>
//         </div>
//         <button className={`cw-ai-btn ${open ? "cw-ai-btn-active" : ""}`} onClick={toggle} aria-label="Open AI Assistant">
//           <span className="cw-ai-ring cw-ai-ring-1" />
//           <span className="cw-ai-ring cw-ai-ring-2" />
//           <span className="cw-ai-ring cw-ai-ring-3" />
//           <span className="cw-ai-orbit">
//             <span className="cw-ai-dot cw-ai-dot-1" />
//             <span className="cw-ai-dot cw-ai-dot-2" />
//             <span className="cw-ai-dot cw-ai-dot-3" />
//           </span>
//           <span className={`cw-ai-center ${open ? "cw-ai-center-close" : ""}`}>
//             {open ? (
//               <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             ) : (
//               <img loading="lazy" decoding="async" src="/images/artificial-intelligence.gif" alt="AI Assistant" width={42} height={42} style={{ borderRadius: "50%", objectFit: "cover" }} />
//             )}
//           </span>
//         </button>
//       </div>

//       <div className={`cw-panel ${open ? "cw-panel-open" : ""}`}>
//         <div className="cw-panel-header" style={{ padding: "14px 16px", minHeight: "60px" }}>
//           <div className="cw-panel-header-left">
//             <div className="cw-avatar cw-ai-avatar">
//               <span className="cw-ai-sparkle-icon">✦</span>
//             </div>
//             <div className="cw-header-info">
//               <h4 style={{ margin: 0, lineHeight: 1.3 }}>mTouch AI</h4>
//               <p style={{ margin: 0, lineHeight: 1.3 }}>
//                 <span className={`cw-ai-status-dot ${connected ? "" : "cw-ai-status-dot-offline"}`} />
//                 {connected ? "Online" : "Connecting..."}
//               </p>
//             </div>
//           </div>
//           <button className="cw-panel-close" aria-label="Close chat" onClick={closeChat} style={{ padding: "8px", flexShrink: 0 }}>
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           </button>
//         </div>

//         <div className="cw-panel-body" ref={bodyRef} style={{ paddingTop: "12px", paddingBottom: "80px" }}>
//           <div className="cw-time-stamp">Today</div>
//           <div className="cw-msg cw-msg-anim-1">
//             <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
//             <div className="cw-msg-bubble">Hi there! 👋 I&apos;m the <strong>mTouch AI Assistant</strong>.</div>
//           </div>
//           <div className="cw-msg cw-msg-anim-2">
//             <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
//             <div className="cw-msg-bubble">Ask me anything about mTouch Labs — our services, technologies, pricing, or how we can help with your project!</div>
//           </div>

//           {messages.map((msg, i) => (
//             <div key={i} className={`cw-msg ${msg.from === "user" ? "cw-msg-user" : ""}`}>
//               {msg.from === "ai" && (
//                 <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
//               )}
//               <div className={`cw-msg-bubble ${msg.from === "user" ? "cw-msg-bubble-user" : ""}`}>
//                 {renderText(msg.text)}
//                 {msg.from === "ai" && msg.options && msg.options.length > 0 && (
//                   <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
//                     {msg.options.map((opt, j) => (
//                       <button
//                         type="button"
//                         key={j}
//                         disabled={sessionEnded}
//                         onClick={() => handleOptionClick(opt)}
//                         style={{
//                           display: "flex", alignItems: "center", gap: "8px",
//                           padding: opt.image ? "8px 14px 8px 8px" : "7px 14px",
//                           borderRadius: "10px", border: "1px solid rgba(99,102,241,0.25)",
//                           background: sessionEnded ? "#e5e7eb" : "rgba(99,102,241,0.06)",
//                           color: sessionEnded ? "#9ca3af" : "#6366f1",
//                           fontSize: "13px", fontWeight: 600,
//                           cursor: sessionEnded ? "not-allowed" : "pointer",
//                           opacity: sessionEnded ? 0.5 : 1,
//                           transition: "all 0.2s ease", fontFamily: "inherit",
//                         }}
//                         onMouseEnter={(e) => { if (!sessionEnded) { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
//                         onMouseLeave={(e) => { if (!sessionEnded) { e.currentTarget.style.background = "rgba(99,102,241,0.06)"; e.currentTarget.style.transform = "translateY(0)"; } }}
//                       >
//                         {opt.image && <img src={opt.image} alt={opt.label} width={22} height={22} style={{ borderRadius: "6px", objectFit: "cover" }} />}
//                         {opt.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}

//           {showForm && !leadCollected && (
//             <div className="cw-msg">
//               <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
//               <div className="cw-msg-bubble" style={{ padding: "16px", width: "100%" }}>
//                 <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//                   <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 600, color: "#374151" }}>
//                     Please share your details to continue:
//                   </p>

//                   {/* Name */}
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={formName}
//                     onChange={(e) => { setFormName(e.target.value); setFormError(""); }}
//                     style={inputStyle}
//                     onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
//                     onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
//                   />

//                   {/* Email */}
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={formEmail}
//                     onChange={(e) => { setFormEmail(e.target.value); setFormError(""); }}
//                     style={inputStyle}
//                     onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
//                     onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
//                   />

//                   {/* Country code + Phone — both same height, select not cut off */}
//                   <div style={{ display: "flex", gap: "8px" }}>
//                     <select
//                       value={formCountryCode}
//                       onChange={(e) => {
//                         setFormCountryCode(e.target.value);
//                         setFormPhone("");
//                         setFormError("");
//                       }}
//                       style={{
//                         flexShrink: 0,
//                         width: "105px",
//                         height: "42px",           // same height as inputs
//                         padding: "0 6px",          // no top/bottom padding — let height handle it
//                         borderRadius: "8px",
//                         border: "1px solid #d1d5db",
//                         fontSize: "13px",
//                         fontFamily: "inherit",
//                         outline: "none",
//                         background: "#fff",
//                         cursor: "pointer",
//                         lineHeight: "42px",        // vertically center text
//                         appearance: "auto" as const,
//                         boxSizing: "border-box" as const,
//                       }}
//                     >
//                       {COUNTRY_CODES.map((c) => (
//                         <option key={c.code} value={c.code}>
//                           {c.flag} {c.code}
//                         </option>
//                       ))}
//                     </select>

//                     <input
//                       type="tel"
//                       placeholder={getPlaceholder(formCountryCode)}
//                       value={formPhone}
//                       maxLength={maxDigits}
//                       onChange={(e) => {
//                         const val = e.target.value.replace(/[^0-9]/g, "").slice(0, maxDigits);
//                         setFormPhone(val);
//                         setFormError("");
//                       }}
//                       style={{
//                         ...inputStyle,
//                         flex: 1,
//                         minWidth: 0,
//                         width: "auto",
//                       }}
//                       onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
//                       onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
//                       onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submitLeadForm(); } }}
//                     />
//                   </div>

//                   {/* Inline error only — no chat bubble */}
//                   {formError && (
//                     <div style={{
//                       fontSize: "12.5px",
//                       color: "#dc2626",
//                       background: "#fef2f2",
//                       border: "1px solid #fecaca",
//                       borderRadius: "8px",
//                       padding: "8px 12px",
//                       lineHeight: 1.6,
//                       whiteSpace: "pre-line",
//                     }}>
//                       {formError}
//                     </div>
//                   )}

//                   <button
//                     onClick={submitLeadForm}
//                     disabled={!canSubmit}
//                     style={{
//                       padding: "10px 20px",
//                       borderRadius: "10px",
//                       border: "none",
//                       background: canSubmit ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#e5e7eb",
//                       color: canSubmit ? "#fff" : "#9ca3af",
//                       fontSize: "14px",
//                       fontWeight: 700,
//                       cursor: canSubmit ? "pointer" : "not-allowed",
//                       transition: "all 0.2s ease",
//                       fontFamily: "inherit",
//                     }}
//                   >
//                     {formSubmitting ? "Submitting..." : "Continue →"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}

//           {loading && (
//             <div className="cw-msg">
//               <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
//               <div className="cw-msg-bubble cw-typing">
//                 <span className="cw-typing-dot" /><span className="cw-typing-dot" /><span className="cw-typing-dot" />
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="cw-ai-input-area">
//           <div className="cw-ai-input-row cw-ai-input-row-active">
//             <input
//               type="tel"
//               className="cw-ai-input"
//               placeholder={
//                 !connected ? "Connecting..."
//                   : showForm && !leadCollected ? "Please fill the form above..."
//                     : isMobile ? "Ask anything..."
//                       : "Ask me anything about mTouch Labs..."
//               }
//               disabled={!connected || loading || sessionEnded || (showForm && !leadCollected)}
//               autoComplete="off"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//             />
//             <button
//               className={`cw-ai-send ${connected && input.trim() && !loading && !sessionEnded && !(showForm && !leadCollected) ? "cw-ai-send-active" : ""}`}
//               disabled={!connected || !input.trim() || loading || sessionEnded || (showForm && !leadCollected)}
//               aria-label="Send"
//               onClick={handleSend}
//             >
//               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
//               </svg>
//             </button>
//           </div>
//           <div className="cw-ai-hint">
//             <span className="cw-ai-badge">AI</span>
//             {loading ? "Thinking..."
//               : showForm && !leadCollected ? "Fill in your details to continue"
//                 : "Powered by mTouch Labs AI"}
//           </div>
//         </div>
//         <div className="cw-panel-footer">Powered by <strong>mTouch Labs</strong></div>
//       </div>
//     </>
//   );
// }


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

const COUNTRY_CODES = [
  { code: "+91", flag: "🇮🇳", name: "India", maxDigits: 10 },
  { code: "+1", flag: "🇺🇸", name: "USA/Canada", maxDigits: 10 },
  { code: "+44", flag: "🇬🇧", name: "UK", maxDigits: 10 },
  { code: "+971", flag: "🇦🇪", name: "UAE", maxDigits: 9 },
  { code: "+61", flag: "🇦🇺", name: "Australia", maxDigits: 9 },
  { code: "+49", flag: "🇩🇪", name: "Germany", maxDigits: 11 },
  { code: "+65", flag: "🇸🇬", name: "Singapore", maxDigits: 8 },
  { code: "+60", flag: "🇲🇾", name: "Malaysia", maxDigits: 10 },
];

function validatePhone(digits: string, countryCode: string): { valid: boolean; error: string } {
  switch (countryCode) {
    case "+91":
      if (digits.length !== 10) return { valid: false, error: "India (+91): exactly 10 digits required" };
      if (!/^[6-9]/.test(digits)) return { valid: false, error: "India (+91): must start with 6, 7, 8, or 9" };
      return { valid: true, error: "" };
    case "+1":
      if (digits.length !== 10) return { valid: false, error: "USA/Canada (+1): exactly 10 digits required" };
      if (/^[01]/.test(digits)) return { valid: false, error: "USA/Canada (+1): cannot start with 0 or 1" };
      return { valid: true, error: "" };
    case "+44":
      if (digits.length !== 10) return { valid: false, error: "UK (+44): exactly 10 digits required" };
      if (!/^[127]/.test(digits)) return { valid: false, error: "UK (+44): must start with 7 (mobile) or 1/2 (landline)" };
      return { valid: true, error: "" };
    case "+971":
      if (digits.length !== 9) return { valid: false, error: "UAE (+971): exactly 9 digits required" };
      return { valid: true, error: "" };
    case "+61":
      if (digits.length !== 9) return { valid: false, error: "Australia (+61): exactly 9 digits required" };
      if (!/^[2-9]/.test(digits)) return { valid: false, error: "Australia (+61): must start with 2–9" };
      return { valid: true, error: "" };
    case "+49":
      if (digits.length < 10 || digits.length > 11) return { valid: false, error: "Germany (+49): 10 or 11 digits required" };
      return { valid: true, error: "" };
    case "+65":
      if (digits.length !== 8) return { valid: false, error: "Singapore (+65): exactly 8 digits required" };
      if (!/^[689]/.test(digits)) return { valid: false, error: "Singapore (+65): must start with 6, 8, or 9" };
      return { valid: true, error: "" };
    case "+60":
      if (digits.length < 9 || digits.length > 10) return { valid: false, error: "Malaysia (+60): 9 or 10 digits required" };
      if (!/^1/.test(digits)) return { valid: false, error: "Malaysia (+60): mobile numbers start with 1" };
      return { valid: true, error: "" };
    default:
      if (digits.length < 8 || digits.length > 12) return { valid: false, error: "Phone number must be 8–12 digits" };
      return { valid: true, error: "" };
  }
}

function getMaxDigits(countryCode: string): number {
  return COUNTRY_CODES.find(c => c.code === countryCode)?.maxDigits ?? 12;
}

function getPlaceholder(countryCode: string): string {
  switch (countryCode) {
    case "+91": return "98765 43210";
    case "+1": return "415 555 0100";
    case "+44": return "7911 123456";
    case "+971": return "50 123 4567";
    case "+61": return "412 345 678";
    case "+49": return "1512 3456789";
    case "+65": return "9123 4567";
    case "+60": return "12 345 6789";
    default: return "Phone number";
  }
}

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
  const [sessionEnded, setSessionEnded] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [leadCollected, setLeadCollected] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCountryCode, setFormCountryCode] = useState("+91");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const bodyRef = useRef<HTMLDivElement>(null);
  const wsRef = useRef<WebSocket | null>(null);
  // Initialize session id deterministically; real id is set client-side in useEffect
  // to avoid SSR/CSR divergence from Math.random() + Date.now() during render.
  const sessionIdRef = useRef<string>("");
  const reconnectAttempts = useRef(0);

  useEffect(() => {
    if (!sessionIdRef.current) {
      sessionIdRef.current = generateSessionId();
    }
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

  const closeChat = useCallback(() => {
    setOpen(false);
    if (wsRef.current) { wsRef.current.close(); wsRef.current = null; }
    setConnected(false);
    setMessages([]);
    setInput("");
    setLoading(false);
    setShowForm(false);
    setLeadCollected(false);
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormCountryCode("+91");
    setFormSubmitting(false);
    setFormError("");
    setSessionEnded(false);
    reconnectAttempts.current = 0;
    sessionIdRef.current = generateSessionId();
  }, []);

  // ── open: only opens. close is handled by the panel's own X button ──
  const openChat = () => { if (!open) setOpen(true); };

  const connectWebSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;
    const ws = new WebSocket(`${WS_BASE}/${sessionIdRef.current}`);
    wsRef.current = ws;
    ws.onopen = () => { setConnected(true); reconnectAttempts.current = 0; };
    ws.onmessage = (event) => {
      setLoading(false);
      setFormSubmitting(false);
      try {
        const data = JSON.parse(event.data);
        if (data.tool_calls || data.function_call) return;
        if (data.show_form === true) { setShowForm(true); setLeadCollected(false); }
        else if (data.show_form === false) { setShowForm(false); }
        if (data.lead_collected === true) { setLeadCollected(true); setShowForm(false); }
        const text = extractText(data);
        const options = extractOptions(data);
        if (text) { setMessages(prev => [...prev, { from: "ai", text, options }]); }
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

  useEffect(() => { if (open) connectWebSocket(); }, [open, connectWebSocket]);
  useEffect(() => { return () => { wsRef.current?.close(); }; }, []);

  const sendMessage = (text: string, value?: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { from: "user", text }]);
    setInput("");
    setLoading(true);
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try { wsRef.current.send(JSON.stringify({ type: 1, message: value || text })); }
      catch { wsRef.current.send(value || text); }
    } else {
      setLoading(false);
      setMessages(prev => [...prev, { from: "ai", text: "Connection lost. Reconnecting..." }]);
      connectWebSocket();
    }
  };

  const submitLeadForm = () => {
    if (!formName.trim() || !formEmail.trim() || !formPhone.trim()) return;
    const errors: string[] = [];
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formEmail.trim())) {
      errors.push("• Invalid email address (e.g. name@gmail.com)");
    }
    const digits = formPhone.trim().replace(/[^0-9]/g, "");
    const phoneResult = validatePhone(digits, formCountryCode);
    if (!phoneResult.valid) {
      errors.push("• " + phoneResult.error);
    }
    if (errors.length > 0) {
      setFormError(errors.join("\n"));
      return;
    }
    setFormError("");
    setFormSubmitting(true);
    const fullPhone = formCountryCode + digits;
    setMessages(prev => [...prev, { from: "user", text: `${formName.trim()} • ${formEmail.trim()} • ${fullPhone}` }]);
    if (wsRef.current?.readyState === WebSocket.OPEN) {
      try {
        wsRef.current.send(JSON.stringify({
          type: 0,
          name: formName.trim(),
          email: formEmail.trim(),
          phone: digits,
        }));
      } catch { setFormSubmitting(false); }
    }
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormCountryCode("+91");
    setFormError("");
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || loading || sessionEnded) return;
    if (showForm && !leadCollected) return;
    sendMessage(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      const trimmed = input.trim();
      if (!trimmed || loading || sessionEnded) return;
      if (showForm && !leadCollected) return;
      handleSend();
    }
  };

  const handleOptionClick = (option: OptionItem) => {
    if (loading || sessionEnded) return;
    const isEndChat = /end\s*chat|end\s*session|bye|exit/i.test(option.label);
    sendMessage(option.label, option.value);
    if (isEndChat) {
      setSessionEnded(true);
      setTimeout(() => {
        sessionIdRef.current = generateSessionId();
        if (wsRef.current) { wsRef.current.close(); wsRef.current = null; }
        setConnected(false);
        reconnectAttempts.current = 0;
      }, 800);
    }
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

  const inputStyle = {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
    width: "100%",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
    height: "42px",
  };

  const maxDigits = getMaxDigits(formCountryCode);
  const canSubmit = formName.trim() && formEmail.trim() && formPhone.length >= (formCountryCode === "+49" || formCountryCode === "+60" ? maxDigits - 1 : maxDigits) && !formSubmitting;

  return (
    <>
      {/* ── Floating AI button — only shown when panel is CLOSED ──
          Position: bottom-right, vertically stacked above the WhatsApp
          and scroll-to-top buttons. CSS in /public/css/ui-fixes.css owns
          the actual coordinates so the icon trio never overlaps. */}
      {!open && (
        <div className="cw-wrapper">
          <div className={`cw-label ${showLabel ? "cw-label-show" : ""}`}>
            <span className="cw-label-dot" />
            <span className="cw-label-text">Ask AI ✦</span>
          </div>
          <button
            className="cw-ai-btn"
            onClick={openChat}
            aria-label="Open AI Assistant"
          >
            <span className="cw-ai-ring cw-ai-ring-1" />
            <span className="cw-ai-ring cw-ai-ring-2" />
            <span className="cw-ai-ring cw-ai-ring-3" />
            <span className="cw-ai-orbit">
              <span className="cw-ai-dot cw-ai-dot-1" />
              <span className="cw-ai-dot cw-ai-dot-2" />
              <span className="cw-ai-dot cw-ai-dot-3" />
            </span>
            <span className="cw-ai-center">
              <img loading="lazy" decoding="async"
                src="/images/artificial-intelligence.gif"
                alt="AI Assistant"
                width={42}
                height={42}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
            </span>
          </button>
        </div>
      )}

      {/* ── Chat panel ── */}
      <div className={`cw-panel ${open ? "cw-panel-open" : ""}`}>
        <div className="cw-panel-header" style={{ padding: "14px 16px", minHeight: "60px" }}>
          <div className="cw-panel-header-left">
            <div className="cw-avatar cw-ai-avatar">
              <span className="cw-ai-sparkle-icon">✦</span>
            </div>
            <div className="cw-header-info">
              <h4 style={{ margin: 0, lineHeight: 1.3 }}>mTouch AI</h4>
              <p style={{ margin: 0, lineHeight: 1.3 }}>
                <span className={`cw-ai-status-dot ${connected ? "" : "cw-ai-status-dot-offline"}`} />
                {connected ? "Online" : "Connecting..."}
              </p>
            </div>
          </div>
          <button
            className="cw-panel-close"
            aria-label="Close chat"
            onClick={closeChat}
            style={{ padding: "8px", flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cw-panel-body" ref={bodyRef} style={{ paddingTop: "12px", paddingBottom: "80px" }}>
          <div className="cw-time-stamp">Today</div>
          <div className="cw-msg cw-msg-anim-1">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">Hi there! 👋 I&apos;m the <strong>mTouch AI Assistant</strong>.</div>
          </div>
          <div className="cw-msg cw-msg-anim-2">
            <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
            <div className="cw-msg-bubble">Ask me anything about mTouch Labs — our services, technologies, pricing, or how we can help with your project!</div>
          </div>

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
                        type="button"
                        key={j}
                        disabled={sessionEnded}
                        onClick={() => handleOptionClick(opt)}
                        style={{
                          display: "flex", alignItems: "center", gap: "8px",
                          padding: opt.image ? "8px 14px 8px 8px" : "7px 14px",
                          borderRadius: "10px", border: "1px solid rgba(99,102,241,0.25)",
                          background: sessionEnded ? "#e5e7eb" : "rgba(99,102,241,0.06)",
                          color: sessionEnded ? "#9ca3af" : "#6366f1",
                          fontSize: "13px", fontWeight: 600,
                          cursor: sessionEnded ? "not-allowed" : "pointer",
                          opacity: sessionEnded ? 0.5 : 1,
                          transition: "all 0.2s ease", fontFamily: "inherit",
                        }}
                        onMouseEnter={(e) => { if (!sessionEnded) { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; e.currentTarget.style.transform = "translateY(-1px)"; } }}
                        onMouseLeave={(e) => { if (!sessionEnded) { e.currentTarget.style.background = "rgba(99,102,241,0.06)"; e.currentTarget.style.transform = "translateY(0)"; } }}
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

          {showForm && !leadCollected && (
            <div className="cw-msg">
              <div className="cw-msg-avatar"><span className="cw-ai-mini">✦</span></div>
              <div className="cw-msg-bubble" style={{ padding: "16px", width: "100%" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 600, color: "#374151" }}>
                    Please share your details to continue:
                  </p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => { setFormName(e.target.value); setFormError(""); }}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formEmail}
                    onChange={(e) => { setFormEmail(e.target.value); setFormError(""); }}
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
                  />
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select
                      value={formCountryCode}
                      onChange={(e) => { setFormCountryCode(e.target.value); setFormPhone(""); setFormError(""); }}
                      style={{
                        flexShrink: 0, width: "105px", height: "42px",
                        padding: "0 6px", borderRadius: "8px",
                        border: "1px solid #d1d5db", fontSize: "13px",
                        fontFamily: "inherit", outline: "none",
                        background: "#fff", cursor: "pointer",
                        appearance: "auto" as const,
                        boxSizing: "border-box" as const,
                      }}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder={getPlaceholder(formCountryCode)}
                      value={formPhone}
                      maxLength={maxDigits}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "").slice(0, maxDigits);
                        setFormPhone(val); setFormError("");
                      }}
                      style={{ ...inputStyle, flex: 1, minWidth: 0, width: "auto" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#6366f1")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#d1d5db")}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); submitLeadForm(); } }}
                    />
                  </div>
                  {formError && (
                    <div style={{
                      fontSize: "12.5px", color: "#dc2626",
                      background: "#fef2f2", border: "1px solid #fecaca",
                      borderRadius: "8px", padding: "8px 12px",
                      lineHeight: 1.6, whiteSpace: "pre-line",
                    }}>
                      {formError}
                    </div>
                  )}
                  <button
                    onClick={submitLeadForm}
                    disabled={!canSubmit}
                    style={{
                      padding: "10px 20px", borderRadius: "10px", border: "none",
                      background: canSubmit ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "#e5e7eb",
                      color: canSubmit ? "#fff" : "#9ca3af",
                      fontSize: "14px", fontWeight: 700,
                      cursor: canSubmit ? "pointer" : "not-allowed",
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

        <div className="cw-ai-input-area">
          <div className="cw-ai-input-row cw-ai-input-row-active">
            <input
              type="tel"
              className="cw-ai-input"
              placeholder={
                !connected ? "Connecting..."
                  : showForm && !leadCollected ? "Please fill the form above..."
                    : isMobile ? "Ask anything..."
                      : "Ask me anything about mTouch Labs..."
              }
              disabled={!connected || loading || sessionEnded || (showForm && !leadCollected)}
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={`cw-ai-send ${connected && input.trim() && !loading && !sessionEnded && !(showForm && !leadCollected) ? "cw-ai-send-active" : ""}`}
              disabled={!connected || !input.trim() || loading || sessionEnded || (showForm && !leadCollected)}
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
            {loading ? "Thinking..."
              : showForm && !leadCollected ? "Fill in your details to continue"
                : "Powered by mTouch Labs AI"}
          </div>
        </div>
        <div className="cw-panel-footer">Powered by <strong>mTouch Labs</strong></div>
      </div>
    </>
  );
}