import { BarChart3, Leaf, Megaphone, Truck } from 'lucide-react'

const kpis = [
	{
		icon: Megaphone,
		label: 'Campaign carbon intensity',
		value: '0.42',
		unit: 'tCO₂e / $M spend',
		change: '−18% YoY',
		desc: 'Per-channel breakdown across paid, owned, and earned media.'
	},
	{
		icon: Truck,
		label: 'Scope 3 — marketing services',
		value: '12,400',
		unit: 'tCO₂e',
		change: '−9% YoY',
		desc: 'Agencies, production houses, and martech vendors mapped to spend.'
	},
	{
		icon: Leaf,
		label: 'Renewable media mix',
		value: '64%',
		unit: 'of impressions',
		change: '+22 pts YoY',
		desc: 'Platforms and publishers with verified clean-energy sourcing.'
	},
	{
		icon: BarChart3,
		label: 'Disclosure readiness',
		value: '98%',
		unit: 'CSRD fields',
		change: 'Audit-ready',
		desc: 'Pre-mapped to ESRS E1 with automated evidence attachments.'
	}
]

/** Future Payload mapping: kpiGrid. */
export function Kpis() {
	return (
		<section id='kpis' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
						Key metrics
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						The numbers your ESG committee asks for.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Pre-built KPIs aligned to GHG Protocol Category 1 and
						marketing-specific scope 3 guidance — updated automatically as spend
						flows in.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{kpis.map(k => (
						<article
							key={k.label}
							className='me-reveal rounded-sm border border-[var(--line)] p-6 transition-colors hover:border-[color-mix(in_oklch,var(--blue)_30%,transparent)]'
						>
							<div className='flex items-start justify-between gap-4'>
								<k.icon
									className='h-5 w-5 [color:var(--blue)]'
									strokeWidth={1.5}
								/>
								<span className='rounded-sm px-2 py-0.5 text-xs [background:color-mix(in_oklch,var(--blue)_10%,var(--ice))] [color:var(--blue)]'>
									{k.change}
								</span>
							</div>
							<p className='mt-4 text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
								{k.label}
							</p>
							<p className='mt-2 font-[family-name:var(--font-display)] text-3xl [color:var(--ink)]'>
								{k.value}
								<span className='ml-1 text-base [color:var(--mute)]'>
									{k.unit}
								</span>
							</p>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{k.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
