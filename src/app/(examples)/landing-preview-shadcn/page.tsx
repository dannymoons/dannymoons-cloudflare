import type { Metadata } from 'next'

import { Bento } from './_sections/bento'
import { Cta } from './_sections/cta'
import { Faq } from './_sections/faq'
import { Features } from './_sections/features'
import { Hero } from './_sections/hero'
import { Integrations } from './_sections/integrations'
import { Logos } from './_sections/logos'
import { Pricing } from './_sections/pricing'
import { SiteFooter } from './_sections/site-footer'
import { SiteNav } from './_sections/site-nav'
import { Stats } from './_sections/stats'
import { Testimonials } from './_sections/testimonials'

export const metadata: Metadata = {
	title: 'Trace — Issue tracking that keeps up',
	description:
		'Clean, shadcn/ui-stijl concept-landingspagina voor een fictief SaaS-product. Gebruikt de live theme-tokens; per sectie opgebouwd voor Payload.'
}

/**
 * shadcn/ui-flavoured SaaS landing.
 *
 * Deliberately uses ONLY the live design tokens (bg-background, text-foreground,
 * border-border, bg-card, primary…) and the default `font-sans`, so it reads as a
 * native shadcn registry page. Each section maps cleanly to a future Payload block.
 */
export default function ShadcnPage() {
	return (
		<div
			id='top'
			className='min-h-screen bg-background font-sans text-foreground antialiased'
		>
			<SiteNav />
			<main>
				<Hero />
				<Logos />
				<Features />
				<Bento />
				<Stats />
				<Integrations />
				<Testimonials />
				<Pricing />
				<Faq />
				<Cta />
			</main>
			<SiteFooter />
		</div>
	)
}
