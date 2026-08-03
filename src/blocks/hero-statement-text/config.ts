import type { Block } from 'payload'
import { tabContent, lucideIconPicker } from '@/fields'
import { button } from '@/fields'

export const HeroStatementTextBlock: Block = {
	slug: 'heroStatementText',
	interfaceName: 'HeroStatementTextBlock',
	labels: { singular: 'Hero Statement Text', plural: 'Hero Statement Text' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Knoppen', en: 'Buttons' },
					fields: [
						{
							name: 'buttons',
							type: 'array',
							label: { nl: 'Knoppen', en: 'Buttons' },
							labels: {
								singular: { nl: 'Knop', en: 'Button' },
								plural: { nl: 'Knoppen', en: 'Buttons' },
							},
							maxRows: 2,
							fields: [button({ colors: ['primary', 'secondary', 'tertiary', 'ghost'] })],
						},
					],
				},
				{
					label: { nl: 'Statistieken', en: 'Stats' },
					fields: [
						{
							name: 'stats',
							type: 'array',
							label: { nl: 'Statistieken', en: 'Stats' },
							labels: { singular: 'Stat', plural: 'Stats' },
							maxRows: 4,
							fields: [
								lucideIconPicker,
								{ name: 'value', type: 'text', localized: true, required: true },
								{ name: 'label', type: 'text', localized: true, required: true },
							],
						},
					],
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'backgroundStyle',
							type: 'select',
							label: { nl: 'Achtergrondstijl', en: 'Background style' },
							defaultValue: 'gradient',
							options: [
								{ label: { nl: 'Gradient', en: 'Gradient' }, value: 'gradient' },
								{ label: { nl: 'Pagina achtergrondkleur', en: 'Page background color' }, value: 'default' },
								{ label: { nl: 'Neutraal licht', en: 'Neutral light' }, value: 'surface' },
								{ label: { nl: 'Neutraal contrast', en: 'Neutral contrast' }, value: 'elevated' },
								{ label: { nl: 'Primair', en: 'Primary' }, value: 'primary' },
							],
						},
					],
				},
			],
		},
	],
}
