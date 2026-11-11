# Deployment Guide — Negesu Tolessa Portfolio

This guide walks through deploying the site to **Vercel** and connecting it to
**MongoDB Atlas**. The contact form and analytics are backed by MongoDB, so both
services are used together.

---

## 1. Recommended naming (pick one, stay consistent)

| Thing | Recommended value |
| --- | --- |
| Vercel project name | `negesu-tolessa-portfolio` |
| Default Vercel URL | `https://negesu-tolessa-portfolio.vercel.app` |
| Custom domain (recommended) | `negesutolessa.com` (also grab `negesutolessa.et`) |
| MongoDB Atlas database | `negesu_portfolio` |
| Collections used | `contact_messages`, `analytics_events` |

> A custom domain looks far more professional on job applications than a
> `*.vercel.app` subdomain. `negesutolessa.com` is the strongest option for his
> name; `negesu-tolessa.com` is the fallback.

---

## 2. MongoDB Atlas

1. Create a free (M0) cluster at <https://www.mongodb.com/atlas>.
2. Create a database user (e.g. `negesu_app`) with a strong password.
3. Grant that user `readWrite` on the `negesu_portfolio` database.
4. Under **Network Access**, add `0.0.0.0/0` (Vercel uses dynamic IPs) or use
   Vercel's static egress IPs if on a paid plan.
5. Copy the connection string:
   ```
   mongodb+srv://negesu_app:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
   ```
6. Collections are created automatically on first use — no manual setup needed.

### Environment variables for local development (`.env.local`)

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
MONGODB_URI="mongodb+srv://negesu_app:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority"
MONGODB_DB="negesu_portfolio"
IP_HASH_SALT="a-long-random-string"
CONTACT_TO="nagasu.tolessa@gmail.com"
```

### Optional — email notifications on new messages

Create an account at <https://resend.com>, verify a sending domain, then add:

```bash
RESEND_API_KEY="re_..."
CONTACT_FROM="Negesu Portfolio <hello@negesutolessa.com>"
CONTACT_TO="nagasu.tolessa@gmail.com"
```

Messages are always stored in MongoDB, even without Resend.

---

## 3. Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
npm i -g vercel
vercel login
vercel link          # create/link project: negesu-tolessa-portfolio
vercel env add MONGODB_URI production
vercel env add MONGODB_DB production
vercel env add IP_HASH_SALT production
vercel env add NEXT_PUBLIC_SITE_URL production   # https://negesutolessa.com
vercel --prod
```

### Option B — Git + dashboard

1. Push this repo to GitHub (e.g. `negesu-tolessa-portfolio`).
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add the environment variables from section 2 (Production + Preview).
5. Click **Deploy**.

### Custom domain

In Vercel → Project → **Settings → Domains**, add `negesutolessa.com` and point
the DNS records Vercel shows you (usually an `A` record + `CNAME` for `www`).

After the domain is live, set `NEXT_PUBLIC_SITE_URL=https://negesutolessa.com`
and redeploy so SEO/Open Graph URLs are correct.

---

## 4. Verify after deploy

- Open the site and confirm the hero, gallery, and contact form load.
- Submit a test message through the form; confirm it appears in
  `negesu_portfolio.contact_messages`.
- Accept the cookie banner once and confirm `analytics_events` receives a
  `pageview` document.

### Viewing data locally

```bash
node scripts/view-analytics.mjs
```

This prints event totals, top pages, countries, and the latest contact messages.

---

## 5. Notes

- The `build` and `dev` scripts use `--webpack` for maximum stability. Remove
  the flag if you prefer Next.js 16's Turbopack on a standard machine.
- IP addresses are hashed (one-way) before storage — see `src/app/api/track/route.ts`.
- Never commit `.env.local`; it is already git-ignored. `.env.example` documents
  every variable.
