import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Anton, Archivo, DM_Mono } from 'next/font/google'

import { Cta } from './_sections/cta'
import { Flavors } from './_sections/flavors'
import { FuelStats } from './_sections/fuel-stats'
import { Hero } from './_sections/hero'
import { Ingredients } from './_sections/ingredients'
import { MarqueeBand } from './_sections/marquee-band'
import { Newsletter } from './_sections/newsletter'
import { Reviews } from './_sections/reviews'
import { Ritual } from './_sections/ritual'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { TickerTop } from './_sections/ticker-top'
import { WhereToBuy } from './_sections/where-to-buy'

export const metadata: Metadata = {
	title: 'VOLTCORE — Fuel the Chaos',
	description:
		'Bold, maximalistische concept-landingspagina voor een fictief energydrink-merk. Per sectie opgebouwd zodat blokken eenvoudig naar Payload zijn over te zetten.'
}

const theme = {
	'--void': 'oklch(0.16 0.02 280)',
	'--acid': 'oklch(0.88 0.24 130)',
	'--magenta': 'oklch(0.66 0.28 350)',
	'--cyan': 'oklch(0.82 0.16 200)',
	'--paper': 'oklch(0.97 0.01 100)'
} as CSSProperties

const display = Anton({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-display'
})
const body = Archivo({
	subsets: ['latin'],
	weight: ['400', '600', '800'],
	variable: '--font-body'
})
const mono = DM_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono'
})

export default function PulsePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen overflow-x-hidden font-[family-name:var(--font-body)] antialiased [background:var(--void)] [color:var(--paper)]`}
		>
			{/* Shared marquee / pop / spin animations used across sections. */}
			<style>{`
				@keyframes vc-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
				.vc-marquee { animation: vc-marquee 22s linear infinite; }
				.vc-marquee--rev { animation-direction: reverse; }
				@keyframes vc-pop { from { opacity: 0; transform: translateY(40px) scale(0.96) } to { opacity: 1; transform: translateY(0) scale(1) } }
				.vc-pop { opacity: 0; animation: vc-pop 0.7s cubic-bezier(0.2,0.9,0.2,1) forwards; }
				@keyframes vc-spin { to { transform: rotate(360deg) } }
				.vc-spin { animation: vc-spin 16s linear infinite; }
				@media (prefers-reduced-motion: reduce) {
					.vc-marquee, .vc-spin { animation: none !important; }
					.vc-pop { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			<TickerTop />
			<SiteNav />
			<main>
				<Hero />
				<Flavors />
				<FuelStats />
				<MarqueeBand />
				<Ingredients />
				<Ritual />
				<Reviews />
				<WhereToBuy />
				<Newsletter />
				<Cta />
			</main>
			<SiteFooter />
		</div>
	)
}
