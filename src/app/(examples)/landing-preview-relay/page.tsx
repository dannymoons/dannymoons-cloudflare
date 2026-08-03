import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Bebas_Neue, Rubik } from 'next/font/google'

import { Charity } from './_sections/charity'
import { Community } from './_sections/community'
import { Faq } from './_sections/faq'
import { Gear } from './_sections/gear'
import { Hero } from './_sections/hero'
import { Races } from './_sections/races'
import { Register } from './_sections/register'
import { Results } from './_sections/results'
import { Routes } from './_sections/routes'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Sponsors } from './_sections/sponsors'
import { Training } from './_sections/training'

export const metadata: Metadata = {
	title: 'Relay — Endurance race events',
	description:
		'Marathon & trail race concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--black': 'oklch(0.12 0 0)',
	'--orange': 'oklch(0.68 0.22 45)',
	'--white': 'oklch(0.99 0 0)',
	'--gray': 'oklch(0.55 0 0)',
	'--mute': 'oklch(0.45 0 0)',
	'--line': 'oklch(0.12 0 0 / 0.1)'
} as CSSProperties

const display = Bebas_Neue({
	subsets: ['latin'],
	weight: '400',
	variable: '--font-display'
})
const body = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-body'
})

export default function RelayPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--white)] [color:var(--black)]`}
		>
			<style>{`@supports(animation-timeline:view()){.rl-reveal{opacity:0;transform:translateY(18px);animation:rl-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes rl-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.rl-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Races />
				<Routes />
				<Results />
				<Training />
				<Community />
				<Sponsors />
				<Gear />
				<Charity />
				<Register />
				<Faq />
			</main>
			<SiteFooter />
		</div>
	)
}
