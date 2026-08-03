import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { EB_Garamond, Mulish } from 'next/font/google'

import { Artists } from './_sections/artists'
import { Collection } from './_sections/collection'
import { Contact } from './_sections/contact'
import { Gallery } from './_sections/gallery'
import { Hero } from './_sections/hero'
import { Kiln } from './_sections/kiln'
import { Materials } from './_sections/materials'
import { Process } from './_sections/process'
import { Shop } from './_sections/shop'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Visit } from './_sections/visit'
import { Workshops } from './_sections/workshops'

export const metadata: Metadata = {
	title: 'Cinder — Artisan ceramics studio',
	description:
		'Wabi-sabi pottery studio concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--clay': 'oklch(0.78 0.06 65)',
	'--ash': 'oklch(0.42 0.03 55)',
	'--ember': 'oklch(0.48 0.12 45)',
	'--paper': 'oklch(0.97 0.01 85)',
	'--mute': 'oklch(0.52 0.03 55)',
	'--line': 'oklch(0.42 0.03 55 / 0.15)'
} as CSSProperties

const display = EB_Garamond({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-display'
})
const body = Mulish({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function CinderPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--paper)] [color:var(--ash)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ci-reveal{opacity:0;transform:translateY(20px);animation:ci-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ci-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ci-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Kiln />
				<Collection />
				<Process />
				<Workshops />
				<Artists />
				<Gallery />
				<Materials />
				<Shop />
				<Visit />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
