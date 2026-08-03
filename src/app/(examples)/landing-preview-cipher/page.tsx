import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { IBM_Plex_Sans, Space_Mono } from 'next/font/google'

import { Audits } from './_sections/audits'
import { Developers } from './_sections/developers'
import { Download } from './_sections/download'
import { Encryption } from './_sections/encryption'
import { Features } from './_sections/features'
import { Hero } from './_sections/hero'
import { Pricing } from './_sections/pricing'
import { Privacy } from './_sections/privacy'
import { Protocol } from './_sections/protocol'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { ThreatModel } from './_sections/threat-model'

export const metadata: Metadata = {
	title: 'Cipher — Encrypted messaging',
	description:
		'Privacy-first messenger concept. Per sectie opgebouwd voor Payload.'
}

const theme = {
	'--void': 'oklch(0.08 0.02 155)',
	'--panel': 'oklch(0.12 0.025 155)',
	'--text': 'oklch(0.92 0.02 155)',
	'--green': 'oklch(0.72 0.18 145)',
	'--mute': 'oklch(0.55 0.04 155)',
	'--line': 'oklch(0.72 0.18 145 / 0.15)'
} as CSSProperties

const display = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-display'
})
const body = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	variable: '--font-body'
})

export default function CipherPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-dvh font-[family-name:var(--font-body)] text-sm antialiased [background:var(--void)] [color:var(--text)]`}
		>
			<style>{`@keyframes cf-blink{0%,100%{opacity:1}50%{opacity:0}}.cf-blink{animation:cf-blink 1.2s step-end infinite}@supports(animation-timeline:view()){.cf-reveal{opacity:0;transform:translateY(18px);animation:cf-rise 1ms both;animation-timeline:view();animation-range:entry 2% cover 20%}}@keyframes cf-rise{to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.cf-blink,.cf-reveal{animation:none!important;opacity:1!important;transform:none!important}}`}</style>
			<SiteNav />
			<main>
				<Hero />
				<Encryption />
				<Features />
				<ThreatModel />
				<Protocol />
				<Audits />
				<Developers />
				<Pricing />
				<Privacy />
				<Download />
			</main>
			<SiteFooter />
		</div>
	)
}
