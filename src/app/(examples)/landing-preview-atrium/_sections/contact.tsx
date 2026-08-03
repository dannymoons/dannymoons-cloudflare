import { ArrowUpRight } from 'lucide-react'

/** Future Payload mapping: contactCta. */
export function Contact() {
	return (
		<section id='contact' className='px-5 py-24 text-center sm:px-8 sm:py-36'>
			<div className='mx-auto max-w-4xl'>
				<span className='at-reveal mb-8 block text-xs uppercase tracking-[0.3em] [color:var(--gold)]'>
					New commissions
				</span>
				<p className='at-reveal mb-6 text-sm uppercase tracking-[0.2em] [color:var(--concrete)]'>
					For project enquiries
				</p>
				<a
					href='mailto:studio@atrium.dk'
					className='at-reveal inline-flex items-center gap-3 font-[family-name:var(--font-display)] font-bold text-[clamp(1.75rem,6vw,4.5rem)] uppercase leading-[0.95] tracking-[-0.02em] underline-offset-8 transition-colors hover:[color:var(--gold)]'
				>
					studio@atrium.dk
					<ArrowUpRight className='h-[0.85em] w-[0.85em]' />
				</a>
				<p className='at-reveal mt-10 text-sm [color:var(--concrete)]'>
					Nordhavn, Copenhagen — by appointment
				</p>
			</div>
		</section>
	)
}
