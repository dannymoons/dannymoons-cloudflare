import type { Block } from 'payload'
import {
	tabContent,
	tabImage,
	buttonsTab,
	backgroundColor,
	lucideIconPicker
} from '@/fields'

export const ImageFeaturesBlock: Block = {
	slug: 'imageFeatures',
	interfaceName: 'ImageFeaturesBlock',
	labels: {
		singular: { nl: 'Afbeelding en features', en: 'Image and features' },
		plural: { nl: 'Afbeelding en features', en: 'Image and features' }
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Features', en: 'Features' },
					fields: [
						{
							name: 'features',
							type: 'array',
							label: { nl: 'Features', en: 'Features' },
							labels: {
								singular: { nl: 'Feature', en: 'Feature' },
								plural: { nl: 'Features', en: 'Features' }
							},
							minRows: 2,
							maxRows: 4,
							fields: [
								lucideIconPicker,
								{
									name: 'title',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Titel', en: 'Title' }
								},
								{
									name: 'text',
									type: 'textarea',
									localized: true,
									label: { nl: 'Tekst', en: 'Text' }
								}
							]
						}
					]
				},
				tabImage(),
				buttonsTab,
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [backgroundColor()]
				}
			]
		}
	]
}
