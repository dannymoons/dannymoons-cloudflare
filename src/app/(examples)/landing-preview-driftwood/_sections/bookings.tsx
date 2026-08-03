/** Future Payload mapping: bookingForm (hotel, mobile-first). */
export function Bookings() {
	return (
		<section
			id='bookings'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--sea)_6%,var(--linen))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<div className='dw-reveal mb-10 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--terra)]'>
						Reservations
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ink)]'>
						Plan your stay
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Check-in from 15:00 · Check-out by 11:00 · Direct booking, best rate
					</p>
				</div>

				<form className='dw-reveal w-full space-y-6'>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
						<div>
							<label
								htmlFor='dw-checkin'
								className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
							>
								Arrival
							</label>
							<input
								id='dw-checkin'
								type='date'
								className='min-h-12 w-full border border-[var(--line)] px-4 text-base outline-none transition-colors [background:var(--linen)] [color:var(--ink)] focus:border-[var(--sea)]'
							/>
						</div>
						<div>
							<label
								htmlFor='dw-checkout'
								className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
							>
								Departure
							</label>
							<input
								id='dw-checkout'
								type='date'
								className='min-h-12 w-full border border-[var(--line)] px-4 text-base outline-none transition-colors [background:var(--linen)] [color:var(--ink)] focus:border-[var(--sea)]'
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor='dw-room'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Room
						</label>
						<select
							id='dw-room'
							className='min-h-12 w-full border border-[var(--line)] px-4 text-base outline-none transition-colors [background:var(--linen)] [color:var(--ink)] focus:border-[var(--sea)]'
							defaultValue='sea'
						>
							<option value='sea'>Sea Room</option>
							<option value='terrace'>Terrace Suite</option>
							<option value='loft'>Driftwood Loft</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='dw-guests'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Guests
						</label>
						<select
							id='dw-guests'
							className='min-h-12 w-full border border-[var(--line)] px-4 text-base outline-none transition-colors [background:var(--linen)] [color:var(--ink)] focus:border-[var(--sea)]'
							defaultValue='2'
						>
							<option value='1'>1 guest</option>
							<option value='2'>2 guests</option>
							<option value='3'>3 guests</option>
							<option value='4'>4 guests</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='dw-email'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Email
						</label>
						<input
							id='dw-email'
							type='email'
							placeholder='you@example.com'
							className='min-h-12 w-full border border-[var(--line)] px-4 text-base outline-none transition-colors [background:var(--linen)] [color:var(--ink)] focus:border-[var(--sea)] placeholder:[color:var(--mute)]'
						/>
					</div>

					<button
						type='button'
						className='min-h-12 w-full font-medium text-sm uppercase tracking-[0.16em] transition-opacity [background:var(--terra)] [color:var(--linen)] hover:opacity-90'
					>
						Request availability
					</button>

					<p className='text-center text-[0.65rem] [color:var(--mute)]'>
						Concept preview only — no booking will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
