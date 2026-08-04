---
title: "Why I moved my Next.js site from Vercel to Cloudflare"
description: "Vercel wanted proof of green energy. I wanted more control. Here is what I learned from exploring self-hosting a Next.js + Payload CMS site on Cloudflare."
date: 2026-08-04
topic: Modern Web
tags: [cloudflare, vercel, hosting, nextjs, payload-cms, self-hosting]
---

# Why I moved my Next.js site from Vercel to Cloudflare

For a while, Vercel was the obvious choice. Deployments are smooth. Developer experience is excellent.

But I started asking questions about sustainability. Where does the energy come from? Can I prove it? Vercel could not answer those in a way that worked for me. So I started exploring.

## The trigger

Vercel required proof that my site runs on green energy, with evidence that the host actively thinks about sustainability. They could not provide what I needed.

That pushed me toward self-hosting. Not building my own server room — but running my site on infrastructure I chose and controlled more directly.

## Why Cloudflare

My domains already run on Cloudflare — DNS, CDN, security in one place. They are transparent about energy sourcing. They have a clear commitment to renewable energy. And OpenNext makes it possible to run Next.js on Cloudflare Workers without a full rewrite.

The stack is Next.js with Payload CMS, using Cloudflare D1 as the database. The build and deploy pipeline uses OpenNext Cloudflare with wrangler for deployments.

## Where I am now

The dev environment is running on Cloudflare. I am about to migrate the database from local to the remote D1 instance, connect a domain, and start testing observability, performance, and stability.

What still needs work:
- **Image optimization.** Vercel handled this automatically. On Cloudflare I need to configure Cloudflare Images separately.
- **Preview URLs.** Unique preview URLs per branch do not work the same way yet.
- **Deploy pipeline.** Vercel's git integration is hard to beat. I had to configure more of the deployment myself.

These are solvable. But they take time.

## What is better already

Even in this early stage, I can see advantages: the site runs on the same network as the domain, green energy is documented rather than claimed, and anti-bot integration is simpler when DNS and hosting share a provider.

## What I still need to figure out

This is a progress report, not a conclusion. I still need to see how production deployments hold up, how performance compares under real traffic, and whether the workflow stays fast enough for daily work.

I will write a follow-up once I have answers.

## What I learned so far

Hosting is not a checkbox. It is a trade-off between convenience, control, sustainability, and workflow. Moving from Vercel to Cloudflare is not objectively better. But exploring the trade-off taught me more about my own infrastructure than years of clicking "deploy" ever did.

If you are considering the same move: be ready for a slower setup, more manual configuration, and a smaller ecosystem to fall back on. But if control and green energy transparency matter to you, it is worth the effort.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | why-i-moved-my-nextjs-site-from-vercel-to-cloudflare |
| **Meta description** | Vercel wanted proof of green energy. I wanted more control. Here is what I learned from self-hosting a Next.js site on Cloudflare. |
| **Social title** | Why I moved my Next.js site from Vercel to Cloudflare |
| **Social description** | The migration is not done yet — but I already learned more about my infrastructure than years on Vercel taught me. |
| **Related articles** | A decade of building websites, Sustainable software is an engineering quality |
| **Related projects** | Moonsio |