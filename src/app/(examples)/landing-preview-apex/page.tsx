import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'

import { Approach } from './_sections/approach'
import { Careers } from './_sections/careers'
import { Cases } from './_sections/cases'
import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { Insights } from './_sections/insights'
import { Partners } from './_sections/partners'
import { PracticeAreas } from './_sections/practice-areas'
import { ProBono } from './_sections/pro-bono'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Testimonials } from './_sections/testimonials'

export const metadata: Metadata = {
	title: 'Apex Chambers — Boutique litigation',
	description:
		'High-stakes law firm concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--stone': 'oklch(0.22 0.02 55)',
	'--copper': 'oklch(0.58 0.1 55)',
	'--parchment': 'oklch(0.96 0.008 90)',
	'--slate': 'oklch(0.35 0.03 250)',
	'--mute': 'oklch(0.52 0.02 55)',
	'--line': 'oklch(0.22 0.02 55 / 0.12)'
} as CSSProperties

const display = Cormorant_Garamond({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = Source_Sans_3({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function ApexPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--parchment)] [color:var(--stone)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ax-reveal{opacity:0;transform:translateY(20px);animation:ax-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ax-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ax-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<PracticeAreas />
				<Cases />
				<Partners />
				<Approach />
				<Testimonials />
				<Insights />
				<ProBono />
				<Careers />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
