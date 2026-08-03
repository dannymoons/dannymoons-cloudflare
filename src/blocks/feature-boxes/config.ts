import type { Block } from 'payload'
import { tabContent, backgroundColor, lucideIconPicker } from '@/fields'

export const FeatureBoxesBlock: Block = {
	slug: 'featureBoxes',
	interfaceName: 'FeatureBoxesBlock',
	labels: {
		singular: { nl: 'Feature Boxes', en: 'Feature Boxes' },
		plural: { nl: 'Feature Boxes', en: 'Feature Boxes' }
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Items', en: 'Items' },
					fields: [
						{
							name: 'items',
							type: 'array',
							label: { nl: 'Items', en: 'Items' },
							labels: {
								singular: { nl: 'Item', en: 'Item' },
								plural: { nl: 'Items', en: 'Items' }
							},
							required: true,
							minRows: 1,
							fields: [
								lucideIconPicker,
								{
									name: 'heading',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Heading', en: 'Heading' }
								},
								{
									name: 'subtitle',
									type: 'text',
									localized: true,
									label: { nl: 'Subtitel', en: 'Subtitle' }
								},
								{
									name: 'description',
									type: 'textarea',
									localized: true,
									required: true,
									label: { nl: 'Beschrijving', en: 'Description' }
								},
								{
									name: 'tags',
									type: 'array',
									label: { nl: 'Tags', en: 'Tags' },
									labels: { singular: 'Tag', plural: 'Tags' },
									fields: [
										{
											name: 'tag',
											type: 'text',
											localized: true,
											required: true,
											label: { nl: 'Tag', en: 'Tag' }
										}
									]
								},
								{
									name: 'link',
									type: 'text',
									localized: true,
									label: { nl: 'Link', en: 'Link' }
								}
							]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'cols',
							type: 'select',
							label: { nl: 'Kolommen', en: 'Columns' },
							defaultValue: '3',
							options: [
								{ label: { nl: '2 kolommen', en: '2 columns' }, value: '2' },
								{ label: { nl: '3 kolommen', en: '3 columns' }, value: '3' }
							]
						},
						backgroundColor()
					]
				}
			]
		}
	]
}
