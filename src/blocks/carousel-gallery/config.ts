import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const CarouselGalleryBlock: Block = {
	slug: 'carouselGallery',
	interfaceName: 'CarouselGalleryBlock',
	labels: { singular: 'Carousel gallery', plural: 'Carousel galleries' },
	fields: [
		eyebrow,
		title,
		{
			name: 'images',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Slide', plural: 'Slides' },
			fields: [
				{ name: 'image', type: 'upload', relationTo: 'media', required: true },
				{ name: 'caption', type: 'text', localized: true }
			]
		},
		{
			name: 'variant',
			type: 'select',
			label: { nl: 'Weergave', en: 'Variant' },
			defaultValue: 'cards',
			options: [
				{ label: 'Cards (bordered, 3-up)', value: 'cards' },
				{ label: 'Peek (large, rounded, caption below)', value: 'peek' }
			]
		},
		backgroundColor()
	]
}
