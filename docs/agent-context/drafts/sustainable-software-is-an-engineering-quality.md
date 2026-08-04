---
title: "Sustainable Software Is an Engineering Quality"
description: "Green hosting is not enough. Sustainable software means making better decisions about architecture, dependencies, content, and maintainability — long before you pick a server."
date: 2026-08-03
topic: Sustainable Software
tags: [sustainable-software, performance, maintainability, architecture]
---

# Sustainable Software Is an Engineering Quality

I often see websites that claim to be sustainable because they switched to a green hosting provider. Sometimes they even display a carbon badge in the footer. Done. Sustainable website achieved.

I understand the impulse. Green hosting is better than gray hosting. But if that same site still loads 8 MB of JavaScript, serves uncompressed hero images, runs five analytics tools, and has dependencies nobody remembers adding — then the hosting provider is not the problem. The waste was designed and built in long before the request reached the server.

Sustainable software is not a hosting decision. It is not a badge or an offset purchase. It is an engineering quality — the same way performance, accessibility, and maintainability are qualities of good software. Green hosting is one piece of the puzzle, but it is not the whole picture.

## In short...

Sustainable software means building systems that use fewer resources, stay useful longer, and cost less to operate and maintain. Green hosting is one small part of that. The real work happens in architecture choices, dependency management, content decisions, and how you think about waste.

If your site is fast, lean, accessible, and well-maintained, it is probably more sustainable than a bloated site on a green server.

## What sustainable software actually includes

When I look at a project, I think about sustainability across several layers:

**Performance.** A fast page uses less energy, less data, and fewer server cycles. Performance and sustainability are not separate goals. They are the same goal seen from different angles. I have never seen a fast, well-optimized site that was also wasteful. The reverse happens all the time.

**Maintainability.** Software that is hard to maintain gets rewritten or abandoned sooner. That churn creates waste. Well-structured, well-documented systems last longer and need fewer resources over their lifetime. The most sustainable choice you can make is often writing code that someone can understand in two years.

**Architecture.** Every dependency, every framework layer, every API call adds weight. Good architecture questions whether something is needed at all. The most sustainable line of code is the one you did not write.

**Dependencies.** Every third-party script, every npm package, every plugin adds a cost that you might not see on the invoice. I have worked on sites where removing one unused analytics library cut page weight by more than 10 percent. Nobody noticed. The data was never used.

**Content and media.** An 8 MB hero image sent to every visitor is a sustainability problem, regardless of the hosting provider. So is a page full of tracking scripts nobody reads. Content decisions — what you include, how you optimize it, how long you keep it — are sustainability decisions.

**Lifespan.** Software that lasts five years instead of two has half the rebuild cost. Decisions that make a system easier to update, migrate, and extend are sustainability decisions. So are decisions that make it easier to say no to unnecessary features.

## Where green hosting fits

Green hosting matters. A server powered by renewable energy is better than one powered by fossil fuels. A hosting provider that measures and reduces its footprint is making a real choice.

But if your page weighs 8 MB and loads forty third-party scripts, even the greenest server does not make it sustainable. The waste was already created — in the code, in the content, in the design decisions — before the first byte left the server.

Green hosting is one piece of a much larger puzzle. Treating it as the whole solution is like saying a car is environmentally friendly because you put premium fuel in it.

## What this looks like in practice

Here are a few examples of engineering decisions that improve sustainability:

- Choosing a static or cached page instead of a dynamically rendered one, for pages that do not change often.
- Removing unused JavaScript instead of adding more.
- Writing clear documentation so the next person does not have to reverse-engineer the system.
- Picking a simpler stack when a complex one is not justified by the requirements.
- Running a dependency audit before adding a new package — not after.

These are not "sustainability initiatives." They are just careful engineering. The sustainability improvement is a side effect. But that side effect matters, and it adds up across every project.

It was during my early works in 2018 when I developed my first custom WordPress theme that I found out that making the right programming decisions let to better performance. Later I found out that this goes hand in hand with sustainability.


## Trade-offs

Not every sustainable choice is free. Sometimes a simpler architecture takes more thinking up front. Sometimes removing a dependency means rebuilding a feature. Sometimes green hosting is more expensive.

But most sustainable choices also improve other qualities: speed, cost, reliability, developer experience. When you optimize for sustainability, you rarely optimize for only one thing.

> So actually there are no real trad-offs here but only wins.

## What I would do from a developers perspective

If you want to make your website or product more sustainable, start here:

1. Measure page weight and Core Web Vitals.
2. Inventory your third-party scripts and remove what you do not need.
3. Review your dependency tree for unused or heavy packages.
4. Check how easy it is to update your system in two years.
5. Research green hosting only after you have addressed the above.

Start with what you can control in your own code and content. That is where most of the waste lives. Hosting comes after.

## Final thought

Sustainability in software is not a label you add after the build. It is a quality of the decisions you make while building. It belongs in the definition of done, not in a marketing checkbox.

The next time someone asks if a site is sustainable, the useful answer is not the name of the hosting provider. It is a description of what the site does, how it performs, what it weighs, how long it will last, and whether the waste was designed out before the first line of code was written.

Green hosting is a fine start. But it is not the finish.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | sustainable-software-is-an-engineering-quality |
| **Meta description** | Green hosting is not enough. Sustainable software means making better decisions about architecture, dependencies, content, and maintainability — long before you pick a server. |
| **Social title** | Sustainable Software Is an Engineering Quality |
| **Social description** | Green hosting is one piece. The real work is in architecture, dependencies, content, and maintainability. |
| **Related articles** | Digital Sustainability Is More Than Carbon, A Performance Budget for Sustainable Websites |
| **Related projects** | Moonsio, Carbonfooter |
