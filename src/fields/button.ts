import type { Field, GroupField } from 'payload'
import { lucideIconPicker } from './lucideIconPicker/field'

export type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'white' | 'ghost'

export const colorOptions: Record<
	ButtonColors,
	{ label: string; value: string }
> = {
	primary: {
		label: 'Primary',
		value: 'primary'
	},
	secondary: {
		label: 'Secondary',
		value: 'secondary'
	},
	tertiary: {
		label: 'Tertiary',
		value: 'tertiary'
	},
	white: {
		label: 'White',
		value: 'white'
	},
	ghost: {
		label: 'Ghost',
		value: 'ghost'
	}
}

// Reusable button data type
export type ButtonData = {
	type?: 'custom' | 'reference' | null
	newTab?: boolean | null
	reference?: {
		relationTo: 'pages' | 'posts'
		value: any | string | number
	} | null
	url?: string | null
	label: string
	color?: ButtonColors | null
	icon?: string | null
}

type ButtonType = (options?: {
	colors?: ButtonColors[] | false
	/**
	 * If true, the button is treated as fully optional: `label`, `url`, and
	 * `reference` are not required at the schema level. Use for places where
	 * a button may or may not be present (e.g. CardsBasic cards).
	 */
	optional?: boolean
}) => Field

export const button: ButtonType = ({ colors, optional } = {}) => {
	const isRequired = !optional
	const ButtonResult: GroupField = {
		name: 'button',
		label: {
			nl: 'Knop',
			en: 'Button'
		},
		type: 'group',
		admin: {
			hideGutter: true
		},
		fields: [
			{
				type: 'row',
				fields: [
					{
						name: 'type',
						type: 'radio',
						admin: {
							layout: 'horizontal',
							width: '50%'
						},
						defaultValue: 'reference',
						options: [
							{
								label: {
									nl: 'Interne link',
									en: 'Internal link'
								},
								value: 'reference'
							},
							{
								label: {
									nl: 'Eigen link',
									en: 'Custom URL'
								},
								value: 'custom'
							}
						]
					},
					{
						name: 'newTab',
						type: 'checkbox',
						admin: {
							style: {
								alignSelf: 'flex-end'
							},
							width: '50%'
						},
						label: {
							nl: 'Open in nieuw tabblad',
							en: 'Open in new tab'
						}
					},
					lucideIconPicker
				]
			}
		]
	}

	ButtonResult.fields.push(
		{
			type: 'row',
			fields: [
				{
					name: 'reference',
					type: 'relationship',
					admin: {
						condition: (_: unknown, siblingData: any) =>
							siblingData?.type === 'reference',
					},
					label: {
						nl: 'Selecteer de pagina om naar te linken',
						en: 'Select the page to link to',
					},
					relationTo: ['pages', 'posts'],
					required: isRequired,
				},
				{
					name: 'url',
					type: 'text',
					admin: {
						condition: (_: unknown, siblingData: any) =>
							siblingData?.type === 'custom',
					},
					label: {
						nl: 'Eigen link',
						en: 'Custom URL',
					},
					required: isRequired,
				},
			],
		},
	)

	const labelColorRow: Field[] = [
		{
			name: 'label',
			type: 'text',
			localized: true,
			label: {
				nl: 'Knop tekst',
				en: 'Button text',
			},
			required: isRequired,
		},
	]

	if (colors !== false) {
		let colorOptionsToUse = [
			colorOptions.primary,
			colorOptions.secondary,
			colorOptions.tertiary,
			colorOptions.white,
			colorOptions.ghost,
		]

		if (colors) {
			colorOptionsToUse = colors.map(color => colorOptions[color])
		}

		labelColorRow.push({
			name: 'color',
			type: 'select',
			label: {
				nl: 'Kleur van de knop',
				en: 'Color of the button',
			},
			defaultValue: 'primary',
			options: colorOptionsToUse,
		})
	}

	ButtonResult.fields.push({ type: 'row', fields: labelColorRow })

	return ButtonResult
}
