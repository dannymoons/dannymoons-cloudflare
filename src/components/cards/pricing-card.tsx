import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export interface PricingCardProps {
	name: string
	price: string
	billingPeriod?: string
	description?: string
	features: string[]
	ctaLabel: string
	ctaHref: string
	highlighted?: boolean
	className?: string
}

export function PricingCard({
	name,
	price,
	billingPeriod,
	description,
	features,
	ctaLabel,
	ctaHref,
	highlighted,
	className
}: PricingCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col rounded-xl border p-6',
				highlighted
					? 'border-primary bg-primary text-primary-foreground shadow-lg'
					: 'border-border bg-card',
				className
			)}
		>
			<div className='mb-6'>
				<p
					className={cn(
						'font-semibold text-sm',
						highlighted ? 'text-primary-foreground' : 'text-foreground'
					)}
				>
					{name}
				</p>
				<div className='mt-3 flex items-baseline gap-1'>
					<span
						className={cn(
							'font-bold text-4xl',
							highlighted ? 'text-primary-foreground' : 'text-foreground'
						)}
					>
						{price}
					</span>
					{billingPeriod && (
						<span
							className={cn(
								'text-sm',
								highlighted
									? 'text-primary-foreground/70'
									: 'text-muted-foreground'
							)}
						>
							/{billingPeriod}
						</span>
					)}
				</div>
				{description && (
					<p
						className={cn(
							'mt-2 text-xs',
							highlighted
								? 'text-primary-foreground/70'
								: 'text-muted-foreground'
						)}
					>
						{description}
					</p>
				)}
			</div>
			<ul className='mb-6 flex flex-1 flex-col gap-2.5'>
				{features.map(feature => (
					<li key={feature} className='flex items-start gap-2.5'>
						<CheckIcon
							className={cn(
								'mt-0.5 h-4 w-4 shrink-0',
								highlighted ? 'text-primary-foreground' : 'text-primary'
							)}
						/>
						<span
							className={cn(
								'text-sm',
								highlighted ? 'text-primary-foreground/90' : 'text-foreground'
							)}
						>
							{feature}
						</span>
					</li>
				))}
			</ul>
			<Button
				asChild
				variant={highlighted ? 'secondary' : 'primary'}
				className='w-full'
			>
				<Link href={ctaHref}>{ctaLabel}</Link>
			</Button>
		</div>
	)
}
