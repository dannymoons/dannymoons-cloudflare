import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Stat } from '@/components/display/stat'
import type { IconName } from '@/components/content/icon'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { Button } from '@/components/ui/button'
import type { HeroCompactBlock } from '@/payload-types'
import Link from 'next/link'

import { RichTextBasic } from '@/components/content/richtext'

export interface HeroStatementTextCta {
	label: string
	href: string
	variant?: 'primary' | 'secondary' | 'tertiary' | 'surface' | 'white' | 'link'
}

export interface HeroStatementTextStat {
	icon?: IconName
	value: string
	label: string
}

export interface HeroStatementTextProps {
	eyebrow?: string
	heading: string
	/** Plain string *or* Payload Lexical JSON (`hero.content`) */
	content?: HeroCompactBlock['content'] | string | null
	primaryCta?: HeroStatementTextCta
	secondaryCta?: HeroStatementTextCta
	stats?: HeroStatementTextStat[]
}

export function HeroStatementText({
	eyebrow,
	heading,
	content,
	primaryCta,
	secondaryCta,
	stats
}: HeroStatementTextProps) {
	return (
		<Section spacing='xl' className='relative overflow-hidden'>
			{/* Match `landing-preview-emerald` hero atmosphere — primary/secondary glows */}
			<div
				aria-hidden
				className='pointer-events-none absolute -top-1/2 -right-2/12 left-auto z-1 aspect-square size-[50vw] rounded-full bg-radial from-primary to-secondary opacity-20 blur-3xl'
			/>
			<div
				aria-hidden
				className='pointer-events-none absolute -top-1/2 -left-2/12 z-1 aspect-square size-[50vw] bg-linear-60 from-secondary to-primary opacity-20 blur-3xl'
			/>
			<Container className='relative z-10'>
				<Stack gap='lg'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='xl'>
						{heading}
					</Heading>
					{content != null &&
						content !== '' &&
						(typeof content === 'string' ? (
							<Paragraph marginTop='none' className='max-w-xl'>
								{content}
							</Paragraph>
						) : (
							<RichTextBasic data={content} textSize='lg' />
						))}
					{(primaryCta || secondaryCta) && (
						<Flex gap='sm' wrap>
							{primaryCta && (
								<Button
									size='lg'
									variant={primaryCta.variant ?? 'primary'}
									asChild
								>
									<Link href={primaryCta.href}>{primaryCta.label}</Link>
								</Button>
							)}
							{secondaryCta && (
								<Button
									size='lg'
									variant={secondaryCta.variant ?? 'secondary'}
									asChild
								>
									<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
								</Button>
							)}
						</Flex>
					)}
					{stats && stats.length > 0 && (
						<Flex gap='xl' wrap className='pt-2'>
							{stats.map(stat => (
								<Stat
									key={stat.value}
									icon={stat.icon}
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
