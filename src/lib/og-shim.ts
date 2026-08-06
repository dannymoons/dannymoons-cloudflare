/**
 * Build-time stand-in for `next/og.js` (used only by Payload's unused `/api/og`
 * route, which we disable). Returning a benign Response keeps the route handler
 * shape valid while avoiding the ~2.6 MiB of @vercel/og wasm/libs bloating the
 * Workers bundle. This module is never invoked at runtime because Open Graph
 * images are disabled via `admin.meta.defaultOGImageType: 'off'`.
 */
export class ImageResponse extends Response {
  constructor(..._args: unknown[]) {
    super('Open Graph images are disabled', { status: 501 })
  }
}