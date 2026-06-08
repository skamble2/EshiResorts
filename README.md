# Eshi Resorts — Marketing Website

Marketing site for **Eshi Resorts**, Bhimashankar's jungle luxury resort. Built in the
clean, premium style of limban.com, with content and photography from eshiresorts.com.

## Stack (all free-tier)

- **Next.js 16** (App Router) + **TypeScript** — statically rendered, deploys free on Vercel.
- **Tailwind CSS v4** — design system in `src/app/globals.css` (`@theme`).
- **Framer Motion** — subtle scroll reveals.
- Content lives in typed data files under `src/content/` (developer-managed, no CMS).
- Images in `public/images/` served via `next/image`.

## Pages

`/` Home · `/rooms` Rooms · `/about` About · `/contact` Contact

## Booking

"Reserve Your Stay" / "Book Now" buttons deep-link to the existing **Aiosell** booking
engine (`src/content/site.ts` → `bookingUrl`). No availability API is wired yet — that is
a planned later phase.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Configuration

- Site details (phone, WhatsApp, email, address, booking URL): `src/content/site.ts`
- Rooms & prices: `src/content/rooms.ts`
- Home sections (stats, experiences, testimonials): `src/content/home.ts`
- Contact form: set `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`). Without it, the
  form falls back to a pre-filled WhatsApp message.

## Deploy

Push to GitHub and import the repo into Vercel — it auto-detects Next.js. Then attach the
`eshiresorts.com` domain in the Vercel project settings.
