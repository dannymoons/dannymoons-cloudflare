/** Future Payload mapping: bookingForm (speakeasy, mobile-first). */
export function Reservations() {
	return (
		<section
			id='reservations'
			className='px-5 py-20 [background:var(--smoke)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-xl'>
				<div className='ho-reveal mb-10 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
						Reservations
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
						Claim your booth
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Walk-ins welcome after midnight · Booths held 15 minutes
					</p>
				</div>

				<form className='ho-reveal w-full space-y-6'>
					<div>
						<label
							htmlFor='ho-date'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Date
						</label>
						<input
							id='ho-date'
							type='date'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--cream)] focus:border-[var(--gold)]'
						/>
					</div>

					<div>
						<label
							htmlFor='ho-guests'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Guests
						</label>
						<select
							id='ho-guests'
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
							htmlFor='ho-time'
							className='mb-2 block text-[0.65rem] uppercase tracking-[0.18em] [color:var(--mute)]'
						>
							Arrival
						</label>
						<select
							id='ho-time'
							className='min-h-12 w-full border border-[var(--line)] bg-transparent px-4 text-base outline-none transition-colors [color:var(--cream)] focus:border-[var(--gold)]'
							defaultValue='22:00'
						>
							<option value='21:00'>21:00</option>
							<option value='22:00'>22:00</option>
							<option value='23:00'>23:00</option>
							<option value='00:00'>00:00</option>
						</select>
					</div>

					<button
						type='button'
						className='min-h-12 w-full text-sm uppercase tracking-[0.18em] transition-opacity [background:var(--gold)] [color:var(--velvet)] hover:opacity-90'
					>
						Request booth
					</button>

					<p className='text-center text-[0.65rem] [color:var(--mute)]'>
						Concept preview only — no booking will be processed
					</p>
				</form>
			</div>
		</section>
	)
}
