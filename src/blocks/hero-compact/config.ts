import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const HeroCompactBlock: Block = {
	slug: 'heroCompact',
	interfaceName: 'HeroCompactBlock',
	labels: { singular: 'Hero Compact', plural: 'Hero Compact' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [backgroundColor()],
				},
			],
		},
	],
}
