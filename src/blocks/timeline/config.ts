import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const TimelineBlock: Block = {
	slug: 'timeline',
	interfaceName: 'TimelineBlock',
	labels: { singular: 'Timeline', plural: 'Timelines' },
	fields: [
		eyebrow,
		title,
		{
			name: 'items',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Milestone', plural: 'Milestones' },
			fields: [
				{ name: 'date', type: 'text', localized: true, required: true },
				{ name: 'title', type: 'text', localized: true, required: true },
				{ name: 'description', type: 'textarea', localized: true }
			]
		},
		backgroundColor()
	]
}
