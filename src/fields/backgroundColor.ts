import type { Field } from 'payload'

type ColorLabelIntl = {
	nl: string
	en: string
}

type Color = {
	value: string
	label: string | ColorLabelIntl
}

type BackgroundColorField = {
	colors?: Color[]
	defaultValue?: string
}

const backgroundColor = ({
	colors,
	defaultValue
}: BackgroundColorField = {}) => {
	const BackgroundColorResult: Field = {
		name: 'backgroundColor',
		label: {
			nl: 'Achtergrond kleur',
			en: 'Background color'
		},
		type: 'select',
		options: [
			{
				label: {
					nl: 'Pagina achtergrondkleur',
					en: 'Page background color'
				},
				value: 'default'
			},
			{
				label: {
					nl: 'Neutraal licht',
					en: 'Neutral light'
				},
				value: 'surface'
			},
			{
				label: {
					nl: 'Neutraal contrast',
					en: 'Neutral contrast'
				},
				value: 'elevated'
			},
			{
				label: {
					nl: 'Primair',
					en: 'Primary'
				},
				value: 'primary'
			}
		],
		defaultValue: defaultValue || 'default'
	}

	if (colors) {
		BackgroundColorResult.options = colors
	}

	return BackgroundColorResult
}

export { backgroundColor }
