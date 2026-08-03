import { Star } from 'lucide-react'

const quotes = [
	{
		q: 'We moved our whole team over in a weekend. It just gets out of the way.',
		a: 'Priya N.',
		r: 'Eng Lead, Vercel'
	},
	{
		q: 'The AI triage alone saves us hours every week. Genuinely magical.',
		a: 'Marco D.',
		r: 'CTO, Resend'
	},
	{
		q: 'Fastest tracker I have ever used. The command bar is addictive.',
		a: 'Sara K.',
		r: 'PM, Cal.com'
	},
	{
		q: 'Insights replaced two dashboards and a spreadsheet for us.',
		a: 'Liam O.',
		r: 'Founder, Raycast'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section className='mx-auto max-w-6xl px-gutter py-section'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='font-semibold text-3xl tracking-tight sm:text-4xl'>
					Loved by the teams that ship most
				</h2>
			</div>
			<div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2'>
				{quotes.map(t => (
					<figure
						key={t.a}
						className='rounded-xl border border-border bg-card p-6'
					>
						<div className='mb-3 flex gap-0.5 text-primary'>
							{[0, 1, 2, 3, 4].map(s => (
								<Star key={s} className='h-4 w-4 fill-current' />
							))}
						</div>
						<blockquote className='text-lg leading-relaxed'>
							&ldquo;{t.q}&rdquo;
						</blockquote>
						<figcaption className='mt-4 flex items-center gap-3'>
							<span className='grid h-9 w-9 place-items-center rounded-full bg-muted font-medium text-muted-foreground text-xs'>
								{t.a.slice(0, 1)}
							</span>
							<span>
								<span className='block font-medium text-sm'>{t.a}</span>
								<span className='block text-muted-foreground text-xs'>
									{t.r}
								</span>
							</span>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
