import type { Block } from 'payload'
import { tabContent, tabImage, backgroundColor } from '@/fields'
import { button } from '@/fields'

export const UspWithMediaBlock: Block = {
	slug: 'uspWithMedia',
	interfaceName: 'UspWithMediaBlock',
	labels: { singular: 'USP with Media', plural: 'USP with Media' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Voordelen', en: 'Benefits' },
					fields: [
						{
							name: 'benefits',
							type: 'array',
							label: { nl: 'Voordelen', en: 'Benefits' },
							labels: {
								singular: { nl: 'Voordeel', en: 'Benefit' },
								plural: { nl: 'Voordelen', en: 'Benefits' }
							},
							required: true,
							minRows: 1,
							fields: [
								{
									name: 'text',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Tekst', en: 'Text' }
								}
							]
						}
					]
				},
				tabImage([
					{
						name: 'imageWidth',
						type: 'select',
						label: { nl: 'Breedte afbeelding', en: 'Image width' },
						defaultValue: '7',
						options: [
							{ label: '4/12 (narrow)', value: '4' },
							{ label: '5/12', value: '5' },
							{ label: '6/12 (half)', value: '6' },
							{ label: '7/12 (wide)', value: '7' }
						]
					},
					{
						name: 'imagePosition',
						type: 'select',
						label: { nl: 'Positie afbeelding', en: 'Image position' },
						defaultValue: 'right',
						options: [
							{ label: 'Right', value: 'right' },
							{ label: 'Left', value: 'left' }
						]
					}
				]),
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
							fields: [
								button({
									colors: ['primary', 'secondary', 'tertiary', 'ghost']
								})
							]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						backgroundColor({
							colors: [
								{
									value: 'default',
									label: { nl: 'Pagina achtergrond', en: 'Page background' }
								},
								{
									value: 'foreground',
									label: { nl: 'Voorgrond', en: 'Foreground' }
								},
								{
									value: 'surface',
									label: { nl: 'Neutraal licht', en: 'Surface' }
								},
								{
									value: 'elevated',
									label: { nl: 'Neutraal contrast', en: 'Elevated' }
								},
								{
									value: 'primary',
									label: { nl: 'Primair', en: 'Primary' }
								}
							],
							defaultValue: 'default'
						}),
						{
							name: 'uspsDisplay',
							label: {
								nl: 'Weergave van USPS',
								en: 'Display usps'
							},
							type: 'radio',
							options: [
								{
									value: 'list',
									label: {
										nl: 'Lijst',
										en: 'List'
									}
								},
								{
									value: 'inline',
									label: {
										nl: 'Inline',
										en: 'Inline'
									}
								}
							],
							defaultValue: 'list'
						}
					]
				}
			]
		}
	]
}
