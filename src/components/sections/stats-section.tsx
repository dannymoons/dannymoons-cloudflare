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

export interface StatItem {
	icon?: IconName
	value: string
	label: string
}

export interface StatsSectionProps {
	eyebrow?: string
	heading?: string
	items: StatItem[]
	variant?: 'row' | 'grid'
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function StatsSection({
	eyebrow,
	heading,
	items,
	variant = 'row',
	background = 'transparent',
}: StatsSectionProps) {
	return (
		<Section spacing='md' background={background}>
			<Container>
				{(eyebrow || heading) && (
					<Stack gap='xs' align='center' className='mx-auto mb-10 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{heading && (
							<Heading headingLevel='h2' size='md'>
								{heading}
							</Heading>
						)}
					</Stack>
				)}
				{variant === 'row' ? (
					<Flex gap='xl' wrap justify='center'>
						{items.map(item => (
							<Stat key={item.value} {...item} />
						))}
					</Flex>
				) : (
					<Grid cols={4} gap='md'>
						{items.map(item => (
							<StatCard key={item.value} icon={item.icon} value={item.value} label={item.label} />
						))}
					</Grid>
				)}
			</Container>
		</Section>
	)
}
