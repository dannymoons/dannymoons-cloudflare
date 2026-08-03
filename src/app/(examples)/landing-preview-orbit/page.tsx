import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'

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
	title: 'Orbit by moonsio — Carbon emission dashboard',
	description:
		'Track webpage carbon emissions over time across every page on your site. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.11 0.025 265)',
	'--panel': 'oklch(0.16 0.03 265)',
	'--surface': 'oklch(0.20 0.035 265)',
	'--text': 'oklch(0.96 0.01 265)',
	'--mute': 'oklch(0.62 0.03 265)',
	'--orbit': 'oklch(0.72 0.14 195)',
	'--mint': 'oklch(0.78 0.16 165)',
	'--warn': 'oklch(0.75 0.16 75)',
	'--danger': 'oklch(0.62 0.2 25)',
	'--line': 'oklch(1 0 0 / 0.08)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.96 0.01 265), oklch(0.72 0.14 195), oklch(0.78 0.16 165))'
} as CSSProperties

const display = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['500', '600', '700', '800'],
	variable: '--font-display'
})
const body = DM_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-body'
})

export default function OrbitPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.ob-reveal{opacity:0;transform:translateY(20px);animation:ob-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes ob-rise{to{opacity:1;transform:none}}
				@keyframes ob-orbit{to{transform:rotate(360deg)}}
				.ob-orbit-slow{animation:ob-orbit 120s linear infinite}
				@keyframes ob-pulse-ring{0%,100%{opacity:.35;transform:scale(1)}50%{opacity:.7;transform:scale(1.02)}}
				.ob-pulse-ring{animation:ob-pulse-ring 6s ease-in-out infinite}
				@media(prefers-reduced-motion:reduce){.ob-reveal,.ob-orbit-slow,.ob-pulse-ring{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<div
				aria-hidden
				className='ob-orbit-slow pointer-events-none fixed top-1/2 left-1/2 -z-10 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--orbit)_25%,transparent)] opacity-40'
			/>
			<div
				aria-hidden
				className='ob-pulse-ring pointer-events-none fixed top-1/2 left-1/2 -z-10 h-[min(70vw,560px)] w-[min(70vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--mint)_20%,transparent)]'
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
