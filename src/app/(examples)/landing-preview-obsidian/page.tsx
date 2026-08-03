import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { JetBrains_Mono, Syne } from 'next/font/google'

import { Capabilities } from './_sections/capabilities'
import { Contact } from './_sections/contact'
import { Ethos } from './_sections/ethos'
import { Hero } from './_sections/hero'
import { Marquee } from './_sections/marquee'
import { Process } from './_sections/process'
import { Recognition } from './_sections/recognition'
import { Showcase } from './_sections/showcase'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stats } from './_sections/stats'

export const metadata: Metadata = {
	title: 'OBSIDIAN — Cinematic design & 3D studio',
	description:
		'Donkere, cinematische awwwards-stijl concept-landingspagina voor een fictieve creative/3D-studio. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--ink': 'oklch(0.13 0.012 280)',
	'--ink-2': 'oklch(0.17 0.014 280)',
	'--paper': 'oklch(0.95 0.008 90)',
	'--mute': 'oklch(0.66 0.01 280)',
	'--amber': 'oklch(0.82 0.16 70)',
	'--line': 'oklch(1 0 0 / 0.12)'
} as CSSProperties

const display = Syne({
	subsets: ['latin'],
	weight: ['400', '600', '700', '800'],
	variable: '--font-display'
})
const mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono'
})

export default function ObsidianPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${mono.variable} relative min-h-screen overflow-x-hidden font-[family-name:var(--font-display)] antialiased [background:var(--ink)] [color:var(--paper)]`}
		>
			<style>{`
				@keyframes ob-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
				.ob-marquee { animation: ob-marquee 28s linear infinite; }
				.ob-marquee--rev { animation-direction: reverse; }
				@keyframes ob-rise { from { opacity: 0; transform: translateY(36px) } to { opacity: 1; transform: translateY(0) } }
				.ob-rise { opacity: 0; animation: ob-rise 1s cubic-bezier(0.16,1,0.3,1) forwards; }
				@supports (animation-timeline: view()) {
					.ob-reveal { opacity: 0; transform: translateY(40px); animation: ob-rise 1ms both; animation-timeline: view(); animation-range: entry 3% cover 28%; }
				}
				@keyframes ob-glow { 0%,100% { opacity: 0.45; transform: translate(0,0) } 50% { opacity: 0.7; transform: translate(3%,-3%) } }
				.ob-glow { animation: ob-glow 14s ease-in-out infinite; }
				@media (prefers-reduced-motion: reduce) {
					.ob-marquee, .ob-glow { animation: none !important; }
					.ob-rise, .ob-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			{/* Film-grain overlay */}
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-overlay'
				style={{
					backgroundImage:
						"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
				}}
			/>

			<SiteNav />
			<main>
				<Hero />
				<Marquee />
				<Ethos />
				<Showcase />
				<Capabilities />
				<Stats />
				<Process />
				<Recognition />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
