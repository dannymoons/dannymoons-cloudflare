---
title: "Why I moved my Next.js site from Vercel to Cloudflare"
description: "Vercel wanted proof of green energy. I wanted more control. Here is what I learned from exploring self-hosting a Next.js + Payload CMS site on Cloudflare."
date: 2026-08-04
topic: Modern Web
tags: [cloudflare, vercel, hosting, nextjs, payload-cms, self-hosting]
---

# Why I moved my Next.js site from Vercel to Cloudflare

For a while, Vercel was the obvious choice for my Next.js sites. It works well, deployments are smooth, and the developer experience is excellent. I was happy there.

Then I started asking questions about sustainability. Where does the energy come from? Can I prove it? And how much control do I actually have over the infrastructure my site runs on?

Vercel could not answer those questions in a way that worked for me. So I started exploring alternatives.

## The trigger

The direct reason was a requirement to demonstrate that my website runs on green energy, with proof that the hosting provider actively thinks about sustainability. Vercel could not provide that in a way I was comfortable with.

That got me thinking about self-hosting. Not building my own server room — but running my Next.js site on infrastructure I chose, configured, and controlled more directly.

I knew it would be harder than clicking "deploy" on Vercel. But I wanted to learn what that effort would teach me.

## Why Cloudflare

I chose Cloudflare for a few reasons:

- My domains already run there. DNS, CDN, security — all in one place.
- They are transparent about their energy use and have a clear commitment to renewable energy.
- The anti-bot protection integrates naturally when your site runs on the same network as your DNS.
- OpenNext made it possible to run Next.js on Cloudflare Workers without a full rewrite.

It was not the easiest path. But it felt like the right one.

## What I have done so far

[Danny: describe briefly where you are in the migration. The dev site is running on Cloudflare, what stack/configuration did you use?]

The database had to be migrated from my local environment to an online dev database on Cloudflare. That was not as smooth as I hoped — the setup is different from Vercel, and there is no automatic image optimization out of the box. Preview URLs also do not work the same way yet.

I am still working through these issues. The dev site is running, but production is not live yet.

## What is better

Even in this early stage, I can see advantages:

- The site runs on the same network as the domain — DNS → CDN → compute, all inside Cloudflare.
- Green energy is not a claim I have to trust. Cloudflare documents its energy sourcing transparently.
- Anti-bot protection is simpler when your DNS and your hosting are the same provider.

[Danny: add anything else that surprised you positively]

## What is harder

I want to be honest about the trade-offs, because too many migration stories leave them out.

- **Deployments are more complex.** Vercel's git-integrated deployments are hard to beat. On Cloudflare, I had to configure the deployment pipeline myself.
- **Image optimization is not automatic.** Vercel handles this with their own image CDN. On Cloudflare, I need to set it up separately.
- **Preview URLs work differently.** I am still figuring out how to get unique preview URLs for every branch and commit.
- **The ecosystem is smaller.** Fewer tutorials, fewer community examples, more figuring things out yourself.

[Danny: add anything else that was harder than expected]

These are solvable problems. But they take time, and time is a real cost.

## What I still need to figure out

This article is not a conclusion. It is a progress report. There is still a lot I do not know:

- Will production deployments be reliable enough?
- How will performance compare under real traffic?
- Will the development workflow stay fast enough for daily work?

I will write a follow-up article once I have answers.

## What I learned so far

The biggest lesson so far is that hosting is not a checkbox. It is a decision that affects performance, sustainability, control, and development workflow. Moving from Vercel to Cloudflare is not "better" or "worse." It is a trade-off. For me, the trade-off is worth exploring.

I do not know yet whether I will stay on Cloudflare permanently. But I already know more about my own infrastructure than I did before. And that knowledge is valuable, regardless of where I end up running my sites.

[Danny: what would you tell someone else considering the same move?]

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | why-i-moved-my-nextjs-site-from-vercel-to-cloudflare |
| **Meta description** | Vercel wanted proof of green energy. I wanted more control. Here is what I learned from exploring self-hosting on Cloudflare. |
| **Social title** | Why I moved my Next.js site from Vercel to Cloudflare |
| **Social description** | The migration is not done yet. But I have already learned more about my infrastructure than I did in years on Vercel. |
| **Related articles** | A decade of building websites, Sustainable software is an engineering quality |
| **Related projects** | Moonsio |