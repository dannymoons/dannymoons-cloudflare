const figures = [
	{ v: '14', l: 'Issues printed' },
	{ v: '480', l: 'Pages this volume' },
	{ v: '60k', l: 'Readers worldwide' },
	{ v: '0', l: 'Pop-up ads' }
]

/** Future Payload mapping: statBand (editorial). */
export function Numbers() {
	return (
		<section className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<p className='mb-8 text-xs uppercase tracking-[0.2em] [color:var(--ink-soft)]'>
					By the issue
				</p>
				<div className='grid grid-cols-2 gap-x-8 gap-y-10 border-[var(--line)] border-t pt-10 lg:grid-cols-4'>
					{figures.map(f => (
						<div key={f.l} className='ml-reveal'>
							<div className='font-[family-name:var(--font-display)] font-medium text-[clamp(2.75rem,8vw,5.5rem)] leading-none'>
								{f.v}
							</div>
							<div className='mt-3 text-sm [color:var(--ink-soft)]'>{f.l}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
