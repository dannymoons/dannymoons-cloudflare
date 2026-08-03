const sponsors = [
	'National Geographic',
	'WWF',
	'Canon Cine',
	'Patagonia Pro',
	'Ocean Conservancy',
	'Red Digital'
]

/** Future Payload mapping: sponsorStrip. */
export function Sponsors() {
	return (
		<section
			id='sponsors'
			className='border-[var(--line)] border-t px-5 py-16 sm:px-8'
		>
			<div className='mx-auto max-w-6xl text-center'>
				<p className='ks-reveal text-xs uppercase tracking-[0.24em] [color:var(--mute)]'>
					Expedition partners
				</p>
				<div className='mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4'>
					{sponsors.map(s => (
						<span
							key={s}
							className='ks-reveal font-[family-name:var(--font-display)] text-lg opacity-60 [color:var(--fog)]'
						>
							{s}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
