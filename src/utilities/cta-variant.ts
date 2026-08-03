type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'surface' | 'white' | 'ghost' | 'link'

export type CtaVariant = 'default' | 'outline' | 'secondary' | 'ghost'

/**
 * Maps the section CTA's friendly variant names onto the variants actually
 * defined by the Button component.
 */
export function toButtonVariant(variant: CtaVariant | null | undefined): ButtonVariant {
	switch (variant) {
		case 'outline':
			return 'secondary'
		case 'secondary':
			return 'secondary'
		case 'ghost':
			return 'ghost'
		default:
			return 'primary'
	}
}
