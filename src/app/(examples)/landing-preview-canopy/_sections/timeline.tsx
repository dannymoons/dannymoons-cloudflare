const milestones = [
	{
		year: '2018',
		t: 'Canopy founded in Portland by farmers, designers, and supply chain veterans.'
	},
	{
		year: '2019',
		t: 'Launched first three local chapters and the Soil-to-Shelf Lab accelerator.'
	},
	{
		year: '2020',
		t: 'Published the Circular Material Recovery Toolkit — adopted by 40 brands.'
	},
	{
		year: '2022',
		t: 'Crossed 100 brand partners; opened fellowship programme for supply chain leads.'
	},
	{
		year: '2024',
		t: 'Regeneration Pledge launched — 12,000 individual and organisational signatories.'
	},
	{
		year: '2026',
		t: 'Global network of 47 chapters; annual impact report certifies 2.4M tonnes sequestered.'
	}
]

/** Future Payload mapping: timeline. */
export function Timeline() {
	return (
		<section className='px-5 py-20 [background:color-mix(in_oklch,var(--earth)_8%,var(--sand))] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='cp-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					From seed to canopy
				</h2>
				<ul className='mt-10 space-y-8'>
					{milestones.map(m => (
						<li
							key={m.year}
							className='cp-reveal flex gap-6 border-[var(--line)] border-b pb-8 last:border-0'
						>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-2xl [color:var(--earth)]'>
								{m.year}
							</span>
							<p className='leading-relaxed [color:var(--mute)]'>{m.t}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
