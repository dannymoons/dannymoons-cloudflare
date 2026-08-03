import type { Block } from 'payload'
import { backgroundColor } from '@/fields'

export const MarqueeBlock: Block = {
	slug: 'marquee',
	interfaceName: 'MarqueeBlock',
	labels: { singular: 'Marquee', plural: 'Marquees' },
	fields: [
		{
			name: 'items',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Item', plural: 'Items' },
			fields: [{ name: 'text', type: 'text', localized: true, required: true }]
		},
		{
			name: 'speed',
			type: 'select',
			defaultValue: 'normal',
			label: { nl: 'Snelheid', en: 'Speed' },
			options: [
				{ label: { nl: 'Langzaam', en: 'Slow' }, value: 'slow' },
				{ label: { nl: 'Normaal', en: 'Normal' }, value: 'normal' },
				{ label: { nl: 'Snel', en: 'Fast' }, value: 'fast' }
			]
		},
		backgroundColor({ defaultValue: 'surface' })
	]
}
