const therapists = [
	{
		name: 'Dr. Elena Vasquez',
		credentials: 'DPT, OCS · Orthopaedic specialist',
		seed: 'restore-t1'
	},
	{
		name: 'Marcus Chen',
		credentials: 'MPT, CSCS · Sports rehabilitation',
		seed: 'restore-t2'
	},
	{
		name: 'Dr. Priya Sharma',
		credentials: 'DPT, NCS · Neurological & vestibular',
		seed: 'restore-t3'
	},
	{
		name: 'James Okonkwo',
		credentials: 'DPT, Cert. MDT · Manual therapy & spine',
		seed: 'restore-t4'
	}
]

/** Future Payload mapping: teamGrid. */
export function Therapists() {
	return (
		<section
			id='therapists'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Clinical team
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						Therapists you can trust
					</h2>
					<p className='mt-4 leading-relaxed [color:var(--mute)]'>
						Board-certified clinicians with advanced fellowships in
						orthopaedics, sports medicine, and neurological rehabilitation.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{therapists.map(t => (
						<figure key={t.seed} className='rs-reveal'>
							<div className='aspect-[3/4] overflow-hidden rounded-2xl [background:var(--sky)]/40'>
								{/* biome-ignore lint/performance/noImgElement: concept preview placeholder */}
								<img
									src={`https://picsum.photos/seed/${t.seed}/480/640`}
									alt={t.name}
									className='h-full w-full object-cover'
								/>
							</div>
							<figcaption className='mt-4'>
								<p className='font-[family-name:var(--font-display)] text-lg [color:var(--slate)]'>
									{t.name}
								</p>
								<p className='mt-1 text-sm [color:var(--mute)]'>
									{t.credentials}
								</p>
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	)
}
