import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Fraunces, Hanken_Grotesk } from 'next/font/google'

import { Approach } from './_sections/approach'
import { Contact } from './_sections/contact'
import { Faq } from './_sections/faq'
import { Featured } from './_sections/featured'
import { Hero } from './_sections/hero'
import { Journal } from './_sections/journal'
import { Manifesto } from './_sections/manifesto'
import { Recognition } from './_sections/recognition'
import { Services } from './_sections/services'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { StudioSplit } from './_sections/studio-split'
import { Works } from './_sections/works'

export const metadata: Metadata = {
	title: 'MERIDIAN — Architecture & Interior Studio',
	description:
		'Minimalistische, editoriale concept-landingspagina voor een fictief architectenbureau. Per sectie opgebouwd zodat blokken eenvoudig naar Payload zijn over te zetten.'
}

/** Bone & ink minimal theme — one quiet clay accent. Scoped to this page. */
const theme = {
	'--paper': 'oklch(0.97 0.006 85)',
	'--ink': 'oklch(0.20 0.012 60)',
	'--ink-soft': 'oklch(0.44 0.012 60)',
	'--line': 'oklch(0.86 0.01 75)',
	'--clay': 'oklch(0.55 0.10 45)'
} as CSSProperties

const display = Fraunces({
	subsets: ['latin'],
	weight: ['300', '400', '500'],
	style: ['normal', 'italic'],
	variable: '--font-display'
})
const body = Hanken_Grotesk({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-body'
})

export default function StudioPage() {
	return (
		<div
			id='top'
			style={theme}
			className={`${display.variable} ${body.variable} min-h-screen font-[family-name:var(--font-body)] antialiased [background:var(--paper)] [color:var(--ink)]`}
		>
			{/* Shared scroll/entrance animations — used by every section. */}
			<style>{`
				@keyframes mrd-rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
				.mrd-rise { opacity: 0; animation: mrd-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
				@supports (animation-timeline: view()) {
					.mrd-reveal {
						opacity: 0; transform: translateY(26px);
						animation: mrd-rise 1ms linear both;
						animation-timeline: view();
						animation-range: entry 5% cover 32%;
					}
				}
				@media (prefers-reduced-motion: reduce) {
					.mrd-rise, .mrd-reveal { animation: none !important; opacity: 1 !important; transform: none !important; }
				}
			`}</style>

			<SiteNav />
			<main>
				<Hero />
				<Featured />
				<Manifesto />
				<Works />
				<Approach />
				<Services />
				<StudioSplit />
				<Recognition />
				<Journal />
				<Faq />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	)
}
