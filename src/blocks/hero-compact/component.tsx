import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import type { HeroCompactBlock as HeroCompactBlockType } from '@/payload-types'

export function HeroCompactBlock({
	eyebrow,
	title,
	content,
}: HeroCompactBlockType) {
	return (
		<Section spacing='md' background='surface'>
			<Container>
				<Stack gap='sm' className='max-w-2xl'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='lg'>
						{title}
					</Heading>
					{content != null && (
						<RichTextBasic
							data={content as unknown as Parameters<typeof RichTextBasic>[0]['data']}
							textSize='md'
						/>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
