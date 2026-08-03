import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Manrope } from 'next/font/google'

import { Colors } from './_sections/colors'
import { Compare } from './_sections/compare'
import { CtaBuy } from './_sections/cta-buy'
import { FeatureBattery } from './_sections/feature-battery'
import { FeatureDesign } from './_sections/feature-design'
import { FeatureSound } from './_sections/feature-sound'
import { Gallery } from './_sections/gallery'
import { Hero } from './_sections/hero'
import { Highlights } from './_sections/highlights'
import { Reviews } from './_sections/reviews'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Specs } from './_sections/specs'
import { Statement } from './_sections/statement'

export const metadata: Metadata = {
	title: 'Aura — The audio you wear',
	description:
		'Apple-achtige, product-gedreven concept-landingspagina voor een fictief audio-merk. Per sectie opgebouwd zodat blokken eenvoudig naar Payload zijn over te zetten.'
}

const theme = {
	'--paper': 'oklch(0.98 0.002 270)',
	'--ink': 'oklch(0.17 0.01 270)',
	'--mute': 'oklch(0.52 0.01 270)',
	'--line': 'oklch(0.9 0.004 270)',
	'--accent': 'oklch(0.6 0.16 255)',
	'--ink-on-dark': 'oklch(0.98 0.002 270)'
} as CSSProperties

const display = Manrope({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-display'
})

export default function VisionPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} min-h-screen font-[family-name:var(--font-display)] antialiased [background:var(--paper)] [color:var(--ink)]`}
		>
			{/* Scroll-driven reveals (progressive enhancement; content stays visible). */}
			<style>{`
				@keyframes apl-rise { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
				@keyframes apl-scale { from { opacity: 0; transform: scale(0.94) } to { opacity: 1; transform: scale(1) } }
				@supports (animation-timeline: view()) {
					.apl-reveal { opacity: 0; animation: apl-rise 1ms both; animation-timeline: view(); animation-range: entry 4% cover 30%; }
					.apl-zoom { opacity: 0; animation: apl-scale 1ms both; animation-timeline: view(); animation-range: entry 2% cover 36%; }
				}
				@media (prefers-reduced-motion: reduce) {
					.apl-reveal, .apl-zoom { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			<SiteNav />
			<main>
				<Hero />
				<Statement />
				<FeatureSound />
				<FeatureDesign />
				<FeatureBattery />
				<Gallery />
				<Highlights />
				<Reviews />
				<Colors />
				<Compare />
				<Specs />
				<CtaBuy />
			</main>
			<SiteFooter />
		</div>
	)
}
