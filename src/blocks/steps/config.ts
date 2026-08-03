import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const StepsBlock: Block = {
	slug: 'steps',
	interfaceName: 'StepsBlock',
	labels: { singular: 'Steps', plural: 'Steps' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Stappen', en: 'Steps' },
					fields: [
						{
							name: 'steps',
							type: 'array',
							label: { nl: 'Stappen', en: 'Steps' },
							labels: {
								singular: { nl: 'Stap', en: 'Step' },
								plural: { nl: 'Stappen', en: 'Steps' }
							},
							required: true,
							minRows: 2,
							fields: [
								{
									name: 'number',
									type: 'text',
									required: true,
									admin: { description: 'e.g. 01, 02' }
								},
								{ name: 'title', type: 'text', localized: true, required: true },
								{ name: 'description', type: 'textarea', localized: true, required: true }
							]
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
