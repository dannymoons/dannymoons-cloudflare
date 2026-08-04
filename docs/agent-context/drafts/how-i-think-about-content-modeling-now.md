---
title: "How I think about content modeling now (vs WordPress custom fields)"
description: "ACF was my go-to for years. Now, with Payload, I think about content modeling differently — from the database up, not from the UI down."
date: 2026-08-04
topic: Modern Web
tags: [payload-cms, wordpress, acf, content-modeling, architecture]
---

# How I think about content modeling now (vs WordPress custom fields)

For years, my approach to content modeling was simple: install ACF, open the field group editor, and start adding fields. A text field for the title, a WYSIWYG for the body, an image field for the hero. Done.

It worked. But over time, I noticed the same problems appearing in project after project: inconsistent fields, duplicate data, and content that was hard to reuse across pages.

When I started working with Payload CMS, I realized the problem was not ACF. It was the approach. ACF lets you add fields to the UI. Payload forces you to model the content first.

## The ACF way

ACF is flexible. That is its strength and its weakness.

You create a field group, assign it to a post type, and start filling in fields. Need a relationship between two content types? ACF has a relationship field. Need a repeater with sub-fields? It exists.

But because the fields are defined in the admin UI, they are easy to change and easy to grow inconsistent. I have worked on sites where the same "team member" data existed in three different field groups across three different pages. Same data, different field names, different structures.

> ACF is flexible. That is its strength and its weakness.

The result is more code to maintain, more complexity in templates, and content that is harder to migrate or reuse. It works, but it does not scale well.

## The Payload way

Payload takes a different approach. You define your content model in TypeScript code. The admin panel is generated from that code. The fields are the source of truth.

```typescript
const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'content', type: 'richText', required: true },
    { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true },
  ],
}
```

Everything flows from the model. The database schema matches the code. The API is generated automatically. The admin panel respects the same types.

This means:
- **No drift.** The code, the database, and the admin are always in sync.
- **Type safety.** TypeScript catches mismatches before they reach production.
- **Reusability.** A `categories` relationship is the same everywhere, not a custom field group per page.
- **Version control.** Changes to the content model are code changes, reviewed in pull requests.

> Everything flows from the model. The code, the database, and the admin are always in sync.

## What changed in how I think

The biggest shift was not technical. It was conceptual.

With ACF, I thought about what the editor should see. With Payload, I think about what the content actually is.

Is a "team member" a post type or a relationship? Does "price" belong on the product or in a separate table? Can this content appear on multiple pages or is it page-specific?

These questions exist in both systems. But Payload forces me to answer them before I start building. ACF lets me postpone them until later — and "later" often means inconsistent.

## What I still use ACF for

I still use WordPress with ACF for projects where it is the better choice. Not every project needs a code-first content model. For simpler sites with straightforward content, ACF is faster and clients understand it.

But for any project where content is reused across pages, has relationships between types, or needs to be maintained over years — I start with the model first.

## The sustainability connection

Consistent content models mean less code. Less code means fewer database queries, smaller page sizes, and easier maintenance over time. A site with a well-defined content model is lighter, faster, and cheaper to maintain.

That is sustainable software in practice. Not because of the tools, but because of how you think about the data.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | how-i-think-about-content-modeling-now |
| **Meta description** | ACF was my go-to for years. Now I think about content modeling differently — from the database up, not from the UI down. |
| **Social title** | How I think about content modeling now (vs WordPress custom fields) |
| **Social description** | ACF lets you add fields. Payload forces you to model content first. The difference changed how I build. |
| **Related articles** | So I got curious about Payload CMS with Next.js, Sustainable software is an engineering quality |
| **Related projects** | Moonsio |