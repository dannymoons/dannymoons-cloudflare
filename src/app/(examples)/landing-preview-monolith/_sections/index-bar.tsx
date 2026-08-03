const topics = [
	{ n: '01', t: 'Typography' },
	{ n: '02', t: 'Architecture' },
	{ n: '03', t: 'Interfaces' },
	{ n: '04', t: 'Essays' },
	{ n: '05', t: 'Interviews' },
	{ n: '06', t: 'Objects' }
]

/** Future Payload mapping: contentsIndex. */
export function IndexBar() {
	return (
		<section className='border-[var(--line)] border-y [background:var(--paper)]'>
			<div className='mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10'>
				<p className='mb-6 text-xs uppercase tracking-[0.2em] [color:var(--ink-soft)]'>
					In this issue
				</p>
				<ul className='grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6'>
					{topics.map(t => (
						<li key={t.n}>
							<a
								href='#stories'
								className='group flex items-baseline gap-2 transition-colors hover:[color:var(--accent-ink)]'
							>
								<span className='font-mono text-[var(--ink-soft)] text-xs'>
									{t.n}
								</span>
								<span className='font-[family-name:var(--font-display)] text-xl'>
									{t.t}
								</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
