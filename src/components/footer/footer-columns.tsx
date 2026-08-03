import { cn } from '@/utilities/ui'

export interface FooterColumnProps
	extends React.HTMLAttributes<HTMLDivElement> {
	title?: string
}

export function FooterColumn({
	className,
	title,
	children,
	...props
}: FooterColumnProps) {
	return (
		<div
			data-slot='footer-column'
			className={cn('flex flex-col gap-3', className)}
			{...props}
		>
			{title && <p className='text-sm font-semibold'>{title}</p>}
			{children}
		</div>
	)
}
