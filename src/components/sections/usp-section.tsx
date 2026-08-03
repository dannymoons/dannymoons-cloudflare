import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Benefit } from '@/components/display/benefit'
import { StatCard } from '@/components/cards/stat-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Button } from '@/components/ui/button'
import { toButtonVariant } from '@/utilities/cta-variant'
import type { UspFeaturesBlock } from '@/payload-types'
import Link from 'next/link'

export interface UspCta {
	label: string
	href: string
	variant?: 'default' | 'outline'
}

export interface UspStat {
	value: string
	label: string
}

export interface UspTag {
	label: string
}

export interface UspSectionProps {
	eyebrow?: string
	heading: string
	content?: UspFeaturesBlock['content'] | string | null
	benefits: string[]
	stats?: UspStat[]
	tags?: UspTag[]
	primaryCta?: UspCta
	secondaryCta?: UspCta
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function UspSection({
	eyebrow,
	heading,
	content,
	benefits,
	stats,
	tags,
	primaryCta,
	secondaryCta,
	background = 'surface'
}: UspSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					<Column spanMd={6}>
						<Stack gap='md'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							<Heading headingLevel='h2' size='lg'>
								{heading}
							</Heading>
							{content != null &&
								content !== '' &&
								(typeof content === 'string' ? (
									<p className='text-muted-foreground'>{content}</p>
								) : (
									<RichTextBasic data={content} />
								))}
							{benefits.length > 0 && (
								<ul className='flex flex-col gap-3'>
									{benefits.map(benefit => (
										<Benefit key={benefit} text={benefit} />
									))}
								</ul>
							)}
							{(primaryCta || secondaryCta) && (
								<Flex gap='sm' wrap>
									{primaryCta && (
										<Button variant={toButtonVariant(primaryCta.variant ?? 'default')} asChild>
											<Link href={primaryCta.href}>{primaryCta.label}</Link>
										</Button>
									)}
									{secondaryCta && (
										<Button variant={toButtonVariant(secondaryCta.variant ?? 'outline')} asChild>
											<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
										</Button>
									)}
								</Flex>
							)}
						</Stack>
					</Column>
					<Column spanMd={6}>
						<Stack gap='md'>
							{tags && tags.length > 0 && (
								<div className='rounded-xl border border-border bg-card p-6'>
									<div className='flex flex-wrap gap-2'>
										{tags.map(tag => (
											<span
												key={tag.label}
												className='rounded-full border border-border bg-accent px-2.5 py-1 font-medium text-accent-foreground text-xs'
											>
												{tag.label}
											</span>
										))}
									</div>
								</div>
							)}
							{stats && stats.length > 0 && (
								<Grid cols={2} gap='md'>
									{stats.map(stat => (
										<StatCard
											key={stat.value}
											value={stat.value}
											label={stat.label}
										/>
									))}
								</Grid>
							)}
						</Stack>
					</Column>
				</Grid>
			</Container>
		</Section>
	)
}
