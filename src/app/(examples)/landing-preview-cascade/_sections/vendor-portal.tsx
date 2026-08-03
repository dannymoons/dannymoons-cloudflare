/** Future Payload mapping: vendorPortal. */
export function VendorPortal() {
	return (
		<section id='vendor-portal' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='grid gap-10 lg:grid-cols-2 lg:items-center'>
					<div className='ca-reveal overflow-hidden rounded-sm border border-[var(--line)]'>
						{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
						<img
							src='https://picsum.photos/seed/cascade-vendor/640/480'
							alt='Vendor portal dashboard for submitting sustainability credentials'
							className='h-full w-full object-cover'
						/>
					</div>

					<div className='ca-reveal'>
						<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
							Vendor portal
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
							Onboard suppliers without the email chaos.
						</h2>
						<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
							Vendors self-serve cert uploads, emissions data, and material
							specs through a guided portal — with automated reminders and
							validation rules you configure once.
						</p>
						<div className='mt-8 grid gap-4 sm:grid-cols-2'>
							<div className='rounded-sm border border-[var(--line)] p-4'>
								<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--pine)]'>
									78%
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>
									faster vendor onboarding vs. manual collection
								</p>
							</div>
							<div className='rounded-sm border border-[var(--line)] p-4'>
								<p className='font-[family-name:var(--font-display)] text-2xl [color:var(--pine)]'>
									12 lang
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>
									portal localisation for global production networks
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
