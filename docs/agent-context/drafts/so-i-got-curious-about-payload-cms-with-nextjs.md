---
title: "So I got curious about Payload CMS with Next.js"
description: "After a decade of WordPress sites, I started wondering what Next.js and Payload CMS could do. Here is what I found — the good, the hard, and why I still use both."
date: 2026-08-04
topic: Modern Web
tags: [nextjs, payload-cms, wordpress, architecture, web-development]
---

# So I got curious about Payload CMS with Next.js

[Danny: open with a short, personal moment. What were you doing when you first heard about Payload or Next.js? Were you working on a specific project? What made you think "maybe I should look into this"?]

For a long time, WordPress was my default. It worked. Clients knew it. Content editors could use it. SEO was strong. I had built dozens of sites with it, and I knew its limits well enough to work around them.

But somewhere in early 2024, I got curious. I kept hearing about Next.js and headless CMS options. Not as "WordPress is dead" noise — I had heard that for years and ignored it. But as practical conversations from developers whose judgment I trusted. They were not abandoning WordPress. They were adding something new to their toolkit.

So I started looking.

## What WordPress did well (and still does)

Before I explain what pulled me toward Next.js and Payload, I should say this clearly: WordPress is not broken. It is not always the wrong choice. For a lot of projects, it is still the right one.

What WordPress does well:

- **Content editing.** The block editor is genuinely good now. Editors can build pages without calling me.
- **SEO.** Deep, mature, controllable. No headless CMS matches WordPress SEO plugins out of the box.
- **Hosting.** Managed WordPress hosting is cheap, reliable, and well-understood by clients.
- **Ecosystem.** Need a forum, a shop, a membership site? WordPress has it. Building it yourself in a headless setup would take weeks.

For many years, that was enough for me. I could build good websites, clients were happy, and performance was acceptable.

[Danny: add your own specific take — what kept you on WordPress longest? Was it the ecosystem, the client comfort, the speed of delivery?]

## What I started wondering about

The curiosity was not about replacing WordPress for everything. It was about projects where I wanted more control:

- **Content modeling.** WordPress stores content as post types and fields. Payload treats content as a structured API. The difference matters when you want to reuse content across pages, languages, or frontends.
- **Performance.** A Next.js site on a CDN is fast by default. No PHP processing per request. No database queries on every page load. That does not automatically make it better, but it removes a whole category of performance problems.
- **Developer experience.** TypeScript from database to frontend. Auto-generated API. Local development that matches production. These things save time in ways that are hard to explain until you have tried them.

[Danny: what specifically pulled you toward Payload over other headless CMS options? Was there a comparison moment?]

I looked at a few options. Strapi. Contentful. Sanity. They all had strengths, but they also had things I did not like: monthly subscription costs that scaled with content, lock-in to proprietary platforms, or a developer experience that still felt separate from the frontend.

Payload felt different. It is open source. The content model is code. The admin panel is generated from your TypeScript types. It runs on your own infrastructure. That combination — open source, code-first, self-hosted — was what I was looking for.

## What I built first

[Danny: what was your first real Next.js + Payload project? A test site? A real client project? How did you decide what to build first?]

For my first real project, I chose something that would force me to learn the stack properly. [Danny: describe the project briefly — was it Duizeligheid.nl? Something else? What made it a good first project?]

The project needed:

- Structured content with clear relationships between data types
- Multiple languages with proper URL structure
- A frontend that could be fast and accessible
- Content editors who needed a clean, predictable admin experience

[Danny: how did Payload handle these requirements compared to how you would have done it in WordPress?]

## What was harder than expected

I want to be honest about the hard parts, because too many "I switched to Next.js" stories leave them out.

**The content editor experience is different.** In WordPress, editors can build pages with blocks directly. In Payload, you design the content model first, and editors fill in structured fields. This is better for consistency, but it requires more planning and less improvisation.

**Hosting is more complex.** Managed WordPress hosting is a solved problem. You upload the site, it works. For Next.js + Payload, you need to think about Node.js servers, CDN configuration, build processes, database hosting, and deployment pipelines. It is not impossibly hard, but it is more decisions.

**The ecosystem is smaller.** Need a contact form plugin? A redirect manager? An SEO analysis tool? In WordPress, these exist. In Payload, you build them yourself or find community packages.

[Danny: what was the hardest part for you personally? Was there a moment you almost gave up?]

## Where I still use WordPress

I still use WordPress. Every week. For some projects, it is the better choice:

- Budget-conscious clients who need a site done fast
- Projects where the client wants full control over page layouts
- Sites that need proven plugins (e-commerce, forums, learning management)

The decision is not "WordPress vs. Next.js." It is "what does this project need?"

[Danny: give a specific example — a recent project where you chose WordPress and why. And one where you chose Next.js + Payload and why.]

## What I learned

The biggest lesson from this exploration was not technical. It was about curiosity.

For years, I assumed WordPress was the best tool because it was the tool I knew best. That is a dangerous assumption for any builder. The moment you stop exploring, you stop knowing whether your default is still the right choice.

I did not switch away from WordPress. I added new tools. I changed how I think about content, architecture, and performance. I became better at choosing — not just better at building.

[Danny: would you give the same advice to other WordPress developers? What would you tell them?]

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | so-i-got-curious-about-payload-cms-with-nextjs |
| **Meta description** | After a decade of WordPress sites, I started wondering what Next.js and Payload CMS could do. Here is what I found — the good, the hard, and why I still use both. |
| **Social title** | So I got curious about Payload CMS with Next.js |
| **Social description** | I did not switch away from WordPress. I added new tools. Here is what I learned from exploring Next.js and Payload CMS. |
| **Related articles** | Sustainable software is an engineering quality |
| **Related projects** | Moonsio, Duizeligheid Nederland |