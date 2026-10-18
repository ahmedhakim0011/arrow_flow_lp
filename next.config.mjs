/** Static export: `npm run build` writes a deployable site to ./out (Netlify, Vercel, GitHub Pages, any host). */
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true } };
export default nextConfig;
