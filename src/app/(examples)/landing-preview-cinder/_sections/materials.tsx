const materials = [
	{
		name: 'Shigaraki stoneware',
		type: 'Clay body',
		desc: 'High-iron clay from Shiga prefecture. Fires to warm terracotta with natural speckle.'
	},
	{
		name: 'Porcelain slip',
		type: 'Clay body',
		desc: 'Fine kaolin for hakeme brushwork and translucent tea bowls at cone 10.'
	},
	{
		name: 'Shino glaze',
		type: 'Glaze',
		desc: 'Feldspar, rice ash, and local cedar ash. Crawls and pinholes embraced, not hidden.'
	},
	{
		name: 'Tenmoku',
		type: 'Glaze',
		desc: 'Iron-rich black that breaks to rust at edges. Each pot records where it sat in the chamber.'
	}
]

/** Future Payload mapping: materialsList. */
export function Materials() {
	return (
		<section
			id='materials'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--clay)_10%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Clay & glaze
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Earth, ash, and chemistry
					</h2>
				</div>

				<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] [background:var(--line)] sm:grid-cols-2'>
					{materials.map(m => (
						<div
							key={m.name}
							className='ci-reveal p-6 [background:var(--paper)] sm:p-8'
						>
							<p className='text-xs tracking-[0.2em] [color:var(--ember)]'>
								{m.type}
							</p>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-2xl [color:var(--ash)]'>
								{m.name}
							</h3>
							<p className='mt-3 max-w-sm text-sm leading-relaxed [color:var(--mute)]'>
								{m.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
