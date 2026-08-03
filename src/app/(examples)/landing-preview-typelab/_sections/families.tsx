const families = [
	{
		name: 'Lab Grotesk',
		category: 'Sans serif',
		styles: '12',
		desc: 'Neutral grotesk with Swiss proportions. Built for UI and long-form editorial.'
	},
	{
		name: 'Lab Serif',
		category: 'Serif',
		styles: '8',
		desc: 'High-contrast transitional face. Crisp at display sizes, calm in text.'
	},
	{
		name: 'Lab Mono',
		category: 'Monospace',
		styles: '4',
		desc: 'Four-width coding face with ligatures and slashed zero. Optimised for 14px.'
	},
	{
		name: 'Lab Display',
		category: 'Display',
		styles: '6',
		desc: 'Compressed capitals for headlines, posters, and wayfinding at scale.'
	}
]

/** Future Payload mapping: typeFamilyCards. */
export function Families() {
	return (
		<section id='families' className='px-5 py-16 sm:px-8 sm:py-24'>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						Type families
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Four families, one system
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-px [background:var(--line)] sm:grid-cols-2'>
					{families.map(f => (
						<article
							key={f.name}
							className='ty-reveal p-8 [background:var(--white)] sm:p-10'
						>
							<div className='flex items-baseline justify-between gap-4'>
								<h3 className='font-[family-name:var(--font-display)] text-xl'>
									{f.name}
								</h3>
								<span className='text-xs uppercase tracking-[0.14em] [color:var(--mute)]'>
									{f.category}
								</span>
							</div>
							<p className='mt-4 text-[var(--mute)] text-sm leading-relaxed'>
								{f.desc}
							</p>
							<p className='mt-6 text-xs [color:var(--gray)]'>
								{f.styles} styles ·{' '}
								<a
									href='#trial'
									className='underline-offset-2 [color:var(--red)] hover:underline'
								>
									Request trial
								</a>
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
