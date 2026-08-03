import { getCurrentYear } from '@/utilities/date'
import { cn } from '@/utilities/ui'
import type * as React from 'react'

export interface FooterCreditsProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export function FooterCredits({ className, ...props }: FooterCreditsProps) {
	return (
		<div
			data-slot='footer-credits'
			className={cn(
				'flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row',
				className
			)}
			{...props}
		/>
	)
}
interface FooterCopyrightProps {
	companyName: string
	className?: string
}

export function FooterCopyright({
	className,
	companyName
}: FooterCopyrightProps) {
	return (
		<p data-slot='footer-copyright' className={cn('text-sm', className)}>
			{`© ${getCurrentYear()} ${companyName}.`}
		</p>
	)
}

export interface FooterSocialLinksProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export function FooterSocialLinks({
	className,
	...props
}: FooterSocialLinksProps) {
	return (
		<div
			data-slot='footer-social-links'
			className={cn('flex items-center gap-3', className)}
			{...props}
		/>
	)
}
