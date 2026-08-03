'use client'

import { cn } from '@/utilities/ui'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import type * as React from 'react'

export interface MobileMenuProps {
  children: React.ReactNode
  title?: string
  side?: 'left' | 'right'
  triggerClassName?: string
  contentClassName?: string
}

export function MobileMenu({
  children,
  title = 'Menu',
  side = 'left',
  triggerClassName,
  contentClassName,
}: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger
        data-slot="mobile-menu-trigger"
        className={cn(
          'inline-flex size-9 items-center justify-center rounded-md text-foreground/70 hover:bg-accent hover:text-foreground transition-colors md:hidden',
          triggerClassName,
        )}
        aria-label="Open menu"
      >
        <MenuIcon className="size-5" aria-hidden />
      </SheetTrigger>
      <SheetContent
        data-slot="mobile-menu-content"
        side={side}
        className={cn('w-72 pt-10', contentClassName)}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  )
}
