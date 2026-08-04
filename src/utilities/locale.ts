export const LOCALES = ['en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en'
}

/** Build a clean public path. English is currently the only served locale. */
export function localizePath(path: string, _locale: string): string {
  return path.startsWith('/') ? path : `/${path}`
}

export function localeFromPathname(_pathname: string): Locale {
  return DEFAULT_LOCALE
}

export function staticAlternates(path: string): Record<Locale, string> {
  return { en: localizePath(path, 'en') }
}
