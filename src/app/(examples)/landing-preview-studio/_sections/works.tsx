import { SectionHeading } from './section-heading'

const works = [
	{ n: '01', name: 'Casa Liminal', place: 'Lisboa, PT', year: '2025' },
	{ n: '02', name: 'The Quiet House', place: 'Utrecht, NL', year: '2024' },
	{ n: '03', name: 'Pavilion Nº7', place: 'Kyoto, JP', year: '2024' },
	{ n: '04', name: 'Stone & Light', place: 'Oslo, NO', year: '2023' },
	{ n: '05', name: 'Atelier Vellum', place: 'Antwerpen, BE', year: '2023' },
	{ n: '06', name: 'House on the Dune', place: 'Sylt, DE', year: '2022' }
]

/** Future Payload mapping: workIndex. */
export function Works() {
	return (
		<section id='work' className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<SectionHeading
				eyebrow='Selected'
				title='Selected work'
				meta='2022 — 2025'
			/>
			<ul>
				{works.map(w => (
					<li
						key={w.n}
						className='mrd-reveal group border-[var(--line)] border-t last:border-b'
					>
						<a
							href='#work'
							className='grid grid-cols-12 items-center gap-4 py-6 transition-colors duration-300 hover:[background:color-mix(in_oklch,var(--clay)_6%,transparent)]'
						>
							<span className='col-span-2 font-[family-name:var(--font-display)] text-[var(--ink-soft)] text-sm sm:col-span-1'>
								{w.n}
							</span>
							<span className='col-span-7 font-[family-name:var(--font-display)] text-2xl tracking-tight transition-all duration-300 group-hover:translate-x-2 sm:col-span-6 sm:text-4xl'>
								{w.name}
							</span>
							<span className='col-span-3 hidden text-[var(--ink-soft)] text-sm sm:col-span-3 sm:block'>
								{w.place}
							</span>
							<span className='col-span-3 text-right text-[var(--ink-soft)] text-sm sm:col-span-2'>
								{w.year}
							</span>
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}
