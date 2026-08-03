import { Star } from 'lucide-react'

const press = [
	{
		q: 'The best-sounding headphones you can buy this year, full stop.',
		a: 'The Verge'
	},
	{ q: 'Noise cancellation that genuinely silences the world.', a: 'Wired' },
	{ q: 'A masterclass in industrial design.', a: 'Monocle' }
]

/** Future Payload mapping: pressQuotes. */
export function Reviews() {
	return (
		<section className='border-[var(--line)] border-y px-6 py-24 sm:py-32'>
			<div className='mx-auto max-w-5xl'>
				<div className='apl-reveal flex items-center gap-3'>
					<div className='flex gap-0.5 [color:var(--accent)]'>
						{[0, 1, 2, 3, 4].map(s => (
							<Star key={s} className='h-5 w-5 fill-current' />
						))}
					</div>
					<span className='font-semibold text-lg'>4.9 / 5</span>
					<span className='text-[var(--mute)] text-sm'>
						from 12,400+ reviews
					</span>
				</div>
				<div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3'>
					{press.map(p => (
						<figure key={p.a} className='apl-reveal'>
							<blockquote className='font-medium text-xl leading-snug tracking-tight'>
								&ldquo;{p.q}&rdquo;
							</blockquote>
							<figcaption className='mt-4 text-[var(--mute)] text-sm'>
								— {p.a}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
