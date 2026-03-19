# Performance Optimization Task List

Source: Lighthouse audit of amalgamy.ai (2026-03-19)

## Current Score (Post-Optimization)

**Performance: 98/100** (PSI mobile, confirmed by user 2026-03-19)

| Metric | Value | Score |
|---|---|---|
| First Contentful Paint | 1.0s | 99 |
| Largest Contentful Paint | ~2.3s | 94 |
| Total Blocking Time | 10ms | 100 |
| Cumulative Layout Shift | 0 | 100 |
| Speed Index | 2.3s | 95 |

### Remaining opportunities (low priority, diminishing returns)
- Render blocking: 1 CSS file (`about.*.css`, 23 KiB, ~310ms) -- Astro bundles this; cannot easily defer without FOUC
- Unused JS: GTM (62 KiB unused) + React runtime (21 KiB unused) -- third-party/framework overhead
- Image delivery: logo.dev PNGs not in modern format (controlled by external service)
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
- [x] **15. Inline hero as static Astro HTML** - Moved hero content from React component to Astro template so h1 (LCP element) renders without JS hydration. WorkflowDashboardMockup uses `client:visible`.
- [x] **16. Inline critical CSS** - Added critical CSS variables and hero styles inline in layout head to reduce render-blocking delay.
- [x] **17. Disable backdrop-blur on mobile** - Removed expensive `backdrop-blur-[85px]` on mobile, only apply at md+ breakpoints.

## Accessibility (89 -> targeting 100)

- [x] **A1. Theme toggle aria-label** - Button had no accessible name; added `aria-label="Toggle theme"`.
- [x] **A2. Green button contrast** - `bg-green-600` + `text-white` failed WCAG AA (3.0:1). Changed to `bg-green-700` (4.8:1).
- [x] **A3. Fix heading hierarchy** - h3 appeared before h1 (Radix Accordion header in navbar). Changed AccordionHeader to render as div. Changed workflow dashboard h1 to h2.

## SEO (85 -> targeting 100)

- [x] **S1. Descriptive link text** - "Learn More" is generic. Changed to "Explore the Product".
- [x] **S2. Add robots.txt** - No robots.txt existed. Created with Allow: / and sitemap reference.
