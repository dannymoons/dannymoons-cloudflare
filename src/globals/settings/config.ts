import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'

export const Settings: GlobalConfig = {
	slug: 'settings',
	access: {
		read: anyone,
		update: authenticated
	},
	admin: {
		description: 'Site-wide settings used for branding and default SEO.'
	},
	fields: [
		{
			name: 'siteName',
			type: 'text',
			required: true,
			defaultValue: 'Danny Moons'
		},
		{
			name: 'tagline',
			type: 'text',
			localized: true,
			admin: {
				description: 'Used as the default meta description fallback.'
			}
		},
		{
			name: 'logo',
			type: 'upload',
			relationTo: 'media'
		},
		{
			name: 'defaultSeoImage',
			type: 'upload',
			relationTo: 'media',
			admin: {
				description: 'Fallback Open Graph / social share image.'
			}
		},
		{
			name: 'social',
			type: 'group',
			fields: [
				{ name: 'twitter', type: 'text' },
				{ name: 'linkedin', type: 'text' },
				{ name: 'instagram', type: 'text' },
				{ name: 'github', type: 'text' }
			]
		}
	],
	hooks: {}
}
