import {
	Banknote,
	Globe,
	PiggyBank,
	ShieldCheck,
	Sparkles,
	Zap
} from 'lucide-react'

const features = [
	{
		icon: Globe,
		t: 'Multi-currency',
		d: 'Hold and exchange 30+ currencies at the real rate.'
	},
	{
		icon: Zap,
		t: 'Instant transfers',
		d: 'Send money to anyone in seconds, day or night.'
	},
	{
		icon: PiggyBank,
		t: 'Smart savings',
		d: 'Round-ups and pots that grow your balance on autopilot.'
	},
	{
		icon: Banknote,
		t: 'No hidden fees',
		d: 'Transparent pricing. What you see is what you pay.'
	},
	{
		icon: Sparkles,
		t: 'Insights',
		d: 'See where your money goes with automatic categories.'
	},
	{
		icon: ShieldCheck,
		t: 'Always protected',
		d: 'Freeze your card and get alerts the moment you spend.'
	}
]

/** Future Payload mapping: featureGrid. */
export function Features() {
	return (
		<section id='features' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='va-reveal max-w-xl'>
					<h2 className='font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
						Everything your bank forgot.
					</h2>
					<p className='mt-4 text-[var(--mute)] text-lg'>
						One app for spending, saving and sending — designed for how you
						actually live.
					</p>
				</div>
				<div className='mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{features.map(f => (
						<div
							key={f.t}
							className='va-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--panel)]'
						>
							<span className='grid h-11 w-11 place-items-center rounded-xl [background:var(--panel-2)] [color:var(--mint)]'>
								<f.icon className='h-5 w-5' />
							</span>
							<h3 className='mt-5 font-semibold text-lg'>{f.t}</h3>
							<p className='mt-2 text-[var(--mute)] text-sm leading-relaxed'>
								{f.d}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
