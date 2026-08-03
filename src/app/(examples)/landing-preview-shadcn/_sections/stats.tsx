const stats = [
	{ v: '12k+', l: 'Teams shipping' },
	{ v: '40%', l: 'Faster triage' },
	{ v: '99.99%', l: 'Uptime' },
	{ v: '4.9/5', l: 'Avg. rating' }
]

/** Future Payload mapping: statRow. */
export function Stats() {
	return (
		<section className='mx-auto max-w-6xl px-gutter py-section'>
			<div className='grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4'>
				{stats.map(s => (
					<div key={s.l} className='bg-card p-8 text-center'>
						<div className='font-semibold text-4xl tracking-tight'>{s.v}</div>
						<div className='mt-2 text-muted-foreground text-sm'>{s.l}</div>
					</div>
				))}
			</div>
		</section>
	)
}
