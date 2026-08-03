import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Archivo, DM_Sans } from 'next/font/google'

import { Awards } from './_sections/awards'
import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { Materials } from './_sections/materials'
import { Numbers } from './_sections/numbers'
import { Philosophy } from './_sections/philosophy'
import { ScaleComparison } from './_sections/scale-comparison'
import { SectionDrawing } from './_sections/section-drawing'
import { Process } from './_sections/process'
import { Projects } from './_sections/projects'
import { Publications } from './_sections/publications'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Studio } from './_sections/studio'
import { Team } from './_sections/team'

export const metadata: Metadata = {
	title: 'ATRIUM — Architecture & spatial design',
	description:
		'Minimalistisch architectenbureau concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--white': 'oklch(1 0 0)',
	'--ink': 'oklch(0.17 0.004 80)',
	'--concrete': 'oklch(0.55 0.01 80)',
	'--gold': 'oklch(0.62 0.09 75)',
	'--line': 'oklch(0.17 0.004 80 / 0.12)'
} as CSSProperties

const display = Archivo({
	subsets: ['latin'],
	weight: ['700', '800', '900'],
	variable: '--font-display'
})
const body = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-body'
})

export default function AtriumPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--white)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.at-reveal{opacity:0;transform:translateY(24px);animation:at-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes at-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.at-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Philosophy />
				<SectionDrawing />
				<Projects />
				<ScaleComparison />
				<Awards />
				<Process />
				<Materials />
				<Studio />
				<Team />
				<Publications />
				<Numbers />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
