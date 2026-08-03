import type { GlobalConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { authenticated } from '@/access/authenticated'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
	slug: 'header',
	access: {
		read: anyone,
		update: authenticated
	},
	fields: [
		{
			name: 'logo',
			type: 'upload',
			relationTo: 'media',
			admin: {
				description: 'Optional logo image. Falls back to the site name wordmark.'
			}
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
				initCollapsed: true,
				components: {
					RowLabel: '@/globals/header/row-label#RowLabel'
				}
			}
		},
		{
			name: 'cta',
			type: 'group',
			admin: {
				description: 'Optional call-to-action button shown at the end of the nav.'
			},
			fields: [
				{
					name: 'enabled',
					type: 'checkbox',
					defaultValue: false
				},
				link({
					overrides: {
						admin: {
							condition: (_, siblingData) => Boolean(siblingData?.enabled)
						}
					}
				})
			]
		}
	],
	hooks: {
		afterChange: [revalidateHeader]
	}
}
