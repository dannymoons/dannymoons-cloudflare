import type { Metadata } from 'next/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Heading } from '@/components/content/heading'
import { Paragraph } from '@/components/content/paragraph'
import { getDocsNav } from './_lib/getDocsNav'

export const dynamic = 'force-static'
export const revalidate = 600

export function generateStaticParams() {
	return [{ lang: 'en' }]
}

export default async function DocsIndex() {
	const groups = await getDocsNav('en')

	return (
		<div className='flex flex-col gap-10'>
			<header className='flex flex-col gap-3 border-border border-b pb-8'>
				<Heading headingLevel='h1' size='lg'>
					Documentation
				</Heading>
				<Paragraph color='muted' marginTop='none'>
					Browse the documentation, guides and reference material.
				</Paragraph>
			</header>

			<div className='flex flex-col gap-10'>
				{groups.map((group) => (
					<section key={group.id} className='flex flex-col gap-4'>
						<Heading headingLevel='h2' size='sm'>
							{group.title}
						</Heading>
						<div className='grid gap-3 sm:grid-cols-2'>
							{group.docs.map((doc) => (
								<Link
									key={doc.slug}
									href={`/docs/${doc.slug}`}
									className='group flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40'
								>
									<span className='font-medium text-foreground text-sm'>
										{doc.title}
									</span>
									<ArrowRight className='size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary' />
								</Link>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	)
}

export function generateMetadata(): Metadata {
	return {
		title: 'Documentation',
		description: 'Browse the documentation, guides and reference material.'
	}
}
