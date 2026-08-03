/** Future Payload mapping: ctaSplit. */
export function ProBono() {
	return (
		<section
			id='pro-bono'
			className='px-5 py-20 [background:var(--slate)] [color:var(--parchment)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16'>
				<div className='ax-reveal'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Pro bono
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06]'>
						Counsel for those without means
					</h2>
					<p className='mt-4 text-base leading-relaxed opacity-80'>
						Each partner dedicates eighty hours annually to matters referred
						through LawWorks and the Bar Pro Bono Unit — housing disrepair,
						asylum appeals, and small charity governance disputes.
					</p>
					<p className='mt-4 text-sm opacity-60'>
						Referrals accepted on the first Wednesday of each month. Capacity is
						limited; urgent applications reviewed within five days.
					</p>
				</div>

				<div className='ax-reveal rounded-sm border border-[var(--parchment)]/15 p-6 sm:p-8'>
					<h3 className='font-[family-name:var(--font-display)] text-xl'>
						Submit a referral
					</h3>
					<p className='mt-2 text-sm opacity-75'>
						For accredited advice agencies and court duty schemes only.
					</p>
					<form className='mt-6 flex flex-col gap-4'>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='opacity-75'>Organisation</span>
							<input
								type='text'
								placeholder='Law centre or charity name'
								className='min-h-11 rounded-sm border border-[var(--parchment)]/20 bg-transparent px-4 text-[var(--parchment)] placeholder:opacity-40'
							/>
						</label>
						<label className='flex flex-col gap-1.5 text-sm'>
							<span className='opacity-75'>Matter summary</span>
							<textarea
								rows={3}
								placeholder='Brief description of the legal issue'
								className='rounded-sm border border-[var(--parchment)]/20 bg-transparent px-4 py-3 text-[var(--parchment)] placeholder:opacity-40'
							/>
						</label>
						<button
							type='button'
							className='inline-flex min-h-11 items-center justify-center rounded-sm px-6 text-sm transition-opacity [background:var(--copper)] [color:var(--stone)] hover:opacity-90'
						>
							Send referral
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
