import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { IBM_Plex_Serif, IBM_Plex_Sans } from 'next/font/google'

import { AuditTrail } from './_sections/audit-trail'
import { BoardroomBriefing } from './_sections/boardroom-briefing'
import { CmoBrief } from './_sections/cmo-brief'
import { ComplianceFramework } from './_sections/compliance-framework'
import { Contact } from './_sections/contact'
import { Dashboard } from './_sections/dashboard'
import { DataSources } from './_sections/data-sources'
import { Hero } from './_sections/hero'
import { Integrations } from './_sections/integrations'
import { Kpis } from './_sections/kpis'
import { Pricing } from './_sections/pricing'
import { Reporting } from './_sections/reporting'
import { Security } from './_sections/security'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Trial } from './_sections/trial'
import { UseCases } from './_sections/use-cases'

export const metadata: Metadata = {
	title: 'Measure — ESG metrics for marketing',
	description:
		'CMO ESG dashboard landing concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--slate': 'oklch(0.22 0.03 250)',
	'--blue': 'oklch(0.48 0.12 250)',
	'--ice': 'oklch(0.97 0.01 250)',
	'--ink': 'oklch(0.18 0.02 250)',
	'--mute': 'oklch(0.52 0.03 250)',
	'--line': 'oklch(0.18 0.02 250 / 0.1)'
} as CSSProperties
const display = IBM_Plex_Serif({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-display'
})
const body = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-body'
})

export default function MeasurePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--ice)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.me-reveal{opacity:0;transform:translateY(18px);animation:me-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes me-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.me-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<AuditTrail />
				<CmoBrief />
				<BoardroomBriefing />
				<ComplianceFramework />
				<Kpis />
				<Dashboard />
				<UseCases />
				<DataSources />
				<Reporting />
				<Integrations />
				<Security />
				<Pricing />
				<Trial />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
