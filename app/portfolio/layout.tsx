import Script from "next/script";
import PortfolioInit from "./PortfolioInit";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="/css/case-study.css" />
      {children}
      <Script src="/js/portfolio.js" strategy="afterInteractive" />
      {/* Re-runs the listing renderer and TOC scroll-spy on every client-side
          route change inside /portfolio, so cards reappear after navigation
          and TOC highlighting works on every detail page. */}
      <PortfolioInit />
    </>
  );
}
