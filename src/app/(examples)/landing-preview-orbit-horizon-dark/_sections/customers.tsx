const quotes = [
	{
		text: 'Orbit gave us page-level visibility we never had. We cut our marketing site emissions 38% in one quarter — with data our board actually trusts.',
		name: 'Elena Vasquez',
		role: 'Head of Sustainability',
		company: 'Northwind Retail'
	},
	{
		text: 'Before Orbit, carbon reporting was a spreadsheet exercise. Now engineering gets Slack alerts when a deploy pushes a page over budget.',
		name: 'James Okonkwo',
		role: 'VP Engineering',
		company: 'Lattice Commerce'
	},
	{
		text: 'The Website Carbon methodology plus RUM was exactly what our CSRD audit needed. Export to PDF saved us weeks of manual work.',
		name: 'Sofia Lindström',
		role: 'ESG Programme Lead',
		company: 'Baltic Financial Group'
	}
]

/** Future Payload mapping: customerQuotes. */
export function Customers() {
	return (
		<section className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='ohd-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--ink)]'>
						Customers
					</span>
					<h2 className='ohd-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
						Trusted by sustainability leads
					</h2>
				</div>

				<div className='grid gap-6 sm:grid-cols-3'>
					{quotes.map(q => (
						<blockquote
							key={q.name}
							className='ohd-reveal flex flex-col border-2 border-[var(--stroke)] p-5 [background:var(--panel)] sm:p-6'
						>
							<p className='flex-1 text-sm leading-relaxed [color:var(--mute)]'>
								&ldquo;{q.text}&rdquo;
							</p>
							<footer className='mt-6 border-[var(--line)] border-t pt-4'>
								<cite className='not-italic'>
									<p className='font-[family-name:var(--font-display)] font-medium text-sm [color:var(--ink)]'>
										{q.name}
									</p>
									<p className='mt-0.5 font-[family-name:var(--font-body)] text-xs [color:var(--mute)]'>
										{q.role} · {q.company}
									</p>
								</cite>
							</footer>
						</blockquote>
					))}
				</div>
			</div>
		</section>
	)
}
