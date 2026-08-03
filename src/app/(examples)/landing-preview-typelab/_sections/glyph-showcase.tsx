const glyphs = [
	'Aa',
	'Bb',
	'Cc',
	'Dd',
	'Ee',
	'Ff',
	'Gg',
	'Hh',
	'Ii',
	'Jj',
	'Kk',
	'Ll',
	'Mm',
	'Nn',
	'Oo',
	'Pp',
	'Qq',
	'Rr',
	'Ss',
	'Tt',
	'Uu',
	'Vv',
	'Ww',
	'Xx',
	'Yy',
	'Zz',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5'
]

/** Future Payload mapping: glyphGrid (character set preview). */
export function GlyphShowcase() {
	return (
		<section
			id='glyph-showcase'
			className='border-[var(--line)] border-t px-5 py-16 [background:var(--ink)] [color:var(--white)] sm:px-8 sm:py-24'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ty-reveal mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
					<div>
						<p className='text-xs uppercase tracking-[0.2em] [color:var(--red)]'>
							Glyph showcase
						</p>
						<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)]'>
							Aa Bb Cc
						</h2>
					</div>
					<p className='max-w-xs text-sm opacity-60'>
						Lab Grotesk · Upper &amp; lowercase pairs at 72pt equivalent
					</p>
				</div>

				<div className='ty-reveal grid grid-cols-4 gap-px [background:var(--line)] sm:grid-cols-6 md:grid-cols-8'>
					{glyphs.map(g => (
						<div
							key={g}
							className='flex aspect-square items-center justify-center font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,2.5rem)] [background:var(--ink)]'
						>
							{g}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
