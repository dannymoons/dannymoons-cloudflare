const workshops = [
	{
		title: 'Introduction to the wheel',
		duration: '3 hours',
		level: 'Beginner',
		price: '€85',
		desc: 'Center, pull, and trim your first bowl. All clay and firing included.'
	},
	{
		title: 'Ash glaze weekend',
		duration: '2 days',
		level: 'Intermediate',
		price: '€240',
		desc: 'Mix glazes, load the noborigama, and witness a full firing cycle.'
	},
	{
		title: 'Tea ceremony forms',
		duration: '1 day',
		level: 'Advanced',
		price: '€165',
		desc: 'Chawan, mizusashi, and hanaire — vessels shaped for ritual and restraint.'
	}
]

/** Future Payload mapping: workshopCards. */
export function Workshops() {
	return (
		<section
			id='workshops'
			className='border-[var(--line)] border-t px-5 py-20 [background:color-mix(in_oklch,var(--clay)_8%,var(--paper))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ci-reveal mb-10 max-w-2xl'>
					<p className='font-medium text-sm tracking-[0.18em] [color:var(--ember)]'>
						Studio workshops
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,3rem)] [color:var(--ash)]'>
						Learn beside the kiln
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Small groups of six. Morning tea, afternoon throwing, evening fire
						watch. Materials and bisque firing included in every session.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
					{workshops.map(w => (
						<article
							key={w.title}
							className='ci-reveal flex flex-col rounded-sm border border-[var(--line)] p-6 [background:var(--paper)]'
						>
							<div className='flex flex-wrap items-center gap-2 text-xs tracking-wide [color:var(--mute)]'>
								<span>{w.duration}</span>
								<span aria-hidden>·</span>
								<span>{w.level}</span>
							</div>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ash)]'>
								{w.title}
							</h3>
							<p className='mt-3 flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								{w.desc}
							</p>
							<div className='mt-6 flex items-center justify-between gap-4'>
								<span className='font-medium [color:var(--ember)]'>
									{w.price}
								</span>
								<a
									href='#contact'
									className='inline-flex min-h-12 items-center rounded-sm px-4 font-medium text-sm transition-opacity [background:var(--ember)] [color:var(--paper)] hover:opacity-90'
								>
									Book
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
