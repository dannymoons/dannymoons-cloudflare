import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/ui'

const paragraphStyles = cva('', {
	variants: {
		color: {
			default: '',
			foreground: 'text-foreground',
			background: 'text-background',
			muted: 'text-muted',
			primary: 'text-primary'
		},
		marginTop: {
			none: '',
			sm: 'mt-2',
			md: 'mt-4',
			lg: 'mt-4 md:mt-8'
		},
		marginBottom: {
			none: '',
			sm: 'mb-2',
			md: 'mb-4',
			lg: 'mb-4 md:mb-8'
		},
		size: {
			xs: 'text-xs',
			sm: 'text-sm',
			md: '@xl:text-lg text-base',
			lg: 'text-lg'
		}
	},
	defaultVariants: {
		color: 'default',
		marginTop: 'md',
		marginBottom: 'none',
		size: 'lg'
	}
})

interface BaseParagraphProps {
	className?: string
	children: React.ReactNode
}

type ParagraphProps = BaseParagraphProps & VariantProps<typeof paragraphStyles>

const Paragraph = ({
	color,
	children,
	marginTop,
	marginBottom,
	size,
	className
}: ParagraphProps) => (
	<p
		className={cn(
			paragraphStyles({ color, marginTop, marginBottom, size }),
			className
		)}
	>
		{children}
	</p>
)

export { Paragraph }
