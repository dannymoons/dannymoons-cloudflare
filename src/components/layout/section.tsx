import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const sectionVariants = cva('', {
	variants: {
		spacing: {
			none: '',
			sm: 'py-8 md:py-12',
			md: 'py-12 md:py-16',
			lg: 'py-12 md:py-24',
			xl: 'py-12 md:py-32'
		},
		background: {
			default: 'bg-background',
			foreground: 'bg-foreground',
			surface: 'bg-surface',
			elevated: 'bg-elevated',
			primary: 'bg-primary',
			transparent: ''
		}
	},
	defaultVariants: {
		spacing: 'lg',
		background: 'transparent'
	}
})

export interface SectionProps
	extends React.HTMLAttributes<HTMLElement>,
		VariantProps<typeof sectionVariants> {
	as?: 'section' | 'div' | 'article' | 'aside' | 'main'
}

export function Section({
	className,
	spacing,
	background,
	as: Tag = 'section',
	...props
}: SectionProps) {
	return (
		<Tag
			data-slot='section'
			className={cn(sectionVariants({ spacing, background }), className)}
			{...props}
		/>
	)
}
