"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ExternalizeInternalLinks
 * ────────────────────────────────────────────────────────────
 * Makes every internal link on the site open in a new browser
 * tab, without having to edit each link by hand across ~180
 * pages.
 *
 * HOW IT WORKS
 * We set `target="_blank"` (plus `rel="noopener"`) on qualifying
 * anchors rather than intercepting clicks. That matters: Next's
 * <Link> checks the anchor's target and skips client-side
 * navigation when it is anything other than "_self", so the
 * browser handles the click natively and we get exactly one new
 * tab — not a navigation AND a tab.
 *
 * `rel="noopener"` is required, not cosmetic: without it the
 * opened page can reach back through window.opener.
 *
 * WHAT IS DELIBERATELY LEFT ALONE
 *   • #hash links      — in-page jumps must stay in the tab
 *   • mailto: / tel: / javascript: / blob: / data:
 *   • external hosts   — already leave the site
 *   • /admin           — an internal tool; a new tab per click
 *                        would make it unusable
 *   • header / nav / footer / mega-menu — site navigation
 *                        must navigate in place, not spawn tabs
 *   • download links   — the browser handles those itself
 *   • [data-same-tab]  — explicit opt-out for any anchor
 *
 * A MutationObserver keeps this working for content rendered
 * after hydration (menus, carousels, modals, the chat widget).
 */

const SKIP_PREFIXES = ["mailto:", "tel:", "javascript:", "blob:", "data:", "#"];

function shouldOpenInNewTab(a: HTMLAnchorElement): boolean {
  if (a.dataset.sameTab !== undefined) return false;
  if (a.hasAttribute("download")) return false;
  if (a.target && a.target !== "" && a.target !== "_self") return false; // already set

  const raw = a.getAttribute("href");
  if (!raw) return false;
  if (SKIP_PREFIXES.some((p) => raw.toLowerCase().startsWith(p))) return false;

  // Resolve against the current page so relative hrefs are handled too.
  let url: URL;
  try {
    url = new URL(a.href, window.location.href);
  } catch {
    return false;
  }
  if (url.origin !== window.location.origin) return false;      // external
  if (url.pathname.startsWith("/admin")) return false;          // internal tool

  // Navigation chrome must navigate in place. Only links in the BODY of a
  // page open a new tab — the header, nav, mega-menu and footer are how
  // people move around the site, and spawning a tab per click there makes
  // browsing unusable.
  if (a.closest("header, nav, footer, [class*='mega-menu'], [class*='navbar'], [class*='Navbar'], [class*='footer'], [class*='ft-']")) {
    return false;
  }
  // Pure in-page anchor (same path, only the hash differs).
  if (url.pathname === window.location.pathname && url.hash) return false;

  return true;
}

function apply(root: ParentNode = document) {
  const anchors = root.querySelectorAll<HTMLAnchorElement>("a[href]");
  anchors.forEach((a) => {
    if (!shouldOpenInNewTab(a)) return;
    a.target = "_blank";
    const rel = (a.rel || "").split(/\s+/).filter(Boolean);
    if (!rel.includes("noopener")) rel.push("noopener");
    a.rel = rel.join(" ");
  });
}

export default function ExternalizeInternalLinks() {
  const pathname = usePathname();

  useEffect(() => {
    apply();

    // Re-apply for anything that mounts after hydration.
    const observer = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (n.nodeType !== Node.ELEMENT_NODE) return;
          const el = n as Element;
          if (el.matches?.("a[href]")) {
            if (shouldOpenInNewTab(el as HTMLAnchorElement)) {
              const a = el as HTMLAnchorElement;
              a.target = "_blank";
              const rel = (a.rel || "").split(/\s+/).filter(Boolean);
              if (!rel.includes("noopener")) rel.push("noopener");
              a.rel = rel.join(" ");
            }
          } else {
            apply(el);
          }
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
