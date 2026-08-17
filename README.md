# Debbie Moon — Portfolio Site

Three-page marketing site for Debbie Moon, replacing the current Wix site at
`dmoonmarketing.com`.

Next.js (App Router) + TypeScript, built as a **fully static site**. No server
runtime — the build emits plain HTML/CSS/JS to `out/`.

## Commands

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` writes the deployable site to `out/`. To preview that output
exactly as it will be served:

```bash
npx serve out
```

## Editing copy

**All text lives in `src/content/` — no prose is hardcoded in components.**

| File | Contains |
|---|---|
| `site.ts` | Name, LinkedIn, email parts, nav, global CTA |
| `home.ts` | Hero, credibility strip, challenges, stats, disciplines, cards |
| `workWithMe.ts` | Engagement types, how it works, cost, fit criteria |
| `about.ts` | Story, selected work, feedback quotes, certifications |
| `campaign.ts` | The 12 Bad Molecules pieces |

Changing wording means editing one of these files. Nothing else needs to move.

## Notable implementation details

**Challenge list** (`src/components/ChallengeList.tsx`) — the old site revealed
each approach on hover only, which strands touch and keyboard users. Each row is
a real `<button aria-expanded>`: it opens on click/tap everywhere, and
*additionally* on hover when the device reports a fine pointer. On hover devices
a click commits rather than toggles, because the row is already open by the time
the click lands.

**Campaign carousel** (`src/components/CampaignCarousel.tsx`) — the track is a
CSS `scroll-snap` row, so all 12 slides stay reachable with JavaScript disabled.
The component only layers on arrows, dots, keyboard arrows, and active-slide
tracking via `IntersectionObserver`.

**Email obfuscation** (`src/components/ObfuscatedEmail.tsx`) — the address is
assembled on the client. The static HTML contains it *reversed*
(`moc.liamg@...`), flipped back visually with `direction: rtl`. A scraper
regexing the HTML extracts a nonsense address that bounces. LinkedIn is the
primary contact route site-wide and is a plain anchor needing no JavaScript.

**Static-export constraints** — `next/image`'s optimizer needs a server, so
`images.unoptimized` is set and images ship pre-sized as WebP. Only three
components are client components; everything else ships zero JavaScript.

## Verified

- Builds clean; `out/` contains `index.html`, `work-with-me/`, `about/`,
  `sitemap.xml`, `robots.txt`
- **0 axe violations** (WCAG 2.1 A + AA) on all three pages at desktop and mobile
- No console errors, no horizontal overflow at 1440 / 768 / 375
- Carousel: all 12 slides reachable by drag, arrows, dots, and arrow keys;
  still scrolls with JavaScript disabled
- No harvestable email address in any exported `.html`

## Deploying

`out/` is a plain static directory — Vercel, Netlify, and Cloudflare Pages all
work with zero configuration (build command `npm run build`, output `out`).

Pointing `dmoonmarketing.com` at it is a DNS change at the registrar, which also
means moving the domain off Wix.

## Before launch — needs Debbie's sign-off

1. **Campaign IP.** The Bad Molecules artwork and the noble.ai / simplifyx.com
   screenshots are owned by the companies they were made for. Every use credits
   her role and the owner, which is standard portfolio practice — but she said
   she was still deciding what's shareable publicly, so this needs an explicit
   yes before DNS switches.
2. **Claude for Marketing** currently renders with an "In progress" tag in
   `about.ts`. Delete the entry to hold it back until complete.
3. **Résumé** — `public/debbie-moon-resume.pdf` is the existing two-page file.
   Swap in the one-page version when it exists (same filename, no code change).
