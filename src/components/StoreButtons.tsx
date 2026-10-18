'use client';
import { useEffect, useState } from 'react';
import { STORES } from '@/config';

type Os = 'ios' | 'android' | 'desktop';
export function detectOs(): Os {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return /Android/i.test(ua) ? 'android' : 'desktop';
}

/** Official badges (Apple SVG, Google Play PNG), both shown at the same visible height. */
export function StoreButtons() {
  const [os, setOs] = useState<Os>('desktop');
  useEffect(() => setOs(detectOs()), []);
  const items = [
    { k: 'ios', label: 'Download on the App Store', cls: 'store-badge store-badge--apple', src: '/img/store/app-store.svg', w: 120, h: 40 },
    { k: 'android', label: 'Get it on Google Play', cls: 'store-badge store-badge--google', src: '/img/store/google-play.png', w: 646, h: 250 },
  ] as const;
  const ordered = os === 'android' ? [items[1], items[0]] : items;
  return (
    <div className="stores">
      {ordered.map(({ k, label, cls, src, w, h }) => {
        const url = STORES[k];
        return (
          <a key={k} className={cls} data-store={k} aria-label={url ? label : `${label} (coming soon)`}
            href={url || '/download/#stores'} {...(url ? { target: '_blank', rel: 'noopener' } : { title: 'Store link not set yet (edit src/config.ts)' })}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={w} height={h} alt="" />
          </a>
        );
      })}
      {!STORES.ios && !STORES.android && <p className="stores-soon">Store links coming soon</p>}
    </div>
  );
}

export function OsHint() {
  const [t, setT] = useState('Free for iPhone and Android.');
  useEffect(() => {
    const os = detectOs();
    setT(os === 'ios' ? 'Looks like you are on iPhone or iPad, so the App Store is first.'
      : os === 'android' ? 'Looks like you are on Android, so Google Play is first.'
      : 'Playing on a computer? Open this page on your phone to get the game.');
  }, []);
  return <p className="hero-note">{t}</p>;
}
