const quotes = [
	{
		q: 'Switched from my old bank and never looked back. The savings pots are addictive.',
		a: 'Daan',
		r: 'Freelancer'
	},
	{
		q: 'Travelling with Vault saved me a fortune in exchange fees.',
		a: 'Noor',
		r: 'Student'
	},
	{
		q: 'I finally understand where my money goes each month.',
		a: 'Ravi',
		r: 'Designer'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<h2 className='va-reveal mb-10 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3rem)] tracking-[-0.02em]'>
					Loved by 4 million people.
				</h2>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
					{quotes.map(t => (
						<figure
							key={t.a}
							className='va-reveal flex flex-col justify-between rounded-2xl border border-[var(--line)] p-7 [background:var(--panel)]'
						>
							<blockquote className='text-lg leading-relaxed'>
								&ldquo;{t.q}&rdquo;
							</blockquote>
							<figcaption className='mt-6 flex items-center gap-3'>
								<span className='h-9 w-9 rounded-full [background:var(--panel-2)]' />
								<span>
									<span className='block font-medium text-sm'>{t.a}</span>
									<span className='block text-[var(--mute)] text-xs'>
										{t.r}
									</span>
								</span>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
