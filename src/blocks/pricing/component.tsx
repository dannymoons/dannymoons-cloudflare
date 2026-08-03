import Link from 'next/link'
import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { PricingCard } from '@/components/cards/pricing-card'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'
import type { PricingBlock as PricingBlockType } from '@/payload-types'

function TieredCard({ plan }: { plan: PricingBlockType['plans'][number] }) {
	const highlighted = plan.highlighted ?? false
	return (
		<div
			className={cn(
				'flex flex-col rounded-xl border p-6',
				highlighted ? 'border-primary bg-primary/5' : 'border-border bg-card'
			)}
		>
			<div className='flex items-baseline justify-between gap-2'>
				<h3 className='font-heading font-semibold text-xl'>{plan.name}</h3>
				{plan.tagline && <span className='text-primary text-xs'>{plan.tagline}</span>}
			</div>
			{plan.description && (
				<p className='mt-3 flex-1 text-muted-foreground text-sm leading-relaxed'>
					{plan.description}
				</p>
			)}
			{plan.features && plan.features.length > 0 && (
				<ul className='mt-6 space-y-2 border-border border-t pt-6 text-sm'>
					{plan.features.map(f => (
						<li key={f.feature} className='flex items-center gap-2 text-foreground'>
							<span className='size-1.5 shrink-0 rounded-full bg-primary' />
							{f.feature}
						</li>
					))}
				</ul>
			)}
			{plan.ctaLabel && plan.ctaHref && (
				<Button
					asChild
					variant={highlighted ? 'primary' : 'secondary'}
					className='mt-6 w-full'
				>
					<Link href={plan.ctaHref}>{plan.ctaLabel}</Link>
				</Button>
			)}
		</div>
	)
}

export function PricingBlock({
	eyebrow,
	title,
	content,
	plans,
	variant,
	backgroundColor
}: PricingBlockType) {
	const isTiered = variant === 'tiered'

	return (
		<Section
			spacing='lg'
			background={backgroundColor ?? undefined}
		>
			<Container>
				<Stack
					gap='sm'
					align='center'
					className='mx-auto mb-12 max-w-xl text-center'
				>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					{title && (
						<Heading headingLevel='h2' size='lg'>
							{title}
						</Heading>
					)}
					{content != null && (
						<RichTextBasic
							data={
								content as unknown as Parameters<
									typeof RichTextBasic
								>[0]['data']
							}
							textSize='md'
						/>
					)}
				</Stack>
				<Grid cols={plans.length as 2 | 3} gap='lg' className='items-stretch'>
					{plans.map(plan =>
						isTiered ? (
							<TieredCard key={plan.name} plan={plan} />
						) : (
							<PricingCard
								key={plan.name}
								name={plan.name}
								price={plan.price ?? ''}
								billingPeriod={plan.billingPeriod ?? undefined}
								description={plan.description ?? undefined}
								features={(plan.features ?? []).map(f => f.feature)}
								ctaLabel={plan.ctaLabel ?? ''}
								ctaHref={plan.ctaHref ?? '#'}
								highlighted={plan.highlighted ?? false}
							/>
						)
					)}
				</Grid>
			</Container>
		</Section>
	)
}
