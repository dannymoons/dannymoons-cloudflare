import type { Block } from 'payload'

export const ArchiveBlock: Block = {
	slug: 'archive',
	interfaceName: 'ArchiveBlock',
	labels: { singular: 'Archive', plural: 'Archives' },
	fields: [
		{ name: 'eyebrow', type: 'text', localized: true },
		{ name: 'heading', type: 'text', localized: true },
		{
			name: 'populateBy',
			type: 'select',
			defaultValue: 'collection',
			options: [
				{ label: 'Collection (latest posts)', value: 'collection' },
				{ label: 'Selection (choose posts)', value: 'selection' },
			],
		},
		{
			name: 'limit',
			type: 'number',
			defaultValue: 6,
			admin: {
				condition: (_, { populateBy }) => populateBy === 'collection',
				description: 'Number of posts to show',
			},
		},
		{
			name: 'showFilters',
			type: 'checkbox',
			defaultValue: false,
			admin: { description: 'Show category filter tabs' },
		},
		{
			name: 'selectedDocs',
			type: 'relationship',
			relationTo: 'posts',
			hasMany: true,
			admin: { condition: (_, { populateBy }) => populateBy === 'selection' },
		},
	],
}
