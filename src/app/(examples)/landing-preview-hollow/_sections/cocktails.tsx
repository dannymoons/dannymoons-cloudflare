const cocktails = [
	{
		name: 'The Hollow Manhattan',
		spirit: 'Rye · Vermouth · Black walnut bitters',
		note: 'Stirred twelve seconds. Served in a chilled coupette with a singed orange peel.'
	},
	{
		name: 'Velvet Old Fashioned',
		spirit: 'Bourbon · Demerara · Angostura · Smoked salt',
		note: 'Our house riff — richer, darker, finished with a whisper of cedar smoke.'
	},
	{
		name: 'Midnight Sour',
		spirit: 'Mezcal · Lemon · Velvet falernum · Egg white',
		note: 'Art deco sour. Foam like candle wax, rim dusted with gold flake.'
	},
	{
		name: 'The Peephole',
		spirit: 'Gin · Chartreuse · Lime · Cucumber',
		note: 'Bright counterpoint to the room. Only on the list after midnight.'
	}
]

/** Future Payload mapping: menuGrouped (cocktail list). */
export function Cocktails() {
	return (
		<section id='cocktails' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-4xl'>
				<div className='ho-reveal mb-12 text-center'>
					<span className='text-[0.65rem] uppercase tracking-[0.32em] [color:var(--gold)]'>
						Signature pours
					</span>
					<h2 className='mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] tracking-[0.06em] [color:var(--cream)]'>
						The list
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						All stirred or shaken to order · No vodka sodas, no apologies
					</p>
				</div>

				<ul className='divide-y divide-[var(--line)]'>
					{cocktails.map(c => (
						<li key={c.name} className='ho-reveal py-8 first:pt-0 last:pb-0'>
							<div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
								<h3 className='font-[family-name:var(--font-display)] text-xl tracking-[0.04em] [color:var(--cream)] sm:text-2xl'>
									{c.name}
								</h3>
								<span className='shrink-0 text-[0.65rem] uppercase tracking-[0.16em] [color:var(--gold)]'>
									€16
								</span>
							</div>
							<p className='mt-2 text-sm [color:var(--gold)]/80'>{c.spirit}</p>
							<p className='mt-3 text-sm leading-relaxed [color:var(--mute)]'>
								{c.note}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
