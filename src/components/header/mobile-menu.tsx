'use client'

import { MenuIcon } from 'lucide-react'
import Link from 'next/link'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

import { navItems } from './nav-items'

export interface MobileMenuProps {
  triggerClassName?: string
  contentClassName?: string
}

export function MobileMenu({
  triggerClassName,
  contentClassName
}: MobileMenuProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className={cn(
            'text-foreground/70 hover:bg-accent hover:text-foreground md:hidden',
            triggerClassName
          )}
          aria-label='Open menu'
        >
          <MenuIcon aria-hidden />
        </Button>
      </DrawerTrigger>
      <DrawerContent className={cn('bg-background', contentClassName)}>
        <DrawerHeader>
          <DrawerTitle className='font-medium text-primary text-sm uppercase tracking-[0.1em] sm:text-xs'>
            Navigate my website
          </DrawerTitle>
          <DrawerDescription className='sr-only'>
            Primary navigation links
          </DrawerDescription>
        </DrawerHeader>
        <nav aria-label='Mobile primary' className='px-10 pb-8 text-center'>
          {navItems.map(item => (
            <DrawerClose key={item.href} asChild>
              <Link
                href={item.href}
                className='block py-token-xs font-medium text-2xl text-foreground/70 transition-colors hover:text-foreground'
              >
                {item.label}
              </Link>
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
}
