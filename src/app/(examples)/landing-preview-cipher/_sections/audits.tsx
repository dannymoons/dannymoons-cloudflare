const audits = [
	{
		firm: 'Cure53',
		scope: 'Client apps (iOS, Android, Desktop)',
		date: 'Mar 2025',
		findings: '2 low, 0 critical — all remediated'
	},
	{
		firm: 'NCC Group',
		scope: 'Cipher Protocol 2.0 implementation',
		date: 'Nov 2024',
		findings: 'Formal verification of ratchet state machine'
	},
	{
		firm: 'Trail of Bits',
		scope: 'Relay infrastructure & ops',
		date: 'Jun 2024',
		findings: 'Hardening recommendations applied'
	}
]

/** Future Payload mapping: auditLog (third-party). */
export function Audits() {
	return (
		<section
			id='audits'
			className='border-[var(--line)] border-y px-5 py-20 [background:color-mix(in_oklch,var(--panel)_35%,var(--void))] sm:px-8 sm:py-28'
		>
			<div className='mx-auto max-w-5xl'>
				<div className='cf-reveal max-w-xl'>
					<span className='font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.24em] [color:var(--green)]'>
						Audits
					</span>
					<h2 className='mt-3 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] [color:var(--text)]'>
						Independently reviewed
					</h2>
					<p className='mt-4 text-sm [color:var(--mute)]'>
						Reports published in full. No security-through-obscurity — find us
						before the attackers do.
					</p>
				</div>

				<ul className='mt-10 space-y-4'>
					{audits.map(a => (
						<li
							key={a.firm}
							className='cf-reveal flex flex-col gap-3 rounded border border-[var(--line)] p-5 [background:var(--panel)] sm:flex-row sm:items-center sm:justify-between'
						>
							<div>
								<h3 className='font-[family-name:var(--font-display)] text-sm [color:var(--text)]'>
									{a.firm}
								</h3>
								<p className='mt-1 text-sm [color:var(--mute)]'>{a.scope}</p>
							</div>
							<div className='text-left sm:text-right'>
								<p className='font-[family-name:var(--font-display)] text-[10px] uppercase tracking-widest [color:var(--green)]'>
									{a.date}
								</p>
								<p className='mt-1 text-xs [color:var(--mute)]'>{a.findings}</p>
							</div>
						</li>
					))}
				</ul>

				<p className='cf-reveal mt-8 text-xs [color:var(--mute)]'>
					Bug bounty: up to $50,000 for critical vulnerabilities ·{' '}
					<a href='#top' className='[color:var(--green)] hover:underline'>
						security@cipher.app
					</a>
				</p>
			</div>
		</section>
	)
}
