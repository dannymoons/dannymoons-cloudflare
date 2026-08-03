import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Quicksand, Nunito } from 'next/font/google'

import { Donate } from './_sections/donate'
import { Events } from './_sections/events'
import { Hero } from './_sections/hero'
import { Impact } from './_sections/impact'
import { Mission } from './_sections/mission'
import { Newsletter } from './_sections/newsletter'
import { Partners } from './_sections/partners'
import { Programs } from './_sections/programs'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stories } from './_sections/stories'
import { Volunteers } from './_sections/volunteers'
import { Ward } from './_sections/ward'

export const metadata: Metadata = {
	title: "Bloom — Children's care foundation",
	description:
		'Pediatric hospital wing fundraiser concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--blush': 'oklch(0.94 0.04 350)',
	'--petal': 'oklch(0.72 0.14 350)',
	'--leaf': 'oklch(0.62 0.12 155)',
	'--sky': 'oklch(0.88 0.06 230)',
	'--ink': 'oklch(0.28 0.04 280)',
	'--mute': 'oklch(0.52 0.03 280)',
	'--line': 'oklch(0.28 0.04 280 / 0.1)'
} as CSSProperties

const display = Quicksand({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = Nunito({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function BloomPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--blush)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.bl-reveal{opacity:0;transform:translateY(20px);animation:bl-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes bl-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.bl-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Mission />
				<Programs />
				<Stories />
				<Ward />
				<Volunteers />
				<Impact />
				<Donate />
				<Events />
				<Partners />
				<Newsletter />
			</main>
			<SiteFooter />
		</div>
	)
}
