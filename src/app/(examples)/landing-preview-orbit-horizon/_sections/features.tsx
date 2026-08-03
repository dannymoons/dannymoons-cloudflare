import {
	AlertTriangle,
	BarChart3,
	Code2,
	Download,
	Globe2,
	Users
} from 'lucide-react'

const features = [
	{
		icon: BarChart3,
		title: 'Page-level tracking',
		desc: 'Measure grams CO₂ per visit on every URL — homepage to long-tail blog posts.'
	},
	{
		icon: Globe2,
		title: 'Multi-site',
		desc: 'Monitor marketing, commerce, and docs properties from one dashboard.'
	},
	{
		icon: AlertTriangle,
		title: 'Alerts',
		desc: 'Threshold notifications when pages exceed your carbon budget.'
	},
	{
		icon: Download,
		title: 'Export',
		desc: 'CSV and PDF reports for sustainability audits and stakeholder updates.'
	},
	{
		icon: Code2,
		title: 'API',
		desc: 'REST endpoints to pull emissions data into your BI stack or data warehouse.'
	},
	{
		icon: Users,
		title: 'Team',
		desc: 'Role-based access for engineers, sustainability leads, and executives.'
	}
]

/** Future Payload mapping: featureGrid. */
export function Features() {
	return (
		<section
			id='features'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--sage)_10%,var(--parchment))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='mb-12 text-center'>
					<span className='oh-reveal mb-3 block font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.24em] [color:var(--olive)]'>
						Features
					</span>
					<h2 className='oh-reveal font-[family-name:var(--font-display)] font-semibold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] [color:var(--ink)]'>
						Everything sustainability teams need
					</h2>
				</div>

				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(f => (
						<article
							key={f.title}
							className='oh-reveal group border-2 border-[var(--ink)] p-5 [background:var(--panel)] sm:p-6'
						>
							<span className='grid h-10 w-10 place-items-center border border-[var(--ink)]'>
								<f.icon className='h-5 w-5 [color:var(--olive)]' />
							</span>
							<h3 className='mt-4 font-[family-name:var(--font-display)] font-semibold text-lg [color:var(--ink)]'>
								{f.title}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{f.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
