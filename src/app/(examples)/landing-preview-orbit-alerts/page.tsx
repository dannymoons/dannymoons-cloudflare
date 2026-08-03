import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'

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
	title: 'Orbit Alerts — Alert management',
	description: 'Orbit alerts app preview. Per sectie opgebouwd voor Payload.'
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

export default function OrbitAlertsPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
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
