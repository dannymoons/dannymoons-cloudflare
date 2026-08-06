---
title: "OpenNext"
date: 2026-08-05
slug: opennext
tags: [cloudflare, nextjs, hosting]
aliases: [OpenNext, OpenNext Cloudflare]
---

OpenNext is an open-source tool that adapts Next.js applications to run on Cloudflare Workers and other non-Node.js platforms.

Next.js was originally designed for Node.js servers (like Vercel). OpenNext bridges the gap by converting the Next.js build output into a format that Cloudflare Workers can execute. It handles routing, middleware, API routes, image optimization, and static asset serving — all within Cloudflare's edge runtime.

For dannymoons.nl, OpenNext is the key that makes the Next.js + Payload CMS stack work on Cloudflare. Without it, you would need a Node.js server or a significant rewrite.

It is maintained by the Cloudflare team and the open-source community. The project is active and regularly updated to support new Next.js features as they are released.