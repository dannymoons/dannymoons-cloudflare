import { DynamicIcon } from '@/components/content/icon'
import type { IconName } from '@/components/content/icon'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { cn } from '@/utilities/ui'
import { ArrowRight } from 'lucide-react'

export interface FeatureBoxProps {
	icon: IconName
	heading: string
	subtitle?: string
	description: string
	tags?: string[]
	link?: string
	className?: string
}

export function FeatureBox({
	icon,
	heading,
	subtitle,
	description,
	tags,
	link,
	className
}: FeatureBoxProps) {
	const Wrapper = link ? 'a' : 'div'
	return (
		<Wrapper
			{...(link ? { href: link } : {})}
			className={cn(
				'group flex flex-col rounded-xl border border-border bg-card p-6',
				link &&
					'cursor-pointer transition-all hover:border-primary/30 hover:shadow-md',
				className
			)}
		>
			{icon && (
				<div className='mb-4 flex items-start justify-between'>
					<div
						className={cn(
							link &&
								'group-hover:bg-primary group-hover:text-primary-foreground',
							'flex h-10 w-10 items-center justify-center rounded-lg bg-background text-primary transition-colors'
						)}
					>
						<DynamicIcon name={icon} className='h-5 w-5' />
					</div>
				</div>
			)}

			<Heading headingLevel='h3' size='sm' className='mb-1 leading-none'>
				{heading}
			</Heading>
			{subtitle && (
				<Paragraph
					color='primary'
					size='xs'
					marginTop='none'
					marginBottom='md'
					className='font-medium'
				>
					{subtitle}
				</Paragraph>
			)}
			<Paragraph size='sm' marginTop='none' className='flex-1'>
				{description}
			</Paragraph>
			{tags && tags.length > 0 && (
				<div className='mt-4 flex flex-wrap gap-1.5'>
					{tags.map(tag => (
						<span
							key={tag}
							className='rounded-full border border-border bg-background px-2 py-0.5 text-primary text-xs'
						>
							{tag}
						</span>
					))}
				</div>
			)}
			{link && (
				<div className='mt-4 flex items-center gap-1 font-medium text-primary text-xs transition-all group-hover:gap-2'>
					Meer lezen <ArrowRight className='h-3 w-3' />
				</div>
			)}
		</Wrapper>
	)
}
