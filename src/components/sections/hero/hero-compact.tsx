import { Eyebrow } from '@/components/content/eyebrow'
import { Heading } from '@/components/content/heading'
import { RichTextBasic } from '@/components/content/richtext'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Stack } from '@/components/layout/stack'
import type { HeroCompactBlock } from '@/payload-types'

export interface BreadcrumbItem {
	label: string
	href?: string
}

export interface HeroCompactProps {
	eyebrow?: string
	heading: string
	content?: HeroCompactBlock['content'] | string | null
	breadcrumbs?: BreadcrumbItem[]
}

export function HeroCompact({
	eyebrow,
	heading,
	content,
	breadcrumbs
}: HeroCompactProps) {
	return (
		<Section spacing='md' background='surface'>
			<Container>
				{breadcrumbs && breadcrumbs.length > 0 && (
					<nav className='mb-4 flex items-center gap-1.5 text-muted-foreground text-xs'>
						{breadcrumbs.map((crumb, i) => (
							<span key={crumb.label} className='flex items-center gap-1.5'>
								{i > 0 && <span>/</span>}
								{crumb.href ? (
									<a
										href={crumb.href}
										className='transition-colors hover:text-foreground'
									>
										{crumb.label}
									</a>
								) : (
									<span className='text-foreground'>{crumb.label}</span>
								)}
							</span>
						))}
					</nav>
				)}
				<Stack gap='sm' className='max-w-2xl'>
					{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
					<Heading headingLevel='h1' size='lg'>
						{heading}
					</Heading>
					{content != null && content !== '' && (
						typeof content === 'string' ? (
							<p className='text-md text-muted-foreground'>{content}</p>
						) : (
							<RichTextBasic data={content} textSize='md' />
						)
					)}
				</Stack>
			</Container>
		</Section>
	)
}
