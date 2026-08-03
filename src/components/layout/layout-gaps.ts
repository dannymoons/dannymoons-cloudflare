export const layoutGapVariants = {
	none: 'gap-0',
	xs: 'gap-1 @sm:gap-2',
	sm: 'gap-2 @sm:gap-3 @md:gap-4',
	md: 'gap-3 @sm:gap-4 @md:gap-6',
	lg: 'gap-4 @sm:gap-6 @md:gap-8',
	xl: 'gap-6 @md:gap-8 @lg:gap-12',
	'2xl': 'gap-8 @md:gap-10 @lg:gap-12 @xl:gap-16'
} as const
