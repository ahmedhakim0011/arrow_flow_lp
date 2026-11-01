import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { Gallery } from '@/components/Gallery';
import { StoreButtons } from '@/components/StoreButtons';
import { TrailerButton } from '@/components/TrailerButton';

export const metadata = pageMeta("Screenshots · Arrow Flow", "Screenshots and trailer of Arrow Flow, the silhouette arrow puzzle: clay-and-bronze boards, hidden pictures revealed, difficulty tiers and the daily streak.", "/screenshots/");

export default function ScreenshotsPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / Screenshots</p>
    <span className="eyebrow">Gallery</span>
    <Kx as="h1" text={"Warm clay, bold arrows and a {big reveal}"} />
    <p className="lead">Tap any screenshot to enlarge it. Use the arrow keys to move between them.</p>
    <div className="btn-row"><Link className="btn" href="/download/">Get Arrow Flow <span className="arr" aria-hidden="true">→</span></Link></div>
  </div>
</section>

<section className="section--tight">
  <div className="wrap">
    <Gallery shots={[
      { name: "game", alt: "Zoomed in on level 2, the Dragonfly: clay and bronze arrows, three hearts and 126 arrows left", cap: "Pinch to zoom and plan your path." },
      { name: "board", alt: "Level 2, the Dragonfly, shown whole as a lattice of arrows", cap: "The whole board: hundreds of arrows, no timers." },
      { name: "blocked", alt: "A blocked arrow flashing red with one heart lost", cap: "A blocked tap flashes red and costs a heart." },
      { name: "reveal", alt: "The Dragonfly silhouette sweeping into view after the last arrow is cleared", cap: "Clear the last arrow and the picture sweeps into view." },
      { name: "complete", alt: "Level complete: You revealed Dragonfly, three stars and 15 gems", cap: "Level complete: stars and gems." },
      { name: "levels", alt: "Level select card for level 3 with a mystery wrench silhouette and a Play button", cap: "Level select: the silhouette stays a secret until you clear it." },
      { name: "streak", alt: "The daily streak screen with a streak badge and a weekly tracker", cap: "Daily streak: come back each day." },
      { name: "home", alt: "The Arrow Flow home screen with the logo and tagline", cap: "Home: one big Play button." },
    ]}/>
</div>
</section>

<section className="section--tight">
  <div className="wrap">
    <span className="eyebrow">Store screenshots</span>
    <h2>As seen on the app stores</h2>
    <div className="shots">
      {[["01","Store screenshot: Tap. Slide. Feel the Flow."],["02","Store screenshot: Reveal the hidden picture"],["03","Store screenshot: Blocked arrows cost a heart"],["04","Store screenshot: One calm puzzle, zero timers"],["05","Store screenshot: unlimited handcrafted silhouettes"],["06","Store screenshot: Earn stars and gems"],["07","Store screenshot: Come back every day"],["08","Store screenshot: Easy to start, hard to put down"]].map(([n,a]) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={n} src={`/img/store/${n}.webp`} width={720} height={1280} alt={a} loading="lazy" style={{ borderRadius: '20px', boxShadow: 'var(--sh-1)' }} />
      ))}
    </div>
  </div>
</section>

<section className="section">
  <div className="wrap split">
    <div className="reveal">
      <span className="eyebrow">Trailer</span>
      <Kx as="h2" text={"See a board {cyan|unravel}"} />
      <p>The trailer is a 10&nbsp;MB video, so it only loads when you press play.</p>
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
