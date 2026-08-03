import { cn } from '@/utilities/ui'
import type * as React from 'react'

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <div
      data-slot="navbar"
      className={cn('flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

export interface NavbarBrandProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavbarBrand({ className, ...props }: NavbarBrandProps) {
  return (
    <div
      data-slot="navbar-brand"
      className={cn('flex shrink-0 items-center', className)}
      {...props}
    />
  )
}

export interface NavbarContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavbarContent({ className, ...props }: NavbarContentProps) {
  return (
    <div
      data-slot="navbar-content"
      className={cn('hidden flex-1 items-center md:flex', className)}
      {...props}
    />
  )
}

export interface NavbarActionsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NavbarActions({ className, ...props }: NavbarActionsProps) {
  return (
    <div
      data-slot="navbar-actions"
      className={cn('ml-auto flex items-center gap-2', className)}
      {...props}
    />
  )
}
