import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google'

import { AgencyScores } from './_sections/agency-scores'
import { Benchmarks } from './_sections/benchmarks'
import { Clients } from './_sections/clients'
import { Contact } from './_sections/contact'
import { Features } from './_sections/features'
import { HeatmapMatrix } from './_sections/heatmap-matrix'
import { Hero } from './_sections/hero'
import { HowItWorks } from './_sections/how-it-works'
import { Leaderboard } from './_sections/leaderboard'
import { LiveTerminal } from './_sections/live-terminal'
import { Pricing } from './_sections/pricing'
import { RadarBenchmark } from './_sections/radar-benchmark'
import { ReportPreview } from './_sections/report-preview'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Trial } from './_sections/trial'

export const metadata: Metadata = {
	title: 'Greenbench — Agency carbon benchmarking',
	description:
		'Agency sustainability benchmark SaaS concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--white': 'oklch(1 0 0)',
	'--ink': 'oklch(0.18 0.02 155)',
	'--green': 'oklch(0.48 0.14 155)',
	'--lime': 'oklch(0.75 0.16 135)',
	'--mute': 'oklch(0.52 0.03 155)',
	'--line': 'oklch(0.18 0.02 155 / 0.1)'
} as CSSProperties
const display = Space_Grotesk({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = Inter({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-body'
})
const mono = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-mono'
})

export default function GreenbenchPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--white)] [color:var(--ink)]`}
		>
			<style>{`.gb-scanlines{background:repeating-linear-gradient(0deg,transparent,transparent 2px,color-mix(in oklch,var(--ink)_8%,transparent) 2px,color-mix(in oklch,var(--ink)_8%,transparent) 4px)}@keyframes gb-terminal-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}.gb-terminal-line{animation:gb-terminal-in .3s ease both}@supports(animation-timeline:view()){.gb-reveal{opacity:0;transform:translateY(18px);animation:gb-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes gb-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.gb-reveal,.gb-terminal-line{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<LiveTerminal />
				<RadarBenchmark />
				<HeatmapMatrix />
				<HowItWorks />
				<AgencyScores />
				<Leaderboard />
				<Benchmarks />
				<ReportPreview />
				<Features />
				<Clients />
				<Pricing />
				<Trial />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
