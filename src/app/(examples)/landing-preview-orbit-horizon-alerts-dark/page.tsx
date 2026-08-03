import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Crimson_Pro, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'

import { AlertHistory } from './_sections/alert-history'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { Channels } from './_sections/channels'
import { CreateRule } from './_sections/create-rule'
import { Escalation } from './_sections/escalation'
import { IntegrationsStatus } from './_sections/integrations-status'
import { RulesList } from './_sections/rules-list'
import { SnoozeSettings } from './_sections/snooze-settings'
import { TeamSubscriptions } from './_sections/team-subscriptions'
import { TestAlert } from './_sections/test-alert'
import { ThresholdEditor } from './_sections/threshold-editor'
import { WebhookLogs } from './_sections/webhook-logs'

export const metadata: Metadata = {
	title: 'Orbit Horizon Alerts — Dark console',
	description:
		'Orbit Horizon alert management in dark brutal editorial style.'
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

/** Future Payload mapping: horizonAlertsDarkPage (template). */
export default function OrbitHorizonAlertsDarkPage() {
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
			<AppSidebar active='alerts' />
			<div className='flex min-w-0 flex-1 flex-col'>
				<AppTopbar title='Alerts' site='acme.com' />
				<main className='flex-1 space-y-4 overflow-auto p-4 sm:p-6'>
					<RulesList />
					<div className='grid gap-4 lg:grid-cols-2'>
						<CreateRule />
						<ThresholdEditor />
					</div>
					<Channels />
					<AlertHistory />
					<div className='grid gap-4 md:grid-cols-2'>
						<SnoozeSettings />
						<Escalation />
					</div>
					<IntegrationsStatus />
					<div className='grid gap-4 md:grid-cols-2'>
						<TestAlert />
						<TeamSubscriptions />
					</div>
					<WebhookLogs />
				</main>
			</div>
		</div>
	)
}
