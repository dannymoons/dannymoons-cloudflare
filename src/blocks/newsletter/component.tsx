import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/primitives/input'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Props = {
	title: string
	description?: string | null
	placeholder?: string | null
	ctaLabel?: string | null
	backgroundColor?: Bg | null
}

export function NewsletterBlock({
	title,
	description,
	placeholder,
	ctaLabel,
	backgroundColor
}: Props) {
	return (
		<Section spacing='md' background={backgroundColor ?? 'surface'}>
			<Container size='default'>
				<Flex
					direction='col'
					gap='lg'
					align='start'
					className='rounded-xl border border-border bg-accent p-6 sm:flex-row sm:items-center sm:justify-between'
				>
					<Stack gap='xs' className='flex-1'>
						<Heading headingLevel='h3' size='sm'>
							{title}
						</Heading>
						{description && (
							<Paragraph size='sm' color='default' marginTop='none'>
								{description}
							</Paragraph>
						)}
					</Stack>
					<Flex gap='sm' className='w-full sm:w-auto'>
						<Input
							type='email'
							placeholder={placeholder ?? 'you@example.com'}
							className='min-w-[200px]'
						/>
						<Button size='sm' className='shrink-0'>
							{ctaLabel ?? 'Subscribe'}
						</Button>
					</Flex>
				</Flex>
			</Container>
		</Section>
	)
}
