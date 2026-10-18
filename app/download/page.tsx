import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { Raw } from '@/components/Pic';
import { OsHint, StoreButtons } from '@/components/StoreButtons';

export const metadata = pageMeta("Download · Arrow Flow", "Download Arrow Flow for iPhone and Android. A calm silhouette arrow puzzle with 100 handcrafted levels and no timers.", "/download/");

export default function DownloadPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap split">
    <div>
      <p className="crumbs"><Link href="/">Home</Link> / Download</p>
      <span className="eyebrow">Get the game</span>
      <Kx as="h1" text={"Free the {first arrow}"} />
      <p className="lead">Arrow Flow is made for iPhone and Android, in portrait, and works offline.</p>
      <div id="stores" style={{ scrollMarginTop: '100px' }}><StoreButtons /></div>
      <OsHint />
      <p className="notice" style={{ marginTop: '20px' }}><strong>PLACEHOLDER:</strong> the store buttons show "Soon" until the real listing URLs are added in <code>src/config.ts</code>. No download links exist yet.</p>
    </div>
    <div className="reveal">
      <div className="phone phone--lg phone--float"><Raw name="home" alt="Arrow Flow home screen with the logo and a Continue button" /></div>
    </div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap grid grid-2">
    <div className="panel reveal">
      <h2 style={{ fontSize: 'var(--fs-lg)' }}>On a computer?</h2>
      <p>Scan the code with your phone's camera to open the store page.</p>
      <div className="qr" role="img" aria-label="QR code placeholder">PLACEHOLDER<br />QR code goes here once the store URL exists</div>
    </div>
    <div className="panel reveal" data-d="1">
      <h2 style={{ fontSize: 'var(--fs-lg)' }}>Device requirements</h2>
      <div className="table-wrap" tabIndex={0} role="region" aria-label="Device requirements">
        <table style={{ minWidth: '0' }}>
          <caption className="sr-only">Device requirements</caption>
          <tbody>
            <tr><th scope="row">iPhone / iPad</th><td>iOS 12.0 or later (from the project's deployment target)</td></tr>
            <tr><th scope="row">Android</th><td><span className="placeholder-tag">PLACEHOLDER</span> minimum Android version to be confirmed</td></tr>
            <tr><th scope="row">Orientation</th><td>Portrait</td></tr>
            <tr><th scope="row">Connection</th><td>Not required. Plays offline</td></tr>
            <tr><th scope="row">Size</th><td>Around 10&nbsp;MB on Android (measured release build)</td></tr>
            <tr><th scope="row">Price</th><td><span className="placeholder-tag">PLACEHOLDER</span> confirm with the store listing</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head center reveal up"><span className="eyebrow">What you get</span><h2>Everything in one install</h2></div>
    <div className="grid grid-3">
      <div className="panel reveal"><h3>100 levels</h3><p>Handcrafted animals and objects across four tiers.</p></div>
      <div className="panel reveal" data-d="1"><h3>No timers</h3><p>Take your time. Nothing is counting down.</p></div>
      <div className="panel reveal" data-d="2"><h3>No account</h3><p>Open it and play. Progress is saved on your phone.</p></div>
    </div>
  </div>
</section>
    </>
  );
}
