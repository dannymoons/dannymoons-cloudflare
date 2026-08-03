import type { Block } from 'payload'
import { tabContent, backgroundColor, lucideIconPicker } from '@/fields'

export const StatsBlock: Block = {
	slug: 'stats',
	interfaceName: 'StatsBlock',
	labels: { singular: 'Stats', plural: 'Stats' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Statistieken', en: 'Stats' },
					fields: [
						{
							name: 'items',
							type: 'array',
							label: { nl: 'Statistieken', en: 'Stats' },
							labels: { singular: 'Stat', plural: 'Stats' },
							required: true,
							minRows: 1,
							fields: [
								lucideIconPicker,
								{
									name: 'value',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Waarde', en: 'Value' }
								},
								{
									name: 'label',
									type: 'text',
									localized: true,
									required: true,
									label: { nl: 'Label', en: 'Label' }
								},
								{
									name: 'description',
									type: 'text',
									localized: true,
									label: { nl: 'Sublabel', en: 'Sub-label' },
									admin: {
										description: 'Optionele extra regel (alleen zichtbaar in de "Band" variant)'
									}
								}
							]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'variant',
							type: 'select',
							label: { nl: 'Weergave', en: 'Variant' },
							defaultValue: 'row',
							options: [
								{ label: 'Row (bare stats)', value: 'row' },
								{ label: 'Grid (stat cards)', value: 'grid' },
								{ label: 'Band (big numbers)', value: 'band' }
							]
						},
						backgroundColor()
					]
				}
			]
		}
	]
}
