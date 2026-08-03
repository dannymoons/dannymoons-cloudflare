import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Merriweather, Open_Sans } from 'next/font/google'

import { Assessment } from './_sections/assessment'
import { Certification } from './_sections/certification'
import { Contact } from './_sections/contact'
import { Faq } from './_sections/faq'
import { Hero } from './_sections/hero'
import { Impact } from './_sections/impact'
import { Pathway } from './_sections/pathway'
import { Resources } from './_sections/resources'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Standards } from './_sections/standards'
import { SuccessStories } from './_sections/success-stories'
import { Team } from './_sections/team'
import { WhyBcorp } from './_sections/why-bcorp'

export const metadata: Metadata = {
	title: 'Beacon — B Corp certification consultancy',
	description:
		'B Corp certification guide concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--forest': 'oklch(0.32 0.07 155)',
	'--gold': 'oklch(0.72 0.1 85)',
	'--cream': 'oklch(0.97 0.01 90)',
	'--ink': 'oklch(0.22 0.03 155)',
	'--mute': 'oklch(0.50 0.03 155)',
	'--line': 'oklch(0.22 0.03 155 / 0.1)'
} as CSSProperties
const display = Merriweather({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-display'
})
const body = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function BeaconPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--cream)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.be-reveal{opacity:0;transform:translateY(20px);animation:be-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes be-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.be-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<WhyBcorp />
				<Pathway />
				<Standards />
				<Assessment />
				<Certification />
				<Impact />
				<SuccessStories />
				<Resources />
				<Team />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
