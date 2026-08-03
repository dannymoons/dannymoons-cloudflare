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
	title: 'Orbit Horizon by moonsio — Carbon emission dashboard',
	description:
		'Track webpage carbon emissions over time across every page on your site — editorial parchment & olive edition. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--parchment': 'oklch(0.96 0.012 95)',
	'--panel': 'oklch(0.985 0.007 95)',
	'--surface': 'oklch(0.92 0.016 95)',
	'--ink': 'oklch(0.22 0.03 145)',
	'--olive': 'oklch(0.42 0.06 145)',
	'--sage': 'oklch(0.62 0.06 145)',
	'--clay': 'oklch(0.78 0.05 75)',
	'--mute': 'oklch(0.48 0.03 145)',
	'--warn': 'oklch(0.66 0.11 70)',
	'--danger': 'oklch(0.53 0.15 35)',
	'--positive': 'oklch(0.50 0.10 155)',
	'--line': 'oklch(0.22 0.03 145 / 0.14)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.22 0.03 145), oklch(0.42 0.06 145), oklch(0.62 0.06 145))'
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

export default function OrbitHorizonPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.oh-reveal{opacity:0;transform:translateY(20px);animation:oh-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes oh-rise{to{opacity:1;transform:none}}
				@keyframes oh-orbit{to{transform:rotate(360deg)}}
				.oh-orbit-slow{animation:oh-orbit 160s linear infinite}
				@media(prefers-reduced-motion:reduce){.oh-reveal,.oh-orbit-slow{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>

			<div
				aria-hidden
				className='oh-orbit-slow pointer-events-none fixed top-[36%] left-1/2 -z-10 h-[min(92vw,760px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--olive)_18%,transparent)] opacity-50'
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed top-[36%] left-1/2 -z-10 h-[min(70vw,560px)] w-[min(70vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--sage)_28%,transparent)] opacity-50'
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
