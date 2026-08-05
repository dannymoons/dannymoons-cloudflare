---
title: "
description: "A clean design file saves time, reduces rework, and leads to a lighter website. Here is what I look for — and what I wish more designers included before the hand-off."
date: 2026-01-03
topic: Design & Tools
categories: [Design systems]
tags: [design, design-systems, tokens, figma, penpot, collaboration]
status: published
---

# What I wish every design file included

A good design file does more than show how a page should look. It communicates intent, constraints, and decisions. A bad design file leaves me guessing — and guessing leads to rework, bloated CSS, and a site that does not quite match what the designer envisioned.

> The best collaborations started with a file that included a few things beyond the mockups.

I have worked with different designers over the years, and that is the common thread. The file itself sets the tone for the entire build.

## Design tokens, not just colors

When a designer picks a color, I want to know why. Is this the primary action color? The background variant? The hover state? Without that context, I make assumptions — and assumptions are where inconsistencies creep in.

The most useful design files include tokens:
- Color palette with names (not just hex values)
- Spacing scale (4px, 8px, 12px, 16px, 24px...)
- Type scale with sizes, weights, and line heights
- Shadow and border radius tokens
- Basically tokenize everything if you want to make me happy :-)

Tools like Penpot and Figma both support token systems. When they are defined in the file before development starts, the CSS is cleaner and the site is lighter. No redundant values, no guessing.

## Component states, not just the happy path

Every button has a default state, a hover state, a focus state, a disabled state, and a loading state. Same for inputs, links, cards, and navigation items.

When a design file only shows the default state, I have to invent the rest. That means more guesswork and a higher chance that the interaction does not match the designer's intent.

The best files include every state, even if they are simple. It saves time and makes the result more polished.

## Responsive behavior, not just desktop

A design for desktop tells me where elements go. Designing for desktop is easy though. Designing for mobile is a different story for many. But it is important to know how elements should behave when a screen shrinks.

Does this card stack or collapse? Does the sidebar hide or scroll? Does the font size scale down or stay the same?

When responsive behavior is documented in the file — even as simple notes — I can build the responsive layout correctly on the first try. Without it, I build a desktop version, then guess the mobile version, and we go through revision cycles until it looks right.

> When I create the design file myself I tend to look at the file if it is design for a multi brand company: so everything is tokenized and connected to breakpoints.

## Accessibility notes

> Design is not finished when it looks good. It is finished when it works for everyone.

The best design files include:
- Minimum contrast ratios for text on backgrounds
- Focus indicator styles
- Touch target sizes for mobile (at least 44x44 px)
- Reading order for screen readers

Including these in the design phase prevents accessibility issues before they reach code. Fixing an accessibility issue in CSS is much more expensive than getting it right from the start.

## A note on tools: Penpot over Figma

I used to work in Figma. It is a great design tool. But I am currently migrating over to Penpot.

The reasons are practical:
- Open-source: No subscription, no license management, no data lock-in.
- Better dev hand-off: Penpot exposes design tokens and CSS properties directly in the browser. I can inspect spacing, typography, and colors without asking the designer to export anything.
- Dev tools built in: The developer view shows measurements, CSS values, and assets in a format I can use directly.

The principles in this article apply to both tools. But if you are choosing between them, Penpot makes the developer side of the workflow significantly smoother.

## What this has to do with sustainability

Good design files lead to cleaner code. Cleaner code means less CSS, fewer revisions, fewer rebuilds. Every revision cycle costs energy — not just developer time, but compute resources for testing, deploying, and serving the site.

> Sustainable software starts before the first line of code is written. It starts in the design file.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | what-i-wish-every-design-file-included |
| **Meta description** | A clean design file saves time, reduces rework, and leads to a lighter website. Here is what I look for before the hand-off. |
| **Social title** | What I wish every design file included |
| **Social description** | Good design files lead to cleaner code. Cleaner code means less waste. It starts before the first line of code. |
| **Related articles** | Sustainable software is an engineering quality |
| **Related projects** | Moonsio, Pixel to Planet |
