import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
	title: 'Landing previews — Payload Starter',
	description:
		'Overview of all concept landing-page variants included as design reference in the starter.'
}

type Preview = {
	slug: string
	name: string
	tagline: string
	palette: string[]
	tags: string[]
}

const previews: { group: string; description: string; items: Preview[] }[] = [
	{
		group: 'Concept-richtingen',
			description:
				"Twee zelfstandige concept-pagina's voor fictieve merken — van minimalistisch tot futuristisch, elk met een eigen structuur, typografie en animatie.",
		items: [
			{
				slug: 'landing-preview-studio',
				name: 'Meridian — minimal',
				tagline:
					'Editoriaal architectenbureau. Serif display (Fraunces), veel witruimte, index-lijst en subtiele scroll-reveals.',
				palette: [
					'oklch(0.20 0.012 60)',
					'oklch(0.55 0.10 45)',
					'oklch(0.97 0.006 85)'
				],
				tags: ['minimal', 'editorial', 'serif']
			},
			{
				slug: 'landing-preview-nova',
				name: 'Aether — futuristic',
				tagline:
					'AI-compute platform. Dark mode, neon mesh, glass bento en Motion scroll-animaties met animerende tellers.',
				palette: [
					'oklch(0.84 0.15 200)',
					'oklch(0.68 0.22 300)',
					'oklch(0.15 0.03 280)'
				],
				tags: ['futuristic', 'dark', 'motion']
			}
		]
	},
	{
		group: 'Stijl-richtingen',
			description:
				'Twee extra concept-merken in uiteenlopende stijlen — clean shadcn/ui en Apple-achtig product. Elk per sectie opgebouwd in een eigen _sections-map.',
		items: [
			{
				slug: 'landing-preview-shadcn',
				name: 'Trace — shadcn/ui',
				tagline:
					'SaaS issue-tracker in clean shadcn-stijl. Gebruikt uitsluitend de live theme-tokens: cards, badges, subtiele borders en een product-mock.',
				palette: [
					'oklch(0.54 0.09 170)',
					'oklch(0.94 0.02 175)',
					'oklch(1 0 0)'
				],
				tags: ['shadcn', 'saas', 'clean']
			},
			{
				slug: 'landing-preview-vision',
				name: 'Aura — Apple-stijl',
				tagline:
					'Product-landing voor audio-hardware. Enorme typografie, veel witruimte, afwisselend licht/donker en scroll-driven reveals.',
				palette: [
					'oklch(0.6 0.16 255)',
					'oklch(0.17 0.01 270)',
					'oklch(0.98 0.002 270)'
				],
				tags: ['apple', 'product', 'minimal']
			},
		]
	},
	{
		group: 'Nieuwe concepten (batch 2)',
		description:
			'Tien volledig nieuwe fictieve merken — wildlife, vinyl, speakeasy, type foundry, litigation, kinderzorg, keramiek, endurance, kusthotel en encrypted messaging. Elk 12+ unieke secties.',
		items: [
			{
				slug: 'landing-preview-kestrel',
				name: 'Kestrel — wildlife films',
				tagline:
					'Donkere documentaire-expeditie. Bitter + Karla, species tracking, field notes journal en conservation impact.',
				palette: [
					'oklch(0.14 0.02 55)',
					'oklch(0.72 0.14 65)',
					'oklch(0.96 0.01 90)'
				],
				tags: ['documentary', 'wildlife', 'cinematic']
			},
			{
				slug: 'landing-preview-prism',
				name: 'Prism — record label',
				tagline:
					'Brutalist indie label. Anton + Barlow, magenta/lime, marquee, tour dates en vinyl catalogus.',
				palette: [
					'oklch(0.12 0 0)',
					'oklch(0.58 0.28 350)',
					'oklch(0.82 0.24 130)'
				],
				tags: ['music', 'brutalist', 'vinyl']
			},
			{
				slug: 'landing-preview-hollow',
				name: 'Hollow — speakeasy',
				tagline:
					'Art deco hidden bar. Cinzel + Raleway, velvet/goud, geheime ingang, cocktails en dress code.',
				palette: [
					'oklch(0.18 0.06 25)',
					'oklch(0.72 0.1 80)',
					'oklch(0.94 0.01 85)'
				],
				tags: ['cocktails', 'art-deco', 'noir']
			},
			{
				slug: 'landing-preview-typelab',
				name: 'Typelab — type foundry',
				tagline:
					'Zwitserse font foundry. Libre Baskerville + Franklin, specimen sheets, glyph grid en licensing.',
				palette: ['oklch(0.15 0 0)', 'oklch(0.52 0.24 25)', 'oklch(1 0 0)'],
				tags: ['typography', 'swiss', 'specimens']
			},
			{
				slug: 'landing-preview-bloom',
				name: 'Bloom — kinderzorg',
				tagline:
					'Pediatrische zorgfonds. Quicksand + Nunito, blush/petal, patient stories, donate en volunteers.',
				palette: [
					'oklch(0.94 0.04 350)',
					'oklch(0.72 0.14 350)',
					'oklch(0.62 0.12 155)'
				],
				tags: ['charity', 'pediatric', 'warm']
			},
			{
				slug: 'landing-preview-relay',
				name: 'Relay — endurance',
				tagline:
					'Marathon & trail events. Bebas Neue + Rubik, orange/black, elevation routes en live results.',
				palette: ['oklch(0.12 0 0)', 'oklch(0.68 0.22 45)', 'oklch(0.99 0 0)'],
				tags: ['sports', 'marathon', 'energy']
			},
			{
				slug: 'landing-preview-cipher',
				name: 'Cipher — encrypted chat',
				tagline:
					'Privacy-first messenger. Space Mono + IBM Plex Sans, terminal green, threat model en protocol spec.',
				palette: [
					'oklch(0.08 0.02 155)',
					'oklch(0.72 0.18 145)',
					'oklch(0.92 0.02 155)'
				],
				tags: ['privacy', 'encryption', 'terminal']
			}
		]
	},
	{
		group: 'SaaS-concepten',
		description:
			'Dashboard-first SaaS landings — carbon tracking per pagina en site, met live charts en multi-site monitoring.',
		items: [
			{
				slug: 'landing-preview-orbit',
				name: 'Orbit by moonsio',
				tagline:
					'Carbon-emission dashboard met page-level tracking over tijd. Plus Jakarta + DM Mono, SVG area charts, multi-site overzicht en drempel-alerts.',
				palette: [
					'oklch(0.11 0.025 265)',
					'oklch(0.72 0.14 195)',
					'oklch(0.78 0.16 165)'
				],
				tags: ['dashboard', 'carbon', 'saas']
			},
			{
				slug: 'landing-preview-orbit-nous',
				name: 'Orbit Nous — editorial dashboard',
				tagline:
					'Orbit-blokken in Nous Research stijl: parchment/olive, Crimson Pro + IBM Plex Sans, page-level dashboard sections en editorial motion.',
				palette: [
					'oklch(0.96 0.012 95)',
					'oklch(0.42 0.06 145)',
					'oklch(0.62 0.06 145)'
				],
				tags: ['editorial', 'dashboard', 'parchment']
			},
			{
				slug: 'landing-preview-orbit-aero',
				name: 'Orbit Aero — agency workspace',
				tagline:
					'Glassmorphism agency dashboard. Plus Jakarta + Outfit, portfolio sites, A–F carbon scores, client reports en embed widgets.',
				palette: [
					'oklch(0.94 0.04 230)',
					'oklch(0.52 0.14 240)',
					'oklch(0.72 0.12 200)'
				],
				tags: ['agency', 'glass', 'workspace']
			},
			{
				slug: 'landing-preview-orbit-horizon',
				name: 'Orbit Horizon — brutal editorial',
				tagline:
					'Orbit-dashboard in orbit-nous palet (Crimson Pro + IBM Plex) maar met brutalist design touches: harde schaduwen, scherpe hoeken, dikke randen.',
				palette: [
					'oklch(0.96 0.012 95)',
					'oklch(0.42 0.06 145)',
					'oklch(0.62 0.06 145)'
				],
				tags: ['editorial', 'brutalist', 'light']
			},
			{
				slug: 'landing-preview-orbit-horizon-dark',
				name: 'Orbit Horizon — brutal editorial (dark)',
				tagline:
					'Dark brutal landing met muted olive borders, soft cream text en deep offset shadows — zelfde secties als Horizon light.',
				palette: [
					'oklch(0.15 0.022 145)',
					'oklch(0.58 0.07 145)',
					'oklch(0.68 0.06 145)'
				],
				tags: ['editorial', 'brutalist', 'dark']
			},
		]
	},
	{
		group: 'Orbit app (ingelogd)',
		description:
			"Logged-in dashboard views van Orbit — overview, analytics, multi-site beheer en alert-regels. Donkere app-shell met sidebar, KPI's, tabellen en inline SVG-charts.",
		items: [
			{
				slug: 'landing-preview-orbit-console',
				name: 'Orbit Console — overview',
				tagline:
					'Hoofd-dashboard met KPI-kaarten, emissions chart, pages table, budget tracker, alerts panel en activity feed.',
				palette: [
					'oklch(0.11 0.025 265)',
					'oklch(0.72 0.14 195)',
					'oklch(0.78 0.16 165)'
				],
				tags: ['dashboard', 'logged-in', 'overview']
			},
			{
				slug: 'landing-preview-orbit-console-light',
				name: 'Orbit Console — overview (light)',
				tagline:
					'Zelfde Orbit Console layout in light mode. Off-white achtergrond, donkere tekst, cyan/mint accenten en zachte panel-randen.',
				palette: [
					'oklch(0.97 0.006 265)',
					'oklch(0.52 0.14 195)',
					'oklch(0.48 0.14 165)'
				],
				tags: ['dashboard', 'logged-in', 'light']
			},
			{
				slug: 'landing-preview-orbit-analytics',
				name: 'Orbit Analytics — deep dive',
				tagline:
					'Analytics view met date range, funnel chart, geo/device breakdown, trend forecast en saved views.',
				palette: [
					'oklch(0.11 0.025 265)',
					'oklch(0.72 0.14 195)',
					'oklch(0.78 0.16 165)'
				],
				tags: ['analytics', 'logged-in', 'charts']
			},
			{
				slug: 'landing-preview-orbit-sites',
				name: 'Orbit Sites — multi-site',
				tagline:
					'Multi-site management: sites grid, domain list, billing usage, sync status, migration wizard en audit log.',
				palette: [
					'oklch(0.11 0.025 265)',
					'oklch(0.72 0.14 195)',
					'oklch(0.78 0.16 165)'
				],
				tags: ['multi-site', 'logged-in', 'management']
			},
			{
				slug: 'landing-preview-orbit-alerts',
				name: 'Orbit Alerts — regels',
				tagline:
					'Alert management: rules list, threshold editor, channels, escalation, webhook logs en team subscriptions.',
				palette: [
					'oklch(0.11 0.025 265)',
					'oklch(0.75 0.16 75)',
					'oklch(0.62 0.2 25)'
				],
				tags: ['alerts', 'logged-in', 'webhooks']
			},
			{
				slug: 'landing-preview-orbit-nous-console',
				name: 'Orbit Research — overview',
				tagline:
					'Logged-in research dashboard in parchment/olive stijl. Inference workloads, emissions chart, research budget en publications feed.',
				palette: [
					'oklch(0.96 0.012 95)',
					'oklch(0.42 0.06 145)',
					'oklch(0.62 0.06 145)'
				],
				tags: ['research', 'logged-in', 'light']
			},
			{
				slug: 'landing-preview-orbit-horizon-console',
				name: 'Orbit Horizon — overview',
				tagline:
					'Logged-in carbon dashboard in brutal editorial stijl. Harde schaduwen, dikke randen, KPI-kaarten, emissions chart, page breakdown en threshold alerts.',
				palette: [
					'oklch(0.96 0.012 95)',
					'oklch(0.42 0.06 145)',
					'oklch(0.62 0.06 145)'
				],
				tags: ['brutalist', 'logged-in', 'light']
			},
			{
				slug: 'landing-preview-orbit-horizon-console-dark',
				name: 'Orbit Horizon — overview (dark)',
				tagline:
					'Dark brutal editorial dashboard. Muted olive borders, soft cream text, deep offset shadows — same layout as Horizon light.',
				palette: [
					'oklch(0.13 0.028 145)',
					'oklch(0.62 0.08 145)',
					'oklch(0.72 0.07 145)'
				],
				tags: ['brutalist', 'logged-in', 'dark']
			}
		]
	},
	{
		group: 'Duurzaamheid merken',
		description:
			'Sustainability-gerichte concept-merken voor marketing managers, agencies en coaches — elk met eigen stijl, typografie en 12+ secties.',
		items: [
			{
				slug: 'landing-preview-greenbench',
				name: 'Greenbench — agency benchmark',
				tagline:
					'Agency carbon benchmarking SaaS. Space Grotesk + Inter, leaderboard, score breakdowns en report preview.',
				palette: [
					'oklch(0.48 0.14 155)',
					'oklch(0.75 0.16 135)',
					'oklch(1 0 0)'
				],
				tags: ['agency', 'benchmark', 'saas']
			},
			{
				slug: 'landing-preview-patchwork',
				name: 'Patchwork — creative agency',
				tagline:
					'Bold green creative agency. Archivo Black + Work Sans, multicolor blocks, marquee en manifesto.',
				palette: [
					'oklch(0.55 0.2 145)',
					'oklch(0.88 0.18 95)',
					'oklch(0.68 0.2 350)'
				],
				tags: ['agency', 'bold', 'creative']
			},
			{
				slug: 'landing-preview-beacon',
				name: 'Beacon — B Corp guide',
				tagline:
					'B Corp certification consultancy. Merriweather + Open Sans, gold/forest institutional palette en assessment pathway.',
				palette: [
					'oklch(0.32 0.07 155)',
					'oklch(0.72 0.1 85)',
					'oklch(0.97 0.01 90)'
				],
				tags: ['bcorp', 'certification', 'institutional']
			}
		]
	},
	{
		group: 'Sector-concepten',
			description:
				"Sector-specifieke concept-pagina's voor duurzaam web en regeneratieve duurzaamheid. Elk met 12+ secties in een eigen _sections-map.",
		items: [
			{
				slug: 'landing-preview-offset',
				name: 'Offset — sustainable web',
				tagline:
					'Low-carbon webdesign-studio. IBM Plex Mono + Newsreader, carbon metrics, performance budgets, green hosting stack en audit-workflow.',
				palette: [
					'oklch(0.38 0.07 155)',
					'oklch(0.72 0.16 135)',
					'oklch(0.97 0.008 95)'
				],
				tags: ['web', 'sustainable', 'performance']
			},
			{
				slug: 'landing-preview-canopy',
				name: 'Canopy — regenerative',
				tagline:
					'Circulaire economie-collectief. Fraunces + Nunito Sans, aardse tinten, pillars, community chapters en regeneration pledge.',
				palette: [
					'oklch(0.32 0.06 75)',
					'oklch(0.52 0.1 145)',
					'oklch(0.94 0.02 85)'
				],
				tags: ['sustainability', 'circular', 'organic']
			},
		]
	},
	{
		group: 'Showcase-richtingen',
		description:
			"Zwaardere concept-pagina's: twee awwwards-waardige sites, een documentatie-template en een fintech-app. Elk per sectie opgebouwd in een eigen _sections-map.",
		items: [
			{
				slug: 'landing-preview-obsidian',
				name: 'Obsidian — cinematic',
				tagline:
					'Donkere 3D/film-studio in awwwards-stijl. Syne display, amber-accent, filmkorrel-overlay, kinetische marquee en een Embla showreel-carousel.',
				palette: [
					'oklch(0.13 0.012 280)',
					'oklch(0.82 0.16 70)',
					'oklch(0.95 0.008 90)'
				],
				tags: ['awwwards', 'dark', 'cinematic']
			},
			{
				slug: 'landing-preview-monolith',
				name: 'Monolith — Swiss editorial',
				tagline:
					'High-end design-magazine in Swiss-modernisme. Libre Bodoni + Public Sans, 12-koloms grid, veel witruimte, hairline-scheidingen en één verfijnd accent — mobile-first.',
				palette: [
					'oklch(0.17 0.003 280)',
					'oklch(0.6 0.2 355)',
					'oklch(0.985 0.001 100)'
				],
				tags: ['swiss', 'editorial', 'mobile-first']
			},
			{
				slug: 'landing-preview-docs',
				name: 'Helix — documentatie',
				tagline:
					'Developer-docs template op de live theme-tokens. Sticky sidebar, "on this page"-TOC, code-blocks, callouts en een prev/next-pager.',
				palette: [
					'oklch(0.54 0.09 170)',
					'oklch(0.18 0.02 265)',
					'oklch(1 0 0)'
				],
				tags: ['docs', 'sidebar', 'tokens']
			},
			{
				slug: 'landing-preview-vault',
				name: 'Vault — fintech app',
				tagline:
					'Donkere betaal-app landing. Plus Jakarta + Space Grotesk, mint/violet accenten, app-mockup, feature-bento en download-CTA.',
				palette: [
					'oklch(0.17 0.03 265)',
					'oklch(0.86 0.17 165)',
					'oklch(0.72 0.15 290)'
				],
				tags: ['fintech', 'app', 'dark']
			}
		]
	}
]

const totalCount = previews.reduce((sum, g) => sum + g.items.length, 0)

export default function LandingPagesIndex() {
	return (
		<div className='min-h-screen bg-background text-foreground'>
			<header className='border-border border-b'>
				<div className='mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5'>
					<Link href='/' className='flex items-center gap-3'>
						<div
							className='grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground'
							aria-hidden
						>
							<span className='font-semibold'>P</span>
						</div>
						<div className='leading-tight'>
							<p className='font-semibold text-foreground tracking-tight'>
								Payload Starter
							</p>
							<p className='text-muted-foreground text-xs'>
								Overzicht concept-previews
							</p>
						</div>
					</Link>
					<Badge variant='outline' className='rounded-full'>
						{totalCount} previews
					</Badge>
				</div>
			</header>

			<main>
				<section className='border-border border-b bg-surface'>
					<div className='mx-auto w-full max-w-6xl px-6 py-20'>
						<Badge
							variant='secondary'
							className='mb-6 rounded-full font-medium text-xs uppercase tracking-widest'
						>
							Design preview index
						</Badge>
						<h1 className='mb-6 max-w-3xl text-balance font-semibold text-5xl text-foreground leading-[1.05] tracking-tight md:text-6xl'>
							Concept landingspagina's voor de{' '}
							<span className='text-primary'>Payload Starter</span>.
						</h1>
						<p className='max-w-2xl text-lg text-muted-foreground leading-relaxed'>
							Hieronder vind je {totalCount} concept landings­pagina's, elk met
							een eigen kleurpalet, typografie en compositie. Ze dienen als
							design-referentie en zijn (nog) niet omgezet naar Payload-blokken.
						</p>
					</div>
				</section>

				{previews.map(group => (
					<section
						key={group.group}
						className='border-border border-b py-16 last:border-0'
					>
						<div className='mx-auto w-full max-w-6xl px-6'>
							<div className='mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end'>
								<div>
									<p className='mb-2 font-medium text-primary text-sm uppercase tracking-[0.2em]'>
										{group.group}
									</p>
									<h2 className='font-semibold text-3xl text-foreground leading-tight md:text-4xl'>
										{group.description}
									</h2>
								</div>
								<Badge variant='outline' className='rounded-full'>
									{group.items.length}{' '}
									{group.items.length === 1 ? 'variant' : 'varianten'}
								</Badge>
							</div>

							<div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
								{group.items.map(p => (
									<Link
										key={p.slug}
										href={`/${p.slug}`}
										className='group block focus:outline-none'
									>
										<Card className='h-full overflow-hidden rounded-2xl border-border bg-card transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40 group-hover:shadow-lg group-focus-visible:ring-3 group-focus-visible:ring-ring/40'>
											<div
												className='h-32 w-full'
												style={{
													background: `linear-gradient(135deg, ${p.palette[0]}, ${p.palette[1]} 60%, ${p.palette[2]})`
												}}
												aria-hidden
											/>
											<CardContent className='space-y-4 p-6'>
												<div className='flex items-start justify-between gap-3'>
													<div>
														<p className='font-mono text-muted-foreground text-xs uppercase tracking-widest'>
															/{p.slug}
														</p>
														<h3 className='mt-1 font-semibold text-foreground text-xl'>
															{p.name}
														</h3>
													</div>
													<ArrowUpRight className='h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary' />
												</div>

												<p className='text-muted-foreground text-sm leading-relaxed'>
													{p.tagline}
												</p>

												<Separator />

												<div className='flex items-center justify-between gap-3'>
													<div className='flex -space-x-1.5'>
														{p.palette.map(c => (
															<span
																key={c}
																className='h-5 w-5 rounded-full ring-2 ring-background'
																style={{ background: c }}
															/>
														))}
													</div>
													<div className='flex flex-wrap justify-end gap-1'>
														{p.tags.map(t => (
															<Badge
																key={t}
																variant='secondary'
																className='rounded-full text-[10px] uppercase tracking-wider'
															>
																{t}
															</Badge>
														))}
													</div>
												</div>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						</div>
					</section>
				))}

				<section className='border-border border-t bg-surface py-16'>
					<div className='mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center'>
						<div>
							<h2 className='font-semibold text-2xl text-foreground leading-tight md:text-3xl'>
								Een variant bekijken of de blokken-catalogus openen?
							</h2>
							<p className='mt-2 max-w-xl text-muted-foreground'>
								Elke pagina is volledig zelfstandig (één <code>page.tsx</code>)
								en gebruikt CSS-variabelen om kleur en stijl te overschrijven.
							</p>
						</div>
						<div className='flex gap-3'>
							<Button asChild>
								<Link href='/sections-preview'>Open de blokken-catalogus</Link>
							</Button>
							<Button asChild variant='secondary'>
								<Link href='/'>Naar de site</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<footer className='border-border border-t py-10'>
				<div className='mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-muted-foreground text-sm md:flex-row'>
					<p>© {new Date().getFullYear()} Payload Starter — preview index</p>
					<p className='text-xs'>
						{totalCount} concept-varianten · alleen voor design-review
					</p>
				</div>
			</footer>
		</div>
	)
}
