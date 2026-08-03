import { Fingerprint, Lock, ShieldCheck, Snowflake } from 'lucide-react'

const points = [
	{
		icon: Lock,
		t: 'Bank-grade encryption',
		d: 'Every transaction is protected end to end.'
	},
	{
		icon: Fingerprint,
		t: 'Biometric login',
		d: 'Only you can open your account with Face ID.'
	},
	{
		icon: Snowflake,
		t: 'Freeze in one tap',
		d: 'Lost your card? Freeze it instantly from the app.'
	},
	{
		icon: ShieldCheck,
		t: 'Deposits protected',
		d: 'Your money is safeguarded up to €100,000.'
	}
]

/** Future Payload mapping: securityFeature. */
export function Security() {
	return (
		<section id='security' className='px-5 py-20 sm:px-8 sm:py-28'>
			<div className='mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2'>
				<div className='va-reveal'>
					<span className='text-sm uppercase tracking-widest [color:var(--mint)]'>
						Security
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] font-bold text-[clamp(2rem,5vw,3.25rem)] tracking-[-0.02em]'>
						Safe by design.
					</h2>
					<p className='mt-4 max-w-md text-[var(--mute)] text-lg'>
						We treat your money like it&rsquo;s our own — with the same security
						the biggest banks rely on, minus the queues.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{points.map(p => (
						<div
							key={p.t}
							className='va-reveal rounded-2xl border border-[var(--line)] p-6 [background:var(--panel)]'
						>
							<p.icon className='h-6 w-6 [color:var(--mint)]' />
							<h3 className='mt-4 font-semibold'>{p.t}</h3>
							<p className='mt-1.5 text-[var(--mute)] text-sm leading-relaxed'>
								{p.d}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
