import type { Block } from 'payload'
import { backgroundColor } from '@/fields'

export const NewsletterBlock: Block = {
	slug: 'newsletter',
	interfaceName: 'NewsletterBlock',
	labels: { singular: 'Newsletter', plural: 'Newsletters' },
	fields: [
		{ name: 'title', type: 'text', localized: true, required: true },
		{ name: 'description', type: 'textarea', localized: true },
		{
			name: 'placeholder',
			type: 'text',
			localized: true,
			defaultValue: 'you@example.com'
		},
		{
			name: 'ctaLabel',
			type: 'text',
			localized: true,
			defaultValue: 'Subscribe'
		},
		backgroundColor({ defaultValue: 'surface' })
	]
}
