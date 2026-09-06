import Script from "next/script";
import PortfolioInit from "./PortfolioInit";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* NO stylesheet link here, deliberately.
          case-study.css was dropped first: it set `!important` on
          essentially every declaration -- including a 160px dark hero and
          `.cs-hero__cards { display: none }` -- so an override sheet could
          only win some of the fights and the page rendered half old, half
          new. case-study-redesign.css then replaced it, but linking it from
          /public turned out to be its own trap: that directory is served
          with a long cache header, so a browser kept handing back the copy
          it fetched days earlier and every change looked like it had not
          been made. The redesign now travels INSIDE the page as an inline
          <style> (CASE_STUDY_CSS in @/lib/case-study-shared), which cannot
          be cached separately from the markup it styles, cannot 404, and
          cannot be reordered by the framework. /css/case-study-redesign.css
          is still written to disk as a readable reference; nothing loads
          it. */}
      {children}
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
      {/* Re-runs the listing renderer on every client-side route change
          inside /portfolio, so cards reappear after navigation. */}
      <PortfolioInit />
    </>
  );
}
