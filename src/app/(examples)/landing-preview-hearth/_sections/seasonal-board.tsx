const specials = [
	{
		dish: 'Charred leek & goat cheese',
		price: '€14',
		note: 'West Friesland',
		tilt: -0.4
	},
	{
		dish: 'Wood-oven lamb shoulder',
		price: '€28',
		note: '4hr braise',
		tilt: 0.3
	},
	{
		dish: 'Forced rhubarb tart',
		price: '€9',
		note: "Lin's pastry",
		tilt: -0.2
	},
	{ dish: 'Nettle soup', price: '€8', note: 'Foraged Tuesday', tilt: 0.5 }
]

/** Future Payload mapping: seasonalBoard. */
export function SeasonalBoard() {
	return (
		<section id='seasonal' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ht-reveal max-w-2xl'>
					<p className='font-medium text-sm [color:var(--ember)]'>
						This week on the board
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] leading-[1.15] [color:var(--wood)]'>
						Seasonal chalkboard
					</h2>
				</div>

				<div
					className='ht-reveal relative mt-10 overflow-hidden rounded-sm p-6 sm:p-10'
					style={{
						background:
							'linear-gradient(145deg, oklch(0.22 0.04 145), oklch(0.18 0.03 140))',
						boxShadow:
							'inset 0 2px 0 oklch(1 0 0 / 0.06), 4px 6px 24px oklch(0.2 0.03 55 / 0.25)'
					}}
				>
					<div
						aria-hidden
						className='pointer-events-none absolute inset-0 opacity-[0.04]'
						style={{
							backgroundImage:
								"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
						}}
					/>

					<p
						className='mb-8 font-[family-name:var(--font-display)] text-2xl italic [color:var(--cream)] sm:text-3xl'
						style={{ transform: 'rotate(-0.8deg)' }}
					>
						Spring specials — week 23
					</p>

					<ul className='space-y-5'>
						{specials.map(s => (
							<li
								key={s.dish}
								className='flex flex-wrap items-baseline justify-between gap-2 border-[color-mix(in_oklch,var(--cream)_12%,transparent)] border-b border-dashed pb-4 last:border-b-0'
								style={{ transform: `rotate(${s.tilt}deg)` }}
							>
								<div>
									<span
										className='font-[family-name:var(--font-display)] text-lg [color:var(--cream)] sm:text-xl'
										style={{ fontFamily: 'var(--font-display), cursive' }}
									>
										{s.dish}
									</span>
									<span className='ml-3 text-sm italic [color:var(--wheat)]/70'>
										{s.note}
									</span>
								</div>
								<span className='font-[family-name:var(--font-display)] text-xl [color:var(--wheat)]'>
									{s.price}
								</span>
							</li>
						))}
					</ul>

					<p
						className='mt-8 text-sm italic [color:var(--cream)]/60'
						style={{ transform: 'rotate(0.5deg)' }}
					>
						* Menu changes when the farmers call. No reservations needed for bar
						seats.
					</p>
				</div>
			</div>
		</section>
	)
}
