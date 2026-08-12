---
title: "When AI helped me build a solution to the wrong problem"
slug: when-ai-helped-me-build-a-solution-to-the-wrong-problem
description: "I asked AI to fix 500 errors after adding a Payload collection. Because I had not diagnosed the root cause myself, the AI had no reason to start with the simplest explanation — and helped me build a very sophisticated fix for the wrong problem."
date: 2026-08-12
categories: [Modern Web]
tags: [ai-assisted-debugging, payload-cms, cloudflare-d1, debugging, lessons-learned]
post-type: field-note
status: published
---

# When AI helped me build a solution to the wrong problem

I added a new collection to a running Payload CMS site. The admin panel returned a 500 error.

My first experience with Payload was on MongoDB, where adding a collection just worked — the schema adapted automatically. I carried that assumption into a project running on Cloudflare D1, which is SQLite. On SQLite, a changed Payload config needs a database migration. I had not run one.

That should have been a five-minute fix. Instead, I spent days deep in build infrastructure.

## How AI became part of the problem

When the error appeared, I asked an AI assistant to investigate. I described what I saw — 500 errors after adding a collection — and the AI did what AI does: it generated a thorough diagnosis.

The problem was that I had not done any diagnosis myself first. I did not know whether the error was a schema problem, a config problem, a database problem, or something else entirely. So the AI had no reason to start with the simplest explanation.

It went straight into Cloudflare Workers internals, OpenNext build configuration, caching layers, Durable Objects, and deployment pipelines. And because the suggestions were technically sound and well-reasoned, I followed them.

> A good AI assistant can be dangerous not when it is wrong, but when it is convincingly building the right solution to a problem you have not correctly identified.

Every fix made the system more complex. Every change was rational in isolation. But none of them addressed the actual root cause, because I had set the investigation on the wrong path from the start.

## The fix was boring

The actual fix, once I stepped back, was simple: run a Payload migration against the D1 database. One command. Five minutes.

The schema did not exist because SQLite does not create tables from Payload configs automatically. That is not a bug in Payload, Cloudflare, or SQLite. It is the expected behaviour when you use a schema-defined database. I just had not checked.

## What I am taking from this

The lesson is not about AI making mistakes. The AI was working correctly with the information I gave it. The lesson is about the order of operations when something breaks.

Before you involve AI in a diagnosis, do three things yourself:

1. **Check the simplest explanation first.** Schema, migration state, environment variables, deployment state. These take minutes to verify and save hours of misdirected debugging.
2. **Write down what you know and what you do not know.** If you cannot clearly state the expected behaviour and the actual behaviour, you are not ready to ask for help — from AI or anyone else.
3. **Scope the problem before opening the tool.** An AI assistant that can analyse your entire stack is extremely useful. That same capability becomes a liability when it starts suggesting infrastructure changes for a problem that turns out to be a missing database migration.

I still use AI for debugging. I will not stop. But I changed one thing: I do my own initial diagnosis first. I check the boring things. I confirm what the system is actually doing before I ask anyone — human or AI — to help explain why it is not doing what I expect.

> Check the simple things first. Schema. Migrations. Database state. Deployment state. Then, if the problem is still there, call in the AI.

That is the only change I needed to make. And it would have saved me days.

---

*Production note: This article was drafted with assistance from Lotte, Danny's AI assistant, and reviewed by Danny before publication.*

## Metadata

| Field | Value |
|-------|-------|
| **Slug** | when-ai-helped-me-build-a-solution-to-the-wrong-problem |
| **Meta description** | I asked AI to fix 500 errors after adding a Payload collection. Because I had not diagnosed the root cause myself, the AI had no reason to start with the simplest explanation — and helped me build a very sophisticated fix for the wrong problem. |
| **Social title** | When AI helped me build a solution to the wrong problem |
| **Social description** | A good AI assistant can be dangerous not when it is wrong, but when it is convincingly building the right solution to a problem you have not correctly identified. |
| **Related articles** | When a working Payload deployment became a build-system problem |
| **Related projects** | DannyMoons.nl |