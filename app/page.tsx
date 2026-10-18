import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { BoardCard } from '@/components/BoardCard';
import { Phone } from '@/components/Pic';
import { Marquee } from '@/components/Marquee';
import { PresentedBy } from '@/components/Maker';
import { OsHint, StoreButtons } from '@/components/StoreButtons';
import { SITE_URL } from '@/config';

export const metadata = pageMeta("Arrow Flow · Slide the arrows. Reveal the picture.", "Arrow Flow is a calm silhouette puzzle for iPhone and Android. Tap arrows to slide them free, clear the board and reveal a hidden picture. 100 handcrafted levels, no timers.", "/");

const jsonLd = {
  '@context': 'https://schema.org', '@type': ['MobileApplication', 'VideoGame'], name: 'Arrow Flow',
  description: 'A calm silhouette puzzle. Tap arrows to slide them off the board and reveal the hidden picture. 100 handcrafted levels, no timers.',
  applicationCategory: 'GameApplication', author: { '@type': 'Organization', name: 'ahmedbuildapps.com', url: 'https://ahmedbuildapps.com' }, genre: 'Puzzle', operatingSystem: 'iOS, Android', gamePlatform: ['iOS', 'Android'],
  playMode: 'SinglePlayer', inLanguage: 'en', image: `${SITE_URL}/img/brand/og-image.jpg`, url: `${SITE_URL}/`,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function IndexPage() {
  return (
    <>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
<section className="hero">
  <span className="orb orb--a" aria-hidden="true" /><span className="orb orb--b" aria-hidden="true" />
  <div className="streaks" aria-hidden="true"><i style={{ ['--y' as string]: '12%', ['--c' as string]: '#35E6FF', ['--s' as string]: '11s', ['--d' as string]: '0s', ['--w' as string]: '160px' }} /><i style={{ ['--y' as string]: '28%', ['--c' as string]: '#FF4FB8', ['--s' as string]: '14s', ['--d' as string]: '3s', ['--w' as string]: '110px' }} /><i style={{ ['--y' as string]: '47%', ['--c' as string]: '#8A5BFF', ['--s' as string]: '12s', ['--d' as string]: '6s', ['--w' as string]: '190px' }} /><i style={{ ['--y' as string]: '63%', ['--c' as string]: '#14C8FF', ['--s' as string]: '16s', ['--d' as string]: '1.5s', ['--w' as string]: '130px' }} /><i style={{ ['--y' as string]: '78%', ['--c' as string]: '#FF4FB8', ['--s' as string]: '13s', ['--d' as string]: '8s', ['--w' as string]: '170px' }} /><i style={{ ['--y' as string]: '90%', ['--c' as string]: '#35E6FF', ['--s' as string]: '15s', ['--d' as string]: '4.5s', ['--w' as string]: '100px' }} /></div>
  <div className="wrap split">
    <div>
      <span className="eyebrow">Satisfying puzzle</span>
      <Kx as="h1" chars text={"Tap. Slide. Feel the {Flow}"} />
      <p className="lead">Slide the arrows free and reveal the hidden silhouette. 100 handcrafted pictures, 3 hearts, zero timers.</p>
      <StoreButtons />
      <OsHint />
      <p className="hero-note"><Link href="/how-to-play/">New here? See how it plays →</Link></p>
      <PresentedBy />
    </div>

    <BoardCard board={{"cols": 7, "rows": 6, "name": "Heart", "intro": "Tap an arrow to slide it out. Watch what blocks it.", "arrows": [[[4, 0], [5, 0], [5, 1]], [[4, 4], [4, 3], [3, 3]], [[0, 2], [0, 1], [1, 1], [2, 1], [3, 1]], [[6, 2], [6, 1]], [[3, 5], [3, 4], [2, 4], [2, 3]], [[4, 2], [4, 1]], [[3, 2], [2, 2]], [[1, 2], [1, 3]], [[5, 2], [5, 3]], [[1, 0], [2, 0]]]}} label="Try it" ariaLabel="Playable arrow puzzle. Tap an arrow to slide it out." hint />
  </div>
</section>

<Marquee />

<section className="section" id="how">
  <div className="wrap">
    <div className="section-head center reveal up">
      <span className="eyebrow">How it works</span>
      <Kx as="h2" text={"Three taps from {cyan|clear} to calm"} />
    </div>
    <ol className="steps">
      <li className="panel reveal" data-d="0"><h3>Tap an arrow</h3><p>Every arrow points one way. Tap it and it slides off the board along that line.</p></li>
      <li className="panel reveal" data-d="1"><h3>Mind the path</h3><p>Another arrow in the way? The slide fails and you lose a heart. You get 3 per try, so look first.</p></li>
      <li className="panel reveal" data-d="2"><h3>Reveal the picture</h3><p>Clear every arrow and the silhouette hiding underneath lights up. More hearts left means more stars.</p></li>
    </ol>
    <p className="center" style={{ textAlign: 'center', marginTop: '32px' }}><Link className="btn btn--ghost" href="/how-to-play/">Full tutorial <span className="arr" aria-hidden="true">→</span></Link></p>
  </div>
</section>

<section className="section" id="features">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Why it feels good</span>
      <Kx as="h2" text={"Quiet brain work with a {big payoff}"} />
    </div>
    <div className="grid grid-3">
      <article className="panel panel--hover reveal pop"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.100L3.200 9.500l6.100-.9z"/></svg></span><h3>100 hidden pictures</h3><p>Hammer, llama, whale, hourglass. Every level is a different animal or object made of arrows.</p></article>
      <article className="panel panel--hover reveal pop" data-d="1"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M4 4l16 16"/></svg></span><h3>No timers</h3><p>Think as long as you like. Nothing counts down, so every move is a choice and not a panic.</p></article>
      <article className="panel panel--hover reveal pop" data-d="2"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-9.2C1.800 7.600 3.600 4 7 4c2 0 3.400 1.100 5 3 1.600-1.900 3-3 5-3 3.400 0 5.200 3.600 4 6.800C19 15.600 12 20 12 20z"/></svg></span><h3>Hearts and stars</h3><p>Three hearts per try. A blocked tap costs one, and your hearts left become your stars.</p></article>
      <article className="panel panel--hover reveal pop"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.500 10.900c.7.600 1 1.300 1 2.100h5c0-.8.300-1.500 1-2.100A6 6 0 0012 3z"/></svg></span><h3>A hint when you're stuck</h3><p>Tap the lightbulb and an arrow with a clear path starts to glow.</p></article>
      <article className="panel panel--hover reveal pop" data-d="1"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.300-4.300M8 11h6M11 8v6"/></svg></span><h3>Pinch to zoom</h3><p>Big boards hold hundreds of arrows. Pinch in and drag around to find the one you need.</p></article>
      <article className="panel panel--hover reveal pop" data-d="2"><span className="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 2l20 20M8.500 16.400a5 5 0 017 0M5 12.900a10 10 0 015-2.700M19 12.900a10 10 0 00-2.700-1.900M2 8.800a15 15 0 014.500-2.600M22 8.800a15 15 0 00-8-3.700M12 20h.01"/></svg></span><h3>Plays offline</h3><p>No account, no connection needed. Your progress stays on your phone.</p></article>
    </div>
    <p style={{ marginTop: '32px' }}><Link className="btn btn--ghost" href="/features/">All features <span className="arr" aria-hidden="true">→</span></Link></p>
  </div>
</section>

<section className="section" id="shots">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">Take a look</span>
      <Kx as="h2" text={"Neon arrows on a {cyan|night-sky} board"} />
    </div>
    <div className="rail" role="list" aria-label="Game screenshots">
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="game_19" alt="Level 19, a llama silhouette made of neon pink and blue arrows, with three hearts and 209 arrows left" /></Link>
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="reveal" alt="Level 26, a rooster revealed as a glowing purple and pink silhouette after clearing every arrow" /></Link>
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="game_100" alt="Level 100, an hourglass made of 438 arrows on the Nightmare tier" /></Link>
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="blocked" alt="Level 3, a wrench silhouette with one blocked arrow flashing red and two hearts left" /></Link>
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="complete" alt="The level complete sheet with three gold stars and the gems earned" /></Link>
      <Link className="shot" role="listitem" href="/screenshots/"><Phone name="map" alt="Level select card for level 24 in the Expert tier with a mystery silhouette and a Play button" /></Link>
    </div>
    <p style={{ marginTop: '16px' }}><Link className="btn btn--ghost" href="/screenshots/">Open the gallery <span className="arr" aria-hidden="true">→</span></Link></p>
  </div>
</section>

<section className="section" id="tiers">
  <div className="wrap">
    <div className="section-head center reveal up">
      <span className="eyebrow">Easy to nightmare</span>
      <Kx as="h2" text={"Climb every {gold|difficulty tier}"} />
      <p>Four tiers of handmade boards, from 100 arrows in the first level to 438 in the last.</p>
    </div>
    <div className="grid grid-4">
      <div className="panel tier reveal"><img src="/img/badges/badge_hard_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Hard</h3><span className="range">Levels 1–20</span></div>
      <div className="panel tier reveal" data-d="1"><img src="/img/badges/badge_expert_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Expert</h3><span className="range">Levels 21–50</span></div>
      <div className="panel tier reveal" data-d="2"><img src="/img/badges/badge_master_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Master</h3><span className="range">Levels 51–80</span></div>
      <div className="panel tier reveal" data-d="3"><img src="/img/badges/badge_nightmare_512.webp" width="112" height="112" alt="" loading="lazy" /><h3>Nightmare</h3><span className="range">Levels 81–100</span></div>
    </div>

    <div className="grid grid-3" style={{ marginTop: '32px' }}>
      <div className="panel reveal"><img src="/img/ui/hint_dark_normal.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>Hint</h3><p>Highlights an arrow you can safely slide right now.</p></div>
      <div className="panel reveal" data-d="1"><img src="/img/badges/badge_streak_512.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>Daily streak</h3><p>Come back each day, tick off the week and earn gems.</p></div>
      <div className="panel reveal" data-d="2"><img src="/img/ui/gem.webp" width="56" height="56" alt="" loading="lazy" style={{ marginBottom: '12px' }} /><h3>Gems</h3><p>Every cleared level pays out gems. Watch the total tick up on the win screen.</p></div>
    </div>
  </div>
</section>

<section className="section" id="pictures">
  <div className="wrap">
    <div className="section-head reveal up">
      <span className="eyebrow">A peek at the gallery</span>
      <Kx as="h2" text={"Every maze hides a {picture}"} />
      <p>Animals, birds, sea life, bugs, dinosaurs and a lot of everyday objects. Here is a small taste, still tangled.</p>
    </div>
    <div className="wall">
      <figure><img src="/img/shapes/fox.webp" width="336" height="336" alt="Fox silhouette made of arrows" loading="lazy" /><figcaption>Fox</figcaption></figure>
      <figure><img src="/img/shapes/whale.webp" width="336" height="336" alt="Whale silhouette made of arrows" loading="lazy" /><figcaption>Whale</figcaption></figure>
      <figure><img src="/img/shapes/rocket.webp" width="336" height="336" alt="Rocket silhouette made of arrows" loading="lazy" /><figcaption>Rocket</figcaption></figure>
      <figure><img src="/img/shapes/butterfly.webp" width="336" height="336" alt="Butterfly silhouette made of arrows" loading="lazy" /><figcaption>Butterfly</figcaption></figure>
      <figure><img src="/img/shapes/t_rex.webp" width="336" height="336" alt="T-Rex silhouette made of arrows" loading="lazy" /><figcaption>T-Rex</figcaption></figure>
      <figure><img src="/img/shapes/crown.webp" width="336" height="336" alt="Crown silhouette made of arrows" loading="lazy" /><figcaption>Crown</figcaption></figure>
    </div>
  </div>
</section>

<section className="section--tight" style={{ paddingBottom: '0' }}>
  <div className="wrap">
    <div className="callout reveal up">
      <div>
        <span className="eyebrow">Ready when you are</span>
        <h2>Free the first arrow.</h2>
        <p style={{ color: '#fff' }}>Your first board takes about a minute. The picture underneath is worth it.</p>
        <StoreButtons />
      </div>
      <img src="/img/brand/feature-512.webp" width="512" height="250" alt="Arrow Flow logo with two phones showing llama and bell levels" loading="lazy" style={{ borderRadius: '20px', boxShadow: '0 20px 50px rgba(0,0,0,.5)' }} />
    </div>
  </div>
</section>
    </>
  );
}
