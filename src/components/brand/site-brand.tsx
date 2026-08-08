import Link from 'next/link'

import { cn } from '@/utilities/ui'

import { Logo } from './logo'
import { Wordmark } from './wordmark'

export interface SiteBrandProps {
  className?: string
}

export function SiteBrand({ className }: SiteBrandProps) {
  return (
    <Link
      href='/'
      className={cn('group inline-flex shrink-0 items-center gap-3', className)}
      aria-label='Danny Moons'
    >
      <Logo />
      <Wordmark
        size='sm'
        className='font-semibold text-foreground text-sm tracking-[-0.02em] sm:text-base'
      >
        Danny Moons
      </Wordmark>
    </Link>
  )
}
