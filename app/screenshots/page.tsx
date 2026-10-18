import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { Gallery } from '@/components/Gallery';
import { StoreButtons } from '@/components/StoreButtons';
import { TrailerButton } from '@/components/TrailerButton';

export const metadata = pageMeta("Screenshots · Arrow Flow", "Screenshots and trailer of Arrow Flow, the silhouette arrow puzzle: neon boards, hidden pictures revealed, difficulty tiers and the daily streak.", "/screenshots/");

export default function ScreenshotsPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / Screenshots</p>
    <span className="eyebrow">Gallery</span>
    <Kx as="h1" text={"Arrows, neon and a {big reveal}"} />
    <p className="lead">Tap any screenshot to enlarge it. Use the arrow keys to move between them.</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap">
    <Gallery shots={[{ name: "game_19", alt: "Level 19, a llama silhouette made of neon pink and blue arrows, with three hearts and 209 arrows left", cap: "Level 19: a llama, 209 arrows, all still tangled." }, { name: "reveal", alt: "Level 26, a rooster revealed as a glowing purple and pink silhouette after clearing every arrow", cap: "Level 26: the rooster, revealed." }, { name: "game_100", alt: "Level 100, an hourglass made of 438 arrows on the Nightmare tier", cap: "Level 100: the Hourglass, 438 arrows on Nightmare." }, { name: "blocked", alt: "Level 3, a wrench silhouette with one blocked arrow flashing red and two hearts left", cap: "A blocked tap flashes red and costs a heart." }, { name: "complete", alt: "The level complete sheet with three gold stars and the gems earned", cap: "Level complete: stars and gems." }, { name: "map", alt: "Level select card for level 24 in the Expert tier with a mystery silhouette and a Play button", cap: "The level card: tier, stars and a mystery silhouette." }]} />
</div>
</section>

<section className="section">
  <div className="wrap split">
    <div className="reveal">
      <span className="eyebrow">Trailer</span>
      <Kx as="h2" text={"See a board {cyan|unravel}"} />
      <p>The trailer is a 6.5&nbsp;MB video, so it only loads when you press play.</p>
    </div>
    <div className="reveal" data-d="1"><TrailerButton /></div>
  </div>
</section>

<section className="section--tight" style={{ paddingBottom: '0' }}>
  <div className="wrap"><div className="callout reveal up"><div><span className="eyebrow">Like what you see?</span><h2>Play it on your phone.</h2><StoreButtons /></div><div></div></div></div>
</section>
    </>
  );
}
