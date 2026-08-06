import type { Metadata } from 'next'
import { cache } from 'react'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Heading } from '@/components/content/heading'
import { LivePreviewListener } from '@/components/payload/live-preview-listener'
import { PayloadRedirects } from '@/components/payload/payload-redirects'
import { generateMeta } from '@/utilities/generateMeta'
import { getLocaleAlternates } from '@/utilities/getLocaleAlternates'
import { staticAlternates } from '@/utilities/locale'

import PageClient from './page.client'

type Args = {
  params: Promise<{
    slug?: string
    lang?: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const entries = await payload.find({
    collection: 'glossary',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    locale: 'en',
    select: {
      slug: true
    }
  })

  return entries.docs.map(({ slug }) => ({ slug, lang: 'en' }))
}

export default async function GlossaryEntryPage({
  params: paramsPromise
}: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = `/what-is/${decodedSlug}`
  const entry = await queryGlossaryBySlug(decodedSlug)

  if (!entry) return <PayloadRedirects url={url} />

  const content = entry.content as unknown as Parameters<
    typeof RichTextBasic
  >[0]['data'] | null

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <section className='border-border border-b pt-section-sm pb-section-lg'>
        <Container size='narrow'>
          <Heading headingLevel='h1' size='lg' color='white' className='mb-8'>
            {entry.title}
          </Heading>

          {content ? (
            <RichTextBasic
              data={content}
              className='gap-6 [&_a]:text-primary [&_a]:decoration-primary/40 [&_blockquote]:my-10 [&_blockquote]:border-primary [&_blockquote]:border-l-2 [&_blockquote]:pl-6 [&_blockquote]:font-medium [&_blockquote]:text-2xl [&_blockquote]:text-foreground [&_blockquote]:leading-9 [&_h1:first-child]:hidden [&_h2]:mt-12 [&_h3]:mt-8 [&_li::marker]:text-primary [&_li]:text-lg [&_li]:text-muted-foreground [&_li]:leading-8 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-7 [&_p]:text-muted-foreground [&_p]:leading-8 [&_strong]:text-foreground [&_ul]:my-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-7'
            />
          ) : null}
        </Container>
      </section>
    </article>
  )
}

export async function generateMetadata({
  params: paramsPromise
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const entry = await queryGlossaryBySlug(decodedSlug)

  const entryId = (entry as { id?: string | number } | null)?.id
  const alternates = entryId
    ? await getLocaleAlternates({ collection: 'glossary', id: entryId })
    : staticAlternates(`/what-is/${decodedSlug}`)

  return generateMeta({ doc: entry, alternates, locale: 'en' })
}

const queryGlossaryBySlug = cache(async (slug: string) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'glossary',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    locale: 'en',
    where: {
      slug: {
        equals: slug
      }
    }
  })

  return result.docs?.[0] || null
})
