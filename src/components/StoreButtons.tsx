'use client';
import { useEffect, useState } from 'react';
import { STORES } from '@/config';

type Os = 'ios' | 'android' | 'desktop';
export function detectOs(): Os {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return /Android/i.test(ua) ? 'android' : 'desktop';
}

/** Official Google Play badge (Arrow Flow is Android-only for now). */
export function StoreButtons() {
  return (
    <div className="stores">
      <a className="store-badge store-badge--google" data-store="android" aria-label="Get it on Google Play"
        href={STORES.android} target="_blank" rel="noopener">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/store/google-play.png" width={646} height={250} alt="" />
      </a>
    </div>
  );
}

export function OsHint() {
  const [t, setT] = useState('Free on Android.');
  useEffect(() => {
    const os = detectOs();
    setT(os === 'ios' ? 'Arrow Flow is on Android for now.'
      : os === 'android' ? 'Free on Google Play.'
      : 'Playing on a computer? Open this page on your Android phone to get the game.');
  }, []);
  return <p className="hero-note">{t}</p>;
}
