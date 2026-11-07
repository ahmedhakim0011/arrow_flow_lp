import Link from 'next/link';
import { EmailLink } from '@/components/EmailLink';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('Privacy policy · Arrow Flow', 'How Arrow Flow handles your data: progress stays on your device; the game shows ads through Google AdMob, with child-safe ads for younger players.', '/privacy/');

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="crumbs"><Link href="/">Home</Link> / Privacy policy</p>
          <span className="eyebrow">Legal</span>
          <h1>Privacy policy</h1>
          <p className="lead">Short version: your progress stays on your phone, we have no accounts, and the game is free because it shows ads from Google AdMob. Younger players and anyone who skips the age question only get non-personalized, child-appropriate ads.</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap narrow legal">
          <p><strong>Last updated:</strong> November 7, 2026</p>

          <h2>1. Who we are</h2>
          <p>Arrow Flow is made and published by <a href="https://ahmedbuildapps.com" target="_blank" rel="noopener">ahmedbuildapps.com</a> (&ldquo;we&rdquo;, &ldquo;us&rdquo;). You can reach us at <EmailLink /> or through the <Link href="/contact/">contact page</Link>. We don&apos;t publish a postal address; email is the best way to get in touch.</p>

          <h2>2. What the game stores on your device</h2>
          <p>Arrow Flow saves your level progress, stars, gems, daily streak and settings (sound, music, haptics) <strong>on your device only</strong>. There are no user accounts, and this information is never sent to us.</p>
          <p>The game also keeps a few counters on your device so it can space out ads fairly (for example how many levels you have finished and when you last saw an ad). These stay on your device.</p>

          <h2>3. The age question</h2>
          <p>The first time you open the game, it asks for your birth month and year. You can skip it. We only store the resulting age group (under 13, 13&ndash;17 or 18+) on your device; the birth date itself is not stored and is never sent to us or to anyone else. If you skip the question, the game treats you as a child for advertising purposes.</p>

          <h2>4. Ads</h2>
          <p>Arrow Flow is free and shows ads through <strong>Google AdMob</strong> (the Google Mobile Ads SDK). Ads appear between levels, and you can choose to watch a video ad to get an extra heart or a hint. Ads never appear while you are playing a level.</p>
          <p>To deliver and measure ads and to prevent fraud, Google may collect information from your device, such as your IP address, device and app information, how you interact with ads, diagnostics, and, where allowed, your device&apos;s advertising ID. Google processes this data under its own policies. Learn more at <a href="https://business.safety.google/privacy/" target="_blank" rel="noopener">How Google uses information from sites or apps that use its services</a> and in the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>.</p>
          <ul>
            <li><strong>Under 13, or age not given:</strong> ads are requested with Google&apos;s child-directed treatment. They are non-personalized, limited to content rated suitable for general audiences (G), and come only from ad sources certified for families. The advertising ID is not used.</li>
            <li><strong>13 to 17:</strong> ads are non-personalized and limited to general-audience (G) content.</li>
            <li><strong>18 and over:</strong> ads may be personalized, subject to the consent choices below.</li>
          </ul>

          <h2>5. Your consent and privacy choices</h2>
          <p>If you are in the European Economic Area, the United Kingdom or Switzerland, the game asks for your consent through Google&apos;s consent message before any personalized ads are shown. If you are in a US state with a consumer privacy law, you can opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information for advertising. Where these choices apply, you can change them at any time in the game under <strong>Settings &rarr; Privacy choices</strong>.</p>
          <p>You can also reset or delete your device&apos;s advertising ID, or opt out of personalized ads, in your phone&apos;s settings (on Android: Settings &rarr; Google &rarr; Ads, or Settings &rarr; Privacy &rarr; Ads, depending on the device).</p>

          <h2>6. Game settings file</h2>
          <p>The game may download a small settings file from this website (for example to adjust how often ads are shown or to switch ads off). That request does not include any identifier or game data. Like any web request, it reaches our host, which may keep standard server logs (see section 7).</p>

          <h2>7. This website</h2>
          <p>This website doesn&apos;t use cookies, advertising trackers or analytics. Our host may keep standard server logs (such as IP address and pages requested) for security and reliability. The contact form has no server: it opens a draft in your own email app, and we only receive what you choose to send. We use it to reply to you and nothing else.</p>

          <h2>8. What we do not collect</h2>
          <p>We do not run accounts, chat or user-generated content, and the game contains no analytics or crash-reporting software and no in-app purchases. We do not receive or store your name, email, contacts, precise location or birth date from the game. The app stores (Google Play and the Apple App Store) may collect their own data when you download or update the game, under their own privacy policies.</p>
          <p>If we add analytics, purchases or other services, we will update this policy and the store privacy labels before that version is released.</p>

          <h2>9. Children</h2>
          <p>Arrow Flow is made for all ages. We do not knowingly collect personal information from children. Players who say they are under 13, and players who skip the age question, only receive child-directed, non-personalized, general-audience ads from family-certified ad sources, and the advertising ID is not used for them. Parents who have questions, or who believe their child has sent us personal information by email, can contact us at <EmailLink /> and we will delete it.</p>

          <h2>10. Your rights</h2>
          <p>We don&apos;t hold personal data about you on our side, so requests to access, correct or delete it will usually have nothing to act on. For data collected by Google for advertising, use the privacy choices in the game, your device&apos;s ad settings and Google&apos;s tools linked above. If you have emailed us, you can ask us at any time to see or delete that correspondence. If you are in the EEA, UK or a US state with a privacy law, you have the rights your local law gives you (such as access, deletion, objection and opt-out), and you can complain to your local data protection authority.</p>
          <p>You can remove all game data from your device at any time by resetting progress in Settings or by uninstalling the game.</p>

          <h2>11. Changes to this policy</h2>
          <p>We&apos;ll update this page when the game or our practices change and revise the date at the top.</p>

          <h2>12. Contact</h2>
          <p>Questions about privacy? Email <EmailLink /> or use the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </section>
    </>
  );
}
