import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Stat } from '@/components/display/stat'
import type { IconName } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import type { HeroStatementTextBlock as HeroStatementTextBlockType } from '@/payload-types'

export function HeroStatementTextBlock({
	eyebrow,
	title,
	content,
	buttons,
	stats,
	backgroundStyle = 'gradient',
	locale,
}: HeroStatementTextBlockType & { locale?: string }) {
	const isGradient = backgroundStyle === 'gradient'
	const bgColor = isGradient ? undefined : (backgroundStyle as 'default' | 'surface' | 'elevated' | 'primary')

	return (
		<Section spacing='xl' background={bgColor} className='relative overflow-hidden'>
			{isGradient && (
				<>
					<div
						aria-hidden
						className='pointer-events-none absolute -top-1/2 -right-2/12 left-auto z-1 aspect-square size-[50vw] rounded-full bg-radial from-primary to-secondary opacity-20 blur-3xl'
					/>
					<div
						aria-hidden
						className='pointer-events-none absolute -top-1/2 -left-2/12 z-1 aspect-square size-[50vw] bg-linear-60 from-secondary to-primary opacity-20 blur-3xl'
					/>
				</>
			)}
			<Container className='relative z-10'>
				<Stack gap='lg' className='max-w-3xl'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='xl'>
						{title}
					</Heading>
					{content != null && (
						<RichTextBasic
							data={
								content as unknown as Parameters<
									typeof RichTextBasic
								>[0]['data']
							}
							textSize='lg'
						/>
					)}
					{buttons && buttons.length > 0 && (
						<Flex gap='sm' wrap>
							{buttons.map(({ button: btn, id }) => (
								<CMSLink
									key={id ?? btn.label}
									{...btn}
									locale={locale}
									appearance={btn.color ?? 'primary'}
									size='lg'
								/>
							))}
						</Flex>
					)}
					{stats && stats.length > 0 && (
						<Flex gap='xl' wrap className='pt-2'>
							{stats.map(stat => (
								<Stat
									key={stat.value}
									icon={stat.icon as IconName | undefined}
									value={stat.value}
									label={stat.label}
								/>
							))}
						</Flex>
					)}
				</Stack>
			</Container>
		</Section>
	)
}
