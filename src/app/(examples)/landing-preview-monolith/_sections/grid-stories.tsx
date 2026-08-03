const stories = [
	{
		cat: 'Type',
		title: 'Twelve foundries quietly rewriting the rules.',
		read: '9 min',
		seed: 'mono-a'
	},
	{
		cat: 'Space',
		title: 'Inside the last brutalist library in Europe.',
		read: '12 min',
		seed: 'mono-b'
	},
	{
		cat: 'Screen',
		title: 'When did every app start looking the same?',
		read: '7 min',
		seed: 'mono-c'
	},
	{
		cat: 'Object',
		title: 'The chair that refused to be comfortable.',
		read: '6 min',
		seed: 'mono-d'
	},
	{
		cat: 'Essay',
		title: 'In defence of the ugly, slow website.',
		read: '10 min',
		seed: 'mono-e'
	},
	{
		cat: 'Talk',
		title: 'The colour that no screen can show you.',
		read: '8 min',
		seed: 'mono-f'
	}
]

/** Future Payload mapping: articleGrid (Swiss). */
export function GridStories() {
	return (
		<section className='border-[var(--line)] border-t px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='mb-10 flex items-baseline justify-between'>
					<h2 className='font-[family-name:var(--font-display)] text-2xl sm:text-3xl'>
						More to read
					</h2>
					<a
						href='#subscribe'
						className='text-sm underline-offset-4 [color:var(--accent-ink)] hover:underline'
					>
						All stories →
					</a>
				</div>

				<div className='grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3'>
					{stories.map(s => (
						<article key={s.seed} className='group ml-reveal'>
							<a href='#stories' className='block'>
								<div className='aspect-[16/11] overflow-hidden'>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									{/* biome-ignore lint/performance/noImgElement: external placeholder in static concept preview */}
									<img
										src={`https://picsum.photos/seed/${s.seed}/800/550`}
										alt={s.title}
										className='h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0'
									/>
								</div>
								<div className='mt-4 flex items-center justify-between text-xs uppercase tracking-[0.14em]'>
									<span className='font-semibold [color:var(--accent-ink)]'>
										{s.cat}
									</span>
									<span className='[color:var(--ink-soft)]'>{s.read}</span>
								</div>
								<h3 className='mt-3 font-[family-name:var(--font-display)] text-[1.5rem] leading-[1.15] transition-colors group-hover:[color:var(--accent-ink)]'>
									{s.title}
								</h3>
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
