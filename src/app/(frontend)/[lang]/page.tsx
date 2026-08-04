import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowDownRight, ArrowRight, ArrowUpRight } from 'lucide-react'

import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import { staticAlternates } from '@/utilities/locale'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utilities/site'

import styles from './home.module.css'

export default function HomePage() {
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
                  Read the field notes
                  <ArrowUpRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
                </Link>
                <Link
                  href='#work'
                  className='group inline-flex h-12 items-center gap-3 rounded-full border border-border bg-surface/60 px-6 font-semibold text-foreground text-sm transition-colors hover:border-foreground/30 hover:bg-elevated'
                >
                  Explore the work
                  <ArrowDownRight className='size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5' />
                </Link>
              </div>
              <div className='mt-12 grid hidden max-w-2xl grid-cols-[auto_1fr] gap-x-4 border-border border-t pt-5'>
                <span className='mt-1 font-mono text-[0.65rem] text-primary uppercase tracking-[0.16em]'>
                  Currently exploring
                </span>
                <p className='text-foreground/72 text-sm leading-6'>
                  How AI agents can help us build better software, not simply
                  more software.
                </p>
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
                    Human{`\n`}judgment
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

      <section id='thesis' className='border-border border-b py-section-lg'>
        <Container size='wide'>
          <div className='grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20'>
            <div>
              <SectionLabel index='01'>The working thesis</SectionLabel>
              <Heading
                headingLevel='h2'
                size='lg'
                color='foreground'
                className='mt-6 max-w-sm font-medium tracking-[-0.04em]'
              >
                Three forces, one practice.
              </Heading>
            </div>
            <div>
              <p className='max-w-4xl text-2xl text-foreground/92 leading-[1.35] tracking-[-0.025em] sm:text-3xl sm:leading-[1.3]'>
                The next generation of software will not be defined by one new
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
        id='work'
        className='relative border-border border-b py-section-lg'
      >
        <Container size='wide'>
          <div className='grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end'>
            <div>
              <SectionLabel index='02'>Work in motion</SectionLabel>
              <Heading
                headingLevel='h2'
                size='xl'
                color='foreground'
                className='mt-6 max-w-xl font-medium tracking-[-0.05em]'
              >
                One practice, different orbits.
              </Heading>
            </div>
            <p className='max-w-xl text-base text-muted-foreground leading-7 lg:justify-self-end'>
              Company, products, research, and initiatives all inform one
              another. DannyMoons.nl is where the lessons between them become
              visible.
            </p>
          </div>

          <div className='mt-14 grid gap-3 lg:grid-cols-12'>
            <ProjectCard
              index='01'
              type='The company'
              title='Moonsio'
              className='lg:col-span-7'
            >
              The home for sustainable digital products, technical strategy, and
              software engineering.
            </ProjectCard>
            <ProjectCard
              index='02'
              type='The product'
              title='Orbit'
              className='lg:col-span-5'
            >
              Makes website impact and performance visible, so teams can improve
              with intent.
            </ProjectCard>
            <ProjectCard
              index='03'
              type='The lab'
              title='Hermes'
              className='lg:col-span-4'
            >
              An internal agentic workflow project for building, researching,
              and connecting knowledge.
            </ProjectCard>
            <ProjectCard
              index='04'
              type='The initiative'
              title='Pixel to Planet'
              className='lg:col-span-8'
            >
              An invitation to take the physical impact behind every digital
              product seriously.
            </ProjectCard>
          </div>
        </Container>
      </section>

      <section
        id='notes'
        className='border-border border-b bg-surface/40 py-section-lg'
      >
        <Container size='wide'>
          <div className='grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-end'>
            <div>
              <SectionLabel index='03'>Open notebook</SectionLabel>
              <Heading
                headingLevel='h2'
                size='xl'
                color='foreground'
                className='mt-6 max-w-2xl font-medium tracking-[-0.05em]'
              >
                Questions that move the work forward.
              </Heading>
            </div>
            <p className='max-w-xl text-base text-muted-foreground leading-7 lg:justify-self-end'>
              Not a stream of fleeting takes, but useful notes from real
              projects: ideas, experiments, and lessons that are still evolving.
            </p>
          </div>

          <div className='mt-14 border-border border-t'>
            <Note
              index='01'
              topic='Sustainable software'
              title='When is software genuinely sustainable?'
            >
              Beyond green hosting: architecture, longevity, maintenance, and
              whether something should be built at all.
            </Note>
            <Note
              index='02'
              topic='AI & architecture'
              title='AI agents need architecture, not magic.'
            >
              What changes when agents become real parts of a software system
              rather than a separate chat interface?
            </Note>
            <Note
              index='03'
              topic='Product thinking'
              title='Performance is a product decision.'
            >
              Speed is not the final technical optimization. It connects
              accessibility, conversion, and emissions.
            </Note>
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

      <section id='about' className='py-section-lg'>
        <Container size='wide'>
          <div className='grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-20'>
            <SectionLabel index='04'>About this place</SectionLabel>
            <div>
              <Heading
                headingLevel='h2'
                size='xl'
                color='foreground'
                className='max-w-4xl font-medium tracking-[-0.045em]'
              >
                Personal, practical, and always evolving.
              </Heading>
              <p className='mt-8 max-w-3xl text-muted-foreground text-xl leading-8 sm:text-2xl sm:leading-9'>
                DannyMoons.nl is my public knowledge base. I write to think more
                clearly, show how ideas hold up in practice, and help others
                make software that earns its place in the world.
              </p>
              <Link
                href='/about'
                className='group mt-10 inline-flex items-center gap-3 border-primary/50 border-b pb-2 font-semibold text-foreground text-sm transition-colors hover:border-primary'
              >
                More about Danny
                <ArrowUpRight className='size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
              </Link>
            </div>
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
  index,
  title,
  topic
}: {
  children: ReactNode
  index: string
  title: string
  topic: string
}) {
  return (
    <article className='group grid gap-5 border-border border-b py-8 transition-colors md:grid-cols-[5rem_0.65fr_1fr] md:items-start md:gap-8 md:py-10'>
      <span className='font-mono text-[0.65rem] text-muted-foreground'>
        {index}
      </span>
      <div>
        <span className='font-mono text-[0.62rem] text-primary uppercase tracking-[0.16em]'>
          {topic}
        </span>
        <Heading
          headingLevel='h3'
          size='md'
          color='foreground'
          className='mt-3 max-w-lg font-medium text-xl leading-snug tracking-[-0.02em] sm:text-2xl'
        >
          {title}
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
