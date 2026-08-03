import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { CMSLink } from '@/components/content/cms-link'
import { Benefit } from '@/components/display/benefit'
import { StatCard } from '@/components/cards/stat-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import type { UspFeaturesBlock as UspFeaturesBlockType } from '@/payload-types'

export function UspFeaturesBlock({
	eyebrow,
	title,
	content,
	benefits,
	tagCardTitle,
	tagCardDescription,
	tags,
	stats,
	buttons,
	backgroundColor,
	locale,
}: UspFeaturesBlockType & { locale?: string }) {
	return (
		<Section spacing='lg' background={backgroundColor ?? 'surface'}>
			<Container>
				<Grid cols={12} gap='xl' className='items-center'>
					<Column spanMd={6}>
						<Stack gap='md'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
							{content != null &&
								(typeof content === 'string' ? (
									<p className='text-muted-foreground'>{content}</p>
								) : (
									<RichTextBasic data={content} />
								))}
							{benefits.length > 0 && (
								<ul className='flex flex-col gap-3'>
									{benefits.map(benefit => (
										<Benefit key={benefit.text} text={benefit.text} />
									))}
								</ul>
							)}
							{buttons && buttons.length > 0 && (
								<Flex gap='sm' wrap>
									{buttons.map(({ button: btn, id }) => (
										<CMSLink
											key={id ?? btn.label}
											{...btn}
											locale={locale}
											appearance={btn.color ?? 'primary'}
										/>
									))}
								</Flex>
							)}
						</Stack>
					</Column>
					<Column spanMd={6}>
						<Stack gap='md'>
							{(tagCardTitle || tagCardDescription || (tags && tags.length > 0)) && (
								<div className='rounded-xl border border-border bg-background p-6'>
									{tagCardTitle && (
										<h3 className='mb-1 font-semibold text-foreground text-sm'>{tagCardTitle}</h3>
									)}
									{tagCardDescription && (
										<p className='mb-4 text-muted-foreground text-xs'>{tagCardDescription}</p>
									)}
									{tags && tags.length > 0 && (
										<div className='flex flex-wrap gap-2'>
											{tags.map(tag => (
												<span
													key={tag.label}
													className='rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-medium text-secondary-foreground text-xs'
												>
													{tag.label}
												</span>
											))}
										</div>
									)}
								</div>
							)}
							{stats && stats.length > 0 && (
								<Grid cols={2} gap='md'>
									{stats.map(stat => (
										<StatCard
											key={stat.value}
											value={stat.value}
											label={stat.label}
											className='bg-background'
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
