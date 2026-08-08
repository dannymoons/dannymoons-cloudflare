'use client'

import Link from 'next/link'
import { ArrowUpRight, Search, SlidersHorizontal, Sparkles } from 'lucide-react'
import { useDeferredValue, useMemo, useState } from 'react'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

type Entry = {
  aliases: string[]
  description: string
  slug: string
  tags: { slug: string; title: string }[]
  title: string
}

const topicOrder = ['sustainability', 'development', 'performance', 'hosting', 'tools']

export default function GlossaryIndex({ entries }: { entries: Entry[] }) {
  const [query, setQuery] = useState('')
  const [topic, setTopic] = useState('all')
  const deferredQuery = useDeferredValue(query)

  const activeFilterCount = (topic !== 'all' ? 1 : 0) + (query.trim() ? 1 : 0)

  const topics = useMemo(() => {
    const found = new Map<string, { count: number; title: string }>()
    for (const entry of entries) {
      for (const tag of entry.tags) {
        const current = found.get(tag.slug)
        found.set(tag.slug, {
          count: (current?.count ?? 0) + 1,
          title: tag.title
        })
      }
    }
    return [...found.entries()]
      .sort(([a], [b]) => {
        const order = topicOrder.indexOf(a) - topicOrder.indexOf(b)
        return order || a.localeCompare(b)
      })
      .map(([slug, topic]) => ({ count: topic.count, slug, title: topic.title }))
  }, [entries])

  const filteredEntries = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase()
    return entries.filter(entry => {
      const matchesTopic =
        topic === 'all' || entry.tags.some(tag => tag.slug === topic)
      const searchable = [
        entry.title,
        entry.description,
        ...entry.aliases,
        ...entry.tags.map(tag => tag.title)
      ]
        .join(' ')
        .toLowerCase()
      return matchesTopic && (!normalizedQuery || searchable.includes(normalizedQuery))
    })
  }, [deferredQuery, entries, topic])

  return (
    <>
      <div className='mb-8 flex justify-end'>
        <Sheet>
          <SheetTrigger asChild>
            <button
              type='button'
              className='inline-flex h-14 shrink-0 items-center gap-2 rounded-[var(--radius-lg)] border border-border bg-surface px-4 font-medium text-foreground text-sm transition-colors hover:border-primary hover:text-primary'
            >
              <SlidersHorizontal className='size-4' />
              <span className='hidden sm:inline'>Filter</span>
              {activeFilterCount > 0 && (
                <span className='flex size-5 items-center justify-center rounded-full bg-primary font-mono text-[0.62rem] text-primary-foreground'>
                  {activeFilterCount}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent side='right' className='border-border bg-surface p-0 sm:max-w-md'>
            <SheetHeader className='relative overflow-hidden border-border border-b px-6 py-8'>
              <div aria-hidden='true' className='pointer-events-none absolute -top-20 -right-16 size-48 rounded-full bg-primary/10 blur-3xl' />
              <p className='relative font-medium font-mono text-[0.62rem] text-primary uppercase tracking-[0.18em]'>
                Refine the index
              </p>
              <SheetTitle className='relative mt-3 text-3xl tracking-[-0.04em]'>
                Find your thread.
              </SheetTitle>
              <SheetDescription className='relative mt-2 max-w-xs leading-6'>
                Follow one idea through the tools and practices behind the web.
              </SheetDescription>
              <label className='group relative mt-6 block'>
                <span className='sr-only'>Search the glossary</span>
                <Search className='pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary' />
                <input
                  type='search'
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder='Search terms, tools, or ideas...'
                  className='h-12 w-full rounded-[var(--radius-lg)] border border-border bg-background pr-4 pl-11 text-foreground text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary'
                />
              </label>
            </SheetHeader>
            <div className='min-h-0 flex-1 overflow-y-auto px-6 py-7' aria-label='Filter by topic'>
              <div className='flex flex-col gap-3'>
              <div className='mb-2 flex items-center justify-between font-medium font-mono text-[0.62rem] text-muted-foreground uppercase tracking-[0.16em]'>
                <span>Topics</span>
                <span>{entries.length} entries</span>
              </div>
              <SheetClose asChild>
                <button
                  type='button'
                  aria-pressed={topic === 'all'}
                  onClick={() => setTopic('all')}
                  className={`group flex items-center justify-between border-b px-1 py-3 text-left font-medium text-sm transition-colors ${topic === 'all' ? 'border-primary text-foreground' : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'}`}
                >
                  <span className='flex items-center gap-3'>
                    <span className={`size-2 rounded-full transition-colors ${topic === 'all' ? 'bg-primary shadow-[0_0_12px_var(--primary)]' : 'bg-border group-hover:bg-foreground/50'}`} />
                    Everything
                  </span>
                  <span className='font-mono text-muted-foreground text-xs'>{entries.length}</span>
                </button>
              </SheetClose>
              {topics.map(item => (
                <SheetClose key={item.slug} asChild>
                  <button
                    type='button'
                    aria-pressed={topic === item.slug}
                    onClick={() => setTopic(item.slug)}
                    className={`group flex items-center justify-between border-b px-1 py-3 text-left font-medium text-sm transition-colors ${topic === item.slug ? 'border-primary text-foreground' : 'border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground'}`}
                  >
                    <span className='flex items-center gap-3'>
                      <span className={`size-2 rounded-full transition-colors ${topic === item.slug ? 'bg-primary shadow-[0_0_12px_var(--primary)]' : 'bg-border group-hover:bg-foreground/50'}`} />
                      {item.title}
                    </span>
                    <span className='font-mono text-muted-foreground text-xs'>{item.count}</span>
                  </button>
                </SheetClose>
              ))}
              </div>
            </div>
            <div className='mt-auto border-border border-t p-6'>
              <SheetClose asChild>
                <button
                  type='button'
                  onClick={() => {
                    setQuery('')
                    setTopic('all')
                  }}
                  className='w-full rounded-full border border-border px-4 py-3 font-medium text-muted-foreground text-sm transition-colors hover:border-foreground/30 hover:text-foreground'
                >
                  Clear filter
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {filteredEntries.length > 0 ? (
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredEntries.map((entry, index) => (
            <Link
              key={entry.slug}
              href={`/what-is/${entry.slug}`}
              className='group flex min-h-64 flex-col rounded-[var(--radius-xl)] border border-border bg-surface p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-elevated sm:p-7'
            >
              <div className='flex items-center justify-between'>
                <span className='font-mono text-[0.64rem] text-primary tracking-[0.16em]'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className='size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary' />
              </div>
              <div className='mt-auto pt-12'>
                <div className='mb-3 flex flex-wrap gap-1.5'>
                  {entry.tags.slice(0, 2).map(tag => (
                    <span key={tag.slug} className='font-mono text-[0.58rem] text-muted-foreground uppercase tracking-[0.12em]'>
                      {tag.title}
                    </span>
                  ))}
                </div>
                <h3 className='font-heading font-medium text-2xl leading-tight tracking-[-0.04em] transition-colors group-hover:text-primary'>
                  {entry.title}
                </h3>
                <p className='mt-3 line-clamp-3 text-muted-foreground text-sm leading-6'>
                  {entry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className='rounded-[var(--radius-xl)] border border-border border-dashed px-6 py-16 text-center'>
          <Sparkles className='mx-auto size-5 text-primary' />
          <p className='mt-4 font-medium text-foreground'>Nothing quite matched.</p>
          <p className='mt-2 text-muted-foreground text-sm'>Try a broader term or reset the topic filter.</p>
        </div>
      )}

    </>
  )
}
