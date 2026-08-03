import { HeartHandshake, Recycle, Sprout, TreeDeciduous } from 'lucide-react'

const pillars = [
	{
		icon: TreeDeciduous,
		t: 'Restore',
		d: 'Rebuild degraded ecosystems through reforestation, wetland recovery, and regenerative agriculture partnerships.'
	},
	{
		icon: Recycle,
		t: 'Reuse',
		d: 'Design closed-loop material flows where products, packaging, and nutrients cycle back into production.'
	},
	{
		icon: Sprout,
		t: 'Regenerate',
		d: 'Shift from net-zero accounting to net-positive impact — soil health, biodiversity, and community livelihoods.'
	},
	{
		icon: HeartHandshake,
		t: 'Reconnect',
		d: 'Bridge producers and consumers through transparent supply chains and local chapter networks.'
	}
]

/** Future Payload mapping: pillarGrid. */
export function Pillars() {
	return (
		<section
			id='pillars'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--earth)_6%,var(--sand))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='cp-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Four pillars
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
						The framework for circular regeneration
					</h2>
				</div>
				<div className='mt-12 grid gap-6 sm:grid-cols-2'>
					{pillars.map(p => (
						<article
							key={p.t}
							className='cp-reveal rounded-2xl border border-[var(--line)] p-7 [background:var(--sand)]'
						>
							<p.icon className='h-7 w-7 [color:var(--earth)]' />
							<h3 className='mt-5 font-[family-name:var(--font-display)] text-2xl'>
								{p.t}
							</h3>
							<p className='mt-2 leading-relaxed [color:var(--mute)]'>{p.d}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
