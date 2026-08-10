import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Glossary } from '../../../payload-types'

const locales = ['en'] as const

export const revalidateGlossary: CollectionAfterChangeHook<Glossary> = ({
  doc,
  previousDoc,
  req: { payload, context }
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published' && doc.slug) {
      for (const locale of locales) {
        const path = `/${locale}/what-is/${doc.slug}`

        payload.logger.info(`Revalidating glossary entry at path: ${path}`)

        revalidatePath(path)
      }
      revalidatePath('/')
      revalidatePath('/en')
      revalidatePath('/sitemap.xml')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published' && previousDoc.slug) {
      for (const locale of locales) {
        const oldPath = `/${locale}/what-is/${previousDoc.slug}`

        payload.logger.info(`Revalidating old glossary entry at path: ${oldPath}`)

        revalidatePath(oldPath)
      }
      revalidatePath('/sitemap.xml')
    }
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Glossary> = ({
  doc,
  req: { context }
}) => {
  if (!context.disableRevalidate && doc?.slug) {
    for (const locale of locales) {
      const path = `/${locale}/what-is/${doc.slug}`

      revalidatePath(path)
    }
    revalidatePath('/sitemap.xml')
  }

  return doc
}
