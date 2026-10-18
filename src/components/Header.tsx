'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { NAV } from '@/config';

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const is = (h: string) => (h === '/' ? path === '/' : path.startsWith(h));

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); btn.current?.focus(); } };
    const mq = matchMedia('(min-width:1040px)');
    const mqh = (m: MediaQueryListEvent) => m.matches && setOpen(false);
    document.addEventListener('keydown', key); mq.addEventListener('change', mqh);
    return () => { document.removeEventListener('keydown', key); mq.removeEventListener('change', mqh); };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="Arrow Flow home">
            <Image src="/img/brand/app-icon-128.webp" width={36} height={36} alt="" unoptimized priority />Arrow <b>Flow</b>
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="site-nav" aria-label="Main">
            <ul>{NAV.map((n) => (
              <li key={n.href}><Link href={n.href} {...(is(n.href) ? { 'aria-current': 'page' as const } : {})}>{n.label}</Link></li>
            ))}</ul>
          </nav>
          <Link className="btn btn--sm header-cta" href="/download/" {...(is('/download') ? { 'aria-current': 'page' as const } : {})}>Download</Link>
          <button ref={btn} className="menu-btn" type="button" aria-expanded={open} aria-controls="site-nav"
            aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /></button>
        </div>
        <div className="progress" aria-hidden="true" />
      </header>
    </>
  );
}
