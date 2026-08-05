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
