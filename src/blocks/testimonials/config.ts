import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const TestimonialsBlock: Block = {
	slug: 'testimonials',
	interfaceName: 'TestimonialsBlock',
	labels: { singular: 'Testimonials', plural: 'Testimonials' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Items', en: 'Items' },
					fields: [
						{
							name: 'loadFromCollection',
							type: 'checkbox',
							label: { nl: 'Testimonials uit collectie laden', en: 'Load testimonials from collection' },
							defaultValue: false,
						},
						{
							name: 'testimonials',
							type: 'relationship',
							relationTo: 'testimonials',
							hasMany: true,
							maxRows: 9,
							label: { nl: 'Selecteer testimonials', en: 'Select testimonials' },
							admin: {
								condition: (_, siblingData) => siblingData?.loadFromCollection === true,
							},
						},
						{
							name: 'items',
							type: 'array',
							label: { nl: 'Testimonials', en: 'Testimonials' },
							labels: {
								singular: 'Testimonial',
								plural: 'Testimonials'
							},
							admin: {
								condition: (_, siblingData) => siblingData?.loadFromCollection !== true,
							},
							fields: [
								{ name: 'quote', type: 'textarea', localized: true, required: true },
								{ name: 'name', type: 'text', localized: true, required: true },
								{ name: 'role', type: 'text', localized: true },
								{
									name: 'avatar',
									type: 'upload',
									relationTo: 'media',
									label: { nl: 'Avatar', en: 'Avatar' },
								},
								{
									name: 'stars',
									type: 'number',
									defaultValue: 5,
									min: 1,
									max: 5
								}
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
