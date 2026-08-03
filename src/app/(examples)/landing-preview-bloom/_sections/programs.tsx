const programs = [
	{
		title: 'Room to Bloom',
		desc: 'Redesign inpatient rooms with adjustable lighting, nature murals, and sensory-friendly furnishings.',
		raised: '£3.2M raised',
		color: 'var(--petal)'
	},
	{
		title: 'Play & Heal',
		desc: 'On-ward play therapists and a dedicated creative studio for art, music, and movement therapy.',
		raised: '£1.8M raised',
		color: 'var(--leaf)'
	},
	{
		title: 'Family Nest',
		desc: 'Six ensuite family rooms so parents can stay overnight without leaving the ward.',
		raised: '£2.1M raised',
		color: 'var(--sky)'
	},
	{
		title: 'Garden Courtyard',
		desc: 'A sheltered outdoor garden with wheelchair paths, raised beds, and a quiet reflection space.',
		raised: '£1.3M raised',
		color: 'var(--leaf)'
	}
]

/** Future Payload mapping: programCards. */
export function Programs() {
	return (
		<section id='programs' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='bl-reveal max-w-2xl'>
					<p className='font-semibold text-sm [color:var(--leaf)]'>
						What we fund
					</p>
					<h2 className='mt-2 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08] [color:var(--ink)]'>
						Four programs, one brighter wing
					</h2>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{programs.map(p => (
						<article
							key={p.title}
							className='bl-reveal overflow-hidden rounded-2xl border border-[var(--line)] [background:var(--blush)]'
						>
							<div className='h-1.5' style={{ background: p.color }} />
							<div className='p-6'>
								<h3 className='font-[family-name:var(--font-display)] font-bold text-xl [color:var(--ink)]'>
									{p.title}
								</h3>
								<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
									{p.desc}
								</p>
								<p
									className='mt-4 font-semibold text-sm'
									style={{ color: p.color }}
								>
									{p.raised}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
