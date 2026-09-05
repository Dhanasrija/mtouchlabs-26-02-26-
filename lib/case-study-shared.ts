/* ═══════════════════════════════════════════════════════════════════════
   Shared case-study / portfolio UI
   ─────────────────────────────────────────────────────────────────────
   ONE design, TWO routes: /portfolio/<slug> reads the `portfolios` table
   and /case-studies/<slug> reads `case_studies`, but both render the same
   `.cs-*` markup and both pull their CSS and helpers from here. Change a
   rule or a helper once and both pages move together -- which is the
   whole point of putting this in lib/ rather than beside one page.

   The CSS is a string, injected as an inline <style> by each page rather
   than served as a file from /public. /public is sent with a long cache
   header, so edits kept being served stale; inlined, the CSS travels with
   the page's own HTML and cannot be cached separately from it.
   ═══════════════════════════════════════════════════════════════════ */

export function parseJSON(val: any, fb: any = []) {
  if (!val) return fb;
  if (Array.isArray(val)) return val;
  if (typeof val === "object") return val;
  try {
    return JSON.parse(val) || fb;
  } catch {
    return fb;
  }
}

export function imgUrl(p: string | null | undefined): string {
  if (!p) return "";
  if (p.startsWith("http")) return p;
  if (p.startsWith("/")) return p;
  return `/${p}`;
}

export function categorizeTech(stack: string[]) {
  const cats: Record<string, string[]> = {
    Frontend: [], Backend: [], Database: [], Infrastructure: [], "AI/ML": [], Other: [],
  };
  const fe = ["react","flutter","angular","vue","ios","android","swift","kotlin","html","css","javascript","typescript","dart","tailwind","bootstrap","next","nuxt","svelte","jquery"];
  const be = ["node","java","php","python","laravel",".net","spring","express","django","flask","ruby","rails","go","graphql","rest","api","nest","fastapi"];
  const db = ["mysql","mongo","firebase","sql","redis","postgresql","dynamodb","sqlite","supabase","neon","cassandra","oracle"];
  const infra = ["aws","azure","gcp","docker","kubernetes","nginx","vercel","heroku","cloudflare","jenkins","github","gitlab","ci/cd","terraform"];
  const ai = ["tensorflow","pytorch","openai","gpt","ml","ai","machine learning","deep learning","nlp","langchain"];
  stack.forEach((t) => {
    const l = t.toLowerCase();
    if (fe.some((k) => l.includes(k))) cats.Frontend.push(t);
    else if (be.some((k) => l.includes(k))) cats.Backend.push(t);
    else if (db.some((k) => l.includes(k))) cats.Database.push(t);
    else if (infra.some((k) => l.includes(k))) cats.Infrastructure.push(t);
    else if (ai.some((k) => l.includes(k))) cats["AI/ML"].push(t);
    else cats.Other.push(t);
  });
  return Object.entries(cats).filter(([, v]) => v.length > 0);
}

export const featureEmojis = ["📦","🔍","📄","🛒","📱","🛠️","🔔","📊","⚡","🌐","🛡️","🔄"];

/* ── Technology icons ───────────────────────────────────────────────
   The stack cards used to show the first word of the technology set in a
   blue tile -- a text label pretending to be a logo. These map each
   technology to a real Font Awesome glyph instead.

   The site already loads Font Awesome, so this costs nothing extra. Its
   FREE brand set does not cover Flutter, MySQL, Mongo, Firebase,
   Postgres, Kotlin, Dart, Express, Next or GraphQL, so anything without
   a brand mark falls back to a solid glyph that says what KIND of thing
   it is -- a database, a phone, a server -- which reads better than an
   invented logo would. Longest keys are tested first so "react native"
   is not caught by "react". */
export const TECH_ICONS: [string, string][] = [
  ["react native", "fa-solid fa-mobile-screen-button"],
  ["next",         "fa-solid fa-code"],
  ["node",         "fab fa-node-js"],
  ["react",        "fab fa-react"],
  ["angular",      "fab fa-angular"],
  ["vue",          "fab fa-vuejs"],
  ["flutter",      "fa-solid fa-mobile-screen-button"],
  ["dart",         "fa-solid fa-mobile-screen-button"],
  ["kotlin",       "fab fa-android"],
  ["android",      "fab fa-android"],
  ["swift",        "fab fa-swift"],
  ["ios",          "fab fa-apple"],
  ["apple",        "fab fa-apple"],
  ["typescript",   "fa-solid fa-code"],
  ["javascript",   "fab fa-js"],
  ["laravel",      "fab fa-laravel"],
  ["php",          "fab fa-php"],
  ["python",       "fab fa-python"],
  ["django",       "fab fa-python"],
  ["java",         "fab fa-java"],
  ["spring",       "fa-solid fa-leaf"],
  [".net",         "fa-solid fa-server"],
  ["express",      "fa-solid fa-server"],
  ["nest",         "fa-solid fa-server"],
  ["graphql",      "fa-solid fa-diagram-project"],
  ["rest",         "fa-solid fa-diagram-project"],
  ["postgres",     "fa-solid fa-database"],
  ["mysql",        "fa-solid fa-database"],
  ["mongo",        "fa-solid fa-database"],
  ["redis",        "fa-solid fa-database"],
  ["sqlite",       "fa-solid fa-database"],
  ["firebase",     "fa-solid fa-fire"],
  ["supabase",     "fa-solid fa-database"],
  ["sql",          "fa-solid fa-database"],
  ["aws",          "fab fa-aws"],
  ["amazon",       "fab fa-aws"],
  ["azure",        "fa-solid fa-cloud"],
  ["gcp",          "fa-solid fa-cloud"],
  ["google cloud", "fa-solid fa-cloud"],
  ["vercel",       "fa-solid fa-cloud"],
  ["docker",       "fab fa-docker"],
  ["kubernetes",   "fa-solid fa-cubes"],
  ["nginx",        "fa-solid fa-server"],
  ["jenkins",      "fa-solid fa-gears"],
  ["github",       "fab fa-github"],
  ["gitlab",       "fab fa-gitlab"],
  ["git",          "fab fa-git-alt"],
  ["figma",        "fab fa-figma"],
  ["tailwind",     "fa-solid fa-wind"],
  ["bootstrap",    "fab fa-bootstrap"],
  ["sass",         "fab fa-sass"],
  ["html",         "fab fa-html5"],
  ["css",          "fab fa-css3-alt"],
  ["wordpress",    "fab fa-wordpress"],
  ["shopify",      "fab fa-shopify"],
  ["stripe",       "fab fa-stripe-s"],
  ["razorpay",     "fa-solid fa-credit-card"],
  ["payment",      "fa-solid fa-credit-card"],
  ["tensorflow",   "fa-solid fa-brain"],
  ["pytorch",      "fa-solid fa-brain"],
  ["openai",       "fa-solid fa-brain"],
  ["langchain",    "fa-solid fa-brain"],
  ["socket",       "fa-solid fa-bolt"],
  ["map",          "fa-solid fa-map-location-dot"],
  ["twilio",       "fa-solid fa-comment-sms"],
];

export function techIcon(name: string): string {
  const l = name.toLowerCase();
  for (const [key, icon] of TECH_ICONS) if (l.includes(key)) return icon;
  return "fa-solid fa-layer-group";
}

/* Split a "Title — description" / "Title: description" line into its two
   halves. Every list section in the reference design shows a bold lead
   and a lighter body, and the em-dash / colon is how the copy carries
   that split. A line with no separator becomes a title with no body,
   which still renders correctly. */
export function splitLine(line: string): { title: string; desc: string } {
  const t = line.replace(/^\s*(?:[•‣▪·]+\s*|[-–—]\s+|\d+[.)]\s+)/, "").trim();
  /* Only look for the separator BEFORE the first tag. Without this a line
     like `... our <a href="https://x">link</a>` splits on the colon inside
     the href and the heading becomes half a URL. */
  const cut = t.indexOf("<");
  const head = cut === -1 ? t : t.slice(0, cut);
  const m = head.match(/^([^:—–]{3,60})[:—–]\s*/);
  if (!m) return { title: t, desc: "" };
  return { title: m[1].trim(), desc: t.slice(m[0].length).trim() };
}


/* Split a plain string into paragraphs / lines. Both tables store the
   long-form fields as newline-separated text. */
export function paras(v: any): string[] {
  if (!v || typeof v !== "string") return [];
  return v.split("\n").map((p) => p.trim()).filter(Boolean);
}

export function lines(v: any): string[] {
  if (!v || typeof v !== "string") return [];
  return v.split("\n").map((l) => l.trim()).filter(Boolean);
}

export const CASE_STUDY_CSS = `
/* ═══════════════════════════════════════════════════════════════════════
   PORTFOLIO DETAIL — built to the supplied reference design
   ─────────────────────────────────────────────────────────────────────
   The ONLY sheet styling '.cs'; layout.tsx no longer loads case-study.css.
   The old '.cs-*' rules still live inside bundle.css, which the ROOT layout
   loads globally, and they carry !important — so every selector here is
   prefixed '.cs' to out-rank them and every declaration carries !important
   to win the tie. Blunt, but bundle.css cannot be edited from here.

   Tokens are taken from the reference: blue-600 #2563eb accents, slate
   text, white cards on a slate-50 ground, 12/16px radii, hairline rules
   between sections and alternating white bands.
   ═══════════════════════════════════════════════════════════════════ */

.cs {
  /* Signature Blue (#3E8CFB, the same --color-signature-blue the rest of
     the site uses) and a ramp built around it. Every blue on these pages
     resolves through these tokens, so the whole design moves by editing
     this one block. */
  /* Sampled straight off the reference screenshots, not guessed:
       #3762E3  the blue -- eyebrows, stat figures, KPI figures, icons
       #2B4DD0  the darker blue used for badge-pill text
       #F1F6FE  the pale blue behind badges and icon tiles
       #101729  headings
       #4A5567  body copy
       #E3E8EF  card borders
       #F9FAFC  the grey section band
       #2842AC -> #3560E0  the Key Takeaway gradient
     Everything on these pages resolves through these tokens. */
  --b50:#F1F6FE;--b100:#DEE7FB;--b200:#C3D0F6;--b300:#9DB2F0;
  --b500:#5B7FE9;--b600:#3762E3;--b700:#2B4DD0;--b800:#2842AC;--b900:#1E3382;

  --s50:#F9FAFC;--s100:#F1F3F7;--s200:#E3E8EF;--s300:#CBD3E1;--s400:#98A2B3;
  --s500:#697586;--s600:#4A5567;--s700:#364152;--s800:#202939;--s900:#101729;

  --r:12px;--rlg:16px;
  --sh-sm:0 1px 2px 0 rgb(0 0 0/.05);
  --sh:0 4px 6px -1px rgb(0 0 0/.07),0 2px 4px -2px rgb(0 0 0/.05);
  --sh-md:0 10px 15px -3px rgb(0 0 0/.08),0 4px 6px -4px rgb(0 0 0/.05);
  font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif !important;
  background:var(--s50) !important;color:var(--s800) !important;
  line-height:1.6 !important;-webkit-font-smoothing:antialiased !important;
}
.cs *,.cs *::before,.cs *::after{box-sizing:border-box !important}
.cs img{max-width:100% !important;height:auto !important;display:block !important}
.cs a{text-decoration:none !important;transition:color .2s ease !important}
.cs h1,.cs h2,.cs h3,.cs h4{margin:0 !important}
.cs p{margin:0 !important}
.cs ul{list-style:none !important;margin:0 !important;padding:0 !important}
.cs .cs-wrap{max-width:1140px !important;margin:0 auto !important;padding:0 24px !important}

/* ═══ HERO ══════════════════════════════════════════════════════════
   132px of top padding, not the reference's 64: the site header is
   FIXED and sits on top of the hero, which is what was cutting the
   breadcrumb off. */
.cs .cs-hero{
  background:linear-gradient(160deg,var(--b50) 0%,#fff 55%,var(--s50) 100%) !important;
  border-bottom:1px solid var(--s200) !important;
  padding:132px 0 72px !important;
}
.cs .cs-crumb{
  display:flex !important;align-items:center !important;flex-wrap:wrap !important;
  gap:8px !important;font-size:.85rem !important;color:var(--s500) !important;
  margin-bottom:28px !important;
}
/* Breadcrumb links.
   These were coming out gold on hover: bundle.css colours anchors with a
   rule more specific than '.cs .cs-crumb a', and !important alone does
   not settle a tie that the other rule wins on specificity. So every
   state is pinned here at (0,4,1) with the attribute selector, and
   :link / :visited / :hover / :focus / :active are ALL named -- a legacy
   sheet that styles only a:hover would otherwise still take the hover. */
.cs .cs-hero .cs-crumb a[href],
.cs .cs-hero .cs-crumb a[href]:link,
.cs .cs-hero .cs-crumb a[href]:visited{
  color:var(--s400) !important;
  transition:color .18s ease !important;
  text-decoration:none !important;
}
.cs .cs-hero .cs-crumb a[href]:hover,
.cs .cs-hero .cs-crumb a[href]:focus,
.cs .cs-hero .cs-crumb a[href]:focus-visible,
.cs .cs-hero .cs-crumb a[href]:active{
  color:var(--b600) !important;
}
.cs .cs-hero .cs-crumb > span{color:var(--s300) !important}
/* The current page is not a link, so it stays grey and never turns blue. */
.cs .cs-hero .cs-crumb .cs-crumb__now{color:var(--s500) !important}

.cs .cs-tags{display:flex !important;flex-wrap:wrap !important;gap:8px !important;margin-bottom:16px !important}
/* A legacy sheet puts a gold border on these on hover. Every state is
   pinned -- including the resting border, so there is no width shift when
   the hover border appears. */
.cs .cs-hero .cs-tags .cs-tag,
.cs .cs-hero .cs-tags .cs-tag:hover,
.cs .cs-hero .cs-tags .cs-tag:focus{
  display:inline-flex !important;align-items:center !important;padding:5px 12px !important;
  font-size:.75rem !important;font-weight:600 !important;letter-spacing:.02em !important;
  text-transform:uppercase !important;border-radius:999px !important;
  background:var(--b100) !important;color:var(--b700) !important;
  border:1.5px solid transparent !important;
  transition:border-color .2s ease,background .2s ease !important;
}
.cs .cs-hero .cs-tags .cs-tag:hover,
.cs .cs-hero .cs-tags .cs-tag:focus{
  border-color:var(--b600) !important;background:var(--b50) !important;
}
.cs .cs-h1{
  font-size:clamp(1.85rem,4vw,2.75rem) !important;font-weight:800 !important;
  color:var(--s900) !important;letter-spacing:-.03em !important;line-height:1.2 !important;
  margin-bottom:16px !important;max-width:820px !important;
}
/* Flat black across the whole line -- no highlighted half, no gradient.
   The margin / padding / text-align resets matter as much as the colour:
   a legacy h1 rule was giving this an indent and a centred alignment, so
   the headline started further right than the lead paragraph under it.
   Everything in the hero now shares one left edge. */
.cs .cs-hero h1.cs-h1,.cs .cs-hero h1.cs-h1 *{
  color:var(--s900) !important;-webkit-text-fill-color:var(--s900) !important;
}
.cs .cs-hero h1.cs-h1{
  margin:0 0 16px !important;padding:0 !important;
  text-align:left !important;text-indent:0 !important;
}
.cs .cs-hero .cs-crumb,
.cs .cs-hero .cs-tags,
.cs .cs-hero .cs-lead,
.cs .cs-hero .cs-acts,
.cs .cs-hero .cs-meta{
  margin-left:0 !important;padding-left:0 !important;text-align:left !important;
}
.cs .cs-lead{
  font-size:1.08rem !important;line-height:1.7 !important;
  color:var(--s500) !important;
  max-width:640px !important;margin-bottom:28px !important;
}
.cs .cs-acts{display:flex !important;flex-wrap:wrap !important;gap:12px !important;margin-bottom:40px !important}

/* Buttons. Both hero actions share a min-width so they render equal. */
/* Same shape as the buttons everywhere else on the site: 10px radius,
   17px/32px padding, 16px label, and one shared min-width so the pair
   renders exactly equal whatever the labels say. box-sizing is restated
   because legacy sheets set content-box on 'a', which would add the 32px
   padding on top of min-width and un-match them again. */
.cs .cs-btn,.cs a.cs-btn{
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
  gap:10px !important;padding:17px 32px !important;min-width:236px !important;
  box-sizing:border-box !important;
  font-size:16px !important;font-weight:600 !important;line-height:1.2 !important;
  /* Pill, not a rectangle -- the same 999px the buttons use on every
     other page. */
  border-radius:999px !important;text-decoration:none !important;
  border:1.5px solid transparent !important;white-space:nowrap !important;
  transition:background .24s ease,color .24s ease,border-color .24s ease,transform .24s ease,box-shadow .24s ease !important;
}
.cs .cs-btn__ar{flex-shrink:0 !important;transition:transform .24s ease !important}
.cs a.cs-btn:hover .cs-btn__ar{transform:translate(2px,-2px) !important}

/* PRIMARY -- flat Signature Blue, white label. Every state is pinned so a
   legacy 'a:hover' cannot repaint the label gold or the plate grey. */
.cs a.cs-btn--primary,
.cs a.cs-btn--primary:link,
.cs a.cs-btn--primary:visited{
  background:var(--b600) !important;color:#fff !important;border-color:var(--b600) !important;
}
.cs a.cs-btn--primary:hover,
.cs a.cs-btn--primary:focus,
.cs a.cs-btn--primary:active{
  background:var(--b700) !important;color:#fff !important;border-color:var(--b700) !important;
  transform:translateY(-1px) !important;box-shadow:var(--sh-md) !important;
}
.cs a.cs-btn--primary .cs-btn__ar{color:#fff !important}

/* SECONDARY -- white plate, Signature Blue border, ink label.
   Hover lightens to blue-50; it never goes dark or grey. */
.cs a.cs-btn--secondary,
.cs a.cs-btn--secondary:link,
.cs a.cs-btn--secondary:visited{
  background:#fff !important;color:var(--s900) !important;border-color:var(--b600) !important;
}
.cs a.cs-btn--secondary:hover,
.cs a.cs-btn--secondary:focus,
.cs a.cs-btn--secondary:active{
  background:var(--b50) !important;color:var(--b800) !important;border-color:var(--b700) !important;
}

.cs a.cs-btn--white,.cs a.cs-btn--white:link,.cs a.cs-btn--white:visited{background:#fff !important;color:var(--b800) !important;border-color:#fff !important}
.cs a.cs-btn--white:hover,.cs a.cs-btn--white:focus{background:var(--b50) !important;color:var(--b900) !important;transform:translateY(-1px) !important}
.cs a.cs-btn--ghost,.cs a.cs-btn--ghost:link,.cs a.cs-btn--ghost:visited{background:transparent !important;color:#fff !important;border-color:rgba(255,255,255,.55) !important}
.cs a.cs-btn--ghost:hover,.cs a.cs-btn--ghost:focus{background:rgba(255,255,255,.14) !important;border-color:#fff !important;color:#fff !important}

.cs .cs-meta{
  display:grid !important;grid-template-columns:repeat(auto-fit,minmax(170px,1fr)) !important;
  gap:22px 28px !important;
  /* 34px of side padding: the first cell was starting hard against the
     card's own border, so "Industry" read as clipped. */
  padding:26px 34px !important;background:#fff !important;
  border:1px solid var(--s200) !important;border-radius:var(--rlg) !important;
  box-shadow:var(--sh-sm) !important;max-width:880px !important;
}
.cs .cs-meta__item{display:flex !important;flex-direction:column !important;gap:5px !important;min-width:0 !important}
.cs .cs-meta__k{font-size:.75rem !important;font-weight:600 !important;text-transform:uppercase !important;letter-spacing:.04em !important;color:var(--s500) !important}
/* One line, and nothing clipped. The old -webkit-line-clamp cropped
   descenders and needed overflow:hidden, which is what cut the first
   label. Values are short keywords now, so nowrap is enough. */
.cs .cs-meta__v{
  font-size:.95rem !important;font-weight:600 !important;color:var(--s800) !important;
  white-space:nowrap !important;overflow:visible !important;
}

/* ═══ SECTIONS ══════════════════════════════════════════════════════
   64px rhythm, hairline between, alternating white bands — the bands
   are full-bleed because .cs-sec is full width with .cs-wrap inside. */
.cs .cs-sec{padding:64px 0 !important;border-top:1px solid var(--s200) !important;background:transparent !important}
.cs .cs-sec--white{background:#fff !important}
/* A band that holds one panel needs less air than a full section. */
.cs .cs-sec--tight{padding:52px 0 !important;border-top:0 !important}
/* The FAQ band, same as the homepage's .hmx-sec--stone. */
.cs .cs-sec--stone{background:#F7F9FC !important;border-top:1px solid var(--s200) !important;border-bottom:1px solid var(--s200) !important}
.cs .cs-head{margin-bottom:36px !important}
.cs .cs-eyebrow{
  display:inline-block !important;font-size:.8rem !important;font-weight:700 !important;
  text-transform:uppercase !important;letter-spacing:.06em !important;
  color:var(--b600) !important;margin-bottom:8px !important;
}
.cs .cs-h2{
  font-size:clamp(1.5rem,3vw,1.85rem) !important;font-weight:750 !important;
  color:var(--s900) !important;letter-spacing:-.02em !important;margin-bottom:12px !important;
}
.cs .cs-desc{font-size:1.05rem !important;line-height:1.7 !important;color:var(--s600) !important;max-width:620px !important}
.cs .cs-subh{font-size:1.05rem !important;font-weight:700 !important;color:var(--s900) !important;margin:36px 0 18px !important}

/* 'stretch', not 'start': the Business Context card has to begin and end
   level with the prose beside it. '--top' opts back out for the paired
   sections (Challenges/Objectives, UI-UX/Development) whose two lists are
   naturally different lengths. */
.cs .cs-2col{display:grid !important;grid-template-columns:1fr 1fr !important;gap:48px !important;align-items:stretch !important}
.cs .cs-2col--top{align-items:start !important}
.cs .cs-2col > *{min-width:0 !important}

.cs .cs-prose p{font-size:1rem !important;line-height:1.75 !important;color:var(--s600) !important;margin-bottom:16px !important}
/* The opening paragraph carries the section, so it is set a little
   larger than the body that follows it. */
.cs .cs-prose .cs-prose__lead{font-size:1.05rem !important;color:var(--s600) !important}
.cs .cs-prose p:last-child{margin-bottom:0 !important}
.cs .cs-prose strong{color:var(--s900) !important;font-weight:700 !important}
.cs .cs-prose--single{font-size:1rem !important;line-height:1.75 !important;color:var(--s600) !important;max-width:760px !important}

/* Blue "Business Context" card. */
.cs .cs-note{
  background:var(--b50) !important;border:1px solid var(--b100) !important;
  border-radius:var(--rlg) !important;padding:28px !important;
}
.cs .cs-note h3{font-size:1.1rem !important;font-weight:700 !important;color:var(--b900) !important;margin-bottom:12px !important}
.cs .cs-note p{color:var(--s700) !important;line-height:1.7 !important;margin-bottom:12px !important}
.cs .cs-note p:last-child{margin-bottom:0 !important}
/* In the About block the card is the right-hand column: it starts level
   with the eyebrow and runs to its own content height. */
.cs .cs-2col > .cs-note{margin:0 !important;align-self:start !important}
.cs .cs-note--wide{margin-top:32px !important;height:auto !important}
.cs .cs-note--plain h3{display:none !important}

/* Not full-bleed: the reference stops this panel around two thirds of
   the column so the prose keeps a readable measure. */
.cs .cs-panel{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:34px 36px !important;
  box-shadow:var(--sh-sm) !important;max-width:76% !important;
}
.cs .cs-panel p{color:var(--s600) !important;line-height:1.75 !important;margin-bottom:16px !important}
.cs .cs-panel p:last-child{margin-bottom:0 !important}

/* ═══ SNAPSHOT TABLE ════════════════════════════════════════════════ */
.cs .cs-table{
  width:100% !important;border-collapse:collapse !important;background:#fff !important;
  border:1px solid var(--s200) !important;border-radius:var(--rlg) !important;
  overflow:hidden !important;box-shadow:var(--sh-sm) !important;
}
.cs .cs-table th,.cs .cs-table td{padding:16px 24px !important;text-align:left !important;border-bottom:1px solid var(--s100) !important}
.cs .cs-table th{
  width:38% !important;font-size:.85rem !important;font-weight:600 !important;
  color:var(--s500) !important;background:var(--s50) !important;
  text-transform:uppercase !important;letter-spacing:.03em !important;
}
.cs .cs-table td{font-size:.95rem !important;font-weight:500 !important;color:var(--s800) !important}
.cs .cs-table tr:last-child th,.cs .cs-table tr:last-child td{border-bottom:0 !important}
.cs .cs-table a{color:var(--b600) !important;font-weight:600 !important}

/* ═══ CHECK LISTS (challenges / objectives / security) ══════════════ */
.cs .cs-checks{display:flex !important;flex-direction:column !important;gap:16px !important}
.cs .cs-checks li{
  display:flex !important;gap:14px !important;align-items:flex-start !important;
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--r) !important;padding:18px 20px !important;
  transition:border-color .2s ease,box-shadow .2s ease !important;
}
.cs .cs-checks li:hover{border-color:var(--b200) !important;box-shadow:var(--sh-sm) !important}
/* The numeral was sitting high and slightly left of its disc: the box was
   24px with the glyph inheriting the list's 1.6 line-height, so the text
   box was taller than the circle and centring had nothing to work with.
   28px, line-height 1, and 'font-variant-numeric: tabular-nums' so 1 and
   4 occupy the same width and every circle looks identically centred. */
.cs .cs-checks__n{
  flex-shrink:0 !important;width:28px !important;height:28px !important;border-radius:50% !important;
  background:var(--b100) !important;color:var(--b700) !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
  font-size:.78rem !important;font-weight:700 !important;line-height:1 !important;
  font-variant-numeric:tabular-nums !important;
  margin-top:1px !important;padding:0 !important;text-align:center !important;
}
/* White tick on a solid Signature Blue disc. */
.cs .cs-checks__n--tick{background:var(--b600) !important;color:#fff !important;font-size:.85rem !important}
.cs .cs-checks strong{display:block !important;font-size:.95rem !important;color:var(--s900) !important;margin-bottom:4px !important;font-weight:700 !important}
.cs .cs-checks span{display:block !important;font-size:.9rem !important;color:var(--s600) !important;line-height:1.55 !important}

/* ═══ DOT LISTS (development / future scope) ════════════════════════ */
.cs .cs-dots{display:flex !important;flex-direction:column !important;gap:14px !important}
.cs .cs-dots li{
  display:flex !important;gap:14px !important;align-items:flex-start !important;
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--r) !important;padding:18px 20px !important;
  transition:border-color .2s ease !important;
}
.cs .cs-dots li:hover{border-color:var(--b200) !important}
.cs .cs-dot{
  flex-shrink:0 !important;width:28px !important;height:28px !important;border-radius:50% !important;
  background:var(--b100) !important;margin-top:1px !important;position:relative !important;
}
.cs .cs-dot::after{
  content:"" !important;position:absolute !important;inset:0 !important;margin:auto !important;
  width:6px !important;height:6px !important;border-radius:50% !important;background:var(--b600) !important;
}
.cs .cs-dots strong{display:block !important;font-size:.95rem !important;color:var(--s900) !important;margin-bottom:4px !important;font-weight:700 !important}
/* '--plain' is the same row with no marker: the dot element is not
   rendered, so the text starts at the card's own padding. */
.cs .cs-dots--plain li{gap:0 !important}
.cs .cs-dots span{display:block !important;font-size:.9rem !important;color:var(--s600) !important;line-height:1.55 !important}

/* ═══ CARD GRIDS ════════════════════════════════════════════════════ */
.cs .cs-grid{display:grid !important;gap:20px !important}
.cs .cs-grid--3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr)) !important}
/* Related is always exactly three, so it gets a fixed three-track grid
   rather than auto-fit -- auto-fit would stretch two cards to half-width
   each if a category ever returned fewer. */
.cs .cs-rels{display:grid !important;grid-template-columns:repeat(3,minmax(0,1fr)) !important;gap:20px !important}
.cs .cs-grid--4{grid-template-columns:repeat(auto-fit,minmax(220px,1fr)) !important}
.cs .cs-stack{display:flex !important;flex-direction:column !important;gap:16px !important}

.cs .cs-card{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:28px !important;box-shadow:var(--sh-sm) !important;
  transition:border-color .2s ease,box-shadow .2s ease !important;
}
.cs .cs-card:hover{
  border-color:var(--b600) !important;
  background:#fff !important;background-image:none !important;
  box-shadow:var(--sh) !important;
}
/* Reference draws these with the same white card treatment as the rest:
   a bold black lead line, then grey body copy. */
.cs .cs-card--flat{box-shadow:var(--sh-sm) !important;padding:26px 28px !important}
.cs .cs-card--flat h3{font-size:1.05rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:8px !important}
.cs .cs-card--flat p{font-size:.94rem !important;color:var(--s600) !important;line-height:1.65 !important}
/* A card with no heading is a single sentence: it stays grey body copy
   and is never promoted to bold black. */
.cs .cs-card--flat > p:only-child{font-size:.98rem !important;color:var(--s600) !important}
.cs .cs-card__ico{
  width:44px !important;height:44px !important;border-radius:10px !important;
  background:var(--b50) !important;display:flex !important;align-items:center !important;
  justify-content:center !important;margin-bottom:16px !important;font-size:1.25rem !important;
}
.cs .cs-card h3{font-size:1.1rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:8px !important}
.cs .cs-card p{font-size:.95rem !important;color:var(--s600) !important;line-height:1.65 !important}

/* Technology cards — centred, with the name set in a blue tile. */
.cs .cs-tech{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--r) !important;padding:24px 20px !important;text-align:center !important;
  transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease !important;
}
.cs .cs-tech:hover{
  border-color:var(--b600) !important;
  background:#fff !important;background-image:none !important;
  box-shadow:var(--sh) !important;transform:translateY(-2px) !important;
}
/* Holds a real icon now, not a truncated word. */
.cs .cs-tech__mark{
  width:56px !important;height:56px !important;margin:0 auto 14px !important;border-radius:14px !important;
  background:var(--b50) !important;display:flex !important;align-items:center !important;
  justify-content:center !important;
}
/* Colour on the <i> itself, not inherited: legacy sheets colour 'i'
   directly, and a declaration on the child always beats an inherited
   value from the parent however specific that parent selector is. */
.cs .cs-tech__mark i{font-size:24px !important;line-height:1 !important;color:var(--b600) !important}
.cs .cs-tech h4{font-size:1rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:6px !important}
.cs .cs-tech p{font-size:.85rem !important;color:var(--s500) !important;line-height:1.5 !important}

/* ═══ ARCHITECTURE ══════════════════════════════════════════════════ */
.cs .cs-arch{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:36px 28px !important;box-shadow:var(--sh-sm) !important;
}
.cs .cs-arch__row{
  display:flex !important;flex-wrap:wrap !important;align-items:center !important;
  justify-content:center !important;gap:12px 8px !important;margin-bottom:16px !important;
}
.cs .cs-node{
  background:var(--b50) !important;border:1.5px solid var(--b200) !important;color:var(--b800) !important;
  font-weight:600 !important;font-size:.9rem !important;padding:12px 20px !important;
  border-radius:10px !important;text-align:center !important;min-width:160px !important;
}
.cs .cs-node--api{background:var(--b600) !important;border-color:var(--b600) !important;color:#fff !important}
.cs .cs-node--db{background:var(--s800) !important;border-color:var(--s800) !important;color:#fff !important}
.cs .cs-arrow{color:var(--s400) !important;font-size:1.25rem !important;font-weight:600 !important}
.cs .cs-arch__note{margin-top:22px !important}
.cs .cs-arch__note p{
  text-align:center !important;font-size:.92rem !important;color:var(--s600) !important;
  max-width:560px !important;margin:0 auto 12px !important;line-height:1.65 !important;
}
.cs .cs-arch__note p:last-child{margin-bottom:0 !important}

/* ═══ SCREENS ═══════════════════════════════════════════════════════
   Real artwork from the row's web_screens / app_screens. The reference
   design drew grey placeholder boxes only because it was a static file
   with no data behind it; the card chrome is what it contributes. */
.cs .cs-shots{display:grid !important;gap:24px !important}
/* Two across, not four: at 240px the screenshots were thumbnails. */
.cs .cs-shots--web{grid-template-columns:repeat(auto-fit,minmax(440px,1fr)) !important}
.cs .cs-shots--app{grid-template-columns:repeat(auto-fit,minmax(180px,1fr)) !important}
.cs .cs-shot{
  margin:0 !important;background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;overflow:hidden !important;box-shadow:var(--sh-sm) !important;
  transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease !important;
}
.cs .cs-shot:hover{border-color:var(--b200) !important;box-shadow:var(--sh-md) !important;transform:translateY(-3px) !important}
.cs .cs-shot img{width:100% !important;height:auto !important;background:var(--s50) !important}
.cs .cs-shot--app img{aspect-ratio:9/19 !important;object-fit:cover !important;object-position:top center !important}

/* ═══ RESULTS ═══════════════════════════════════════════════════════ */
.cs .cs-res{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--r) !important;padding:22px 20px !important;
  display:flex !important;gap:14px !important;align-items:flex-start !important;
  transition:border-color .2s ease !important;
}
.cs .cs-res:hover{border-color:var(--b200) !important}
.cs .cs-res__n{
  flex-shrink:0 !important;width:32px !important;height:32px !important;border-radius:8px !important;
  background:var(--b600) !important;color:#fff !important;font-size:.85rem !important;font-weight:700 !important;
  display:flex !important;align-items:center !important;justify-content:center !important;
}
.cs .cs-res strong{display:block !important;font-size:.95rem !important;color:var(--s900) !important;margin-bottom:4px !important;font-weight:700 !important}
.cs .cs-res p{font-size:.93rem !important;color:var(--s700) !important;line-height:1.5 !important}

/* ═══ SERVICE PILLS ═════════════════════════════════════════════════ */
.cs .cs-pills{display:flex !important;flex-wrap:wrap !important;gap:10px !important}
.cs .cs-pill{
  padding:8px 18px !important;border-radius:999px !important;background:var(--b100) !important;
  color:var(--b700) !important;font-size:.78rem !important;font-weight:700 !important;
  letter-spacing:.04em !important;text-transform:uppercase !important;
}

/* ═══ RELATED PROJECTS ══════════════════════════════════════════════ */
.cs .cs-rel{
  display:block !important;background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:24px !important;
  transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease !important;
}
.cs .cs-rel:hover{border-color:var(--b300) !important;box-shadow:var(--sh-md) !important;transform:translateY(-3px) !important}
.cs .cs-rel h4{font-size:1.05rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:8px !important}
.cs .cs-rel p{font-size:.9rem !important;color:var(--s600) !important;line-height:1.55 !important;margin-bottom:14px !important}
.cs .cs-rel__go{font-size:.85rem !important;font-weight:600 !important;color:var(--b600) !important;display:inline-flex !important;align-items:center !important;gap:4px !important}

/* ═══ FAQ — identical to the homepage FAQ ══════════════════════════
   Same values as .hmx-faq / .hmx-faq-item / .hmx-faq-q / .hmx-faq-ico /
   .hmx-faq-a in app/(home)/home-landing.css, so the two read as one
   component. Pure <details> -- no JavaScript. */
.cs .cs-head--center{text-align:center !important;max-width:830px !important;margin:0 auto 52px !important}
.cs .cs-head--center .cs-desc{margin-left:auto !important;margin-right:auto !important}

.cs .cs-qa{
  max-width:880px !important;margin:0 auto !important;display:block !important;
  border-top:1px solid var(--s200) !important;
}
/* 'padding:0' is the important one. The rows previously used the class
   '.cs-faq', which other sheets loaded by the root layout use as a
   SECTION class carrying 'padding: 72px 0' -- so every question row was
   inheriting 72px of vertical padding, and editing the summary padding
   here could never remove it. Renamed to '.cs-qa__item', which nothing
   else claims, and the padding is pinned to zero as a belt-and-braces. */
.cs .cs-qa__item{
  background:transparent !important;border:0 !important;border-radius:0 !important;
  border-bottom:1px solid var(--s200) !important;box-shadow:none !important;
  margin:0 !important;padding:0 !important;
}
.cs .cs-qa__item summary{
  display:flex !important;justify-content:space-between !important;align-items:center !important;
  /* 15px, down from 26. With one-line questions that was leaving ~80px
     of dead space between rows. */
  gap:24px !important;padding:15px 0 !important;cursor:pointer !important;list-style:none !important;
  font-size:16.5px !important;line-height:26px !important;font-weight:600 !important;
  color:var(--s900) !important;letter-spacing:-.25px !important;
  transition:color .25s ease !important;
}
.cs .cs-qa__item summary:hover{color:var(--b600) !important}
.cs .cs-qa__item summary::-webkit-details-marker{display:none !important}
.cs .cs-qa__item summary::after{content:none !important}
.cs .cs-qa__ico{
  flex-shrink:0 !important;width:30px !important;height:30px !important;border-radius:50% !important;
  border:1.5px solid var(--s200) !important;color:var(--s900) !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
  transition:background .3s ease,color .3s ease,border-color .3s ease,transform .3s ease !important;
}
/* Explicit + / x swap via ::before so no icon font can force two glyphs. */
.cs .cs-qa__ico::before{content:"+" !important;font-size:17px !important;font-weight:600 !important;line-height:1 !important}
.cs .cs-qa__item[open] .cs-qa__ico::before{content:"\\00d7" !important;font-size:18px !important}
.cs .cs-qa__item[open] .cs-qa__ico{
  background:var(--b600) !important;border-color:var(--b600) !important;
  color:#fff !important;transform:rotate(90deg) !important;
}
.cs .cs-qa__a,.cs p.cs-qa__a{
  padding:0 60px 18px 0 !important;margin:0 !important;
  font-size:15.5px !important;line-height:27px !important;color:var(--s600) !important;
}
.cs .cs-qa__item[open] .cs-qa__a{animation:csQaOpen .32s ease both !important}
@keyframes csQaOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}

/* ═══ CTA — the page's one CTA, at the bottom ═══════════════════════ */
.cs .cs-cta{
  background:linear-gradient(135deg,var(--b700) 0%,var(--b900) 100%) !important;
  color:#fff !important;padding:56px 0 !important;text-align:center !important;
}
.cs .cs-cta h2{font-size:clamp(1.4rem,3vw,1.75rem) !important;font-weight:700 !important;margin-bottom:12px !important;letter-spacing:-.02em !important;color:#fff !important}
.cs .cs-cta p{font-size:1.05rem !important;color:rgba(255,255,255,.9) !important;max-width:520px !important;margin:0 auto 28px !important;line-height:1.6 !important}
.cs .cs-cta__btns{display:flex !important;flex-wrap:wrap !important;gap:14px !important;justify-content:center !important}

/* ═══ INLINE LINKS IN BODY COPY ═════════════════════════════════════
   One rule for every internal link that comes out of the database --
   About, challenges, objectives, UI/UX, development, security, future
   scope, results, features, FAQ answers. Signature Blue, semibold, and
   NEVER underlined, at rest or on hover. Buttons, related-project cards
   and the breadcrumb are excluded: they have their own treatment. */
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go),
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go):link,
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go):visited{
  color:var(--b600) !important;font-weight:600 !important;
  text-decoration:none !important;border-bottom:0 !important;
  transition:color .18s ease !important;
}
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go):hover,
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go):focus,
.cs a[href]:not(.cs-btn):not(.cs-rel):not(.cs-rel__go):active{
  color:var(--b700) !important;text-decoration:none !important;border-bottom:0 !important;
}
/* The breadcrumb is grey until hovered, so it is restated AFTER the rule
   above -- equal specificity, later in source, so it wins the tie. */
.cs .cs-hero .cs-crumb a[href],
.cs .cs-hero .cs-crumb a[href]:link,
.cs .cs-hero .cs-crumb a[href]:visited{color:var(--s400) !important;font-weight:400 !important}
.cs .cs-hero .cs-crumb a[href]:hover,
.cs .cs-hero .cs-crumb a[href]:focus,
.cs .cs-hero .cs-crumb a[href]:active{color:var(--b600) !important}


/* ═══════════════════════════════════════════════════════════════════
   CASE-STUDY COMPONENTS
   ─────────────────────────────────────────────────────────────────
   Built to the supplied reference. Everything below is additive: the
   portfolio pages do not use these classes, so nothing there moves.
   ═══════════════════════════════════════════════════════════════ */

/* ── Hero fact cards: icon tile + label + value, three across ────── */
.cs .cs-facts{
  display:grid !important;grid-template-columns:repeat(auto-fit,minmax(260px,1fr)) !important;
  gap:20px !important;max-width:1140px !important;margin:0 !important;
}
.cs .cs-fact{
  display:flex !important;align-items:flex-start !important;gap:16px !important;
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:22px 24px !important;
  box-shadow:var(--sh-sm) !important;
}
.cs .cs-fact__ico{
  flex-shrink:0 !important;width:44px !important;height:44px !important;
  border-radius:12px !important;background:var(--b50) !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
}
.cs .cs-fact__ico i{font-size:19px !important;color:var(--b600) !important;line-height:1 !important}
.cs .cs-fact__k{
  display:block !important;font-size:.72rem !important;font-weight:700 !important;
  letter-spacing:.06em !important;text-transform:uppercase !important;
  color:var(--b600) !important;margin-bottom:5px !important;
}
.cs .cs-fact__v{display:block !important;font-size:1rem !important;font-weight:700 !important;color:var(--s900) !important;line-height:1.35 !important}

/* ── Testimonial bar under the hero ──────────────────────────────── */
.cs .cs-quote{
  display:flex !important;align-items:flex-start !important;gap:24px !important;
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:30px 34px !important;
  box-shadow:var(--sh-sm) !important;margin-top:44px !important;
}
.cs .cs-quote__ico{
  flex-shrink:0 !important;width:56px !important;height:56px !important;border-radius:14px !important;
  background:var(--b700) !important;color:#fff !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
}
.cs .cs-quote__ico i{font-size:21px !important;color:#fff !important}
.cs .cs-quote__t{font-size:1.15rem !important;line-height:1.55 !important;color:var(--s800) !important;margin-bottom:10px !important;font-weight:500 !important}
.cs .cs-quote__r{font-size:.92rem !important;font-weight:700 !important;color:var(--b600) !important}

/* ── Challenge stat cards: badge, big blue figure, title, body ───── */
.cs .cs-stats{
  display:grid !important;grid-template-columns:repeat(auto-fit,minmax(340px,1fr)) !important;
  gap:22px !important;
}
.cs .cs-stat{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:26px 28px 28px !important;
  box-shadow:var(--sh-sm) !important;
  transition:border-color .2s ease,box-shadow .2s ease !important;
}
/* Blue border on hover and nothing else. A legacy sheet paints a
   blue-to-gold gradient on card hover; 'background' and 'background-image'
   are both pinned here because a gradient lives in background-image and
   setting 'background' alone does not always clear it. */
.cs .cs-stat:hover{
  border-color:var(--b600) !important;
  background:#fff !important;background-image:none !important;
  box-shadow:var(--sh) !important;
}
.cs .cs-stat__badge{
  display:inline-flex !important;align-items:center !important;gap:7px !important;
  padding:6px 14px !important;border-radius:999px !important;
  background:var(--b50) !important;color:var(--b700) !important;
  font-size:.7rem !important;font-weight:700 !important;
  letter-spacing:.06em !important;text-transform:uppercase !important;
  margin-bottom:18px !important;
}
.cs .cs-stat__badge i{font-size:11px !important;color:var(--b600) !important}
.cs .cs-stat__n{
  display:block !important;font-size:2.1rem !important;font-weight:800 !important;
  color:var(--b600) !important;letter-spacing:-.03em !important;line-height:1.1 !important;
  margin-bottom:12px !important;
}
.cs .cs-stat__t{display:block !important;font-size:1rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:7px !important}
.cs .cs-stat__d{font-size:.94rem !important;line-height:1.6 !important;color:var(--s600) !important}

/* ── Development process: a horizontal rail of numbered steps ───── */
.cs .cs-rail{
  display:grid !important;grid-auto-flow:column !important;
  grid-auto-columns:minmax(0,1fr) !important;gap:0 !important;align-items:stretch !important;
}
.cs .cs-step{
  position:relative !important;text-align:center !important;
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:26px 22px 28px !important;
  margin:0 6px !important;
}
/* The connector between cards: a hairline that starts at the numeral's
   centre line, drawn only BETWEEN steps (never off the last one). */
.cs .cs-step + .cs-step::before{
  content:"" !important;position:absolute !important;
  left:-18px !important;top:47px !important;width:24px !important;height:2px !important;
  background:var(--b200) !important;
}
.cs .cs-step__n{
  width:42px !important;height:42px !important;border-radius:50% !important;
  background:var(--b700) !important;color:#fff !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
  font-size:1rem !important;font-weight:700 !important;line-height:1 !important;
  font-variant-numeric:tabular-nums !important;margin-bottom:18px !important;
}
.cs .cs-step__t{display:block !important;font-size:.98rem !important;font-weight:700 !important;color:var(--s900) !important;margin-bottom:8px !important;line-height:1.35 !important}
.cs .cs-step__d{font-size:.9rem !important;line-height:1.55 !important;color:var(--s600) !important}

/* ── Results: a row of figure tiles ─────────────────────────────── */
.cs .cs-kpis{
  display:grid !important;grid-template-columns:repeat(auto-fit,minmax(180px,1fr)) !important;
  gap:20px !important;
}
.cs .cs-kpi{
  background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:30px 20px !important;text-align:center !important;
  box-shadow:var(--sh-sm) !important;
}
.cs .cs-kpi:hover{border-color:var(--b600) !important;background:#fff !important;background-image:none !important}
.cs .cs-kpi__n{
  display:block !important;font-size:2.3rem !important;font-weight:800 !important;
  color:var(--b600) !important;letter-spacing:-.03em !important;line-height:1.1 !important;
  margin-bottom:12px !important;
}
.cs .cs-kpi__l{font-size:.92rem !important;line-height:1.5 !important;color:var(--s600) !important}

/* ── Key takeaway: the one deep-blue panel on the page ──────────── */
/* The takeaway sits on the WHITE band below the results, as drawn --
   its own section, not tacked onto the grey one. */
.cs .cs-takeaway{
  background:linear-gradient(100deg,#2842AC 0%,#3560E0 100%) !important;
  border-radius:20px !important;padding:40px 44px !important;margin:0 !important;
  color:#fff !important;
}
.cs .cs-takeaway__k{
  display:inline-flex !important;align-items:center !important;gap:8px !important;
  font-size:.72rem !important;font-weight:700 !important;letter-spacing:.08em !important;
  text-transform:uppercase !important;color:rgba(255,255,255,.85) !important;
  margin-bottom:16px !important;
}
.cs .cs-takeaway__k i{font-size:13px !important;color:rgba(255,255,255,.85) !important}
.cs .cs-takeaway p{font-size:1.15rem !important;line-height:1.65 !important;color:#fff !important;margin-bottom:12px !important}
.cs .cs-takeaway p:last-child{margin-bottom:0 !important}

/* ── Related services: wide rows, title left, arrow right ───────── */
.cs .cs-links{
  display:grid !important;grid-template-columns:repeat(auto-fit,minmax(280px,1fr)) !important;
  gap:20px !important;
}
.cs a.cs-link{
  display:flex !important;align-items:center !important;justify-content:space-between !important;
  gap:18px !important;background:#fff !important;border:1px solid var(--s200) !important;
  border-radius:var(--rlg) !important;padding:22px 26px !important;
  font-size:1rem !important;font-weight:700 !important;color:var(--s900) !important;
  transition:border-color .2s ease,box-shadow .2s ease,transform .2s ease !important;
}
.cs a.cs-link:hover{
  border-color:var(--b300) !important;box-shadow:var(--sh-md) !important;
  transform:translateY(-2px) !important;color:var(--s900) !important;
}
.cs a.cs-link i{font-size:15px !important;color:var(--b600) !important;transition:transform .2s ease !important}
.cs a.cs-link:hover i{transform:translateX(4px) !important}

/* ── Centred tech cards, as the reference draws them ────────────── */
.cs .cs-tech--center{text-align:center !important}

@media (max-width:980px){
  /* The rail stops being a rail on narrow screens: a horizontal row of
     five would shrink each step below a readable measure. */
  .cs .cs-rail{grid-auto-flow:row !important;grid-auto-columns:auto !important;gap:16px !important}
  .cs .cs-step{margin:0 !important}
  .cs .cs-step + .cs-step::before{
    left:50% !important;top:-10px !important;width:2px !important;height:12px !important;
    transform:translateX(-50%) !important;
  }
}
@media (max-width:860px){
  .cs .cs-quote{flex-direction:column !important;gap:16px !important;padding:24px !important}
  .cs .cs-takeaway{padding:28px 24px !important}
  .cs .cs-stats{grid-template-columns:minmax(0,1fr) !important}
}


/* ── HOVER: border only, never a gradient ─────────────────────────
   Legacy sheets paint a blue-to-gold gradient on card hover. A gradient
   lives in 'background-image', and some of those rules draw it through a
   ::before overlay rather than on the element -- so clearing 'background'
   alone does nothing. All three are pinned here. */
.cs .cs-stat,.cs .cs-card,.cs .cs-tech,.cs .cs-kpi,
.cs .cs-stat:hover,.cs .cs-card:hover,.cs .cs-tech:hover,.cs .cs-kpi:hover,
.cs .cs-stat:focus-within,.cs .cs-card:focus-within{
  background:#FFFFFF !important;
  background-image:none !important;
}
.cs .cs-stat::before,.cs .cs-stat::after,
.cs .cs-card::before,.cs .cs-card::after,
.cs .cs-tech::before,.cs .cs-tech::after,
.cs .cs-kpi::before,.cs .cs-kpi::after{
  content:none !important;background:none !important;background-image:none !important;
}
.cs .cs-stat:hover,.cs .cs-card:hover,.cs .cs-tech:hover,.cs .cs-kpi:hover{
  border-color:var(--b600) !important;
}

/* ── TEXT COLOURS, pinned to the sampled values ──────────────────── */
.cs .cs-eyebrow{color:var(--b600) !important}
.cs .cs-h2,.cs .cs-h1{color:var(--s900) !important}
.cs .cs-desc,.cs .cs-prose p{color:var(--s600) !important}
.cs .cs-stat__n,.cs .cs-kpi__n{color:var(--b600) !important}
.cs .cs-stat__t{color:var(--s900) !important}
.cs .cs-stat__d,.cs .cs-kpi__l{color:var(--s600) !important}
.cs .cs-stat__badge{background:var(--b50) !important;color:var(--b700) !important}
.cs .cs-stat__badge i{color:var(--b700) !important}
.cs .cs-card h3,.cs .cs-tech h4{color:var(--s900) !important}
.cs .cs-card p,.cs .cs-tech p{color:var(--s600) !important}
.cs .cs-card__ico,.cs .cs-tech__mark,.cs .cs-fact__ico{background:var(--b50) !important}
.cs .cs-card__ico i,.cs .cs-tech__mark i,.cs .cs-fact__ico i{color:var(--b600) !important}

/* ═══ RESPONSIVE ════════════════════════════════════════════════════ */
@media (max-width:860px){
  .cs .cs-hero{padding:104px 0 52px !important}
  .cs .cs-2col{grid-template-columns:1fr !important;gap:32px !important}
  .cs .cs-sec{padding:44px 0 !important}
  .cs .cs-head{margin-bottom:26px !important}
  .cs .cs-table th,.cs .cs-table td{padding:13px 16px !important}
  .cs .cs-table th{width:42% !important;font-size:.78rem !important}
  .cs .cs-arch__row{flex-direction:column !important}
  .cs .cs-arrow{transform:rotate(90deg) !important}
  .cs .cs-acts{flex-direction:column !important;align-items:stretch !important}
  .cs .cs-btn{width:100% !important}
  .cs .cs-cta__btns{flex-direction:column !important}
  .cs .cs-panel{max-width:100% !important;padding:26px !important}
  .cs .cs-rels{grid-template-columns:minmax(0,1fr) !important}
  .cs .cs-qa__a{padding-right:0 !important}
  .cs .cs-qa__item summary{font-size:15.5px !important;line-height:25px !important;gap:16px !important;padding:13px 0 !important}
  .cs .cs-meta{padding:22px !important}
}

`;
