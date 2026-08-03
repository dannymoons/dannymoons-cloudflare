/** Future Payload mapping: secretEntrance (password gate concept). */
export function Entrance() {
	return (
		<section
			id='entrance'
			className='border-[var(--line)] border-t px-5 py-20 [background:var(--smoke)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16'>
					<div className='ho-reveal'>
						<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
							The hidden door
						</span>
						<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
							Knock twice. Whisper once.
						</h2>
						<p className='mt-5 max-w-md text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
							Find the brass owl on Prinsengracht. Press the third brick from
							the left. When the peephole slides, give tonight&rsquo;s phrase.
						</p>
						<dl className='mt-8 space-y-4 border-[var(--line)] border-t pt-8 text-sm'>
							<div>
								<dt className='text-[0.65rem] uppercase tracking-[0.2em] [color:var(--gold)]'>
									Tonight&rsquo;s phrase
								</dt>
								<dd className='mt-2 font-[family-name:var(--font-display)] text-xl italic tracking-wide [color:var(--cream)]'>
									&ldquo;The clock strikes velvet&rdquo;
								</dd>
							</div>
							<div>
								<dt className='text-[0.65rem] uppercase tracking-[0.2em] [color:var(--gold)]'>
									Hours
								</dt>
								<dd className='mt-2 [color:var(--mute)]'>
									Wed–Sat · 21:00 until the owl sleeps
								</dd>
							</div>
						</dl>
					</div>

					<div className='ho-reveal'>
						<div className='relative overflow-hidden border border-[var(--line)] p-8 sm:p-10'>
							<div
								aria-hidden
								className='pointer-events-none absolute inset-0 opacity-30'
								style={{
									backgroundImage:
										'repeating-linear-gradient(45deg, transparent, transparent 8px, var(--line) 8px, var(--line) 9px)'
								}}
							/>
							<p className='relative text-[0.65rem] uppercase tracking-[0.24em] [color:var(--gold)]'>
								Guest verification
							</p>
							<form className='relative mt-6 space-y-5'>
								<div>
									<label
										htmlFor='ho-phrase'
										className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
									>
										Enter phrase
									</label>
									<input
										id='ho-phrase'
										type='password'
										placeholder='••••••••••••••••'
										className='min-h-12 w-full border border-[var(--line)] bg-[var(--velvet)]/50 px-4 font-[family-name:var(--font-display)] text-base italic tracking-wide outline-none transition-colors [color:var(--cream)] placeholder:opacity-40 focus:border-[var(--gold)]'
									/>
								</div>
								<button
									type='button'
									className='min-h-12 w-full border border-[var(--gold)] text-sm uppercase tracking-[0.18em] transition-colors [color:var(--gold)] hover:[background:var(--gold)] hover:[color:var(--velvet)]'
								>
									Reveal the door
								</button>
								<p className='text-center text-[0.65rem] [color:var(--mute)]'>
									Concept preview — phrase rotates nightly in production
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
