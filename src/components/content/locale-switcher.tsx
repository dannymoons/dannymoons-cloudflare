'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSyncExternalStore } from 'react'
import { LOCALES, type Locale } from '@/utilities/locale'

const LABELS: Record<Locale, string> = {
	nl: 'NL',
	en: 'EN',
}

function getHreflangSnapshot() {
	if (typeof document === 'undefined') return ''

	const alternates = LOCALES.map((locale) => {
		const link = document.querySelector<HTMLLinkElement>(
			`link[rel="alternate"][hreflang="${locale}"]`
		)
		return [locale, link?.href ?? ''] as const
	})

	return JSON.stringify(alternates)
}

function subscribeToHreflangAlternates(onStoreChange: () => void) {
	if (typeof document === 'undefined') return () => {}

	const observer = new MutationObserver(onStoreChange)
	observer.observe(document.head, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['href', 'hreflang', 'rel'],
	})

	return () => observer.disconnect()
}

function parseHreflangSnapshot(snapshot: string): Partial<Record<Locale, string>> {
	if (!snapshot) return {}

	try {
		const entries = JSON.parse(snapshot) as [Locale, string][]
		return Object.fromEntries(
			entries.flatMap(([locale, href]) => {
				if (!href) return []
				return [[locale, new URL(href).pathname] as const]
			})
		)
	} catch {
		return {}
	}
}

/**
 * Fallback for shared static paths without hreflang metadata, such as search
 * and post archives. CMS-backed pages use their translated metadata alternate.
 */
function getFallbackHref(pathname: string, targetLocale: Locale): string {
	const hasEnPrefix = pathname === '/en' || pathname.startsWith('/en/')

	if (targetLocale === 'en') {
		// Current page is NL (clean URL) — add /en prefix
		if (!hasEnPrefix) {
			return pathname === '/' ? '/en' : `/en${pathname}`
		}
		return pathname
	}

	// Target is NL (default locale, clean URL) — strip /en prefix
	if (hasEnPrefix) {
		const stripped = pathname.replace(/^\/en/, '') || '/'
		return stripped
	}
	return pathname
}

type LocaleSwitcherProps = {
	/** Active locale determined by the [lang] segment. */
	locale: Locale
}

export function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
	const pathname = usePathname()
	const hreflangSnapshot = useSyncExternalStore(
		subscribeToHreflangAlternates,
		getHreflangSnapshot,
		() => ''
	)
	const alternates = parseHreflangSnapshot(hreflangSnapshot)
	const hasCurrentPageAlternate = Boolean(alternates[locale])
	const alternatesMatchCurrentPath = alternates[locale] === pathname

	return (
		<div className="flex items-center gap-1 text-sm">
			{LOCALES.map((targetLocale) => {
				const isActive = targetLocale === locale
				const href = isActive
					? '#'
					: hasCurrentPageAlternate && !alternatesMatchCurrentPath
						? '#'
						: (alternates[targetLocale] ?? getFallbackHref(pathname, targetLocale))

				return (
					<Link
						key={targetLocale}
						href={href}
						aria-current={isActive ? 'page' : undefined}
						className={`rounded px-2 py-1 transition-colors ${
							isActive
								? 'pointer-events-none bg-primary font-medium text-primary-foreground'
								: 'text-muted-foreground hover:text-foreground'
						}`}
					>
						{LABELS[targetLocale]}
					</Link>
				)
			})}
		</div>
	)
}
