import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Stat } from '@/components/display/stat'
import { StatCard } from '@/components/cards/stat-card'
import type { IconName } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'
import type { StatsBlock as StatsBlockType } from '@/payload-types'

export function StatsBlock({
	eyebrow,
	title,
	variant,
	items,
	backgroundColor
}: StatsBlockType) {
	const layout = variant ?? 'row'
	const onPrimary = backgroundColor === 'primary'

	return (
		<Section spacing='md' background={backgroundColor ?? undefined}>
			<Container>
				{(eyebrow || title) && (
					<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='md' color={onPrimary ? 'white' : 'default'}>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				{layout === 'band' ? (
					<Grid cols={items.length >= 4 ? 4 : (items.length as 2 | 3)} gap='lg'>
						{items.map((item, i) => (
							<div key={item.id ?? i}>
								<div
									className={cn(
										'font-bold font-heading text-5xl leading-none tracking-tight sm:text-6xl',
										onPrimary ? 'text-primary-foreground' : 'text-foreground'
									)}
								>
									{item.value}
								</div>
								<div
									className={cn(
										'mt-3 font-medium text-xs uppercase tracking-[0.14em]',
										onPrimary ? 'text-primary-foreground/90' : 'text-foreground'
									)}
								>
									{item.label}
								</div>
								{item.description && (
									<div
										className={cn(
											'mt-1 text-xs',
											onPrimary ? 'text-primary-foreground/70' : 'text-muted-foreground'
										)}
									>
										{item.description}
									</div>
								)}
							</div>
						))}
					</Grid>
				) : layout === 'row' ? (
					<Flex gap='xl' wrap justify='center'>
						{items.map(item => (
							<Stat key={item.value} icon={item.icon as IconName | undefined} value={item.value} label={item.label} />
						))}
					</Flex>
				) : (
					<Grid cols={4} gap='md'>
						{items.map(item => (
							<StatCard key={item.value} icon={item.icon as IconName | undefined} value={item.value} label={item.label} className='bg-background' />
						))}
					</Grid>
				)}
			</Container>
		</Section>
	)
}
