// 'use client';

// import { useEffect } from 'react';

// export default function TocScrollHighlight() {
//     useEffect(() => {
//         const links = document.querySelectorAll('.blogv2-toc-link');
//         if (!links.length) return;

//         const headingEls: Array<{ el: HTMLElement; link: Element }> = [];
//         links.forEach((link) => {
//             const id = link.getAttribute('href')?.replace('#', '');
//             if (id) {
//                 const el = document.getElementById(id);
//                 if (el) headingEls.push({ el, link });
//             }
//         });

//         function onScroll() {
//             const scrollY = window.scrollY + 120;
//             let active: { el: HTMLElement; link: Element } | null = null;
//             for (let i = headingEls.length - 1; i >= 0; i--) {
//                 if (headingEls[i].el.offsetTop <= scrollY) {
//                     active = headingEls[i];
//                     break;
//                 }
//             }
//             links.forEach((l) => l.classList.remove('active'));
//             if (active) active.link.classList.add('active');
//         }

//         window.addEventListener('scroll', onScroll, { passive: true });
//         onScroll();

//         // Smooth scroll for TOC links
//         links.forEach((link) => {
//             link.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 const id = link.getAttribute('href')?.replace('#', '');
//                 if (id) {
//                     const target = document.getElementById(id);
//                     if (target) {
//                         window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
//                     }
//                 }
//             });
//         });

//         return () => {
//             window.removeEventListener('scroll', onScroll);
//         };
//     }, []);

//     return null;
// }


'use client';

import { useEffect } from 'react';

export default function TocScrollHighlight() {
  useEffect(() => {
    const links = document.querySelectorAll('.blv3-toc-link');
    if (!links.length) return;

    const headingEls: Array<{ id: string; el: HTMLElement; link: Element }> = [];
    links.forEach((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      if (id) {
        const el = document.getElementById(id);
        if (el) headingEls.push({ id, el, link });
      }
    });

    if (!headingEls.length) return;

    let currentActive: string | null = null;

    function setActive(id: string) {
      if (id === currentActive) return;
      links.forEach((l) => l.classList.remove('blv3-toc-active'));
      const match = headingEls.find((h) => h.id === id);
      if (match) {
        match.link.classList.add('blv3-toc-active');
        currentActive = id;
      }
    }

    // IntersectionObserver for accurate detection
    const visibleSet = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSet.add(entry.target.id);
          } else {
            visibleSet.delete(entry.target.id);
          }
        });
        // Find first visible heading in document order
        for (const h of headingEls) {
          if (visibleSet.has(h.id)) {
            setActive(h.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headingEls.forEach((h) => observer.observe(h.el));

    // Scroll fallback — find last heading above viewport
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY + 120;
        let activeId: string | null = null;
        for (let i = headingEls.length - 1; i >= 0; i--) {
          if (headingEls[i].el.offsetTop <= scrollTop) {
            activeId = headingEls[i].id;
            break;
          }
        }
        if (activeId) setActive(activeId);
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Smooth scroll on TOC link click
    const clickHandlers: Array<{ link: Element; handler: (e: Event) => void }> = [];
    links.forEach((link) => {
      const handler = (e: Event) => {
        e.preventDefault();
        const id = link.getAttribute('href')?.replace('#', '');
        if (id) {
          const target = document.getElementById(id);
          if (target) {
            window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
            setActive(id);
            window.history.pushState(null, '', `#${id}`);
          }
        }
      };
      link.addEventListener('click', handler);
      clickHandlers.push({ link, handler });
    });

    // Initial highlight
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      clickHandlers.forEach(({ link, handler }) => {
        link.removeEventListener('click', handler);
      });
    };
  }, []);

  return null;
}