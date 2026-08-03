import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const ComparisonTableBlock: Block = {
	slug: 'comparisonTable',
	interfaceName: 'ComparisonTableBlock',
	labels: { singular: 'Comparison table', plural: 'Comparison tables' },
	fields: [
		eyebrow,
		title,
		{
			name: 'columns',
			type: 'array',
			minRows: 1,
			label: { nl: 'Kolommen', en: 'Columns' },
			labels: { singular: 'Column', plural: 'Columns' },
			fields: [{ name: 'name', type: 'text', localized: true, required: true }]
		},
		{
			name: 'rows',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Row', plural: 'Rows' },
			fields: [
				{ name: 'feature', type: 'text', localized: true, required: true },
				{
					name: 'cells',
					type: 'array',
					labels: { singular: 'Cell', plural: 'Cells' },
					admin: {
						description: {
							nl: 'Eén cel per kolom. Gebruik ✓ / — of vrije tekst.',
							en: 'One cell per column. Use ✓ / — or free text.'
						}
					},
					fields: [{ name: 'value', type: 'text', localized: true }]
				}
			]
		},
		backgroundColor()
	]
}
