import { Star } from 'lucide-react'

const reviews = [
	{
		q: 'Tastes like a lightning bolt. I cleared my whole backlog.',
		a: '@devgremlin'
	},
	{ q: 'Replaced my third coffee. Never looked back.', a: '@nightshift_nina' },
	{ q: 'The lime one is illegal levels of good.', a: '@maxoverdrive' }
]

/** Future Payload mapping: testimonialGrid. */
export function Reviews() {
	return (
		<section id='hype' className='px-5 py-16 sm:px-8'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
				{reviews.map(t => (
					<figure
						key={t.a}
						className='vc-pop border-2 border-[var(--paper)]/20 p-6'
					>
						<div className='mb-3 flex gap-1 [color:var(--acid)]'>
							{[0, 1, 2, 3, 4].map(s => (
								<Star key={s} className='h-4 w-4 fill-current' />
							))}
						</div>
						<blockquote className='font-semibold text-xl leading-snug'>
							&ldquo;{t.q}&rdquo;
						</blockquote>
						<figcaption className='mt-4 font-[family-name:var(--font-mono)] text-sm [color:var(--cyan)]'>
							{t.a}
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	)
}
