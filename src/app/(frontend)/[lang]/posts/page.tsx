import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { PostsArchive } from '@/components/sections/posts-archive'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

const POSTS_PER_PAGE = 12

export function generateStaticParams() {
  return [{ lang: 'en' }]
}

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: POSTS_PER_PAGE,
    overrideAccess: false,
    locale: 'en',
    select: {
      title: true,
      slug: true,
      categories: true,
      tags: true,
      postType: true,
      meta: true
    }
  })

  return (
    <div className='pt-24'>
      <PageClient />
      <PostsArchive
        posts={posts.docs}
        heading='Articles'
        description='Read the latest articles, insights, and updates from Danny.'
        page={posts.page ?? 1}
        totalPages={posts.totalPages}
      />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Articles',
    description: 'Read the latest articles, insights, and updates from Danny.'
  }
}
