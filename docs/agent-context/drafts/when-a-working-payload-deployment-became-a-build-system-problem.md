---
title: "When a working Payload deployment became a build-system problem"
slug: when-a-working-payload-deployment-became-a-build-system-problem
description: "What broke when I added a glossary and sitemap to a Payload site on Cloudflare, and what I learned about migrations, local D1 state, OpenNext builds — and why using AI before checking my assumptions made everything worse."
date: 2026-08-11
categories: [Modern Web, Content Management]
tags: [payload-cms, cloudflare, cloudflare-d1, opennext, nextjs, debugging, ai-assisted-debugging]
post-type: field-note
status: published
---

# When a working Payload deployment became a build-system problem

The site was working.

Payload was running on Cloudflare Workers. D1 was connected. The collections worked. I had run the migrations, exported the content, imported it again, and got the site online quickly enough to feel like the difficult part was over.

Then I added a glossary and a database-backed sitemap.

That is when the project stopped being a simple Payload deployment and became a lesson in build environments.

## The first version was simple

The original setup followed a fairly direct pattern:

- Payload defined the collections.
- D1 stored the data.
- R2 stored media.
- Wrangler provided the bindings.
- Migrations were run manually before deployment.
- Content was imported manually after the schema was ready.

That workflow had an important property: I knew which database I was talking to. Local commands used local bindings. Production commands used production bindings. The site did not need to query every collection while generating a new sitemap or building every page.

It was not sophisticated, but it was understandable.

## More useful features created more moving parts

The glossary added a new Payload collection, localized slugs, aliases, tags, Markdown conversion, rich text, drafts, previews, metadata, and revalidation.

The sitemap changed from a generated file into a server route that queries pages, posts, glossary entries, and wiki documents. That made the sitemap more accurate, but it also meant that `/sitemap.xml` now needed a working Payload connection and a complete database schema at request time or build time.

Then I added OpenNext cache configuration for revalidation. That meant adding an R2 incremental cache and a Durable Object queue to Wrangler. Each individual decision made sense. Together, they created a system where the local Next.js build, the OpenNext build, Wrangler, D1, R2, and the Durable Object all had to agree about the environment.

They did not always agree.

## The errors were mostly environment errors

The first obvious failure was:

```text
D1_ERROR: no such table: wiki
```

Later, local development showed the same problem for `pages` and `posts`.

This did not mean the collections were broken or that the database had no entries. It meant the local D1 database did not have the tables at all. A query cannot return an empty collection when the table itself does not exist.

The reason was a setting added to avoid SQLite locking during parallel Cloudflare builds:

```ts
persist: false
```

That prevented parallel build workers from sharing a locked local Miniflare database. It also meant that a migration run in one Payload CLI process did not leave a persistent local schema for the next `pnpm dev` process.

The right distinction was not simply local versus production. It was local persistent state versus remote bindings:

- Local development and the local Payload CLI need persistent D1 state.
- Remote production builds do not need persistent Miniflare state.

The configuration now uses persistence only for local bindings.

## The Cloudflare build had a different problem

The Cloudflare build eventually reached the real Next.js build, but the custom Durable Object queue caused workerd warnings and SQLite locking:

```text
DOQueueHandler ... no such Durable Object class is exported
SENTRY_DO SQLite ... SQLITE_BUSY
```

The OpenNext-generated Durable Object class is part of the worker bundle that OpenNext creates. Loading that binding while Next is still collecting page data was too early. The fix was not another migration or another environment variable. The fix was to remove the custom cache and queue configuration and return to the standard OpenNext setup from Payload's Cloudflare template.

The next attempted fix used `--skipNextBuild`. That avoided the Durable Object lock, but then OpenNext could not find:

```text
.next/standalone/.next/server/pages-manifest.json
```

That happened because skipping Next also skipped OpenNext's own standalone build preparation. This was a useful failure because it showed that the workaround was fighting the toolchain rather than simplifying it.

The final direction was simpler: let OpenNext run its normal build, keep the OpenNext configuration empty, and avoid adding cache infrastructure until there is a measured need for it.

## The ACF page was a distraction

When `/what-is/acf` returned a 500, I first looked at the Markdown importer and the ACF record. The API showed that the record had valid Markdown, valid Lexical content, tags, aliases, metadata, and a published status.

Other glossary and wiki detail pages failed too. That made it unlikely that ACF's content was malformed.

A diagnostic deployment showed only Next's generic Server Components error. The page started working after a later redeploy, but the temporary logging did not contain a useful exception and there was no evidence that the logging itself fixed the page. The more honest conclusion is that a fresh Worker deployment and rebuilt runtime state cleared the failure, while the underlying data was valid.

## But I left out what started it

There is a step before all of this that I have not mentioned yet, and it is the most instructive part of the story.

Before the build problems, before the environment errors, before any of the infrastructure work, I did something that seemed simple: I added a new Payload collection.

The glossary was not technically complex — a few fields, localized slugs, tags. I had built collections before. So I added the config, ran a local build, and opened the admin panel.

Internal Server Error.

My first experience with Payload was on MongoDB. Adding a collection there just worked. The schema adapted. You added a config, and the database handled it. I carried that assumption into the D1 setup without thinking about it.

Cloudflare D1 is SQLite. A changed Payload config on SQLite means you need a database migration. I had not run one. The error was not a bug in my collection config. It was a schema that did not exist yet.

That should have been a five-minute fix. Instead, I called in AI to investigate.

This is the part I find most useful to reflect on. I did not know the root cause because I had not stopped to check my assumptions. I handed the problem — 500 errors after adding a collection — to an AI assistant, and because I had not scoped the problem correctly, the AI had no reason to start with the simplest explanation. It went straight into Cloudflare internals, OpenNext build issues, caching, Durable Objects, and deployment pipelines.

A likely simple database-migration problem became a full infrastructure investigation.

I do not tell this to blame the AI. The AI responded to the framing I gave it. It was thorough, creative, and persistent. That is exactly what made it dangerous in this situation: it was so good at finding complex explanations that it helped me build a very sophisticated solution to possibly the wrong problem.

> I used AI to solve a problem before I properly understood what problem I was solving. AI then helped convincingly build an increasingly complex solution to possibly the wrong problem.

The lesson is not about AI. It is about order of operations. Before you involve AI in a diagnosis, check the simple things yourself. Schema. Migrations. Database state. Deployment state. Environment variables. Those checks take minutes. And they prevent you from spending days in the wrong layer of the stack.

I would keep the first deployment boring: D1, R2, migrations, and a normal OpenNext build. I would add a glossary, sitemap, caching, and revalidation as separate changes, checking the build after each one.

The goal is not to avoid useful features. It is to avoid introducing several infrastructure assumptions before there is a clear failure to solve.

## Things to look out for

- `no such table` means the schema is missing. It does not mean the collection is empty.
- Run local Payload migrations with persistent local D1 bindings.
- Keep `remote: false` for ordinary local development.
- Use remote bindings explicitly for production migrations and Cloudflare builds.
- Do not let an OpenNext Durable Object binding load during a separate Next build unless the toolchain expects it there.
- Be careful with `--skipNextBuild`. It can also skip files OpenNext expects later, such as the standalone server manifest.
- Do not add R2 incremental caching or Durable Object queues just because a route has a revalidation setting. Confirm the need and configure the complete OpenNext pattern first.
- Treat a successful redeploy as evidence that deployment state mattered, not proof that the last code change fixed the bug.
- Keep database migrations, content imports, build output, and Worker deployment as separate steps that can each be verified.
- When a page returns a generic Server Components error, check a working sibling route and the public Payload API before changing the content importer.

The lesson was not that Cloudflare, Payload, or OpenNext were impossible to combine. The lesson was that a working stack can become fragile when I add infrastructure around it faster than I add clear boundaries between local development, production builds, migrations, content imports, and runtime caching.

That is a build problem before it is a framework problem.
