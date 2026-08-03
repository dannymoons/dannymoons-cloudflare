import { layoutGapVariants } from '@/utilities/layout-gap-variants'
import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const stackVariants = cva('flex flex-col', {
	variants: {
		gap: layoutGapVariants,
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch'
		},
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between'
		}
	},
	defaultVariants: {
		gap: 'md',
		align: 'stretch',
		justify: 'start'
	}
})

export interface StackProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof stackVariants> {}

export function Stack({
	className,
	gap,
	align,
	justify,
	...props
}: StackProps) {
	return (
		<div
			data-slot='stack'
			className={cn(
				stackVariants({ gap, align, justify }),
				'@container min-w-0',
				className
			)}
			{...props}
		/>
	)
}
