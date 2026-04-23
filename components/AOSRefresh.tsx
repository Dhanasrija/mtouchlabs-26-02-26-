"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Refreshes AOS (Animate-On-Scroll) and re-triggers component visibility on
 * client-side route changes. Without this, pages navigated to via Next.js
 * router (without a full reload) can end up with `[data-aos]` elements stuck
 * at opacity:0 because AOS only initialises once on the initial load.
 */
export default function AOSRefresh() {
  const pathname = usePathname();

  useEffect(() => {
    // Run several passes as the page hydrates and images/fonts settle in
    const timers: number[] = [];
    const run = () => {
      try {
        // @ts-expect-error – AOS attaches to window
        if (typeof window !== "undefined" && window.AOS) {
          // @ts-expect-error – AOS typed by CDN
          if (typeof window.AOS.init === "function") {
            // @ts-expect-error – AOS typed by CDN
            window.AOS.init({ duration: 600, once: true, disable: false });
          }
          // @ts-expect-error – AOS typed by CDN
          if (typeof window.AOS.refreshHard === "function") window.AOS.refreshHard();
          // @ts-expect-error – AOS typed by CDN
          else if (typeof window.AOS.refresh === "function") window.AOS.refresh();
        }
      } catch {}

      // Fallback: ensure `[data-aos]` elements never stay invisible forever.
      try {
        document.querySelectorAll<HTMLElement>("[data-aos]").forEach((el) => {
          el.classList.add("aos-animate");
        });
      } catch {}
    };

    timers.push(window.setTimeout(run, 50));
    timers.push(window.setTimeout(run, 400));
    timers.push(window.setTimeout(run, 1200));

    return () => {
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}
