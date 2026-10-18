# Arrow Flow — brand notes for the landing site

Analysis of `arrow_maze_game/arrow_maze/` (Flutter + Flame project). Everything below comes from the code, docs and assets. Nothing is invented.

> **Name check (decide before launch).** The folder and your brief say "Arrow Maze", but the game ships as **Arrow Flow**. See `lib/app_branding.dart` (`displayName = 'Arrow Flow'`), `pubspec.yaml`, the GDD, `STORE_CHECKLIST.md`, the logo art and the store screenshots. The site uses **Arrow Flow** so it matches the app and its store art. If you rename the game, find-and-replace "Arrow Flow" in `tools/` and re-run `python3 tools/build.py`. The logo art would need a re-export too.

## 1. Game identity

| Item | Finding | Source |
| --- | --- | --- |
| Official name | **Arrow Flow** (wordmark "Arrow" + accent "Flow") | `lib/app_branding.dart` |
| Tagline(s) | "Slide the arrows. Reveal the picture." · "Silhouette puzzles · No timers" · "Tap. Slide. Feel the Flow" · store short description: "Slide the arrows free and reveal the hidden silhouette." | `store_assets/play_feature_graphic_1024x500.png`, `STORE_CHECKLIST.md`, store screenshots |
| Genre | Portrait tap-to-slide arrow puzzle, Android + iOS, offline | GDD, README |
| Core mechanic | A dot lattice is filled with bent arrow pieces that together form a silhouette. Tap an arrow and it slides out the way its head points. If another arrow is in its path the slide fails and you lose a heart. Clear every arrow to reveal the picture. | GDD §2, `tutorial_copy.dart` |
| Hearts | 3 per attempt. Stars = hearts left (1–3). | `arrow_puzzle_logic.dart` |
| Levels | **100 handcrafted silhouettes** (animals and objects). From 100 arrows (Hammer, level 1) to 438 (Hourglass, level 100). | `assets/levels/index.json` |
| Tiers | Hard 1–20 · Expert 21–50 · Master 51–80 · Nightmare 81–100. There is no Easy tier in the shipped data. | `index.json` |
| Silhouette mix | 40 objects, 22 animals, 13 sea creatures, 12 birds, 6 insects, 4 reptiles, 3 dinosaurs | `index.json` |
| Boosters | **Hint** (lightbulb, highlights an arrow that can be cleared). **Restart**. Undo is only in the GDD and is **not** in the build, so it is not on the site. | `hint_provider.dart`, `af/icon_buttons` |
| Controls | Pinch-zoom (1–3×) and pan on big boards | `docs/FLAME_GUIDE.md`, CHANGELOG |
| Meta | Gems (earned per win), daily streak with a weekly check-in, tier badges, pause menu, sound/music/haptics toggles | CHANGELOG, `daily_streak_screen.dart` |
| Monetization | `kEnableMonetization = false`. Ads and IAP are stubs. The GDD plans rewarded ads, remove-ads IAP and gem packs. The site says "free" and makes **no ad or IAP claims**. | `lib/config.dart`, GDD |
| Data | Progress, wallet and settings stay on the device. No accounts, analytics or ad SDK today. | `STORE_CHECKLIST.md` |
| Size | Release arm64 APK measured at 10.4 MB | `QA.md` |
| Platform floor | iOS deployment target 12.0. Android minSdk follows the Flutter default, so it is a placeholder on the site. | `ios/Runner.xcodeproj`, `android/app/build.gradle` |

## 2. Brand assets found (all copied into `assets/img`, optimized to WebP/JPG)

All paths are relative to `arrow_maze_game/arrow_maze/`.

- **App icon**: `app_icon/store/app_icon_1024.png` (also `app_icon/ios/*`, `app_icon/source/*`)
- **Logo glyph (transparent)**: `app_icon/logo/logo_glyph_transparent.png`
- **Logo lockups**: `assets/af/logo/logo_*.webp`. The `app_icon/logo/*PLACEHOLDER*` files are marked as placeholders, so the site does not use them. The wordmark is typeset live in Inter ExtraBold, following the in-app colours (white + `#BEC8FF`).
- **Store art**: `store_assets/play_feature_graphic_1024x500.png` (also the base for the OG image), `store_assets/screenshots/play_1080x1920/01…06_*.png`, `appstore_1290x2796/*`, `store_assets/raw/*.png` (unframed in-app screens)
- **Trailer**: `store_assets/arrow_flow_trailer_1080x1920.mp4`
- **UI kit**: `assets/af/**` (glass buttons, hearts, gem, star, hint button, tier badges, `bg_home.webp`)
- **Tier / streak badges**: `assets/af/badges/badge_{hard,expert,master,nightmare,streak}_512.webp`
- **Silhouette art**: `arrow_shapes/batch_0*_previews/*.png` (672 px, 12 used), `docs/shape_catalog.png`
- **Fonts**: `assets/fonts/Inter-SemiBold.ttf` (600) and `Inter-ExtraBold.ttf` (800). Inter is SIL OFL 1.1. Copied to `assets/fonts/`.
- **Audio**: `assets/audio/*`. **Not used on the site.** QA.md says 13 of them are silent placeholders.
- **Splash**: `splash_animation/*`. QA.md says it is no longer used by the app, so it is not on the site.

## 3. Visual identity

**Palette** (`lib/presentation/theme/app_colors.dart`, "exact palette from the icon generator"):

| Token | Hex | Use |
| --- | --- | --- |
| bg | `#06060E` | page background (also splash colour) |
| surface / elevated | `#0E0E18` / `#141422` | panels |
| violet | `#5B2BFF` | primary gradient start |
| indigo | `#2A3CFF` | |
| cyan / cyanBright | `#14C8FF` / `#35E6FF` | eyebrow labels, links, focus |
| hotPink / pinkBright | `#FF3FA4` / `#FF4FB8` | primary gradient end, hearts |
| gold | `#FFC83D` | stars, streak, "Master" accents |
| glassIce / glassLilac | `#BFEAFF` / `#ECD4FF` | glass highlights |
| wordmark | `#FFFFFF` / `#BEC8FF` | "Arrow" / "Flow" |
| dotGrid | white @ 7% | the lattice texture behind everything |

Tier enamel colours (`gamee_assesst/README.md`): Hard `#3F8CFF`, Expert `#8A5BFF`, Master `#FF5AA8`, Nightmare `#3A2350` + `#FF3B5C` glow, Streak `#5A4BFF`.

- **Type**: Inter, only two weights. 600 for body and 800 for display and buttons. Store art uses wide-tracked uppercase cyan eyebrows above a heavy white headline, with one word in a gradient pill ("Feel the **Flow**").
- **Radius**: panels 24, pills 999 (`app_radius.dart`)
- **Spacing**: 4 / 8 / 12 / 16 / 24 / 32, minimum tap target 48 (`app_spacing.dart`)
- **Motion**: press 80/120 ms, modal 220 ms with easeOutBack, page 220 ms easeOutCubic, press scale 0.96 (`app_motion.dart`)
- **Icon style**: glossy glass 3D (inflated translucent arrow, pink glow underneath). Hearts, gems and stars are 3D enamel. Boards are thin cyan/pink neon polylines on near-black.
- **Mood**: calm, satisfying, night-time arcade. Dark glass and aurora gradients. Short sessions, no pressure, "no timers, just logic".

## 4. Design direction (committed)

**"Neon Glass Arcade."** The site is a night-sky UI built from the game's own parts:

- Near-black `#06060E` with the 7% dot lattice as the page texture.
- Violet/cyan/pink aurora glows behind the hero, the way `bg_home` and the store art do.
- Glass panels (24 px radius, 1 px light border, soft inner highlight) in place of cards on white.
- Uppercase tracked cyan eyebrows, Inter 800 headlines, and one gradient-pill word per headline.
- Primary buttons are the game's violet→pink pill.
- The arrow itself is the motion language: arrows slide out of view on scroll reveals, the link underline "flows", and the hero is a **playable mini board** with the real rules.

**Dark only.** The brand is dark by design: icon, splash colour, every screen and the store art. A light theme would feel like a different product, so the site sets `color-scheme: dark` and does not ship a light mode. The brief said "if it fits the brand", and it doesn't.

## 5. Gaps and placeholders

| Gap | What the site does |
| --- | --- |
| App Store / Google Play URLs | Edit `assets/js/config.js`. Until set, store buttons show "Coming soon" and are visibly marked. No fake links. |
| Official store badges | Not supplied and they have licence rules. Text-and-glyph buttons are used. Swap in the official badges when the listings exist. |
| QR code | Placeholder box marked "QR goes here once the store URL exists". |
| Download counts, ratings, reviews, press | None exist, so the site has no social-proof section. |
| Studio name, founder, address, contact email | Marked `[PLACEHOLDER]` on About, Contact, Privacy and Terms. |
| Final domain | `https://YOUR-DOMAIN.example` is used in canonical, OG, sitemap and schema. Change `SITE_URL` in `tools/build.py` and rebuild. |
| Legal text | Privacy and Terms are drafts and need legal review. |
| Min Android version, final app ID | The app ID is still `com.example.anime_arrow_maze` (see `STORE_CHECKLIST.md`). Not shown on the site. |
| Gameplay video | Trailer mp4 is included. It loads only on click (`preload="none"`). |
| Shape attribution | Silhouette sources are CC-BY (Twemoji, game-icons.net). Credits are listed on About, as `assets/shapes/CREDITS.txt` requires. |
