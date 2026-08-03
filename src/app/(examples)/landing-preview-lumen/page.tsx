import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Outfit, Syne } from 'next/font/google'

import { Capabilities } from './_sections/capabilities'
import { Clients } from './_sections/clients'
import { Contact } from './_sections/contact'
import { DepthLayers } from './_sections/depth-layers'
import { Hero } from './_sections/hero'
import { Lab } from './_sections/lab'
import { Manifesto } from './_sections/manifesto'
import { Marquee } from './_sections/marquee'
import { Process } from './_sections/process'
import { Sensorium } from './_sections/sensorium'
import { Showcase } from './_sections/showcase'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stats } from './_sections/stats'
import { Team } from './_sections/team'

export const metadata: Metadata = {
	title: 'LUMEN — Experiential brand studio',
	description:
		'Iridescent creative-tech studio concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.12 0.02 280)',
	'--panel': 'oklch(0.17 0.03 280)',
	'--text': 'oklch(0.96 0.01 280)',
	'--mute': 'oklch(0.65 0.02 280)',
	'--violet': 'oklch(0.65 0.2 290)',
	'--cyan': 'oklch(0.78 0.14 200)',
	'--line': 'oklch(1 0 0 / 0.1)'
} as CSSProperties

const display = Syne({
	subsets: ['latin'],
	weight: ['600', '700', '800'],
	variable: '--font-display'
})
const body = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function LumenPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`
				@keyframes lu-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
				.lu-marquee{animation:lu-marquee 24s linear infinite}
				@keyframes lu-glow{0%,100%{opacity:.5}50%{opacity:.85}}
				.lu-glow{animation:lu-glow 8s ease-in-out infinite}
				@supports(animation-timeline:view()){.lu-reveal{opacity:0;transform:translateY(28px);animation:lu-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 24%}}
				@keyframes lu-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.lu-marquee,.lu-glow{animation:none!important}.lu-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<div
				aria-hidden
				className='lu-glow pointer-events-none fixed top-0 left-1/2 -z-10 h-[50vh] w-[80vw] -translate-x-1/2 rounded-full blur-[120px]'
				style={{
					background: 'linear-gradient(90deg, var(--violet), var(--cyan))'
				}}
			/>
			<SiteNav />
			<main>
				<Hero />
				<Marquee />
				<DepthLayers />
				<Capabilities />
				<Showcase />
				<Process />
				<Lab />
				<Sensorium />
				<Clients />
				<Stats />
				<Team />
				<Manifesto />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
