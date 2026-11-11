# Negesu Tolessa Likasa — Personal Portfolio

A premium, fast personal website for **Negesu Tolessa Likasa**, a Regional Sales
Manager in telecom sales & marketing (Safaricom Ethiopia). Built with Next.js,
TypeScript, Tailwind CSS, Framer Motion, and MongoDB.

## Highlights

- **Editorial design** — emerald + gold palette on warm ivory, serif display type.
- **Sections** — hero, about, expertise, career timeline, field-impact photo
  gallery (with lightbox + filters), and contact.
- **Contact form → MongoDB** — every message is stored in `contact_messages`
  with an optional Resend email notification.
- **Privacy-first analytics** — anonymous, hashed-IP visit tracking with a
  consent banner (`/privacy`).
- **SEO ready** — metadata, Open Graph, Twitter cards, and JSON-LD Person schema.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev                  # http://localhost:3000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Environment variables

See [`.env.example`](./.env.example). At minimum you need `MONGODB_URI` and
`MONGODB_DB` for the contact form and analytics.

## Deployment

See [DEPLOY.md](./DEPLOY.md) for a full step-by-step guide to deploying on
Vercel and connecting MongoDB Atlas (recommended project name:
`negesu-tolessa-portfolio`, custom domain: `negesutolessa.com`).

## Project structure

```
src/
  app/
    page.tsx            # home (composes sections)
    layout.tsx          # fonts, metadata, JSON-LD
    globals.css         # design tokens & component styles
    privacy/page.tsx    # privacy policy
    api/contact/route.ts# contact form → MongoDB (+ Resend)
    api/track/route.ts  # anonymous analytics → MongoDB
  components/           # Navbar, Hero, About, Expertise, Experience,
                        # Impact, GalleryModal, Contact, Footer, Analytics
  lib/
    data.ts             # all profile / content data
    mongodb.ts          # MongoDB connection helper
public/images/negesu/   # portrait + field/gallery photos
```
