import type { Block } from 'payload'
import { tabContent, buttonsTab, backgroundColor } from '@/fields'

export const PureContentBlock: Block = {
	slug: 'pureContent',
	interfaceName: 'PureContentBlock',
	labels: {
		singular: { nl: 'Content', en: 'Content' },
		plural: { nl: 'Content', en: 'Content' }
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				buttonsTab,
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'containerWidth',
							type: 'select',
							label: { nl: 'Container breedte', en: 'Container width' },
							defaultValue: 'default',
							options: [
								{ label: { nl: 'Standaard', en: 'Default' }, value: 'default' },
								{ label: { nl: 'Smal', en: 'Narrow' }, value: 'narrow' }
							]
						},
						{
							name: 'textAlign',
							type: 'select',
							label: { nl: 'Tekstuitlijning', en: 'Text alignment' },
							defaultValue: 'left',
							options: [
								{ label: { nl: 'Links', en: 'Left' }, value: 'left' },
								{ label: { nl: 'Gecentreerd', en: 'Center' }, value: 'center' },
								{ label: { nl: 'Rechts', en: 'Right' }, value: 'right' }
							]
						},
						backgroundColor(),
						{
							name: 'backgroundImage',
							type: 'upload',
							relationTo: 'media',
							label: { nl: 'Achtergrond afbeelding', en: 'Background image' }
						},
						{
							name: 'overlayOpacity',
							type: 'number',
							label: { nl: 'Overlay dekking (%)', en: 'Overlay opacity (%)' },
							defaultValue: 50,
							min: 0,
							max: 100,
							admin: {
								description: {
									nl: 'Dekking van de donkere overlay over de achtergrond afbeelding (0–100).',
									en: 'Opacity of the dark overlay on the background image (0–100).'
								},
								condition: (_data, siblingData) =>
									Boolean(siblingData?.backgroundImage)
							}
						}
					]
				}
			]
		}
	]
}
