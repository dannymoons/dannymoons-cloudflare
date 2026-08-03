const stories = [
	{
		name: 'Mia, age 7',
		quote:
			'When they painted butterflies on my wall, I stopped being scared of the beeping machines. Now I show every nurse my favourite one.',
		program: 'Room to Bloom',
		seed: 'bl-s1'
	},
	{
		name: 'The Okonkwo family',
		quote:
			'Having a room where both parents could stay meant our son never woke up alone. That changed everything for us.',
		program: 'Family Nest',
		seed: 'bl-s2'
	},
	{
		name: 'Leo, age 11',
		quote:
			'Music therapy is the best part of the week. I wrote a song about going home — and my doctor cried.',
		program: 'Play & Heal',
		seed: 'bl-s3'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Stories() {
	return (
		<section
			id='stories'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--petal)_8%,var(--blush))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<h2 className='bl-reveal text-center font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] leading-[1.08] [color:var(--ink)]'>
					Patient stories
				</h2>
				<p className='bl-reveal mx-auto mt-4 max-w-lg text-center text-sm [color:var(--mute)]'>
					Shared with permission. Names changed where requested.
				</p>

				<div className='mt-12 grid gap-6 lg:grid-cols-3'>
					{stories.map(s => (
						<figure
							key={s.seed}
							className='bl-reveal overflow-hidden rounded-2xl border border-[var(--line)] [background:var(--blush)]'
						>
							<div className='aspect-[16/9] overflow-hidden'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${s.seed}/640/360`}
									alt=''
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='p-6'>
								<span className='font-semibold text-xs uppercase tracking-wide [color:var(--petal)]'>
									{s.program}
								</span>
								<blockquote className='mt-3 leading-relaxed [color:var(--ink)]'>
									&ldquo;{s.quote}&rdquo;
								</blockquote>
								<p className='mt-4 font-semibold text-sm [color:var(--mute)]'>
									— {s.name}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
