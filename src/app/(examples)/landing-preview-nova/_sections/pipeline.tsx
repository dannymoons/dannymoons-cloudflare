import { Boxes, Globe, Zap } from 'lucide-react'

import { Reveal } from './motion'

const pipeline = [
	{
		icon: Boxes,
		t: 'Bring your model',
		d: 'Any framework — push a container or a checkpoint.'
	},
	{
		icon: Zap,
		t: 'Compile & warm',
		d: 'We quantize, compile and pin it to fast hardware.'
	},
	{
		icon: Globe,
		t: 'Serve worldwide',
		d: 'One endpoint, auto-scaled across 14 regions.'
	}
]

/** Future Payload mapping: pipelineSteps. */
export function Pipeline() {
	return (
		<section id='pipeline' className='px-5 py-24 sm:px-8'>
			<Reveal>
				<span className='font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] [color:var(--cyan)]'>
					The pipeline
				</span>
				<h2 className='mt-4 max-w-2xl text-balance font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em]'>
					From checkpoint to global endpoint in three moves.
				</h2>
			</Reveal>
			<div className='relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3'>
				<div
					aria-hidden
					className='absolute top-7 right-[16%] left-[16%] hidden h-px [background:linear-gradient(90deg,transparent,var(--cyan),var(--violet),transparent)] md:block'
				/>
				{pipeline.map((p, i) => {
					const Icon = p.icon
					return (
						<Reveal key={p.t} delay={i * 0.1}>
							<div className='relative rounded-2xl border border-[var(--line)] p-7 backdrop-blur-sm [background:color-mix(in_oklch,var(--space-2)_60%,transparent)]'>
								<div className='flex items-center justify-between'>
									<span className='grid h-12 w-12 place-items-center rounded-xl [background:linear-gradient(135deg,var(--cyan),var(--violet))] [color:var(--space)]'>
										<Icon className='h-5 w-5' />
									</span>
									<span className='font-[family-name:var(--font-mono)] text-sm [color:var(--ink-soft)]'>
										0{i + 1}
									</span>
								</div>
								<h3 className='mt-5 font-semibold text-xl tracking-tight'>
									{p.t}
								</h3>
								<p className='mt-2 leading-relaxed [color:var(--ink-soft)]'>
									{p.d}
								</p>
							</div>
						</Reveal>
					)
				})}
			</div>
		</section>
	)
}
