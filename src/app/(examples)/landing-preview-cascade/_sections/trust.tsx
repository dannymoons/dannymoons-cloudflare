import { Award, Lock, ShieldCheck, Verified } from 'lucide-react'

const badges = [
	{
		icon: ShieldCheck,
		title: 'SOC 2 Type II',
		desc: 'Annual audits with continuous monitoring for enterprise agency clients.'
	},
	{
		icon: Lock,
		title: 'Data sovereignty',
		desc: 'EU and US data residency options with customer-managed encryption keys.'
	},
	{
		icon: Verified,
		title: 'Methodology verified',
		desc: 'GHG Protocol and CDP Supply Chain alignment reviewed by independent auditors.'
	},
	{
		icon: Award,
		title: 'Industry recognition',
		desc: '2025 Adweek Tech Stack Award · Cannes Lions Sustainable Innovation shortlist.'
	}
]

/** Future Payload mapping: trustSignals. */
export function Trust() {
	return (
		<section id='trust' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ca-reveal mx-auto max-w-2xl text-center'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--pine)]'>
						Trust &amp; security
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Built for agencies handling sensitive client data.
					</h2>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
					{badges.map(b => (
						<article
							key={b.title}
							className='ca-reveal rounded-sm border border-[var(--line)] p-6 text-center'
						>
							<b.icon
								className='mx-auto h-6 w-6 [color:var(--pine)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-lg [color:var(--ink)]'>
								{b.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{b.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
