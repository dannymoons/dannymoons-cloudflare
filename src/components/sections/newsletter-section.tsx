import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/primitives/input'

export interface NewsletterSectionProps {
	heading: string
	paragraph?: string
	placeholder?: string
	ctaLabel?: string
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function NewsletterSection({
	heading,
	paragraph,
	placeholder = 'Uw e-mailadres',
	ctaLabel = 'Aanmelden',
	background = 'surface'
}: NewsletterSectionProps) {
	return (
		<Section spacing='md' background={background}>
			<Container size='default'>
				<Flex
					direction='col'
					gap='lg'
					align='start'
					className='rounded-xl border border-border bg-accent p-6 sm:flex-row sm:items-center sm:justify-between'
				>
					<Stack gap='xs' className='flex-1'>
						<Heading headingLevel='h3' size='sm'>
							{heading}
						</Heading>
						{paragraph && (
							<Paragraph size='sm' color='default' marginTop='none'>
								{paragraph}
							</Paragraph>
						)}
					</Stack>
					<Flex gap='sm' className='w-full sm:w-auto'>
						<Input
							type='email'
							placeholder={placeholder}
							className='min-w-[200px]'
						/>
						<Button size='sm' className='shrink-0'>
							{ctaLabel}
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}
