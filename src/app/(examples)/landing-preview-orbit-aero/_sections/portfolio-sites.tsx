import { Leaf } from 'lucide-react'

const sites = [
	{
		client: 'Northwind Studio',
		domain: 'northwind.studio',
		co2: 0.28,
		badge: 'A',
		badgeColor: 'var(--cyan)',
		pages: 24,
		seed: 'oa-nw'
	},
	{
		client: 'Harbor & Co.',
		domain: 'harborand.co',
		co2: 0.41,
		badge: 'B',
		badgeColor: 'var(--blue)',
		pages: 38,
		seed: 'oa-hc'
	},
	{
		client: 'Lumen Retail',
		domain: 'shop.lumen.io',
		co2: 0.52,
		badge: 'C',
		badgeColor: 'oklch(0.68 0.12 85)',
		pages: 112,
		seed: 'oa-lr'
	},
	{
		client: 'Atlas Legal',
		domain: 'atlaslegal.nl',
		co2: 0.33,
		badge: 'B+',
		badgeColor: 'var(--blue)',
		pages: 56,
		seed: 'oa-al'
	},
	{
		client: 'Verde Foods',
		domain: 'verdefoods.com',
		co2: 0.24,
		badge: 'A',
		badgeColor: 'var(--cyan)',
		pages: 19,
		seed: 'oa-vf'
	},
	{
		client: 'Pulse Media',
		domain: 'pulsemedia.tv',
		co2: 0.67,
		badge: 'D',
		badgeColor: 'oklch(0.62 0.14 35)',
		pages: 204,
		seed: 'oa-pm'
	}
]

/** Future Payload mapping: portfolioSiteCards. */
export function PortfolioSites() {
	return (
		<section
			id='portfolio'
			className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-10 max-w-2xl'>
					<span className='oa-reveal mb-3 block font-medium text-[10px] uppercase tracking-[0.2em] [color:var(--mute)]'>
						Client portfolio
					</span>
					<h2 className='oa-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em]'>
						Every client site, one glass panel
					</h2>
					<p className='oa-reveal mt-3 text-sm leading-relaxed [color:var(--mute)]'>
						Six live properties from a typical agency workspace — emissions
						badges, page counts, and carbon grades at a glance.
					</p>
				</div>

				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{sites.map(s => (
						<article
							key={s.domain}
							className='oa-reveal group overflow-hidden rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur-xl transition-shadow hover:shadow-[0_16px_48px_-16px_color-mix(in_oklch,var(--blue)_18%,transparent)]'
						>
							<div className='relative aspect-[16/9] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/640/360`}
									alt={`${s.client} website preview`}
									className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
								/>
								<span
									className='absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-white/40 bg-white/80 px-2.5 py-1 font-[family-name:var(--font-display)] font-bold text-xs backdrop-blur-xl'
									style={{ color: s.badgeColor }}
								>
									<Leaf className='h-3 w-3' />
									{s.badge}
								</span>
							</div>
							<div className='p-5'>
								<p className='font-[family-name:var(--font-display)] font-semibold'>
									{s.client}
								</p>
								<p className='mt-0.5 text-xs [color:var(--mute)]'>{s.domain}</p>
								<div className='mt-4 flex items-center justify-between border-[var(--line)] border-t pt-4'>
									<div>
										<p className='text-[10px] uppercase tracking-[0.12em] [color:var(--mute)]'>
											g CO₂ / visit
										</p>
										<p className='mt-1 font-[family-name:var(--font-display)] font-bold tabular-nums'>
											{s.co2.toFixed(2)}
										</p>
									</div>
									<div className='text-right'>
										<p className='text-[10px] uppercase tracking-[0.12em] [color:var(--mute)]'>
											Pages
										</p>
										<p className='mt-1 font-medium tabular-nums'>{s.pages}</p>
									</div>
									<span
										className='grid h-10 w-10 place-items-center rounded-xl border border-[var(--line)] bg-white/60 font-[family-name:var(--font-display)] font-bold text-lg backdrop-blur-xl'
										style={{ color: s.badgeColor }}
									>
										{s.badge}
									</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
