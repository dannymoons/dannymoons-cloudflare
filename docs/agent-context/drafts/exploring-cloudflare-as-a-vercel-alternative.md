---
title: "Exploring Cloudflare as a Vercel alternative for Next.js"
description: "I wanted to know if my Next.js site could run on verifiable green energy. Here is what I found testing Cloudflare — and what the Green Web Foundation and Carbonfooter say about it."
date: 2026-08-04
topic: Modern Web
tags: [cloudflare, vercel, hosting, nextjs, payload-cms, green-hosting]
status: published
---

# Exploring Cloudflare as a Vercel alternative for Next.js

This is not a migration story. I have not moved my site yet. This is an exploration — testing whether Cloudflare can do what Vercel does, and whether it can prove green energy in a way Vercel could not.

## Why I started looking at different hosting for my Next.js websites

Vercel works well. Deployments are smooth, developer experience is excellent. But I ran into a problem when I tried to verify that my site runs on green energy.

I checked my site with [The Green Web Foundation](https://www.thegreenwebfoundation.org) and [Carbonfooter](https://carbonfooter.nl). The results were not clear enough. And when I asked Vercel for transparent proof about their energy sourcing, I could not get what I needed.

That made me wonder: if I host on a platform that is transparent about its energy, could I get a clear green verification? And what would I have to give up to make that switch?

## What I tested

I set up a dev environment on Cloudflare with the same stack: Next.js with Payload CMS, running on Cloudflare Workers via OpenNext. The database is Cloudflare D1. My domains were already on Cloudflare DNS.

The plan was clear: migrate the database, connect a domain, and check three things:

- Does Cloudflare pass the Green Web Foundation check?
- Does Carbonfooter confirm green energy?
- How does the workflow and performance compare to Vercel?

## The green energy results

This was the main question, and the answer is positive.

After setting up the dev environment and running the checks, both [The Green Web Foundation](https://www.thegreenwebfoundation.org) and [Carbonfooter](https://carbonfooter.nl) confirmed that the site runs on verified green energy. Cloudflare is transparent about its energy sourcing, and that shows in the verification tools.

That alone makes the exploration worthwhile. If the goal is to host a site on provably green infrastructure, Cloudflare delivers where Vercel could not.

## What is different from Vercel

Not everything is better. The trade-offs are real.

**Deployments require more setup.** Vercel's git integration is smooth. On Cloudflare, I had to configure the pipeline manually using OpenNext and wrangler.

**Image optimization is not automatic.** Vercel handles this out of the box with their image CDN. On Cloudflare, I need to configure Cloudflare Images separately.

**Preview URLs work differently.** Still figuring out how to get unique preview URLs per branch.

These are solvable, but they cost time. Time is a real cost when you are used to Vercel's convenience.

## What broke during the first deployment attempt

The development environment worked before the first production deployment. The difficult part was not getting Next.js to render a page. It was getting the whole Payload server, admin panel, database adapter, and Cloudflare runtime to agree on what should be bundled.

### A dead `drizzle-kit` dependency stopped the build

The first build failed because OpenNext could not resolve a hashed `drizzle-kit` chunk. Payload's SQLite adapter contains a synchronous `require('drizzle-kit/api')` for schema tooling. That tooling is not needed while the Worker serves requests, but Next.js and Turbopack still saw it during the build. OpenNext then tried to bundle the hashed Turbopack reference and could not resolve it.

The fix was to externalise the importing Payload module, add `drizzle-kit` as a direct development dependency, and let the build resolve the plain package name instead. Externalising a neighbouring database package produced a different module-export error, which was a useful reminder that the package named in an error is not always the package that should be externalised.

### The Worker was only slightly too large

After the module-resolution issue was fixed, Cloudflare rejected the Worker because its compressed upload was just over the paid-plan limit:

```text
Total Upload: 48392.87 KiB / gzip: 10481.94 KiB
```

The raw bundle was around 46 MB, which was below the 64 MiB uncompressed limit. The relevant number was the gzip value: 10.24 MiB against a 10 MiB limit.

My first instinct was to minify the Worker. That barely helped. Minifying the 34 MB handler reduced its gzip size by only about 0.06 MiB. The reason is simple: gzip already removes much of the whitespace that minification targets.

The larger problem was an unused Open Graph image route. Payload's Next.js integration statically imports `next/og.js` for its built-in `/api/og` endpoint. That pulled `@vercel/og` into both Payload API routes, including `resvg.wasm`, `yoga.wasm`, and several fonts. These binary files do not compress well, so an apparently small feature added a disproportionate amount to the Worker upload.

I was not using dynamic Open Graph images. Rather than change Payload's generated route files, I added a Turbopack alias that maps `next/og.js` to a small local stub and set Payload's `defaultOGImageType` to `off`. The generated routes remain untouched, and the unused image generator no longer enters the Worker module graph.

The clean build then reported:

```text
Total Upload: 46002.87 KiB / gzip: 9680.85 KiB
```

That is 9.45 MiB gzip, below the 10 MiB limit. The `@vercel/og` wasm and font files were no longer present in the generated Worker bundle.

This was not primarily a Next.js 16 problem. Next 16 and Turbopack changed the shape of the generated server chunks, but the Open Graph dependency came from Payload's static import and would also be relevant on older Payload 3.x versions. Downgrading Payload would also mean downgrading the surrounding Payload packages and risking compatibility with the current generated routes and migrations.

The practical lesson was that Worker size is a dependency-graph problem before it is a minification problem. When a deployment is close to the limit, look for unused binary assets and server-side features that entered the bundle indirectly.

## What I still need to figure out

I want to see how production performance compares under real traffic, whether the deployment workflow stays fast enough for daily work, and whether the reduced convenience is worth the green energy verification.

So far, the answer looks like yes. But I will know more once the site is live.

This is a progress report, not a conclusion. I will write a follow-up once I have production data.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | exploring-cloudflare-as-vercel-alternative-for-nextjs |
| **Meta description** | I wanted to know if my Next.js site could run on verifiable green energy. Both the Green Web Foundation and Carbonfooter confirmed Cloudflare delivers. |
| **Social title** | Exploring Cloudflare as a Vercel alternative for Next.js |
| **Social description** | The green energy check passed. Now I am testing whether the trade-offs are worth it. |
| **Related articles** | A decade of building websites, Sustainable software is an engineering quality |
| **Related projects** | Moonsio, Carbonfooter |
