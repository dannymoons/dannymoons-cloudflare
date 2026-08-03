import type { CollectionConfig } from 'payload'

import {
	FixedToolbarFeature,
	HeadingFeature,
	HorizontalRuleFeature,
	InlineToolbarFeature,
	lexicalEditor
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateWiki, revalidateWikiDelete } from './hooks/revalidateWiki'

import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Wiki: CollectionConfig<'wiki'> = {
	slug: 'wiki',
	access: {
		create: authenticated,
		delete: authenticated,
		read: authenticatedOrPublished,
		update: authenticated
	},
	defaultPopulate: {
		title: true,
		slug: true,
		category: true
	},
	admin: {
		defaultColumns: ['title', 'category', 'order', 'slug', 'updatedAt'],
		group: 'Wiki',
		livePreview: {
			url: ({ data, req }) =>
				generatePreviewPath({
					slug: data?.slug,
					collection: 'wiki',
					req
				})
		},
		preview: (data, { req }) =>
			generatePreviewPath({
				slug: data?.slug as string,
				collection: 'wiki',
				req
			}),
		useAsTitle: 'title'
	},
	labels: {
		singular: 'Wiki doc',
		plural: 'Wiki docs'
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
				{
					label: 'Content',
					fields: [
						{
							name: 'excerpt',
							type: 'textarea',
							localized: true,
							admin: {
								description: 'Short summary shown in listings and search results.'
							}
						},
						{
							name: 'content',
							type: 'richText',
							localized: true,
							editor: lexicalEditor({
								features: ({ rootFeatures }) => {
									return [
										...rootFeatures,
										HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
										FixedToolbarFeature(),
										InlineToolbarFeature(),
										HorizontalRuleFeature()
									]
								}
							}),
							label: false,
							required: true
						}
					]
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
						MetaTitleField({ hasGenerateFn: true }),
						MetaImageField({ relationTo: 'media' }),
						MetaDescriptionField({}),
						PreviewField({
							hasGenerateFn: true,
							titlePath: 'meta.title',
							descriptionPath: 'meta.description'
						})
					]
				}
			]
		},
		{
			name: 'category',
			type: 'relationship',
			relationTo: 'wiki-categories',
			admin: {
				position: 'sidebar'
			}
		},
		{
			name: 'order',
			type: 'number',
			defaultValue: 0,
			admin: {
				position: 'sidebar',
				description: 'Controls the order within its category in the sidebar.'
			}
		},
		{
			name: 'publishedAt',
			type: 'date',
			admin: {
				position: 'sidebar'
			}
		},
		slugField({
			localized: true
		})
	],
	hooks: {
		afterChange: [revalidateWiki],
		afterDelete: [revalidateWikiDelete]
	},
	versions: {
		drafts: {
			autosave: {
				interval: 100
			},
			schedulePublish: true
		},
		maxPerDoc: 20
	}
}
