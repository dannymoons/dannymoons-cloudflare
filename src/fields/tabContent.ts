import { eyebrow } from './eyebrow'
import { title } from './title'
import { content } from './content'
import type { TabForPayloadTabsField } from './types'

const tabContent: TabForPayloadTabsField = {
	label: {
		nl: 'Inhoud',
		en: 'Content'
	},
	fields: [eyebrow, title, content]
}

export { tabContent }
