/** Future Payload mapping: bookingForm. Mobile-first, labelled. */
export function Reservations() {
	return (
		<section id='reservations' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-xl'>
				<div className='ht-reveal mb-8 text-center'>
					<span className='font-medium text-sm [color:var(--ember)]'>
						Reservations
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--wood)]'>
						Save yourself a seat
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Walk-ins welcome at the bar · Patio is first-come · Groups of 6+
						please call
					</p>
				</div>

				<form className='ht-reveal w-full space-y-5'>
					<div>
						<label
							htmlFor='ht-name'
							className='mb-2 block font-medium text-sm [color:var(--wood)]'
						>
							Name
						</label>
						<input
							id='ht-name'
							type='text'
							autoComplete='name'
							placeholder='Your name'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--wood)] focus:border-[var(--ember)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ht-date'
							className='mb-2 block font-medium text-sm [color:var(--wood)]'
						>
							Date
						</label>
						<input
							id='ht-date'
							type='date'
							className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--wood)] focus:border-[var(--ember)]'
						/>
					</div>

					<div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='ht-guests'
								className='mb-2 block font-medium text-sm [color:var(--wood)]'
							>
								Guests
							</label>
							<select
								id='ht-guests'
								defaultValue='2'
								className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--wood)] focus:border-[var(--ember)]'
							>
								<option value='1'>1 guest</option>
								<option value='2'>2 guests</option>
								<option value='3'>3 guests</option>
								<option value='4'>4 guests</option>
								<option value='5'>5 guests</option>
								<option value='6'>6 guests</option>
							</select>
						</div>

						<div>
							<label
								htmlFor='ht-time'
								className='mb-2 block font-medium text-sm [color:var(--wood)]'
							>
								Time
							</label>
							<select
								id='ht-time'
								defaultValue='19:00'
								className='min-h-12 w-full rounded-sm border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--wood)] focus:border-[var(--ember)]'
							>
								<option value='12:00'>12:00</option>
								<option value='12:30'>12:30</option>
								<option value='18:00'>18:00</option>
								<option value='18:30'>18:30</option>
								<option value='19:00'>19:00</option>
								<option value='19:30'>19:30</option>
								<option value='20:00'>20:00</option>
							</select>
						</div>
					</div>

					<div>
						<label
							htmlFor='ht-notes'
							className='mb-2 block font-medium text-sm [color:var(--wood)]'
						>
							Notes{' '}
							<span className='font-normal [color:var(--mute)]'>
								(optional)
							</span>
						</label>
						<textarea
							id='ht-notes'
							rows={3}
							placeholder='High chair, patio if possible, birthday…'
							className='w-full rounded-sm border border-[var(--line)] bg-transparent px-4 py-3 text-base outline-none transition-colors [color:var(--wood)] focus:border-[var(--ember)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<button
						type='button'
						className='min-h-12 w-full rounded-sm font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--cream)] hover:opacity-90'
					>
						Request table
					</button>

					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview only — no booking will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
