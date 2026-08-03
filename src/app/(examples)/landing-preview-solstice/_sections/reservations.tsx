/** Future Payload mapping: bookingForm. Mobile-first, labelled. */
export function Reservations() {
	return (
		<section
			id='reservations'
			className='px-5 py-20 [background:var(--burgundy)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<div className='so-reveal mb-10 text-center'>
					<span className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Reservations
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] font-light text-[clamp(2rem,5vw,3.5rem)] [color:var(--cream)]'>
						Reserve your evening
					</h2>
					<p className='mt-4 text-sm [color:var(--cream)]/60'>
						Tables released 60 days in advance · Cancellation within 48 hours
					</p>
				</div>

				<form className='so-reveal w-full space-y-6'>
					<div>
						<label
							htmlFor='so-date'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Date
						</label>
						<input
							id='so-date'
							type='date'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--cream)] focus:border-[var(--gold)]'
						/>
					</div>

					<div>
						<label
							htmlFor='so-guests'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Guests
						</label>
						<select
							id='so-guests'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--cream)] focus:border-[var(--gold)]'
							defaultValue='2'
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
							htmlFor='so-time'
							className='mb-2 block text-xs uppercase tracking-[0.16em] [color:var(--mute)]'
						>
							Time
						</label>
						<select
							id='so-time'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--cream)] focus:border-[var(--gold)]'
							defaultValue='19:00'
						>
							<option value='18:30'>18:30</option>
							<option value='19:00'>19:00</option>
							<option value='21:00'>21:00</option>
							<option value='21:30'>21:30</option>
						</select>
					</div>

					<button
						type='button'
						className='min-h-12 w-full text-sm uppercase tracking-[0.16em] transition-opacity [background:var(--gold)] [color:var(--noir)] hover:opacity-90'
					>
						Request reservation
					</button>

					<p className='text-center text-xs [color:var(--mute)]'>
						Concept preview only — no booking will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
