import { image } from './image'
import type { TabForPayloadTabsField } from './types'
import type { Field } from 'payload'

const tabImage = (fields?: Field[]): TabForPayloadTabsField => ({
	label: {
		nl: 'Afbeelding',
		en: 'Image'
	},
	fields: [
		image,
		{
			name: 'imageAlt',
			type: 'text',
			localized: true,
			label: {
				nl: 'Afbeelding alt tekst',
				en: 'Image alt text'
			}
		},
		...(fields ?? [])
	]
})

export { tabImage }
