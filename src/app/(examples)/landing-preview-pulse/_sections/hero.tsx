import { Zap } from 'lucide-react'

/** Future Payload mapping: heroPoster (bold). */
export function Hero() {
	return (
		<section className='relative px-5 pt-10 pb-20 sm:px-8'>
			<div
				aria-hidden
				className='vc-spin pointer-events-none absolute top-10 right-6 hidden h-40 w-40 place-items-center rounded-full [background:var(--magenta)] [color:var(--paper)] sm:grid'
			>
				<span className='text-center font-[family-name:var(--font-mono)] text-[10px] uppercase leading-tight tracking-widest'>
					zero · sugar · zero · sugar ·
				</span>
			</div>

			<h1 className='vc-pop font-[family-name:var(--font-display)] text-[clamp(3.5rem,16vw,13rem)] leading-[0.82] tracking-[-0.01em]'>
				<span className='block'>FUEL</span>
				<span className='block [color:var(--acid)]'>THE</span>
				<span className='block italic [color:var(--magenta)]'>CHAOS.</span>
			</h1>

			<div className='vc-pop mt-10 flex flex-col gap-6 [animation-delay:0.15s] sm:flex-row sm:items-end sm:justify-between'>
				<p className='max-w-md font-semibold text-lg leading-snug'>
					200mg of caffeine. Zero sugar. One mission: keep you wired, loud and
					absolutely unstoppable.
				</p>
				<a
					href='#flavors'
					className='inline-flex w-fit items-center gap-2 border-2 border-[var(--paper)] px-6 py-3 font-[family-name:var(--font-display)] text-2xl transition-colors duration-200 hover:[background:var(--paper)] hover:[color:var(--void)]'
				>
					TASTE THE VOLTAGE <Zap className='h-5 w-5' />
				</a>
			</div>
		</section>
	)
}
