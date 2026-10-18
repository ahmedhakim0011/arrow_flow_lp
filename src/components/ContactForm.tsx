'use client';
import { useState } from 'react';
import { CONTACT_EMAIL } from '@/config';

/** No backend: builds a mailto: draft in the visitor's own mail app. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form className="panel reveal" autoComplete="on" onSubmit={(e) => {
      e.preventDefault();
      const d = new FormData(e.currentTarget);
      const subj = `[Arrow Flow] ${d.get('topic')} from ${d.get('name')}`;
      const body = `${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`;
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
      setSent(true);
    }}>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" required autoComplete="name" /></div>
      <div className="field"><label htmlFor="email">Your email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
      <div className="field"><label htmlFor="topic">Topic</label>
        <select id="topic" name="topic"><option>Support</option><option>Feedback</option><option>Press</option><option>Business</option><option>Other</option></select></div>
      <div className="field"><label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder="For bugs, include your device, OS version and level number." /></div>
      <button className="btn" type="submit">Open email draft</button>
      {sent && <p className="notice" style={{ marginTop: 16 }} role="status">Your email app should open with the message filled in. If it doesn&apos;t, write to the address on the right.</p>}
    </form>
  );
}
