import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import {
	Bricolage_Grotesque,
	DM_Mono,
	Instrument_Serif
} from 'next/font/google'

import { Capabilities } from './_sections/capabilities'
import { Clients } from './_sections/clients'
import { ContactCta } from './_sections/contact-cta'
import { Hero } from './_sections/hero'
import { Manifesto } from './_sections/manifesto'
import { Marquee } from './_sections/marquee'
import { Process } from './_sections/process'
import { Showcase } from './_sections/showcase'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stats } from './_sections/stats'
import { Team } from './_sections/team'
import { Testimonials } from './_sections/testimonials'
import { Work } from './_sections/work'

export const metadata: Metadata = {
	title: 'FLUX — A design & motion studio',
	description:
		'Zeer creatieve, experimentele concept-landingspagina voor een fictieve creative studio. Per sectie opgebouwd zodat blokken eenvoudig naar Payload zijn over te zetten.'
}

const theme = {
	'--cream': 'oklch(0.96 0.02 95)',
	'--ink': 'oklch(0.17 0.02 300)',
	'--cobalt': 'oklch(0.55 0.2 265)',
	'--tangerine': 'oklch(0.74 0.18 55)',
	'--magenta': 'oklch(0.62 0.25 350)',
	'--lime': 'oklch(0.86 0.2 130)'
} as CSSProperties

const display = Bricolage_Grotesque({
	subsets: ['latin'],
	weight: ['400', '600', '700', '800'],
	variable: '--font-display'
})
const serif = Instrument_Serif({
	subsets: ['latin'],
	weight: ['400'],
	style: ['normal', 'italic'],
	variable: '--font-serif'
})
const mono = DM_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono'
})

export default function FluxPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${serif.variable} ${mono.variable} min-h-screen overflow-x-hidden font-[family-name:var(--font-display)] antialiased [background:var(--cream)] [color:var(--ink)]`}
		>
			<style>{`
				@keyframes flx-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
				.flx-marquee { animation: flx-marquee 24s linear infinite; }
				.flx-marquee--rev { animation-direction: reverse; }
				@keyframes flx-spin { to { transform: rotate(360deg) } }
				.flx-spin { animation: flx-spin 14s linear infinite; }
				@keyframes flx-float { 0%,100% { transform: translateY(0) rotate(var(--r,0deg)) } 50% { transform: translateY(-12px) rotate(var(--r,0deg)) } }
				.flx-float { animation: flx-float 6s ease-in-out infinite; }
				@keyframes flx-blob { 0%,100% { transform: translate(0,0) scale(1) } 33% { transform: translate(6%,-4%) scale(1.1) } 66% { transform: translate(-5%,5%) scale(0.95) } }
				.flx-blob { animation: flx-blob 20s ease-in-out infinite; }
				@keyframes flx-rise { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
				@supports (animation-timeline: view()) {
					.flx-reveal { opacity: 0; animation: flx-rise 1ms both; animation-timeline: view(); animation-range: entry 4% cover 30%; }
				}
				@media (prefers-reduced-motion: reduce) {
					.flx-marquee, .flx-spin, .flx-float, .flx-blob { animation: none !important; }
					.flx-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			<SiteNav />
			<main>
				<Hero />
				<Marquee />
				<Work />
				<Showcase />
				<Manifesto />
				<Capabilities />
				<Stats />
				<Process />
				<Testimonials />
				<Team />
				<Clients />
				<ContactCta />
			</main>
			<SiteFooter />
		</div>
	)
}
