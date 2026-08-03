/** Future Payload mapping: mastheadHero (foundry landing). */
export function Hero() {
	return (
		<section className='px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='flex items-center justify-between border-[var(--line)] border-b pb-4 text-xs uppercase tracking-[0.18em] [color:var(--mute)]'>
					<span>Independent type foundry</span>
					<span className='hidden sm:inline'>Zürich · Since 2011</span>
				</div>

				<div className='ty-reveal pt-10 sm:pt-14'>
					<div className='flex items-start gap-4'>
						<span
							aria-hidden
							className='mt-2 h-16 w-1 shrink-0 [background:var(--red)]'
						/>
						<div>
							<h1 className='font-[family-name:var(--font-display)] text-[clamp(2.5rem,9vw,5.5rem)] leading-[1.02] tracking-[-0.02em]'>
								Type drawn with conviction.
							</h1>
							<p className='mt-6 max-w-xl text-[var(--mute)] text-lg leading-relaxed'>
								Specimen-grade families for editorial, identity, and interface.
								Drawn in-house, licensed worldwide, tested on real pages.
							</p>
							<div className='mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4'>
								<a
									href='#specimens'
									className='inline-flex min-h-11 items-center justify-center px-6 text-sm transition-opacity [background:var(--red)] [color:var(--white)] hover:opacity-90'
								>
									Browse specimens
								</a>
								<a
									href='#licensing'
									className='inline-flex min-h-11 items-center justify-center border border-[var(--line)] px-6 text-sm transition-colors hover:border-[var(--ink)]'
								>
									View licensing
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
