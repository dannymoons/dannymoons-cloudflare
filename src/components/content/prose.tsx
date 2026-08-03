import { cn } from '@/utilities/ui'
import type { ReactNode } from 'react'

export interface ProseProps {
	children: ReactNode
	className?: string
	size?: 'sm' | 'base' | 'lg'
}

export function Prose({ children, className, size = 'base' }: ProseProps) {
	return (
		<div
			className={cn(
				'prose max-w-none',
				size === 'sm' && 'prose-sm',
				size === 'lg' && 'prose-lg',
		'prose-headings:font-bold prose-headings:font-heading',
		'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
		'prose-strong:text-foreground',
		'prose-code:rounded prose-code:bg-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-foreground prose-code:text-sm',
				className
			)}
		>
			{children}
		</div>
	)
}
