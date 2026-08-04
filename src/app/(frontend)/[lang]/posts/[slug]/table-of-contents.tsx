'use client'

import { useEffect, useState } from 'react'

import { Heading } from '@/components/content/heading'
import type { TableOfContentsItem } from '@/components/content/richtext'
import { cn } from '@/utilities/ui'

export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [activeID, setActiveID] = useState(items[0]?.id)

  useEffect(() => {
    const headings = items.flatMap((item) => {
      const heading = document.getElementById(item.id)
      return heading ? [heading] : []
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]

        if (activeEntry) setActiveID(activeEntry.target.id)
      },
      { rootMargin: '-15% 0px -75% 0px' },
    )

    headings.forEach((heading) => observer.observe(heading))
    return () => observer.disconnect()
  }, [items])

  return (
    <aside
      aria-labelledby="toc-heading"
      className="sticky top-28 hidden h-[calc(100vh-9rem)] w-60 shrink-0 lg:block"
    >
      <Heading
        headingLevel="h2"
        size="sm"
        color="foreground"
        className="m-0 pb-3 font-normal @lg:text-sm text-sm"
        id="toc-heading"
      >
        On this page
      </Heading>
      <nav aria-label="Table of contents">
        <ul className="relative max-h-[calc(100vh-13rem)] min-w-0 overflow-y-auto before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-border before:content-['']">
          {items.map((item) => {
            const isActive = activeID === item.id

            return (
              <li
                key={item.id}
                className={cn(
                  'relative flex h-8 min-w-0 items-center pr-3 text-sm transition-colors duration-150',
                  item.level === 3 ? 'pl-8' : 'pl-4',
                  isActive
                    ? "font-medium text-foreground after:absolute after:top-1 after:bottom-1 after:left-0 after:w-px after:bg-primary after:content-['']"
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <a
                  href={`#${item.id}`}
                  title={item.text}
                  aria-current={isActive ? 'location' : undefined}
                  className="block min-w-0 truncate focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {item.text}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
