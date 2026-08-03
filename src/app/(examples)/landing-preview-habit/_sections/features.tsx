import { Bell, Heart, LineChart, Sparkles, Users, Wallet } from 'lucide-react'

const features = [
	{
		icon: Sparkles,
		title: 'AI habit coach',
		desc: 'Adaptive suggestions that learn from your completions, skips, and feedback.'
	},
	{
		icon: LineChart,
		title: 'Impact dashboard',
		desc: 'See your carbon, water, and waste savings in units that actually mean something.'
	},
	{
		icon: Bell,
		title: 'Smart nudges',
		desc: 'Context-aware reminders — not at 6am when you asked for evening check-ins.'
	},
	{
		icon: Users,
		title: 'Household mode',
		desc: 'Share progress with family or flatmates and split credit for group habits.'
	},
	{
		icon: Heart,
		title: 'Wellness check-ins',
		desc: 'Mood tracking links sustainability to wellbeing, not sacrifice.'
	},
	{
		icon: Wallet,
		title: 'Savings tracker',
		desc: 'Many green habits save money — we show both planet and pocket impact.'
	}
]

/** Future Payload mapping: featureGrid. */
export function Features() {
	return (
		<section
			id='features'
			className='px-5 py-20 [background:color-mix(in_oklch,var(--leaf)_5%,var(--cream))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Features
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						Everything you need. Nothing you don&apos;t.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Habit is built for real people with busy lives — not sustainability
						experts with unlimited time.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(f => (
						<article
							key={f.title}
							className='ha-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--cream)]'
						>
							<f.icon
								className='h-5 w-5 [color:var(--leaf)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
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
