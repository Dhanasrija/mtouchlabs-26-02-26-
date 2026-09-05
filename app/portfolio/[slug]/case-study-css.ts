/* ═══════════════════════════════════════════════════════════════════════
   Portfolio detail stylesheet, as a module constant.
   ─────────────────────────────────────────────────────────────────────
   This is the same CSS that used to live at /css/case-study-redesign.css.
   It is injected as an inline <style> by app/portfolio/[slug]/page.tsx,
   because the external <link> route had three separate ways to silently
   serve stale CSS or none at all:

     1. Next.js serves /public with a long-lived cache header, so the
        browser kept the old file even through a hard page refresh --
        new file on disk, old file in the browser.
     2. A <link> rendered from a server component lands in the body,
        where React 19 may hoist, dedupe or reorder it.
     3. If the file 404s for any reason the page still renders, just
        unstyled by us and falling back to bundle.css, with no error
        surfaced anywhere.

   Inlined, the CSS ships inside the page's own HTML. It cannot be cached
   separately from the page, cannot 404, and cannot be reordered away. It
   gzips to a few KB and saves a request.

   To edit: change this file. There is no longer a copy in /public.
   ═══════════════════════════════════════════════════════════════════ */

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
  --b50:#eff6ff;--b100:#dbeafe;--b200:#bfdbfe;--b300:#93c5fd;
  --b500:#3b82f6;--b600:#2563eb;--b700:#1d4ed8;--b800:#1e40af;--b900:#1e3a8a;
  --s50:#f8fafc;--s100:#f1f5f9;--s200:#e2e8f0;--s300:#cbd5e1;--s400:#94a3b8;
  --s500:#64748b;--s600:#475569;--s700:#334155;--s800:#1e293b;--s900:#0f172a;
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
.cs .cs-card:hover{border-color:var(--b200) !important;box-shadow:var(--sh) !important}
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
.cs .cs-tech:hover{border-color:var(--b300) !important;box-shadow:var(--sh) !important;transform:translateY(-2px) !important}
.cs .cs-tech__mark{
  width:52px !important;height:52px !important;margin:0 auto 14px !important;border-radius:12px !important;
  background:var(--b50) !important;display:flex !important;align-items:center !important;
  justify-content:center !important;font-weight:700 !important;font-size:.8rem !important;
  color:var(--b700) !important;overflow:hidden !important;padding:0 4px !important;
}
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
.cs .cs-shots{display:grid !important;gap:20px !important}
.cs .cs-shots--web{grid-template-columns:repeat(auto-fit,minmax(240px,1fr)) !important}
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

.cs .cs-faqs{
  max-width:880px !important;margin:0 auto !important;display:block !important;
  border-top:1px solid var(--s200) !important;
}
.cs .cs-faq{
  background:transparent !important;border:0 !important;border-radius:0 !important;
  border-bottom:1px solid var(--s200) !important;box-shadow:none !important;margin:0 !important;
}
.cs .cs-faq summary{
  display:flex !important;justify-content:space-between !important;align-items:center !important;
  gap:24px !important;padding:26px 0 !important;cursor:pointer !important;list-style:none !important;
  font-size:17px !important;line-height:28px !important;font-weight:600 !important;
  color:var(--s900) !important;letter-spacing:-.25px !important;
  transition:color .25s ease !important;
}
.cs .cs-faq summary:hover{color:var(--b600) !important}
.cs .cs-faq summary::-webkit-details-marker{display:none !important}
.cs .cs-faq summary::after{content:none !important}
.cs .cs-faq__ico{
  flex-shrink:0 !important;width:30px !important;height:30px !important;border-radius:50% !important;
  border:1.5px solid var(--s200) !important;color:var(--s900) !important;
  display:inline-flex !important;align-items:center !important;justify-content:center !important;
  transition:background .3s ease,color .3s ease,border-color .3s ease,transform .3s ease !important;
}
/* Explicit + / x swap via ::before so no icon font can force two glyphs. */
.cs .cs-faq__ico::before{content:"+" !important;font-size:17px !important;font-weight:600 !important;line-height:1 !important}
.cs .cs-faq[open] .cs-faq__ico::before{content:"\\00d7" !important;font-size:18px !important}
.cs .cs-faq[open] .cs-faq__ico{
  background:var(--b600) !important;border-color:var(--b600) !important;
  color:#fff !important;transform:rotate(90deg) !important;
}
.cs .cs-faq__a,.cs p.cs-faq__a{
  padding:0 60px 28px 0 !important;margin:0 !important;
  font-size:15.5px !important;line-height:29px !important;color:var(--s600) !important;
}
.cs .cs-faq[open] .cs-faq__a{animation:csFaqOpen .32s ease both !important}
@keyframes csFaqOpen{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:none}}

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
  .cs .cs-faq__a p{padding-right:0 !important}
  .cs .cs-faq summary{font-size:15.5px !important;line-height:26px !important;gap:16px !important;padding:22px 0 !important}
  .cs .cs-meta{padding:22px !important}
}

`;