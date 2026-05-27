# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start dev server (localhost:3000)
yarn build      # Production build
yarn start      # Start production server
```

No test suite configured.

## Environment

Copy `.env.example` to `.env.local` and set:
- `BREVO_API_KEY` — SMTP password for Brevo relay used by the contact form API

## Architecture

**Framework:** Next.js 13 with the **Pages Router** (no App Router). Plain JavaScript — no TypeScript.

**Routing:** File-based under `pages/`. Current routes:
- `/` — landing page (home)
- `/servicios`, `/productos`, `/hosting` — service/product pages
- `/empresa` — company page (founders, timeline, values)
- `/legal`, `/terminos`, `/privacidad` — legal pages

**API:** `pages/api/sendEmail.js` — POST endpoint that receives `{ name, email, subject, message }` and sends a formatted HTML email via Brevo SMTP relay to `fluxoweb.py@gmail.com`.

**Styling:** Tailwind CSS v3. Dark mode uses `next-themes` with `attribute="class"` and `defaultTheme="system"`. The dark background color is `#1D1D1D` (not the Tailwind default). All components must support both light and dark variants.

**Component structure (`components/`):**
- `navbar.js` — sticky header with navigation links and WhatsApp CTA; uses Headless UI `Disclosure` for mobile menu
- `popupWidget.js` — floating contact form button (bottom-right), submits to `/api/sendEmail`
- `data.js` — static content for the `Benefits` sections (bullets, icons, images)
- `container.js` — simple max-width wrapper, use it for consistent page padding
- `DarkSwitch.js` — theme toggle button

**Icons:** Use `lucide-react` for new icons. `@heroicons/react/24/solid` is also present but prefer Lucide for consistency with recent changes.

**Deployment:** Vercel. `next.config.js` sets `output: "standalone"`.

## Conventions

- Every page wraps content in `<Navbar />` + `<Footer />` + `<PopupWidget />`.
- Static page data (arrays of objects for sections, team members, etc.) lives inline in the page file or in `components/data.js` — no external CMS.
- WhatsApp contact link: `https://wa.link/18ywdk` — used in Navbar and CTAs.
