import {
	Command,
	GitPullRequest,
	Layers,
	Sparkles,
	Timer,
	Zap
} from 'lucide-react'

const features = [
	{
		icon: Zap,
		title: 'Built for speed',
		body: 'Every interaction is instant — optimistic UI, offline-ready, zero spinners.'
	},
	{
		icon: Command,
		title: 'Command everything',
		body: 'A keyboard-first command bar gets you anywhere in two keystrokes.'
	},
	{
		icon: Sparkles,
		title: 'AI triage',
		body: 'Auto-label, dedupe and assign incoming issues with one model call.'
	},
	{
		icon: GitPullRequest,
		title: 'Git that syncs',
		body: 'PRs, branches and commits link to issues automatically across providers.'
	},
	{
		icon: Layers,
		title: 'Projects & cycles',
		body: 'Plan in cycles, group in projects, and watch progress roll up live.'
	},
	{
		icon: Timer,
		title: 'SLA & insights',
		body: 'Track time-to-resolution and team velocity without spreadsheets.'
	}
]

/** Future Payload mapping: featureCards. */
export function Features() {
	return (
		<section id='features' className='mx-auto max-w-6xl px-gutter py-section'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='font-semibold text-3xl tracking-tight sm:text-4xl'>
					Everything your team needs to ship
				</h2>
				<p className='mt-4 text-muted-foreground leading-relaxed'>
					Powerful where it counts, invisible everywhere else.
				</p>
			</div>
			<div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				{features.map(f => {
					const Icon = f.icon
					return (
						<div
							key={f.title}
							className='rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md'
						>
							<span className='grid h-10 w-10 place-items-center rounded-lg bg-muted text-primary'>
								<Icon className='h-5 w-5' />
							</span>
							<h3 className='mt-4 font-medium text-lg'>{f.title}</h3>
							<p className='mt-2 text-muted-foreground text-sm leading-relaxed'>
								{f.body}
							</p>
						</div>
					)
				})}
			</div>
		</section>
	)
}
