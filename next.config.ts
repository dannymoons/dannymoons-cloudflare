import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

import { redirects } from './redirects'

const __filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(__filename)

const NEXT_PUBLIC_SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  process.env.__NEXT_PRIVATE_ORIGIN ||
  'http://localhost:3000'

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ['./node_modules/@payloadcms/ui/dist/scss/'],
  },
  images: {
    deviceSizes: [480, 768, 1200, 1920],
    imageSizes: [150],
    qualities: [100],
    localPatterns: [
      {
        pathname: '/api/media/file/**',
      },
      {
        pathname: '/media/**',
      },
    ],
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', '') as 'http' | 'https',
        }
      }),
    ],
  },
  // Packages with Cloudflare Workers (workerd) specific code
  // Read more: https://opennext.js.org/cloudflare/howtos/workerd
  // `@payloadcms/drizzle/sqlite` hosts Payload's `requireDrizzleKit`, which CJS-requires
  // `drizzle-kit/api` (schema-push tooling that is dead at runtime). Turbopack externalizes it
  // as a hashed chunk (e.g. `drizzle-kit-<hash>/api`) that OpenNext's esbuild cannot resolve.
  // Externalizing the importing module instead leaves a plain specifier that esbuild resolves.
  // `drizzle-kit` is a direct devDependency so that specifier resolves during the OpenNext build.
  serverExternalPackages: ['@payloadcms/drizzle/sqlite', 'drizzle-kit', 'jose', 'pg-cloudflare', 'sharp'],
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
  reactStrictMode: true,
  redirects,
  turbopack: {
    root: path.resolve(dirname),
    resolveAlias: {
      // Payload statically imports `next/og.js` for its auto-registered `/api/og`
      // endpoint, dragging ~2.6 MiB of `@vercel/og` (resvg.wasm, index.node/edge,
      // yoga.wasm, fonts) into every payload route. The site never generates OG
      // images (`admin.meta.defaultOGImageType: 'off'`), so alias the only
      // importer to a stub to keep the Workers bundle under the gzip size limit.
      'next/og.js': './src/lib/og-shim.ts',
    },
  },
  experimental: {
    useTypeScriptCli: true,
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
