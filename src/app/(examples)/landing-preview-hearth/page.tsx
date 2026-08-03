import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Lora, Work_Sans } from 'next/font/google'

import { Chef } from './_sections/chef'
import { Events } from './_sections/events'
import { FireTimeline } from './_sections/fire-timeline'
import { Gallery } from './_sections/gallery'
import { Hero } from './_sections/hero'
import { Hours } from './_sections/hours'
import { Menu } from './_sections/menu'
import { PrivateDining } from './_sections/private-dining'
import { Reservations } from './_sections/reservations'
import { SeasonalBoard } from './_sections/seasonal-board'
import { Reviews } from './_sections/reviews'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Sourcing } from './_sections/sourcing'
import { Spaces } from './_sections/spaces'
import { Story } from './_sections/story'

export const metadata: Metadata = {
	title: 'Hearth — Farm-to-table neighborhood restaurant',
	description:
		'Warm wood-fired bistro concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--cream': 'oklch(0.96 0.02 75)',
	'--ember': 'oklch(0.52 0.16 45)',
	'--rust': 'oklch(0.38 0.1 45)',
	'--wood': 'oklch(0.28 0.05 55)',
	'--wheat': 'oklch(0.82 0.08 85)',
	'--mute': 'oklch(0.50 0.03 55)',
	'--line': 'oklch(0.28 0.05 55 / 0.12)'
} as CSSProperties

const display = Lora({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = Work_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function HearthPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--cream)] [color:var(--wood)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.ht-reveal{opacity:0;transform:translateY(20px);animation:ht-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes ht-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.ht-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Story />
				<SeasonalBoard />
				<Menu />
				<Chef />
				<FireTimeline />
				<Sourcing />
				<Spaces />
				<Gallery />
				<Events />
				<Reviews />
				<Hours />
				<Reservations />
				<PrivateDining />
			</main>
			<SiteFooter />
		</div>
	)
}
