import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Lora, Nunito_Sans } from 'next/font/google'

import { About } from './_sections/about'
import { BoardroomTension } from './_sections/boardroom-tension'
import { Booking } from './_sections/booking'
import { BreathingSpace } from './_sections/breathing-space'
import { CoachingPaths } from './_sections/coaching-paths'
import { Faq } from './_sections/faq'
import { Hero } from './_sections/hero'
import { Method } from './_sections/method'
import { Outcomes } from './_sections/outcomes'
import { Packages } from './_sections/packages'
import { Philosophy } from './_sections/philosophy'
import { SeasonalJourney } from './_sections/seasonal-journey'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stories } from './_sections/stories'
import { Testimonials } from './_sections/testimonials'
import { Topics } from './_sections/topics'

export const metadata: Metadata = {
	title: 'Thrive — Executive sustainability coaching',
	description:
		'Sustainability coach for leaders concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--sage': 'oklch(0.94 0.03 145)',
	'--forest': 'oklch(0.38 0.07 155)',
	'--wheat': 'oklch(0.88 0.06 85)',
	'--ink': 'oklch(0.25 0.03 145)',
	'--mute': 'oklch(0.50 0.03 145)',
	'--line': 'oklch(0.25 0.03 145 / 0.1)'
} as CSSProperties
const display = Lora({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-display'
})
const body = Nunito_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body'
})

export default function ThrivePage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] antialiased [background:var(--sage)] [color:var(--ink)]`}
		>
			<style>{`.th-portrait-mask{border-radius:60% 40% 55% 45% / 48% 52% 48% 52%}.th-blob{border-radius:60% 40% 55% 45% / 48% 52% 48% 52%;filter:blur(40px)}@keyframes th-blob-drift{0%,100%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(12px,-8px) rotate(3deg)}}.th-blob{animation:th-blob-drift 12s ease-in-out infinite}@keyframes th-ring-pulse{0%,100%{transform:scale(1);opacity:.15}50%{transform:scale(1.06);opacity:.28}}.th-ring{animation:th-ring-pulse 8s ease-in-out infinite}@supports(animation-timeline:view()){.th-reveal{opacity:0;transform:translateY(20px);animation:th-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 22%}}@keyframes th-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.th-blob,.th-ring,.th-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<BreathingSpace />
				<Philosophy />
				<BoardroomTension />
				<SeasonalJourney />
				<CoachingPaths />
				<Method />
				<Topics />
				<Outcomes />
				<Stories />
				<Testimonials />
				<Packages />
				<About />
				<Booking />
				<Faq />
			</main>
			<SiteFooter />
		</div>
	)
}
