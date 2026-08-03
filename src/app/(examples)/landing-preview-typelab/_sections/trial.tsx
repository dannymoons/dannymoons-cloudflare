/** Future Payload mapping: trialRequestForm. Mobile-first, labelled. */
export function Trial() {
	return (
		<section
			id='trial'
			className='border-[var(--line)] border-t px-5 py-16 sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-xl'>
				<div className='ty-reveal mb-10 text-center'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						Trial fonts
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Test before you license
					</h2>
					<p className='mt-4 text-[var(--mute)] text-sm'>
						Full character set · Watermarked · Valid 30 days
					</p>
				</div>

				<form className='ty-reveal w-full space-y-6'>
					<div>
						<label
							htmlFor='ty-name'
							className='mb-2 block text-xs uppercase tracking-[0.14em] [color:var(--mute)]'
						>
							Name
						</label>
						<input
							id='ty-name'
							type='text'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors focus:border-[var(--red)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ty-email'
							className='mb-2 block text-xs uppercase tracking-[0.14em] [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='ty-email'
							type='email'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors focus:border-[var(--red)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ty-family'
							className='mb-2 block text-xs uppercase tracking-[0.14em] [color:var(--mute)]'
						>
							Family
						</label>
						<select
							id='ty-family'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors focus:border-[var(--red)]'
							defaultValue='grotesk'
						>
							<option value='grotesk'>Lab Grotesk</option>
							<option value='serif'>Lab Serif</option>
							<option value='mono'>Lab Mono</option>
							<option value='display'>Lab Display</option>
						</select>
					</div>

					<button
						type='button'
						className='min-h-12 w-full text-sm transition-opacity [background:var(--red)] [color:var(--white)] hover:opacity-90'
					>
						Request trial package
					</button>

					<p className='text-center text-[var(--mute)] text-xs'>
						Concept preview only — no files will be sent
					</p>
				</form>
			</div>
		</section>
	)
}
