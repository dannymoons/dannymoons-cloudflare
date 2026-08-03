import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Fraunces, Figtree } from 'next/font/google'

import { AppPreview } from './_sections/app-preview'
import { Community } from './_sections/community'
import { Download } from './_sections/download'
import { Features } from './_sections/features'
import { Habits } from './_sections/habits'
import { Hero } from './_sections/hero'
import { Journey } from './_sections/journey'
import { Pricing } from './_sections/pricing'
import { Science } from './_sections/science'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stories } from './_sections/stories'
import { Testimonials } from './_sections/testimonials'

export const metadata: Metadata = {
	title: 'Habit — Personal sustainability coach',
	description:
		'Consumer sustainability coaching app landing. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--mint': 'oklch(0.94 0.04 165)',
	'--leaf': 'oklch(0.55 0.14 155)',
	'--cream': 'oklch(0.98 0.01 95)',
	'--ink': 'oklch(0.22 0.03 155)',
	'--mute': 'oklch(0.50 0.03 155)',
	'--line': 'oklch(0.22 0.03 155 / 0.08)'
} as CSSProperties
const display = Fraunces({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = Figtree({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function HabitPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--cream)] [color:var(--ink)]`}
		>
			<style>{`@supports(animation-timeline:view()){.ha-reveal{opacity:0;transform:translateY(20px);animation:ha-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes ha-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.ha-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<AppPreview />
				<Habits />
				<Journey />
				<Features />
				<Science />
				<Stories />
				<Testimonials />
				<Community />
				<Pricing />
				<Download />
			</main>
			<SiteFooter />
		</div>
	)
}
