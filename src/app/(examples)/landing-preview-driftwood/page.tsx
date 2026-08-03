import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Cormorant, Montserrat } from 'next/font/google'

import { Amenities } from './_sections/amenities'
import { Bookings } from './_sections/bookings'
import { Dining } from './_sections/dining'
import { Experiences } from './_sections/experiences'
import { Gallery } from './_sections/gallery'
import { Hero } from './_sections/hero'
import { Location } from './_sections/location'
import { Rates } from './_sections/rates'
import { Reviews } from './_sections/reviews'
import { Rooms } from './_sections/rooms'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Spa } from './_sections/spa'

export const metadata: Metadata = {
	title: 'Driftwood — Coastal boutique hotel',
	description:
		'Mediterranean seaside retreat concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--sand': 'oklch(0.94 0.03 85)',
	'--sea': 'oklch(0.52 0.1 230)',
	'--terra': 'oklch(0.58 0.12 45)',
	'--linen': 'oklch(0.98 0.01 90)',
	'--ink': 'oklch(0.28 0.04 250)',
	'--mute': 'oklch(0.52 0.03 250)',
	'--line': 'oklch(0.28 0.04 250 / 0.1)'
} as CSSProperties

const display = Cormorant({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = Montserrat({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function DriftwoodPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--linen)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.dw-reveal{opacity:0;transform:translateY(20px);animation:dw-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes dw-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.dw-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Rooms />
				<Amenities />
				<Dining />
				<Spa />
				<Experiences />
				<Gallery />
				<Location />
				<Rates />
				<Reviews />
				<Bookings />
			</main>
			<SiteFooter />
		</div>
	)
}
