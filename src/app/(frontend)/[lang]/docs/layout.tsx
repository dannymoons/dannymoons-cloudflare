import type React from 'react'

import { Container } from '@/components/layout/container'
import { isLocale, type Locale } from '@/utilities/locale'
import { DocsSidebar } from './_components/docs-sidebar'
import { getDocsNav } from './_lib/getDocsNav'

type Args = {
	children: React.ReactNode
	params: Promise<{ lang: string }>
}

export default async function DocsLayout({ children, params }: Args) {
	const { lang } = await params
	const locale = (isLocale(lang) ? lang : 'nl') as Locale
	const groups = await getDocsNav(locale)

	return (
		<div className='pt-24 pb-20'>
			<Container size='wide'>
				<div className='grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16'>
					<aside className='lg:sticky lg:top-24 lg:h-fit'>
						<DocsSidebar groups={groups} locale={locale} />
					</aside>
					<div className='min-w-0'>{children}</div>
				</div>
			</Container>
		</div>
	)
}
