import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Libre_Baskerville, Public_Sans } from 'next/font/google'

import { Approach } from './_sections/approach'
import { CaseStudies } from './_sections/case-studies'
import { ClaimAudit } from './_sections/claim-audit'
import { CmoIndex } from './_sections/cmo-index'
import { Contact } from './_sections/contact'
import { Framework } from './_sections/framework'
import { Hero } from './_sections/hero'
import { Insights } from './_sections/insights'
import { Metrics } from './_sections/metrics'
import { Programs } from './_sections/programs'
import { RegulationTicker } from './_sections/regulation-ticker'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Team } from './_sections/team'
import { Testimonials } from './_sections/testimonials'
import { Toolkit } from './_sections/toolkit'

export const metadata: Metadata = {
	title: 'Rootline — Sustainability for marketing leaders',
	description:
		'CMO-focused sustainability consultancy concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--navy': 'oklch(0.28 0.06 250)',
	'--teal': 'oklch(0.52 0.1 195)',
	'--sand': 'oklch(0.96 0.01 90)',
	'--ink': 'oklch(0.22 0.03 250)',
	'--mute': 'oklch(0.52 0.03 250)',
	'--line': 'oklch(0.22 0.03 250 / 0.1)'
} as CSSProperties
const display = Libre_Baskerville({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-display'
})
const body = Public_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function RootlinePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--sand)] [color:var(--ink)]`}
		>
			<style>{`@keyframes rl-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}.rl-ticker{animation:rl-ticker 35s linear infinite}@supports(animation-timeline:view()){.rl-reveal{opacity:0;transform:translateY(20px);animation:rl-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes rl-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.rl-ticker,.rl-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<CmoIndex />
				<RegulationTicker />
				<ClaimAudit />
				<Framework />
				<Programs />
				<Metrics />
				<Approach />
				<Toolkit />
				<CaseStudies />
				<Insights />
				<Testimonials />
				<Team />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
