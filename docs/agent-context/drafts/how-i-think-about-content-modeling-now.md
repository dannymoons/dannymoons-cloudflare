---
title: "How I think about content modeling now (vs WordPress custom fields)"
description: "I always defined ACF fields in PHP config files, never in the UI. But switching to Payload changed how I think about content — from config files to structured, type-safe models."
date: 2026-08-04
topic: Modern Web
tags: [payload-cms, wordpress, acf, content-modeling, architecture]
---

# How I think about content modeling now (vs WordPress custom fields)

I never used the ACF field group UI. From the start, I defined my fields in PHP config files — block fields in a dedicated `block-config.php`, theme settings in a separate file, post type fields in their own files. Everything in code, everything under version control.

It worked well. But over time, I noticed the same problems appearing across projects: inconsistent field names, duplicate data structures, and content that was hard to reuse between pages. The code was clean, but the model was not.

When I started working with Payload CMS, I realized the problem was not how I defined the fields. It was the underlying model itself. ACF stores everything as post meta. Payload stores content as structured, relational data.

## The ACF way: fields in PHP config

My typical setup looked like this:

```php
// block-config.php
acf_add_local_field_group([
  'key' => 'group_hero',
  'title' => 'Hero Block',
  'fields' => [
    [
      'key' => 'field_hero_title',
      'label' => 'Title',
      'name' => 'title',
      'type' => 'text',
    ],
    [
      'key' => 'field_hero_image',
      'label' => 'Image',
      'name' => 'image',
      'type' => 'image',
    ],
  ],
  'location' => [
    [
      [
        'param' => 'block',
        'value' => 'acf/hero',
      ],
    ],
  ],
]);
```

This is clean, version-controlled, and reviewable. But it still has the problems I mentioned: every value stored as post meta, relationships as serialized arrays, no proper foreign keys.

Last year, I built an abstraction layer on top of this. Instead of writing raw ACF config arrays, I created a `FieldTypes` class with typed static methods:

```php
use Moonsio\Fields\FieldTypes;

$fields = [
  FieldTypes::text('hero', 'title', 'Title'),
  FieldTypes::image('hero', 'image', 'Background Image'),
  FieldTypes::link('hero', 'cta', 'Call to Action'),
];
```

The class handles key generation, sensible defaults, and consistent structure — so every field group follows the same pattern. It reduces boilerplate, makes blocks easier to read, and gives PHP autocomplete for field definitions.

> I built an abstraction over ACF so every field group follows the same pattern.

This is not a radical change. It is still ACF under the hood. But it shows the direction I was heading: toward more structure, less repetition, and a cleaner interface between code and content.

That direction led me to Payload.

> ACF stores everything as post meta. Payload stores content as structured, relational data.

## The Payload way: types as the source of truth

In Payload, the content model is defined in TypeScript. The database schema, the admin panel, and the API are all generated from the same types.

```typescript
const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'content', type: 'richText' },
    { name: 'categories', type: 'relationship', relationTo: 'categories', hasMany: true },
  ],
}
```

The difference is not in the code structure — both approaches are code-first. The difference is in what happens underneath.

- **ACF writes to post meta.** Every field is a row in `wp_postmeta`. Queries require meta queries, which are slow at scale.
- **Payload writes to dedicated tables.** Each collection gets its own table. Relationships use foreign keys. Queries are fast and type-safe.

This changes what you can do. Cross-collection queries that would require custom SQL or multiple loops in WordPress are a simple `depth` parameter in Payload.

## What changed in how I think

The biggest shift was not about code organization. I was already organizing my ACF code well.

The shift was about treating content as structured data instead of post meta.

With ACF, every field group is an island. You define fields for a block, and those fields only exist within that block. If the same data appears in two blocks, you define it twice — or build a custom solution to share it.

> Every field group is an island. Payload treats content as connected data.

With Payload, content is relational by default. A category is a collection. A team member is a collection. An author is a collection. You define them once, and every relationship, every block, every page can reference them.

The admin panel reflects this automatically. The API reflects this automatically. The type system enforces it.

## What I still use ACF for

I still use WordPress with ACF for projects where it fits. Not every site needs a relational content model. For simpler projects, ACF in PHP config files is fast, predictable, and clients understand WordPress.

But for any project where content has relationships, needs to be maintained over years, or requires more than flat page content — I start with the model first, not the field group.

## The sustainability connection

Structured data means less duplication. Less duplication means less code, fewer database queries, and easier maintenance. A site built on a clear content model is lighter, faster, and cheaper to operate.

The tools matter, but the way you think about content matters more.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | how-i-think-about-content-modeling-now |
| **Meta description** | I always defined ACF fields in PHP config files. But switching to Payload changed how I think — from post meta to structured, type-safe models. |
| **Social title** | How I think about content modeling now (vs WordPress custom fields) |
| **Social description** | Both approaches are code-first. The real difference is what happens underneath — post meta vs relational data. |
| **Related articles** | So I got curious about Payload CMS with Next.js, Sustainable software is an engineering quality |
| **Related projects** | Moonsio |