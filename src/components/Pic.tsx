/** Unframed in-app screen (1290x2796 source). Always rendered whole: the frame is sized to the exact ratio. */
export function Raw({ name, alt, eager }: { name: string; alt: string; eager?: boolean }) {
  return (
    <picture>
      <source type="image/webp" srcSet={`/img/raw/${name}-360.webp 360w, /img/raw/${name}-720.webp 720w`} sizes="(min-width:700px) 260px, 45vw" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/img/raw/${name}-360.jpg`} width={360} height={780} alt={alt} {...(eager ? {} : { loading: 'lazy', decoding: 'async' })} />
    </picture>
  );
}

/** Complete device frame around a screen. */
export function Phone({ name, alt, className = '', eager }: { name: string; alt: string; className?: string; eager?: boolean }) {
  return <div className={`phone ${className}`.trim()}><Raw name={name} alt={alt} eager={eager} /></div>;
}
