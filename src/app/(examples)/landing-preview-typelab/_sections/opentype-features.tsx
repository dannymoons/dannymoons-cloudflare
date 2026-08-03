const features = [
	{
		tag: 'liga',
		name: 'Standard ligatures',
		example: 'fi fl ff',
		desc: 'Common letter combinations merged for even colour in running text.'
	},
	{
		tag: 'ss01',
		name: 'Single-storey a',
		example: 'a alternate',
		desc: 'Stylistic set one — circular a for a friendlier text rhythm.'
	},
	{
		tag: 'tnum',
		name: 'Tabular figures',
		example: '0123456789',
		desc: 'Fixed-width numerals for tables, dashboards, and financial data.'
	},
	{
		tag: 'case',
		name: 'Case-sensitive forms',
		example: '( [ {',
		desc: 'Punctuation raised to align with all-caps headlines.'
	}
]

/** Future Payload mapping: opentypeFeatureList. */
export function OpentypeFeatures() {
	return (
		<section
			id='opentype-features'
			className='border-[var(--line)] border-t px-5 py-16 sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10'>
					<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
						OpenType features
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
						Built-in typographic control
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
					{features.map(f => (
						<article key={f.tag} className='ty-reveal'>
							<div className='flex items-baseline gap-3'>
								<code className='font-medium text-[var(--red)] text-xs uppercase tracking-wider'>
									{f.tag}
								</code>
								<h3 className='font-[family-name:var(--font-display)] text-lg'>
									{f.name}
								</h3>
							</div>
							<p className='mt-4 font-[family-name:var(--font-display)] text-2xl tracking-wide'>
								{f.example}
							</p>
							<p className='mt-3 text-[var(--mute)] text-sm leading-relaxed'>
								{f.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
