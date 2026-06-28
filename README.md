# Al RAKY Website

Production-ready multi-page website for Al RAKY Food Industries.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to Arabic (`/ar`) by default.

## Tech Stack

- **Next.js 16** (App Router, Server Components)
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **next-intl** (Arabic/English, RTL)
- **next-themes** (light/dark mode)
- **Framer Motion** (animations)
- **React Hook Form + Zod** (forms)
- **Zustand** (state)
- **Lucide React** (icons)

## Sitemap

| Page | Route |
|------|-------|
| Home | `/[locale]` |
| About | `/[locale]/about` |
| Products | `/[locale]/products` |
| Product Detail | `/[locale]/products/[slug]` |
| Quality | `/[locale]/quality` |
| Testimonials | `/[locale]/testimonials` |
| Blog | `/[locale]/blog` |
| Blog Category | `/[locale]/blog/category/[slug]` |
| Blog Post | `/[locale]/blog/[slug]` |
| FAQ | `/[locale]/faq` |
| Contact | `/[locale]/contact` |

Locales: `ar` (default), `en`

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized pages
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                # Reusable UI primitives
│   ├── layout/            # Header, Footer, etc.
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   └── blog/              # Blog-specific components
├── lib/
│   ├── content/           # CMS-ready content layer
│   ├── seo/               # Metadata & JSON-LD
│   └── utils.ts
├── messages/              # i18n translations
├── i18n/                  # Routing & navigation
├── store/                 # Zustand stores
└── types/                 # TypeScript types
```

## CMS Integration

Content lives in `src/lib/content/` as typed data modules. To connect a headless CMS (Sanity, Strapi, Contentful):

1. Replace static imports with API calls in page server components
2. Keep the same TypeScript interfaces in `src/types/`
3. Map CMS responses to existing component props

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://alraky.com
```

## Deployment

Optimized for [Vercel](https://vercel.com):

```bash
npm run build
npm start
```

## Brand

- **Primary:** `#E31E24` (Red)
- **Secondary:** `#106B3E` (Green)
- **Font:** Cairo (Arabic + Latin)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
