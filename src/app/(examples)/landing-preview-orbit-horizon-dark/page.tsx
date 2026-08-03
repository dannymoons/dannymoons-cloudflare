import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

import { Alerts } from './_sections/alerts'
import { Benchmarks } from './_sections/benchmarks'
import { Customers } from './_sections/customers'
import { DashboardPreview } from './_sections/dashboard-preview'
import { Features } from './_sections/features'
import { Hero } from './_sections/hero'
import { Integrations } from './_sections/integrations'
import { Methodology } from './_sections/methodology'
import { MultiSite } from './_sections/multi-site'
import { PageBreakdown } from './_sections/page-breakdown'
import { Pricing } from './_sections/pricing'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Timeline } from './_sections/timeline'
import { TrialCta } from './_sections/trial-cta'

export const metadata: Metadata = {
	title: 'Orbit Horizon Dark by moonsio — Carbon emission dashboard',
	description:
		'Dark brutal editorial carbon dashboard landing. Muted olive borders, soft cream text, deep offset shadows.'
}

const theme = {
	'--parchment': 'oklch(0.15 0.022 145)',
	'--panel': 'oklch(0.19 0.026 145)',
	'--surface': 'oklch(0.23 0.028 145)',
	'--ink': 'oklch(0.84 0.014 95)',
	'--stroke': 'oklch(0.52 0.038 145)',
	'--stroke-strong': 'oklch(0.62 0.042 145)',
	'--shadow': 'oklch(0.09 0.018 145)',
	'--olive': 'oklch(0.58 0.07 145)',
	'--sage': 'oklch(0.68 0.06 145)',
	'--clay': 'oklch(0.74 0.05 75)',
	'--mute': 'oklch(0.60 0.032 145)',
	'--warn': 'oklch(0.70 0.11 75)',
	'--danger': 'oklch(0.60 0.15 35)',
	'--positive': 'oklch(0.60 0.11 155)',
	'--line': 'oklch(0.84 0.014 95 / 0.08)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.84 0.014 95), oklch(0.58 0.07 145), oklch(0.68 0.06 145))'
} as CSSProperties

const display = Crimson_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	variable: '--font-display'
})
const body = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})
const mono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-mono'
})

/** Future Payload mapping: horizonDarkPage (template). */
export default function OrbitHorizonDarkPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.ohd-reveal{opacity:0;transform:translateY(20px);animation:ohd-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes ohd-rise{to{opacity:1;transform:none}}
				@keyframes ohd-orbit{to{transform:rotate(360deg)}}
				.ohd-orbit-slow{animation:ohd-orbit 160s linear infinite}
				@media(prefers-reduced-motion:reduce){.ohd-reveal,.ohd-orbit-slow{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>

			<div
				aria-hidden
				className='ohd-orbit-slow pointer-events-none fixed top-[36%] left-1/2 -z-10 h-[min(92vw,760px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--olive)_22%,transparent)] opacity-35'
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed top-[36%] left-1/2 -z-10 h-[min(70vw,560px)] w-[min(70vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--sage)_20%,transparent)] opacity-30'
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 -z-10 opacity-20'
				style={{
					background:
						'radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--olive) 35%, transparent), transparent)'
				}}
			/>

			<SiteNav />
			<main>
				<Hero />
				<DashboardPreview />
				<PageBreakdown />
				<Timeline />
				<MultiSite />
				<Alerts />
				<Methodology />
				<Features />
				<Benchmarks />
				<Integrations />
				<Customers />
				<Pricing />
				<TrialCta />
			</main>
			<SiteFooter />
		</div>
	)
}
