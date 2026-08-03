import { Reveal } from './motion'

const faqs = [
	{
		q: 'Which models can I run?',
		a: 'Any open-weight model, plus your own fine-tunes. Push a container or a checkpoint and we handle compilation.'
	},
	{
		q: 'How does billing work?',
		a: 'Per GPU-second, metered to the millisecond, with hard spend caps. The hobby tier includes 50 free GPU-hours monthly.'
	},
	{
		q: 'Is my data private?',
		a: 'Yes. Weights and prompts never leave your tenancy, we retain nothing, and Enterprise can run in a private VPC.'
	},
	{
		q: 'What about cold starts?',
		a: 'Median cold start is 38ms thanks to pre-warmed pools and pinned, compiled artifacts.'
	}
]

/** Future Payload mapping: faqList. */
export function Faq() {
	return (
		<section className='px-5 py-24 sm:px-8'>
			<Reveal>
				<h2 className='mb-10 text-balance font-semibold text-[clamp(2rem,4vw,3.25rem)] leading-tight tracking-[-0.02em]'>
					Questions, answered.
				</h2>
			</Reveal>
			<div className='mx-auto max-w-3xl'>
				{faqs.map((f, i) => (
					<Reveal key={f.q} delay={i * 0.05}>
						<details className='group border-[var(--line)] border-b py-5'>
							<summary className='flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-lg'>
								{f.q}
								<span className='text-xl transition-transform duration-300 [color:var(--cyan)] group-open:rotate-45'>
									+
								</span>
							</summary>
							<p className='mt-3 max-w-2xl leading-relaxed [color:var(--ink-soft)]'>
								{f.a}
							</p>
						</details>
					</Reveal>
				))}
			</div>
		</section>
	)
}
