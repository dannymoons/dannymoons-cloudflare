import { DynamicIcon } from '@/components/content/icon'
import { cn } from '@/utilities/ui'

export interface StatCardProps {
	icon?: string
	value: string
	label: string
	description?: string
	className?: string
}

export function StatCard({ icon, value, label, description, className }: StatCardProps) {
	return (
		<div className={cn('rounded-xl border border-border bg-card p-5', className)}>
			{icon && (
				<div className='mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-accent'>
					<DynamicIcon name={icon} className='h-4 w-4 text-primary' />
				</div>
			)}
			<p className='mb-1 font-bold text-2xl text-primary'>{value}</p>
			<p className='text-muted-foreground text-xs leading-snug'>{label}</p>
			{description && <p className='mt-1 text-muted-foreground text-xs'>{description}</p>}
		</div>
	)
}
