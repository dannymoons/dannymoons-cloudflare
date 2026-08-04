# Agents

This project uses the Payload CMS skill at `.claude/skills/payload/`.
Start with `.claude/skills/payload/SKILL.md` for a quick reference, then see `.claude/skills/payload/reference/` for detailed docs.

## Required project context

Before doing content, SEO, accessibility, CMS, copywriting, or brand work, read:

- `docs/agent-context/brand-voice.md`
- `docs/agent-context/company-brain.md`

These files are the source of truth for the Danny Moons personal brand voice, audience, positioning, and content rules.

## Approval gates

Agents may autonomously:
- inspect repo and CMS content
- audit existing content
- draft content improvements
- suggest SEO metadata and alt text
- create local draft/proposal files under `docs/agent-context/drafts/`

Agents may not without explicit human approval:
- publish CMS content
- edit live CMS content
- delete pages, posts, media, or redirects
- make strong claims about sustainability, experience, or outcomes without sourcing
- send content to clients or third parties
- merge, deploy, or change production infrastructure
- change CMS content models or code

## CMS structure

This is a Payload CMS + Next.js project on Cloudflare.
For CMS-related work inspect `src/payload.config.ts` and relevant collections, globals, and blocks.

## Agent context drift rule

The source of truth for the CMS model is the code.
`docs/agent-context/` files are derived summaries. If code and context conflict, trust the code and flag the docs as stale.