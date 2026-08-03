import { DynamicIcon } from '@/components/content/icon'
import type { IconName } from '@/components/content/icon'
import { cn } from '@/utilities/ui'

export interface StatProps {
	icon?: IconName
	value: string
	label: string
	className?: string
}

export function Stat({ icon, value, label, className }: StatProps) {
	return (
		<div className={cn('flex items-center gap-3', className)}>
			{icon && (
				<div className='flex h-9 w-9 items-center justify-center rounded-md bg-accent'>
					<DynamicIcon name={icon} className='h-4 w-4 text-primary' />
				</div>
			)}
			<div>
				<p className='font-semibold text-foreground text-sm'>{value}</p>
				<p className='text-muted-foreground text-xs'>{label}</p>
			</div>
		</div>
	)
}
