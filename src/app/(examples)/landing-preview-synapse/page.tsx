import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { JetBrains_Mono, Sora } from 'next/font/google'

import { Benchmarks } from './_sections/benchmarks'
import { Capabilities } from './_sections/capabilities'
import { Demo } from './_sections/demo'
import { Enterprise } from './_sections/enterprise'
import { Hero } from './_sections/hero'
import { Inference } from './_sections/inference'
import { Integrations } from './_sections/integrations'
import { Models } from './_sections/models'
import { Pricing } from './_sections/pricing'
import { Research } from './_sections/research'
import { Security } from './_sections/security'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Team } from './_sections/team'

export const metadata: Metadata = {
	title: 'Synapse — Cognitive AI infrastructure',
	description:
		'Futuristic neural AI platform concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.10 0.025 280)',
	'--panel': 'oklch(0.15 0.03 280)',
	'--text': 'oklch(0.96 0.01 280)',
	'--mute': 'oklch(0.62 0.03 280)',
	'--neon': 'oklch(0.78 0.2 165)',
	'--pulse': 'oklch(0.65 0.22 300)',
	'--line': 'oklch(1 0 0 / 0.08)'
} as CSSProperties

const display = Sora({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	variable: '--font-body'
})

export default function SynapsePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`
				@keyframes sy-scan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
				.sy-scan{animation:sy-scan 12s linear infinite}
				@keyframes sy-pulse{0%,100%{opacity:.4}50%{opacity:.9}}
				.sy-pulse{animation:sy-pulse 6s ease-in-out infinite}
				@supports(animation-timeline:view()){.sy-reveal{opacity:0;transform:translateY(24px);animation:sy-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 24%}}
				@keyframes sy-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.sy-scan,.sy-pulse{animation:none!important}.sy-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<div
				aria-hidden
				className='sy-pulse pointer-events-none fixed inset-0 -z-10 opacity-30'
				style={{
					background:
						'radial-gradient(ellipse 60% 50% at 50% 0%, var(--pulse), transparent), radial-gradient(ellipse 40% 30% at 80% 60%, var(--neon), transparent)'
				}}
			/>
			<div
				aria-hidden
				className='sy-scan pointer-events-none fixed top-0 left-0 -z-10 h-32 w-full opacity-[0.03]'
				style={{
					background:
						'linear-gradient(180deg, transparent, var(--neon), transparent)'
				}}
			/>
			<SiteNav />
			<main>
				<Hero />
				<Capabilities />
				<Models />
				<Inference />
				<Enterprise />
				<Research />
				<Benchmarks />
				<Integrations />
				<Security />
				<Team />
				<Pricing />
				<Demo />
			</main>
			<SiteFooter />
		</div>
	)
}
