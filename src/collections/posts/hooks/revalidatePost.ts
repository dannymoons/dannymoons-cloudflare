import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Post } from '../../../payload-types'

const locales = ['en'] as const

export const revalidatePost: CollectionAfterChangeHook<Post> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published' && doc.slug) {
      for (const locale of locales) {
        const path = `/${locale}/posts/${doc.slug}`

        payload.logger.info(`Revalidating post at path: ${path}`)

        revalidatePath(path)
      }
      revalidatePath('/')
      revalidatePath('/en')
      revalidatePath('/sitemap.xml')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published' && previousDoc.slug) {
      for (const locale of locales) {
        const oldPath = `/${locale}/posts/${previousDoc.slug}`

        payload.logger.info(`Revalidating old post at path: ${oldPath}`)

        revalidatePath(oldPath)
      }
      revalidatePath('/sitemap.xml')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Post> = ({ doc, req: { context } }) => {
  if (!context.disableRevalidate && doc?.slug) {
    for (const locale of locales) {
      const path = `/${locale}/posts/${doc.slug}`

      revalidatePath(path)
    }
    revalidatePath('/sitemap.xml')
  }

  return doc
}
