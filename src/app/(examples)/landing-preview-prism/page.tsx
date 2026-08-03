import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Anton, Barlow } from 'next/font/google'

import { Contact } from './_sections/contact'
import { Hero } from './_sections/hero'
import { LabelStory } from './_sections/label-story'
import { Merch } from './_sections/merch'
import { Playlist } from './_sections/playlist'
import { Press } from './_sections/press'
import { Releases } from './_sections/releases'
import { Roster } from './_sections/roster'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Studio } from './_sections/studio'
import { Subscribe } from './_sections/subscribe'
import { TourDates } from './_sections/tour-dates'

export const metadata: Metadata = {
	title: 'PRISM — Independent record label',
	description:
		'Brutalist vinyl label concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--ink': 'oklch(0.12 0 0)',
	'--paper': 'oklch(0.98 0.005 95)',
	'--magenta': 'oklch(0.58 0.28 350)',
	'--lime': 'oklch(0.82 0.24 130)',
	'--mute': 'oklch(0.45 0 0)',
	'--line': 'oklch(0.12 0 0 / 0.12)'
} as CSSProperties

const display = Anton({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})
const body = Barlow({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function PrismPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--paper)] [color:var(--ink)]`}
		>
			<style>{`@keyframes pr-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}.pr-marquee{animation:pr-marquee 18s linear infinite}@supports(animation-timeline:view()){.pr-reveal{opacity:0;transform:translateY(20px);animation:pr-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes pr-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.pr-marquee,.pr-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Roster />
				<Releases />
				<TourDates />
				<Studio />
				<Merch />
				<Playlist />
				<Press />
				<LabelStory />
				<Subscribe />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
