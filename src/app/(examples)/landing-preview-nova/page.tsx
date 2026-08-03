import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { JetBrains_Mono, Sora } from 'next/font/google'

import { Cta } from './_sections/cta'
import { Faq } from './_sections/faq'
import { Features } from './_sections/features'
import { Hero } from './_sections/hero'
import { Logos } from './_sections/logos'
import { Metrics } from './_sections/metrics'
import { Pipeline } from './_sections/pipeline'
import { Pricing } from './_sections/pricing'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Testimonials } from './_sections/testimonials'
import { Usage } from './_sections/usage'

export const metadata: Metadata = {
	title: 'AETHER — Inference at the speed of thought',
	description:
		'Futuristische, dark-mode concept-landingspagina voor een fictief AI-compute platform. Per sectie opgebouwd zodat blokken eenvoudig naar Payload zijn over te zetten.'
}

const theme = {
	'--space': 'oklch(0.15 0.03 280)',
	'--space-2': 'oklch(0.19 0.035 285)',
	'--cyan': 'oklch(0.84 0.15 200)',
	'--violet': 'oklch(0.68 0.22 300)',
	'--ink': 'oklch(0.97 0.01 280)',
	'--ink-soft': 'oklch(0.74 0.03 285)',
	'--line': 'oklch(1 0 0 / 0.1)'
} as CSSProperties

const display = Sora({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--font-display'
})
const mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono'
})

export default function NovaPage() {
	return (
		<div
			style={theme}
			className={`${display.variable} ${mono.variable} relative min-h-screen overflow-x-hidden font-[family-name:var(--font-display)] antialiased [background:var(--space)] [color:var(--ink)]`}
		>
			<style>{`
				@keyframes nv-drift { 0%,100% { transform: translate3d(0,0,0) } 50% { transform: translate3d(4%, -3%, 0) } }
				@keyframes nv-float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-14px) } }
				@keyframes nv-pulse { 0%,100% { opacity: 0.5 } 50% { opacity: 1 } }
				.nv-mesh { animation: nv-drift 18s ease-in-out infinite; }
				.nv-float { animation: nv-float 7s ease-in-out infinite; }
				.nv-pulse { animation: nv-pulse 2.4s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) { .nv-mesh,.nv-float,.nv-pulse { animation: none !important; } }
			`}</style>

			{/* Background layers — drifting mesh + masked grid. */}
			<div
				aria-hidden
				className='nv-mesh pointer-events-none fixed inset-0 -z-10'
				style={{
					background:
						'radial-gradient(50% 40% at 15% 10%, oklch(0.68 0.22 300 / 0.30), transparent 70%),' +
						'radial-gradient(45% 45% at 90% 5%, oklch(0.84 0.15 200 / 0.22), transparent 70%),' +
						'radial-gradient(55% 50% at 70% 90%, oklch(0.6 0.2 320 / 0.18), transparent 70%)'
				}}
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 -z-10 opacity-[0.07]'
				style={{
					backgroundImage:
						'linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)',
					backgroundSize: '64px 64px',
					maskImage: 'radial-gradient(circle at 50% 0%, black, transparent 80%)'
				}}
			/>

			<SiteNav />
			<main>
				<Hero />
				<Logos />
				<Features />
				<Metrics />
				<Usage />
				<Pipeline />
				<Pricing />
				<Testimonials />
				<Faq />
				<Cta />
			</main>
			<SiteFooter />
		</div>
	)
}
