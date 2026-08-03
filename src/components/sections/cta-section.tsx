import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { Flex } from '@/components/layout/flex'
import { Button } from '@/components/ui/button'
import { toButtonVariant } from '@/utilities/cta-variant'
import Link from 'next/link'

export interface CtaCta {
	label: string
	href: string
	variant?: 'default' | 'outline' | 'secondary' | 'ghost'
}

export interface CtaSectionProps {
	eyebrow?: string
	heading: string
	paragraph?: string
	primaryCta?: CtaCta
	secondaryCta?: CtaCta
	variant?: 'centered' | 'card'
	background?: 'default' | 'surface' | 'elevated' | 'primary' | 'transparent'
}

export function CtaSection({
	eyebrow,
	heading,
	paragraph,
	primaryCta,
	secondaryCta,
	variant = 'centered',
	background = 'surface'
}: CtaSectionProps) {
	const content = (
		<Stack gap='md' align='center' className='text-center'>
			{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
			<Heading headingLevel='h2' size='lg'>
				{heading}
			</Heading>
			{paragraph && (
				<Paragraph color='default' marginTop='none' className='max-w-lg'>
					{paragraph}
				</Paragraph>
			)}
			{(primaryCta || secondaryCta) && (
				<Flex gap='sm' wrap justify='center'>
					{primaryCta && (
						<Button size='lg' variant={toButtonVariant(primaryCta.variant ?? 'default')} asChild>
							<Link href={primaryCta.href}>{primaryCta.label}</Link>
						</Button>
					)}
					{secondaryCta && (
						<Button
							size='lg'
							variant={toButtonVariant(secondaryCta.variant ?? 'outline')}
							asChild
						>
							<Link href={secondaryCta.href}>{secondaryCta.label}</Link>
						</Button>
					)}
				</Flex>
			)}
		</Stack>
	)

	if (variant === 'card') {
		return (
			<Section spacing='lg' background='transparent'>
				<Container>
					<div className='rounded-2xl border border-border bg-accent p-10 md:p-16'>
						{content}
					</div>
				</Container>
			</Section>
		)
	}

	return (
		<Section spacing='lg' background={background}>
			<Container>{content}</Container>
		</Section>
	)
}
