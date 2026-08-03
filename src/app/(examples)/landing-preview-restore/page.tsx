import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import { Approach } from './_sections/approach'
import { Contact } from './_sections/contact'
import { Facility } from './_sections/facility'
import { Faq } from './_sections/faq'
import { Hero } from './_sections/hero'
import { Insurance } from './_sections/insurance'
import { MotionScreen } from './_sections/motion-screen'
import { Outcomes } from './_sections/outcomes'
import { RecoveryJourney } from './_sections/recovery-journey'
import { Programs } from './_sections/programs'
import { Schedule } from './_sections/schedule'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Testimonials } from './_sections/testimonials'
import { Therapists } from './_sections/therapists'
import { Treatments } from './_sections/treatments'

export const metadata: Metadata = {
	title: 'Restore — Physical therapy & rehabilitation',
	description:
		'Movement-focused physiotherapy clinic concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--white': 'oklch(0.99 0.003 250)',
	'--sky': 'oklch(0.88 0.06 230)',
	'--ocean': 'oklch(0.48 0.12 230)',
	'--slate': 'oklch(0.28 0.04 250)',
	'--coral': 'oklch(0.68 0.14 35)',
	'--mute': 'oklch(0.52 0.03 250)',
	'--line': 'oklch(0.28 0.04 250 / 0.1)'
} as CSSProperties

const display = Playfair_Display({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-display'
})
const body = DM_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-body'
})

export default function RestorePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--white)] [color:var(--slate)]`}
		>
			<style>{`
				@supports(animation-timeline:view()){.rs-reveal{opacity:0;transform:translateY(22px);animation:rs-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}
				@keyframes rs-rise{to{opacity:1;transform:none}}
				@media(prefers-reduced-motion:reduce){.rs-reveal{animation:none!important;opacity:1!important;transform:none!important}}
			`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Approach />
				<RecoveryJourney />
				<Treatments />
				<MotionScreen />
				<Therapists />
				<Facility />
				<Programs />
				<Outcomes />
				<Insurance />
				<Testimonials />
				<Schedule />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
