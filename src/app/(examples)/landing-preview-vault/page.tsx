import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

import { CtaDownload } from './_sections/cta-download'
import { Features } from './_sections/features'
import { Hero } from './_sections/hero'
import { HowItWorks } from './_sections/how-it-works'
import { Logos } from './_sections/logos'
import { Security } from './_sections/security'
import { Showcase } from './_sections/showcase'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Testimonials } from './_sections/testimonials'

export const metadata: Metadata = {
	title: 'Vault — Money that moves with you',
	description:
		'Donkere fintech app concept-landingspagina voor een fictieve betaal-app. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--bg': 'oklch(0.17 0.03 265)',
	'--panel': 'oklch(0.21 0.03 265)',
	'--panel-2': 'oklch(0.25 0.03 265)',
	'--text': 'oklch(0.97 0.01 265)',
	'--mute': 'oklch(0.7 0.02 265)',
	'--mint': 'oklch(0.86 0.17 165)',
	'--violet': 'oklch(0.72 0.15 290)',
	'--line': 'oklch(1 0 0 / 0.1)'
} as CSSProperties

const sans = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-sans'
})
const display = Space_Grotesk({
	subsets: ['latin'],
	weight: ['500', '700'],
	variable: '--font-display'
})

export default function VaultPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${sans.variable} ${display.variable} min-h-screen font-[family-name:var(--font-sans)] antialiased [background:var(--bg)] [color:var(--text)]`}
		>
			<style>{`
				@keyframes va-rise { from { opacity: 0; transform: translateY(28px) } to { opacity: 1; transform: translateY(0) } }
				.va-rise { opacity: 0; animation: va-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
				@supports (animation-timeline: view()) {
					.va-reveal { opacity: 0; transform: translateY(28px); animation: va-rise 1ms both; animation-timeline: view(); animation-range: entry 3% cover 26%; }
				}
				@keyframes va-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
				.va-float { animation: va-float 6s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) {
					.va-rise, .va-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
					.va-float { animation: none !important; }
				}
			`}</style>

			<SiteNav />
			<main>
				<Hero />
				<Logos />
				<Features />
				<Showcase />
				<HowItWorks />
				<Security />
				<Testimonials />
				<CtaDownload />
			</main>
			<SiteFooter />
		</div>
	)
}
