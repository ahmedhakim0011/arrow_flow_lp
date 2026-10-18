import { pageMeta } from '@/lib/meta';
import Link from 'next/link';

export const metadata = pageMeta("Privacy policy · Arrow Flow", "Draft privacy policy template for Arrow Flow. Needs legal review before publication.", "/privacy/");

export default function PrivacyPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap narrow">
    <p className="crumbs"><Link href="/">Home</Link> / Privacy policy</p>
    <span className="eyebrow">Legal</span>
    <h1>Privacy policy</h1>
    <p className="notice"><strong>DRAFT, NOT LEGAL ADVICE.</strong> This template reflects how the current game works (data kept on the device, no accounts, no analytics or ad SDK). It has not been reviewed by a lawyer. Have it reviewed and fill every <span className="placeholder-tag">[PLACEHOLDER]</span> before you publish or submit it to the stores.</p>
  </div>
</section>

<section className="section--tight">
  <div className="wrap narrow legal">
    <p><strong>Last updated:</strong> <span className="placeholder-tag">[DATE]</span></p>

    <h2>1. Who we are</h2>
    <p>ahmedbuildapps.com ("we", "us") makes the mobile game Arrow Flow. Contact: ahmdahmed259@gmail.com, <span className="placeholder-tag">[POSTAL ADDRESS]</span>.</p>

    <h2>2. What the game stores</h2>
    <p>Arrow Flow stores your level progress, stars, gems, daily streak and settings <strong>on your device only</strong>. We do not run user accounts and we do not receive this information.</p>

    <h2>3. What we collect</h2>
    <p>The current version of the game does not collect personal data and does not include analytics, advertising or crash-reporting SDKs. <span className="placeholder-tag">[UPDATE THIS SECTION THE MOMENT AN AD, ANALYTICS OR PURCHASE SDK IS ADDED, AND UPDATE THE GOOGLE PLAY DATA SAFETY AND APP STORE PRIVACY LABELS TO MATCH]</span></p>

    <h2>4. This website</h2>
    <p>This website does not set cookies or run analytics. <span className="placeholder-tag">[UPDATE IF YOU ADD ANALYTICS, EMBEDS OR A CONTACT BACKEND]</span> The contact form opens your own email app. We only receive what you choose to send us, and we use it to reply to you.</p>

    <h2>5. Children</h2>
    <p><span className="placeholder-tag">[STATE THE TARGET AGE GROUP AND ANY COPPA / GDPR-K OBLIGATIONS]</span></p>

    <h2>6. Your rights</h2>
    <p><span className="placeholder-tag">[ADD RIGHTS FOR YOUR JURISDICTIONS, E.G. GDPR / CCPA ACCESS, DELETION AND OBJECTION]</span> You can delete all game data on your device at any time by resetting progress in Settings or uninstalling the game.</p>

    <h2>7. Changes</h2>
    <p>We'll update this page when the game or our practices change and revise the date above.</p>

    <h2>8. Contact</h2>
    <p>Questions? <Link href="/contact/">Contact us</Link>.</p>
  </div>
</section>
    </>
  );
}
