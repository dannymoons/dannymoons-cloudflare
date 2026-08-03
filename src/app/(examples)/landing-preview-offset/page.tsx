import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { IBM_Plex_Mono, Newsreader } from 'next/font/google'

import { Audit } from './_sections/audit'
import { ByteBudget } from './_sections/byte-budget'
import { EmissionsLedger } from './_sections/emissions-ledger'
import { CaseStudies } from './_sections/case-studies'
import { Contact } from './_sections/contact'
import { Faq } from './_sections/faq'
import { Hero } from './_sections/hero'
import { Manifesto } from './_sections/manifesto'
import { Metrics } from './_sections/metrics'
import { Principles } from './_sections/principles'
import { Services } from './_sections/services'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stack } from './_sections/stack'
import { Team } from './_sections/team'
import { Tools } from './_sections/tools'

export const metadata: Metadata = {
	title: 'Offset — Sustainable web design studio',
	description:
		'Low-carbon web design agency concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--paper': 'oklch(0.97 0.008 95)',
	'--stone': 'oklch(0.55 0.02 95)',
	'--forest': 'oklch(0.38 0.07 155)',
	'--lime': 'oklch(0.72 0.16 135)',
	'--ink': 'oklch(0.20 0.02 155)',
	'--mute': 'oklch(0.48 0.02 155)',
	'--line': 'oklch(0.20 0.02 155 / 0.1)'
} as CSSProperties

const display = Newsreader({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-display'
})
const body = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body'
})

export default function OffsetPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--paper)] [color:var(--ink)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.of-reveal{opacity:0;transform:translateY(20px);animation:of-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes of-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.of-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Manifesto />
				<Metrics />
				<ByteBudget />
				<Services />
				<Audit />
				<Stack />
				<EmissionsLedger />
				<CaseStudies />
				<Principles />
				<Tools />
				<Team />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
