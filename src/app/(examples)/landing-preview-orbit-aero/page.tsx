import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google'

import { Benchmarks } from './_sections/benchmarks'
import { CarbonScore } from './_sections/carbon-score'
import { CaseStudies } from './_sections/case-studies'
import { ClientReports } from './_sections/client-reports'
import { Dashboard } from './_sections/dashboard'
import { GetStarted } from './_sections/get-started'
import { Hero } from './_sections/hero'
import { PortfolioSites } from './_sections/portfolio-sites'
import { Pricing } from './_sections/pricing'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { TeamCollaboration } from './_sections/team-collaboration'
import { Widgets } from './_sections/widgets'

export const metadata: Metadata = {
	title: 'Orbit Aero by moonsio — Agency carbon workspace',
	description:
		'Glassmorphism agency carbon dashboard concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--sky': 'oklch(0.94 0.04 230)',
	'--cloud': 'oklch(0.99 0.01 230)',
	'--ink': 'oklch(0.22 0.04 250)',
	'--blue': 'oklch(0.52 0.14 240)',
	'--cyan': 'oklch(0.72 0.12 200)',
	'--mute': 'oklch(0.52 0.03 250)',
	'--line': 'oklch(0.22 0.04 250 / 0.08)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.22 0.04 250), oklch(0.52 0.14 240), oklch(0.72 0.12 200))'
} as CSSProperties

const display = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['600', '700', '800'],
	variable: '--font-display'
})
const body = Outfit({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function OrbitAeroPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] antialiased [background:var(--sky)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.oa-reveal{opacity:0;transform:translateY(20px);animation:oa-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes oa-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.oa-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<div
				aria-hidden
				className='pointer-events-none fixed top-0 right-0 -z-10 h-[60vh] w-[60vw] rounded-full opacity-60 blur-[120px]'
				style={{
					background:
						'radial-gradient(circle, color-mix(in oklch, var(--cyan) 35%, transparent), transparent 70%)'
				}}
			/>
			<SiteNav />
			<main>
				<Hero />
				<PortfolioSites />
				<Dashboard />
				<CarbonScore />
				<ClientReports />
				<TeamCollaboration />
				<Widgets />
				<Benchmarks />
				<CaseStudies />
				<Pricing />
				<GetStarted />
			</main>
			<SiteFooter />
		</div>
	)
}
