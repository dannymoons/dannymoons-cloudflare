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
	title: 'Orbit Horizon Glass by moonsio — Carbon emission dashboard',
	description:
		'Dark glassmorphism carbon dashboard landing. Olive gradients, frosted panels, thin borders.'
}

const theme = {
	'--parchment': 'oklch(0.14 0.024 145)',
	'--panel': 'oklch(0.20 0.028 145)',
	'--surface': 'oklch(0.24 0.032 145)',
	'--ink': 'oklch(0.86 0.014 95)',
	'--stroke': 'oklch(0.52 0.038 145)',
	'--stroke-strong': 'oklch(0.62 0.042 145)',
	'--shadow': 'oklch(0.08 0.018 145)',
	'--olive': 'oklch(0.60 0.08 145)',
	'--sage': 'oklch(0.70 0.07 145)',
	'--clay': 'oklch(0.76 0.05 75)',
	'--mute': 'oklch(0.62 0.032 145)',
	'--warn': 'oklch(0.72 0.11 75)',
	'--danger': 'oklch(0.62 0.15 35)',
	'--positive': 'oklch(0.62 0.11 155)',
	'--line': 'oklch(0.86 0.014 95 / 0.14)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.86 0.014 95), oklch(0.60 0.08 145), oklch(0.70 0.07 145))'
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

const pageBackground = `
	radial-gradient(ellipse 90% 70% at 15% -5%, color-mix(in oklch, var(--olive) 42%, transparent), transparent 55%),
	radial-gradient(ellipse 70% 55% at 85% 10%, color-mix(in oklch, var(--sage) 32%, transparent), transparent 50%),
	radial-gradient(ellipse 60% 45% at 50% 105%, color-mix(in oklch, var(--clay) 18%, transparent), transparent 55%),
	linear-gradient(165deg, oklch(0.16 0.026 145) 0%, oklch(0.13 0.022 148) 45%, oklch(0.11 0.02 142) 100%)
`

/** Future Payload mapping: horizonGlassPage (template). */
export default function OrbitHorizonGlassPage() {
	return (
		<div
			id='top'
			style={{ ...theme, background: pageBackground }}
			className={`${display.variable} ${body.variable} ${mono.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [color:var(--ink)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.ohg-reveal{opacity:0;transform:translateY(20px);animation:ohg-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes ohg-rise{to{opacity:1;transform:none}}
				@keyframes ohg-orbit{to{transform:rotate(360deg)}}
				.ohg-orbit-slow{animation:ohg-orbit 160s linear infinite}
				.ohg-glass{border:1px solid color-mix(in oklch,var(--ink) 14%,transparent);background:color-mix(in oklch,var(--panel) 52%,transparent);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);box-shadow:0 8px 32px -12px color-mix(in oklch,var(--shadow) 75%,transparent),inset 0 1px 0 color-mix(in oklch,var(--ink) 10%,transparent)}
				.ohg-glass-strong{background:color-mix(in oklch,var(--panel) 68%,transparent);border-color:color-mix(in oklch,var(--stroke-strong) 40%,transparent)}
				.ohg-glass-nav{background:color-mix(in oklch,var(--parchment) 72%,transparent);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border-bottom:1px solid color-mix(in oklch,var(--ink) 12%,transparent)}
				@media(prefers-reduced-motion:reduce){.ohg-reveal,.ohg-orbit-slow{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>

			<div
				aria-hidden
				className='ohg-orbit-slow pointer-events-none fixed top-[32%] left-1/2 -z-10 h-[min(92vw,760px)] w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color-mix(in_oklch,var(--olive)_28%,transparent)] opacity-40'
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed top-[28%] right-[8%] -z-10 h-64 w-64 rounded-full opacity-50 blur-3xl [background:color-mix(in_oklch,var(--sage)_35%,transparent)]'
			/>
			<div
				aria-hidden
				className='pointer-events-none fixed bottom-[12%] left-[6%] -z-10 h-72 w-72 rounded-full opacity-40 blur-3xl [background:color-mix(in_oklch,var(--olive)_30%,transparent)]'
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
