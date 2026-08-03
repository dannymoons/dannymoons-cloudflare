import { DynamicIcon } from '@/components/content/icon'
import type { IconName } from '@/components/content/icon'
import { cn } from '@/utilities/ui'

export interface UspProps {
	icon: IconName
	title: string
	description: string
	className?: string
}

export function Usp({ icon, title, description, className }: UspProps) {
	return (
		<div className={cn('flex items-start gap-4', className)}>
			<div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary'>
				<DynamicIcon name={icon} className='h-5 w-5' />
			</div>
			<div>
				<p className='font-semibold text-foreground text-sm'>{title}</p>
				<p className='mt-1 text-muted-foreground text-sm leading-relaxed'>{description}</p>
			</div>
		</div>
	)
}
