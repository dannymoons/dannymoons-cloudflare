import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
	slug: 'footer',
	access: {
		read: anyone,
		update: authenticated
	},
	fields: [
		{
			name: 'description',
			type: 'textarea',
			localized: true,
			admin: {
				description: 'Short blurb shown next to the brand in the footer.'
			}
		},
		{
			name: 'columns',
			type: 'array',
			maxRows: 4,
			labels: {
				singular: 'Column',
				plural: 'Columns'
			},
			fields: [
				{
					name: 'label',
					type: 'text',
					localized: true,
					required: true
				},
				{
					name: 'navItems',
					type: 'array',
					maxRows: 8,
					fields: [
						link({
							appearances: false
						})
					],
					admin: {
						initCollapsed: true
					}
				}
			],
			admin: {
				initCollapsed: true
			}
		},
		{
			name: 'socialLinks',
			type: 'array',
			maxRows: 6,
			fields: [
				{
					name: 'label',
					type: 'text',
					required: true
				},
				{
					name: 'url',
					type: 'text',
					required: true
				}
			],
			admin: {
				initCollapsed: true
			}
		}
	],
	hooks: {
		afterChange: [revalidateFooter]
	}
}
