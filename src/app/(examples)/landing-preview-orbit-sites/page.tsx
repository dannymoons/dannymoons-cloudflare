import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import { AddSite } from './_sections/add-site'
import { AppSidebar } from './_sections/app-sidebar'
import { AppTopbar } from './_sections/app-topbar'
import { AuditLog } from './_sections/audit-log'
import { BillingUsage } from './_sections/billing-usage'
import { BulkActions } from './_sections/bulk-actions'
import { DomainList } from './_sections/domain-list'
import { MigrationWizard } from './_sections/migration-wizard'
import { SiteHealth } from './_sections/site-health'
import { SiteSettings } from './_sections/site-settings'
import { SitesGrid } from './_sections/sites-grid'
import { SyncStatus } from './_sections/sync-status'
import { TeamPerSite } from './_sections/team-per-site'

export const metadata: Metadata = {
	title: 'Orbit Sites — Multi-site management',
	description:
		'Orbit multi-site app preview. Per sectie opgebouwd voor Payload.'
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

export default function OrbitSitesPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} flex min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<AppSidebar active='sites' />
			<div className='flex min-w-0 flex-1 flex-col'>
				<AppTopbar title='Sites' site='all workspaces' />
				<main className='flex-1 space-y-4 overflow-auto p-4 sm:p-6'>
					<SitesGrid />
					<div className='grid gap-4 lg:grid-cols-2'>
						<SiteHealth />
						<DomainList />
					</div>
					<div className='grid gap-4 md:grid-cols-2'>
						<TeamPerSite />
						<BillingUsage />
					</div>
					<SyncStatus />
					<div className='grid gap-4 md:grid-cols-2'>
						<BulkActions />
						<AddSite />
					</div>
					<div className='grid gap-4 md:grid-cols-2'>
						<SiteSettings />
						<MigrationWizard />
					</div>
					<AuditLog />
				</main>
			</div>
		</div>
	)
}
