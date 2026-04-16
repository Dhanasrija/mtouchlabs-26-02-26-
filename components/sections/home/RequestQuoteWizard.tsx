// "use client";
// import { useState, useCallback, useEffect, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowLeft, ArrowRight, X, Check, User, Phone, Mail, Shield, Zap, Star,
//   Sparkles, Smartphone, Globe, ShoppingCart, Cloud, Building2, Brain, Palette, Megaphone,
//   Apple, Layers, Monitor, Boxes, Lock, CreditCard, MessageCircle, Bell, MapPin,
//   ShieldCheck, BarChart3, Users, Search, Image, Languages, Plug, CalendarCheck,
//   IndianRupee, TrendingUp, Calendar, Clock, Hourglass, Compass,
//   CheckCircle2, Rocket, PartyPopper, Database, ChevronDown, AlertCircle,
//   MessageSquare, Package, Settings, FileText, Eye, PenTool, Layout, Workflow,
//   Server, HardDrive, ShieldAlert, Activity, GitBranch, Target, RefreshCw,
// } from "lucide-react";
// import confetti from "canvas-confetti";
// const C = {
//   bg: "220 20% 96%", fg: "225 25% 12%", card: "220 20% 100%",
//   pri: "213 90% 52%", acc: "270 70% 58%",
//   mut: "220 15% 90%", mutFg: "220 12% 45%", bdr: "220 15% 88%",
//   err: "0 84% 55%",
// };
// const h = (v: string) => `hsl(${v})`;
// const ha = (v: string, a: string) => `hsl(${v} / ${a})`;
// const grad = `linear-gradient(135deg, ${h(C.pri)}, ${h(C.acc)})`;

// /* ═══ DATA ═══ */
// const SERVICES = [
//   { id: "mobile", label: "Mobile App Development", icon: Smartphone, color: "190 90% 55%" },
//   { id: "web", label: "Web Application Development", icon: Globe, color: "170 80% 50%" },
//   { id: "ai", label: "AI & Automation", icon: Brain, color: "250 80% 65%" },
//   { id: "enterprise", label: "Enterprise Software", icon: Building2, color: "300 70% 60%" },
//   { id: "ecommerce", label: "E-commerce Development", icon: ShoppingCart, color: "270 80% 65%" },
//   { id: "uiux", label: "UI/UX Design", icon: Palette, color: "340 80% 60%" },
//   { id: "salesforce", label: "Salesforce Solutions", icon: Zap, color: "220 80% 60%" },
//   { id: "marketing", label: "Digital Marketing", icon: Megaphone, color: "150 70% 50%" },
//   { id: "cloud", label: "Cloud & DevOps", icon: Cloud, color: "190 70% 50%" },
//   { id: "data", label: "Data & Infrastructure", icon: Database, color: "45 90% 55%" },
// ];
// const PLATFORMS = [
//   { id: "android", label: "Android", desc: "Google Play", icon: Smartphone, color: "150 70% 50%" },
//   { id: "ios", label: "iOS", desc: "App Store", icon: Apple, color: "220 10% 70%" },
//   { id: "both", label: "Both", desc: "iOS & Android", icon: Layers, color: "190 90% 55%" },
//   { id: "web", label: "Web", desc: "Browser-based", icon: Globe, color: "270 80% 65%" },
//   { id: "cross", label: "Cross-Platform", desc: "All devices", icon: Monitor, color: "220 80% 60%" },
//   { id: "everything", label: "Everything", desc: "Full coverage", icon: Boxes, color: "340 80% 60%" },
// ];
// const ALL_FEATURES: Record<string, { id: string; label: string; icon: any; color: string }[]> = {
//   mobile: [
//     { id: "auth", label: "Authentication", icon: Lock, color: "190 90% 55%" },
//     { id: "payments", label: "Payments", icon: CreditCard, color: "150 70% 50%" },
//     { id: "chat", label: "Chat", icon: MessageCircle, color: "270 80% 65%" },
//     { id: "push", label: "Push Notifications", icon: Bell, color: "45 90% 55%" },
//     { id: "maps", label: "Maps Integration", icon: MapPin, color: "170 80% 50%" },
//     { id: "media", label: "Media Upload", icon: Image, color: "200 80% 55%" },
//     { id: "social", label: "Social Integration", icon: Users, color: "340 80% 60%" },
//     { id: "reviews", label: "Reviews & Ratings", icon: Star, color: "50 90% 55%" },
//     { id: "analytics", label: "Analytics", icon: BarChart3, color: "300 70% 60%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//   ],
//   web: [
//     { id: "auth", label: "Authentication", icon: Lock, color: "190 90% 55%" },
//     { id: "admin", label: "Admin Panel", icon: ShieldCheck, color: "220 80% 60%" },
//     { id: "analytics", label: "Analytics Dashboard", icon: BarChart3, color: "300 70% 60%" },
//     { id: "search", label: "Search Functionality", icon: Search, color: "250 80% 65%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//     { id: "multilang", label: "Multi-Language", icon: Languages, color: "120 70% 50%" },
//     { id: "booking", label: "Booking System", icon: CalendarCheck, color: "260 80% 60%" },
//     { id: "payments", label: "Payments Integration", icon: CreditCard, color: "150 70% 50%" },
//     { id: "media", label: "Media Upload", icon: Image, color: "200 80% 55%" },
//     { id: "notifications", label: "Notifications", icon: Bell, color: "45 90% 55%" },
//   ],
//   ecommerce: [
//     { id: "search", label: "Product Search & Filters", icon: Search, color: "250 80% 65%" },
//     { id: "payments", label: "Payments Gateway", icon: CreditCard, color: "150 70% 50%" },
//     { id: "reviews", label: "Reviews & Ratings", icon: Star, color: "50 90% 55%" },
//     { id: "admin", label: "Admin Panel", icon: ShieldCheck, color: "220 80% 60%" },
//     { id: "inventory", label: "Inventory Management", icon: Package, color: "170 80% 50%" },
//     { id: "analytics", label: "Analytics Dashboard", icon: BarChart3, color: "300 70% 60%" },
//     { id: "multilang", label: "Multi-Language & Currency", icon: Languages, color: "120 70% 50%" },
//     { id: "tracking", label: "Order Tracking", icon: MapPin, color: "190 90% 55%" },
//     { id: "notifications", label: "Notifications", icon: Bell, color: "45 90% 55%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//   ],
//   enterprise: [
//     { id: "auth", label: "Authentication & Roles", icon: Lock, color: "190 90% 55%" },
//     { id: "admin", label: "Admin Panel", icon: ShieldCheck, color: "220 80% 60%" },
//     { id: "analytics", label: "Advanced Analytics", icon: BarChart3, color: "300 70% 60%" },
//     { id: "apis", label: "API Integrations", icon: Plug, color: "30 80% 55%" },
//     { id: "multilang", label: "Multi-Language", icon: Languages, color: "120 70% 50%" },
//     { id: "data", label: "Data Management", icon: Database, color: "45 90% 55%" },
//     { id: "notifications", label: "Notifications", icon: Bell, color: "45 90% 55%" },
//     { id: "security", label: "Security & Compliance", icon: ShieldAlert, color: "0 70% 55%" },
//   ],
//   ai: [
//     { id: "analytics", label: "Analytics & Insights", icon: BarChart3, color: "300 70% 60%" },
//     { id: "automation", label: "Automation Workflows", icon: Workflow, color: "250 80% 65%" },
//     { id: "admin", label: "Admin Dashboard", icon: ShieldCheck, color: "220 80% 60%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//     { id: "data", label: "Data Processing", icon: Database, color: "45 90% 55%" },
//     { id: "reports", label: "Reporting System", icon: FileText, color: "170 80% 50%" },
//     { id: "notifications", label: "Notifications", icon: Bell, color: "45 90% 55%" },
//   ],
//   uiux: [
//     { id: "research", label: "User Research", icon: Eye, color: "190 90% 55%" },
//     { id: "wireframe", label: "Wireframing", icon: Layout, color: "220 80% 60%" },
//     { id: "prototype", label: "Prototyping", icon: PenTool, color: "270 80% 65%" },
//     { id: "designsys", label: "Design System", icon: Palette, color: "340 80% 60%" },
//     { id: "responsive", label: "Responsive Design", icon: Monitor, color: "170 80% 50%" },
//     { id: "interaction", label: "Interaction Design", icon: Sparkles, color: "250 80% 65%" },
//   ],
//   salesforce: [
//     { id: "crm", label: "CRM Customization", icon: Users, color: "340 80% 60%" },
//     { id: "automation", label: "Automation Workflows", icon: Workflow, color: "250 80% 65%" },
//     { id: "analytics", label: "Analytics & Reports", icon: BarChart3, color: "300 70% 60%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//     { id: "admin", label: "Admin Controls", icon: ShieldCheck, color: "220 80% 60%" },
//     { id: "users", label: "User Management", icon: Users, color: "190 90% 55%" },
//   ],
//   marketing: [
//     { id: "analytics", label: "Analytics Tracking", icon: BarChart3, color: "300 70% 60%" },
//     { id: "seo", label: "SEO Optimization", icon: Search, color: "250 80% 65%" },
//     { id: "campaigns", label: "Campaign Management", icon: Target, color: "45 90% 55%" },
//     { id: "social", label: "Social Integration", icon: Users, color: "340 80% 60%" },
//     { id: "reports", label: "Performance Reporting", icon: TrendingUp, color: "190 90% 55%" },
//   ],
//   cloud: [
//     { id: "cicd", label: "CI/CD Pipeline", icon: GitBranch, color: "190 90% 55%" },
//     { id: "server", label: "Server Management", icon: Server, color: "220 80% 60%" },
//     { id: "monitoring", label: "Monitoring & Alerts", icon: Activity, color: "45 90% 55%" },
//     { id: "security", label: "Security Management", icon: ShieldAlert, color: "0 70% 55%" },
//     { id: "scale", label: "Scalability Config", icon: TrendingUp, color: "150 70% 50%" },
//     { id: "logging", label: "Analytics & Logging", icon: BarChart3, color: "300 70% 60%" },
//   ],
//   data: [
//     { id: "dbmgmt", label: "Database Management", icon: Database, color: "45 90% 55%" },
//     { id: "analytics", label: "Data Analytics", icon: BarChart3, color: "300 70% 60%" },
//     { id: "apis", label: "API Integration", icon: Plug, color: "30 80% 55%" },
//     { id: "security", label: "Security & Compliance", icon: ShieldAlert, color: "0 70% 55%" },
//     { id: "reports", label: "Reporting Systems", icon: FileText, color: "170 80% 50%" },
//     { id: "backup", label: "Backup & Recovery", icon: RefreshCw, color: "190 90% 55%" },
//   ],
// };
// const EXTRA_FEATURES = [
//   { id: "other", label: "Other", icon: Settings, color: "220 12% 48%" },
//   { id: "custom", label: "Custom Requirement", icon: FileText, color: "220 12% 48%" },
// ];
// const BUDGETS = [
//   { id: "80k-1.5l", label: "\u20B980K \u2013 \u20B91.5L", desc: "Starter", tier: 1, color: "190 90% 55%" },
//   { id: "1.5l-4l", label: "\u20B91.5L \u2013 \u20B94L", desc: "Growth", tier: 2, color: "170 80% 50%" },
//   { id: "4l-10l", label: "\u20B94L \u2013 \u20B910L", desc: "Professional", tier: 3, color: "220 80% 60%" },
//   { id: "10l-25l", label: "\u20B910L \u2013 \u20B925L", desc: "Enterprise", tier: 4, color: "270 80% 65%" },
//   { id: "25l+", label: "\u20B925L+", desc: "Premium", tier: 5, color: "300 70% 60%" },
//   { id: "flexible", label: "Flexible", desc: "Let\u2019s discuss", tier: 0, color: "250 80% 65%" },
// ];
// const TIMELINES = [
//   { id: "asap", label: "ASAP", desc: "Rush delivery", icon: Zap, color: "45 90% 55%" },
//   { id: "1-2months", label: "1\u20132 Months", desc: "Standard", icon: Calendar, color: "190 90% 55%" },
//   { id: "3-4months", label: "3\u20134 Months", desc: "Comfortable", icon: Clock, color: "170 80% 50%" },
//   { id: "flexible", label: "Flexible", desc: "No rush", icon: Hourglass, color: "270 80% 65%" },
//   { id: "exploring", label: "Exploring", desc: "Early stage", icon: Compass, color: "220 80% 60%" },
// ];
// const CCODES = [
//   { code: "+91", flag: "\uD83C\uDDEE\uD83C\uDDF3" },{ code: "+1", flag: "\uD83C\uDDFA\uD83C\uDDF8" },{ code: "+44", flag: "\uD83C\uDDEC\uD83C\uDDE7" },{ code: "+971", flag: "\uD83C\uDDE6\uD83C\uDDEA" },{ code: "+65", flag: "\uD83C\uDDF8\uD83C\uDDEC" },{ code: "+61", flag: "\uD83C\uDDE6\uD83C\uDDFA" },{ code: "+49", flag: "\uD83C\uDDE9\uD83C\uDDEA" },{ code: "+33", flag: "\uD83C\uDDEB\uD83C\uDDF7" },{ code: "+81", flag: "\uD83C\uDDEF\uD83C\uDDF5" },{ code: "+86", flag: "\uD83C\uDDE8\uD83C\uDDF3" },
// ];

// /* 6 steps: Contact → Service → Platform → Features → Budget → Timeline */
// const N = 6;
// const ST = ["","What service are you looking for?","Which platforms?","Features you need","What\u2019s your budget?","When do you need it?"];
// const SS = ["","Select all that apply","Where should your app live?","Based on your selections","Find the right fit","Pick your timeline"];
// const TRUST = [{ icon: Shield, label: "Secure & Private" },{ icon: Zap, label: "24hr Response" },{ icon: Star, label: "500+ Projects" }];

// /* Animations */
// const sv = {
//   enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, filter: "blur(8px)", scale: 0.97 }),
//   center: { x: 0, opacity: 1, filter: "blur(0px)", scale: 1 },
//   exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, filter: "blur(8px)", scale: 0.97 }),
// };
// const stag = (d: number) => ({ hidden: {}, show: { transition: { staggerChildren: d } } });
// const sp = (s: number, d: number) => ({ type: "spring" as const, stiffness: s, damping: d });
// const svcV = { hidden: { opacity: 0, y: 20, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: sp(260, 24) } };
// const platV = { hidden: { opacity: 0, x: -30, filter: "blur(6px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: sp(260, 24) } };
// const featV = { hidden: { opacity: 0, scale: 0.6, filter: "blur(8px)" }, show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: sp(350, 22) } };
// const budgV = { hidden: { opacity: 0, y: 25, scale: 0.95, filter: "blur(5px)" }, show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: sp(250, 24) } };
// const timeV = { hidden: { opacity: 0, x: 35, filter: "blur(5px)" }, show: { opacity: 1, x: 0, filter: "blur(0px)", transition: sp(250, 24) } };

// /* Styles */
// const gc = (sel: boolean, col: string): React.CSSProperties => sel
//   ? { borderRadius: 16, backdropFilter: "blur(24px)", border: `2px solid ${ha(C.pri,"0.5")}`, background: ha("190 90% 55%","0.08"), boxShadow: `0 8px 40px -12px ${ha(C.pri,"0.12")}, 0 0 0 1px ${ha(C.pri,"0.25")}` }
//   : { borderRadius: 16, backdropFilter: "blur(24px)", border: `1px solid ${ha(C.bdr,"0.6")}`, background: ha(C.card,"0.6"), boxShadow: "0 4px 30px -8px rgba(0,0,0,0.3)" };

// /* Glass input */
// const glass: React.CSSProperties = { width: "100%", padding: "16px 18px", borderRadius: 14, background: ha(C.card,"0.35"), backdropFilter: "blur(16px)", border: `1px solid ${ha(C.bdr,"0.4")}`, color: h(C.fg), fontSize: 15, outline: "none", transition: "all 0.3s ease-in-out", fontFamily: "'Inter',sans-serif", boxShadow: `inset 0 1px 0 ${ha("0 0% 100%","0.06")}, 0 4px 20px -6px rgba(0,0,0,0.2)` };
// const errGlass: React.CSSProperties = { ...glass, borderColor: h(C.err), boxShadow: `0 0 12px ${ha(C.err,"0.15")}` };
// const oF = (e: any) => { if (e.target.dataset.err !== "1") { e.target.style.borderColor = ha(C.pri,"0.5"); e.target.style.boxShadow = `0 0 20px ${ha(C.pri,"0.15")}, inset 0 1px 0 ${ha("0 0% 100%","0.08")}`; }};
// const oB = (e: any) => { if (e.target.dataset.err !== "1") { e.target.style.borderColor = ha(C.bdr,"0.4"); e.target.style.boxShadow = `inset 0 1px 0 ${ha("0 0% 100%","0.06")}, 0 4px 20px -6px rgba(0,0,0,0.2)`; }};
// const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRe = /^\d{7,15}$/;

// function Err({ msg }: { msg: string }) {
//   if (!msg) return null;
//   return <motion.div initial={{ opacity: 0, y: -6, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: h(C.err), marginTop: 4 }}><AlertCircle size={13} /> {msg}</motion.div>;
// }

// /* ═══ COMPONENT ═══ */
// export default function RequestQuoteWizard() {
//   const [step, setStep] = useState(0);
//   const [dir, setDir] = useState(1);
//   const [partialSent, setPartialSent] = useState(false);
//   const [sending, setSending] = useState(false);
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [ccOpen, setCcOpen] = useState(false);
//   const [contact, setContact] = useState({ name: "", phone: "", cc: "+91", email: "" });
//   const [svc, setSvc] = useState<string[]>([]);
//   const [plat, setPlat] = useState<string[]>([]);
//   const [feat, setFeat] = useState<string[]>([]);
//   const [budget, setBudget] = useState("");
//   const [tl, setTl] = useState("");

//   const done = step === N;
//   const prog = (step / N) * 100;
//   const nv = contact.name.trim().length > 0;
//   const pv = phoneRe.test(contact.phone);
//   const ev = contact.email === "" || emailRe.test(contact.email);
//   const nameErr = touched.name && !nv ? "Name is required" : "";
//   const phoneErr = touched.phone && !pv ? (contact.phone.length > 0 ? "Enter a valid phone (8\u201315 digits)" : "Phone number is required") : "";
//   const emailErr = touched.email && !ev ? "Enter a valid email address" : "";

//   const dynamicFeatures = useMemo(() => {
//     const map = new Map<string, { id: string; label: string; icon: any; color: string }>();
//     svc.forEach(s => { (ALL_FEATURES[s] || []).forEach(f => { if (!map.has(f.id)) map.set(f.id, f); }); });
//     return [...Array.from(map.values()), ...EXTRA_FEATURES];
//   }, [svc]);

//   const ok = useCallback(() => {
//     switch (step) {
//       case 0: return nv && pv && ev;
//       case 1: return svc.length > 0;
//       case 2: return plat.length > 0;
//       case 3: return feat.length > 0;
//       case 4: return budget !== "";
//       case 5: return tl !== "";
//       default: return false;
//     }
//   }, [step, nv, pv, ev, svc, plat, feat, budget, tl]);

//   const tog = (a: string[], s: Function, id: string) => s(a.includes(id) ? a.filter((x: string) => x !== id) : [...a, id]);
//   const touch = (f: string) => setTouched(p => ({ ...p, [f]: true }));

//   const sendP = async () => { if (partialSent) return; try { await fetch("/api/estimate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone: contact.cc+" "+contact.phone, email: contact.email, name: contact.name.trim(), companyType: "N/A", projectType: "Not yet selected", platform: "Not yet selected", features: [], budget: "Not yet selected", timeline: "Not yet selected", partial: true }) }); setPartialSent(true); } catch {} };
//   const sendF = async () => { setSending(true); try { await fetch("/api/estimate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone: contact.cc+" "+contact.phone, email: contact.email, name: contact.name.trim(), companyType: "N/A", projectType: svc.map(id => SERVICES.find(s=>s.id===id)?.label).join(", "), platform: plat.map(id => PLATFORMS.find(p=>p.id===id)?.label).join(", "), features: feat.map(id => dynamicFeatures.find(f=>f.id===id)?.label).filter(Boolean), budget: BUDGETS.find(b=>b.id===budget)?.label||budget, timeline: TIMELINES.find(t=>t.id===tl)?.label||tl, partial: false }) }); } catch {} setSending(false); };

//   const next = async () => { setCcOpen(false); if (step===0) { setTouched({ name:true, phone:true, email:true }); if (!ok()) return; sendP(); } else if (!ok()) return; if (step===N-1) await sendF(); setDir(1); setStep(s=>Math.min(s+1,N)); };
//   const back = () => { setCcOpen(false); setDir(-1); setStep(s=>Math.max(s-1,0)); };
//   const close = () => { const m=document.getElementById("requestQuoteModal"); if(m) m.classList.add("hide"); setTimeout(()=>{ setStep(0); setContact({ name:"", phone:"", cc:"+91", email:"" }); setSvc([]); setPlat([]); setFeat([]); setBudget(""); setTl(""); setPartialSent(false); setTouched({}); setCcOpen(false); },300); };

//   useEffect(() => { const vIds = new Set(dynamicFeatures.map(f=>f.id)); setFeat(p=>p.filter(id=>vIds.has(id))); }, [dynamicFeatures]);

//   useEffect(() => {
//     if (!done) return;
//     const cl=["#22d3ee","#a78bfa","#818cf8","#34d399","#f472b6","#fb923c","#facc15","#4ade80"];
//     const modal=document.getElementById("requestQuoteModal");
//     const canvas=document.createElement("canvas");
//     canvas.style.cssText="position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:999999";
//     (modal||document.body).appendChild(canvas);
//     const cc=confetti.create(canvas,{resize:true,useWorker:true});
//     cc({particleCount:150,spread:120,origin:{x:0.5,y:0.35},colors:cl,gravity:0.8,scalar:1.2,ticks:300});
//     const end=Date.now()+5000;
//     const fr=()=>{ cc({particleCount:4,angle:60,spread:55,origin:{x:0,y:0.5},colors:cl,gravity:0.7,scalar:1.1,ticks:250,drift:1}); cc({particleCount:4,angle:120,spread:55,origin:{x:1,y:0.5},colors:cl,gravity:0.7,scalar:1.1,ticks:250,drift:-1}); if(Date.now()<end) requestAnimationFrame(fr); }; fr();
//     setTimeout(()=>cc({particleCount:80,spread:100,origin:{x:0.3,y:0.3},colors:cl,gravity:0.9,ticks:200}),500);
//     setTimeout(()=>cc({particleCount:80,spread:100,origin:{x:0.7,y:0.3},colors:cl,gravity:0.9,ticks:200}),1000);
//     setTimeout(()=>cc({particleCount:60,spread:140,origin:{x:0.5,y:0.5},colors:cl,gravity:1,ticks:200}),1800);
//     const t=setTimeout(()=>canvas.remove(),8000);
//     return ()=>{ clearTimeout(t); canvas.remove(); };
//   }, [done]);

//   /* ═══ RENDER ═══ */
//   return (
//     <div style={{ fontFamily: "'Inter',sans-serif", color: h(C.fg), position: "relative", background: h(C.bg), overflow: "hidden", backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, ${ha(C.acc,"0.1")}, transparent), radial-gradient(ellipse 60% 40% at 80% 100%, ${ha(C.pri,"0.08")}, transparent)` }}>
//       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" />

//       {/* Animated orbs */}
//       <motion.div style={{ position:"absolute",width:350,height:350,borderRadius:"50%",filter:"blur(70px)",background:`radial-gradient(circle,${ha(C.pri,"0.4")},transparent)`,top:-120,left:-120,pointerEvents:"none" }} animate={{ y:[0,-40,0], opacity:[0.15,0.3,0.15] }} transition={{ duration:7,repeat:Infinity,ease:"easeInOut" }} />
//       <motion.div style={{ position:"absolute",width:280,height:280,borderRadius:"50%",filter:"blur(70px)",background:`radial-gradient(circle,${ha(C.acc,"0.35")},transparent)`,bottom:-100,right:-100,pointerEvents:"none" }} animate={{ y:[0,30,0], opacity:[0.12,0.28,0.12] }} transition={{ duration:9,repeat:Infinity,ease:"easeInOut",delay:1.5 }} />
//       <motion.div style={{ position:"absolute",width:180,height:180,borderRadius:"50%",filter:"blur(50px)",background:`radial-gradient(circle,${ha(C.pri,"0.2")},transparent)`,top:"50%",right:"15%",pointerEvents:"none" }} animate={{ x:[0,20,0], y:[0,-25,0], opacity:[0.08,0.2,0.08] }} transition={{ duration:11,repeat:Infinity,ease:"easeInOut",delay:3 }} />

//       {!done && <motion.div initial={{width:0}} animate={{width:`${prog}%`}} transition={{type:"spring",stiffness:200,damping:30}} style={{height:3,position:"absolute",top:0,left:0,zIndex:20,background:`linear-gradient(90deg,${h(C.pri)},${h(C.acc)})`,boxShadow:`0 0 15px ${ha(C.pri,"0.4")}`}} />}

//       <div style={{ padding:"44px 48px", position:"relative", zIndex:2 }}>
//         <motion.button whileHover={{rotate:90,scale:1.1}} whileTap={{scale:0.9}} onClick={close} style={{position:"absolute",top:24,right:24,background:"none",border:"none",color:h(C.mutFg),cursor:"pointer",zIndex:10}}><X size={22} /></motion.button>

//         {/* Header for steps 1-5 */}
//         {!done && step > 0 && (
//           <AnimatePresence mode="wait" custom={dir}>
//             <motion.div key={`t${step}`} custom={dir} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-15}} transition={{duration:0.35,ease:"easeOut"}}>
//               <motion.p style={{fontSize:12,fontWeight:600,letterSpacing:2,textTransform:"uppercase" as const,marginBottom:4,background:grad,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Step {step+1} of {N}</motion.p>
//               <h1 style={{fontFamily:"'Outfit',sans-serif",fontSize:28,fontWeight:700,color:h(C.fg),margin:"0 0 4px"}}>{ST[step]}</h1>
//               <p style={{color:h(C.mutFg),fontSize:13,marginBottom:28}}>{SS[step]}</p>
//             </motion.div>
//           </AnimatePresence>
//         )}

//         <AnimatePresence mode="wait" custom={dir}>
//           <motion.div key={step} custom={dir} variants={sv} initial="enter" animate="center" exit="exit" transition={{type:"spring",stiffness:200,damping:28}} style={{minHeight:step>=5?"auto":300,display:"flex",flexDirection:"column" as const,justifyContent:"center"}}>

//             {/* ═══ S0: CONTACT — Premium elegant ═══ */}
//             {step === 0 && (
//               <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} style={{ maxWidth:500, margin:"0 auto", display:"flex", flexDirection:"column" as const, gap:20, width:"100%", textAlign:"center" as const, position:"relative" as const }}>

//                 {/* ✦ ANIM 1: Ambient aurora background — smooth color-shifting glow */}
//                 <div style={{position:"absolute" as const,inset:"-60px -40px",pointerEvents:"none" as const,overflow:"hidden",borderRadius:30,zIndex:0}}>
//                   <motion.div
//                     animate={{
//                       background:[
//                         `radial-gradient(ellipse 80% 60% at 20% 20%, ${ha(C.pri,"0.08")}, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, ${ha(C.acc,"0.06")}, transparent 60%)`,
//                         `radial-gradient(ellipse 80% 60% at 50% 30%, ${ha(C.acc,"0.09")}, transparent 60%), radial-gradient(ellipse 60% 50% at 30% 70%, ${ha(C.pri,"0.07")}, transparent 60%)`,
//                         `radial-gradient(ellipse 80% 60% at 80% 50%, ${ha(C.pri,"0.07")}, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 40%, ${ha(C.acc,"0.08")}, transparent 60%)`,
//                         `radial-gradient(ellipse 80% 60% at 20% 20%, ${ha(C.pri,"0.08")}, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, ${ha(C.acc,"0.06")}, transparent 60%)`,
//                       ]
//                     }}
//                     transition={{duration:8,repeat:Infinity,ease:"easeInOut"}}
//                     style={{position:"absolute" as const,inset:0,filter:"blur(40px)"}} />
//                 </div>

//                 {/* Sparkle icon */}
//                 <motion.div initial={{scale:0,rotate:-180}} animate={{scale:1,rotate:0}} transition={{type:"spring",stiffness:160,damping:14,delay:0.1}} style={{position:"relative" as const,width:76,height:76,margin:"0 auto 4px",zIndex:1}}>
//                   {/* ✦ ANIM 2: Sonar pulse rings — 3 expanding rings */}
//                   {[0,1,2].map(i => (
//                     <motion.div key={`sonar${i}`}
//                       style={{position:"absolute",inset:-(12+i*12),borderRadius:24+i*4,border:`${1.5-i*0.4}px solid ${ha(i===1?C.acc:C.pri,`${0.3-i*0.08}`)}`}}
//                       animate={{scale:[1,1.3+i*0.05,1],opacity:[0.3-i*0.08,0,0.3-i*0.08]}}
//                       transition={{duration:2.5+i*0.5,repeat:Infinity,delay:i*0.6,ease:"easeOut"}} />
//                   ))}
//                   <motion.div
//                     animate={{boxShadow:[`0 0 30px ${ha(C.pri,"0.08")}`,`0 0 50px ${ha(C.pri,"0.18")}`,`0 0 30px ${ha(C.pri,"0.08")}`]}}
//                     transition={{duration:3,repeat:Infinity,ease:"easeInOut"}}
//                     style={{width:76,height:76,borderRadius:20,background:`linear-gradient(135deg,${ha(C.pri,"0.1")},${ha(C.acc,"0.06")})`,backdropFilter:"blur(20px)",border:`1px solid ${ha(C.pri,"0.25")}`,display:"flex",alignItems:"center",justifyContent:"center",position:"relative" as const}}>
//                     <motion.div animate={{rotate:[0,8,-8,0],scale:[1,1.1,1]}} transition={{duration:5,repeat:Infinity,ease:"easeInOut"}}>
//                       <Sparkles size={32} style={{color:h(C.pri),filter:`drop-shadow(0 0 10px ${ha(C.pri,"0.5")})`}} />
//                     </motion.div>
//                   </motion.div>
//                 </motion.div>

//                 {/* Title */}
//                 <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.25,duration:0.5}} style={{zIndex:1}}>
//                   <p style={{color:h(C.mutFg),fontSize:15,margin:0}}>Start your journey {"\u2014"} just a few details to get going</p>
//                 </motion.div>

//                 {/* ✦ ANIM 3: Trust badges — cascading entrance with gentle hover float */}
//                 <motion.div style={{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap" as const,zIndex:1}}>
//                   {TRUST.map((t,i) => { const I=t.icon; return (
//                     <motion.div key={t.label}
//                       initial={{opacity:0,y:20,scale:0.85}}
//                       animate={{opacity:1,y:0,scale:1}}
//                       transition={{delay:0.35+i*0.1,type:"spring",stiffness:300,damping:20}}
//                       whileHover={{y:-3,boxShadow:`0 8px 25px ${ha(C.pri,"0.12")}`,borderColor:ha(C.pri,"0.3")}}
//                       style={{display:"flex",alignItems:"center",gap:6,fontSize:12,color:h(C.mutFg),padding:"8px 16px",borderRadius:50,border:`1px solid ${ha(C.bdr,"0.35")}`,background:ha(C.card,"0.25"),backdropFilter:"blur(16px)",cursor:"default",transition:"border-color 0.3s, box-shadow 0.3s"}}>
//                       <I size={14} style={{color:ha(C.pri,"0.7")}} />
//                       {t.label}
//                     </motion.div>
//                   ); })}
//                 </motion.div>

//                 {/* ✦ ANIM 4: Form fields — staggered cascade with focus glow effects */}
//                 {/* Name */}
//                 <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.45,type:"spring",stiffness:200,damping:22}} style={{textAlign:"left" as const,zIndex:1}}>
//                   <label style={{fontSize:13,fontWeight:500,color:h(C.mutFg),display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
//                     <User size={15} style={{color:nv?h(C.pri):h(C.mutFg),transition:"color 0.3s"}} />
//                     Full Name <span style={{color:h(C.pri)}}>*</span>
//                     {nv && <motion.span initial={{scale:0,x:8}} animate={{scale:1,x:0}} transition={{type:"spring",stiffness:500,damping:15}} style={{marginLeft:"auto",fontSize:12,color:h(C.pri),fontWeight:600}}>{"\u2713"}</motion.span>}
//                   </label>
//                   <div style={{position:"relative" as const,borderRadius:14,overflow:"hidden"}}>
//                     <input type="text" placeholder="What should we call you?" value={contact.name} onChange={e=>setContact(p=>({...p,name:e.target.value}))} onBlur={()=>touch("name")} style={nameErr?errGlass:glass} onFocus={oF} data-err={nameErr?"1":"0"} />
//                     {nv && <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{type:"spring",stiffness:200,damping:25}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:grad,transformOrigin:"left",boxShadow:`0 0 12px ${ha(C.pri,"0.3")}`}} />}
//                   </div>
//                   <Err msg={nameErr} />
//                 </motion.div>

//                 {/* Email */}
//                 <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.55,type:"spring",stiffness:200,damping:22}} style={{textAlign:"left" as const,zIndex:1}}>
//                   <label style={{fontSize:13,fontWeight:500,color:h(C.mutFg),display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
//                     <Mail size={15} style={{color:contact.email&&ev?h(C.pri):h(C.mutFg),transition:"color 0.3s"}} />
//                     Email Address <span style={{fontSize:11,color:ha(C.mutFg,"0.5")}}>(optional)</span>
//                     {contact.email && ev && <motion.span initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:500,damping:15}} style={{marginLeft:"auto",fontSize:12,color:h(C.pri),fontWeight:600}}>{"\u2713"}</motion.span>}
//                   </label>
//                   <div style={{position:"relative" as const,borderRadius:14,overflow:"hidden"}}>
//                     <input type="email" placeholder="you@company.com" value={contact.email} onChange={e=>setContact(p=>({...p,email:e.target.value}))} onBlur={()=>touch("email")} style={emailErr?errGlass:glass} onFocus={oF} data-err={emailErr?"1":"0"} />
//                     {contact.email && ev && <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{type:"spring",stiffness:200,damping:25}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${h(C.acc)},${h(C.pri)})`,transformOrigin:"left",boxShadow:`0 0 12px ${ha(C.acc,"0.3")}`}} />}
//                   </div>
//                   <Err msg={emailErr} />
//                 </motion.div>

//                 {/* Phone */}
//                 <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.65,type:"spring",stiffness:200,damping:22}} style={{textAlign:"left" as const,zIndex:1}}>
//                   <label style={{fontSize:13,fontWeight:500,color:h(C.mutFg),display:"flex",alignItems:"center",gap:6,marginBottom:6}}>
//                     <Phone size={15} style={{color:pv?h(C.pri):h(C.mutFg),transition:"color 0.3s"}} />
//                     Phone Number <span style={{color:h(C.pri)}}>*</span>
//                     {pv && <motion.span initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:500,damping:15}} style={{marginLeft:"auto",fontSize:12,color:h(C.pri),fontWeight:600}}>{"\u2713"}</motion.span>}
//                   </label>
//                   <div style={{display:"flex",alignItems:"stretch",borderRadius:14,border:`1px solid ${phoneErr?h(C.err):ha(C.bdr,"0.35")}`,background:ha(C.card,"0.3"),backdropFilter:"blur(18px)",overflow:"visible",position:"relative" as const,transition:"all 0.3s ease-in-out",boxShadow:phoneErr?`0 0 12px ${ha(C.err,"0.15")}`:`inset 0 1px 0 ${ha("0 0% 100%","0.05")}, 0 4px 20px -6px rgba(0,0,0,0.15)`}}>
//                     <div style={{position:"relative" as const,flexShrink:0}}>
//                       <button type="button" onClick={()=>setCcOpen(!ccOpen)} style={{display:"flex",alignItems:"center",gap:6,padding:"0 14px",height:"100%",background:"transparent",border:"none",borderRight:`1px solid ${ha(C.bdr,"0.3")}`,color:h(C.fg),fontSize:15,cursor:"pointer",fontFamily:"'Inter',sans-serif"}}>
//                         <span style={{fontSize:17,lineHeight:1}}>{CCODES.find(c=>c.code===contact.cc)?.flag}</span>
//                         <span style={{fontWeight:600}}>{contact.cc}</span>
//                         <motion.div animate={{rotate:ccOpen?180:0}} transition={{duration:0.2}}>
//                           <ChevronDown size={12} style={{color:h(C.mutFg)}} />
//                         </motion.div>
//                       </button>
//                       <AnimatePresence>
//                         {ccOpen && (
//                           <motion.div initial={{opacity:0,y:-10,scale:0.92}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-10,scale:0.92}} transition={{type:"spring",stiffness:400,damping:25}}
//                             style={{position:"absolute" as const,top:"calc(100% + 8px)",left:0,background:ha(C.card,"0.95"),backdropFilter:"blur(24px)",border:`1px solid ${ha(C.bdr,"0.4")}`,borderRadius:14,zIndex:100,boxShadow:`0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 ${ha("0 0% 100%","0.05")}`,overflow:"hidden",minWidth:155,maxHeight:260,overflowY:"auto" as const}}>
//                             {CCODES.map(c => (
//                               <motion.button key={c.code} type="button" whileHover={{backgroundColor:ha(C.mut,"0.5"),x:3}} onClick={()=>{setContact(p=>({...p,cc:c.code}));setCcOpen(false);}}
//                                 style={{display:"flex",alignItems:"center",gap:10,width:"100%",padding:"10px 16px",background:contact.cc===c.code?ha(C.pri,"0.08"):"transparent",border:"none",color:contact.cc===c.code?h(C.pri):h(C.fg),fontSize:14,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all 0.15s"}}>
//                                 <span style={{fontSize:17}}>{c.flag}</span><span style={{fontWeight:500}}>{c.code}</span>
//                                 {contact.cc===c.code && <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring"}}><Check size={14} style={{marginLeft:"auto",color:h(C.pri)}} /></motion.div>}
//                               </motion.button>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                     <input type="tel" placeholder="98765 43210" value={contact.phone} onChange={e=>setContact(p=>({...p,phone:e.target.value.replace(/[^0-9]/g,"")}))} onBlur={()=>touch("phone")} style={{flex:1,padding:"16px 18px",background:"transparent",border:"none",color:h(C.fg),fontSize:16,fontWeight:600,letterSpacing:1,outline:"none",fontFamily:"'Inter',sans-serif"}} />
//                     {pv && <motion.div initial={{scaleX:0}} animate={{scaleX:1}} transition={{type:"spring",stiffness:200,damping:25}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:grad,transformOrigin:"left",boxShadow:`0 0 12px ${ha(C.pri,"0.3")}`}} />}
//                   </div>
//                   <Err msg={phoneErr} />
//                 </motion.div>

//                 {/* ✦ ANIM 5: Response banner + Talk to expert — unified elegant bottom */}
//                 <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.75,type:"spring",stiffness:180,damping:20}} style={{zIndex:1}}>
//                   <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 18px",borderRadius:14,border:`1px solid ${ha(C.pri,"0.1")}`,background:`linear-gradient(135deg,${ha(C.pri,"0.03")},${ha(C.acc,"0.02")})`,backdropFilter:"blur(12px)",marginBottom:12,position:"relative" as const,overflow:"hidden"}}>
//                     {/* Shimmer sweep */}
//                     <motion.div style={{position:"absolute" as const,top:0,left:"-100%",width:"40%",height:"100%",background:`linear-gradient(90deg,transparent,${ha("0 0% 100%","0.06")},transparent)`,pointerEvents:"none" as const}} animate={{left:["-40%","140%"]}} transition={{duration:4,repeat:Infinity,ease:"linear",repeatDelay:3}} />
//                     <ArrowRight size={15} style={{color:h(C.pri),flexShrink:0}} />
//                     <p style={{fontSize:13,color:h(C.mutFg),margin:0}}>We respond within <span style={{color:h(C.pri),fontWeight:600}}>24 hours</span> {"\u2014"} your data is 100% secure</p>
//                   </div>
//                   <div style={{display:"flex",justifyContent:"center"}}>
//                     <motion.a href="https://api.whatsapp.com/message/H5VADFWLMPYIM1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer"
//                       whileHover={{y:-2,boxShadow:`0 6px 20px ${ha(C.pri,"0.1")}`,borderColor:ha(C.pri,"0.3")}}
//                       whileTap={{scale:0.96}}
//                       style={{display:"flex",alignItems:"center",gap:7,fontSize:13,color:h(C.mutFg),textDecoration:"none",padding:"9px 20px",borderRadius:50,border:`1px solid ${ha(C.bdr,"0.3")}`,background:ha(C.card,"0.2"),backdropFilter:"blur(10px)",transition:"all 0.3s"}}>
//                       <MessageSquare size={14} style={{color:ha(C.pri,"0.6")}} /> Need help? Talk to an expert
//                     </motion.a>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}

//             {/* ═══ S1: Service ═══ */}
//             {step===1 && (
//               <div>
//                 <motion.p initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} style={{textAlign:"center" as const,fontSize:13,color:h(C.mutFg),marginBottom:16}}>{"\u00B7"} <motion.span key={svc.length} initial={{scale:1.4}} animate={{scale:1}} style={{color:h(C.pri),fontWeight:700}}>{svc.length}</motion.span> selected</motion.p>
//                 <motion.div variants={stag(0.05)} initial="hidden" animate="show" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
//                   {SERVICES.map(s=>{ const I=s.icon; const sel=svc.includes(s.id); return (
//                     <motion.button key={s.id} variants={svcV} whileHover={{scale:1.03,y:-2}} whileTap={{scale:0.96}} onClick={()=>tog(svc,setSvc,s.id)}
//                       style={{...gc(sel,s.color),padding:"16px 18px",display:"flex",alignItems:"center",gap:14,textAlign:"left" as const,cursor:"pointer",position:"relative" as const,overflow:"hidden",transition:"all 0.3s ease-in-out"}}>
//                       {sel && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{position:"absolute" as const,inset:0,borderRadius:16,background:`radial-gradient(circle at 20% 50%,${ha(s.color,"0.1")},transparent 60%)`}} />}
//                       <I size={22} style={{color:sel?h(s.color):h(C.mutFg),transition:"color 0.3s",position:"relative" as const,zIndex:1}} />
//                       <span style={{fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:14,color:sel?h(C.fg):ha(C.fg,"0.7"),position:"relative" as const,zIndex:1}}>{s.label}</span>
//                       {sel && <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:500,damping:20}} style={{marginLeft:"auto",width:20,height:20,borderRadius:"50%",background:h(s.color),display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,flexShrink:0}}><Check size={12} color={h(C.bg)} /></motion.div>}
//                       {sel && <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${ha(s.color,"0.6")},transparent)`}} />}
//                     </motion.button>
//                   );})}
//                 </motion.div>
//               </div>
//             )}

//             {/* ═══ S2: Platform ═══ */}
//             {step===2 && (
//               <div>
//                 <motion.p initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} style={{textAlign:"center" as const,fontSize:13,color:h(C.mutFg),marginBottom:16}}>Select all that apply {"\u00B7"} <motion.span key={plat.length} initial={{scale:1.4}} animate={{scale:1}} style={{color:h(C.pri),fontWeight:700}}>{plat.length}</motion.span> selected</motion.p>
//                 <motion.div variants={stag(0.07)} initial="hidden" animate="show" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:14}}>
//                   {PLATFORMS.map(p=>{ const I=p.icon; const sel=plat.includes(p.id); return (
//                     <motion.button key={p.id} variants={platV} whileHover={{scale:1.03,y:-3}} whileTap={{scale:0.95}} onClick={()=>tog(plat,setPlat,p.id)}
//                       style={{...gc(sel,p.color),padding:"22px 18px",textAlign:"left" as const,position:"relative" as const,overflow:"hidden",cursor:"pointer",transition:"all 0.3s ease-in-out"}}>
//                       {sel && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{position:"absolute" as const,inset:0,borderRadius:16,background:`radial-gradient(circle at 30% 30%,${ha(p.color,"0.1")},transparent 60%)`}} />}
//                       {sel && <motion.div initial={{scale:0,rotate:-180}} animate={{scale:1,rotate:0}} transition={{type:"spring",stiffness:500,damping:20}} style={{position:"absolute" as const,top:10,right:10,width:22,height:22,borderRadius:"50%",background:h(p.color),display:"flex",alignItems:"center",justifyContent:"center",zIndex:10}}><Check size={13} color={h(C.bg)} /></motion.div>}
//                       <I size={28} style={{marginBottom:10,color:sel?h(p.color):h(C.mutFg),transition:"color 0.3s",position:"relative" as const,zIndex:1}} />
//                       <div style={{fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:14,color:h(C.fg),position:"relative" as const,zIndex:1}}>{p.label}</div>
//                       <div style={{fontSize:12,color:h(C.mutFg),marginTop:3,position:"relative" as const,zIndex:1}}>{p.desc}</div>
//                       {sel && <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${ha(p.color,"0.6")},transparent)`}} />}
//                     </motion.button>
//                   );})}
//                 </motion.div>
//               </div>
//             )}

//             {/* ═══ S3: Features ═══ */}
//             {step===3 && (
//               <div>
//                 <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} style={{textAlign:"center" as const,marginBottom:16}}>
//                   <p style={{fontSize:13,color:h(C.mutFg),marginBottom:8}}>Based on your selections {"\u00B7"} <motion.span key={feat.length} initial={{scale:1.6}} animate={{scale:1}} style={{color:h(C.pri),fontWeight:700}}>{feat.length}</motion.span> selected</p>
//                   <div style={{maxWidth:220,margin:"0 auto",height:5,borderRadius:5,background:ha(C.mut,"0.3"),overflow:"hidden"}}>
//                     <motion.div initial={{width:0}} animate={{width:`${Math.min((feat.length/dynamicFeatures.length)*100,100)}%`}} transition={{type:"spring",stiffness:180,damping:25}} style={{height:"100%",borderRadius:5,background:`linear-gradient(90deg,${h(C.pri)},${h(C.acc)})`}} />
//                   </div>
//                 </motion.div>
//                 <motion.div variants={stag(0.04)} initial="hidden" animate="show" style={{display:"flex",flexWrap:"wrap" as const,gap:10,justifyContent:"center"}}>
//                   {dynamicFeatures.map(f=>{ const I=f.icon; const sel=feat.includes(f.id); return (
//                     <motion.button key={f.id} variants={featV} whileHover={{scale:1.06,y:-2}} whileTap={{scale:0.92}} onClick={()=>tog(feat,setFeat,f.id)} layout
//                       style={{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:50,fontSize:13,fontWeight:500,cursor:"pointer",transition:"all 0.3s ease-in-out",
//                         ...(sel?{border:`2px solid ${ha(f.color,"0.5")}`,background:ha(f.color,"0.1"),color:h(f.color),boxShadow:`0 0 20px ${ha(f.color,"0.15")}`}:{border:`1px solid ${ha(C.bdr,"0.4")}`,background:ha(C.card,"0.5"),color:h(C.mutFg)})}}>
//                       <I size={15} /><span>{f.label}</span>
//                       {sel && <motion.div initial={{scale:0,rotate:-90}} animate={{scale:1,rotate:0}} transition={{type:"spring",stiffness:500,damping:20}}><Check size={13} /></motion.div>}
//                     </motion.button>
//                   );})}
//                 </motion.div>
//               </div>
//             )}

//             {/* ═══ S4: Budget ═══ */}
//             {step===4 && (
//               <div>
//                 <motion.p initial={{opacity:0}} animate={{opacity:1}} style={{textAlign:"center" as const,fontSize:13,color:h(C.mutFg),marginBottom:16}}>Choose the range {"\u00B7"} {budget?<motion.span key={budget} initial={{scale:1.4}} animate={{scale:1}} style={{color:h(C.pri),fontWeight:700}}>{BUDGETS.find(b=>b.id===budget)?.label}</motion.span>:<span style={{color:ha(C.mutFg,"0.5")}}>none</span>}</motion.p>
//                 <motion.div variants={stag(0.06)} initial="hidden" animate="show" style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))",gap:14}}>
//                   {BUDGETS.map(b=>{ const sel=budget===b.id; return (
//                     <motion.button key={b.id} variants={budgV} whileHover={{scale:1.03,y:-3}} whileTap={{scale:0.95}} onClick={()=>setBudget(b.id)}
//                       style={{...gc(sel,b.color),padding:"20px 18px",textAlign:"left" as const,position:"relative" as const,overflow:"hidden",cursor:"pointer",transition:"all 0.3s ease-in-out"}}>
//                       {sel && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{position:"absolute" as const,inset:0,borderRadius:16,background:`radial-gradient(circle at 50% 0%,${ha(b.color,"0.12")},transparent 70%)`}} />}
//                       {sel && <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:500,damping:20}} style={{position:"absolute" as const,top:10,right:10,width:22,height:22,borderRadius:"50%",background:h(b.color),display:"flex",alignItems:"center",justifyContent:"center",zIndex:10}}><Check size={13} color={h(C.bg)} /></motion.div>}
//                       <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:6,position:"relative" as const,zIndex:1}}>
//                         {b.tier>0?Array.from({length:Math.min(b.tier,3)}).map((_,i)=><IndianRupee key={i} size={14} style={{color:sel?h(b.color):h(C.mutFg)}} />):<Sparkles size={18} style={{color:sel?h(b.color):h(C.mutFg)}} />}
//                         {b.tier>3 && <TrendingUp size={14} style={{color:sel?h(b.color):h(C.mutFg)}} />}
//                       </div>
//                       <div style={{fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:14,color:h(C.fg),position:"relative" as const,zIndex:1}}>{b.label}</div>
//                       <div style={{fontSize:12,color:h(C.mutFg),marginTop:2,position:"relative" as const,zIndex:1}}>{b.desc}</div>
//                       {sel && <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}} style={{position:"absolute" as const,bottom:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${ha(b.color,"0.6")},transparent)`}} />}
//                     </motion.button>
//                   );})}
//                 </motion.div>
//               </div>
//             )}

//             {/* ═══ S5: Timeline — vertical, compact ═══ */}
//             {step===5 && (
//               <div style={{maxWidth:480,margin:"0 auto",width:"100%"}}>
//                 <motion.div variants={stag(0.05)} initial="hidden" animate="show" style={{display:"flex",flexDirection:"column" as const,gap:8}}>
//                   {TIMELINES.map(t=>{ const I=t.icon; const sel=tl===t.id; return (
//                     <motion.button key={t.id} variants={timeV} whileHover={{scale:1.02,x:4}} whileTap={{scale:0.97}} onClick={()=>setTl(t.id)}
//                       style={{...gc(sel,t.color),padding:"12px 16px",display:"flex",alignItems:"center",gap:12,textAlign:"left" as const,position:"relative" as const,overflow:"hidden",cursor:"pointer",width:"100%",transition:"all 0.3s ease-in-out"}}>
//                       {sel && <motion.div initial={{opacity:0}} animate={{opacity:1}} style={{position:"absolute" as const,inset:0,borderRadius:16,background:`radial-gradient(circle at 0% 50%,${ha(t.color,"0.08")},transparent 50%)`}} />}
//                       {sel && <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:500,damping:20}} style={{position:"absolute" as const,top:8,right:10,width:18,height:18,borderRadius:"50%",background:h(t.color),display:"flex",alignItems:"center",justifyContent:"center",zIndex:10}}><Check size={11} color={h(C.bg)} /></motion.div>}
//                       <motion.div animate={sel?{rotate:360}:{rotate:0}} transition={{duration:0.6,ease:"easeInOut"}} style={{position:"relative" as const,zIndex:1}}>
//                         <I size={18} style={{color:sel?h(t.color):h(C.mutFg),transition:"color 0.3s"}} />
//                       </motion.div>
//                       <div style={{position:"relative" as const,zIndex:1}}>
//                         <span style={{fontFamily:"'Outfit',sans-serif",fontWeight:600,fontSize:13,color:h(C.fg)}}>{t.label}</span>
//                         <span style={{fontSize:12,color:h(C.mutFg),marginLeft:8}}>{t.desc}</span>
//                       </div>
//                     </motion.button>
//                   );})}
//                 </motion.div>
//               </div>
//             )}

//             {/* ═══ Success ═══ */}
//             {done && (
//               <motion.div initial={{opacity:0,scale:0.92}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:180,damping:22}} style={{textAlign:"center" as const,maxWidth:480,margin:"0 auto",padding:"40px 0"}}>
//                 <div style={{position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:32}}>
//                   <motion.div style={{position:"absolute",width:100,height:100,borderRadius:"50%",border:`1px solid ${ha(C.pri,"0.2")}`}} animate={{scale:[1,1.3,1],opacity:[0.3,0,0.3]}} transition={{duration:2.5,repeat:Infinity}} />
//                   <motion.div style={{position:"absolute",width:88,height:88,borderRadius:"50%",border:`1px solid ${ha(C.acc,"0.3")}`}} animate={{scale:[1,1.2,1],opacity:[0.5,0,0.5]}} transition={{duration:2,repeat:Infinity,delay:0.3}} />
//                   <motion.div initial={{scale:0,rotate:-180}} animate={{scale:1,rotate:0}} transition={{delay:0.2,type:"spring",stiffness:200,damping:15}} style={{width:72,height:72,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",background:`linear-gradient(135deg,${ha(C.pri,"0.2")},${ha(C.acc,"0.2")})`}}><CheckCircle2 size={36} style={{color:h(C.pri)}} /></motion.div>
//                   <motion.div style={{position:"absolute",top:-8,right:-8}} initial={{scale:0}} animate={{scale:1,y:[0,-5,0],rotate:[0,15,0]}} transition={{delay:0.5,duration:3,repeat:Infinity}}><PartyPopper size={18} style={{color:ha(C.acc,"0.6")}} /></motion.div>
//                   <motion.div style={{position:"absolute",bottom:-4,left:-10}} initial={{scale:0}} animate={{scale:1,y:[0,5,0]}} transition={{delay:0.7,duration:3.5,repeat:Infinity}}><Sparkles size={15} style={{color:ha(C.pri,"0.5")}} /></motion.div>
//                 </div>
//                 <motion.h2 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} style={{fontFamily:"'Outfit',sans-serif",fontSize:30,fontWeight:700,color:h(C.fg),marginBottom:12}}>
//                   Thank You, {contact.name.trim().split(" ")[0]}!
//                 </motion.h2>
//                 <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}} style={{color:h(C.mutFg),fontSize:15,lineHeight:1.6}}>
//                   Our team at <span style={{color:h(C.pri),fontWeight:600}}>mTouchLabs</span> will contact you within 24 hours.
//                 </motion.p>
//               </motion.div>
//             )}

//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation */}
//         {!done && (
//           <motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:0.3}} style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:step===5?16:36}}>
//             <motion.button whileHover={{x:-3,scale:1.03}} whileTap={{scale:0.95}} onClick={back} disabled={step===0}
//               style={{display:"flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:12,fontWeight:600,fontSize:14,cursor:step===0?"not-allowed":"pointer",opacity:step===0?0.3:1,background:"transparent",border:`1px solid ${h(C.bdr)}`,color:h(C.mutFg),transition:"all 0.3s",fontFamily:"'Inter',sans-serif"}}>
//               <ArrowLeft size={16} /> Back
//             </motion.button>
//             <motion.button whileHover={{x:3,scale:1.03}} whileTap={{scale:0.95}} onClick={next} disabled={!ok()||sending}
//               style={{display:"flex",alignItems:"center",gap:8,padding:"14px 28px",borderRadius:12,fontWeight:600,fontSize:14,cursor:ok()&&!sending?"pointer":"not-allowed",opacity:ok()&&!sending?1:0.4,background:`linear-gradient(135deg,${h(C.pri)},hsl(220 80% 55%))`,color:h(C.bg),border:"none",boxShadow:`0 4px 15px ${ha(C.pri,"0.12")}`,transition:"all 0.3s",fontFamily:"'Inter',sans-serif"}}>
//               {sending?"Sending...":step===N-1?"Submit":"Continue"} <ArrowRight size={16} />
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }
