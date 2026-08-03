const clients = [
	'Studio Verdant',
	'Carbon & Co.',
	'Lowprint Digital',
	'Meridian Creative',
	'Northshore Agency',
	'Brightpath Media'
]

/** Future Payload mapping: clientLogos. */
export function Clients() {
	return (
		<section id='clients' className='px-5 py-16 sm:px-8'>
			<div className='mx-auto max-w-6xl'>
				<p className='gb-reveal text-center text-xs uppercase tracking-[0.24em] [color:var(--mute)]'>
					Trusted by 400+ creative agencies
				</p>
				<div className='gb-reveal mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
					{clients.map(c => (
						<span
							key={c}
							className='font-[family-name:var(--font-display)] font-semibold text-sm opacity-40 transition-opacity hover:opacity-70 sm:text-base'
						>
							{c}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
