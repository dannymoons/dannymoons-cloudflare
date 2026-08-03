import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { TeamCard } from '@/components/cards/team-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import type { TeamBlock as TeamBlockType } from '@/payload-types'
import type { Media } from '@/payload-types'

export function TeamBlock({
	eyebrow,
	title,
	content,
	cols,
	loadFromCollection,
	members,
	teamMembers,
	backgroundColor
}: TeamBlockType) {
	type TeamMemberItem = Exclude<
		NonNullable<TeamBlockType['members']>[number] | NonNullable<TeamBlockType['teamMembers']>[number],
		string | number
	>
	const displayMembers = (
		loadFromCollection && teamMembers ? teamMembers : (members ?? [])
	).filter((member): member is TeamMemberItem => typeof member === 'object' && member !== null)

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
				<Grid cols={(Number(cols ?? '3') as 2 | 3 | 4) || 3} gap='lg'>
					{displayMembers.map(member => (
						<TeamCard
							key={member.name}
							name={member.name}
							role={member.role}
							bio={member.bio ?? undefined}
							photo={
								typeof member.photo === 'object' && member.photo !== null
									? ((member.photo as Media).url ?? undefined)
									: undefined
							}
						/>
					))}
				</Grid>
			</Container>
		</Section>
	)
}
