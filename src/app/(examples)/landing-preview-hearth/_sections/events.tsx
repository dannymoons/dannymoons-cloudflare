const events = [
	{
		title: 'Sunday roast',
		schedule: 'Every Sunday · 12:00 – 16:00',
		desc: 'Whole free-range chicken, Yorkshire puddings, roasted roots, and gravy from the pan. Book ahead — we sell out by two.',
		price: '€28 per person'
	},
	{
		title: 'Wine nights',
		schedule: 'First Thursday monthly · 19:00',
		desc: 'A visiting winemaker pours four glasses while Marco pairs small plates. Casual seating, no lecture — just good bottles and conversation.',
		price: '€45 per person'
	}
]

/** Future Payload mapping: eventCards. */
export function Events() {
	return (
		<section
			id='events'
			className='border-[var(--line)] border-y px-5 py-20 [background:var(--rust)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal mb-10 text-center'>
					<span className='font-medium text-sm [color:var(--wheat)]'>
						Community table
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--cream)]'>
						Recurring gatherings
					</h2>
					<p className='mx-auto mt-4 max-w-lg text-base [color:var(--cream)]/75'>
						The kind of nights that turn neighbors into regulars. No dress code,
						no tasting notes required.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
					{events.map(e => (
						<article
							key={e.title}
							className='ht-reveal rounded-sm border border-[var(--cream)]/15 p-6 sm:p-8'
						>
							<p className='text-sm [color:var(--wheat)]'>{e.schedule}</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-2xl [color:var(--cream)]'>
								{e.title}
							</h3>
							<p className='mt-4 text-base leading-relaxed [color:var(--cream)]/80'>
								{e.desc}
							</p>
							<p className='mt-6 font-medium [color:var(--wheat)]'>{e.price}</p>
							<a
								href='#reservations'
								className='mt-5 inline-flex font-medium text-sm transition-opacity [color:var(--cream)] hover:opacity-80'
							>
								Reserve your spot →
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
