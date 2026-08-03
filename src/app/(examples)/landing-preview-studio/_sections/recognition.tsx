import { SectionHeading } from './section-heading'

const awards = [
	{
		year: '2025',
		name: 'Mies van der Rohe — Nomination',
		project: 'Casa Liminal'
	},
	{
		year: '2024',
		name: 'Dezeen Award — Interior of the Year',
		project: 'The Quiet House'
	},
	{ year: '2024', name: 'AJ Small Projects — Winner', project: 'Pavilion Nº7' },
	{ year: '2023', name: 'Wallpaper* Design Award', project: 'Stone & Light' }
]

const clients = ['Vitra', 'Kvadrat', 'Norm', 'Hay', 'Artek', '&Tradition']

/** Future Payload mapping: awardsList. */
export function Recognition() {
	return (
		<section className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<SectionHeading eyebrow='Recognition' title='Selected awards & press.' />
			<ul className='mb-16'>
				{awards.map(a => (
					<li
						key={a.name}
						className='mrd-reveal grid grid-cols-12 items-baseline gap-4 border-[var(--line)] border-t py-5 last:border-b'
					>
						<span className='col-span-2 font-[family-name:var(--font-display)] text-[var(--ink-soft)] text-sm'>
							{a.year}
						</span>
						<span className='col-span-7 text-base sm:col-span-7 sm:text-lg'>
							{a.name}
						</span>
						<span className='col-span-3 text-right text-[var(--ink-soft)] text-sm'>
							{a.project}
						</span>
					</li>
				))}
			</ul>
			<div className='mrd-reveal flex flex-wrap items-center gap-x-10 gap-y-4 border-[var(--line)] border-t pt-8'>
				<span className='text-[var(--ink-soft)] text-xs uppercase tracking-[0.25em]'>
					Trusted by
				</span>
				{clients.map(c => (
					<span
						key={c}
						className='font-[family-name:var(--font-display)] text-[var(--ink-soft)] text-lg'
					>
						{c}
					</span>
				))}
			</div>
		</section>
	)
}
