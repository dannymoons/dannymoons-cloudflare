import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { IconBox } from '@/components/display/icon-box'
import type { IconName } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface IconBoxItem {
	icon: IconName
	heading: string
	text: string
	link?: string
}

export interface IconBoxesSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	items: IconBoxItem[]
	cols?: 2 | 3 | 4
	layout?: 'centered' | 'left-aligned'
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function IconBoxesSection({
	eyebrow,
	heading,
	paragraph,
	items,
	cols = 3,
	layout = 'centered',
	background = 'transparent',
}: IconBoxesSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack
					gap='sm'
					align={layout === 'centered' ? 'center' : 'start'}
					className={`mb-12 max-w-xl ${layout === 'centered' ? 'mx-auto text-center' : ''}`}
				>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h2' size='lg'>
						{heading}
					</Heading>
					{paragraph && (
						<Paragraph color='default' marginTop='none'>
							{paragraph}
						</Paragraph>
					)}
				</Stack>
				<Grid cols={cols} gap='lg'>
					{items.map(item => (
						<IconBox key={item.heading} {...item} />
					))}
				</Grid>
			</Container>
		</Section>
	)
}
