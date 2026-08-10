import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Page } from '../../../payload-types'

const locales = ['en'] as const

export const revalidatePage: CollectionAfterChangeHook<Page> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published' && doc.slug) {
      for (const locale of locales) {
        const path = doc.slug === 'home' ? `/${locale}` : `/${locale}/${doc.slug}`

        payload.logger.info(`Revalidating page at path: ${path}`)

        revalidatePath(path)
      }
      revalidatePath('/sitemap.xml')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published' && previousDoc.slug) {
      for (const locale of locales) {
        const oldPath = previousDoc.slug === 'home' ? `/${locale}` : `/${locale}/${previousDoc.slug}`

        payload.logger.info(`Revalidating old page at path: ${oldPath}`)

        revalidatePath(oldPath)
      }
      revalidatePath('/sitemap.xml')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Page> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate && doc?.slug) {
    for (const locale of locales) {
      const path = doc.slug === 'home' ? `/${locale}` : `/${locale}/${doc.slug}`
      revalidatePath(path)
    }
    revalidatePath('/sitemap.xml')
  }

  return doc
}
