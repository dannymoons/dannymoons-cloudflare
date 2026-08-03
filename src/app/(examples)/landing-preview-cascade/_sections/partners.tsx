const partners = [
	'WPP',
	'Omnicom',
	'Publicis Groupe',
	'IPG',
	'Dentsu',
	'Havas',
	'Independent Agency Network',
	"4A's",
	'ISBA',
	'Ad Green',
	'CDP',
	'Sedex'
]

/** Future Payload mapping: partnerLogos. */
export function Partners() {
	return (
		<section
			id='partners'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--pine)_4%,var(--fog))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Partners &amp; networks
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Trusted by holding companies and independents alike.
					</h2>
				</div>

				<div className='ca-reveal mt-12 flex flex-wrap justify-center gap-3'>
					{partners.map(name => (
						<span
							key={name}
							className='rounded-sm border border-[var(--line)] px-4 py-2.5 text-sm [background:var(--fog)] [color:var(--ink)]'
						>
							{name}
						</span>
					))}
				</div>
			</div>
		</section>
	)
}
