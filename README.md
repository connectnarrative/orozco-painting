# Orozco Painting — Vercel package

Production-ready Next.js source for the Orozco Painting website.

## Deploy to Vercel

1. Extract this ZIP and push the folder to GitHub, or import it with the Vercel CLI.
2. In Vercel, import the repository. The Framework Preset should detect **Next.js**.
3. Add the environment variables below.
4. Deploy, then replace the temporary review URL in `lib/business.ts` with the final domain.

```bash
pnpm install
pnpm build
vercel
```

## Required configuration

Copy `.env.example` to `.env.local` for local development.

- `QUOTE_WEBHOOK_URL`: HTTPS endpoint that receives quote form submissions as multipart form data, including uploaded photos.
- `QUOTE_WEBHOOK_SECRET`: optional bearer token sent to the webhook.
- `NEXT_PUBLIC_SITE_URL`: reserved for the final public URL.

The site intentionally does not invent a phone number, email address, street address, opening hours, reviews, prices, or project details. Add confirmed company details in `lib/business.ts` before launch.

## Quality checks

```bash
pnpm typecheck
pnpm build
```

Included: the supplied logo and real front-entry before/after photography, service pages, project pages, SEO metadata, sitemap, robots rules, JSON-LD, 404 page, responsive paint interactions, keyboard and reduced-motion support, and the multi-step quote flow.
