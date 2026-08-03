import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google'

import { CaseStudies } from './_sections/case-studies'
import { ContactCta } from './_sections/contact-cta'
import { Faq } from './_sections/faq'
import { Hero } from './_sections/hero'
import { Impact } from './_sections/impact'
import { Methodology } from './_sections/methodology'
import { Mission } from './_sections/mission'
import { Partners } from './_sections/partners'
import { Report } from './_sections/report'
import { Services } from './_sections/services'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Team } from './_sections/team'
import { Timeline } from './_sections/timeline'

export const metadata: Metadata = {
	title: 'Verdant — Sustainability strategy agency',
	description:
		'Organisch-editoriale concept-landingspagina voor een fictief duurzaamheidsbureau. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--parchment': 'oklch(0.96 0.012 95)',
	'--clay': 'oklch(0.92 0.018 85)',
	'--moss': 'oklch(0.42 0.08 155)',
	'--sage': 'oklch(0.58 0.06 145)',
	'--ink': 'oklch(0.22 0.02 145)',
	'--mute': 'oklch(0.48 0.02 145)',
	'--teal': 'oklch(0.52 0.09 195)',
	'--line': 'oklch(0.22 0.02 145 / 0.12)'
} as CSSProperties

const display = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})
const body = Source_Sans_3({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function VerdantPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<style>{`
				@keyframes vd-rise { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
				@supports (animation-timeline: view()) {
					.vd-reveal { opacity:0; transform:translateY(24px); animation:vd-rise 1ms both; animation-timeline:view(); animation-range:entry 2% cover 22%; }
				}
				@media (prefers-reduced-motion:reduce) { .vd-reveal { animation:none!important; opacity:1!important; transform:none!important; } }
			`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Mission />
				<Services />
				<Impact />
				<CaseStudies />
				<Methodology />
				<Partners />
				<Team />
				<Timeline />
				<Report />
				<Faq />
				<ContactCta />
			</main>
			<SiteFooter />
		</div>
	)
}
