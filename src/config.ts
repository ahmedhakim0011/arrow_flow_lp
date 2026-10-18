/** Site config. Store URLs stay empty ("coming soon" state) until the listings exist. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://arrowflow.ahmedbuildapps.com';
export const SITE_NAME = 'Arrow Flow';
export const STORES = {
  ios: '',      // set when live, e.g. 'https://apps.apple.com/app/arrow-flow/id0000000000'
  android: '',  // set when live, e.g. 'https://play.google.com/store/apps/details?id=your.final.app.id'
};
export const CONTACT_EMAIL = 'ahmdahmed259@gmail.com';
export const MAKER = { name: 'ahmedbuildapps.com', url: 'https://ahmedbuildapps.com' };
export const NAV = [
  { href: '/', label: 'Home' }, { href: '/features/', label: 'Features' }, { href: '/how-to-play/', label: 'How to play' },
  { href: '/screenshots/', label: 'Screenshots' }, { href: '/about/', label: 'About' }, { href: '/faq/', label: 'FAQ' },
];
