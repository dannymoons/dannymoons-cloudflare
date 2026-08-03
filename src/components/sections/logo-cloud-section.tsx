import { Heading } from '@/components/content/heading'
import { LogoCard } from '@/components/cards/logo-card'
import type { LogoCardProps } from '@/components/cards/logo-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'

export interface LogoCloudSectionProps {
	heading?: string
	logos: Omit<LogoCardProps, 'className'>[]
	background?: 'default' | 'surface' | 'elevated' | 'transparent'
}

export function LogoCloudSection({
	heading,
	logos,
	background = 'surface',
}: LogoCloudSectionProps) {
	return (
		<Section spacing='md' background={background}>
			<Container>
				<Stack gap='lg' align='center'>
					{heading && (
						<Heading headingLevel='h2' size='sm' className='text-muted-foreground'>
							{heading}
						</Heading>
					)}
					<Flex gap='md' wrap justify='center'>
						{logos.map(logo => (
							<LogoCard key={logo.name} {...logo} />
						))}
					</Flex>
				</Stack>
			</Container>
		</Section>
	)
}
