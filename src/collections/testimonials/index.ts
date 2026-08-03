import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const Testimonials: CollectionConfig = {
	slug: 'testimonials',
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	admin: {
		useAsTitle: 'name',
		defaultColumns: ['name', 'role', 'stars', 'updatedAt'],
	},
	defaultPopulate: {
		name: true,
		role: true,
		quote: true,
		stars: true,
		avatar: true,
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			localized: true,
			required: true,
			label: { nl: 'Naam', en: 'Name' },
		},
		{
			name: 'role',
			type: 'text',
			localized: true,
			label: { nl: 'Functie', en: 'Role' },
		},
		{
			name: 'quote',
			type: 'textarea',
			localized: true,
			required: true,
			label: { nl: 'Citaat', en: 'Quote' },
		},
		{
			name: 'stars',
			type: 'number',
			defaultValue: 5,
			min: 1,
			max: 5,
			label: { nl: 'Sterren', en: 'Stars' },
		},
		{
			name: 'avatar',
			type: 'upload',
			relationTo: 'media',
			label: { nl: 'Avatar', en: 'Avatar' },
		},
	],
}
