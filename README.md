# Arrow Flow — marketing site (Next.js)

Next.js 15 (App Router, TypeScript), exported as a fully static site. Brand analysis: `BRAND_NOTES.md`.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site -> ./out  (deploy this folder anywhere)
```

## Replace before launch
- `src/config.ts`: store URLs (`STORES`), contact email, and the domain (`SITE_URL`, or set `NEXT_PUBLIC_SITE_URL`).
- Privacy / Terms (`app/privacy`, `app/terms`): drafts, need legal review; `PLACEHOLDER` tags mark gaps.
- Studio info on `app/about`, QR code on `app/download`, min Android version.

## Layout
- `app/<route>/page.tsx` — pages (metadata via `src/lib/meta.ts`), `app/layout.tsx` — shell, `sitemap.ts` / `robots.ts` / `manifest.ts`.
- `src/components/` — `Header`, `Footer`, `StoreButtons` (device-aware), `BoardCard` (playable puzzle, real game rules), `Gallery` (lightbox), `Pic`/`Raw`, `ContactForm` (mailto), `TrailerButton`.
- `app/globals.css` — all design tokens and styles. `public/` — images, fonts, trailer.

## Deploy
Vercel / Netlify: import the repo (build `npm run build`, output `out`). GitHub Pages: publish `out/`.

## Branding, contact, badges
- Maker: `MAKER` and `CONTACT_EMAIL` in `src/config.ts` (footer, hero chip, About, Contact, schema.org author).
- Store badges: official Apple SVG and Google Play PNG in `public/img/store/` (Google's PNG is cropped in CSS so both badges share one height). Do not edit or recolour them; follow Apple's and Google's badge guidelines. They link to `/download/` until `STORES` in `src/config.ts` has real URLs.
- Motion: `Kx` (kinetic headings), `Marquee`, `Count`, hero streaks/orbs, scroll progress, pointer spotlight and magnetic buttons (`SiteEffects`). All of it is off under `prefers-reduced-motion`.
# arrow_flow_lp
