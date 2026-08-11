---
title: "When my local D1 database disappeared"
slug: when-my-local-d1-database-disappeared
description: "A local Payload database looked empty after changing Miniflare persistence, and exporting production content exposed two more D1 import traps."
date: 2026-08-11
categories: [Modern Web, Content Management]
tags: [cloudflare-d1, payload-cms, wrangler, nextjs, debugging]
post-type: field-note
status: published
---

# When my local D1 database disappeared

The homepage was not showing any posts.

At first, it looked like a rendering bug. The query was there. The `map` was there. The TypeScript errors were fixable. I added logs to the server component and expected to find a bad filter or a missing locale.

The logs told me something simpler:

```text
posts: []
field notes: []
```

The local database was empty.

Not missing a few posts. Empty. No users, no media, no categories, no pages.

## It had not really been deleted

This project uses Payload on top of Cloudflare D1. Local development uses Wrangler's Miniflare simulation of D1. The important setting was this:

```ts
persist: false
```

That setting had been added to avoid SQLite locking while Cloudflare's build processes were running in parallel. It solved one problem: separate processes would not fight over the same local database file.

It also created another one.

With persistence disabled, a migration run by one process did not necessarily leave a database that the next process could use. The local state was temporary. When that process stopped, the data was effectively gone.

Later, persistence was enabled for local development:

```ts
persist: !useRemoteBindings
```

That was the right direction for local work. But it did not bring back the old in-memory database. It created a persistent local D1 state with the schema and no content.

So the database had not been wiped by the homepage query. I had changed where local D1 state lived, and the old state had never been durable enough to recover.

That distinction matters. An empty database and a database with missing tables can look similar from a page, but they are different failures. One needs content. The other needs migrations.

## Production was still there

Before trying to recreate anything, I checked the production database directly. It contained:

- 7 posts
- 22 glossary entries
- 1 user

The local database had zero rows. Production had the content I needed.

That also gave me a useful boundary: ordinary local commands use the local D1 binding, while production commands need an explicit remote binding. A command that looks nearly identical can target a completely different database.

## Exporting was the easy part

Wrangler can export a remote D1 database as SQL:

```bash
pnpm wrangler d1 export dannymoons-db \
  --remote \
  --no-schema \
  --output /tmp/dannymoons-production-data.sql
```

The `--no-schema` flag is useful here because the local database already has its schema. I only wanted the rows.

The export completed successfully. The import was where the useful details appeared.

## D1 is still SQLite, but not every SQLite table travels

The first import failed with:

```text
no such table: sqlite_stat1
```

The production export included SQLite query-planner statistics. They are not application content, and the local D1 database did not expose that internal table in the same way.

Removing those statements was enough to get past the first problem:

```bash
sed \
  -e '/INSERT INTO "sqlite_stat1"/d' \
  -e '/INSERT INTO "payload_migrations"/d' \
  /tmp/dannymoons-production-data.sql \
  > /tmp/dannymoons-production-data-clean.sql
```

The second import failed with:

```text
UNIQUE constraint failed: payload_migrations.id
```

This happened because the import was not an all-or-nothing operation. It had already inserted the local migration records before reaching the duplicate. Running the same file again would only hit the same constraint sooner.

The fix was to start with a fresh local D1 state, run the local Payload migrations, and import the content without production's migration-history rows:

```bash
rm -rf .wrangler/state/v3/d1/miniflare-D1DatabaseObject
pnpm payload migrate
pnpm wrangler d1 execute D1 \
  --local \
  --file /tmp/dannymoons-production-data-clean.sql
```

I stopped the local dev server before removing the state directory. The command only removed the local Wrangler database, not production.

## The content came back

The final count check returned the expected records:

```text
posts     7
glossary 22
users     1
```

The page logs then made sense. The query was not broken. It was finally reading a database that contained data.

## What I am taking from this

The main lesson is not “be careful with Cloudflare.” It is more specific:

Local database state needs an explicit lifecycle.

I need to know whether a command is:

- creating the schema
- importing content
- resetting content
- reading local state
- reading or changing production state

Those boundaries should be visible in the command, not something I infer after the homepage goes blank.

I also need to treat a D1 export as a database dump, not as a drop-in Payload content file. It can contain migration history and SQLite internals that belong to the source database but should not be replayed into an already-migrated local one.

The safer local recovery sequence is now clear:

1. Stop the local dev process.
2. Back up the current local D1 state.
3. Start with a clean local state when the import may have partially run.
4. Run Payload migrations locally.
5. Import data only, excluding migration history and incompatible SQLite internals.
6. Verify row counts before debugging the frontend.

The useful bit was not adding another log to `posts.map`. It was checking the system underneath it.

An empty result is sometimes a frontend problem. Sometimes it is just an honest report from an empty database.
