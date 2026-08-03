import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const navVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row items-center gap-1',
      vertical: 'flex-col gap-1',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})

export interface NavProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navVariants> {}

export function Nav({ className, orientation, ...props }: NavProps) {
  return (
    <nav
      data-slot="nav"
      className={cn(navVariants({ orientation }), className)}
      {...props}
    />
  )
}
