import { cn } from '@/utilities/ui'

export interface StepCardProps {
	number: string
	title: string
	description: string
	className?: string
}

export function StepCard({
	number,
	title,
	description,
	className
}: StepCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col text-pretty rounded-lg border border-border p-4 lg:items-center lg:rounded-none lg:border-0 lg:p-0 lg:text-center',
				className
			)}
		>
			<div className='mb-6'>
				<div className='flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background'>
					<span className='font-bold text-primary text-sm'>{number}</span>
				</div>
			</div>
			<h3 className='mb-2 font-semibold text-base text-foreground'>{title}</h3>
			<p className='max-w-xs text-balance text-muted-foreground text-sm leading-relaxed'>
				{description}
			</p>
		</div>
	)
}
