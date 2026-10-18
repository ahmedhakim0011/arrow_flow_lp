import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL, MAKER } from '@/config';
import { StoreButtons } from './StoreButtons';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="brand" href="/"><Image src="/img/brand/app-icon-128.webp" width={36} height={36} alt="" unoptimized />Arrow <b>Flow</b></Link>
            <p style={{ marginTop: 12, maxWidth: '26em' }}>Slide the arrows. Reveal the picture. A calm silhouette puzzle with no timers.</p>
            <StoreButtons />
            <div className="maker">
              <div><small>App maker · Presented by</small><a href={MAKER.url} target="_blank" rel="noopener">{MAKER.name}</a></div>
              <div><small>Contact</small><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            </div>
          </div>
          <nav aria-label="Game"><h2>The game</h2><ul>
            <li><Link href="/features/">Features</Link></li><li><Link href="/how-to-play/">How to play</Link></li>
            <li><Link href="/screenshots/">Screenshots</Link></li><li><Link href="/download/">Download</Link></li></ul></nav>
          <nav aria-label="Company"><h2>Studio</h2><ul>
            <li><Link href="/about/">About</Link></li><li><Link href="/faq/">FAQ</Link></li><li><Link href="/contact/">Contact</Link></li></ul></nav>
          <nav aria-label="Legal"><h2>Legal</h2><ul>
            <li><Link href="/privacy/">Privacy policy</Link></li><li><Link href="/terms/">Terms of use</Link></li></ul></nav>
        </div>
        <div className="foot-note">
          <p>© {new Date().getFullYear()} Arrow Flow. All rights reserved.</p>
          <p>Apple and App Store are trademarks of Apple Inc. Google Play is a trademark of Google LLC.</p>
        </div>
      </div>
    </footer>
  );
}
