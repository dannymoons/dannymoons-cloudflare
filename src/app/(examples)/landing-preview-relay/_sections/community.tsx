const stats = [
	{ value: '4,200', label: 'Finishers in 2025' },
	{ value: '38', label: 'Running clubs partnered' },
	{ value: '12', label: 'Pace groups per race' }
]

const posts = [
	{
		author: 'Trail Runners NL',
		text: 'Best organised trail race we have done. Splits at every climb, volunteers who actually cheer.'
	},
	{
		author: 'Marieke V.',
		text: 'City marathon PR on the Relay course. Flat, fast, and the orange mile markers kept me honest.'
	},
	{
		author: 'Ultra Crew 7',
		text: '80K done. Aid stations every 8 km with real food. Already registered for 2026.'
	}
]

/** Future Payload mapping: communityBand. */
export function Community() {
	return (
		<section id='community' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Community
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Runners who show up
					</h2>
				</div>

				<div className='rl-reveal mb-12 grid grid-cols-1 gap-6 border-[var(--line)] border-y py-10 sm:grid-cols-3'>
					{stats.map(s => (
						<div key={s.label} className='text-center sm:text-left'>
							<p className='font-[family-name:var(--font-display)] text-4xl [color:var(--orange)]'>
								{s.value}
							</p>
							<p className='mt-2 text-sm uppercase tracking-[0.14em] [color:var(--mute)]'>
								{s.label}
							</p>
						</div>
					))}
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{posts.map(p => (
						<blockquote
							key={p.author}
							className='rl-reveal rounded-sm border border-[var(--line)] p-6'
						>
							<p className='text-sm leading-relaxed [color:var(--mute)]'>
								&ldquo;{p.text}&rdquo;
							</p>
							<footer className='mt-4 font-medium text-sm [color:var(--black)]'>
								— {p.author}
							</footer>
						</blockquote>
					))}
				</div>

				<div className='rl-reveal mt-10 text-center'>
					<a
						href='#register'
						className='inline-flex min-h-12 items-center justify-center rounded-sm px-6 font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--orange)] [color:var(--black)] hover:opacity-90'
					>
						Join the start list
					</a>
				</div>
			</div>
		</section>
	)
}
