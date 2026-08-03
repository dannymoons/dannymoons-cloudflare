import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { TeamCard } from '@/components/cards/team-card'
import type { TeamCardProps } from '@/components/cards/team-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'

export interface TeamSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	members: Omit<TeamCardProps, 'className'>[]
	cols?: 2 | 3 | 4
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function TeamSection({
	eyebrow,
	heading,
	paragraph,
	members,
	cols = 3,
	background = 'transparent',
}: TeamSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
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
					{members.map(member => (
						<TeamCard key={member.name} {...member} />
					))}
				</Grid>
			</Container>
		</Section>
	)
}
