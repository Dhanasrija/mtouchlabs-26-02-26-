"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-runs the portfolio initializers on every client-side route change
 * inside /portfolio. portfolio.js loads once via the layout's <Script>;
 * its IIFEs only execute on first script load and miss subsequent Next.js
 * navigations. This component plugs that gap:
 *   - /portfolio  → re-render the listing grid
 *   - /portfolio/<slug> → re-bind the TOC scroll-spy + FAQ accordion
 *
 * The two init functions are exposed on `window` by /public/js/portfolio.js.
 */
type WindowWithPortfolioInit = Window & {
  __mtlInitPortfolioList?: () => void;
  __mtlInitPortfolioTOC?: () => void;
};

export default function PortfolioInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as WindowWithPortfolioInit;

    // Try a few times — the <Script strategy="afterInteractive"> may not have
    // attached the global yet on the very first paint.
    let attempts = 0;
    const tick = () => {
      attempts += 1;
      const onListing = pathname === "/portfolio";
      const onDetail = !!pathname && pathname.startsWith("/portfolio/");
      let dispatched = false;

      if (onListing && typeof w.__mtlInitPortfolioList === "function") {
        w.__mtlInitPortfolioList();
        dispatched = true;
      }
      if (onDetail && typeof w.__mtlInitPortfolioTOC === "function") {
        w.__mtlInitPortfolioTOC();
        dispatched = true;
      }

      if (!dispatched && attempts < 25) {
        setTimeout(tick, 120);
      }
    };
    tick();
  }, [pathname]);

  return null;
}
