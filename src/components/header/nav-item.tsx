'use client'

import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const navItemVariants = cva(
  'inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
  {
    variants: {
      state: {
        default: 'text-foreground/70 hover:text-foreground hover:bg-accent',
        active: 'text-foreground bg-accent',
        disabled: 'pointer-events-none opacity-40',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  },
)

export interface NavItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navItemVariants> {
  asChild?: boolean
}

export function NavItem({ className, state, asChild = false, ...props }: NavItemProps) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="nav-item"
      data-state={state}
      aria-current={state === 'active' ? 'page' : undefined}
      aria-disabled={state === 'disabled' ? true : undefined}
      className={cn(navItemVariants({ state }), className)}
      {...props}
    />
  )
}
