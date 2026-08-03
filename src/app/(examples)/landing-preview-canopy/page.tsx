import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Fraunces, Nunito_Sans } from 'next/font/google'

import { CaseStudies } from './_sections/case-studies'
import { Community } from './_sections/community'
import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { Impact } from './_sections/impact'
import { Partners } from './_sections/partners'
import { SpeciesWatch } from './_sections/species-watch'
import { WaterCycle } from './_sections/water-cycle'
import { Pillars } from './_sections/pillars'
import { Pledge } from './_sections/pledge'
import { Programs } from './_sections/programs'
import { Reports } from './_sections/reports'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Timeline } from './_sections/timeline'
import { Vision } from './_sections/vision'

export const metadata: Metadata = {
	title: 'Canopy — Regenerative sustainability collective',
	description:
		'Circular economy & regenerative brands concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--earth': 'oklch(0.32 0.06 75)',
	'--leaf': 'oklch(0.52 0.1 145)',
	'--sand': 'oklch(0.94 0.02 85)',
	'--bark': 'oklch(0.24 0.04 65)',
	'--sun': 'oklch(0.78 0.14 75)',
	'--mute': 'oklch(0.50 0.03 75)',
	'--line': 'oklch(0.24 0.04 65 / 0.12)'
} as CSSProperties

const display = Fraunces({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = Nunito_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-body'
})

export default function CanopyPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--sand)] [color:var(--bark)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.cp-reveal{opacity:0;transform:translateY(24px);animation:cp-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 24%}}
				@keyframes cp-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.cp-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Vision />
				<Pillars />
				<WaterCycle />
				<Programs />
				<Impact />
				<SpeciesWatch />
				<CaseStudies />
				<Partners />
				<Community />
				<Timeline />
				<Reports />
				<Pledge />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
