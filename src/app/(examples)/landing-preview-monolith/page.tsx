import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Libre_Bodoni, Public_Sans } from 'next/font/google'

import { Contributors } from './_sections/contributors'
import { GridStories } from './_sections/grid-stories'
import { Hero } from './_sections/hero'
import { IndexBar } from './_sections/index-bar'
import { LeadStory } from './_sections/lead-story'
import { Newsletter } from './_sections/newsletter'
import { Numbers } from './_sections/numbers'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Statement } from './_sections/statement'

export const metadata: Metadata = {
	title: 'MONOLITH — An independent design quarterly',
	description:
		'Swiss-editorial, mobile-first concept-landingspagina voor een fictief design-magazine. Per sectie opgebouwd voor Payload.'
}

/* Swiss Modernism palette — editorial black on off-white, single accent. */
const theme = {
	'--bg': 'oklch(0.985 0.001 100)',
	'--paper': 'oklch(1 0 0)',
	'--ink': 'oklch(0.17 0.003 280)',
	'--ink-soft': 'oklch(0.44 0.004 280)',
	'--accent': 'oklch(0.6 0.2 355)',
	'--accent-ink': 'oklch(0.52 0.2 355)',
	'--line': 'oklch(0.17 0.003 280 / 0.12)'
} as CSSProperties

const display = Libre_Bodoni({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-display'
})
const body = Public_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-body'
})

export default function MonolithPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--bg)] [color:var(--ink)]`}
		>
			<style>{`
				@keyframes ml-rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
				@supports (animation-timeline: view()) {
					.ml-reveal { opacity: 0; transform: translateY(18px); animation: ml-rise 1ms both; animation-timeline: view(); animation-range: entry 1% cover 18%; }
				}
				@media (prefers-reduced-motion: reduce) {
					.ml-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			<SiteNav />
			<main>
				<Hero />
				<IndexBar />
				<LeadStory />
				<GridStories />
				<Statement />
				<Numbers />
				<Contributors />
				<Newsletter />
			</main>
			<SiteFooter />
		</div>
	)
}
