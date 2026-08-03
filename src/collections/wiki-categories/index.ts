import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'
import { slugField } from 'payload'

export const WikiCategories: CollectionConfig = {
	slug: 'wiki-categories',
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated
	},
	admin: {
		useAsTitle: 'title',
		group: 'Wiki',
		defaultColumns: ['title', 'order', 'slug']
	},
	labels: {
		singular: 'Wiki category',
		plural: 'Wiki categories'
	},
	fields: [
		{
			name: 'title',
			type: 'text',
			localized: true,
			required: true
		},
		{
			name: 'order',
			type: 'number',
			defaultValue: 0,
			admin: {
				position: 'sidebar',
				description: 'Controls the order of categories in the docs sidebar.'
			}
		},
		slugField({
			localized: true,
			position: undefined
		})
	]
}
