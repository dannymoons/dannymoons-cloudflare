import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

import { ActivityFeed } from './_sections/activity-feed'
import { AlertsPanel } from './_sections/alerts-panel'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { BudgetTracker } from './_sections/budget-tracker'
import { ComparePeriod } from './_sections/compare-period'
import { EmissionsChart } from './_sections/emissions-chart'
import { ExportBar } from './_sections/export-bar'
import { OverviewKpis } from './_sections/overview-kpis'
import { PagesTable } from './_sections/pages-table'
import { QuickActions } from './_sections/quick-actions'
import { SiteSwitcher } from './_sections/site-switcher'
import { TopPages } from './_sections/top-pages'

export const metadata: Metadata = {
	title: 'Orbit Horizon Console — Dark carbon dashboard',
	description:
		'Logged-in carbon dashboard in dark brutal editorial olive. Per sectie opgebouwd voor Payload.'
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
	'--line': 'oklch(0.84 0.014 95 / 0.08)'
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

/** Future Payload mapping: horizonConsoleDarkPage (template). */
export default function OrbitHorizonConsoleDarkPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} ${mono.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 -z-10 opacity-20'
				style={{
					background:
						'radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--olive) 35%, transparent), transparent)'
				}}
			/>
			<AppSidebar active='overview' />
			<div className='flex min-w-0 flex-1 flex-col'>
				<AppTopbar title='Overview' site='acme.com' />
				<main className='flex-1 space-y-4 overflow-auto p-4 sm:p-6'>
					<OverviewKpis />
					<div className='grid gap-4 lg:grid-cols-3'>
						<div className='space-y-4 lg:col-span-2'>
							<EmissionsChart />
							<PagesTable />
						</div>
						<div className='space-y-4'>
							<SiteSwitcher />
							<BudgetTracker />
							<AlertsPanel />
							<TopPages />
						</div>
					</div>
					<div className='grid gap-4 md:grid-cols-2'>
						<ComparePeriod />
						<ActivityFeed />
					</div>
					<div className='grid gap-4 md:grid-cols-2'>
						<QuickActions />
						<ExportBar />
					</div>
				</main>
			</div>
		</div>
	)
}
