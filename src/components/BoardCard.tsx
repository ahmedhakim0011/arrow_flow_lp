'use client';
import { useId, useMemo, useRef, useState } from 'react';

/**
 * Playable mini board using the game's real rules:
 * an arrow is FREE if every cell from its head to the edge (in head direction) is empty.
 * Free tap -> slides out. Blocked tap -> shakes and costs a heart. Clear all -> silhouette revealed.
 * Arrow cells are listed tail -> head; direction = last segment.
 */
type Cell = number[];
export type BoardData = { cols: number; rows: number; name: string; intro: string; arrows: Cell[][] };
const S = 60;
const COLORS = ['#35E6FF', '#FF4FB8', '#8A5BFF', '#14C8FF'];
const DIRNAME: Record<string, string> = { '1,0': 'right', '-1,0': 'left', '0,1': 'down', '0,-1': 'up' };

const dirOf = (a: Cell[]) => { const p = a[a.length - 2], q = a[a.length - 1]; return { x: q[0] - p[0], y: q[1] - p[1] }; };
const reduceMotion = () => typeof window !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

type Props = {
  board: BoardData; label: string; ariaLabel: string;
  hearts?: boolean; hint?: boolean; small?: boolean;
};

export function BoardCard({ board, label, ariaLabel, hearts: useHearts = true, hint: useHint = false, small = false }: Props) {
  const { cols, rows, arrows } = board;
  const gid = useId().replace(/:/g, '');
  const [gone, setGone] = useState<Set<number>>(new Set());
  const [hearts, setHearts] = useState(3);
  const [msg, setMsg] = useState(board.intro);
  const [over, setOver] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [shake, setShake] = useState<{ i: number; n: number } | null>(null);
  const [hinted, setHinted] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const occ = useMemo(() => {
    const m = new Map<string, number>();
    arrows.forEach((a, i) => { if (!gone.has(i)) a.forEach((c) => m.set(`${c[0]},${c[1]}`, i)); });
    return m;
  }, [arrows, gone]);

  /** Index of the arrow blocking arrow i, or -1 if i is free. */
  const blocker = (i: number) => {
    const a = arrows[i], d = dirOf(a), h = a[a.length - 1];
    let x = h[0] + d.x, y = h[1] + d.y;
    while (x >= 0 && x < cols && y >= 0 && y < rows) {
      const o = occ.get(`${x},${y}`);
      if (o !== undefined && o !== i) return o;
      x += d.x; y += d.y;
    }
    return -1;
  };

  const reset = () => { setGone(new Set()); setHearts(3); setMsg(board.intro); setOver(false); setRevealed(false); setShake(null); setHinted(null); };

  const tap = (i: number) => {
    if (over || gone.has(i)) return;
    const by = blocker(i);
    if (by < 0) {
      const next = new Set(gone); next.add(i); setGone(next);
      const left = arrows.length - next.size;
      if (left === 0) {
        setOver(true);
        setTimeout(() => setRevealed(true), reduceMotion() ? 0 : 350);
        setMsg(`Cleared! You revealed: ${board.name}${hearts === 3 ? ' ★★★' : hearts === 2 ? ' ★★' : ' ★'}`);
      } else setMsg(`Whoosh. ${left} ${left === 1 ? 'arrow' : 'arrows'} left.`);
    } else {
      setShake((s) => ({ i, n: (s?.n ?? 0) + 1 }));
      const bd = dirOf(arrows[by]); const bn = DIRNAME[`${bd.x},${bd.y}`];
      if (useHearts) {
        const h = hearts - 1; setHearts(h);
        if (h <= 0) { setOver(true); setMsg('Out of hearts. Hit Restart and try a different order.'); return; }
        setMsg(`Blocked! −1 heart. Another arrow is in the way. Try one that points ${bn}.`);
      } else setMsg('Blocked! Another arrow is in the way. Clear that one first.');
    }
  };

  const hint = () => {
    if (over) return;
    const i = arrows.findIndex((_, k) => !gone.has(k) && blocker(k) < 0);
    if (i < 0) return;
    setHinted(i); setMsg('Hint: the glowing arrow has a clear path.');
    clearTimeout(timer.current); timer.current = setTimeout(() => setHinted(null), 2600);
  };

  const left = arrows.length - gone.size;
  const dist = (Math.max(cols, rows) + 3) * S;

  return (
    <div className={`board-card${small ? ' board-card--sm' : ''}`}>
      <div className="board-top">
        {useHearts && (
          <span className="pillstat hearts" role="img" aria-label={`${hearts} of 3 hearts left`}>
            {[0, 1, 2].map((k) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={k} className={`heart${k >= hearts ? ' lost' : ''}`} src="/img/ui/heart_full.webp" alt="" width={22} height={22} />
            ))}
          </span>
        )}
        <span className="pillstat">↗ <span>{left}</span></span>
        <span className="tier-chip">{label}</span>
      </div>
      <svg className={`board${revealed ? ' revealed' : ''}`} viewBox={`0 0 ${cols * S} ${rows * S}`} style={{ aspectRatio: `${cols}/${rows}` }}
        role="group" aria-label={ariaLabel}>
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#35A0FF" /><stop offset=".55" stopColor="#8A5BFF" /><stop offset="1" stopColor="#FF3FB4" />
          </linearGradient>
        </defs>
        <g>{arrows.flatMap((a, i) => a.map((c) => (
          <rect key={`${i}-${c}`} className="sil" x={c[0] * S + 4} y={c[1] * S + 4} width={S - 8} height={S - 8} rx={10} fill={`url(#${gid})`} />
        )))}</g>
        <g>{Array.from({ length: rows * cols }, (_, n) => (
          <circle key={n} className="dot" cx={(n % cols) * S + S / 2} cy={Math.floor(n / cols) * S + S / 2} r={2.6} />
        ))}</g>
        {arrows.map((a, i) => {
          const d = dirOf(a), h = a[a.length - 1], hx = h[0] * S + S / 2, hy = h[1] * S + S / 2, px = -d.y, py = d.x;
          const pts = a.map((c, k) => {
            let cx = c[0] * S + S / 2, cy = c[1] * S + S / 2;
            if (k === a.length - 1) { cx -= d.x * 6; cy -= d.y * 6; }
            return `${cx},${cy}`;
          }).join(' ');
          const head = `${hx + d.x * 20},${hy + d.y * 20} ${hx - d.x * 4 + px * 12},${hy - d.y * 4 + py * 12} ${hx - d.x * 4 - px * 12},${hy - d.y * 4 - py * 12}`;
          const isGone = gone.has(i);
          const cls = `arrow${isGone ? ' gone' : ''}${hinted === i ? ' hint' : ''}${shake?.i === i ? ' shake' : ''}`;
          return (
            <g key={`${i}-${shake?.i === i ? shake.n : 0}`} className={cls} role="button" tabIndex={isGone ? -1 : 0} aria-hidden={isGone || undefined}
              aria-label={`Arrow pointing ${DIRNAME[`${d.x},${d.y}`]}. Press Enter to slide it.`}
              style={{ ['--c' as string]: COLORS[i % COLORS.length], transform: isGone && !reduceMotion() ? `translate(${d.x * dist}px,${d.y * dist}px)` : undefined }}
              onClick={() => tap(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tap(i); } }}>
              <polyline className="hit" points={pts} /><polyline className="line" points={pts} /><polygon className="head" points={head} />
            </g>
          );
        })}
      </svg>
      <p className="board-msg" aria-live="polite">{msg}</p>
      <div className="board-actions">
        {useHint && <button className="chip-btn" type="button" onClick={hint}>Hint</button>}
        <button className="chip-btn" type="button" onClick={reset}>Restart</button>
      </div>
    </div>
  );
}
