import type { Block } from 'payload'
import { tabContent, backgroundColor, lucideIconPicker } from '@/fields'

export const FeaturesSimpleBlock: Block = {
	slug: 'featuresSimple',
	interfaceName: 'FeaturesSimpleBlock',
	labels: {
		singular: { nl: 'Features Simple', en: 'Features Simple' },
		plural: { nl: 'Features Simple', en: 'Features Simple' }
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
									name: 'text',
									type: 'textarea',
									localized: true,
									required: true,
									label: { nl: 'Tekst', en: 'Text' }
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
							name: 'layout',
							type: 'select',
							label: { nl: 'Layout', en: 'Layout' },
							defaultValue: 'stacked',
							options: [
								{
									label: { nl: 'Content boven features', en: 'Content above features' },
									value: 'stacked'
								},
								{
									label: { nl: 'Kolommen', en: 'Columns' },
									value: 'columns'
								}
							]
						},
						{
							name: 'cols',
							type: 'select',
							label: { nl: 'Kolommen', en: 'Columns' },
							defaultValue: '3',
							admin: {
								condition: (_, siblingData) => siblingData?.layout !== 'columns'
							},
							options: [
								{ label: { nl: '2 kolommen', en: '2 columns' }, value: '2' },
								{ label: { nl: '3 kolommen', en: '3 columns' }, value: '3' },
								{ label: { nl: '4 kolommen', en: '4 columns' }, value: '4' }
							]
						},
						backgroundColor()
					]
				}
			]
		}
	]
}
