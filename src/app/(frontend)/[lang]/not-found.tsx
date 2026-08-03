import Link from 'next/link'
import { headers } from 'next/headers'

import { Button } from '@/components/ui/button'
import { isLocale, localizePath, type Locale } from '@/utilities/locale'

const COPY: Record<Locale, { heading: string; body: string; cta: string }> = {
	nl: {
		heading: '404',
		body: 'Deze pagina bestaat niet.',
		cta: 'Terug naar home',
	},
	en: {
		heading: '404',
		body: 'This page could not be found.',
		cta: 'Go home',
	},
}

export default async function NotFound() {
	const headersList = await headers()
	const rawLocale = headersList.get('x-locale') ?? 'nl'
	const locale: Locale = isLocale(rawLocale) ? rawLocale : 'nl'
	const copy = COPY[locale]

	return (
		<div className="container py-28">
			<div className="prose max-w-none">
				<h1 style={{ marginBottom: 0 }}>{copy.heading}</h1>
				<p className="mb-4">{copy.body}</p>
			</div>
			<Button asChild variant="primary">
				<Link href={localizePath('/', locale)}>{copy.cta}</Link>
			</Button>
		</div>
	)
}
