/** Future Payload mapping: pledgeForm. */
export function Pledge() {
	return (
		<section
			id='pledge'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--leaf)_6%,var(--sand))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-lg'>
				<div className='cp-reveal text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--earth)]'>
						Join the movement
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,4vw,2.75rem)]'>
						Sign the regeneration pledge
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)]'>
						Commit to designing for circularity, sourcing regeneratively, and
						measuring what you restore. Individual and organisational
						signatories welcome.
					</p>
				</div>

				<form className='cp-reveal mt-8 space-y-4' action='#' method='post'>
					<div>
						<label
							htmlFor='pledge-name'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Full name
						</label>
						<input
							id='pledge-name'
							type='text'
							name='name'
							autoComplete='name'
							required
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-[var(--sand)] px-4 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<div>
						<label
							htmlFor='pledge-email'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='pledge-email'
							type='email'
							name='email'
							autoComplete='email'
							required
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-[var(--sand)] px-4 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<div>
						<label
							htmlFor='pledge-org'
							className='mb-1.5 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Organisation (optional)
						</label>
						<input
							id='pledge-org'
							type='text'
							name='organisation'
							autoComplete='organization'
							className='min-h-12 w-full rounded-lg border border-[var(--line)] bg-[var(--sand)] px-4 text-sm outline-none focus:border-[var(--leaf)]'
						/>
					</div>
					<label className='flex items-start gap-3 text-sm leading-relaxed [color:var(--mute)]'>
						<input
							type='checkbox'
							name='commit'
							required
							className='mt-1 h-4 w-4 shrink-0 accent-[var(--earth)]'
						/>
						I commit to prioritising regeneration over extraction in my work and
						consumption choices.
					</label>
					<button
						type='submit'
						className='min-h-12 w-full rounded-full [background:var(--earth)] [color:var(--sand)]'
					>
						Sign the pledge
					</button>
				</form>
			</div>
		</section>
	)
}
