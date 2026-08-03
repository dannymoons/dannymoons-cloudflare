import { layoutGapVariants } from '@/utilities/layout-gap-variants'
import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const gridVariants = cva('grid', {
	variants: {
		cols: {
			1: 'grid-cols-1',
			2: 'grid-cols-1 sm:grid-cols-2',
			3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
			4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
			5: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-5',
			6: 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-6',
			7: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-7',
			8: 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-8',
			9: 'grid-cols-2 sm:grid-cols-5 lg:grid-cols-9',
			10: 'grid-cols-2 sm:grid-cols-5 lg:grid-cols-10',
			11: 'grid-cols-2 sm:grid-cols-6 lg:grid-cols-11',
			12: 'grid-cols-1 sm:grid-cols-6 lg:grid-cols-12'
		},
		gap: layoutGapVariants,
		flow: {
			row: 'grid-flow-row',
			dense: 'grid-flow-dense',
			col: 'grid-flow-col'
		},
		verticalAlign: {
			start: '',
			center: 'items-center'
		}
	},
	defaultVariants: {
		cols: 12,
		gap: 'md',
		flow: 'row',
		verticalAlign: 'start'
	}
})

export interface GridProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof gridVariants> {}

export function Grid({
	className,
	cols,
	gap,
	flow,
	verticalAlign,
	...props
}: GridProps) {
	return (
		<div
			data-slot='grid'
			className={cn(
				gridVariants({ cols, gap, flow, verticalAlign }),
				'@container min-w-0',
				className
			)}
			{...props}
		/>
	)
}
