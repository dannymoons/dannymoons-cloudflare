import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const PricingBlock: Block = {
	slug: 'pricing',
	interfaceName: 'PricingBlock',
	labels: { singular: 'Pricing', plural: 'Pricing' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Prijzen', en: 'Plans' },
					fields: [
						{
							name: 'plans',
							type: 'array',
							label: { nl: 'Prijzen', en: 'Plans' },
							labels: {
								singular: { nl: 'Prijs', en: 'Plan' },
								plural: { nl: 'Prijzen', en: 'Plans' }
							},
							required: true,
							minRows: 1,
							fields: [
								{ name: 'name', type: 'text', localized: true, required: true },
								{
									name: 'tagline',
									type: 'text',
									localized: true,
									admin: {
										description: 'Short label, e.g. duration "8 weeks" (used in the "Tiered" variant)'
									}
								},
								{
									name: 'price',
									type: 'text',
									localized: true,
									admin: { description: 'e.g. €49 (used in the "Cards" variant)' }
								},
								{
									name: 'billingPeriod',
									type: 'text',
									localized: true,
									admin: { description: 'e.g. maand' }
								},
								{ name: 'description', type: 'textarea', localized: true },
								{
									name: 'features',
									type: 'array',
									label: { nl: 'Kenmerken', en: 'Features' },
									labels: {
										singular: { nl: 'Kenmerk', en: 'Feature' },
										plural: { nl: 'Kenmerken', en: 'Features' }
									},
									fields: [{ name: 'feature', type: 'text', localized: true, required: true }]
								},
								{ name: 'ctaLabel', type: 'text', localized: true },
								{ name: 'ctaHref', type: 'text', localized: true },
								{
									name: 'highlighted',
									type: 'checkbox',
									defaultValue: false,
									admin: { description: 'Visually highlight this plan' }
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
							defaultValue: 'cards',
							options: [
								{ label: 'Cards (price + features)', value: 'cards' },
								{ label: 'Tiered (tagline + checklist)', value: 'tiered' }
							]
						},
						backgroundColor()
					]
				}
			]
		}
	]
}
