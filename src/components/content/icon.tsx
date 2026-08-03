import { icons, type LucideProps } from 'lucide-react'
import type * as React from 'react'

const iconMap = icons as Record<string, React.ComponentType<LucideProps>>

export type IconName = string

export interface DynamicIconProps extends LucideProps {
  name: string
  fallback?: React.ReactNode
}

function toPascalCase(name: string): string {
  if (/^[A-Z]/.test(name)) return name
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

export function DynamicIcon({ name, fallback = null, ...props }: DynamicIconProps) {
  const pascalName = toPascalCase(name)
  const Icon = iconMap[pascalName] ?? iconMap[name]

  if (!Icon) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[DynamicIcon] Unknown icon name: "${name}". Check lucide-react for available icons.`)
    }
    return <>{fallback}</>
  }

  return <Icon aria-hidden {...props} />
}

export { iconMap }
