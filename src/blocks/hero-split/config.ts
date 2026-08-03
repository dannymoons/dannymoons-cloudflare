import type { Block } from 'payload'
import { tabContent, tabImage, backgroundColor } from '@/fields'
import { button } from '@/fields'

export const HeroSplitBlock: Block = {
	slug: 'heroSplit',
	interfaceName: 'HeroSplitBlock',
	labels: { singular: 'Hero Split', plural: 'Hero Split' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				tabImage([
					{
						name: 'imagePosition',
						type: 'select',
						label: { nl: 'Afbeelding positie', en: 'Image position' },
						defaultValue: 'right',
						options: [
							{ label: 'Right', value: 'right' },
							{ label: 'Left', value: 'left' },
						],
					},
					{
						name: 'badgeTitle',
						type: 'text',
						localized: true,
						label: { nl: 'Badge titel', en: 'Badge title' },
						admin: {
							description: 'Optionele kaart over de afbeelding (alleen "Met statistieken" variant)',
						},
					},
					{
						name: 'badgeText',
						type: 'text',
						localized: true,
						label: { nl: 'Badge tekst', en: 'Badge text' },
					},
				]),
				{
					label: { nl: 'Statistieken', en: 'Stats' },
					fields: [
						{
							name: 'stats',
							type: 'array',
							label: { nl: 'Statistieken', en: 'Stats' },
							labels: {
								singular: { nl: 'Statistiek', en: 'Stat' },
								plural: { nl: 'Statistieken', en: 'Stats' },
							},
							admin: {
								description: 'Worden onder de tekst getoond in de "Met statistieken" variant',
							},
							fields: [
								{ name: 'value', type: 'text', localized: true, required: true },
								{ name: 'label', type: 'text', localized: true, required: true },
							],
						},
					],
				},
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
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'variant',
							type: 'select',
							label: { nl: 'Weergave', en: 'Variant' },
							defaultValue: 'default',
							options: [
								{ label: 'Default (text + image)', value: 'default' },
								{ label: 'With stats (stat row + image badge)', value: 'stats' },
							],
						},
						backgroundColor(),
					],
				},
			],
		},
	],
}
