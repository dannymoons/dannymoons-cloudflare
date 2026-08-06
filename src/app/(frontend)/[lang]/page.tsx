import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { staticAlternates } from '@/utilities/locale'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utilities/site'

import styles from './home.module.css'

export const revalidate = 31536000

const faqItems = [
  {
    question: 'Do you only build sustainable websites?',
    answer:
      'Sustainability is a lens, not a ceiling. The practice comes down to good engineering: leaner, faster, more maintainable work. Better performance usually means less burden too.'
  },
  {
    question: "What's your stack?",
    answer:
      'Mostly Next.js + Payload and WordPress + ACF. I choose around the problem, not the trend, and I try to keep the stack boring enough to maintain.'
  },
  {
    question: 'Do you work on existing sites?',
    answer:
      'Yes. Auditing, optimisation, and cleanups count for a lot. A rebuild is not always the answer — fewer wrong decisions often is.'
  },
  {
    question: "I'm an organisation, not a developer — who do I talk to?",
    answer:
      'For client and agency work, that is Moonsio. This site holds the ideas and lessons; Carbonfooter and Pixel to Planet cover the measurement and climate angles.'
  }
]

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    locale: 'en',
    sort: '-publishedAt',
    where: {
      postType: { equals: 'field-note' }
    },
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
      publishedAt: true
    }
  })

  const fieldNotes = docs.map(post => {
    const category = (post.categories ?? []).find(
      value => typeof value === 'object' && value?.title
    )
    return {
      id: post.id,
      slug: post.slug,
      title: post.title ?? 'Untitled',
      topic:
        typeof category === 'object' && category?.title
          ? category.title
          : 'Field note',
      excerpt: post.meta?.description ?? ''
    }
  })

  return (
    <main className='overflow-hidden'>
      <section className={`${styles.hero} relative border-border border-b`}>
        <div className={styles.gridBackdrop} aria-hidden='true' />
        <Container size='wide' className='relative py-20 sm:py-28 lg:py-36'>
          <div className='grid items-center gap-16 lg:grid-cols-[minmax(0,1.18fr)_minmax(26rem,0.82fr)] lg:gap-12'>
            <div className='relative z-10'>
              <p className='mb-8 flex items-center gap-3 font-medium font-mono text-[0.68rem] text-primary uppercase tracking-[0.1em] sm:text-xs'>
                <span className='size-1.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]' />
                Sustainable web developer
              </p>
              <Heading
                headingLevel='h1'
                size='xl'
                color='foreground'
                className='max-w-4xl font-semibold text-4xl leading-[0.94] tracking-[-0.055em] sm:text-5xl lg:text-6xl'
              >
                <span className='block'>Building software that is</span>
                <span className='block text-primary'>faster, smarter,</span>
                <span className='block'>and more sustainable.</span>
              </Heading>
              <p className='mt-8 max-w-2xl text-base text-muted-foreground leading-7 sm:text-lg sm:leading-8'>
                Hi, I&apos;m Danny. I build sustainable websites, tools and
                explore how we can utilise modern web architecture to create
                digital products that work better for people and planet.
              </p>
              <div className='mt-10 flex flex-wrap gap-3'>
                <Link
                  href='/posts'
                  className='group inline-flex h-12 items-center gap-3 rounded-full bg-primary px-6 font-semibold text-primary-foreground text-sm transition-transform duration-300 hover:-translate-y-0.5'
                >
                  Read my field notes
                  <ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </Link>
                <Link
                  href='#work'
                  className='group inline-flex h-12 items-center gap-3 rounded-full border border-border bg-surface/60 px-6 font-semibold text-foreground text-sm transition-colors hover:border-foreground/30 hover:bg-elevated'
                >
                  What I work on
                </Link>
              </div>
            </div>

            <figure className='relative mx-auto w-full max-w-[34rem] lg:ml-auto'>
              <div className={styles.systemMap}>
                <div className={styles.orbitOne} />
                <div className={styles.orbitTwo} />
                <div className={styles.mapCore}>
                  <span>Danny</span>
                  <strong>Moons</strong>
                </div>
                <div className={styles.node1}>
                  <span className='block whitespace-pre-line'>
                    Sustainable{`\n`}systems
                  </span>
                </div>
                <div className={styles.node2}>AI agents</div>
                <div className={styles.node3}>
                  <span className='block whitespace-pre-line'>
                    Measurements
                  </span>
                </div>
              </div>
              <figcaption className='sr-only'>
                [ One connected practice ]
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <section id='notes' className='border-border border-b py-section-lg'>
        <Container size='wide'>
          <div className='grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end'>
            <div>
              <Heading headingLevel='h2' size='xl' color='foreground'>
                My latest tinkering and experiments.
              </Heading>
            </div>
            <p className='max-w-xl text-base text-muted-foreground leading-7 lg:justify-self-end'>
              Not a stream of fleeting takes, but useful notes from real
              projects: ideas, experiments, and lessons that are still evolving.
            </p>
          </div>

          <div className='mt-14 border-border border-t'>
            {fieldNotes.length > 0 ? (
              fieldNotes.map((note, i) => (
                <Note
                  key={note.id}
                  index={String(i + 1).padStart(2, '0')}
                  topic={note.topic}
                  title={note.title}
                  href={`/posts/${note.slug}`}
                >
                  {note.excerpt}
                </Note>
              ))
            ) : (
              <p className='py-8 text-muted-foreground text-sm'>
                No field notes yet — the first experiments are still brewing.
              </p>
            )}
          </div>
          <Link
            href='/posts'
            className='group mt-10 inline-flex items-center gap-3 font-semibold text-foreground text-sm'
          >
            Browse all notes
            <ArrowRight className='size-4 text-primary transition-transform group-hover:translate-x-1' />
          </Link>
        </Container>
      </section>

      <section
        id='work'
        className='relative border-border border-b bg-surface/40 py-section-lg'
      >
        <Container size='wide'>
          <div className='grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end'>
            <div>
              <Heading headingLevel='h2' size='xl' color='foreground'>
                Where the thinking becomes building.
              </Heading>
            </div>
            <p className='max-w-xl text-base text-muted-foreground leading-7 lg:justify-self-end'>
              I keep coming back to the same practice: build what's needed,
              build it well, and stay honest about the impact. Each project
              approaches it differently — and they inform each other. This
              website is where I share what that looks like.
            </p>
          </div>

          <div className='mt-14 grid gap-3 lg:grid-cols-12'>
            <ProjectCard
              index='01'
              type='The company'
              title='Moonsio'
              className='lg:col-span-7'
            >
              Where sustainable software becomes client work. Custom sites,
              technical strategy, and engineering that stays lean by default.
            </ProjectCard>
            <ProjectCard
              index='02'
              type='The initiative'
              title='Pixel to Planet'
              className='lg:col-span-5'
            >
              Together with Merel Witteman: an invitation to take the physical
              impact behind every digital product seriously.
            </ProjectCard>
            <ProjectCard
              index='03'
              type='The tool'
              title='Carbonfooter'
              className='lg:col-span-4'
            >
              Measures the carbon footprint of websites so teams can see the
              real cost of their pages — with a developer API on the way.
            </ProjectCard>
            <ProjectCard
              index='04'
              type='The product — coming soon'
              title='Orbit'
              className='lg:col-span-8'
            >
              Makes website impact and performance visible, so teams can improve
              with intent.
            </ProjectCard>
          </div>
        </Container>
      </section>

      <section id='thesis' className='border-border border-b py-section-lg'>
        <Container size='wide'>
          <div className='grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20'>
            <div>
              <Heading headingLevel='h2' size='lg' color='foreground'>
                Three forces, one practice.
              </Heading>
            </div>
            <div>
              <p className='max-w-4xl text-2xl text-foreground/92 leading-[1.35] tracking-[-0.025em] sm:text-3xl sm:leading-[1.3]'>
                The next generation of software should not be defined by one new
                framework. It will emerge where responsibility, intelligence,
                and clear technical judgment reinforce each other.
              </p>
              <div className='mt-14 grid border-border border-t md:grid-cols-3'>
                <Force number='01' title='More sustainable'>
                  Less data, less energy, and less complexity, without
                  compromising what people genuinely need.
                </Force>
                <Force number='02' title='More intelligent'>
                  AI as part of the system: deliberately designed,
                  understandable, and focused on useful work.
                </Force>
                <Force number='03' title='More human'>
                  Good technology expands insight and agency. Judgment remains
                  more important than tooling.
                </Force>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id='faq'
        className='border-border border-b bg-surface/40 py-section-lg'
      >
        <Container size='wide'>
          <div className='grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-16'>
            <div className='lg:sticky lg:top-24'>
              <p className='flex items-center gap-3 font-medium font-mono text-[0.68rem] text-primary uppercase tracking-[0.1em] sm:text-xs'>
                <span className='size-1.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]' />
                FAQ
              </p>
              <Heading
                headingLevel='h2'
                size='xl'
                color='foreground'
                className='mt-4 max-w-sm font-semibold'
              >
                Questions I hear a lot.
              </Heading>
              <p className='mt-6 max-w-md text-base text-muted-foreground leading-7'>
                Straight answers to the questions that come up most, without the
                sales talk.
              </p>
            </div>

            <div className='border-border border-t'>
              <Accordion type='single' collapsible className='w-full'>
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className='border-border'
                  >
                    <AccordionTrigger className='group/faq **:data-[slot=accordion-trigger-icon]:hidden! flex cursor-pointer items-center gap-5 rounded-none border-0 px-0 py-6 text-left hover:no-underline focus-visible:ring-0 sm:py-7'>
                      <span className='shrink-0 font-mono text-[0.65rem] text-primary tracking-[0.16em]'>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className='flex-1 font-medium text-foreground/92 text-lg leading-7 tracking-[-0.02em] transition-colors group-hover/faq:text-foreground sm:text-xl sm:leading-8'>
                        {item.question}
                      </span>
                      <span className='flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-aria-expanded/accordion-trigger:border-primary group-aria-expanded/accordion-trigger:text-primary'>
                        <ChevronDown className='size-4 transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-180' />
                      </span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className=''>
                        <p className='max-w-2xl text-muted-foreground text-sm leading-7 sm:text-base sm:leading-7'>
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>

      <section id='about' className='py-section-lg'>
        <Container size='narrow'>
          <div>
            <Heading headingLevel='h2' size='xl' color='foreground'>
              Personal, practical, and always evolving.
            </Heading>
            <p className='mt-8 max-w-3xl text-muted-foreground text-xl leading-8 sm:text-2xl sm:leading-9'>
              This is my public knowledge base. I write to think more clearly,
              show how ideas hold up in practice, and help others make software
              that earns its place in the world.
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}

function SectionLabel({
  children,
  index
}: {
  children: ReactNode
  index: string
}) {
  return (
    <div className='flex items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.18em]'>
      <span className='text-primary'>{index}</span>
      <span className='h-px w-8 bg-border' />
      <span className='text-muted-foreground'>{children}</span>
    </div>
  )
}

function Force({
  children,
  number,
  title
}: {
  children: ReactNode
  number: string
  title: string
}) {
  return (
    <div className='border-border border-b py-7 md:border-r md:border-b-0 md:px-6 md:last:border-r-0 md:last:pr-0 md:first:pl-0'>
      <span className='font-mono text-[0.65rem] text-primary tracking-[0.16em]'>
        {number}
      </span>
      <Heading
        headingLevel='h3'
        size='sm'
        color='foreground'
        className='mt-5 font-semibold text-lg'
      >
        {title}
      </Heading>
      <p className='mt-3 text-muted-foreground text-sm leading-6'>{children}</p>
    </div>
  )
}

function ProjectCard({
  children,
  className,
  index,
  title,
  type
}: {
  children: ReactNode
  className: string
  index: string
  title: string
  type: string
}) {
  return (
    <article
      className={`${styles.projectCard} ${className} group relative min-h-72 overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface p-7 sm:p-9`}
    >
      <div className='relative z-10 flex h-full flex-col'>
        <div className='flex items-center justify-between'>
          <span className='font-mono text-[0.64rem] text-primary uppercase tracking-[0.18em]'>
            {type}
          </span>
          <span className='font-mono text-[0.64rem] text-muted-foreground'>
            {index}
          </span>
        </div>
        <div className='mt-auto pt-16'>
          <Heading
            headingLevel='h3'
            size='md'
            color='foreground'
            className='font-medium text-3xl tracking-[-0.035em] sm:text-4xl'
          >
            {title}
          </Heading>
          <p className='mt-4 max-w-xl text-muted-foreground text-sm leading-6 sm:text-base sm:leading-7'>
            {children}
          </p>
        </div>
      </div>
    </article>
  )
}

function Note({
  children,
  href,
  index,
  title,
  topic
}: {
  children: ReactNode
  href?: string
  index: string
  title: string
  topic: string
}) {
  const titleContent = href ? (
    <Link href={href} className='transition-colors hover:text-primary'>
      {title}
    </Link>
  ) : (
    title
  )
  return (
    <article className='group grid gap-5 border-border border-b py-8 transition-colors md:flex md:items-start md:gap-8 md:py-10'>
      <span className='font-mono text-base text-muted-foreground md:w-10'>
        {index}
      </span>
      <div className='md:w-full'>
        <span className='mb-2 font-mono text-[0.62rem] text-primary uppercase tracking-[0.16em]'>
          {topic}
        </span>
        <Heading headingLevel='h3' size='md' color='foreground'>
          {titleContent}
        </Heading>
      </div>
      <p className='max-w-2xl text-muted-foreground text-sm leading-6 sm:text-base sm:leading-7'>
        {children}
      </p>
    </article>
  )
}

export function generateMetadata(): Metadata {
  const title =
    'Danny Moons · Sustainable software, AI, and the future of the web'
  const alternates = staticAlternates('/')

  return {
    title,
    description: SITE_DESCRIPTION,
    alternates: {
      canonical: alternates.en,
      languages: { en: alternates.en, 'x-default': alternates.en }
    },
    openGraph: mergeOpenGraph({
      title,
      description: SITE_DESCRIPTION,
      siteName: SITE_NAME,
      url: alternates.en
    })
  }
}
