import { cn } from '@/utilities/ui'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

export interface LogoCardProps {
	logoSrc: StaticImageData | string
	name: string
	href?: string
	className?: string
}

export function LogoCard({ logoSrc, name, href, className }: LogoCardProps) {
	const classes = cn(
		'flex items-center justify-center rounded-lg border border-border bg-card p-4',
		href && 'transition-all hover:border-primary/30 hover:shadow-sm',
		className
	)

	const logo =
		typeof logoSrc === 'string' ? (
			<img src={logoSrc} alt={name} className='h-8 w-auto object-contain' />
		) : (
			<Image src={logoSrc} alt={name} height={32} className='h-8 w-auto object-contain' />
		)

	if (href) {
		return (
			<Link href={href} className={classes}>
				{logo}
			</Link>
		)
	}

	return <div className={classes}>{logo}</div>
}
