import { ArrowUpRight } from 'lucide-react'
import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import { cn } from '@/utilities/ui'

type Bg = 'default' | 'surface' | 'elevated' | 'primary'

type Item = {
	title: string
	description?: string | null
	category?: string | null
	year?: string | null
	url?: string | null
	id?: string | null
}

type Props = {
	eyebrow?: string | null
	title?: string | null
	items?: Item[] | null
	variant?: ('default' | 'detailed') | null
	backgroundColor?: Bg | null
}

export function WorkIndexBlock({ eyebrow, title, items, variant, backgroundColor }: Props) {
	const isDetailed = variant === 'detailed'

	return (
		<Section spacing='lg' background={backgroundColor ?? 'transparent'}>
			<Container>
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
				{isDetailed ? (
					<ol className='divide-y divide-border border-border border-t'>
						{(items ?? []).map((item, i) => {
							const Tag = item.url ? 'a' : 'div'
							return (
								<li key={item.id ?? i} className='group'>
									<Tag
										{...(item.url ? { href: item.url } : {})}
										className='grid items-center gap-4 py-7 sm:grid-cols-[4rem_1fr_auto] sm:gap-8 sm:py-8'
									>
										<span className='font-heading text-primary text-sm tabular-nums'>
											{String(i + 1).padStart(2, '0')}
										</span>
										<div>
											<p className='font-heading font-semibold text-xl transition-colors group-hover:text-primary sm:text-2xl'>
												{item.title}
											</p>
											{item.description && (
												<p className='mt-1 text-muted-foreground text-sm'>{item.description}</p>
											)}
										</div>
										{item.url && (
											<span className='hidden text-2xl text-muted-foreground transition-transform group-hover:translate-x-1 sm:inline'>
												→
											</span>
										)}
									</Tag>
								</li>
							)
						})}
					</ol>
				) : (
					<ul className='border-border border-t'>
						{(items ?? []).map((item, i) => {
							const Tag = item.url ? 'a' : 'div'
							return (
								<li key={item.id ?? i} className='border-border border-b'>
									<Tag
										{...(item.url ? { href: item.url } : {})}
										className={cn(
											'group flex items-baseline gap-4 py-5 sm:gap-8',
											item.url && 'transition-colors hover:text-primary'
										)}
									>
										<span className='w-8 shrink-0 font-mono text-muted-foreground text-sm tabular-nums'>
											{String(i + 1).padStart(2, '0')}
										</span>
										<span className='flex-1 font-heading font-semibold text-lg sm:text-xl'>
											{item.title}
										</span>
										{item.category && (
											<span className='hidden text-muted-foreground text-sm sm:block'>
												{item.category}
											</span>
										)}
										{item.year && (
											<span className='w-12 text-right text-muted-foreground text-sm tabular-nums'>
												{item.year}
											</span>
										)}
										{item.url && (
											<ArrowUpRight className='size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
										)}
									</Tag>
								</li>
							)
						})}
					</ul>
				)}
			</Container>
		</Section>
	)
}
