/** Future Payload mapping: trialCta. */
export function Trial() {
	return (
		<section id='trial' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='me-reveal overflow-hidden rounded-sm border border-[var(--line)] px-6 py-12 [background:var(--slate)] sm:px-12 sm:py-16'>
					<div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center'>
						<div>
							<p className='text-xs uppercase tracking-[0.28em] [color:var(--blue)]'>
								Free trial
							</p>
							<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.75rem)] leading-[1.06] [color:var(--ice)]'>
								See your marketing emissions in 14 days.
							</h2>
							<p className='mt-4 max-w-lg text-base leading-relaxed opacity-75 [color:var(--ice)]'>
								Connect two data sources, get a live dashboard, and export your
								first board-ready report — no credit card required.
							</p>
							<ul className='mt-6 space-y-2 text-sm opacity-80 [color:var(--ice)]'>
								<li>✓ Guided onboarding with an ESG solutions architect</li>
								<li>✓ Sample CSRD export pack included</li>
								<li>✓ Migrate existing spreadsheets at no extra cost</li>
							</ul>
						</div>

						<form className='flex flex-col gap-4 rounded-sm border border-[color-mix(in_oklch,var(--ice)_15%,transparent)] p-6 [background:color-mix(in_oklch,var(--ice)_8%,var(--slate))]'>
							<label className='flex flex-col gap-1.5 text-sm'>
								<span className='[color:var(--ice)]'>Work email</span>
								<input
									type='email'
									placeholder='you@company.com'
									className='min-h-11 rounded-sm border border-[color-mix(in_oklch,var(--ice)_20%,transparent)] bg-transparent px-4 [color:var(--ice)] placeholder:opacity-50'
								/>
							</label>
							<label className='flex flex-col gap-1.5 text-sm'>
								<span className='[color:var(--ice)]'>Company</span>
								<input
									type='text'
									placeholder='Organisation name'
									className='min-h-11 rounded-sm border border-[color-mix(in_oklch,var(--ice)_20%,transparent)] bg-transparent px-4 [color:var(--ice)] placeholder:opacity-50'
								/>
							</label>
							<button
								type='button'
								className='inline-flex min-h-12 items-center justify-center rounded-sm text-sm transition-opacity [background:var(--blue)] [color:var(--ice)] hover:opacity-90'
							>
								Start free trial
							</button>
							<p className='text-center text-xs opacity-50 [color:var(--ice)]'>
								By signing up you agree to our terms and privacy policy.
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
