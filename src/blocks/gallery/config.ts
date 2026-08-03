import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const GalleryBlock: Block = {
	slug: 'gallery',
	interfaceName: 'GalleryBlock',
	labels: { singular: 'Gallery', plural: 'Galleries' },
	fields: [
		eyebrow,
		title,
		{
			name: 'columns',
			type: 'select',
			defaultValue: '3',
			label: { nl: 'Kolommen', en: 'Columns' },
			options: [
				{ label: '2', value: '2' },
				{ label: '3', value: '3' },
				{ label: '4', value: '4' }
			]
		},
		{
			name: 'images',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Image', plural: 'Images' },
			fields: [
				{ name: 'image', type: 'upload', relationTo: 'media', required: true },
				{ name: 'caption', type: 'text', localized: true }
			]
		},
		backgroundColor()
	]
}
