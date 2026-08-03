import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Cinzel, Raleway } from 'next/font/google'

import { Atmosphere } from './_sections/atmosphere'
import { Cocktails } from './_sections/cocktails'
import { Contact } from './_sections/contact'
import { DressCode } from './_sections/dress-code'
import { Entrance } from './_sections/entrance'
import { Events } from './_sections/events'
import { Hero } from './_sections/hero'
import { Location } from './_sections/location'
import { PrivateHire } from './_sections/private-hire'
import { Reservations } from './_sections/reservations'
import { Reviews } from './_sections/reviews'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Spirits } from './_sections/spirits'

export const metadata: Metadata = {
	title: 'Hollow — Speakeasy cocktail lounge',
	description: 'Art deco hidden bar concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--velvet': 'oklch(0.18 0.06 25)',
	'--gold': 'oklch(0.72 0.1 80)',
	'--smoke': 'oklch(0.28 0.02 280)',
	'--cream': 'oklch(0.94 0.01 85)',
	'--mute': 'oklch(0.62 0.03 50)',
	'--line': 'oklch(0.72 0.1 80 / 0.2)'
} as CSSProperties

const display = Cinzel({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = Raleway({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function HollowPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--velvet)] [color:var(--cream)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ho-reveal{opacity:0;transform:translateY(20px);animation:ho-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ho-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ho-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Entrance />
				<Cocktails />
				<Spirits />
				<Atmosphere />
				<Reservations />
				<Events />
				<Reviews />
				<Location />
				<DressCode />
				<PrivateHire />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
