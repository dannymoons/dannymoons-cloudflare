# Dev TODO

## Maarten: Add TableFeature to posts Lexical config

**Why:** Two upcoming article drafts (`setting-up-responsive-images-cloudflare-next-image.md`) use markdown tables. The import pipeline sends markdown → Lexical with `generateRichText: true`, but the current Lexical config doesn't include `TableFeature()` — tables may be lost or garbled.

**Where:** `src/collections/posts/index.ts`, the `lexicalEditor()` features array (~lines 186-204).

**What:** Add `TableFeature()` import and include in the features array.

**Branch:** `feat/article-payload-cloudflare-manual-deploy`

**Check:** After adding, verify with `pnpm import-posts --check` that the markdown tables in the image article render as Lexical table nodes.