import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { JetBrains_Mono, Sora } from 'next/font/google'

import { Alerts } from './_sections/alerts'
import { ApiReference } from './_sections/api-reference'
import { CliPreview } from './_sections/cli-preview'
import { Dashboard } from './_sections/dashboard'
import { DocsCta } from './_sections/docs-cta'
import { Hero } from './_sections/hero'
import { Monitoring } from './_sections/monitoring'
import { PageEvents } from './_sections/page-events'
import { Pricing } from './_sections/pricing'
import { SdkLibraries } from './_sections/sdk-libraries'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Webhooks } from './_sections/webhooks'

export const metadata: Metadata = {
	title: 'Orbit Signal by moonsio — Developer carbon API',
	description:
		'API-first carbon monitoring concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.10 0.04 290)',
	'--panel': 'oklch(0.14 0.05 290)',
	'--text': 'oklch(0.94 0.02 290)',
	'--lime': 'oklch(0.82 0.22 130)',
	'--violet': 'oklch(0.62 0.22 300)',
	'--mute': 'oklch(0.58 0.04 290)',
	'--line': 'oklch(1 0 0 / 0.08)',
	'--grad-text':
		'linear-gradient(120deg, oklch(0.94 0.02 290), oklch(0.82 0.22 130), oklch(0.62 0.22 300))'
} as CSSProperties

const display = Sora({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	variable: '--font-display'
})
const body = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['400', '500'],
	variable: '--font-body'
})

export default function OrbitSignalPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} relative min-h-dvh overflow-x-hidden font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`@keyframes osg-blink{0%,100%{opacity:1}50%{opacity:0}}.osg-blink{animation:osg-blink 1s step-end infinite}@supports(animation-timeline:view()){.osg-reveal{opacity:0;transform:translateY(18px);animation:osg-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes osg-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.osg-blink,.osg-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<div
				aria-hidden
				className='pointer-events-none fixed inset-0 -z-10 opacity-40'
				style={{
					background:
						'radial-gradient(ellipse 50% 40% at 20% 0%, color-mix(in oklch, var(--violet) 40%, transparent), transparent), radial-gradient(ellipse 40% 30% at 80% 100%, color-mix(in oklch, var(--lime) 25%, transparent), transparent)'
				}}
			/>
			<SiteNav />
			<main>
				<Hero />
				<CliPreview />
				<ApiReference />
				<Dashboard />
				<PageEvents />
				<Webhooks />
				<SdkLibraries />
				<Monitoring />
				<Alerts />
				<Pricing />
				<DocsCta />
			</main>
			<SiteFooter />
		</div>
	)
}
