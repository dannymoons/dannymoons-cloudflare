import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const logoVariants = cva('relative grid shrink-0 place-items-center', {
  variants: {
    size: {
      xs: 'size-6',
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
      xl: 'size-16'
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

export interface LogoProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof logoVariants> {}

export function Logo({ className, size, ...props }: LogoProps) {
  return (
    <span
      data-slot='logo'
      aria-hidden='true'
      className={cn(logoVariants({ size }), 'group/logo', className)}
      {...props}
    >
      <span className='absolute inset-0 rounded-full border border-primary/45 bg-primary/8 transition-transform duration-500 group-hover/logo:rotate-12' />
      <span className='size-2 rounded-full bg-primary transition-transform duration-300 group-hover/logo:scale-125' />
      <span className='absolute inset-1 rounded-full border border-primary/35 border-dashed transition-transform duration-700 group-hover/logo:-rotate-45' />
    </span>
  )
}
