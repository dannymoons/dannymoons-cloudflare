/** Future Payload mapping: assessmentCta. */
export function Assessment() {
	return (
		<section
			id='assessment'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal overflow-hidden rounded-sm border border-[var(--line)] px-6 py-12 [background:var(--forest)] sm:px-12 sm:py-16'>
					<div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
						<div>
							<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
								Free assessment
							</p>
							<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.75rem)] leading-[1.06] [color:var(--cream)]'>
								How ready is your company for B Corp?
							</h2>
							<p className='mt-4 max-w-lg text-base leading-relaxed opacity-80 [color:var(--cream)]'>
								Our 45-minute readiness review estimates your current B Impact
								Score, identifies quick wins, and maps a realistic certification
								timeline — no obligation.
							</p>
							<ul className='mt-6 space-y-2 text-sm opacity-75 [color:var(--cream)]'>
								<li>✓ Score projection across all five impact pillars</li>
								<li>✓ Gap analysis with prioritised action items</li>
								<li>✓ Timeline and investment estimate</li>
							</ul>
						</div>

						<form className='flex flex-col gap-4 rounded-sm border border-[color-mix(in_oklch,var(--cream)_15%,transparent)] p-6 [background:color-mix(in_oklch,var(--cream)_8%,var(--forest))]'>
							<label className='flex flex-col gap-1.5 text-sm'>
								<span className='[color:var(--cream)]'>Company name</span>
								<input
									type='text'
									placeholder='Your organisation'
									className='min-h-11 rounded-sm border border-[color-mix(in_oklch,var(--cream)_20%,transparent)] bg-transparent px-4 [color:var(--cream)] placeholder:opacity-50'
								/>
							</label>
							<label className='flex flex-col gap-1.5 text-sm'>
								<span className='[color:var(--cream)]'>Work email</span>
								<input
									type='email'
									placeholder='you@company.com'
									className='min-h-11 rounded-sm border border-[color-mix(in_oklch,var(--cream)_20%,transparent)] bg-transparent px-4 [color:var(--cream)] placeholder:opacity-50'
								/>
							</label>
							<label className='flex flex-col gap-1.5 text-sm'>
								<span className='[color:var(--cream)]'>Company size</span>
								<select className='min-h-11 rounded-sm border border-[color-mix(in_oklch,var(--cream)_20%,transparent)] bg-transparent px-4 [color:var(--cream)]'>
									<option value=''>Select range</option>
									<option value='1-50'>1–50 employees</option>
									<option value='51-250'>51–250 employees</option>
									<option value='251-1000'>251–1,000 employees</option>
									<option value='1000+'>1,000+ employees</option>
								</select>
							</label>
							<button
								type='button'
								className='inline-flex min-h-12 items-center justify-center rounded-sm text-sm transition-opacity [background:var(--gold)] [color:var(--ink)] hover:opacity-90'
							>
								Book free assessment
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
