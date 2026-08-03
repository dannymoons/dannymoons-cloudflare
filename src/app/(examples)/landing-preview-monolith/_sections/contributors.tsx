const people = [
	{ name: 'Inez Vermeer', role: 'Editor-in-chief' },
	{ name: 'Kasper Lund', role: 'Art director' },
	{ name: 'Aïcha Benali', role: 'Type editor' },
	{ name: 'Tom Okafor', role: 'Architecture' },
	{ name: 'Lena Brandt', role: 'Photography' },
	{ name: 'Yuki Tanaka', role: 'Essays' }
]

/** Future Payload mapping: contributorsList. */
export function Contributors() {
	return (
		<section
			id='contributors'
			className='border-[var(--line)] border-t px-5 py-16 sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-6xl'>
				<p className='mb-8 text-xs uppercase tracking-[0.2em] [color:var(--ink-soft)]'>
					Masthead
				</p>
				<ul>
					{people.map(p => (
						<li
							key={p.name}
							className='ml-reveal border-[var(--line)] border-b last:border-b-0'
						>
							<a
								href='#top'
								className='group flex items-baseline justify-between gap-4 py-5 transition-colors hover:[color:var(--accent-ink)]'
							>
								<span className='font-[family-name:var(--font-display)] text-2xl sm:text-3xl'>
									{p.name}
								</span>
								<span className='text-right text-sm [color:var(--ink-soft)]'>
									{p.role}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
