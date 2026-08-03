import {
	Bike,
	Droplets,
	Recycle,
	ShoppingBag,
	Utensils,
	Zap
} from 'lucide-react'

const habits = [
	{
		icon: Utensils,
		title: 'Plant-forward meals',
		impact: '−2.4 kg CO₂e / week',
		desc: 'Swap one meat meal for a seasonal plant dish — with recipe suggestions.'
	},
	{
		icon: Bike,
		title: 'Active commute',
		impact: '−1.8 kg CO₂e / trip',
		desc: 'Walk, cycle, or transit for trips under 5 km with gentle reminders.'
	},
	{
		icon: ShoppingBag,
		title: 'Mindful consumption',
		impact: '−0.9 kg CO₂e / purchase',
		desc: '30-day pause rule before non-essential buys with alternative ideas.'
	},
	{
		icon: Droplets,
		title: 'Water wisdom',
		impact: '−12 L / day',
		desc: 'Shorter showers, full laundry loads, and leak detection tips.'
	},
	{
		icon: Recycle,
		title: 'Circular habits',
		impact: '−3.2 kg waste / month',
		desc: 'Repair, reuse, and local recycling guides tailored to your postcode.'
	},
	{
		icon: Zap,
		title: 'Energy moments',
		impact: '−5% bill reduction',
		desc: 'Off-peak usage nudges and smart thermostat integration.'
	}
]

/** Future Payload mapping: habitGrid. */
export function Habits() {
	return (
		<section id='habits' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='ha-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--leaf)]'>
						Habits library
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] leading-[1.06] [color:var(--ink)]'>
						120+ habits, personalised to your life.
					</h2>
					<p className='mt-4 text-base leading-relaxed [color:var(--mute)]'>
						Choose from curated categories or let Habit suggest actions based on
						your lifestyle quiz, location, and current streak.
					</p>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{habits.map(h => (
						<article
							key={h.title}
							className='ha-reveal rounded-2xl border border-[var(--line)] p-6 transition-colors [background:var(--cream)] hover:border-[color-mix(in_oklch,var(--leaf)_35%,transparent)]'
						>
							<h.icon
								className='h-5 w-5 [color:var(--leaf)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl [color:var(--ink)]'>
								{h.title}
							</h3>
							<p className='mt-1 font-medium text-xs [color:var(--leaf)]'>
								{h.impact}
							</p>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{h.desc}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
