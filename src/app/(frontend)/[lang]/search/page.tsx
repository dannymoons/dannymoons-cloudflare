import type { Metadata } from 'next/types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import { Search } from '@/search/component'
import { PostCard } from '@/components/cards/post-card'
import { Container } from '@/components/layout/container'
import { Section } from '@/components/layout/section'
import { Grid } from '@/components/layout/grid'
import { Stack } from '@/components/layout/stack'
import { Heading } from '@/components/content/heading'
import PageClient from './page.client'

type Args = {
	searchParams: Promise<{
		q: string
	}>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
	const { q: query } = await searchParamsPromise
	const payload = await getPayload({ config: configPromise })

	const results = await payload.find({
		collection: 'search',
		depth: 1,
		limit: 12,
		locale: 'en',
		select: {
			title: true,
			slug: true,
			categories: true,
			meta: true,
		},
		pagination: false,
		...(query
			? {
					where: {
						or: [
							{ title: { like: query } },
							{ 'meta.description': { like: query } },
							{ 'meta.title': { like: query } },
							{ slug: { like: query } },
						],
					},
			  }
			: {}),
	})

	return (
		<div className="pt-24">
			<PageClient />
			<Section spacing="lg">
				<Container>
					<Stack gap="md" align="center" className="mb-12 text-center">
						<Heading headingLevel="h1" size="lg" color="foreground">
							Search
						</Heading>
						<div className="mx-auto w-full max-w-xl text-left">
							<Search />
						</div>
					</Stack>

					{results.totalDocs > 0 ? (
						<Grid cols={3} gap="md">
							{results.docs.map((doc) => {
								const category = (doc.categories ?? []).find((value) => value?.title)

								return (
									<PostCard
										key={doc.id}
										category={category?.title ?? 'Article'}
										title={doc.meta?.title ?? doc.title ?? ''}
										excerpt={doc.meta?.description ?? ''}
										readMinutes={5}
										href={`/posts/${doc.slug}`}
									/>
								)
							})}
						</Grid>
					) : (
						<p className="text-center text-muted-foreground">No results found.</p>
					)}
				</Container>
			</Section>
		</div>
	)
}

export function generateMetadata(): Metadata {
	return {
		title: 'Search',
	}
}
