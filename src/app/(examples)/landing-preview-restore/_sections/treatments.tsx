import {
	Activity,
	Baby,
	Briefcase,
	HeartPulse,
	Scissors,
	Waves
} from 'lucide-react'

const treatments = [
	{
		icon: Activity,
		t: 'Sports rehab',
		d: 'ACL recovery, rotator cuff repair, and return-to-play protocols for athletes at every level.'
	},
	{
		icon: Scissors,
		t: 'Post-op',
		d: 'Structured rehabilitation after joint replacement, spinal surgery, and soft-tissue repair.'
	},
	{
		icon: HeartPulse,
		t: 'Chronic pain',
		d: 'Graded exposure, movement re-education, and pain neuroscience for lasting relief.'
	},
	{
		icon: Waves,
		t: 'Vestibular',
		d: 'Canalith repositioning, gaze stabilisation, and balance retraining for inner-ear disorders.'
	},
	{
		icon: Baby,
		t: 'Pediatric',
		d: 'Developmental motor skills, torticollis, and sports injury care for children and teens.'
	},
	{
		icon: Briefcase,
		t: 'Workplace',
		d: 'Ergonomic assessment, RSI management, and return-to-work programmes for desk and manual roles.'
	}
]

/** Future Payload mapping: serviceGrid. */
export function Treatments() {
	return (
		<section id='treatments' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto max-w-6xl'>
				<div className='rs-reveal max-w-2xl'>
					<p className='text-xs uppercase tracking-[0.28em] [color:var(--ocean)]'>
						Specialisations
					</p>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] leading-[1.06]'>
						Treatment areas
					</h2>
				</div>

				<div className='mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{treatments.map(item => (
						<div
							key={item.t}
							className='rs-reveal rounded-2xl border border-[var(--line)] p-6 transition-colors hover:border-[var(--ocean)]/30'
						>
							<item.icon
								className='h-6 w-6 [color:var(--ocean)]'
								strokeWidth={1.5}
							/>
							<h3 className='mt-4 font-[family-name:var(--font-display)] text-xl'>
								{item.t}
							</h3>
							<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
								{item.d}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
