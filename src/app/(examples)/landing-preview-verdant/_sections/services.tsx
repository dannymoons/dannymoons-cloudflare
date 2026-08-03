import { BarChart3, Leaf, Recycle, Sprout } from 'lucide-react'

const items = [
	{
		icon: Sprout,
		t: 'Climate strategy',
		d: 'Science-based targets, transition roadmaps and board-ready narratives.'
	},
	{
		icon: Recycle,
		t: 'Circular design',
		d: 'Product lifecycle audits, material substitution and waste-to-value models.'
	},
	{
		icon: BarChart3,
		t: 'Impact measurement',
		d: 'ESG data architecture, assurance-ready reporting and live dashboards.'
	},
	{
		icon: Leaf,
		t: 'Brand & comms',
		d: 'Authentic sustainability storytelling that survives scrutiny.'
	}
]

/** Future Payload mapping: serviceGrid. */
export function Services() {
	return (
		<section id='services' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='vd-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)]'>
					What we do
				</h2>
				<div className='mt-12 grid gap-6 sm:grid-cols-2'>
					{items.map(s => (
						<div
							key={s.t}
							className='vd-reveal rounded-2xl border border-[var(--line)] p-7 [background:var(--clay)]'
						>
							<s.icon className='h-7 w-7 [color:var(--moss)]' />
							<h3 className='mt-5 font-[family-name:var(--font-display)] text-2xl'>
								{s.t}
							</h3>
							<p className='mt-2 leading-relaxed [color:var(--mute)]'>{s.d}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
