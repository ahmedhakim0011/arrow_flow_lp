import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from '@/config';

/** Per-page title, description, canonical, Open Graph and Twitter tags. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title: { absolute: title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}` },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}
