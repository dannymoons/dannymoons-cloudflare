import type { Block } from 'payload'
import { tabContent, backgroundColor } from '@/fields'

export const TeamBlock: Block = {
	slug: 'team',
	interfaceName: 'TeamBlock',
	labels: { singular: 'Team', plural: 'Team' },
	fields: [
		{
			type: 'tabs',
			tabs: [
				tabContent,
				{
					label: { nl: 'Teamleden', en: 'Members' },
					fields: [
						{
							name: 'loadFromCollection',
							type: 'checkbox',
							label: { nl: 'Teamleden uit collectie laden', en: 'Load team members from collection' },
							defaultValue: false,
						},
						{
							name: 'teamMembers',
							type: 'relationship',
							relationTo: 'team-members',
							hasMany: true,
							label: { nl: 'Selecteer teamleden', en: 'Select team members' },
							admin: {
								condition: (_, siblingData) => siblingData?.loadFromCollection === true,
							},
						},
						{
							name: 'members',
							type: 'array',
							label: { nl: 'Teamleden', en: 'Members' },
							labels: {
								singular: { nl: 'Teamlid', en: 'Member' },
								plural: { nl: 'Teamleden', en: 'Members' }
							},
							admin: {
								condition: (_, siblingData) => siblingData?.loadFromCollection !== true,
							},
							fields: [
								{ name: 'name', type: 'text', localized: true, required: true },
								{ name: 'role', type: 'text', localized: true, required: true },
								{ name: 'bio', type: 'textarea', localized: true },
								{ name: 'photo', type: 'upload', relationTo: 'media' }
							]
						}
					]
				},
				{
					label: { nl: 'Ontwerp', en: 'Design' },
					fields: [
						{
							name: 'cols',
							type: 'select',
							label: { nl: 'Kolommen', en: 'Columns' },
							defaultValue: '3',
							options: [
								{ label: '2 columns', value: '2' },
								{ label: '3 columns', value: '3' },
								{ label: '4 columns', value: '4' }
							]
						},
						backgroundColor()
					]
				}
			]
		}
	]
}
