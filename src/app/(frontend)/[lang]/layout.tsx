import { isLocale, type Locale } from '@/utilities/locale'
import { SiteHeader } from '@/components/header'
import { Footer } from '@/components/footer/footer'
import { notFound } from 'next/navigation'
import type React from 'react'

type Args = {
	children: React.ReactNode
	params: Promise<{
		lang: string
	}>
}

export default async function LocaleLayout({ children, params }: Args) {
	const { lang } = await params

	if (!isLocale(lang)) notFound()

	const locale = lang as Locale

	return (
		<>
			<SiteHeader locale={locale} />
			{children}
			<Footer locale={locale} />
		</>
	)
}
