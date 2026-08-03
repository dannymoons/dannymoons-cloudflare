import {
	Building2,
	Gavel,
	Landmark,
	Scale,
	Shield,
	TrendingUp
} from 'lucide-react'

const areas = [
	{
		icon: Scale,
		title: 'Commercial litigation',
		desc: 'Contract disputes, shareholder conflicts, and fiduciary breach across complex corporate structures.'
	},
	{
		icon: Gavel,
		title: 'International arbitration',
		desc: 'ICC, LCIA, and ad hoc proceedings with counsel experienced in multi-jurisdictional enforcement.'
	},
	{
		icon: Shield,
		title: 'Regulatory defence',
		desc: 'FCA, SFO, and cross-border investigations — from dawn raids to negotiated resolutions.'
	},
	{
		icon: Building2,
		title: 'Insolvency & restructuring',
		desc: 'Contested administrations, scheme of arrangement challenges, and creditor priority disputes.'
	},
	{
		icon: TrendingUp,
		title: 'Securities & fraud',
		desc: 'Market manipulation, misrepresentation claims, and director liability in listed entities.'
	},
	{
		icon: Landmark,
		title: 'Judicial review',
		desc: 'Challenges to regulatory decisions, procurement awards, and public authority conduct.'
	}
]

/** Future Payload mapping: serviceGrid. */
export function PracticeAreas() {
	return (
		<section
			id='practice-areas'
			className='border-[var(--line)] border-t px-5 py-20 sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ax-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--copper)]'>
						Practice areas
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06] [color:var(--stone)]'>
						Depth where it matters. Restraint everywhere else.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						We accept fewer than forty active matters per year — each led by a
						named partner from instruction to resolution.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{areas.map(a => (
						<article
							key={a.title}
							className='ax-reveal group rounded-sm border border-[var(--line)] p-6 transition-colors hover:border-[var(--copper)]/40'
						>
							<a.icon
								className='h-5 w-5 [color:var(--copper)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--stone)]'>
								{a.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{a.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
