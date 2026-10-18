'use client';
import { useEffect, useRef, useState } from 'react';
import { Phone } from './Pic';

export type Shot = { name: string; alt: string; cap: string };

/** Responsive screenshot grid + accessible lightbox (Esc, arrow keys, focus trap, focus return). */
export function Gallery({ shots }: { shots: Shot[] }) {
  const [cur, setCur] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lb = useRef<HTMLDivElement>(null);
  const n = shots.length;
  const open = cur !== null;

  const close = () => { setCur(null); opener.current?.focus(); };
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden'; closeBtn.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') setCur((c) => ((c ?? 0) - 1 + n) % n);
      else if (e.key === 'ArrowRight') setCur((c) => ((c ?? 0) + 1) % n);
      else if (e.key === 'Tab' && lb.current) {
        const f = Array.from(lb.current.querySelectorAll('button')), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, n]);

  return (
    <>
      <div className="shots">
        {shots.map((s, i) => (
          <button key={s.name} className="shot" type="button" onClick={(e) => { opener.current = e.currentTarget; setCur(i); }}>
            <Phone name={s.name} alt={s.alt} />
          </button>
        ))}
      </div>
      {open && (
        <div ref={lb} className="lightbox open" role="dialog" aria-modal="true" aria-label="Screenshot viewer"
          onClick={(e) => { if (e.target === lb.current) close(); }}>
          <button ref={closeBtn} className="lb-btn lb-close" aria-label="Close" onClick={close}>×</button>
          <button className="lb-btn lb-prev" aria-label="Previous screenshot" onClick={() => setCur((cur! - 1 + n) % n)}>‹</button>
          <figure>
            <div className="phone">
              <picture>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/img/raw/${shots[cur!].name}-720.webp`} alt={shots[cur!].alt} width={720} height={1560} />
              </picture>
            </div>
            <figcaption>{shots[cur!].cap}</figcaption>
          </figure>
          <button className="lb-btn lb-next" aria-label="Next screenshot" onClick={() => setCur((cur! + 1) % n)}>›</button>
        </div>
      )}
    </>
  );
}
