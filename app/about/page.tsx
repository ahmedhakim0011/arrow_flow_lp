import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { EmailLink } from '@/components/EmailLink';
import { MAKER } from '@/config';

export const metadata = pageMeta("About · Arrow Flow", "The idea behind Arrow Flow, a silhouette arrow puzzle where the shape is the level. Design principles, studio info and credits.", "/about/");

export default function AboutPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / About</p>
    <span className="eyebrow">About</span>
    <Kx as="h1" text={"The shape {cyan|is} the level"} />
    <p className="lead">Arrow Flow started from one question: what if untangling a puzzle left a picture behind?</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap narrow">
    <div className="reveal">
      <h2>What we set out to make</h2>
      <p>A tangle of arrows can look like noise. But lay them out so that together they trace an animal or an object, and the board becomes a hidden picture. Clearing it means freeing every arrow, one slide at a time, until the silhouette is all that's left.</p>
      <p>We wanted that moment to feel earned and a little bit magic, and we wanted getting there to be calm. So there are no timers, no pressure and no tricks, just logic you can take as slowly as you like.</p>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up"><span className="eyebrow">Design pillars</span><h2>Four rules we keep</h2></div>
    <div className="grid grid-2">
      <div className="panel reveal"><h3>The shape is the level</h3><p>Every board is a silhouette you can learn to read. Clearing it completes the picture.</p></div>
      <div className="panel reveal" data-d="1"><h3>Blockage is readable</h3><p>A failed tap always has a visible reason: another arrow in the way. Nothing is hidden or random.</p></div>
      <div className="panel reveal"><h3>Short and satisfying</h3><p>Each slide is a small reward, and the board visibly loosens as you go.</p></div>
      <div className="panel reveal" data-d="1"><h3>Fair pressure</h3><p>Three hearts, no clock, and a hint when you need one.</p></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap split">
    <div className="reveal">
      <span className="eyebrow">Made with</span>
      <h2>Built for phones, from scratch</h2>
      <p>Arrow Flow is a Flutter game with a Flame-powered board that stays smooth even with hundreds of arrows, pinch-zoom and rapid taps. Everything, including your progress, lives on the device.</p>
    </div>
    <div className="panel reveal" data-d="1">
      <h3>App maker</h3>
      <p className="muted" style={{ fontSize: 'var(--fs-sm)', marginBottom: 8 }}>Presented by</p>
      <p style={{ fontSize: 'var(--fs-lg)', fontWeight: 800, margin: '0 0 16px' }}><a href={MAKER.url} target="_blank" rel="noopener">{MAKER.name}</a></p>
      <p className="muted" style={{ fontSize: 'var(--fs-sm)', marginBottom: 8 }}>Contact</p>
      <p><EmailLink /></p>
      <p><Link className="btn btn--ghost btn--sm" href="/contact/">Contact us</Link></p>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap narrow legal">
    <h2>Credits and attributions</h2>
    <p>Arrow Flow's silhouettes are traced from open-licensed artwork. The full per-shape list ships in the app under Settings → Credits.</p>
    <ul>
      <li>Many animals and objects are based on <strong>Twemoji</strong> artwork © Twitter, Inc and contributors, licensed <a href="https://creativecommons.org/licenses/by/4.0/" rel="noopener">CC BY 4.0</a>.</li>
      <li>Others are based on icons from <a href="https://game-icons.net" rel="noopener">game-icons.net</a> by Delapouite, Caro-Asercion and others, licensed <a href="https://creativecommons.org/licenses/by/3.0/" rel="noopener">CC BY 3.0</a>.</li>
      <li>Typeface: <strong>Inter</strong>, SIL Open Font License 1.1.</li>
    </ul>
    <p className="muted" style={{ fontSize: 'var(--fs-sm)' }}>Questions about attribution? Email <EmailLink />.</p>
  </div>
</section>
    </>
  );
}
