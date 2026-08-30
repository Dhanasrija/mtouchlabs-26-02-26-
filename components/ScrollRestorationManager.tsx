"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Keeps every route starting at the top of the page.
 *
 * Two problems this fixes:
 *   1. The browser's default `history.scrollRestoration = 'auto'` can restore
 *      a previously-stored scroll position when a URL is re-opened, so a page
 *      like /blog briefly shows its footer before settling to the top. We
 *      switch restoration to 'manual' so the browser never does this.
 *   2. On client-side route changes we explicitly jump to the top so the new
 *      page always starts where the user expects.
 *
 * ⚠️ TIMING — why this uses useLayoutEffect, not useEffect.
 *   `useEffect` runs AFTER the browser has painted. On a client-side
 *   navigation the new page therefore painted once at the OLD scroll offset
 *   before the reset landed. If you clicked a link in the footer you saw the
 *   next page's footer for a frame or two, then it snapped to the top — the
 *   exact "it loads at the bottom then jumps" bug.
 *   `useLayoutEffect` runs synchronously after DOM mutation and BEFORE paint,
 *   so the reset happens in the same frame and nothing intermediate is ever
 *   shown. React warns if useLayoutEffect runs during SSR, so we fall back to
 *   useEffect on the server, where it never executes anyway.
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScrollRestorationManager() {
  const pathname = usePathname();

  // Disable the browser's automatic scroll restoration once, on mount.
  useEffect(() => {
    if (typeof window === "undefined" || !("scrollRestoration" in window.history)) {
      return;
    }
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      try {
        window.history.scrollRestoration = previous;
      } catch {
        /* ignore */
      }
    };
  }, []);

  // Reset scroll on every route change — before paint, so there is no flash.
  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;
    // A real in-page anchor (#section) should be honoured rather than
    // overridden, so only force the top when there is no hash target.
    if (window.location.hash) return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
