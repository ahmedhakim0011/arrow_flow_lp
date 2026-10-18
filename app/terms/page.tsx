import Link from 'next/link';
import { EmailLink } from '@/components/EmailLink';
import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('Terms of use · Arrow Flow', 'The terms for playing Arrow Flow and using this website.', '/terms/');

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap narrow">
          <p className="crumbs"><Link href="/">Home</Link> / Terms of use</p>
          <span className="eyebrow">Legal</span>
          <h1>Terms of use</h1>
          <p className="lead">Plain rules for playing Arrow Flow and using this site.</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="wrap narrow legal">
          <p><strong>Last updated:</strong> October 18, 2026</p>

          <h2>1. Agreement</h2>
          <p>By installing or playing Arrow Flow (the &ldquo;Game&rdquo;) or using this website, you agree to these terms. If you don&apos;t agree, please don&apos;t use them. The Game is provided by <a href="https://ahmedbuildapps.com" target="_blank" rel="noopener">ahmedbuildapps.com</a> (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Your download is also covered by the terms of the app store you got it from.</p>

          <h2>2. Licence</h2>
          <p>We grant you a personal, non-exclusive, non-transferable, revocable licence to install and play the Game on devices you own or control, for non-commercial use. You may not copy, modify, reverse engineer, resell or redistribute the Game, except where the law allows it.</p>

          <h2>3. In-game items, ads and purchases</h2>
          <p>Gems and other in-game items have no cash value, can&apos;t be exchanged for money and can&apos;t be transferred. Arrow Flow is currently free to play with no ads and no purchases. If we add ads or paid items in a future version, we&apos;ll update these terms first. Purchases would be handled by Apple or Google under their rules, including their refund policies.</p>

          <h2>4. Intellectual property</h2>
          <p>The Game, its name, logo and original artwork belong to ahmedbuildapps.com or its licensors. Third-party artwork is credited on the <Link href="/about/">About page</Link>, and those works remain under their own licences.</p>

          <h2>5. Acceptable use</h2>
          <p>Don&apos;t misuse the Game or this website. That includes tampering with them, trying to gain unauthorised access, or using them to break the law.</p>

          <h2>6. Disclaimer and liability</h2>
          <p>The Game and this website are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, to the fullest extent the law allows. We don&apos;t promise the Game will always be uninterrupted or free of errors. To the maximum extent permitted by law, we are not liable for indirect or consequential losses arising from your use of the Game, and our total liability for any claim is limited to the amount you paid for the Game (which is zero while it is free). Nothing in these terms limits any right you have under mandatory consumer law.</p>

          <h2>7. Changes and termination</h2>
          <p>We may update these terms or the Game from time to time and will revise the date above. Continuing to use the Game means you accept the updated terms. You can stop at any time by uninstalling the Game. We may suspend access if these terms are broken.</p>

          <h2>8. Governing law</h2>
          <p>These terms are governed by the laws of the country where the maker of the Game is resident, without regard to conflict-of-law rules. Mandatory consumer-protection laws of your own country still apply to you.</p>

          <h2>9. Contact</h2>
          <p>Questions about these terms? Email <EmailLink /> or use the <Link href="/contact/">contact page</Link>.</p>
        </div>
      </section>
    </>
  );
}
