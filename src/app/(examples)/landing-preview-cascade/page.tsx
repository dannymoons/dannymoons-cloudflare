import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Serif_Display, Source_Sans_3 } from 'next/font/google'

import { AgencyServices } from './_sections/agency-services'
import { CaseStudies } from './_sections/case-studies'
import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { Methodology } from './_sections/methodology'
import { Partners } from './_sections/partners'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { SupplyChain } from './_sections/supply-chain'
import { Traceability } from './_sections/traceability'
import { Transparency } from './_sections/transparency'
import { Trust } from './_sections/trust'
import { VendorPortal } from './_sections/vendor-portal'

export const metadata: Metadata = {
	title: 'Cascade — Supply chain transparency for agencies',
	description:
		'Agency supply chain sustainability concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--steel': 'oklch(0.32 0.03 250)',
	'--pine': 'oklch(0.42 0.08 155)',
	'--fog': 'oklch(0.94 0.01 250)',
	'--ink': 'oklch(0.20 0.02 250)',
	'--mute': 'oklch(0.50 0.03 250)',
	'--line': 'oklch(0.20 0.02 250 / 0.1)'
} as CSSProperties
const display = DM_Serif_Display({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})
const body = Source_Sans_3({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-body'
})

export default function CascadePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--fog)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ca-reveal{opacity:0;transform:translateY(20px);animation:ca-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ca-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ca-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<AgencyServices />
				<SupplyChain />
				<Traceability />
				<Methodology />
				<Transparency />
				<VendorPortal />
				<CaseStudies />
				<Trust />
				<Partners />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
