/** Future Payload mapping: contactCta (foundry). */
export function Contact() {
	return (
		<section
			id='contact'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-32'
		>
			<div className='ty-reveal mx-auto max-w-3xl text-center'>
				<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
					Contact
				</p>
				<a
					href='mailto:licensing@typelab.ch'
					className='mt-6 block font-[family-name:var(--font-display)] text-[clamp(1.5rem,6vw,3.5rem)] leading-tight tracking-tight transition-colors hover:[color:var(--red)]'
				>
					licensing@typelab.ch
				</a>
				<div className='mx-auto mt-12 flex max-w-lg flex-col items-center justify-center gap-8 border-[var(--line)] border-t pt-10 text-[var(--mute)] text-sm sm:flex-row sm:gap-12'>
					<div>
						<div className='[color:var(--ink)]'>Studio</div>
						<div className='mt-1'>Rämistrasse 101, Zürich</div>
					</div>
					<div>
						<div className='[color:var(--ink)]'>Hours</div>
						<div className='mt-1'>Mon–Fri · 09:00–18:00 CET</div>
					</div>
				</div>
			</div>
		</section>
	)
}
