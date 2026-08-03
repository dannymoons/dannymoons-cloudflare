import { ArrowRight } from 'lucide-react'
import { DynamicIcon } from '@/components/content/icon'
import { cn } from '@/utilities/ui'

export interface ServiceCardProps {
	title: string
	subtitle?: string | null
	description: string
	icon?: string | null
	frequencyLabel?: string | null
	tags?: { label: string; id?: string | null }[]
	href?: string
	className?: string
}

export function ServiceCard({
	title,
	subtitle,
	description,
	icon,
	frequencyLabel,
	tags,
	href = '#',
	className
}: ServiceCardProps) {
	const Tag = href ? 'a' : 'div'

	return (
		<Tag
			{...(href ? { href } : {})}
			className={cn(
				'group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md',
				className
			)}
		>
			<div className='mb-4 flex items-start justify-between'>
				<div className='flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground'>
					{icon ? (
						<DynamicIcon name={icon} className='h-5 w-5' />
					) : (
						<span className='h-5 w-5' />
					)}
				</div>
				{frequencyLabel && (
					<span className='font-medium text-muted-foreground text-xs'>
						{frequencyLabel}
					</span>
				)}
			</div>

			<div className='mb-3'>
				<h3 className='mb-0.5 font-semibold text-base text-foreground'>
					{title}
				</h3>
				{subtitle && (
					<p className='font-medium text-primary text-xs'>{subtitle}</p>
				)}
			</div>

			<p className='mb-4 flex-1 text-muted-foreground text-sm leading-relaxed'>
				{description}
			</p>

			{tags && tags.length > 0 && (
				<div className='mb-4 flex flex-wrap gap-1.5'>
					{tags.map(tag => (
						<span
							key={tag.id ?? tag.label}
							className='rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-secondary-foreground text-xs'
						>
							{tag.label}
						</span>
					))}
				</div>
			)}

			<div className='flex items-center gap-1 font-medium text-primary text-xs transition-all group-hover:gap-2'>
				Meer lezen <ArrowRight className='h-3 w-3' />
			</div>
		</Tag>
	)
}
