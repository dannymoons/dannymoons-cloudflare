import Link from 'next/link'

import { cn } from '@/utilities/ui'

import { navItems } from './nav-items'

export interface DesktopNavProps {
  className?: string
}

export function DesktopNav({ className }: DesktopNavProps) {
  return (
    <nav
      aria-label='Primary'
      className={cn(
        'hidden flex-1 items-center justify-center gap-1 md:flex',
        className
      )}
    >
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className='inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium text-foreground/70 text-sm transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1'
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
