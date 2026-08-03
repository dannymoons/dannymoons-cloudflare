import type { Block } from 'payload'
import { tabContent, tabImage, backgroundColor } from '@/fields'
import { button } from '@/fields'

export const TextWithMediaBlock: Block = {
	slug: 'textWithMedia',
	interfaceName: 'TextWithMediaBlock',
	labels: { singular: 'Text with Media', plural: 'Text with Media' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
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
							name: 'verticalAlign',
							type: 'radio',
							label: {
								nl: 'Verticaal uitlijnen',
								en: 'Vertical Align'
							},
							options: [
								{
									value: 'start',
									label: {
										nl: 'Boven',
										en: 'Top'
									}
								},
								{
									value: 'center',
									label: {
										nl: 'Midden',
										en: 'Center'
									}
								}
							],
							defaultValue: 'start'
						}
					]
				}
			]
		}
	]
}
