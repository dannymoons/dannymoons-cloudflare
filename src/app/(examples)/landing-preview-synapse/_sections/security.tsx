import { EyeOff, KeyRound, Lock } from 'lucide-react'

const pillars = [
	{
		icon: Lock,
		t: 'End-to-end encryption',
		d: 'TLS 1.3 in transit, AES-256 at rest. Customer-managed keys on Enterprise.'
	},
	{
		icon: EyeOff,
		t: 'Zero retention',
		d: 'Prompts and completions never stored by default — ephemeral inference only.'
	},
	{
		icon: KeyRound,
		t: 'Scoped access',
		d: 'Fine-grained API keys, IP allowlists and audit logs for every synaptic call.'
	}
]

/** Future Payload mapping: securityPillars. */
export function Security() {
	return (
		<section
			id='security'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--void)_50%,transparent)] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='rounded-2xl p-px [background:linear-gradient(135deg,var(--pulse),var(--neon),var(--pulse))]'>
					<div className='rounded-2xl p-8 [background:var(--panel)] sm:p-12'>
						<span className='sy-reveal mb-3 block text-[11px] uppercase tracking-[0.24em] [color:var(--neon)]'>
							Security
						</span>
						<h2 className='sy-reveal font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
							Your thoughts stay yours
						</h2>
						<p className='sy-reveal mt-4 max-w-xl text-sm leading-relaxed [color:var(--mute)]'>
							Built for teams that cannot afford data leakage — privacy is not a
							feature flag, it is the default architecture.
						</p>

						<ul className='mt-10 grid gap-4 sm:grid-cols-3'>
							{pillars.map(p => {
								const Icon = p.icon
								return (
									<li
										key={p.t}
										className='sy-reveal rounded-xl border border-[color-mix(in_oklch,var(--neon)_15%,var(--line))] p-5'
									>
										<Icon className='h-5 w-5 [color:var(--neon)]' />
										<h3 className='mt-3 font-[family-name:var(--font-display)] font-medium'>
											{p.t}
										</h3>
										<p className='mt-2 text-sm leading-relaxed [color:var(--mute)]'>
											{p.d}
										</p>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
