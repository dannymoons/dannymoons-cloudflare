import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const WorkIndexBlock: Block = {
	slug: 'workIndex',
	interfaceName: 'WorkIndexBlock',
	labels: { singular: 'Work index', plural: 'Work indexes' },
	fields: [
		eyebrow,
		title,
		{
			name: 'items',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Item', plural: 'Items' },
			fields: [
				{ name: 'title', type: 'text', localized: true, required: true },
				{
					name: 'description',
					type: 'text',
					localized: true,
					admin: {
						description: 'Optionele subregel (alleen zichtbaar in de "Detailed" variant)'
					}
				},
				{ name: 'category', type: 'text', localized: true },
				{ name: 'year', type: 'text' },
				{ name: 'url', type: 'text' }
			]
		},
		{
			name: 'variant',
			type: 'select',
			label: { nl: 'Weergave', en: 'Variant' },
			defaultValue: 'default',
			options: [
				{ label: 'Default (title · category · year)', value: 'default' },
				{ label: 'Detailed (number · title + description · arrow)', value: 'detailed' }
			]
		},
		backgroundColor()
	]
}
