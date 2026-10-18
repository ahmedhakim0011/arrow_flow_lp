import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="wrap">
        <div className="big" aria-hidden="true">404</div>
        <h1 style={{ fontSize: 'var(--fs-xl)' }}>That page <span className="hl">slid off</span> the board</h1>
        <p className="lead" style={{ marginInline: 'auto' }}>Nothing&apos;s blocking the way home, though. Tap an arrow below.</p>
        <div className="btn-row" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Link className="btn" href="/">Back to home <span className="arr" aria-hidden="true">→</span></Link>
          <Link className="btn btn--ghost" href="/how-to-play/">How to play</Link>
        </div>
      </div>
    </section>
  );
}
