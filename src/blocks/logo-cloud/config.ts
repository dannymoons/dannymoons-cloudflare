import type { Block } from 'payload'
import { title, backgroundColor } from '@/fields'

export const LogoCloudBlock: Block = {
	slug: 'logoCloud',
	interfaceName: 'LogoCloudBlock',
	labels: { singular: 'Logo cloud', plural: 'Logo clouds' },
	fields: [
		title,
		{
			name: 'logos',
			type: 'array',
			minRows: 1,
			labels: { singular: 'Logo', plural: 'Logos' },
			fields: [
				{ name: 'name', type: 'text', required: true },
				{ name: 'logo', type: 'upload', relationTo: 'media' },
				{ name: 'url', type: 'text' }
			]
		},
		backgroundColor({ defaultValue: 'surface' })
	]
}
