import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { BoardCard } from '@/components/BoardCard';

export const metadata = pageMeta("How to play · Arrow Flow", "Learn Arrow Flow in a minute with three tiny playable demos: tap a free arrow, avoid blocked ones, and clear arrows in the right order. Plus tips and answers to common questions.", "/how-to-play/");

export default function HowToPlayPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / How to play</p>
    <span className="eyebrow">Tutorial</span>
    <Kx as="h1" text={"Learn it in {cyan|one minute}"} />
    <p className="lead">Three tiny boards below use the real rules. Try each one, then go play the real thing.</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap">

    <div className="split" style={{ marginBottom: '72px' }}>
      <div className="reveal">
        <span className="eyebrow">Step 1</span>
        <h2>Tap an arrow</h2>
        <p>Every arrow has a head. Tap the arrow and it slides out the way the head points, then it is gone. The counter with the little ↗ is how many arrows are left.</p>
        <p><strong>Try it:</strong> all three arrows here have a clear path.</p>
      </div>
      <div className="reveal" data-d="1"><BoardCard board={{"cols": 4, "rows": 3, "name": "a tiny win", "intro": "Tap any arrow. They all have an open road.", "arrows": [[[0, 0], [1, 0], [2, 0]], [[3, 2], [2, 2], [1, 2]], [[1, 1], [2, 1]]]}} label="Demo 1" ariaLabel="Demo one: three free arrows. Tap one to slide it out." hearts={false} small /></div>
    </div>

    <div className="split rev" style={{ marginBottom: '72px' }}>
      <div className="reveal">
        <span className="eyebrow">Step 2</span>
        <h2>Blocked? That costs a heart</h2>
        <p>If another arrow sits anywhere between the head and the edge, the slide fails. The arrow shakes and you lose one of your 3 hearts. Lose them all and the try ends, and you can retry from the start.</p>
        <p><strong>Try it:</strong> tap the left arrow first and watch it get stopped. Then clear the one in its way.</p>
      </div>
      <div className="reveal" data-d="1"><BoardCard board={{"cols": 4, "rows": 3, "name": "a tiny win", "intro": "The left arrow points right. What is in its way?", "arrows": [[[0, 1], [1, 1]], [[2, 0], [2, 1]], [[3, 0], [3, 1]]]}} label="Demo 2" ariaLabel="Demo two: the left arrow is blocked by the two arrows beside it." hint small /></div>
    </div>

    <div className="split">
      <div className="reveal">
        <span className="eyebrow">Step 3</span>
        <h2>Order matters</h2>
        <p>Big boards are chains of "this arrow waits on that arrow". Work backwards from the edge: find the arrow that is already free, clear it, and see what it unlocks.</p>
        <p><strong>Try it:</strong> only one arrow is free here. Find it and follow the chain.</p>
      </div>
      <div className="reveal" data-d="1"><BoardCard board={{"cols": 4, "rows": 3, "name": "a small chain", "intro": "One arrow is free. Which one?", "arrows": [[[0, 2], [1, 2]], [[2, 2], [2, 1]], [[3, 0], [2, 0], [1, 0]]]}} label="Demo 3" ariaLabel="Demo three: three arrows that must be cleared in the right order." hint small /></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Scoring</span>
      <Kx as="h2" text={"Hearts left {gold|become stars}"} />
    </div>
    <div className="grid grid-3">
      <div className="panel reveal"><img src="/img/ui/star_on.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>3 stars</h3><p>Clear the board without a single blocked tap.</p></div>
      <div className="panel reveal" data-d="1"><img src="/img/ui/star_on.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>2 stars</h3><p>Clear it after one blocked tap.</p></div>
      <div className="panel reveal" data-d="2"><img src="/img/ui/star_on.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>1 star</h3><p>Clear it after two blocked taps. Replays can only raise your best.</p></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Tips and strategy</span>
      <h2>Think like an arrow</h2>
    </div>
    <div className="tip-list">
      <div className="panel reveal"><span className="tip-n" aria-hidden="true">1</span><h3>Follow the head, not the tail</h3><p>Pieces bend. The slide direction is always the way the head points, so trace from the head to the nearest edge.</p></div>
      <div className="panel reveal" data-d="1"><span className="tip-n" aria-hidden="true">2</span><h3>Start at the edges</h3><p>Arrows near the border usually have a short, clear road. Clear them first to open space.</p></div>
      <div className="panel reveal"><span className="tip-n" aria-hidden="true">3</span><h3>Trace the blocker</h3><p>When a tap fails, look at what stopped it. Then work out what <em>that</em> arrow needs. Chains are solved from the end.</p></div>
      <div className="panel reveal" data-d="1"><span className="tip-n" aria-hidden="true">4</span><h3>Zoom before you tap</h3><p>On big boards, pinch in to check a tiny head's direction. A zoomed look is cheaper than a heart.</p></div>
      <div className="panel reveal"><span className="tip-n" aria-hidden="true">5</span><h3>Use the hint to learn</h3><p>When you're stuck, one hint shows a free arrow. Ask yourself why it was free and the board opens up.</p></div>
      <div className="panel reveal" data-d="1"><span className="tip-n" aria-hidden="true">6</span><h3>There's no clock</h3><p>Pause, think and zoom around. Slow and accurate beats fast and blocked.</p></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap narrow">
    <div className="section-head reveal up"><span className="eyebrow">Quick answers</span><h2>Common questions</h2></div>
    <div className="faq">
      <details><summary>What happens when I run out of hearts?</summary><div><p>The try ends and you can retry the level from the start with a fresh set of 3 hearts.</p></div></details>
      <details><summary>Can I undo a move?</summary><div><p>No. Once an arrow has slid away it's gone, so look before you tap. Restart is always there if you want a clean board.</p></div></details>
      <details><summary>Do the arrows only move in straight lines?</summary><div><p>Yes. Pieces can be bent, but they always slide straight in the direction their head points.</p></div></details>
      <details><summary>Is there a time limit?</summary><div><p>No timers at all.</p></div></details>
    </div>
    <p style={{ marginTop: '24px' }}><Link href="/faq/">Read the full FAQ →</Link></p>
  </div>
</section>
    </>
  );
}
