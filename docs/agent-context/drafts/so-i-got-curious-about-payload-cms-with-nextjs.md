---
title: "So I got curious about Payload CMS with Next.js"
description: "After a decade of WordPress sites, I started wondering what Next.js and Payload CMS could do. Here is what I found — the good, the hard, and why I still use both."
date: 2024-03-12
categories: [Sustainable Web Development, Modern Web, Content Management]
tags: [nextjs, payload-cms, wordpress, architecture, web-development]
post-type: field-note
status: published
---

# So I got curious about Payload CMS with Next.js

I first heard about [Payload CMS](https://payloadcms.com) from a friend who also got me into [Next.js](https://nextjs.org). He was a way better developer than me, so I was happy to follow his lead.

For a long time, [WordPress](https://wordpress.org) was my default. It worked. Clients knew it. Content editors could use it. SEO was strong. I had built dozens of sites with it, and I knew its limits well enough to work around them.

After a few coding sessions with my friend, and reading about data freedom, flexibility, and security, I got curious enough to really look into it.

So I started looking.

## What WordPress did well (and still does)

Before I explain what pulled me toward Next.js and Payload, I should say this clearly: WordPress is not broken. It is not always the wrong choice. For a lot of projects, it is still the right one.

What WordPress does well:

- **Content editing.** The block editor is genuinely good now. Editors can build pages without calling me.
- **SEO.** Deep, mature, controllable. No headless CMS matches WordPress SEO plugins out of the box.
- **Hosting.** You can host WordPress wherever you want, which means you can choose the most sustainable server for every project.
- **Ecosystem.** Need a forum, a shop, a membership site? WordPress has it, and you can build on top of it. Building it yourself in a headless setup would take weeks.

For many years, that was enough for me. I could build good websites, clients were happy, and performance was acceptable. I knew WordPress better than anything else, the premium plugins were solid, and clients knew it and wanted it. There was no strong reason to leave.

## What I started wondering about

The curiosity was not about replacing WordPress for everything. It was about projects where I wanted more control:

- **Content modeling.** WordPress stores content as post types and fields. Payload treats content as a structured API. The difference matters when you want to reuse content across pages, languages, or frontends.
- **Performance.** A Next.js site on a CDN is fast by default. No PHP processing per request. No database queries on every page load. That does not automatically make it better, but it removes a whole category of performance problems.
- **Developer experience.** TypeScript from database to frontend. Auto-generated API. Local development that matches production. These things save time in ways that are hard to explain until you have tried them.

For me, the pull toward Payload was about data freedom, accessibility, speed — both front-end and back-end — and the feeling of limitless design. WordPress always had guardrails. Payload felt like I could build anything I could imagine.

I looked at a few options. [Strapi](https://strapi.io). [Contentful](https://www.contentful.com). [Sanity](https://www.sanity.io). They all had strengths, but they also had things I did not like: monthly subscription costs that scaled with content, lock-in to proprietary platforms, or a developer experience that still felt separate from the frontend.

Payload felt different. It is [open source](https://github.com/payloadcms/payload). The content model is code. The admin panel is generated from your TypeScript types. It runs on your own infrastructure. That combination — open source, code-first, self-hosted — was what I was looking for.

## What I built first

My first real Next.js + Payload project was my own site, [moonsio.nl](https://moonsio.nl). Building for yourself gives you room to experiment, but it is still a real project — your own website is a client that will never stop asking for changes. After that came [fysiodouma.nl](https://fysiodouma.nl), a real client project.

I chose to start with my own site because it forced me to learn the stack properly. You cannot hide behind "it is just a prototype" when your own site depends on it.

What I needed from the stack:

- Structured content with clear relationships between data types
- A frontend that could be fast and accessible
- Content editors who needed a clean, predictable admin experience

Payload handled these well. The content model in code meant I could define exactly what each page needed, without the overhead of WordPress custom post types and field groups. The [Payload Local API](https://payloadcms.com/docs/local-api/overview) meant I could query content directly in Next.js without HTTP calls — everything stayed in-process. That was faster and cleaner than setting up REST endpoints for every content type.

That last point — the Local API — was a shift from WordPress, where every page load runs PHP, queries the database, and renders the full page. With Next.js and Payload, I could pre-render pages at build time and serve them as static HTML. Faster and lighter from the start.

## What was harder than expected

I want to be honest about the hard parts, because too many "I switched to Next.js" stories leave them out.

**The content editor experience is different.** In WordPress, editors can build pages with blocks directly. In Payload, you design the content model first, and editors fill in structured fields. This is better for consistency, but it requires more planning and less improvisation.

**Hosting is more complex — especially if you do not want to use [Vercel](https://vercel.com).** Managed WordPress hosting is a solved problem. You upload the site, it works. For Next.js + Payload, you need to think about Node.js servers, CDN configuration, build processes, database hosting, and deployment pipelines. It is not impossibly hard, but it is more decisions, and some of those decisions are harder when you want to host outside the Vercel ecosystem.

**The ecosystem is smaller.** Need a contact form plugin? A redirect manager? An SEO analysis tool? In WordPress, these exist. In Payload, you build them yourself or find community packages.

## Where I still use WordPress

I still use WordPress. Every week. For some projects, it is the better choice:

- Budget-conscious clients who need a site done fast
- Projects where the client wants full control over page layouts
- Sites that need proven plugins (e-commerce, forums, learning management)

The decision is not "WordPress vs. Next.js." It is "what does this project need?"

## What I learned

The biggest lesson from this exploration was not technical. It was about curiosity.

For years, I assumed WordPress was the best tool because it was the tool I knew best. That is a dangerous assumption for any builder. The moment you stop exploring, you stop knowing whether your default is still the right choice.

I did not switch away from WordPress. I added new tools. I changed how I think about content, architecture, and performance. I became better at choosing — not just better at building.

If I could give advice to other WordPress developers: stay curious. Investigate what the best stacks are for you and your projects. But do not get lost like I did. I kept rebuilding my systems from scratch, and that created a less sustainable situation and cost way too much time. The goal is not to switch everything. The goal is to know enough to choose well.


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
