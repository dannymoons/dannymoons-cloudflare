import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { sqliteD1Adapter } from '@payloadcms/db-d1-sqlite'
import { r2Storage } from '@payloadcms/storage-r2'
import { CloudflareContext, getCloudflareContext } from '@opennextjs/cloudflare'
import { buildConfig, type PayloadRequest } from 'payload'
import type { GetPlatformProxyOptions } from 'wrangler'

import { Categories } from './collections/categories'
import { Media } from './collections/media'
import { Pages } from './collections/pages'
import { Posts } from './collections/posts'
import { Tags } from './collections/tags'
import { TeamMembers } from './collections/team-members'
import { Testimonials } from './collections/testimonials'
import { Users } from './collections/users'
import { Wiki } from './collections/wiki'
import { WikiCategories } from './collections/wiki-categories'
import { Footer } from './globals/footer/config'
import { Header } from './globals/header/config'
import { Settings } from './globals/settings/config'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const realpath = (value: string) => (fs.existsSync(value) ? fs.realpathSync(value) : undefined)

const isCLI = process.argv.some((value) => realpath(value)?.endsWith(path.join('payload', 'bin.js')))
const isProduction = process.env.NODE_ENV === 'production'

const createLog =
  (level: string, fn: typeof console.log) => (objOrMsg: object | string, msg?: string) => {
    if (typeof objOrMsg === 'string') {
      fn(JSON.stringify({ level, msg: objOrMsg }))
    } else {
      fn(JSON.stringify({ level, ...objOrMsg, msg: msg ?? (objOrMsg as { msg?: string }).msg }))
    }
  }

const cloudflareLogger = {
  level: process.env.PAYLOAD_LOG_LEVEL || 'info',
  trace: createLog('trace', console.debug),
  debug: createLog('debug', console.debug),
  info: createLog('info', console.log),
  warn: createLog('warn', console.warn),
  error: createLog('error', console.error),
  fatal: createLog('fatal', console.error),
  silent: () => {},
} as any

const cloudflare =
  isCLI || !isProduction
    ? await getCloudflareContextFromWrangler()
    : await getCloudflareContext({ async: true })

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/payload/before-login'],
      beforeDashboard: ['@/components/payload/before-dashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    meta: {
      // Disable Payload's auto-generated OG images (`/api/og`). The site never
      // uses them, and without this Payload's static `next/og.js` import pulls
      // ~2.6 MiB of @vercel/og wasm into the Workers bundle. See next.config.ts.
      defaultOGImageType: 'off',
    },
    livePreview: {
      breakpoints: [
        { label: 'Mobile', name: 'mobile', width: 375, height: 667 },
        { label: 'Tablet', name: 'tablet', width: 768, height: 1024 },
        { label: 'Desktop', name: 'desktop', width: 1440, height: 900 },
      ],
    },
  },
  editor: defaultLexical,
  db: sqliteD1Adapter({
    binding: cloudflare.env.D1,
    push: false,
    // Migrations are applied via `pnpm payload migrate` / `deploy:database`
    // (not on connect) so `next build` does not mutate remote D1.
  }),
  collections: [
    Categories,
    Media,
    Pages,
    Posts,
    Tags,
    TeamMembers,
    Testimonials,
    Users,
    Wiki,
    WikiCategories,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, Settings],
  plugins: [
    ...plugins,
    r2Storage({
      bucket: cloudflare.env.R2,
      collections: { media: true },
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  logger: isProduction ? cloudflareLogger : undefined,
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
  localization: {
    locales: ['en', 'nl'],
    defaultLocale: 'en',
  },
})

// Adapted from https://github.com/opennextjs/opennextjs-cloudflare/blob/d00b3a13e42e65aad76fba41774815726422cc39/packages/cloudflare/src/api/cloudflare-context.ts#L328C36-L328C46
function getCloudflareContextFromWrangler(): Promise<CloudflareContext> {
  return import(/* webpackIgnore: true */ `${'__wrangler'.replaceAll('_', '')}`).then(
    ({ getPlatformProxy }) =>
      getPlatformProxy({
        environment: process.env.CLOUDFLARE_ENV,
        remoteBindings: isProduction,
      } satisfies GetPlatformProxyOptions),
  )
}
