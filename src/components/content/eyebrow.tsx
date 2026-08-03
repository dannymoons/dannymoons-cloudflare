import { Badge } from '@/components/ui/badge'
import { cn } from '@/utilities/ui'
import type { ReactNode } from 'react'

export interface EyebrowProps {
	children: ReactNode
	className?: string
}

export function Eyebrow({ children, className }: EyebrowProps) {
	return (
		<Badge
			variant='secondary'
			className={cn('uppercase tracking-widest', className)}
		>
			{children}
		</Badge>
	)
}
