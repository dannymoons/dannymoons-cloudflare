import { ArrowRight } from 'lucide-react'

import { Reveal } from './motion'

/** Future Payload mapping: ctaGlow. */
export function Cta() {
	return (
		<section id='cta' className='px-5 pb-28 sm:px-8'>
			<Reveal>
				<div className='relative overflow-hidden rounded-3xl border border-[var(--line)] px-6 py-20 text-center sm:py-28'>
					<div
						aria-hidden
						className='nv-mesh pointer-events-none absolute inset-0 -z-10'
						style={{
							background:
								'radial-gradient(50% 80% at 30% 20%, oklch(0.68 0.22 300 / 0.4), transparent 70%),' +
								'radial-gradient(50% 80% at 80% 80%, oklch(0.84 0.15 200 / 0.35), transparent 70%)'
						}}
					/>
					<h2 className='mx-auto max-w-2xl text-balance font-bold text-[clamp(2.25rem,6vw,4.5rem)] leading-[1] tracking-[-0.03em]'>
						Ship your model tonight.
					</h2>
					<p className='mx-auto mt-5 max-w-md leading-relaxed [color:var(--ink-soft)]'>
						Free tier includes 50 GPU-hours. No card required.
					</p>
					<a
						href='#cta'
						className='group mt-9 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 [background:var(--ink)] [color:var(--space)] hover:scale-105'
					>
						Get started free
						<ArrowRight className='h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5' />
					</a>
				</div>
			</Reveal>
		</section>
	)
}
