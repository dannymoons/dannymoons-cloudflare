const reviews = [
	{
		text: 'Finally an eco app that doesn’t make me feel terrible about myself. The streak system is weirdly addictive in the best way.',
		author: 'Tom H.',
		rating: 5
	},
	{
		text: 'Love the household feature. Our whole flat is on a 30-day challenge and the group chat integration is chef’s kiss.',
		author: 'Aisha M.',
		rating: 5
	},
	{
		text: 'I’ve tried four sustainability apps. Habit is the only one still on my home screen after 8 months.',
		author: 'Chris L.',
		rating: 5
	},
	{
		text: 'The science section convinced my sceptical partner. Now we both track and it’s become part of our evening routine.',
		author: 'Nina S.',
		rating: 5
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section id='testimonials' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Reviews
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Loved by 280,000 members worldwide
					</h2>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{reviews.map(r => (
						<blockquote
							key={r.author}
							className='ha-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--cream)]'
						>
							<p className='text-[var(--leaf)]' aria-hidden>
								{'★'.repeat(r.rating)}
							</p>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								&ldquo;{r.text}&rdquo;
							</p>
							<footer className='mt-4 font-medium text-sm [color:var(--ink)]'>
								— {r.author}
							</footer>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	)
}
