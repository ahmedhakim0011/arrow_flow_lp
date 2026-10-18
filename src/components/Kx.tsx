import type { CSSProperties, ElementType } from 'react';

/**
 * Kinetic heading. `text` words rise out of a mask one by one; `{word}` / `{cyan|words}` / `{gold|words}`
 * becomes the brand gradient pill that pops in. `chars` animates letter by letter (hero only).
 * Triggered by the `.in` class added by SiteEffects (h1s animate on load via pure CSS so the headline never waits for hydration). Screen readers get the plain sentence.
 */
export function Kx({ as: T = 'h2', text, chars = false, className = '', style }: {
  as?: ElementType; text: string; chars?: boolean; className?: string; style?: CSSProperties;
}) {
  let i = 0;
  const plain = text.replace(/\{(?:\w+\|)?([^}]+)\}/g, '$1');
  const nodes: React.ReactNode[] = [];
  text.split(/(\{[^}]+\})/).filter(Boolean).forEach((part, pi) => {
    const m = part.match(/^\{(?:(\w+)\|)?([^}]+)\}$/);
    if (m) {
      const v = m[1] ? ` hl--${m[1]}` : '';
      nodes.push(<span key={`h${pi}`} className={`hl kx-hl${v}`} style={{ ['--i' as string]: i++ }}>{m[2]}</span>, ' ');
      return;
    }
    part.split(/\s+/).filter(Boolean).forEach((w, wi) => {
      const inner = chars
        ? Array.from(w).map((c, ci) => <span key={ci} className="kx-c kx-ch" style={{ ['--i' as string]: i++ }}>{c}</span>)
        : <span className="kx-c" style={{ ['--i' as string]: i++ }}>{w}</span>;
      nodes.push(<span key={`${pi}-${wi}`} className="kx-w">{inner}</span>, ' ');
    });
  });
  return (
    <T className={`kx ${className}`.trim()} style={style} {...(T === 'h1' ? { 'data-load': '' } : {})}>
      <span className="sr-only">{plain}</span>
      <span aria-hidden="true">{nodes}</span>
    </T>
  );
}
