import { SectionHeading } from './section-heading'

const steps = [
	{
		n: '01',
		t: 'Listen',
		d: 'We begin in silence — understanding the site, the light and the lives that will fill the space.'
	},
	{
		n: '02',
		t: 'Sketch',
		d: 'A single line becomes a plan. We test proportion and material in physical models before pixels.'
	},
	{
		n: '03',
		t: 'Refine',
		d: 'Every junction is drawn at 1:1. The work is in what you will never consciously see.'
	},
	{
		n: '04',
		t: 'Build',
		d: 'We stay on site through completion, protecting the quiet intent of the drawing.'
	}
]

/** Future Payload mapping: processSteps. */
export function Approach() {
	return (
		<section id='approach' className='px-6 pt-24 sm:px-10 sm:pt-32'>
			<SectionHeading
				eyebrow='How we work'
				title='Four movements, one quiet whole.'
			/>
			<div className='grid grid-cols-1 gap-px overflow-hidden border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-4'>
				{steps.map(s => (
					<div
						key={s.n}
						className='mrd-reveal flex min-h-[220px] flex-col justify-between p-7 [background:var(--paper)]'
					>
						<span className='font-[family-name:var(--font-display)] text-[var(--ink-soft)] text-sm'>
							{s.n}
						</span>
						<div>
							<h3 className='font-[family-name:var(--font-display)] text-2xl tracking-tight'>
								{s.t}
							</h3>
							<p className='mt-3 text-[var(--ink-soft)] text-sm leading-relaxed'>
								{s.d}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
