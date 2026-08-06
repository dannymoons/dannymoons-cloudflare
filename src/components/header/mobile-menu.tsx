'use client'

import { cn } from '@/utilities/ui'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger
} from '../ui/drawer'
import { MenuIcon } from 'lucide-react'
import type * as React from 'react'
import Link from 'next/link'

export interface MobileMenuProps {
  children: React.ReactNode
  title?: string
  side?: 'left' | 'right'
  triggerClassName?: string
  contentClassName?: string
}

const mobileMenuItems = [
  { label: 'Home', href: '/' },
  { label: 'Notes', href: '/posts' },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Questions', href: '/#faq' }
]

export function MobileMenu({
  children,
  title = 'Menu',
  side = 'left',
  triggerClassName,
  contentClassName
}: MobileMenuProps) {
  const useDrawer = true
  return (
    <>
      {useDrawer ? (
        <Drawer>
          <DrawerTrigger
            data-slot='mobile-menu-trigger'
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent hover:text-foreground md:hidden',
              triggerClassName
            )}
            aria-label='Open menu'
          >
            <MenuIcon className='size-5' aria-hidden />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle
                className={cn(
                  'font-medium text-primary text-sm uppercase tracking-[0.1em] sm:text-xs'
                )}
              >
                Navigate my website
              </DrawerTitle>
                <DrawerDescription className={cn()}>
                  {mobileMenuItems.map(item => (
                    <DrawerClose key={item.label} asChild>
                      <Link
                        className={cn(
                          'block py-token-xs font-medium text-2xl text-white/70'
                        )}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </DrawerClose>
                  ))}
                </DrawerDescription>
            </DrawerHeader>
            <div className='p-4'>{/* Content here */}</div>
            <DrawerFooter>
              {/*} <DrawerClose render={<Button variant='outline' />}>
                Cancel
              </DrawerClose>
*/}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Sheet>
          <SheetTrigger
            data-slot='mobile-menu-trigger'
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent hover:text-foreground md:hidden',
              triggerClassName
            )}
            aria-label='Open menu'
          >
            <MenuIcon className='size-5' aria-hidden />
          </SheetTrigger>
          <SheetContent
            data-slot='mobile-menu-content'
            side={side}
            className={cn('w-72 pt-10', contentClassName)}
          >
            <SheetHeader className='sr-only'>
              <SheetTitle>{title}</SheetTitle>
            </SheetHeader>
            {children}
          </SheetContent>
        </Sheet>
      )}
    </>
  )
}
