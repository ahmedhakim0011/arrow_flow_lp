import { pageMeta } from '@/lib/meta';
import Link from 'next/link';

export const metadata = pageMeta("Terms of use · Arrow Flow", "Draft terms of use template for Arrow Flow. Needs legal review before publication.", "/terms/");

export default function TermsPage() {
  return (
    <>
<section className="page-hero">
  <div className="wrap narrow">
    <p className="crumbs"><Link href="/">Home</Link> / Terms of use</p>
    <span className="eyebrow">Legal</span>
    <h1>Terms of use</h1>
    <p className="notice"><strong>DRAFT, NOT LEGAL ADVICE.</strong> This is a starting template and has not been reviewed by a lawyer. Have it reviewed and fill every <span className="placeholder-tag">[PLACEHOLDER]</span> before you publish it.</p>
  </div>
</section>

<section className="section--tight">
  <div className="wrap narrow legal">
    <p><strong>Last updated:</strong> <span className="placeholder-tag">[DATE]</span></p>

    <h2>1. Agreement</h2>
    <p>By installing or playing Arrow Flow (the "Game") or using this website, you agree to these terms. If you don't agree, please don't use them. The Game is provided by ahmedbuildapps.com.</p>

    <h2>2. Licence</h2>
    <p>We grant you a personal, non-exclusive, non-transferable, revocable licence to install and play the Game on devices you own or control, for non-commercial use. You may not copy, modify, reverse engineer or redistribute the Game except as the law allows.</p>

    <h2>3. In-game items</h2>
    <p>Gems and other in-game items have no cash value. <span className="placeholder-tag">[ADD ADS, PURCHASE AND REFUND TERMS IF AND WHEN THEY ARE INTRODUCED. STORE RULES APPLY.]</span></p>

    <h2>4. Intellectual property</h2>
    <p>The Game, its name, logo and original artwork belong to ahmedbuildapps.com or its licensors. Third-party artwork is credited on the <Link href="/about/">About page</Link>.</p>

    <h2>5. Acceptable use</h2>
    <p>Don't misuse the Game or this website, including by tampering with it or trying to gain unauthorised access.</p>

    <h2>6. Disclaimer and liability</h2>
    <p>The Game is provided "as is". <span className="placeholder-tag">[ADD WARRANTY DISCLAIMER AND LIABILITY LIMITS ALLOWED IN YOUR JURISDICTION]</span></p>

    <h2>7. Changes and termination</h2>
    <p>We may update these terms or the Game. Continued use means you accept the updated terms.</p>

    <h2>8. Governing law</h2>
    <p><span className="placeholder-tag">[GOVERNING LAW AND VENUE]</span></p>

    <h2>9. Contact</h2>
    <p><Link href="/contact/">Contact us</Link> with any questions.</p>
  </div>
</section>
    </>
  );
}
