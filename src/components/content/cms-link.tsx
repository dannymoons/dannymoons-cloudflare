import { Button } from '@/components/ui/button'
import type { buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import type React from 'react'

import type { Page, Post, Wiki } from '@/payload-types'
import { localizePath, DEFAULT_LOCALE } from '@/utilities/locale'
import { DynamicIcon } from '@/components/content/icon'

const REFERENCE_PREFIX: Record<'pages' | 'posts' | 'wiki', string> = {
	pages: '',
	posts: '/posts',
	wiki: '/docs'
}

type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
type ButtonSize = VariantProps<typeof buttonVariants>['size']

type CMSLinkType = {
	appearance?: 'inline' | ButtonVariant
	children?: React.ReactNode
	className?: string
	icon?: string | null
	label?: string | null
	locale?: string
	newTab?: boolean | null
	reference?: {
		relationTo: 'pages' | 'posts' | 'wiki'
		value: Page | Post | Wiki | string | number
	} | null
	size?: ButtonSize | null
	type?: 'custom' | 'reference' | null
	url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = props => {
	const {
		type,
		appearance = 'inline',
		children,
		className,
		icon,
		label,
		locale = DEFAULT_LOCALE,
		newTab,
		reference,
		size: sizeFromProps,
		url
	} = props

	let href: string | null = null

	if (
		type === 'reference' &&
		typeof reference?.value === 'object' &&
		reference.value.slug
	) {
		const prefix = REFERENCE_PREFIX[reference.relationTo] ?? ''
		href = localizePath(`${prefix}/${reference.value.slug}`, locale)
	} else if (url) {
		href = url.startsWith('/') ? localizePath(url, locale) : url
	}

	if (!href) return null

	const newTabProps = newTab
		? { rel: 'noopener noreferrer', target: '_blank' }
		: {}

	if (appearance === 'inline') {
		return (
			<Link className={cn(className)} href={href} {...newTabProps}>
				{label && label}
				{children && children}
				{icon && <DynamicIcon name={icon} />}
			</Link>
		)
	}

	return (
		<Button
			asChild
			className={className}
			size={sizeFromProps ?? undefined}
			variant={appearance as ButtonVariant}
		>
			<Link href={href} {...newTabProps}>
				{label && label}
				{children && children}
				{icon && <DynamicIcon name={icon} />}
			</Link>
		</Button>
	)
}
