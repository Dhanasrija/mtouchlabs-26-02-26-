import Script from "next/script";
import PortfolioInit from "./PortfolioInit";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* No <link> to a stylesheet here any more.
          case-study.css was dropped because it set !important on nearly
          every declaration (a dark hero, `.cs-hero__cards { display:none }`)
          and fought every override. Its replacement is no longer a file in
          /public either: it is inlined into the detail page itself, because
          /public is served with a long cache header and the browser kept
          handing back the old copy through hard refreshes. See the note in
          app/portfolio/[slug]/case-study-css.ts. */}
      {children}
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
      {/* Re-runs the listing renderer on every client-side route change
          inside /portfolio, so cards reappear after navigation. */}
      <PortfolioInit />
    </>
  );
}
