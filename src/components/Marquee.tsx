/** Infinite kinetic-type band. The second copy is aria-hidden; the first is the accessible text. */
const WORDS = ['Tap', 'Slide', 'Reveal', 'No timers', '100 silhouettes', '3 hearts', 'Feel the flow'];
const Set = ({ hidden }: { hidden?: boolean }) => (
  <div className="marquee-set" aria-hidden={hidden || undefined}>
    {WORDS.flatMap((w) => [<span key={w}>{w}</span>, <span key={w + '-s'} className="sep" aria-hidden="true">➜</span>])}
  </div>
);
export function Marquee() {
  return (
    <div className="marquee" role="region" aria-label="Arrow Flow in a nutshell">
      <div className="marquee-track"><Set /><Set hidden /></div>
    </div>
  );
}
