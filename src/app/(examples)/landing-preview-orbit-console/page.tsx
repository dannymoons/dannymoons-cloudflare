import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'

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
	title: 'Orbit Console — Logged-in dashboard',
	description:
		'Main Orbit app dashboard preview. Per sectie opgebouwd voor Payload.'
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
	'--line': 'oklch(1 0 0 / 0.08)'
} as CSSProperties

const display = Plus_Jakarta_Sans({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = DM_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-body'
})

export default function OrbitConsolePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
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
