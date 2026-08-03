import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Item = {
	date: string
	title: string
	description?: string | null
	id?: string | null
}

type Props = {
	eyebrow?: string | null
	title?: string | null
	items?: Item[] | null
	backgroundColor?: Bg | null
}

export function TimelineBlock({ eyebrow, title, items, backgroundColor }: Props) {
	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container size='default'>
				{(eyebrow || title) && (
					<Stack gap='sm' className='mb-12'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<ol className='relative ml-3 border-border border-l'>
					{(items ?? []).map((item, i) => (
						<li key={item.id ?? i} className='relative pb-10 pl-8 last:pb-0'>
							<span className='absolute top-1 -left-[7px] size-3.5 rounded-full border-2 border-primary bg-background' />
							<span className='font-mono text-muted-foreground text-xs uppercase tracking-widest'>
								{item.date}
							</span>
							<Heading headingLevel='h3' size='sm' className='mt-1'>
								{item.title}
							</Heading>
							{item.description && (
								<Paragraph size='sm' marginTop='sm'>
									{item.description}
								</Paragraph>
							)}
						</li>
					))}
				</ol>
			</Container>
		</Section>
	)
}
