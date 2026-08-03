const tiers = [
	{
		name: 'Desktop',
		price: '€45',
		unit: 'per style',
		includes: [
			'Print & static digital',
			'Up to 5 workstations',
			'Webfont embedding not included'
		]
	},
	{
		name: 'Web',
		price: '€120',
		unit: 'per style / year',
		includes: [
			'Self-hosted WOFF2 files',
			'500k pageviews / month',
			'All weights in family bundle'
		]
	},
	{
		name: 'App',
		price: '€280',
		unit: 'per style',
		includes: [
			'iOS, Android, Electron',
			'Unlimited installs',
			'Lifetime updates'
		]
	}
]

/** Future Payload mapping: licensingTiers. */
export function Licensing() {
	return (
		<section
			id='licensing'
			className='px-5 py-16 [background:var(--ink)] [color:var(--white)] sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10 text-center'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						Licensing
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Clear terms, fair pricing
					</h2>
					<p className='mx-auto mt-4 max-w-md text-sm opacity-60'>
						Enterprise and broadcast licences available on request. Students
						receive 50% off with valid ID.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{tiers.map(t => (
						<article
							key={t.name}
							className='ty-reveal border border-[var(--line)] p-8'
						>
							<h3 className='font-[family-name:var(--font-display)] text-xl'>
								{t.name}
							</h3>
							<p className='mt-4'>
								<span className='font-[family-name:var(--font-display)] text-3xl'>
									{t.price}
								</span>
								<span className='ml-2 text-sm opacity-60'>{t.unit}</span>
							</p>
							<ul className='mt-8 space-y-3 border-[var(--line)] border-t pt-8 text-sm opacity-80'>
								{t.includes.map(item => (
									<li key={item} className='flex gap-2'>
										<span aria-hidden className='[color:var(--red)]'>
											—
										</span>
										{item}
									</li>
								))}
							</ul>
							<a
								href='#trial'
								className='mt-8 inline-flex min-h-10 w-full items-center justify-center border border-[var(--white)] text-sm transition-colors hover:[background:var(--white)] hover:[color:var(--ink)]'
							>
								Get started
							</a>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
