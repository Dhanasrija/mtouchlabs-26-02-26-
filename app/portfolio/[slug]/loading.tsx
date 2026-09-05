/* ═══════════════════════════════════════════════════════════════════════
   Suspense fallback for /portfolio/<slug>
   ─────────────────────────────────────────────────────────────────────
   THE BUG THIS FIXES
   Clicking a card on /portfolio showed the FOOTER for a second or two,
   then jumped to the top of the project page.

   Why: the detail page is an async server component that queries the
   database. While that query is in flight Next.js needs something to
   render in the route slot. With no loading.tsx it renders nothing --
   so the layout collapses to zero height and the only thing left on
   screen is the footer, sitting directly under the navbar. When the data
   lands the real page replaces it and the viewport snaps to the top.

   The fix is not to make the query faster; it is to give the slot
   something the height and shape of the real hero, so the page holds its
   position and the footer never rides up. Same fix as app/(home)/loading.tsx.

   Everything here is inline: a fallback that imported a stylesheet could
   itself suspend, which is the problem all over again.
   ═══════════════════════════════════════════════════════════════════ */
export default function PortfolioDetailLoading() {
  return (
    <div className="csl" role="status" aria-label="Loading project">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .csl{
          background:linear-gradient(160deg,#eff6ff 0%,#fff 55%,#f8fafc 100%);
          border-bottom:1px solid #e2e8f0;
          padding:132px 24px 72px;
          min-height:78vh;
        }
        .csl-in{max-width:1140px;margin:0 auto}
        .csl-b{
          background:linear-gradient(90deg,#eef1f6 25%,#e3e8f0 37%,#eef1f6 63%);
          background-size:400% 100%;
          animation:cslShimmer 1.4s ease infinite;
          border-radius:8px;
        }
        .csl-crumb{width:240px;height:14px;margin-bottom:28px}
        .csl-tags{display:flex;gap:8px;margin-bottom:20px}
        .csl-tag{width:104px;height:26px;border-radius:999px}
        .csl-h1{width:min(760px,92%);height:44px;margin-bottom:14px}
        .csl-h1b{width:min(520px,70%);height:44px;margin-bottom:26px}
        .csl-lead{width:min(620px,86%);height:16px;margin-bottom:10px}
        .csl-lead2{width:min(460px,64%);height:16px;margin-bottom:34px}
        .csl-acts{display:flex;gap:12px;margin-bottom:40px;flex-wrap:wrap}
        .csl-btn{width:236px;height:52px;border-radius:999px}
        .csl-meta{
          max-width:880px;padding:26px 34px;background:#fff;
          border:1px solid #e2e8f0;border-radius:16px;
          display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));
          gap:22px 28px;
        }
        .csl-k{width:64px;height:11px;margin-bottom:9px}
        .csl-v{width:118px;height:15px}
        @keyframes cslShimmer{0%{background-position:100% 0}100%{background-position:0 0}}
        /* Respect a reduced-motion preference: the shimmer stops, the
           layout still reserves the space, which is the part that matters. */
        @media (prefers-reduced-motion:reduce){
          .csl-b{animation:none;background:#eef1f6}
        }
        @media (max-width:860px){
          .csl{padding:104px 20px 52px}
          .csl-btn{width:100%}
        }
      `,
        }}
      />
      <div className="csl-in">
        <div className="csl-b csl-crumb" />
        <div className="csl-tags">
          <span className="csl-b csl-tag" />
          <span className="csl-b csl-tag" />
          <span className="csl-b csl-tag" />
        </div>
        <div className="csl-b csl-h1" />
        <div className="csl-b csl-h1b" />
        <div className="csl-b csl-lead" />
        <div className="csl-b csl-lead2" />
        <div className="csl-acts">
          <span className="csl-b csl-btn" />
          <span className="csl-b csl-btn" />
        </div>
        <div className="csl-meta">
          {[0, 1, 2, 3].map((i) => (
            <div key={i}>
              <div className="csl-b csl-k" />
              <div className="csl-b csl-v" />
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
        Loading project details
      </span>
    </div>
  );
}
