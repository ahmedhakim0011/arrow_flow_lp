'use client';
import { useState } from 'react';

/** Loads the 6.5 MB trailer only after the visitor presses play. */
export function TrailerButton() {
  const [on, setOn] = useState(false);
  return (
    <div className="video-box">
      {on ? (
        <video src="/video/arrow-flow-trailer.mp4" controls autoPlay playsInline width={1080} height={1920} aria-label="Arrow Flow trailer" />
      ) : (
        <button className="chip-btn" type="button" onClick={() => setOn(true)} aria-label="Play the Arrow Flow trailer"
          style={{ width: '100%', aspectRatio: '9/16', borderRadius: 0, background: "#05050c url('/img/screens/reveal-540.jpg') center/cover", display: 'grid', placeItems: 'center' }}>
          <span className="btn" aria-hidden="true">▶ Play trailer</span>
        </button>
      )}
    </div>
  );
}
