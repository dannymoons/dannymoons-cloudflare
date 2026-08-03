import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Sans } from 'next/font/google'

import { Alerts } from '../landing-preview-orbit/_sections/alerts'
import { Benchmarks } from '../landing-preview-orbit/_sections/benchmarks'
import { Customers } from '../landing-preview-orbit/_sections/customers'
import { DashboardPreview } from '../landing-preview-orbit/_sections/dashboard-preview'
import { Features } from '../landing-preview-orbit/_sections/features'
import { Hero } from '../landing-preview-orbit/_sections/hero'
import { Integrations } from '../landing-preview-orbit/_sections/integrations'
import { Methodology } from '../landing-preview-orbit/_sections/methodology'
import { MultiSite } from '../landing-preview-orbit/_sections/multi-site'
import { PageBreakdown } from '../landing-preview-orbit/_sections/page-breakdown'
import { Pricing } from '../landing-preview-orbit/_sections/pricing'
import { SiteFooter } from '../landing-preview-orbit/_sections/site-footer'
import { SiteNav } from '../landing-preview-orbit/_sections/site-nav'
import { Timeline } from '../landing-preview-orbit/_sections/timeline'
import { TrialCta } from '../landing-preview-orbit/_sections/trial-cta'

export const metadata: Metadata = {
	title: 'Orbit Nous by moonsio — Carbon emission dashboard',
	description:
		'Orbit dashboard blocks in a Nous Research-inspired parchment, olive, Crimson Pro and IBM Plex Sans system.'
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
	'--line': 'oklch(0.22 0.03 145 / 0.12)',
	'--void': 'oklch(0.96 0.012 95)',
	'--text': 'oklch(0.22 0.03 145)',
	'--orbit': 'oklch(0.42 0.06 145)',
	'--mint': 'oklch(0.62 0.06 145)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.22 0.03 145), oklch(0.42 0.06 145), oklch(0.62 0.06 145))'
} as CSSProperties

const display = Crimson_Pro({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function OrbitNousPage() {
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
				.ob-orbit-slow{animation:ob-orbit 140s linear infinite}
				@keyframes ob-pulse-ring{0%,100%{opacity:.28;transform:scale(1)}50%{opacity:.55;transform:scale(1.02)}}
				.ob-pulse-ring{animation:ob-pulse-ring 7s ease-in-out infinite}
				@media(prefers-reduced-motion:reduce){.ob-reveal,.ob-orbit-slow,.ob-pulse-ring{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<div
				aria-hidden
				className='ob-orbit-slow pointer-events-none fixed top-1/2 left-1/2 -z-10 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--orbit)_20%,transparent)] opacity-45'
			/>
			<div
				aria-hidden
				className='ob-pulse-ring pointer-events-none fixed top-1/2 left-1/2 -z-10 h-[min(70vw,560px)] w-[min(70vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--mint)_18%,transparent)]'
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
