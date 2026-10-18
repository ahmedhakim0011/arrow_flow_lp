import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arrow Flow', short_name: 'Arrow Flow', start_url: '/', display: 'browser', background_color: '#06060E', theme_color: '#06060E',
    icons: [{ src: '/img/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/img/brand/icon-512.png', sizes: '512x512', type: 'image/png' }],
  };
}
