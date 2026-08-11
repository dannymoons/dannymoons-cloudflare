import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Heading } from '@/components/content/heading'

export interface PostListItem {
  description?: string
  href: string
  id?: number | string
  label?: string
  title: string
}

export function PostList({
  items,
  showArrow = true
}: {
  items: PostListItem[]
  showArrow?: boolean
}) {
  return (
    <div className='border-border border-t'>
      {items.map((item, index) => (
        <Link
          key={item.id ?? item.href}
          href={item.href}
          className='group grid grid-cols-[2rem_minmax(0,1fr)_auto] gap-3 border-border border-b py-5 transition-colors hover:border-primary/60 sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:items-center sm:gap-5 sm:py-7'
        >
          <span className='font-mono text-[0.64rem] text-primary tracking-[0.16em]'>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            {item.label && (
              <span className='mb-2 block font-mono text-[0.62rem] text-primary uppercase tracking-[0.16em]'>
                {item.label}
              </span>
            )}
            <Heading
              headingLevel='h3'
              size='md'
              color='foreground'
              className='font-medium leading-tight tracking-[-0.04em] transition-colors group-hover:text-primary'
            >
              {item.title}
            </Heading>
            {item.description && (
              <p className='mt-2 max-w-2xl text-muted-foreground text-sm leading-6 sm:text-base sm:leading-7'>
                {item.description}
              </p>
            )}
          </div>
          {showArrow && (
            <ArrowUpRight className='size-4 text-muted-foreground transition-colors group-hover:text-primary' />
          )}
        </Link>
      ))}
    </div>
  )
}
