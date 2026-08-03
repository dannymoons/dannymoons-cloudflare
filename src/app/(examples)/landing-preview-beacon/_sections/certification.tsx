import { CheckCircle, FileText, Scale, Stamp } from 'lucide-react'

const deliverables = [
	{
		icon: FileText,
		title: 'BIA completion support',
		desc: 'Guided completion of all 200+ B Impact Assessment questions with evidence documentation.'
	},
	{
		icon: Scale,
		title: 'Legal requirement amendment',
		desc: 'Support for Benefit Corporation structure or equivalent stakeholder governance clauses.'
	},
	{
		icon: Stamp,
		title: 'Verification preparation',
		desc: 'Mock audits, document organisation, and analyst Q&A rehearsal before B Lab review.'
	},
	{
		icon: CheckCircle,
		title: 'Certification & launch',
		desc: 'Public certification coordination, press support, and stakeholder announcement templates.'
	}
]

/** Future Payload mapping: certificationServices. */
export function Certification() {
	return (
		<section
			id='certification'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--gold)_6%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='be-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--gold)]'>
						Certification services
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						End-to-end support through verification.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Beacon handles the complexity so your team stays focused on running
						the business — while building the impact infrastructure that
						certification requires.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2'>
					{deliverables.map(d => (
						<article
							key={d.title}
							className='be-reveal rounded-sm border border-[var(--line)] p-6 [background:var(--cream)]'
						>
							<d.icon
								className='h-5 w-5 [color:var(--forest)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{d.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{d.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
