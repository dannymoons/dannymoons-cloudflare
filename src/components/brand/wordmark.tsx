import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const wordmarkVariants = cva('font-heading font-bold tracking-tight', {
  variants: {
    size: {
      xs: 'text-sm',
      sm: 'text-base',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    },
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      muted: 'text-muted-foreground',
      white: 'text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
  },
})

export interface WordmarkProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof wordmarkVariants> {
  name?: string
}

export function Wordmark({ className, size, color, name = 'Brand', children, ...props }: WordmarkProps) {
  return (
    <span
      data-slot="wordmark"
      className={cn(wordmarkVariants({ size, color }), className)}
      {...props}
    >
      {children ?? name}
    </span>
  )
}
