---
title: "Manually deploying Next.js with Payload CMS to Cloudflare"
slug: manually-deploying-nextjs-payload-to-cloudflare
description: "I had a working Payload site on Cloudflare, but I could not have reproduced it from scratch. So I created a fresh project and set up every resource by hand — D1, R2, Workers, OpenNext. Here is what went wrong, what I fixed, and the quick guide that came out of it."
date: 2026-08-20
categories: [Modern Web]
tags: [nextjs, payload-cms, cloudflare-workers, cloudflare-d1, cloudflare-r2, opennext, deployment]
post-type: field-note
status: published
related-posts: [so-i-got-curious-about-payload-cms-with-nextjs, setting-up-responsive-images-cloudflare-next-image]
---

# Manually deploying Next.js with Payload CMS to Cloudflare

I had a working Payload CMS site on Cloudflare. This site was my first attempt at the platform, and it worked. But if someone had asked me to create a fresh one from scratch and explain every step, I could not have done it without guessing.

So I created a new project — a duplicate of my existing setup — and rebuilt it manually. Not with a one-click deploy template, but by creating each Cloudflare resource by hand, connecting them one at a time, and documenting what broke and why.

This article is the result of that process: the problems I ran into, the fixes, and the quick guide for deploying a fresh Payload site on Cloudflare manually.

## What I wanted to do

I had an existing Payload + Next.js site deployed to Cloudflare — this very site, dannymoons.nl. It used:

- **Cloudflare Workers** to run the Next.js application via OpenNext
- **D1** for the CMS database
- **R2** for media storage

The existing site was built iteratively, with resources created as-needed through the dashboard. I wanted a clean, reproducible setup: start from a fresh Payload project, create every Cloudflare resource from the command line, and end with a fully working deployment on a custom domain.

I also wanted to understand what each piece does. Not just "it works" — but what happens when it does not.

## Problem 1: The project does not run without a working database

This seems obvious in hindsight, but it is worth stating explicitly.

Payload CMS expects a database connection at startup. If D1 is not configured and bound to the Worker, the project will not start. Not "the admin panel breaks." The whole application refuses to load.

On my first attempt, I tried to build and deploy before D1 was properly connected. The Worker deployed successfully but returned errors on every request.

**Fix:** Create and bind D1 before the first deploy.

```
# Create the D1 database
pnpm wrangler d1 create $database-name

# Generate Cloudflare types so Payload knows the D1 binding
pnpm generate:types:cloudflare
```

The `wrangler.jsonc` needs the database ID returned by the create command:

```
"d1_databases": [
  {
    "binding": "D1",
    "database_name": "$database-name",
    "database_id": "<id-from-create>",
    "remote": false,
  },
],
```

The production environment needs the same binding with `remote: true`:

```
"env": {
  "production": {
    "d1_databases": [
      {
        "binding": "D1",
        "database_id": "<id-from-create>",
        "database_name": "$database-name",
        "remote": true,
      },
    ],
  },
}
```

The Payload config reads the D1 binding from the Cloudflare context and passes it to the `sqliteD1Adapter`:

```typescript
db: sqliteD1Adapter({
  binding: cloudflare.env.D1,
  push: false,
}),
```

Then run the migration to create the schema:

```
pnpm deploy:database
```

Which executes:

```
cross-env NODE_ENV=production PAYLOAD_SECRET=ignore payload migrate && wrangler d1 execute D1 --command 'PRAGMA optimize' --remote
```

Without this step, the database exists but has no tables. And without tables, Payload returns errors on every request.

## Problem 2: Build-time environment variables must be set before the build

Payload and Next.js use `NEXT_PUBLIC_*` environment variables — `NEXT_PUBLIC_SERVER_URL`, `NEXT_PUBLIC_MEDIA_CDN_URL`. These are inlined during the `next build` step. Setting them only as runtime Worker variables does nothing.

The `.env` file needs:

```
PAYLOAD_SECRET=<your-secret>
NEXT_PUBLIC_SERVER_URL=https://payload-starter.moonsio.dev
NEXT_PUBLIC_MEDIA_CDN_URL=https://payload-starter.moonsio.dev
CRON_SECRET=<your-cron-secret>
PREVIEW_SECRET=<your-preview-secret>
```

And the OpenNext build step needs access to these values. In CI or from the CLI, you use a `.env` file or export them before running:

```
pnpm build:cf
```

Which runs:

```
cross-env CLOUDFLARE_ENV=production CLOUDFLARE_REMOTE=true opennextjs-cloudflare build --env=production
```

If a `NEXT_PUBLIC_*` variable is missing at build time, the inlined value will be undefined, and the deployed application will try to load from `undefined/api/media/file/...`.

## Problem 3: The block-based image component caused an internal server error

The first Payload site I deployed to Cloudflare did not use blocks for page layouts. The new project did. Pages were composed from blocks — `HeroCoverBlock`, `ImageMedia`, `ContentBlock` — and some of those blocks rendered images through `next/image` with a custom Cloudflare loader.

The build passed. TypeScript passed. The deployment succeeded. But the page returned a 500 error.

**Cause:** `HeroCoverBlock` was a React Server Component that passed the custom image loader function into the client-side `next/image` component. Functions cannot cross the React server-client component boundary. The error only appeared at runtime because the RSC serialization check happens when the page is actually requested, not during the build.

**Fix:** Route the hero image through an existing client-compatible image component. The block itself stayed a server component — only the image rendering needed the client boundary.

**Lesson:** If your project uses Payload blocks with images, verify that the image component handles the server-client boundary correctly. A green build does not guarantee a working page when image components cross the RSC boundary.

## The issues we encountered

Here is every issue that blocked a working deployment, in short:

1. **No database connection** — The project does not start without D1 configured and bound. Create the database, add the binding, run migrations before the first deploy.
2. **Missing build-time environment variables** — `NEXT_PUBLIC_*` variables are inlined during `next build`. Runtime Worker variables are not enough.
3. **Block-based image component crossing the RSC boundary** — Payload blocks that render `next/image` with a custom loader need a client-compatible component. The build passes, the page returns 500.

## Quick guide: Deploying a fresh Payload site to Cloudflare manually

Here is the step-by-step process that came out of this exercise. Each step depends on the previous one. Do not skip ahead.

### 1. Start with a working local project

Before creating any Cloudflare resource, make sure the local Payload project runs:

- The admin panel loads at `http://localhost:3000/admin`
- The media collection accepts uploads
- The frontend renders pages
- Payload generates types: `pnpm generate:types`

If the project does not work locally, it will not work on Cloudflare.

### 2. Create the D1 database

```
pnpm wrangler d1 create <database-name>
```

Copy the returned database ID into `wrangler.jsonc` under both the default binding and the `env.production` binding. The production environment needs `remote: true`.

### 3. Generate Cloudflare types

```
pnpm generate:types:cloudflare
```

This creates (or updates) `cloudflare-env.d.ts` so TypeScript knows the binding shapes.

### 4. Create the R2 bucket

```
pnpm wrangler r2 bucket create <bucket-name>
```

Add the binding to `wrangler.jsonc`:

```
"r2_buckets": [
  {
    "binding": "R2",
    "bucket_name": "<bucket-name>",
  },
],
```

Configure Payload's storage adapter in `payload.config.ts`:

```typescript
r2Storage({
  bucket: cloudflare.env.R2,
  collections: { media: true },
}),
```

### 5. Set environment variables

Create a `.env` file with at minimum:

```
PAYLOAD_SECRET=<your-secret>
NEXT_PUBLIC_SERVER_URL=https://<your-domain>
NEXT_PUBLIC_MEDIA_CDN_URL=https://<your-domain>
```

Without these, the build will inline `undefined` for public URLs.

### 6. Run migrations

```
pnpm deploy:database
```

This runs `payload migrate` against the remote D1 database and optimizes the database afterwards. The project will not serve requests until the schema exists.

### 7. Build and deploy the application

```
pnpm deploy:app
```

Which runs:

```
opennextjs-cloudflare build --env=production
opennextjs-cloudflare deploy --env=production
```

OpenNext produces a Worker bundle from the Next.js build. Wrangler deploys it to Cloudflare Workers with the bindings from `wrangler.jsonc`.

### 8. Attach a custom domain

In the Cloudflare dashboard, go to your Worker and add a custom domain. This is needed for Cloudflare Image Transformations to work properly — a `workers.dev` subdomain is not a proxied zone.

### 9. Enable Image Transformations

In the Cloudflare dashboard under the zone, enable Image Transformations. Without this, the `/cdn-cgi/image/` path will not transform images.

### 10. Verify the deployment

Use the deployment checklist:

- [ ] Local Payload site works before deployment
- [ ] D1 database exists and is bound to the Worker
- [ ] R2 bucket exists and is bound to the Worker
- [ ] Payload storage adapter is configured for R2
- [ ] `NEXT_PUBLIC_SERVER_URL` and `NEXT_PUBLIC_MEDIA_CDN_URL` are set at build time
- [ ] Migrations have been applied
- [ ] OpenNext build succeeds
- [ ] Worker deploys successfully
- [ ] Custom domain resolves to the Worker
- [ ] Image Transformations are enabled on the zone
- [ ] Original media URL returns 200
- [ ] Production page returns 200

## What is different from the one-click deploy

Cloudflare offers a one-click deploy template for Payload. It works. Use it if you want a quick demo.

What it does not teach you:

- **Build-time vs. runtime environment variables.** The template sets them for you. When you need to change or add one, you need to know where it lives.
- **Custom domains are infrastructure, not branding.** A `workers.dev` URL cannot serve Cloudflare Image Transformations.
- **What each binding does.** When the Worker fails because R2 is not bound, the template error message shows a binding name you have never seen.
- **How migrations work on SQLite.** Payload on MongoDB auto-adapts schemas. On D1 (SQLite), you run migrations explicitly. Add a collection? Run a migration.

A one-click deploy gets you running fast. A manual deploy gets you understanding. If you plan to operate the site beyond a demo, do the manual path at least once.

## What I would do differently

1. **Create D1 and run migrations before the first deploy.** The project will not work without a schema.
2. **Set build-time environment variables before the first build.** Fixing them later requires a rebuild and redeploy.
3. **Generate Cloudflare types right after creating bindings.** It keeps TypeScript accurate and prevents type errors that look like runtime failures.

A manual deployment is more work at the beginning, but it makes the system easier to understand. Payload can own the CMS. D1 can own the data. R2 can own the originals. And the Worker runs the application without pretending to be everything at once.
