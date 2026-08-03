const tools = [
	{
		name: 'Claim Register',
		type: 'Template',
		desc: 'Spreadsheet and Notion templates for tracking claim text, evidence links, and approval status.'
	},
	{
		name: 'Brief Carbon Addendum',
		type: 'Document',
		desc: 'Agency-ready appendix for campaign briefs with emission categories and reduction targets.'
	},
	{
		name: 'Stakeholder Matrix',
		type: 'Workshop',
		desc: 'Facilitation guide for mapping investor, consumer, and regulator messaging priorities.'
	},
	{
		name: 'Disclosure Checklist',
		type: 'Checklist',
		desc: 'CSRD-aligned checklist for sustainability claims in annual reports and investor decks.'
	},
	{
		name: 'Crisis Playbook',
		type: 'Guide',
		desc: 'Escalation paths and holding statements for greenwashing allegations or regulatory inquiry.'
	},
	{
		name: 'Agency Scorecard',
		type: 'Scorecard',
		desc: 'Quarterly assessment rubric for creative partners on sustainability compliance.'
	}
]

/** Future Payload mapping: resourceToolkit. */
export function Toolkit() {
	return (
		<section id='toolkit' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rl-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--teal)]'>
						Toolkit
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--navy)]'>
						Practical assets your team can use Monday
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Every Rootline engagement includes access to our growing library of
						templates, checklists, and workshop materials.
					</p>
				</div>

				<div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{tools.map(t => (
						<article
							key={t.name}
							className='rl-reveal rounded-sm border border-[var(--line)] p-5 transition-colors hover:border-[var(--teal)]'
						>
							<span className='text-xs uppercase tracking-[0.18em] [color:var(--teal)]'>
								{t.type}
							</span>
							<h3 className='mt-2 font-[family-name:var(--font-display)] text-lg [color:var(--navy)]'>
								{t.name}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{t.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
