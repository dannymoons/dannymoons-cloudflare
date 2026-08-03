import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Bitter, Karla } from 'next/font/google'

import { Conservation } from './_sections/conservation'
import { Contact } from './_sections/contact'
import { Crew } from './_sections/crew'
import { Expedition } from './_sections/expedition'
import { Faq } from './_sections/faq'
import { FieldNotes } from './_sections/field-notes'
import { Gallery } from './_sections/gallery'
import { Gear } from './_sections/gear'
import { Hero } from './_sections/hero'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Species } from './_sections/species'
import { Sponsors } from './_sections/sponsors'

export const metadata: Metadata = {
	title: 'Kestrel — Wildlife expedition films',
	description:
		'Documentary expedition concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--night': 'oklch(0.14 0.02 55)',
	'--earth': 'oklch(0.32 0.06 65)',
	'--amber': 'oklch(0.72 0.14 65)',
	'--fog': 'oklch(0.88 0.02 85)',
	'--cream': 'oklch(0.96 0.01 90)',
	'--mute': 'oklch(0.58 0.03 65)',
	'--line': 'oklch(1 0 0 / 0.1)'
} as CSSProperties

const display = Bitter({
	subsets: ['latin'],
	weight: ['600', '700', '800'],
	variable: '--font-display'
})
const body = Karla({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function KestrelPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--night)] [color:var(--cream)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ks-reveal{opacity:0;transform:translateY(22px);animation:ks-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ks-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ks-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Expedition />
				<Species />
				<Crew />
				<Gear />
				<Gallery />
				<FieldNotes />
				<Conservation />
				<Sponsors />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
