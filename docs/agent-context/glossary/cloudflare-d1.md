---
title: "Cloudflare D1"
date: 2026-08-05
slug: cloudflare-d1
tags: [cloudflare, database, hosting]
aliases: [D1, Cloudflare database]
reviewed: true
---

Cloudflare D1 is Cloudflare's serverless SQLite database. It runs on Cloudflare's global network, close to where your [Workers](/what-is/cloudflare-workers) and Pages run.

Unlike a traditional database that requires a separate server, connection pooling, and connection strings, D1 is built into the Cloudflare ecosystem. You define your schema and query it directly from Workers, using standard SQL.

For a [Next.js](/what-is/nextjs) site with [Payload CMS](/what-is/payload-cms), D1 replaces the traditional database layer. Payload's [sqliteD1Adapter](https://payloadcms.com/docs/database/d1) lets you use D1 as the database backend. This means your CMS runs entirely on Cloudflare's edge — no separate database server to manage, no connection overhead, and data storage that scales automatically.

It is not designed for every use case. Complex migrations, large datasets, and write-heavy workloads are better served by traditional databases. But for a content-managed site like dannymoons.nl, it keeps the stack simple and the infrastructure light.
