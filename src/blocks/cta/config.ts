import type { Block } from 'payload'
import { tabContent, tabImage, backgroundColor, padding } from '@/fields'
import { button } from '@/fields'

export const CtaBlock: Block = {
	slug: 'cta',
	interfaceName: 'CtaBlock',
	labels: { singular: 'CTA', plural: 'CTAs' },
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
								plural: { nl: 'Knoppen', en: 'Buttons' },
							},
							maxRows: 2,
							fields: [button({ colors: ['primary', 'secondary', 'tertiary', 'white', 'ghost'] })],
						},
					],
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'variant',
							type: 'select',
							label: { nl: 'Variant', en: 'Variant' },
							defaultValue: 'centered',
							options: [
								{ label: 'Centered', value: 'centered' },
								{ label: 'Card', value: 'card' },
							],
						},
						backgroundColor(),
						padding({
							admin: {
								condition: (_, siblingData) => siblingData?.variant === 'card',
							},
						}),
					],
				},
			],
		},
	],
}
