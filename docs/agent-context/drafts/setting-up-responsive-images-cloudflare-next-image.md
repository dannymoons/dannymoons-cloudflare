---
title: "Setting up responsive images with Cloudflare and next/image"
slug: setting-up-responsive-images-cloudflare-next-image
description: "How I connected Payload CMS, R2, and Cloudflare Image Transformations with next/image — the custom loader, the /cdn-cgi/image/ path, and the gotchas that took me from broken images to responsive srcsets."
date: 2026-08-26
categories: [Modern Web, Performance]
tags: [nextjs, next-image, cloudflare-images, responsive-images, payload-cms, cloudflare-r2, image-optimization, performance]
post-type: blog
status: published
related-posts: [manually-deploying-nextjs-payload-to-cloudflare, so-i-got-curious-about-payload-cms-with-nextjs]
---

# Setting up responsive images with Cloudflare and next/image

I had Payload CMS deployed on Cloudflare. Media was stored in R2. The original URL worked. But images were being served as full-resolution originals — no WebP, no responsive candidates, no width-aware selection. The page was doing a lot of work to download images that were too large for the viewport they appeared in. So not sustainable by any means.

The problem was image delivery, not image storage. And fixing it required understanding how four separate systems interact: Payload, R2, Cloudflare Image Transformations, and `next/image`.

This article covers the problems I hit, how each failed, and what the working pipeline looks like now.

## The architecture goal

```
Payload media URL → next/image → Cloudflare Image Transformations
                              → responsive srcset → browser
```

Payload serves the original file reference. `next/image` generates responsive candidates. Cloudflare Image Transformations resizes, formats, and caches at the edge. The browser picks the best candidate.

## Problem 1: next/image worked, but there was no useful srcset

**Symptom:** Images rendered through `next/image`, but the browser received the original full-resolution image. No responsive candidates. No WebP. No width negotiation.

**Cause:** Using `next/image` with the original Payload URL does not automatically tell Cloudflare how to resize the image. Without a custom loader, `next/image` has no transformation endpoint to request candidates from.

**Fix:** Add a custom loader that maps Next.js' requested width to a Cloudflare Image Transformation URL.

```typescript
// lib/cloudflare-image-loader.ts
export function cloudflareLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const allowedWidths = [150, 480, 768, 1200, 1920]
  const actualWidth = allowedWidths.reduce((prev, curr) =>
    Math.abs(curr - width) < Math.abs(prev - width) ? curr : prev
  )
  const q = quality ?? 82
  const cdn = process.env.NEXT_PUBLIC_MEDIA_CDN_URL || ''
  return `${cdn}/cdn-cgi/image/width=${actualWidth},format=auto,fit=scale-down,quality=${q}${src}`
}
```

The URL Cloudflare receives looks like:

```
/cdn-cgi/image/width=768,format=auto,fit=scale-down,quality=82/api/media/file/image-1
```

**Result:** `next/image` handles `srcset`, `sizes`, lazy loading, dimensions, and priority loading. Cloudflare handles resizing, format negotiation (WebP/AVIF), CDN caching, and edge delivery.

## Problem 2: No custom domain for /cdn-cgi/image/

**Symptom:** The Cloudflare transformation URL could not be tested reliably through the Worker's `workers.dev` URL.

**Cause:** The `/cdn-cgi/image/` transformation interface is associated with a Cloudflare-proxied zone, not with any Worker hostname. A `workers.dev` subdomain is not a proxied zone.

**Fix:** Attach a custom domain to the Worker. Once the domain is proxied through Cloudflare, transformation URLs work:

```
https://cms.example.com/cdn-cgi/image/width=480,format=auto,fit=scale-down,quality=82/api/media/file/image-1
```

Cloudflare returns:

- `200` status
- A transformed image
- `cf-resized` response headers
- `cf-cache-status: HIT` after the first request

**Lesson:** A custom domain is not just a branding improvement. It is part of the Cloudflare Image Transformations setup. This is not obvious from the Payload or Cloudflare documentation unless you already know that `/cdn-cgi/image` is a zone-level feature, not a Worker-level feature.

## What /cdn-cgi/image/ actually does

The path `/cdn-cgi/image/` is a Cloudflare-managed edge endpoint. It is:

- Not a Next.js route
- Not a Payload endpoint
- Not a Worker handler
- Not a folder in your repository

When Cloudflare receives a request to this path, it:

1. Parses the transformation parameters from the path
2. Fetches the source image from the remaining path (your Payload media URL)
3. Resizes and reformats the image
4. Caches the result at the edge
5. Returns the transformed file

No application code needs to be written for this. No route needs to be created. It is infrastructure, not application logic.

## Problem 3: The hero image caused a production RSC error

**Symptom:** The page returned a 500 in production. The image file was valid. The original Payload URL worked. The Cloudflare transformation URL returned 200. The production build passed.

**Cause:** `HeroCoverBlock` was a React Server Component that passed the custom loader function directly into the client-side `next/image` component. Functions cannot cross the server-client component boundary in React Server Components.

**Fix:** Route the hero image through the existing client-side `ImageMedia` component. The entire hero block did not need to become a client component — only the image rendering needed to happen on the client side.

**Lesson:** A valid image URL does not guarantee that the React server-client integration is valid. Test the actual page URL in production, not just the image URL in isolation.

## Problem 4: Invalid next/image quality

**Symptom:** The hero image used `quality={80}` but the browser received unexpected results.

**Cause:** The Next.js configuration only allowed `qualities: [100]`. The component-level `quality` prop did not match the configured list. The mismatch was not caught by TypeScript or the build process.

**Fix:** Remove the component-level quality prop. The Cloudflare loader owns the delivery quality:

```typescript
quality={82} // configured in the loader, not scattered across components
```

**Lesson:** Keep image quality configuration in one place — the loader. Do not let component-level values contradict the image pipeline configuration.

## Problem 5: Nullable Payload alt text

**Symptom:** TypeScript reported:

```
Type 'string | null | undefined' is not assignable to type 'string'
```

**Cause:** Payload's `alt` field is optional (nullable), while `next/image` requires a `string` type for its `alt` prop.

**Fix:**

```typescript
alt={media.alt || ''}
```

A note on empty alt text: it is appropriate when the image is decorative. Meaningful images should receive useful alt text in the CMS. This fix makes the component resilient to both cases.

## Problem 6: Build passed but runtime still failed

This one deserves its own section because it is the most frustrating pattern: a green build that produces a broken page.

The production build successfully completed:

- TypeScript compilation
- Static generation
- OpenNext bundling
- Worker deployment

But the page still returned a runtime 500.

The debugging process showed why both build-time and runtime testing matter:

| Check | Passes? | Catches |
|-------|---------|---------|
| `pnpm tsc --noEmit` | ✓ | Incorrect data types |
| `pnpm build` | ✓ | Compilation and generation |
| OpenNext build | ✓ | Worker bundle integrity |
| Production page request | ✗ | RSC serialization, runtime component errors |
| Direct media URL | ✓ | Payload media path |
| Transformation URL | ✓ | Cloudflare Image Transformations |
| Browser DevTools srcset | ✓ | Responsive candidate generation |

The RSC boundary error (Problem 3) was invisible to every build-time check. Only a production request revealed it.

**My verification sequence now:**

1. `pnpm tsc --noEmit`
2. `pnpm build`
3. OpenNext build
4. Deploy
5. Request the affected page
6. Request the original media URL
7. Request a Cloudflare transformation URL
8. Inspect browser `srcset` and network requests

## Security and operational boundaries

The current safeguards:

- Fixed widths: 150, 480, 768, 1200, 1920
- Fixed format (`format=auto`) and fit (`fit=scale-down`)
- Fixed quality (`quality=82`)
- Fixed CDN hostname in the loader
- Payload controls upload permissions
- Public read access is limited to intentionally public media

Do not accept arbitrary source URLs for transformation. Keep transformation parameters controlled. The main operational concern is uncontrolled transformation requests, not access to R2 credentials.

## Should images be converted before R2?

This is a separate decision for later. The current approach is:

**Keep originals in R2 and transform at delivery time.**

Reasons:

- Preserves originals for reuse
- Avoids a custom upload pipeline
- Supports multiple responsive widths
- Supports automatic WebP/AVIF negotiation
- Keeps Payload's media model straightforward

Other options for future consideration:

| Approach | When to consider |
|----------|-----------------|
| Convert in a custom upload Worker | When originals are very large |
| Generate derivatives after R2 upload | For an async pipeline |
| Compress in the browser | For large user uploads |
| Move to Cloudflare Images | Only if hosted image management is needed |

## What I would do differently

1. **Add the custom loader on day one.** Do not wait until you see full-resolution images on mobile. The loader is a small, testable piece of code.
2. **Attach the custom domain before debugging transformations.** Without it, you will waste time wondering why `/cdn-cgi/image/` does not work.
3. **Use a client-compatible image component from the start.** If you have both server and client components rendering images, a shared `ImageMedia` component prevents the RSC boundary problem.

The working pipeline turned out to be simpler than I expected. Payload serves the reference. Cloudflare transforms the image. `next/image` makes the browser choose well. Each system does one thing, and the combination works without custom infrastructure between them.
