import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';

export const metadata = pageMeta("FAQ · Arrow Flow", "Answers to common questions about Arrow Flow: how it plays, hearts and stars, levels, hints, progress, offline play and support.", "/faq/");

export default function FaqPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / FAQ</p>
    <span className="eyebrow">Support</span>
    <Kx as="h1" text={"Questions, {cyan|answered}"} />
    <p className="lead">Can't find what you need? <Link href="/contact/">Send us a note</Link>.</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap narrow">

    <div className="faq-group">
      <h2 style={{ fontSize: 'var(--fs-lg)' }}>Playing</h2>
      <div className="faq">
        <details><summary>How do I play?</summary><div><p>Tap an arrow to slide it off the board in the direction its head points. If another arrow is in the way, the slide fails and you lose a heart. Clear every arrow to reveal the hidden silhouette. The <Link href="/how-to-play/">tutorial page</Link> has playable demos.</p></div></details>
        <details><summary>Why did my tap fail?</summary><div><p>Something is between the arrow's head and the board's edge. Trace a straight line from the head and you'll find the blocker. Clear that one first.</p></div></details>
        <details><summary>How many hearts do I get?</summary><div><p>Three per try. If you lose them all, you can retry the level.</p></div></details>
        <details><summary>How do stars work?</summary><div><p>Your hearts left when you finish become your stars: 3 hearts left is 3 stars. Replaying a level never lowers a star rating you already earned.</p></div></details>
        <details><summary>What does the hint do?</summary><div><p>The lightbulb makes one arrow that currently has a clear path glow for a few seconds.</p></div></details>
        <details><summary>The arrows are tiny. Any help?</summary><div><p>Pinch to zoom the board (up to 3×) and drag to move around on large levels.</p></div></details>
        <details><summary>Is there a timer?</summary><div><p>No. Arrow Flow has no timers.</p></div></details>
      </div>
    </div>

    <div className="faq-group">
      <h2 style={{ fontSize: 'var(--fs-lg)' }}>Levels and progress</h2>
      <div className="faq">
        <details><summary>How many levels are there?</summary><div><p>100 handcrafted silhouettes, from the Hammer (level 1, 100 arrows) to the Hourglass (level 100, 438 arrows).</p></div></details>
        <details><summary>Is there an easy mode?</summary><div><p>Arrow Flow starts on the Hard tier and builds up through Expert, Master and Nightmare. The first levels are the gentlest, and the hint is there when you need it.</p></div></details>
        <details><summary>What are gems and the daily streak?</summary><div><p>Winning a level earns gems. The daily streak tracks the days you play across a weekly strip.</p></div></details>
        <details><summary>Will new levels be added?</summary><div><p>We'd love to, but we don't have a schedule to share yet. Follow this site for news.</p></div></details>
      </div>
    </div>

    <div className="faq-group">
      <h2 style={{ fontSize: 'var(--fs-lg)' }}>Device and data</h2>
      <div className="faq">
        <details><summary>Does it work offline?</summary><div><p>Yes. It's fully playable without a connection.</p></div></details>
        <details><summary>Do I need an account?</summary><div><p>No. Progress, gems and settings are stored on your device.</p></div></details>
        <details><summary>Will my progress move to a new phone?</summary><div><p>Progress is stored locally on the device, so it does not transfer automatically. Cloud sync isn't part of the current version.</p></div></details>
        <details><summary>Which devices are supported?</summary><div><p>iPhone and iPad (iOS 12 or later) and Android phones. See the <Link href="/download/">download page</Link> for the full requirements.</p></div></details>
        <details><summary>Can I turn off sound or vibration?</summary><div><p>Yes. Sound, music and haptics each have a switch in Settings.</p></div></details>
      </div>
    </div>

    <div className="panel reveal up"><h3>Still stuck?</h3><p>Tell us your device, the level number and what happened.</p><p><Link className="btn btn--sm" href="/contact/">Contact support</Link></p></div>
  </div>
</section>
    </>
  );
}
