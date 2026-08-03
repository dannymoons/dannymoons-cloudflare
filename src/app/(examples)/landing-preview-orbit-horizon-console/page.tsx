import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

import { ActivityFeed } from './_sections/activity-feed'
import { AlertsPanel } from './_sections/alerts-panel'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { CarbonBudget } from './_sections/carbon-budget'
import { EmissionsChart } from './_sections/emissions-chart'
import { OverviewKpis } from './_sections/overview-kpis'
import { PagesTable } from './_sections/pages-table'

export const metadata: Metadata = {
	title: 'Orbit Horizon Console — Carbon dashboard',
	description:
		'Logged-in carbon dashboard in brutal editorial parchment & olive. Per sectie opgebouwd voor Payload.'
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
	'--line': 'oklch(0.22 0.03 145 / 0.14)'
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

/** Future Payload mapping: horizonConsolePage (template). */
export default function OrbitHorizonConsolePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ohc-reveal{opacity:0;transform:translateY(16px);animation:ohc-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes ohc-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ohc-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<AppSidebar active='overview' />
			<div className='flex min-w-0 flex-1 flex-col'>
				<AppTopbar title='Overview' site='acme.com · production' />
				<main className='flex-1 space-y-4 overflow-auto p-4 sm:p-6'>
					<OverviewKpis />
					<div className='grid gap-4 lg:grid-cols-3'>
						<div className='space-y-4 lg:col-span-2'>
							<EmissionsChart />
							<PagesTable />
						</div>
						<div className='space-y-4'>
							<CarbonBudget />
							<AlertsPanel />
							<ActivityFeed />
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
