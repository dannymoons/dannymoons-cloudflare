import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { DynamicIcon, type IconName } from '@/components/content/icon'
import { Media } from '@/components/media'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'
import type { Media as MediaType } from '@/payload-types'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Size = 'normal' | 'wide' | 'tall' | 'large'

type Item = {
	icon?: string | null
	title: string
	description?: string | null
	image?: MediaType | string | null
	size?: Size | null
	id?: string | null
}

type Props = {
	eyebrow?: string | null
	title?: string | null
	items?: Item[] | null
	backgroundColor?: Bg | null
}

const SIZE_CLASSES: Record<Size, string> = {
	normal: '',
	wide: 'lg:col-span-2',
	tall: 'lg:row-span-2',
	large: 'lg:col-span-2 lg:row-span-2'
}

export function BentoGridBlock({ eyebrow, title, items, backgroundColor }: Props) {
	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container>
				{(eyebrow || title) && (
					<Stack gap='sm' align='center' className='mx-auto mb-12 max-w-xl text-center'>
						{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
						{title && (
							<Heading headingLevel='h2' size='lg'>
								{title}
							</Heading>
						)}
					</Stack>
				)}
				<div className='grid auto-rows-[minmax(200px,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{(items ?? []).map((item, i) => {
						const media = typeof item.image === 'object' ? item.image : null
						return (
							<div
								key={item.id ?? i}
								className={cn(
									'group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border bg-surface p-6',
									SIZE_CLASSES[item.size ?? 'normal']
								)}
							>
								{media?.url && (
									<Media
										resource={media}
										htmlElement={null}
										imgClassName='absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105'
									/>
								)}
								<div className='relative'>
									{item.icon && (
										<DynamicIcon name={item.icon as IconName} className='mb-3 size-6 text-primary' />
									)}
									<Heading headingLevel='h3' size='sm'>
										{item.title}
									</Heading>
									{item.description && (
										<p className='mt-2 text-muted-foreground text-sm'>{item.description}</p>
									)}
								</div>
							</div>
						)
					})}
				</div>
			</Container>
		</Section>
	)
}
