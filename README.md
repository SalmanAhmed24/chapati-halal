# Chapati Halal — website

Marketing site for **Chapati Halal · Cocina India Pakistan**, built with Next.js 16 (App Router), GSAP and Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

Requires Node 20+. Deploys to Vercel with zero config.

## Pages

| Route        | What's on it |
|--------------|--------------|
| `/`          | Hero, spice marquee, promise, pinned horizontal "Popular dishes", story + counters, menu-category list with cursor-following photos, catering banner, full-bleed ambience reveal, testimonials, CTA |
| `/about`     | Story, mission & values, ingredients, chef's philosophy |
| `/menu`      | Sticky category bar with scroll-spy, veg-only filter, dish cards |
| `/catering`  | Catering hero, occasions, tabbed catering menu, packages, how-it-works, quote request form (`/api/catering`) |
| `/gallery`   | Filterable masonry grid with a shared-element lightbox (keyboard: ← → Esc) |
| `/locations` | Medellín location (address, hours, phone, directions) beside a message form |
| `/contact`   | Hero, Google map beside the contact form (`/api/contact`, emails the inbox), opening hours with today highlighted |

## Motion system

- **GSAP + ScrollTrigger + SplitText**: masked line reveals, scrubbed parallax, pinned horizontal scroll, velocity-reactive marquee, scroll-lit text, full-bleed image expansion and the footer wordmark (`components/motion.tsx`, `components/home/*`).
- **Framer Motion**: page-transition curtain (`app/template.tsx`), magnetic buttons, mobile menu, nav underline (`layoutId`), testimonial carousel (drag/swipe), gallery filtering and lightbox, menu filter, custom cursor.
- **Lenis** smooth scrolling, synced to GSAP's ticker.
- Scroll animations are set up when the browser is idle (`useScrollAnimation` in `lib/gsap.ts`), so they never block first paint. Framer Motion features are code-split with `LazyMotion`.
- Hero animations are pure CSS, so they start on first paint.
- `prefers-reduced-motion` turns off smooth scroll, GSAP and Framer animations.

## Content and images — please read

All copy, prices, locations, testimonials and gallery entries are in **`lib/data.ts`**.

- **Photos are placeholders.** They are cropped from the design mockups, so they are low-resolution. Replace each file in `public/images/` with a real photo **of the same name**. Use landscape images at least 1600px wide, about 4:3. Next.js resizes them and serves AVIF/WebP automatically.
- **Prices** follow the mockups (`$48.000`, Colombian pesos).
- **Hours**: Mon–Sat 12:00 PM – 8:30 PM. Sunday is shown as closed; change `weeklyHours` and `locations[0].hours` if that's wrong.
- **Testimonials** reuse the mockup quotes plus one sample. Use real reviews before you launch.
- **Order Online** links to `/menu`. Point `site.orderUrl` at your ordering platform.
- **Email (contact form + catering quotes)** is sent through Gmail by `lib/mailer.ts` to the email in `lib/data.ts`. In Vercel → Settings → Environment Variables add:
  - `GMAIL_USER` = chapatihalal273@gmail.com
  - `GMAIL_APP_PASSWORD` = a Google App password (turn on 2-Step Verification, then Google Account → Security → App passwords)
  Then redeploy. Without these the forms show an error instead of pretending to send. See `.env.example`.
- Update `site.url` in `lib/data.ts` to your real domain. It is used for the canonical URL, the sitemap and Open Graph.

## Lighthouse (production build, local)

| Page | Mobile perf | Desktop perf | A11y | Best practices | SEO |
|------|-------------|--------------|------|----------------|-----|
| All six pages | 87–99 | 100 | 100 | 100 | 100 |

CLS is about 0 on every page. Fonts are self-hosted and subset (Fraunces + Manrope, about 90 KB total).
