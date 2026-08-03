import type { Field } from 'payload'

export const lucideIconPicker: Field = {
	name: 'icon',
	type: 'text',
	admin: {
		components: {
			Field: '@/fields/lucideIconPicker/component'
		}
	}
}
