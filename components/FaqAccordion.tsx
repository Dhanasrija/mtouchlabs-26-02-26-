"use client";

import { useEffect } from "react";

/**
 * One FAQ behaviour for the whole site: opening an answer closes the others
 * in the same list.
 *
 * The site has three different FAQ implementations, and only /services was
 * exclusive:
 *   1. <details> lists with no `name` (portfolio, hire-* pages) — every item
 *      could sit open at once. Giving the siblings a shared `name` makes the
 *      browser enforce exclusivity natively, no JS on click.
 *   2. Class-toggled lists (.cr-faq-item.active, ._faq_item.active) driven by
 *      each page's own inline script, which did not always close siblings.
 *   3. React-state lists (products template) — already exclusive, untouched.
 *
 * A MutationObserver re-runs the pass so content rendered after hydration is
 * covered too.
 */
const DETAILS_LISTS = [
  ".pf-faq-list",
  ".hd-faqList",
  ".hma-faqList",
  ".svcx-faq-list",
  ".fd-faq-list",
  ".gd-faq-list",
  ".odm-faq-list",
];

const CLASS_LISTS: { list: string; item: string; active: string }[] = [
  { list: ".cr-faq-list", item: ".cr-faq-item", active: "active" },
  { list: "._faq_list", item: "._faq_item", active: "active" },
  { list: ".hd-faq-container", item: ".hd-faq-item", active: "active" },
];

export default function FaqAccordion() {
  useEffect(() => {
    let group = 0;

    const wire = () => {
      // 1. Native exclusive accordion for <details> lists.
      DETAILS_LISTS.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((list) => {
          const items = Array.from(
            list.querySelectorAll<HTMLDetailsElement>(":scope > details"),
          );
          if (items.length < 2) return;
          const existing = items.find((d) => d.getAttribute("name"));
          const name = existing?.getAttribute("name") || `faq-g${group++}`;
          items.forEach((d) => {
            if (d.getAttribute("name") !== name) d.setAttribute("name", name);
          });
        });
      });

      // 2. Class-toggled lists: close siblings when one is opened.
      CLASS_LISTS.forEach(({ list, item, active }) => {
        document.querySelectorAll<HTMLElement>(list).forEach((container) => {
          if (container.dataset.faqExclusive === "1") return;
          container.dataset.faqExclusive = "1";
          container.addEventListener(
            "click",
            (e) => {
              const target = e.target as HTMLElement | null;
              const clicked = target?.closest(item) as HTMLElement | null;
              if (!clicked || !container.contains(clicked)) return;
              // The page's own handler toggles `clicked`; defer so we read the
              // state it just wrote, then clear every sibling.
              requestAnimationFrame(() => {
                if (!clicked.classList.contains(active)) return;
                container.querySelectorAll<HTMLElement>(item).forEach((el) => {
                  if (el !== clicked) el.classList.remove(active);
                });
              });
            },
            true,
          );
        });
      });
    };

    wire();

    const mo = new MutationObserver(() => wire());
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);

  return null;
}
