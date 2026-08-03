import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

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
	title: 'Orbit Horizon Analytics — Dark console',
	description:
		'Orbit Horizon analytics deep-dive in dark brutal editorial style.'
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

/** Future Payload mapping: horizonAnalyticsDarkPage (template). */
export default function OrbitHorizonAnalyticsDarkPage() {
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
