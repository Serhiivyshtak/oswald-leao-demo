# Oswald Leao — Photographer Portfolio Demo

A **frontend-only** demo website for **Oswald Leao**, a fictional freelance photographer based in Singapore. The project is a personal portfolio piece: it showcases modern React development, motion design, responsive layout, and a structured component architecture—without a backend or CMS.

All copy, imagery, and the brand are fictional. The site is meant to be explored, studied, and adapted—not deployed as a real business.

---

## What’s inside

| Route | Page | Highlights |
|-------|------|------------|
| `/` | Home | Full-screen background, grid of interactive cards (bio preview, services, awards, portfolio teaser, testimonials) |
| `/about` | About | Hero, facts, education & experience timelines, contact form |
| `/portfolio` | Portfolio | Masonry-style image grid, lightbox viewer, “show more” loading |

Shared across inner pages: loading intro, header navigation, contact section, footer with social links.

---

## Tech stack

| Area | Choice |
|------|--------|
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build | [Vite 8](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` design tokens, custom breakpoints) |
| Animation | [GSAP 3](https://gsap.com/) + ScrollTrigger |
| Routing | [React Router 7](https://reactrouter.com/) |
| Content | [i18next](https://www.i18next.com/) — strings and data in `src/assets/translations/en.json` |
| Icons | [Iconify](https://iconify.design/) (`@iconify/react`) |
| Resilience | [react-error-boundary](https://github.com/bvaughn/react-error-boundary) |
| Quality | ESLint 9, Prettier |

Fonts (Google Fonts): Playfair Display SC, Julius Sans One, Kanit.

---

## Concepts demonstrated

- **Layered architecture** — `views` (pages) compose `sections`; `sections` and `components` handle UI; `types` model props and JSON shapes; `hooks` and `services` hold reusable logic.
- **Content-driven UI** — Cards, portfolio items, testimonials, timelines, and form labels come from translation JSON, so copy and structure can change without touching JSX.
- **Design tokens** — Colors, spacing, durations, and typography scales live in `src/assets/css/index.css` under Tailwind’s `@theme`, with breakpoint-specific text sizes (1270 / 1440 / 1920).
- **GSAP motion** — Hover-driven card reveals, intro timeline, scroll-linked section entrances, animated form errors, and portfolio lightbox transitions; durations read from CSS variables via a custom `useCssProperty` hook.
- **Responsive grids** — CSS Grid with portrait/landscape rules; portfolio layout picks random unique images and respects column spans for landscape vs portrait shots (`useRandom` hook).
- **Performance-minded assets** — Portfolio uses compressed thumbnails in the grid and high-quality sources in the viewer (`public/`).
- **Client-side validation** — Contact form validates name, email, and message on the client only (no API; suitable for a static demo).
- **Mobile behavior** — `useDomInfo` tracks viewport size and user agent; card hover states stay “open” on mobile.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node)

### Install and run

```bash
git clone <your-repo-url>
cd oswald-leao-demo
npm install
npm run dev
```

Open **http://localhost:3000** (configured in `vite.config.ts`).

### Other scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Type-check and production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Using this repo as a template

1. **Clone and rename** — Update `package.json` `name`, page title in `index.html`, and branding in `en.json` (search for “Oswald Leao”).
2. **Replace assets** — Put your images in `public/`. Keep filenames in sync with `en.json` (`portfolioImages`, background URLs in sections) or update the JSON paths.
3. **Edit content** — Most text and structured data live in `src/assets/translations/en.json`. Add locales by extending `src/services/i18n.service.ts` and new JSON files.
4. **Adjust layout** — Card grid positions are Tailwind classes in `mainView.mainSection.cards` inside `en.json`. Section styling is in `sections/` and `components/`.
5. **Wire a real contact form** — Replace the demo validation in `Contact.section.tsx` with your API, Formspree, Netlify Forms, etc.
6. **Deploy** — Build with `npm run build` and host `dist/` on any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Configure SPA fallback to `index.html` for client-side routes.

### Adding portfolio images

In `en.json`, each entry under `globalScope.portfolioImages` needs:

- `srcCompressed` — grid thumbnail (e.g. `my-shot.compressed.jpg`)
- `srcHighQuality` — lightbox image (e.g. `my-shot.jpg`)
- `orientation` — `"portrait"` or `"landscape"` (affects grid placement)

Place both files in `public/`.

---

## Notes

- **No backend** — Forms do not submit anywhere; social links point to `/` as placeholders.
- **Large `public/` folder** — Image assets are required for the site to look correct; clone the repo with Git LFS or ensure `public/` is included if you split assets later.
- **Fictional subject** — Oswald Leao, testimonials, and awards are demo content only.

---

## License

This is an **open source** project released under the [MIT License](LICENSE). You are free to use, modify, and distribute the code with attribution. If you fork it for your own portfolio, replace the fictional Oswald Leao content and imagery before presenting it as your work.
