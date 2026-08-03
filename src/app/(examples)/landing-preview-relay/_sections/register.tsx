/** Future Payload mapping: registrationForm. Mobile-first, labelled. */
export function Register() {
	return (
		<section id='register' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-xl'>
				<div className='rl-reveal mb-8 text-center'>
					<p className='font-medium text-sm uppercase tracking-[0.28em] [color:var(--orange)]'>
						Register
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.95] [color:var(--black)]'>
						Secure your bib
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Early bird until 1 May · Transferable to another Relay race
					</p>
				</div>

				<form className='rl-reveal w-full space-y-5'>
					<div>
						<label
							htmlFor='rl-name'
							className='mb-2 block font-medium text-sm [color:var(--black)]'
						>
							Full name
						</label>
						<input
							id='rl-name'
							type='text'
							autoComplete='name'
							placeholder='As on ID'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--black)] focus:border-[var(--orange)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<div>
						<label
							htmlFor='rl-email'
							className='mb-2 block font-medium text-sm [color:var(--black)]'
						>
							Email
						</label>
						<input
							id='rl-email'
							type='email'
							autoComplete='email'
							placeholder='you@example.com'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--black)] focus:border-[var(--orange)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='rl-race'
								className='mb-2 block font-medium text-sm [color:var(--black)]'
							>
								Race
							</label>
							<select
								id='rl-race'
								defaultValue='trail'
								className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--black)] focus:border-[var(--orange)]'
							>
								<option value='city'>Relay City — €65</option>
								<option value='trail'>Relay Trail — €72</option>
								<option value='ultra'>Relay Ultra — €98</option>
							</select>
						</div>

						<div>
							<label
								htmlFor='rl-category'
								className='mb-2 block font-medium text-sm [color:var(--black)]'
							>
								Category
							</label>
							<select
								id='rl-category'
								defaultValue='open-m'
								className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--black)] focus:border-[var(--orange)]'
							>
								<option value='open-m'>Open Men</option>
								<option value='open-f'>Open Women</option>
								<option value='m40'>Men 40+</option>
								<option value='f40'>Women 40+</option>
							</select>
						</div>
					</div>

					<div>
						<label
							htmlFor='rl-club'
							className='mb-2 block font-medium text-sm [color:var(--black)]'
						>
							Running club{' '}
							<span className='font-normal [color:var(--mute)]'>
								(optional)
							</span>
						</label>
						<input
							id='rl-club'
							type='text'
							placeholder='Club name for results'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--black)] focus:border-[var(--orange)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<label className='flex min-h-12 cursor-pointer items-start gap-3 text-sm [color:var(--mute)]'>
						<input
							type='checkbox'
							className='mt-1 h-4 w-4 rounded-sm border-[var(--line)] accent-[var(--orange)]'
						/>
						<span>
							Add €10 charity donation to Mind Your Step (matched by Relay)
						</span>
					</label>

					<button
						type='button'
						className='min-h-12 w-full rounded-sm font-medium text-sm uppercase tracking-[0.1em] transition-opacity [background:var(--orange)] [color:var(--black)] hover:opacity-90'
					>
						Continue to payment
					</button>

					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview only — no registration will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
