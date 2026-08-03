import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'
import { button } from '@/fields'

export const CardsOpenBlock: Block = {
	slug: 'cardsOpen',
	interfaceName: 'CardsOpenBlock',
	labels: {
		singular: { nl: 'Open kaarten', en: 'Open cards' },
		plural: { nl: 'Open kaarten', en: 'Open cards' },
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Blokken', en: 'Cards' },
					fields: [
						{
							name: 'cards',
							type: 'array',
							label: { nl: 'Kaarten', en: 'Cards' },
							labels: {
								singular: { nl: 'Kaart', en: 'Card' },
								plural: { nl: 'Kaarten', en: 'Cards' }
							},
							minRows: 2,
							maxRows: 6,
							fields: [
								{
									name: 'image',
									type: 'upload',
									relationTo: 'media',
									label: { nl: 'Afbeelding', en: 'Image' }
								},
								{
									name: 'title',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Titel', en: 'Title' }
								},
								{
									name: 'content',
									type: 'richText',
									localized: true,
									label: { nl: 'Inhoud', en: 'Content' }
								},
								button({
									colors: ['primary'],
									optional: true
								})
							]
						}
					]
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
								plural: { nl: 'Knoppen', en: 'Buttons' }
							},
							maxRows: 2,
							fields: [button({ colors: ['primary', 'secondary', 'tertiary', 'ghost'] })]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [backgroundColor()]
				}
			]
		}
	]
}
