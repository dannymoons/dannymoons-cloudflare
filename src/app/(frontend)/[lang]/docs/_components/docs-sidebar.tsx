'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utilities/ui'
import { localizePath, type Locale } from '@/utilities/locale'
import type { DocsNavGroup } from '../_lib/getDocsNav'

export function DocsSidebar({
	groups,
	locale
}: {
	groups: DocsNavGroup[]
	locale: Locale
}) {
	const pathname = usePathname()

	return (
		<nav aria-label='Docs' className='flex flex-col gap-7'>
			{groups.map((group) => (
				<div key={group.id} className='flex flex-col gap-2'>
					<p className='font-semibold text-foreground text-xs uppercase tracking-wider'>
						{group.title}
					</p>
					<ul className='flex flex-col gap-0.5 border-border border-l'>
						{group.docs.map((doc) => {
							const href = localizePath(`/docs/${doc.slug}`, locale)
							const isActive = pathname === href

							return (
								<li key={doc.slug}>
									<Link
										href={href}
										aria-current={isActive ? 'page' : undefined}
										className={cn(
											'-ml-px block border-l py-1.5 pl-4 text-sm transition-colors',
											isActive
												? 'border-primary font-medium text-primary'
												: 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
										)}
									>
										{doc.title}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			))}
		</nav>
	)
}
