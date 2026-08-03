import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Libre_Franklin, Libre_Baskerville } from 'next/font/google'

import { Contact } from './_sections/contact'
import { Designers } from './_sections/designers'
import { Families } from './_sections/families'
import { Foundry } from './_sections/foundry'
import { GlyphShowcase } from './_sections/glyph-showcase'
import { Hero } from './_sections/hero'
import { Licensing } from './_sections/licensing'
import { OpentypeFeatures } from './_sections/opentype-features'
import { Pairings } from './_sections/pairings'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Specimens } from './_sections/specimens'
import { Trial } from './_sections/trial'

export const metadata: Metadata = {
	title: 'Typelab — Independent type foundry',
	description:
		'Font licensing & specimens concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--white': 'oklch(1 0 0)',
	'--ink': 'oklch(0.15 0 0)',
	'--red': 'oklch(0.52 0.24 25)',
	'--gray': 'oklch(0.55 0 0)',
	'--mute': 'oklch(0.42 0 0)',
	'--line': 'oklch(0.15 0 0 / 0.12)'
} as CSSProperties

const display = Libre_Baskerville({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-display'
})
const body = Libre_Franklin({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function TypelabPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--white)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ty-reveal{opacity:0;transform:translateY(18px);animation:ty-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes ty-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ty-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Specimens />
				<Families />
				<GlyphShowcase />
				<Pairings />
				<OpentypeFeatures />
				<Licensing />
				<Designers />
				<Trial />
				<Foundry />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
