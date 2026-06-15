"use client";

import { useEffect } from "react";
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
 */
export default function ScrollRestorationManager() {
  const pathname = usePathname();

  // Disable the browser's automatic scroll restoration once, on mount.
  useEffect(() => {
    if (typeof window === "undefined" || !("scrollRestoration" in window.history)) {
      return;
    }
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    // Ensure the very first paint of this document is at the top.
    window.scrollTo(0, 0);
    return () => {
      try {
        window.history.scrollRestoration = previous;
      } catch {
        /* ignore */
      }
    };
  }, []);

  // Reset scroll on every route change.
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
