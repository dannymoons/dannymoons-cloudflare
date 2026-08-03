import type { Field, GroupField } from 'payload'

type PaddingConfig = {
	defaultValue?: {
		paddingTop?: boolean
		paddingBottom?: boolean
	}
	label?: {
		nl?: string
		en?: string
	}
	admin?: GroupField['admin']
}

const padding = ({ defaultValue, label, admin }: PaddingConfig = {}): Field => {
	const PaddingResult: GroupField = {
		name: 'padding',
		type: 'group',
		label: label ?? { nl: 'Padding', en: 'Padding' },
		admin: {
			hideGutter: true,
			...admin,
		},
		fields: [
			{
				name: 'paddingTop',
				type: 'checkbox',
				label: {
					nl: 'Boven padding',
					en: 'Top padding',
				},
				defaultValue: defaultValue?.paddingTop ?? true,
			},
			{
				name: 'paddingBottom',
				type: 'checkbox',
				label: {
					nl: 'Onder padding',
					en: 'Bottom padding',
				},
				defaultValue: defaultValue?.paddingBottom ?? true,
			},
		],
	}

	return PaddingResult
}

export { padding }
