/**
 * Shown while the homepage renders.
 *
 * WHY THIS EXISTS AT ALL
 * It used to `return null`, to avoid a spinner flashing over a hero that
 * paints instantly. That was right when the page was fully static. Then
 * the page started awaiting the blogs query, so the route suspends —
 * and with a null fallback the browser rendered the layout with NOTHING
 * between the header and the footer. The footer sat under the navbar for
 * a couple of seconds on every navigation to "/", which is exactly what
 * it looked like: a broken page.
 *
 * So this is not a spinner. It is a hero-shaped skeleton: the same
 * vertical rhythm and the same light gradient stage as the real hero, in
 * flat neutral blocks. The page keeps its shape while it resolves, and
 * the footer stays where it belongs — below a page-height of content.
 *
 * `aria-hidden` plus `role="status"`: the blocks are meaningless to a
 * screen reader, but the fact that something is loading is not.
 */
export default function Loading() {
  return (
    <div className="hml" role="status" aria-label="Loading">
      <style>{`
        .hml {
          padding: 104px 0 96px;
          background-color: #FBFBFE;
          background-image:
            radial-gradient(ellipse 70% 60% at 50% 0%, rgba(62,140,251,.07) 0%, transparent 72%),
            linear-gradient(180deg, #FFFFFF 0%, #F4F5FC 100%);
        }
        .hml-wrap { max-width: 1160px; margin: 0 auto; padding: 0 28px; text-align: center; }
        /* One shimmer keyframe shared by every block. Neutral grey, low
           contrast — a skeleton should read as absence, not as content. */
        .hml-b {
          background: linear-gradient(90deg,#EDEFF5 25%,#F5F6FA 50%,#EDEFF5 75%);
          background-size: 200% 100%;
          border-radius: 10px;
          animation: hml-sh 1.4s ease-in-out infinite;
          margin: 0 auto;
        }
        @keyframes hml-sh { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        @media (prefers-reduced-motion: reduce) { .hml-b { animation: none; } }
        .hml-kick { width: 300px; height: 16px; margin-bottom: 34px; }
        .hml-h1a  { width: min(760px,92%); height: 60px; margin-bottom: 16px; }
        .hml-h1b  { width: min(520px,78%); height: 60px; margin-bottom: 30px; }
        .hml-lead { width: min(600px,88%); height: 18px; margin-bottom: 10px; }
        .hml-lead2{ width: min(460px,72%); height: 18px; margin-bottom: 40px; }
        .hml-btns { display: flex; gap: 18px; justify-content: center; margin-bottom: 76px; }
        .hml-btn  { width: 180px; height: 54px; border-radius: 10px; }
        .hml-card { width: 100%; height: 132px; border-radius: 24px; }
        @media (max-width: 720px) {
          .hml { padding: 82px 0 60px; }
          .hml-h1a, .hml-h1b { height: 40px; }
          .hml-btns { flex-direction: column; }
          .hml-btn { width: 100%; }
          .hml-card { height: 300px; }
        }
      `}</style>

      <div className="hml-wrap" aria-hidden="true">
        <div className="hml-b hml-kick" />
        <div className="hml-b hml-h1a" />
        <div className="hml-b hml-h1b" />
        <div className="hml-b hml-lead" />
        <div className="hml-b hml-lead2" />
        <div className="hml-btns">
          <div className="hml-b hml-btn" />
          <div className="hml-b hml-btn" />
        </div>
        <div className="hml-b hml-card" />
      </div>
    </div>
  );
}
