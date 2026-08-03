const quotes = [
	{
		text: "Rachel doesn't just teach sustainability — she helps you become the leader your organisation needs right now.",
		name: 'Marcus Lindqvist',
		role: 'COO, Nordic energy firm'
	},
	{
		text: 'The fortnightly sessions became the one hour where I could think strategically instead of reactively.',
		name: 'Anika Sharma',
		role: 'VP Operations, consumer goods'
	},
	{
		text: 'Worth every penny. I avoided at least two costly mistakes in our net zero roadmap.',
		name: "James O'Brien",
		role: 'Board member, financial services'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section
			id='testimonials'
			className='px-5 py-20 [background:var(--forest)] [color:var(--sage)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] opacity-80'>
						Testimonials
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1]'>
						What leaders say after working with Thrive
					</h2>
				</div>

				<div className='mt-12 grid gap-6 md:grid-cols-3'>
					{quotes.map(q => (
						<blockquote
							key={q.name}
							className='th-reveal rounded-2xl border border-[color:oklch(1_0_0/0.12)] p-6'
						>
							<p className='font-[family-name:var(--font-display)] italic leading-relaxed'>
								&ldquo;{q.text}&rdquo;
							</p>
							<footer className='mt-6 border-[color:oklch(1_0_0/0.12)] border-t pt-4'>
								<cite className='font-medium text-sm not-italic'>{q.name}</cite>
								<p className='text-xs opacity-70'>{q.role}</p>
							</footer>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	)
}
