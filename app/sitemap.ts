import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/config';
export const dynamic = 'force-static';
const routes = ['', 'features', 'how-to-play', 'screenshots', 'download', 'about', 'faq', 'contact', 'privacy', 'terms'];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({ url: `${SITE_URL}/${r ? r + '/' : ''}`, lastModified: new Date() }));
}
