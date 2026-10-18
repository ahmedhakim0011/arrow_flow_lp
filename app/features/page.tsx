import { Kx } from '@/components/Kx';
import { Count } from '@/components/Count';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { BoardCard } from '@/components/BoardCard';
import { Raw } from '@/components/Pic';
import { StoreButtons } from '@/components/StoreButtons';

export const metadata = pageMeta("Features · Arrow Flow", "Everything inside Arrow Flow: the tap-and-slide arrow mechanic, 100 handcrafted silhouettes, four difficulty tiers, hearts and stars, hints, daily streaks and a glassy neon look.", "/features/");

export default function FeaturesPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / Features</p>
    <span className="eyebrow">Under the hood</span>
    <Kx as="h1" text={"One simple rule. {Hundreds} of arrows."} />
    <p className="lead">Arrow Flow is built around a single idea you can learn in ten seconds and enjoy for a hundred levels.</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap split">
    <div className="reveal">
      <span className="eyebrow">The mechanic</span>
      <h2>Slide it out, if the road is clear</h2>
      <p>The board is a lattice of dots. Bent arrow pieces sit on those dots, and together they trace a silhouette. Each arrow has one head and it only ever moves the way the head points.</p>
      <ul className="tick">
        <li>An arrow is <strong>free</strong> when nothing sits between its head and the edge of the board.</li>
        <li>Tap a free arrow and it glides off the board, loosening everything behind it.</li>
        <li>Tap a blocked arrow and it shakes. You lose a heart.</li>
        <li>Clear every arrow and the hidden picture lights up.</li>
      </ul>
      <p>Pieces bend, so an arrow can look like it points one way while its head says another. Always follow the head.</p>
    </div>
    <div className="reveal" data-d="1"><BoardCard board={{"cols": 4, "rows": 3, "name": "a tiny win", "intro": "Three arrows, each pointing to an open edge. Tap any of them.", "arrows": [[[0, 0], [1, 0], [2, 0]], [[3, 2], [2, 2], [1, 2]], [[1, 1], [2, 1]]]}} label="Mini demo" ariaLabel="Mini puzzle with three free arrows. Tap one to slide it out." hearts={false} small /></div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Levels</span>
      <Kx as="h2" text={"100 pictures, each one {cyan|handcrafted}"} />
      <p>No filler boards and no repeats. Every level is its own silhouette, ordered from chunky and simple to thin and tricky.</p>
    </div>
    <div className="stats reveal up">
      <div className="stat"><b><Count to={100} /></b><span>silhouettes</span></div>
      <div className="stat"><b><Count to={438} /></b><span>arrows in the biggest board</span></div>
      <div className="stat"><b><Count to={3} /></b><span>hearts every try</span></div>
      <div className="stat"><b><Count to={0} /></b><span>timers</span></div>
    </div>
    <div className="table-wrap reveal up" style={{ marginTop: '32px' }} tabIndex={0} role="region" aria-label="What the 100 levels are made of">
      <table>
        <caption className="sr-only">Silhouette categories</caption>
        <thead><tr><th scope="col">Category</th><th scope="col">Levels</th><th scope="col">Examples</th></tr></thead>
        <tbody>
          <tr><td>Objects</td><td>40</td><td>Hammer, anchor, guitar, crown, hourglass</td></tr>
          <tr><td>Animals</td><td>22</td><td>Kangaroo, llama, fox, elephant</td></tr>
          <tr><td>Sea life</td><td>13</td><td>Sea turtle, seahorse, whale, octopus</td></tr>
          <tr><td>Birds</td><td>12</td><td>Flamingo, ostrich, hawk, swan</td></tr>
          <tr><td>Insects</td><td>6</td><td>Dragonfly, ant, spider, butterfly</td></tr>
          <tr><td>Reptiles</td><td>4</td><td>Cobra, turtle, lizard, snake</td></tr>
          <tr><td>Dinosaurs</td><td>3</td><td>Parasaurolophus, sauropod, T-Rex</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Difficulty</span>
      <Kx as="h2" text={"No warm-up lap. {gold|Four tiers}, all real puzzles."} />
      <p>Arrow Flow starts on the Hard tier, and the boards only get denser from there. The deeper the blocking chains, the more you have to plan the order.</p>
    </div>
    <div className="grid grid-4">
      <div className="panel tier reveal"><img src="/img/badges/badge_hard_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Hard</h3><span className="range">Levels 1–20</span><p style={{ marginTop: '12px' }}>100–214 arrows. Starts with the Hammer, ends with the Turtle.</p></div>
      <div className="panel tier reveal" data-d="1"><img src="/img/badges/badge_expert_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Expert</h3><span className="range">Levels 21–50</span><p style={{ marginTop: '12px' }}>222–303 arrows. Duck to Palm Tree.</p></div>
      <div className="panel tier reveal" data-d="2"><img src="/img/badges/badge_master_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Master</h3><span className="range">Levels 51–80</span><p style={{ marginTop: '12px' }}>307–346 arrows. Cat to Dolphin.</p></div>
      <div className="panel tier reveal" data-d="3"><img src="/img/badges/badge_nightmare_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Nightmare</h3><span className="range">Levels 81–100</span><p style={{ marginTop: '12px' }}>348–438 arrows. Poodle to the Hourglass finale.</p></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Helpers and rewards</span>
      <h2>A little help, a little shine</h2>
    </div>
    <div className="grid grid-3">
      <article className="panel panel--hover reveal pop"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.500 10.900c.7.600 1 1.300 1 2.100h5c0-.8.300-1.500 1-2.100A6 6 0 0012 3z"/></svg></span><h3>Hint</h3><p>The lightbulb makes one arrow with a clear path glow for a few seconds. It shows what to tap, not what to think.</p></article>
      <article className="panel panel--hover reveal pop" data-d="1"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-9.2C1.800 7.600 3.600 4 7 4c2 0 3.400 1.100 5 3 1.600-1.900 3-3 5-3 3.400 0 5.200 3.600 4 6.800C19 15.600 12 20 12 20z"/></svg></span><h3>Hearts and stars</h3><p>Clear a board with all 3 hearts for 3 stars. Replays never lower the stars you already earned.</p></article>
      <article className="panel panel--hover reveal pop" data-d="2"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 3h12l4 6-10 12L2 9l4-6zM2 9h20M9 3l3 6 3-6M12 21L9 9M12 21l3-12"/></svg></span><h3>Gems</h3><p>Each win pays gems, and the win screen counts them up so you can enjoy it.</p></article>
      <article className="panel panel--hover reveal pop"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3c1 3.500 5 5.500 5 10a5 5 0 01-10 0c0-2 1-3.200 2-4 .2 1.500 1 2.200 1.800 2.500C10.500 8.500 11 6 12 3z"/></svg></span><h3>Daily streak</h3><p>A weekly check-in strip and a gold streak badge reward you for dropping by.</p></article>
      <article className="panel panel--hover reveal pop" data-d="1"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.300-4.300M8 11h6M11 8v6"/></svg></span><h3>Zoom and pan</h3><p>Pinch up to 3× and drag the board to reach tiny arrows on the big levels.</p></article>
      <article className="panel panel--hover reveal pop" data-d="2"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 9v6h4l5 4V5L8 9H4zM17 8.500a5 5 0 010 7"/></svg></span><h3>Your settings</h3><p>Sound, music and haptics each have their own switch, and you can pause any time.</p></article>
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap split rev">
    <div className="reveal">
      <span className="eyebrow">Look and feel</span>
      <Kx as="h2" text={"Glass, glow and a {night-time} palette"} />
      <p>The whole game lives on a deep indigo-black canvas, with thin cyan and pink arrows that glow like neon tubes. Hearts, gems, stars and badges are glossy 3D enamel that pops against the dark.</p>
      <p>When the last arrow leaves, the dots fill in and the finished picture lights up in a blue-to-pink gradient. That moment is the whole game.</p>
      <p><Link className="btn btn--ghost" href="/screenshots/">See it in the gallery <span className="arr" aria-hidden="true">→</span></Link></p>
    </div>
    <div className="reveal" data-d="1"><div className="phone phone--lg phone--float"><Raw name="game_26" alt="In-app level 26, a rooster silhouette of neon arrows with three hearts and 232 arrows left" /></div></div>
  </div>
</section>

<section className="section--tight" style={{ paddingBottom: '0' }}>
  <div className="wrap"><div className="callout reveal up"><div><span className="eyebrow">Your turn</span><h2>See what's hiding under the arrows.</h2><StoreButtons /></div><div></div></div></div>
</section>
    </>
  );
}
