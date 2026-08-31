import type { ReactNode } from "react";
import Link from "next/link";

/* ════════════════════════════════════════════════════════════
   LocationKit — shared design system for every location page.
   ────────────────────────────────────────────────────────────
   One copy of the icons, the card primitives and the stylesheet,
   imported by each state page. Content lives in the pages; this
   file holds nothing that is specific to a state.
   ════════════════════════════════════════════════════════════ */

const ICONS = {
  activity: <><path d="M22 12h-4l-3 9-6-18-3 9H2" /></>,
  award: <><circle cx="12" cy="9" r="6" /><path d="M8.6 14.2 7.4 22 12 19.4 16.6 22l-1.2-7.8" /></>,
  barChart: <><path d="M6 20v-6M12 20V5M18 20v-9" /><path d="M3 20.5h18" /></>,
  book: <><path d="M2.5 4h5.5a3.5 3.5 0 0 1 3.5 3.5V20a3 3 0 0 0-3-2.4H2.5Z" /><path d="M21.5 4H16a3.5 3.5 0 0 0-3.5 3.5V20a3 3 0 0 1 3-2.4h6Z" /></>,
  briefcase: <><rect x="2.5" y="7" width="19" height="13.5" rx="2.2" /><path d="M15.5 20.5V5.6a1.6 1.6 0 0 0-1.6-1.6h-3.8A1.6 1.6 0 0 0 8.5 5.6v14.9" /><path d="M2.5 12.2h19" /></>,
  building: <><path d="M3 21V5.5A1.5 1.5 0 0 1 4.5 4h7A1.5 1.5 0 0 1 13 5.5V21" /><path d="M13 10h6.5A1.5 1.5 0 0 1 21 11.5V21" /><path d="M2 21h20" /><path d="M6.5 8h3M6.5 12h3M6.5 16h3M16.5 14h1.5M16.5 17.5h1.5" /></>,
  cart: <><circle cx="9.5" cy="20" r="1.4" /><circle cx="18.5" cy="20" r="1.4" /><path d="M2 3h2.6l2.5 12.1a1.7 1.7 0 0 0 1.7 1.4h8.9a1.7 1.7 0 0 0 1.7-1.4L21.5 7H6" /></>,
  check: <><path d="M20 6.5 9.5 17 4 11.5" /></>,
  checkSquare: <><path d="m9 12 2.5 2.5L17 9" /><path d="M20.5 12.5V19a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  clipboard: <><path d="M15.5 4.5H18a2 2 0 0 1 2 2V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2h2.5" /><rect x="8.5" y="2.5" width="7" height="4" rx="1.4" /><path d="M8.5 12h7M8.5 16h4.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 6.8V12l3.4 2" /></>,
  cloud: <><path d="M17.4 19H7a4.5 4.5 0 0 1-.9-8.9 6 6 0 0 1 11.5-.5 4.75 4.75 0 0 1-.2 9.4Z" /></>,
  code: <><path d="m8 6-6 6 6 6" /><path d="m16 6 6 6-6 6" /><path d="M14 3.8 10 20.2" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.6 8.4-2 5.2-5.2 2 2-5.2Z" /></>,
  cpu: <><rect x="6.5" y="6.5" width="11" height="11" rx="2.5" /><rect x="10" y="10" width="4" height="4" rx="1" /><path d="M10 3v3.5M14 3v3.5M10 17.5V21M14 17.5V21M3 10h3.5M3 14h3.5M17.5 10H21M17.5 14H21" /></>,
  creditCard: <><rect x="2" y="4.5" width="20" height="15" rx="2.5" /><path d="M2 9.5h20" /><path d="M6 15h3" /></>,
  database: <><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" /><path d="M20 12c0 1.66-3.58 3-8 3s-8-1.34-8-3" /></>,
  dollar: <><path d="M12 2.5v19" /><path d="M16.8 6.2H9.6a3.4 3.4 0 0 0 0 6.8h4.8a3.4 3.4 0 0 1 0 6.8H6.6" /></>,
  edit: <><path d="M12.5 20.5h9" /><path d="M16.8 3.3a2.15 2.15 0 0 1 3 3L7.5 18.6l-4 1 1-4Z" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3.2" /></>,
  factory: <><path d="M2.5 20.5V9.6l6 3.9V9.6l6 3.9V4.5h6.9v16Z" /><path d="M2 20.5h20" /><path d="M17.5 8.5v3M17.5 15v2.5" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14.5 14.5 0 0 1 3.8 9A14.5 14.5 0 0 1 12 21a14.5 14.5 0 0 1-3.8-9A14.5 14.5 0 0 1 12 3Z" /></>,
  grid: <><rect x="3.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="3.5" width="7" height="7" rx="1.6" /><rect x="3.5" y="13.5" width="7" height="7" rx="1.6" /><rect x="13.5" y="13.5" width="7" height="7" rx="1.6" /></>,
  headphones: <><path d="M3.5 17.5V12a8.5 8.5 0 0 1 17 0v5.5" /><path d="M20.5 18.5a2 2 0 0 1-2 2h-.5a1.8 1.8 0 0 1-1.8-1.8v-3a1.8 1.8 0 0 1 1.8-1.8h2.5Z" /><path d="M3.5 18.5a2 2 0 0 0 2 2H6a1.8 1.8 0 0 0 1.8-1.8v-3A1.8 1.8 0 0 0 6 13.9H3.5Z" /></>,
  home: <><path d="M3.5 9.8 12 3l8.5 6.8V20a1.6 1.6 0 0 1-1.6 1.6H5.1A1.6 1.6 0 0 1 3.5 20Z" /><path d="M9.5 21.6v-7h5v7" /></>,
  infinity: <><path d="M7.5 8.6a3.4 3.4 0 1 0 0 6.8c2.3 0 3.1-1.9 4.5-3.4s2.2-3.4 4.5-3.4a3.4 3.4 0 1 1 0 6.8c-2.3 0-3.1-1.9-4.5-3.4S9.8 8.6 7.5 8.6Z" /></>,
  landmark: <><path d="M3.2 9.8 12 4.5l8.8 5.3" /><path d="M5.8 11v7M9.9 11v7M14.1 11v7M18.2 11v7" /><path d="M3 21h18" /></>,
  layout: <><rect x="3" y="3.5" width="18" height="17" rx="2.4" /><path d="M3 9.2h18" /><path d="M9.2 9.2v11.3" /></>,
  link: <><path d="M10 13.4a4.4 4.4 0 0 0 6.6.5l2.6-2.6a4.4 4.4 0 0 0-6.2-6.2l-1.5 1.5" /><path d="M14 10.6a4.4 4.4 0 0 0-6.6-.5l-2.6 2.6a4.4 4.4 0 0 0 6.2 6.2l1.5-1.5" /></>,
  lock: <><rect x="4" y="10.5" width="16" height="10.5" rx="2.4" /><path d="M7.8 10.5V7.6a4.2 4.2 0 0 1 8.4 0v2.9" /></>,
  bulb: <><path d="M9.2 18h5.6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 1 3.6 10.8c-.5.4-.8 1-.8 1.6v.6H9.2v-.6c0-.6-.3-1.2-.8-1.6A6 6 0 0 1 12 3Z" /></>,
  mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="2.4" /><path d="m3.5 6.5 8.5 6 8.5-6" /></>,
  mapPin: <><path d="M20 10.4c0 6-8 11.6-8 11.6s-8-5.6-8-11.6a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10.2" r="2.8" /></>,
  message: <><path d="M20.5 11.6a8 8 0 0 1-11.6 7.2L3.5 20.5l1.7-5.4A8 8 0 1 1 20.5 11.6Z" /></>,
  monitor: <><rect x="2.5" y="3.5" width="19" height="13" rx="2.4" /><path d="M8.5 20.5h7M12 16.5v4" /></>,
  package: <><path d="M20.5 15.8V8.2a2 2 0 0 0-1-1.73l-6.5-3.7a2 2 0 0 0-2 0l-6.5 3.7a2 2 0 0 0-1 1.73v7.6a2 2 0 0 0 1 1.73l6.5 3.7a2 2 0 0 0 2 0l6.5-3.7a2 2 0 0 0 1-1.73Z" /><path d="m3.8 7.2 8.2 4.7 8.2-4.7" /><path d="M12 21.4v-9.5" /></>,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2.6" /><path d="M10.5 18.4h3" /></>,
  phoneCall: <><path d="M21 16.9v2.6a2 2 0 0 1-2.2 2 19.4 19.4 0 0 1-8.5-3A19.1 19.1 0 0 1 4.4 13a19.4 19.4 0 0 1-3-8.5A2 2 0 0 1 3.4 2.3H6a2 2 0 0 1 2 1.7 12.5 12.5 0 0 0 .7 2.8 2 2 0 0 1-.5 2.1L7.1 10a15.7 15.7 0 0 0 5.9 5.9l1.1-1.1a2 2 0 0 1 2.1-.5 12.5 12.5 0 0 0 2.8.7 2 2 0 0 1 1.7 2Z" /></>,
  refresh: <><path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" /><path d="M20.5 3.5V9.5H14.5" /></>,
  repeat: <><path d="m16.8 2.5 3.7 3.6-3.7 3.6" /><path d="M3.5 12v-1.9a4 4 0 0 1 4-4h13" /><path d="m7.2 21.5-3.7-3.6 3.7-3.6" /><path d="M20.5 12v1.9a4 4 0 0 1-4 4h-13" /></>,
  rocket: <><path d="M12 2.5c2.8 2.2 4.2 5.4 4.2 8.8L14 15.4h-4L7.8 11.3c0-3.4 1.4-6.6 4.2-8.8Z" /><circle cx="12" cy="9.8" r="1.7" /><path d="M9.6 15.7 7.5 21l4.5-2.2L16.5 21l-2.1-5.3" /></>,
  send: <><path d="M21.5 2.5 11 13" /><path d="M21.5 2.5 14.8 21.5 11 13 2.5 9.2Z" /></>,
  server: <><rect x="2.5" y="3" width="19" height="7.5" rx="2.2" /><rect x="2.5" y="13.5" width="19" height="7.5" rx="2.2" /><path d="M6.5 6.7h.01M6.5 17.2h.01" /><path d="M11 6.7h6M11 17.2h6" /></>,
  settings: <><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" /></>,
  shield: <><path d="M12 21.5s7.5-3.6 7.5-9.4V5.6L12 2.6 4.5 5.6v6.5c0 5.8 7.5 9.4 7.5 9.4Z" /></>,
  sparkles: <><path d="m12 3 1.7 4.6L18.3 9l-4.6 1.7L12 15.3l-1.7-4.6L5.7 9l4.6-1.4Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" /></>,
  target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.8" /><circle cx="12" cy="12" r="1.4" /></>,
  tool: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94Z" /></>,
  trendingUp: <><path d="M22 7 13.5 15.5 9 11l-7 7" /><path d="M16.5 7H22v5.5" /></>,
  truck: <><path d="M2.5 5.5h11v11h-11z" /><path d="M13.5 9h3.4l3.1 3v4.5h-6.5Z" /><circle cx="7" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></>,
  users: <><path d="M16.5 20.5v-1.8a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1.8" /><circle cx="9.2" cy="7.5" r="3.8" /><path d="M22 20.5v-1.8a4 4 0 0 0-3-3.85" /><path d="M15.5 3.9a4 4 0 0 1 0 7.4" /></>,
  scale: <><path d="M12 3v18" /><path d="M5 7h14" /><path d="M7.5 7 4 14.5h7Z" /><path d="M16.5 7 13 14.5h7Z" /><path d="M8 21h8" /></>,
  train: <><rect x="5" y="3" width="14" height="13" rx="3" /><path d="M5 10h14" /><path d="m4 21 2.5-3M20 21l-2.5-3" /><path d="M9 13h.01M15 13h.01" /></>,
  zap: <><path d="M13 2.5 4.5 13.4H11l-1 8.1 8.5-10.9H12Z" /></>,
};
export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg className="loc-icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {ICONS[name]}
    </svg>
  );
}

export const LOC_CSS = `
/* Palette comes entirely from brand.css. --a1 is Heritage Navy so filled
   elements clear WCAG AA on white text; --a2 is Signature Blue for accents. */
.loc-page{--ink:var(--color-carbon-black,#0D1117);--ink-soft:var(--color-text,#222222);--ink-faint:var(--color-slate-grey,#777777);--bg:var(--color-white,#FFFFFF);--bg-alt:rgba(62,140,251,.05);--line:rgba(62,140,251,.22);--a1:var(--color-signature-blue,#3E8CFB);--a2:var(--color-signature-blue,#3E8CFB);--grad:#3E8CFB;--tile:rgba(62,140,251,.10);--sh:0 1px 2px rgba(13,17,23,.04),0 8px 24px rgba(13,17,23,.05);--sh-h:0 6px 14px rgba(13,17,23,.06),0 22px 44px rgba(62,140,251,.13);--ease:cubic-bezier(.22,.61,.36,1);font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:var(--ink);background:var(--bg);line-height:1.65;-webkit-font-smoothing:antialiased}
.loc-page *{box-sizing:border-box}
.loc-page a{color:var(--a1);text-decoration:none;font-weight:600;transition:color .15s ease}
.loc-page a:hover{color:var(--a2)}
.loc-page :focus-visible{outline:2px solid var(--a1);outline-offset:3px;border-radius:8px}
.loc-icon{display:block;flex-shrink:0}
.loc-page [id^="svc-"]{scroll-margin-top:96px}

/* ── section shell ── */
.loc-section{padding:4.75rem 1.5rem}
.loc-introSection,.loc-whySection{background:var(--bg-alt)}
.loc-servicesSection,.loc-industriesSection,.loc-processSection,.loc-faqSection{background:var(--bg)}
.loc-sectionInner{max-width:1160px;margin:0 auto}
.loc-sectionHeader{text-align:center;max-width:820px;margin:0 auto 3rem}
.loc-sectionTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.6rem,2.6vw,2.4rem);font-weight:700;line-height:1.22;color:var(--ink);margin:0 0 .9rem;letter-spacing:-.022em}
.loc-highlight{background:var(--grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:locShift 9s ease-in-out infinite}
.loc-sectionDesc{font-size:1.04rem;color:var(--ink-soft);line-height:1.78;margin:0 auto;max-width:820px;text-align:center}

/* ── intro grid ── */
.loc-introGrid{display:grid;grid-template-columns:1.6fr 1fr;gap:3rem;align-items:start}
.loc-introTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.38rem,2.2vw,1.95rem);font-weight:700;color:var(--ink);margin:0 0 1.1rem;letter-spacing:-.02em}
.loc-introText{font-size:1.02rem;color:var(--ink-soft);margin:0 0 1.05rem;line-height:1.82}
.loc-introText:last-child{margin-bottom:0}
.loc-introText strong{color:var(--ink);font-weight:600}
.loc-introTags{display:flex;flex-wrap:wrap;gap:.55rem;margin:1rem 0 1.4rem}
.loc-introTag{display:inline-flex;align-items:center;padding:.42rem .9rem;background:#fff;border:1px solid var(--line);border-radius:999px;font-size:.83rem;font-weight:600;color:var(--a1);white-space:nowrap;transition:transform .2s var(--ease),border-color .2s,box-shadow .2s}
.loc-introTag:hover{transform:translateY(-2px);border-color:rgba(62,140,251,.45);box-shadow:0 6px 14px rgba(62,140,251,.10)}
.loc-introTag a{color:inherit}
.loc-introTag a:hover{color:var(--a2)}

/* ── icon tiles ── */
.loc-tile{width:48px;height:48px;display:inline-flex;align-items:center;justify-content:center;border-radius:14px;background:var(--tile);border:1px solid rgba(62,140,251,.22);color:var(--a1);margin-bottom:1.05rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease),box-shadow .3s}
.loc-tile--sm{width:44px;height:44px;border-radius:13px;margin-bottom:0;flex-shrink:0}
.loc-tile--round{width:54px;height:54px;border-radius:50%;margin:0 auto .85rem}
.loc-whyCard:hover .loc-tile,.loc-industryCard:hover .loc-tile{background:var(--grad);border-color:transparent;color:#fff;transform:translateY(-2px) rotate(-5deg) scale(1.06);box-shadow:0 10px 20px rgba(62,140,251,.26)}

/* ── stat cards ── */
.loc-introStats{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;align-content:start}
.loc-statCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem .9rem;text-align:center;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-statCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-statIcon{width:36px;height:36px;margin:0 auto .55rem;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-statCard:hover .loc-statIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-statNum{font-family:'Sora','Inter',sans-serif;font-size:1.5rem;font-weight:800;background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent;line-height:1.15}
.loc-statLabel{margin-top:.25rem;font-size:.8rem;font-weight:600;color:var(--ink-soft);line-height:1.4}

/* ── card grids ── */
.loc-whyGrid,.loc-industriesGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;align-items:stretch}
.loc-whyCard,.loc-industryCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.7rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s;display:flex;flex-direction:column;height:100%;overflow:hidden}
.loc-whyCard::after,.loc-industryCard::after{content:'';position:absolute;inset:0 0 auto 0;height:3px;background:var(--grad);transform:scaleX(0);transform-origin:left;transition:transform .4s var(--ease)}
.loc-whyCard:hover::after,.loc-industryCard:hover::after{transform:scaleX(1)}
.loc-whyCard:hover,.loc-industryCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-serviceDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.68;margin:0;flex-grow:1}
.loc-whyCard{flex-direction:row;align-items:flex-start;gap:1rem}
.loc-whyTitle{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .28rem;line-height:1.4}
.loc-whyText{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.62}
.loc-whyCard .loc-introTags{margin:.6rem 0 0}
.loc-whyCard .loc-introTag{font-size:.74rem;padding:.28rem .65rem}
.loc-industryCard{align-items:center;text-align:center}
.loc-industryName{font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .4rem}
.loc-industryCard .loc-serviceDesc{text-align:center;flex-grow:0}

/* ── jump chips (in-page anchors) ── */
.loc-chipGrid{display:grid;grid-template-columns:repeat(6,1fr);gap:.85rem;margin-bottom:2.6rem}
.loc-chipCard{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.05rem .7rem;text-align:center;font-size:.84rem;font-weight:600;color:var(--ink);box-shadow:var(--sh);display:flex;flex-direction:column;align-items:center;gap:.5rem;line-height:1.4;transition:transform .25s var(--ease),box-shadow .25s,color .25s,border-color .25s}
.loc-chipText{color:var(--ink)}
.loc-chipIcon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-chipCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-chipCard:hover .loc-chipText{color:var(--a1)}
.loc-chipCard:hover .loc-chipIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-chipGrid--5{grid-template-columns:repeat(5,1fr);margin-bottom:0}

/* ── detail cards ── */
.loc-detailGrid{display:grid;grid-template-columns:1fr;gap:1.4rem}
.loc-detailCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem 2.1rem;box-shadow:var(--sh);overflow:hidden;transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-detailCard::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--grad);opacity:.85;transform:scaleY(.4);transform-origin:top;transition:transform .45s var(--ease)}
.loc-detailCard:hover::before{transform:scaleY(1)}
.loc-detailCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-detailHead{display:flex;align-items:center;gap:.9rem;margin-bottom:.85rem}
.loc-detailNum{flex-shrink:0;width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:.9rem;transition:background .3s var(--ease),color .3s}
.loc-detailCard:hover .loc-detailNum{background:var(--grad);color:#fff}
.loc-detailTitle{font-family:'Sora','Inter',sans-serif;font-size:1.18rem;font-weight:700;color:var(--ink);margin:0;letter-spacing:-.01em}
.loc-detailTitle a{color:var(--ink)}
.loc-detailTitle a:hover{color:var(--a1)}
.loc-detailDesc{font-size:.95rem;color:var(--ink-soft);line-height:1.78;margin:0 0 1.1rem}
.loc-detailBlock{margin-bottom:.9rem}
.loc-detailBlock:last-child{margin-bottom:0}
.loc-detailLabel{font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--a1);margin:0 0 .55rem}
.loc-detailTagRow{display:flex;flex-wrap:wrap;gap:.45rem}
.loc-detailTag{display:inline-flex;align-items:center;padding:.38rem .8rem;background:var(--bg-alt);border:1px solid var(--line);border-radius:999px;font-size:.79rem;font-weight:600;color:var(--ink-soft);transition:background .2s,color .2s,border-color .2s,transform .2s var(--ease)}
.loc-detailTag:hover{background:#fff;color:var(--a1);border-color:rgba(62,140,251,.45);transform:translateY(-2px)}
.loc-detailTag a{color:inherit}
.loc-detailTag a:hover{color:var(--a2)}

/* ── timeline ── */
.loc-timeline{position:relative;max-width:860px;margin:0 auto}
.loc-timeline::before{content:'';position:absolute;left:27px;top:10px;bottom:10px;width:2px;background:linear-gradient(180deg,#3E8CFB,rgba(62,140,251,.18))}
.loc-timelineItem{position:relative;display:flex;gap:1.4rem;padding-bottom:2rem}
.loc-timelineItem:last-child{padding-bottom:0}
.loc-timelineDot{position:relative;z-index:1;flex-shrink:0;width:56px;height:56px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--grad);color:#fff;font-family:'Sora','Inter',sans-serif;font-weight:800;font-size:1.05rem;box-shadow:0 6px 16px rgba(62,140,251,.28)}
.loc-timelineDot::after{content:'';position:absolute;inset:-6px;border-radius:50%;border:1.5px solid rgba(62,140,251,.45);opacity:0;transform:scale(.85);transition:opacity .35s,transform .35s var(--ease)}
.loc-timelineItem:hover .loc-timelineDot::after{opacity:1;transform:scale(1)}
.loc-timelineBody{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.25rem 1.55rem;flex:1;min-width:0;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-timelineItem:hover .loc-timelineBody{transform:translateX(5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-timelineTitle{font-size:1.04rem;font-weight:700;color:var(--ink);margin:0 0 .35rem}
.loc-timelineDesc{font-size:.9rem;color:var(--ink-soft);margin:0;line-height:1.68}
.loc-timelineBody .loc-detailTagRow{margin-top:.75rem}

/* ── engagement / story cards ── */
.loc-engageGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.4rem}
.loc-engageCard{background:#fff;border:1px solid var(--line);border-radius:20px;padding:1.9rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-engageCard:hover{transform:translateY(-5px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-engageIcon{width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;background:var(--grad);color:#fff;border-radius:15px;margin-bottom:1.05rem;box-shadow:0 8px 18px rgba(62,140,251,.24);transition:transform .35s var(--ease)}
.loc-engageCard:hover .loc-engageIcon{transform:rotate(-6deg) scale(1.06)}
.loc-engageTitle{font-family:'Sora','Inter',sans-serif;font-size:1.1rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.loc-engageTitle a{color:var(--ink)}
.loc-engageTitle a:hover{color:var(--a1)}
.loc-engageDesc{font-size:.92rem;color:var(--ink-soft);line-height:1.72;margin:0 0 .8rem}
.loc-engageDesc strong{color:var(--ink)}
.loc-engageBest{display:inline-flex;align-items:center;gap:.4rem;font-size:.82rem;font-weight:700;color:var(--a1);background:var(--bg-alt);padding:.5rem .9rem;border-radius:10px;margin-top:.2rem}

/* ── credentials strip ── */
.loc-trustGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem}
.loc-trustCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.4rem 1.25rem;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-trustCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-trustIcon{width:42px;height:42px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:var(--tile);color:var(--a1);margin-bottom:.8rem;transition:background .3s var(--ease),color .3s,transform .35s var(--ease)}
.loc-trustCard:hover .loc-trustIcon{background:var(--grad);color:#fff;transform:rotate(-6deg) scale(1.07)}
.loc-trustTitle{font-size:.98rem;font-weight:700;color:var(--ink);margin:0 0 .3rem}
.loc-trustText{font-size:.86rem;color:var(--ink-soft);margin:0;line-height:1.6}

/* ── contact rows / office ── */
.loc-contactRow{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--ink-soft);margin:0 0 .75rem;line-height:1.7}
.loc-contactRow span.loc-ci{color:var(--a1);margin-top:.22rem}
.loc-contactRow strong{color:var(--ink)}
.loc-officeRightCol{display:flex;flex-direction:column;height:100%;gap:1.1rem}
.loc-mapWrap{position:relative;flex:1;min-height:240px;border-radius:16px;overflow:hidden;box-shadow:var(--sh);border:1px solid var(--line)}
.loc-mapFrame{width:100%;height:100%;border:0;display:block;filter:saturate(.9)}
.loc-mapOverlay{position:absolute;inset:0;background:transparent;transition:background .25s}
.loc-mapOverlay:hover{background:rgba(62,140,251,.08)}
.loc-mapBadge{position:absolute;bottom:12px;left:12px;display:inline-flex;align-items:center;gap:.4rem;background:#fff;padding:.5rem .9rem;border-radius:999px;font-size:.78rem;font-weight:700;color:var(--a1);box-shadow:var(--sh);pointer-events:none}
.loc-officeNote{font-size:.9rem;color:var(--ink-soft);line-height:1.7;margin:1.4rem 0 0;padding-top:1.1rem;border-top:1px dashed var(--line)}

/* ── breadcrumb ── */
.loc-breadcrumb{max-width:1160px;margin:0 auto;padding:1.1rem 1.5rem 0;display:flex;align-items:center;flex-wrap:wrap;gap:.4rem;font-size:.85rem}
.loc-breadcrumb a{color:var(--ink-soft);font-weight:500}
.loc-breadcrumb a:hover{color:var(--a1)}
.loc-breadcrumbSep{color:var(--ink-faint)}
.loc-breadcrumbCurrent{color:var(--ink);font-weight:600}

/* ── FAQ ── */
.loc-faqList{display:flex;flex-direction:column;gap:.7rem;max-width:880px;margin:0 auto}
.loc-faqItem{background:var(--bg-alt);border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:border-color .25s,box-shadow .25s,background .25s}
.loc-faqItem:hover{border-color:rgba(62,140,251,.45)}
.loc-faqItem[open]{background:#fff;box-shadow:var(--sh);border-color:rgba(62,140,251,.45)}
.loc-faqQuestion{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.1rem 1.35rem;cursor:pointer;list-style:none;font-weight:600;color:var(--ink);font-size:.97rem}
.loc-faqQuestion::-webkit-details-marker{display:none}
.loc-faqChevron{flex-shrink:0;display:flex;color:var(--a1);transition:transform .3s var(--ease)}
.loc-faqItem[open] .loc-faqChevron{transform:rotate(180deg)}
.loc-faqAnswer{padding:0 1.35rem 1.25rem;font-size:.92rem;color:var(--ink-soft);line-height:1.75}

/* ── CTA ── */
.loc-ctaSection{position:relative;background:var(--color-deep-indigo,#0C1C32);padding:4.25rem 1.5rem;overflow:hidden}
.loc-ctaSection::before,.loc-ctaSection::after{content:'';position:absolute;width:480px;height:480px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 70%);pointer-events:none}
.loc-ctaSection::before{top:-220px;left:-140px;animation:locFloat 16s ease-in-out infinite}
.loc-ctaSection::after{bottom:-260px;right:-120px;animation:locFloat 20s ease-in-out infinite reverse}
.loc-ctaInner{position:relative;max-width:800px;margin:0 auto;text-align:center}
.loc-ctaTitle{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.5rem,2.4vw,2.05rem);font-weight:700;color:#fff;margin:0 0 1rem;letter-spacing:-.02em}
.loc-ctaDesc{font-size:1rem;color:rgba(255,255,255,.92);line-height:1.78;margin:0 0 2rem}
.loc-ctaActions{display:flex;flex-wrap:wrap;gap:.85rem;justify-content:center}
.loc-ctaBtnPrimary,.loc-ctaBtnSecondary{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.9rem 1.8rem;border-radius:999px;font-weight:700;font-size:.95rem;overflow:hidden}
.loc-ctaBtnPrimary{background:var(--a2);color:#fff!important;transition:transform .2s var(--ease),box-shadow .2s}
.loc-ctaBtnPrimary::after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(62,140,251,.14) 50%,transparent 65%);transform:translateX(-130%);transition:transform .7s var(--ease)}
.loc-ctaBtnPrimary:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,.2)}
.loc-ctaBtnPrimary:hover::after{transform:translateX(130%)}
.loc-ctaBtnSecondary{background:transparent;color:#fff!important;border:1.6px solid rgba(255,255,255,.55);transition:background .2s,transform .2s var(--ease),border-color .2s}
.loc-ctaBtnSecondary:hover{background:rgba(255,255,255,.14);border-color:#fff;transform:translateY(-2px)}

/* ── motion ── */
@keyframes locFadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@keyframes locShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
@keyframes locFloat{0%,100%{transform:translate(0,0)}50%{transform:translate(46px,34px)}}
.loc-sectionHeader,.loc-statCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-trustCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation:locFadeUp .65s var(--ease) both}
@supports (animation-timeline:view()){
  .loc-sectionHeader,.loc-statCard,.loc-whyCard,.loc-industryCard,.loc-chipCard,.loc-detailCard,.loc-engageCard,.loc-trustCard,.loc-timelineItem,.loc-faqItem,.loc-mapWrap{animation-timeline:view();animation-range:entry 0% cover 16%}
}
@supports (interpolate-size:allow-keywords){
  .loc-page{interpolate-size:allow-keywords}
  .loc-faqItem::details-content{block-size:0;overflow:hidden;transition:block-size .32s var(--ease),content-visibility .32s allow-discrete}
  .loc-faqItem[open]::details-content{block-size:auto}
}
@media (prefers-reduced-motion:reduce){
  .loc-page *,.loc-page *::before,.loc-page *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}
}

/* ── responsive ── */
@media (max-width:980px){
  .loc-whyGrid,.loc-industriesGrid{grid-template-columns:repeat(2,1fr)}
  .loc-introGrid{grid-template-columns:1fr;gap:2rem}
  .loc-introStats{grid-template-columns:repeat(4,1fr)}
  .loc-engageGrid{grid-template-columns:1fr}
  .loc-chipGrid,.loc-chipGrid--5{grid-template-columns:repeat(3,1fr)}
  .loc-trustGrid{grid-template-columns:repeat(2,1fr)}
}
@media (max-width:640px){
  .loc-section{padding:3rem 1.15rem}
  .loc-detailCard{padding:1.5rem 1.35rem}
  .loc-chipGrid,.loc-chipGrid--5{grid-template-columns:repeat(2,1fr)}
  .loc-timeline::before{left:22px}
  .loc-timelineDot{width:44px;height:44px;font-size:.95rem}
  .loc-timelineItem{gap:.95rem}
  .loc-whyGrid,.loc-industriesGrid,.loc-trustGrid{grid-template-columns:1fr}
  .loc-introStats{grid-template-columns:repeat(2,1fr)}
  .loc-ctaActions{flex-direction:column;align-items:stretch}
}

/* ═══ STATE-PAGE ADDITIONS ═══ */
/* regulation cards — the section that makes each state page unique */
.loc-regGrid{display:grid;grid-template-columns:1fr;gap:1.2rem;max-width:900px;margin:0 auto}
.loc-regCard{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:1.6rem 1.8rem;box-shadow:var(--sh);transition:transform .28s var(--ease),box-shadow .28s,border-color .28s}
.loc-regCard:hover{transform:translateY(-3px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-regHead{display:flex;align-items:flex-start;gap:.85rem;margin-bottom:.7rem;flex-wrap:wrap}
.loc-regIcon{flex-shrink:0;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border-radius:11px;background:var(--tile);color:var(--a1);transition:background .3s var(--ease),color .3s}
.loc-regCard:hover .loc-regIcon{background:var(--grad);color:#fff}
.loc-regName{font-family:'Sora','Inter',sans-serif;font-size:1.05rem;font-weight:700;color:var(--ink);margin:0;line-height:1.35;flex:1;min-width:200px}
.loc-regBadge{display:inline-flex;align-items:center;gap:.35rem;padding:.25rem .7rem;border-radius:999px;font-size:.7rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;white-space:nowrap}
.loc-regBadge--live{background:rgba(62,140,251,.08);color:#3E8CFB;border:1px solid rgba(62,140,251,.28)}
.loc-regBadge--soon{background:rgba(250,199,89,.14);color:#0D1117;border:1px solid rgba(250,199,89,.45)}
.loc-regBadge--narrow{background:rgba(119,119,119,.10);color:#777777;border:1px solid rgba(119,119,119,.24)}
.loc-regDesc{font-size:.94rem;color:var(--ink-soft);line-height:1.75;margin:0 0 .75rem}
.loc-regImpact{display:flex;gap:.6rem;align-items:flex-start;font-size:.9rem;line-height:1.7;color:var(--ink);background:var(--bg-alt);border-left:3px solid var(--a1);border-radius:0 10px 10px 0;padding:.75rem 1rem}
.loc-regImpact strong{color:var(--a1)}

/* metro cards */
.loc-metroGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.1rem}
.loc-metroCard{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.35rem 1.2rem;box-shadow:var(--sh);transition:transform .25s var(--ease),box-shadow .25s,border-color .25s}
.loc-metroCard:hover{transform:translateY(-4px);box-shadow:var(--sh-h);border-color:rgba(62,140,251,.45)}
.loc-metroName{display:flex;align-items:center;gap:.5rem;font-family:'Sora','Inter',sans-serif;font-size:1rem;font-weight:700;color:var(--ink);margin:0 0 .35rem}
.loc-metroName span{color:var(--a1);display:flex}
.loc-metroText{font-size:.86rem;color:var(--ink-soft);margin:0;line-height:1.62}

/* legal disclaimer note */
.loc-note{max-width:900px;margin:1.8rem auto 0;padding:1rem 1.2rem;background:var(--bg-alt);border:1px dashed var(--line);border-radius:12px;font-size:.85rem;color:var(--ink-soft);line-height:1.7}
.loc-note strong{color:var(--ink)}

@media (max-width:980px){ .loc-metroGrid{grid-template-columns:repeat(2,1fr)} }
@media (max-width:640px){ .loc-metroGrid{grid-template-columns:1fr} .loc-regCard{padding:1.35rem 1.25rem} }
`;

/** Fonts + stylesheet. Render once, at the top of each location page. */
export function LocationStyles() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />
      <style>{LOC_CSS}</style>
    </>
  );
}

/* ── primitives ─────────────────────────────────────────── */

export const Stat = ({ i, n, l }: { i: IconName; n?: string; l: string }) => (
  <div className="loc-statCard">
    <span className="loc-statIcon"><Icon name={i} size={19} /></span>
    {n ? <div className="loc-statNum">{n}</div> : null}
    <div className="loc-statLabel">{l}</div>
  </div>
);

export const Why = ({ i, t, d }: { i: IconName; t: string; d?: ReactNode }) => (
  <div className="loc-whyCard">
    <span className="loc-tile loc-tile--sm"><Icon name={i} size={20} /></span>
    <div><h3 className="loc-whyTitle">{t}</h3>{d ? <p className="loc-whyText">{d}</p> : null}</div>
  </div>
);

export const Industry = ({ i, t, d }: { i: IconName; t: string; d: ReactNode }) => (
  <div className="loc-industryCard">
    <span className="loc-tile loc-tile--round"><Icon name={i} size={23} /></span>
    <h3 className="loc-industryName">{t}</h3>
    <p className="loc-serviceDesc">{d}</p>
  </div>
);

export const Metro = ({ i, t, d }: { i: IconName; t: string; d: ReactNode }) => (
  <div className="loc-metroCard">
    <h3 className="loc-metroName"><span><Icon name={i} size={17} /></span>{t}</h3>
    <p className="loc-metroText">{d}</p>
  </div>
);

/** Regulation card. `status` drives the badge colour:
 *  live = in force today · soon = dated but not yet in force · narrow = in force but rarely applicable */
export const Reg = ({
  i, name, status, badge, d, impact,
}: {
  i: IconName;
  name: string;
  status: "live" | "soon" | "narrow";
  badge: string;
  d: ReactNode;
  impact: ReactNode;
}) => (
  <div className="loc-regCard">
    <div className="loc-regHead">
      <span className="loc-regIcon"><Icon name={i} size={19} /></span>
      <h3 className="loc-regName">{name}</h3>
      <span className={`loc-regBadge loc-regBadge--${status}`}>{badge}</span>
    </div>
    <p className="loc-regDesc">{d}</p>
    <p className="loc-regImpact"><strong>Build impact:</strong> <span>{impact}</span></p>
  </div>
);

export const Engage = ({ i, t, d, best }: { i: IconName; t: ReactNode; d: ReactNode; best: string }) => (
  <div className="loc-engageCard">
    <span className="loc-engageIcon"><Icon name={i} size={22} /></span>
    <h3 className="loc-engageTitle">{t}</h3>
    <p className="loc-engageDesc">{d}</p>
    <span className="loc-engageBest">{best}</span>
  </div>
);

export const Faq = ({ q, a }: { q: string; a: string }) => (
  <details className="loc-faqItem">
    <summary className="loc-faqQuestion">
      <span className="loc-faqQuestionText">{q}</span>
      <span className="loc-faqChevron"><Icon name="chevron" size={16} /></span>
    </summary>
    <div className="loc-faqAnswer">{a}</div>
  </details>
);

/** Breadcrumb shared by every location page. */
export const LocBreadcrumb = ({ current }: { current: string }) => (
  <nav className="loc-breadcrumb" aria-label="Breadcrumb">
    <Link href="/">Home</Link>
    <span className="loc-breadcrumbSep">/</span>
    <Link href="/software-development-company-usa">USA</Link>
    <span className="loc-breadcrumbSep">/</span>
    <span className="loc-breadcrumbCurrent">{current}</span>
  </nav>
);

/* ── structured data ─────────────────────────────────────────
   NOTE: these pages deliberately do NOT emit LocalBusiness or
   ProfessionalService schema. mTouch Labs has no premises in
   these states; claiming a local business there would be
   structured-data spam. We emit Service + areaServed instead,
   which is the accurate description of the relationship.
   ──────────────────────────────────────────────────────────── */

export const US_CONTACT = {
  phoneDisplay: "+1 (551) 222-0070",
  phoneHref: "tel:+15512220070",
  phoneSchema: "+1-551-222-0070",
  email: "contact@mtouchlabs.com",
  hours: "Mon–Fri, 9:00 AM – 6:00 PM EST",
  origin: "https://www.mtouchlabs.com",
} as const;

export function stateSchema({
  state, slug, headline, summary,
}: { state: string; slug: string; headline: string; summary: string }) {
  const url = `${US_CONTACT.origin}/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: headline,
      description: summary,
      serviceType: "Custom software development",
      url,
      provider: {
        "@type": "Organization",
        name: "mTouch Labs",
        url: US_CONTACT.origin,
        telephone: US_CONTACT.phoneSchema,
        email: US_CONTACT.email,
      },
      areaServed: {
        "@type": "State",
        name: state,
        containedInPlace: { "@type": "Country", name: "United States" },
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${US_CONTACT.origin}/contact-us`,
        servicePhone: US_CONTACT.phoneSchema,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${US_CONTACT.origin}/` },
        { "@type": "ListItem", position: 2, name: "USA", item: `${US_CONTACT.origin}/software-development-company-usa` },
        { "@type": "ListItem", position: 3, name: headline, item: url },
      ],
    },
  ];
}

/** Emits the JSON-LD blocks returned by stateSchema(). */
export function StateSchema({ blocks }: { blocks: object[] }) {
  return (
    <>
      {blocks.map((b, k) => (
        <script key={k} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(b) }} />
      ))}
    </>
  );
}


/* ── STATE_CSS — the light hero + card styling shared by every state
      page, so they match the USA page instead of inventing a second
      look. Import alongside LOC_CSS. ── */
export const STATE_CSS = `
.st-hero{position:relative;padding:130px 1.5rem 5rem;overflow:hidden;background:
  radial-gradient(1200px 600px at 12% 8%,rgba(67,56,202,.10) 0%,transparent 55%),
  radial-gradient(900px 600px at 92% 18%,rgba(14,165,233,.10) 0%,transparent 55%),
  linear-gradient(180deg,rgba(62,140,251,.02) 0%,rgba(62,140,251,.045) 100%)}
.st-hero::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:var(--line)}
.st-heroInner{position:relative;max-width:1160px;margin:0 auto;display:grid;grid-template-columns:1.25fr .75fr;gap:3rem;align-items:center}
.st-eyebrow{display:inline-flex;align-items:center;gap:.5rem;padding:.4rem .9rem;border-radius:999px;background:#fff;border:1px solid var(--line);color:var(--a1);font-size:.8rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:1.15rem;box-shadow:var(--sh)}
.st-h1{font-family:'Sora','Inter',sans-serif;font-size:clamp(1.95rem,3.8vw,2.95rem);font-weight:800;line-height:1.12;letter-spacing:-.028em;color:var(--ink);margin:0 0 1.15rem}
.st-h1 em{font-style:normal;background:var(--grad);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:locShift 9s ease-in-out infinite}
.st-heroText{font-size:1.02rem;line-height:1.78;color:var(--ink-soft);margin:0 0 1rem;max-width:58ch}
.st-heroActions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.6rem}
.st-btnA,.st-btnB{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.85rem 1.6rem;border-radius:999px;font-weight:700;font-size:.94rem;transition:transform .2s var(--ease),box-shadow .2s}
.st-btnA{background:var(--grad);color:#fff!important;box-shadow:0 8px 20px rgba(62,140,251,.24)}
.st-btnA:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(62,140,251,.34)}
.st-btnB{background:#fff;color:var(--a1)!important;border:1.5px solid var(--line);box-shadow:var(--sh)}
.st-btnB:hover{border-color:rgba(62,140,251,.45);transform:translateY(-2px);box-shadow:var(--sh-h)}
.st-cardLink{display:inline-flex;align-items:center;gap:.35rem;margin-top:.9rem;font-size:.86rem;font-weight:700;color:var(--a1)}
.st-cardLink::after{content:'→';transition:transform .2s var(--ease)}
.st-cardLink:hover::after{transform:translateX(3px)}
.st-midCta{max-width:820px;margin:2.6rem auto 0;text-align:center;background:var(--bg-alt);border:1px solid var(--line);border-radius:18px;padding:1.9rem 1.75rem}
.st-midCtaTitle{font-family:'Sora','Inter',sans-serif;font-size:1.2rem;font-weight:700;color:var(--ink);margin:0 0 .55rem}
.st-midCtaText{font-size:.94rem;color:var(--ink-soft);line-height:1.7;margin:0 0 1.15rem}
.st-inlineBtn{display:inline-flex;align-items:center;gap:.45rem;padding:.75rem 1.5rem;border-radius:999px;background:var(--grad);color:#fff!important;font-weight:700;font-size:.9rem;transition:transform .2s var(--ease),box-shadow .2s}
.st-inlineBtn:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(62,140,251,.30)}
@media (max-width:1080px){.st-heroInner{grid-template-columns:1fr;gap:2rem}}
@media (max-width:768px){.st-hero{padding:100px 1.15rem 3.25rem}.st-heroActions{flex-direction:column;align-items:stretch}}
`;
