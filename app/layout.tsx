import type { Metadata, Viewport } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SiteEffects } from '@/components/SiteEffects';
import { SITE_NAME, SITE_URL } from '@/config';
import './globals.css';

const image = '/img/brand/og-image.jpg';
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} · Slide the arrows. Reveal the picture.`, template: `%s · ${SITE_NAME}` },
  description: 'Arrow Flow is a calm silhouette puzzle for iPhone and Android. Tap arrows to slide them free and reveal a hidden picture.',
  manifest: '/manifest.webmanifest',
  openGraph: {
    type: 'website', siteName: SITE_NAME, images: [{ url: image, width: 1200, height: 630, alt: 'Arrow Flow: slide the arrows, reveal the picture.' }],
  },
  twitter: { card: 'summary_large_image', images: [image] },
  // Once the iOS listing exists, add  itunes: { appId: 'YOUR_APP_ID' }  for Safari's smart banner.
};
export const viewport: Viewport = { themeColor: '#06060E', width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Inter-ExtraBold.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <SiteEffects />
      </body>
    </html>
  );
}
