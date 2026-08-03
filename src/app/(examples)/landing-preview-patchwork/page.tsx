import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Archivo_Black, Work_Sans } from 'next/font/google'

import { CampaignCollage } from './_sections/campaign-collage'
import { Capabilities } from './_sections/capabilities'
import { CaseStudies } from './_sections/case-studies'
import { Clients } from './_sections/clients'
import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { Impact } from './_sections/impact'
import { Manifesto } from './_sections/manifesto'
import { Process } from './_sections/process'
import { Services } from './_sections/services'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { StickyShowcase } from './_sections/sticky-showcase'
import { Studio } from './_sections/studio'
import { Team } from './_sections/team'
import { Work } from './_sections/work'

export const metadata: Metadata = {
	title: 'Patchwork — Creative sustainability agency',
	description:
		'Bold green creative agency concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--cream': 'oklch(0.97 0.02 95)',
	'--ink': 'oklch(0.15 0 0)',
	'--green': 'oklch(0.55 0.2 145)',
	'--yellow': 'oklch(0.88 0.18 95)',
	'--pink': 'oklch(0.68 0.2 350)',
	'--line': 'oklch(0.15 0 0 / 0.1)'
} as CSSProperties
const display = Archivo_Black({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})
const body = Work_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-body'
})

export default function PatchworkPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--cream)] [color:var(--ink)]`}
		>
			<style>{`@keyframes pw-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.pw-marquee{animation:pw-marquee 20s linear infinite}@supports(animation-timeline:view()){.pw-reveal{opacity:0;transform:translateY(20px);animation:pw-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes pw-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.pw-marquee,.pw-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Manifesto />
				<CampaignCollage />
				<StickyShowcase />
				<Services />
				<Work />
				<Capabilities />
				<Process />
				<Impact />
				<CaseStudies />
				<Studio />
				<Team />
				<Clients />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
