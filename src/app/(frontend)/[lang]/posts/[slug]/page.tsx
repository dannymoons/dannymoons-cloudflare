import type { Metadata } from "next";

import { PayloadRedirects } from "@/components/payload/payload-redirects";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { draftMode } from "next/headers";
import { cache } from "react";

import type { Post } from "@/payload-types";

import { RichTextBasic } from "@/components/content/richtext";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PostHero } from "@/components/sections/post-hero";
import { ArticleFooter } from "@/components/sections/article-footer";
import { generateMeta } from "@/utilities/generateMeta";
import { getLocaleAlternates } from "@/utilities/getLocaleAlternates";
import { localizePath, staticAlternates, type Locale } from "@/utilities/locale";
import PageClient from "./page.client";
import { LivePreviewListener } from "@/components/payload/live-preview-listener";

type Args = {
	params: Promise<{
		slug?: string;
		lang?: string;
	}>;
};

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise });
	const locales = ['nl', 'en'] as const;
	const results: { slug: string; lang: string }[] = [];

	for (const lang of locales) {
		const posts = await payload.find({
			collection: "posts",
			draft: false,
			limit: 1000,
			overrideAccess: false,
			pagination: false,
		locale: lang as 'nl' | 'en',
			select: {
				slug: true,
			},
		});

		results.push(...posts.docs.map(({ slug }) => ({ slug, lang })));
	}

	return results;
}

export default async function Page({ params: paramsPromise }: Args) {
	const { isEnabled: draft } = await draftMode();
	const { slug = "", lang = "nl" } = await paramsPromise;
	const locale = lang as Locale;
	const decodedSlug = decodeURIComponent(slug);
	const url = `/${lang}/posts/${decodedSlug}`;
	const post = await queryPostBySlug({ slug: decodedSlug, lang });

	if (!post) return <PayloadRedirects url={url} />;

	const postId = (post as { id?: string | number }).id;
	const alternates = postId
		? await getLocaleAlternates({ collection: "posts", id: postId })
		: staticAlternates(`/posts/${decodedSlug}`);

	const fallbackCategory = locale === "nl" ? "Artikel" : "Article";

	const relatedPosts = (post.relatedPosts ?? [])
		.filter((related): related is Post => typeof related === "object" && related !== null)
		.map((related) => {
			const category = (related.categories ?? []).find(
				(value) => typeof value === "object" && value?.title,
			);

			return {
				category:
					typeof category === "object" && category?.title
						? category.title
						: fallbackCategory,
				title: related.title,
				excerpt: related.meta?.description ?? "",
				readMinutes: 5,
				href: localizePath(`/posts/${related.slug}`, locale),
			};
		});

	return (
		<article className="pb-16">
			<PageClient />
			<PayloadRedirects disableNotFound url={url} />

			{draft && <LivePreviewListener />}

			<PostHero post={post} locale={locale} />

			<Section spacing="lg">
				<Container size="narrow">
					<RichTextBasic
						data={post.content as unknown as Parameters<typeof RichTextBasic>[0]["data"]}
					/>
				</Container>
			</Section>

			{relatedPosts.length > 0 && <ArticleFooter relatedPosts={relatedPosts} />}
		</article>
	);
}

export async function generateMetadata({
	params: paramsPromise,
}: Args): Promise<Metadata> {
	const { slug = "", lang = "nl" } = await paramsPromise;
	const decodedSlug = decodeURIComponent(slug);
	const post = await queryPostBySlug({ slug: decodedSlug, lang });

	const postId = (post as { id?: string | number } | null)?.id;
	const alternates = postId
		? await getLocaleAlternates({ collection: "posts", id: postId })
		: staticAlternates(`/posts/${decodedSlug}`);

	return generateMeta({ doc: post, alternates, locale: lang as Locale });
}

const queryPostBySlug = cache(async ({ slug, lang }: { slug: string; lang: string }) => {
	const { isEnabled: draft } = await draftMode();

	const payload = await getPayload({ config: configPromise });

	const result = await payload.find({
		collection: "posts",
		draft,
		limit: 1,
		overrideAccess: draft,
		pagination: false,
		locale: lang as 'nl' | 'en',
		where: {
			slug: {
				equals: slug,
			},
		},
	});

	return result.docs?.[0] || null;
});
