const papers = [
	{
		date: 'Mar 2026',
		title: 'Adaptive depth reasoning in sparse MoE graphs',
		tag: 'NeurIPS preprint'
	},
	{
		date: 'Jan 2026',
		title: 'Episodic memory consolidation for long-horizon agents',
		tag: 'Lab note'
	},
	{
		date: 'Nov 2025',
		title: 'Holographic attention: locality without losing global context',
		tag: 'Paper'
	}
]

/** Future Payload mapping: researchFeed. */
export function Research() {
	return (
		<section id='research' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
							Research lab
						</span>
						<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
							From theory to synapse
						</h2>
					</div>
					<a
						href='#top'
						className='sy-reveal text-xs uppercase tracking-widest transition-colors [color:var(--mute)] hover:[color:var(--neon)]'
					>
						View all publications →
					</a>
				</div>

				<ul className='mt-12'>
					{papers.map(p => (
						<li
							key={p.title}
							className='sy-reveal group flex flex-col gap-2 border-[var(--line)] border-t py-6 last:border-b sm:flex-row sm:items-center sm:justify-between sm:gap-6'
						>
							<div>
								<time className='text-[11px] uppercase tracking-widest [color:var(--mute)]'>
									{p.date}
								</time>
								<h3 className='mt-2 font-[family-name:var(--font-display)] text-lg transition-colors sm:text-xl group-hover:[color:var(--neon)]'>
									{p.title}
								</h3>
							</div>
							<span className='w-fit rounded-full border border-[color-mix(in_oklch,var(--pulse)_35%,var(--line))] px-3 py-1 text-[10px] uppercase tracking-widest [color:var(--pulse)]'>
								{p.tag}
							</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
