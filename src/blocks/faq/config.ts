import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const FaqBlock: Block = {
	slug: 'faq',
	interfaceName: 'FaqBlock',
	labels: { singular: 'FAQ', plural: 'FAQs' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Vragen', en: 'Questions' },
					fields: [
						{
							name: 'items',
							type: 'array',
							label: { nl: 'Vragen', en: 'Questions' },
							labels: {
								singular: { nl: 'Vraag', en: 'Question' },
								plural: { nl: 'Vragen', en: 'Questions' },
							},
							required: true,
							minRows: 1,
							fields: [
								{
									name: 'question',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Vraag', en: 'Question' },
								},
								{
									name: 'answer',
									type: 'richText',
									localized: true,
									required: true,
									label: { nl: 'Antwoord', en: 'Answer' },
								},
							],
						},
					],
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'layout',
							type: 'select',
							label: { nl: 'Layout', en: 'Layout' },
							defaultValue: 'single-col',
							options: [
								{ label: 'Single column', value: 'single-col' },
								{ label: 'Two column (sticky heading)', value: 'two-col' },
							],
						},
						backgroundColor(),
					],
				},
			],
		},
	],
}
