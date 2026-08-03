import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const logoVariants = cva('block', {
  variants: {
    size: {
      xs: 'h-6',
      sm: 'h-8',
      md: 'h-10',
      lg: 'h-12',
      xl: 'h-16',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

export interface LogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof logoVariants> {
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export function Logo({
  className,
  size,
  loading = 'lazy',
  priority = 'low',
  alt = 'Logo',
  src,
  ...props
}: LogoProps) {
  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      data-slot="logo"
      alt={alt}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={cn(logoVariants({ size }), 'w-auto', className)}
      src={src ?? 'https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-logo-light.svg'}
      {...props}
    />
  )
}
