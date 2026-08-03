import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Sans } from 'next/font/google'

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
	title: 'Orbit Research Console — Lab dashboard',
	description:
		'Logged-in research lab carbon dashboard. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--parchment': 'oklch(0.96 0.012 95)',
	'--ink': 'oklch(0.22 0.03 145)',
	'--olive': 'oklch(0.42 0.06 145)',
	'--sage': 'oklch(0.62 0.06 145)',
	'--clay': 'oklch(0.78 0.05 75)',
	'--mute': 'oklch(0.48 0.03 145)',
	'--line': 'oklch(0.22 0.03 145 / 0.12)',
	'--card': 'oklch(0.99 0.006 95)',
	'--surface': 'oklch(0.97 0.010 95)',
	'--warn': 'oklch(0.72 0.12 75)',
	'--danger': 'oklch(0.55 0.14 25)'
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

export default function OrbitNousConsolePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--parchment)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.onc-reveal{opacity:0;transform:translateY(16px);animation:onc-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes onc-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.onc-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
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
