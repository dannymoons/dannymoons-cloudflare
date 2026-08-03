const events = [
	{
		year: '2012',
		t: 'Founded in Copenhagen with three clients and one conviction.'
	},
	{
		year: '2017',
		t: 'Opened Amsterdam hub; launched circular supply chain practice.'
	},
	{ year: '2021', t: 'Became a certified B Corp; 200+ active programmes.' },
	{
		year: '2025',
		t: 'Published the Verdant Transition Index — industry benchmark.'
	}
]

/** Future Payload mapping: timeline. */
export function Timeline() {
	return (
		<section className='px-5 py-20 [background:var(--clay)] sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<h2 className='vd-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					Our journey
				</h2>
				<ul className='mt-10 space-y-8'>
					{events.map(e => (
						<li
							key={e.year}
							className='vd-reveal flex gap-6 border-[var(--line)] border-b pb-8 last:border-0'
						>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-2xl [color:var(--moss)]'>
								{e.year}
							</span>
							<p className='leading-relaxed [color:var(--mute)]'>{e.t}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
