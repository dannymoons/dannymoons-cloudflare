import { ChevronRight } from 'lucide-react'

/** Future Payload mapping: ctaProduct. */
export function CtaBuy() {
	return (
		<section id='buy' className='px-6 py-28 text-center sm:py-40'>
			<h2 className='apl-reveal font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.04em]'>
				Aura
			</h2>
			<p className='apl-reveal mt-3 text-[clamp(1.1rem,2.5vw,1.5rem)] [color:var(--mute)]'>
				From €399 or €33.25/mo. for 12 mo.
			</p>
			<div className='apl-reveal mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row'>
				<a
					href='#buy'
					className='inline-flex items-center justify-center rounded-full px-7 py-3 font-medium text-white transition-opacity [background:var(--accent)] hover:opacity-90'
				>
					Buy now
				</a>
				<a
					href='#sound'
					className='inline-flex items-center text-[var(--accent)] hover:underline'
				>
					Compare models <ChevronRight className='h-4 w-4' />
				</a>
			</div>
		</section>
	)
}
