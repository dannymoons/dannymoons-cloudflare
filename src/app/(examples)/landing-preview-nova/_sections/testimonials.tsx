import { Reveal } from './motion'

const quotes = [
	{
		q: 'We cut our inference bill by 70% and p99 latency in half. The migration took an afternoon.',
		a: 'Mara Velez',
		r: 'Head of ML, Quantio'
	},
	{
		q: 'It feels illegal how fast cold starts are. Our agents went from sluggish to instant.',
		a: 'Tom Adeyemi',
		r: 'Founder, Drift AI'
	},
	{
		q: 'Finally a platform where the GPUs are actually there when we need to scale.',
		a: 'Lena Ostrowski',
		r: 'CTO, Vectara'
	}
]

/** Future Payload mapping: testimonialGrid. */
export function Testimonials() {
	return (
		<section className='px-5 py-24 sm:px-8'>
			<Reveal>
				<h2 className='max-w-2xl text-balance font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em]'>
					Teams ship faster on Aether.
				</h2>
			</Reveal>
			<div className='mt-12 grid grid-cols-1 gap-4 md:grid-cols-3'>
				{quotes.map((t, i) => (
					<Reveal key={t.a} delay={i * 0.08}>
						<figure className='flex h-full flex-col justify-between rounded-2xl border border-[var(--line)] p-7 backdrop-blur-sm [background:color-mix(in_oklch,var(--space-2)_55%,transparent)]'>
							<blockquote className='text-lg leading-relaxed'>
								&ldquo;{t.q}&rdquo;
							</blockquote>
							<figcaption className='mt-6'>
								<div className='font-semibold'>{t.a}</div>
								<div className='font-[family-name:var(--font-mono)] text-xs [color:var(--ink-soft)]'>
									{t.r}
								</div>
							</figcaption>
						</figure>
					</Reveal>
				))}
			</div>
		</section>
	)
}
