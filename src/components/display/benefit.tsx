import { cn } from '@/utilities/ui'
import { CheckIcon } from 'lucide-react'

export interface BenefitProps {
	text: string
	className?: string
}

export function Benefit({ text, className }: BenefitProps) {
	return (
		<li className={cn('flex items-start gap-2', className)}>
			<CheckIcon className='mt-0.5 h-4 w-4 shrink-0 text-primary' />
			<span className='text-foreground text-sm'>{text}</span>
		</li>
	)
}
