import { ArrowUpRight, Clock } from 'lucide-react'
import Link from 'next/link'

import { Heading } from '@/components/content/heading'
import { cn } from '@/utilities/ui'

export interface PostCardProps {
  category: string
  title: string
  excerpt: string
  readMinutes: number
  href: string
  featured?: boolean
  className?: string
}

export function PostCard({
  category,
  className,
  excerpt,
  featured,
  href,
  readMinutes,
  title,
}: PostCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex min-h-72 flex-col overflow-hidden rounded-[var(--radius-xl)] border bg-surface p-6 transition-colors hover:border-primary/35 hover:bg-elevated/70',
        featured ? 'border-primary/25' : 'border-border',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.62rem] text-primary uppercase tracking-[0.16em]">
          {featured ? 'Featured note' : category}
        </span>
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.62rem] text-muted-foreground uppercase tracking-[0.1em]">
          <Clock className="size-3" />
          {readMinutes} min
        </span>
      </div>

      <div className="mt-auto pt-14">
        <Heading
          headingLevel="h3"
          size="sm"
          color="foreground"
          className="font-medium text-xl leading-snug tracking-[-0.025em] transition-colors group-hover:text-primary"
        >
          {title}
        </Heading>
        <p className="mt-3 line-clamp-3 text-muted-foreground text-sm leading-6">{excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 font-semibold text-foreground text-xs transition-colors group-hover:text-primary">
          Read note
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
