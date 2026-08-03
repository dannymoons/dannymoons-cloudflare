import { layoutGapVariants } from '@/utilities/layout-gap-variants'
import { cn } from '@/utilities/ui'
import { cva, type VariantProps } from 'class-variance-authority'
import type * as React from 'react'

const flexVariants = cva('flex', {
	variants: {
		direction: {
			row: 'flex-row',
			col: 'flex-col'
		},
		gap: layoutGapVariants,
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch',
			baseline: 'items-baseline'
		},
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
			around: 'justify-around',
			evenly: 'justify-evenly'
		}
	},
	defaultVariants: {
		direction: 'row',
		gap: 'md',
		align: 'center',
		justify: 'start'
	}
})

export interface FlexProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof flexVariants> {
	wrap?: boolean
}

export function Flex({
	className,
	direction,
	gap,
	align,
	justify,
	wrap = true,
	...props
}: FlexProps) {
	return (
		<div
			data-slot='flex'
			className={cn(
				flexVariants({ direction, gap, align, justify }),
				'@container min-w-0 w-full',
				wrap && 'flex-wrap',
				className
			)}
			{...props}
		/>
	)
}
