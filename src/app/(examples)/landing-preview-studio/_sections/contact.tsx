/** Future Payload mapping: contactCta. */
export function Contact() {
	return (
		<section id='contact' className='px-6 py-32 sm:px-10 sm:py-44'>
			<div className='mrd-reveal text-center'>
				<span className='text-[var(--ink-soft)] text-xs uppercase tracking-[0.25em]'>
					Let&rsquo;s build something quiet
				</span>
				<a
					href='mailto:studio@meridian.archi'
					className='mt-6 block font-[family-name:var(--font-display)] font-light text-[clamp(2rem,8vw,6.5rem)] leading-none tracking-[-0.02em] transition-colors duration-300 hover:text-[var(--clay)]'
				>
					studio@meridian.archi
				</a>
				<div className='mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-8 border-[var(--line)] border-t pt-10 text-[var(--ink-soft)] text-sm sm:flex-row sm:gap-16'>
					<div>
						<div className='text-[var(--ink)]'>Lisboa</div>
						<div className='mt-1'>Rua do Século 42</div>
					</div>
					<div>
						<div className='text-[var(--ink)]'>Utrecht</div>
						<div className='mt-1'>Oudegracht 187</div>
					</div>
					<div>
						<div className='text-[var(--ink)]'>Social</div>
						<div className='mt-1'>Instagram — LinkedIn</div>
					</div>
				</div>
			</div>
		</section>
	)
}
