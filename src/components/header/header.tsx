import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const headerVariants = cva('w-full', {
  variants: {
    position: {
      static: 'relative',
      sticky: 'sticky top-0 z-[var(--z-sticky)]',
      fixed: 'fixed inset-x-0 top-0 z-[var(--z-fixed)]',
    },
    border: {
      none: '',
      bottom: 'border-b border-border',
      glass: 'border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60',
    },
    background: {
      default: 'bg-background',
      transparent: 'bg-transparent',
      muted: 'bg-muted',
    },
  },
  defaultVariants: {
    position: 'sticky',
    border: 'bottom',
    background: 'default',
  },
})

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

export function Header({ className, position, border, background, ...props }: HeaderProps) {
  return (
    <header
      data-slot="header"
      className={cn(headerVariants({ position, border, background }), className)}
      {...props}
    />
  )
}
