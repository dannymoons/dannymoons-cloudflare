---
title: "Post meta"
date: 2026-08-05
slug: post-meta
tags: [wordpress, development]
aliases: [post meta, wp_postmeta, meta data]
reviewed: true
---

Post meta is how WordPress stores extra information about a page or post. Think of it as sticky notes attached to a document. Every time you add a custom field — like a photo, a price, or a special setting — WordPress writes it as a separate sticky note in a big table called `wp_postmeta`.

This system is flexible, but it has a downside. Because the data is stored as separate notes instead of organized rows, it can become slow and messy when a website grows. Finding a specific piece of information means searching through a pile of sticky notes.

Newer systems like Payload CMS store data in organized tables instead, like a proper filing cabinet. This makes the site faster and the data easier to work with.
