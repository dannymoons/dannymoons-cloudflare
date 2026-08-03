import type { Block } from 'payload'
import { tabContent, buttons, backgroundColor } from '@/fields'

export const UspFeaturesBlock: Block = {
	slug: 'uspFeatures',
	interfaceName: 'UspFeaturesBlock',
	labels: { singular: 'USP Features Section', plural: 'USP Features Sections' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					...tabContent,
					fields: [
						...tabContent.fields,
						{
							name: 'benefits',
							type: 'array',
							label: { nl: 'Voordelen', en: 'Benefits' },
							labels: { singular: { nl: 'Voordeel', en: 'Benefit' }, plural: { nl: 'Voordelen', en: 'Benefits' } },
							required: true,
							minRows: 1,
							fields: [
								{ name: 'text', type: 'text', localized: true, required: true, label: { nl: 'Tekst', en: 'Text' } },
							],
						},
						{
							name: 'tagCardTitle',
							type: 'text',
							localized: true,
							label: { nl: 'Tagkaart titel', en: 'Tag card title' },
							admin: {
								description: { nl: 'Titel boven de tags (bijv. "Welke specialisten zijn welkom?")', en: 'Title above the tags (e.g. "Which specialists are welcome?")' },
							},
						},
						{
							name: 'tagCardDescription',
							type: 'textarea',
							localized: true,
							label: { nl: 'Tagkaart beschrijving', en: 'Tag card description' },
							admin: {
								description: { nl: 'Korte beschrijving boven de tags', en: 'Short description above the tags' },
							},
						},
						{
							name: 'tags',
							type: 'array',
							label: { nl: 'Tags', en: 'Tags' },
							labels: { singular: 'Tag', plural: 'Tags' },
							fields: [
								{ name: 'label', type: 'text', localized: true, required: true, label: { nl: 'Label', en: 'Label' } },
							],
						},
						{
							name: 'stats',
							type: 'array',
							label: { nl: 'Statistieken', en: 'Stats' },
							labels: { singular: 'Stat', plural: 'Stats' },
							fields: [
								{ name: 'value', type: 'text', localized: true, required: true, label: { nl: 'Waarde', en: 'Value' } },
								{ name: 'label', type: 'text', localized: true, required: true, label: { nl: 'Label', en: 'Label' } },
							],
						},
					],
				},
				{
					label: { nl: 'Knoppen', en: 'Buttons' },
					fields: [buttons],
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						backgroundColor(),
					],
				},
			],
		},
	],
}
