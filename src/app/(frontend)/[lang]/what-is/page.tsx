import type { Metadata } from 'next'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

import type { Glossary } from '@/payload-types'
import { Container } from '@/components/layout/container'
import { staticAlternates } from '@/utilities/locale'

import GlossaryIndex from './page.client'

export const revalidate = 600

export default async function WhatIsPage() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'glossary',
    depth: 1,
    draft: false,
    limit: 1000,
    locale: 'en',
    overrideAccess: false,
    pagination: false,
    select: {
      title: true,
      slug: true,
      markdown: true,
      aliases: true,
      tags: true
    },
    sort: 'title'
  })

  const entries = docs.map(entry => ({
    aliases: (entry.aliases ?? []).map(alias => alias.alias),
    description: getSummary(entry.markdown),
    slug: entry.slug,
    tags: (entry.tags ?? []).flatMap(tag =>
      typeof tag === 'object' ? [{ slug: tag.slug, title: tag.title }] : []
    ),
    title: entry.title
  }))

  return (
    <main className='overflow-hidden'>
      <section className='relative border-border border-b'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,oklch(1_0_0_/_0.045)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0_/_0.045)_1px,transparent_1px)] [background-size:clamp(2.5rem,6vw,5rem)_clamp(2.5rem,6vw,5rem)] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]'
        />
        <Container size='wide' className='relative py-16 sm:py-28 lg:py-36'>
          <div className='grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:items-end lg:gap-20'>
            <div>
              <p className='mb-7 flex items-center gap-3 font-medium font-mono text-[0.68rem] text-primary uppercase tracking-[0.16em] sm:text-xs'>
                <span className='size-1.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]' />
                A working glossary
              </p>
              <h1 className='max-w-4xl font-heading font-semibold text-5xl leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl'>
                What is <span className='text-primary'>that?</span>
              </h1>
            </div>
            <div className='max-w-md lg:justify-self-end'>
              <p className='text-xl text-foreground/90 leading-8 tracking-[-0.025em] sm:text-2xl sm:leading-9'>
                Plain-English explanations for the tools, ideas, and trade-offs
                behind the web I build.
              </p>
              <p className='mt-5 text-muted-foreground text-sm leading-6'>
                No textbook definitions. Just enough context to make a better
                technical decision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className='border-border border-b py-section pb-28 sm:pb-section'>
        <Container size='wide'>
          <GlossaryIndex entries={entries} />
        </Container>
      </section>
    </main>
  )
}

function getSummary(markdown: Glossary['markdown']) {
  if (!markdown) return 'A practical explanation, with the useful bits up front.'

  const summary = markdown
    .replace(/^---[\s\S]*?---\s*/u, '')
    .split(/\n\s*\n/u)
    .map(paragraph => paragraph.replace(/[*_`>#\[\]]/g, '').trim())
    .find(Boolean)

  return summary ?? 'A practical explanation, with the useful bits up front.'
}

export function generateMetadata(): Metadata {
  const title = 'What is what? · Danny Moons'
  const description =
    'Plain-English explanations for the tools, ideas, and trade-offs behind the web Danny Moons builds.'
  const alternates = staticAlternates('/what-is')

  return {
    title,
    description,
    alternates: {
      canonical: alternates.en,
      languages: { en: alternates.en, 'x-default': alternates.en }
    }
  }
}
