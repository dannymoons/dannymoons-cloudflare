---
title: "Manually deploying Next.js with Payload CMS to Cloudflare"
slug: manually-deploying-nextjs-payload-to-cloudflare
description: "Setting up Payload CMS on Cloudflare Workers, D1, and R2 manually — the infrastructure decisions, what went wrong, and what I learned from not using the one-click deploy button."
date: 2026-08-19
categories: [Modern Web]
tags: [nextjs, payload-cms, cloudflare-workers, cloudflare-d1, cloudflare-r2, opennext, deployment]
post-type: field-note
status: draft
---

# Manually deploying Next.js with Payload CMS to Cloudflare

I had a fresh Payload CMS site running locally. Media was stored in R2. The next requirement was responsive, optimized image delivery — and my first instinct was to build a custom media route with caching and transformations.

That instinct was wrong. But understanding *why* it was wrong took me through the entire Cloudflare deployment stack manually, instead of pressing a one-click button and hoping for the best.

This article is about that manual path: setting up D1, R2, Workers, OpenNext, and a custom domain by hand. The problems I hit, the things that differed from the quick-start tutorials, and what I would do differently.

## Why deploy manually?

Cloudflare offers a one-click deploy template for Payload. It works. But I wanted to understand what each piece does before I committed to the platform.

A manual deployment forces you to know:

- What D1 does (it stores your CMS data)
- What R2 does (it stores your media files)
- What the Worker does (it runs your Next.js application)
- Where environment variables need to exist (build time vs. runtime)
- What OpenNext does (it adapts Next.js for Workers)

That understanding matters when something breaks — and something *will* break. A one-click deploy hides the plumbing until you need to change it.

## Start with a working project

Before you add any Cloudflare resource, make sure the local project runs. Not "mostly runs." Runs.

Verify:

- The Payload admin panel loads
- The media collection accepts uploads
- The frontend renders pages
- Payload generates types correctly

If the unmodified application does not work locally, it will not work on Cloudflare either. You will just be debugging two environments at once.

## Create the Cloudflare resources manually

Skip the dashboard tutorial. Here is what you actually need:

**A D1 database** — call it something like `payload-production`. This stores all Payload's structured data: pages, posts, media metadata, settings, users.

**An R2 bucket** — call it `payload-media`. This stores the binary files that Payload's media collection references.

**A Worker** — this runs the OpenNext bundle that contains your Next.js application and Payload CMS.

**A custom domain** — attach it to the Worker. This is not optional (more on that in the images article).

Exact commands change as Wrangler evolves. Verify against the current [Wrangler documentation](https://developers.cloudflare.com/workers/wrangler/) before running. But the principle stays the same: create each resource separately, bind them explicitly, and test each connection before moving on.

## Configure D1

D1 stores Payload's schema and content. Payload migrations create and update that schema. Local and production D1 databases should be distinct — do not run production migrations against your local database.

A note on deployment commands: I originally had a combined command that ran migrations and deployed the application in one step. For a media-only change (no schema change needed), that was overkill. The safer approach became:

```
CLOUDFLARE_ENV=production pnpm deploy:app
```

This deployed the application without running unnecessary production migrations. Keep migration and deployment as separate concerns.

## Configure R2

Payload stores media *metadata* in D1 — the filename, alt text, dimensions, and so on. The *binary file* lives in R2.

Payload exposes a media URL like:

```
/api/media/file/image-1
```

Upload access stays authenticated by default. Public read access is appropriate only for media intended for the public website. Do not set the bucket to public without thinking about what you are exposing.

## Deploy with OpenNext

[OpenNext](https://opennext.js.org) is the adapter that makes Next.js run inside a Cloudflare Worker. Standard Next.js does not target Workers natively — OpenNext produces a Worker bundle that Wrangler can deploy.

This is where I hit the first real problem.

### Problem 1: Worker APIs are not available in local Next.js

The custom media route I initially built used the Worker Cache API:

```typescript
await caches.open('media-cache')
```

This works inside a deployed Worker. It does not work in local Next.js development, because `caches` is not a standard Web API available in Node.js.

My first fix was to detect whether `caches` exists and fall back to the bare R2 object. That is a code smell — you are writing conditional paths for two fundamentally different runtimes.

The final fix was simpler: remove the custom route entirely. The application now uses Payload's existing media URL:

```
/api/media/file/{filename}
```

**Lesson:** Do not introduce Worker-specific caching code when the platform already provides a CDN and your application does not yet need custom caching behaviour. The smallest correct architecture is better than a custom media pipeline you have to maintain.

### Problem 2: Overcomplicating before the basic path was proven

My first implementation combined:

- R2 reads
- Cache API storage
- Stream cloning
- Fallback responses
- Local runtime checks

That is several concerns in one route, written before the basic media path had been tested in production.

The fix was to delete the route and separate responsibilities:

- Payload provides the original media URL
- R2 stores the original
- Cloudflare transforms at delivery time
- `next/image` generates responsive candidates

**Lesson:** The first version should use the simplest correct path. Add custom infrastructure only when you can point to a specific failing requirement.

## What is different from the one-click deploy

The one-click template deploys to `*.workers.dev` and gives you a working Payload instance. What it does not teach you:

- **Build-time vs. runtime environment variables.** `NEXT_PUBLIC_*` variables are inlined during the Next.js build. Setting them only as runtime Worker variables does nothing — they must be available at build time, and Wrangler needs explicit configuration to forward them.
- **Custom domains are infrastructure, not branding.** A `workers.dev` URL cannot reliably serve Cloudflare Image Transformations. You need a proxied zone.
- **What each binding does.** The template creates bindings silently. When something breaks, you need to know which binding connects to what.
- **How migrations work on SQLite.** Payload on MongoDB auto-adapts schemas. On D1 (SQLite), you must run migrations explicitly. If you add a collection and get a 500, check migrations first.

A one-click deploy gets you running fast. A manual deploy gets you understanding. Both have their place. But if you plan to operate the site beyond a demo, do the manual path at least once.

## Deployment checklist

Before you call it done:

- [ ] Local Payload site works
- [ ] D1 database exists and is bound to the Worker
- [ ] R2 bucket exists and is bound to the Worker
- [ ] Payload storage adapter is configured for R2
- [ ] Wrangler bindings are correct
- [ ] Migrations have been applied
- [ ] `NEXT_PUBLIC_SERVER_URL` and `NEXT_PUBLIC_MEDIA_CDN_URL` are set at build time
- [ ] Custom domain is attached to the Worker
- [ ] Image Transformations are enabled on the zone
- [ ] Original media URL returns 200
- [ ] Production page returns 200

## What I would do differently

On a second deployment, I would:

1. **Skip the custom media route from day one.** Payload's built-in media URL works. Start there.
2. **Test each Cloudflare resource independently.** Create D1, test the connection. Create R2, upload a file, read it back. Attach the domain, confirm it resolves. Then wire them together.
3. **Keep migration and deployment in separate commands.** Combined commands hide failures.
4. **Set build-time environment variables before the first build.** Fixing them later requires a rebuild and redeploy.

A manual deployment is more work at the beginning, but it makes the system easier to understand. Payload can own the CMS. D1 can own the data. R2 can own the originals. And the Worker can run the application without pretending to be everything at once.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | manually-deploying-nextjs-payload-to-cloudflare |
| **Meta description** | Setting up Payload CMS on Cloudflare Workers, D1, and R2 manually — the infrastructure decisions, what went wrong, and what I learned from not using the one-click deploy button. |
| **Social title** | Manually deploying Next.js with Payload CMS to Cloudflare |
| **Social description** | A one-click deploy gets you running fast. A manual deploy gets you understanding. Here is what I learned from setting up Payload CMS on Cloudflare without the template. |
| **Related articles** | [So I got curious about Payload CMS with Next.js](/posts/so-i-got-curious-about-payload-cms-with-nextjs), [Setting up responsive images with Cloudflare and next/image](/posts/setting-up-responsive-images-cloudflare-next-image) |
| **Related projects** | [DannyMoons.nl](https://dannymoons.nl) |