import { Heading } from '@/components/content/heading'
import { Media } from '@/components/media'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Flex } from '@/components/layout/flex'
import { Stack } from '@/components/layout/stack'
import type { Media as MediaType } from '@/payload-types'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Logo = {
	name: string
	logo?: MediaType | string | null
	url?: string | null
	id?: string | null
}

type Props = {
	title?: string | null
	logos?: Logo[] | null
	backgroundColor?: Bg | null
}

export function LogoCloudBlock({ title, logos, backgroundColor }: Props) {
	return (
		<Section spacing='md' background={backgroundColor ?? 'surface'}>
			<Container>
				<Stack gap='lg' align='center'>
					{title && (
						<Heading headingLevel='h2' size='sm' className='text-muted-foreground'>
							{title}
						</Heading>
					)}
					<Flex gap='xl' wrap justify='center' align='center'>
						{(logos ?? []).map((logo, i) => {
							const media = typeof logo.logo === 'object' ? logo.logo : null
							const inner = media?.url ? (
								<Media
									resource={media}
									htmlElement={null}
									imgClassName='h-8 w-auto opacity-70 transition-opacity hover:opacity-100'
								/>
							) : (
								<span className='font-heading font-semibold text-lg text-muted-foreground'>
									{logo.name}
								</span>
							)

							return logo.url ? (
								<a key={logo.id ?? i} href={logo.url} target='_blank' rel='noopener noreferrer'>
									{inner}
								</a>
							) : (
								<span key={logo.id ?? i}>{inner}</span>
							)
						})}
					</Flex>
				</Stack>
			</Container>
		</Section>
	)
}
