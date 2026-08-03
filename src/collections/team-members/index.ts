import type { CollectionConfig } from 'payload'

import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const TeamMembers: CollectionConfig = {
	slug: 'team-members',
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	admin: {
		useAsTitle: 'name',
		defaultColumns: ['name', 'role', 'updatedAt'],
	},
	defaultPopulate: {
		name: true,
		role: true,
		bio: true,
		photo: true,
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
			required: true,
			label: { nl: 'Functie', en: 'Role' },
		},
		{
			name: 'bio',
			type: 'textarea',
			localized: true,
			label: { nl: 'Bio', en: 'Bio' },
		},
		{
			name: 'photo',
			type: 'upload',
			relationTo: 'media',
			label: { nl: 'Foto', en: 'Photo' },
		},
	],
}
