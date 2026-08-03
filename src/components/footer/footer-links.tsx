import { cn } from '@/utilities/ui'
import Link from 'next/link'

export interface FooterLinksProps
	extends React.HTMLAttributes<HTMLUListElement> {}

export function FooterLinks({ className, ...props }: FooterLinksProps) {
	return (
		<ul
			data-slot='footer-links'
			className={cn('flex flex-col gap-2', className)}
			{...props}
		/>
	)
}

export interface FooterLinkProps extends React.LiHTMLAttributes<HTMLLIElement> {
	href: string
	children: React.ReactNode
}

export function FooterLink({
	className,
	href,
	children,
	...props
}: FooterLinkProps) {
	return (
		<li data-slot='footer-link' {...props}>
			<Link href={href} className={cn('text-sm', className)}>
				{children}
			</Link>
		</li>
	)
}
