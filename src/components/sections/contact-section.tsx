import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Column } from '@/components/layout/column'
import { Stack } from '@/components/layout/stack'
import { DynamicIcon } from '@/components/content/icon'
import type { ReactNode } from 'react'

export interface ContactDetail {
	icon: string
	label: string
	value: string
	href?: string
}

export interface ContactSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	details?: ContactDetail[]
	form?: ReactNode
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function ContactSection({
	eyebrow,
	heading,
	paragraph,
	details,
	form,
	background = 'transparent',
}: ContactSectionProps) {
	return (
		<Section spacing='lg' background={background}>
			<Container>
				<Grid cols={12} gap='xl'>
					<Column spanMd={5}>
						<Stack gap='md'>
							{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
							<Heading headingLevel='h2' size='lg'>
								{heading}
							</Heading>
							{paragraph && (
								<Paragraph color='default' marginTop='none'>
									{paragraph}
								</Paragraph>
							)}
							{details && details.length > 0 && (
								<Stack gap='sm' className='mt-2'>
									{details.map(detail => (
										<div key={detail.label} className='flex items-start gap-3'>
											<div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent text-primary'>
												<DynamicIcon name={detail.icon} className='h-4 w-4' />
											</div>
											<div>
												<p className='font-medium text-foreground text-sm'>{detail.label}</p>
												{detail.href ? (
													<a
														href={detail.href}
														className='text-muted-foreground text-sm hover:text-primary transition-colors'
													>
														{detail.value}
													</a>
												) : (
													<p className='text-muted-foreground text-sm'>{detail.value}</p>
												)}
											</div>
										</div>
									))}
								</Stack>
							)}
						</Stack>
					</Column>
					{form && (
						<Column spanMd={7}>
							<div className='rounded-xl border border-border bg-card p-6 md:p-8'>
								{form}
							</div>
						</Column>
					)}
				</Grid>
			</Container>
		</Section>
	)
}
