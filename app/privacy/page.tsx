import Link from 'next/link';
import { EmailLink } from '@/components/EmailLink';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('Privacy policy · Arrow Flow', 'How Arrow Flow handles your data: game progress stays on your device, with no accounts, ads or analytics.', '/privacy/');

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="crumbs"><Link href="/">Home</Link> / Privacy policy</p>
          <span className="eyebrow">Legal</span>
          <h1>Privacy policy</h1>
          <p className="lead">Short version: Arrow Flow keeps your progress on your phone and doesn&apos;t collect your personal data.</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap narrow legal">
          <p><strong>Last updated:</strong> October 18, 2026</p>

          <h2>1. Who we are</h2>
          <p>Arrow Flow is made and published by <a href="https://ahmedbuildapps.com" target="_blank" rel="noopener">ahmedbuildapps.com</a> (&ldquo;we&rdquo;, &ldquo;us&rdquo;). You can reach us at <EmailLink /> or through the <Link href="/contact/">contact page</Link>. We don&apos;t publish a postal address; email is the best way to get in touch.</p>

          <h2>2. What the game stores on your device</h2>
          <p>Arrow Flow saves your level progress, stars, gems, daily streak and settings (sound, music, haptics) <strong>on your device only</strong>. There are no user accounts, and this information is never sent to us or to anyone else.</p>

          <h2>3. What we collect</h2>
          <p>The current version of the game does not collect personal data. It contains no advertising, analytics or crash-reporting software, and it works fully offline.</p>
          <p>The app stores (Apple App Store and Google Play) may collect their own data when you download or update the game, under their own privacy policies. We don&apos;t control that.</p>
          <p>If we ever add ads, analytics or purchases, we will update this policy and the store privacy labels before that version is released.</p>

          <h2>4. This website</h2>
          <p>This website doesn&apos;t use cookies, advertising trackers or analytics. Our host may keep standard server logs (such as IP address and pages requested) for security and reliability. The contact form has no server: it opens a draft in your own email app, and we only receive what you choose to send. We use it to reply to you and nothing else.</p>

          <h2>5. Children</h2>
          <p>Arrow Flow is a casual puzzle game with no chat, no user-generated content and no data collection, so it is suitable for a general audience. Because we collect no personal information from anyone, including children, there is nothing for a parent to review or delete on our side. If you believe a child has sent us personal information by email, tell us and we&apos;ll delete it.</p>

          <h2>6. Your rights</h2>
          <p>Because we don&apos;t hold personal data about you, requests to access, correct or delete it will usually have nothing to act on. If you have emailed us, you can ask us at any time to see or delete that correspondence, and we&apos;ll do so. If you are in the EEA, UK or California, you have the rights that your local law gives you (such as access, deletion and objection), and you can also complain to your local data protection authority.</p>
          <p>You can remove all game data from your device at any time by resetting progress in Settings or by uninstalling the game.</p>

          <h2>7. Changes to this policy</h2>
          <p>We&apos;ll update this page when the game or our practices change and revise the date at the top.</p>

          <h2>8. Contact</h2>
          <p>Questions about privacy? Email <EmailLink /> or use the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </section>
    </>
  );
}
