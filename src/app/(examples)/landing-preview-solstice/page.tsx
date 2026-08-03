import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Cormorant, Lato } from 'next/font/google'

import { CandlelitTable } from './_sections/candlelit-table'
import { Chef } from './_sections/chef'
import { Ethos } from './_sections/ethos'
import { FlavorWheel } from './_sections/flavor-wheel'
import { Events } from './_sections/events'
import { Gallery } from './_sections/gallery'
import { Hero } from './_sections/hero'
import { Locations } from './_sections/locations'
import { Menu } from './_sections/menu'
import { Reservations } from './_sections/reservations'
import { Reviews } from './_sections/reviews'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Spaces } from './_sections/spaces'
import { Wine } from './_sections/wine'

export const metadata: Metadata = {
	title: 'SOLSTICE — Fine dining collective',
	description:
		'Donkere gastronomie concept-landingspagina. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--noir': 'oklch(0.16 0.02 30)',
	'--burgundy': 'oklch(0.38 0.1 25)',
	'--gold': 'oklch(0.75 0.1 80)',
	'--cream': 'oklch(0.95 0.01 85)',
	'--mute': 'oklch(0.65 0.02 50)',
	'--line': 'oklch(1 0 0 / 0.1)'
} as CSSProperties

const display = Cormorant({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-display'
})
const body = Lato({
	subsets: ['latin'],
	weight: ['300', '400', '700'],
	variable: '--font-body'
})

export default function SolsticePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--noir)] [color:var(--cream)]`}
		>
			<style>{`@supports(animation-timeline:view()){.so-reveal{opacity:0;transform:translateY(22px);animation:so-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes so-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.so-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Ethos />
				<FlavorWheel />
				<Menu />
				<Chef />
				<Spaces />
				<Wine />
				<CandlelitTable />
				<Gallery />
				<Events />
				<Reviews />
				<Locations />
				<Reservations />
			</main>
			<SiteFooter />
		</div>
	)
}
