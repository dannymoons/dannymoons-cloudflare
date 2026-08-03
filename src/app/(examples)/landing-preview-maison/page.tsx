import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Bodoni_Moda, Jost } from 'next/font/google'

import { Appointment } from './_sections/appointment'
import { Atelier } from './_sections/atelier'
import { Collection } from './_sections/collection'
import { Craftsmanship } from './_sections/craftsmanship'
import { FabricAtlas } from './_sections/fabric-atlas'
import { FittingRoom } from './_sections/fitting-room'
import { Heritage } from './_sections/heritage'
import { Hero } from './_sections/hero'
import { Lookbook } from './_sections/lookbook'
import { Newsletter } from './_sections/newsletter'
import { Press } from './_sections/press'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Statement } from './_sections/statement'
import { Stores } from './_sections/stores'

export const metadata: Metadata = {
	title: 'MAISON LÉRINS — Haute couture',
	description:
		'Ultra-luxe mode concept-landingspagina. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--noir': 'oklch(0.14 0.005 80)',
	'--cream': 'oklch(0.97 0.006 85)',
	'--gold': 'oklch(0.72 0.08 75)',
	'--mute': 'oklch(0.55 0.01 80)',
	'--line': 'oklch(0.97 0.006 85 / 0.15)'
} as CSSProperties

const display = Bodoni_Moda({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	style: ['normal', 'italic'],
	variable: '--font-display'
})
const body = Jost({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body'
})

export default function MaisonPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--noir)] [color:var(--cream)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ml-reveal{opacity:0;transform:translateY(20px);animation:ml-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes ml-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ml-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Statement />
				<Collection />
				<Craftsmanship />
				<FabricAtlas />
				<Atelier />
				<FittingRoom />
				<Lookbook />
				<Press />
				<Heritage />
				<Stores />
				<Appointment />
				<Newsletter />
			</main>
			<SiteFooter />
		</div>
	)
}
