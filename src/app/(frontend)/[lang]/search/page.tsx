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
import { localizePath, type Locale } from '@/utilities/locale'
import PageClient from './page.client'

const COPY: Record<Locale, { title: string; fallbackCategory: string; empty: string }> = {
	nl: {
		title: 'Zoeken',
		fallbackCategory: 'Artikel',
		empty: 'Geen resultaten gevonden.',
	},
	en: {
		title: 'Search',
		fallbackCategory: 'Article',
		empty: 'No results found.',
	},
}

type Args = {
	params: Promise<{
		lang?: string
	}>
	searchParams: Promise<{
		q: string
	}>
}

export default async function Page({ params: paramsPromise, searchParams: searchParamsPromise }: Args) {
	const { lang = 'nl' } = await paramsPromise
	const locale = lang as Locale
	const { q: query } = await searchParamsPromise
	const payload = await getPayload({ config: configPromise })

	const results = await payload.find({
		collection: 'search',
		depth: 1,
		limit: 12,
		locale,
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

	const copy = COPY[locale]

	return (
		<div className="pt-24">
			<PageClient />
			<Section spacing="lg">
				<Container>
					<Stack gap="md" align="center" className="mb-12 text-center">
						<Heading headingLevel="h1" size="lg" color="foreground">
							{copy.title}
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
										category={category?.title ?? copy.fallbackCategory}
										title={doc.meta?.title ?? doc.title ?? ''}
										excerpt={doc.meta?.description ?? ''}
										readMinutes={5}
										href={localizePath(`/posts/${doc.slug}`, locale)}
									/>
								)
							})}
						</Grid>
					) : (
						<p className="text-center text-muted-foreground">{copy.empty}</p>
					)}
				</Container>
			</Section>
		</div>
	)
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { lang = 'nl' } = await paramsPromise
	const locale = lang as Locale

	return {
		title: COPY[locale].title,
	}
}
