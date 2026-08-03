import type { Block } from 'payload'
import { eyebrow, title, backgroundColor, lucideIconPicker } from '@/fields'

export const BentoGridBlock: Block = {
	slug: 'bentoGrid',
	interfaceName: 'BentoGridBlock',
	labels: { singular: 'Bento grid', plural: 'Bento grids' },
	fields: [
		eyebrow,
		title,
		{
			name: 'items',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Cell', plural: 'Cells' },
			fields: [
				lucideIconPicker,
				{ name: 'title', type: 'text', localized: true, required: true },
				{ name: 'description', type: 'textarea', localized: true },
				{ name: 'image', type: 'upload', relationTo: 'media' },
				{
					name: 'size',
					type: 'select',
					defaultValue: 'normal',
					label: { nl: 'Formaat', en: 'Size' },
					options: [
						{ label: { nl: 'Normaal', en: 'Normal' }, value: 'normal' },
						{ label: { nl: 'Breed', en: 'Wide' }, value: 'wide' },
						{ label: { nl: 'Hoog', en: 'Tall' }, value: 'tall' },
						{ label: { nl: 'Groot', en: 'Large' }, value: 'large' }
					]
				}
			]
		},
		backgroundColor()
	]
}
