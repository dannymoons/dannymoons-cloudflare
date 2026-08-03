import { Hammer, RefreshCw, Search, Wrench } from 'lucide-react'

const items = [
	{
		icon: Search,
		t: 'Audit',
		d: 'Carbon footprint analysis, performance profiling and a prioritised reduction roadmap.'
	},
	{
		icon: Hammer,
		t: 'Build',
		d: 'Greenfield sites engineered to strict budgets — typography, assets and code included.'
	},
	{
		icon: RefreshCw,
		t: 'Migrate',
		d: 'Move off bloated CMS stacks to static, edge-delivered architectures without losing content.'
	},
	{
		icon: Wrench,
		t: 'Maintain',
		d: 'Ongoing monitoring, regression alerts and quarterly carbon reports to keep drift in check.'
	}
]

/** Future Payload mapping: serviceGrid. */
export function Services() {
	return (
		<section id='services' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='of-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					What we do
				</h2>
				<p className='of-reveal mt-4 max-w-lg text-sm leading-relaxed [color:var(--mute)]'>
					Four disciplines, one constraint: every decision must earn its bytes.
				</p>
				<div className='mt-12 grid gap-6 sm:grid-cols-2'>
					{items.map(s => (
						<div
							key={s.t}
							className='of-reveal rounded-2xl border border-[var(--line)] p-7 [background:color-mix(in_oklch,var(--paper)_96%,var(--stone))]'
						>
							<s.icon className='h-6 w-6 [color:var(--forest)]' />
							<h3 className='mt-5 font-[family-name:var(--font-display)] text-2xl'>
								{s.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{s.d}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
