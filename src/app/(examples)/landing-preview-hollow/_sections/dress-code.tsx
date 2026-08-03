const rules = [
	{
		label: 'Encouraged',
		items: [
			'Tailored suits & evening wear',
			'Art deco accessories',
			'Polished shoes'
		]
	},
	{
		label: 'Discouraged',
		items: ['Athletic wear', 'Visible logos', 'Flash photography']
	}
]

/** Future Payload mapping: dressCodePolicy. */
export function DressCode() {
	return (
		<section id='dress-code' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-4xl'>
				<div className='ho-reveal text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
						Dress code
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
						Dress like the room
					</h2>
					<p className='mx-auto mt-4 max-w-md text-sm [color:var(--mute)]'>
						Hollow is a sanctuary of style. We reserve the right to decline
						entry to preserve the atmosphere.
					</p>
				</div>

				<div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2'>
					{rules.map(r => (
						<div
							key={r.label}
							className='ho-reveal border border-[var(--line)] p-8 text-center sm:p-10'
						>
							<h3 className='font-[family-name:var(--font-display)] text-lg tracking-[0.08em] [color:var(--gold)]'>
								{r.label}
							</h3>
							<ul className='mt-6 space-y-3 text-sm [color:var(--mute)]'>
								{r.items.map(item => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
