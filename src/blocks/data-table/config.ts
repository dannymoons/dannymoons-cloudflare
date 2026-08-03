import type { Block } from 'payload'
import { eyebrow, title, backgroundColor } from '@/fields'

export const DataTableBlock: Block = {
	slug: 'dataTable',
	interfaceName: 'DataTableBlock',
	labels: { singular: 'Data table', plural: 'Data tables' },
	fields: [
		eyebrow,
		title,
		{ name: 'caption', type: 'text', localized: true },
		{
			name: 'rows',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Row', plural: 'Rows' },
			fields: [
				{ name: 'label', type: 'text', localized: true, required: true },
				{ name: 'value', type: 'text', localized: true, required: true }
			]
		},
		backgroundColor()
	]
}
