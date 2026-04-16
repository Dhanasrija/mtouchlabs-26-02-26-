'use client';

import { useEffect } from 'react';

export default function BlogFilter() {
  useEffect(() => {
    const btns = document.querySelectorAll('.blog-filter-btn');
    const cards = document.querySelectorAll('.blog-card-item');
    if (!btns.length || !cards.length) return;

    const handleClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const filter = btn.getAttribute('data-filter') || 'all';

      // Update active button
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      cards.forEach((card) => {
        const el = card as HTMLElement;
        const cat = el.getAttribute('data-category') || '';
        if (filter === 'all' || cat.toLowerCase() === filter.toLowerCase()) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    };

    btns.forEach((btn) => btn.addEventListener('click', handleClick));

    return () => {
      btns.forEach((btn) => btn.removeEventListener('click', handleClick));
    };
  }, []);

  return null;
}
