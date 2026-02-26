'use client';

import { useEffect } from 'react';

export default function TocScrollHighlight() {
    useEffect(() => {
        const links = document.querySelectorAll('.blogv2-toc-link');
        if (!links.length) return;

        const headingEls: Array<{ el: HTMLElement; link: Element }> = [];
        links.forEach((link) => {
            const id = link.getAttribute('href')?.replace('#', '');
            if (id) {
                const el = document.getElementById(id);
                if (el) headingEls.push({ el, link });
            }
        });

        function onScroll() {
            const scrollY = window.scrollY + 120;
            let active: { el: HTMLElement; link: Element } | null = null;
            for (let i = headingEls.length - 1; i >= 0; i--) {
                if (headingEls[i].el.offsetTop <= scrollY) {
                    active = headingEls[i];
                    break;
                }
            }
            links.forEach((l) => l.classList.remove('active'));
            if (active) active.link.classList.add('active');
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Smooth scroll for TOC links
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const id = link.getAttribute('href')?.replace('#', '');
                if (id) {
                    const target = document.getElementById(id);
                    if (target) {
                        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
                    }
                }
            });
        });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return null;
}
