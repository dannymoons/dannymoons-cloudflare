import { cn } from '@/utilities/ui'
import type { JSX } from 'react'
import type { ReactNode } from 'react'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
	children: ReactNode
	size?: 'sm' | 'md' | 'lg' | 'xl'
	color?: 'default' | 'foreground' | 'primary' | 'white'
	gradient?: boolean
	additionalClass?: string
}

const textColors = {
	default: 'text-secondary-foreground',
	foreground: 'text-foreground',
	primary: 'text-primary',
	white: 'text-white'
}

const textSizes = {
	sm: 'text-xl @lg:text-2xl',
	md: 'text-2xl @lg:text-4xl',
	lg: 'text-2xl @xs:text-4xl @sm:text-5xl',
	xl: 'text-3xl @xs:text-4xl @sm:text-5xl @2xl:text-6xl'
}

const Heading = ({
	headingLevel = 'h2',
	children,
	size = 'lg',
	color = 'default',
	gradient,
	className,
	id
}: HeadingProps) => {
	const colorClass = gradient
		? 'text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text py-5'
		: textColors[color]

	const Component = headingLevel as keyof JSX.IntrinsicElements

	return (
		<Component
			id={id}
			className={cn(
				'font-bold',
				'text-balance',
				'leading-1',
				'font-heading',
				textSizes[size],
				colorClass,
				className
			)}
		>
			{children}
		</Component>
	)
}

export { Heading }
export default Heading
