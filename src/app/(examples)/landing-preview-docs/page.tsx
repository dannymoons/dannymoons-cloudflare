import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { DocContent } from './_sections/doc-content'
import { DocFooter } from './_sections/doc-footer'
import { DocSidebar } from './_sections/doc-sidebar'
import { DocToc } from './_sections/doc-toc'
import { DocsNav } from './_sections/docs-nav'

export const metadata: Metadata = {
	title: 'Helix SDK — Documentation concept',
	description:
		'Documentatie-stijl concept-landingspagina voor een fictieve developer SDK. Per sectie opgebouwd voor Payload.'
}

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function DocsPage() {
	return (
		<div
			className={`${mono.variable} min-h-screen bg-background text-foreground antialiased`}
		>
			<DocsNav />
			<div className='mx-auto grid max-w-[90rem] grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)_15rem]'>
				<DocSidebar />
				<main className='min-w-0 px-5 py-10 sm:px-10'>
					<DocContent />
					<DocFooter />
				</main>
				<DocToc />
			</div>
		</div>
	)
}
