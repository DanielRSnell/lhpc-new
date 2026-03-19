# Performance Optimization Task List

Source: Lighthouse audit of amalgamy.ai (2026-03-19)

## Current Score (Post-Optimization)

**Performance: 98/100** (mobile, simulated throttling)

| Metric | Value | Score |
|---|---|---|
| First Contentful Paint | 1.1s | 99 |
| Largest Contentful Paint | 2.3s | 94 |
| Total Blocking Time | 10ms | 100 |
| Cumulative Layout Shift | 0 | 100 |
| Speed Index | 1.1s | 100 |

### Remaining opportunities (low priority, diminishing returns)
- Render blocking: 1 CSS file (`about.*.css`, 23 KiB, ~140ms) -- Astro bundles this; cannot easily defer without FOUC
- Unused JS: GTM (62 KiB unused) + React runtime (21 KiB unused) -- third-party/framework overhead
- Image delivery: logo.dev PNGs not in modern format (controlled by external service), features/3.webp and 4.webp could use slightly more compression
- Cache lifetimes: logo.dev images set 1d cache by their CDN (not controllable)

---

## Render Blocking (Est. 770ms savings)

- [x] **1. Self-host Geist font** - Remove CDN dependency on cdn.jsdelivr.net (780ms blocking). Download font files, create @font-face with `font-display: swap`, serve from /fonts/.
- [x] **2. Self-host Comfortaa font** - Remove Google Fonts render-blocking request (750ms). Download font files, create @font-face with `font-display: swap`.
- [x] **3. Defer GTM script** - Move Google Tag Manager to load after page content. Use `defer` or load via `requestIdleCallback` to avoid 101ms+ main thread blocking.
- [x] **4. Defer Lemlist tracking** - Same treatment as GTM. No reason for this to block rendering.

## Image Optimization (Est. 532 KiB savings)

- [x] **5. Resize hero.webp** - Currently 3000x1886 but displayed at 326x205. Resize to 700x440 (2x display). Saves ~174 KiB.
- [x] **6. Resize feature images** - All 7 feature images are 2-4x larger than displayed. Resize to 2x display dimensions. Combined savings ~120 KiB.
- [x] **7. Optimize noise.webp** - 257 KiB for a tiling texture at 83px repeat. Resize the source to 84x84 or replace with a CSS/SVG noise pattern. Est. savings ~207 KiB.
- [x] **8. Add width/height to logo SVG images** - Missing explicit dimensions causes CLS. SVG is 894x156; add proportional width/height attrs.
- [x] **9. Add width/height to partner logo images** - logo.dev images missing explicit dimensions. Add width/height to prevent layout shift.
- [x] **10. Add loading="lazy" to below-fold images** - Feature carousel and partner logos are below fold. Add `loading="lazy"` to defer loading.

## JavaScript (Est. 81 KiB savings)

- [ ] **11. Audit unused JS in React client bundle** - `client.QS7JfllO.js` has 21.5 KiB unused (React/Framer Motion runtime). Mostly unavoidable with current architecture. Consider `client:visible` for below-fold sections in future refactor.

## Network / Caching

- [x] **12. Add preconnect for img.logo.dev** - Partner logos load from logo.dev with no preconnect hint. Add `<link rel="preconnect">` to cut connection time.
- [x] **13. Configure cache headers for static assets** - logo.dev images have 1d cache, Cloudflare beacon has 1d. Configure Netlify `_headers` file for longer cache on own assets.

## Critical Path

- [x] **14. Break dependency chain for navbar JS** - Navbar JS chain is 4 levels deep (1,710ms). Evaluate `client:visible` or `client:idle` instead of `client:load` for non-critical interactive components.
