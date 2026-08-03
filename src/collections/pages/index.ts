import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { HeroCompactBlock } from '../../blocks/hero-compact/config'
import { HeroCoverBlock } from '../../blocks/hero-cover/config'
import { HeroSplitBlock } from '../../blocks/hero-split/config'
import { HeroStatementTextBlock } from '../../blocks/hero-statement-text/config'
import { FeaturesSimpleBlock } from '../../blocks/features-simple/config'
import { FeatureBoxesBlock } from '../../blocks/feature-boxes/config'
import { UspFeaturesBlock } from '../../blocks/usp-features/config'
import { UspWithMediaBlock } from '../../blocks/usp-with-media/config'
import { StepsBlock } from '../../blocks/steps/config'
import { CtaBlock } from '../../blocks/cta/config'
import { TestimonialsBlock } from '../../blocks/testimonials/config'
import { StatsBlock } from '../../blocks/stats/config'
import { TeamBlock } from '../../blocks/team/config'
import { ArchiveBlock } from '../../blocks/archive/config'
import { FaqBlock } from '../../blocks/faq/config'
import { PricingBlock } from '../../blocks/pricing/config'
import { MediaBlock } from '../../blocks/media/config'
import { TextWithMediaBlock } from '../../blocks/text-with-media/config'
import { CardsOpenBlock } from '../../blocks/cards-open/config'
import { CardsOverlayBlock } from '../../blocks/cards-overlay/config'
import { ImageFeaturesBlock } from '../../blocks/image-features/config'
import { PureContentBlock } from '../../blocks/pure-content/config'
import { LogoCloudBlock } from '../../blocks/logo-cloud/config'
import { GalleryBlock } from '../../blocks/gallery/config'
import { CarouselGalleryBlock } from '../../blocks/carousel-gallery/config'
import { NewsletterBlock } from '../../blocks/newsletter/config'
import { DataTableBlock } from '../../blocks/data-table/config'
import { ComparisonTableBlock } from '../../blocks/comparison-table/config'
import { WorkIndexBlock } from '../../blocks/work-index/config'
import { MarqueeBlock } from '../../blocks/marquee/config'
import { TimelineBlock } from '../../blocks/timeline/config'
import { BentoGridBlock } from '../../blocks/bento-grid/config'
import { FormBlock } from '@/blocks/form/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
	slug: 'pages',
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticatedOrPublished,
		update: authenticated
	},
	// This config controls what's populated by default when a page is referenced
	// https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
	// Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
	defaultPopulate: {
		title: true,
		slug: true
	},
	admin: {
		defaultColumns: ['title', 'slug', 'updatedAt'],
		livePreview: {
			url: ({ data, req }) =>
				generatePreviewPath({
					slug: data?.slug,
					collection: 'pages',
					req
				})
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: data?.slug as string,
				collection: 'pages',
				req
			}),
		useAsTitle: 'title'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			localized: true,
			required: true
		},
		{
			type: 'tabs',
			tabs: [
				// {
				//   fields: [hero],
				//   label: 'Hero',
				// },
				{
					fields: [
						{
							name: 'layout',
							type: 'blocks',
							blocks: [
								HeroCompactBlock,
								HeroCoverBlock,
								HeroSplitBlock,
								HeroStatementTextBlock,
								FeaturesSimpleBlock,
								FeatureBoxesBlock,
								UspFeaturesBlock,
								UspWithMediaBlock,
								StepsBlock,
								CtaBlock,
								TestimonialsBlock,
								StatsBlock,
								TeamBlock,
								ArchiveBlock,
								FaqBlock,
								PricingBlock,
								MediaBlock,
								TextWithMediaBlock,
								CardsOpenBlock,
								CardsOverlayBlock,
								ImageFeaturesBlock,
								PureContentBlock,
								LogoCloudBlock,
								GalleryBlock,
								CarouselGalleryBlock,
								NewsletterBlock,
								DataTableBlock,
								ComparisonTableBlock,
								WorkIndexBlock,
								MarqueeBlock,
								TimelineBlock,
								BentoGridBlock,
								FormBlock
							],
							required: true,
							admin: {
								initCollapsed: true
							}
						}
					],
					label: 'Content'
				},
				{
					name: 'meta',
					label: 'SEO',
					fields: [
						OverviewField({
							titlePath: 'meta.title',
							descriptionPath: 'meta.description',
							imagePath: 'meta.image'
						}),
						MetaTitleField({
							hasGenerateFn: true
						}),
						MetaImageField({
							relationTo: 'media'
						}),

						MetaDescriptionField({}),
						PreviewField({
							// if the `generateUrl` function is configured
							hasGenerateFn: true,

							// field paths to match the target field for data
							titlePath: 'meta.title',
							descriptionPath: 'meta.description'
						})
					]
				}
			]
		},
		{
			name: 'publishedAt',
			type: 'date',
			admin: {
				position: 'sidebar'
			}
		},
		slugField({
			localized: true,
		})
	],
	hooks: {
		afterChange: [revalidatePage],
		beforeChange: [populatePublishedAt],
		afterDelete: [revalidateDelete]
	},
	versions: {
		drafts: {
			autosave: {
				interval: 100 // We set this interval for optimal live preview
			},
			schedulePublish: true
		},
		maxPerDoc: 5
	}
}
