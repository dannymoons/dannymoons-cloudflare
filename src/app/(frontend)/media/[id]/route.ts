import { getCloudflareContext } from '@opennextjs/cloudflare'
import config from '@payload-config'
import { getPayload } from 'payload'

const widths = new Set([150, 480, 768, 1200, 1920])
const supportedMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif'])
const maxImageSize = 20 * 1024 * 1024

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const width = Number(new URL(request.url).searchParams.get('w'))

  if (!Number.isInteger(width) || !widths.has(width)) {
    return new Response('Unsupported image width', { status: 400 })
  }

  const cache = await caches.open('media-transforms')
  const cacheKey = request.url
  const cachedResponse = await cache.match(cacheKey)

  if (cachedResponse) {
    return cachedResponse
  }

  const payload = await getPayload({ config: await config })
  const media = await payload.findByID({
    collection: 'media',
    id,
    depth: 0,
  })

  if (!media.filename) {
    return new Response('Image not found', { status: 404 })
  }

  const { env, ctx } = await getCloudflareContext({ async: true })
  const object = await env.R2.get(media.filename)

  if (!object?.body) {
    return new Response('Image not found', { status: 404 })
  }

  const contentType = object.httpMetadata?.contentType

  if (!contentType || !supportedMimeTypes.has(contentType)) {
    return new Response('Unsupported image type', { status: 415 })
  }

  if (object.size > maxImageSize) {
    return new Response('Image exceeds the 20 MB transformation limit', { status: 413 })
  }

  const response = (
    await env.IMAGES.input(object.body)
      .transform({
        fit: 'scale-down',
        width,
      })
      .output({
        format: 'image/webp',
        quality: 82,
      })
  ).response()

  const headers = new Headers(response.headers)
  headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  headers.set('Content-Type', 'image/webp')

  const transformedResponse = new Response(response.body, {
    headers,
    status: response.status,
  })

  ctx.waitUntil(cache.put(cacheKey, transformedResponse.clone()))

  return transformedResponse
}
