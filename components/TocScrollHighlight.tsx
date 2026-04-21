'use client';

import { useEffect } from 'react';

export default function TocScrollHighlight() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.blv3-toc-link'));
    if (!links.length) return;

    type Entry = { id: string; el: HTMLElement; link: HTMLElement };
    const entries: Entry[] = [];

    links.forEach((link) => {
      const href = link.getAttribute('href') ?? '';
      const id = href.startsWith('#') ? href.slice(1) : href;
      if (!id) return;
      const el = document.getElementById(id);
      if (el) entries.push({ id, el, link: link as HTMLElement });
    });

    if (!entries.length) return;

    let currentActive = '';
    // Treat the page as "still at top" until the user has actually scrolled
    // meaningfully away from the top. While still-at-top, we force the
    // first TOC item active so the indicator never jumps to a mid-article
    // section (e.g. "The Award Ceremony") during the first paint, even if
    // an IntersectionObserver callback reports a later heading as the
    // first one currently in the narrow observable band.
    const TOP_SCROLL_THRESHOLD = 120;
    const isAtTop = () => window.scrollY < TOP_SCROLL_THRESHOLD;

    function activate(id: string) {
      if (id === currentActive) return;
      currentActive = id;
      links.forEach((l) => l.classList.remove('blv3-toc-active'));
      const match = entries.find((e) => e.id === id);
      if (!match) return;
      match.link.classList.add('blv3-toc-active');
    }

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (obEntries) => {
        obEntries.forEach((oe) => {
          if (oe.isIntersecting) visible.add(oe.target.id);
          else visible.delete(oe.target.id);
        });
        // If we're still at the top of the page, always keep the first
        // item active regardless of which heading happens to be in the
        // observer's rootMargin band. This prevents the indicator from
        // landing on a later section on first paint.
        if (isAtTop()) {
          activate(entries[0].id);
          return;
        }
        for (const e of entries) {
          if (visible.has(e.id)) {
            activate(e.id);
            return;
          }
        }
      },
      { rootMargin: '-90px 0px -40% 0px', threshold: 0 }
    );

    entries.forEach((e) => observer.observe(e.el));

    // Activate the first TOC item initially so the indicator starts at the
    // top of the content (and not an arbitrary middle section when the page
    // is first painted before any scroll has happened).
    activate(entries[0].id);

    let rafId = 0;
    function onScroll() {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // Keep the first item active until the user actually scrolls past
        // the top of the page — this avoids the initial jump to a later
        // section. Re-checked on every scroll (instead of a one-shot flag)
        // so scrolling back to the very top reliably restores the first
        // item as the active one.
        if (isAtTop()) {
          activate(entries[0].id);
          return;
        }
        if (visible.size > 0) return;
        const mid = window.scrollY + window.innerHeight * 0.3;
        let best = '';
        for (let i = entries.length - 1; i >= 0; i--) {
          if (entries[i].el.offsetTop <= mid) {
            best = entries[i].id;
            break;
          }
        }
        if (best) activate(best);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    const handlers: Array<() => void> = [];
    entries.forEach(({ id, el, link }) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 130;
        window.scrollTo({ top, behavior: 'instant' });
        activate(id);
        history.replaceState(null, '', `#${id}`);
      };
      link.addEventListener('click', handler);
      handlers.push(() => link.removeEventListener('click', handler));
    });

    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
      handlers.forEach((fn) => fn());
    };
  }, []);

  return null;
}