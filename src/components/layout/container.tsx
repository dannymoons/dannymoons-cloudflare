import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const containerVariants = cva('mx-auto w-full', {
	variants: {
		size: {
			narrow: 'max-w-[var(--container-narrow)]',
			default: 'max-w-[var(--container-content)]',
			wide: 'max-w-[var(--container-wide)]',
			full: 'max-w-full'
		},
		padding: {
			box: '@md:p-8 @xl:p-12 p-4',
			padded: 'px-4 sm:px-6 lg:px-8',
			none: ''
		}
	},
	defaultVariants: {
		size: 'default',
		padding: 'padded'
	}
})

export interface ContainerProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof containerVariants> {}

export function Container({
	className,
	size,
	padding,
	...props
}: ContainerProps) {
	return (
		<div
			data-slot='container'
			className={cn(
				containerVariants({ size, padding }),
				'@container',
				className
			)}
			{...props}
		/>
	)
}
