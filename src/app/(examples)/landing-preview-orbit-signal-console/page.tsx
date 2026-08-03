import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { JetBrains_Mono, Sora } from 'next/font/google'

import { AlertsPanel } from './_sections/alerts-panel'
import { ApiEvents } from './_sections/api-events'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { EmissionsChart } from './_sections/emissions-chart'
import { OverviewKpis } from './_sections/overview-kpis'
import { PagesTable } from './_sections/pages-table'
import { WebhookStatus } from './_sections/webhook-status'

export const metadata: Metadata = {
	title: 'Orbit Signal Console — API dashboard',
	description:
		'Logged-in Orbit Signal dashboard preview. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.10 0.04 290)',
	'--panel': 'oklch(0.14 0.05 290)',
	'--text': 'oklch(0.94 0.02 290)',
	'--lime': 'oklch(0.82 0.22 130)',
	'--violet': 'oklch(0.62 0.22 300)',
	'--mute': 'oklch(0.58 0.04 290)',
	'--line': 'oklch(1 0 0 / 0.08)',
	'--warn': 'oklch(0.75 0.16 75)',
	'--danger': 'oklch(0.62 0.2 25)'
} as CSSProperties

const display = Sora({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-body'
})

/** Future Payload mapping: signalConsolePage (template). */
export default function OrbitSignalConsolePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`@keyframes osg-blink{0%,100%{opacity:1}50%{opacity:0}}.osg-blink{animation:osg-blink 1s step-end infinite}@media(prefers-reduced-motion:reduce){.osg-blink{animation:none!important;opacity:1!important}}`}</style>
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 -z-10 opacity-40'
				style={{
					background:
						'radial-gradient(ellipse 50% 40% at 20% 0%, color-mix(in oklch, var(--violet) 40%, transparent), transparent), radial-gradient(ellipse 40% 30% at 80% 100%, color-mix(in oklch, var(--lime) 25%, transparent), transparent)'
				}}
			/>
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
							<WebhookStatus />
							<AlertsPanel />
						</div>
					</div>
					<ApiEvents />
				</main>
			</div>
		</div>
	)
}
