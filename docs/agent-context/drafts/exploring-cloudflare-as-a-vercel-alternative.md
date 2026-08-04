---
title: "Exploring Cloudflare as a Vercel alternative for Next.js"
description: "I wanted to know if my Next.js site could run on green energy — and whether Cloudflare could prove it better than Vercel. Here is what I found so far."
date: 2026-08-04
topic: Modern Web
tags: [cloudflare, vercel, hosting, nextjs, payload-cms, green-hosting]
---

# Exploring Cloudflare as a Vercel alternative for Next.js

This is not a migration story. I have not moved my site yet. This is an exploration — testing whether Cloudflare can do what Vercel does, and whether it can prove green energy in a way Vercel could not.

## Why I started looking

Vercel works well. Deployments are smooth. Developer experience is excellent. But I ran into a problem when I tried to verify that my site runs on green energy.

I checked with Carbonfooter and The Green Web Foundation. The results were not clear enough. And when I asked Vercel for proof about their energy sourcing, I could not get what I needed.

That made me wonder: if I host on a platform that is transparent about energy, could I get a clearer answer? And what would I have to give up in return?

## What I am testing

I set up a dev environment on Cloudflare using the same stack: Next.js with Payload CMS, using OpenNext to run on Cloudflare Workers. The database is Cloudflare D1. The domains already run on Cloudflare DNS.

The plan is to migrate the database, connect a domain, and then check:

- Does Cloudflare actually run on green energy according to Carbonfooter and The Green Web Foundation?
- How does performance compare?
- What breaks or changes in the workflow?

I do not know the answers yet. That is the point of exploring.

## What I have learned so far

Some things are clearly different from Vercel:

- **Deployments require more configuration.** Vercel's git integration is hard to beat. On Cloudflare, I had to set up the pipeline manually using OpenNext and wrangler.
- **Image optimization is not automatic.** Vercel handles this out of the box. On Cloudflare, I need to configure Cloudflare Images separately.
- **Preview URLs work differently.** Still figuring out how to get unique preview URLs per branch.

These are not dealbreakers. But they are real differences that cost time.

## What I still need to find out

The main question: will the green energy claim hold up when I run the actual site through Carbonfooter and The Green Web Foundation? If yes, that is a real advantage. If not, the search continues.

I also want to know how production performance compares, whether the workflow stays fast enough, and whether the trade-offs are worth it for future projects.

I will write a follow-up once I have real data.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | exploring-cloudflare-as-a-vercel-alternative |
| **Meta description** | Can Cloudflare prove green energy better than Vercel? I am testing it — and learning the differences along the way. |
| **Social title** | Exploring Cloudflare as a Vercel alternative for Next.js |
| **Social description** | I have not moved my site yet. I am exploring whether Cloudflare can prove green energy better than Vercel — and what the trade-offs are. |
| **Related articles** | A decade of building websites, Sustainable software is an engineering quality |
| **Related projects** | Moonsio, Carbonfooter |