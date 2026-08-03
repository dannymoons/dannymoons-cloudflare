import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import config from '@payload-config'
import { MediaImage } from '../../media-image.client'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const payload = await getPayload({ config: await config })

  const { docs } = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
    },
  })
  const post = docs[0]

  if (!post) {
    notFound()
  }

  const { title, featuredImage } = post

  return (
    <main>
      <header>
        {featuredImage &&
          typeof featuredImage !== 'number' &&
          featuredImage.url &&
          featuredImage.width &&
          featuredImage.height && (
            <MediaImage
              alt={featuredImage.alt}
              id={featuredImage.id}
              width={featuredImage.width}
              height={featuredImage.height}
              updatedAt={featuredImage.updatedAt}
            />
          )}
      </header>
      <h1>{title}</h1>
      <div></div>
    </main>
  )
}
