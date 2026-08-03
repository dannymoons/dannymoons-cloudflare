import type { Block } from 'payload'
import { tabContent, backgroundColor, lucideIconPicker } from '@/fields'
import { button } from '@/fields'

export const CardsOverlayBlock: Block = {
	slug: 'cardsOverlay',
	interfaceName: 'CardsOverlayBlock',
	labels: {
		singular: { nl: 'Overlay kaarten', en: 'Overlay cards' },
		plural: { nl: 'Overlay kaarten', en: 'Overlay cards' },
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Kaarten', en: 'Cards' },
					fields: [
						{
							name: 'cards',
							type: 'array',
							label: { nl: 'Kaarten', en: 'Cards' },
							labels: {
								singular: { nl: 'Kaart', en: 'Card' },
								plural: { nl: 'Kaarten', en: 'Cards' },
							},
							minRows: 2,
							maxRows: 6,
							fields: [
								{
									name: 'image',
									type: 'upload',
									relationTo: 'media',
									label: { nl: 'Afbeelding', en: 'Image' },
								},
								{
									name: 'title',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Titel', en: 'Title' },
								},
								{
									name: 'content',
									type: 'richText',
									localized: true,
									label: { nl: 'Inhoud', en: 'Content' },
								},
								button({ colors: ['primary', 'secondary', 'tertiary', 'white', 'ghost'], optional: true }),
								{
									name: 'details',
									type: 'array',
									label: { nl: 'Details / badges', en: 'Details / badges' },
									labels: {
										singular: { nl: 'Detail', en: 'Detail' },
										plural: { nl: 'Details', en: 'Details' },
									},
									maxRows: 4,
									fields: [
										lucideIconPicker,
										{
											name: 'label',
											type: 'text',
											localized: true,
											required: true,
											label: { nl: 'Label', en: 'Label' },
										},
									],
								},
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
					fields: [backgroundColor()],
				},
			],
		},
	],
}
