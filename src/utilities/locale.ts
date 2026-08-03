export const LOCALES = ['nl', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'nl'

export function isLocale(value: string | undefined | null): value is Locale {
	return value === 'nl' || value === 'en'
}

/**
 * Build a locale-aware path. The default locale is served at clean,
 * unprefixed URLs (e.g. `/over-ons`); every other locale is prefixed with
 * `/<locale>` (e.g. `/en/about-us`). External/absolute URLs should not be
 * passed through this helper.
 */
export function localizePath(path: string, locale: string): string {
	const normalized = path.startsWith('/') ? path : `/${path}`

	if (locale === DEFAULT_LOCALE) return normalized

	// Avoid a trailing slash on the home path (`/en`, not `/en/`).
	return normalized === '/' ? `/${locale}` : `/${locale}${normalized}`
}

/**
 * Detect the active locale from a browser-visible pathname. Clean
 * (unprefixed) URLs map to the default locale.
 */
export function localeFromPathname(pathname: string): Locale {
	const segment = pathname.split('/')[1]
	return isLocale(segment) ? segment : DEFAULT_LOCALE
}

/**
 * Build a complete alternates record for a static path (one that is the same
 * across locales, e.g. `/posts`, `/search`).
 */
export function staticAlternates(path: string): Record<Locale, string> {
	return Object.fromEntries(
		LOCALES.map((l) => [l, localizePath(path, l)]),
	) as Record<Locale, string>
}
