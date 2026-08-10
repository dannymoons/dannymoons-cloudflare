---
title: "Cloudflare Workers"
date: 2026-08-05
slug: cloudflare-workers
tags: [cloudflare, hosting, development]
aliases: [Workers, Cloudflare Workers, edge workers]
reviewed: true
---

Cloudflare Workers is a platform that runs code on Cloudflare's global network. Instead of running your code on one server in one location, it runs on dozens of servers around the world — close to your visitors.

Think of it like this: a normal server is like one shop in one city. Visitors from other cities have to travel far to reach it. Cloudflare Workers is like having a small shop in every city. Every visitor gets served by the closest one, which is much faster.

For my site, OpenNext converts Next.js into a format that Cloudflare Workers can run. This means my site runs on Cloudflare's global network instead of a single server — faster for visitors, and more efficient in terms of energy.
