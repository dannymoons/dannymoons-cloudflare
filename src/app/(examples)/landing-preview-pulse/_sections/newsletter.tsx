import { Bolt } from 'lucide-react'

/** Future Payload mapping: newsletterSignup. */
export function Newsletter() {
	return (
		<section className='px-5 py-16 sm:px-8'>
			<div className='border-4 border-[var(--acid)] p-8 sm:p-12'>
				<h2 className='max-w-xl font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.5rem)] leading-[0.95]'>
					JOIN THE <span className='[color:var(--acid)]'>VOLT SQUAD</span>
				</h2>
				<p className='mt-4 max-w-md font-semibold text-lg'>
					Drops, discounts and chaos straight to your inbox. No spam, just
					voltage.
				</p>
				<form
					className='mt-8 flex flex-col gap-3 sm:flex-row'
					aria-label='Newsletter'
				>
					<input
						type='email'
						placeholder='you@chaos.gg'
						className='w-full border-2 border-[var(--paper)] px-5 py-3 font-[family-name:var(--font-mono)] text-base outline-none [background:transparent] [color:var(--paper)] focus:border-[var(--acid)] sm:max-w-sm placeholder:[color:var(--paper)]/40'
					/>
					<button
						type='button'
						className='inline-flex items-center justify-center gap-2 border-2 border-[var(--acid)] px-6 py-3 font-[family-name:var(--font-display)] text-xl transition-transform duration-200 [background:var(--acid)] [color:var(--void)] hover:scale-105'
					>
						SIGN ME UP <Bolt className='h-5 w-5' />
					</button>
				</form>
			</div>
		</section>
	)
}
