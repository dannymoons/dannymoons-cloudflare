import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import { Annotations } from './_sections/annotations'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { AssetWeight } from './_sections/asset-weight'
import { DateRange } from './_sections/date-range'
import { DeviceSplit } from './_sections/device-split'
import { FunnelChart } from './_sections/funnel-chart'
import { GeoBreakdown } from './_sections/geo-breakdown'
import { InsightsPanel } from './_sections/insights-panel'
import { PageCompare } from './_sections/page-compare'
import { SavedViews } from './_sections/saved-views'
import { ShareReport } from './_sections/share-report'
import { TrendForecast } from './_sections/trend-forecast'

export const metadata: Metadata = {
	title: 'Orbit Analytics — Logged-in analytics',
	description:
		'Orbit analytics deep-dive app preview. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.11 0.025 265)',
	'--panel': 'oklch(0.16 0.03 265)',
	'--surface': 'oklch(0.20 0.035 265)',
	'--text': 'oklch(0.96 0.01 265)',
	'--mute': 'oklch(0.62 0.03 265)',
	'--orbit': 'oklch(0.72 0.14 195)',
	'--mint': 'oklch(0.78 0.16 165)',
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

export default function OrbitAnalyticsPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<AppSidebar active='analytics' />
			<div className='flex min-w-0 flex-1 flex-col'>
				<AppTopbar title='Analytics' site='acme.com' />
				<main className='flex-1 space-y-4 overflow-auto p-4 sm:p-6'>
					<DateRange />
					<FunnelChart />
					<div className='grid gap-4 lg:grid-cols-2'>
						<PageCompare />
						<TrendForecast />
					</div>
					<div className='grid gap-4 md:grid-cols-3'>
						<GeoBreakdown />
						<DeviceSplit />
						<AssetWeight />
					</div>
					<InsightsPanel />
					<div className='grid gap-4 md:grid-cols-3'>
						<SavedViews />
						<ShareReport />
						<Annotations />
					</div>
				</main>
			</div>
		</div>
	)
}
