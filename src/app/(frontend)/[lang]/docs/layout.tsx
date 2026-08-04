import type React from 'react'

import { Container } from '@/components/layout/container'
import { DocsSidebar } from './_components/docs-sidebar'
import { getDocsNav } from './_lib/getDocsNav'

type Args = {
	children: React.ReactNode
}

export default async function DocsLayout({ children }: Args) {
	const groups = await getDocsNav('en')

	return (
		<div className='pt-24 pb-20'>
			<Container size='wide'>
				<div className='grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16'>
					<aside className='lg:sticky lg:top-24 lg:h-fit'>
						<DocsSidebar groups={groups} locale='en' />
					</aside>
					<div className='min-w-0'>{children}</div>
				</div>
			</Container>
		</div>
	)
}
