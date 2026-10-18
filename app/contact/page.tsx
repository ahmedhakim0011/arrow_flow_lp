import { Kx } from '@/components/Kx';
import { pageMeta } from '@/lib/meta';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { EmailLink } from '@/components/EmailLink';

export const metadata = pageMeta("Contact · Arrow Flow", "Contact the Arrow Flow team for support, feedback, press or business questions.", "/contact/");

export default function ContactPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap">
    <p className="crumbs"><Link href="/">Home</Link> / Contact</p>
    <span className="eyebrow">Say hello</span>
    <Kx as="h1" text={"We read {every} message"} />
    <p className="lead">Found a bug, have an idea or just want to share your favourite silhouette? Write to us.</p>
  </div>
</section>

<section className="section--tight">
  <div className="wrap split" style={{ alignItems: 'start' }}>
    <ContactForm />
    <div className="reveal" data-d="1">
      <div className="panel">
        <h2 style={{ fontSize: 'var(--fs-lg)' }}>Email</h2>
        <p><EmailLink /></p>
        <p className="muted" style={{ fontSize: 'var(--fs-sm)' }}>This form has no server. It builds an email in your own mail app. Messages go straight to the maker.</p>
      </div>
      <div className="panel" style={{ marginTop: '24px' }}>
        <h2 style={{ fontSize: 'var(--fs-lg)' }}>Before you write</h2>
        <p>Your question may already be answered in the <Link href="/faq/">FAQ</Link> or the <Link href="/how-to-play/">tutorial</Link>.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
