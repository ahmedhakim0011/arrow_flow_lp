'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/** Scroll-reveal for .reveal / .kx (re-observed on route change) + pointer spotlight and magnetic buttons. */
export function SiteEffects() {
  const path = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal:not(.in), .kx:not(.in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((n) => n.classList.add('in')); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [path]);

  useEffect(() => {
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
    if (!fine || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let mag: HTMLElement | null = null;
    const release = () => { if (mag) { mag.style.translate = ''; mag = null; } };
    const move = (e: PointerEvent) => {
      const t = e.target as Element;
      const panel = t.closest<HTMLElement>('.panel');
      if (panel) {
        const r = panel.getBoundingClientRect();
        panel.style.setProperty('--mx', `${e.clientX - r.left}px`);
        panel.style.setProperty('--my', `${e.clientY - r.top}px`);
      }
      const b = t.closest<HTMLElement>('.btn:not([aria-disabled="true"]), .store-badge');
      if (b !== mag) release();
      if (b) {
        mag = b;
        const r = b.getBoundingClientRect();
        b.style.translate = `${(e.clientX - (r.left + r.width / 2)) * 0.14}px ${(e.clientY - (r.top + r.height / 2)) * 0.22}px`;
      }
    };
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', release);
    return () => { document.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', release); release(); };
  }, []);
  return null;
}
