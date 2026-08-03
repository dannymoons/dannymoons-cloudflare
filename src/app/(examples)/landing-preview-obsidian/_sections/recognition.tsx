const awards = [
	{ org: 'Awwwards', detail: 'Site of the Day ×7', year: '2021–25' },
	{ org: 'FWA', detail: 'FWA of the Day ×5', year: '2020–24' },
	{ org: 'CSS Design Awards', detail: 'Best UI/UX', year: '2023' },
	{ org: 'Webby', detail: 'Honoree — Visual Design', year: '2022' }
]

/** Future Payload mapping: awardsList. */
export function Recognition() {
	return (
		<section id='awards' className='px-5 py-20 sm:px-8 sm:py-28'>
			<span className='ob-reveal mb-8 block font-[family-name:var(--font-mono)] text-[var(--amber)] text-xs uppercase tracking-[0.3em]'>
				(Recognition)
			</span>
			<ul>
				{awards.map(a => (
					<li
						key={a.org}
						className='ob-reveal grid grid-cols-12 items-baseline gap-4 border-[var(--line)] border-t py-6 last:border-b'
					>
						<span className='col-span-6 font-bold text-2xl tracking-tight sm:col-span-4 sm:text-3xl'>
							{a.org}
						</span>
						<span className='col-span-6 text-[var(--mute)] sm:col-span-6'>
							{a.detail}
						</span>
						<span className='col-span-12 font-[family-name:var(--font-mono)] text-[var(--mute)] text-xs sm:col-span-2 sm:text-right'>
							{a.year}
						</span>
					</li>
				))}
			</ul>
		</section>
	)
}
