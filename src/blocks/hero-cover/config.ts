import type { Block } from 'payload'
import { tabContent, tabImage } from '@/fields'
import { button } from '@/fields'

export const HeroCoverBlock: Block = {
	slug: 'heroCover',
	interfaceName: 'HeroCoverBlock',
	labels: { singular: 'Hero Cover', plural: 'Hero Cover' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				tabImage(),
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
									colors: ['primary', 'secondary', 'tertiary', 'white', 'ghost']
								})
							]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'backgroundStyle',
							type: 'select',
							label: { nl: 'Achtergrond', en: 'Background' },
							defaultValue: 'image',
							options: [
								{ label: { nl: 'Afbeelding', en: 'Image' }, value: 'image' },
								{ label: { nl: 'Gradiënt', en: 'Gradient' }, value: 'gradient' }
							],
							admin: {
								description: 'Gradient negeert de afbeelding en toont een kleurverloop'
							}
						},
						{
							name: 'height',
							type: 'select',
							label: { nl: 'Hoogte', en: 'Height' },
							defaultValue: 'md',
							options: [
								{ label: 'Small (33vh)', value: 'sm' },
								{ label: 'Medium (50vh)', value: 'md' },
								{ label: 'Large (66vh)', value: 'lg' },
								{ label: 'Full screen', value: 'full' }
							]
						},
						{
							name: 'overlay',
							type: 'select',
							label: { nl: 'Overlay', en: 'Overlay' },
							defaultValue: 'md',
							options: [
								{ label: { nl: 'Geen', en: 'None' }, value: 'none' },
								{ label: { nl: 'Licht', en: 'Light' }, value: 'sm' },
								{ label: { nl: 'Medium', en: 'Medium' }, value: 'md' },
								{ label: { nl: 'Donker', en: 'Dark' }, value: 'lg' }
							]
						}
					]
				}
			]
		}
	]
}
