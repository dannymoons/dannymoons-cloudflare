const topics = [
	'CSRD and disclosure readiness',
	'Scope 3 and supply chain conversations',
	'Greenwashing risk and claim governance',
	'Board and investor Q&A preparation',
	'Culture change and internal advocacy',
	'Personal resilience and decision fatigue',
	'Net zero target setting and trade-offs',
	'Just transition and social dimensions',
	'Nature and biodiversity strategy',
	'Carbon markets and offset decisions'
]

/** Future Payload mapping: topicList. */
export function Topics() {
	return (
		<section id='topics' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='th-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--forest)]'>
						Topics we cover
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.1] [color:var(--ink)]'>
						Whatever keeps you up at night
					</h2>
					<p className='mt-4 text-sm leading-relaxed [color:var(--mute)] sm:text-base'>
						Every engagement is tailored, but these are the themes leaders raise
						most often in our sessions.
					</p>
				</div>

				<ul className='th-reveal mt-10 grid gap-3 sm:grid-cols-2'>
					{topics.map(t => (
						<li
							key={t}
							className='flex items-center gap-3 rounded-xl border border-[var(--line)] px-4 py-3 text-sm [background:color-mix(in_oklch,var(--wheat)_40%,var(--sage))]'
						>
							<span className='h-2 w-2 shrink-0 rounded-full [background:var(--forest)]' />
							{t}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
