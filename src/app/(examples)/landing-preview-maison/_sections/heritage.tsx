const milestones = [
	{
		year: '1924',
		text: 'Claire Lérins opens her first atelier on Rue du Faubourg Saint-Honoré.'
	},
	{
		year: '1947',
		text: 'Presented at the first post-war Paris couture week — twelve looks, one standing ovation.'
	},
	{
		year: '1982',
		text: 'Granted official haute couture designation by the Chambre Syndicale.'
	},
	{
		year: '2008',
		text: 'Milan maison opens on Via Montenapoleone; Tokyo follows in 2015.'
	},
	{
		year: '2026',
		text: 'Centenary collection debuts — a return to the house\u2019s founding silhouettes.'
	}
]

/** Future Payload mapping: timeline. */
export function Heritage() {
	return (
		<section className='border-[var(--line)] border-y px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-3xl'>
				<p className='ml-reveal text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
					Heritage
				</p>
				<h2 className='mt-3 ml-reveal font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)]'>
					A century of craft
				</h2>
				<ul className='mt-12 space-y-0'>
					{milestones.map(m => (
						<li
							key={m.year}
							className='ml-reveal flex gap-6 border-[var(--line)] border-b py-8 last:border-0'
						>
							<span className='shrink-0 font-[family-name:var(--font-display)] text-2xl [color:var(--gold)]'>
								{m.year}
							</span>
							<p className='leading-relaxed [color:var(--mute)]'>{m.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
